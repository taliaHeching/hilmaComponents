import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
//style
import { vh, vw } from 'react-native-expo-viewport-units'
// import { useFonts } from 'expo-font';
/*
receives as props
onPress : function,  a function that will be called when user presses on button
*/
export default function buttons({ onPress }) {
    // const [fontsLoaded] = useFonts({
    //     // 'Rubik': require('./fonts/Rubik-VariableFont_wght.ttf'),
    //     'fLogo': require('./fonts/KlavikaMedium-TF.otf')
    // });

    // if (!fontsLoaded) {
    //     return null
    //     // return <AppLoading />;
    // } else {
    return (
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={styles.textContainer}>
                <Text style={{ ...styles.text/* , fontFamily: 'Rubik' */ }}>התחבר עם גוגל</Text>
                <Text style={{ ...styles.f/* , fontFamily: 'fLogo' */ }}>G</Text>
            </View>
        </TouchableOpacity>
    )
    // }
}

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: '#DB4437',
        height: vh(7.5),
        width: vw(89.5),
        borderRadius: vh(7.5 / 2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: vh(2.5),
        color: '#fff',
        fontWeight: 'bold',
        marginRight: vw(3)
    },
    f: {
        fontSize: vh(3.5),
        color: '#fff',
        fontWeight: 'bold'
    }
})


