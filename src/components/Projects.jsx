import React from 'react'

const Projects = () => {
    return (
<div class="Projects" id="projects">
    <div class="container">
        <div class="col-md-12">
            <div class="Projects-titles">
                <h1 className="text-center text-black">Projects</h1>
                <hr className="text-black"/>
            </div>
            <div class="list_projects">
                {/* <!-- First row --> */}
                <div class="row">

                    <div class="col-md-4">
                        <div class="card shadow">
                            <img src="/assets/images/generator.png" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Password Generator</h5>
                                <p>Free application for a quick generated password for options for the user</p>
                                {/* <!-- Languages used in that specific project --> */}
                                <a href="https://wilsonsous.github.io/Password-Generator/" class="btn btn-danger">Live Site</a>
                                <a href="https://github.com/wilsonsous/Password-Generator" class="btn btn-danger">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow">
                            <img src="./assets/images/budget.png" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Budget Tracker</h5>
                                <p>Free application for a quick generated password for options for the user.</p>
                                {/* <!-- Languages used in that specific project --> */}
                                <a href="https://fast-escarpment-52282.herokuapp.com/" class="btn btn-danger">Live Site</a>
                                <a href="https://github.com/wilsonsous/Budget-Tracker" class="btn btn-danger">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow">
                            <img src="./assets/images/quiz.png" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Code Quiz</h5>
                                <p>Short Javascript based quiz for new programmers who needs a brief refresher.</p>
                                {/* <!-- Languages used in that specific project --> */}
                                <a href="https://wilsonsous.github.io/Coding-Quiz/" class="btn btn-danger">Live Site</a>
                                <a href="https://github.com/wilsonsous/Coding-Quiz" class="btn btn-danger">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Second row --> */}
                    <div class="row">
                    <div class="col-md-4">
                        <div class="card shadow">
                            <img src="./assets/images/planner.png" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Daily Planner</h5>
                                <p>This application can be used by any user who wants to track their daily activities from 9am to 5pm.</p>
                                {/* <!-- Languages used in that specific project --> */}
                                <a href="https://wilsonsous.github.io/Daily-Planner/" class="btn btn-danger">Live Site</a>
                                <a href="https://github.com/wilsonsous/Daily-Planner" class="btn btn-danger">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow">
                            <img src="./assets/images/notetaker.png" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Note Taker</h5>
                                <p>Responsive application for users who prefer taking notes via laptop or mobile device.</p>
                                {/* <!-- Languages used in that specific project --> */}
                                <a href="https://expressjs-note-taker.herokuapp.com/" class="btn btn-danger">Live Site</a>
                                <a href="https://github.com/wilsonsous/note-taker" class="btn btn-danger">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow">
                            <img src="./assets/images/readme.png" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Readme Generator</h5>
                                <p>This application was created for fellow programmers looking to save time and boost their effeciency for current projects. </p>
                                {/* <!-- Languages used in that specific project --> */}
                                <a href="https://github.com/wilsonsous/README-generator" class="btn btn-danger">GitHub Repo</a>
                            </div>
                        </div>
                    </div>


                </div>
                </div>

            </div>
        </div>
    </div>
</div>
    )
}

export default Projects
