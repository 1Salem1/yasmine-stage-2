import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter , Route   ,Routes } from "react-router-dom"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import SignupCompany from "./components/auth/signup/SignUpCompany"
import SignupUser from "./components/auth/signup/SignUpUser"
import Signin from './components/auth/signin/SignIn'
import Contact from './components/contact/Contact'
import Postuler from "./components/postuler/Postuler"
import Stage from "./components/stages/Stage"
import Applications from "./components/applications/Applications"

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/applications" element={<Layout><Applications /></Layout>} />

        <Route path="/signup-company" element={<SignupCompany />} />

        <Route path="/signup-user" element={<SignupUser/>} />
        <Route path="/stage" element={<Layout><Stage/></Layout>} />
        <Route path="/postuler" element={<Layout><Postuler/></Layout>} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default App;