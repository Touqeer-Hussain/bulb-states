import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Bulbbreak from './screen/Bulbbreak/Bulbbreak';
import Bulbon from './screen/Bulbon/Bulbon';
import Bulboff from './screen/Bulboff/Bulboff';




class App extends Component {
constructor(){
  super();
  
  this.state = {
    bulb: 0

  }
}  


  
  render() {
      return(
        <div className="App">
        {this.state.bulb == 0 &&  <Bulboff bul={this}/>}
        {this.state.bulb == 1 &&  <Bulbon bul={this}/>}
        {this.state.bulb == 2 &&  <Bulbbreak bul={this}/>}
        </div>
      );
  }
}

export default App;
