// src/components/Login.jsx
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { selectTheme } from '../redux/themeSlice';
import { login } from '../services/authApi';

const Login = () => {
  const themeChoice = useSelector(selectTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Logging in with:', values);
      const { email , password } = values;
      dispatch(login(email , password , navigate))
    },
  });

  return (
    <Box
      component={Paper}
      elevation={3}
      sx={{
        padding: 3,
        maxWidth: 400,
        margin: 'auto',
        marginTop: '100px',
        borderRadius: '10px',
        backgroundColor: themeChoice === 'dark' ? '#424242' : '#fff', 
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
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
            style: { backgroundColor: themeChoice === 'dark' ? '#616161' : '#fff' }, // Input background based on theme
          }}
        />
        <Button type="submit" variant="contained" fullWidth color="primary" sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
