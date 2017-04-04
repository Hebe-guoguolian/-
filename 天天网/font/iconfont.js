;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M755.608533 932.927795 268.394537 932.927795c-28.85637 0-52.204058-20.154016-52.204058-44.995797L216.190479 107.928105c0-24.840758 23.347688-44.995797 52.204058-44.995797l487.213997 0c28.852277 0 52.200988 20.154016 52.200988 44.995797l0 780.003893C807.808498 912.773779 784.46081 932.927795 755.608533 932.927795zM511.999488 887.931998c19.203128 0 34.803046-13.4575 34.803046-30.008454 0-16.549931-15.599919-30.007431-34.803046-30.007431-19.200058 0-34.798953 13.4575-34.798953 30.007431C477.199512 874.474498 492.799431 887.931998 511.999488 887.931998zM755.608533 152.923902l-17.401012 0L285.791455 152.923902l-17.397942 0 0 629.996414 17.397942 0 452.415044 0 17.401012 0L755.60751 152.923902z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangjiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M158.44822 698.763614 226.669998 698.763614 516.610506 408.830269 806.539758 698.763614 874.761536 698.763614 516.610506 340.596212Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M535.032576 746.55406 950.358793 323.721893c12.750395-12.991895 12.750395-34.043351 0-46.986127-12.730952-12.991895-33.410947-12.991895-46.13883 0l-392.253732 399.335011L119.711476 276.735765c-12.725836-12.991895-33.411971-12.991895-46.13883 0-12.725836 12.942777-12.725836 33.994232 0 46.986127l415.3211 422.832168C501.649258 759.544933 522.30674 759.544933 535.032576 746.55406L535.032576 746.55406 535.032576 746.55406zM535.032576 746.55406"  ></path>' +
    '' +
    '<path d="M535.032576 746.55406 950.358793 323.721893c12.750395-12.991895 12.750395-34.043351 0-46.986127-12.730952-12.991895-33.410947-12.991895-46.13883 0l-392.253732 399.335011L119.711476 276.735765c-12.725836-12.991895-33.411971-12.991895-46.13883 0-12.725836 12.942777-12.725836 33.994232 0 46.986127l415.3211 422.832168C501.649258 759.544933 522.30674 759.544933 535.032576 746.55406L535.032576 746.55406 535.032576 746.55406zM535.032576 746.55406"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuokuangfangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M707.352 661.24c53.416-65.568 85.488-149.256 85.488-240.456C792.84 210.48 622.52 40 412.416 40 202.336 40 32 210.48 32 420.776s170.336 380.8 380.416 380.8c91.584 0 175.6-32.416 241.256-86.384L938.208 1000l53.792-53.864L707.352 661.24zM412.416 725.408c-168.072 0-304.328-136.376-304.328-304.624 0-168.248 136.256-304.624 304.328-304.624 168.088 0 304.344 136.376 304.344 304.624C716.76 589.024 580.504 725.408 412.416 725.408z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M331.358827 808.510134c-23.728424 0-42.966581 19.23918-42.966581 42.970674 0 23.706935 19.238157 42.989093 42.966581 42.989093 23.731494 0 42.968627-19.282159 42.968627-42.989093C374.327454 827.749314 355.090321 808.510134 331.358827 808.510134L331.358827 808.510134zM761.048169 808.510134c-23.728424 0-42.966581 19.23918-42.966581 42.970674 0 23.706935 19.238157 42.989093 42.966581 42.989093 23.731494 0 42.968627-19.282159 42.968627-42.989093C804.016797 827.749314 784.77864 808.510134 761.048169 808.510134L761.048169 808.510134zM808.716842 722.571856c-27.590382 0-494.14126 0-494.14126 0s-92.148723-292.031123-150.391219-494.140237c-7.364735-25.575492-22.38687-21.485337-42.969651-21.485337-17.918092 0-21.485337 0-21.485337 0-23.87578 0-36.827767 0.082888-36.827767 21.485337 0 19.321044 14.589276 21.484314 36.827767 21.484314 0 0 11.624758 0 21.485337 0 20.72809 0 171.875532 515.625574 171.875532 515.625574s486.065328 0 515.625574 0C838.279135 765.541507 836.3062 722.571856 808.716842 722.571856L808.716842 722.571856zM804.016797 679.604252l90.638323-322.267774L250.121618 357.336478l107.421568 322.267774L804.016797 679.604252 804.016797 679.604252z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)