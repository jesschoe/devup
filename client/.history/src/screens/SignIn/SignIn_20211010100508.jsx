import { useState } from "react";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid username or password",
        username: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { username, password } = form;

  return (
    <Layout>
      <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account ?
          <a
            href="#"
            target="_blank"
            class="text-sm text-blue-500 underline hover:text-blue-700"
          >
            Sign in
          </a>
        </span>
        <div class="p-6 mt-8">
          <form action="#">
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="pseudo"
                  placeholder="Pseudo"
                />
              </div>
            </div>
            <div class="flex gap-4 mb-2">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="First name"
                  placeholder="First name"
                />
              </div>
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-last-name"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="Last name"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-email"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="flex w-full my-4">
              <button
                type="submit"
                class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Login
              </button>
            </div>
          </form>
          <div class="flex items-center justify-center mt-6">
            <div>
              
             
              
              <label class="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-yellow-500 checked:border-transparent focus:outline-none"
                />
                <span class="text-gray-700 dark:text-white font-normal">
                  Orange
                </span>
              </label>
              <label class="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                />
                <span class="text-gray-700 dark:text-white font-normal">
                  Purple
                </span>
              </label>
              <label class="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-black checked:border-transparent focus:outline-none"
                />
                <span class="text-gray-700 dark:text-white font-normal">
                  Black
                </span>
              </label>
              <label class="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none"
                />
                <span class="text-gray-700 dark:text-white font-normal">
                  Indigo
                </span>
              </label>
              <label class="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-red-500 checked:border-transparent focus:outline-none"
                />
                <span class="text-gray-700 dark:text-white font-normal">
                  Red
                </span>
              </label>
              <label class="flex items-center space-x-3 mb-3">
                <input
                  type="checkbox"
                  name="checked-demo"
                  class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none"
                />
                <span class="text-gray-700 dark:text-white font-normal">
                  Gray
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;

{
  /* <div className="min-h-screen min-w-max flex justify-center items-center text-center">
      <div className="text-black block">Sign In</div>
      <form onSubmit={onSignIn}>
        <label>Email</label>
        <input
          required
          type="text"
          name="email"
          value={username}
          placeholder="username"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div> */
}
