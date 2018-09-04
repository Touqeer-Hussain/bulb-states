import React, { Component } from 'react';
import {  Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import on from './bulbon.jfif'

class Bulbon extends Component{
    constructor(props){
        super(props);
    }
    buloff(){
      this.props.bul.setState({
          bulb: 0
      })
  }
  bulbreak(){
      this.props.bul.setState({
          bulb: 2
      })
  }
    render(){
        return (
<div class='ui segment'>
  <img src={on} class='ui medium centered image' alt=''/>
  <Grid centered columns={8}>
    <Grid.Column>
    <button class='ui circular massive icon button' role='button' size='large' style={{color: 'red'}} onClick={() => this.buloff()}>
  <i aria-hidden='true' class='lightbulb outline icon' />
</button>
<button class='ui circular massive icon button' role='button' style={{color: 'yellow'}} onClick={() => this.bulbreak()}>
  <i aria-hidden='true' class='times circle outline icon' />
</button>
    </Grid.Column>
  </Grid>
  </div>

        );
    }
}

export default Bulbon;