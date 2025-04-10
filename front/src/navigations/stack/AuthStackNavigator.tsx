import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import LoginScreen from '../../screens/auth/LoginScreen';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import {authNavigations} from '../../constants';
import SignupScreen from '../../screens/auth/SignupScreen';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
};

// 타입 지정 공부

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStackNavigater() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'gray',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }} // 헤더 없애기
      />
      <Stack.Screen
        name={authNavigations.LOGIN}
        component={LoginScreen}
        options={{headerTitle: '로그인'}}
      />
      <Stack.Screen
        name={authNavigations.SIGNUP}
        component={SignupScreen}
        options={{headerTitle: '회원가입'}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
