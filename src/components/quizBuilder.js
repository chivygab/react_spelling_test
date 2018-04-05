import React, { Component } from 'react'
import WordList from './WordList'
import speak from '../lib/speak'

class QuizBuilder extends Component {

  render(){
    return(
      <div>
        <form onSubmit={this.props.addWord}>
          <input id="word"></input>
          <button>Add word</button>
        </form>
        <WordList wordList={this.props.wordList} />
        <button onClick={this.props.startQuiz}>Start Test</button>
        <button onClick={() => speak('Testing 1,2,3')}>Audio Test</button>
      </div>
    )
  }

}

export default QuizBuilder
