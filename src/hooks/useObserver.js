import React from 'react';

const useObserver = (effect, percentage) => {
  const [component, setComponent] = React.useState(null);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: percentage || 0.4,
    };

    function callbackObserver(entries) {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add(effect);
        observer.unobserve(entries[0].target);
      }
    }

    const observer = new IntersectionObserver(callbackObserver, options);

    if (component !== null) {
      observer.observe(component);
    }
  }, [component, percentage, effect]);

  return { setComponent };
};

export default useObserver;
