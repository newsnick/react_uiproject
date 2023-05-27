import React, { Component } from 'react'

class References extends Component {
  render() {
    const staticContent = (
      <div>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img src="image1.jpg" alt="Image 1" />
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
        <img src="image2.jpg" alt="Image 2" />
        <p>One more paragraph here.</p>
        <a
          href="https://example1.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Example 1
        </a>
        <p>Final content element.</p>
        <img src="image3.jpg" alt="Image 3" />
        <p>Another paragraph.</p>
        <a
          href="https://example2.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Example 2
        </a>
        <p>Last content element.</p>
      </div>
    )

    return <div className="content">{staticContent}</div>
  }
}

export default References
