import React, { Fragment } from "react";
import {
    Button,
    TextField,
    AppBar, Toolbar, Typography
} from "@material-ui/core";
const FormUserProfileDetails = ({ values, handleChange, nextStep, prevStep }) => {

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
                        Enter CV Details
            </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ 'marginTop': '30px' }} >
                <label htmlFor="contained-button-file">
                    <input accept="image/*" id="contained-button-file" name="uploadCV" multiple type="file" />
                    <br />
                    <br />
                </label>
                <br />
                <br />
                <label htmlFor="contained-button-file">
                    <input accept="image/*" id="contained-button-file" name="uploadCoverLetter" onChange={handleChange} multiple type="file" />
                </label>
                <br />

                <TextField
                    style={{ 'marginLeft': '-90px' }}
                    label="About you"
                    name="about_you"
                    value={values.about_you}
                    onChange={handleChange}
                />
                {values.about_you.length === 0 && <div style={{ 'color': 'red', 'marginLeft': '-92px' }}>About you is required.</div>}
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
                    disabled={values.about_you.length === 0}
                >
                    Submit
        </Button>
            </div>
        </Fragment>
    );
}

export default FormUserProfileDetails;
