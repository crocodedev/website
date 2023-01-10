// exports.onServiceWorkerUpdateReady = () => {
//   window.location.reload();
// };

exports.shouldUpdateScroll = () => {
  window.scrollTo({
    top: 0,
  });
  return false;
};
