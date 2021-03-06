import React, { Component } from 'react';
import json from './json';
const pStyle = {
  'max-width': '18rem'
};
export default class Hello extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      items:json.Sheet3,
      isLoaded:false
    }
    console.log(this.state);
  }
  render() {
    return (
     <div className="row">
       {
         this.state.items.map((d,i)=>{
          return <div className="col-md-3 col-sm-12">  
          
                 <div className="shadow p-3 mb-1 bg-white rounded">
                 <div className="badge badge-info">{i}</div>
                 <div className="text-primary text-center h5">{d.en} </div>
                 <div className="text-success text-center h6">{d.mr} </div>
                 <div className="text-success text-center h6">{d.hi} </div>
                 </div>
          </div>
        })
       }
     </div>  
    );
  }
} 