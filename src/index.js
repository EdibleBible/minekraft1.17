import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileCoord: String(this.props.X) + String(this.props.Y),
      tileClass: "tile"
    }
  }

  render() {
    return (
      <div className={this.state.tileClass} id={this.state.tileCoord}/>
    );
  }

  componentDidMount() {
    const middle = `${parseInt(this.props.sizeTile[0]/2)}${parseInt(this.props.sizeTile[1]/2)}`
    if (middle == this.state.tileCoord) {
      this.setState({tileClass: 'tile snake'})
    }
  }
}

class Grid extends React.Component {
  render() {
    const grid = Array(this.props.sizeGrid[0]).fill(
      Array(this.props.sizeGrid[1]).fill(null)
    );
    return (
      <div className="grid">
        {grid.map((xGrid, xIndex) => {
          return (
            <div className="grid-row">
              {xGrid.map((yGrid, yIndex) => {
                return (
                  <Tile
                    X={xIndex}
                    Y={yIndex}
                    sizeTile={this.props.sizeGrid}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        size: [7, 7],
        snake: "",
    }
    };

  render() {
    return (
      <>
        <Grid
          sizeGrid={this.state.size}
        />
      </>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));