import "./footer.css";


export default function Footer(){
    return(
        <div className="footer_component secion" id="contato">
            <h2>Entre em <span className="mim">Contato Comigo</span></h2>
              <section className="form_sec">
                  <form action="" method="post">
                      <input type="text" placeholder="Insira O Seu Nome:" required />
                      <input type="number" min={900000000} placeholder="Insira O Seu Whatzap : "  />
                      <textarea name="" id=""></textarea>
                      <button>Enviar Menssagem</button>
                  </form>
              </section>
              <address >
                   <ol>
                      <li><a href="#"><img src="/whats.jpg" alt="" /></a></li>
                      <li><a href="#"><img src="/github.png" alt="" /></a></li>
                      <li><a href="#"><img src="/email.jpg" alt="" /></a></li>
                   </ol>
                   <p>© 2025 Quinguri. Todos os direitos reservados.</p>
              </address>
        </div>
    )
}