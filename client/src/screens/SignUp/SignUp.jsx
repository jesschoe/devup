import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isError: false,
    errorMsg: "",
  });

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
          <div className="min-h-screen min-w-max">
          <div className="flex flex-col items-center">
          <div className="self-center mb-2 text-xl font-bold text-left text-white sm:text-2xl dark:text-white">
            Sign Up
          </div>
        <div className="flex flex-col justify-center items-center max-w-md px-4 py-8 bg-black sm:px-6 md:px-8 lg:px-10">
          <div className="p-6 mt-8">
            <form onSubmit={onSignUp}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label>Name</label>
                  <input
                    className="flex-1 border border-orange w-full py-2 px-4 bg-black text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    required
                    type="text"
                    name='name'
                    value={name}
                    onChange={handleChange}
                    placeholder="name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label>Username</label>
                  <input
                    className="flex-1 border border-orange w-full py-2 px-4 bg-black text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    required
                    type="text"
                    name='username'
                    value={username}
                    onChange={handleChange}
                    placeholder="username"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label>Email</label>
                  <input
                    className="flex-1 border border-orange w-full py-2 px-4 bg-black text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    required
                    type="text"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label>Password</label>
                  <input
                    className="flex-1 border border-orange w-full py-2 px-4 bg-black text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label>Confirm Password</label>
                  <input
                    className="flex-1 border border-orange w-full py-2 px-4 bg-black text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    required
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="flex w-full my-4">
                <div
                  className="py-2 px-4 bg-orange hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  type="submit"
                >
                  {renderError()}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      </Layout>
  )
  
};

export default SignUp;
