import { useEffect, useState } from "react"
import { useNavigation } from '@react-navigation/native';
import services from "../services/services"
import TableView from "../components/TableView"
import { AnimatedFAB } from 'react-native-paper';
import { ScrollView, StyleSheet, View } from "react-native"
import ProtectedComponent from "../components/ProtectedComponent";

function Students() {
    const navigation = useNavigation()
    const [students, setStudents] = useState([])

    useEffect(() => {
        const getStudents = async () => {
            try {
                const response = await services.getStudents()
                const studentsData = await Promise.all(response.map(async (student) => {
                    const department = await services.getDepartmentFromID(student.department);
                    return { ...student, department: department.name };
                }))
                setStudents(studentsData)
            } catch (error) {
                console.error(error)
            }
        }

        getStudents()
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <TableView
                    tableData={students}
                    onEdit={(item) => navigation.navigate('EditStudent', { id: item.id })}
                    onDelete={async (item) => {
                        try {
                            await services.deleteStudent(item.id)
                            setStudents(students.filter(student => student.id !== item.id))
                        } catch (error) {
                            console.error("Error deleting Student")
                        }
                    }}
                />
            </ScrollView>
            <ProtectedComponent users={['admin']}>
                <AnimatedFAB
                    icon={'plus'}
                    onPress={() => navigation.navigate('AddStudent')}
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

export default Students
