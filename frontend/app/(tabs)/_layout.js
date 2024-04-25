import { Tabs, Redirect } from "expo-router";
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DiscoverIcon from "../../assets/icons/discover-icon";
import RunIcon from "../../assets/icons/run-icon";
import ProfileIcon from "../../assets/icons/profile-icon";
import SettingsIcon from "../../assets/icons/settings-icon";

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen 
                name='discover'
                options={{
                    headerShown: false,
                    title: 'Discover',
                    tabBarIcon: () => <DiscoverIcon size={24} color="black" />
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