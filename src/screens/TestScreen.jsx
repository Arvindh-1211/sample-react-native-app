import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import TableView from '../components/TableView'

function TestScreen() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setData(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [])
    return (
        <ScrollView>
            <TableView
                tableData={data}
                onEdit={() => { }}
                onDelete={() => { }}
            />
        </ScrollView>
    )
}

export default TestScreen
