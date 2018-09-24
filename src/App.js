import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components'

class App extends Component {
  
  renderRecognition () {
    // return <VoiceRecognition
    //   continuous
    //   onResult={(e) => {alert(e)}}
    //   onStart={(e) => {alert(e)}}
    //   onEnd={(e) => {alert(e)}}
    //   onError={(e) => {alert(e)}}
    // />
    alert('hellp')
  }
  
  render() {
    return (
      <div className="App">
        <VoicePlayer
          play
          text="Testing the voice player"
        />
        <Button
          onClick={this.renderRecognition}
        >Start Recognition</Button>
      </div>
    );
  }
}

export default App;
