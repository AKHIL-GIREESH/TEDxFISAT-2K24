import LandingPg from "../components/LandingPg";
import RegistrationMain from "../components/Regsiteration";
import SpeakerMain from "../components/SpeakersMain";
import Sponsors from "../components/Sponsors";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AlternateLanding from "../components/AlternateLanding";
import Team from "../components/Team";
import Register from "../components/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  // let element = useRoutes([
  //   { path: "/",
  //     element: <LandingPg/>,
  //   },
  //   { path: "/Registration",
  //     element: <RegistrationMain />
  //   },
  //   { path: "/Speaker",
  //     element: <SpeakerMain />
  //   },
  // ]);

  // return element;
  return (
    // <LandingPg/>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPg />} />
        <Route path="/Speakers" element={<SpeakerMain />} />
        <Route path="/Registration" element={<RegistrationMain />} />
        <Route path="/Sponsors" element={<Sponsors />} />
        <Route path="/1" element={<AlternateLanding />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
