// src/components/Signup.jsx
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { selectTheme } from '../redux/themeSlice';

const Signup = () => {
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
      // Add your signup logic here
    },
  });

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: themeChoice === 'dark' ? '#121212' : '#f5f5f5' }}>
      <Grid container spacing={0}>
        {/* Left Side: Video */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            component="video"
            src={"https://videos.files.wordpress.com/5ggiLFyJ/sustainability.mp4"}
            autoPlay
            loop
            muted
            sx={{
              height: '100vh',
              width: '100%',
              objectFit: 'cover',
              borderTopLeftRadius: '10px',
              borderBottomLeftRadius: '10px',
            }}
          />
        </Grid>
        
        {/* Right Side: Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ padding: 4, borderRadius: '10px', backgroundColor: themeChoice === 'dark' ? '#424242' : '#fff', height: '100vh' }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: themeChoice === 'dark' ? '#fff' : '#1976d2', fontFamily: 'Roboto, sans-serif' }}>
              Signup
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...formik.getFieldProps('firstName')}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    InputProps={{
                      style: { backgroundColor: themeChoice === 'dark' ? '#616161' : '#fff', fontFamily: 'Roboto, sans-serif' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...formik.getFieldProps('lastName')}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    InputProps={{
                      style: { backgroundColor: themeChoice === 'dark' ? '#616161' : '#fff', fontFamily: 'Roboto, sans-serif' },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...formik.getFieldProps('email')}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputProps={{
                      style: { backgroundColor: themeChoice === 'dark' ? '#616161' : '#fff', fontFamily: 'Roboto, sans-serif' },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
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
                      style: { backgroundColor: themeChoice === 'dark' ? '#616161' : '#fff', fontFamily: 'Roboto, sans-serif' },
                    }}
                  />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" fullWidth color="primary" sx={{ marginTop: 2 }}>
                Signup
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
