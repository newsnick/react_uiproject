import React, { Component } from 'react'
import Welcome from '../Welcome/Welcome'

class SEO extends Component {
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
        <h2>Search Engine Optimization (SEO)</h2>
        <p>
          Boost your online visibility and drive organic traffic to your website
          with our expert SEO services.
        </p>
        <img
          src="https://www.searchenginejournal.com/wp-content/uploads/2017/12/B5441374-E3D9-4644-9FD1-21566E6EF40F.jpeg"
          alt="SEO"
          height={250}
          width={400}
          style={{
            margin: '20px 20px 20px 0',
          }}
        />
        <h3>What is SEO?</h3>
        <p>
          SEO stands for Search Engine Optimization. It is the process of
          optimizing your website and its content to improve its visibility in
          search engine results pages (SERPs).
        </p>
        <h3>Why is SEO Important?</h3>
        <p>
          With the increasing competition in the online space, it is crucial to
          have a strong online presence. Here's why SEO is important:
        </p>
        <ul>
          <li>
            Improved Search Engine Rankings: Higher rankings in search results
            can lead to increased organic traffic.
          </li>
          <li>
            Increased Website Visibility: SEO helps your website appear in
            relevant search queries, making it more visible to your target
            audience.
          </li>
          <li>
            Enhanced User Experience: SEO involves optimizing your website's
            structure, design, and content, resulting in a better user
            experience.
          </li>
          <li>
            Brand Credibility: When your website appears among the top search
            results, it instills trust and credibility in your brand.
          </li>
          <li>
            Long-Term Results: SEO is a long-term strategy that can provide
            sustainable results and ongoing benefits.
          </li>
        </ul>
        <h3>Our SEO Services</h3>
        <p>
          We offer a comprehensive range of SEO services tailored to meet your
          specific needs:
        </p>
        <ul>
          <li>Keyword Research and Analysis</li>
          <li>On-Page Optimization</li>
          <li>Technical SEO Audit</li>
          <li>Link Building</li>
          <li>Content Creation and Optimization</li>
          <li>Local SEO</li>
          <li>Mobile SEO</li>
          <li>SEO Reporting and Analysis</li>
        </ul>
        <h3>Why Choose Us?</h3>
        <p>Here's why we are the right choice for your SEO needs:</p>
        <ul>
          <li>
            Expertise: Our team of SEO specialists has years of experience and
            in-depth knowledge of the latest industry trends.
          </li>
          <li>
            Customized Strategies: We develop tailored SEO strategies based on
            thorough research and analysis of your business and target audience.
          </li>
          <li>
            Transparent Communication: We believe in open and transparent
            communication, keeping you informed about the progress and results
            of your SEO campaigns.
          </li>
          <li>
            Proven Results: Our track record of delivering measurable results
            speaks for itself. We have helped numerous clients achieve higher
            search rankings and increased organic traffic.
          </li>
          <li>
            Continuous Optimization: SEO is an ongoing process, and we
            continuously optimize and refine our strategies to ensure long-term
            success.
          </li>
        </ul>
        <h3>Get Started with SEO</h3>
        <p>
          Ready to improve your online visibility and attract more organic
          traffic? Contact us today to discuss your SEO goals and get started on
          your journey to success.
        </p>
        <p>Email: info@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
    )

    return <div className="content">{staticContent}</div>
  }
}

export default SEO
