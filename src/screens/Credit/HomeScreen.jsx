import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PricingCard } from 'react-native-elements';


const HomeScreen = () => {
  return (
    <PricingCard
      color="#4f9deb"
      title="Free"
      price="$0"
      info={['1 User', 'Basic Support', 'All Core Features']}
      button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
    />
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
