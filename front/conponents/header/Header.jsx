import { useEffect, useState } from "react";
import "./header.css";


export default function Header(){

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 731) {
            setIsMobile(true);
            console.log("sim")
            document.getElementById("option").classList.remove("off");
            document.getElementById("nav").classList.add("off")
        } else {
            setIsMobile(false); 
            console.log("não")
            document.getElementById("option").classList.add("off");
            document.getElementById("nav").classList.remove("off")
          }
        };
          window.addEventListener('resize', handleResize);
          handleResize();
         return () => window.removeEventListener('resize', handleResize);
       }, []);
    const mastrar = ()=>{
          document.getElementById("nav_responsive").classList.toggle("left")
    }
    
    return(
        <div className="header_component">
              <header className="components_sub">
                    <ol className="nav_responsive left" id="nav_responsive">
                       <li onClick={mastrar}><a href="#sobre">Sobre</a></li>
                       <li onClick={mastrar}><a href="#projetos">Projetos</a></li>
                       <li onClick={mastrar}><a href="#experiencias">Experiencias</a></li>
                       <li onClick={mastrar}><a href="#qualidades">Qualidades</a></li>
                       <li onClick={mastrar}><a href="#contato">Contato</a></li>
                    </ol>
                    <div>
                        <span className="log">
                            <img src="/log.png" alt="" />
                        </span>
                            <h2>Quinguri</h2>
                    </div>
                    <nav id="nav">
                        <ol>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#projetos">Projetos</a></li>
                            <li><a href="#experiencias">Experiencias</a></li>
                            <li><a href="#qualidades">Qualidades</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ol>
                    </nav>
                    <span className="option off" id="option" onClick={mastrar}><img src="/opt.png" alt="" /></span>
              </header>
        </div>
    )
}