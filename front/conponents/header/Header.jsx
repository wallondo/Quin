import "./header.css";


export default function Header(){
    return(
        <div className="header_component">
              <header className="components_sub">
                    <div>
                        <span className="log">
                            <img src="/log.png" alt="" />
                        </span>
                            <h2>Quinguri</h2>
                    </div>
                    <nav>
                        <ol>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#projetos">Projetos</a></li>
                            <li><a href="#experiencias">Experiencias</a></li>
                            <li><a href="#habilidades">Habilidades</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ol>
                    </nav>
              </header>
        </div>
    )
}