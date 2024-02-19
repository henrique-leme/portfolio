import styles from "./style.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.contactsFooter}>
            <div>henrique-leme</div>
            <div>henrique-leme</div>
            <div>henrique.lb@outlook.com</div>
        </div>
        <div>
            Available for freelance oportunities
        </div>
      <div className={styles.mailerFooter}>
        <form action=""><div>Name</div>
        <div>Email<input type="Email" /></div>
        <div>Message</div></form>

      </div>
    </div>
  );
};
