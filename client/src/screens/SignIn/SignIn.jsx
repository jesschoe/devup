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
      <div className="flex flex-col items-center max-w-md mb-10">
      <div className="self-start mt-8 mb-2 text-xl font-extrabold text-white sm:text-2xl dark:text-white">
            Sign In
      </div>
        <div className="flex flex-col justify-center items-center max-w-lg bg-black sm:px-6 md:px-8 lg:px-10">
          <div className="p-6 mt-4">
            <form onSubmit={onSignIn}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label className="text-xs">Username</label>
                  <input
                    className="flex-1 border border-orange w-full py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    required
                    type="text"
                    name='username'
                    value={username}
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <label className="text-xs">Password</label>
                  <input
                    className="flex-1 border border-orange w-full py-2 px-4 bg-black text-sm text-white placeholder-primary focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    required
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex mt-8 w-full my-4 justify-center">
                <div
                  className="py-2 px-4 bg-orange hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-1/2 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md"
                  type="submit"
                >
                  {renderError()}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
