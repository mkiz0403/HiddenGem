import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';

import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hook/useForm';

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
  });

  const handleSubmit = () => {
    console.log('values', login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={'이메일을 입력해주세요.'}
          touched={login.touched?.email}
          inputMode="email"
          // value={values.email}
          // onChangeText={text => handleChangeText('email', text)}
          // onBlur={() => handleBlur('email')}
          {...login.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          error={'비밀번호를 입력해주세요.'}
          touched={login.touched?.password}
          // value={values.password}
          // onChangeText={text => handleChangeText('password', text)}
          // secureTextEntry
          // onBlur={() => handleBlur('password')}
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
