
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

    this.fullScript = [ 'MIKE',
      'And there was that kid who dressed',
      'up as Marilyn Monroe for the',
      'Halloween dance senior year.',
      'BILL',
      'Oh yeah, he had basket balls',
      'stuffed in his dress for boobs.',
      'MIKE',
      'And he tripped on the bleachers,',
      'bounced like three feet up in the',
      'air and ',
      'landed with his dress on',
      'his face.',
      'Everyone at the table laughs, except Jess.',
      'BILL',
      'What was that guy’s name again?',
      'MIKE',
      'I don’t remember, Jess will.',
      'Everyone looks over at Jess who isn’t paying attention.',
      'BILL',
      'Jess. Jess?',
      'JESSICA',
      'What?',
      'MIKE',
      'What was the name of that guy,',
      'senior year dressed as Marilyn',
      'Monroe to the Halloween dance.',
      'JESSICA',
      'Ben something.',
      'BILL',
      'That’s right, Ben Scott.' ]
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
      .then(res => res)
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
