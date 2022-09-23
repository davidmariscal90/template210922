import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(8, 'Password must be between 8-16 characters')
    .max(16, 'Password must be between 8-16 characters'),
  terms: yup
    .boolean()
    .label('Terms')
    .test(
      'is-true',
      'Must agree to terms to continue',
      (value) => value === true,
    ),
});

export const sigInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required(),
  password: yup
    .string()
    .label('Password')
    .required('Password must be between 12-20 characters'),
});

export const validationForgotEmailSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required(),
});
