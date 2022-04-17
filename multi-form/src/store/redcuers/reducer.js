import { USERS_DETAILS, STEP_INFO } from "../actions/actionTypes";

const usersinitialState = {
    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        do_you_live_in_us: 'on',
        git_profile: '',
        uploadCV: '',
        uploadCoverLetter: '',
        about_you: '',
    },

    stepCount: 1

};

const reducer = (state = usersinitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case USERS_DETAILS:
            return {
                userInfo: payload
            }
        case STEP_INFO:
            return {
                ...state,
                stepCount: payload
            }

        default:
            return state;
    }
};

export default reducer;