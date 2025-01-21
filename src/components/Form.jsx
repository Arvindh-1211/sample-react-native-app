import { View, StyleSheet, Text } from "react-native"
import { TouchableRipple } from "react-native-paper"

function Form({ onSubmit, children }) {
    return (
        <View style={styles.form}>

            {children}

            <View style={styles.btn_container}>
                <View style={styles.btn_wrapper}>
                    <TouchableRipple
                        style={styles.button}
                        onPress={onSubmit}
                        rippleColor="#007bff"
                    >
                        <Text style={styles.btn_label}>Submit</Text>
                    </TouchableRipple>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 16
    },
    btn_container: {
        flex: 0.1,
        alignItems: 'center',
        marginTop: 10
    },
    btn_wrapper: {
        width: 150,
        height: 40,
        borderRadius: 10,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: '#007bffcc',
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_label: {
        fontSize: 20,
        color: '#ffffff'
    }
})

export default Form
