import expect from 'expect'
import reducer from './reducer'
import * as types from './action-types'

describe('Store', function() {

  describe('HotTip', function() {

    describe('Reducer', function() {

      let app = null

      beforeEach(function() {
        app = {
          id: 1,
          name: 'My App'
        }
      })

      it('UPDATE_TOOLTIP', function() {
        const state = reducer({}, {type: types.UPDATE_TOOLTIP, app})

        expect(state.app).toEqual(app)
      })

    })

  })

})
