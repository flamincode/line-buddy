import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recording: false
    }
    this.startRecording = this.startRecording.bind(this)
    this.stopRecording = this.stopRecording.bind(this)
  }
  
  startRecording () {
    this.setState({recording: true})
  }

  stopRecording () {
    this.setState({recording: false})
  }
  
  render() {
    return (
      <div className="App">
        <VoicePlayer
          play
          text="Testing the voice player"
        />
        <Button
          onClick={this.startRecording}
        >Start Recognition</Button>
        <Button
          onClick={this.stopRecording}
        >Stop Recognition</Button>
        {this.state.recording ?
          <VoiceRecognition
            continuous
            onResult={(e) => {alert(e)}}
            onStart={(e) => {alert(e)}}
            onEnd={(e) => {alert(e)}}
            onError={(e) => {alert(e)}}
          /> : ''}
      </div>
    );
  }
}

export default App;
