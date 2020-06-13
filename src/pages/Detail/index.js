import React, { Component } from 'react';
import { Container, Table } from 'reactstrap'
import { connect } from 'react-redux';

import {getDetail} from '../../redux/actions'

class Detail extends Component {
  componentDidMount(){
    this.fetchData()
  }
  componentDidUpdate(prevProps){
    if(this.props.match.params.id!==prevProps.match.params.id){
      this.fetchData()
    }
  }
  fetchData = ()=>{
    const {type, id} = this.props.match.params;
    this.props.getDetail({type, id});
  }
  render() {
    console.log(this.props)
    const data = this.props.currentItem;
    if(!data) return 'loading...';
    if(this.props.error) return 'ERROR';
    const keys = Object.keys(data);
    return (
      <Container>
        <h1>{data.name ? data.name : data.title}</h1>
        <Table className="text-white">
          <tbody>
            {keys.map((key,index)=>(
              <tr key={key+"-"+index}>
                <th dir="row">{key}</th>
                <td>{Array.isArray(data[key]) ? data[key].map(item=>(<>{item}<br/></>)) : data[key]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { currentItem, loading, error } = state.Starships
  return { currentItem, loading, error }
}

export default connect(mapStateToProps, {getDetail})(Detail);
