import '@testing-library/jest-dom';
const {
  actSetError,
  actRemoveError,
  actStartLoading,
  actFinishLoading,
} = require('../../../redux/actions/uiAction');
import { types } from '../../../redux/types/types';

describe('Test file uiActions ', () => {
  test('should all actions create', () => {
    const err = 'Help !!';
    const respAction = actSetError(err);

    const actRemoveErrorRes = actRemoveError();
    const actStartLoadingRes = actStartLoading();
    const actFinishLoadingRes = actFinishLoading();

    expect(actRemoveErrorRes).toEqual({ type: types.uiRemoveError });
    expect(actStartLoadingRes).toEqual({ type: types.uiStartLoading });
    expect(actFinishLoadingRes).toEqual({ type: types.uiFinishLoading });

    expect(respAction).toEqual({ type: types.uiSetError, payload: err });
  });
});
