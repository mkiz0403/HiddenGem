import React, {useRef} from 'react';
import {SafeAreaView, View, StyleSheet, TextInput} from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hook/useForm';
import CustomButton from '../../components/CustomButton';
import {validateSignup} from '../../utils';

export default function SignupScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const signup = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    console.log(signup.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          error={signup.errors.email}
          touched={signup.touched?.email}
          inputMode="email"
          returnKeyType="next"
          submitBehavior="submit"
          // blurAndSubmit 의 신버전 (기본값은 false)
          //"blurAndSubmit" : 엔터 누르면 키보드 내려가고 onSubmitEditing 실행
          // newline : 엔터 누르면 줄바꿈만 됨 (기존 blurOnSubmit : false 와 같음
          // submit : 엔터 누르면 onSubmitEditing만 실행되고 포커스 유지
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={signup.errors.password}
          touched={signup.touched?.password}
          textContentType="oneTimeCode"
          secureTextEntry
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          error={signup.errors.passwordConfirm}
          touched={signup.touched?.passwordConfirm}
          textContentType="oneTimeCode"
          secureTextEntry
          onSubmitEditing={handleSubmit}
          {...signup.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label="회원가입" onPress={handleSubmit} />
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
