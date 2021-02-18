import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
//style
import { vh, vw } from 'react-native-expo-viewport-units'
import { useFonts } from 'expo-font';
/*
receives as props
onPress : function,  a function that will be called when user presses on button
*/
export default function buttons({ onPress }) {
    const [fontsLoaded] = useFonts({
        'Rubik': require('./assets/fonts/hee.ttf'),
        //     'fLogo': require('./fonts/KlavikaMedium-TF.otf')
    });

    if (!fontsLoaded) {
        return null
        // return <AppLoading />;
    } else {
        return (
            <TouchableOpacity style={styles.touchable} onPress={onPress}>
                <Text style={{ ...styles.text /* , fontFamily: 'Rubik' */ }}>jdhfajs</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: '#fff',
        height: vh(7.5),
        width: vw(89.5),
        borderRadius: vh(7.5 / 2),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#5C95E3',
        borderWidth: 2
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: vh(2.5),
        color: '#5C95E3',
        fontWeight: 'bold',
    },
    f: {
        fontSize: vh(3.5),
        color: '#fff',
        fontWeight: 'bold'
    }
})


