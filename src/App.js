import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import ProfileAvatar from "./components/ProfileAvatar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ProfileAvatar />
      <Footer />
    </div>
  );
}

export default App;
