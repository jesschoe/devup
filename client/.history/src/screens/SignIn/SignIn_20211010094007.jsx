import { useState } from 'react'
import { signIn } from '../../services/users'
import { useHistory } from 'react-router-dom'

const SignIn = (props) => {
    const history = useHistory()

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        isError: false,
        errorMsg: "",
      })

      const handleChange = (event) => {
        setForm({
          ...form,
          [event.target.name]: event.target.value,
        })
      }
    return (
        <div>
            
        </div>
    )
}

export default SignIn
