import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import mainImg from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby trust fund mustache coloring book franzen unicorn cornhole
            same actually af before they sold out humblebrag. Waistcoat lo-fi
            activated charcoal, man bun flexitarian swag dreamcatcher try-hard
            tofu. Retro VHS truffaut XOXO kinfolk. You probably haven't heard of
            them air plant viral disrupt cold-pressed, try-hard typewriter
            direct trade twee cred banh mi listicle etsy.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={mainImg} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
