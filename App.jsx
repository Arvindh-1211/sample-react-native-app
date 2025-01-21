import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { UserProvider } from './src/store/UserContext';
import { ErrorProvider } from './src/store/ErrorContext';

function App() {

  return (
    <UserProvider>
      <PaperProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
              <ErrorProvider>
                <AppNavigator />
              </ErrorProvider>
          </SafeAreaView>
        </GestureHandlerRootView>
      </PaperProvider>
    </UserProvider>
  );
}

export default App;