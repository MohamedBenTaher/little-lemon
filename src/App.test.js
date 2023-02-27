import { render, screen, renderHook } from '@testing-library/react';
import { fetchAPI, submitAPI } from './temp';
import { updateTimesReducer, initializeTimes } from '../src/components/MainComponent/MainComponent'
import { ReactDOM } from 'react';
import MainComponent from '../src/components/MainComponent/MainComponent';

// test('renders without crashing', () => {
//   const { getByTestId } = render(<MainComponent />);
//   const mainComponent = getByTestId('main-component');
//   expect(mainComponent).toBeInTheDocument();
// });
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