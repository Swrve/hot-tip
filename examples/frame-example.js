import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {HotTipRoot, HotTip} from '../src'
import store from './store'

const text = 'A piece of text.'
const longText = ['A very long piece of text.', text, text, text, text, text, text, text, text].join(' ')

render((
  <Provider store={store}>
    <HotTipRoot>
      {/* Place this anchor as close to the root level of your app as possible */}
      {/* It relies on 'connect' so it must be within a react-redux provider component */}
      <div className="examples">
        <HotTip text={longText} position="top"><div className="tip top-left">{'TOP'}</div></HotTip>
        <HotTip text={longText} position="top"><div className="tip top-center">{'TOP'}</div></HotTip>
        <HotTip text={longText} position="top"><div className="tip top-right">{'TOP'}</div></HotTip>
        <HotTip text={longText} position="left"><div className="tip left">{'LEFT'}</div></HotTip>
        <HotTip text={longText}><div className="tip center">{'DEFAULT'}</div></HotTip>
        <HotTip text={longText} position="right"><div className="tip right">{'RIGHT'}</div></HotTip>
        <HotTip text={longText}><div className="tip bottom-left">{'BOTTOM'}</div></HotTip>
        <HotTip text={longText}><div className="tip bottom-center">{'BOTTOM'}</div></HotTip>
        <HotTip text={longText}><div className="tip bottom-right">{'BOTTOM'}</div></HotTip>
      </div>
    </HotTipRoot>
  </Provider>
), document.getElementById('application'))
