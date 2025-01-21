import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddDepartment from '../screens/AddDepartment';
import AddStudent from '../screens/AddStudent';
import Departments from '../screens/Departments';
import EditDepartment from '../screens/EditDepartment';
import EditStudent from '../screens/EditStudent';
import Students from '../screens/Students';
import Login from '../screens/Login';
import ProtectedScreen from '../components/ProtectedScreen';
import HeaderMenu from '../components/HeaderMenu';
import TestScreen from '../screens/TestScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Students'
                screenOptions={{
                    headerRight: () => <HeaderMenu />,
                    headerStyle: {
                        backgroundColor: '#007cff',
                    },
                    headerTintColor: 'white',
                }}
            >

                <Stack.Screen
                    name="TestScreen"
                    options={{ title: 'Test Screen'}}
                >
                    {({ navigation, route }) => (
                        <TestScreen  />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="Login"
                    options={{ title: 'Login', headerShown: false }}
                >
                    {({ navigation, route }) => (
                        <Login  />
                    )}
                </Stack.Screen>

                <Stack.Screen
                    name="Departments"
                    options={{ title: 'Departments' }}
                >
                    {({ navigation, route }) => (
                        <ProtectedScreen >
                            <Departments  />
                        </ProtectedScreen>
                    )}
                </Stack.Screen>

                <Stack.Screen
                    name="AddDepartment"
                    options={{ title: 'Add Department' }}
                >
                    {({ navigation, route }) => (
                        <ProtectedScreen users={['admin']} >
                            <AddDepartment  />
                        </ProtectedScreen>
                    )}
                </Stack.Screen>

                <Stack.Screen
                    name="EditDepartment"
                    options={{ title: 'Edit Department' }}
                >
                    {({ navigation, route }) => (
                        <ProtectedScreen users={['admin']} >
                            <EditDepartment  />
                        </ProtectedScreen>)}
                </Stack.Screen>

                <Stack.Screen
                    name="Students"
                    options={{ title: 'Students' }}
                >
                    {({ navigation, route }) => (
                        <ProtectedScreen >
                            <Students  />
                        </ProtectedScreen>
                    )}
                </Stack.Screen>

                <Stack.Screen
                    name="AddStudent"
                    options={{ title: 'Add Student' }}
                >
                    {({ navigation, route }) => (
                        <ProtectedScreen users={['admin']} >
                            <AddStudent  />
                        </ProtectedScreen>
                    )}
                </Stack.Screen>

                <Stack.Screen
                    name="EditStudent"
                    options={{ title: 'Edit Student' }}
                >
                    {({ navigation, route }) => (
                        <ProtectedScreen users={['admin']} >
                            <EditStudent  />
                        </ProtectedScreen>)}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
