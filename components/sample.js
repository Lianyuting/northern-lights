import React from 'react';
import { View, Text, Image } from "react-native";

class StoryContainer extends React.Component {
  render() {
    return (
      <View>
          <Text>Some other text</Text>
          <Image
          source={require('../assets/images/northernlights.jpg')}
          style={{width: 280, height: 500, marginLeft: 46}}
        />
      </View>
    );
  }
}

export default StoryContainer;


