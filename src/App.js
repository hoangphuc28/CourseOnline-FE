import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/index.tsx";
import Home from "./pages/Home/index.tsx";
import ListCourses from "./pages/ListCourses/index.tsx";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeTemplate Component={Home}/>} />
    <Route path="/courses" element={<HomeTemplate Component={ListCourses}/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
