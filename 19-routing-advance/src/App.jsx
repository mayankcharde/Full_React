import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        {/*  AGAR HUM ISME COURSES ME KONSE BHI ROUTE ME HIT KREGE TO COURSE DETAIL PAGE SHOW KREGA */}
        <Route path="/courses/:courseId" element={<CourseDetail />} />

        {/*  YAHA HUM ROUTE KO CLOSE BHI KR RAHE HAI MATLAB ISKE ANDAR SARE SECTION DIKHEGE THATS WHY */}
        {/*  AGAR HUME EK ROUTE ANDAR MULTIPLE ROUTES CHAIYE TO YE USE KREGE */}
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        {/*  AGAR ANJAN KONSE BHI ROUTE DALRE TO '*' USE HOGAA */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
