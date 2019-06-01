import React, { Component } from 'react';
import json from './json';

export default class Words extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      items:json.Sheet1,
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
                 <div className="text-primary text-center h5">{d.english} </div>
                 <div className="text-danger text-center h5">{d.marathi} </div>
                
                 </div>
          </div>
        })
       }
     </div>  
    );
  }
} 