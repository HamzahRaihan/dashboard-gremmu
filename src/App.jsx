// import Login from "./components/Login";
import ButtonNavigasi from "./layout/ButtonNavigasi";

function App() {
  return (
    <>
      <ButtonNavigasi icon="dashboard" text="Dashboard" />
      <br />
      <ButtonNavigasi icon="user" text="User" />
      <ButtonNavigasi icon="video" text="Video" />
      <ButtonNavigasi icon="news" text="News" />
    </>
  );
}

export default App;
