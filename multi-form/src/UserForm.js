import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormUserDetails from '../src/Components/formUserDetails';
import FormPersonDetails from '../src/Components/fromPersonDetails';
import FormUserProfileDetails from './Components/formUserProfileDetails';
import Success from './Components/Success'
const UserFrom = () => {
    const currentUser = useSelector(state => state.multiStepForm)
    const { userInfo, stepCount } = currentUser;
    const [userDetails, setUserDetails] = useState(userInfo)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        if (e.target.name === 'do_you_live_in_us') {
            setUserDetails({
                ...userDetails,
                [e.target.name]: e.target.checked
            })
        }
        else {
            setUserDetails({
                ...userDetails,
                [e.target.name]: e.target.value
            })
        }
    };
    const nextStep = () => {
        dispatch({
            type: 'user_details',
            payload: userDetails
        })
        dispatch({
            type: 'step_info',
            payload: stepCount + 1
        });
    }

    const prevStep = () => {
        dispatch({
            type: 'step_info',
            payload: stepCount - 1
        });
    };

    const getUserDetails = (key) => {
        switch (key) {
            case 1:
                return <FormUserDetails nextStep={nextStep}
                    handleChange={handleChange}
                    values={userDetails}
                    stepCount={stepCount}
                />
            case 2:
                return <FormPersonDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={userDetails}
                    stepCount={stepCount}
                />
            case 3:
                return <FormUserProfileDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    values={userDetails}
                    stepCount={stepCount}
                />
            case 4:
                return <Success values={userDetails} />

            default:
                break;
        }
    }
    return (
        <>{getUserDetails(stepCount)}</>
    )
}
export default UserFrom;