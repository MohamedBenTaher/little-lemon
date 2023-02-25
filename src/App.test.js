import { render, screen, renderHook } from '@testing-library/react';
import { fetchAPI, submitAPI } from './temp';
import { updateTimesReducer, initializeTimes } from '../src/components/MainComponent/MainComponent'

describe('initializeTimes', () => {
  it('should initialize the available times to a static array', () => {
    const date = new Date()
    const { result } = renderHook(() => initializeTimes());
    expect(result.current).toEqual([...fetchAPI(date)]);
  });
});

describe('availableTimesReducer', () => {
  it('should return the same state if the action type is not recognized', () => {
    const date = new Date()
    const initialState = fetchAPI(date);
    const action = { type: 'UNKNOWN' };
    const newState = updateTimesReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('should return the same state if the action type is UPDATE_TIMES and the payload is null', () => {
    const date = new Date()
    const initialState = fetchAPI(date);
    const action = { type: 'UPDATE_TIMES', payload: null };
    const newState = updateTimesReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('should update the available times based on the selected date', () => {
    const date = new Date()
    const initialState = fetchAPI(date);
    const action = { type: 'UPDATE_TIMES', payload: '2023-02-24' };
    const newState = updateTimesReducer(initialState, action);
    expect(newState).toEqual(newState);
  });
});