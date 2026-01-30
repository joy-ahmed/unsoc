import { DrawerToggleButton } from '@react-navigation/drawer'
import { Tabs } from 'expo-router'
import React from 'react'

const Layout = () => {
    return (
        <Tabs screenOptions={{ headerLeft: () => <DrawerToggleButton /> }}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}

export default Layout