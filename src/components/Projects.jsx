import React from 'react'

const Projects = () => {
    return (
<div class="Projects" id="projects">
    <div class="container">
        <div class="col-md-8">
            <div class="Projects-titles">
                <h1># Projects</h1>
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
                                <a href="https://wilsonsous.github.io/Password-Generator/" class="btn btn-link">Live Site</a>
                                <a href="https://github.com/wilsonsous/Password-Generator" class="btn btn-link">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow">
                            <img src="./assets/images/budget.png" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Budget Tracker</h5>
                                <p>Free application for a quick generated password for options for the user</p>
                                {/* <!-- Languages used in that specific project --> */}
                                <a href="https://fast-escarpment-52282.herokuapp.com/" class="btn btn-link">Live Site</a>
                                <a href="https://github.com/wilsonsous/Budget-Tracker" class="btn btn-link">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow">
                            <img src="./assets/images/quiz.png" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Code Quiz</h5>
                                <p>Free application for a quick generated password for options for the user</p>
                                {/* <!-- Languages used in that specific project --> */}
                                <a href="https://wilsonsous.github.io/Coding-Quiz/" class="btn btn-link">Live Site</a>
                                <a href="https://github.com/wilsonsous/Coding-Quiz" class="btn btn-link">GitHub Repo</a>
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
                                <p>Free application for a quick generated password for options for the user</p>
                                {/* <!-- Languages used in that specific project --> */}
                                <a href="https://wilsonsous.github.io/Daily-Planner/" class="btn btn-link">Live Site</a>
                                <a href="https://github.com/wilsonsous/Daily-Planner" class="btn btn-link">GitHub Repo</a>
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
