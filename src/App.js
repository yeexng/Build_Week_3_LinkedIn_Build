import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import ProfileAvatar from "./components/ProfileAvatar";
import Footer from "./components/Footer";
import DropUpChat from "./components/DropUpChat";

function App() {
  return <div className="App">
    <MainLayout />
  </div>;
  return (
    <div className="App">
      <ProfileAvatar />
      <Footer />
      <DropUpChat />
    </div>
  );
}

export default App;
