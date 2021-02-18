import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
//style
import { vh, vw } from 'react-native-expo-viewport-units'
import { useFonts } from 'expo-font';
//icons
import SVGImage from './SVGImage';
import check from './assets/icons/check'

/*
receives as props
onPress : function,  a function that will be called when user presses on button
text: string, text that appears on button 
svgSource: name of svg import, the svg that will be shown in the white circle example:
        import cat from './assets/icons/cat.svg', <CheckButton ... svgSource = {cat} ... />
hasCheck: boolean, true means blue check will appear and false otherwise
*/
export default function buttons({ onPress, text, svgSource, hasCheck }) {
    const [fontsLoaded] = useFonts({
        'Rubik': require('./assets/fonts/hee.ttf'),
        //     'fLogo': require('./fonts/KlavikaMedium-TF.otf')
    });

    if (!fontsLoaded) {
        return null
        // return <AppLoading />;
    } else {
        return (
            <>
                <View style={styles.spaceOfCheck}></View>
                <TouchableOpacity style={styles.touchable} onPress={onPress}>
                    {hasCheck && <View style={styles.blueCircle}>
                        <SVGImage source={check} height={styles.svgCheck.height} width={styles.svgCheck.width} />
                    </View>}
                    <Text style={{ ...styles.text /* , fontFamily: 'Rubik' */ }}>{text}</Text>
                    <View style={styles.circle}>
                        {svgSource && <SVGImage source={svgSource} height={styles.svgPicture.height} width={styles.svgPicture.width} />}
                    </View>
                </TouchableOpacity>
            </>
        )
    }
}

const styles = StyleSheet.create({
    spaceOfCheck: {
        height: vh(2.4),
    },
    touchable: {
        backgroundColor: '#DDEAFF',
        height: vh(21),
        width: vw(30),
        borderRadius: vh(1.5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: vh(2),
        color: '#000',
        fontWeight: 'bold',
    },
    circle: {
        backgroundColor: '#fff',
        width: vh(9),
        height: vh(9),
        borderRadius: vh(4.5),
        marginTop: vh(1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    svgPicture: {
        height: vh(3.5),
        width: vh(3.5)
    },
    blueCircle: {
        backgroundColor: '#5C95E3',
        width: vh(4.8),
        height: vh(4.8),
        borderRadius: vh(2.4),
        position: 'absolute',
        top: -vh(2.4),
        alignItems: 'center',
        justifyContent: 'center'
    },
    svgCheck: {
        height: vh(2),
        width: vh(3)
    }
})


