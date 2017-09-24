import React from 'react'
import {connect} from 'react-redux'
import * as appActions from '../../redux/actions'
import {getPosition, getBounds} from './utils'


const HotTip = (props) => {
  const handleMouseEnter = (e) => {
      const bounds = getBounds(e),
        position = getPosition(props.position)(bounds)

      props.dispatch(appActions.addTooltip(props.text, position))
    },
    handleMouseLeave = () => {
      props.dispatch(appActions.clearTooltip())
    }

  return React.cloneElement(props.children, {
    onMouseOver: handleMouseEnter,
    onMouseOut: handleMouseLeave
  })
}

HotTip.displayName = 'HotTip'

HotTip.defaultProps = {
  position: 'bottom'
}

HotTip.propTypes = {
  children: React.PropTypes.node.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  position: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  text: React.PropTypes.string.isRequired
}

export default connect()(HotTip)
