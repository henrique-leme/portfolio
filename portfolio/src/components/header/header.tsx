import styles from './header.module.css'


export const Header = () => {
    return ( 
        <header>
        <div className={styles.header}>
            <h1>Henrique Leme</h1>
            <a href="#home">Home</a>
            <a href="#sobre-mim">Sobre Mim</a>
            <a href="#projetos">Projetos</a>
            <a href="#skilss">Skilss</a>
            <a href="#contato">Contato</a>
        </div>
    </header>
    )
}