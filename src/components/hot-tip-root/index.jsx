import React from 'react'
import PropTypes from 'prop-types'
import HotTipAnchor from '../hot-tip-anchor'

const HotTipRoot = (props) => {
  if (props.children) {
    return <div><HotTipAnchor/>{props.children}</div>
  }
  return <HotTipAnchor/>
}

HotTipRoot.displayName = 'HotTipRoot'

HotTipRoot.propTypes = {
  children: PropTypes.element
}

export default HotTipRoot
