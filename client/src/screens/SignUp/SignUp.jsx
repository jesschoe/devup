import { useState } from "react"
import { useHistory } from "react-router-dom"
import { signUp } from "../../services/users"
import Layout from "../../components/Layout/Layout"
import Footer from "../../components/Footer/Footer"

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    roles:["basic"],
    confirmPassword: "",
    isError: false,
    errorMsg: "",
  })

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    
    const onSignUp = async (e) => {
        e.preventDefault()
        const { setUser } = props
        try {
          const user = await signUp(form)
          setUser(user)
          history.push('/signin')
        } catch (error) {
          console.error(error)
          setForm({
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            roles:["basic"],
            isError: true,
            errorMsg: 'Sign Up Details Invalid',
          })
        }
      }
      const { name, username, email, password, confirmPassword } = form

      const renderError = () => {
        const toggleForm = form.isError ? 'danger' : ''
        if (form.isError) {
          return (
            <button type='submit' className={toggleForm}>
              {form.errorMsg}
            </button>
          )
        } else {
          return <button type='submit'>Sign Up</button>
        }
      }

  return (
    <Layout>
      <div className="container">
          <div className="flex flex-col w-full items-center px-20 md:px-56 lg:w-8/12">
            <div className="self-start mt-20 mb-2 text-3xl font-black text-orange">
              Sign Up
            </div>
            <div className="flex flex-col justify-center items-center bg-black w-full mb-20 px-10 lg:mx-36">
                <form className="py-10 mx-4 w-full" onSubmit={onSignUp}>
                  <div className="flex flex-col mb-2">
                      <label className="text-xs">Name</label>
                      <input
                        className="flex-1 border border-orange w-full mb-4 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                        required
                        type="text"
                        name='name'
                        value={name}
                        onChange={handleChange}
                        placeholder=""
                      />
                  </div>
                  <div className="flex flex-col mb-2">
                      <label className="text-xs">Username</label>
                      <input
                        className="flex-1 border border-orange w-full mb-4 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                        required
                        type="text"
                        name='username'
                        value={username}
                        onChange={handleChange}
                        placeholder=""
                      />
                  </div>
                  <div className="flex flex-col mb-2">
                      <label className="text-xs">E-mail</label>
                      <input
                        className="flex-1 border border-orange w-full mb-4 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                        required
                        type="text"
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </div>
                  <div className="flex flex-col mb-2">
                      <label className="text-xs">Password</label>
                      <input
                        className="flex-1 border border-orange w-full mb-4 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                        required
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder=""
                      />
                  </div>
                  <div className="flex flex-col mb-2">
                      <label className="text-xs">Confirm Password</label>
                      <input
                        className="flex-1 border border-orange w-full mb-4 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                        required
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        placeholder=""
                      />
                  </div>
                  <div className="flex mt-8 w-full my-4 justify-center">
                    <div
                      className="py-2 px-6 bg-orange text-white rounded-md"
                      type="submit"
                    >
                      {renderError()}
                    </div>
                  </div>
                </form>
            </div>
          </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default SignUp
