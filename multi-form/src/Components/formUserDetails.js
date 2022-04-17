import React, { Fragment } from "react";
import {
    AppBar,
    Button,
    TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
const FormUserDetails = ({ values, handleChange, nextStep }) => {
    const continueBtn = () => {
        nextStep();
    }
    const emailRegex = /\S+@\S+\.\S+/;
    return (
        <Fragment>
            <AppBar style={{ background: "#2E3B55" }} position="sticky">
                <Toolbar title="Enter User Details">
                    <Typography color="inherit" variant="title">
                        Enter User Details
            </Typography>
                </Toolbar>
            </AppBar>
            <TextField
                label="First Name"
                value={values.firstName}
                name='firstName'
                onChange={handleChange}

            />
            {values.firstName.length === 0 && <div style={{ 'color': 'red' }}>First name is required.</div>}
            <br />
            <TextField
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
            />

            <br />
            <TextField
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}

            />

            <br />
            {values.email.length === 0 && <div style={{ 'color': 'red' }}>Email is required.</div>}
            {values.email.length !== 0 && !emailRegex.test(values.email) && <div>Please enter valid email address</div>}
            <br />

            <Button
                style={{ background: "#2E3B55", color: "#FFFFFF" }}
                label="Continue"
                onClick={continueBtn}
                disabled={values.firstName === '' || values.email === ''}
            >
                Continue
        </Button>
        </Fragment>
    );
}

export default FormUserDetails;
