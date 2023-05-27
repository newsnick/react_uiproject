import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const staticContent = (
      <div>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      </div>
    )

    return <div className="content">{staticContent}</div>
  }
}

export default Welcome
