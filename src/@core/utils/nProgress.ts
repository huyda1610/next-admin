import NProgress from "nprogress";

async function loadNprogress() {
  let nProgressInstance: null | typeof NProgress = null;

  nProgressInstance = NProgress;
  nProgressInstance.configure({
    showSpinner: false,
    speed: 300,
  });
  return nProgressInstance;
}

async function startProgress() {
  const nprogress = await loadNprogress();
  nprogress?.start();
}

async function stopProgress() {
  const nprogress = await loadNprogress();
  nprogress?.done();
}

export const nProgress = {
  start: startProgress,
  stop: stopProgress,
};
