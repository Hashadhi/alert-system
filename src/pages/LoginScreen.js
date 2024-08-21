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
  styled,
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
  const btnstyle = { margin: "8px 0" };
  const Tabs = styled(Typography)`
    margin: 12px 0 auto;
    font-size: 14px;
  `;

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
        <Tabs>
          <Link href="#">Forgot password ?</Link>
        </Tabs>
        <Tabs className="signup">
          Do you have an account ?<Link href="#"> Sign up</Link>
        </Tabs>
      </Paper>
    </Grid>
  );
};

export default LoginScreen;
