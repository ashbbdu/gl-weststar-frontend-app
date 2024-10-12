import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { selectTheme } from '../redux/themeSlice';
import { login } from '../services/authApi';

import backgroundImage from '../assets/industrial-port-de-barcelona-evening.jpg';

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
      dispatch(login(email , password , navigate));
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
          maxWidth: 400,
          borderRadius: '10px',
          backgroundColor: themeChoice === 'dark' ? '#424242' : '#fff',
          opacity: 0.9,
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
              style: { backgroundColor: themeChoice === 'dark' ? '#616161' : '#fff' },
            }}
          />
          <Button type="submit" variant="contained" fullWidth color="primary" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={1}>
            <Typography variant='p'>Don't have account ? <Link to={'/signup'}>Sign up</Link></Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
