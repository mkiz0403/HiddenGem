import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hook/useForm';
import {validateLogin} from '../../utils';

export default function LoginScreen() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChangeEmail = (text: string) => {
  //   setEmail(text);
  // };

  // const handleChangePassword = (text: string) => {
  //   setPassword(text);
  // };

  //  신박한 useState 사용법
  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  // });

  // const [touched, setTouched] = useState({
  //   email: false,
  //   password: false,
  // });

  // const handleChangeText = (name: keyof T, text: string) => {
  //   setValues({
  //     ...values,
  //     [name]: text,
  //   });
  //   setTouched({
  //     ...touched,
  //     [name]: false,
  //   });
  // };

  // const handleBlur = (name: keyof T) => {
  //   setTouched({
  //     ...touched,
  //     [name]: true,
  //   });
  // };

  const login = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log('values', login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={login.errors.email}
          touched={login.touched?.email}
          inputMode="email"
          // value={values.email}
          // onChangeText={text => handleChangeText('email', text)}
          // onBlur={() => handleBlur('email')}
          {...login.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          error={login.errors.password}
          touched={login.touched?.password}
          // value={values.password}
          // onChangeText={text => handleChangeText('password', text)}
          // onBlur={() => handleBlur('password')}
          secureTextEntry
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});
