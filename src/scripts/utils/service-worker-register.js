import { Workbox } from 'workbox-window';

const serviceWorkerRegister = async () => {
  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('../service-worker.js');
    workbox.register();
  }
};

export default serviceWorkerRegister;
