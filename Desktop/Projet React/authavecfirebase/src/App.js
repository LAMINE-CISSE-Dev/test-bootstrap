import Navbar  from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome"
import Private from "./pages/Private/Private";

function App() {
  return (
    <>
      <Navbar />
      <SignUpModal />
      <SignInModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private/>}>
           <Route path="/private/private-home" element={<PrivateHome/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
