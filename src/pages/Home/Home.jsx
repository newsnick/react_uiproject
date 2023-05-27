/* import React, { Component } from 'react'
import '../../styles/Home/Home.module.css'
import SideBar from '../../components/SideBar/SideBar'
import Welcome from '../Welcome/Welcome'
import References from '../References/References'
import About from '../About/About'
import Analytics from '../Analytics/Analytics'
import SEO from '../SEO/SEO'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedContent: 'home',
    }
  }

  handleLinkClick = (content) => {
    this.setState({ selectedContent: content })
  }

  renderContent() {
    const { selectedContent } = this.state

    switch (selectedContent) {
      case 'welcome':
        return <Welcome />
      case 'about':
        return <About />
      case 'references':
        return <References />
      case 'analytics':
        return <Analytics />
      case 'seo':
        return <SEO />
      default:
        return null
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col col-lg-3 m-0 mt-4 sidebar-container">
          <SideBar onLinkClick={this.handleLinkClick} />
        </div>
        <div className="col-8 mt-5">{this.renderContent()}</div>
      </div>
    )
  }
}

export default Home
 */
import React, { Component } from 'react'
import '../../styles/Home/Home.module.css'
import SideBar from '../../components/SideBar/SideBar'
import Welcome from '../Welcome/Welcome'
import References from '../References/References'
import About from '../About/About'
import Analytics from '../Analytics/Analytics'
import SEO from '../SEO/SEO'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedContent: 'home',
    }
  }

  handleLinkClick = (content) => {
    this.setState({ selectedContent: content })
  }

  renderContent() {
    const { selectedContent } = this.state

    switch (selectedContent) {
      case 'welcome':
        return <Welcome website=">>WEBSITE NAME<<" city=">>CITY NAME HERE<<" />
      case 'about':
        return <About prop3="value3" prop4="value4" />
      case 'references':
        return <References prop5="value5" prop6="value6" />
      case 'analytics':
        return <Analytics prop7="value7" prop8="value8" />
      case 'seo':
        return <SEO prop9="value9" prop10="value10" />
      default:
        return null
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col col-lg-3 m-0 mt-4 sidebar-container">
          <SideBar onLinkClick={this.handleLinkClick} />
        </div>
        <div className="col-8 mt-5">{this.renderContent()}</div>
      </div>
    )
  }
}

export default Home
