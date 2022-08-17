import { object, string } from 'yup';

export const signUpValidator = object().shape({
  email: string().required('You must enter an email.').email('Please enter a valid email address.'),
  fullname: string().required('You must enter your full name.'),
  password: string()
    .min(6, 'Your Password must be at least 6 characters.')
    .max(24, "Your Password can't be longer than 24 characters.")
    .required('You must enter a password'),
});
