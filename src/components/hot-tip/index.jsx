import {Component, cloneElement, createElement, Children} from 'react'
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
    const {tip, children} = this.props

    if(tip) {
      if (typeof children === 'string') {
        return createElement('span', {
          onMouseOver: (e) => this.handleMouseEnter(e),
          onMouseOut: () => this.handleMouseOut()
        }, children)
      }
      return cloneElement(this.props.children, {
        onMouseOver: (e) => this.handleMouseEnter(e),
        onMouseOut: () => this.handleMouseOut()
      })
    }
    return this.props.children
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
  tip: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
}

export default connect()(HotTip)
