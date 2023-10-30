import "./App.css";
import "./index.css";
import RouterPaths from "./routes/PublicRoutes.routes";
import Navbar from "./components/Navbar/Navbar";
import BackButton from "./utils/BackButton";

function App() {
  return (
    <>
      <Navbar />
      <RouterPaths />
      <BackButton />
    </>
  );
}

export default App;