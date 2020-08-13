import '@testing-library/jest-dom';
import { types } from '../../../redux/types/types';

const { authReducer } = require('../../../redux/reducers/authReducer');

describe('Test the Reducer authReducer', () => {
  const initialState = {};
  test('should return state login', () => {
    const action = {
      type: types.login,
      payload: { uid: '13213213213', displayName: 'test' },
    };
    const resp = authReducer(initialState, action);
    expect(resp).toEqual({ uid: '13213213213', name: 'test' });
  });

  test('should return state {}  ', () => {
    const resp = authReducer(initialState, { type: types.logout });
    expect(resp).toEqual({});
  });

  test('should return the state for default {}', () => {
    const resp = authReducer(initialState, {});
    expect(resp).toEqual(initialState);
  });
});
