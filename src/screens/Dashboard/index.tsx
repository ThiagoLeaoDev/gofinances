import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export function Dashboard(){
  return(
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa a tela toda
    justifyContent: 'center',
    alignItems: 'center'
  }
})