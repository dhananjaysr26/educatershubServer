// import logo from "./logo.svg";
import "./App.css";
import HeaderCard from "./header/headerCard";
import ProfileCard from "./profile/profileCard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderCard />
        <ProfileCard />
      </header>
    </div>
  );
}

export default App;
