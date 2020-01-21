import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreator } from '@/redux'

export default function(mapStateToProps, mapDispacthToProps) {
  return function(WrapedComponent) {
    class ProxyComponent extends Component {
      static contextTypes = {
        store: PropTypes.object,
      }

      constructor(props, context) {
        super(props, context)
        this.store = context.store
        this.state = mapStateToProps(this.store.getState())
      }

      componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => {
          this.setState(mapStateToProps(this.store.getState()))
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        let actions
        if (typeof mapDispacthToProps === 'function') {
          actions = mapDispacthToProps(this.store.dispatch)
        } else if (mapDispacthToProps instanceof Object) {
          actions = bindActionCreator(mapDispacthToProps, this.store.dispatch)
        }
        return <WrapedComponent {...this.state} {...actions} />
      }
    }

    return ProxyComponent
  }
}
