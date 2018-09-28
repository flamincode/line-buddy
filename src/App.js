import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components';
// var pdfText = require('pdf-text');
// var pathToPdf = '/file' + "/Stanley.pdf";

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recording: false
    }
    this.startRecording = this.startRecording.bind(this)
    this.stopRecording = this.stopRecording.bind(this)
    this.registerRecording = this.registerRecording.bind(this)
  }
  
  startRecording () {
    this.setState({recording: true})
  }

  stopRecording () {
    this.setState({recording: false})
  }

  registerRecording (result) {
    let transcript = result.finalTranscript
    console.error(transcript)
    this.setState({recordedResult: transcript})
  }

  getText () {
    // pdfText(pathToPdf, function(err, chunks) {
    //   if (err) console.error(err)
    //   console.error(chunks)
    // })
  }
  
  render() {
    return (
      <div className="App">
        <VoicePlayer
          play
          text="Testing"
        />
        <Button
          onClick={this.getText}
        >Get Text</Button>
        <Button
          onClick={this.startRecording}
        >Start Recognition</Button>
        <Button
          onClick={this.stopRecording}
        >Stop Recognition</Button>
        {this.state.recording ?
          <VoiceRecognition
            continuous
            onResult={(e) => {this.registerRecording(e)}}
            // onStart={(e) => {console.error(e)}}
            // onEnd={(e) => {console.error(e)}}
            // onError={(e) => {console.error(e)}}
          /> : ''}
        {this.state.recordedResult ? 
          <div>{this.state.recordedResult}</div>
          : ''}
      </div>
    );
  }
}

export default App;
