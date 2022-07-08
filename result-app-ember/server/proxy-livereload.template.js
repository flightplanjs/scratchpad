/* eslint-disable */
(function() {
  const srcUrl = null;
  const host = location.hostname || 'localhost';
  const useCustomPort = false || !!(location.port && location.port !== 4200);
  const defaultPort = location.port || (location.protocol === 'https:' ? 443 : 80);
  const port = useCustomPort ? 4200 : defaultPort;
  const path = '&path=_lr/livereload';
  const prefixURL = useCustomPort ? (location.protocol || 'http:') + '//' + host + ':' + 4200 : '';
  const src = srcUrl || prefixURL + '/_lr/livereload.js?port=' + port + '&host=' + host + path;
  const script    = document.createElement('script');
  script.type   = 'text/javascript';
  script.src    = src;
  document.getElementsByTagName('head')[0].appendChild(script);
}());
