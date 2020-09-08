import React from "react";

const third_section_title = (<span>Our friends who<br />are looking for a house</span>)
const error_title = (<span>Oops. The angry cat broke something again,<br /> please refresh the page</span>)
const load_title = (<span>The pets are on their way...</span>)

const initialState = {
    pets: [],
    loading: true,
    error: null,
    third_section_title: third_section_title
};


const reducer = (state=initialState, action) => {

    switch (action.type) {
        case "PETS_LOADED":
            return {
                pets: action.payload,
                loading: false,
                error: null,
                third_section_title: third_section_title
            };
        case "PETS_REQUESTED":
            return {
                pets: [],
                loading: true,
                error: null,
                third_section_title: load_title
            };
        case 'PETS_ERROR':
            return {
                pets: [],
                loading: false,
                error: action.payload,
                third_section_title: error_title
            };
        default:
            return state;
    }
};

export default reducer;
