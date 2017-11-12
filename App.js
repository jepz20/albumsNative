import React, { Component } from 'react'

import {
  Platform,
  View
} from 'react-native'

import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

const instructions = Platform.select({
  ios: 'IOS',
  android: 'Android'
})

export default class App extends Component {
  render () {
    return (
      <View>
        <Header text={instructions} />
        <AlbumList />
      </View>
    )
  }
}
