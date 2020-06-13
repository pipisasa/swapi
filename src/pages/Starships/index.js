import React, { Component } from 'react'
import {connect} from 'react-redux'

import { getData, getNext } from '../../redux/actions'
import {
  Container, 
  Row,
  Col,
  Button,
} from 'reactstrap'
import { parseUrl } from '../../helpers/functions'
import Card from '../../components/ItemCard'

class Starships extends Component {
  componentDidMount(){
    this.fetchData()
  }
  componentDidUpdate(prevProps){
    if(this.props.match.params.type!==prevProps.match.params.type){
      this.fetchData()
    }
  }
  fetchData=()=>{
    this.props.getData(this.props.match.params.type)
  }
  goToDetail=(url)=>{
    const [type, id] = parseUrl(url)
    console.log(type, id)
    this.props.history.push(`/type/${type}/${id}`)
  }
  handleNext = ()=>{
    this.props.getNext(this.props.next)
  }
  render() {
    const type = this.props.match.params.type
    return (
      <Container>
        <h2>{type.toUpperCase()}</h2>
        <Row>
          {this.props.data.map((item, index)=>(
            <Col key={item.name + '-' + index} md={3} className="py-3">
              <Card data={item} type={type} onClick={()=>this.goToDetail(item.url)}/>
            </Col>
          ))}
          {this.props.next && (
            <Button onClick={this.handleNext} className="d-block w-100">
              More
            </Button>
          )}
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { data, loading, error, next } = state.Starships
  return { data, loading, error, next }
}

export default connect(mapStateToProps, { getData, getNext })(Starships)