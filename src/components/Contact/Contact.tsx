import emailIcon from "../../assets/email-icon.svg";
import whatsappIcon from "../../assets/logo-whatsapp.svg";
import { Form } from "../Form/Form";
import { Container } from "./styles";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>If you think I've the potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:akaashdev.5@hotmail.com">akaashdev.5@hotmail.com</a>
        </div>
        <div>
          <img src={whatsappIcon} alt="WhatsApp" />
          <a href="https://wa.me/9868940480">+91 98### ####0</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}