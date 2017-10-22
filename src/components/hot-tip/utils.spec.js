import {
  getPosition,
  getBottom,
  getTop,
  getRight,
  getLeft
} from './utils';

describe('Utils', function() {
  const getBounds = (
    left = 0,
    top = 0,
    width = 80,
    height = 10,
    clientWidth = 800,
    clientHeight = 900) => {

    return {top, left, width, height, clientWidth, clientHeight}
  }

  describe('getPosition', function() {
    it('returns appropriate function (curries)', () => {
      expect(getPosition('top')).toEqual(getTop)
      expect(getPosition('right')).toEqual(getRight)
      expect(getPosition('left')).toEqual(getLeft)
      expect(getPosition('bottom')).toEqual(getBottom)
      expect(getPosition()).toEqual(getBottom)
    })
  })

  describe('getBottom/getTop horizontal offsets', function() {
    describe('getBottom', function() {
      it('Should not offset when mid is 100px from edge', () => {
        const position = getBottom(getBounds(60, 300))

        expect(position.layoutClass).toEqual('centred')
        expect(position.positionClass).toEqual('bottom')
        expect(position.x).toEqual(100)
        expect(position.y).toEqual(310)
        expect(position).toMatchSnapshot()
      })

      it('Should not offset when mid is 100px from (right) edge', () => {
        const position = getBottom(getBounds(660, 300))

        expect(position.layoutClass).toEqual('centred')
        expect(position.positionClass).toEqual('bottom')
        expect(position.x).toEqual(700)
        expect(position.y).toEqual(310)
        expect(position).toMatchSnapshot()
      })

      it('Should offset to left when < 100px from right', () => {
        const position = getBottom(getBounds(661, 300))

        expect(position.layoutClass).toEqual('right-offset')
        expect(position.positionClass).toEqual('bottom')
        expect(position.x).toEqual(701)
        expect(position.y).toEqual(310)
        expect(position).toMatchSnapshot()
      })

      it('Should offset to right when mid < 100px from left', () => {
        const position = getBottom(getBounds(59, 300))

        expect(position.layoutClass).toEqual('left-offset')
        expect(position.positionClass).toEqual('bottom')
        expect(position.x).toEqual(99)
        expect(position.y).toEqual(310)
        expect(position).toMatchSnapshot()
      })
    })

    describe('getTop', function() {
      it('Should not offset when mid is 100px from edge', () => {
        const position = getTop(getBounds(60, 300))

        expect(position.layoutClass).toEqual('centred')
        expect(position.positionClass).toEqual('top')
        expect(position.x).toEqual(100)
        expect(position.y).toEqual(300)
        expect(position).toMatchSnapshot()
      })

      it('Should not offset when mid is 100px from (right) edge', () => {
        const position = getTop(getBounds(660, 300))

        expect(position.layoutClass).toEqual('centred')
        expect(position.positionClass).toEqual('top')
        expect(position.x).toEqual(700)
        expect(position.y).toEqual(300)
        expect(position).toMatchSnapshot()
      })

      it('Should offset to left when < 100px from right', () => {
        const position = getTop(getBounds(661, 300))

        expect(position.layoutClass).toEqual('right-offset')
        expect(position.positionClass).toEqual('top')
        expect(position.x).toEqual(701)
        expect(position.y).toEqual(300)
        expect(position).toMatchSnapshot()
      })

      it('Should offset to right when mid < 100px from left', () => {
        const position = getTop(getBounds(59, 300))

        expect(position.layoutClass).toEqual('left-offset')
        expect(position.positionClass).toEqual('top')
        expect(position.x).toEqual(99)
        expect(position.y).toEqual(300)
        expect(position).toMatchSnapshot()
      })
    })
  })

  describe('getLeft/getRight vertical offsets', function() {
    describe('getRight', function() {
      it('Should not offset when vertical mid is 40px from top', () => {
        const position = getRight(getBounds(400, 45))

        expect(position.layoutClass).toEqual('mid')
        expect(position.positionClass).toEqual('right')
        expect(position.x).toEqual(480)
        expect(position.y).toEqual(50)
        expect(position).toMatchSnapshot()
      })

      it('Should not offset when vertical mid is 40px from bottom', () => {
        const position = getRight(getBounds(400, 845))

        expect(position.layoutClass).toEqual('mid')
        expect(position.positionClass).toEqual('right')
        expect(position.x).toEqual(480)
        expect(position.y).toEqual(850)
        expect(position).toMatchSnapshot()
      })

      it('Should offset to left when < 100px from right', () => {
        const position = getRight(getBounds(400, 44))

        expect(position.layoutClass).toEqual('top-offset')
        expect(position.positionClass).toEqual('right')
        expect(position.x).toEqual(480)
        expect(position.y).toEqual(49)
        expect(position).toMatchSnapshot()
      })

      it('Should offset to right when mid < 100px from left', () => {
        const position = getRight(getBounds(400, 846))

        expect(position.layoutClass).toEqual('bottom-offset')
        expect(position.positionClass).toEqual('right')
        expect(position.x).toEqual(480)
        expect(position.y).toEqual(851)
        expect(position).toMatchSnapshot()
      })
    })

    describe('getLeft', function() {
      it('Should not offset when vertical mid is 40px from top', () => {
        const position = getLeft(getBounds(400, 45))

        expect(position.layoutClass).toEqual('mid')
        expect(position.positionClass).toEqual('left')
        expect(position.x).toEqual(400)
        expect(position.y).toEqual(50)
        expect(position).toMatchSnapshot()
      })

      it('Should not offset when vertical mid is 40px from bottom', () => {
        const position = getLeft(getBounds(400, 845))

        expect(position.layoutClass).toEqual('mid')
        expect(position.positionClass).toEqual('left')
        expect(position.x).toEqual(400)
        expect(position.y).toEqual(850)
        expect(position).toMatchSnapshot()
      })

      it('Should offset to left when < 100px from right', () => {
        const position = getLeft(getBounds(400, 44))

        expect(position.layoutClass).toEqual('top-offset')
        expect(position.positionClass).toEqual('left')
        expect(position.x).toEqual(400)
        expect(position.y).toEqual(49)
        expect(position).toMatchSnapshot()
      })

      it('Should offset to right when mid < 100px from left', () => {
        const position = getLeft(getBounds(400, 846))

        expect(position.layoutClass).toEqual('bottom-offset')
        expect(position.positionClass).toEqual('left')
        expect(position.x).toEqual(400)
        expect(position.y).toEqual(851)
        expect(position).toMatchSnapshot()
      })
    })
  })

  describe('getTop/bottom/left/right swap to opposite if too close to bounds', () => {
    it('getBottom returns top position if too close to bottom', () => {
      const bottom = getBottom(getBounds(360, 849))
      expect(bottom.positionClass).toEqual('bottom')
      expect(bottom.y).toEqual(859)
      const top = getBottom(getBounds(360, 850))
      expect(top.positionClass).toEqual('top')
      expect(top.y).toEqual(850)
      expect({bottom, top}).toMatchSnapshot()
    })

    it('getTop returns bottom position if too close to top', () => {
      const bottom = getTop(getBounds(360, 40))
      expect(bottom.positionClass).toEqual('bottom')
      expect(bottom.y).toEqual(50)
      const top = getTop(getBounds(360, 41))
      expect(top.positionClass).toEqual('top')
      expect(top.y).toEqual(41)
      expect({bottom, top}).toMatchSnapshot()
    })

    it('getLeft returns right position if too close to left', () => {
      const left = getLeft(getBounds(201, 445))
      expect(left.positionClass).toEqual('left')
      expect(left.x).toEqual(201)
      const right = getLeft(getBounds(200, 445))
      expect(right.positionClass).toEqual('right')
      expect(right.x).toEqual(280)
      expect({right, left}).toMatchSnapshot()
    })

    it('getRight returns left position if too close to right', () => {
      const right = getRight(getBounds(519, 445))
      expect(right.positionClass).toEqual('right')
      expect(right.x).toEqual(599)
      const left = getRight(getBounds(520, 445))
      expect(left.positionClass).toEqual('left')
      expect(left.x).toEqual(520)
      expect({right, left}).toMatchSnapshot()
    })
  })
})
