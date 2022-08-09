import React from 'react';

const useObserver = (effect, percentage, mobilePercentage) => {
  const [component, setComponent] = React.useState(null);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold:
        window.innerWidth > 768 ? percentage : mobilePercentage || 0.35,
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
  }, [component, percentage, effect, mobilePercentage]);

  return { setComponent };
};

export default useObserver;
