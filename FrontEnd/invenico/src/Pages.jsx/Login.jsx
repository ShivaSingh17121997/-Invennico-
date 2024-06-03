import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link as MuiLink } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupActive, setIsSignupActive] = useState(true);

  const navigate = useNavigate();

  const handleMethodChange = () => {
    setIsSignupActive(!isSignupActive);
  };

  // signup
  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Signup successful!", {
          position: "top-right",
        });

        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(`Signup failed: ${errorMessage}`, {
          position: "top-right",
        });
      });
  };

  // login
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("Login successful");
        console.log("Token", user.accessToken);

        toast.success("Login successful!", {
          position: "top-right",
        });

        if (user.accessToken) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(`Login failed: ${errorMessage}`, {
          position: "top-right",
        });
      });
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {isSignupActive ? 'Signup' : 'Login'}
        </Typography>

        <Box component="form" sx={{ mt: 1 }} onSubmit={isSignupActive ? handleSignup : handleLogin}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isSignupActive ? 'Signup' : 'Login'}
          </Button>

          <MuiLink component="button" variant="body2" onClick={handleMethodChange}>
            {isSignupActive ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
          </MuiLink>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default Login;
