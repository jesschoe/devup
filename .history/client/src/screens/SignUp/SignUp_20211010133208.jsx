import Layout from "../../components/Layout/Layout";
import { useState } from 'react'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'

const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })
const SignUp = () => {
    return (
        <Layout>
        
        </Layout>
    )
}

export default SignUp
