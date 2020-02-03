import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
};

function counter(state = initialState, action) {

    const { counters } = state;

    switch (action.type) {
        case types.CREATE:
            return {
              counters: [
                  ...counters,
                  {
                      color: action.color,
                      number: 0
                  }
              ]
            };

        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)

            };
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number +1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]

            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number -1
            };
        case types.SET_COLOR:
            return {
                ...state,
                color: action.color
            };
        default:
            return state;
    }
};

export default counter;