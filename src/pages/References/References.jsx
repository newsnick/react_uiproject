import React, { Component } from 'react'
import Welcome from '../Welcome/Welcome'

class References extends Component {
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
        <h2>References</h2>
        <p>
          Here are some references that have been influential in my journey:
        </p>
        <img
          src="https://pilbox.themuse.com/image.jpg?filter=antialias&h=343&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2Ffe5811e6-65d1-4a9e-a521-05fa81f944dd.jpg&w=700"
          alt="Book"
          style={{
            margin: '20px 20px 20px 0',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
          }}
        />
        <ul>
          <li>The Lean Startup by Eric Ries</li>
          <li>Thinking, Fast and Slow by Daniel Kahneman</li>
          <li>Influence: The Psychology of Persuasion by Robert Cialdini</li>
        </ul>

        <p>
          I have found these books to be invaluable resources that have shaped
          my thinking and approach to my work.
        </p>
        <div>
          <h3>Podcasts</h3>
          <p>I also highly recommend the following podcasts:</p>
          <ul>
            <li>The Tim Ferriss Show</li>
            <li>The School of Greatness with Lewis Howes</li>
            <li>The Tony Robbins Podcast</li>
          </ul>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVySsLoTO4wUpSTzbcUmsqsi-UeAy0-CwxA&usqp=CAU"
          alt="Podcast"
          style={{
            margin: '20px 20px 20px 0',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
          }}
        />
        <p>
          These podcasts feature inspiring interviews with successful
          individuals from various fields, offering valuable insights and
          practical advice.
        </p>
        <a
          href="https://example1.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Book Recommendations
        </a>
        <p>
          If you're interested in expanding your reading list, check out my
          curated book recommendations on various topics.
        </p>
        <img src="article.jpg" alt="Article" />
        <p>
          Stay updated with the latest industry trends and insights by reading
          articles from reputable sources and industry experts.
        </p>
        <a
          href="https://example2.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover Thought-Provoking Articles
        </a>
        <p>
          Explore a collection of thought-provoking articles that cover a wide
          range of topics, from business and technology to personal development
          and beyond.
        </p>
      </div>
    )

    return <div className="content">{staticContent}</div>
  }
}

export default References
