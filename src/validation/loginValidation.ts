import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen  doğru email adresinizi giriniz.")
    .required("Email girmek zorunludur"),
  password: yup
    .string()
    .required('Şifre girmek zorunludur.'),
})