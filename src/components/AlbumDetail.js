import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainer}>
        <Image style={styles.thumbnail} source={{ uri: album.thumbnail_image }} />
      </View>
      <View style={styles.headerContent}>
        <Text style={styles.title}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={styles.image}source={{ uri: album.image }} />
    </CardSection>
    <CardSection>
      <Button onPress={() => Linking.openURL(album.url)}>
        Buy Now
      </Button>
    </CardSection>
  </Card>
)

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 18
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  image: {
    height: 300,
    flex: 1
  }
}
export default AlbumDetail
