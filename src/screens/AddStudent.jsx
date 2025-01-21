import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native'
import Form from '../components/Form'
import InputField from '../components/InputField'
import services from '../services/services'
import DropdownField from '../components/DropdownField'

function AddStudent() {
    const navigation = useNavigation()
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
        getDepts()
    }, [])

    const handleSubmit = async () => {
        try {
            const data = { name: name, age: age, deptID: deptID }
            await services.addStudent(data)
            navigation.navigate('Students')
        } catch (error) {
            console.error("Error adding Student")
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

export default AddStudent