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
   const mais_me = ()=>{
       document.getElementById("mais_me").classList.toggle("alt")
   }

    return(
        <div className="main_component">
            <main className="main_sub_component">
                <section className="main_sub_component_sec">
                    <h1>Olá, eu sou o <br /> <span className="name">Quinguri.</span></h1>
                    <small>Sadraque <span className="name">Quinguri</span></small>
                    <h2>Desenvolvedor Front-End, <br /> 
                       <span className="back">Tanbém atuo como Desenvolvedor Back-End </span> <br />
                     Vamos trabalhar?</h2>
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
                                     <h2><span className="rocho">Sadraque Quinguri</span> Desenvolvedor Front-End.</h2>
                                     <p>
                                         Sou um desenvolvedor apaixonado por criar experiências digitais únicas e memoráveis.  <br />
                                        <span className="rocho2"> Além disso, atuo como desenvolvedor Back-End</span> sempre que necessário, assegurando a integração e o funcionamento eficaz de todas as camadas do projeto. <br />
                                         Combinando design inovador com código robusto,<span className="rocho2"> meu objetivo é construir projetos que não apenas funcionem perfeitamente, mas também contem histórias visuais.</span>  <br />
                                         <span className="rocho2">Trabalhando em estreita colaboração com meu designer</span>, consigo realizar interfaces intuitivas e agradáveis, garantindo uma excelente experiência para o usuário.

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
                                     <span>
                                       <button onClick={mais_me}>Mais sobre mim</button> <button>Download CV</button>
                                     </span>
                                     <div className="mais_sobre alt" id="mais_me">
                                             <h3><span className="rocho">Mais Sobre mim</span></h3>
                                             <p>
                                                  Olá! Meu nome é <i>Sadraque Quinguri</i> e sou <span className="rocho2">desenvolvedor web com mais de 2 anos de experiência</span> na área, atuando como <span className="rocho2">desenvolvedor júnior</span> Tanto no <span className="rocho2">Front-End e Backend, sempre que necessário</span>. <br />
                                                  Tenho um forte compromisso com o aprendizado contínuo e me especializo em criar soluções funcionais e responsivas para a web, sempre focando na experiência do usuário. <br /> <br />
                                                  Além do desenvolvimento web, sou <span className="rocho2">estudante de língua inglesa há 1 ano e 4 meses</span>, com o objetivo de aprimorar minha comunicação e alcançar a fluência. <br />
                                                  Acredito que a combinação de minhas habilidades técnicas e minha dedicação ao aprendizado constante me permite entregar sempre soluções de qualidade. <br />
                                                  Estou sempre em busca de novos desafios e oportunidades para evoluir, seja no <span className="rocho2">desenvolvimento de projetos front-end ou back-end</span>, com foco na entrega de resultados eficientes e impactantes.

                                             </p>
                                             <h3><span className="rocho">Passatempos</span></h3>
                                             <p>
                                                 - Nos meus momentos de lazer, me dedico à <span className="rocho2">calistenia,Fisiculturismo, natação e caminhadas,</span> atividades que me ajudam a manter o equilíbrio entre mente e corpo.
                                                <br />
                                                Com uma mentalidade focada no aprendizado contínuo e na adaptação às mudanças, estou sempre em busca de desafios que me ajudem a evoluir como profissional e ser humano.
                                             </p>
                                             <h3><span className="rocho">Objetivos</span></h3>
                                             <p>- <span className="rocho2">Ser útil a todos:</span> Meu principal objetivo é agregar valor e ser útil para as equipes e projetos aos quais sou envolvido. <span className="rocho2">Por isso, estou me candidatando a essa vaga,</span> com a intenção de contribuir com minhas habilidades e, ao mesmo tempo, continuar aprendendo e me desenvolvendo profissionalmente.
                                             </p>
                                             <p>- <span className="rocho2">Continuar o aprendizado na área:</span> Tenho a prioridade de continuar aprofundando meus conhecimentos na área de desenvolvimento web, aplicando o que aprendi em projetos reais e mantendo-me atualizado com as tendências e novas tecnologias do mercado.
                                             </p>
                                             <h3><span className="rocho">Foco:</span></h3>
                                             <p>- <span className="rocho2">Crescer continuamente:</span> Meu foco é evoluir constantemente, tanto como profissional quanto como pessoa. Estou comprometido com meu desenvolvimento e acredito que, ao investir em novos aprendizados e desafios, posso alcançar um crescimento exponencial.</p>
                                             <h3 className="grato"><span className="rocho">Fico lisonjeado  por ter chegado até esta etapa. <br /> Estou ansioso pela sua Convite !!!</span></h3>
                                     </div>
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
                <section className="main_sub_component_components_qualidades secion" id="qualidades">
                  <h2>Minhas <span className="mim">Qualidades</span></h2> <br />
                  <h3>Minhas Qualidades como Trabalhador e Pessoa</h3>
                      <ol>
                          <li> 
                                <h2>Pontualidade</h2>
                                <p>
                                  Ser pontual é uma das qualidades mais valorizadas em qualquer ambiente profissional. Chegar no horário combinado demonstra respeito pelo tempo dos outros, comprometimento com o trabalho e organização pessoal.
                                </p>
                          </li>
                          <li>
                              <h2>Responsabilidade</h2>
                              <p>Uma pessoa responsável sabe que deve assumir as consequências de suas ações e decisões, tanto os sucessos quanto os erros. Ela cumpre suas obrigações de forma confiável e sem ser lembrada constantemente.</p>
                          </li>
                          <li>
                              <h2>Disciplina</h2>
                              <p>A disciplina é essencial para manter o foco em objetivos de longo prazo e seguir um plano de ação, mesmo diante de desafios e distrações. Ter disciplina permite que você consiga realizar tarefas importantes de maneira consistente.</p>
                          </li>
                          <li>
                               <h2>Respeito</h2>
                               <p>O respeito é fundamental em qualquer ambiente. Tratar os outros com respeito, independentemente de sua posição, gênero, idade ou origem, cria um ambiente de trabalho saudável e harmonioso.</p>
                          </li>
                          <li>
                              <h2>Capacidade de Trabalhar em Equipe</h2>
                              <p>Embora a independência seja importante, a habilidade de trabalhar bem em equipe é essencial. Colaborar, compartilhar ideias, ouvir os outros e contribuir para um ambiente de trabalho positivo é uma qualidade importante.</p>
                          </li>
                          <li>
                                <h2>Comunicação Clara e Eficaz</h2>
                                <p>Saber se comunicar bem é crucial tanto em ambientes profissionais quanto pessoais. Uma boa comunicação envolve ouvir ativamente, expressar-se claramente e garantir que todos os envolvidos estejam na mesma página.</p>
                          </li>
                          <li>
                               <h2>Paciência</h2>
                               <p> A paciência é uma qualidade importante, pois nem todos os problemas podem ser resolvidos rapidamente. Profissionais pacientes sabem esperar o tempo necessário para que as coisas aconteçam sem se desesperar ou tomar decisões precipitadas.</p>
                          </li>
                      </ol>
                </section>
            </main>
        </div>
    )
}

