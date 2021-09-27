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
                            <p className="lead mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam recusandae quos asperiores fugit, possimus architecto mollitia magnam exercitationem consequuntur, eum est cupiditate ducimus autem officia id explicabo rerum? Iste, porro.</p>

                            {/* <h1>Most used skills:</h1>
                            <p>Javascript</p>
                            <div className="progress my-4">
                                <div className="progress-bar bg-sucess" 
                                role="progressbar" 
                                style={{ width : "80%"}} 
                                aria-valuenow="80" aria-valuemin="0" 
                                aria-valuemax="100"></div>
                            </div>
                            <p>HTML</p>
                            <div className="progress my-4">
                                <div className="progress-bar bg-info" 
                                role="progressbar" 
                                style={{ width : "70%"}}  
                                aria-valuenow="70" 
                                aria-valuemin="0" 
                                aria-valuemax="100"></div>
                            </div>
                            <div className="progress my-4">
                                <div className="progress-bar bg-warning" 
                                role="progressbar" 
                                style={{ width : "60%"}}  
                                aria-valuenow="60" 
                                aria-valuemin="0" 
                                aria-valuemax="100"></div>
                            </div>
                            <div className="progress my-4">
                                <div className="progress-bar bg-danger" 
                                role="progressbar" 
                                style={{ width : "25%"}}  
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100"></div>
                            </div> */}
                        </div>
                    </div>    
                </div>
            </section>
        </div>
    )
}

export default About
