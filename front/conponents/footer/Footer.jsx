import { useRef, useState } from "react";
import "./footer.css";


export default function Footer(){
    const [nome,setNome] = useState("")
    const [numero,setNumero] = useState("")
    const [tetx,setText] = useState("")
    const [test,setTest] = useState(false);

    const names = useRef(null);
    const number = useRef(null);
    const texto = useRef(null);
    const bt_send = useRef(null);

   const sms = (txt)=>{
         txt.preventDefault()
        setNome(names.current.value);
        setNumero(number.current.value)
        setText(texto.current.value);
        bt_send.current.setAttribute("disabled", true);
        bt_send.current.classList.add("disabled")
       
        setTest(true)
        setTimeout(() => {
            names.current.value="";
            number.current.value="";
            texto.current.value="";
            setTest(false);
            bt_send.current.removeAttribute("disabled")
            bt_send.current.classList.remove("disabled")
        }, 900);
   }



    return(
        <div className="footer_component secion" id="contato">
            <h2>Entre em <span className="mim">Contato Comigo</span></h2>
              <section className="form_sec">
                  <form action="" method="post" onSubmit={sms}>
                      <input ref={names} type="text" placeholder="Insira O Seu Nome:" required />
                      <input ref={number} type="number" min={900000000} placeholder="Insira O Seu Whatzap : "  />
                      <textarea ref={texto} name="" id=""></textarea>
                      {
                        test?<span className="load"></span>:""
                      }
                      <button className="bt_send" ref={bt_send}>Enviar Menssagem</button>
                  </form>
              </section>
              <address >
                   <ol>
                      <li><a href="https://api.whatsapp.com/send/?phone=244925786916&text=Saudações senhor Sadraque" target="_blank"><img src="/whats.jpg" alt="" /></a></li>
                      <li><a href="https://github.com/wallondo/Quin" target="_blank"><img src="/github.png" alt="" /></a></li>
                      <li><a href="#"><img src="/email.jpg" alt="" /></a></li>
                   </ol>
                   <p>© 2025 Quinguri. Todos os direitos reservados.</p>
              </address>
        </div>
    )
}