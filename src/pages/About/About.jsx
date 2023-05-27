import React, { Component } from 'react'

class About extends Component {
  render() {
    const staticContent = (
      <div>
        <h2>About Me</h2>
        <p>
          Hi there! I'm [Your Name], a passionate and dedicated individual with
          a love for technology and creativity. I believe in the power of
          innovation and enjoy exploring new possibilities in the digital realm.
        </p>
        <img src="profile.jpg" alt="Profile Picture" />
        <ul>
          <li>Web Development</li>
          <li>User Experience Design</li>
          <li>Problem Solving</li>
        </ul>
        <blockquote>
          <p>
            "The only limit to our realization of tomorrow will be our doubts of
            today."
          </p>
          <cite>Franklin D. Roosevelt</cite>
        </blockquote>
        <p>
          With a background in computer science and a strong passion for design,
          I strive to create meaningful and user-friendly experiences. I am
          experienced in front-end development and have a keen eye for detail.
        </p>
        <div>
          <h3>Education</h3>
          <p>
            I graduated from XYZ University with a degree in Computer Science.
            During my studies, I gained a solid foundation in programming and
            problem-solving, which has been invaluable in my career.
          </p>
        </div>
        <p>
          In my free time, I enjoy staying up to date with the latest industry
          trends and technologies. I love attending tech conferences and
          engaging in online communities to expand my knowledge and connect with
          like-minded individuals.
        </p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Visit My Portfolio
        </a>
        <p>
          Feel free to reach out to me if you have any inquiries or if you'd
          like to collaborate on an exciting project. I'm always open to new
          opportunities and challenges!
        </p>
      </div>
    )

    return <div className="content">{staticContent}</div>
  }
}

export default About
