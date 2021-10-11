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

      const handleChange = (e) => {
        setForm({
          ...form,
          [event.target.name]: e.target.value,
        })
      }

      

    return (
        <div>
            
        </div>
    )
}

export default SignIn
