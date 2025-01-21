import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

function InputField({label, value, onChange}) {
    return (
        <View style={styles.input_field}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input_field: {
        marginBottom: 10
    },
    label: {
        marginVertical: 4,
        fontSize: 20
    },
    input: {
        height: 40,
        fontSize: 16,
        marginVertical: 4,
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4
    }
})

export default InputField