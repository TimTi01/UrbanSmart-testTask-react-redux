const defaultState = {
    disabled: true,
}

export const buttonReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_DISABLED_BUTTON':
            return {...state ,disabled: state.disabled = action.payload}
        default:
            return state
    }
}