import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native'
import Form from '../components/Form'
import InputField from '../components/InputField'
import services from '../services/services'

function AddDepartment() {
    const navigation = useNavigation()
	const [deptName, setDeptName] = useState('')
	const [srength, setSrength] = useState('')

	const handleSubmit = async () => {
		try {
			const data = { name: deptName, strength: srength }
			await services.addDepartment(data)
			navigation.navigate('Departments')
		} catch (error) {
			console.error("Error adding Department")
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

export default AddDepartment