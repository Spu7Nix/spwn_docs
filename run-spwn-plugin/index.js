let run_spwn = null

import("../try/pkg/spwn_web.js").then((module) => {
  module.default().then(() => {
    module.init_panics()
    run_spwn = module.run_spwn
  })
})
;(function () {
  "use strict"
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj
      }
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
          ? "symbol"
          : typeof obj
      }
    }
    return _typeof(obj)
  }
  function styleInject(css, ref) {
    if (ref === void 0) ref = {}
    var insertAt = ref.insertAt
    if (!css || typeof document === "undefined") {
      return
    }
    var head = document.head || document.getElementsByTagName("head")[0]
    var style = document.createElement("style")
    style.type = "text/css"
    if (insertAt === "top") {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild)
      } else {
        head.appendChild(style)
      }
    } else {
      head.appendChild(style)
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }
  }
  var css = `
.docsify-copy-code-button,
.docsify-copy-code-button span {
    cursor: pointer;
    transition: all .25s ease
}

.docsify-copy-code-button {
    font-family: monospace;
    font-weight: bold;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    overflow: visible;
    padding: .65em .8em;
    border: 0;
    border-radius: 0;
    outline: 0;
    font-size: .75em;
    background: grey;
    background: var(--theme-color, grey);
    color: #fff;
    opacity: 0
}

.docsify-copy-code-button span {
    border-radius: 3px;
    background: inherit;
    pointer-events: none
}

.docsify-copy-code-button .error,
.docsify-copy-code-button .success {
    position: absolute;
    z-index: -100;
    top: 50%;
    right: 0;
    padding: .5em .65em;
    font-size: .75em;
    opacity: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.docsify-copy-code-button.error .error,
.docsify-copy-code-button.success .success {
    right: 100%;
    opacity: 1;
    -webkit-transform: translate(-115%, -50%);
    transform: translate(-115%, -50%)
}

.docsify-copy-code-button:focus,
pre:hover .docsify-copy-code-button {
    opacity: 1
}

.console {
    line-height: 20px;
    color: white;
    background: black;
    opacity: 1.0;
    overflow-wrap: break-word;
    border-radius: 6px;
    z-index: 100;
    padding: 10px;
    font-size: 1em;
    max-height: 500px;
    overflow-x: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;

}

.console-header {
    font-weight: bold;
    /* add padding down */
    padding-bottom: 10px;
}
  `
  styleInject(css)
  function docsifyCopyCode(hook, vm) {
    hook.doneEach(function () {
      var targetElms = Array.apply(null, document.querySelectorAll('pre[data-lang="spwn"]'))
      var i18n = {
        buttonText: "Run",
        errorText: "Error",
        successText: "Success",
      }
      if (vm.config.copyCode) {
        Object.keys(i18n).forEach(function (key) {
          var textValue = vm.config.copyCode[key]
          if (typeof textValue === "string") {
            i18n[key] = textValue
          } else if (_typeof(textValue) === "object") {
            Object.keys(textValue).some(function (match) {
              var isMatch = location.href.indexOf(match) > -1
              i18n[key] = isMatch ? textValue[match] : i18n[key]
              return isMatch
            })
          }
        })
      }
      var template = [
        '<button class="docsify-copy-code-button">',
        '<span class="label">'.concat(i18n.buttonText, "</span>"),
        // '<span class="error">'.concat(i18n.errorText, "</span>"),
        // '<span class="success">'.concat(i18n.successText, "</span>"),
        "</button>",
      ].join("")
      targetElms.forEach(function (elm) {
        elm.insertAdjacentHTML("beforeend", template)
      })
    })
    hook.mounted(function () {
      var listenerHost = document.querySelector(".content")
      listenerHost.addEventListener("click", function (evt) {
        var isCopyCodeButton = evt.target.classList.contains("docsify-copy-code-button")
        if (isCopyCodeButton) {
          var buttonElm = evt.target.tagName === "BUTTON" ? evt.target : evt.target.parentNode
          var preElm = buttonElm.parentNode
          var codeElm = preElm.querySelector("code")
          // extract plain text from code element
          let text_content = codeElm.textContent

          // add console under code element
          // <pre id="console"></pre>
          let console_elm = document.createElement("pre")
          // add class to console
          console_elm.classList.add("console")
          preElm.appendChild(console_elm)

          let [txt, _] = run_spwn(text_content)

          let ansi_up = new AnsiUp()

          let html = ansi_up.ansi_to_html(txt)

          if (txt.length == 0) {
            // add gray text saying "no output"
            html = '<div class="console-header"><span>No output</span></div>' + html
          } else {
            html = '<div class="console-header"><span>Output:</span></div>' + html
          }

          console_elm.innerHTML = html
        }
      })
    })
  }
  if (document.querySelector('link[href*="docsify-copy-code"]')) {
    console.warn("[Deprecation] Link to external docsify-copy-code stylesheet is no longer necessary.")
  }
  window.DocsifyCopyCodePlugin = {
    init: function init() {
      return function (hook, vm) {
        hook.ready(function () {
          console.warn(
            "[Deprecation] Manually initializing docsify-copy-code using window.DocsifyCopyCodePlugin.init() is no longer necessary."
          )
        })
      }
    },
  }
  window.$docsify = window.$docsify || {}
  window.$docsify.plugins = [docsifyCopyCode].concat(window.$docsify.plugins || [])
})()
//# sourceMappingURL=docsify-copy-code.js.map
