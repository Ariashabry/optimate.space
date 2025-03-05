import React from "react";
import Navbar from "../Components/Navbar";
import Jumbotron from "../Components/Jumbotron";
import About from "../Components/About";
import Skills from "../Components/Skill";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <About />
            <Skills />
        </div>
    );
};

export default Home;
