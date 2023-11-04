import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView, Text, View } from '../../components/theme/Theme';
import Input from '../../components/form/Input/Input';
import { useFormik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/form/Button/Button';
import { loginValidationSchema } from '../../validation/loginValidation';
import Header from '../../components/header';
import PasswordInput from '../../components/form/PasswordInput/PasswordInput';
import { useAppDispatch } from '../../hooks/useStore';
import authDataSlice from '../../store/slice/authDataSlice';
import { useLoginMutation } from '../../store/api/auth';

const Login = () => {
  const [login] = useLoginMutation()
  const {
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
    setFieldValue,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: {
      password: "",
      email: ""
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      login(values)
    },
  });
  const _changeText = (field: string, text: string) => {
    setFieldValue(field, text);
    handleChange(field);
  };
  const _blurText = (field: string) => {
    handleBlur(field);
  };
  
  const isButtonDisabled = useMemo(() => {
    return values.email === '' || values.password === '';
  }, [values.email, values.password]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Tıkla Gelsin"} />
      <KeyboardAwareScrollView
        keyboardDismissMode='on-drag'
        enableOnAndroid={true}
        keyboardShouldPersistTaps='handled'
        scrollToOverflowEnabled={true}
        enableAutomaticScroll={true}
        contentContainerStyle={{ flexGrow: 1, marginVertical: 60, marginHorizontal: 15 }}
      >
        <Input
          blur={_blurText}
          placeholder={"E-Posta"}
          keyboardType={"email-address"}
          changeText={_changeText}
          value={values.email}
          name={"email"}
          touched={touched.email}
          errors={errors.email}
        />
        <PasswordInput
          blur={_blurText}
          placeholder={"Şifre"}
          changeText={_changeText}
          value={values.password}
          name={"password"}
          touched={touched.password}
          errors={errors.password}
        />

      </KeyboardAwareScrollView>

      <Button
        buttonStyle={isButtonDisabled ? styles.disableButton : styles.button}
        textStyle={styles.textButton}
        disabled={isButtonDisabled}
        title={"Giriş Yap"}
        onPress={() => handleSubmit()}
      />

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 15
  },
  disableButton: {
    paddingVertical: 15,
    borderRadius: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 15,
    backgroundColor: "gray"
  },
  textButton: {
    fontWeight: "500",
    fontSize: 16,
  },


})
export default Login;