import React from 'react'
// import ContactForm from './ContactTemplate'

const Contact = () => {
    return (
    <div className="container mt-5">
        <form className="row g-3">
            <h1 className="text-center">Contact Me</h1>
            <hr />
            <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" required/>
            </div>
            <div className="col-md-8">
                <label htmlFor="emailInfo" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="emailInfo" required/>
            </div>
            <div className="col-md-4">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phoneNumber"/>
            </div>
            <div className="col-md-12">
                <label htmlFor="comments" className="form-label">Comments, questions?</label>
                <textarea class="form-control" id="comments" row="3" required></textarea>
            </div>
            <div className="col-md-12">
                <button type="submit" className="btn btn-danger">Submit</button>
            </div>
        </form>
            
    </div>
    )
}
    
    export default Contact
    