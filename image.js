import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';

const Image1 = () => {
    return(
       <>
       <Image source={ require ('./assets/lab.png')}
       style ={{
        width: 210,
        height: 210,
        alignContent: 'center',
        justifyContent: 'flex-end',
        marginLeft: 110 }}></Image>
       </>
    )
}

export default Image1