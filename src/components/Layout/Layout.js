import React, { Component, Suspense, lazy } from 'react'
import Loading from '../Loading'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'


const Header = lazy(()=>import('../Header'))
const Footer = lazy(()=>import('../Footer'))

const emptyLoading = ()=><div></div>

class Layout extends Component {
  render() {
    const children = this.props.children || null
    return (
      <div id="wrapper">
        <Suspense fallback={emptyLoading()}>
          <Header {...this.props}/>
        </Suspense>
        <div className="content-page">
          <div className="content">
            <Container fluid>
              <Suspense fallback={<Loading/>}>
                {children}
              </Suspense>
            </Container>
          </div>
          <Suspense fallback={emptyLoading()}>
            <Footer {...this.props}/>
          </Suspense>
        </div>
      </div>
    )
  }
}

export default connect()(Layout)
