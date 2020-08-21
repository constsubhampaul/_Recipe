import React,{Component} from 'react';
import {Navbar,NavbarBrand,Nav,Jumbotron,NavItem,Collapse,NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      isNavOpen:false
    }
    this.toogleNav=this.toogleNav.bind(this);
  }
  toogleNav(){
    this.setState({
      isNavOpen:!this.state.isNavOpen
    });
  }
  render(){
    return(
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
      <NavbarToggler onClick={this.toogleNav} />
      <NavbarBrand className="mr-auto" href="/">
        <img src="https://i.ibb.co/fxmGMTb/logo.jpg" height="30" width="41" alt="yummy foods" />
      </NavbarBrand>
      <Collapse isOpen={this.state.isNavOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink className="nav-link" to="/home">
              <span className="fa fa-home fa-lg"></span>Home
              </NavLink>
              <NavLink className="nav-link" to="/aboutus">
              <span className="fa fa-home fa-lg"></span>About Us
              </NavLink>
              <NavLink className="nav-link" to="/menu">
              <span className="fa fa-home fa-lg"></span>Menu
              </NavLink>
              <NavLink className="nav-link" to="/contactus">
              <span className="fa fa-home fa-lg"></span>Contact Us
              </NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-md-5 m-1">
              <h1>Recipe World</h1>
              <p>Yummy recipes that will delight your mood and heart.</p>
        </div></div></div>
        </Jumbotron>
         </React.Fragment>
    );
  }
}
export default Header;