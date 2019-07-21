import React, { PureComponent } from 'react';

class SWRegister extends PureComponent {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw-dist.js', { scope: '/' })
        .then((reg) => {
          console.log('[ServiceWorkerRegister] Service worker has been registered', reg);
        })
        .catch((err) => {
          console.warn('service worker registration failed', err.message);
        });
    }
  }

  render() {
    return <></>;
  }
}

export default SWRegister;
