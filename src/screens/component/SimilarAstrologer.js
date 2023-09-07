import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import IocalImage from '../../Providerscreen/IocalImage';
// import Astrology from '../Icons/Svg/astrology.svg'
// import Language from '../Icons/Svg/language.svg'
import { COLOR, FONT_SIZE } from '../../Providerscreen/Globles'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import CommonHeader from '../../Providerscreen/CommonHeader'
const SimilarAstrologer = ({navigation}) => {
  return (
<ScrollView style={{flex:1}}>
  <View>
    <CommonHeader
    headerText={'Profile'}
    GoBack={()=>navigation.goBack()}
    />
  </View>
  {/* <View style={{flexDirection:'row',backgroundColor:COLOR.WHITE,width:wp('90%')}}>
  
    <Image source={IocalImage.Rectangle} style={{width:wp('20%'),height:hp('10%'),resizeMode:'contain'}} />
 <View>
     
  <Text style={{color:COLOR.GRAY,fontSize:FONT_SIZE.F_20,marginHorizontal:hp('2%')}}>Cody Fisher</Text>
    <View style={{marginHorizontal:hp('1%'),fontSize:FONT_SIZE.F_18}}>
    <Language  height={hp('4%')} width={wp('6%')} />
   <Text style={{marginHorizontal:hp('4%')}} >
   English, Hindi
    </Text> 
    <Text>
   $125
   </Text>
    </View>
 

    <Text>
   <Astrology  />
    Vedic, Vastu, Pal...
    </Text>
  </View>
 <View>
    <Text>
    5 year experience
    </Text>
  </View>
  </View> */}
  <View style={{width:wp('80%'),marginHorizontal:hp('8%')}}>
    <Text style={{color:COLOR.LIGHT_GRAY,fontSize:FONT_SIZE.F_19}}>
    We are a group of young, energetic, creative & professional website developer, graphic designer and IT-Administrator who are devoted to implement your requirement with modern technology. ? Website Design -
    </Text>
  </View>
  <View style={{alignSelf:'center',marginVertical:hp('3%')}}>
  <View style={{flexDirection:'row',}}>
    <Image source={IocalImage.Rectangle_2}/>
    <Image source={IocalImage.Rectangle_1}  style={{}}/>
    <Image source={IocalImage.Rectangle_2}/>
    </View>
    <View  style={{flexDirection:'row'}}> 
    <Image source={IocalImage.Rectangle_2}/>
    <Image source={IocalImage.Rectangle_1}style={{marginTop:hp('2%')}} />
    <Image source={IocalImage.Rectangle_2}/>
   </View>
    <View  style={{flexDirection:'row'}}> 
  <Image source={IocalImage.Rectangle_2}/>
    <Image source={IocalImage.Rectangle_2}  style={{marginLeft:hp('19%')}}/>
  </View>
  </View>
</ScrollView>
  )
}

export default SimilarAstrologer