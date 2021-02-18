import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
//style
import { vh, vw } from 'react-native-expo-viewport-units'
import { useFonts } from 'expo-font';
//icons
import SVGImage from './SVGImage';
import calendar from './assets/icons/calendar'
import location from './assets/icons/location'
import clock from './assets/icons/clock'

/*
receives as props
image: require/uri, image that appears example:
        <Location ... image={require('./IMAGE_FILE_LOCATION')} ... />
text: string, text that appears below picture 
number: string/number, number that appears on yellow
date: string, the date that appears
numberOfMeters:  string/number, meters that appears 
numberOfMinutes:  string/number, minutes that appears 

*/
export default function buttons({ numberOfMinutes, image, text, date, numberOfMeters, number }) {
    const [fontsLoaded] = useFonts({
        'Rubik': require('./assets/fonts/hee.ttf'),
        //     'fLogo': require('./fonts/KlavikaMedium-TF.otf')
    });

    if (!fontsLoaded) {
        return null
        // return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.yellowContainer}>
                    <Text style={styles.numberText}>{number}</Text>
                </View>
                <Image source={image ? image : require('./assets/placeholderLocation.png')} style={styles.image} />
                <Text style={styles.text}>{text}</Text>
                <View style={styles.detailsContainer}>
                    <SVGImage source={calendar} height={styles.svg.height} width={styles.svg.width} />
                    <Text style={styles.detailsText}>{date}</Text>
                    <SVGImage source={location} height={styles.svg.height} width={styles.svg.width} />
                    <Text style={styles.detailsText}>{numberOfMeters} מ'</Text>
                    <SVGImage source={clock} height={styles.svg.height} width={styles.svg.width} />
                    <Text style={styles.detailsText}>{numberOfMinutes} דק'</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: vh(30),
        backgroundColor: '#fff',
        borderRadius: vh(2),
    },
    yellowContainer: {
        backgroundColor: '#FFBB33',
        height: vh(3.5),
        width: vw(16),
        borderRadius: vh(1.75),
        top: vh(2),
        left: vh(2),
        position: 'absolute',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    image: {
        height: vh(19),
        width: vw(85),
        borderRadius: vh(2),
    },
    text: {
        fontSize: vh(3),
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: vw(3),
        marginVertical: vh(1)
    },
    svg: {
        height: vh(3),
        width: vh(3)
    },
    detailsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginLeft: vw(3)
    },
    detailsText: {
        fontSize: vh(2),
        paddingHorizontal: vw(1)
    }
})


