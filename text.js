import { StyleSheet, Text, View, Image, Button } from 'react-native';
const TextCustom = () => {
    return(
        <View style= {{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            alignContent: 'center',
            marginTop: 30,
            marginLeft: 140
        }}>
            <Text style= {{
                fontSize: 30,
                fontWeight: 'bold',
                marginTop : 50,
            }}>HELLO PANDA</Text>

        </View>
    )
}

export default TextCustom;