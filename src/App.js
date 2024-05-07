import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/index.tsx";
import Home from "./pages/Home/index.tsx";
import ListCourses from "./pages/ListCourses/index.tsx";
import SignIn from "./pages/SignIn/index.tsx";
import AuthTemplate from "./templates/AuthTemplate/index.tsx";
import Loader from "./components/Loader/index.tsx";
import SignUp from "./pages/SignUp/index.tsx";
import Verify from "./pages/Verify/verify.tsx";
import sendEmail from "./pages/Verify/sendEmail.tsx";
function App() {
  return (
    <BrowserRouter>
    <Loader/>
    <Routes>

    <Route path="/" element={<HomeTemplate Component={Home}/>} />
    <Route path="/courses" element={<HomeTemplate Component={ListCourses}/>} />
    <Route path="/signin" element={<AuthTemplate Component={SignIn}/>} />
    <Route path="/signup" element={<AuthTemplate Component={SignUp}/>} />
    <Route path="/register/successverify" element={<AuthTemplate Component={Verify}/>} />
    <Route path="/verify" element={<AuthTemplate Component={sendEmail}/>} />


    <Route path="/courses" element={<HomeTemplate Component={ListCourses}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
