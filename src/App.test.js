import { render, screen, renderHook } from '@testing-library/react';

import { updateTimesReducer, initializeTimes } from './App'

describe('initializeTimes', () => {
  it('should initialize the available times to a static array', () => {
    const { result } = renderHook(() => initializeTimes());
    expect(result.current).toEqual(['10:00', '12:00', '14:00', '16:00']);
  });
});

describe('availableTimesReducer', () => {
  it('should return the same state if the action type is not recognized', () => {
    const initialState = ['11:00', '12:00', '14:00'];
    const action = { type: 'UNKNOWN' };
    const newState = updateTimesReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('should return the same state if the action type is UPDATE_TIMES and the payload is null', () => {
    const initialState = ['11:00', '12:00', '14:00'];
    const action = { type: 'UPDATE_TIMES', payload: null };
    const newState = updateTimesReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('should update the available times based on the selected date', () => {
    const initialState = ['11:00', '12:00', '14:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2023-02-24' };
    const newState = updateTimesReducer(initialState, action);
    expect(newState).toEqual(["12:00 "]);
  });
});