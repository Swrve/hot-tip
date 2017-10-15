import React from 'react'
import HotTip from './'
import renderer from 'react-test-renderer';
import {
  getPosition,
  getBounds,
  getBottom,
  getTop,
  getRight,
  getLeft
} from './utils';

describe('Utils', function() {
  describe('getPosition', function() {
    it('returns appropriate function (curries)', () => {
      expect(getPosition('top')).toEqual(getTop)
      expect(getPosition('right')).toEqual(getRight)
      expect(getPosition('left')).toEqual(getLeft)
      expect(getPosition('bottom')).toEqual(getBottom)
      expect(getPosition()).toEqual(getBottom)
    })
  })
})
