import React, { Component } from 'react'

import Title from '../components/Title'

export class Home extends Component {
    constructor(){
        super();
        this.state={
            title:"Tatvasoft Project",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo ex officiis fuga aliquam numquam tempora ipsa deserunt ipsam "
        }
    }
  render() {
    return (
      <>
      <h1>HOME PAGE</h1>
      <Title title={this.state.title} desc={this.state.desc} />
      <Title title="Section 1" desc="this is section 1" />
      <Title title="Section 2" desc="this is section 2"/>
      <Title title="Section 3" desc="this is section 3"/>
      
      </>
    )
  }
}

export default Home