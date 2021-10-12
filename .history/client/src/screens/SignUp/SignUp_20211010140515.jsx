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
    
    const onSignUp = async (e) => {
        e.preventDefault()
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
            isError: true,
            errorMsg: 'Sign Up Details Invalid',
          })
        }
      }
      const { username, email, password, passwordConfirmation } = form

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
          <div className="flex justify-center">
        <div class="flex flex-col justify-center items-center max-w-md px-4 py-8 bg-white rounded-lg  sm:px-6 md:px-8 lg:px-10">
          <div class="self-center mb-2 text-xl font-light text-black sm:text-2xl dark:text-white">
            Sign Up
          </div>
          <div class="p-6 mt-8">
            <form onsubmit={onSignUp}>
              <div class="flex flex-col mb-2">
                <div class=" relative ">
                  <input
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                    type="text"
                    name='username'
                    value={username}
                    onChange={handleChange}
                    placeholder="username"
                  />
                </div>
              </div>
              <div class="flex flex-col mb-2">
                <div class=" relative ">
                  <input
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                    type="text"
                    value={email}
                    onChange={handleChange}
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                    type="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="password"
                  />
                </div>
              </div>
              <div class="flex w-full my-4">
                <div
                  class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
