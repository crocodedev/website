exports.onServiceWorkerUpdateReady = () => {
  window.location.reload();
};

exports.shouldUpdateScroll = () => {
  document.querySelector("#gatsby-focus-wrapper").scrollTop = 0;
  return false;
};
