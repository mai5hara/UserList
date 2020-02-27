import React, { Component } from 'react';
import Container from './Container';
// import Card from './Card';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      userLists:undefined
    }
  }

  componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
    
      this.setState({userLists: data});

    }).catch(err=>{
      console.log(err)
    })
  }


  render() {
    const userlists = this.state.userLists
    console.log(this.state.userLists)

    return (
      <div>
        {
          userlists&&userlists.map((userlist,index)=>{
            return <Container userData={userlist} key={index}></Container>
          })
        }
      </div>
    );
  }
}

