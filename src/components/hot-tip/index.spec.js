import React from 'react'
import HotTip from './'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import * as utils from './utils';

const middlewares = []
const mockStore = configureStore(middlewares)

describe('Components', function() {
  describe('HotTip', function() {
    let store
    beforeEach(() => {
      store = mockStore({})
    })

    it('renders', () => {
      const component = renderer.create(
          <HotTip store={store} tip="click me"><a>{'link'}</a></HotTip>
        ),
        tip = component.toJSON()

      expect(tip.type).toEqual('a')
      expect(tip.children[0]).toEqual('link')
      expect(tip).toMatchSnapshot()
    })

    it('hover', () => {
      utils.getBounds = jest.fn((one) => ({one}))
      utils.getPosition = jest.fn((one) => (two) => ({one, two}))
      const component = renderer.create(
        <HotTip store={store} tip="click me"><a>{'link'}</a></HotTip>
      )
      let tip = component.toJSON()

      // manually trigger the callback
      tip.props.onMouseOver('hello');
      expect(utils.getBounds).toBeCalledWith('hello')
      expect(utils.getPosition).toBeCalledWith('bottom')

      tip = component.toJSON();
      expect(tip).toMatchSnapshot();

      tip.props.onMouseOut();

      tip = component.toJSON();
      expect(tip).toMatchSnapshot();

      const actions = store.getActions()

      expect(actions[0].payload.position).toEqual({
        one: 'bottom',
        two: {one: 'hello'}
      })
      expect(actions[1].payload).toEqual({visible: false})
    })
  })
})
