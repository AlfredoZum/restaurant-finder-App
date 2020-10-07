const initialState = {
    index: 0,
    routes: [
        { key: 'home', title: 'Restaurants', icon: 'home'},
        { key: 'offers', title: 'Offers', icon: 'fire' },
        { key: 'account', title: 'Account', icon: 'account' },
    ]
}

export default(state = initialState, action) => {
    
    switch (action.type) {
        case 'selected_tab':
            return { 
                ...state, 
                index: action.payload,
            }
        default:
            return state
    }
}