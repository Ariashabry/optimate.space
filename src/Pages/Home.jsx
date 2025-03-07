import React from "react";
import Navbar from "../Components/Navbar";
import Jumbotron from "../Components/Jumbotron";
import About from "../Components/About";
import Skills from "../Components/Skill";
import Service from "../Components/Service";
import Portfolio from "../Components/Portfolio";
import Feedback from "../Components/Feedback";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <About />
            <Skills />
            <Service />
            <Portfolio />
            <Feedback />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;
