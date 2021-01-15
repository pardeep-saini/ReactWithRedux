import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  CssBaseline,
  Button,
  Paper,
  Avatar,
  LockIcon,
  Typography,
  FormControl,
  User
} from "../includes";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { connect } from "react-redux";
import {
  userNameChange,
  userPasswordChange,
  userLoginSubmit,
  userTesting   // Step 3
} from "../includes/actions";
import Snackbar from "./Snackbar";
const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Login extends React.Component {
  isLogin() {
    if (User.isLogin()) {
      this.props.history.push("/dashboard");
    }
  }
  componentDidUpdate() {
    this.isLogin();
  }
  componentWillMount() {
    this.isLogin();
  }
  handleChange = name => event => {
    if (name === "username") {
      this.props.onUserNameChange(event.target.value);
      this.props.onUserTesting("Send Name"); // Step 5
      console.log("ThisProps", this.props);
    } else if (name === "password") {
      this.props.onUserPasswordChange(event.target.value);
    }
  };
  onSubmit(event) {
    event.preventDefault();
    this.props.onLoginSubmit(
      this.props.login.username,
      this.props.login.password
    );
  }

  render() {
    console.log("PropsData", this.props);
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Snackbar {...this.props.alert} />
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Login</Typography>
            <ValidatorForm
              className={classes.form}
              onSubmit={this.onSubmit.bind(this)}
              onError={errors => console.log(errors)}
            >
              <FormControl margin="normal" required fullWidth>
                <TextValidator
                  label="User Name (emrah)"
                  validators={["required"]}
                  name="username"
                  id="username"
                  value={this.props.login.username}
                  errorMessages={["Username is requred !"]}
                  onChange={this.handleChange("username")}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextValidator
                  label="Password"
                  name="password"
                  type="password"
                  validators={["required"]}
                  errorMessages={["Password is requred !"]}
                  id="password"
                  value={this.props.login.password}
                  autoComplete="current-password"
                  onChange={this.handleChange("password")}
                />
              </FormControl>

              <Button
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                type="submit"
              >
                 Submit
              </Button>
            </ValidatorForm>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};
//propsları maplemeye yarar
const mapStateToProps = state => {
  return state;
};

//dispatchleri maplemeye yarar
const mapDispatchToProps = {
  onUserNameChange: userNameChange,
  onUserPasswordChange: userPasswordChange,
  onLoginSubmit: userLoginSubmit,
  onUserTesting: userTesting // Step 4
};
const stylesLogin = withStyles(styles)(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stylesLogin);
