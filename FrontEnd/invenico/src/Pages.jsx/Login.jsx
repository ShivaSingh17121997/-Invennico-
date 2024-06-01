import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSingupActive, serIsSignUpActive] = useState(true)



  const handleMethodChange = () => {
    serIsSignUpActive(!isSingupActive);
  }

  // signup
  const handleSignup = () => {
    createsignin(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })


  }


  // login

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })

  }










  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
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
        {isSingupActive && <Typography component="h1" variant="h5">
          Login</Typography>}

        {!isSingupActive && <Typography component="h1" variant="h5">
          Signup
        </Typography>}



        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          {isSingupActive && <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>}

          {!isSingupActive && <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignup}
          >
            Signup
          </Button>}



          {isSingupActive && <a onClick={handleMethodChange} > create an account</a>}

          {!isSingupActive && <a onClick={handleMethodChange} >Login</a>}

        </Box>
      </Box>
    </Container>
  );
};

export default Login;
