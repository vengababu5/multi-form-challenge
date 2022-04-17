import React, { Fragment } from "react";
import {
    Button,
    TextField,
    AppBar, Toolbar, Typography
} from "@material-ui/core";
import Checkbox from '@mui/material/Checkbox';
const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
    const phoneNumber = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/

    const continueBtn = () => {
        nextStep();
    }
    const previousBtn = () => {
        prevStep();
    }


    return (
        <Fragment>
            <AppBar style={{ background: "#2E3B55" }} position="sticky">
                <Toolbar title="Enter User Details">
                    <Typography color="inherit" variant="title">
                        Enter Profile Details
            </Typography>
                </Toolbar>
            </AppBar>
            <TextField
                label="Phone Number"
                value={values.phoneNo}
                name='phoneNo'
                onChange={handleChange}

            />
            {!phoneNumber.test(values.phoneNo) && values.phoneNo.length > 0 && values.phoneNo.length > 10 && <div style={{ 'color': 'red' }}>Please enter valid phoner number</div>}
            <br />
            <br />
            <label>
                Do you live in US
            </label>
            <Checkbox
                label="do_you_live_in_us"
                name="do_you_live_in_us"
                defaultChecked
                onChange={handleChange}
                value={values.do_you_live_in_us}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />
            {values.do_you_live_in_us.length === 0 && <div style={{ 'color': 'red' }}>Please select checkbox.</div>}
            <br />
            <TextField
                label="Git profile"
                name="git_profile"
                value={values.git_profile}
                onChange={handleChange}
            />
            {values.git_profile.length === 0 && <div style={{ 'color': 'red' }}>Git Profile is required.</div>}
            <br />
            <br />
            <Button
                style={{
                    background: "#EE3B55",
                    color: "#FFFFFF",
                    marginRight: "1em"
                }}
                label="Back"
                onClick={previousBtn}
            >
                Back
                </Button>
            <Button
                style={{ background: "#2E3B55", color: "#FFFFFF" }}
                label="Continue"
                onClick={continueBtn}
                disabled={values.git_profile.length === 0 || values.do_you_live_in_us.length === 0}
            >
                Continue
        </Button>
        </Fragment>
    );
}

export default FormPersonalDetails;
