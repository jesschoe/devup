import { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { signIn } from "../../services/users"
import Layout from "../../components/Layout/Layout"
import Footer from "../../components/Footer/Footer"

const SignIn = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };

  const onSignIn = async (e) => {
    e.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      history.push("/")
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: "Invalid username or password",
        username: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : ""
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type="submit">Sign In</button>
    }
  }

  const { username, password } = form;

  return (
    <Layout>
      <div className="container">
          <div className="flex flex-col w-9/12 items-center px-2 md:px-20 lg:w-7/12 xl:w-5/12">
            <div className="self-center md:self-start mt-20 mb-2 text-3xl font-black text-orange">
              Sign In
            </div>
            <div className="flex flex-col justify-center items-center bg-black w-full mb-10 px-10 lg:mx-36">
              <form className="py-10 mx-4 w-full" onSubmit={onSignIn}>
                <label className="text-xs">Username</label>
                <input
                  className="flex-1 border border-orange w-full mb-5 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                  required
                  type="text"
                  name='username'
                  value={username}
                  onChange={handleChange}
                  placeholder=""
                />
                <label className="text-xs">Password</label>
                <input
                  className="flex-1 border border-orange w-full mb-5 py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                  required
                  type="password"
                  name='password'
                  value={password}
                  onChange={handleChange}
                  placeholder=""
                />
                <div className="flex mt-8 w-full my-4 justify-center">
                  <div
                    className="text-sm px-6 py-2 font-black text-orange md:rounded md:border-none md:text-white md:bg-orange bg-black border border-orange"
                    type="submit"
                  >
                    {renderError()}
                  </div>
                </div>
              </form>
              </div>
            <div className="text-lg">New to DevUp?</div>
            <Link to="/signup">
              <button className="mb-20 text-sm px-6 py-2 font-black my-6 text-orange md:rounded md:border-none md:text-white md:bg-orange bg-black border border-orange">Create Your DevUp Account</button>
            </Link>
          <Footer />
        </div>
      </div>
    </Layout>
  )
}

export default SignIn
