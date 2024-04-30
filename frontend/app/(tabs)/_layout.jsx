// Dependencies
import React from 'react'
import { Tabs } from "expo-router";

//Component
import TabIcon from '../../components/TabIcon';

// Assets
import icons from "../../assets/icons/icons";

const TabsLayout = () => {
  return (
      <>
          <Tabs screenOptions={{ 
            tabBarActiveTintColor: '#A00119',
            tabBarInactiveTintColor: "#000000",
            tabBarShowLabel: false,
            tabBarStyle:{
              borderTopWidth: 1,
              borderTopColor: '#D0D0D0',
              height: 60,
            }
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
                      name="Discover"
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
                        name="Start run"
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
                        name="Settings"
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
                        name="Profile"
                        focused={focused}
                      />
                    ),
                  }}/>

          </Tabs>
      </>
  )
}

export default TabsLayout;