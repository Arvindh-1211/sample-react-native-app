import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native'
import Form from '../components/Form'
import InputField from '../components/InputField'
import services from '../services/services'
import DropdownField from '../components/DropdownField'

function EditStudent() {
    const navigation = useNavigation()
    const route = useRoute()
    const [id, setId] = useState(route.params?.id || '')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [deptID, setDeptID] = useState('')
    const [depts, setDepts] = useState([])

    useEffect(() => {
        const getDepts = async () => {
            try {
                const response = await services.getDepartments()
                setDepts(response)
            } catch (error) {
                console.error(error)
            }
        }

        const getStudentData = async () => {
            try {
                const response = await services.getStudentFromID(id)
                setName(response.name)
                setAge(response.age.toString())
                setDeptID(response.department_id)
            } catch (error) {
                console.error(error)
            }
        }

        getDepts()
        getStudentData()
    }, [])

    const handleSubmit = async () => {
        try {
            const data = { id, name, age, deptID }
            await services.editStudent(data)
            navigation.navigate('Students')
        } catch (error) {
            console.error("Error editing Student")
        }
    }

    return (
        <ScrollView>
            <Form onSubmit={handleSubmit}>
                <InputField label='Name' value={name} onChange={setName} />
                <InputField label='Age' value={age} onChange={setAge} />
                <DropdownField
                    label='Department'
                    data={depts}
                    labelField='name'
                    valueField='id'
                    onChange={setDeptID}
                    value={deptID}
                />
            </Form>
        </ScrollView>
    )
}

export default EditStudent