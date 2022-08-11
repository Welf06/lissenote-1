import React from 'react'

import ExampleText from './exampleSide.js'
import "./examples.css"
import product from '../assets/temp.png';

function examples() {
  return (
    <div id='about' className='examples-div'>
    <div className='example-container'>
        <div className='head'> Examples </div>
        
        <div className='completecompo1'>
          <img className='image' src={product} alt="result-pic" />
          <div className='example-text example-text1'>
            <ExampleText text="High accuracy transcription fine-tuned for Indian English"/>
          </div>
        </div>
        
        <div className='completecompo2'>
          <img className='image' src={product} alt="result-pic" />
          <div className='example-text example-text2'>
            <ExampleText text="Important keywords, " text2="highlighted" text3=" with Wikipedia links"/>
          </div>
        </div>

        <div className='completecompo3'>
          <img className='image' src={product} alt="result-pic" />
          <div className='example-text example-text3'>
            <ExampleText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default examples