import Login from "../../components/Login";

const AuthLogin = () => {
  const handleLogin = () => {
    console.log("Login successful!");
  };

  return (
    <>
      <Login onLogin={handleLogin} />
    </>
  );
};

export default AuthLogin;
