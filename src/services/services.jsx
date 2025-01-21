import apiInstance from "./apiService";

const getDepartments = async () => {
    try{
        const response = await apiInstance.get('/get_depts')
        return response.data
    } catch (error) {
        console.error("Error fetching Departments: ", error)
        throw new Error("Error getting Departments");
    }
}

const addDepartment = async (data) => {
    try{
        await apiInstance.post('/add_dept', {data: data})
    } catch (error) {
        console.error("Error adding Department: ", error)
        throw new Error("Error adding Department");
    }
}

const editDepartment = async (data) => {
    try{
        await apiInstance.put('/edit_dept', {data: data})
    } catch (error) {
        console.error("Error editing Department: ", error)
        throw new Error("Error editing Department");
    }
}

const deleteDepartment = async (id) => {
    try{
        await apiInstance.delete(`/delete_dept/${id}`)
    } catch (error) {
        console.error("Error deleting Department: ", error)
        throw new Error("Error deleting Department");
    }
}

const getDepartmentFromID = async (id) => {
    try{
        const response = await apiInstance.get(`/get_dept/${id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching Department: ", error)
        throw new Error("Error getting Department");
    }
}

const getStudents = async () => {
    try{
        const response = await apiInstance.get('/get_students')
        return response.data
    } catch (error) {
        console.error("Error fetching Students: ", error)
        throw new Error("Error getting Students");
    }
}

const addStudent = async (data) => {
    try{
        await apiInstance.post('/add_student', {data: data})
    } catch (error) {
        console.error("Error adding Student: ", error)
        throw new Error("Error adding Student");
    }
}

const editStudent = async (data) => {
    try{
        await apiInstance.put('/edit_student', {data: data})
    } catch (error) {
        console.error("Error editing Student: ", error)
        throw new Error("Error editing Student");
    }
}

const deleteStudent = async (id) => {
    try{
        await apiInstance.delete(`/delete_student/${id}`)
    } catch (error) {
        console.error("Error deleting Student: ", error)
        throw new Error("Error deleting Student");
    }
}

const getStudentFromID = async (id) => {
    try{
        const response = await apiInstance.get(`/get_student/${id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching Department: ", error)
        throw new Error("Error getting Department");
    }
}

const services = {
    getDepartments,
    addDepartment,
    editDepartment,
    deleteDepartment,
    getDepartmentFromID,
    getStudents,
    addStudent,
    editStudent,
    deleteStudent,
    getStudentFromID,
}

export default services