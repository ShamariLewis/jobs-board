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
            Experiment with our job tracker to see how much of a useful tool it
            might be for your use case. We hope you enjoy our product
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
