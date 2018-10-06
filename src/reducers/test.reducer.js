import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
    appName: 'StarWars'
});

export default function testReducer(state = INITIAL_STATE, {type, payload = {}}){
    switch (type) {
        default:
            return state;
    }
};
