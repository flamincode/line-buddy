
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import { VoicePlayer, VoiceRecognition } from 'react-voice-components';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: [],
      recording: false,
      script: []
    }
    this.startRecording = this.startRecording.bind(this)
    this.stopRecording = this.stopRecording.bind(this)
    this.registerRecording = this.registerRecording.bind(this)
    this.getText = this.getText.bind(this)
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
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
    console.error('here')
    fetch('/pdfreader')
      .then(res => res.text())
      .then(script => console.error(script));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
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
        {this.state.script ? 
          <div>{this.state.script}</div>
          : ''}

      </div>
    );
  }
}

export default App;
