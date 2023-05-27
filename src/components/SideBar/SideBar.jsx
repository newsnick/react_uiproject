import React, { Component } from 'react'

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: null,
    }
  }

  handleMouseOver = (index) => {
    this.setState({ activeItem: index })
  }

  handleMouseLeave = () => {
    this.setState({ activeItem: null })
  }

  render() {
    return (
      <div>
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <a
                href="#"
                onClick={() => this.props.onLinkClick('welcome')}
                className={`list-group-item list-group-item-action py-2 ripple ${
                  this.state.activeItem === 0 ? 'active' : ''
                }`}
                onMouseOver={() => this.handleMouseOver(0)}
                onMouseLeave={this.handleMouseLeave}
              >
                <span>Welcome</span>
              </a>
              <a
                href="#"
                onClick={() => this.props.onLinkClick('about')}
                className={`list-group-item list-group-item-action py-2 ripple ${
                  this.state.activeItem === 1 ? 'active' : ''
                }`}
                onMouseOver={() => this.handleMouseOver(1)}
                onMouseLeave={this.handleMouseLeave}
              >
                <span>About</span>
              </a>
              <a
                href="#"
                onClick={() => this.props.onLinkClick('references')}
                className={`list-group-item list-group-item-action py-2 ripple ${
                  this.state.activeItem === 2 ? 'active' : ''
                }`}
                onMouseOver={() => this.handleMouseOver(2)}
                onMouseLeave={this.handleMouseLeave}
              >
                <span>References</span>
              </a>
              <a
                href="#"
                onClick={() => this.props.onLinkClick('analytics')}
                className={`list-group-item list-group-item-action py-2 ripple ${
                  this.state.activeItem === 3 ? 'active' : ''
                }`}
                onMouseOver={() => this.handleMouseOver(3)}
                onMouseLeave={this.handleMouseLeave}
              >
                <span>Analytics</span>
              </a>
              <a
                href="#"
                onClick={() => this.props.onLinkClick('seo')}
                className={`list-group-item list-group-item-action py-2 ripple ${
                  this.state.activeItem === 4 ? 'active' : ''
                }`}
                onMouseOver={() => this.handleMouseOver(4)}
                onMouseLeave={this.handleMouseLeave}
              >
                <span>SEO</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default SideBar
