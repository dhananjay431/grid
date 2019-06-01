import React, { Component } from 'react';

export default class Hello extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      items:[],
      isLoaded:false
    }
  }
  componentDidMount() {
    let that = this;
    fetch("assets/english_tut").then(res=> res.json()) .then( (result)=> {
      console.log(result);
      that.setState({
            items:result.data,
            isLoaded:true
        });
    }
    , (error)=> {
      that.setState( {
            isLoaded: true
        }
        );
    }
    )
}
  render() {
    return (
      <pre>
        { JSON.stringify(this.state.items,null,4)}
      </pre>
    
    );
  }
}