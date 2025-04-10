import { useState } from "react";
import "./main.css";

export default function Main(){
 
    const [projetos,setProjetos] = useState([
        {
            title:"Wallondo Manager",
            img:"/log.png",
            desc:"Um gerenciador de Lids e clientela , com o intuíto de gerir melhor e aproveitar o máximo possivel dos clientes",
            tecs:["js","html","css","php","mongo","sql"],
            link:"https://app.restang.com/projecto/"
            
        },
        {
            title:"Casa Mobiliar",
            img:"/log.png",
            desc:"Um gerenciador de Lids e clientela , com o intuíto de gerir melhor e aproveitar o máximo possivel dos clientes",
            tecs:["js","html","css","php","mongo","sql"],
            link:"https://app.restang.com/projecto/"
            
        },
        {
            title:"SMORT_Phone_SHOPING",
            img:"/log.png",
            desc:"Um gerenciador de Lids e clientela , com o intuíto de gerir melhor e aproveitar o máximo possivel dos clientes",
            tecs:["js","html","css","php","mongo","sql"],
            link:"https://app.restang.com/projecto/"
            
        },
        {
            title:"Lea Já",
            img:"/log.png",
            desc:"Um gerenciador de Lids e clientela , com o intuíto de gerir melhor e aproveitar o máximo possivel dos clientes",
            tecs:["js","html","css","php","mongo","sql"],
            link:"https://app.restang.com/projecto/"
            
        },
        {
            title:"Shoping Mobiliar",
            img:"/log.png",
            desc:"Um gerenciador de Lids e clientela , com o intuíto de gerir melhor e aproveitar o máximo possivel dos clientes",
            tecs:["js","html","css","php","mongo","sql"],
            link:"https://app.restang.com/projecto/"
            
        },
        {
            title:"SELL PHONE",
            img:"/log.png",
            desc:"Um gerenciador de Lids e clientela , com o intuíto de gerir melhor e aproveitar o máximo possivel dos clientes",
            tecs:["js","html","css","php","mongo","sql"],
            link:"https://app.restang.com/projecto/"
            
        }
    ])
 

    return(
        <div className="main_component">
            <main className="main_sub_component">
                <section className="main_sub_component_sec">
                    <h1>Olá, eu sou o <br /> <span className="name">Quinguri</span></h1>
                    <small>Sadraque <span className="name">Quinguri</span></small>
                    <h2>Desenvolvedor Frontend, Vamos trabalhar?</h2>
                      <a href="#projetos" className="bt_link">Ver Projetos</a>
                    <div>
                    <a href="#sobre">
                       <span className="desce sobe_desce">
                          <img src="/seta.png" alt="" />
                       </span>
                    </a>
                   </div>
                   
                </section>
                <section className="main_sub_component_abou_me_sec secion" id="sobre">
                      <h2>Sobre <span className="mim">Mim</span></h2>
                      <div className="div_me">
                            <div className="div_me_img">

                            </div>
                            <article className="div_me_about">
                                     <h2><span className="rocho">Sadraque Quinguri</span> Desenvolvedor Frontend Criativo</h2>
                                     <p>
                                       Sou um desenvolvedor apaixonado por criar experiências digitais únicas e memoráveis. 
                                       Combinando design inovador com código robusto, meu objetivo é construir projetos que 
                                       não apenas funcionem perfeitamente, mas também contem histórias visuais.
                                     </p>
                                     <span>
                                        <ol>
                                            <li><span className="rocho">Nome:</span> Sadraqui Quinguri</li>
                                            <li> <span className="rocho">Email:</span> quinguri01@gmail.com</li>
                                        </ol>
                                        <ol>
                                            <li><span className="rocho">Experiencia:</span> +2 anos</li>
                                            <li><span className="rocho">Localização:</span> Luanda/Angola</li>
                                        </ol>
                                     </span>
                                     <button>Download CV</button>
                            </article> 
                      </div>
                      <div>

                      </div>
                </section>
                <section className="main_sub_component_projetos  secion" id="projetos">
                     <h2>Meus <span className="mim">Projetos</span></h2>
                     <article className="projetos_lists">
                        {
                            projetos.map((proj,pos)=>(
                                <div className="projet_div" key={pos}>
                                   <span></span>
                                   <h3>{proj.title}</h3>
                                   <p>
                                      {proj.desc}
                                    </p>
                                     <ol>
                                       {
                                           proj.tecs.map((tec,po)=>(
                                             <li> <small key={po+pos}>{tec}</small></li>
                                          ))
                                         }
                                     </ol>
                                   </div>
                            ))
                        }
                     </article>
                </section>
                <section className="main_sub_component_experiencias secion" id="experiencias">
                  <h2>Minhas <span className="mim">Experiencias</span></h2>
                  <h3>O percentual , expelha sobre o tempo e experiências nas respectivas tecnologias.</h3>
                    <ol>
                        <li>
                            <span><img src="/html.png" alt="" /></span>
                            <h3>HTML5</h3>
                            <div>
                             <div style={{width:"80%"}}></div>
                            </div>
                            <small>80%</small>
                        </li>
                        <li>
                            <span><img src="/css3.png" alt="" /></span>
                            <h3>CSS3</h3>
                            <div>
                              <div style={{width:"70%"}}></div>
                            </div>
                            <small>70%</small>
                        </li>
                        <li>
                            <span><img src="/js.png" alt="" /></span>
                            <h3>JAVASCRIPT</h3>
                            <div>
                              <div style={{width:"90%"}}></div>
                            </div>
                            <small>90%</small>
                        </li>
                        <li>
                            <span><img src="/react.png" alt="" /></span>
                            <h3>REACT.JS</h3>
                            <div>
                               <div style={{width:"80%"}}></div>
                            </div>
                            <small>80%</small>
                        </li>
                        <li>
                            <span><img src="/node.png" alt="" /></span>
                            <h3>NOD.JS</h3>
                            <div>
                              <div style={{width:"70%"}}></div>
                            </div>
                            <small>70%</small>
                        </li>
                        <li>
                            <span><img src="/mongo.png" alt="" /></span>
                            <h3>MONGO DB</h3>
                            <div>
                               <div style={{width:"60%"}}></div>
                            </div>
                            <small>60%</small>
                        </li>
                        <li>
                            <span><img src="/php.png" alt="" /></span>
                            <h3>PHP</h3>
                            <div>
                               <div style={{width:"55%"}}></div>
                            </div>
                            <small>50%</small>
                        </li>
                        <li>
                            <span><img src="/sql.png" alt="" /></span>
                            <h3>SQL/MYSQL</h3>
                            <div>
                               <div style={{width:"75%"}}></div> 
                            </div>
                            <small>75%</small>
                        </li>
                        <li>
                            <span><img src="/boot.png" alt="" /></span>
                            <h3>BOOTSTRAP</h3>
                            <div>
                              <div style={{width:"45%"}}></div>
                            </div>
                            <small>45%</small>
                        </li>
                        <li>
                            <span><img src="/github.png" alt="" /></span>
                            <h3>GIT/GITHUB</h3>
                            <div>
                               <div style={{width:"50%"}}></div>
                            </div>
                            <small>50%</small>
                        </li>
                     
                    </ol>
                </section>
                <section className="main_sub_component_components secion" id="habilidades">

                </section>
            </main>
        </div>
    )
}

