import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Break from './bulbbreak.jpg'

class Bulbbreak extends Component{
    constructor(props){
        super(props);
    }
    
    bulfon(){
        this.props.bul.setState({
            bulb: 1
        })
    }
    buloff(){
        this.props.bul.setState({
            bulb: 0
        })
    }

    render(){
        return (
<div class='ui segment'>
  <img src={Break} class='ui medium centered image' alt=''/>
  <Grid centered columns={8}>
    <Grid.Column>
    <button class='ui circular massive icon button' role='button' size='large' style={{color: 'green'}} onClick={() => this.bulfon()}>
  <i aria-hidden='true' class='lightbulb outline icon' />
</button>
<button class='ui circular massive icon button' role='button' style={{color: 'red'}} onClick={() => this.buloff()}>
  <i aria-hidden='true' class='lightbulb outline icon' />
</button>
    </Grid.Column>
  </Grid>
  </div>
        );
    }
}

export default Bulbbreak;