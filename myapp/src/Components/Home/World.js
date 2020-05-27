import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import './World.css'
export default class World extends Component{

    constructor(){

        super()

        this.state={
           
            data:[]
        }

        
    }

    
    componentDidMount(){

       axios.get("https://corona.lmao.ninja/v2/countries/").then((response)=>{

        this.setState({data:response.data})
        

       })
        
    }

render(){

    return(

<div className='container'>


<h1>Wold Data</h1>

<div className="col-md-12">
<table className="table table-bordered table-primary table-striped">
<thead>
<tr className="tr">
<td>Country Name</td>
<td>Total cases</td>
<td>Active cases</td>
</tr>
</thead>
<tbody>
{

this.state.data.map((itm,k)=>{

return(
<tr>
<td>{itm.country}
<img style={{width:'64px',marginLeft:'10px'}} src={itm.countryInfo.flag }/>
</td>
<td>{itm.cases}</td>
<td>{itm.active}</td>
</tr>


)


})




}


</tbody>

</table>


</div>

</div>



    )
}

}