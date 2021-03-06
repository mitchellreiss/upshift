import React from "react";
import { Link } from "react-router-dom";

class RouteIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllRoutes();
  }

  createURL(polyline) {
    const url =
      "https://maps.googleapis.com/maps/api/staticmap?&path=color:0xfd4c01%7Cenc:";
    const options = `&size=250x250&key=${window.googleAPIKey}`;
    return url + polyline + options;
  }

  render() {
    return (
      <div className="route-index">
        <div className="routes-sub-header">
          <h1>My Routes</h1>
          <Link to="/route/new">
            <button>Create New Route</button>
          </Link>
        </div>
        <ul>
          {this.props.routes.map((route) => (
            <li key={route.id} className="index-item">
              <Link to={`/route/${route.id}`}>
                <img
                  className="map-img"
                  src={`${this.createURL(route.polyline)}`}
                />
              </Link>
              <div className="index-data">
                <Link to={`/route/${route.id}`}>
                  <h3>{route.title}</h3>
                </Link>
                <div className="data">{route.distance.toFixed(2)} mi</div>
                <div className="data-title">Distance</div>
                <div className="data">{route.route_type}</div>
                <div className="data-title">Route Type</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RouteIndex;
