const modalReducer = (modal = { show: false, date: new Date() }, action) => {
    switch (action.type) {
        case "MODAL_TOGGLE":
            return { show: !modal.show, date: action.date }
        default:
            return modal
    }
}

export const modalToggle = (date) => {
    return {
        type: "MODAL_TOGGLE",
        date
    }
}

export default modalReducer;