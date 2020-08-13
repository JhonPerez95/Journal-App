import { types } from '../../../redux/types/types';
import '@testing-library/jest-dom';

describe('Test Types Object', () => {
  const typesTest = {
    login: '[Auth] login',
    logout: '[Auth] logout',

    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',
    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    notesAddNew: '[Notes] New Note',
    notesActive: '[Notes] Active Note',
    notesLoad: '[Notes] Load Notes',
    notesUpdate: '[Notes] Updated Notes',
    notesFileUrl: '[Notes] Updated Img Url',
    notesDelete: '[Notes] Updated Img Url',
    notesLogoutCleaning: '[Notes] Logout Cleanning',
  };
  test('should be the same ', () => {
    expect(typesTest).toEqual(types);
  });
});
