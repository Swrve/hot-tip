import React from 'react'
import HotTipAnchor from '../hot-tip-anchor/component'

const HotTipRoot = (props) => {
  if (props.children) {
    return <div><HotTipAnchor/>{props.children}</div>
  }
  return <HotTipAnchor/>
}

HotTipRoot.displayName = 'HotTipRoot'

HotTipRoot.propTypes = {
  children: React.PropTypes.element
}

export default HotTipRoot
