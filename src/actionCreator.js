import * as actions from './actionTypes'


export const bugAdd = (discription) => {
    return {
        type: actions.BUG_ADD,
        discription: discription
    };
}

export const bugRemove = (id) => ({
    type: actions.REMOVE_BUG,
    discription: {
        id: id
    }
});

export const bugResolved = (id) => ({
    type: actions.RESOLVE_BUG,
    discription: {
        id: id
    }
});