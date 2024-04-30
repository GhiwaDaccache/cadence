// Dependencies
import React from "react";
import { View, Image, Text } from "react-native";

const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="flex items-center justify-center gap-1" >
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text
          className={`${focused ? "font-urbanistBold" : "font-urbanist"} text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
  );
};

export default TabIcon;