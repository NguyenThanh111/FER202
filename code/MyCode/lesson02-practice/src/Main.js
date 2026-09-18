import React, { Component } from "react";
import { Players_list } from "./shared/ListOfPlayer";
import PlayersPresentation from "./PlayerPresentation";
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: Players_list,
    };
  }
  render() {
    return <PlayersPresentation players={this.state.players} />;
  }
}
export default Main;
