import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown'

function DropdownField({ label, data, labelField, valueField, onChange, value }) {
    return (
        <View style={styles.dropdown_field}>
            <Text style={styles.label}>{label}</Text>
            <Dropdown
                data={data}
                labelField={labelField}
                valueField={valueField}
                onChange={(item) => { onChange(item[valueField]) }}
                value={value}
                search
                searchPlaceholder='Search'
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                maxHeight={300}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    dropdown_field: {
        marginBottom: 10
    },
    label: {
        marginVertical: 4,
        fontSize: 20
    },
    dropdown: {
        height: 40,
        marginVertical: 4,
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4
    },
    placeholderStyle: {
        color: 'grey'
    }
});

export default DropdownField;