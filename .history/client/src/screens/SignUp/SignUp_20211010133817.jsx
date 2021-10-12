import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  const history = useHistory()

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
      [e.target.name]: e.target.value,
    })
    
    const onSignUp = async () => {
        .preventDefault()
        const { setUser } = props
        try {
          const user = await signUp(form)
          setUser(user)
          history.push('/')
        } catch (error) {
          console.error(error)
          setForm({
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            isError: true,
            errorMsg: 'Sign Up Details Invalid',
          })
        }
      }

  return <Layout></Layout>;
};

export default SignUp;
