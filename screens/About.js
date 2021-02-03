import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
    return (
        <View style={styles.aboutcontainer}>
            <Text>About Screen</Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    aboutcontainer: {
        backgroundColor: "coral",
    }
})
