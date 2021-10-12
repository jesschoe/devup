import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: event.target.value,
    });
  return <Layout></Layout>;
};

export default SignUp;
