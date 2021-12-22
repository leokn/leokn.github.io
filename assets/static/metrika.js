// $ID: metrika.js, 08 Apr 2019 20:17, Leonid 'n3o' Knyazev $

/* eslint-disable */
(function (d, w, c) {
  (w[c] = w[c] || []).push(function () {
    try {
      w.yaCounter15965119 = new Ya.Metrika({
        id: 15965119,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        trackHash: true
      });
    } catch (e) {
    }
  });

  const n = d.getElementsByTagName('script')[0];
  const s = d.createElement('script');
  const f = function () {
    n.parentNode.insertBefore(s, n);
  };
  s.type = 'text/javascript';
  s.async = true;
  s.src = 'https://mc.yandex.ru/metrika/watch.js';

  if (w.opera === '[object Opera]') {
    d.addEventListener('DOMContentLoaded', f, false);
  } else {
    f();
  }
})(document, window, 'yandex_metrika_callbacks');
/* eslint-enable */
