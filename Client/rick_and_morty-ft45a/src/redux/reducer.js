import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-type";


const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };
        
        case FILTER:
            if (payload === 'All') return {
                ...state,
                myFavorites: state.allCharacters
            }
            
            return {
                ...state,
                myFavorites: state.allCharacters.filter(char => char.gender === payload)
            }
        
        case ORDER:
            const orderCopy = [...state.myFavorites]
            if (payload === 'A')
                orderCopy.sort((a, b) => a.id - b.id)
            if (payload === 'D')
            orderCopy.sort((a, b) => b.id - a.id)
            return {
                ...state,
                myFavorites: orderCopy
            }
        default:
            return { ...state };
    }        
}


export default reducer;