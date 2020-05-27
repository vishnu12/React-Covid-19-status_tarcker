import React,{Component} from 'react'
import './Header.css'
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


export default class Header extends Component{

    constructor(){

        super()
    }

render(){

    return(

<div className="container-fluid">
<Navbar bg="light" expand="lg" className="nav">
  <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/india">India</Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> 

</div>

    )
}

}