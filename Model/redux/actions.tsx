export const UPDATE_SPRINT = 'UPDATE_SPRINT';

export const sprintUpdate = value => ({
    type:UPDATE_SPRINT,
    payload: value
});

export const UPDATE_RELAX = 'UPDATE_RELAX';


export const relaxUpdate = value => ({
    type:UPDATE_RELAX,
    payload: value,
});