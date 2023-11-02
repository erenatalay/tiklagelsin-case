import React from 'react'
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView, Text, View } from '../../components/theme/Theme';
import Colors from '../../constant/Colors';
import Input from '../../components/form/Input';
import { useFormik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/form/Button';

const Login = () => {


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
    // validationSchema :loginValidationSchema,
    onSubmit: (values) => {
    },
  });
  const _changeText = (field: string, text: string) => {
    setFieldValue(field, text);
    handleChange(field);
  };
  const _blurText = (field: string) => {
    handleBlur(field);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        lightColor={Colors.light.red}
        darkColor={Colors.dark.red}
        style={styles.header}>
        <Text style={styles.title}>Tıkla Gelsin</Text>
      </View>

      <KeyboardAwareScrollView
        keyboardDismissMode='on-drag'
        enableOnAndroid={true}
        keyboardShouldPersistTaps='handled'
        scrollToOverflowEnabled={true}
        enableAutomaticScroll={true}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
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
        <Input
          blur={_blurText}
          placeholder={"Şifre"}
          changeText={_changeText}
          value={values.password}
          secureTextEntry={true}
          name={"password"}
          touched={touched.password}
          errors={errors.password}
        />
    
      </KeyboardAwareScrollView>

      <Button
        left={true}
        buttonStyle={styles.button}
        textStyle={styles.textButton}
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
  header: {
    padding: 50,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 30,
    marginTop: 60
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    // backgroundColor: COLORS.primary,
    borderRadius: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  textButton: {
    // color: COLORS.white,
    fontWeight: "500"
  },


})
export default Login;