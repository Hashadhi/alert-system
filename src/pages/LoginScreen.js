import React from "react";
import "../styles/Login.css";
import {
  Paper,
  Grid,
  Avatar,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginScreen = () => {
  const paperStyle = {
    padding: 20,
    height: "68vh",
    width: 380,
    margin: "80px auto",
    fontSize: "20px",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = {
    margin: "8px 0",
  };
  const typoStyle = {
    marginTop: "20px",
  };

  return (
    <Grid style={{ position: "relative" }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <TextField
          className="textfield"
          id="username"
          label="Username"
          variant="standard"
          fullWidth
          required
        />
        <TextField
          className="textfield"
          id="password"
          label="Password"
          variant="standard"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          className="form-control-lable"
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          className="btn"
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <div style={typoStyle}>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography className="signup">
            Do you have an account ?<Link href="#"> Sign up</Link>
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default LoginScreen;
