import { useState } from "react";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer"

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
      <div className="flex flex-col items-center mb-10 max-h-screen w-full overflow-y-scroll">
        <div className="max-w-md mb-36">
          <div className="mt-20 mb-2 text-2xl max-w-md font-extrabold text-white">
            Sign In
          </div>
          <div className="flex flex-col justify-center items-center max-w-md bg-black">
            <form className="p-10" onSubmit={onSignIn}>
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
  );
};

export default SignIn;
