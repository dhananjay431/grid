import React, { Component } from 'react';
import json from './json';

export default class Verbs extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      items:json.Sheet2,
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
                 <table className="table">
                 <thead>
                 <tr>
                         <th>#</th>
                         <th>{d.v1}</th>
                         <th>{d.v2}</th>
                         <th>{d.v3}</th>
                     </tr>
                 </thead>
                     <tbody>
                     <tr>
                         <th> {i}</th>
                         <td>{d.m1}</td>
                         <td>{d.m2}</td>
                         <td>{d.m3}</td>
                     </tr>
                     </tbody>
                     
                 </table>
                 </div>
          </div>
        })
       }
     </div>  
    );
  }
} 