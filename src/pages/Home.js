import React, { Component } from 'react'

import Title from '../components/Title'

export class Home extends Component {
  render() {
    return (
      <>
      <h1>HOME PAGE</h1>
      <Title title="Section 1" desc="this is section 1" />
      <Title title="Section 2" desc="this is section 2"/>
      <Title title="Section 3" desc="this is section 3"/>
      </>
    )
  }
}

export default Home