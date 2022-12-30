import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./PlayersContainerStyles.js";
import {
  addPlayer,
  removePlayer,
  addPoints,
  decreasePoints,
  increasePoints,
  clearAll,
  clearPoints
} from "../actions";
import {
  Text,
  View,
  ScrollView,
  Keyboard,
  Animated,
} from "react-native";
import PlayerInput from "../components/PlayerInput.js";
import PlayerList from "../components/PlayerList.js";
import ToolBar from "../components/ToolBar.js";

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  addPlayer: name => dispatch(addPlayer(name)),
  removePlayer: index => dispatch(removePlayer(index)),
  addPoints: (index, points) => dispatch(addPoints(index, points)),
  increasePoints: index => dispatch(increasePoints(index)),
  decreasePoints: index => dispatch(decreasePoints(index)),
  clearAll: () => dispatch(clearAll()),
  clearPoints: () => dispatch(clearPoints())
});

class PlayersContainer extends Component {
  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0);
  }

  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = event => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height
      })
    ]).start();
  };

  keyboardWillHide = event => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0
      })
    ]).start();
  };

  getListItemStyle(index) {
    switch (index % 4) {
      case 0:
        return styles.listItem4;
      case 2:
        return styles.listItem2;
      case 3:
        return styles.listItem1;
      default:
        return styles.listItem3;
    }
  }

  render() {
    const {
      players,
      addPlayer,
      removePlayer,
      decreasePoints,
      increasePoints,
      addPoints,
      clearAll,
      clearPoints
    } = this.props;

    console.log(players)
    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "#f3f3f3",
          paddingBottom: this.keyboardHeight
        }}
      >
        <ScrollView>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>Pisteyttäjä Pro v0.1</Text>
          </View>

          <PlayerList players={players} 
                      getListItemStyle={this.getListItemStyle}
                      addPoints={addPoints}
                      increasePoints={increasePoints}
                      decreasePoints={decreasePoints}
                      removePlayer={removePlayer}
          />
                      
          {players.length > 0 && (
            <ToolBar clearAll={clearAll}
                     clearPoints={clearPoints}
            />
          )}
          <PlayerInput
            autoCorrect={false}
            styles={styles.inputName}
            onSubmit={args => {
              addPlayer(args.text);
            }}
         
          />
        </ScrollView>
      </Animated.View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersContainer);