import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const onToggle = (id) => ({
  type: 'SHOWSRC',
  payload: {
    id
  }
})

const Source = ({children, id, show, onToggle}) => {
  return show ? (
    <div className="source">
      <pre>{children}</pre>
      <div className="hide-src" onClick={() => onToggle('')}>{'Hide'}</div>
    </div>
  ) : (
    <div className="show-src" onClick={() => onToggle(id)}>{'Show Source'}</div>
  )
}

Source.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

function mapStateToProps({showSource}, {id}){
  return {show: showSource === id}
}

export default connect(mapStateToProps, {onToggle})(Source)
