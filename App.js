import { StyleSheet, Text, View, Image, Button } from 'react-native';
const ButtonCustom =() =>{
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignContent: 'flex-end',
      flexDirection: 'row',
      marginBottom: 100,
    }}>
      <Buttoncomponent backgroundColor = 'red' Text='Login'/>
      <Buttoncomponent backgroundColor = 'red' Text='Register'/>
    </View>
  )
}

const Buttoncomponent = ({backgroundColor,text})=>{
  return(
    <View style={{
      backgroundColor: backgroundColor,
      width: 150,
      height: 70,
      borderRadiius: 10,
      marginLeft: 10
    }}>
      <Text style={{
                color: 'white',
                textAlign: 'center',
                lineHeight: 70,
                fontSize: 25,
                fontWeight: 'bold'
            }}>
              {text}
            </Text>
    </View>
  )
}
export default ButtonCustom;