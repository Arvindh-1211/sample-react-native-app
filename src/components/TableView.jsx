import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { DataTable } from 'react-native-paper';
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import ProtectedComponent from "./ProtectedComponent";

function TableView({ tableData, onEdit, onDelete }) {
    // console.log(tableData);
    
    const fields = tableData && tableData.length > 0 ? Object.keys(tableData[0]) : null

    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([3, 5, 10]);
    const [itemsPerPage, onItemssPerPageChange] = useState(
        numberOfItemsPerPageList[0]
    );
    const from = page * itemsPerPage;
    const to = tableData && tableData.length > 0 ? Math.min((page + 1) * itemsPerPage, tableData.length) : null;

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage])

    if (!tableData || tableData.length === 0) {
        return (
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>No data available</DataTable.Title>
                </DataTable.Header>
            </DataTable>
        )
    }

    return (
        <DataTable>
            <DataTable.Header style={styles.header}>
                {fields &&
                    fields.map((field, index) => (
                        <DataTable.Title key={index} style={styles.headerData}>{field.toUpperCase()}</DataTable.Title>
                    ))
                }
                <ProtectedComponent users={['admin']}>
                    <DataTable.Title style={[styles.headerData, styles.optionsWidth]}>OPTIONS</DataTable.Title>
                </ProtectedComponent>
            </DataTable.Header>

            {tableData &&
                tableData.slice(from, to).map((item, index) => (
                    <DataTable.Row key={index}>
                        {
                            fields.map((field, index) => (
                                <DataTable.Cell key={index} style={styles.cell}>{item[field]}</DataTable.Cell>
                            ))
                        }
                        <ProtectedComponent users={['admin']}>
                            <DataTable.Cell style={[styles.options, styles.optionsWidth]}>
                                <View style={styles.option}>
                                    <AntDesignIcon name='edit' color='#007cff' size={24} onPress={() => onEdit(item)} />
                                </View>
                                <View style={styles.option}>
                                    <MaterialIcon name='delete' color='#ff0000' size={24} onPress={() => onDelete(item)} />
                                </View>
                            </DataTable.Cell>
                        </ProtectedComponent>
                    </DataTable.Row>
                ))
            }

            <DataTable.Pagination
                style={styles.pagination}
                page={page}
                numberOfPages={Math.ceil(tableData.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} of ${tableData.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemssPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'Rows per page'}
            />
        </DataTable>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#e7e5e8'
    },
    headerData: {
        justifyContent: 'center',
    },
    cell: {
        justifyContent: 'center',
    },
    pagination: {
        backgroundColor: '#e7e5e8',
    },
    optionsWidth: {
        minWidth: 20,
    },
    options: {
        justifyContent: 'space-around',
    },
    option: {
        paddingHorizontal: 6,
    },
})

export default TableView