import React, { useState } from 'react'

import { Avatar, Button, Paper, Grid, Container, Typography } from '@material-ui/core/';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Icon from './icon';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import useStyles from './styles';
import Input from './Input';
import { signin, signup } from '../../actions/auth'
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
export default function Auth() {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const handleSubmit = () => {
        e.preventDefault();
        console.log(formData)
        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
        handleShowPassword(false)
    }
    const googleSuccess = async (res) => {
        console.log(res)
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } })
            history.push('/');
        } catch (error) {
            console.log(error)
        }

    }
    const googleFailure = (error) => {
        console.log(error)
        console.log('Google Sign In was unsuccessfully. Try again later!')
    }
    return (

        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type={handleShowPassword} />}
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleLogin clientId="Google ID" render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}>
                                Google Sign In
                            </Button>
                        )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                        />

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container >
    )
}