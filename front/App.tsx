import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import RootNavigator from './src/navigations/root/RootNavigator';

function App(): React.JSX.Element {
  const [name, setName] = useState('');

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
