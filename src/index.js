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
    const middle = `${parseInt(this.props.snakePosXTile)}${parseInt(this.props.snakePosYTile)}`
    if (middle == this.state.tileCoord) {
      this.setState({tileClass: 'tile snake'})
    } else {
      this.setState({tileClass: 'tile'})
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
                    snakePosXTile={this.props.snakePosXGrid}
                    snakePosYTile={this.props.snakePosYGrid}
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
        snakePosX: [3],
        snakePosY: [3],
    }
  };

  render() {
    return (
      <>
        <Grid
          sizeGrid={this.state.size}
          snakePosXGrid={this.state.snakePosX}
          snakePosYGrid={this.state.snakePosY}
        />
      </>
    );
  };

  snakeMovement(i) {
    switch(i) {
      case "w":
        const snakePosYNext = this.state.snakePosY[0] >= this.state.size[0] - 1 ? 0 : this.state.snakePosY[0] + 1;
        this.setState({snakePosY: snakePosYNext});
        console.log(this.state.snakePosY);
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      this.snakeMovement(event.key);
    });
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));