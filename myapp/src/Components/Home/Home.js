import React,{Component} from 'react'
import {Navbar,Nav,NavDropdown,Button,Form,FormControl,Card,Jumbotron,Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';
import './Home.css'
import axios from 'axios'
import Header from '../Header/Header'
import{Link} from 'react-router-dom'

export default class Home extends Component{

    constructor(){

        super()

        this.state={

            data:{}
        }
    }

    componentDidMount(){
    axios.get("https://corona.lmao.ninja/v2/countries/india").then((response)=>{

      this.setState({data:response.data})
       

    })
        
    }

render(){

    return(

<div className='container-fluid'>

<Header/>

    <div className="row">
        <div className="col-md-6">

        <Card className="badge badge-primary" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>India<span><img src="https://www.countryflags.io/IN/shiny/64.png"/></span></Card.Title>
   
    <Card.Text>
    <h2>Total cases:{this.state.data.cases}</h2>
    <h3>Today:{this.state.data.todayCases}</h3>
    </Card.Text>
   
  </Card.Body>
</Card>

        </div>

        
    </div>


    <div className="col-md-12 pt-5">
        <Jumbotron fluid>
  <Container>
    <h1>World</h1>
    
      <Link to="/world">See the world</Link>
    
  </Container>
</Jumbotron>


</div>

</div>

    )
}

}