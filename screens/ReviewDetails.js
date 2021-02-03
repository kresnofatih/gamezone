import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReviewDetails = () => {
    return (
        <View style={styles.revdetcontainer}>
            <Text>Review Details Screen</Text>
        </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    revdetcontainer: {
        backgroundColor: 'magenta',
    }
})
