import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import IocalImage from '../../Providerscreen/IocalImage'

const Banner1 = () => {
  return (
    <View>
      <Text>Banner1</Text>
      {/* <ImageBackground source={IocalImage.Banner1} height={hp('100%')} width={wp('100%')} resizeMode='cover'/> */}

    </View>
  )
}

export default Banner1