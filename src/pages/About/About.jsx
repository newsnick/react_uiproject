import React, { Component } from 'react'

class About extends Component {
  render() {
    const staticContent = (
      <div>
        <h2>About Section</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Pariatur facere
          temporibus ab autem similique, voluptatem eius reiciendis. Eligendi,
          impedit deserunt. Harum nam soluta rerum blanditiis, fugiat
          exercitationem tempora similique dicta.
        </p>
        <img src="image.jpg" alt="Image" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <blockquote>
          <p>"Quote"</p>
          <cite>Author</cite>
        </blockquote>
        <p>This is another paragraph.</p>
        <div>
          <h3>Subheading</h3>
          <p>This is a subheading content.</p>
        </div>
        <p>One more paragraph here.</p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Visit Example
        </a>
        <p>Final content element.</p>
      </div>
    )

    return <div className="content">{staticContent}</div>
  }
}

export default About
