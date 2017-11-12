import reducer from './reducer'
import * as types from './action-types'

describe('Store', function() {

  describe('HotTip', function() {

    describe('Reducer', function() {

      let payload = null

      describe('UPDATE_TOOLTIP', function() {
        beforeEach(function() {
          payload = {
            tip: 'tooltip',
            visible: true,
            position: {
              anything: true
            }
          }
        })

        it('spreads payload correctly', () => {
          const state = reducer({}, {type: types.UPDATE_TOOLTIP, payload})

          expect(state.tip).toEqual(payload.tip)
          expect(state.visible).toEqual(payload.visible)
          expect(state.anything).toEqual(payload.position.anything)
        })

        it('unknown types return state', () => {
          const initialState = {anything: true},
            state = reducer(initialState, {type: 'unknown type', payload})

          expect(state.tip).not.toEqual(payload.tip)
          expect(state.visible).not.toEqual(payload.visible)
          expect(state).toEqual(initialState)
        })
      })
    })
  })
})
