import { useEffect, useState } from "react"
import { useNavigation } from '@react-navigation/native';
import services from "../services/services"
import TableView from "../components/TableView"
import { ScrollView, StyleSheet, View } from "react-native"
import { AnimatedFAB } from "react-native-paper"
import ProtectedComponent from "../components/ProtectedComponent";

function Departments() {
    const navigation = useNavigation()
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        const getDepts = async () => {
            try {
                const response = await services.getDepartments()
                setDepartments(response)
            } catch (error) {
                console.error(error)
            }
        }
        getDepts()
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <TableView
                    tableData={departments}
                    onEdit={(item) => navigation.navigate('EditDepartment', { id: item.id })}
                    onDelete={async (item) => {
                        try {
                            await services.deleteDepartment(item.id)
                            setDepartments(departments.filter(dept => dept.id !== item.id))
                        } catch (error) {
                            console.error("Error deleting Department")
                        }
                    }}
                />
            </ScrollView>
            <ProtectedComponent users={['admin']}>
                <AnimatedFAB
                    icon={'plus'}
                    onPress={() => navigation.navigate('AddDepartment')}
                    style={[styles.fabStyle]}
                />
            </ProtectedComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    fabStyle: {
        bottom: 30,
        right: 20,
        position: 'absolute',
    }
});

export default Departments
