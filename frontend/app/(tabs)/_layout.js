import { Tabs, Redirect } from "expo-router";
import { View, Image, Text } from "react-native";
import React from 'react'
import DiscoverIcon from "../../assets/icons/discover-icon";
import RunIcon from "../../assets/icons/run-icon";
import ProfileIcon from "../../assets/icons/profile-icon";
import SettingsIcon from "../../assets/icons/settings-icon";
import icons from "../../assets/icons/icons";

const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View >
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
        />
        <Text
          
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };
  
const TabsLayout = () => {
    return (
        <>
            <Tabs screenOptions={{ tabBarActiveTintColor: '#A00119' }}>
                <Tabs.Screen 
                 name="discover"
                 options={{
                   title: "discover",
                   headerShown: false,
                   tabBarIcon: ({ color, focused }) => (
                     <TabIcon
                       icon={icons.profile}
                       color={color}
                       name="discover"
                       focused={focused}
                     />
                   ),
                 }}/>

                <Tabs.Screen 
                    name='start-run'
                    options={{
                        headerShown: false,
                        title: 'Start Run',
                        tabBarIcon: () => <RunIcon size={24} color="black" />
                }}/>

                <Tabs.Screen 
                    name='settings'
                    options={{
                        headerShown: false,
                        title: 'Settings',
                        tabBarIcon: () => <SettingsIcon size={24} color="black" />
                }}/>

                <Tabs.Screen 
                    name='profile'
                    options={{
                        headerShown: false,
                        title: 'Profile',
                        tabBarIcon: () => <ProfileIcon size={24} color="black" />
                }}/>

            </Tabs>
        </>
    )
}

export default TabsLayout;