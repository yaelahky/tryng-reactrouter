import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse, Nav } from "reactstrap";
import { withRouter, Link } from 'react-router-dom';

class NavBarEdited extends Component {
  state = {
    matches: window.matchMedia("(min-width: 768px)").matches,
    collapsed: false
  }

  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addListener(handler);
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  handleLogout = (event) => {
    event.preventDefault()
    try {
      localStorage.removeItem('dataAccount')
      this.props.history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>

        {this.state.matches ? (
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Arkademy Store</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/order">Pesan</Link>
              </NavItem>
            </Nav>
            {/* <NavbarText>{this.state.userData.username}</NavbarText> */}
            <Nav>
            <NavItem>
                <NavLink onClick={(event) => {this.handleLogout(event)}}>Logout</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        ) : (
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto">Arkademy Store</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <Link to="/order">Pesan</Link>
                  </NavItem>
                  <NavItem>
                <NavLink onClick={(event) => {this.handleLogout(event)}}>Logout</NavLink>
              </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          )}
      </div>
    )
  }
}

export default withRouter(NavBarEdited);