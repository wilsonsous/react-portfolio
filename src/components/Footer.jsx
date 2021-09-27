import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 bg-primary text-white bg-dark">
                            <p className="lead text-center pt-3">
                            <div>
                                <a href="mailto: souswilson@gmail.com" class="me-4 text-reset">
                                    <i class="fas fa-envelope"></i>
                                </a>
                                <a href="https://docs.google.com/document/d/1H5sJ93lUMKnQ4VXMrQlHqd_VHSkeIGIj7nMzX6xoutg/edit" class="me-4 text-reset">
                                    <i class="far fa-newspaper"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/wilson-sous-20ab82200/" class="me-4 text-reset">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/wilsonsous" class="me-4 text-reset">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
