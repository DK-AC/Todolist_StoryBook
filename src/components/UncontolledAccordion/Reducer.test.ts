import {ActionType, reducer, StateType} from "./Reducer";

test('reducer should be correct', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: 'TOGGLE COLLAPSED'})
    const action: ActionType = {type: 'TOGGLE COLLAPSED'}

    expect(newState.collapsed).toBe(true)
    expect(() => {
        reducer(state, {type: 'TOGGLE COLLAPSED'})
    }).toThrowError()
})


test('reducer should throw error because action type is incorrect', () => {
    const state: StateType = {
        collapsed: false
    }

    expect(() => {
        reducer(state, {type: 'FAKE'})
    }).toThrowError()
})

