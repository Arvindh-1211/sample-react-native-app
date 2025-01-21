import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native'
import Form from '../components/Form'
import InputField from '../components/InputField'
import services from '../services/services'

function EditDepartment() {
    const navigation = useNavigation()
    const route = useRoute()
    const [id, setId] = useState(route.params?.id || '')
    const [deptName, setDeptName] = useState('')
    const [srength, setSrength] = useState('')

    useEffect(() => {
        const getDeptData = async () => {
            try {
                const response = await services.getDepartmentFromID(id)
                setDeptName(response.name)
                setSrength(response.strength.toString())
            } catch (error) {
                console.error(error)
            }
        }

        getDeptData()
    }, [])

    const handleSubmit = async () => {
        try {
            const data = { id: id, name: deptName, strength: srength }
            await services.editDepartment(data)
            navigation.navigate('Departments')
        } catch (error) {
            console.error("Error editing Department")
        }
    }

    return (
        <ScrollView>
            <Form onSubmit={handleSubmit}>
                <InputField label='Name' value={deptName} onChange={setDeptName} />
                <InputField label='Strength' value={srength} onChange={setSrength} />
            </Form>
        </ScrollView>
    )
}

export default EditDepartment