import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import x from "../../assets/images/x.png";

import { Container, Social } from "./styles";
import { Link } from "react-router-dom";

const Footer = () => (
  <Container>
    <div className="container">
      <img src={logo} alt="Efood" />
      <Social>
        <Link to="/">
          <img src={facebook} alt="facebook" />
        </Link>
        <Link to="/">
          <img src={instagram} alt="instagram" />
        </Link>
        <Link to="/">
          <img src={x} alt="Twitter" />
        </Link>
      </Social>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
);

export default Footer;
