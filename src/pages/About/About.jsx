import React, { Component } from 'react'
import Welcome from '../Welcome/Welcome'
import '../../styles/About/About.css'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showWelcome: false,
    }
  }

  handleWelcomeClick = () => {
    this.setState({ showWelcome: true })
  }

  render() {
    if (this.state.showWelcome) {
      return <Welcome />
    }

    const staticContent = (
      <div>
        <h3 className="link" onClick={this.handleWelcomeClick}>
          back to home
        </h3>

        <h2>About Me</h2>
        <p>
          Hi there! I'm {this.props.name}, a passionate and dedicated individual
          with a love for {this.props.interests} and {this.props.interests}. I
          believe in the power of innovation and enjoy exploring new
          possibilities in the digital realm.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-MQxdkdbc2CIRfmqEWX5E6x6ZTO6P41piQ&usqp=CAU"
          alt="Profile Picture"
          style={{
            margin: '20px 20px 20px 0',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
          }}
        />
        <ul>
          <li>Web Development</li>
          <li>User Experience Design</li>
          <li>Problem Solving</li>
        </ul>

        <blockquote className="intro-text">
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
        <a
          href="https://img.freepik.com/vektoren-kostenlos/handgezeichnete-portfolio-vorlage_52683-79646.jpg?w=2000"
          target="_blank"
          rel="noopener noreferrer"
        >
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
