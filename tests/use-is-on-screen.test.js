import { renderHook } from '@testing-library/react-hooks';

import { useIsOnScreen } from '..';

const observe = jest.fn();
const disconnect = jest.fn();

const intersectionObserverMock = () => ({
  observe,
  disconnect,
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe('useIsOnScreen()', () => {
  it('should return default state for the hook', () => {
    const { result } = renderHook(() => useIsOnScreen());
    expect(result.current).toEqual([false, { current: undefined }]);
  });
});
