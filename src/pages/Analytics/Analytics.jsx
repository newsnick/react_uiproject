import React, { Component } from 'react'
import Welcome from '../Welcome/Welcome'

class Analytics extends Component {
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
        <h2>Data Analytics</h2>
        <p>
          Welcome to the fascinating world of data analytics! Here, we uncover
          valuable insights and make informed decisions based on data-driven
          analysis.
        </p>
        <img
          src="https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1625807325/hevo-learn/1_J_EXEmUkOcg-rgzJudUhZQ.png?_i=AA"
          alt="Analytics"
          style={{
            margin: '20px 20px 20px 0',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
          }}
        />
        <ul>
          <li>Data Visualization</li>
          <li>Predictive Modeling</li>
          <li>Data Mining</li>
        </ul>
        <blockquote>
          <p>"Without data, you're just another person with an opinion."</p>
          <cite>W. Edwards Deming</cite>
        </blockquote>
        <p>
          Data analytics plays a crucial role in today's business landscape. By
          leveraging the power of data, we can identify patterns, trends, and
          outliers that lead to valuable insights.
        </p>
        <div>
          <h3>Data Visualization</h3>
          <p>
            Visualizing data is an essential step in understanding complex
            information. Through interactive charts, graphs, and dashboards, we
            transform raw data into actionable visual representations.
          </p>
        </div>
        <img
          src="https://assets-global.website-files.com/59e16042ec229e00016d3a66/613157f891f7741dd99a68b2_data%20visualization%20tips_blog%20listing.jpg"
          alt="Data Visualization"
          height={650}
          width={1000}
          style={{
            margin: '20px 20px 20px 0',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
          }}
        />
        <p>
          With the help of advanced analytics techniques, we uncover hidden
          patterns and relationships within large datasets. Our goal is to
          provide meaningful and visually appealing representations of data.
        </p>
        <a
          href="https://example1.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Data Visualization Examples
        </a>
        <p>
          Feel free to explore our collection of data visualization examples.
          These interactive visualizations showcase various techniques and
          concepts in the field of data analytics.
        </p>
        <img
          src="https://www.columnfivemedia.com/wp-content/uploads/2021/03/Data-visualization-design-1.png"
          alt="Predictive Modeling"
          height={650}
          width={1000}
          style={{
            margin: '20px 20px 20px 0',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
          }}
        />
        <p>
          Predictive modeling is another powerful tool in data analytics. By
          analyzing historical data, we can develop models that predict future
          outcomes and trends.
        </p>
        <a
          href="https://example2.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discover Predictive Modeling Applications
        </a>
        <p>
          Visit our website to discover real-world applications of predictive
          modeling across different industries. See how organizations are
          leveraging this technique to gain a competitive edge.
        </p>
        <a
          href="https://example3.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Data Mining Techniques
        </a>
        <p>
          Explore the world of data mining and learn about different techniques
          used to extract valuable insights from vast amounts of data.
        </p>
        <img src="data-mining.jpg" alt="Data Mining" />
        <p>
          At our analytics firm, we combine cutting-edge technology with domain
          expertise to uncover hidden patterns, relationships, and anomalies in
          your data.
        </p>
        <a
          href="https://example4.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in Touch for Data Analytics Solutions
        </a>
        <p>
          Ready to unlock the full potential of your data? Contact us today to
          discuss your data analytics needs and explore how we can help you
          achieve your business goals.
        </p>
      </div>
    )

    return <div className="content">{staticContent}</div>
  }
}

export default Analytics
