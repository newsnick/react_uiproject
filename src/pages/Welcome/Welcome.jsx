import React, { Component } from 'react'
import Analytics from '../Analytics/Analytics'
import About from '../About/About'
import References from '../References/References'
import '../../styles/Welcome/Welcome.css'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnalytics: false,
      showAbout: false,
    }
  }

  handleAnalyticsClick = () => {
    this.setState({ showAnalytics: true })
  }

  handleAboutClick = () => {
    this.setState({ showAbout: true })
  }

  handleReferencesClick = () => {
    this.setState({ showReferences: true })
  }

  render() {
    if (this.state.showAnalytics) {
      return <Analytics />
    } else if (this.state.showAbout) {
      return <About />
    } else if (this.state.showReferences) {
      return <References />
    }
    const staticContent = (
      <div>
        <h2>Welcome to {this.props.website}!</h2>
        <p>
          We are thrilled to have you here and introduce you to our world of
          innovation and creativity.
        </p>
        <img
          src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
          width={300}
          height={200}
          alt="Welcome"
          style={{
            margin: '20px 20px 20px 0',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
          }}
        />
        <p>
          At our company in {this.props.city}, we strive to deliver exceptional
          solutions that cater to your unique needs and challenges.
        </p>
        <h3 className="links" onClick={this.handleAnalyticsClick}>
          Our Services
        </h3>
        <p>Explore the range of services we offer:</p>
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>User Experience Design</li>
          <li>Data Analytics</li>
          <li>Cloud Solutions</li>
        </ul>
        <h3 className="links" onClick={this.handleAboutClick}>
          Our Mission
        </h3>
        <p>
          Our mission is to empower businesses and individuals by leveraging
          technology and innovation. We believe that by combining creativity
          with cutting-edge solutions, we can make a positive impact in the
          digital world.
        </p>
        <h3 className="links" onClick={this.handleReferencesClick}>
          Why Choose Us
        </h3>

        <p>
          Here are a few reasons why we are the right choice for your projects:
        </p>
        <ul>
          <li>Experienced and Dedicated Team</li>
          <li>Client-Centric Approach</li>
          <li>Attention to Detail</li>
          <li>Innovative Solutions</li>
          <li>Timely Delivery</li>
        </ul>
        <h3>Contact Us</h3>
        <p>
          We'd love to hear from you! Get in touch with us to discuss your
          ideas, requirements, or any inquiries you may have:
        </p>
        <p>Email: info@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
    )

    return (
      <div className="content">
        {staticContent} {this.state.showAnalytics && <Analytics />}
      </div>
    )
  }
}

export default Welcome
