import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IActiveLink {
  children: React.ReactNode;
  activeClassName?: string;
  href: string;
}

export const ActiveLink: React.FC<IActiveLink &
  React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, ...props }) => {
  const router = useRouter();
  let className = props.className || '';

  const { href, activeClassName } = props;

  if (router.pathname === href && activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  if (props.activeClassName) delete props['activeClassName'];

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};
