import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {HotTipRoot, HotTip} from '../src'
import store from './store'

render((
  <Provider store={store}>
    <div className="body">
      {/* Place this anchor as close to the root level of your app as possible */}
      {/* It relies on 'connect' so it must be within a react-redux provider component */}
      <HotTipRoot/>
      <div className="header">
        <h1>
          {'These are examples of HotTip in action '}
          <HotTip text="View source for the makup" position="right"><i className="fa fa-question-circle"/></HotTip>
        </h1>
      </div>
      <div className="examples">
        <h2>
          {'Positioning'}
          <HotTip text="View source for the makup" position="right"><i className="fa fa-question-circle"/></HotTip>
        </h2>
        <h2>
          {'Offsets'}
          <HotTip text="View source for the makup" position="right"><i className="fa fa-question-circle"/></HotTip>
        </h2>
      </div>
    </div>
  </Provider>
), document.getElementById('application'))
