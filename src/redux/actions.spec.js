import {addTooltip, clearTooltip} from './actions'
import * as types from './action-types'

describe('Store', function() {

  describe('HotTip', function() {

    describe('Redux Actions', function() {

      describe('addTooltip', function() {

        it('called with tip and position', () => {
          const action = addTooltip('some tip', {x: 1, y: 2})

          expect(action).toEqual({
            type: types.UPDATE_TOOLTIP,
            payload: {
              tip: 'some tip',
              visible: true,
              position: {
                x: 1,
                y: 2
              }
            }
          })
          expect(action).toMatchSnapshot()
        })
      })

      describe('clearTooltip', function() {

        it('when calledcalled', () => {
          const action = clearTooltip()

          expect(action).toEqual({
            type: types.UPDATE_TOOLTIP,
            payload: {
              visible: false
            }
          })
          expect(action).toMatchSnapshot()
        })
      })
    })
  })
})
