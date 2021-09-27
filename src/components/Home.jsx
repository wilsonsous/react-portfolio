import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
// import img from '../../public/assets/images/portfolioimg.jpg'
const Home = () => {
    return (
        <div>
            <section className="container my-5 py-4">
                <div className="row">
                    <div className="col-md-5 mt-5">
                        <h1 className="display-5 mb-4"> Hey there! <br /> My Name is Wilson</h1>
                        {/* <h2 className="display-5"> I am a Full Stack Web Developer</h2> */}
                        <p className="lead mb-4">
                            Full Stack Web Developer looking to futher expand my skills in the world of software development.
                            Constant learning and collaboration with others is what I strive for!
                        </p>
                        <NavLink className="btn btn-outline-danger me-4" to="/contact">Reach me here</NavLink>
                        <NavLink className="btn btn-danger" to="/about">More about me</NavLink>
                    </div>
                        {/* Image */}
                        <div className="col-md-7 d-flex justify-content-center align-items-center">
                            <img src="/assets/images/icon.png" alt="Wilson Sous"
                            height="300px" width="300px" />
                        </div>

                </div>
            </section>
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
