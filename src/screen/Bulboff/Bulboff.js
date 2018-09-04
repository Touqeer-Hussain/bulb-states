import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import off from './bulboff.jpg'

class Bulboff extends Component{
    constructor(props){
        super(props);
    }

    bulfon(){
        this.props.bul.setState({
            bulb: 1
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
  <img src={off} class='ui medium centered image' alt=''/>
  <Grid centered columns={8}>
    <Grid.Column>
    <button class='ui circular massive icon button' role='button' size='large' 
    style={{color: 'green'}} onClick={() => this.bulfon()}>
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

export default Bulboff;