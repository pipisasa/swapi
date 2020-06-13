import React, { Component } from 'react';
import { CardBody, DropdownItem, Card } from 'reactstrap';

class ItemCard extends Component {
  render() {
    const item = this.props.data;
    const type = this.props.type;
    return (
      <Card onClick={this.props.onClick} className="h-100 item-card">
        <CardBody>
          <h5>{item.name ? item.name : item.title}</h5>
          <DropdownItem divider/>
          {type === 'starships' && (
            <div className="item-card-info">
              <p className="m-0"><span className="text-secondary">model:</span> {item.model}</p>
              <p className="m-0"><span className="text-secondary">class:</span> {item.starship_class}</p>
              <p className="m-0"><span className="text-secondary">MGLT:</span> {item.MGLT}</p>
            </div>
          )}
          {type === 'people' && (
            <div className="item-card-info">
              <p className="m-0"><span className="text-secondary">gender:</span> {item.gender}</p>
              <p className="m-0"><span className="text-secondary">height:</span> {item.height}</p>
              <p className="m-0"><span className="text-secondary">mass:</span> {item.mass}</p>
            </div>
          )}
          {type === 'planets' && (
            <div className="item-card-info">
            <p className="m-0"><span className="text-secondary">diameter:</span> {item.diameter}</p>
            <p className="m-0"><span className="text-secondary">terrain:</span> {item.terrain}</p>
            <p className="m-0"><span className="text-secondary">climate:</span> {item.climate}</p>
            </div>
          )}
          {type === 'films' && (
            <div className="item-card-info">
              <p className="m-0"><span className="text-secondary">director:</span> {item.director}</p>
              <p className="m-0"><span className="text-secondary">producer:</span> {item.producer}</p>
              <p className="m-0"><span className="text-secondary">release_date:</span> {item.release_date}</p>
            </div>
          )}
          {type === 'species' && (
            <div className="item-card-info">
              <p className="m-0"><span className="text-secondary">language:</span> {item.language}</p>
              <p className="m-0"><span className="text-secondary">classification:</span> {item.classification}</p>
              <p className="m-0"><span className="text-secondary">designation:</span> {item.designation}</p>
              <p className="m-0"><span className="text-secondary">average_height:</span> {item.average_height}</p>
              <p className="m-0"><span className="text-secondary">average_lifespan:</span> {item.average_lifespan}</p>
            </div>
          )}
          {type === 'vehicles' && (
            <div className="item-card-info">
              <p className="m-0"><span className="text-secondary">model:</span> {item.model}</p>
              <p className="m-0"><span className="text-secondary">vehicle_class:</span> {item.vehicle_class}</p>
              <p className="m-0"><span className="text-secondary">manufacturer:</span> {item.manufacturer}</p>
            </div>
          )}
        </CardBody>
      </Card>
    );
  }
}

export default ItemCard;
