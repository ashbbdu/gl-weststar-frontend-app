// src/components/Signup.jsx
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import backgroundImage from '../assets/industrial-port-de-barcelona-evening.jpg'; // Adjust this path as necessary
import { selectTheme } from '../redux/themeSlice';
import { signUp } from '../services/authApi';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const themeChoice = useSelector(selectTheme);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Signing up with:', values);
      const { firstName, lastName, email, password } = values;
      dispatch(signUp(firstName, lastName, email, password, navigate));
    },
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          maxWidth: 500,
          width: '100%',
          borderRadius: '10px',
          backgroundColor: themeChoice === 'dark' ? '#424242' : '#fff',
          opacity: 0.9,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Signup
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('firstName')}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            InputProps={{
              style: { backgroundColor: themeChoice === 'dark' ? '#616161' : '#fff' },
            }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('lastName')}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            InputProps={{
              style: { backgroundColor: themeChoice === 'dark' ? '#616161' : '#fff' },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('email')}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              style: { backgroundColor: themeChoice === 'dark' ? '#616161' : '#fff' },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('password')}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              style: { backgroundColor: themeChoice === 'dark' ? '#616161' : '#fff' },
            }}
          />
          <Button type="submit" variant="contained" fullWidth color="primary" sx={{ mt: 2 }}>
            Signup
          </Button>
        </form>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={1}>
          <Typography variant='body2'>
            Already have an account? <Link to={'/'}>Login</Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signup;
