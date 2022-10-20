
export const Header = () => {
    return ( 
        <header aria-label="Header">

<div className="inset-x-0 top-0 z-50 border-b-2 border-black">
    <div className='bg-red-700 mx-auto max-w-screen-xl px-4'>
            <div className="flex h-16 items-center justify-between">
                <h1 className="text-white text-sm font-medium">Henrique Leme</h1>
            <div className="space-x-4 ml-10 flex justify-end items-center text-white">
                <nav aria-label="Page Nav" className="hidden sm:block">
                    <ul className="gap-4 flex">
                        <li>
                            <a className="block text-xs font-medium hover:opacity-75" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="block text-xs font-medium hover:opacity-75" href="#sobre-mim">Sobre Mim</a>
                        </li>
                        <li>
                            <a className="block text-xs font-medium hover:opacity-75" href="#projetos">Projetos</a>
                        </li>
                        <li>
                            <a className="block text-xs font-medium hover:opacity-75" href="#skils">Skilss</a>
                        </li>
                         <li>
                            <a className="block text-xs font-medium hover:opacity-75" href="#contato">Contato</a>
                         </li>
            
            </ul>
           </nav>
        <div className="flex flex-1 justify-end gap-4">
            <div className="flex items-center sm:hidden">
                <button className="inline-flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <span className="text-xs font-medium">Menu</span>
                </button>
            </div>
        </div>
            </div>
             </div>
    </div>
</div>
    </header>
    )
}