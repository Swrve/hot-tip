import React from 'react'
import {connect} from 'react-redux'

const HotTipAnchor = (props) => {
  const {visible, text, x, y} = props,
    className = ['hot-tip', props.positionClass, props.layoutClass].join(' ')

  return Boolean(visible) && (
    <div className={className} style={{top: y, left: x}}>
      <div className="pointer"/>
      <div className="body">
        {text}
      </div>
    </div>
  )
}

HotTipAnchor.displayName = 'HotTipAnchor'

HotTipAnchor.propTypes = {
  layoutClass: React.PropTypes.string,
  positionClass: React.PropTypes.string,
  text: React.PropTypes.string,
  visible: React.PropTypes.bool,
  x: React.PropTypes.number,
  y: React.PropTypes.number
}

const mapStateToProps = (state) => state.hotTipReducer

export default connect(mapStateToProps)(HotTipAnchor)
