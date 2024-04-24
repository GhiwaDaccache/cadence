import React from "react";
import { Button, View, Text } from "react-native";

 const LandingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Landing Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default LandingScreen;