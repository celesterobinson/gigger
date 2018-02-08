import axios from "axios";

const gigReducer = (prevState = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "POST_GIG":
            return {
                loading: false,
                data: [...prevState.data, action.data]
            }
        case "GET_GIG":
            return {
                loading: false,
                data: action.data
            }
        case "UPDATE_GIG":
            return {
                loading: false,
                data: prevState.data.map((gig) => {
                    if (gig._id === action.id) {
                        return action.updatedGig;
                    } else {
                        return gig
                    }
                })
            }
        case "DELETE_GIG":
            return {
                loading: false,
                data: prevState.data.filter((gig) => {
                    return gig._id !== action.id;
                })
            }
        default:
            return prevState;
    }
}

const gigUrl = `/gig/`;

export const postGig = (inputs) => {
    return dispatch => {
        axios.post(gigUrl, inputs)
            .then((response) => {
                let { data } = response;
                dispatch({
                    type: "POST_GIG",
                    data
                })
            })
    }
}

export const getGig = () => {
    return dispatch => {
        axios.get(gigUrl)
            .then((response) => {
                let { data } = response;
                dispatch({
                    type: "GET_GIG",
                    data
                })
            })
    }
}

export const updateGig = (updatedGig, id) => {
    return dispatch => {
        axios.put(gigUrl + id, updatedGig)
            .then((response) => {
                dispatch({
                    type: "UPDATE_GIG",
                    updatedGig: response.data,
                    id
                })
            })
    }
}

export const deleteGig = (id) => {
    return dispatch => {
        axios.delete(gigUrl + id, id)
            .then((response) => {
                dispatch({
                    type: "DELETE_GIG",
                    id
                })
            })
    }
}

export default gigReducer;