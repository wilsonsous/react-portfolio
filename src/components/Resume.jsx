import React from 'react'

const Resume = () => {
    return (
        <div className="container mt-5">
    <section className="text-center">
      <div className="my-2">
      <p>
        Download my resume here! <a href="https://docs.google.com/document/d/1H5sJ93lUMKnQ4VXMrQlHqd_VHSkeIGIj7nMzX6xoutg/edit?usp=sharing">resume</a>
        </p>
        <h3>Front-end skills</h3>
        <ul className="skills">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>jQuery</p>
          <p>Responsive Design</p>
          <p>React</p>
          <p>Bootstrap</p>
        </ul>
        <h3>Back-end skills</h3>
        <ul className="skills">
          <p>APIs</p>
          <p>Node</p>
          <p>Express</p>
          <p>MySQL</p>
          <p>Sequelize</p>
          <p>MongoDB</p>
          <p>Mongoose</p>
          <p>REST</p>
          <p>GraphQL</p>
        </ul>
      </div>
    </section>
    </div>
  );
}

export default Resume
