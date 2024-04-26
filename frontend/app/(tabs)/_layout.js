import { Tabs, Redirect } from "expo-router";
import { View, Image, Text } from "react-native";
import React from 'react'
import icons from "../../assets/icons/icons";

const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="flex items-center justify-center gap-2" >
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text
          className={`${focused ? "font-usemibold" : "font-urbanist"} text-xs`}
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
            <Tabs screenOptions={{ 
              tabBarActiveTintColor: '#A00119',
              tabBarInactiveTintColor: "#000000",
              tabBarShowLabel: false
            }}>
                <Tabs.Screen 
                 name="discover"
                 options={{
                   title: "discover",
                   headerShown: false,
                   tabBarIcon: ({ color, focused }) => (
                     <TabIcon
                       icon={icons.compass}
                       color={color}
                       name="discover"
                       focused={focused}
                     />
                   ),
                 }}/>

                <Tabs.Screen 
                    name='start-run'
                    options={{
                      title: "start-run",
                      headerShown: false,
                      tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                          icon={icons.run}
                          color={color}
                          name="start-run"
                          focused={focused}
                        />
                      ),
                    }}/>

                <Tabs.Screen 
                    name='settings'
                    options={{
                      title: "settings",
                      headerShown: false,
                      tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                          icon={icons.setting}
                          color={color}
                          name="settings"
                          focused={focused}
                        />
                      ),
                    }}/>

                <Tabs.Screen 
                    name='profile'
                    options={{
                      title: "profile",
                      headerShown: false,
                      tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                          icon={icons.profile}
                          color={color}
                          name="profile"
                          focused={focused}
                        />
                      ),
                    }}/>

            </Tabs>
        </>
    )
}

export default TabsLayout;