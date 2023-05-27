import React, { Component } from 'react'

class References extends Component {
  render() {
    const staticContent = (
      <div>
        <h2>References</h2>
        <p>
          Here are some references that have been influential in my journey:
        </p>
        <img src="book.jpg" alt="Book" />
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
        <img src="podcast.jpg" alt="Podcast" />
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
