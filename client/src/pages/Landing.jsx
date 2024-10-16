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
            Experiment with our job tracker to experience all the features and
            functionality of this great tool. We encourage you to create a user
            profile, or test drive the app by logging in with our demo account.
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
