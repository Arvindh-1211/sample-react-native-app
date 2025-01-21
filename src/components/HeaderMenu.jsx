import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Menu, Divider, IconButton } from 'react-native-paper';
import { useAuth } from '../store/UserContext';

function HeaderMenu() {
    const navigation = useNavigation()
    const route = useRoute()
    const { clearUserData } = useAuth()

    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<IconButton onPress={openMenu} icon='dots-vertical' iconColor='white' rippleColor='#00000044' />}
            >
                <Menu.Item
                    onPress={() => {
                        if (route.name !== 'Students') {
                            navigation.navigate('Students')
                        }
                        closeMenu()
                    }}
                    leadingIcon='account-multiple'
                    title="Students"
                />
                <Menu.Item
                    onPress={() => {
                        if (route.name !== 'Departments') {
                            navigation.navigate('Departments')
                        }
                        closeMenu()
                    }}
                    leadingIcon='pound'
                    title="Departments"
                />
                <Divider />
                <Menu.Item
                    onPress={() => {
                        clearUserData()
                        closeMenu()
                        navigation.dispatch(
                            CommonActions.reset({
                              index: 0,
                              routes: [{ name: 'Login' }]
                            })
                        )
                    }}
                    leadingIcon='logout'
                    title="Logout"
                />
            </Menu>
        </View>
    )
}

export default HeaderMenu