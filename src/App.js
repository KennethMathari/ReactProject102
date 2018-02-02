import React, { Component } from 'react';

class App extends Component{
  constructor()
  {
    super();
    this.state={
      data:[],/*[
        {
          id:1,
          name:'kenneth'
        },
        {
          id:2,
          name:'Mathari'
        },
        {
          id:3,
          name:'Ndungu'
        }
      ]*/
    }
  }

  componentDidMount(){
    fetch('https://dry‑harbor‑88607.herokuapp.com/api/users').
    then((Response)=>Response.json()).
    then((findresponse)=>
    {
       console.log(findresponse.user)
       this.setState({
         data:findresponse.user,

       })
    })
  }



  render()
  {
    return(
      <div>
        {
          this.state.data.map((dynamicData,key)=>
          <div>
            <h3>Name</h3>
            <ul>
              <li>{dynamicData.name}</li>
              <li>{dynamicData.email}</li>
              <li>{dynamicData.password}</li>
              <li>{dynamicData.mobile_number}</li>
            </ul>
            </div>
         
        )
        }
      </div>
    )
  }
}

export default App;
