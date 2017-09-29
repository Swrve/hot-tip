import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {HotTipRoot, HotTip} from '../src'
import store from './store'

const text = 'A piece of text.'
const longText = ['A very long piece of text.', text, text, text, text, text, text, text, text].join(' ')

render((
  <Provider store={store}>
    <div className="body">
      {/* Place this anchor as close to the root level of your app as possible */}
      {/* It relies on 'connect' so it must be within a react-redux provider component */}
      <HotTipRoot/>
      <div className="header">
        <h1>
          {'These are examples of HotTip in action '}
          <HotTip text="View source for the markup on github /examples" position="right">
            <i className="fa fa-question-circle"/>
          </HotTip>
        </h1>
      </div>
      <div className="examples">
        <h2>{'Positioning'}</h2>
        <p>
          {'HotTip has four basic positions '}
          <HotTip text="Top" position="top"><em>{'Top'}</em></HotTip>{', '}
          <HotTip text="Left" position="left"><em>{'Left'}</em></HotTip>{', '}
          <HotTip text="Right" position="right"><em>{'Right'}</em></HotTip>{', and '}
          <HotTip text="Bottom (default)"><em>{'Bottom'}</em></HotTip>{'.'}
        </p>
        <h2>{'Extra Long tips'}</h2>
        <p>
          {'There is a maximum width of 200px for a tooltip. Overflow and wrapping is handled differently for each position '}
          <HotTip text={longText} position="top"><em>{'Top'}</em></HotTip>{', '}
          <HotTip text={longText} position="left"><em>{'Left'}</em></HotTip>{', '}
          <HotTip text={longText} position="right"><em>{'Right'}</em></HotTip>{', and '}
          <HotTip text={longText}><em>{'Bottom'}</em></HotTip>{'.'}
        </p>
        <h2>{'Position auto-adjustments'}</h2>
        <p>
          {'Hot Tip will do some magic to make sure your tooltips are always visible even if the target is close to a page boundary.'}
        </p>
        <iframe src="/examples/frame-example.html" width="100%" height="300px"/>
        <h2>{'API'}</h2>
        <p>
          {'HotTip exposes four modules: two components, a reducer and some utils. The two components are '}
          <HotTip text="This should be a singleton at the root of your application.">
            <em>{'HotTipRoot'}</em>
          </HotTip>{' and '}
          <HotTip text="This is a wrapper around anything that has a tooltip.">
            <em>{'HotTip'}</em>
          </HotTip>{'.'}
        </p>
        <p>
          {'The reducer should be included in your redux combineReducers array, it is \
            exported as '}
          <HotTip text="Notice the lower-case 'h'.">
            <em>{'hotTipReducer'}</em>
          </HotTip>{'. '}
          {'The HotTipRoot is connected to a data-store of this exact name so it\'s advised to use destructuring.'}
        </p>
        <p>
          {'The utils just provide access to the same positioning calculations that HotTip uses in case they are \
            useful elsewhere in an application (why not?).'}
        </p>
        <h2>{'Licence & Contribute'}</h2>
        <p>
          {'HotTip is on MIT so can be used anywhere. Credit is always appreciated. Fork and PR to help improve the \
            product.'}
        </p>
      </div>
    </div>
  </Provider>
), document.getElementById('application'))
