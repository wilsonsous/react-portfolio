import React from 'react'

const About = () => {
    return (
        <div>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center py-4">
                            <h1>About</h1>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <img src="/assets/images/portfolioimg.jpg" alt="Wilson Sous" height="300px" width="300px"/>
                        </div>
                        <div className="col-md-6 my-5">
                            <h1 className="display-5 mb-4">Wilson Sous</h1>
                            <p className="lead mb-5">Beginning as a self taught web developer before joining a bootcamp, I was fascinated with every idea of coding in the world of Tech. 
                            Practicing my own coding projects using basic HTML, CSS, and Javascript made me thrilled to learn more about discovering new syntaxes and concepts. 
                            The foundation of constantly learning new things and experiencing challenges through the use of tech has lead me to where I am today. 
                            The mental stimulation is what drives me to keep coding along and to express my creativity through something I can constantly learn from.</p>

                            <h1>Most used skills:</h1>
                            <div className="progress my-4">
                                <div className="progress-bar bg-warning" 
                                role="progressbar" 
                                style={{ width : "80%"}} 
                                aria-valuenow="80" aria-valuemin="0" 
                                aria-valuemax="100">JAVASCRIPT</div>
                                <span>76.18%</span>
                            </div>
                            <div className="progress my-4">
                                <div className="progress-bar bg-danger" 
                                role="progressbar" 
                                style={{ width : "70%"}}  
                                aria-valuenow="70" 
                                aria-valuemin="0" 
                                aria-valuemax="100">HTML</div>
                                <span>13.09%</span>
                            </div>
                            <div className="progress my-4">
                                <div className="progress-bar bg-info" 
                                role="progressbar" 
                                style={{ width : "60%"}}  
                                aria-valuenow="60" 
                                aria-valuemin="0" 
                                aria-valuemax="100">CSS</div>
                                <span>7.24%</span>
                            </div>
                            <div className="progress my-4">
                                <div className="progress-bar bg-success" 
                                role="progressbar" 
                                style={{ width : "25%"}}  
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100">REACT</div>
                                <span>3.49%</span>
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
        </div>
    )
}

export default About
