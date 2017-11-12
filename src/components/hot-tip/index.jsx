import {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as appActions from '../../redux/actions'
import {getPosition, getBounds} from './utils'


class HotTip extends Component {
  componentWillUnmount() {
    this.props.dispatch(appActions.clearTooltip())
  }

  handleMouseEnter(e) {
    const bounds = getBounds(e),
      position = getPosition(this.props.position)(bounds)

    this.props.dispatch(appActions.addTooltip(this.props.tip, position))
  }

  handleMouseOut() {
    this.props.dispatch(appActions.clearTooltip())
  }

  render() {
    return cloneElement(this.props.children, {
      onMouseOver: (e) => this.handleMouseEnter(e),
      onMouseOut: () => this.handleMouseOut()
    })
  }
}

HotTip.displayName = 'HotTip'

HotTip.defaultProps = {
  position: 'bottom'
}

HotTip.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  tip: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
}

export default connect()(HotTip)
