import React from "react";
import { View, Text, Button } from "react-native";

class JoinGameScreen extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>Join Game</Text>
        <Button
          onPress={() => {navigation.navigate('Waiting')}}
          title="Join"
          color="#841584"
        />
      </View>
    );
  }
}
export default JoinGameScreen;