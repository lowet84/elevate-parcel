import React from 'react'
import { Demo } from './components/Demo'
import { texts } from "./texts";

export default () => {
  return (
    <div>
      <div>React</div>
      {texts.map((text, index) => <Demo key={index} text={text}></Demo>)}

    </div>
  )
}