import * as actions from './actionTypes'

let lastId = 0;
const reducer = (state = [], action) => {
    if (action.type === actions.BUG_ADD) {
        return [
            ...state,
            {
                id: ++lastId,
                discription: action.discription,
                resolved: false
            }
        ]
    }
    else if (action.type === actions.REMOVE_BUG)
        return state.filter(bug => bug.id !== action.discription.id)
    else if (action.type === actions.RESOLVE_BUG)
        return state.map(bug => bug.id !== action.discription.id ? bug : { ...bug, resolved: true })
    return state;
}

export default reducer;