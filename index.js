import React from 'react';

export function useIsOnScreen() {
  const elementRef = React.useRef();
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setValue(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return [value, elementRef];
}
