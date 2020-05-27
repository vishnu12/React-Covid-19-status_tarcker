import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, Card, Jumbotron, Container,Accordion } from 'react-bootstrap'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';


export default class India extends Component {

    constructor() {

        super()

        this.state = {

            data: {}
        }
    }

    componentDidMount() {

    axios.get("https://api.covid19india.org/state_district_wise.json").then((response)=>{

console.log(response.data['Kerala'].districtData['Alappuzha'])
this.setState({data:response.data})

    })
    }

    render() {

let keys=Object.keys(this.state.data)
        return (

            <div className = 'container-fluid' >
            <h1> India Statewise List </h1> 

            
            {

             keys.map((itm,k)=>{

                let districts=this.state.data[itm].districtData
                
                let active=0
                let confirmed=0
                let deceased=0
                let recovered=0

                let districts_list=[]
                for(let x in districts){
                    
                    active+=districts[x].active
                    confirmed+=districts[x].confirmed
                    deceased+=districts[x].deceased
                    recovered+=districts[x].recovered
                    let ob=districts[x]
                    ob["district_name"]=x
                    districts_list.push(ob)
                }


                return(    
                    <Accordion defaultActiveKey="0">            
                <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="primary" eventKey={k}>
                        {itm}-<span className="btn-dark">Total cases-{confirmed} Active-{active} Deceased-{deceased} Recovered-{recovered}</span>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={k}>
                      <Card.Body>
                          
                      <table className="table table-bordered table-striped"> 
                      <thead>
                       <tr>
                     <td>District</td>
                   <td>Confirmed</td>
                          <td>Active</td>
                         <td>Recovered</td>
                         <td>Death</td>
                             </tr>

                            </thead>
                            <tbody>
                         {

                         districts_list.map((itm,k)=>{
                            return(
                            <tr>
                            <td>{itm.district_name}</td>
                            <td>{itm.confirmed}</td>
                            <td>{itm.active}</td>
                            <td>{itm.recovered}</td>
                            <td>{itm.deceased}</td>
                            
                            </tr>
                            )
                            


                         })



                         }




                            </tbody>

                       </table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  </Accordion>
                  )
                  
             })

            }
            
            

            </div>

        )
    }

}