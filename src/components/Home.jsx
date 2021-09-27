import React from 'react'
import { NavLink } from 'react-router-dom'
// import img from '../../public/assets/images/portfolioimg.jpg'
const Home = () => {
    return (
        <div>
            <section className="container my-5 py-4">
                <div className="row">
                    <div className="col-md-5 mt-5">
                        <h1 className="display-5 mb-4"> Hey there! My Name is <br/> Wilson Sous</h1>
                        {/* <h2 className="display-5"> I am a Full Stack Web Developer</h2> */}
                        <p className="lead mb-4">
                            Beginning as a self taught web developer before joining a bootcamp, I was fascinated with every idea of coding in the world of Tech. 
                            Practicing my own coding projects using basic HTML, CSS, and Javascript made me thrilled to learn more about discovering new syntaxes and concepts. 
                            The foundation of constantly learning new things and experiencing challenges through the use of tech has lead me to where I am today. 
                            The mental stimulation is what drives me to keep coding along and to express my creativity through something I can constantly learn from.
                        </p>
                        <NavLink className="btn btn-outline-primary me-4" to="/contact">Let's get started</NavLink>
                        <NavLink className="btn btn-primary" to="/about">More about me</NavLink>
                    </div>
                        {/* Image */}
                        <div className="col-md-7 d-flex justify-content-center align-items-center">
                            <img src="/assets/images/portfolioimg.jpg" alt="Wilson Sous"
                            height="300px" width="300px" />
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Home
