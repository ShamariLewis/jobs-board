import {
  Link,
  Form,
  redirect,
  useNavigation,
  useActionData,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.password.length < 3) {
    errors.msg = "password is too short";
    return errors;
  }

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  // login for test user account of the app.
  const loginTestUser = async () => {
    const data = {
      email: "demouser@test.com",
      password: "demosecret123",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Welcome to test account");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        {errors?.msg && <p style={{ color: "red" }}>{errors.msg}</p>}
        <p></p>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginTestUser}>
          explore the app
        </button>
        <p>
          Not yet a member?{" "}
          <Link to="/register" className="member-btn">
            create account
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
