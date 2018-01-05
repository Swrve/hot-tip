import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const HotTipAnchor = (props) => {
  const {tip, visible, isText, x, y} = props,
    className = ['hot-tip', props.positionClass, props.layoutClass].join(' ')

  return Boolean(visible) && (
    <div className={className} style={{top: y, left: x}}>
      <div className="ht-point"/>
      <div className="ht-body">
        {isText ? tip : tip()}
      </div>
    </div>
  )
}

HotTipAnchor.displayName = 'HotTipAnchor'

HotTipAnchor.propTypes = {
  isText: PropTypes.bool,
  layoutClass: PropTypes.string,
  positionClass: PropTypes.string,
  tip: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  visible: PropTypes.bool,
  x: PropTypes.number,
  y: PropTypes.number
}

const mapStateToProps = (state) => Object.assign({},
  state.hotTipReducer, {
    isText: Boolean(state.hotTipReducer.tip && state.hotTipReducer.tip.trim)
  })

export default connect(mapStateToProps)(HotTipAnchor)
