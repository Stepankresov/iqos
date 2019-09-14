function _toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
    return i;
  }
  return Array.from(e);
}
!(function(t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function(e) {
        return t(e);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t(require("jquery")))
    : t(window.jQuery);
})(function(e) {
  "use strict";
  function t(e) {
    void 0 === e && (e = window.navigator.userAgent), (e = e.toLowerCase());
    var t =
        /(edge)\/([\w.]+)/.exec(e) ||
        /(opr)[\/]([\w.]+)/.exec(e) ||
        /(chrome)[ \/]([\w.]+)/.exec(e) ||
        /(iemobile)[\/]([\w.]+)/.exec(e) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(
          e
        ) ||
        /(webkit)[ \/]([\w.]+)/.exec(e) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
        /(msie) ([\w.]+)/.exec(e) ||
        (0 <= e.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(e)) ||
        (e.indexOf("compatible") < 0 &&
          /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
        [],
      i =
        /(ipad)/.exec(e) ||
        /(ipod)/.exec(e) ||
        /(windows phone)/.exec(e) ||
        /(iphone)/.exec(e) ||
        /(kindle)/.exec(e) ||
        /(silk)/.exec(e) ||
        /(android)/.exec(e) ||
        /(win)/.exec(e) ||
        /(mac)/.exec(e) ||
        /(linux)/.exec(e) ||
        /(cros)/.exec(e) ||
        /(playbook)/.exec(e) ||
        /(bb)/.exec(e) ||
        /(blackberry)/.exec(e) ||
        [],
      n = {},
      o = {
        browser: t[5] || t[3] || t[1] || "",
        version: t[2] || t[4] || "0",
        versionNumber: t[4] || t[2] || "0",
        platform: i[0] || ""
      };
    if (
      (o.browser &&
        ((n[o.browser] = !0),
        (n.version = o.version),
        (n.versionNumber = parseInt(o.versionNumber, 10))),
      o.platform && (n[o.platform] = !0),
      (n.android ||
        n.bb ||
        n.blackberry ||
        n.ipad ||
        n.iphone ||
        n.ipod ||
        n.kindle ||
        n.playbook ||
        n.silk ||
        n["windows phone"]) &&
        (n.mobile = !0),
      (n.cros || n.mac || n.linux || n.win) && (n.desktop = !0),
      (n.chrome || n.opr || n.safari) && (n.webkit = !0),
      n.rv || n.iemobile)
    ) {
      var r = "msie";
      n[(o.browser = r)] = !0;
    }
    if (n.edge) {
      delete n.edge;
      var s = "msedge";
      n[(o.browser = s)] = !0;
    }
    if (n.safari && n.blackberry) {
      var a = "blackberry";
      n[(o.browser = a)] = !0;
    }
    if (n.safari && n.playbook) {
      var l = "playbook";
      n[(o.browser = l)] = !0;
    }
    if (n.bb) {
      var d = "blackberry";
      n[(o.browser = d)] = !0;
    }
    if (n.opr) {
      var u = "opera";
      n[(o.browser = u)] = !0;
    }
    if (n.safari && n.android) {
      var c = "android";
      n[(o.browser = c)] = !0;
    }
    if (n.safari && n.kindle) {
      var p = "kindle";
      n[(o.browser = p)] = !0;
    }
    if (n.safari && n.silk) {
      var h = "silk";
      n[(o.browser = h)] = !0;
    }
    return (n.name = o.browser), (n.platform = o.platform), n;
  }
  return (
    (window.jQBrowser = t(window.navigator.userAgent)),
    (window.jQBrowser.uaMatch = t),
    e && (e.browser = window.jQBrowser),
    window.jQBrowser
  );
}),
  (function(e, t) {
    if ("function" == typeof define && define.amd)
      define(["module", "exports"], t);
    else if ("undefined" != typeof exports) t(module, exports);
    else {
      var i = { exports: {} };
      t(i, i.exports), (e.autosize = i.exports);
    }
  })(this, function(e, t) {
    "use strict";
    var i,
      n,
      c =
        "function" == typeof Map
          ? new Map()
          : ((i = []),
            (n = []),
            {
              has: function(e) {
                return -1 < i.indexOf(e);
              },
              get: function(e) {
                return n[i.indexOf(e)];
              },
              set: function(e, t) {
                -1 === i.indexOf(e) && (i.push(e), n.push(t));
              },
              delete: function(e) {
                var t = i.indexOf(e);
                -1 < t && (i.splice(t, 1), n.splice(t, 1));
              }
            }),
      p = function(e) {
        return new Event(e, { bubbles: !0 });
      };
    try {
      new Event("test");
    } catch (e) {
      p = function(e) {
        var t = document.createEvent("Event");
        return t.initEvent(e, !0, !1), t;
      };
    }
    function o(e) {
      var t = c.get(e);
      t && t.destroy();
    }
    function r(e) {
      var t = c.get(e);
      t && t.update();
    }
    var s = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle
      ? (((s = function(e) {
          return e;
        }).destroy = function(e) {
          return e;
        }),
        (s.update = function(e) {
          return e;
        }))
      : (((s = function(e, t) {
          return (
            e &&
              Array.prototype.forEach.call(e.length ? e : [e], function(e) {
                return (function(o) {
                  if (
                    o &&
                    o.nodeName &&
                    "TEXTAREA" === o.nodeName &&
                    !c.has(o)
                  ) {
                    var e,
                      i = null,
                      n = null,
                      r = null,
                      s = function() {
                        o.clientWidth !== n && u();
                      },
                      a = function(t) {
                        window.removeEventListener("resize", s, !1),
                          o.removeEventListener("input", u, !1),
                          o.removeEventListener("keyup", u, !1),
                          o.removeEventListener("autosize:destroy", a, !1),
                          o.removeEventListener("autosize:update", u, !1),
                          Object.keys(t).forEach(function(e) {
                            o.style[e] = t[e];
                          }),
                          c.delete(o);
                      }.bind(o, {
                        height: o.style.height,
                        resize: o.style.resize,
                        overflowY: o.style.overflowY,
                        overflowX: o.style.overflowX,
                        wordWrap: o.style.wordWrap
                      });
                    o.addEventListener("autosize:destroy", a, !1),
                      "onpropertychange" in o &&
                        "oninput" in o &&
                        o.addEventListener("keyup", u, !1),
                      window.addEventListener("resize", s, !1),
                      o.addEventListener("input", u, !1),
                      o.addEventListener("autosize:update", u, !1),
                      (o.style.overflowX = "hidden"),
                      (o.style.wordWrap = "break-word"),
                      c.set(o, { destroy: a, update: u }),
                      "vertical" ===
                      (e = window.getComputedStyle(o, null)).resize
                        ? (o.style.resize = "none")
                        : "both" === e.resize &&
                          (o.style.resize = "horizontal"),
                      (i =
                        "content-box" === e.boxSizing
                          ? -(
                              parseFloat(e.paddingTop) +
                              parseFloat(e.paddingBottom)
                            )
                          : parseFloat(e.borderTopWidth) +
                            parseFloat(e.borderBottomWidth)),
                      isNaN(i) && (i = 0),
                      u();
                  }
                  function l(e) {
                    var t = o.style.width;
                    (o.style.width = "0px"),
                      o.offsetWidth,
                      (o.style.width = t),
                      (o.style.overflowY = e);
                  }
                  function d() {
                    if (0 !== o.scrollHeight) {
                      var e = (function(e) {
                          for (
                            var t = [];
                            e &&
                            e.parentNode &&
                            e.parentNode instanceof Element;

                          )
                            e.parentNode.scrollTop &&
                              t.push({
                                node: e.parentNode,
                                scrollTop: e.parentNode.scrollTop
                              }),
                              (e = e.parentNode);
                          return t;
                        })(o),
                        t =
                          document.documentElement &&
                          document.documentElement.scrollTop;
                      (o.style.height = ""),
                        (o.style.height = o.scrollHeight + i + "px"),
                        (n = o.clientWidth),
                        e.forEach(function(e) {
                          e.node.scrollTop = e.scrollTop;
                        }),
                        t && (document.documentElement.scrollTop = t);
                    }
                  }
                  function u() {
                    d();
                    var e = Math.round(parseFloat(o.style.height)),
                      t = window.getComputedStyle(o, null),
                      i =
                        "content-box" === t.boxSizing
                          ? Math.round(parseFloat(t.height))
                          : o.offsetHeight;
                    if (
                      (i !== e
                        ? "hidden" === t.overflowY &&
                          (l("scroll"),
                          d(),
                          (i =
                            "content-box" === t.boxSizing
                              ? Math.round(
                                  parseFloat(
                                    window.getComputedStyle(o, null).height
                                  )
                                )
                              : o.offsetHeight))
                        : "hidden" !== t.overflowY &&
                          (l("hidden"),
                          d(),
                          (i =
                            "content-box" === t.boxSizing
                              ? Math.round(
                                  parseFloat(
                                    window.getComputedStyle(o, null).height
                                  )
                                )
                              : o.offsetHeight)),
                      r !== i)
                    ) {
                      r = i;
                      var n = p("autosize:resized");
                      try {
                        o.dispatchEvent(n);
                      } catch (e) {}
                    }
                  }
                })(e);
              }),
            e
          );
        }).destroy = function(e) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], o), e;
        }),
        (s.update = function(e) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], r), e;
        })),
      (t.default = s),
      (e.exports = t.default);
  }),
  (function(e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(jQuery);
  })(function(a) {
    var e, t, i, n;
    function o(e, t) {
      var i,
        n,
        o,
        r = e.nodeName.toLowerCase();
      return "area" === r
        ? ((n = (i = e.parentNode).name),
          !(!e.href || !n || "map" !== i.nodeName.toLowerCase()) &&
            (!!(o = a("img[usemap='#" + n + "']")[0]) && s(o)))
        : (/^(input|select|textarea|button|object)$/.test(r)
            ? !e.disabled
            : ("a" === r && e.href) || t) && s(e);
    }
    function s(e) {
      return (
        a.expr.filters.visible(e) &&
        !a(e)
          .parents()
          .addBack()
          .filter(function() {
            return "hidden" === a.css(this, "visibility");
          }).length
      );
    }
    (a.ui = a.ui || {}),
      a.extend(a.ui, {
        version: "1.11.4",
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38
        }
      }),
      a.fn.extend({
        scrollParent: function(e) {
          var t = this.css("position"),
            i = "absolute" === t,
            n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents()
              .filter(function() {
                var e = a(this);
                return (
                  (!i || "static" !== e.css("position")) &&
                  n.test(
                    e.css("overflow") +
                      e.css("overflow-y") +
                      e.css("overflow-x")
                  )
                );
              })
              .eq(0);
          return "fixed" !== t && o.length
            ? o
            : a(this[0].ownerDocument || document);
        },
        uniqueId: ((e = 0),
        function() {
          return this.each(function() {
            this.id || (this.id = "ui-id-" + ++e);
          });
        }),
        removeUniqueId: function() {
          return this.each(function() {
            /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id");
          });
        }
      }),
      a.extend(a.expr[":"], {
        data: a.expr.createPseudo
          ? a.expr.createPseudo(function(t) {
              return function(e) {
                return !!a.data(e, t);
              };
            })
          : function(e, t, i) {
              return !!a.data(e, i[3]);
            },
        focusable: function(e) {
          return o(e, !isNaN(a.attr(e, "tabindex")));
        },
        tabbable: function(e) {
          var t = a.attr(e, "tabindex"),
            i = isNaN(t);
          return (i || 0 <= t) && o(e, !i);
        }
      }),
      a("<a>").outerWidth(1).jquery ||
        a.each(["Width", "Height"], function(e, i) {
          var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            n = i.toLowerCase(),
            r = {
              innerWidth: a.fn.innerWidth,
              innerHeight: a.fn.innerHeight,
              outerWidth: a.fn.outerWidth,
              outerHeight: a.fn.outerHeight
            };
          function s(e, t, i, n) {
            return (
              a.each(o, function() {
                (t -= parseFloat(a.css(e, "padding" + this)) || 0),
                  i &&
                    (t -= parseFloat(a.css(e, "border" + this + "Width")) || 0),
                  n && (t -= parseFloat(a.css(e, "margin" + this)) || 0);
              }),
              t
            );
          }
          (a.fn["inner" + i] = function(e) {
            return void 0 === e
              ? r["inner" + i].call(this)
              : this.each(function() {
                  a(this).css(n, s(this, e) + "px");
                });
          }),
            (a.fn["outer" + i] = function(e, t) {
              return "number" != typeof e
                ? r["outer" + i].call(this, e)
                : this.each(function() {
                    a(this).css(n, s(this, e, !0, t) + "px");
                  });
            });
        }),
      a.fn.addBack ||
        (a.fn.addBack = function(e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }),
      a("<a>")
        .data("a-b", "a")
        .removeData("a-b")
        .data("a-b") &&
        (a.fn.removeData = ((t = a.fn.removeData),
        function(e) {
          return arguments.length ? t.call(this, a.camelCase(e)) : t.call(this);
        })),
      (a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      a.fn.extend({
        focus: ((n = a.fn.focus),
        function(t, i) {
          return "number" == typeof t
            ? this.each(function() {
                var e = this;
                setTimeout(function() {
                  a(e).focus(), i && i.call(e);
                }, t);
              })
            : n.apply(this, arguments);
        }),
        disableSelection: ((i =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown"),
        function() {
          return this.bind(i + ".ui-disableSelection", function(e) {
            e.preventDefault();
          });
        }),
        enableSelection: function() {
          return this.unbind(".ui-disableSelection");
        },
        zIndex: function(e) {
          if (void 0 !== e) return this.css("zIndex", e);
          if (this.length)
            for (var t, i, n = a(this[0]); n.length && n[0] !== document; ) {
              if (
                ("absolute" === (t = n.css("position")) ||
                  "relative" === t ||
                  "fixed" === t) &&
                ((i = parseInt(n.css("zIndex"), 10)), !isNaN(i) && 0 !== i)
              )
                return i;
              n = n.parent();
            }
          return 0;
        }
      }),
      (a.ui.plugin = {
        add: function(e, t, i) {
          var n,
            o = a.ui[e].prototype;
          for (n in i)
            (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([t, i[n]]);
        },
        call: function(e, t, i, n) {
          var o,
            r = e.plugins[t];
          if (
            r &&
            (n ||
              (e.element[0].parentNode &&
                11 !== e.element[0].parentNode.nodeType))
          )
            for (o = 0; o < r.length; o++)
              e.options[r[o][0]] && r[o][1].apply(e.element, i);
        }
      });
  }),
  (function(e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(jQuery);
  })(function(u) {
    var o,
      i = 0,
      a = Array.prototype.slice;
    return (
      (u.cleanData = ((o = u.cleanData),
      function(e) {
        var t, i, n;
        for (n = 0; null != (i = e[n]); n++)
          try {
            (t = u._data(i, "events")) &&
              t.remove &&
              u(i).triggerHandler("remove");
          } catch (e) {}
        o(e);
      })),
      (u.widget = function(e, i, t) {
        var n,
          o,
          r,
          s,
          a = {},
          l = e.split(".")[0];
        return (
          (e = e.split(".")[1]),
          (n = l + "-" + e),
          t || ((t = i), (i = u.Widget)),
          (u.expr[":"][n.toLowerCase()] = function(e) {
            return !!u.data(e, n);
          }),
          (u[l] = u[l] || {}),
          (o = u[l][e]),
          (r = u[l][e] = function(e, t) {
            if (!this._createWidget) return new r(e, t);
            arguments.length && this._createWidget(e, t);
          }),
          u.extend(r, o, {
            version: t.version,
            _proto: u.extend({}, t),
            _childConstructors: []
          }),
          ((s = new i()).options = u.widget.extend({}, s.options)),
          u.each(t, function(t, n) {
            var o, r;
            u.isFunction(n)
              ? (a[t] = ((o = function() {
                  return i.prototype[t].apply(this, arguments);
                }),
                (r = function(e) {
                  return i.prototype[t].apply(this, e);
                }),
                function() {
                  var e,
                    t = this._super,
                    i = this._superApply;
                  return (
                    (this._super = o),
                    (this._superApply = r),
                    (e = n.apply(this, arguments)),
                    (this._super = t),
                    (this._superApply = i),
                    e
                  );
                }))
              : (a[t] = n);
          }),
          (r.prototype = u.widget.extend(
            s,
            { widgetEventPrefix: (o && s.widgetEventPrefix) || e },
            a,
            { constructor: r, namespace: l, widgetName: e, widgetFullName: n }
          )),
          o
            ? (u.each(o._childConstructors, function(e, t) {
                var i = t.prototype;
                u.widget(i.namespace + "." + i.widgetName, r, t._proto);
              }),
              delete o._childConstructors)
            : i._childConstructors.push(r),
          u.widget.bridge(e, r),
          r
        );
      }),
      (u.widget.extend = function(e) {
        for (
          var t, i, n = a.call(arguments, 1), o = 0, r = n.length;
          o < r;
          o++
        )
          for (t in n[o])
            (i = n[o][t]),
              n[o].hasOwnProperty(t) &&
                void 0 !== i &&
                (u.isPlainObject(i)
                  ? (e[t] = u.isPlainObject(e[t])
                      ? u.widget.extend({}, e[t], i)
                      : u.widget.extend({}, i))
                  : (e[t] = i));
        return e;
      }),
      (u.widget.bridge = function(r, t) {
        var s = t.prototype.widgetFullName || r;
        u.fn[r] = function(i) {
          var e = "string" == typeof i,
            n = a.call(arguments, 1),
            o = this;
          return (
            e
              ? this.each(function() {
                  var e,
                    t = u.data(this, s);
                  return "instance" === i
                    ? ((o = t), !1)
                    : t
                    ? u.isFunction(t[i]) && "_" !== i.charAt(0)
                      ? (e = t[i].apply(t, n)) !== t && void 0 !== e
                        ? ((o = e && e.jquery ? o.pushStack(e.get()) : e), !1)
                        : void 0
                      : u.error(
                          "no such method '" +
                            i +
                            "' for " +
                            r +
                            " widget instance"
                        )
                    : u.error(
                        "cannot call methods on " +
                          r +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'"
                      );
                })
              : (n.length && (i = u.widget.extend.apply(null, [i].concat(n))),
                this.each(function() {
                  var e = u.data(this, s);
                  e
                    ? (e.option(i || {}), e._init && e._init())
                    : u.data(this, s, new t(i, this));
                })),
            o
          );
        };
      }),
      (u.Widget = function() {}),
      (u.Widget._childConstructors = []),
      (u.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function(e, t) {
          (t = u(t || this.defaultElement || this)[0]),
            (this.element = u(t)),
            (this.uuid = i++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = u()),
            (this.hoverable = u()),
            (this.focusable = u()),
            t !== this &&
              (u.data(t, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function(e) {
                  e.target === t && this.destroy();
                }
              }),
              (this.document = u(t.style ? t.ownerDocument : t.document || t)),
              (this.window = u(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = u.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: u.noop,
        _getCreateEventData: u.noop,
        _create: u.noop,
        _init: u.noop,
        destroy: function() {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetFullName)
              .removeData(u.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr("aria-disabled")
              .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: u.noop,
        widget: function() {
          return this.element;
        },
        option: function(e, t) {
          var i,
            n,
            o,
            r = e;
          if (0 === arguments.length) return u.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((r = {}), (e = (i = e.split(".")).shift()), i.length)) {
              for (
                n = r[e] = u.widget.extend({}, this.options[e]), o = 0;
                o < i.length - 1;
                o++
              )
                (n[i[o]] = n[i[o]] || {}), (n = n[i[o]]);
              if (((e = i.pop()), 1 === arguments.length))
                return void 0 === n[e] ? null : n[e];
              n[e] = t;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e];
              r[e] = t;
            }
          return this._setOptions(r), this;
        },
        _setOptions: function(e) {
          var t;
          for (t in e) this._setOption(t, e[t]);
          return this;
        },
        _setOption: function(e, t) {
          return (
            (this.options[e] = t),
            "disabled" === e &&
              (this.widget().toggleClass(
                this.widgetFullName + "-disabled",
                !!t
              ),
              t &&
                (this.hoverable.removeClass("ui-state-hover"),
                this.focusable.removeClass("ui-state-focus"))),
            this
          );
        },
        enable: function() {
          return this._setOptions({ disabled: !1 });
        },
        disable: function() {
          return this._setOptions({ disabled: !0 });
        },
        _on: function(s, a, e) {
          var l,
            d = this;
          "boolean" != typeof s && ((e = a), (a = s), (s = !1)),
            e
              ? ((a = l = u(a)), (this.bindings = this.bindings.add(a)))
              : ((e = a), (a = this.element), (l = this.widget())),
            u.each(e, function(e, t) {
              function i() {
                if (
                  s ||
                  (!0 !== d.options.disabled &&
                    !u(this).hasClass("ui-state-disabled"))
                )
                  return ("string" == typeof t ? d[t] : t).apply(d, arguments);
              }
              "string" != typeof t &&
                (i.guid = t.guid = t.guid || i.guid || u.guid++);
              var n = e.match(/^([\w:-]*)\s*(.*)$/),
                o = n[1] + d.eventNamespace,
                r = n[2];
              r ? l.delegate(r, o, i) : a.bind(o, i);
            });
        },
        _off: function(e, t) {
          (t =
            (t || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.unbind(t).undelegate(t),
            (this.bindings = u(this.bindings.not(e).get())),
            (this.focusable = u(this.focusable.not(e).get())),
            (this.hoverable = u(this.hoverable.not(e).get()));
        },
        _delay: function(e, t) {
          var i = this;
          return setTimeout(function() {
            return ("string" == typeof e ? i[e] : e).apply(i, arguments);
          }, t || 0);
        },
        _hoverable: function(e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function(e) {
                u(e.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function(e) {
                u(e.currentTarget).removeClass("ui-state-hover");
              }
            });
        },
        _focusable: function(e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function(e) {
                u(e.currentTarget).addClass("ui-state-focus");
              },
              focusout: function(e) {
                u(e.currentTarget).removeClass("ui-state-focus");
              }
            });
        },
        _trigger: function(e, t, i) {
          var n,
            o,
            r = this.options[e];
          if (
            ((i = i || {}),
            ((t = u.Event(t)).type = (e === this.widgetEventPrefix
              ? e
              : this.widgetEventPrefix + e
            ).toLowerCase()),
            (t.target = this.element[0]),
            (o = t.originalEvent))
          )
            for (n in o) n in t || (t[n] = o[n]);
          return (
            this.element.trigger(t, i),
            !(
              (u.isFunction(r) &&
                !1 === r.apply(this.element[0], [t].concat(i))) ||
              t.isDefaultPrevented()
            )
          );
        }
      }),
      u.each({ show: "fadeIn", hide: "fadeOut" }, function(r, s) {
        u.Widget.prototype["_" + r] = function(t, e, i) {
          "string" == typeof e && (e = { effect: e });
          var n,
            o = e ? (!0 === e || "number" == typeof e ? s : e.effect || s) : r;
          "number" == typeof (e = e || {}) && (e = { duration: e }),
            (n = !u.isEmptyObject(e)),
            (e.complete = i),
            e.delay && t.delay(e.delay),
            n && u.effects && u.effects.effect[o]
              ? t[r](e)
              : o !== r && t[o]
              ? t[o](e.duration, e.easing, i)
              : t.queue(function(e) {
                  u(this)[r](), i && i.call(t[0]), e();
                });
        };
      }),
      u.widget
    );
  }),
  (function(e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(jQuery);
  })(function(A) {
    return (
      (function() {
        A.ui = A.ui || {};
        var o,
          x,
          _ = Math.max,
          C = Math.abs,
          S = Math.round,
          n = /left|center|right/,
          r = /top|center|bottom/,
          s = /[\+\-]\d+(\.[\d]+)?%?/,
          a = /^\w+/,
          l = /%$/,
          d = A.fn.position;
        function T(e, t, i) {
          return [
            parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1),
            parseFloat(e[1]) * (l.test(e[1]) ? i / 100 : 1)
          ];
        }
        function E(e, t) {
          return parseInt(A.css(e, t), 10) || 0;
        }
        (A.position = {
          scrollbarWidth: function() {
            if (void 0 !== o) return o;
            var e,
              t,
              i = A(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
              ),
              n = i.children()[0];
            return (
              A("body").append(i),
              (e = n.offsetWidth),
              i.css("overflow", "scroll"),
              e === (t = n.offsetWidth) && (t = i[0].clientWidth),
              i.remove(),
              (o = e - t)
            );
          },
          getScrollInfo: function(e) {
            var t =
                e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
              i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
              n =
                "scroll" === t ||
                ("auto" === t && e.width < e.element[0].scrollWidth);
            return {
              width:
                "scroll" === i ||
                ("auto" === i && e.height < e.element[0].scrollHeight)
                  ? A.position.scrollbarWidth()
                  : 0,
              height: n ? A.position.scrollbarWidth() : 0
            };
          },
          getWithinInfo: function(e) {
            var t = A(e || window),
              i = A.isWindow(t[0]),
              n = !!t[0] && 9 === t[0].nodeType;
            return {
              element: t,
              isWindow: i,
              isDocument: n,
              offset: t.offset() || { left: 0, top: 0 },
              scrollLeft: t.scrollLeft(),
              scrollTop: t.scrollTop(),
              width: i || n ? t.width() : t.outerWidth(),
              height: i || n ? t.height() : t.outerHeight()
            };
          }
        }),
          (A.fn.position = function(c) {
            if (!c || !c.of) return d.apply(this, arguments);
            c = A.extend({}, c);
            var p,
              h,
              f,
              m,
              g,
              e,
              t,
              i,
              v = A(c.of),
              y = A.position.getWithinInfo(c.within),
              b = A.position.getScrollInfo(y),
              w = (c.collision || "flip").split(" "),
              k = {};
            return (
              (e =
                9 === (i = (t = v)[0]).nodeType
                  ? {
                      width: t.width(),
                      height: t.height(),
                      offset: { top: 0, left: 0 }
                    }
                  : A.isWindow(i)
                  ? {
                      width: t.width(),
                      height: t.height(),
                      offset: { top: t.scrollTop(), left: t.scrollLeft() }
                    }
                  : i.preventDefault
                  ? {
                      width: 0,
                      height: 0,
                      offset: { top: i.pageY, left: i.pageX }
                    }
                  : {
                      width: t.outerWidth(),
                      height: t.outerHeight(),
                      offset: t.offset()
                    }),
              v[0].preventDefault && (c.at = "left top"),
              (h = e.width),
              (f = e.height),
              (m = e.offset),
              (g = A.extend({}, m)),
              A.each(["my", "at"], function() {
                var e,
                  t,
                  i = (c[this] || "").split(" ");
                1 === i.length &&
                  (i = n.test(i[0])
                    ? i.concat(["center"])
                    : r.test(i[0])
                    ? ["center"].concat(i)
                    : ["center", "center"]),
                  (i[0] = n.test(i[0]) ? i[0] : "center"),
                  (i[1] = r.test(i[1]) ? i[1] : "center"),
                  (e = s.exec(i[0])),
                  (t = s.exec(i[1])),
                  (k[this] = [e ? e[0] : 0, t ? t[0] : 0]),
                  (c[this] = [a.exec(i[0])[0], a.exec(i[1])[0]]);
              }),
              1 === w.length && (w[1] = w[0]),
              "right" === c.at[0]
                ? (g.left += h)
                : "center" === c.at[0] && (g.left += h / 2),
              "bottom" === c.at[1]
                ? (g.top += f)
                : "center" === c.at[1] && (g.top += f / 2),
              (p = T(k.at, h, f)),
              (g.left += p[0]),
              (g.top += p[1]),
              this.each(function() {
                var i,
                  e,
                  s = A(this),
                  a = s.outerWidth(),
                  l = s.outerHeight(),
                  t = E(this, "marginLeft"),
                  n = E(this, "marginTop"),
                  o = a + t + E(this, "marginRight") + b.width,
                  r = l + n + E(this, "marginBottom") + b.height,
                  d = A.extend({}, g),
                  u = T(k.my, s.outerWidth(), s.outerHeight());
                "right" === c.my[0]
                  ? (d.left -= a)
                  : "center" === c.my[0] && (d.left -= a / 2),
                  "bottom" === c.my[1]
                    ? (d.top -= l)
                    : "center" === c.my[1] && (d.top -= l / 2),
                  (d.left += u[0]),
                  (d.top += u[1]),
                  x || ((d.left = S(d.left)), (d.top = S(d.top))),
                  (i = { marginLeft: t, marginTop: n }),
                  A.each(["left", "top"], function(e, t) {
                    A.ui.position[w[e]] &&
                      A.ui.position[w[e]][t](d, {
                        targetWidth: h,
                        targetHeight: f,
                        elemWidth: a,
                        elemHeight: l,
                        collisionPosition: i,
                        collisionWidth: o,
                        collisionHeight: r,
                        offset: [p[0] + u[0], p[1] + u[1]],
                        my: c.my,
                        at: c.at,
                        within: y,
                        elem: s
                      });
                  }),
                  c.using &&
                    (e = function(e) {
                      var t = m.left - d.left,
                        i = t + h - a,
                        n = m.top - d.top,
                        o = n + f - l,
                        r = {
                          target: {
                            element: v,
                            left: m.left,
                            top: m.top,
                            width: h,
                            height: f
                          },
                          element: {
                            element: s,
                            left: d.left,
                            top: d.top,
                            width: a,
                            height: l
                          },
                          horizontal:
                            i < 0 ? "left" : 0 < t ? "right" : "center",
                          vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                        };
                      h < a && C(t + i) < h && (r.horizontal = "center"),
                        f < l && C(n + o) < f && (r.vertical = "middle"),
                        _(C(t), C(i)) > _(C(n), C(o))
                          ? (r.important = "horizontal")
                          : (r.important = "vertical"),
                        c.using.call(this, e, r);
                    }),
                  s.offset(A.extend(d, { using: e }));
              })
            );
          }),
          (A.ui.position = {
            fit: {
              left: function(e, t) {
                var i,
                  n = t.within,
                  o = n.isWindow ? n.scrollLeft : n.offset.left,
                  r = n.width,
                  s = e.left - t.collisionPosition.marginLeft,
                  a = o - s,
                  l = s + t.collisionWidth - r - o;
                t.collisionWidth > r
                  ? 0 < a && l <= 0
                    ? ((i = e.left + a + t.collisionWidth - r - o),
                      (e.left += a - i))
                    : (e.left =
                        0 < l && a <= 0
                          ? o
                          : l < a
                          ? o + r - t.collisionWidth
                          : o)
                  : 0 < a
                  ? (e.left += a)
                  : 0 < l
                  ? (e.left -= l)
                  : (e.left = _(e.left - s, e.left));
              },
              top: function(e, t) {
                var i,
                  n = t.within,
                  o = n.isWindow ? n.scrollTop : n.offset.top,
                  r = t.within.height,
                  s = e.top - t.collisionPosition.marginTop,
                  a = o - s,
                  l = s + t.collisionHeight - r - o;
                t.collisionHeight > r
                  ? 0 < a && l <= 0
                    ? ((i = e.top + a + t.collisionHeight - r - o),
                      (e.top += a - i))
                    : (e.top =
                        0 < l && a <= 0
                          ? o
                          : l < a
                          ? o + r - t.collisionHeight
                          : o)
                  : 0 < a
                  ? (e.top += a)
                  : 0 < l
                  ? (e.top -= l)
                  : (e.top = _(e.top - s, e.top));
              }
            },
            flip: {
              left: function(e, t) {
                var i,
                  n,
                  o = t.within,
                  r = o.offset.left + o.scrollLeft,
                  s = o.width,
                  a = o.isWindow ? o.scrollLeft : o.offset.left,
                  l = e.left - t.collisionPosition.marginLeft,
                  d = l - a,
                  u = l + t.collisionWidth - s - a,
                  c =
                    "left" === t.my[0]
                      ? -t.elemWidth
                      : "right" === t.my[0]
                      ? t.elemWidth
                      : 0,
                  p =
                    "left" === t.at[0]
                      ? t.targetWidth
                      : "right" === t.at[0]
                      ? -t.targetWidth
                      : 0,
                  h = -2 * t.offset[0];
                d < 0
                  ? ((i = e.left + c + p + h + t.collisionWidth - s - r) < 0 ||
                      i < C(d)) &&
                    (e.left += c + p + h)
                  : 0 < u &&
                    (0 <
                      (n =
                        e.left -
                        t.collisionPosition.marginLeft +
                        c +
                        p +
                        h -
                        a) ||
                      C(n) < u) &&
                    (e.left += c + p + h);
              },
              top: function(e, t) {
                var i,
                  n,
                  o = t.within,
                  r = o.offset.top + o.scrollTop,
                  s = o.height,
                  a = o.isWindow ? o.scrollTop : o.offset.top,
                  l = e.top - t.collisionPosition.marginTop,
                  d = l - a,
                  u = l + t.collisionHeight - s - a,
                  c =
                    "top" === t.my[1]
                      ? -t.elemHeight
                      : "bottom" === t.my[1]
                      ? t.elemHeight
                      : 0,
                  p =
                    "top" === t.at[1]
                      ? t.targetHeight
                      : "bottom" === t.at[1]
                      ? -t.targetHeight
                      : 0,
                  h = -2 * t.offset[1];
                d < 0
                  ? ((n = e.top + c + p + h + t.collisionHeight - s - r) < 0 ||
                      n < C(d)) &&
                    (e.top += c + p + h)
                  : 0 < u &&
                    (0 <
                      (i =
                        e.top -
                        t.collisionPosition.marginTop +
                        c +
                        p +
                        h -
                        a) ||
                      C(i) < u) &&
                    (e.top += c + p + h);
              }
            },
            flipfit: {
              left: function() {
                A.ui.position.flip.left.apply(this, arguments),
                  A.ui.position.fit.left.apply(this, arguments);
              },
              top: function() {
                A.ui.position.flip.top.apply(this, arguments),
                  A.ui.position.fit.top.apply(this, arguments);
              }
            }
          }),
          (function() {
            var e,
              t,
              i,
              n,
              o,
              r = document.getElementsByTagName("body")[0],
              s = document.createElement("div");
            for (o in ((e = document.createElement(r ? "div" : "body")),
            (i = {
              visibility: "hidden",
              width: 0,
              height: 0,
              border: 0,
              margin: 0,
              background: "none"
            }),
            r &&
              A.extend(i, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
              }),
            i))
              e.style[o] = i[o];
            e.appendChild(s),
              (t = r || document.documentElement).insertBefore(e, t.firstChild),
              (s.style.cssText = "position: absolute; left: 10.7432222px;"),
              (n = A(s).offset().left),
              (x = 10 < n && n < 11),
              (e.innerHTML = ""),
              t.removeChild(e);
          })();
      })(),
      A.ui.position
    );
  }),
  (function(e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./widget"], e)
      : e(jQuery);
  })(function(o) {
    var r = !1;
    return (
      o(document).mouseup(function() {
        r = !1;
      }),
      o.widget("ui.mouse", {
        version: "1.11.4",
        options: {
          cancel: "input,textarea,button,select,option",
          distance: 1,
          delay: 0
        },
        _mouseInit: function() {
          var t = this;
          this.element
            .bind("mousedown." + this.widgetName, function(e) {
              return t._mouseDown(e);
            })
            .bind("click." + this.widgetName, function(e) {
              if (!0 === o.data(e.target, t.widgetName + ".preventClickEvent"))
                return (
                  o.removeData(e.target, t.widgetName + ".preventClickEvent"),
                  e.stopImmediatePropagation(),
                  !1
                );
            }),
            (this.started = !1);
        },
        _mouseDestroy: function() {
          this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate &&
              this.document
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(e) {
          if (!r) {
            (this._mouseMoved = !1),
              this._mouseStarted && this._mouseUp(e),
              (this._mouseDownEvent = e);
            var t = this,
              i = 1 === e.which,
              n =
                !(
                  "string" != typeof this.options.cancel || !e.target.nodeName
                ) && o(e.target).closest(this.options.cancel).length;
            return (
              !(i && !n && this._mouseCapture(e)) ||
              ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function() {
                  t.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = !1 !== this._mouseStart(e)),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    o.data(e.target, this.widgetName + ".preventClickEvent") &&
                    o.removeData(
                      e.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function(e) {
                    return t._mouseMove(e);
                  }),
                  (this._mouseUpDelegate = function(e) {
                    return t._mouseUp(e);
                  }),
                  this.document
                    .bind(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (r = !0)))
            );
          }
        },
        _mouseMove: function(e) {
          if (this._mouseMoved) {
            if (
              o.ui.ie &&
              (!document.documentMode || document.documentMode < 9) &&
              !e.button
            )
              return this._mouseUp(e);
            if (!e.which) return this._mouseUp(e);
          }
          return (
            (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted
              ? (this._mouseDrag(e), e.preventDefault())
              : (this._mouseDistanceMet(e) &&
                  this._mouseDelayMet(e) &&
                  ((this._mouseStarted =
                    !1 !== this._mouseStart(this._mouseDownEvent, e)),
                  this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                !this._mouseStarted)
          );
        },
        _mouseUp: function(e) {
          return (
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              e.target === this._mouseDownEvent.target &&
                o.data(e.target, this.widgetName + ".preventClickEvent", !0),
              this._mouseStop(e)),
            (r = !1)
          );
        },
        _mouseDistanceMet: function(e) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - e.pageX),
              Math.abs(this._mouseDownEvent.pageY - e.pageY)
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function() {
          return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
          return !0;
        }
      })
    );
  }),
  (function(e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./core", "./mouse", "./widget"], e)
      : e(jQuery);
  })(function(u) {
    return u.widget("ui.slider", u.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null
      },
      numPages: 5,
      _create: function() {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this.element.addClass(
            "ui-slider ui-slider-" +
              this.orientation +
              " ui-widget ui-widget-content ui-corner-all"
          ),
          this._refresh(),
          this._setOption("disabled", this.options.disabled),
          (this._animateOff = !1);
      },
      _refresh: function() {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function() {
        var e,
          t,
          i = this.options,
          n = this.element
            .find(".ui-slider-handle")
            .addClass("ui-state-default ui-corner-all"),
          o = [];
        for (
          t = (i.values && i.values.length) || 1,
            n.length > t && (n.slice(t).remove(), (n = n.slice(0, t))),
            e = n.length;
          e < t;
          e++
        )
          o.push(
            "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>"
          );
        (this.handles = n.add(u(o.join("")).appendTo(this.element))),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function(e) {
            u(this).data("ui-slider-handle-index", e);
          });
      },
      _createRange: function() {
        var e = this.options,
          t = "";
        e.range
          ? (!0 === e.range &&
              (e.values
                ? e.values.length && 2 !== e.values.length
                  ? (e.values = [e.values[0], e.values[0]])
                  : u.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass("ui-slider-range-min ui-slider-range-max")
                  .css({ left: "", bottom: "" })
              : ((this.range = u("<div></div>").appendTo(this.element)),
                (t = "ui-slider-range ui-widget-header ui-corner-all")),
            this.range.addClass(
              t +
                ("min" === e.range || "max" === e.range
                  ? " ui-slider-range-" + e.range
                  : "")
            ))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function() {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function() {
        this.handles.remove(),
          this.range && this.range.remove(),
          this.element.removeClass(
            "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
          ),
          this._mouseDestroy();
      },
      _mouseCapture: function(e) {
        var t,
          i,
          n,
          o,
          r,
          s,
          a,
          l = this,
          d = this.options;
        return (
          !d.disabled &&
          ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight()
          }),
          (this.elementOffset = this.element.offset()),
          (t = { x: e.pageX, y: e.pageY }),
          (i = this._normValueFromMouse(t)),
          (n = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function(e) {
            var t = Math.abs(i - l.values(e));
            (t < n ||
              (n === t &&
                (e === l._lastChangedValue || l.values(e) === d.min))) &&
              ((n = t), (o = u(this)), (r = e));
          }),
          !1 !== this._start(e, r) &&
            ((this._mouseSliding = !0),
            (this._handleIndex = r),
            o.addClass("ui-state-active").focus(),
            (s = o.offset()),
            (a = !u(e.target)
              .parents()
              .addBack()
              .is(".ui-slider-handle")),
            (this._clickOffset = a
              ? { left: 0, top: 0 }
              : {
                  left: e.pageX - s.left - o.width() / 2,
                  top:
                    e.pageY -
                    s.top -
                    o.height() / 2 -
                    (parseInt(o.css("borderTopWidth"), 10) || 0) -
                    (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                    (parseInt(o.css("marginTop"), 10) || 0)
                }),
            this.handles.hasClass("ui-state-hover") || this._slide(e, r, i),
            (this._animateOff = !0)))
        );
      },
      _mouseStart: function() {
        return !0;
      },
      _mouseDrag: function(e) {
        var t = { x: e.pageX, y: e.pageY },
          i = this._normValueFromMouse(t);
        return this._slide(e, this._handleIndex, i), !1;
      },
      _mouseStop: function(e) {
        return (
          this.handles.removeClass("ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(e, this._handleIndex),
          this._change(e, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1)
        );
      },
      _detectOrientation: function() {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function(e) {
        var t, i, n, o, r;
        return (
          "horizontal" === this.orientation
            ? ((t = this.elementSize.width),
              (i =
                e.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((t = this.elementSize.height),
              (i =
                e.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          1 < (n = i / t) && (n = 1),
          n < 0 && (n = 0),
          "vertical" === this.orientation && (n = 1 - n),
          (o = this._valueMax() - this._valueMin()),
          (r = this._valueMin() + n * o),
          this._trimAlignValue(r)
        );
      },
      _start: function(e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        return (
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("start", e, i)
        );
      },
      _slide: function(e, t, i) {
        var n, o, r;
        this.options.values && this.options.values.length
          ? ((n = this.values(t ? 0 : 1)),
            2 === this.options.values.length &&
              !0 === this.options.range &&
              ((0 === t && n < i) || (1 === t && i < n)) &&
              (i = n),
            i !== this.values(t) &&
              (((o = this.values())[t] = i),
              (r = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: o
              })),
              (n = this.values(t ? 0 : 1)),
              !1 !== r && this.values(t, i)))
          : i !== this.value() &&
            !1 !==
              (r = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
              })) &&
            this.value(i);
      },
      _stop: function(e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("stop", e, i);
      },
      _change: function(e, t) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = { handle: this.handles[t], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
            (this._lastChangedValue = t),
            this._trigger("change", e, i);
        }
      },
      value: function(e) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(e)),
            this._refreshValue(),
            void this._change(null, 0))
          : this._value();
      },
      values: function(e, t) {
        var i, n, o;
        if (1 < arguments.length)
          return (
            (this.options.values[e] = this._trimAlignValue(t)),
            this._refreshValue(),
            void this._change(null, e)
          );
        if (!arguments.length) return this._values();
        if (!u.isArray(e))
          return this.options.values && this.options.values.length
            ? this._values(e)
            : this.value();
        for (i = this.options.values, n = e, o = 0; o < i.length; o += 1)
          (i[o] = this._trimAlignValue(n[o])), this._change(null, o);
        this._refreshValue();
      },
      _setOption: function(e, t) {
        var i,
          n = 0;
        switch (
          ("range" === e &&
            !0 === this.options.range &&
            ("min" === t
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === t &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          u.isArray(this.options.values) && (n = this.options.values.length),
          "disabled" === e &&
            this.element.toggleClass("ui-state-disabled", !!t),
          this._super(e, t),
          e)
        ) {
          case "orientation":
            this._detectOrientation(),
              this.element
                .removeClass("ui-slider-horizontal ui-slider-vertical")
                .addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.handles.css("horizontal" === t ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), i = 0;
              i < n;
              i += 1
            )
              this._change(null, i);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _value: function() {
        var e = this.options.value;
        return (e = this._trimAlignValue(e));
      },
      _values: function(e) {
        var t, i, n;
        if (arguments.length)
          return (t = this.options.values[e]), (t = this._trimAlignValue(t));
        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), n = 0; n < i.length; n += 1)
            i[n] = this._trimAlignValue(i[n]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function(e) {
        if (e <= this._valueMin()) return this._valueMin();
        if (e >= this._valueMax()) return this._valueMax();
        var t = 0 < this.options.step ? this.options.step : 1,
          i = (e - this._valueMin()) % t,
          n = e - i;
        return (
          2 * Math.abs(i) >= t && (n += 0 < i ? t : -t),
          parseFloat(n.toFixed(5))
        );
      },
      _calculateNewMax: function() {
        var e = this.options.max,
          t = this._valueMin(),
          i = this.options.step;
        (e = Math.floor(+(e - t).toFixed(this._precision()) / i) * i + t),
          (this.max = parseFloat(e.toFixed(this._precision())));
      },
      _precision: function() {
        var e = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (e = Math.max(e, this._precisionOf(this.options.min))),
          e
        );
      },
      _precisionOf: function(e) {
        var t = e.toString(),
          i = t.indexOf(".");
        return -1 === i ? 0 : t.length - i - 1;
      },
      _valueMin: function() {
        return this.options.min;
      },
      _valueMax: function() {
        return this.max;
      },
      _refreshValue: function() {
        var t,
          i,
          e,
          n,
          o,
          r = this.options.range,
          s = this.options,
          a = this,
          l = !this._animateOff && s.animate,
          d = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function(e) {
              (i =
                ((a.values(e) - a._valueMin()) /
                  (a._valueMax() - a._valueMin())) *
                100),
                (d["horizontal" === a.orientation ? "left" : "bottom"] =
                  i + "%"),
                u(this)
                  .stop(1, 1)
                  [l ? "animate" : "css"](d, s.animate),
                !0 === a.options.range &&
                  ("horizontal" === a.orientation
                    ? (0 === e &&
                        a.range
                          .stop(1, 1)
                          [l ? "animate" : "css"]({ left: i + "%" }, s.animate),
                      1 === e &&
                        a.range[l ? "animate" : "css"](
                          { width: i - t + "%" },
                          { queue: !1, duration: s.animate }
                        ))
                    : (0 === e &&
                        a.range
                          .stop(1, 1)
                          [l ? "animate" : "css"](
                            { bottom: i + "%" },
                            s.animate
                          ),
                      1 === e &&
                        a.range[l ? "animate" : "css"](
                          { height: i - t + "%" },
                          { queue: !1, duration: s.animate }
                        ))),
                (t = i);
            })
          : ((e = this.value()),
            (n = this._valueMin()),
            (o = this._valueMax()),
            (i = o !== n ? ((e - n) / (o - n)) * 100 : 0),
            (d["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[l ? "animate" : "css"](d, s.animate),
            "min" === r &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ width: i + "%" }, s.animate),
            "max" === r &&
              "horizontal" === this.orientation &&
              this.range[l ? "animate" : "css"](
                { width: 100 - i + "%" },
                { queue: !1, duration: s.animate }
              ),
            "min" === r &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ height: i + "%" }, s.animate),
            "max" === r &&
              "vertical" === this.orientation &&
              this.range[l ? "animate" : "css"](
                { height: 100 - i + "%" },
                { queue: !1, duration: s.animate }
              ));
      },
      _handleEvents: {
        keydown: function(e) {
          var t,
            i,
            n,
            o = u(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
            case u.ui.keyCode.HOME:
            case u.ui.keyCode.END:
            case u.ui.keyCode.PAGE_UP:
            case u.ui.keyCode.PAGE_DOWN:
            case u.ui.keyCode.UP:
            case u.ui.keyCode.RIGHT:
            case u.ui.keyCode.DOWN:
            case u.ui.keyCode.LEFT:
              if (
                (e.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  u(e.target).addClass("ui-state-active"),
                  !1 === this._start(e, o)))
              )
                return;
          }
          switch (
            ((n = this.options.step),
            (t = i =
              this.options.values && this.options.values.length
                ? this.values(o)
                : this.value()),
            e.keyCode)
          ) {
            case u.ui.keyCode.HOME:
              i = this._valueMin();
              break;
            case u.ui.keyCode.END:
              i = this._valueMax();
              break;
            case u.ui.keyCode.PAGE_UP:
              i = this._trimAlignValue(
                t + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case u.ui.keyCode.PAGE_DOWN:
              i = this._trimAlignValue(
                t - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case u.ui.keyCode.UP:
            case u.ui.keyCode.RIGHT:
              if (t === this._valueMax()) return;
              i = this._trimAlignValue(t + n);
              break;
            case u.ui.keyCode.DOWN:
            case u.ui.keyCode.LEFT:
              if (t === this._valueMin()) return;
              i = this._trimAlignValue(t - n);
          }
          this._slide(e, o, i);
        },
        keyup: function(e) {
          var t = u(e.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(e, t),
            this._change(e, t),
            u(e.target).removeClass("ui-state-active"));
        }
      }
    });
  }),
  (function(t) {
    function i(e, t) {
      if (!(1 < e.originalEvent.touches.length)) {
        e.preventDefault();
        var i = e.originalEvent.changedTouches[0],
          n = document.createEvent("MouseEvents");
        n.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          e.target.dispatchEvent(n);
      }
    }
    if (((t.support.touch = "ontouchend" in document), t.support.touch)) {
      var n,
        e = t.ui.mouse.prototype,
        o = e._mouseInit,
        r = e._mouseDestroy;
      (e._touchStart = function(e) {
        !n &&
          this._mouseCapture(e.originalEvent.changedTouches[0]) &&
          ((n = !0),
          (this._touchMoved = !1),
          i(e, "mouseover"),
          i(e, "mousemove"),
          i(e, "mousedown"));
      }),
        (e._touchMove = function(e) {
          n && ((this._touchMoved = !0), i(e, "mousemove"));
        }),
        (e._touchEnd = function(e) {
          n &&
            (i(e, "mouseup"),
            i(e, "mouseout"),
            this._touchMoved || i(e, "click"),
            (n = !1));
        }),
        (e._mouseInit = function() {
          var e = this;
          e.element.bind({
            touchstart: t.proxy(e, "_touchStart"),
            touchmove: t.proxy(e, "_touchMove"),
            touchend: t.proxy(e, "_touchEnd")
          }),
            o.call(e);
        }),
        (e._mouseDestroy = function() {
          var e = this;
          e.element.unbind({
            touchstart: t.proxy(e, "_touchStart"),
            touchmove: t.proxy(e, "_touchMove"),
            touchend: t.proxy(e, "_touchEnd")
          }),
            r.call(e);
        });
    }
  })(jQuery);
var _slice = Array.prototype.slice,
  _slicedToArray = function(e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e))
      return (function(e, t) {
        var i = [],
          n = !0,
          o = !1,
          r = void 0;
        try {
          for (
            var s, a = e[Symbol.iterator]();
            !(n = (s = a.next()).done) &&
            (i.push(s.value), !t || i.length !== t);
            n = !0
          );
        } catch (e) {
          (o = !0), (r = e);
        } finally {
          try {
            !n && a.return && a.return();
          } finally {
            if (o) throw r;
          }
        }
        return i;
      })(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  },
  _extends =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var n in i)
          Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
      }
      return e;
    };
!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("jquery")))
    : "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : (e.parsley = t(e.jQuery));
})(this, function(c) {
  "use strict";
  function n(t, i) {
    return (
      t.parsleyAdaptedCallback ||
        (t.parsleyAdaptedCallback = function() {
          var e = Array.prototype.slice.call(arguments, 0);
          e.unshift(this), t.apply(i || E, e);
        }),
      t.parsleyAdaptedCallback
    );
  }
  function r(e) {
    return 0 === e.lastIndexOf(P, 0) ? e.substr(P.length) : e;
  }
  var i,
    e = 1,
    t = {},
    l = {
      attr: function(e, t, i) {
        var n,
          o,
          r,
          s = new RegExp("^" + t, "i");
        if (void 0 === i) i = {};
        else for (n in i) i.hasOwnProperty(n) && delete i[n];
        if (!e) return i;
        for (n = (r = e.attributes).length; n--; )
          (o = r[n]) &&
            o.specified &&
            s.test(o.name) &&
            (i[this.camelize(o.name.slice(t.length))] = this.deserializeValue(
              o.value
            ));
        return i;
      },
      checkAttr: function(e, t, i) {
        return e.hasAttribute(t + i);
      },
      setAttr: function(e, t, i, n) {
        e.setAttribute(this.dasherize(t + i), String(n));
      },
      getType: function(e) {
        return e.getAttribute("type") || "text";
      },
      generateID: function() {
        return "" + e++;
      },
      deserializeValue: function(t) {
        var e;
        try {
          return t
            ? "true" == t ||
                ("false" != t &&
                  ("null" == t
                    ? null
                    : isNaN((e = Number(t)))
                    ? /^[\[\{]/.test(t)
                      ? JSON.parse(t)
                      : t
                    : e))
            : t;
        } catch (e) {
          return t;
        }
      },
      camelize: function(e) {
        return e.replace(/-+(.)?/g, function(e, t) {
          return t ? t.toUpperCase() : "";
        });
      },
      dasherize: function(e) {
        return e
          .replace(/::/g, "/")
          .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
          .replace(/([a-z\d])([A-Z])/g, "$1_$2")
          .replace(/_/g, "-")
          .toLowerCase();
      },
      warn: function() {
        var e;
        window.console &&
          "function" == typeof window.console.warn &&
          (e = window.console).warn.apply(e, arguments);
      },
      warnOnce: function(e) {
        t[e] || ((t[e] = !0), this.warn.apply(this, arguments));
      },
      _resetWarnings: function() {
        t = {};
      },
      trimString: function(e) {
        return e.replace(/^\s+|\s+$/g, "");
      },
      parse: {
        date: function(e) {
          var t = e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
          if (!t) return null;
          var i = t.map(function(e) {
              return parseInt(e, 10);
            }),
            n = _slicedToArray(i, 4),
            o = (n[0], n[1]),
            r = n[2],
            s = n[3],
            a = new Date(o, r - 1, s);
          return a.getFullYear() !== o ||
            a.getMonth() + 1 !== r ||
            a.getDate() !== s
            ? null
            : a;
        },
        string: function(e) {
          return e;
        },
        integer: function(e) {
          return isNaN(e) ? null : parseInt(e, 10);
        },
        number: function(e) {
          if (isNaN(e)) throw null;
          return parseFloat(e);
        },
        boolean: function(e) {
          return !/^\s*false\s*$/i.test(e);
        },
        object: function(e) {
          return l.deserializeValue(e);
        },
        regexp: function(e) {
          var t = "";
          return (
            /^\/.*\/(?:[gimy]*)$/.test(e)
              ? ((t = e.replace(/.*\/([gimy]*)$/, "$1")),
                (e = e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")))
              : (e = "^" + e + "$"),
            new RegExp(e, t)
          );
        }
      },
      parseRequirement: function(e, t) {
        var i = this.parse[e || "string"];
        if (!i) throw 'Unknown requirement specification: "' + e + '"';
        var n = i(t);
        if (null === n) throw "Requirement is not a " + e + ': "' + t + '"';
        return n;
      },
      namespaceEvents: function(e, t) {
        return (e = this.trimString(e || "").split(/\s+/))[0]
          ? c
              .map(e, function(e) {
                return e + "." + t;
              })
              .join(" ")
          : "";
      },
      difference: function(e, i) {
        var n = [];
        return (
          c.each(e, function(e, t) {
            -1 == i.indexOf(t) && n.push(t);
          }),
          n
        );
      },
      all: function(e) {
        return c.when.apply(c, _toConsumableArray(e).concat([42, 42]));
      },
      objectCreate:
        Object.create ||
        ((i = function() {}),
        function(e) {
          if (1 < arguments.length)
            throw Error("Second argument not supported");
          if ("object" != typeof e)
            throw TypeError("Argument must be an object");
          i.prototype = e;
          var t = new i();
          return (i.prototype = null), t;
        }),
      _SubmitSelector: 'input[type="submit"], button:submit'
    },
    o = {
      namespace: "data-parsley-",
      inputs: "input, textarea, select",
      excluded:
        "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
      priorityEnabled: !0,
      multiple: null,
      group: null,
      uiEnabled: !0,
      validationThreshold: 3,
      focus: "first",
      trigger: !1,
      triggerAfterFailure: "input",
      errorClass: "parsley-error",
      successClass: "parsley-success",
      classHandler: function(e) {},
      errorsContainer: function(e) {},
      errorsWrapper: '<ul class="parsley-errors-list"></ul>',
      errorTemplate: "<li></li>"
    },
    s = function() {
      this.__id__ = l.generateID();
    };
  s.prototype = {
    asyncSupport: !0,
    _pipeAccordingToValidationResult: function() {
      var t = this,
        e = function() {
          var e = c.Deferred();
          return !0 !== t.validationResult && e.reject(), e.resolve().promise();
        };
      return [e, e];
    },
    actualizeOptions: function() {
      return (
        l.attr(this.element, this.options.namespace, this.domOptions),
        this.parent &&
          this.parent.actualizeOptions &&
          this.parent.actualizeOptions(),
        this
      );
    },
    _resetOptions: function(e) {
      for (var t in ((this.domOptions = l.objectCreate(this.parent.options)),
      (this.options = l.objectCreate(this.domOptions)),
      e))
        e.hasOwnProperty(t) && (this.options[t] = e[t]);
      this.actualizeOptions();
    },
    _listeners: null,
    on: function(e, t) {
      return (
        (this._listeners = this._listeners || {}),
        (this._listeners[e] = this._listeners[e] || []).push(t),
        this
      );
    },
    subscribe: function(e, t) {
      c.listenTo(this, e.toLowerCase(), t);
    },
    off: function(e, t) {
      var i = this._listeners && this._listeners[e];
      if (i)
        if (t) for (var n = i.length; n--; ) i[n] === t && i.splice(n, 1);
        else delete this._listeners[e];
      return this;
    },
    unsubscribe: function(e, t) {
      c.unsubscribeTo(this, e.toLowerCase());
    },
    trigger: function(e, t, i) {
      t = t || this;
      var n,
        o = this._listeners && this._listeners[e];
      if (o)
        for (var r = o.length; r--; )
          if (!1 === (n = o[r].call(t, t, i))) return n;
      return !this.parent || this.parent.trigger(e, t, i);
    },
    asyncIsValid: function(e, t) {
      return (
        l.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),
        this.whenValid({ group: e, force: t })
      );
    },
    _findRelated: function() {
      return this.options.multiple
        ? c(
            this.parent.element.querySelectorAll(
              "[" +
                this.options.namespace +
                'multiple="' +
                this.options.multiple +
                '"]'
            )
          )
        : this.$element;
    }
  };
  var a = function(e) {
    c.extend(!0, this, e);
  };
  a.prototype = {
    validate: function(e, t) {
      if (this.fn)
        return (
          3 < arguments.length && (t = [].slice.call(arguments, 1, -1)),
          this.fn(e, t)
        );
      if (Array.isArray(e)) {
        if (!this.validateMultiple)
          throw "Validator `" + this.name + "` does not handle multiple values";
        return this.validateMultiple.apply(this, arguments);
      }
      var i = arguments[arguments.length - 1];
      if (this.validateDate && i._isDateInput())
        return (
          (arguments[0] = l.parse.date(e)),
          null !== e && this.validateDate.apply(this, arguments)
        );
      if (this.validateNumber)
        return (
          !isNaN(e) &&
          ((arguments[0] = parseFloat(e)),
          this.validateNumber.apply(this, arguments))
        );
      if (this.validateString)
        return this.validateString.apply(this, arguments);
      throw "Validator `" + this.name + "` only handles multiple values";
    },
    parseRequirements: function(e, t) {
      if ("string" != typeof e) return Array.isArray(e) ? e : [e];
      var i = this.requirementType;
      if (Array.isArray(i)) {
        for (
          var n = (function(e, t) {
              var i = e.match(/^\s*\[(.*)\]\s*$/);
              if (!i) throw 'Requirement is not an array: "' + e + '"';
              var n = i[1].split(",").map(l.trimString);
              if (n.length !== t)
                throw "Requirement has " +
                  n.length +
                  " values when " +
                  t +
                  " are needed";
              return n;
            })(e, i.length),
            o = 0;
          o < n.length;
          o++
        )
          n[o] = l.parseRequirement(i[o], n[o]);
        return n;
      }
      return c.isPlainObject(i)
        ? (function(e, t, i) {
            var n = null,
              o = {};
            for (var r in e)
              if (r) {
                var s = i(r);
                "string" == typeof s && (s = l.parseRequirement(e[r], s)),
                  (o[r] = s);
              } else n = l.parseRequirement(e[r], t);
            return [n, o];
          })(i, e, t)
        : [l.parseRequirement(i, e)];
    },
    requirementType: "string",
    priority: 2
  };
  var d = function(e, t) {
      (this.__class__ = "ValidatorRegistry"),
        (this.locale = "en"),
        this.init(e || {}, t || {});
    },
    p = {
      email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,
      number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
      integer: /^-?\d+$/,
      digits: /^\d+$/,
      alphanum: /^\w+$/i,
      date: {
        test: function(e) {
          return null !== l.parse.date(e);
        }
      },
      url: new RegExp(
        "^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$"
      )
    };
  p.range = p.number;
  var h = function(e) {
      var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
    },
    u = function(r, s) {
      return function(e) {
        for (
          var t = arguments.length, i = Array(1 < t ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          i[n - 1] = arguments[n];
        return (
          i.pop(),
          s.apply(
            void 0,
            [e].concat(_toConsumableArray(((o = r), i.map(l.parse[o]))))
          )
        );
        var o;
      };
    },
    f = function(e) {
      return {
        validateDate: u("date", e),
        validateNumber: u("number", e),
        requirementType: e.length <= 2 ? "string" : ["string", "string"],
        priority: 30
      };
    };
  d.prototype = {
    init: function(e, t) {
      for (var i in ((this.catalog = t),
      (this.validators = _extends({}, this.validators)),
      e))
        this.addValidator(i, e[i].fn, e[i].priority);
      window.Parsley.trigger("parsley:validator:init");
    },
    setLocale: function(e) {
      if (void 0 === this.catalog[e])
        throw new Error(e + " is not available in the catalog");
      return (this.locale = e), this;
    },
    addCatalog: function(e, t, i) {
      return (
        "object" == typeof t && (this.catalog[e] = t),
        !0 === i ? this.setLocale(e) : this
      );
    },
    addMessage: function(e, t, i) {
      return (
        void 0 === this.catalog[e] && (this.catalog[e] = {}),
        (this.catalog[e][t] = i),
        this
      );
    },
    addMessages: function(e, t) {
      for (var i in t) this.addMessage(e, i, t[i]);
      return this;
    },
    addValidator: function(e, t, i) {
      if (this.validators[e])
        l.warn('Validator "' + e + '" is already defined.');
      else if (o.hasOwnProperty(e))
        return void l.warn(
          '"' +
            e +
            '" is a restricted keyword and is not a valid validator name.'
        );
      return this._setValidator.apply(this, arguments);
    },
    hasValidator: function(e) {
      return !!this.validators[e];
    },
    updateValidator: function(e, t, i) {
      return this.validators[e]
        ? this._setValidator.apply(this, arguments)
        : (l.warn('Validator "' + e + '" is not already defined.'),
          this.addValidator.apply(this, arguments));
    },
    removeValidator: function(e) {
      return (
        this.validators[e] || l.warn('Validator "' + e + '" is not defined.'),
        delete this.validators[e],
        this
      );
    },
    _setValidator: function(e, t, i) {
      for (var n in ("object" != typeof t && (t = { fn: t, priority: i }),
      t.validate || (t = new a(t)),
      (this.validators[e] = t).messages || {}))
        this.addMessage(n, e, t.messages[n]);
      return this;
    },
    getErrorMessage: function(e) {
      var t;
      "type" === e.name
        ? (t = (this.catalog[this.locale][e.name] || {})[e.requirements])
        : (t = this.formatMessage(
            this.catalog[this.locale][e.name],
            e.requirements
          ));
      return (
        t ||
        this.catalog[this.locale].defaultMessage ||
        this.catalog.en.defaultMessage
      );
    },
    formatMessage: function(e, t) {
      if ("object" == typeof t) {
        for (var i in t) e = this.formatMessage(e, t[i]);
        return e;
      }
      return "string" == typeof e ? e.replace(/%s/i, t) : "";
    },
    validators: {
      notblank: {
        validateString: function(e) {
          return /\S/.test(e);
        },
        priority: 2
      },
      required: {
        validateMultiple: function(e) {
          return 0 < e.length;
        },
        validateString: function(e) {
          return /\S/.test(e);
        },
        priority: 512
      },
      type: {
        validateString: function(e, t) {
          var i =
              arguments.length <= 2 || void 0 === arguments[2]
                ? {}
                : arguments[2],
            n = i.step,
            o = void 0 === n ? "any" : n,
            r = i.base,
            s = void 0 === r ? 0 : r,
            a = p[t];
          if (!a)
            throw new Error("validator type `" + t + "` is not supported");
          if (!a.test(e)) return !1;
          if ("number" === t && !/^any$/i.test(o || "")) {
            var l = Number(e),
              d = Math.max(h(o), h(s));
            if (h(l) > d) return !1;
            var u = function(e) {
              return Math.round(e * Math.pow(10, d));
            };
            if ((u(l) - u(s)) % u(o) != 0) return !1;
          }
          return !0;
        },
        requirementType: { "": "string", step: "string", base: "number" },
        priority: 256
      },
      pattern: {
        validateString: function(e, t) {
          return t.test(e);
        },
        requirementType: "regexp",
        priority: 64
      },
      minlength: {
        validateString: function(e, t) {
          return e.length >= t;
        },
        requirementType: "integer",
        priority: 30
      },
      maxlength: {
        validateString: function(e, t) {
          return e.length <= t;
        },
        requirementType: "integer",
        priority: 30
      },
      length: {
        validateString: function(e, t, i) {
          return e.length >= t && e.length <= i;
        },
        requirementType: ["integer", "integer"],
        priority: 30
      },
      mincheck: {
        validateMultiple: function(e, t) {
          return e.length >= t;
        },
        requirementType: "integer",
        priority: 30
      },
      maxcheck: {
        validateMultiple: function(e, t) {
          return e.length <= t;
        },
        requirementType: "integer",
        priority: 30
      },
      check: {
        validateMultiple: function(e, t, i) {
          return e.length >= t && e.length <= i;
        },
        requirementType: ["integer", "integer"],
        priority: 30
      },
      min: f(function(e, t) {
        return t <= e;
      }),
      max: f(function(e, t) {
        return e <= t;
      }),
      range: f(function(e, t, i) {
        return t <= e && e <= i;
      }),
      equalto: {
        validateString: function(e, t) {
          var i = c(t);
          return i.length ? e === i.val() : e === t;
        },
        priority: 256
      }
    }
  };
  var m = {};
  (m.Form = {
    _actualizeTriggers: function() {
      var t = this;
      this.$element.on("submit.Parsley", function(e) {
        t.onSubmitValidate(e);
      }),
        this.$element.on("click.Parsley", l._SubmitSelector, function(e) {
          t.onSubmitButton(e);
        }),
        !1 !== this.options.uiEnabled &&
          this.element.setAttribute("novalidate", "");
    },
    focus: function() {
      if (
        !(this._focusedField = null) === this.validationResult ||
        "none" === this.options.focus
      )
        return null;
      for (var e = 0; e < this.fields.length; e++) {
        var t = this.fields[e];
        if (
          !0 !== t.validationResult &&
          0 < t.validationResult.length &&
          void 0 === t.options.noFocus &&
          ((this._focusedField = t.$element), "first" === this.options.focus)
        )
          break;
      }
      return null === this._focusedField ? null : this._focusedField.focus();
    },
    _destroyUI: function() {
      this.$element.off(".Parsley");
    }
  }),
    (m.Field = {
      _reflowUI: function() {
        if ((this._buildUI(), this._ui)) {
          var e = (function e(t, i, n) {
            for (var o = [], r = [], s = 0; s < t.length; s++) {
              for (var a = !1, l = 0; l < i.length; l++)
                if (t[s].assert.name === i[l].assert.name) {
                  a = !0;
                  break;
                }
              a ? r.push(t[s]) : o.push(t[s]);
            }
            return { kept: r, added: o, removed: n ? [] : e(i, t, !0).added };
          })(this.validationResult, this._ui.lastValidationResult);
          (this._ui.lastValidationResult = this.validationResult),
            this._manageStatusClass(),
            this._manageErrorsMessages(e),
            this._actualizeTriggers(),
            (!e.kept.length && !e.added.length) ||
              this._failedOnce ||
              ((this._failedOnce = !0), this._actualizeTriggers());
        }
      },
      getErrorsMessages: function() {
        if (!0 === this.validationResult) return [];
        for (var e = [], t = 0; t < this.validationResult.length; t++)
          e.push(
            this.validationResult[t].errorMessage ||
              this._getErrorMessage(this.validationResult[t].assert)
          );
        return e;
      },
      addError: function(e) {
        var t =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1],
          i = t.message,
          n = t.assert,
          o = t.updateClass,
          r = void 0 === o || o;
        this._buildUI(),
          this._addError(e, { message: i, assert: n }),
          r && this._errorClass();
      },
      updateError: function(e) {
        var t =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1],
          i = t.message,
          n = t.assert,
          o = t.updateClass,
          r = void 0 === o || o;
        this._buildUI(),
          this._updateError(e, { message: i, assert: n }),
          r && this._errorClass();
      },
      removeError: function(e) {
        var t = (arguments.length <= 1 || void 0 === arguments[1]
            ? {}
            : arguments[1]
          ).updateClass,
          i = void 0 === t || t;
        this._buildUI(), this._removeError(e), i && this._manageStatusClass();
      },
      _manageStatusClass: function() {
        this.hasConstraints() &&
        this.needsValidation() &&
        !0 === this.validationResult
          ? this._successClass()
          : 0 < this.validationResult.length
          ? this._errorClass()
          : this._resetClass();
      },
      _manageErrorsMessages: function(e) {
        if (void 0 === this.options.errorsMessagesDisabled) {
          if (void 0 !== this.options.errorMessage)
            return e.added.length || e.kept.length
              ? (this._insertErrorWrapper(),
                0 ===
                  this._ui.$errorsWrapper.find(".parsley-custom-error-message")
                    .length &&
                  this._ui.$errorsWrapper.append(
                    c(this.options.errorTemplate).addClass(
                      "parsley-custom-error-message"
                    )
                  ),
                this._ui.$errorsWrapper
                  .addClass("filled")
                  .find(".parsley-custom-error-message")
                  .html(this.options.errorMessage))
              : this._ui.$errorsWrapper
                  .removeClass("filled")
                  .find(".parsley-custom-error-message")
                  .remove();
          for (var t = 0; t < e.removed.length; t++)
            this._removeError(e.removed[t].assert.name);
          for (t = 0; t < e.added.length; t++)
            this._addError(e.added[t].assert.name, {
              message: e.added[t].errorMessage,
              assert: e.added[t].assert
            });
          for (t = 0; t < e.kept.length; t++)
            this._updateError(e.kept[t].assert.name, {
              message: e.kept[t].errorMessage,
              assert: e.kept[t].assert
            });
        }
      },
      _addError: function(e, t) {
        var i = t.message,
          n = t.assert;
        this._insertErrorWrapper(),
          this._ui.$errorClassHandler.attr(
            "aria-describedby",
            this._ui.errorsWrapperId
          ),
          this._ui.$errorsWrapper.addClass("filled").append(
            c(this.options.errorTemplate)
              .addClass("parsley-" + e)
              .html(i || this._getErrorMessage(n))
          );
      },
      _updateError: function(e, t) {
        var i = t.message,
          n = t.assert;
        this._ui.$errorsWrapper
          .addClass("filled")
          .find(".parsley-" + e)
          .html(i || this._getErrorMessage(n));
      },
      _removeError: function(e) {
        this._ui.$errorClassHandler.removeAttr("aria-describedby"),
          this._ui.$errorsWrapper
            .removeClass("filled")
            .find(".parsley-" + e)
            .remove();
      },
      _getErrorMessage: function(e) {
        var t = e.name + "Message";
        return void 0 !== this.options[t]
          ? window.Parsley.formatMessage(this.options[t], e.requirements)
          : window.Parsley.getErrorMessage(e);
      },
      _buildUI: function() {
        if (!this._ui && !1 !== this.options.uiEnabled) {
          var e = {};
          this.element.setAttribute(this.options.namespace + "id", this.__id__),
            (e.$errorClassHandler = this._manageClassHandler()),
            (e.errorsWrapperId =
              "parsley-id-" +
              (this.options.multiple
                ? "multiple-" + this.options.multiple
                : this.__id__)),
            (e.$errorsWrapper = c(this.options.errorsWrapper).attr(
              "id",
              e.errorsWrapperId
            )),
            (e.lastValidationResult = []),
            (e.validationInformationVisible = !1),
            (this._ui = e);
        }
      },
      _manageClassHandler: function() {
        if (
          "string" == typeof this.options.classHandler &&
          c(this.options.classHandler).length
        )
          return c(this.options.classHandler);
        var e = this.options.classHandler;
        if (
          ("string" == typeof this.options.classHandler &&
            "function" == typeof window[this.options.classHandler] &&
            (e = window[this.options.classHandler]),
          "function" == typeof e)
        ) {
          var t = e.call(this, this);
          if (void 0 !== t && t.length) return t;
        } else {
          if ("object" == typeof e && e instanceof jQuery && e.length) return e;
          e &&
            l.warn(
              "The class handler `" +
                e +
                "` does not exist in DOM nor as a global JS function"
            );
        }
        return this._inputHolder();
      },
      _inputHolder: function() {
        return this.options.multiple && "SELECT" !== this.element.nodeName
          ? this.$element.parent()
          : this.$element;
      },
      _insertErrorWrapper: function() {
        var e = this.options.errorsContainer;
        if (0 !== this._ui.$errorsWrapper.parent().length)
          return this._ui.$errorsWrapper.parent();
        if ("string" == typeof e) {
          if (c(e).length) return c(e).append(this._ui.$errorsWrapper);
          "function" == typeof window[e]
            ? (e = window[e])
            : l.warn(
                "The errors container `" +
                  e +
                  "` does not exist in DOM nor as a global JS function"
              );
        }
        return (
          "function" == typeof e && (e = e.call(this, this)),
          "object" == typeof e && e.length
            ? e.append(this._ui.$errorsWrapper)
            : this._inputHolder().after(this._ui.$errorsWrapper)
        );
      },
      _actualizeTriggers: function() {
        var e,
          t = this,
          i = this._findRelated();
        i.off(".Parsley"),
          this._failedOnce
            ? i.on(
                l.namespaceEvents(this.options.triggerAfterFailure, "Parsley"),
                function() {
                  t._validateIfNeeded();
                }
              )
            : (e = l.namespaceEvents(this.options.trigger, "Parsley")) &&
              i.on(e, function(e) {
                t._validateIfNeeded(e);
              });
      },
      _validateIfNeeded: function(e) {
        var t = this;
        (e &&
          /key|input/.test(e.type) &&
          (!this._ui || !this._ui.validationInformationVisible) &&
          this.getValue().length <= this.options.validationThreshold) ||
          (this.options.debounce
            ? (window.clearTimeout(this._debounced),
              (this._debounced = window.setTimeout(function() {
                return t.validate();
              }, this.options.debounce)))
            : this.validate());
      },
      _resetUI: function() {
        (this._failedOnce = !1),
          this._actualizeTriggers(),
          void 0 !== this._ui &&
            (this._ui.$errorsWrapper
              .removeClass("filled")
              .children()
              .remove(),
            this._resetClass(),
            (this._ui.lastValidationResult = []),
            (this._ui.validationInformationVisible = !1));
      },
      _destroyUI: function() {
        this._resetUI(),
          void 0 !== this._ui && this._ui.$errorsWrapper.remove(),
          delete this._ui;
      },
      _successClass: function() {
        (this._ui.validationInformationVisible = !0),
          this._ui.$errorClassHandler
            .removeClass(this.options.errorClass)
            .addClass(this.options.successClass);
      },
      _errorClass: function() {
        (this._ui.validationInformationVisible = !0),
          this._ui.$errorClassHandler
            .removeClass(this.options.successClass)
            .addClass(this.options.errorClass);
      },
      _resetClass: function() {
        this._ui.$errorClassHandler
          .removeClass(this.options.successClass)
          .removeClass(this.options.errorClass);
      }
    });
  var g = function(e, t, i) {
      (this.__class__ = "Form"),
        (this.element = e),
        (this.$element = c(e)),
        (this.domOptions = t),
        (this.options = i),
        (this.parent = window.Parsley),
        (this.fields = []),
        (this.validationResult = null);
    },
    v = { pending: null, resolved: !0, rejected: !1 };
  g.prototype = {
    onSubmitValidate: function(e) {
      var t = this;
      if (!0 !== e.parsley) {
        var i = this._submitSource || this.$element.find(l._SubmitSelector)[0];
        if (
          ((this._submitSource = null),
          this.$element
            .find(".parsley-synthetic-submit-button")
            .prop("disabled", !0),
          !i || null === i.getAttribute("formnovalidate"))
        ) {
          window.Parsley._remoteCache = {};
          var n = this.whenValidate({ event: e });
          ("resolved" === n.state() && !1 !== this._trigger("submit")) ||
            (e.stopImmediatePropagation(),
            e.preventDefault(),
            "pending" === n.state() &&
              n.done(function() {
                t._submit(i);
              }));
        }
      }
    },
    onSubmitButton: function(e) {
      this._submitSource = e.currentTarget;
    },
    _submit: function(e) {
      if (!1 !== this._trigger("submit")) {
        if (e) {
          var t = this.$element
            .find(".parsley-synthetic-submit-button")
            .prop("disabled", !1);
          0 === t.length &&
            (t = c(
              '<input class="parsley-synthetic-submit-button" type="hidden">'
            ).appendTo(this.$element)),
            t.attr({
              name: e.getAttribute("name"),
              value: e.getAttribute("value")
            });
        }
        this.$element.trigger(_extends(c.Event("submit"), { parsley: !0 }));
      }
    },
    validate: function(e) {
      if (1 <= arguments.length && !c.isPlainObject(e)) {
        l.warnOnce(
          "Calling validate on a parsley form without passing arguments as an object is deprecated."
        );
        var t = _slice.call(arguments);
        e = { group: t[0], force: t[1], event: t[2] };
      }
      return v[this.whenValidate(e).state()];
    },
    whenValidate: function() {
      var e,
        t = this,
        i =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        n = i.group,
        o = i.force,
        r = i.event;
      (this.submitEvent = r) &&
        (this.submitEvent = _extends({}, r, {
          preventDefault: function() {
            l.warnOnce(
              "Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"
            ),
              (t.validationResult = !1);
          }
        })),
        (this.validationResult = !0),
        this._trigger("validate"),
        this._refreshFields();
      var s = this._withoutReactualizingFormOptions(function() {
        return c.map(t.fields, function(e) {
          return e.whenValidate({ force: o, group: n });
        });
      });
      return (e = l
        .all(s)
        .done(function() {
          t._trigger("success");
        })
        .fail(function() {
          (t.validationResult = !1), t.focus(), t._trigger("error");
        })
        .always(function() {
          t._trigger("validated");
        })).pipe.apply(
        e,
        _toConsumableArray(this._pipeAccordingToValidationResult())
      );
    },
    isValid: function(e) {
      if (1 <= arguments.length && !c.isPlainObject(e)) {
        l.warnOnce(
          "Calling isValid on a parsley form without passing arguments as an object is deprecated."
        );
        var t = _slice.call(arguments);
        e = { group: t[0], force: t[1] };
      }
      return v[this.whenValid(e).state()];
    },
    whenValid: function() {
      var e = this,
        t =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        i = t.group,
        n = t.force;
      this._refreshFields();
      var o = this._withoutReactualizingFormOptions(function() {
        return c.map(e.fields, function(e) {
          return e.whenValid({ group: i, force: n });
        });
      });
      return l.all(o);
    },
    refresh: function() {
      return this._refreshFields(), this;
    },
    reset: function() {
      for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
      this._trigger("reset");
    },
    destroy: function() {
      this._destroyUI();
      for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
      this.$element.removeData("Parsley"), this._trigger("destroy");
    },
    _refreshFields: function() {
      return this.actualizeOptions()._bindFields();
    },
    _bindFields: function() {
      var o = this,
        e = this.fields;
      return (
        (this.fields = []),
        (this.fieldsMappedById = {}),
        this._withoutReactualizingFormOptions(function() {
          o.$element
            .find(o.options.inputs)
            .not(o.options.excluded)
            .each(function(e, t) {
              var i = new window.Parsley.Factory(t, {}, o);
              if (
                ("Field" === i.__class__ || "FieldMultiple" === i.__class__) &&
                !0 !== i.options.excluded
              ) {
                var n = i.__class__ + "-" + i.__id__;
                void 0 === o.fieldsMappedById[n] &&
                  ((o.fieldsMappedById[n] = i), o.fields.push(i));
              }
            }),
            c.each(l.difference(e, o.fields), function(e, t) {
              t.reset();
            });
        }),
        this
      );
    },
    _withoutReactualizingFormOptions: function(e) {
      var t = this.actualizeOptions;
      this.actualizeOptions = function() {
        return this;
      };
      var i = e();
      return (this.actualizeOptions = t), i;
    },
    _trigger: function(e) {
      return this.trigger("form:" + e);
    }
  };
  var y = function(e, t, i, n, o) {
      var r = window.Parsley._validatorRegistry.validators[t],
        s = new a(r);
      (n = n || e.options[t + "Priority"] || s.priority),
        _extends(this, {
          validator: s,
          name: t,
          requirements: i,
          priority: n,
          isDomConstraint: (o = !0 === o)
        }),
        this._parseRequirements(e.options);
    },
    b = function(e, t, i, n) {
      (this.__class__ = "Field"),
        (this.element = e),
        (this.$element = c(e)),
        void 0 !== n && (this.parent = n),
        (this.options = i),
        (this.domOptions = t),
        (this.constraints = []),
        (this.constraintsByName = {}),
        (this.validationResult = !0),
        this._bindConstraints();
    },
    w = {
      pending: null,
      resolved: !0,
      rejected: !(y.prototype = {
        validate: function(e, t) {
          var i;
          return (i = this.validator).validate.apply(
            i,
            [e].concat(_toConsumableArray(this.requirementList), [t])
          );
        },
        _parseRequirements: function(i) {
          var n = this;
          this.requirementList = this.validator.parseRequirements(
            this.requirements,
            function(e) {
              return i[n.name + ((t = e), t[0].toUpperCase() + t.slice(1))];
              var t;
            }
          );
        }
      })
    };
  b.prototype = {
    validate: function(e) {
      1 <= arguments.length &&
        !c.isPlainObject(e) &&
        (l.warnOnce(
          "Calling validate on a parsley field without passing arguments as an object is deprecated."
        ),
        (e = { options: e }));
      var t = this.whenValidate(e);
      if (!t) return !0;
      switch (t.state()) {
        case "pending":
          return null;
        case "resolved":
          return !0;
        case "rejected":
          return this.validationResult;
      }
    },
    whenValidate: function() {
      var e,
        t = this,
        i =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        n = i.force,
        o = i.group;
      if ((this.refresh(), !o || this._isInGroup(o)))
        return (
          (this.value = this.getValue()),
          this._trigger("validate"),
          (e = this.whenValid({ force: n, value: this.value, _refreshed: !0 })
            .always(function() {
              t._reflowUI();
            })
            .done(function() {
              t._trigger("success");
            })
            .fail(function() {
              t._trigger("error");
            })
            .always(function() {
              t._trigger("validated");
            })).pipe.apply(
            e,
            _toConsumableArray(this._pipeAccordingToValidationResult())
          )
        );
    },
    hasConstraints: function() {
      return 0 !== this.constraints.length;
    },
    needsValidation: function(e) {
      return (
        void 0 === e && (e = this.getValue()),
        !(
          !e.length &&
          !this._isRequired() &&
          void 0 === this.options.validateIfEmpty
        )
      );
    },
    _isInGroup: function(e) {
      return Array.isArray(this.options.group)
        ? -1 !== c.inArray(e, this.options.group)
        : this.options.group === e;
    },
    isValid: function(e) {
      if (1 <= arguments.length && !c.isPlainObject(e)) {
        l.warnOnce(
          "Calling isValid on a parsley field without passing arguments as an object is deprecated."
        );
        var t = _slice.call(arguments);
        e = { force: t[0], value: t[1] };
      }
      var i = this.whenValid(e);
      return !i || w[i.state()];
    },
    whenValid: function() {
      var n = this,
        e =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        t = e.force,
        i = void 0 !== t && t,
        o = e.value,
        r = e.group;
      if ((e._refreshed || this.refresh(), !r || this._isInGroup(r))) {
        if (((this.validationResult = !0), !this.hasConstraints()))
          return c.when();
        if (
          (null != o || (o = this.getValue()),
          !this.needsValidation(o) && !0 !== i)
        )
          return c.when();
        var s = this._getGroupedConstraints(),
          a = [];
        return (
          c.each(s, function(e, t) {
            var i = l.all(
              c.map(t, function(e) {
                return n._validateConstraint(o, e);
              })
            );
            if ((a.push(i), "rejected" === i.state())) return !1;
          }),
          l.all(a)
        );
      }
    },
    _validateConstraint: function(e, t) {
      var i = this,
        n = t.validate(e, this);
      return (
        !1 === n && (n = c.Deferred().reject()),
        l.all([n]).fail(function(e) {
          i.validationResult instanceof Array || (i.validationResult = []),
            i.validationResult.push({
              assert: t,
              errorMessage: "string" == typeof e && e
            });
        })
      );
    },
    getValue: function() {
      var e;
      return null ==
        (e =
          "function" == typeof this.options.value
            ? this.options.value(this)
            : void 0 !== this.options.value
            ? this.options.value
            : this.$element.val())
        ? ""
        : this._handleWhitespace(e);
    },
    reset: function() {
      return this._resetUI(), this._trigger("reset");
    },
    destroy: function() {
      this._destroyUI(),
        this.$element.removeData("Parsley"),
        this.$element.removeData("FieldMultiple"),
        this._trigger("destroy");
    },
    refresh: function() {
      return this._refreshConstraints(), this;
    },
    _refreshConstraints: function() {
      return this.actualizeOptions()._bindConstraints();
    },
    refreshConstraints: function() {
      return (
        l.warnOnce(
          "Parsley's refreshConstraints is deprecated. Please use refresh"
        ),
        this.refresh()
      );
    },
    addConstraint: function(e, t, i, n) {
      if (window.Parsley._validatorRegistry.validators[e]) {
        var o = new y(this, e, t, i, n);
        "undefined" !== this.constraintsByName[o.name] &&
          this.removeConstraint(o.name),
          this.constraints.push(o),
          (this.constraintsByName[o.name] = o);
      }
      return this;
    },
    removeConstraint: function(e) {
      for (var t = 0; t < this.constraints.length; t++)
        if (e === this.constraints[t].name) {
          this.constraints.splice(t, 1);
          break;
        }
      return delete this.constraintsByName[e], this;
    },
    updateConstraint: function(e, t, i) {
      return this.removeConstraint(e).addConstraint(e, t, i);
    },
    _bindConstraints: function() {
      for (var e = [], t = {}, i = 0; i < this.constraints.length; i++)
        !1 === this.constraints[i].isDomConstraint &&
          (e.push(this.constraints[i]),
          (t[this.constraints[i].name] = this.constraints[i]));
      for (var n in ((this.constraints = e),
      (this.constraintsByName = t),
      this.options))
        this.addConstraint(n, this.options[n], void 0, !0);
      return this._bindHtml5Constraints();
    },
    _bindHtml5Constraints: function() {
      null !== this.element.getAttribute("required") &&
        this.addConstraint("required", !0, void 0, !0),
        null !== this.element.getAttribute("pattern") &&
          this.addConstraint(
            "pattern",
            this.element.getAttribute("pattern"),
            void 0,
            !0
          );
      var e = this.element.getAttribute("min"),
        t = this.element.getAttribute("max");
      null !== e && null !== t
        ? this.addConstraint("range", [e, t], void 0, !0)
        : null !== e
        ? this.addConstraint("min", e, void 0, !0)
        : null !== t && this.addConstraint("max", t, void 0, !0),
        null !== this.element.getAttribute("minlength") &&
        null !== this.element.getAttribute("maxlength")
          ? this.addConstraint(
              "length",
              [
                this.element.getAttribute("minlength"),
                this.element.getAttribute("maxlength")
              ],
              void 0,
              !0
            )
          : null !== this.element.getAttribute("minlength")
          ? this.addConstraint(
              "minlength",
              this.element.getAttribute("minlength"),
              void 0,
              !0
            )
          : null !== this.element.getAttribute("maxlength") &&
            this.addConstraint(
              "maxlength",
              this.element.getAttribute("maxlength"),
              void 0,
              !0
            );
      var i = l.getType(this.element);
      return "number" === i
        ? this.addConstraint(
            "type",
            [
              "number",
              {
                step: this.element.getAttribute("step") || "1",
                base: e || this.element.getAttribute("value")
              }
            ],
            void 0,
            !0
          )
        : /^(email|url|range|date)$/i.test(i)
        ? this.addConstraint("type", i, void 0, !0)
        : this;
    },
    _isRequired: function() {
      return (
        void 0 !== this.constraintsByName.required &&
        !1 !== this.constraintsByName.required.requirements
      );
    },
    _trigger: function(e) {
      return this.trigger("field:" + e);
    },
    _handleWhitespace: function(e) {
      return (
        !0 === this.options.trimValue &&
          l.warnOnce(
            'data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'
          ),
        "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")),
        ("trim" !== this.options.whitespace &&
          "squish" !== this.options.whitespace &&
          !0 !== this.options.trimValue) ||
          (e = l.trimString(e)),
        e
      );
    },
    _isDateInput: function() {
      var e = this.constraintsByName.type;
      return e && "date" === e.requirements;
    },
    _getGroupedConstraints: function() {
      if (!1 === this.options.priorityEnabled) return [this.constraints];
      for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) {
        var n = this.constraints[i].priority;
        t[n] || e.push((t[n] = [])), t[n].push(this.constraints[i]);
      }
      return (
        e.sort(function(e, t) {
          return t[0].priority - e[0].priority;
        }),
        e
      );
    }
  };
  var k = b,
    x = function() {
      this.__class__ = "FieldMultiple";
    };
  x.prototype = {
    addElement: function(e) {
      return this.$elements.push(e), this;
    },
    _refreshConstraints: function() {
      var e;
      if (((this.constraints = []), "SELECT" === this.element.nodeName))
        return this.actualizeOptions()._bindConstraints(), this;
      for (var t = 0; t < this.$elements.length; t++)
        if (c("html").has(this.$elements[t]).length) {
          e = this.$elements[t].data("FieldMultiple")._refreshConstraints()
            .constraints;
          for (var i = 0; i < e.length; i++)
            this.addConstraint(
              e[i].name,
              e[i].requirements,
              e[i].priority,
              e[i].isDomConstraint
            );
        } else this.$elements.splice(t, 1);
      return this;
    },
    getValue: function() {
      if ("function" == typeof this.options.value)
        return this.options.value(this);
      if (void 0 !== this.options.value) return this.options.value;
      if ("INPUT" === this.element.nodeName) {
        var e = l.getType(this.element);
        if ("radio" === e)
          return (
            this._findRelated()
              .filter(":checked")
              .val() || ""
          );
        if ("checkbox" === e) {
          var t = [];
          return (
            this._findRelated()
              .filter(":checked")
              .each(function() {
                t.push(c(this).val());
              }),
            t
          );
        }
      }
      return "SELECT" === this.element.nodeName && null === this.$element.val()
        ? []
        : this.$element.val();
    },
    _init: function() {
      return (this.$elements = [this.$element]), this;
    }
  };
  var _ = function(e, t, i) {
    (this.element = e), (this.$element = c(e));
    var n = this.$element.data("Parsley");
    if (n)
      return (
        void 0 !== i &&
          n.parent === window.Parsley &&
          ((n.parent = i), n._resetOptions(n.options)),
        "object" == typeof t && _extends(n.options, t),
        n
      );
    if (!this.$element.length)
      throw new Error("You must bind Parsley on an existing element.");
    if (void 0 !== i && "Form" !== i.__class__)
      throw new Error("Parent instance must be a Form instance");
    return (this.parent = i || window.Parsley), this.init(t);
  };
  _.prototype = {
    init: function(e) {
      return (
        (this.__class__ = "Parsley"),
        (this.__version__ = "2.8.1"),
        (this.__id__ = l.generateID()),
        this._resetOptions(e),
        "FORM" === this.element.nodeName ||
        (l.checkAttr(this.element, this.options.namespace, "validate") &&
          !this.$element.is(this.options.inputs))
          ? this.bind("parsleyForm")
          : this.isMultiple()
          ? this.handleMultiple()
          : this.bind("parsleyField")
      );
    },
    isMultiple: function() {
      var e = l.getType(this.element);
      return (
        "radio" === e ||
        "checkbox" === e ||
        ("SELECT" === this.element.nodeName &&
          null !== this.element.getAttribute("multiple"))
      );
    },
    handleMultiple: function() {
      var e,
        t,
        n = this;
      if (
        ((this.options.multiple =
          this.options.multiple ||
          (e = this.element.getAttribute("name")) ||
          this.element.getAttribute("id")),
        "SELECT" === this.element.nodeName &&
          null !== this.element.getAttribute("multiple"))
      )
        return (
          (this.options.multiple = this.options.multiple || this.__id__),
          this.bind("parsleyFieldMultiple")
        );
      if (!this.options.multiple)
        return (
          l.warn(
            "To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",
            this.$element
          ),
          this
        );
      (this.options.multiple = this.options.multiple.replace(
        /(:|\.|\[|\]|\{|\}|\$)/g,
        ""
      )),
        e &&
          c('input[name="' + e + '"]').each(function(e, t) {
            var i = l.getType(t);
            ("radio" !== i && "checkbox" !== i) ||
              t.setAttribute(
                n.options.namespace + "multiple",
                n.options.multiple
              );
          });
      for (var i = this._findRelated(), o = 0; o < i.length; o++)
        if (void 0 !== (t = c(i.get(o)).data("Parsley"))) {
          this.$element.data("FieldMultiple") || t.addElement(this.$element);
          break;
        }
      return (
        this.bind("parsleyField", !0), t || this.bind("parsleyFieldMultiple")
      );
    },
    bind: function(e, t) {
      var i;
      switch (e) {
        case "parsleyForm":
          i = c
            .extend(
              new g(this.element, this.domOptions, this.options),
              new s(),
              window.ParsleyExtend
            )
            ._bindFields();
          break;
        case "parsleyField":
          i = c.extend(
            new k(this.element, this.domOptions, this.options, this.parent),
            new s(),
            window.ParsleyExtend
          );
          break;
        case "parsleyFieldMultiple":
          i = c
            .extend(
              new k(this.element, this.domOptions, this.options, this.parent),
              new x(),
              new s(),
              window.ParsleyExtend
            )
            ._init();
          break;
        default:
          throw new Error(e + "is not a supported Parsley type");
      }
      return (
        this.options.multiple &&
          l.setAttr(
            this.element,
            this.options.namespace,
            "multiple",
            this.options.multiple
          ),
        void 0 !== t
          ? this.$element.data("FieldMultiple", i)
          : (this.$element.data("Parsley", i),
            i._actualizeTriggers(),
            i._trigger("init")),
        i
      );
    }
  };
  var C = c.fn.jquery.split(".");
  if (parseInt(C[0]) <= 1 && parseInt(C[1]) < 8)
    throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
  C.forEach ||
    l.warn(
      "Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim"
    );
  var S = _extends(new s(), {
    element: document,
    $element: c(document),
    actualizeOptions: null,
    _resetOptions: null,
    Factory: _,
    version: "2.8.1"
  });
  _extends(k.prototype, m.Field, s.prototype),
    _extends(g.prototype, m.Form, s.prototype),
    _extends(_.prototype, s.prototype),
    (c.fn.parsley = c.fn.psly = function(e) {
      if (1 < this.length) {
        var t = [];
        return (
          this.each(function() {
            t.push(c(this).parsley(e));
          }),
          t
        );
      }
      if (0 != this.length) return new _(this[0], e);
    }),
    void 0 === window.ParsleyExtend && (window.ParsleyExtend = {}),
    (S.options = _extends(l.objectCreate(o), window.ParsleyConfig)),
    (window.ParsleyConfig = S.options),
    (window.Parsley = window.psly = S),
    (S.Utils = l),
    (window.ParsleyUtils = {}),
    c.each(l, function(e, t) {
      "function" == typeof t &&
        (window.ParsleyUtils[e] = function() {
          return (
            l.warnOnce(
              "Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."
            ),
            l[e].apply(l, arguments)
          );
        });
    });
  var T = (window.Parsley._validatorRegistry = new d(
    window.ParsleyConfig.validators,
    window.ParsleyConfig.i18n
  ));
  (window.ParsleyValidator = {}),
    c.each(
      "setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(
        " "
      ),
      function(e, t) {
        (window.Parsley[t] = function() {
          return T[t].apply(T, arguments);
        }),
          (window.ParsleyValidator[t] = function() {
            var e;
            return (
              l.warnOnce(
                "Accessing the method '" +
                  t +
                  "' through Validator is deprecated. Simply call 'window.Parsley." +
                  t +
                  "(...)'"
              ),
              (e = window.Parsley)[t].apply(e, arguments)
            );
          });
      }
    ),
    (window.Parsley.UI = m),
    (window.ParsleyUI = {
      removeError: function(e, t, i) {
        var n = !0 !== i;
        return (
          l.warnOnce(
            "Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."
          ),
          e.removeError(t, { updateClass: n })
        );
      },
      getErrorsMessages: function(e) {
        return (
          l.warnOnce(
            "Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."
          ),
          e.getErrorsMessages()
        );
      }
    }),
    c.each("addError updateError".split(" "), function(e, s) {
      window.ParsleyUI[s] = function(e, t, i, n, o) {
        var r = !0 !== o;
        return (
          l.warnOnce(
            "Accessing UI is deprecated. Call '" +
              s +
              "' on the instance directly. Please comment in issue 1073 as to your need to call this method."
          ),
          e[s](t, { message: i, assert: n, updateClass: r })
        );
      };
    }),
    !1 !== window.ParsleyConfig.autoBind &&
      c(function() {
        c("[data-parsley-validate]").length &&
          c("[data-parsley-validate]").parsley();
      });
  var E = c({}),
    A = function() {
      l.warnOnce(
        "Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley"
      );
    },
    P = "parsley:";
  return (
    (c.listen = function(e, t) {
      var i;
      if (
        (A(),
        "object" == typeof t &&
          "function" == typeof arguments[2] &&
          ((i = t), (t = arguments[2])),
        "function" != typeof t)
      )
        throw new Error("Wrong parameters");
      window.Parsley.on(r(e), n(t, i));
    }),
    (c.listenTo = function(e, t, i) {
      if ((A(), !(e instanceof k || e instanceof g)))
        throw new Error("Must give Parsley instance");
      if ("string" != typeof t || "function" != typeof i)
        throw new Error("Wrong parameters");
      e.on(r(t), n(i));
    }),
    (c.unsubscribe = function(e, t) {
      if ((A(), "string" != typeof e || "function" != typeof t))
        throw new Error("Wrong arguments");
      window.Parsley.off(r(e), t.parsleyAdaptedCallback);
    }),
    (c.unsubscribeTo = function(e, t) {
      if ((A(), !(e instanceof k || e instanceof g)))
        throw new Error("Must give Parsley instance");
      e.off(r(t));
    }),
    (c.unsubscribeAll = function(t) {
      A(),
        window.Parsley.off(r(t)),
        c("form,input,textarea,select").each(function() {
          var e = c(this).data("Parsley");
          e && e.off(r(t));
        });
    }),
    (c.emit = function(e, t) {
      var i;
      A();
      var n = t instanceof k || t instanceof g,
        o = Array.prototype.slice.call(arguments, n ? 2 : 1);
      o.unshift(r(e)),
        n || (t = window.Parsley),
        (i = t).trigger.apply(i, _toConsumableArray(o));
    }),
    c.extend(!0, S, {
      asyncValidators: {
        default: {
          fn: function(e) {
            return 200 <= e.status && e.status < 300;
          },
          url: !1
        },
        reverse: {
          fn: function(e) {
            return e.status < 200 || 300 <= e.status;
          },
          url: !1
        }
      },
      addAsyncValidator: function(e, t, i, n) {
        return (
          (S.asyncValidators[e] = { fn: t, url: i || !1, options: n || {} }),
          this
        );
      }
    }),
    S.addValidator("remote", {
      requirementType: {
        "": "string",
        validator: "string",
        reverse: "boolean",
        options: "object"
      },
      validateString: function(e, t, i, n) {
        var o,
          r,
          s = {},
          a = i.validator || (!0 === i.reverse ? "reverse" : "default");
        if (void 0 === S.asyncValidators[a])
          throw new Error("Calling an undefined async validator: `" + a + "`");
        -1 < (t = S.asyncValidators[a].url || t).indexOf("{value}")
          ? (t = t.replace("{value}", encodeURIComponent(e)))
          : (s[
              n.element.getAttribute("name") || n.element.getAttribute("id")
            ] = e);
        var l = c.extend(!0, i.options || {}, S.asyncValidators[a].options);
        (o = c.extend(!0, {}, { url: t, data: s, type: "GET" }, l)),
          n.trigger("field:ajaxoptions", n, o),
          (r = c.param(o)),
          void 0 === S._remoteCache && (S._remoteCache = {});
        var d = (S._remoteCache[r] = S._remoteCache[r] || c.ajax(o)),
          u = function() {
            var e = S.asyncValidators[a].fn.call(n, d, t, i);
            return e || (e = c.Deferred().reject()), c.when(e);
          };
        return d.then(u, u);
      },
      priority: -1
    }),
    S.on("form:submit", function() {
      S._remoteCache = {};
    }),
    (s.prototype.addAsyncValidator = function() {
      return (
        l.warnOnce(
          "Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"
        ),
        S.addAsyncValidator.apply(S, arguments)
      );
    }),
    S.addMessages("en", {
      defaultMessage: "This value seems to be invalid.",
      type: {
        email: "This value should be a valid email.",
        url: "This value should be a valid url.",
        number: "This value should be a valid number.",
        integer: "This value should be a valid integer.",
        digits: "This value should be digits.",
        alphanum: "This value should be alphanumeric."
      },
      notblank: "This value should not be blank.",
      required: "This value is required.",
      pattern: "This value seems to be invalid.",
      min: "This value should be greater than or equal to %s.",
      max: "This value should be lower than or equal to %s.",
      range: "This value should be between %s and %s.",
      minlength:
        "This value is too short. It should have %s characters or more.",
      maxlength:
        "This value is too long. It should have %s characters or fewer.",
      length:
        "This value length is invalid. It should be between %s and %s characters long.",
      mincheck: "You must select at least %s choices.",
      maxcheck: "You must select %s choices or fewer.",
      check: "You must select between %s and %s choices.",
      equalto: "This value should be the same."
    }),
    S.setLocale("en"),
    new function() {
      var n = this,
        o = window || global;
      _extends(this, {
        isNativeEvent: function(e) {
          return e.originalEvent && !1 !== e.originalEvent.isTrusted;
        },
        fakeInputEvent: function(e) {
          n.isNativeEvent(e) && c(e.target).trigger("input");
        },
        misbehaves: function(e) {
          n.isNativeEvent(e) &&
            (n.behavesOk(e),
            c(document).on(
              "change.inputevent",
              e.data.selector,
              n.fakeInputEvent
            ),
            n.fakeInputEvent(e));
        },
        behavesOk: function(e) {
          n.isNativeEvent(e) &&
            c(document)
              .off("input.inputevent", e.data.selector, n.behavesOk)
              .off("change.inputevent", e.data.selector, n.misbehaves);
        },
        install: function() {
          if (!o.inputEventPatched) {
            o.inputEventPatched = "0.0.3";
            for (
              var e = [
                  "select",
                  'input[type="checkbox"]',
                  'input[type="radio"]',
                  'input[type="file"]'
                ],
                t = 0;
              t < e.length;
              t++
            ) {
              var i = e[t];
              c(document)
                .on("input.inputevent", i, { selector: i }, n.behavesOk)
                .on("change.inputevent", i, { selector: i }, n.misbehaves);
            }
          }
        },
        uninstall: function() {
          delete o.inputEventPatched, c(document).off(".inputevent");
        }
      });
    }().install(),
    S
  );
}),
  Parsley.addMessages("ru", {
    defaultMessage: "Некорректное значение.",
    type: {
      email: "Введите адрес электронной почты.",
      url: "Введите URL адрес.",
      number: "Введите число.",
      integer: "Введите целое число.",
      digits: "Введите только цифры.",
      alphanum: "Введите буквенно-цифровое значение."
    },
    notblank: "Это поле должно быть заполнено.",
    required: "Обязательное поле.",
    pattern: "Это значение некорректно.",
    min: "Это значение должно быть не менее чем %s.",
    max: "Это значение должно быть не более чем %s.",
    range: "Это значение должно быть от %s до %s.",
    minlength: "Это значение должно содержать не менее %s символов.",
    maxlength: "Это значение должно содержать не более %s символов.",
    length: "Это значение должно содержать от %s до %s символов.",
    mincheck: "Выберите не менее %s значений.",
    maxcheck: "Выберите не более %s значений.",
    check: "Выберите от %s до %s значений.",
    equalto: "Это значение должно совпадать."
  }),
  Parsley.setLocale("ru"),
  Parsley.addMessages("en", {
    defaultMessage: "This value seems to be invalid.",
    type: {
      email: "This value should be a valid email.",
      url: "This value should be a valid url.",
      number: "This value should be a valid number.",
      integer: "This value should be a valid integer.",
      digits: "This value should be digits.",
      alphanum: "This value should be alphanumeric."
    },
    notblank: "This value should not be blank.",
    required: "This value is required.",
    pattern: "This value seems to be invalid.",
    min: "This value should be greater than or equal to %s.",
    max: "This value should be lower than or equal to %s.",
    range: "This value should be between %s and %s.",
    minlength: "This value is too short. It should have %s characters or more.",
    maxlength: "This value is too long. It should have %s characters or fewer.",
    length:
      "This value length is invalid. It should be between %s and %s characters long.",
    mincheck: "You must select at least %s choices.",
    maxcheck: "You must select %s choices or fewer.",
    check: "You must select between %s and %s choices.",
    equalto: "This value should be the same."
  }),
  Parsley.setLocale("en"),
  (function(K) {
    function Q(e, t) {
      return this instanceof Q
        ? (K.isPlainObject(e) ? (t = e) : ((t = t || {}).alias = e),
          (this.el = void 0),
          (this.opts = K.extend(!0, {}, this.defaults, t)),
          (this.maskset = void 0),
          (this.noMasksCache = t && void 0 !== t.definitions),
          (this.userOptions = t || {}),
          (this.events = {}),
          (this.dataAttribute = "data-inputmask"),
          (this.isRTL = this.opts.numericInput),
          void u(this.opts.alias, t, this.opts))
        : new Q(e, t);
    }
    function u(e, t, i) {
      var n = i.aliases[e];
      return n
        ? (n.alias && u(n.alias, void 0, i),
          K.extend(!0, i, n),
          K.extend(!0, i, t),
          !0)
        : (null === i.mask && (i.mask = e), !1);
    }
    function r(i, r) {
      function e(e, t, i) {
        if (null !== e && "" !== e) {
          if (
            (1 === e.length &&
              !1 === i.greedy &&
              0 !== i.repeat &&
              (i.placeholder = ""),
            0 < i.repeat || "*" === i.repeat || "+" === i.repeat)
          ) {
            var n = "*" === i.repeat ? 0 : "+" === i.repeat ? 1 : i.repeat;
            e =
              i.groupmarker.start +
              e +
              i.groupmarker.end +
              i.quantifiermarker.start +
              n +
              "," +
              i.repeat +
              i.quantifiermarker.end;
          }
          var o;
          return (
            void 0 === Q.prototype.masksCache[e] || !0 === r
              ? ((o = {
                  mask: e,
                  maskToken: Q.prototype.analyseMask(e, i),
                  validPositions: {},
                  _buffer: void 0,
                  buffer: void 0,
                  tests: {},
                  metadata: t,
                  maskLength: void 0
                }),
                !0 !== r &&
                  ((Q.prototype.masksCache[
                    i.numericInput
                      ? e
                          .split("")
                          .reverse()
                          .join("")
                      : e
                  ] = o),
                  (o = K.extend(
                    !0,
                    {},
                    Q.prototype.masksCache[
                      i.numericInput
                        ? e
                            .split("")
                            .reverse()
                            .join("")
                        : e
                    ]
                  ))))
              : (o = K.extend(
                  !0,
                  {},
                  Q.prototype.masksCache[
                    i.numericInput
                      ? e
                          .split("")
                          .reverse()
                          .join("")
                      : e
                  ]
                )),
            o
          );
        }
      }
      var t;
      if ((K.isFunction(i.mask) && (i.mask = i.mask(i)), K.isArray(i.mask))) {
        if (1 < i.mask.length) {
          i.keepStatic = null === i.keepStatic || i.keepStatic;
          var n = i.groupmarker.start;
          return (
            K.each(i.numericInput ? i.mask.reverse() : i.mask, function(e, t) {
              1 < n.length &&
                (n +=
                  i.groupmarker.end + i.alternatormarker + i.groupmarker.start),
                (n += void 0 === t.mask || K.isFunction(t.mask) ? t : t.mask);
            }),
            e((n += i.groupmarker.end), i.mask, i)
          );
        }
        i.mask = i.mask.pop();
      }
      return (
        i.mask &&
          (t =
            void 0 === i.mask.mask || K.isFunction(i.mask.mask)
              ? e(i.mask, i.mask, i)
              : e(i.mask.mask, i.mask, i)),
        t
      );
    }
    function X(e, t, R) {
      function i(e, t, i) {
        t = t || 0;
        var n,
          o,
          r,
          s = [],
          a = 0,
          l = C();
        for (
          -1 === (D = void 0 !== d ? d.maxLength : void 0) && (D = void 0);
          !0 === e && N().validPositions[a]
            ? ((o = (r = N().validPositions[a]).match),
              (n = r.locator.slice()),
              s.push(!0 === i ? r.input : !1 === i ? o.nativeDef : O(a, o)))
            : ((o = (r = f(a, n, a - 1)).match),
              (n = r.locator.slice()),
              (!1 === R.jitMasking ||
                a < l ||
                ("number" == typeof R.jitMasking &&
                  isFinite(R.jitMasking) &&
                  R.jitMasking > a)) &&
                s.push(!1 === i ? o.nativeDef : O(a, o))),
            a++,
            ((void 0 === D || a < D) && (null !== o.fn || "" !== o.def)) ||
              a < t;

        );
        return "" === s[s.length - 1] && s.pop(), (N().maskLength = a + 1), s;
      }
      function N() {
        return t;
      }
      function _(e) {
        var t = N();
        !(t.buffer = void 0) !== e &&
          ((t._buffer = void 0), (t.validPositions = {}), (t.p = 0));
      }
      function C(e, t, i) {
        var n = -1,
          o = -1,
          r = i || N().validPositions;
        for (var s in (void 0 === e && (e = -1), r)) {
          var a = parseInt(s);
          r[a] &&
            (t || null !== r[a].match.fn) &&
            (a <= e && (n = a), e <= a && (o = a));
        }
        return (-1 !== n && 1 < e - n) || o < e ? n : o;
      }
      function b(e, t, i, n) {
        function o(e) {
          var t = N().validPositions[e];
          if (void 0 !== t && null === t.match.fn) {
            var i = N().validPositions[e - 1],
              n = N().validPositions[e + 1];
            return void 0 !== i && void 0 !== n;
          }
          return !1;
        }
        var r,
          s = e,
          a = K.extend(!0, {}, N().validPositions),
          l = !1;
        for (N().p = e, r = t - 1; s <= r; r--)
          void 0 !== N().validPositions[r] &&
            ((!0 !== i &&
              ((!N().validPositions[r].match.optionality && o(r)) ||
                !1 === R.canClearPosition(N(), r, C(), n, R))) ||
              delete N().validPositions[r]);
        for (_(!0), r = s + 1; r <= C(); ) {
          for (; void 0 !== N().validPositions[s]; ) s++;
          if ((r < s && (r = s + 1), void 0 === N().validPositions[r] && P(r)))
            r++;
          else {
            var d = f(r);
            !1 === l && a[s] && a[s].match.def === d.match.def
              ? ((N().validPositions[s] = K.extend(!0, {}, a[s])),
                (N().validPositions[s].input = d.input),
                delete N().validPositions[r],
                r++)
              : w(s, d.match.def)
              ? !1 !== A(s, d.input || O(r), !0) &&
                (delete N().validPositions[r], r++, (l = !0))
              : P(r) || (r++, s--),
              s++;
          }
        }
        _(!0);
      }
      function h(e, t) {
        for (
          var i,
            n = e,
            o = C(),
            r = N().validPositions[o] || S(0)[0],
            s =
              void 0 !== r.alternation
                ? r.locator[r.alternation].toString().split(",")
                : [],
            a = 0;
          a < n.length &&
          (!(
            (i = n[a]).match &&
            ((R.greedy && !0 !== i.match.optionalQuantifier) ||
              ((!1 === i.match.optionality || !1 === i.match.newBlockMarker) &&
                !0 !== i.match.optionalQuantifier)) &&
            (void 0 === r.alternation ||
              r.alternation !== i.alternation ||
              (void 0 !== i.locator[r.alternation] &&
                E(i.locator[r.alternation].toString().split(","), s)))
          ) ||
            (!0 === t &&
              (null !== i.match.fn || /[0-9a-bA-Z]/.test(i.match.def))));
          a++
        );
        return i;
      }
      function f(e, t, i) {
        return N().validPositions[e] || h(S(e, t ? t.slice() : t, i));
      }
      function u(e) {
        return N().validPositions[e] ? N().validPositions[e] : S(e)[0];
      }
      function w(e, t) {
        for (var i = !1, n = S(e), o = 0; o < n.length; o++)
          if (n[o].match && n[o].match.def === t) {
            i = !0;
            break;
          }
        return i;
      }
      function S(O, e, t) {
        function $(A, P, e, t) {
          function M(e, i, t) {
            function r(i, n) {
              var o = 0 === K.inArray(i, n.matches);
              return (
                o ||
                  K.each(n.matches, function(e, t) {
                    if (!0 === t.isQuantifier && (o = r(i, n.matches[e - 1])))
                      return !1;
                  }),
                o
              );
            }
            function n(e, o, r) {
              var s, a;
              return (
                (N().tests[e] || N().validPositions[e]) &&
                  K.each(N().tests[e] || [N().validPositions[e]], function(
                    e,
                    t
                  ) {
                    var i = void 0 !== r ? r : t.alternation,
                      n =
                        void 0 !== t.locator[i]
                          ? t.locator[i].toString().indexOf(o)
                          : -1;
                    (void 0 === a || n < a) && -1 !== n && ((s = t), (a = n));
                  }),
                s
                  ? s.locator.slice((void 0 !== r ? r : s.alternation) + 1)
                  : void 0 !== r
                  ? n(e, o)
                  : void 0
              );
            }
            if (1e4 < D)
              throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " +
                N().mask;
            if (D === O && void 0 === e.matches)
              return j.push({ match: e, locator: i.reverse(), cd: z }), !0;
            if (void 0 !== e.matches) {
              if (e.isGroup && t !== e) {
                if ((e = M(A.matches[K.inArray(e, A.matches) + 1], i)))
                  return !0;
              } else if (e.isOptional) {
                var o = e;
                if ((e = $(e, P, i, t))) {
                  if (!r((F = j[j.length - 1].match), o)) return !0;
                  (I = !0), (D = O);
                }
              } else if (e.isAlternator) {
                var s,
                  a = e,
                  l = [],
                  d = j.slice(),
                  u = i.length,
                  c = 0 < P.length ? P.shift() : -1;
                if (-1 === c || "string" == typeof c) {
                  var p,
                    h = D,
                    f = P.slice(),
                    m = [];
                  if ("string" == typeof c) m = c.split(",");
                  else for (p = 0; p < a.matches.length; p++) m.push(p);
                  for (var g = 0; g < m.length; g++) {
                    if (
                      ((p = parseInt(m[g])),
                      (j = []),
                      (P = n(D, p, u) || f.slice()),
                      !0 !==
                        (e =
                          M(a.matches[p] || A.matches[p], [p].concat(i), t) ||
                          e) &&
                        void 0 !== e &&
                        m[m.length - 1] < a.matches.length)
                    ) {
                      var v = K.inArray(e, A.matches) + 1;
                      A.matches.length > v &&
                        ((e = M(
                          A.matches[v],
                          [v].concat(i.slice(1, i.length)),
                          t
                        )) &&
                          (m.push(v.toString()),
                          K.each(j, function(e, t) {
                            t.alternation = i.length - 1;
                          })));
                    }
                    (s = j.slice()), (D = h), (j = []);
                    for (var y = 0; y < s.length; y++) {
                      var b = s[y],
                        w = !1;
                      b.alternation = b.alternation || u;
                      for (var k = 0; k < l.length; k++) {
                        var x = l[k];
                        if (
                          ("string" != typeof c ||
                            -1 !==
                              K.inArray(
                                b.locator[b.alternation].toString(),
                                m
                              )) &&
                          (b.match.def === x.match.def ||
                            ((E = x),
                            null === (T = b).match.fn &&
                              null !== E.match.fn &&
                              E.match.fn.test(T.match.def, N(), O, !1, R, !1)))
                        ) {
                          (w = b.match.nativeDef === x.match.nativeDef),
                            b.alternation == x.alternation &&
                              -1 ===
                                x.locator[x.alternation]
                                  .toString()
                                  .indexOf(b.locator[b.alternation]) &&
                              ((x.locator[x.alternation] =
                                x.locator[x.alternation] +
                                "," +
                                b.locator[b.alternation]),
                              (x.alternation = b.alternation),
                              null == b.match.fn &&
                                ((x.na =
                                  x.na || b.locator[b.alternation].toString()),
                                -1 === x.na.indexOf(b.locator[b.alternation]) &&
                                  (x.na =
                                    x.na + "," + b.locator[b.alternation])));
                          break;
                        }
                      }
                      w || l.push(b);
                    }
                  }
                  "string" == typeof c &&
                    (l = K.map(l, function(e, t) {
                      if (isFinite(t)) {
                        var i = e.alternation,
                          n = e.locator[i].toString().split(",");
                        (e.locator[i] = void 0), (e.alternation = void 0);
                        for (var o = 0; o < n.length; o++)
                          -1 !== K.inArray(n[o], m) &&
                            (void 0 !== e.locator[i]
                              ? ((e.locator[i] += ","), (e.locator[i] += n[o]))
                              : (e.locator[i] = parseInt(n[o])),
                            (e.alternation = i));
                        if (void 0 !== e.locator[i]) return e;
                      }
                    })),
                    (j = d.concat(l)),
                    (D = O),
                    (I = 0 < j.length),
                    (P = f.slice());
                } else e = M(a.matches[c] || A.matches[c], [c].concat(i), t);
                if (e) return !0;
              } else if (
                e.isQuantifier &&
                t !== A.matches[K.inArray(e, A.matches) - 1]
              )
                for (
                  var _ = e, C = 0 < P.length ? P.shift() : 0;
                  C < (isNaN(_.quantifier.max) ? C + 1 : _.quantifier.max) &&
                  D <= O;
                  C++
                ) {
                  var S = A.matches[K.inArray(_, A.matches) - 1];
                  if ((e = M(S, [C].concat(i), S))) {
                    if (
                      (((F = j[j.length - 1].match).optionalQuantifier =
                        C > _.quantifier.min - 1),
                      r(F, S))
                    ) {
                      if (C > _.quantifier.min - 1) {
                        (I = !0), (D = O);
                        break;
                      }
                      return !0;
                    }
                    return !0;
                  }
                }
              else if ((e = $(e, P, i, t))) return !0;
            } else D++;
            var T, E;
          }
          for (var i = 0 < P.length ? P.shift() : 0; i < A.matches.length; i++)
            if (!0 !== A.matches[i].isQuantifier) {
              var n = M(A.matches[i], [i].concat(e), t);
              if (n && D === O) return n;
              if (O < D) break;
            }
        }
        function i(e) {
          return R.keepStatic &&
            0 < O &&
            e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) &&
            !0 !== e[0].match.optionality &&
            !0 !== e[0].match.optionalQuantifier &&
            null === e[0].match.fn &&
            !/[0-9a-bA-Z]/.test(e[0].match.def)
            ? [h(e)]
            : e;
        }
        var F,
          n,
          o,
          r = N().maskToken,
          D = e ? t : 0,
          s = e ? e.slice() : [0],
          j = [],
          I = !1,
          z = e ? e.join("") : "";
        if (-1 < O) {
          if (void 0 === e) {
            for (
              var a, l = O - 1;
              void 0 === (a = N().validPositions[l] || N().tests[l]) && -1 < l;

            )
              l--;
            void 0 !== a &&
              -1 < l &&
              ((n = a),
              (o = []),
              K.isArray(n) || (n = [n]),
              0 < n.length &&
                (void 0 === n[0].alternation
                  ? 0 === (o = h(n.slice()).locator.slice()).length &&
                    (o = n[0].locator.slice())
                  : K.each(n, function(e, t) {
                      if ("" !== t.def)
                        if (0 === o.length) o = t.locator.slice();
                        else
                          for (var i = 0; i < o.length; i++)
                            t.locator[i] &&
                              -1 === o[i].toString().indexOf(t.locator[i]) &&
                              (o[i] += "," + t.locator[i]);
                    })),
              (z = (s = o).join("")),
              (D = l));
          }
          if (N().tests[O] && N().tests[O][0].cd === z) return i(N().tests[O]);
          for (var d = s.shift(); d < r.length; d++) {
            if (($(r[d], s, [d]) && D === O) || O < D) break;
          }
        }
        return (
          (0 === j.length || I) &&
            j.push({
              match: {
                fn: null,
                cardinality: 0,
                optionality: !0,
                casing: null,
                def: "",
                placeholder: ""
              },
              locator: [],
              cd: z
            }),
          void 0 !== e && N().tests[O]
            ? i(K.extend(!0, [], j))
            : ((N().tests[O] = K.extend(!0, [], j)), i(N().tests[O]))
        );
      }
      function m() {
        return (
          void 0 === N()._buffer &&
            ((N()._buffer = i(!1, 1)),
            void 0 === N().buffer && N()._buffer.slice()),
          N()._buffer
        );
      }
      function k(e) {
        return (
          (void 0 !== N().buffer && !0 !== e) || (N().buffer = i(!0, C(), !0)),
          N().buffer
        );
      }
      function T(e, t, i) {
        var n;
        if (!0 === e) _(), (e = 0), (t = i.length);
        else for (n = e; n < t; n++) delete N().validPositions[n];
        for (n = e; n < t; n++)
          _(!0), i[n] !== R.skipOptionalPartCharacter && A(n, i[n], !0, !0);
      }
      function E(e, t) {
        for (
          var i = R.greedy ? t : t.slice(0, 1), n = !1, o = 0;
          o < e.length;
          o++
        )
          if (-1 !== K.inArray(e[o], i)) {
            n = !0;
            break;
          }
        return n;
      }
      function A(m, e, t, x, i) {
        function g(e) {
          var t = I
            ? 1 < e.begin - e.end || (e.begin - e.end == 1 && R.insertMode)
            : 1 < e.end - e.begin || (e.end - e.begin == 1 && R.insertMode);
          return t && 0 === e.begin && e.end === N().maskLength ? "full" : t;
        }
        function o(c, p, h) {
          var f = !1;
          return (
            K.each(S(c), function(e, t) {
              for (
                var i = t.match, n = p ? 1 : 0, o = "", r = i.cardinality;
                n < r;
                r--
              )
                o += ((s = c - (r - 1)),
                void 0 === N().validPositions[s]
                  ? O(s)
                  : N().validPositions[s].input);
              var s;
              if (
                (p && (o += p),
                k(!0),
                !1 !==
                  (f =
                    null != i.fn
                      ? i.fn.test(o, N(), c, h, R, g(m))
                      : (p === i.def || p === R.skipOptionalPartCharacter) &&
                        "" !== i.def && { c: i.placeholder || i.def, pos: c }))
              ) {
                var a = void 0 !== f.c ? f.c : p;
                a =
                  a === R.skipOptionalPartCharacter && null === i.fn
                    ? i.placeholder || i.def
                    : a;
                var l = c,
                  d = k();
                if (
                  (void 0 !== f.remove &&
                    (K.isArray(f.remove) || (f.remove = [f.remove]),
                    K.each(
                      f.remove.sort(function(e, t) {
                        return t - e;
                      }),
                      function(e, t) {
                        b(t, t + 1, !0);
                      }
                    )),
                  void 0 !== f.insert &&
                    (K.isArray(f.insert) || (f.insert = [f.insert]),
                    K.each(
                      f.insert.sort(function(e, t) {
                        return e - t;
                      }),
                      function(e, t) {
                        A(t.pos, t.c, !0, x);
                      }
                    )),
                  f.refreshFromBuffer)
                ) {
                  var u = f.refreshFromBuffer;
                  if (
                    (T((h = !0) === u ? u : u.start, u.end, d),
                    void 0 === f.pos && void 0 === f.c)
                  )
                    return (f.pos = C()), !1;
                  if ((l = void 0 !== f.pos ? f.pos : c) !== c)
                    return (f = K.extend(f, A(l, a, !0, x))), !1;
                } else if (
                  !0 !== f &&
                  void 0 !== f.pos &&
                  f.pos !== c &&
                  ((l = f.pos), T(c, l, k().slice()), l !== c)
                )
                  return (f = K.extend(f, A(l, a, !0))), !1;
                return (
                  (!0 === f || void 0 !== f.pos || void 0 !== f.c) &&
                  (0 < e && _(!0),
                  v(
                    l,
                    K.extend({}, t, {
                      input: (function(e, t, i) {
                        switch (R.casing || t.casing) {
                          case "upper":
                            e = e.toUpperCase();
                            break;
                          case "lower":
                            e = e.toLowerCase();
                            break;
                          case "title":
                            var n = N().validPositions[i - 1];
                            e =
                              0 === i ||
                              (n &&
                                n.input ===
                                  String.fromCharCode(Q.keyCode.SPACE))
                                ? e.toUpperCase()
                                : e.toLowerCase();
                        }
                        return e;
                      })(a, i, l)
                    }),
                    x,
                    g(m)
                  ) || (f = !1),
                  !1)
                );
              }
            }),
            f
          );
        }
        function n(e, t) {
          var i = N().validPositions[t];
          if (i)
            for (var n = i.locator, o = n.length, r = e; r < t; r++)
              if (void 0 === N().validPositions[r] && !P(r, !0)) {
                var s = S(r),
                  a = s[0],
                  l = -1;
                K.each(s, function(e, t) {
                  for (
                    var i = 0;
                    i < o &&
                    void 0 !== t.locator[i] &&
                    E(
                      t.locator[i].toString().split(","),
                      n[i].toString().split(",")
                    );
                    i++
                  )
                    l < i && ((l = i), (a = t));
                }),
                  v(
                    r,
                    K.extend({}, a, {
                      input: a.match.placeholder || a.match.def
                    }),
                    !0
                  );
              }
        }
        function v(e, t, i, n) {
          if (
            n ||
            (R.insertMode && void 0 !== N().validPositions[e] && void 0 === i)
          ) {
            var o,
              r = K.extend(!0, {}, N().validPositions),
              s = C(void 0, !0);
            for (o = e; o <= s; o++) delete N().validPositions[o];
            N().validPositions[e] = K.extend(!0, {}, t);
            var a,
              l = !0,
              d = N().validPositions,
              u = !1,
              c = N().maskLength;
            for (o = a = e; o <= s; o++) {
              var p = r[o];
              if (void 0 !== p)
                for (
                  var h = a;
                  h < N().maskLength &&
                  ((null === p.match.fn &&
                    d[o] &&
                    (!0 === d[o].match.optionalQuantifier ||
                      !0 === d[o].match.optionality)) ||
                    null != p.match.fn);

                ) {
                  if ((h++, !1 === u && r[h] && r[h].match.def === p.match.def))
                    (N().validPositions[h] = K.extend(!0, {}, r[h])),
                      (N().validPositions[h].input = p.input),
                      y(h),
                      (a = h),
                      (l = !0);
                  else if (w(h, p.match.def)) {
                    var f = A(h, p.input, !0, !0);
                    (l = !1 !== f),
                      (a = f.caret || f.insert ? C() : h),
                      (u = !0);
                  } else l = !0 === p.generatedInput;
                  if ((N().maskLength < c && (N().maskLength = c), l)) break;
                }
              if (!l) break;
            }
            if (!l)
              return (N().validPositions = K.extend(!0, {}, r)), _(!0), !1;
          } else N().validPositions[e] = K.extend(!0, {}, t);
          return _(!0), !0;
        }
        function y(e) {
          for (var t = e - 1; -1 < t && !N().validPositions[t]; t--);
          var i, n;
          for (t++; t < e; t++)
            void 0 === N().validPositions[t] &&
              (!1 === R.jitMasking || R.jitMasking > t) &&
              ("" ===
                (n = S(t, f(t - 1).locator, t - 1).slice())[n.length - 1].match
                  .def && n.pop(),
              (i = h(n)) &&
                (i.match.def === R.radixPointDefinitionSymbol ||
                  !P(t, !0) ||
                  (K.inArray(R.radixPoint, k()) < t &&
                    i.match.fn &&
                    i.match.fn.test(O(t), N(), t, !1, R))) &&
                (!1 !==
                  (s = o(
                    t,
                    i.match.placeholder ||
                      (null == i.match.fn
                        ? i.match.def
                        : "" !== O(t)
                        ? O(t)
                        : k()[t]),
                    !0
                  )) &&
                  (N().validPositions[s.pos || t].generatedInput = !0)));
        }
        t = !0 === t;
        var r = m;
        void 0 !== m.begin && (r = I && !g(m) ? m.end : m.begin);
        var s = !1,
          a = K.extend(!0, {}, N().validPositions);
        if (
          (y(r),
          g(m) && ($(void 0, Q.keyCode.DELETE, m), (r = N().p)),
          r < N().maskLength &&
            ((s = o(r, e, t)), (!t || !0 === x) && !1 === s))
        ) {
          var l = N().validPositions[r];
          if (
            !l ||
            null !== l.match.fn ||
            (l.match.def !== e && e !== R.skipOptionalPartCharacter)
          ) {
            if (
              (R.insertMode || void 0 === N().validPositions[M(r)]) &&
              !P(r, !0)
            ) {
              var d = S(r).slice();
              "" === d[d.length - 1].match.def && d.pop();
              var u = h(d, !0);
              u &&
                null === u.match.fn &&
                (o(r, (u = u.match.placeholder || u.match.def), t),
                (N().validPositions[r].generatedInput = !0));
              for (var c = r + 1, p = M(r); c <= p; c++)
                if (!1 !== (s = o(c, e, t))) {
                  n(r, void 0 !== s.pos ? s.pos : c), (r = c);
                  break;
                }
            }
          } else s = { caret: M(r) };
        }
        return (
          !1 === s &&
            R.keepStatic &&
            !t &&
            !0 !== i &&
            (s = (function(u, c, p) {
              var e,
                h,
                t,
                i,
                f,
                m,
                g,
                v,
                y = K.extend(!0, {}, N().validPositions),
                b = !1,
                n = C();
              for (i = N().validPositions[n]; 0 <= n; n--)
                if ((t = N().validPositions[n]) && void 0 !== t.alternation) {
                  if (
                    ((e = n),
                    (h = N().validPositions[e].alternation),
                    i.locator[t.alternation] !== t.locator[t.alternation])
                  )
                    break;
                  i = t;
                }
              if (void 0 !== h) {
                v = parseInt(e);
                var w =
                  void 0 !== i.locator[i.alternation || h]
                    ? i.locator[i.alternation || h]
                    : g[0];
                0 < w.length && (w = w.split(",")[0]);
                var k = N().validPositions[v],
                  o = N().validPositions[v - 1];
                K.each(S(v, o ? o.locator : void 0, v - 1), function(e, t) {
                  g = t.locator[h] ? t.locator[h].toString().split(",") : [];
                  for (var i = 0; i < g.length; i++) {
                    var n = [],
                      o = 0,
                      r = 0,
                      s = !1;
                    if (
                      w < g[i] &&
                      (void 0 === t.na ||
                        -1 === K.inArray(g[i], t.na.split(",")))
                    ) {
                      N().validPositions[v] = K.extend(!0, {}, t);
                      var a = N().validPositions[v].locator;
                      for (
                        N().validPositions[v].locator[h] = parseInt(g[i]),
                          null == t.match.fn
                            ? (k.input !== t.match.def &&
                                (s = !0) !== k.generatedInput &&
                                n.push(k.input),
                              r++,
                              (N().validPositions[
                                v
                              ].generatedInput = !/[0-9a-bA-Z]/.test(
                                t.match.def
                              )),
                              (N().validPositions[v].input = t.match.def))
                            : (N().validPositions[v].input = k.input),
                          f = v + 1;
                        f < C(void 0, !0) + 1;
                        f++
                      )
                        (m = N().validPositions[f]) &&
                        !0 !== m.generatedInput &&
                        /[0-9a-bA-Z]/.test(m.input)
                          ? n.push(m.input)
                          : f < u && o++,
                          delete N().validPositions[f];
                      for (
                        s && n[0] === t.match.def && n.shift(), _(!0), b = !0;
                        0 < n.length;

                      ) {
                        var l = n.shift();
                        if (
                          l !== R.skipOptionalPartCharacter &&
                          !(b = A(C(void 0, !0) + 1, l, !1, x, !0))
                        )
                          break;
                      }
                      if (b) {
                        N().validPositions[v].locator = a;
                        var d = C(u) + 1;
                        for (f = v + 1; f < C() + 1; f++)
                          (void 0 === (m = N().validPositions[f]) ||
                            null == m.match.fn) &&
                            f < u + (r - o) &&
                            r++;
                        b = A(d < (u += r - o) ? d : u, c, p, x, !0);
                      }
                      if (b) return !1;
                      _(), (N().validPositions = K.extend(!0, {}, y));
                    }
                  }
                });
              }
              return b;
            })(r, e, t)),
          !0 === s && (s = { pos: r }),
          K.isFunction(R.postValidation) &&
            !1 !== s &&
            !t &&
            !0 !== x &&
            (s = !!R.postValidation(k(!0), s, R) && s),
          void 0 === s.pos && (s.pos = r),
          !1 === s && (_(!0), (N().validPositions = K.extend(!0, {}, a))),
          s
        );
      }
      function P(e, t) {
        var i;
        if (
          (t
            ? "" === (i = f(e).match).def && (i = u(e).match)
            : (i = u(e).match),
          null != i.fn)
        )
          return i.fn;
        if (!0 !== t && -1 < e) {
          var n = S(e);
          return n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0);
        }
        return !1;
      }
      function M(e, t) {
        var i = N().maskLength;
        if (i <= e) return i;
        for (
          var n = e;
          ++n < i &&
          ((!0 === t && (!0 !== u(n).match.newBlockMarker || !P(n))) ||
            (!0 !== t && !P(n)));

        );
        return n;
      }
      function g(e, t) {
        var i,
          n = e;
        if (n <= 0) return 0;
        for (
          ;
          0 < --n &&
          ((!0 === t && !0 !== u(n).match.newBlockMarker) ||
            (!0 !== t &&
              !P(n) &&
              ((i = S(n)).length < 2 ||
                (2 === i.length && "" === i[1].match.def))));

        );
        return n;
      }
      function v(e, t, i, n, o) {
        if (n && K.isFunction(R.onBeforeWrite)) {
          var r = R.onBeforeWrite(n, t, i, R);
          if (r) {
            if (r.refreshFromBuffer) {
              var s = r.refreshFromBuffer;
              T(!0 === s ? s : s.start, s.end, r.buffer || t), (t = k(!0));
            }
            void 0 !== i && (i = void 0 !== r.caret ? r.caret : i);
          }
        }
        e.inputmask._valueSet(t.join("")),
          void 0 === i || (void 0 !== n && "blur" === n.type)
            ? p(e, t, i)
            : y(e, i),
          !0 === o && ((H = !0), K(e).trigger("input"));
      }
      function O(e, t) {
        if (void 0 !== (t = t || u(e).match).placeholder) return t.placeholder;
        if (null === t.fn) {
          if (-1 < e && void 0 === N().validPositions[e]) {
            var i,
              n = S(e),
              o = [];
            if (n.length > 1 + ("" === n[n.length - 1].match.def ? 1 : 0))
              for (var r = 0; r < n.length; r++)
                if (
                  !0 !== n[r].match.optionality &&
                  !0 !== n[r].match.optionalQuantifier &&
                  (null === n[r].match.fn ||
                    void 0 === i ||
                    !1 !== n[r].match.fn.test(i.match.def, N(), e, !0, R)) &&
                  (o.push(n[r]),
                  null === n[r].match.fn && (i = n[r]),
                  1 < o.length && /[0-9a-bA-Z]/.test(o[0].match.def))
                )
                  return R.placeholder.charAt(e % R.placeholder.length);
          }
          return t.def;
        }
        return R.placeholder.charAt(e % R.placeholder.length);
      }
      function c(l, e, d, t, i, n) {
        var o = t.slice(),
          u = "",
          c = 0,
          p = void 0;
        if ((_(), (N().p = M(-1)), !d))
          if (!0 !== R.autoUnmask) {
            var r = m()
                .slice(0, M(-1))
                .join(""),
              s = o.join("").match(new RegExp("^" + Q.escapeRegex(r), "g"));
            s && 0 < s.length && (o.splice(0, s.length * r.length), (c = M(c)));
          } else c = M(c);
        if (
          (K.each(o, function(e, t) {
            if (void 0 !== t) {
              var i = new K.Event("keypress");
              (i.which = t.charCodeAt(0)), (u += t);
              var n = C(void 0, !0),
                o = N().validPositions[n],
                r = f(n + 1, o ? o.locator.slice() : void 0, n);
              if (
                !(function() {
                  var e = !1,
                    t = m()
                      .slice(c, M(c))
                      .join("")
                      .indexOf(u);
                  if (-1 !== t && !P(c)) {
                    e = !0;
                    for (var i = m().slice(c, c + t), n = 0; n < i.length; n++)
                      if (" " !== i[n]) {
                        e = !1;
                        break;
                      }
                  }
                  return e;
                })() ||
                d ||
                R.autoUnmask
              ) {
                var s = d
                  ? e
                  : null == r.match.fn && r.match.optionality && n + 1 < N().p
                  ? n + 1
                  : N().p;
                (p = B.keypressEvent.call(l, i, !0, !1, d, s)),
                  (c = s + 1),
                  (u = "");
              } else p = B.keypressEvent.call(l, i, !0, !1, !0, n + 1);
              if (
                !d &&
                K.isFunction(R.onBeforeWrite) &&
                ((p = R.onBeforeWrite(i, k(), p.forwardPosition, R)) &&
                  p.refreshFromBuffer)
              ) {
                var a = p.refreshFromBuffer;
                T(!0 === a ? a : a.start, a.end, p.buffer),
                  _(!0),
                  p.caret && (N().p = p.caret);
              }
            }
          }),
          e)
        ) {
          var a = void 0,
            h = C();
          document.activeElement === l &&
            (i || p) &&
            ((a = y(l).begin),
            i && !1 === p && (a = M(C(a))),
            p &&
              !0 !== n &&
              (a < h + 1 || -1 === h) &&
              (a =
                R.numericInput && void 0 === p.caret
                  ? g(p.forwardPosition)
                  : p.forwardPosition)),
            v(l, k(), a, i || new K.Event("checkval"));
        }
      }
      function n(e) {
        if (e && void 0 === e.inputmask) return e.value;
        var t = [],
          i = N().validPositions;
        for (var n in i)
          i[n].match && null != i[n].match.fn && t.push(i[n].input);
        var o = 0 === t.length ? "" : (I ? t.reverse() : t).join("");
        if (K.isFunction(R.onUnMask)) {
          var r = (I
            ? k()
                .slice()
                .reverse()
            : k()
          ).join("");
          o = R.onUnMask(r, o, R) || o;
        }
        return o;
      }
      function y(e, t, i, n) {
        function o(e) {
          !0 === n ||
            !I ||
            "number" != typeof e ||
            (R.greedy && "" === R.placeholder) ||
            (e = k().join("").length - e);
          return e;
        }
        var r;
        if ("number" != typeof t)
          return (
            e.setSelectionRange
              ? ((t = e.selectionStart), (i = e.selectionEnd))
              : window.getSelection
              ? ((r = window.getSelection().getRangeAt(0))
                  .commonAncestorContainer.parentNode !== e &&
                  r.commonAncestorContainer !== e) ||
                ((t = r.startOffset), (i = r.endOffset))
              : document.selection &&
                document.selection.createRange &&
                (i =
                  (t =
                    0 -
                    (r = document.selection.createRange())
                      .duplicate()
                      .moveStart(
                        "character",
                        -e.inputmask._valueGet().length
                      )) + r.text.length),
            { begin: o(t), end: o(i) }
          );
        (t = o(t)), (i = "number" == typeof (i = o(i)) ? i : t);
        var s =
          parseInt(
            ((e.ownerDocument.defaultView || window).getComputedStyle
              ? (e.ownerDocument.defaultView || window).getComputedStyle(
                  e,
                  null
                )
              : e.currentStyle
            ).fontSize
          ) * i;
        if (
          ((e.scrollLeft = s > e.scrollWidth ? s : 0),
          Z || !1 !== R.insertMode || t !== i || i++,
          e.setSelectionRange)
        )
          (e.selectionStart = t), (e.selectionEnd = i);
        else if (window.getSelection) {
          if (
            ((r = document.createRange()),
            void 0 === e.firstChild || null === e.firstChild)
          ) {
            var a = document.createTextNode("");
            e.appendChild(a);
          }
          r.setStart(
            e.firstChild,
            t < e.inputmask._valueGet().length
              ? t
              : e.inputmask._valueGet().length
          ),
            r.setEnd(
              e.firstChild,
              i < e.inputmask._valueGet().length
                ? i
                : e.inputmask._valueGet().length
            ),
            r.collapse(!0);
          var l = window.getSelection();
          l.removeAllRanges(), l.addRange(r);
        } else
          e.createTextRange &&
            ((r = e.createTextRange()).collapse(!0),
            r.moveEnd("character", i),
            r.moveStart("character", t),
            r.select());
        p(e, void 0, { begin: t, end: i });
      }
      function s(e) {
        var t,
          i,
          n = k(),
          o = n.length,
          r = C(),
          s = {},
          a = N().validPositions[r],
          l = void 0 !== a ? a.locator.slice() : void 0;
        for (t = r + 1; t < n.length; t++)
          (l = (i = f(t, l, t - 1)).locator.slice()),
            (s[t] = K.extend(!0, {}, i));
        var d =
          a && void 0 !== a.alternation ? a.locator[a.alternation] : void 0;
        for (
          t = o - 1;
          r < t &&
          (((i = s[t]).match.optionality ||
            i.match.optionalQuantifier ||
            (d &&
              ((d !== s[t].locator[a.alternation] && null != i.match.fn) ||
                (null === i.match.fn &&
                  i.locator[a.alternation] &&
                  E(
                    i.locator[a.alternation].toString().split(","),
                    d.toString().split(",")
                  ) &&
                  "" !== S(t)[0].def)))) &&
            n[t] === O(t, i.match));
          t--
        )
          o--;
        return e ? { l: o, def: s[o] ? s[o].match : void 0 } : o;
      }
      function l(e) {
        for (var t = s(), i = e.length - 1; t < i && !P(i); i--);
        return e.splice(t, i + 1 - t), e;
      }
      function x(e) {
        if (K.isFunction(R.isComplete)) return R.isComplete(e, R);
        if ("*" !== R.repeat) {
          var t = !1,
            i = s(!0),
            n = g(i.l);
          if (
            void 0 === i.def ||
            i.def.newBlockMarker ||
            i.def.optionality ||
            i.def.optionalQuantifier
          ) {
            t = !0;
            for (var o = 0; o <= n; o++) {
              var r = f(o).match;
              if (
                (null !== r.fn &&
                  void 0 === N().validPositions[o] &&
                  !0 !== r.optionality &&
                  !0 !== r.optionalQuantifier) ||
                (null === r.fn && e[o] !== O(o, r))
              ) {
                t = !1;
                break;
              }
            }
          }
          return t;
        }
      }
      function $(s, e, t, i) {
        if (
          (R.numericInput || I) &&
          (e === Q.keyCode.BACKSPACE
            ? (e = Q.keyCode.DELETE)
            : e === Q.keyCode.DELETE && (e = Q.keyCode.BACKSPACE),
          I)
        ) {
          var n = t.end;
          (t.end = t.begin), (t.begin = n);
        }
        e === Q.keyCode.BACKSPACE &&
        (t.end - t.begin < 1 || !1 === R.insertMode)
          ? ((t.begin = g(t.begin)),
            void 0 === N().validPositions[t.begin] ||
              (N().validPositions[t.begin].input !== R.groupSeparator &&
                N().validPositions[t.begin].input !== R.radixPoint) ||
              t.begin--)
          : e === Q.keyCode.DELETE &&
            t.begin === t.end &&
            ((t.end = P(t.end, !0) ? t.end + 1 : M(t.end) + 1),
            void 0 === N().validPositions[t.begin] ||
              (N().validPositions[t.begin].input !== R.groupSeparator &&
                N().validPositions[t.begin].input !== R.radixPoint) ||
              t.end++),
          b(t.begin, t.end, !1, i),
          !0 !== i &&
            (function() {
              if (R.keepStatic) {
                for (
                  var e = [],
                    t = C(-1, !0),
                    i = K.extend(!0, {}, N().validPositions),
                    n = N().validPositions[t];
                  0 <= t;
                  t--
                ) {
                  var o = N().validPositions[t];
                  if (o) {
                    if (
                      (!0 !== o.generatedInput &&
                        /[0-9a-bA-Z]/.test(o.input) &&
                        e.push(o.input),
                      delete N().validPositions[t],
                      void 0 !== o.alternation &&
                        o.locator[o.alternation] !== n.locator[o.alternation])
                    )
                      break;
                    n = o;
                  }
                }
                if (-1 < t)
                  for (N().p = M(C(-1, !0)); 0 < e.length; ) {
                    var r = new K.Event("keypress");
                    (r.which = e.pop().charCodeAt(0)),
                      B.keypressEvent.call(s, r, !0, !1, !1, N().p);
                  }
                else N().validPositions = K.extend(!0, {}, i);
              }
            })();
        var o = C(t.begin, !0);
        o < t.begin ? (N().p = M(o)) : !0 !== i && (N().p = t.begin);
      }
      function o(d) {
        function t() {
          (j.style.position = "absolute"),
            (j.style.top = i.top + "px"),
            (j.style.left = i.left + "px"),
            (j.style.width =
              parseInt(d.offsetWidth) -
              parseInt(u.paddingLeft) -
              parseInt(u.paddingRight) -
              parseInt(u.borderLeftWidth) -
              parseInt(u.borderRightWidth) +
              "px"),
            (j.style.height =
              parseInt(d.offsetHeight) -
              parseInt(u.paddingTop) -
              parseInt(u.paddingBottom) -
              parseInt(u.borderTopWidth) -
              parseInt(u.borderBottomWidth) +
              "px"),
            (j.style.lineHeight = j.style.height),
            (j.style.zIndex = isNaN(u.zIndex) ? -1 : u.zIndex - 1),
            (j.style.webkitAppearance = "textfield"),
            (j.style.mozAppearance = "textfield"),
            (j.style.Appearance = "textfield");
        }
        var i = K(d).position(),
          u = (d.ownerDocument.defaultView || window).getComputedStyle(d, null);
        for (var e in (d.parentNode,
        (j = document.createElement("div")),
        document.body.appendChild(j),
        u))
          isNaN(e) &&
            "cssText" !== e &&
            -1 == e.indexOf("webkit") &&
            (j.style[e] = u[e]);
        (d.style.backgroundColor = "transparent"),
          (d.style.color = "transparent"),
          (d.style.webkitAppearance = "caret"),
          (d.style.mozAppearance = "caret"),
          (d.style.Appearance = "caret"),
          t(),
          K(window).on("resize", function(e) {
            (i = K(d).position()),
              (u = (d.ownerDocument.defaultView || window).getComputedStyle(
                d,
                null
              )),
              t();
          }),
          K(d).on("click", function(e) {
            return (
              y(
                d,
                (function(e) {
                  var t,
                    i = document.createElement("span");
                  for (var n in u)
                    isNaN(n) && -1 !== n.indexOf("font") && (i.style[n] = u[n]);
                  (i.style.textTransform = u.textTransform),
                    (i.style.letterSpacing = u.letterSpacing),
                    (i.style.position = "absolute"),
                    (i.style.height = "auto"),
                    (i.style.width = "auto"),
                    (i.style.visibility = "hidden"),
                    (i.style.whiteSpace = "nowrap"),
                    document.body.appendChild(i);
                  var o,
                    r = d.inputmask._valueGet(),
                    s = 0;
                  for (t = 0, o = r.length; t <= o; t++) {
                    if (
                      ((i.innerHTML += r.charAt(t) || "_"), i.offsetWidth >= e)
                    ) {
                      var a = e - s,
                        l = i.offsetWidth - e;
                      (i.innerHTML = r.charAt(t)),
                        (t = (a -= i.offsetWidth / 3) < l ? t - 1 : t);
                      break;
                    }
                    s = i.offsetWidth;
                  }
                  return document.body.removeChild(i), t;
                })(e.clientX)
              ),
              B.clickEvent.call(this, [e])
            );
          }),
          K(d).on("keydown", function(e) {
            e.shiftKey ||
              !1 === R.insertMode ||
              setTimeout(function() {
                p(d);
              }, 0);
          });
      }
      function p(e, t, i) {
        function n() {
          r || (null !== a.fn && void 0 !== l.input)
            ? r &&
              null !== a.fn &&
              void 0 !== l.input &&
              ((r = !1), (o += "</span>"))
            : ((r = !0), (o += "<span class='im-static''>"));
        }
        if (void 0 !== j) {
          (t = t || k()),
            void 0 === i
              ? (i = y(e))
              : void 0 === i.begin && (i = { begin: i, end: i });
          var o = "",
            r = !1;
          if ("" != t)
            for (
              var s, a, l, d = 0, u = C();
              d === i.begin &&
                document.activeElement === e &&
                (o +=
                  "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),
                N().validPositions[d]
                  ? ((l = N().validPositions[d]),
                    (a = l.match),
                    (s = l.locator.slice()),
                    n(),
                    (o += l.input))
                  : ((l = f(d, s, d - 1)),
                    (a = l.match),
                    (s = l.locator.slice()),
                    (!1 === R.jitMasking ||
                      d < u ||
                      ("number" == typeof R.jitMasking &&
                        isFinite(R.jitMasking) &&
                        R.jitMasking > d)) &&
                      (n(), (o += O(d, a)))),
                d++,
                ((void 0 === D || d < D) && (null !== a.fn || "" !== a.def)) ||
                  d < u;

            );
          j.innerHTML = o;
        }
      }
      (t = t || this.maskset), (R = R || this.opts);
      var F,
        r,
        D,
        j,
        a,
        d = this.el,
        I = this.isRTL,
        z = !1,
        H = !1,
        L = !1,
        W = !1,
        V = {
          on: function(e, t, r) {
            var i = function(e) {
              if (void 0 === this.inputmask && "FORM" !== this.nodeName) {
                var t = K.data(this, "_inputmask_opts");
                t ? new Q(t).mask(this) : V.off(this);
              } else {
                if (
                  "setvalue" === e.type ||
                  !(
                    this.disabled ||
                    (this.readOnly &&
                      !(
                        ("keydown" === e.type &&
                          e.ctrlKey &&
                          67 === e.keyCode) ||
                        (!1 === R.tabThrough && e.keyCode === Q.keyCode.TAB)
                      ))
                  )
                ) {
                  switch (e.type) {
                    case "input":
                      if (!0 === H) return (H = !1), e.preventDefault();
                      break;
                    case "keydown":
                      H = z = !1;
                      break;
                    case "keypress":
                      if (!0 === z) return e.preventDefault();
                      z = !0;
                      break;
                    case "click":
                      if (J || ee) {
                        var i = this,
                          n = arguments;
                        return (
                          setTimeout(function() {
                            r.apply(i, n);
                          }, 0),
                          !1
                        );
                      }
                  }
                  var o = r.apply(this, arguments);
                  return (
                    !1 === o && (e.preventDefault(), e.stopPropagation()), o
                  );
                }
                e.preventDefault();
              }
            };
            (e.inputmask.events[t] = e.inputmask.events[t] || []),
              e.inputmask.events[t].push(i),
              -1 !== K.inArray(t, ["submit", "reset"])
                ? null != e.form && K(e.form).on(t, i)
                : K(e).on(t, i);
          },
          off: function(n, e) {
            var t;
            n.inputmask &&
              n.inputmask.events &&
              (e
                ? ((t = [])[e] = n.inputmask.events[e])
                : (t = n.inputmask.events),
              K.each(t, function(e, t) {
                for (; 0 < t.length; ) {
                  var i = t.pop();
                  -1 !== K.inArray(e, ["submit", "reset"])
                    ? null != n.form && K(n.form).off(e, i)
                    : K(n).off(e, i);
                }
                delete n.inputmask.events[e];
              }));
          }
        },
        B = {
          keydownEvent: function(e) {
            var t,
              i,
              n,
              o,
              r = this,
              s = K(r),
              a = e.keyCode,
              l = y(r);
            if (
              a === Q.keyCode.BACKSPACE ||
              a === Q.keyCode.DELETE ||
              (ee && a === Q.keyCode.BACKSPACE_SAFARI) ||
              (e.ctrlKey &&
                a === Q.keyCode.X &&
                ((t = "cut"),
                (i = document.createElement("input")),
                (o = (n = "on" + t) in i) ||
                  (i.setAttribute(n, "return;"),
                  (o = "function" == typeof i[n])),
                (i = null),
                !o))
            )
              e.preventDefault(),
                $(r, a, l),
                v(r, k(!0), N().p, e, r.inputmask._valueGet() !== k().join("")),
                r.inputmask._valueGet() === m().join("")
                  ? s.trigger("cleared")
                  : !0 === x(k()) && s.trigger("complete");
            else if (a === Q.keyCode.END || a === Q.keyCode.PAGE_DOWN) {
              e.preventDefault();
              var d = M(C());
              R.insertMode || d !== N().maskLength || e.shiftKey || d--,
                y(r, e.shiftKey ? l.begin : d, d, !0);
            } else
              (a === Q.keyCode.HOME && !e.shiftKey) || a === Q.keyCode.PAGE_UP
                ? (e.preventDefault(), y(r, 0, e.shiftKey ? l.begin : 0, !0))
                : ((R.undoOnEscape && a === Q.keyCode.ESCAPE) ||
                    (90 === a && e.ctrlKey)) &&
                  !0 !== e.altKey
                ? (c(r, !0, !1, F.split("")), s.trigger("click"))
                : a !== Q.keyCode.INSERT || e.shiftKey || e.ctrlKey
                ? !0 === R.tabThrough && a === Q.keyCode.TAB
                  ? (!0 === e.shiftKey
                      ? (null === u(l.begin).match.fn && (l.begin = M(l.begin)),
                        (l.end = g(l.begin, !0)),
                        (l.begin = g(l.end, !0)))
                      : ((l.begin = M(l.begin, !0)),
                        (l.end = M(l.begin, !0)),
                        l.end < N().maskLength && l.end--),
                    l.begin < N().maskLength &&
                      (e.preventDefault(), y(r, l.begin, l.end)))
                  : e.shiftKey ||
                    (!1 === R.insertMode &&
                      (a === Q.keyCode.RIGHT
                        ? setTimeout(function() {
                            var e = y(r);
                            y(r, e.begin);
                          }, 0)
                        : a === Q.keyCode.LEFT &&
                          setTimeout(function() {
                            var e = y(r);
                            y(r, I ? e.begin + 1 : e.begin - 1);
                          }, 0)))
                : ((R.insertMode = !R.insertMode),
                  y(
                    r,
                    R.insertMode || l.begin !== N().maskLength
                      ? l.begin
                      : l.begin - 1
                  ));
            R.onKeyDown.call(this, e, k(), y(r).begin, R),
              (L = -1 !== K.inArray(a, R.ignorables));
          },
          keypressEvent: function(e, t, i, n, o) {
            var r = K(this),
              s = e.which || e.charCode || e.keyCode;
            if (
              !(!0 === t || (e.ctrlKey && e.altKey)) &&
              (e.ctrlKey || e.metaKey || L)
            )
              return (
                s === Q.keyCode.ENTER &&
                  F !== k().join("") &&
                  ((F = k().join("")),
                  setTimeout(function() {
                    r.trigger("change");
                  }, 0)),
                !0
              );
            if (s) {
              46 === s && !1 === e.shiftKey && "," === R.radixPoint && (s = 44);
              var a,
                l = t ? { begin: o, end: o } : y(this),
                d = String.fromCharCode(s);
              N().writeOutBuffer = !0;
              var u = A(l, d, n);
              if (
                (!1 !== u &&
                  (_(!0),
                  (a = void 0 !== u.caret ? u.caret : t ? u.pos + 1 : M(u.pos)),
                  (N().p = a)),
                !1 !== i)
              ) {
                var c = this;
                if (
                  (setTimeout(function() {
                    R.onKeyValidation.call(c, s, u, R);
                  }, 0),
                  N().writeOutBuffer && !1 !== u)
                ) {
                  var p = k();
                  v(
                    this,
                    p,
                    R.numericInput && void 0 === u.caret ? g(a) : a,
                    e,
                    !0 !== t
                  ),
                    !0 !== t &&
                      setTimeout(function() {
                        !0 === x(p) && r.trigger("complete");
                      }, 0);
                }
              }
              if ((e.preventDefault(), t)) return (u.forwardPosition = a), u;
            }
          },
          pasteEvent: function(e) {
            var t,
              i = this,
              n = e.originalEvent || e,
              o = K(i),
              r = i.inputmask._valueGet(!0),
              s = y(i);
            I && ((t = s.end), (s.end = s.begin), (s.begin = t));
            var a = r.substr(0, s.begin),
              l = r.substr(s.end, r.length);
            if (
              (a === (I ? m().reverse() : m()).slice(0, s.begin).join("") &&
                (a = ""),
              l === (I ? m().reverse() : m()).slice(s.end).join("") && (l = ""),
              I && ((t = a), (a = l), (l = t)),
              window.clipboardData && window.clipboardData.getData)
            )
              r = a + window.clipboardData.getData("Text") + l;
            else {
              if (!n.clipboardData || !n.clipboardData.getData) return !0;
              r = a + n.clipboardData.getData("text/plain") + l;
            }
            var d = r;
            if (K.isFunction(R.onBeforePaste)) {
              if (!1 === (d = R.onBeforePaste(r, R))) return e.preventDefault();
              d || (d = r);
            }
            return (
              c(i, !1, !1, I ? d.split("").reverse() : d.toString().split("")),
              v(i, k(), M(C()), e, F !== k().join("")),
              !0 === x(k()) && o.trigger("complete"),
              e.preventDefault()
            );
          },
          inputFallBackEvent: function(e) {
            var t = this,
              i = t.inputmask._valueGet();
            if (k().join("") !== i) {
              var n = y(t);
              if (
                ((i = i.replace(
                  new RegExp("(" + Q.escapeRegex(m().join("")) + ")*"),
                  ""
                )),
                J)
              ) {
                var o = i.replace(k().join(""), "");
                if (1 === o.length) {
                  var r = new K.Event("keypress");
                  return (
                    (r.which = o.charCodeAt(0)),
                    B.keypressEvent.call(
                      t,
                      r,
                      !0,
                      !0,
                      !1,
                      N().validPositions[n.begin - 1] ? n.begin : n.begin - 1
                    ),
                    !1
                  );
                }
              }
              if (
                (n.begin > i.length && (y(t, i.length), (n = y(t))),
                k().length - i.length != 1 ||
                  i.charAt(n.begin) === k()[n.begin] ||
                  i.charAt(n.begin + 1) === k()[n.begin] ||
                  P(n.begin))
              ) {
                for (
                  var s = C() + 1, a = m().join("");
                  null === i.match(Q.escapeRegex(a) + "$");

                )
                  a = a.slice(1);
                c(
                  t,
                  !0,
                  !1,
                  (i = (i = i.replace(a, "")).split("")),
                  e,
                  n.begin < s
                ),
                  !0 === x(k()) && K(t).trigger("complete");
              } else
                (e.keyCode = Q.keyCode.BACKSPACE), B.keydownEvent.call(t, e);
              e.preventDefault();
            }
          },
          setValueEvent: function(e) {
            var t = this.inputmask._valueGet();
            c(
              this,
              !0,
              !1,
              (
                (K.isFunction(R.onBeforeMask) && R.onBeforeMask(t, R)) ||
                t
              ).split("")
            ),
              (F = k().join("")),
              (R.clearMaskOnLostFocus || R.clearIncomplete) &&
                this.inputmask._valueGet() === m().join("") &&
                this.inputmask._valueSet("");
          },
          focusEvent: function(e) {
            var t = this,
              i = t.inputmask._valueGet();
            R.showMaskOnFocus &&
              (!R.showMaskOnHover || (R.showMaskOnHover && "" === i)) &&
              (t.inputmask._valueGet() !== k().join("")
                ? v(t, k(), M(C()))
                : !1 === W && y(t, M(C()))),
              !0 === R.positionCaretOnTab && B.clickEvent.apply(t, [e, !0]),
              (F = k().join(""));
          },
          mouseleaveEvent: function(e) {
            if (
              ((W = !1),
              R.clearMaskOnLostFocus && document.activeElement !== this)
            ) {
              var t = k().slice(),
                i = this.inputmask._valueGet();
              i !== this.getAttribute("placeholder") &&
                "" !== i &&
                (-1 === C() && i === m().join("") ? (t = []) : l(t),
                v(this, t));
            }
          },
          clickEvent: function(e, r) {
            var s = this;
            setTimeout(function() {
              if (document.activeElement === s) {
                var e = y(s);
                if ((r && (e.begin = e.end), e.begin === e.end))
                  switch (R.positionCaretOnClick) {
                    case "none":
                      break;
                    case "radixFocus":
                      if (
                        (function(e) {
                          if ("" !== R.radixPoint) {
                            var t = N().validPositions;
                            if (void 0 === t[e] || t[e].input === O(e)) {
                              if (e < M(-1)) return !0;
                              var i = K.inArray(R.radixPoint, k());
                              if (-1 !== i) {
                                for (var n in t)
                                  if (i < n && t[n].input !== O(n)) return !1;
                                return !0;
                              }
                            }
                          }
                          return !1;
                        })(e.begin)
                      ) {
                        var t = K.inArray(R.radixPoint, k().join(""));
                        y(s, R.numericInput ? M(t) : t);
                        break;
                      }
                    default:
                      var i = e.begin,
                        n = M(C(i, !0));
                      if (i < n) y(s, P(i) || P(i - 1) ? i : M(i));
                      else {
                        var o = O(n);
                        (("" !== o &&
                          k()[n] !== o &&
                          !0 !== u(n).match.optionalQuantifier) ||
                          (!P(n) && u(n).match.def === o)) &&
                          (n = M(n)),
                          y(s, n);
                      }
                  }
              }
            }, 0);
          },
          dblclickEvent: function(e) {
            var t = this;
            setTimeout(function() {
              y(t, 0, M(C()));
            }, 0);
          },
          cutEvent: function(e) {
            var t = this,
              i = K(t),
              n = y(t),
              o = e.originalEvent || e,
              r = window.clipboardData || o.clipboardData,
              s = I ? k().slice(n.end, n.begin) : k().slice(n.begin, n.end);
            r.setData("text", I ? s.reverse().join("") : s.join("")),
              document.execCommand && document.execCommand("copy"),
              $(t, Q.keyCode.DELETE, n),
              v(t, k(), N().p, e, F !== k().join("")),
              t.inputmask._valueGet() === m().join("") && i.trigger("cleared");
          },
          blurEvent: function(e) {
            var t = K(this);
            if (this.inputmask) {
              var i = this.inputmask._valueGet(),
                n = k().slice();
              F !== n.join("") &&
                setTimeout(function() {
                  t.trigger("change"), (F = n.join(""));
                }, 0),
                "" !== i &&
                  (R.clearMaskOnLostFocus &&
                    (-1 === C() && i === m().join("") ? (n = []) : l(n)),
                  !1 === x(n) &&
                    (setTimeout(function() {
                      t.trigger("incomplete");
                    }, 0),
                    R.clearIncomplete &&
                      (_(), (n = R.clearMaskOnLostFocus ? [] : m().slice()))),
                  v(this, n, void 0, e));
            }
          },
          mouseenterEvent: function(e) {
            (W = !0),
              document.activeElement !== this &&
                R.showMaskOnHover &&
                this.inputmask._valueGet() !== k().join("") &&
                v(this, k());
          },
          submitEvent: function(e) {
            F !== k().join("") && r.trigger("change"),
              R.clearMaskOnLostFocus &&
                -1 === C() &&
                d.inputmask._valueGet &&
                d.inputmask._valueGet() === m().join("") &&
                d.inputmask._valueSet(""),
              R.removeMaskOnSubmit &&
                (d.inputmask._valueSet(d.inputmask.unmaskedvalue(), !0),
                setTimeout(function() {
                  v(d, k());
                }, 0));
          },
          resetEvent: function(e) {
            setTimeout(function() {
              r.trigger("setvalue");
            }, 0);
          }
        };
      if (void 0 !== e)
        switch (e.action) {
          case "isComplete":
            return (d = e.el), x(k());
          case "unmaskedvalue":
            return (
              (void 0 !== d && void 0 === e.value) ||
                ((a = e.value),
                (a = (
                  (K.isFunction(R.onBeforeMask) && R.onBeforeMask(a, R)) ||
                  a
                ).split("")),
                c(void 0, !1, !1, I ? a.reverse() : a),
                K.isFunction(R.onBeforeWrite) &&
                  R.onBeforeWrite(void 0, k(), 0, R)),
              n(d)
            );
          case "mask":
            !(function(e) {
              var t = (function(e, a) {
                var t = e.getAttribute("type"),
                  i =
                    ("INPUT" === e.tagName &&
                      -1 !== K.inArray(t, a.supportsInputType)) ||
                    e.isContentEditable ||
                    "TEXTAREA" === e.tagName;
                if (!i)
                  if ("INPUT" === e.tagName) {
                    var n = document.createElement("input");
                    n.setAttribute("type", t),
                      (i = "text" === n.type),
                      (n = null);
                  } else i = "partial";
                return (
                  !1 !== i &&
                    (function(e) {
                      function t() {
                        return this.inputmask
                          ? this.inputmask.opts.autoUnmask
                            ? this.inputmask.unmaskedvalue()
                            : -1 !== C() || !0 !== a.nullable
                            ? document.activeElement === this &&
                              a.clearMaskOnLostFocus
                              ? (I
                                  ? l(k().slice()).reverse()
                                  : l(k().slice())
                                ).join("")
                              : n.call(this)
                            : ""
                          : n.call(this);
                      }
                      function i(e) {
                        o.call(this, e),
                          this.inputmask && K(this).trigger("setvalue");
                      }
                      var n, o, r;
                      if (!e.inputmask.__valueGet) {
                        if (!0 !== a.noValuePatching) {
                          if (Object.getOwnPropertyDescriptor) {
                            "function" != typeof Object.getPrototypeOf &&
                              (Object.getPrototypeOf =
                                "object" == typeof "test".__proto__
                                  ? function(e) {
                                      return e.__proto__;
                                    }
                                  : function(e) {
                                      return e.constructor.prototype;
                                    });
                            var s = Object.getPrototypeOf
                              ? Object.getOwnPropertyDescriptor(
                                  Object.getPrototypeOf(e),
                                  "value"
                                )
                              : void 0;
                            s && s.get && s.set
                              ? ((n = s.get),
                                (o = s.set),
                                Object.defineProperty(e, "value", {
                                  get: t,
                                  set: i,
                                  configurable: !0
                                }))
                              : "INPUT" !== e.tagName &&
                                ((n = function() {
                                  return this.textContent;
                                }),
                                (o = function(e) {
                                  this.textContent = e;
                                }),
                                Object.defineProperty(e, "value", {
                                  get: t,
                                  set: i,
                                  configurable: !0
                                }));
                          } else
                            document.__lookupGetter__ &&
                              e.__lookupGetter__("value") &&
                              ((n = e.__lookupGetter__("value")),
                              (o = e.__lookupSetter__("value")),
                              e.__defineGetter__("value", t),
                              e.__defineSetter__("value", i));
                          (e.inputmask.__valueGet = n),
                            (e.inputmask.__valueSet = o);
                        }
                        (e.inputmask._valueGet = function(e) {
                          return I && !0 !== e
                            ? n
                                .call(this.el)
                                .split("")
                                .reverse()
                                .join("")
                            : n.call(this.el);
                        }),
                          (e.inputmask._valueSet = function(e, t) {
                            o.call(
                              this.el,
                              null == e
                                ? ""
                                : !0 !== t && I
                                ? e
                                    .split("")
                                    .reverse()
                                    .join("")
                                : e
                            );
                          }),
                          void 0 === n &&
                            ((n = function() {
                              return this.value;
                            }),
                            (o = function(e) {
                              this.value = e;
                            }),
                            (function(e) {
                              if (
                                K.valHooks &&
                                (void 0 === K.valHooks[e] ||
                                  !0 !== K.valHooks[e].inputmaskpatch)
                              ) {
                                var i =
                                    K.valHooks[e] && K.valHooks[e].get
                                      ? K.valHooks[e].get
                                      : function(e) {
                                          return e.value;
                                        },
                                  o =
                                    K.valHooks[e] && K.valHooks[e].set
                                      ? K.valHooks[e].set
                                      : function(e, t) {
                                          return (e.value = t), e;
                                        };
                                K.valHooks[e] = {
                                  get: function(e) {
                                    if (e.inputmask) {
                                      if (e.inputmask.opts.autoUnmask)
                                        return e.inputmask.unmaskedvalue();
                                      var t = i(e);
                                      return -1 !==
                                        C(
                                          void 0,
                                          void 0,
                                          e.inputmask.maskset.validPositions
                                        ) || !0 !== a.nullable
                                        ? t
                                        : "";
                                    }
                                    return i(e);
                                  },
                                  set: function(e, t) {
                                    var i,
                                      n = K(e);
                                    return (
                                      (i = o(e, t)),
                                      e.inputmask && n.trigger("setvalue"),
                                      i
                                    );
                                  },
                                  inputmaskpatch: !0
                                };
                              }
                            })(e.type),
                            (r = e),
                            V.on(r, "mouseenter", function(e) {
                              var t = K(this);
                              this.inputmask._valueGet() !== k().join("") &&
                                t.trigger("setvalue");
                            }));
                      }
                    })(e),
                  i
                );
              })(e, R);
              if (
                !1 !== t &&
                ((r = K((d = e))),
                ("rtl" === d.dir || R.rightAlign) &&
                  (d.style.textAlign = "right"),
                ("rtl" === d.dir || R.numericInput) &&
                  ((d.dir = "ltr"),
                  d.removeAttribute("dir"),
                  (d.inputmask.isRTL = !0),
                  (I = !0)),
                !0 === R.colorMask && o(d),
                te &&
                  (d.hasOwnProperty("inputmode") &&
                    ((d.inputmode = R.inputmode),
                    d.setAttribute("inputmode", R.inputmode)),
                  "rtfm" === R.androidHack &&
                    (!0 !== R.colorMask && o(d), (d.type = "password"))),
                V.off(d),
                !0 === t &&
                  (V.on(d, "submit", B.submitEvent),
                  V.on(d, "reset", B.resetEvent),
                  V.on(d, "mouseenter", B.mouseenterEvent),
                  V.on(d, "blur", B.blurEvent),
                  V.on(d, "focus", B.focusEvent),
                  V.on(d, "mouseleave", B.mouseleaveEvent),
                  !0 !== R.colorMask && V.on(d, "click", B.clickEvent),
                  V.on(d, "dblclick", B.dblclickEvent),
                  V.on(d, "paste", B.pasteEvent),
                  V.on(d, "dragdrop", B.pasteEvent),
                  V.on(d, "drop", B.pasteEvent),
                  V.on(d, "cut", B.cutEvent),
                  V.on(d, "complete", R.oncomplete),
                  V.on(d, "incomplete", R.onincomplete),
                  V.on(d, "cleared", R.oncleared),
                  !0 !== R.inputEventOnly &&
                    (V.on(d, "keydown", B.keydownEvent),
                    V.on(d, "keypress", B.keypressEvent)),
                  V.on(d, "compositionstart", K.noop),
                  V.on(d, "compositionupdate", K.noop),
                  V.on(d, "compositionend", K.noop),
                  V.on(d, "keyup", K.noop),
                  V.on(d, "input", B.inputFallBackEvent)),
                V.on(d, "setvalue", B.setValueEvent),
                m(),
                "" !== d.inputmask._valueGet() ||
                  !1 === R.clearMaskOnLostFocus ||
                  document.activeElement === d)
              ) {
                var i =
                  (K.isFunction(R.onBeforeMask) &&
                    R.onBeforeMask(d.inputmask._valueGet(), R)) ||
                  d.inputmask._valueGet();
                c(d, !0, !1, i.split(""));
                var n = k().slice();
                (F = n.join("")),
                  !1 === x(n) && R.clearIncomplete && _(),
                  R.clearMaskOnLostFocus &&
                    document.activeElement !== d &&
                    (-1 === C() ? (n = []) : l(n)),
                  v(d, n),
                  document.activeElement === d && y(d, M(C()));
              }
            })(d);
            break;
          case "format":
            return (
              (a = (
                (K.isFunction(R.onBeforeMask) && R.onBeforeMask(e.value, R)) ||
                e.value
              ).split("")),
              c(void 0, !1, !1, I ? a.reverse() : a),
              K.isFunction(R.onBeforeWrite) &&
                R.onBeforeWrite(void 0, k(), 0, R),
              e.metadata
                ? {
                    value: I
                      ? k()
                          .slice()
                          .reverse()
                          .join("")
                      : k().join(""),
                    metadata: X.call(this, { action: "getmetadata" }, t, R)
                  }
                : I
                ? k()
                    .slice()
                    .reverse()
                    .join("")
                : k().join("")
            );
          case "isValid":
            e.value
              ? ((a = e.value.split("")),
                c(void 0, !1, !0, I ? a.reverse() : a))
              : (e.value = k().join(""));
            for (var q = k(), U = s(), G = q.length - 1; U < G && !P(G); G--);
            return q.splice(U, G + 1 - U), x(q) && e.value === k().join("");
          case "getemptymask":
            return m().join("");
          case "remove":
            if (d)
              (r = K(d)),
                d.inputmask._valueSet(n(d)),
                V.off(d),
                Object.getOwnPropertyDescriptor && Object.getPrototypeOf
                  ? Object.getOwnPropertyDescriptor(
                      Object.getPrototypeOf(d),
                      "value"
                    ) &&
                    d.inputmask.__valueGet &&
                    Object.defineProperty(d, "value", {
                      get: d.inputmask.__valueGet,
                      set: d.inputmask.__valueSet,
                      configurable: !0
                    })
                  : document.__lookupGetter__ &&
                    d.__lookupGetter__("value") &&
                    d.inputmask.__valueGet &&
                    (d.__defineGetter__("value", d.inputmask.__valueGet),
                    d.__defineSetter__("value", d.inputmask.__valueSet)),
                (d.inputmask = void 0);
            return d;
          case "getmetadata":
            if (K.isArray(t.metadata)) {
              var Y = i(!0, 0, !1).join("");
              return (
                K.each(t.metadata, function(e, t) {
                  if (t.mask === Y) return (Y = t), !1;
                }),
                Y
              );
            }
            return t.metadata;
        }
    }
    var e = navigator.userAgent,
      Z = /mobile/i.test(e),
      J = /iemobile/i.test(e),
      ee = /iphone/i.test(e) && !J,
      te = /android/i.test(e) && !J;
    (Q.prototype = {
      defaults: {
        placeholder: "_",
        optionalmarker: { start: "[", end: "]" },
        quantifiermarker: { start: "{", end: "}" },
        groupmarker: { start: "(", end: ")" },
        alternatormarker: "|",
        escapeChar: "\\",
        mask: null,
        oncomplete: K.noop,
        onincomplete: K.noop,
        oncleared: K.noop,
        repeat: 0,
        greedy: !0,
        autoUnmask: !1,
        removeMaskOnSubmit: !1,
        clearMaskOnLostFocus: !0,
        insertMode: !0,
        clearIncomplete: !1,
        aliases: {},
        alias: null,
        onKeyDown: K.noop,
        onBeforeMask: null,
        onBeforePaste: function(e, t) {
          return K.isFunction(t.onBeforeMask) ? t.onBeforeMask(e, t) : e;
        },
        onBeforeWrite: null,
        onUnMask: null,
        showMaskOnFocus: !0,
        showMaskOnHover: !0,
        onKeyValidation: K.noop,
        skipOptionalPartCharacter: " ",
        numericInput: !1,
        rightAlign: !1,
        undoOnEscape: !0,
        radixPoint: "",
        radixPointDefinitionSymbol: void 0,
        groupSeparator: "",
        keepStatic: null,
        positionCaretOnTab: !0,
        tabThrough: !1,
        supportsInputType: ["text", "tel", "password"],
        definitions: {
          9: { validator: "[0-9]", cardinality: 1, definitionSymbol: "*" },
          a: {
            validator: "[A-Za-zА-яЁёÀ-ÿµ]",
            cardinality: 1,
            definitionSymbol: "*"
          },
          "*": { validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1 }
        },
        ignorables: [
          8,
          9,
          13,
          19,
          27,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          45,
          46,
          93,
          112,
          113,
          114,
          115,
          116,
          117,
          118,
          119,
          120,
          121,
          122,
          123
        ],
        isComplete: null,
        canClearPosition: K.noop,
        postValidation: null,
        staticDefinitionSymbol: void 0,
        jitMasking: !1,
        nullable: !0,
        inputEventOnly: !1,
        noValuePatching: !1,
        positionCaretOnClick: "lvp",
        casing: null,
        inputmode: "verbatim",
        colorMask: !1,
        androidHack: !1
      },
      masksCache: {},
      mask: function(e) {
        var o = this;
        return (
          "string" == typeof e &&
            (e = document.getElementById(e) || document.querySelectorAll(e)),
          (e = e.nodeName ? [e] : e),
          K.each(e, function(e, t) {
            var i = K.extend(!0, {}, o.opts);
            !(function(i, e, n, o) {
              function t(e, t) {
                null !== (t = void 0 !== t ? t : i.getAttribute(o + "-" + e)) &&
                  ("string" == typeof t &&
                    (0 === e.indexOf("on")
                      ? (t = window[t])
                      : "false" === t
                      ? (t = !1)
                      : "true" === t && (t = !0)),
                  (n[e] = t));
              }
              var r,
                s,
                a,
                l,
                d = i.getAttribute(o);
              if (
                (d &&
                  "" !== d &&
                  ((d = d.replace(new RegExp("'", "g"), '"')),
                  (s = JSON.parse("{" + d + "}"))),
                s)
              )
                for (l in ((a = void 0), s))
                  if ("alias" === l.toLowerCase()) {
                    a = s[l];
                    break;
                  }
              for (r in (t("alias", a), n.alias && u(n.alias, n, e), e)) {
                if (s)
                  for (l in ((a = void 0), s))
                    if (l.toLowerCase() === r.toLowerCase()) {
                      a = s[l];
                      break;
                    }
                t(r, a);
              }
              K.extend(!0, e, n);
            })(t, i, K.extend(!0, {}, o.userOptions), o.dataAttribute);
            var n = r(i, o.noMasksCache);
            void 0 !== n &&
              (void 0 !== t.inputmask && t.inputmask.remove(),
              (t.inputmask = new Q()),
              (t.inputmask.opts = i),
              (t.inputmask.noMasksCache = o.noMasksCache),
              (t.inputmask.userOptions = K.extend(!0, {}, o.userOptions)),
              ((t.inputmask.el = t).inputmask.maskset = n),
              K.data(t, "_inputmask_opts", i),
              X.call(t.inputmask, { action: "mask" }));
          }),
          (e && e[0] && e[0].inputmask) || this
        );
      },
      option: function(e, t) {
        return "string" == typeof e
          ? this.opts[e]
          : "object" == typeof e
          ? (K.extend(this.userOptions, e),
            this.el && !0 !== t && this.mask(this.el),
            this)
          : void 0;
      },
      unmaskedvalue: function(e) {
        return (
          (this.maskset = this.maskset || r(this.opts, this.noMasksCache)),
          X.call(this, { action: "unmaskedvalue", value: e })
        );
      },
      remove: function() {
        return X.call(this, { action: "remove" });
      },
      getemptymask: function() {
        return (
          (this.maskset = this.maskset || r(this.opts, this.noMasksCache)),
          X.call(this, { action: "getemptymask" })
        );
      },
      hasMaskedValue: function() {
        return !this.opts.autoUnmask;
      },
      isComplete: function() {
        return (
          (this.maskset = this.maskset || r(this.opts, this.noMasksCache)),
          X.call(this, { action: "isComplete" })
        );
      },
      getmetadata: function() {
        return (
          (this.maskset = this.maskset || r(this.opts, this.noMasksCache)),
          X.call(this, { action: "getmetadata" })
        );
      },
      isValid: function(e) {
        return (
          (this.maskset = this.maskset || r(this.opts, this.noMasksCache)),
          X.call(this, { action: "isValid", value: e })
        );
      },
      format: function(e, t) {
        return (
          (this.maskset = this.maskset || r(this.opts, this.noMasksCache)),
          X.call(this, { action: "format", value: e, metadata: t })
        );
      },
      analyseMask: function(e, c) {
        function t(e, t, i, n) {
          (this.matches = []),
            (this.openGroup = e || !1),
            (this.isGroup = e || !1),
            (this.isOptional = t || !1),
            (this.isQuantifier = i || !1),
            (this.isAlternator = n || !1),
            (this.quantifier = { min: 1, max: 1 });
        }
        function r(e, t, i) {
          var n = c.definitions[t];
          i = void 0 !== i ? i : e.matches.length;
          var o = e.matches[i - 1];
          if (n && !h) {
            n.placeholder = K.isFunction(n.placeholder)
              ? n.placeholder(c)
              : n.placeholder;
            for (
              var r = n.prevalidator, s = r ? r.length : 0, a = 1;
              a < n.cardinality;
              a++
            ) {
              var l = a <= s ? r[a - 1] : [],
                d = l.validator,
                u = l.cardinality;
              e.matches.splice(i++, 0, {
                fn: d
                  ? "string" == typeof d
                    ? new RegExp(d)
                    : new function() {
                        this.test = d;
                      }()
                  : new RegExp("."),
                cardinality: u || 1,
                optionality: e.isOptional,
                newBlockMarker:
                  void 0 === o || o.def !== (n.definitionSymbol || t),
                casing: n.casing,
                def: n.definitionSymbol || t,
                placeholder: n.placeholder,
                nativeDef: t
              }),
                (o = e.matches[i - 1]);
            }
            e.matches.splice(i++, 0, {
              fn: n.validator
                ? "string" == typeof n.validator
                  ? new RegExp(n.validator)
                  : new function() {
                      this.test = n.validator;
                    }()
                : new RegExp("."),
              cardinality: n.cardinality,
              optionality: e.isOptional,
              newBlockMarker:
                void 0 === o || o.def !== (n.definitionSymbol || t),
              casing: n.casing,
              def: n.definitionSymbol || t,
              placeholder: n.placeholder,
              nativeDef: t
            });
          } else
            e.matches.splice(i++, 0, {
              fn: null,
              cardinality: 0,
              optionality: e.isOptional,
              newBlockMarker: void 0 === o || o.def !== t,
              casing: null,
              def: c.staticDefinitionSymbol || t,
              placeholder: void 0 !== c.staticDefinitionSymbol ? t : void 0,
              nativeDef: t
            }),
              (h = !1);
        }
        function i() {
          if (0 < m.length) {
            if ((r((a = m[m.length - 1]), o), a.isAlternator)) {
              l = m.pop();
              for (var e = 0; e < l.matches.length; e++)
                l.matches[e].isGroup = !1;
              0 < m.length
                ? (a = m[m.length - 1]).matches.push(l)
                : f.matches.push(l);
            }
          } else r(f, o);
        }
        for (
          var n,
            o,
            s,
            a,
            l,
            d,
            u,
            p = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
            h = !1,
            f = new t(),
            m = [],
            g = [];
          (n = p.exec(e));

        )
          if (((o = n[0]), h)) i();
          else
            switch (o.charAt(0)) {
              case c.escapeChar:
                h = !0;
                break;
              case c.optionalmarker.end:
              case c.groupmarker.end:
                if ((((s = m.pop()).openGroup = !1), void 0 !== s))
                  if (0 < m.length) {
                    if (
                      ((a = m[m.length - 1]).matches.push(s), a.isAlternator)
                    ) {
                      l = m.pop();
                      for (var v = 0; v < l.matches.length; v++)
                        l.matches[v].isGroup = !1;
                      0 < m.length
                        ? (a = m[m.length - 1]).matches.push(l)
                        : f.matches.push(l);
                    }
                  } else f.matches.push(s);
                else i();
                break;
              case c.optionalmarker.start:
                m.push(new t(!1, !0));
                break;
              case c.groupmarker.start:
                m.push(new t(!0));
                break;
              case c.quantifiermarker.start:
                var y = new t(!1, !1, !0),
                  b = (o = o.replace(/[{}]/g, "")).split(","),
                  w = isNaN(b[0]) ? b[0] : parseInt(b[0]),
                  k = 1 === b.length ? w : isNaN(b[1]) ? b[1] : parseInt(b[1]);
                if (
                  (("*" !== k && "+" !== k) || (w = "*" === k ? 0 : 1),
                  (y.quantifier = { min: w, max: k }),
                  0 < m.length)
                ) {
                  var x = m[m.length - 1].matches;
                  (n = x.pop()).isGroup ||
                    ((u = new t(!0)).matches.push(n), (n = u)),
                    x.push(n),
                    x.push(y);
                } else
                  (n = f.matches.pop()).isGroup ||
                    ((u = new t(!0)).matches.push(n), (n = u)),
                    f.matches.push(n),
                    f.matches.push(y);
                break;
              case c.alternatormarker:
                0 < m.length
                  ? (d = (a = m[m.length - 1]).matches.pop())
                  : (d = f.matches.pop()),
                  d.isAlternator
                    ? m.push(d)
                    : ((l = new t(!1, !1, !1, !0)).matches.push(d), m.push(l));
                break;
              default:
                i();
            }
        for (; 0 < m.length; ) (s = m.pop()), f.matches.push(s);
        return (
          0 < f.matches.length &&
            ((function n(o) {
              o &&
                o.matches &&
                K.each(o.matches, function(e, t) {
                  var i = o.matches[e + 1];
                  (void 0 === i ||
                    void 0 === i.matches ||
                    !1 === i.isQuantifier) &&
                    t &&
                    t.isGroup &&
                    ((t.isGroup = !1),
                    r(t, c.groupmarker.start, 0),
                    !0 !== t.openGroup && r(t, c.groupmarker.end)),
                    n(t);
                });
            })(f),
            g.push(f)),
          c.numericInput &&
            (function e(t) {
              for (var i in ((t.matches = t.matches.reverse()), t.matches)) {
                var n = parseInt(i);
                if (
                  t.matches[i].isQuantifier &&
                  t.matches[n + 1] &&
                  t.matches[n + 1].isGroup
                ) {
                  var o = t.matches[i];
                  t.matches.splice(i, 1), t.matches.splice(n + 1, 0, o);
                }
                void 0 !== t.matches[i].matches
                  ? (t.matches[i] = e(t.matches[i]))
                  : (t.matches[i] = ((r = t.matches[i]) ===
                    c.optionalmarker.start
                      ? (r = c.optionalmarker.end)
                      : r === c.optionalmarker.end
                      ? (r = c.optionalmarker.start)
                      : r === c.groupmarker.start
                      ? (r = c.groupmarker.end)
                      : r === c.groupmarker.end && (r = c.groupmarker.start),
                    r));
              }
              var r;
              return t;
            })(g[0]),
          g
        );
      }
    }),
      (Q.extendDefaults = function(e) {
        K.extend(!0, Q.prototype.defaults, e);
      }),
      (Q.extendDefinitions = function(e) {
        K.extend(!0, Q.prototype.defaults.definitions, e);
      }),
      (Q.extendAliases = function(e) {
        K.extend(!0, Q.prototype.defaults.aliases, e);
      }),
      (Q.format = function(e, t, i) {
        return Q(t).format(e, i);
      }),
      (Q.unmask = function(e, t) {
        return Q(t).unmaskedvalue(e);
      }),
      (Q.isValid = function(e, t) {
        return Q(t).isValid(e);
      }),
      (Q.remove = function(e) {
        K.each(e, function(e, t) {
          t.inputmask && t.inputmask.remove();
        });
      }),
      (Q.escapeRegex = function(e) {
        return e.replace(
          new RegExp(
            "(\\" +
              [
                "/",
                ".",
                "*",
                "+",
                "?",
                "|",
                "(",
                ")",
                "[",
                "]",
                "{",
                "}",
                "\\",
                "$",
                "^"
              ].join("|\\") +
              ")",
            "gim"
          ),
          "\\$1"
        );
      }),
      (Q.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
        X: 88
      }),
      (window.Inputmask = Q);
  })(jQuery),
  (function(o, r) {
    void 0 === o.fn.inputmask &&
      (o.fn.inputmask = function(e, t) {
        var i,
          n = this[0];
        if ((void 0 === t && (t = {}), "string" == typeof e))
          switch (e) {
            case "unmaskedvalue":
              return n && n.inputmask
                ? n.inputmask.unmaskedvalue()
                : o(n).val();
            case "remove":
              return this.each(function() {
                this.inputmask && this.inputmask.remove();
              });
            case "getemptymask":
              return n && n.inputmask ? n.inputmask.getemptymask() : "";
            case "hasMaskedValue":
              return !(!n || !n.inputmask) && n.inputmask.hasMaskedValue();
            case "isComplete":
              return !n || !n.inputmask || n.inputmask.isComplete();
            case "getmetadata":
              return n && n.inputmask ? n.inputmask.getmetadata() : void 0;
            case "setvalue":
              o(n).val(t),
                n && void 0 === n.inputmask && o(n).triggerHandler("setvalue");
              break;
            case "option":
              if ("string" != typeof t)
                return this.each(function() {
                  if (void 0 !== this.inputmask)
                    return this.inputmask.option(t);
                });
              if (n && void 0 !== n.inputmask) return n.inputmask.option(t);
              break;
            default:
              return (
                (t.alias = e),
                (i = new r(t)),
                this.each(function() {
                  i.mask(this);
                })
              );
          }
        else {
          if ("object" == typeof e)
            return (
              (i = new r(e)),
              void 0 === e.mask && void 0 === e.alias
                ? this.each(function() {
                    return void 0 !== this.inputmask
                      ? this.inputmask.option(e)
                      : void i.mask(this);
                  })
                : this.each(function() {
                    i.mask(this);
                  })
            );
          if (void 0 === e)
            return this.each(function() {
              (i = new r(t)).mask(this);
            });
        }
      }),
      o.fn.inputmask;
  })(jQuery, Inputmask),
  jQuery,
  Inputmask,
  (function(s, a) {
    a.extendAliases({
      "dd/mm/yyyy": {
        mask: "1/2/y",
        placeholder: "dd/mm/yyyy",
        regex: {
          val1pre: new RegExp("[0-3]"),
          val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
          val2pre: function(e) {
            var t = a.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|[12][0-9]|3[01])" + t + "[01])");
          },
          val2: function(e) {
            var t = a.escapeRegex.call(this, e);
            return new RegExp(
              "((0[1-9]|[12][0-9])" +
                t +
                "(0[1-9]|1[012]))|(30" +
                t +
                "(0[13-9]|1[012]))|(31" +
                t +
                "(0[13578]|1[02]))"
            );
          }
        },
        leapday: "29/02/",
        separator: "/",
        yearrange: { minyear: 1900, maxyear: 2099 },
        isInYearRange: function(e, t, i) {
          if (isNaN(e)) return !1;
          var n = parseInt(e.concat(t.toString().slice(e.length))),
            o = parseInt(e.concat(i.toString().slice(e.length)));
          return (
            (!isNaN(n) && t <= n && n <= i) || (!isNaN(o) && t <= o && o <= i)
          );
        },
        determinebaseyear: function(e, t, i) {
          var n = new Date().getFullYear();
          if (n < e) return e;
          if (t < n) {
            for (
              var o = t.toString().slice(0, 2), r = t.toString().slice(2, 4);
              t < o + i;

            )
              o--;
            var s = o + r;
            return s < e ? e : s;
          }
          if (e <= n && n <= t) {
            for (var a = n.toString().slice(0, 2); t < a + i; ) a--;
            var l = a + i;
            return l < e ? e : l;
          }
          return n;
        },
        onKeyDown: function(e, t, i, n) {
          var o = s(this);
          if (e.ctrlKey && e.keyCode === a.keyCode.RIGHT) {
            var r = new Date();
            o.val(
              r.getDate().toString() +
                (r.getMonth() + 1).toString() +
                r.getFullYear().toString()
            ),
              o.trigger("setvalue");
          }
        },
        getFrontValue: function(e, t, i) {
          for (
            var n = 0, o = 0, r = 0;
            r < e.length && "2" !== e.charAt(r);
            r++
          ) {
            var s = i.definitions[e.charAt(r)];
            s ? ((n += o), (o = s.cardinality)) : o++;
          }
          return t.join("").substr(n, o);
        },
        postValidation: function(e, t, i) {
          var n,
            o,
            r,
            s = e.join("");
          return (
            0 === i.mask.indexOf("y")
              ? ((o = s.substr(0, 4)), (n = s.substr(4, 11)))
              : ((o = s.substr(6, 11)), (n = s.substr(0, 6))),
            t &&
              (n !== i.leapday ||
                ((r = o), isNaN(r) || 29 === new Date(r, 2, 0).getDate()))
          );
        },
        definitions: {
          1: {
            validator: function(e, t, i, n, o) {
              var r = o.regex.val1.test(e);
              return n ||
                r ||
                (e.charAt(1) !== o.separator &&
                  -1 === "-./".indexOf(e.charAt(1))) ||
                !(r = o.regex.val1.test("0" + e.charAt(0)))
                ? r
                : ((t.buffer[i - 1] = "0"),
                  {
                    refreshFromBuffer: { start: i - 1, end: i },
                    pos: i,
                    c: e.charAt(0)
                  });
            },
            cardinality: 2,
            prevalidator: [
              {
                validator: function(e, t, i, n, o) {
                  var r = e;
                  isNaN(t.buffer[i + 1]) || (r += t.buffer[i + 1]);
                  var s =
                    1 === r.length
                      ? o.regex.val1pre.test(r)
                      : o.regex.val1.test(r);
                  if (!n && !s) {
                    if ((s = o.regex.val1.test(e + "0")))
                      return (
                        (t.buffer[i] = e),
                        (t.buffer[++i] = "0"),
                        { pos: i, c: "0" }
                      );
                    if ((s = o.regex.val1.test("0" + e)))
                      return (t.buffer[i] = "0"), { pos: ++i };
                  }
                  return s;
                },
                cardinality: 1
              }
            ]
          },
          2: {
            validator: function(e, t, i, n, o) {
              var r = o.getFrontValue(t.mask, t.buffer, o);
              -1 !== r.indexOf(o.placeholder[0]) && (r = "01" + o.separator);
              var s = o.regex.val2(o.separator).test(r + e);
              return n ||
                s ||
                (e.charAt(1) !== o.separator &&
                  -1 === "-./".indexOf(e.charAt(1))) ||
                !(s = o.regex.val2(o.separator).test(r + "0" + e.charAt(0)))
                ? s
                : ((t.buffer[i - 1] = "0"),
                  {
                    refreshFromBuffer: { start: i - 1, end: i },
                    pos: i,
                    c: e.charAt(0)
                  });
            },
            cardinality: 2,
            prevalidator: [
              {
                validator: function(e, t, i, n, o) {
                  isNaN(t.buffer[i + 1]) || (e += t.buffer[i + 1]);
                  var r = o.getFrontValue(t.mask, t.buffer, o);
                  -1 !== r.indexOf(o.placeholder[0]) &&
                    (r = "01" + o.separator);
                  var s =
                    1 === e.length
                      ? o.regex.val2pre(o.separator).test(r + e)
                      : o.regex.val2(o.separator).test(r + e);
                  return n ||
                    s ||
                    !(s = o.regex.val2(o.separator).test(r + "0" + e))
                    ? s
                    : ((t.buffer[i] = "0"), { pos: ++i });
                },
                cardinality: 1
              }
            ]
          },
          y: {
            validator: function(e, t, i, n, o) {
              return o.isInYearRange(
                e,
                o.yearrange.minyear,
                o.yearrange.maxyear
              );
            },
            cardinality: 4,
            prevalidator: [
              {
                validator: function(e, t, i, n, o) {
                  var r = o.isInYearRange(
                    e,
                    o.yearrange.minyear,
                    o.yearrange.maxyear
                  );
                  if (!n && !r) {
                    var s = o
                      .determinebaseyear(
                        o.yearrange.minyear,
                        o.yearrange.maxyear,
                        e + "0"
                      )
                      .toString()
                      .slice(0, 1);
                    if (
                      (r = o.isInYearRange(
                        s + e,
                        o.yearrange.minyear,
                        o.yearrange.maxyear
                      ))
                    )
                      return (t.buffer[i++] = s.charAt(0)), { pos: i };
                    if (
                      ((s = o
                        .determinebaseyear(
                          o.yearrange.minyear,
                          o.yearrange.maxyear,
                          e + "0"
                        )
                        .toString()
                        .slice(0, 2)),
                      (r = o.isInYearRange(
                        s + e,
                        o.yearrange.minyear,
                        o.yearrange.maxyear
                      )))
                    )
                      return (
                        (t.buffer[i++] = s.charAt(0)),
                        (t.buffer[i++] = s.charAt(1)),
                        { pos: i }
                      );
                  }
                  return r;
                },
                cardinality: 1
              },
              {
                validator: function(e, t, i, n, o) {
                  var r = o.isInYearRange(
                    e,
                    o.yearrange.minyear,
                    o.yearrange.maxyear
                  );
                  if (!n && !r) {
                    var s = o
                      .determinebaseyear(
                        o.yearrange.minyear,
                        o.yearrange.maxyear,
                        e
                      )
                      .toString()
                      .slice(0, 2);
                    if (
                      (r = o.isInYearRange(
                        e[0] + s[1] + e[1],
                        o.yearrange.minyear,
                        o.yearrange.maxyear
                      ))
                    )
                      return (t.buffer[i++] = s.charAt(1)), { pos: i };
                    if (
                      ((s = o
                        .determinebaseyear(
                          o.yearrange.minyear,
                          o.yearrange.maxyear,
                          e
                        )
                        .toString()
                        .slice(0, 2)),
                      (r = o.isInYearRange(
                        s + e,
                        o.yearrange.minyear,
                        o.yearrange.maxyear
                      )))
                    )
                      return (
                        (t.buffer[i - 1] = s.charAt(0)),
                        (t.buffer[i++] = s.charAt(1)),
                        (t.buffer[i++] = e.charAt(0)),
                        { refreshFromBuffer: { start: i - 3, end: i }, pos: i }
                      );
                  }
                  return r;
                },
                cardinality: 2
              },
              {
                validator: function(e, t, i, n, o) {
                  return o.isInYearRange(
                    e,
                    o.yearrange.minyear,
                    o.yearrange.maxyear
                  );
                },
                cardinality: 3
              }
            ]
          }
        },
        insertMode: !1,
        autoUnmask: !1
      },
      "mm/dd/yyyy": {
        placeholder: "mm/dd/yyyy",
        alias: "dd/mm/yyyy",
        regex: {
          val2pre: function(e) {
            var t = a.escapeRegex.call(this, e);
            return new RegExp(
              "((0[13-9]|1[012])" + t + "[0-3])|(02" + t + "[0-2])"
            );
          },
          val2: function(e) {
            var t = a.escapeRegex.call(this, e);
            return new RegExp(
              "((0[1-9]|1[012])" +
                t +
                "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" +
                t +
                "30)|((0[13578]|1[02])" +
                t +
                "31)"
            );
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        leapday: "02/29/",
        onKeyDown: function(e, t, i, n) {
          var o = s(this);
          if (e.ctrlKey && e.keyCode === a.keyCode.RIGHT) {
            var r = new Date();
            o.val(
              (r.getMonth() + 1).toString() +
                r.getDate().toString() +
                r.getFullYear().toString()
            ),
              o.trigger("setvalue");
          }
        }
      },
      "yyyy/mm/dd": {
        mask: "y/1/2",
        placeholder: "yyyy/mm/dd",
        alias: "mm/dd/yyyy",
        leapday: "/02/29",
        onKeyDown: function(e, t, i, n) {
          var o = s(this);
          if (e.ctrlKey && e.keyCode === a.keyCode.RIGHT) {
            var r = new Date();
            o.val(
              r.getFullYear().toString() +
                (r.getMonth() + 1).toString() +
                r.getDate().toString()
            ),
              o.trigger("setvalue");
          }
        }
      },
      "dd.mm.yyyy": {
        mask: "1.2.y",
        placeholder: "dd.mm.yyyy",
        leapday: "29.02.",
        separator: ".",
        alias: "dd/mm/yyyy"
      },
      "dd-mm-yyyy": {
        mask: "1-2-y",
        placeholder: "dd-mm-yyyy",
        leapday: "29-02-",
        separator: "-",
        alias: "dd/mm/yyyy"
      },
      "mm.dd.yyyy": {
        mask: "1.2.y",
        placeholder: "mm.dd.yyyy",
        leapday: "02.29.",
        separator: ".",
        alias: "mm/dd/yyyy"
      },
      "mm-dd-yyyy": {
        mask: "1-2-y",
        placeholder: "mm-dd-yyyy",
        leapday: "02-29-",
        separator: "-",
        alias: "mm/dd/yyyy"
      },
      "yyyy.mm.dd": {
        mask: "y.1.2",
        placeholder: "yyyy.mm.dd",
        leapday: ".02.29",
        separator: ".",
        alias: "yyyy/mm/dd"
      },
      "yyyy-mm-dd": {
        mask: "y-1-2",
        placeholder: "yyyy-mm-dd",
        leapday: "-02-29",
        separator: "-",
        alias: "yyyy/mm/dd"
      },
      datetime: {
        mask: "1/2/y h:s",
        placeholder: "dd/mm/yyyy hh:mm",
        alias: "dd/mm/yyyy",
        regex: {
          hrspre: new RegExp("[012]"),
          hrs24: new RegExp("2[0-4]|1[3-9]"),
          hrs: new RegExp("[01][0-9]|2[0-4]"),
          ampm: new RegExp("^[a|p|A|P][m|M]"),
          mspre: new RegExp("[0-5]"),
          ms: new RegExp("[0-5][0-9]")
        },
        timeseparator: ":",
        hourFormat: "24",
        definitions: {
          h: {
            validator: function(e, t, i, n, o) {
              if ("24" === o.hourFormat && 24 === parseInt(e, 10))
                return (
                  (t.buffer[i - 1] = "0"),
                  {
                    refreshFromBuffer: { start: i - 1, end: i },
                    c: (t.buffer[i] = "0")
                  }
                );
              var r = o.regex.hrs.test(e);
              if (
                !n &&
                !r &&
                (e.charAt(1) === o.timeseparator ||
                  -1 !== "-.:".indexOf(e.charAt(1))) &&
                (r = o.regex.hrs.test("0" + e.charAt(0)))
              )
                return (
                  (t.buffer[i - 1] = "0"),
                  (t.buffer[i] = e.charAt(0)),
                  {
                    refreshFromBuffer: { start: ++i - 2, end: i },
                    pos: i,
                    c: o.timeseparator
                  }
                );
              if (r && "24" !== o.hourFormat && o.regex.hrs24.test(e)) {
                var s = parseInt(e, 10);
                return (
                  (t.buffer[i + 5] = 24 === s ? "a" : "p"),
                  (t.buffer[i + 6] = "m"),
                  (s -= 12) < 10
                    ? ((t.buffer[i] = s.toString()), (t.buffer[i - 1] = "0"))
                    : ((t.buffer[i] = s.toString().charAt(1)),
                      (t.buffer[i - 1] = s.toString().charAt(0))),
                  {
                    refreshFromBuffer: { start: i - 1, end: i + 6 },
                    c: t.buffer[i]
                  }
                );
              }
              return r;
            },
            cardinality: 2,
            prevalidator: [
              {
                validator: function(e, t, i, n, o) {
                  var r = o.regex.hrspre.test(e);
                  return n || r || !(r = o.regex.hrs.test("0" + e))
                    ? r
                    : ((t.buffer[i] = "0"), { pos: ++i });
                },
                cardinality: 1
              }
            ]
          },
          s: {
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [
              {
                validator: function(e, t, i, n, o) {
                  var r = o.regex.mspre.test(e);
                  return n || r || !(r = o.regex.ms.test("0" + e))
                    ? r
                    : ((t.buffer[i] = "0"), { pos: ++i });
                },
                cardinality: 1
              }
            ]
          },
          t: {
            validator: function(e, t, i, n, o) {
              return o.regex.ampm.test(e + "m");
            },
            casing: "lower",
            cardinality: 1
          }
        },
        insertMode: !1,
        autoUnmask: !1
      },
      datetime12: {
        mask: "1/2/y h:s t\\m",
        placeholder: "dd/mm/yyyy hh:mm xm",
        alias: "datetime",
        hourFormat: "12"
      },
      "mm/dd/yyyy hh:mm xm": {
        mask: "1/2/y h:s t\\m",
        placeholder: "mm/dd/yyyy hh:mm xm",
        alias: "datetime12",
        regex: {
          val2pre: function(e) {
            var t = a.escapeRegex.call(this, e);
            return new RegExp(
              "((0[13-9]|1[012])" + t + "[0-3])|(02" + t + "[0-2])"
            );
          },
          val2: function(e) {
            var t = a.escapeRegex.call(this, e);
            return new RegExp(
              "((0[1-9]|1[012])" +
                t +
                "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" +
                t +
                "30)|((0[13578]|1[02])" +
                t +
                "31)"
            );
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        leapday: "02/29/",
        onKeyDown: function(e, t, i, n) {
          var o = s(this);
          if (e.ctrlKey && e.keyCode === a.keyCode.RIGHT) {
            var r = new Date();
            o.val(
              (r.getMonth() + 1).toString() +
                r.getDate().toString() +
                r.getFullYear().toString()
            ),
              o.trigger("setvalue");
          }
        }
      },
      "hh:mm t": {
        mask: "h:s t\\m",
        placeholder: "hh:mm xm",
        alias: "datetime",
        hourFormat: "12"
      },
      "h:s t": {
        mask: "h:s t\\m",
        placeholder: "hh:mm xm",
        alias: "datetime",
        hourFormat: "12"
      },
      "hh:mm:ss": {
        mask: "h:s:s",
        placeholder: "hh:mm:ss",
        alias: "datetime",
        autoUnmask: !1
      },
      "hh:mm": {
        mask: "h:s",
        placeholder: "hh:mm",
        alias: "datetime",
        autoUnmask: !1
      },
      date: { alias: "dd/mm/yyyy" },
      "mm/yyyy": {
        mask: "1/y",
        placeholder: "mm/yyyy",
        leapday: "donotuse",
        separator: "/",
        alias: "mm/dd/yyyy"
      },
      shamsi: {
        regex: {
          val2pre: function(e) {
            var t = a.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + t + "[0-3])");
          },
          val2: function(e) {
            var t = a.escapeRegex.call(this, e);
            return new RegExp(
              "((0[1-9]|1[012])" +
                t +
                "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" +
                t +
                "30)|((0[1-6])" +
                t +
                "31)"
            );
          },
          val1pre: new RegExp("[01]"),
          val1: new RegExp("0[1-9]|1[012]")
        },
        yearrange: { minyear: 1300, maxyear: 1499 },
        mask: "y/1/2",
        leapday: "/12/30",
        placeholder: "yyyy/mm/dd",
        alias: "mm/dd/yyyy",
        clearIncomplete: !0
      }
    });
  })(jQuery, Inputmask),
  (function(e, t) {
    t.extendDefinitions({
      A: { validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, casing: "upper" },
      "&": {
        validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
        cardinality: 1,
        casing: "upper"
      },
      "#": { validator: "[0-9A-Fa-f]", cardinality: 1, casing: "upper" }
    }),
      t.extendAliases({
        url: {
          definitions: { i: { validator: ".", cardinality: 1 } },
          mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
          insertMode: !1,
          autoUnmask: !1,
          inputmode: "url"
        },
        ip: {
          mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
          definitions: {
            i: {
              validator: function(e, t, i, n, o) {
                return (
                  -1 < i - 1 && "." !== t.buffer[i - 1]
                    ? ((e = t.buffer[i - 1] + e),
                      (e =
                        -1 < i - 2 && "." !== t.buffer[i - 2]
                          ? t.buffer[i - 2] + e
                          : "0" + e))
                    : (e = "00" + e),
                  new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
                );
              },
              cardinality: 1
            }
          },
          onUnMask: function(e, t, i) {
            return e;
          },
          inputmode: "numeric"
        },
        email: {
          mask:
            "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
          greedy: !1,
          onBeforePaste: function(e, t) {
            return (e = e.toLowerCase()).replace("mailto:", "");
          },
          definitions: {
            "*": {
              validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
              cardinality: 1,
              casing: "lower"
            },
            "-": { validator: "[0-9A-Za-z-]", cardinality: 1, casing: "lower" }
          },
          onUnMask: function(e, t, i) {
            return e;
          },
          inputmode: "email"
        },
        mac: { mask: "##:##:##:##:##:##" },
        vin: {
          mask: "V{13}9{4}",
          definitions: {
            V: {
              validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
              cardinality: 1,
              casing: "upper"
            }
          },
          clearIncomplete: !0,
          autoUnmask: !0
        }
      });
  })(jQuery, Inputmask),
  (function(m, g) {
    g.extendAliases({
      numeric: {
        mask: function(n) {
          function e(e) {
            for (var t = "", i = 0; i < e.length; i++)
              t +=
                n.definitions[e.charAt(i)] ||
                n.optionalmarker.start === e.charAt(i) ||
                n.optionalmarker.end === e.charAt(i) ||
                n.quantifiermarker.start === e.charAt(i) ||
                n.quantifiermarker.end === e.charAt(i) ||
                n.groupmarker.start === e.charAt(i) ||
                n.groupmarker.end === e.charAt(i) ||
                n.alternatormarker === e.charAt(i)
                  ? "\\" + e.charAt(i)
                  : e.charAt(i);
            return t;
          }
          if (
            (0 !== n.repeat &&
              isNaN(n.integerDigits) &&
              (n.integerDigits = n.repeat),
            (n.repeat = 0),
            n.groupSeparator === n.radixPoint &&
              ("." === n.radixPoint
                ? (n.groupSeparator = ",")
                : "," === n.radixPoint
                ? (n.groupSeparator = ".")
                : (n.groupSeparator = "")),
            " " === n.groupSeparator && (n.skipOptionalPartCharacter = void 0),
            (n.autoGroup = n.autoGroup && "" !== n.groupSeparator),
            n.autoGroup &&
              ("string" == typeof n.groupSize &&
                isFinite(n.groupSize) &&
                (n.groupSize = parseInt(n.groupSize)),
              isFinite(n.integerDigits)))
          ) {
            var t = Math.floor(n.integerDigits / n.groupSize),
              i = n.integerDigits % n.groupSize;
            (n.integerDigits =
              parseInt(n.integerDigits) + (0 === i ? t - 1 : t)),
              n.integerDigits < 1 && (n.integerDigits = "*");
          }
          1 < n.placeholder.length && (n.placeholder = n.placeholder.charAt(0)),
            "radixFocus" === n.positionCaretOnClick &&
              "" === n.placeholder &&
              !1 === n.integerOptional &&
              (n.positionCaretOnClick = "lvp"),
            (n.definitions[";"] = n.definitions["~"]),
            (n.definitions[";"].definitionSymbol = "~"),
            !0 === n.numericInput &&
              ((n.positionCaretOnClick =
                "radixFocus" === n.positionCaretOnClick
                  ? "lvp"
                  : n.positionCaretOnClick),
              (n.digitsOptional = !1),
              isNaN(n.digits) && (n.digits = 2),
              (n.decimalProtect = !1));
          var o = "[+]";
          if (
            ((o += e(n.prefix)),
            (o +=
              !0 === n.integerOptional
                ? "~{1," + n.integerDigits + "}"
                : "~{" + n.integerDigits + "}"),
            void 0 !== n.digits)
          ) {
            n.decimalProtect && (n.radixPointDefinitionSymbol = ":");
            var r = n.digits.toString().split(",");
            isFinite(r[0] && r[1] && isFinite(r[1]))
              ? (o +=
                  (n.decimalProtect ? ":" : n.radixPoint) +
                  ";{" +
                  n.digits +
                  "}")
              : (isNaN(n.digits) || 0 < parseInt(n.digits)) &&
                (o += n.digitsOptional
                  ? "[" +
                    (n.decimalProtect ? ":" : n.radixPoint) +
                    ";{1," +
                    n.digits +
                    "}]"
                  : (n.decimalProtect ? ":" : n.radixPoint) +
                    ";{" +
                    n.digits +
                    "}");
          }
          return (
            (o += e(n.suffix)),
            (o += "[-]"),
            (n.greedy = !1),
            null !== n.min &&
              ((n.min = n.min
                .toString()
                .replace(new RegExp(g.escapeRegex(n.groupSeparator), "g"), "")),
              "," === n.radixPoint &&
                (n.min = n.min.replace(n.radixPoint, "."))),
            null !== n.max &&
              ((n.max = n.max
                .toString()
                .replace(new RegExp(g.escapeRegex(n.groupSeparator), "g"), "")),
              "," === n.radixPoint &&
                (n.max = n.max.replace(n.radixPoint, "."))),
            o
          );
        },
        placeholder: "",
        greedy: !1,
        digits: "*",
        digitsOptional: !0,
        radixPoint: ".",
        positionCaretOnClick: "radixFocus",
        groupSize: 3,
        groupSeparator: "",
        autoGroup: !1,
        allowPlus: !0,
        allowMinus: !0,
        negationSymbol: { front: "-", back: "" },
        integerDigits: "+",
        integerOptional: !0,
        prefix: "",
        suffix: "",
        rightAlign: !0,
        decimalProtect: !0,
        min: null,
        max: null,
        step: 1,
        insertMode: !0,
        autoUnmask: !1,
        unmaskAsNumber: !1,
        inputmode: "numeric",
        postFormat: function(e, t, i) {
          var n, o;
          !0 === i.numericInput &&
            ((e = e.reverse()), isFinite(t) && (t = e.join("").length - t - 1));
          var r = e[(t = t >= e.length ? e.length - 1 : t < 0 ? 0 : t)],
            s = e.slice();
          r === i.groupSeparator && (s.splice(t--, 1), (r = s[t]));
          var a = s
            .join("")
            .match(new RegExp("^" + g.escapeRegex(i.negationSymbol.front)));
          t >
            ((a = null !== a && 1 === a.length)
              ? i.negationSymbol.front.length
              : 0) +
              i.prefix.length &&
            t < s.length - i.suffix.length &&
            (s[t] = "!");
          var l = s.join(""),
            d = s.join();
          if (
            (a &&
              (l = (l = l.replace(
                new RegExp("^" + g.escapeRegex(i.negationSymbol.front)),
                ""
              )).replace(
                new RegExp(g.escapeRegex(i.negationSymbol.back) + "$"),
                ""
              )),
            (0 <
              (l = (l = l.replace(
                new RegExp(g.escapeRegex(i.suffix) + "$"),
                ""
              )).replace(new RegExp("^" + g.escapeRegex(i.prefix)), ""))
                .length &&
              i.autoGroup) ||
              -1 !== l.indexOf(i.groupSeparator))
          ) {
            var u = g.escapeRegex(i.groupSeparator),
              c = (l = l.replace(new RegExp(u, "g"), "")).split(
                r === i.radixPoint ? "!" : i.radixPoint
              );
            if (
              ((l = "" === i.radixPoint ? l : c[0]),
              r !== i.negationSymbol.front && (l = l.replace("!", "?")),
              l.length > i.groupSize)
            )
              for (
                var p = new RegExp(
                  "([-+]?[\\d?]+)([\\d?]{" + i.groupSize + "})"
                );
                p.test(l) && "" !== i.groupSeparator;

              )
                l = (l = l.replace(p, "$1" + i.groupSeparator + "$2")).replace(
                  i.groupSeparator + i.groupSeparator,
                  i.groupSeparator
                );
            (l = l.replace("?", "!")),
              "" !== i.radixPoint &&
                1 < c.length &&
                (l += (r === i.radixPoint ? "!" : i.radixPoint) + c[1]);
          }
          (l = i.prefix + l + i.suffix),
            a && (l = i.negationSymbol.front + l + i.negationSymbol.back);
          var h = d !== l.split("").join(),
            f = m.inArray("!", l);
          if ((-1 === f && (f = t), h)) {
            for (e.length = l.length, n = 0, o = l.length; n < o; n++)
              e[n] = l.charAt(n);
            e[f] = r;
          }
          return (
            (f = i.numericInput && isFinite(t) ? e.join("").length - f - 1 : f),
            i.numericInput &&
              ((e = e.reverse()),
              m.inArray(i.radixPoint, e) < f &&
                e.join("").length - i.suffix.length !== f &&
                (f -= 1)),
            { pos: f, refreshFromBuffer: h, buffer: e, isNegative: a }
          );
        },
        onBeforeWrite: function(e, t, i, n) {
          var o;
          if (
            e &&
            ("blur" === e.type || "checkval" === e.type || "keydown" === e.type)
          ) {
            var r = n.numericInput
                ? t
                    .slice()
                    .reverse()
                    .join("")
                : t.join(""),
              s = r.replace(n.prefix, "");
            (s = (s = s.replace(n.suffix, "")).replace(
              new RegExp(g.escapeRegex(n.groupSeparator), "g"),
              ""
            )),
              "," === n.radixPoint && (s = s.replace(n.radixPoint, "."));
            var a = s.match(
              new RegExp(
                "[-" + g.escapeRegex(n.negationSymbol.front) + "]",
                "g"
              )
            );
            if (
              ((a = null !== a && 1 === a.length),
              (s = (s = s.replace(
                new RegExp(
                  "[-" + g.escapeRegex(n.negationSymbol.front) + "]",
                  "g"
                ),
                ""
              )).replace(
                new RegExp(g.escapeRegex(n.negationSymbol.back) + "$"),
                ""
              )),
              isNaN(n.placeholder) &&
                (s = s.replace(
                  new RegExp(g.escapeRegex(n.placeholder), "g"),
                  ""
                )),
              "" !== (s = s === n.negationSymbol.front ? s + "0" : s) &&
                isFinite(s))
            ) {
              var l = parseFloat(s),
                d = a ? -1 * l : l;
              if (
                (null !== n.min && isFinite(n.min) && d < parseFloat(n.min)
                  ? ((l = Math.abs(n.min)), (a = n.min < 0), (r = void 0))
                  : null !== n.max &&
                    isFinite(n.max) &&
                    d > parseFloat(n.max) &&
                    ((l = Math.abs(n.max)), (a = n.max < 0), (r = void 0)),
                (s = l
                  .toString()
                  .replace(".", n.radixPoint)
                  .split("")),
                isFinite(n.digits))
              ) {
                var u = m.inArray(n.radixPoint, s),
                  c = m.inArray(n.radixPoint, r);
                -1 === u && (s.push(n.radixPoint), (u = s.length - 1));
                for (var p = 1; p <= n.digits; p++)
                  n.digitsOptional ||
                  (void 0 !== s[u + p] && s[u + p] !== n.placeholder.charAt(0))
                    ? -1 !== c &&
                      void 0 !== r[c + p] &&
                      (s[u + p] = s[u + p] || r[c + p])
                    : (s[u + p] = "0");
                s[s.length - 1] === n.radixPoint && delete s[s.length - 1];
              }
              if ((l.toString() !== s && l.toString() + "." !== s) || a)
                return (
                  (s = (n.prefix + s.join("")).split("")),
                  !a ||
                    (0 === l && "blur" === e.type) ||
                    (s.unshift(n.negationSymbol.front),
                    s.push(n.negationSymbol.back)),
                  n.numericInput && (s = s.reverse()),
                  (o = n.postFormat(s, n.numericInput ? i : i - 1, n)).buffer &&
                    (o.refreshFromBuffer = o.buffer.join("") !== t.join("")),
                  o
                );
            }
          }
          if (n.autoGroup)
            return (
              ((o = n.postFormat(t, n.numericInput ? i : i - 1, n)).caret =
                i <
                  (o.isNegative ? n.negationSymbol.front.length : 0) +
                    n.prefix.length ||
                i >
                  o.buffer.length -
                    (o.isNegative ? n.negationSymbol.back.length : 0)
                  ? o.pos
                  : o.pos + 1),
              o
            );
        },
        regex: {
          integerPart: function(e) {
            return new RegExp(
              "[" + g.escapeRegex(e.negationSymbol.front) + "+]?\\d+"
            );
          },
          integerNPart: function(e) {
            return new RegExp(
              "[\\d" +
                g.escapeRegex(e.groupSeparator) +
                g.escapeRegex(e.placeholder.charAt(0)) +
                "]+"
            );
          }
        },
        signHandler: function(e, t, i, n, o) {
          if ((!n && o.allowMinus && "-" === e) || (o.allowPlus && "+" === e)) {
            var r = t.buffer.join("").match(o.regex.integerPart(o));
            if (r && 0 < r[0].length)
              return t.buffer[r.index] ===
                ("-" === e ? "+" : o.negationSymbol.front)
                ? "-" === e
                  ? "" !== o.negationSymbol.back
                    ? {
                        pos: 0,
                        c: o.negationSymbol.front,
                        remove: 0,
                        caret: i,
                        insert: {
                          pos: t.buffer.length - 1,
                          c: o.negationSymbol.back
                        }
                      }
                    : { pos: 0, c: o.negationSymbol.front, remove: 0, caret: i }
                  : "" !== o.negationSymbol.back
                  ? {
                      pos: 0,
                      c: "+",
                      remove: [0, t.buffer.length - 1],
                      caret: i
                    }
                  : { pos: 0, c: "+", remove: 0, caret: i }
                : t.buffer[0] === ("-" === e ? o.negationSymbol.front : "+")
                ? "-" === e && "" !== o.negationSymbol.back
                  ? { remove: [0, t.buffer.length - 1], caret: i - 1 }
                  : { remove: 0, caret: i - 1 }
                : "-" === e
                ? "" !== o.negationSymbol.back
                  ? {
                      pos: 0,
                      c: o.negationSymbol.front,
                      caret: i + 1,
                      insert: { pos: t.buffer.length, c: o.negationSymbol.back }
                    }
                  : { pos: 0, c: o.negationSymbol.front, caret: i + 1 }
                : { pos: 0, c: e, caret: i + 1 };
          }
          return !1;
        },
        radixHandler: function(e, t, i, n, o) {
          if (
            !n &&
            !0 !== o.numericInput &&
            e === o.radixPoint &&
            void 0 !== o.digits &&
            (isNaN(o.digits) || 0 < parseInt(o.digits))
          ) {
            var r = m.inArray(o.radixPoint, t.buffer),
              s = t.buffer.join("").match(o.regex.integerPart(o));
            if (-1 !== r && t.validPositions[r])
              return t.validPositions[r - 1]
                ? { caret: r + 1 }
                : { pos: s.index, c: s[0], caret: r + 1 };
            if (!s || ("0" === s[0] && s.index + 1 !== i))
              return (
                (t.buffer[s ? s.index : i] = "0"),
                { pos: (s ? s.index : i) + 1, c: o.radixPoint }
              );
          }
          return !1;
        },
        leadingZeroHandler: function(e, t, i, n, o, r) {
          if (!n)
            if (
              ((s = t.buffer.slice("")).splice(0, o.prefix.length),
              s.splice(s.length - o.suffix.length, o.suffix.length),
              !0 === o.numericInput)
            ) {
              var s;
              if (
                "0" === (s = s.reverse())[0] &&
                void 0 === t.validPositions[i - 1]
              )
                return { pos: i, remove: s.length - 1 };
            } else {
              i -= o.prefix.length;
              var a = m.inArray(o.radixPoint, s),
                l = s
                  .slice(0, -1 !== a ? a : void 0)
                  .join("")
                  .match(o.regex.integerNPart(o));
              if (l && (-1 === a || i <= a)) {
                var d = -1 === a ? 0 : parseInt(s.slice(a + 1).join(""));
                if (
                  0 ===
                    l[0].indexOf(
                      "" !== o.placeholder ? o.placeholder.charAt(0) : "0"
                    ) &&
                  (l.index + 1 === i || (!0 !== r && 0 === d))
                )
                  return (
                    t.buffer.splice(l.index + o.prefix.length, 1),
                    {
                      pos: l.index + o.prefix.length,
                      remove: l.index + o.prefix.length
                    }
                  );
                if ("0" === e && i <= l.index && l[0] !== o.groupSeparator)
                  return !1;
              }
            }
          return !0;
        },
        definitions: {
          "~": {
            validator: function(e, t, i, n, o, r) {
              var s = o.signHandler(e, t, i, n, o);
              if (
                !s &&
                (!(s = o.radixHandler(e, t, i, n, o)) &&
                  (!0 ===
                    (s = n
                      ? new RegExp(
                          "[0-9" + g.escapeRegex(o.groupSeparator) + "]"
                        ).test(e)
                      : new RegExp("[0-9]").test(e)) &&
                    !0 === (s = o.leadingZeroHandler(e, t, i, n, o, r))))
              ) {
                var a = m.inArray(o.radixPoint, t.buffer);
                s =
                  -1 !== a &&
                  (!1 === o.digitsOptional || t.validPositions[i]) &&
                  !0 !== o.numericInput &&
                  a < i &&
                  !n
                    ? { pos: i, remove: i }
                    : { pos: i };
              }
              return s;
            },
            cardinality: 1
          },
          "+": {
            validator: function(e, t, i, n, o) {
              var r = o.signHandler(e, t, i, n, o);
              return (
                !r &&
                  ((n && o.allowMinus && e === o.negationSymbol.front) ||
                    (o.allowMinus && "-" === e) ||
                    (o.allowPlus && "+" === e)) &&
                  (r =
                    !(!n && "-" === e) ||
                    ("" !== o.negationSymbol.back
                      ? {
                          pos: i,
                          c: "-" === e ? o.negationSymbol.front : "+",
                          caret: i + 1,
                          insert: {
                            pos: t.buffer.length,
                            c: o.negationSymbol.back
                          }
                        }
                      : {
                          pos: i,
                          c: "-" === e ? o.negationSymbol.front : "+",
                          caret: i + 1
                        })),
                r
              );
            },
            cardinality: 1,
            placeholder: ""
          },
          "-": {
            validator: function(e, t, i, n, o) {
              var r = o.signHandler(e, t, i, n, o);
              return (
                !r &&
                  n &&
                  o.allowMinus &&
                  e === o.negationSymbol.back &&
                  (r = !0),
                r
              );
            },
            cardinality: 1,
            placeholder: ""
          },
          ":": {
            validator: function(e, t, i, n, o) {
              var r = o.signHandler(e, t, i, n, o);
              if (!r) {
                var s = "[" + g.escapeRegex(o.radixPoint) + "]";
                (r = new RegExp(s).test(e)) &&
                  t.validPositions[i] &&
                  t.validPositions[i].match.placeholder === o.radixPoint &&
                  (r = { caret: i + 1 });
              }
              return r;
            },
            cardinality: 1,
            placeholder: function(e) {
              return e.radixPoint;
            }
          }
        },
        onUnMask: function(e, t, i) {
          if ("" === t && !0 === i.nullable) return t;
          var n = e.replace(i.prefix, "");
          return (
            (n = (n = n.replace(i.suffix, "")).replace(
              new RegExp(g.escapeRegex(i.groupSeparator), "g"),
              ""
            )),
            i.unmaskAsNumber
              ? ("" !== i.radixPoint &&
                  -1 !== n.indexOf(i.radixPoint) &&
                  (n = n.replace(g.escapeRegex.call(this, i.radixPoint), ".")),
                Number(n))
              : n
          );
        },
        isComplete: function(e, t) {
          var i = e.join(""),
            n = e.slice();
          if ((t.postFormat(n, 0, t), n.join("") !== i)) return !1;
          var o = i.replace(t.prefix, "");
          return (
            (o = (o = o.replace(t.suffix, "")).replace(
              new RegExp(g.escapeRegex(t.groupSeparator), "g"),
              ""
            )),
            "," === t.radixPoint &&
              (o = o.replace(g.escapeRegex(t.radixPoint), ".")),
            isFinite(o)
          );
        },
        onBeforeMask: function(e, t) {
          if (
            (!0 === t.numericInput &&
              (e = e
                .split("")
                .reverse()
                .join("")),
            "" !== t.radixPoint && isFinite(e))
          ) {
            var i = e.split("."),
              n = "" !== t.groupSeparator ? parseInt(t.groupSize) : 0;
            2 === i.length &&
              (i[0].length > n || i[1].length > n) &&
              (e = e.toString().replace(".", t.radixPoint));
          }
          var o = e.match(/,/g),
            r = e.match(/\./g);
          if (
            (r && o
              ? r.length > o.length
                ? (e = (e = e.replace(/\./g, "")).replace(",", t.radixPoint))
                : o.length > r.length
                ? (e = (e = e.replace(/,/g, "")).replace(".", t.radixPoint))
                : (e =
                    e.indexOf(".") < e.indexOf(",")
                      ? e.replace(/\./g, "")
                      : (e = e.replace(/,/g, "")))
              : (e = e.replace(
                  new RegExp(g.escapeRegex(t.groupSeparator), "g"),
                  ""
                )),
            0 === t.digits &&
              (-1 !== e.indexOf(".")
                ? (e = e.substring(0, e.indexOf(".")))
                : -1 !== e.indexOf(",") &&
                  (e = e.substring(0, e.indexOf(",")))),
            "" !== t.radixPoint &&
              isFinite(t.digits) &&
              -1 !== e.indexOf(t.radixPoint))
          ) {
            var s = e.split(t.radixPoint)[1].match(new RegExp("\\d*"))[0];
            if (parseInt(t.digits) < s.toString().length) {
              var a = Math.pow(10, parseInt(t.digits));
              (e = e.replace(g.escapeRegex(t.radixPoint), ".")),
                (e = (e = Math.round(parseFloat(e) * a) / a)
                  .toString()
                  .replace(".", t.radixPoint));
            }
          }
          return (
            !0 === t.numericInput &&
              (e = e
                .split("")
                .reverse()
                .join("")),
            e.toString()
          );
        },
        canClearPosition: function(e, t, i, n, o) {
          var r = e.validPositions[t].input;
          return (
            r !== o.radixPoint ||
            (null !== e.validPositions[t].match.fn &&
              !1 === o.decimalProtect) ||
            isFinite(r) ||
            t === i ||
            r === o.groupSeparator ||
            r === o.negationSymbol.front ||
            r === o.negationSymbol.back
          );
        },
        onKeyDown: function(e, t, i, n) {
          var o = m(this);
          if (e.ctrlKey)
            switch (e.keyCode) {
              case g.keyCode.UP:
                o.val(
                  parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n.step)
                ),
                  o.trigger("setvalue");
                break;
              case g.keyCode.DOWN:
                o.val(
                  parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n.step)
                ),
                  o.trigger("setvalue");
            }
        }
      },
      currency: {
        prefix: "$ ",
        groupSeparator: ",",
        alias: "numeric",
        placeholder: "0",
        autoGroup: !0,
        digits: 2,
        digitsOptional: !1,
        clearMaskOnLostFocus: !1
      },
      decimal: { alias: "numeric" },
      integer: { alias: "numeric", digits: 0, radixPoint: "" },
      percentage: {
        alias: "numeric",
        digits: 2,
        radixPoint: ".",
        placeholder: "0",
        autoGroup: !1,
        min: 0,
        max: 100,
        suffix: " %",
        allowPlus: !1,
        allowMinus: !1
      }
    });
  })(jQuery, Inputmask),
  (function(s, e) {
    function t(e, t) {
      var i = (e.mask || e)
          .replace(/#/g, "9")
          .replace(/\)/, "9")
          .replace(/[+()#-]/g, ""),
        n = (t.mask || t)
          .replace(/#/g, "9")
          .replace(/\)/, "9")
          .replace(/[+()#-]/g, ""),
        o = (e.mask || e).split("#")[0],
        r = (t.mask || t).split("#")[0];
      return 0 === r.indexOf(o)
        ? -1
        : 0 === o.indexOf(r)
        ? 1
        : i.localeCompare(n);
    }
    var i = e.prototype.analyseMask;
    (e.prototype.analyseMask = function(l, r) {
      var d = {};
      return (
        r.phoneCodes &&
          1e3 < r.phoneCodes.length &&
          ((function e(t, i, n) {
            (n = n || d), "" !== (i = i || "") && (n[i] = {});
            for (var o = "", r = n[i] || n, s = t.length - 1; 0 <= s; s--)
              (r[(o = (l = t[s].mask || t[s]).substr(0, 1))] = r[o] || []),
                r[o].unshift(l.substr(1)),
                t.splice(s, 1);
            for (var a in r) 500 < r[a].length && e(r[a].slice(), a, r);
          })(
            (l = l.substr(1, l.length - 2)).split(
              r.groupmarker.end + r.alternatormarker + r.groupmarker.start
            )
          ),
          (l = (function e(t) {
            var i = "",
              n = [];
            for (var o in t)
              s.isArray(t[o])
                ? 1 === t[o].length
                  ? n.push(o + t[o])
                  : n.push(
                      o +
                        r.groupmarker.start +
                        t[o].join(
                          r.groupmarker.end +
                            r.alternatormarker +
                            r.groupmarker.start
                        ) +
                        r.groupmarker.end
                    )
                : n.push(o + e(t[o]));
            return (
              i +
              (1 === n.length
                ? n[0]
                : r.groupmarker.start +
                  n.join(
                    r.groupmarker.end + r.alternatormarker + r.groupmarker.start
                  ) +
                  r.groupmarker.end)
            );
          })(d))),
        i.call(this, l, r)
      );
    }),
      e.extendAliases({
        abstractphone: {
          groupmarker: { start: "<", end: ">" },
          countrycode: "",
          phoneCodes: [],
          mask: function(e) {
            return (
              (e.definitions = { "#": e.definitions[9] }), e.phoneCodes.sort(t)
            );
          },
          keepStatic: !0,
          onBeforeMask: function(e, t) {
            var i = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
            return (
              (1 < i.indexOf(t.countrycode) ||
                -1 === i.indexOf(t.countrycode)) &&
                (i = "+" + t.countrycode + i),
              i
            );
          },
          onUnMask: function(e, t, i) {
            return t;
          },
          inputmode: "tel"
        }
      });
  })(jQuery, Inputmask),
  (function(b, e) {
    e.extendAliases({
      Regex: {
        mask: "r",
        greedy: !1,
        repeat: "*",
        regex: null,
        regexTokens: null,
        tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
        quantifierFilter: /[0-9]+[^,]/,
        isComplete: function(e, t) {
          return new RegExp(t.regex).test(e.join(""));
        },
        definitions: {
          r: {
            validator: function(e, t, i, n, d) {
              function u(e, t) {
                (this.matches = []),
                  (this.isGroup = e || !1),
                  (this.isQuantifier = t || !1),
                  (this.quantifier = { min: 1, max: 1 }),
                  (this.repeaterPart = void 0);
              }
              function m(e, t) {
                var i = !1;
                t && ((v += "("), y++);
                for (var n = 0; n < e.matches.length; n++) {
                  var o = e.matches[n];
                  if (!0 === o.isGroup) i = m(o, !0);
                  else if (!0 === o.isQuantifier) {
                    var r = b.inArray(o, e.matches),
                      s = e.matches[r - 1],
                      a = v;
                    if (isNaN(o.quantifier.max)) {
                      for (
                        ;
                        o.repeaterPart &&
                        o.repeaterPart !== v &&
                        o.repeaterPart.length > v.length &&
                        !(i = m(s, !0));

                      );
                      (i = i || m(s, !0)) && (o.repeaterPart = v),
                        (v = a + o.quantifier.max);
                    } else {
                      for (
                        var l = 0, d = o.quantifier.max - 1;
                        l < d && !(i = m(s, !0));
                        l++
                      );
                      v =
                        a +
                        "{" +
                        o.quantifier.min +
                        "," +
                        o.quantifier.max +
                        "}";
                    }
                  } else if (void 0 !== o.matches)
                    for (var u = 0; u < o.length && !(i = m(o[u], t)); u++);
                  else {
                    var c;
                    if ("[" == o.charAt(0)) {
                      (c = v), (c += o);
                      for (var p = 0; p < y; p++) c += ")";
                      i = new RegExp("^(" + c + ")$").test(g);
                    } else
                      for (var h = 0, f = o.length; h < f; h++)
                        if ("\\" !== o.charAt(h)) {
                          (c = v),
                            (c = (c += o.substr(0, h + 1)).replace(/\|$/, ""));
                          for (p = 0; p < y; p++) c += ")";
                          if ((i = new RegExp("^(" + c + ")$").test(g))) break;
                        }
                    v += o;
                  }
                  if (i) break;
                }
                return t && ((v += ")"), y--), i;
              }
              var g,
                c,
                o = t.buffer.slice(),
                v = "",
                r = !1,
                y = 0;
              null === d.regexTokens &&
                (function() {
                  var e,
                    t,
                    i = new u(),
                    n = [];
                  for (d.regexTokens = []; (e = d.tokenizer.exec(d.regex)); )
                    switch (((t = e[0]), t.charAt(0))) {
                      case "(":
                        n.push(new u(!0));
                        break;
                      case ")":
                        (c = n.pop()),
                          0 < n.length
                            ? n[n.length - 1].matches.push(c)
                            : i.matches.push(c);
                        break;
                      case "{":
                      case "+":
                      case "*":
                        var o = new u(!1, !0),
                          r = (t = t.replace(/[{}]/g, "")).split(","),
                          s = isNaN(r[0]) ? r[0] : parseInt(r[0]),
                          a =
                            1 === r.length
                              ? s
                              : isNaN(r[1])
                              ? r[1]
                              : parseInt(r[1]);
                        if (
                          ((o.quantifier = { min: s, max: a }), 0 < n.length)
                        ) {
                          var l = n[n.length - 1].matches;
                          (e = l.pop()).isGroup ||
                            ((c = new u(!0)).matches.push(e), (e = c)),
                            l.push(e),
                            l.push(o);
                        } else
                          (e = i.matches.pop()).isGroup ||
                            ((c = new u(!0)).matches.push(e), (e = c)),
                            i.matches.push(e),
                            i.matches.push(o);
                        break;
                      default:
                        0 < n.length
                          ? n[n.length - 1].matches.push(t)
                          : i.matches.push(t);
                    }
                  0 < i.matches.length && d.regexTokens.push(i);
                })(),
                o.splice(i, 0, e),
                (g = o.join(""));
              for (var s = 0; s < d.regexTokens.length; s++) {
                var a = d.regexTokens[s];
                if ((r = m(a, a.isGroup))) break;
              }
              return r;
            },
            cardinality: 1
          }
        }
      }
    });
  })(jQuery, Inputmask),
  (function(o, i, T, u) {
    var r = T("html"),
      n = T(o),
      d = T(i),
      E = (T.fancybox = function() {
        E.open.apply(this, arguments);
      }),
      s = navigator.userAgent.match(/msie/i),
      a = null,
      l = i.createTouch !== u,
      c = function(e) {
        return e && e.hasOwnProperty && e instanceof T;
      },
      p = function(e) {
        return e && "string" === T.type(e);
      },
      A = function(e) {
        return p(e) && 0 < e.indexOf("%");
      },
      P = function(e, t) {
        var i = parseInt(e, 10) || 0;
        return t && A(e) && (i *= E.getViewport()[t] / 100), Math.ceil(i);
      },
      M = function(e, t) {
        return P(e, t) + "px";
      };
    T.extend(E, {
      version: "2.1.5",
      defaults: {
        padding: 15,
        margin: 20,
        width: 800,
        height: 600,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 9999,
        maxHeight: 9999,
        pixelRatio: 1,
        autoSize: !0,
        autoHeight: !1,
        autoWidth: !1,
        autoResize: !0,
        autoCenter: !l,
        fitToView: !0,
        aspectRatio: !1,
        topRatio: 0.5,
        leftRatio: 0.5,
        scrolling: "auto",
        wrapCSS: "",
        arrows: !0,
        closeBtn: !0,
        closeClick: !1,
        nextClick: !1,
        mouseWheel: !0,
        autoPlay: !1,
        playSpeed: 3e3,
        preload: 3,
        modal: !1,
        loop: !0,
        ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
        iframe: { scrolling: "auto", preload: !0 },
        swf: {
          wmode: "transparent",
          allowfullscreen: "true",
          allowscriptaccess: "always"
        },
        keys: {
          next: { 13: "left", 34: "up", 39: "left", 40: "up" },
          prev: { 8: "right", 33: "down", 37: "right", 38: "down" },
          close: [27],
          play: [32],
          toggle: [70]
        },
        direction: { next: "left", prev: "right" },
        scrollOutside: !0,
        index: 0,
        type: null,
        href: null,
        content: null,
        title: null,
        tpl: {
          wrap:
            '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
          image: '<img class="fancybox-image" src="{href}" alt="" />',
          iframe:
            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
            (s ? ' allowtransparency="true"' : "") +
            "></iframe>",
          error:
            '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
          closeBtn:
            '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
          next:
            '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
          prev:
            '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
        },
        openEffect: "fade",
        openSpeed: 250,
        openEasing: "swing",
        openOpacity: !0,
        openMethod: "zoomIn",
        closeEffect: "fade",
        closeSpeed: 250,
        closeEasing: "swing",
        closeOpacity: !0,
        closeMethod: "zoomOut",
        nextEffect: "elastic",
        nextSpeed: 250,
        nextEasing: "swing",
        nextMethod: "changeIn",
        prevEffect: "elastic",
        prevSpeed: 250,
        prevEasing: "swing",
        prevMethod: "changeOut",
        helpers: { overlay: !0, title: !0 },
        onCancel: T.noop,
        beforeLoad: T.noop,
        afterLoad: T.noop,
        beforeShow: T.noop,
        afterShow: T.noop,
        beforeChange: T.noop,
        beforeClose: T.noop,
        afterClose: T.noop
      },
      group: {},
      opts: {},
      previous: null,
      coming: null,
      current: null,
      isActive: !1,
      isOpen: !1,
      isOpened: !1,
      wrap: null,
      skin: null,
      outer: null,
      inner: null,
      player: { timer: null, isActive: !1 },
      ajaxLoad: null,
      imgPreload: null,
      transitions: {},
      helpers: {},
      open: function(l, d) {
        if (l && (T.isPlainObject(d) || (d = {}), !1 !== E.close(!0)))
          return (
            T.isArray(l) || (l = c(l) ? T(l).get() : [l]),
            T.each(l, function(e, t) {
              var i,
                n,
                o,
                r,
                s,
                a = {};
              "object" === T.type(t) &&
                (t.nodeType && (t = T(t)),
                c(t)
                  ? ((a = {
                      href: t.data("fancybox-href") || t.attr("href"),
                      title: T("<div/>")
                        .text(t.data("fancybox-title") || t.attr("title"))
                        .html(),
                      isDom: !0,
                      element: t
                    }),
                    T.metadata && T.extend(!0, a, t.metadata()))
                  : (a = t)),
                (i = d.href || a.href || (p(t) ? t : null)),
                (n = d.title !== u ? d.title : a.title || ""),
                !(r = (o = d.content || a.content)
                  ? "html"
                  : d.type || a.type) &&
                  a.isDom &&
                  ((r = t.data("fancybox-type")) ||
                    (r = (r = t.prop("class").match(/fancybox\.(\w+)/))
                      ? r[1]
                      : null)),
                p(i) &&
                  (r ||
                    (E.isImage(i)
                      ? (r = "image")
                      : E.isSWF(i)
                      ? (r = "swf")
                      : "#" === i.charAt(0)
                      ? (r = "inline")
                      : p(t) && ((r = "html"), (o = t))),
                  "ajax" === r &&
                    ((i = (s = i.split(/\s+/, 2)).shift()), (s = s.shift()))),
                o ||
                  ("inline" === r
                    ? i
                      ? (o = T(p(i) ? i.replace(/.*(?=#[^\s]+$)/, "") : i))
                      : a.isDom && (o = t)
                    : "html" === r
                    ? (o = i)
                    : r || i || !a.isDom || ((r = "inline"), (o = t))),
                T.extend(a, {
                  href: i,
                  type: r,
                  content: o,
                  title: n,
                  selector: s
                }),
                (l[e] = a);
            }),
            (E.opts = T.extend(!0, {}, E.defaults, d)),
            d.keys !== u &&
              (E.opts.keys = !!d.keys && T.extend({}, E.defaults.keys, d.keys)),
            (E.group = l),
            E._start(E.opts.index)
          );
      },
      cancel: function() {
        var e = E.coming;
        (e && !1 === E.trigger("onCancel")) ||
          (E.hideLoading(),
          e &&
            (E.ajaxLoad && E.ajaxLoad.abort(),
            (E.ajaxLoad = null),
            E.imgPreload && (E.imgPreload.onload = E.imgPreload.onerror = null),
            e.wrap &&
              e.wrap
                .stop(!0, !0)
                .trigger("onReset")
                .remove(),
            (E.coming = null),
            E.current || E._afterZoomOut(e)));
      },
      close: function(e) {
        E.cancel(),
          !1 !== E.trigger("beforeClose") &&
            (E.unbindEvents(),
            E.isActive &&
              (E.isOpen && !0 !== e
                ? ((E.isOpen = E.isOpened = !1),
                  (E.isClosing = !0),
                  T(".fancybox-item, .fancybox-nav").remove(),
                  E.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                  E.transitions[E.current.closeMethod]())
                : (T(".fancybox-wrap")
                    .stop(!0)
                    .trigger("onReset")
                    .remove(),
                  E._afterZoomOut())));
      },
      play: function(e) {
        var t = function() {
            clearTimeout(E.player.timer);
          },
          i = function() {
            t(),
              E.current &&
                E.player.isActive &&
                (E.player.timer = setTimeout(E.next, E.current.playSpeed));
          },
          n = function() {
            t(),
              d.unbind(".player"),
              (E.player.isActive = !1),
              E.trigger("onPlayEnd");
          };
        !0 === e || (!E.player.isActive && !1 !== e)
          ? E.current &&
            (E.current.loop || E.current.index < E.group.length - 1) &&
            ((E.player.isActive = !0),
            d.bind({
              "onCancel.player beforeClose.player": n,
              "onUpdate.player": i,
              "beforeLoad.player": t
            }),
            i(),
            E.trigger("onPlayStart"))
          : n();
      },
      next: function(e) {
        var t = E.current;
        t && (p(e) || (e = t.direction.next), E.jumpto(t.index + 1, e, "next"));
      },
      prev: function(e) {
        var t = E.current;
        t && (p(e) || (e = t.direction.prev), E.jumpto(t.index - 1, e, "prev"));
      },
      jumpto: function(e, t, i) {
        var n = E.current;
        n &&
          ((e = P(e)),
          (E.direction = t || n.direction[e >= n.index ? "next" : "prev"]),
          (E.router = i || "jumpto"),
          n.loop &&
            (e < 0 && (e = n.group.length + (e % n.group.length)),
            (e %= n.group.length)),
          n.group[e] !== u && (E.cancel(), E._start(e)));
      },
      reposition: function(e, t) {
        var i,
          n = E.current,
          o = n ? n.wrap : null;
        o &&
          ((i = E._getPosition(t)),
          e && "scroll" === e.type
            ? (delete i.position, o.stop(!0, !0).animate(i, 200))
            : (o.css(i), (n.pos = T.extend({}, n.dim, i))));
      },
      update: function(t) {
        var i = t && t.originalEvent && t.originalEvent.type,
          n = !i || "orientationchange" === i;
        n && (clearTimeout(a), (a = null)),
          E.isOpen &&
            !a &&
            (a = setTimeout(
              function() {
                var e = E.current;
                e &&
                  !E.isClosing &&
                  (E.wrap.removeClass("fancybox-tmp"),
                  (n || "load" === i || ("resize" === i && e.autoResize)) &&
                    E._setDimension(),
                  ("scroll" === i && e.canShrink) || E.reposition(t),
                  E.trigger("onUpdate"),
                  (a = null));
              },
              n && !l ? 0 : 300
            ));
      },
      toggle: function(e) {
        E.isOpen &&
          ((E.current.fitToView =
            "boolean" === T.type(e) ? e : !E.current.fitToView),
          l &&
            (E.wrap.removeAttr("style").addClass("fancybox-tmp"),
            E.trigger("onUpdate")),
          E.update());
      },
      hideLoading: function() {
        d.unbind(".loading"), T("#fancybox-loading").remove();
      },
      showLoading: function() {
        var e, t;
        E.hideLoading(),
          (e = T('<div id="fancybox-loading"><div></div></div>')
            .click(E.cancel)
            .appendTo("body")),
          d.bind("keydown.loading", function(e) {
            27 === (e.which || e.keyCode) && (e.preventDefault(), E.cancel());
          }),
          E.defaults.fixed ||
            ((t = E.getViewport()),
            e.css({
              position: "absolute",
              top: 0.5 * t.h + t.y,
              left: 0.5 * t.w + t.x
            })),
          E.trigger("onLoading");
      },
      getViewport: function() {
        var e = (E.current && E.current.locked) || !1,
          t = { x: n.scrollLeft(), y: n.scrollTop() };
        return (
          e && e.length
            ? ((t.w = e[0].clientWidth), (t.h = e[0].clientHeight))
            : ((t.w = l && o.innerWidth ? o.innerWidth : n.width()),
              (t.h = l && o.innerHeight ? o.innerHeight : n.height())),
          t
        );
      },
      unbindEvents: function() {
        E.wrap && c(E.wrap) && E.wrap.unbind(".fb"),
          d.unbind(".fb"),
          n.unbind(".fb");
      },
      bindEvents: function() {
        var t,
          s = E.current;
        s &&
          (n.bind(
            "orientationchange.fb" +
              (l ? "" : " resize.fb") +
              (s.autoCenter && !s.locked ? " scroll.fb" : ""),
            E.update
          ),
          (t = s.keys) &&
            d.bind("keydown.fb", function(i) {
              var n = i.which || i.keyCode,
                e = i.target || i.srcElement;
              if (27 === n && E.coming) return !1;
              i.ctrlKey ||
                i.altKey ||
                i.shiftKey ||
                i.metaKey ||
                (e && (e.type || T(e).is("[contenteditable]"))) ||
                T.each(t, function(e, t) {
                  return 1 < s.group.length && t[n] !== u
                    ? (E[e](t[n]), i.preventDefault(), !1)
                    : -1 < T.inArray(n, t)
                    ? (E[e](), i.preventDefault(), !1)
                    : void 0;
                });
            }),
          T.fn.mousewheel &&
            s.mouseWheel &&
            E.wrap.bind("mousewheel.fb", function(e, t, i, n) {
              for (
                var o = T(e.target || null), r = !1;
                o.length &&
                !(r || o.is(".fancybox-skin") || o.is(".fancybox-wrap"));

              )
                (r =
                  o[0] &&
                  !(o[0].style.overflow && "hidden" === o[0].style.overflow) &&
                  ((o[0].clientWidth && o[0].scrollWidth > o[0].clientWidth) ||
                    (o[0].clientHeight &&
                      o[0].scrollHeight > o[0].clientHeight))),
                  (o = T(o).parent());
              0 !== t &&
                !r &&
                1 < E.group.length &&
                !s.canShrink &&
                (0 < n || 0 < i
                  ? E.prev(0 < n ? "down" : "left")
                  : (n < 0 || i < 0) && E.next(n < 0 ? "up" : "right"),
                e.preventDefault());
            }));
      },
      trigger: function(i, e) {
        var t,
          n = e || E.coming || E.current;
        if (n) {
          if (
            (T.isFunction(n[i]) &&
              (t = n[i].apply(n, Array.prototype.slice.call(arguments, 1))),
            !1 === t)
          )
            return !1;
          n.helpers &&
            T.each(n.helpers, function(e, t) {
              t &&
                E.helpers[e] &&
                T.isFunction(E.helpers[e][i]) &&
                E.helpers[e][i](T.extend(!0, {}, E.helpers[e].defaults, t), n);
            });
        }
        d.trigger(i);
      },
      isImage: function(e) {
        return (
          p(e) &&
          e.match(
            /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i
          )
        );
      },
      isSWF: function(e) {
        return p(e) && e.match(/\.(swf)((\?|#).*)?$/i);
      },
      _start: function(e) {
        var t,
          i,
          n = {};
        if (((e = P(e)), !(t = E.group[e] || null))) return !1;
        if (
          ((t = (n = T.extend(!0, {}, E.opts, t)).margin),
          (i = n.padding),
          "number" === T.type(t) && (n.margin = [t, t, t, t]),
          "number" === T.type(i) && (n.padding = [i, i, i, i]),
          n.modal &&
            T.extend(!0, n, {
              closeBtn: !1,
              closeClick: !1,
              nextClick: !1,
              arrows: !1,
              mouseWheel: !1,
              keys: null,
              helpers: { overlay: { closeClick: !1 } }
            }),
          n.autoSize && (n.autoWidth = n.autoHeight = !0),
          "auto" === n.width && (n.autoWidth = !0),
          "auto" === n.height && (n.autoHeight = !0),
          (n.group = E.group),
          (n.index = e),
          (E.coming = n),
          !1 === E.trigger("beforeLoad"))
        )
          E.coming = null;
        else {
          if (((i = n.type), (t = n.href), !i))
            return (
              (E.coming = null),
              !(!E.current || !E.router || "jumpto" === E.router) &&
                ((E.current.index = e), E[E.router](E.direction))
            );
          if (
            ((E.isActive = !0),
            ("image" !== i && "swf" !== i) ||
              ((n.autoHeight = n.autoWidth = !1), (n.scrolling = "visible")),
            "image" === i && (n.aspectRatio = !0),
            "iframe" === i && l && (n.scrolling = "scroll"),
            (n.wrap = T(n.tpl.wrap)
              .addClass(
                "fancybox-" +
                  (l ? "mobile" : "desktop") +
                  " fancybox-type-" +
                  i +
                  " fancybox-tmp " +
                  n.wrapCSS
              )
              .appendTo(n.parent || "body")),
            T.extend(n, {
              skin: T(".fancybox-skin", n.wrap),
              outer: T(".fancybox-outer", n.wrap),
              inner: T(".fancybox-inner", n.wrap)
            }),
            T.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
              n.skin.css("padding" + t, M(n.padding[e]));
            }),
            E.trigger("onReady"),
            "inline" === i || "html" === i)
          ) {
            if (!n.content || !n.content.length) return E._error("content");
          } else if (!t) return E._error("href");
          "image" === i
            ? E._loadImage()
            : "ajax" === i
            ? E._loadAjax()
            : "iframe" === i
            ? E._loadIframe()
            : E._afterLoad();
        }
      },
      _error: function(e) {
        T.extend(E.coming, {
          type: "html",
          autoWidth: !0,
          autoHeight: !0,
          minWidth: 0,
          minHeight: 0,
          scrolling: "no",
          hasError: e,
          content: E.coming.tpl.error
        }),
          E._afterLoad();
      },
      _loadImage: function() {
        var e = (E.imgPreload = new Image());
        (e.onload = function() {
          (this.onload = this.onerror = null),
            (E.coming.width = this.width / E.opts.pixelRatio),
            (E.coming.height = this.height / E.opts.pixelRatio),
            E._afterLoad();
        }),
          (e.onerror = function() {
            (this.onload = this.onerror = null), E._error("image");
          }),
          (e.src = E.coming.href),
          !0 !== e.complete && E.showLoading();
      },
      _loadAjax: function() {
        var i = E.coming;
        E.showLoading(),
          (E.ajaxLoad = T.ajax(
            T.extend({}, i.ajax, {
              url: i.href,
              error: function(e, t) {
                E.coming && "abort" !== t
                  ? E._error("ajax", e)
                  : E.hideLoading();
              },
              success: function(e, t) {
                "success" === t && ((i.content = e), E._afterLoad());
              }
            })
          ));
      },
      _loadIframe: function() {
        var e = E.coming,
          t = T(e.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
            .attr("scrolling", l ? "auto" : e.iframe.scrolling)
            .attr("src", e.href);
        T(e.wrap).bind("onReset", function() {
          try {
            T(this)
              .find("iframe")
              .hide()
              .attr("src", "//about:blank")
              .end()
              .empty();
          } catch (e) {}
        }),
          e.iframe.preload &&
            (E.showLoading(),
            t.one("load", function() {
              T(this).data("ready", 1),
                l || T(this).bind("load.fb", E.update),
                T(this)
                  .parents(".fancybox-wrap")
                  .width("100%")
                  .removeClass("fancybox-tmp")
                  .show(),
                E._afterLoad();
            })),
          (e.content = t.appendTo(e.inner)),
          e.iframe.preload || E._afterLoad();
      },
      _preloadImages: function() {
        var e,
          t,
          i = E.group,
          n = E.current,
          o = i.length,
          r = n.preload ? Math.min(n.preload, o - 1) : 0;
        for (t = 1; t <= r; t += 1)
          "image" === (e = i[(n.index + t) % o]).type &&
            e.href &&
            (new Image().src = e.href);
      },
      _afterLoad: function() {
        var i,
          e,
          t,
          n,
          o,
          r = E.coming,
          s = E.current;
        if ((E.hideLoading(), r && !1 !== E.isActive))
          if (!1 === E.trigger("afterLoad", r, s))
            r.wrap
              .stop(!0)
              .trigger("onReset")
              .remove(),
              (E.coming = null);
          else {
            switch (
              (s &&
                (E.trigger("beforeChange", s),
                s.wrap
                  .stop(!0)
                  .removeClass("fancybox-opened")
                  .find(".fancybox-item, .fancybox-nav")
                  .remove()),
              E.unbindEvents(),
              (i = r.content),
              (e = r.type),
              (t = r.scrolling),
              T.extend(E, {
                wrap: r.wrap,
                skin: r.skin,
                outer: r.outer,
                inner: r.inner,
                current: r,
                previous: s
              }),
              (n = r.href),
              e)
            ) {
              case "inline":
              case "ajax":
              case "html":
                r.selector
                  ? (i = T("<div>")
                      .html(i)
                      .find(r.selector))
                  : c(i) &&
                    (i.data("fancybox-placeholder") ||
                      i.data(
                        "fancybox-placeholder",
                        T('<div class="fancybox-placeholder"></div>')
                          .insertAfter(i)
                          .hide()
                      ),
                    (i = i.show().detach()),
                    r.wrap.bind("onReset", function() {
                      T(this).find(i).length &&
                        i
                          .hide()
                          .replaceAll(i.data("fancybox-placeholder"))
                          .data("fancybox-placeholder", !1);
                    }));
                break;
              case "image":
                i = r.tpl.image.replace(/\{href\}/g, n);
                break;
              case "swf":
                (i =
                  '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                  n +
                  '"></param>'),
                  (o = ""),
                  T.each(r.swf, function(e, t) {
                    (i += '<param name="' + e + '" value="' + t + '"></param>'),
                      (o += " " + e + '="' + t + '"');
                  }),
                  (i +=
                    '<embed src="' +
                    n +
                    '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                    o +
                    "></embed></object>");
            }
            (c(i) && i.parent().is(r.inner)) || r.inner.append(i),
              E.trigger("beforeShow"),
              r.inner.css(
                "overflow",
                "yes" === t ? "scroll" : "no" === t ? "hidden" : t
              ),
              E._setDimension(),
              E.reposition(),
              (E.isOpen = !1),
              (E.coming = null),
              E.bindEvents(),
              E.isOpened
                ? s.prevMethod && E.transitions[s.prevMethod]()
                : T(".fancybox-wrap")
                    .not(r.wrap)
                    .stop(!0)
                    .trigger("onReset")
                    .remove(),
              E.transitions[E.isOpened ? r.nextMethod : r.openMethod](),
              E._preloadImages();
          }
      },
      _setDimension: function() {
        var e,
          t,
          i,
          n,
          o,
          r,
          s,
          a,
          l,
          d = E.getViewport(),
          u = 0,
          c = !1,
          p = !1,
          h = ((c = E.wrap), E.skin),
          f = E.inner,
          m = E.current,
          g = ((p = m.width), m.height),
          v = m.minWidth,
          y = m.minHeight,
          b = m.maxWidth,
          w = m.maxHeight,
          k = m.scrolling,
          x = m.scrollOutside ? m.scrollbarWidth : 0,
          _ = m.margin,
          C = P(_[1] + _[3]),
          S = P(_[0] + _[2]);
        if (
          (c
            .add(h)
            .add(f)
            .width("auto")
            .height("auto")
            .removeClass("fancybox-tmp"),
          (t = C + (_ = P(h.outerWidth(!0) - h.width()))),
          (i = S + (e = P(h.outerHeight(!0) - h.height()))),
          (n = A(p) ? ((d.w - t) * P(p)) / 100 : p),
          (o = A(g) ? ((d.h - i) * P(g)) / 100 : g),
          "iframe" === m.type)
        ) {
          if (((l = m.content), m.autoHeight && 1 === l.data("ready")))
            try {
              l[0].contentWindow.document.location &&
                (f.width(n).height(9999),
                (r = l.contents().find("body")),
                x && r.css("overflow-x", "hidden"),
                (o = r.outerHeight(!0)));
            } catch (e) {}
        } else
          (m.autoWidth || m.autoHeight) &&
            (f.addClass("fancybox-tmp"),
            m.autoWidth || f.width(n),
            m.autoHeight || f.height(o),
            m.autoWidth && (n = f.width()),
            m.autoHeight && (o = f.height()),
            f.removeClass("fancybox-tmp"));
        if (
          ((p = P(n)),
          (g = P(o)),
          (a = n / o),
          (v = P(A(v) ? P(v, "w") - t : v)),
          (b = P(A(b) ? P(b, "w") - t : b)),
          (y = P(A(y) ? P(y, "h") - i : y)),
          (r = b),
          (s = w = P(A(w) ? P(w, "h") - i : w)),
          m.fitToView &&
            ((b = Math.min(d.w - t, b)), (w = Math.min(d.h - i, w))),
          (t = d.w - C),
          (S = d.h - S),
          m.aspectRatio
            ? (b < p && (g = P((p = b) / a)),
              w < g && (p = P((g = w) * a)),
              p < v && (g = P((p = v) / a)),
              g < y && (p = P((g = y) * a)))
            : ((p = Math.max(v, Math.min(p, b))),
              m.autoHeight &&
                "iframe" !== m.type &&
                (f.width(p), (g = f.height())),
              (g = Math.max(y, Math.min(g, w)))),
          m.fitToView)
        )
          if (
            (f.width(p).height(g),
            c.width(p + _),
            (d = c.width()),
            (C = c.height()),
            m.aspectRatio)
          )
            for (; (t < d || S < C) && v < p && y < g && !(19 < u++); )
              (g = Math.max(y, Math.min(w, g - 10))),
                (p = P(g * a)) < v && (g = P((p = v) / a)),
                b < p && (g = P((p = b) / a)),
                f.width(p).height(g),
                c.width(p + _),
                (d = c.width()),
                (C = c.height());
          else
            (p = Math.max(v, Math.min(p, p - (d - t)))),
              (g = Math.max(y, Math.min(g, g - (C - S))));
        x && "auto" === k && g < o && p + _ + x < t && (p += x),
          f.width(p).height(g),
          c.width(p + _),
          (d = c.width()),
          (C = c.height()),
          (c = (t < d || S < C) && v < p && y < g),
          (p = m.aspectRatio
            ? p < r && g < s && p < n && g < o
            : (p < r || g < s) && (p < n || g < o)),
          T.extend(m, {
            dim: { width: M(d), height: M(C) },
            origWidth: n,
            origHeight: o,
            canShrink: c,
            canExpand: p,
            wPadding: _,
            hPadding: e,
            wrapSpace: C - h.outerHeight(!0),
            skinSpace: h.height() - g
          }),
          !l && m.autoHeight && y < g && g < w && !p && f.height("auto");
      },
      _getPosition: function(e) {
        var t = E.current,
          i = E.getViewport(),
          n = t.margin,
          o = E.wrap.width() + n[1] + n[3],
          r = E.wrap.height() + n[0] + n[2];
        n = { position: "absolute", top: n[0], left: n[3] };
        return (
          t.autoCenter && t.fixed && !e && r <= i.h && o <= i.w
            ? (n.position = "fixed")
            : t.locked || ((n.top += i.y), (n.left += i.x)),
          (n.top = M(Math.max(n.top, n.top + (i.h - r) * t.topRatio))),
          (n.left = M(Math.max(n.left, n.left + (i.w - o) * t.leftRatio))),
          n
        );
      },
      _afterZoomIn: function() {
        var t = E.current;
        t &&
          ((E.isOpen = E.isOpened = !0),
          E.wrap.css("overflow", "visible").addClass("fancybox-opened"),
          E.update(),
          (t.closeClick || (t.nextClick && 1 < E.group.length)) &&
            E.inner.css("cursor", "pointer").bind("click.fb", function(e) {
              T(e.target).is("a") ||
                T(e.target)
                  .parent()
                  .is("a") ||
                (e.preventDefault(), E[t.closeClick ? "close" : "next"]());
            }),
          t.closeBtn &&
            T(t.tpl.closeBtn)
              .appendTo(E.skin)
              .bind("click.fb", function(e) {
                e.preventDefault(), E.close();
              }),
          t.arrows &&
            1 < E.group.length &&
            ((t.loop || 0 < t.index) &&
              T(t.tpl.prev)
                .appendTo(E.outer)
                .bind("click.fb", E.prev),
            (t.loop || t.index < E.group.length - 1) &&
              T(t.tpl.next)
                .appendTo(E.outer)
                .bind("click.fb", E.next)),
          E.trigger("afterShow"),
          t.loop || t.index !== t.group.length - 1
            ? E.opts.autoPlay &&
              !E.player.isActive &&
              ((E.opts.autoPlay = !1), E.play(!0))
            : E.play(!1));
      },
      _afterZoomOut: function(e) {
        (e = e || E.current),
          T(".fancybox-wrap")
            .trigger("onReset")
            .remove(),
          T.extend(E, {
            group: {},
            opts: {},
            router: !1,
            current: null,
            isActive: !1,
            isOpened: !1,
            isOpen: !1,
            isClosing: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null
          }),
          E.trigger("afterClose", e);
      }
    }),
      (E.transitions = {
        getOrigPosition: function() {
          var e = E.current,
            t = e.element,
            i = e.orig,
            n = {},
            o = 50,
            r = 50,
            s = e.hPadding,
            a = e.wPadding,
            l = E.getViewport();
          return (
            !i &&
              e.isDom &&
              t.is(":visible") &&
              ((i = t.find("img:first")).length || (i = t)),
            c(i)
              ? ((n = i.offset()),
                i.is("img") && ((o = i.outerWidth()), (r = i.outerHeight())))
              : ((n.top = l.y + (l.h - r) * e.topRatio),
                (n.left = l.x + (l.w - o) * e.leftRatio)),
            ("fixed" === E.wrap.css("position") || e.locked) &&
              ((n.top -= l.y), (n.left -= l.x)),
            {
              top: M(n.top - s * e.topRatio),
              left: M(n.left - a * e.leftRatio),
              width: M(o + a),
              height: M(r + s)
            }
          );
        },
        step: function(e, t) {
          var i,
            n,
            o = t.prop,
            r = (n = E.current).wrapSpace,
            s = n.skinSpace;
          ("width" !== o && "height" !== o) ||
            ((i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start)),
            E.isClosing && (i = 1 - i),
            (n = e - (n = "width" === o ? n.wPadding : n.hPadding)),
            E.skin[o](P("width" === o ? n : n - r * i)),
            E.inner[o](P("width" === o ? n : n - r * i - s * i)));
        },
        zoomIn: function() {
          var e = E.current,
            t = e.pos,
            i = e.openEffect,
            n = "elastic" === i,
            o = T.extend({ opacity: 1 }, t);
          delete o.position,
            n
              ? ((t = this.getOrigPosition()),
                e.openOpacity && (t.opacity = 0.1))
              : "fade" === i && (t.opacity = 0.1),
            E.wrap
              .css(t)
              .animate(o, {
                duration: "none" === i ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: n ? this.step : null,
                complete: E._afterZoomIn
              });
        },
        zoomOut: function() {
          var e = E.current,
            t = e.closeEffect,
            i = "elastic" === t,
            n = { opacity: 0.1 };
          i &&
            ((n = this.getOrigPosition()), e.closeOpacity && (n.opacity = 0.1)),
            E.wrap.animate(n, {
              duration: "none" === t ? 0 : e.closeSpeed,
              easing: e.closeEasing,
              step: i ? this.step : null,
              complete: E._afterZoomOut
            });
        },
        changeIn: function() {
          var e,
            t = E.current,
            i = t.nextEffect,
            n = t.pos,
            o = { opacity: 1 },
            r = E.direction;
          (n.opacity = 0.1),
            "elastic" === i &&
              ((e = "down" === r || "up" === r ? "top" : "left"),
              "down" === r || "right" === r
                ? ((n[e] = M(P(n[e]) - 200)), (o[e] = "+=200px"))
                : ((n[e] = M(P(n[e]) + 200)), (o[e] = "-=200px"))),
            "none" === i
              ? E._afterZoomIn()
              : E.wrap
                  .css(n)
                  .animate(o, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: E._afterZoomIn
                  });
        },
        changeOut: function() {
          var e = E.previous,
            t = e.prevEffect,
            i = { opacity: 0.1 },
            n = E.direction;
          "elastic" === t &&
            (i["down" === n || "up" === n ? "top" : "left"] =
              ("up" === n || "left" === n ? "-" : "+") + "=200px"),
            e.wrap.animate(i, {
              duration: "none" === t ? 0 : e.prevSpeed,
              easing: e.prevEasing,
              complete: function() {
                T(this)
                  .trigger("onReset")
                  .remove();
              }
            });
        }
      }),
      (E.helpers.overlay = {
        defaults: {
          closeClick: !0,
          speedOut: 200,
          showEarly: !0,
          css: {},
          locked: !l,
          fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: T("html"),
        create: function(e) {
          var t;
          (e = T.extend({}, this.defaults, e)),
            this.overlay && this.close(),
            (t = E.coming ? E.coming.parent : e.parent),
            (this.overlay = T('<div class="fancybox-overlay"></div>').appendTo(
              t && t.lenth ? t : "body"
            )),
            (this.fixed = !1),
            e.fixed &&
              E.defaults.fixed &&
              (this.overlay.addClass("fancybox-overlay-fixed"),
              (this.fixed = !0));
        },
        open: function(e) {
          var t = this;
          (e = T.extend({}, this.defaults, e)),
            this.overlay
              ? this.overlay
                  .unbind(".overlay")
                  .width("auto")
                  .height("auto")
              : this.create(e),
            this.fixed ||
              (n.bind("resize.overlay", T.proxy(this.update, this)),
              this.update()),
            e.closeClick &&
              this.overlay.bind("click.overlay", function(e) {
                if (T(e.target).hasClass("fancybox-overlay"))
                  return E.isActive ? E.close() : t.close(), !1;
              }),
            this.overlay.css(e.css).show();
        },
        close: function() {
          n.unbind("resize.overlay"),
            this.el.hasClass("fancybox-lock") &&
              (T(".fancybox-margin").removeClass("fancybox-margin"),
              this.el.removeClass("fancybox-lock"),
              n.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
            T(".fancybox-overlay")
              .remove()
              .hide(),
            T.extend(this, { overlay: null, fixed: !1 });
        },
        update: function() {
          var e,
            t = "100%";
          this.overlay.width(t).height("100%"),
            s
              ? ((e = Math.max(
                  i.documentElement.offsetWidth,
                  i.body.offsetWidth
                )),
                d.width() > e && (t = d.width()))
              : d.width() > n.width() && (t = d.width()),
            this.overlay.width(t).height(d.height());
        },
        onReady: function(e, t) {
          var i = this.overlay;
          T(".fancybox-overlay").stop(!0, !0),
            i || this.create(e),
            e.locked &&
              this.fixed &&
              t.fixed &&
              ((t.locked = this.overlay.append(t.wrap)), (t.fixed = !1)),
            !0 === e.showEarly && this.beforeShow.apply(this, arguments);
        },
        beforeShow: function(e, t) {
          t.locked &&
            !this.el.hasClass("fancybox-lock") &&
            (!1 !== this.fixPosition &&
              T("*")
                .filter(function() {
                  return (
                    "fixed" === T(this).css("position") &&
                    !T(this).hasClass("fancybox-overlay") &&
                    !T(this).hasClass("fancybox-wrap")
                  );
                })
                .addClass("fancybox-margin"),
            this.el.addClass("fancybox-margin"),
            (this.scrollV = n.scrollTop()),
            (this.scrollH = n.scrollLeft()),
            this.el.addClass("fancybox-lock"),
            n.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
            this.open(e);
        },
        onUpdate: function() {
          this.fixed || this.update();
        },
        afterClose: function(e) {
          this.overlay &&
            !E.coming &&
            this.overlay.fadeOut(e.speedOut, T.proxy(this.close, this));
        }
      }),
      (E.helpers.title = {
        defaults: { type: "float", position: "bottom" },
        beforeShow: function(e) {
          var t = E.current,
            i = t.title,
            n = e.type;
          if (
            (T.isFunction(i) && (i = i.call(t.element, t)),
            p(i) && "" !== T.trim(i))
          ) {
            switch (
              ((t = T(
                '<div class="fancybox-title fancybox-title-' +
                  n +
                  '-wrap">' +
                  i +
                  "</div>"
              )),
              n)
            ) {
              case "inside":
                n = E.skin;
                break;
              case "outside":
                n = E.wrap;
                break;
              case "over":
                n = E.inner;
                break;
              default:
                (n = E.skin),
                  t.appendTo("body"),
                  s && t.width(t.width()),
                  t.wrapInner('<span class="child"></span>'),
                  (E.current.margin[2] += Math.abs(P(t.css("margin-bottom"))));
            }
            t["top" === e.position ? "prependTo" : "appendTo"](n);
          }
        }
      }),
      (T.fn.fancybox = function(r) {
        var s,
          a = T(this),
          l = this.selector || "",
          e = function(e) {
            var t,
              i,
              n = T(this).blur(),
              o = s;
            e.ctrlKey ||
              e.altKey ||
              e.shiftKey ||
              e.metaKey ||
              n.is(".fancybox-wrap") ||
              ((t = r.groupAttr || "data-fancybox-group"),
              (i = n.attr(t)) || ((t = "rel"), (i = n.get(0)[t])),
              i &&
                "" !== i &&
                "nofollow" !== i &&
                (o = (n = (n = l.length ? T(l) : a).filter(
                  "[" + t + '="' + i + '"]'
                )).index(this)),
              (r.index = o),
              !1 !== E.open(n, r) && e.preventDefault());
          };
        return (
          (s = (r = r || {}).index || 0),
          l && !1 !== r.live
            ? d
                .undelegate(l, "click.fb-start")
                .delegate(
                  l + ":not('.fancybox-item, .fancybox-nav')",
                  "click.fb-start",
                  e
                )
            : a.unbind("click.fb-start").bind("click.fb-start", e),
          this.filter("[data-fancybox-start=1]").trigger("click"),
          this
        );
      }),
      d.ready(function() {
        var e, t, i, n;
        T.scrollbarWidth === u &&
          (T.scrollbarWidth = function() {
            var e = T(
                '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
              ).appendTo("body"),
              t = (t = e.children()).innerWidth() - t.height(99).innerWidth();
            return e.remove(), t;
          }),
          T.support.fixedPosition === u &&
            (T.support.fixedPosition = ((i = T(
              '<div style="position:fixed;top:20px;"></div>'
            ).appendTo("body")),
            (n = 20 === i[0].offsetTop || 15 === i[0].offsetTop),
            i.remove(),
            n)),
          T.extend(E.defaults, {
            scrollbarWidth: T.scrollbarWidth(),
            fixed: T.support.fixedPosition,
            parent: T("body")
          }),
          (e = T(o).width()),
          r.addClass("fancybox-lock-test"),
          (t = T(o).width()),
          r.removeClass("fancybox-lock-test"),
          T(
            "<style type='text/css'>.fancybox-margin{margin-right:" +
              (t - e) +
              "px;}</style>"
          ).appendTo("head");
      });
  })(window, document, jQuery),
  (function(e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function(d) {
    "use strict";
    var o,
      s = window.Slick || {};
    (((o = 0),
    (s = function(e, t) {
      var i,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: d(e),
        appendDots: d(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(e, t) {
          return d('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1
        }),
        d.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = d(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (i = d(e).data("slick") || {}),
        (n.options = d.extend({}, n.defaults, t, i)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = d.proxy(n.autoPlay, n)),
        (n.autoPlayClear = d.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = d.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = d.proxy(n.changeSlide, n)),
        (n.clickHandler = d.proxy(n.clickHandler, n)),
        (n.selectHandler = d.proxy(n.selectHandler, n)),
        (n.setPosition = d.proxy(n.setPosition, n)),
        (n.swipeHandler = d.proxy(n.swipeHandler, n)),
        (n.dragHandler = d.proxy(n.dragHandler, n)),
        (n.keyHandler = d.proxy(n.keyHandler, n)),
        (n.instanceUid = o++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    })).prototype.activateADA = function() {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (s.prototype.addSlide = s.prototype.slickAdd = function(e, t, i) {
        var n = this;
        if ("boolean" == typeof t) (i = t), (t = null);
        else if (t < 0 || t >= n.slideCount) return !1;
        n.unload(),
          "number" == typeof t
            ? 0 === t && 0 === n.$slides.length
              ? d(e).appendTo(n.$slideTrack)
              : i
              ? d(e).insertBefore(n.$slides.eq(t))
              : d(e).insertAfter(n.$slides.eq(t))
            : !0 === i
            ? d(e).prependTo(n.$slideTrack)
            : d(e).appendTo(n.$slideTrack),
          (n.$slides = n.$slideTrack.children(this.options.slide)),
          n.$slideTrack.children(this.options.slide).detach(),
          n.$slideTrack.append(n.$slides),
          n.$slides.each(function(e, t) {
            d(t).attr("data-slick-index", e);
          }),
          (n.$slidesCache = n.$slides),
          n.reinit();
      }),
      (s.prototype.animateHeight = function() {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (s.prototype.animateSlide = function(e, t) {
        var i = {},
          n = this;
        n.animateHeight(),
          !0 === n.options.rtl && !1 === n.options.vertical && (e = -e),
          !1 === n.transformsEnabled
            ? !1 === n.options.vertical
              ? n.$slideTrack.animate(
                  { left: e },
                  n.options.speed,
                  n.options.easing,
                  t
                )
              : n.$slideTrack.animate(
                  { top: e },
                  n.options.speed,
                  n.options.easing,
                  t
                )
            : !1 === n.cssTransitions
            ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft),
              d({ animStart: n.currentLeft }).animate(
                { animStart: e },
                {
                  duration: n.options.speed,
                  easing: n.options.easing,
                  step: function(e) {
                    (e = Math.ceil(e)),
                      !1 === n.options.vertical
                        ? (i[n.animType] = "translate(" + e + "px, 0px)")
                        : (i[n.animType] = "translate(0px," + e + "px)"),
                      n.$slideTrack.css(i);
                  },
                  complete: function() {
                    t && t.call();
                  }
                }
              ))
            : (n.applyTransition(),
              (e = Math.ceil(e)),
              !1 === n.options.vertical
                ? (i[n.animType] = "translate3d(" + e + "px, 0px, 0px)")
                : (i[n.animType] = "translate3d(0px," + e + "px, 0px)"),
              n.$slideTrack.css(i),
              t &&
                setTimeout(function() {
                  n.disableTransition(), t.call();
                }, n.options.speed));
      }),
      (s.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = d(e).not(this.$slider)), e;
      }),
      (s.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e &&
          "object" == typeof e &&
          e.each(function() {
            var e = d(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0);
          });
      }),
      (s.prototype.applyTransition = function(e) {
        var t = this,
          i = {};
        !1 === t.options.fade
          ? (i[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (i[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
      }),
      (s.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (s.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (s.prototype.autoPlayIterator = function() {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (s.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = d(e.options.prevArrow).addClass("slick-arrow")),
          (e.$nextArrow = d(e.options.nextArrow).addClass("slick-arrow")),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite &&
                e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (s.prototype.buildDots = function() {
        var e,
          t,
          i = this;
        if (!0 === i.options.dots) {
          for (
            i.$slider.addClass("slick-dotted"),
              t = d("<ul />").addClass(i.options.dotsClass),
              e = 0;
            e <= i.getDotCount();
            e += 1
          )
            t.append(
              d("<li />").append(i.options.customPaging.call(this, i, e))
            );
          (i.$dots = t.appendTo(i.options.appendDots)),
            i.$dots
              .find("li")
              .first()
              .addClass("slick-active");
        }
      }),
      (s.prototype.buildOut = function() {
        var e = this;
        (e.$slides = e.$slider
          .children(e.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function(e, t) {
            d(t)
              .attr("data-slick-index", e)
              .data("originalStyling", d(t).attr("style") || "");
          }),
          e.$slider.addClass("slick-slider"),
          (e.$slideTrack =
            0 === e.slideCount
              ? d('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          e.$slideTrack.css("opacity", 0),
          (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
            (e.options.slidesToScroll = 1),
          d("img[data-lazy]", e.$slider)
            .not("[src]")
            .addClass("slick-loading"),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          !0 === e.options.draggable && e.$list.addClass("draggable");
      }),
      (s.prototype.buildRows = function() {
        var e,
          t,
          i,
          n,
          o,
          r,
          s,
          a = this;
        if (
          ((n = document.createDocumentFragment()),
          (r = a.$slider.children()),
          1 < a.options.rows)
        ) {
          for (
            s = a.options.slidesPerRow * a.options.rows,
              o = Math.ceil(r.length / s),
              e = 0;
            e < o;
            e++
          ) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var d = document.createElement("div");
              for (i = 0; i < a.options.slidesPerRow; i++) {
                var u = e * s + (t * a.options.slidesPerRow + i);
                r.get(u) && d.appendChild(r.get(u));
              }
              l.appendChild(d);
            }
            n.appendChild(l);
          }
          a.$slider.empty().append(n),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
              });
        }
      }),
      (s.prototype.checkResponsive = function(e, t) {
        var i,
          n,
          o,
          r = this,
          s = !1,
          a = r.$slider.width(),
          l = window.innerWidth || d(window).width();
        if (
          ("window" === r.respondTo
            ? (o = l)
            : "slider" === r.respondTo
            ? (o = a)
            : "min" === r.respondTo && (o = Math.min(l, a)),
          r.options.responsive &&
            r.options.responsive.length &&
            null !== r.options.responsive)
        ) {
          for (i in ((n = null), r.breakpoints))
            r.breakpoints.hasOwnProperty(i) &&
              (!1 === r.originalSettings.mobileFirst
                ? o < r.breakpoints[i] && (n = r.breakpoints[i])
                : o > r.breakpoints[i] && (n = r.breakpoints[i]));
          null !== n
            ? null !== r.activeBreakpoint
              ? (n !== r.activeBreakpoint || t) &&
                ((r.activeBreakpoint = n),
                "unslick" === r.breakpointSettings[n]
                  ? r.unslick(n)
                  : ((r.options = d.extend(
                      {},
                      r.originalSettings,
                      r.breakpointSettings[n]
                    )),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e)),
                (s = n))
              : ((r.activeBreakpoint = n),
                "unslick" === r.breakpointSettings[n]
                  ? r.unslick(n)
                  : ((r.options = d.extend(
                      {},
                      r.originalSettings,
                      r.breakpointSettings[n]
                    )),
                    !0 === e && (r.currentSlide = r.options.initialSlide),
                    r.refresh(e)),
                (s = n))
            : null !== r.activeBreakpoint &&
              ((r.activeBreakpoint = null),
              (r.options = r.originalSettings),
              !0 === e && (r.currentSlide = r.options.initialSlide),
              r.refresh(e),
              (s = n)),
            e || !1 === s || r.$slider.trigger("breakpoint", [r, s]);
        }
      }),
      (s.prototype.changeSlide = function(e, t) {
        var i,
          n,
          o = this,
          r = d(e.currentTarget);
        switch (
          (r.is("a") && e.preventDefault(),
          r.is("li") || (r = r.closest("li")),
          (i =
            o.slideCount % o.options.slidesToScroll != 0
              ? 0
              : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
          e.data.message)
        ) {
          case "previous":
            (n =
              0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide - n, !1, t);
            break;
          case "next":
            (n = 0 === i ? o.options.slidesToScroll : i),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide + n, !1, t);
            break;
          case "index":
            var s =
              0 === e.data.index
                ? 0
                : e.data.index || r.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(s), !1, t),
              r.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (s.prototype.checkNavigable = function(e) {
        var t, i;
        if (((i = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var n in t) {
            if (e < t[n]) {
              e = i;
              break;
            }
            i = t[n];
          }
        return e;
      }),
      (s.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots &&
          null !== e.$dots &&
          (d("li", e.$dots)
            .off("click.slick", e.changeSlide)
            .off("mouseenter.slick", d.proxy(e.interrupt, e, !0))
            .off("mouseleave.slick", d.proxy(e.interrupt, e, !1)),
          !0 === e.options.accessibility &&
            e.$dots.off("keydown.slick", e.keyHandler)),
          e.$slider.off("focus.slick blur.slick"),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
            !0 === e.options.accessibility &&
              (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
              e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
          e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
          e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
          e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
          e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
          e.$list.off("click.slick", e.clickHandler),
          d(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          !0 === e.options.accessibility &&
            e.$list.off("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            d(e.$slideTrack)
              .children()
              .off("click.slick", e.selectHandler),
          d(window).off(
            "orientationchange.slick.slick-" + e.instanceUid,
            e.orientationChange
          ),
          d(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
          d("[draggable!=true]", e.$slideTrack).off(
            "dragstart",
            e.preventDefault
          ),
          d(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
      }),
      (s.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", d.proxy(e.interrupt, e, !0)),
          e.$list.off("mouseleave.slick", d.proxy(e.interrupt, e, !1));
      }),
      (s.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows &&
          ((e = this.$slides.children().children()).removeAttr("style"),
          this.$slider.empty().append(e));
      }),
      (s.prototype.clickHandler = function(e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (s.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
          (t.touchObject = {}),
          t.cleanUpEvents(),
          d(".slick-cloned", t.$slider).detach(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.$prevArrow.length &&
            (t.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
          t.$nextArrow &&
            t.$nextArrow.length &&
            (t.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
          t.$slides &&
            (t.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function() {
                d(this).attr("style", d(this).data("originalStyling"));
              }),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slideTrack.detach(),
            t.$list.detach(),
            t.$slider.append(t.$slides)),
          t.cleanUpRows(),
          t.$slider.removeClass("slick-slider"),
          t.$slider.removeClass("slick-initialized"),
          t.$slider.removeClass("slick-dotted"),
          (t.unslicked = !0),
          e || t.$slider.trigger("destroy", [t]);
      }),
      (s.prototype.disableTransition = function(e) {
        var t = {};
        (t[this.transitionType] = ""),
          !1 === this.options.fade
            ? this.$slideTrack.css(t)
            : this.$slides.eq(e).css(t);
      }),
      (s.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions
          ? (i.$slides.eq(e).css({ zIndex: i.options.zIndex }),
            i.$slides
              .eq(e)
              .animate({ opacity: 1 }, i.options.speed, i.options.easing, t))
          : (i.applyTransition(e),
            i.$slides.eq(e).css({ opacity: 1, zIndex: i.options.zIndex }),
            t &&
              setTimeout(function() {
                i.disableTransition(e), t.call();
              }, i.options.speed));
      }),
      (s.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
        var t = this;
        null !== e &&
          ((t.$slidesCache = t.$slides),
          t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.filter(e).appendTo(t.$slideTrack),
          t.reinit());
      }),
      (s.prototype.focusHandler = function() {
        var i = this;
        i.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function(e) {
            e.stopImmediatePropagation();
            var t = d(this);
            setTimeout(function() {
              i.options.pauseOnFocus &&
                ((i.focussed = t.is(":focus")), i.autoPlay());
            }, 0);
          });
      }),
      (s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
      }),
      (s.prototype.getDotCount = function() {
        var e = this,
          t = 0,
          i = 0,
          n = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++n;
          else
            for (; t < e.slideCount; )
              ++n,
                (t = i + e.options.slidesToScroll),
                (i +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) n = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++n,
              (t = i + e.options.slidesToScroll),
              (i +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else
          n =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            );
        return n - 1;
      }),
      (s.prototype.getLeft = function(e) {
        var t,
          i,
          n,
          o,
          r = this,
          s = 0;
        return (
          (r.slideOffset = 0),
          (i = r.$slides.first().outerHeight(!0)),
          !0 === r.options.infinite
            ? (r.slideCount > r.options.slidesToShow &&
                ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (o = -1),
                !0 === r.options.vertical &&
                  !0 === r.options.centerMode &&
                  (2 === r.options.slidesToShow
                    ? (o = -1.5)
                    : 1 === r.options.slidesToShow && (o = -2)),
                (s = i * r.options.slidesToShow * o)),
              r.slideCount % r.options.slidesToScroll != 0 &&
                e + r.options.slidesToScroll > r.slideCount &&
                r.slideCount > r.options.slidesToShow &&
                (e > r.slideCount
                  ? ((r.slideOffset =
                      (r.options.slidesToShow - (e - r.slideCount)) *
                      r.slideWidth *
                      -1),
                    (s =
                      (r.options.slidesToShow - (e - r.slideCount)) * i * -1))
                  : ((r.slideOffset =
                      (r.slideCount % r.options.slidesToScroll) *
                      r.slideWidth *
                      -1),
                    (s = (r.slideCount % r.options.slidesToScroll) * i * -1))))
            : e + r.options.slidesToShow > r.slideCount &&
              ((r.slideOffset =
                (e + r.options.slidesToShow - r.slideCount) * r.slideWidth),
              (s = (e + r.options.slidesToShow - r.slideCount) * i)),
          r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0),
          !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
            ? (r.slideOffset =
                (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 -
                (r.slideWidth * r.slideCount) / 2)
            : !0 === r.options.centerMode && !0 === r.options.infinite
            ? (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2) -
                r.slideWidth)
            : !0 === r.options.centerMode &&
              ((r.slideOffset = 0),
              (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (t =
            !1 === r.options.vertical
              ? e * r.slideWidth * -1 + r.slideOffset
              : e * i * -1 + s),
          !0 === r.options.variableWidth &&
            ((n =
              r.slideCount <= r.options.slidesToShow ||
              !1 === r.options.infinite
                ? r.$slideTrack.children(".slick-slide").eq(e)
                : r.$slideTrack
                    .children(".slick-slide")
                    .eq(e + r.options.slidesToShow)),
            (t =
              !0 === r.options.rtl
                ? n[0]
                  ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width())
                  : 0
                : n[0]
                ? -1 * n[0].offsetLeft
                : 0),
            !0 === r.options.centerMode &&
              ((n =
                r.slideCount <= r.options.slidesToShow ||
                !1 === r.options.infinite
                  ? r.$slideTrack.children(".slick-slide").eq(e)
                  : r.$slideTrack
                      .children(".slick-slide")
                      .eq(e + r.options.slidesToShow + 1)),
              (t =
                !0 === r.options.rtl
                  ? n[0]
                    ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width())
                    : 0
                  : n[0]
                  ? -1 * n[0].offsetLeft
                  : 0),
              (t += (r.$list.width() - n.outerWidth()) / 2))),
          t
        );
      }),
      (s.prototype.getOption = s.prototype.slickGetOption = function(e) {
        return this.options[e];
      }),
      (s.prototype.getNavigableIndexes = function() {
        var e,
          t = this,
          i = 0,
          n = 0,
          o = [];
        for (
          !1 === t.options.infinite
            ? (e = t.slideCount)
            : ((i = -1 * t.options.slidesToScroll),
              (n = -1 * t.options.slidesToScroll),
              (e = 2 * t.slideCount));
          i < e;

        )
          o.push(i),
            (i = n + t.options.slidesToScroll),
            (n +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return o;
      }),
      (s.prototype.getSlick = function() {
        return this;
      }),
      (s.prototype.getSlideCount = function() {
        var i,
          n,
          o = this;
        return (
          (n =
            !0 === o.options.centerMode
              ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
              : 0),
          !0 === o.options.swipeToSlide
            ? (o.$slideTrack.find(".slick-slide").each(function(e, t) {
                if (t.offsetLeft - n + d(t).outerWidth() / 2 > -1 * o.swipeLeft)
                  return (i = t), !1;
              }),
              Math.abs(d(i).attr("data-slick-index") - o.currentSlide) || 1)
            : o.options.slidesToScroll
        );
      }),
      (s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
        this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
      }),
      (s.prototype.init = function(e) {
        var t = this;
        d(t.$slider).hasClass("slick-initialized") ||
          (d(t.$slider).addClass("slick-initialized"),
          t.buildRows(),
          t.buildOut(),
          t.setProps(),
          t.startLoad(),
          t.loadSlider(),
          t.initializeEvents(),
          t.updateArrows(),
          t.updateDots(),
          t.checkResponsive(!0),
          t.focusHandler()),
          e && t.$slider.trigger("init", [t]),
          !0 === t.options.accessibility && t.initADA(),
          t.options.autoplay && ((t.paused = !1), t.autoPlay());
      }),
      (s.prototype.initADA = function() {
        var i = this,
          n = Math.ceil(i.slideCount / i.options.slidesToShow),
          o = i.getNavigableIndexes().filter(function(e) {
            return 0 <= e && e < i.slideCount;
          });
        i.$slides
          .add(i.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== i.$dots &&
            (i.$slides
              .not(i.$slideTrack.find(".slick-cloned"))
              .each(function(e) {
                var t = o.indexOf(e);
                d(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + i.instanceUid + e,
                  tabindex: -1
                }),
                  -1 !== t &&
                    d(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + i.instanceUid + t
                    });
              }),
            i.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function(e) {
                var t = o[e];
                d(this).attr({ role: "presentation" }),
                  d(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + i.instanceUid + e,
                      "aria-controls": "slick-slide" + i.instanceUid + t,
                      "aria-label": e + 1 + " of " + n,
                      "aria-selected": null,
                      tabindex: "-1"
                    });
              })
              .eq(i.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++)
          i.$slides.eq(e).attr("tabindex", 0);
        i.activateADA();
      }),
      (s.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on("keydown.slick", e.keyHandler),
            e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (s.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots &&
          (d("li", e.$dots).on(
            "click.slick",
            { message: "index" },
            e.changeSlide
          ),
          !0 === e.options.accessibility &&
            e.$dots.on("keydown.slick", e.keyHandler)),
          !0 === e.options.dots &&
            !0 === e.options.pauseOnDotsHover &&
            d("li", e.$dots)
              .on("mouseenter.slick", d.proxy(e.interrupt, e, !0))
              .on("mouseleave.slick", d.proxy(e.interrupt, e, !1));
      }),
      (s.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover &&
          (e.$list.on("mouseenter.slick", d.proxy(e.interrupt, e, !0)),
          e.$list.on("mouseleave.slick", d.proxy(e.interrupt, e, !1)));
      }),
      (s.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on("click.slick", e.clickHandler),
          d(document).on(e.visibilityChange, d.proxy(e.visibility, e)),
          !0 === e.options.accessibility &&
            e.$list.on("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            d(e.$slideTrack)
              .children()
              .on("click.slick", e.selectHandler),
          d(window).on(
            "orientationchange.slick.slick-" + e.instanceUid,
            d.proxy(e.orientationChange, e)
          ),
          d(window).on(
            "resize.slick.slick-" + e.instanceUid,
            d.proxy(e.resize, e)
          ),
          d("[draggable!=true]", e.$slideTrack).on(
            "dragstart",
            e.preventDefault
          ),
          d(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
          d(e.setPosition);
      }),
      (s.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show();
      }),
      (s.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: { message: !0 === t.options.rtl ? "next" : "previous" }
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: { message: !0 === t.options.rtl ? "previous" : "next" }
              }));
      }),
      (s.prototype.lazyLoad = function() {
        function e(e) {
          d("img[data-lazy]", e).each(function() {
            var e = d(this),
              t = d(this).attr("data-lazy"),
              i = d(this).attr("data-srcset"),
              n = d(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
              o = document.createElement("img");
            (o.onload = function() {
              e.animate({ opacity: 0 }, 100, function() {
                i && (e.attr("srcset", i), n && e.attr("sizes", n)),
                  e.attr("src", t).animate({ opacity: 1 }, 200, function() {
                    e.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  r.$slider.trigger("lazyLoaded", [r, e, t]);
              });
            }),
              (o.onerror = function() {
                e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  r.$slider.trigger("lazyLoadError", [r, e, t]);
              }),
              (o.src = t);
          });
        }
        var t,
          i,
          n,
          r = this;
        if (
          (!0 === r.options.centerMode
            ? !0 === r.options.infinite
              ? (n =
                  (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) +
                  r.options.slidesToShow +
                  2)
              : ((i = Math.max(
                  0,
                  r.currentSlide - (r.options.slidesToShow / 2 + 1)
                )),
                (n = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
            : ((i = r.options.infinite
                ? r.options.slidesToShow + r.currentSlide
                : r.currentSlide),
              (n = Math.ceil(i + r.options.slidesToShow)),
              !0 === r.options.fade &&
                (0 < i && i--, n <= r.slideCount && n++)),
          (t = r.$slider.find(".slick-slide").slice(i, n)),
          "anticipated" === r.options.lazyLoad)
        )
          for (
            var o = i - 1, s = n, a = r.$slider.find(".slick-slide"), l = 0;
            l < r.options.slidesToScroll;
            l++
          )
            o < 0 && (o = r.slideCount - 1),
              (t = (t = t.add(a.eq(o))).add(a.eq(s))),
              o--,
              s++;
        e(t),
          r.slideCount <= r.options.slidesToShow
            ? e(r.$slider.find(".slick-slide"))
            : r.currentSlide >= r.slideCount - r.options.slidesToShow
            ? e(
                r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)
              )
            : 0 === r.currentSlide &&
              e(
                r.$slider
                  .find(".slick-cloned")
                  .slice(-1 * r.options.slidesToShow)
              );
      }),
      (s.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (s.prototype.next = s.prototype.slickNext = function() {
        this.changeSlide({ data: { message: "next" } });
      }),
      (s.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition();
      }),
      (s.prototype.pause = s.prototype.slickPause = function() {
        this.autoPlayClear(), (this.paused = !0);
      }),
      (s.prototype.play = s.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
          (e.options.autoplay = !0),
          (e.paused = !1),
          (e.focussed = !1),
          (e.interrupted = !1);
      }),
      (s.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked ||
          (t.$slider.trigger("afterChange", [t, e]),
          (t.animating = !1),
          t.slideCount > t.options.slidesToShow && t.setPosition(),
          (t.swipeLeft = null),
          t.options.autoplay && t.autoPlay(),
          !0 === t.options.accessibility &&
            (t.initADA(),
            t.options.focusOnChange &&
              d(t.$slides.get(t.currentSlide))
                .attr("tabindex", 0)
                .focus()));
      }),
      (s.prototype.prev = s.prototype.slickPrev = function() {
        this.changeSlide({ data: { message: "previous" } });
      }),
      (s.prototype.preventDefault = function(e) {
        e.preventDefault();
      }),
      (s.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t,
          i,
          n,
          o,
          r,
          s = this,
          a = d("img[data-lazy]", s.$slider);
        a.length
          ? ((t = a.first()),
            (i = t.attr("data-lazy")),
            (n = t.attr("data-srcset")),
            (o = t.attr("data-sizes") || s.$slider.attr("data-sizes")),
            ((r = document.createElement("img")).onload = function() {
              n && (t.attr("srcset", n), o && t.attr("sizes", o)),
                t
                  .attr("src", i)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === s.options.adaptiveHeight && s.setPosition(),
                s.$slider.trigger("lazyLoaded", [s, t, i]),
                s.progressiveLazyLoad();
            }),
            (r.onerror = function() {
              e < 3
                ? setTimeout(function() {
                    s.progressiveLazyLoad(e + 1);
                  }, 500)
                : (t
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  s.$slider.trigger("lazyLoadError", [s, t, i]),
                  s.progressiveLazyLoad());
            }),
            (r.src = i))
          : s.$slider.trigger("allImagesLoaded", [s]);
      }),
      (s.prototype.refresh = function(e) {
        var t,
          i,
          n = this;
        (i = n.slideCount - n.options.slidesToShow),
          !n.options.infinite && n.currentSlide > i && (n.currentSlide = i),
          n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0),
          (t = n.currentSlide),
          n.destroy(!0),
          d.extend(n, n.initials, { currentSlide: t }),
          n.init(),
          e || n.changeSlide({ data: { message: "index", index: t } }, !1);
      }),
      (s.prototype.registerBreakpoints = function() {
        var e,
          t,
          i,
          n = this,
          o = n.options.responsive || null;
        if ("array" === d.type(o) && o.length) {
          for (e in ((n.respondTo = n.options.respondTo || "window"), o))
            if (((i = n.breakpoints.length - 1), o.hasOwnProperty(e))) {
              for (t = o[e].breakpoint; 0 <= i; )
                n.breakpoints[i] &&
                  n.breakpoints[i] === t &&
                  n.breakpoints.splice(i, 1),
                  i--;
              n.breakpoints.push(t), (n.breakpointSettings[t] = o[e].settings);
            }
          n.breakpoints.sort(function(e, t) {
            return n.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (s.prototype.reinit = function() {
        var e = this;
        (e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect &&
            d(e.$slideTrack)
              .children()
              .on("click.slick", e.selectHandler),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger("reInit", [e]);
      }),
      (s.prototype.resize = function() {
        var e = this;
        d(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function() {
            (e.windowWidth = d(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition();
          }, 50)));
      }),
      (s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, i) {
        var n = this;
        if (
          ((e =
            "boolean" == typeof e
              ? !0 === (t = e)
                ? 0
                : n.slideCount - 1
              : !0 === t
              ? --e
              : e),
          n.slideCount < 1 || e < 0 || e > n.slideCount - 1)
        )
          return !1;
        n.unload(),
          !0 === i
            ? n.$slideTrack.children().remove()
            : n.$slideTrack
                .children(this.options.slide)
                .eq(e)
                .remove(),
          (n.$slides = n.$slideTrack.children(this.options.slide)),
          n.$slideTrack.children(this.options.slide).detach(),
          n.$slideTrack.append(n.$slides),
          (n.$slidesCache = n.$slides),
          n.reinit();
      }),
      (s.prototype.setCSS = function(e) {
        var t,
          i,
          n = this,
          o = {};
        !0 === n.options.rtl && (e = -e),
          (t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
          (i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[n.positionProp] = e),
          !1 === n.transformsEnabled ||
            (!(o = {}) === n.cssTransitions
              ? (o[n.animType] = "translate(" + t + ", " + i + ")")
              : (o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)")),
          n.$slideTrack.css(o);
      }),
      (s.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({ padding: "0px " + e.options.centerPadding })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            !0 === e.options.centerMode &&
              e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                )
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (s.prototype.setFade = function() {
        var i,
          n = this;
        n.$slides.each(function(e, t) {
          (i = n.slideWidth * e * -1),
            !0 === n.options.rtl
              ? d(t).css({
                  position: "relative",
                  right: i,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0
                })
              : d(t).css({
                  position: "relative",
                  left: i,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0
                });
        }),
          n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (s.prototype.setHeight = function() {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (s.prototype.setOption = s.prototype.slickSetOption = function() {
        var e,
          t,
          i,
          n,
          o,
          r = this,
          s = !1;
        if (
          ("object" === d.type(arguments[0])
            ? ((i = arguments[0]), (s = arguments[1]), (o = "multiple"))
            : "string" === d.type(arguments[0]) &&
              ((i = arguments[0]),
              (n = arguments[1]),
              (s = arguments[2]),
              "responsive" === arguments[0] && "array" === d.type(arguments[1])
                ? (o = "responsive")
                : void 0 !== arguments[1] && (o = "single")),
          "single" === o)
        )
          r.options[i] = n;
        else if ("multiple" === o)
          d.each(i, function(e, t) {
            r.options[e] = t;
          });
        else if ("responsive" === o)
          for (t in n)
            if ("array" !== d.type(r.options.responsive))
              r.options.responsive = [n[t]];
            else {
              for (e = r.options.responsive.length - 1; 0 <= e; )
                r.options.responsive[e].breakpoint === n[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(n[t]);
            }
        s && (r.unload(), r.reinit());
      }),
      (s.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (s.prototype.setProps = function() {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (s.prototype.setSlideClasses = function(e) {
        var t,
          i,
          n,
          o,
          r = this;
        if (
          ((i = r.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          r.$slides.eq(e).addClass("slick-current"),
          !0 === r.options.centerMode)
        ) {
          var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
          (t = Math.floor(r.options.slidesToShow / 2)),
            !0 === r.options.infinite &&
              (t <= e && e <= r.slideCount - 1 - t
                ? r.$slides
                    .slice(e - t + s, e + t + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((n = r.options.slidesToShow + e),
                  i
                    .slice(n - t + 1 + s, n + t + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === e
                ? i
                    .eq(i.length - 1 - r.options.slidesToShow)
                    .addClass("slick-center")
                : e === r.slideCount - 1 &&
                  i.eq(r.options.slidesToShow).addClass("slick-center")),
            r.$slides.eq(e).addClass("slick-center");
        } else
          0 <= e && e <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(e, e + r.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : i.length <= r.options.slidesToShow
            ? i.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = r.slideCount % r.options.slidesToShow),
              (n = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
              r.options.slidesToShow == r.options.slidesToScroll &&
              r.slideCount - e < r.options.slidesToShow
                ? i
                    .slice(n - (r.options.slidesToShow - o), n + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : i
                    .slice(n, n + r.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== r.options.lazyLoad &&
          "anticipated" !== r.options.lazyLoad) ||
          r.lazyLoad();
      }),
      (s.prototype.setupInfinite = function() {
        var e,
          t,
          i,
          n = this;
        if (
          (!0 === n.options.fade && (n.options.centerMode = !1),
          !0 === n.options.infinite &&
            !1 === n.options.fade &&
            ((t = null), n.slideCount > n.options.slidesToShow))
        ) {
          for (
            i =
              !0 === n.options.centerMode
                ? n.options.slidesToShow + 1
                : n.options.slidesToShow,
              e = n.slideCount;
            e > n.slideCount - i;
            e -= 1
          )
            (t = e - 1),
              d(n.$slides[t])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", t - n.slideCount)
                .prependTo(n.$slideTrack)
                .addClass("slick-cloned");
          for (e = 0; e < i + n.slideCount; e += 1)
            (t = e),
              d(n.$slides[t])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", t + n.slideCount)
                .appendTo(n.$slideTrack)
                .addClass("slick-cloned");
          n.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function() {
              d(this).attr("id", "");
            });
        }
      }),
      (s.prototype.interrupt = function(e) {
        e || this.autoPlay(), (this.interrupted = e);
      }),
      (s.prototype.selectHandler = function(e) {
        var t = d(e.target).is(".slick-slide")
            ? d(e.target)
            : d(e.target).parents(".slick-slide"),
          i = parseInt(t.attr("data-slick-index"));
        i || (i = 0),
          this.slideCount <= this.options.slidesToShow
            ? this.slideHandler(i, !1, !0)
            : this.slideHandler(i);
      }),
      (s.prototype.slideHandler = function(e, t, i) {
        var n,
          o,
          r,
          s,
          a,
          l = null,
          d = this;
        if (
          ((t = t || !1),
          !(
            (!0 === d.animating && !0 === d.options.waitForAnimate) ||
            (!0 === d.options.fade && d.currentSlide === e)
          ))
        )
          if (
            (!1 === t && d.asNavFor(e),
            (n = e),
            (l = d.getLeft(n)),
            (s = d.getLeft(d.currentSlide)),
            (d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft),
            !1 === d.options.infinite &&
              !1 === d.options.centerMode &&
              (e < 0 || e > d.getDotCount() * d.options.slidesToScroll))
          )
            !1 === d.options.fade &&
              ((n = d.currentSlide),
              !0 !== i
                ? d.animateSlide(s, function() {
                    d.postSlide(n);
                  })
                : d.postSlide(n));
          else if (
            !1 === d.options.infinite &&
            !0 === d.options.centerMode &&
            (e < 0 || e > d.slideCount - d.options.slidesToScroll)
          )
            !1 === d.options.fade &&
              ((n = d.currentSlide),
              !0 !== i
                ? d.animateSlide(s, function() {
                    d.postSlide(n);
                  })
                : d.postSlide(n));
          else {
            if (
              (d.options.autoplay && clearInterval(d.autoPlayTimer),
              (o =
                n < 0
                  ? d.slideCount % d.options.slidesToScroll != 0
                    ? d.slideCount - (d.slideCount % d.options.slidesToScroll)
                    : d.slideCount + n
                  : n >= d.slideCount
                  ? d.slideCount % d.options.slidesToScroll != 0
                    ? 0
                    : n - d.slideCount
                  : n),
              (d.animating = !0),
              d.$slider.trigger("beforeChange", [d, d.currentSlide, o]),
              (r = d.currentSlide),
              (d.currentSlide = o),
              d.setSlideClasses(d.currentSlide),
              d.options.asNavFor &&
                (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <=
                  a.options.slidesToShow &&
                a.setSlideClasses(d.currentSlide),
              d.updateDots(),
              d.updateArrows(),
              !0 === d.options.fade)
            )
              return (
                !0 !== i
                  ? (d.fadeSlideOut(r),
                    d.fadeSlide(o, function() {
                      d.postSlide(o);
                    }))
                  : d.postSlide(o),
                void d.animateHeight()
              );
            !0 !== i
              ? d.animateSlide(l, function() {
                  d.postSlide(o);
                })
              : d.postSlide(o);
          }
      }),
      (s.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (s.prototype.swipeDirection = function() {
        var e,
          t,
          i,
          n,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (i = Math.atan2(t, e)),
          (n = Math.round((180 * i) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
          n <= 45 && 0 <= n
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : n <= 360 && 315 <= n
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : 135 <= n && n <= 225
            ? !1 === o.options.rtl
              ? "right"
              : "left"
            : !0 === o.options.verticalSwiping
            ? 35 <= n && n <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (s.prototype.swipeEnd = function(e) {
        var t,
          i,
          n = this;
        if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
          return (n.scrolling = !1);
        if (
          ((n.interrupted = !1),
          (n.shouldClick = !(10 < n.touchObject.swipeLength)),
          void 0 === n.touchObject.curX)
        )
          return !1;
        if (
          (!0 === n.touchObject.edgeHit &&
            n.$slider.trigger("edge", [n, n.swipeDirection()]),
          n.touchObject.swipeLength >= n.touchObject.minSwipe)
        ) {
          switch ((i = n.swipeDirection())) {
            case "left":
            case "down":
              (t = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                : n.currentSlide + n.getSlideCount()),
                (n.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                : n.currentSlide - n.getSlideCount()),
                (n.currentDirection = 1);
          }
          "vertical" != i &&
            (n.slideHandler(t),
            (n.touchObject = {}),
            n.$slider.trigger("swipe", [n, i]));
        } else
          n.touchObject.startX !== n.touchObject.curX &&
            (n.slideHandler(n.currentSlide), (n.touchObject = {}));
      }),
      (s.prototype.swipeHandler = function(e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ("ontouchend" in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (s.prototype.swipeMove = function(e) {
        var t,
          i,
          n,
          o,
          r,
          s,
          a = this;
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
            ((t = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
            (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (s = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && 4 < s
              ? !(a.scrolling = !0)
              : (!0 === a.options.verticalSwiping &&
                  (a.touchObject.swipeLength = s),
                (i = a.swipeDirection()),
                void 0 !== e.originalEvent &&
                  4 < a.touchObject.swipeLength &&
                  ((a.swiping = !0), e.preventDefault()),
                (o =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (n = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1) === a.options.infinite &&
                  ((0 === a.currentSlide && "right" === i) ||
                    (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                  ((n = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = t + n * o)
                  : (a.swipeLeft =
                      t + n * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft))))
        );
      }),
      (s.prototype.swipeStart = function(e) {
        var t,
          i = this;
        if (
          ((i.interrupted = !0),
          1 !== i.touchObject.fingerCount ||
            i.slideCount <= i.options.slidesToShow)
        )
          return !(i.touchObject = {});
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (i.touchObject.startX = i.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (i.touchObject.startY = i.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (i.dragging = !0);
      }),
      (s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit());
      }),
      (s.prototype.unload = function() {
        var e = this;
        d(".slick-cloned", e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
            e.htmlExpr.test(e.options.prevArrow) &&
            e.$prevArrow.remove(),
          e.$nextArrow &&
            e.htmlExpr.test(e.options.nextArrow) &&
            e.$nextArrow.remove(),
          e.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (s.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy();
      }),
      (s.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode
              ? (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - 1 &&
                !0 === e.options.centerMode &&
                (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (s.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots &&
          (e.$dots
            .find("li")
            .removeClass("slick-active")
            .end(),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (s.prototype.visibility = function() {
        this.options.autoplay &&
          (document[this.hidden]
            ? (this.interrupted = !0)
            : (this.interrupted = !1));
      }),
      (d.fn.slick = function() {
        var e,
          t,
          i = this,
          n = arguments[0],
          o = Array.prototype.slice.call(arguments, 1),
          r = i.length;
        for (e = 0; e < r; e++)
          if (
            ("object" == typeof n || void 0 === n
              ? (i[e].slick = new s(i[e], n))
              : (t = i[e].slick[n].apply(i[e].slick, o)),
            void 0 !== t)
          )
            return t;
        return i;
      });
  }),
  (function() {
    var d,
      a,
      l,
      r,
      i = {
        frameRate: 150,
        animationTime: 400,
        stepSize: 100,
        pulseAlgorithm: !0,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: !0,
        arrowScroll: 50,
        fixedBackground: !0,
        excluded: ""
      },
      g = i,
      u = !1,
      c = !1,
      s = { x: 0, y: 0 },
      p = !1,
      h = document.documentElement,
      f = [],
      m = /^Mac/.test(navigator.platform),
      v = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
      },
      y = { 37: 1, 38: 1, 39: 1, 40: 1 };
    function b() {
      if (!p && document.body) {
        p = !0;
        var e = document.body,
          t = document.documentElement,
          i = window.innerHeight,
          n = e.scrollHeight;
        if (
          ((h = 0 <= document.compatMode.indexOf("CSS") ? t : e),
          (d = e),
          g.keyboardSupport && j("keydown", C),
          top != self)
        )
          c = !0;
        else if (Z && i < n && (e.offsetHeight <= i || t.offsetHeight <= i)) {
          var o,
            r = document.createElement("div");
          (r.style.cssText =
            "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
            h.scrollHeight +
            "px"),
            document.body.appendChild(r),
            (l = function() {
              o ||
                (o = setTimeout(function() {
                  u ||
                    ((r.style.height = "0"),
                    (r.style.height = h.scrollHeight + "px"),
                    (o = null));
                }, 500));
            }),
            setTimeout(l, 10),
            j("resize", l);
          if (
            ((a = new W(l)).observe(e, {
              attributes: !0,
              childList: !0,
              characterData: !1
            }),
            h.offsetHeight <= i)
          ) {
            var s = document.createElement("div");
            (s.style.clear = "both"), e.appendChild(s);
          }
        }
        g.fixedBackground ||
          u ||
          ((e.style.backgroundAttachment = "scroll"),
          (t.style.backgroundAttachment = "scroll"));
      }
    }
    var w = [],
      k = !1,
      x = Date.now();
    function _(c, p, h) {
      var e, t;
      if (
        ((e = 0 < (e = p) ? 1 : -1),
        (t = 0 < (t = h) ? 1 : -1),
        (s.x !== e || s.y !== t) && ((s.x = e), (s.y = t), (w = []), (x = 0)),
        1 != g.accelerationMax)
      ) {
        var i = Date.now() - x;
        if (i < g.accelerationDelta) {
          var n = (1 + 50 / i) / 2;
          1 < n && ((n = Math.min(n, g.accelerationMax)), (p *= n), (h *= n));
        }
        x = Date.now();
      }
      if (
        (w.push({
          x: p,
          y: h,
          lastX: p < 0 ? 0.99 : -0.99,
          lastY: h < 0 ? 0.99 : -0.99,
          start: Date.now()
        }),
        !k)
      ) {
        var o = V(),
          f = c === o || c === document.body;
        null == c.$scrollBehavior &&
          (function(e) {
            var t = S(e);
            if (null == A[t]) {
              var i = getComputedStyle(e, "")["scroll-behavior"];
              A[t] = "smooth" == i;
            }
            return A[t];
          })(c) &&
          ((c.$scrollBehavior = c.style.scrollBehavior),
          (c.style.scrollBehavior = "auto"));
        var m = function(e) {
          for (var t = Date.now(), i = 0, n = 0, o = 0; o < w.length; o++) {
            var r = w[o],
              s = t - r.start,
              a = s >= g.animationTime,
              l = a ? 1 : s / g.animationTime;
            g.pulseAlgorithm && (l = q(l));
            var d = (r.x * l - r.lastX) >> 0,
              u = (r.y * l - r.lastY) >> 0;
            (i += d),
              (n += u),
              (r.lastX += d),
              (r.lastY += u),
              a && (w.splice(o, 1), o--);
          }
          f
            ? window.scrollBy(i, n)
            : (i && (c.scrollLeft += i), n && (c.scrollTop += n)),
            p || h || (w = []),
            w.length
              ? L(m, c, 1e3 / g.frameRate + 1)
              : ((k = !1),
                null != c.$scrollBehavior &&
                  ((c.style.scrollBehavior = c.$scrollBehavior),
                  (c.$scrollBehavior = null)));
        };
        L(m, c, 0), (k = !0);
      }
    }
    function e(e) {
      p || b();
      var t = e.target;
      if (e.defaultPrevented || e.ctrlKey) return !0;
      if (
        z(d, "embed") ||
        (z(t, "embed") && /\.pdf/i.test(t.src)) ||
        z(d, "object") ||
        t.shadowRoot
      )
        return !0;
      var i = -e.wheelDeltaX || e.deltaX || 0,
        n = -e.wheelDeltaY || e.deltaY || 0;
      m &&
        (e.wheelDeltaX &&
          R(e.wheelDeltaX, 120) &&
          (i = (e.wheelDeltaX / Math.abs(e.wheelDeltaX)) * -120),
        e.wheelDeltaY &&
          R(e.wheelDeltaY, 120) &&
          (n = (e.wheelDeltaY / Math.abs(e.wheelDeltaY)) * -120)),
        i || n || (n = -e.wheelDelta || 0),
        1 === e.deltaMode && ((i *= 40), (n *= 40));
      var o = O(t);
      return o
        ? !!(function(e) {
            if (!e) return;
            f.length || (f = [e, e, e]);
            (e = Math.abs(e)),
              f.push(e),
              f.shift(),
              clearTimeout(r),
              (r = setTimeout(function() {
                try {
                  localStorage.SS_deltaBuffer = f.join(",");
                } catch (e) {}
              }, 1e3));
            var t = 120 < e && N(e);
            return !N(120) && !N(100) && !t;
          })(n) ||
            (1.2 < Math.abs(i) && (i *= g.stepSize / 120),
            1.2 < Math.abs(n) && (n *= g.stepSize / 120),
            _(o, i, n),
            e.preventDefault(),
            void P())
        : !c ||
            !Y ||
            (Object.defineProperty(e, "target", { value: window.frameElement }),
            parent.wheel(e));
    }
    function C(e) {
      var t = e.target,
        i =
          e.ctrlKey ||
          e.altKey ||
          e.metaKey ||
          (e.shiftKey && e.keyCode !== v.spacebar);
      document.body.contains(d) || (d = document.activeElement);
      var n = /^(button|submit|radio|checkbox|file|color|image)$/i;
      if (
        e.defaultPrevented ||
        /^(textarea|select|embed|object)$/i.test(t.nodeName) ||
        (z(t, "input") && !n.test(t.type)) ||
        z(d, "video") ||
        (function(e) {
          var t = e.target,
            i = !1;
          if (-1 != document.URL.indexOf("www.youtube.com/watch"))
            do {
              if (
                (i =
                  t.classList && t.classList.contains("html5-video-controls"))
              )
                break;
            } while ((t = t.parentNode));
          return i;
        })(e) ||
        t.isContentEditable ||
        i
      )
        return !0;
      if (
        (z(t, "button") || (z(t, "input") && n.test(t.type))) &&
        e.keyCode === v.spacebar
      )
        return !0;
      if (z(t, "input") && "radio" == t.type && y[e.keyCode]) return !0;
      var o = 0,
        r = 0,
        s = O(d);
      if (!s) return !c || !Y || parent.keydown(e);
      var a = s.clientHeight;
      switch ((s == document.body && (a = window.innerHeight), e.keyCode)) {
        case v.up:
          r = -g.arrowScroll;
          break;
        case v.down:
          r = g.arrowScroll;
          break;
        case v.spacebar:
          r = -(e.shiftKey ? 1 : -1) * a * 0.9;
          break;
        case v.pageup:
          r = 0.9 * -a;
          break;
        case v.pagedown:
          r = 0.9 * a;
          break;
        case v.home:
          s == document.body &&
            document.scrollingElement &&
            (s = document.scrollingElement),
            (r = -s.scrollTop);
          break;
        case v.end:
          var l = s.scrollHeight - s.scrollTop - a;
          r = 0 < l ? l + 10 : 0;
          break;
        case v.left:
          o = -g.arrowScroll;
          break;
        case v.right:
          o = g.arrowScroll;
          break;
        default:
          return !0;
      }
      _(s, o, r), e.preventDefault(), P();
    }
    function t(e) {
      d = e.target;
    }
    var n,
      o,
      S = ((n = 0),
      function(e) {
        return e.uniqueID || (e.uniqueID = n++);
      }),
      T = {},
      E = {},
      A = {};
    function P() {
      clearTimeout(o),
        (o = setInterval(function() {
          T = E = A = {};
        }, 1e3));
    }
    function M(e, t, i) {
      for (var n = i ? T : E, o = e.length; o--; ) n[S(e[o])] = t;
      return t;
    }
    function O(e) {
      var t = [],
        i = document.body,
        n = h.scrollHeight;
      do {
        var o = (!1 ? T : E)[S(e)];
        if (o) return M(t, o);
        if ((t.push(e), n === e.scrollHeight)) {
          var r = (F(h) && F(i)) || D(h);
          if ((c && $(h)) || (!c && r)) return M(t, V());
        } else if ($(e) && D(e)) return M(t, e);
      } while ((e = e.parentElement));
    }
    function $(e) {
      return e.clientHeight + 10 < e.scrollHeight;
    }
    function F(e) {
      return (
        "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
      );
    }
    function D(e) {
      var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
      return "scroll" === t || "auto" === t;
    }
    function j(e, t, i) {
      window.addEventListener(e, t, i || !1);
    }
    function I(e, t, i) {
      window.removeEventListener(e, t, i || !1);
    }
    function z(e, t) {
      return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
    }
    if (window.localStorage && localStorage.SS_deltaBuffer)
      try {
        f = localStorage.SS_deltaBuffer.split(",");
      } catch (e) {}
    function R(e, t) {
      return Math.floor(e / t) == e / t;
    }
    function N(e) {
      return R(f[0], e) && R(f[1], e) && R(f[2], e);
    }
    var H,
      L =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(e, t, i) {
          window.setTimeout(e, i || 1e3 / 60);
        },
      W =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver,
      V = ((H = document.scrollingElement),
      function() {
        if (!H) {
          var e = document.createElement("div");
          (e.style.cssText = "height:10000px;width:1px;"),
            document.body.appendChild(e);
          var t = document.body.scrollTop;
          document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            (H =
              document.body.scrollTop != t
                ? document.body
                : document.documentElement),
            window.scrollBy(0, -3),
            document.body.removeChild(e);
        }
        return H;
      });
    function B(e) {
      var t, i;
      return (
        (e *= g.pulseScale) < 1
          ? (t = e - (1 - Math.exp(-e)))
          : ((e -= 1), (t = (i = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - i))),
        t * g.pulseNormalize
      );
    }
    function q(e) {
      return 1 <= e
        ? 1
        : e <= 0
        ? 0
        : (1 == g.pulseNormalize && (g.pulseNormalize /= B(1)), B(e));
    }
    var U = window.navigator.userAgent,
      G = /Edge/.test(U),
      Y = /chrome/i.test(U) && !G,
      K = /safari/i.test(U) && !G,
      Q = /mobile/i.test(U),
      X = /Windows NT 6.1/i.test(U) && /rv:11/i.test(U),
      Z = K && (/Version\/8/i.test(U) || /Version\/9/i.test(U)),
      J = (Y || K || X) && !Q,
      ee = !1;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function() {
            ee = !0;
          }
        })
      );
    } catch (e) {}
    var te = !!ee && { passive: !1 },
      ie = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    function ne(e) {
      for (var t in e) i.hasOwnProperty(t) && (g[t] = e[t]);
    }
    ie && J && (j(ie, e, te), j("mousedown", t), j("load", b)),
      (ne.destroy = function() {
        a && a.disconnect(),
          I(ie, e),
          I("mousedown", t),
          I("keydown", C),
          I("resize", l),
          I("load", b);
      }),
      window.SmoothScrollOptions && ne(window.SmoothScrollOptions),
      "function" == typeof define && define.amd
        ? define(function() {
            return ne;
          })
        : "object" == typeof exports
        ? (module.exports = ne)
        : (window.SmoothScroll = ne);
  })();
var objectFitImages = (function() {
  "use strict";
  function r(e, t, i) {
    var n =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
      (t || 1) +
      "' height='" +
      (i || 0) +
      "'%3E%3C/svg%3E";
    f.call(e, "src") !== n && m.call(e, "src", n);
  }
  function s(e, t) {
    e.naturalWidth ? t(e) : setTimeout(s, 100, e, t);
  }
  function a(t) {
    var i,
      n,
      e = (function(e) {
        for (
          var t, i = getComputedStyle(e).fontFamily, n = {};
          null !== (t = d.exec(i));

        )
          n[t[1]] = t[2];
        return n;
      })(t),
      o = t[l];
    if (((e["object-fit"] = e["object-fit"] || "fill"), !o.img)) {
      if ("fill" === e["object-fit"]) return;
      if (!o.skipTest && u && !e["object-position"]) return;
    }
    if (!o.img) {
      (o.img = new Image(t.width, t.height)),
        (o.img.srcset = f.call(t, "data-ofi-srcset") || t.srcset),
        (o.img.src = f.call(t, "data-ofi-src") || t.src),
        m.call(t, "data-ofi-src", t.src),
        t.srcset && m.call(t, "data-ofi-srcset", t.srcset),
        r(t, t.naturalWidth || t.width, t.naturalHeight || t.height),
        t.srcset && (t.srcset = "");
      try {
        (i = t),
          (n = {
            get: function(e) {
              return i[l].img[e || "src"];
            },
            set: function(e, t) {
              return (
                (i[l].img[t || "src"] = e),
                m.call(i, "data-ofi-" + t, e),
                a(i),
                e
              );
            }
          }),
          Object.defineProperty(i, "src", n),
          Object.defineProperty(i, "currentSrc", {
            get: function() {
              return n.get("currentSrc");
            }
          }),
          Object.defineProperty(i, "srcset", {
            get: function() {
              return n.get("srcset");
            },
            set: function(e) {
              return n.set(e, "srcset");
            }
          });
      } catch (t) {
        window.console && console.warn("https://bit.ly/ofi-old-browser");
      }
    }
    (function(e) {
      if (e.srcset && !h && window.picturefill) {
        var t = window.picturefill._;
        (e[t.ns] && e[t.ns].evaled) || t.fillImg(e, { reselect: !0 }),
          e[t.ns].curSrc ||
            ((e[t.ns].supported = !1), t.fillImg(e, { reselect: !0 })),
          (e.currentSrc = e[t.ns].curSrc || e.src);
      }
    })(o.img),
      (t.style.backgroundImage =
        'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")'),
      (t.style.backgroundPosition = e["object-position"] || "center"),
      (t.style.backgroundRepeat = "no-repeat"),
      (t.style.backgroundOrigin = "content-box"),
      /scale-down/.test(e["object-fit"])
        ? s(o.img, function() {
            o.img.naturalWidth > t.width || o.img.naturalHeight > t.height
              ? (t.style.backgroundSize = "contain")
              : (t.style.backgroundSize = "auto");
          })
        : (t.style.backgroundSize = e["object-fit"]
            .replace("none", "auto")
            .replace("fill", "100% 100%")),
      s(o.img, function(e) {
        r(t, e.naturalWidth, e.naturalHeight);
      });
  }
  function o(e, t) {
    var i = !g && !e;
    if (((t = t || {}), (e = e || "img"), (c && !t.skipTest) || !p)) return !1;
    "img" === e
      ? (e = document.getElementsByTagName("img"))
      : "string" == typeof e
      ? (e = document.querySelectorAll(e))
      : "length" in e || (e = [e]);
    for (var n = 0; n < e.length; n++)
      (e[n][l] = e[n][l] || { skipTest: t.skipTest }), a(e[n]);
    i &&
      (document.body.addEventListener(
        "load",
        function(e) {
          "IMG" === e.target.tagName && o(e.target, { skipTest: t.skipTest });
        },
        !0
      ),
      (g = !0),
      (e = "img")),
      t.watchMQ &&
        window.addEventListener(
          "resize",
          o.bind(null, e, { skipTest: t.skipTest })
        );
  }
  var l = "bfred-it:object-fit-images",
    d = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
    e =
      "undefined" == typeof Image
        ? { style: { "object-position": 1 } }
        : new Image(),
    u = "object-fit" in e.style,
    c = "object-position" in e.style,
    p = "background-size" in e.style,
    h = "string" == typeof e.currentSrc,
    f = e.getAttribute,
    m = e.setAttribute,
    g = !1;
  return (
    (o.supportsObjectFit = u),
    (o.supportsObjectPosition = c),
    (function() {
      function i(e, t) {
        return e[l] && e[l].img && ("src" === t || "srcset" === t)
          ? e[l].img
          : e;
      }
      c ||
        ((HTMLImageElement.prototype.getAttribute = function(e) {
          return f.call(i(this, e), e);
        }),
        (HTMLImageElement.prototype.setAttribute = function(e, t) {
          return m.call(i(this, e), e, String(t));
        }));
    })(),
    o
  );
})();
!(function(e, t) {
  var i = (function(n, h) {
    "use strict";
    var f, m;
    if (
      ((function() {
        var e,
          t = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125
          };
        for (e in ((m = n.lazySizesConfig || n.lazysizesConfig || {}), t))
          e in m || (m[e] = t[e]);
      })(),
      !h || !h.getElementsByClassName)
    )
      return { init: function() {}, cfg: m, noSupport: !0 };
    var g = h.documentElement,
      r = n.Date,
      o = n.HTMLPictureElement,
      s = "addEventListener",
      v = "getAttribute",
      e = n[s],
      c = n.setTimeout,
      i = n.requestAnimationFrame || c,
      a = n.requestIdleCallback,
      p = /^picture$/i,
      l = ["load", "error", "lazyincluded", "_lazyloaded"],
      d = {},
      y = Array.prototype.forEach,
      u = function(e, t) {
        return (
          d[t] || (d[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
          d[t].test(e[v]("class") || "") && d[t]
        );
      },
      b = function(e, t) {
        u(e, t) ||
          e.setAttribute("class", (e[v]("class") || "").trim() + " " + t);
      },
      w = function(e, t) {
        var i;
        (i = u(e, t)) &&
          e.setAttribute("class", (e[v]("class") || "").replace(i, " "));
      },
      k = function(t, i, e) {
        var n = e ? s : "removeEventListener";
        e && k(t, i),
          l.forEach(function(e) {
            t[n](e, i);
          });
      },
      x = function(e, t, i, n, o) {
        var r = h.createEvent("Event");
        return (
          i || (i = {}),
          (i.instance = f),
          r.initEvent(t, !n, !o),
          (r.detail = i),
          e.dispatchEvent(r),
          r
        );
      },
      _ = function(e, t) {
        var i;
        !o && (i = n.picturefill || m.pf)
          ? (t && t.src && !e[v]("srcset") && e.setAttribute("srcset", t.src),
            i({ reevaluate: !0, elements: [e] }))
          : t && t.src && (e.src = t.src);
      },
      C = function(e, t) {
        return (getComputedStyle(e, null) || {})[t];
      },
      S = function(e, t, i) {
        for (i = i || e.offsetWidth; i < m.minSize && t && !e._lazysizesWidth; )
          (i = t.offsetWidth), (t = t.parentNode);
        return i;
      },
      T = ((xe = []),
      (_e = []),
      (Ce = xe),
      (Se = function() {
        var e = Ce;
        for (Ce = xe.length ? _e : xe, ke = !(we = !0); e.length; ) e.shift()();
        we = !1;
      }),
      (Te = function(e, t) {
        we && !t
          ? e.apply(this, arguments)
          : (Ce.push(e), ke || ((ke = !0), (h.hidden ? c : i)(Se)));
      }),
      (Te._lsFlush = Se),
      Te),
      t = function(i, e) {
        return e
          ? function() {
              T(i);
            }
          : function() {
              var e = this,
                t = arguments;
              T(function() {
                i.apply(e, t);
              });
            };
      },
      E = function(e) {
        var t,
          i,
          n = function() {
            (t = null), e();
          },
          o = function() {
            var e = r.now() - i;
            e < 99 ? c(o, 99 - e) : (a || n)(n);
          };
        return function() {
          (i = r.now()), t || (t = c(o, 99));
        };
      },
      A = ((ee = /^img$/i),
      (te = /^iframe$/i),
      (ie = "onscroll" in n && !/(gle|ing)bot/.test(navigator.userAgent)),
      (ne = 0),
      (oe = 0),
      (re = -1),
      (se = function(e) {
        oe--, (!e || oe < 0 || !e.target) && (oe = 0);
      }),
      (ae = function(e) {
        return (
          null == U && (U = "hidden" == C(h.body, "visibility")),
          U ||
            ("hidden" != C(e.parentNode, "visibility") &&
              "hidden" != C(e, "visibility"))
        );
      }),
      (le = function(e, t) {
        var i,
          n = e,
          o = ae(e);
        for (
          W -= t, q += t, V -= t, B += t;
          o && (n = n.offsetParent) && n != h.body && n != g;

        )
          (o = 0 < (C(n, "opacity") || 1)) &&
            "visible" != C(n, "overflow") &&
            ((i = n.getBoundingClientRect()),
            (o =
              B > i.left && V < i.right && q > i.top - 1 && W < i.bottom + 1));
        return o;
      }),
      (de = function() {
        var e,
          t,
          i,
          n,
          o,
          r,
          s,
          a,
          l,
          d,
          u,
          c,
          p = f.elements;
        if ((R = m.loadMode) && oe < 8 && (e = p.length)) {
          for (t = 0, re++; t < e; t++)
            if (p[t] && !p[t]._lazyRace)
              if (!ie || (f.prematureUnveil && f.prematureUnveil(p[t])))
                ge(p[t]);
              else if (
                (((a = p[t][v]("data-expand")) && (r = 1 * a)) || (r = ne),
                d ||
                  ((d =
                    !m.expand || m.expand < 1
                      ? 500 < g.clientHeight && 500 < g.clientWidth
                        ? 500
                        : 370
                      : m.expand),
                  (f._defEx = d),
                  (u = d * m.expFactor),
                  (c = m.hFac),
                  (U = null),
                  ne < u && oe < 1 && 2 < re && 2 < R && !h.hidden
                    ? ((ne = u), (re = 0))
                    : (ne = 1 < R && 1 < re && oe < 6 ? d : 0)),
                l !== r &&
                  ((H = innerWidth + r * c),
                  (L = innerHeight + r),
                  (s = -1 * r),
                  (l = r)),
                (i = p[t].getBoundingClientRect()),
                (q = i.bottom) >= s &&
                  (W = i.top) <= L &&
                  (B = i.right) >= s * c &&
                  (V = i.left) <= H &&
                  (q || B || V || W) &&
                  (m.loadHidden || ae(p[t])) &&
                  ((I && oe < 3 && !a && (R < 3 || re < 4)) || le(p[t], r)))
              ) {
                if ((ge(p[t]), (o = !0), 9 < oe)) break;
              } else
                !o &&
                  I &&
                  !n &&
                  oe < 4 &&
                  re < 4 &&
                  2 < R &&
                  (j[0] || m.preloadAfterLoad) &&
                  (j[0] ||
                    (!a &&
                      (q || B || V || W || "auto" != p[t][v](m.sizesAttr)))) &&
                  (n = j[0] || p[t]);
          n && !o && ge(n);
        }
      }),
      (G = de),
      (K = 0),
      (Q = m.throttleDelay),
      (X = m.ricTimeout),
      (Z = function() {
        (Y = !1), (K = r.now()), G();
      }),
      (J =
        a && 49 < X
          ? function() {
              a(Z, { timeout: X }), X !== m.ricTimeout && (X = m.ricTimeout);
            }
          : t(function() {
              c(Z);
            }, !0)),
      (ue = function(e) {
        var t;
        (e = !0 === e) && (X = 33),
          Y ||
            ((Y = !0),
            (t = Q - (r.now() - K)) < 0 && (t = 0),
            e || t < 9 ? J() : c(J, t));
      }),
      (ce = function(e) {
        var t = e.target;
        t._lazyCache
          ? delete t._lazyCache
          : (se(e),
            b(t, m.loadedClass),
            w(t, m.loadingClass),
            k(t, he),
            x(t, "lazyloaded"));
      }),
      (pe = t(ce)),
      (he = function(e) {
        pe({ target: e.target });
      }),
      (fe = function(e) {
        var t,
          i = e[v](m.srcsetAttr);
        (t = m.customMedia[e[v]("data-media") || e[v]("media")]) &&
          e.setAttribute("media", t),
          i && e.setAttribute("srcset", i);
      }),
      (me = t(function(t, e, i, n, o) {
        var r, s, a, l, d, u;
        (d = x(t, "lazybeforeunveil", e)).defaultPrevented ||
          (n && (i ? b(t, m.autosizesClass) : t.setAttribute("sizes", n)),
          (s = t[v](m.srcsetAttr)),
          (r = t[v](m.srcAttr)),
          o && ((a = t.parentNode), (l = a && p.test(a.nodeName || ""))),
          (u = e.firesLoad || ("src" in t && (s || r || l))),
          (d = { target: t }),
          b(t, m.loadingClass),
          u && (clearTimeout(z), (z = c(se, 2500)), k(t, he, !0)),
          l && y.call(a.getElementsByTagName("source"), fe),
          s
            ? t.setAttribute("srcset", s)
            : r &&
              !l &&
              (te.test(t.nodeName)
                ? (function(t, i) {
                    try {
                      t.contentWindow.location.replace(i);
                    } catch (e) {
                      t.src = i;
                    }
                  })(t, r)
                : (t.src = r)),
          o && (s || l) && _(t, { src: r })),
          t._lazyRace && delete t._lazyRace,
          w(t, m.lazyClass),
          T(function() {
            var e = t.complete && 1 < t.naturalWidth;
            (u && !e) ||
              (e && b(t, "ls-is-cached"),
              ce(d),
              (t._lazyCache = !0),
              c(function() {
                "_lazyCache" in t && delete t._lazyCache;
              }, 9)),
              "lazy" == t.loading && oe--;
          }, !0);
      })),
      (ge = function(e) {
        if (!e._lazyRace) {
          var t,
            i = ee.test(e.nodeName),
            n = i && (e[v](m.sizesAttr) || e[v]("sizes")),
            o = "auto" == n;
          ((!o && I) ||
            !i ||
            (!e[v]("src") && !e.srcset) ||
            e.complete ||
            u(e, m.errorClass) ||
            !u(e, m.lazyClass)) &&
            ((t = x(e, "lazyunveilread").detail),
            o && P.updateElem(e, !0, e.offsetWidth),
            (e._lazyRace = !0),
            oe++,
            me(e, t, o, n, i));
        }
      }),
      (ve = E(function() {
        (m.loadMode = 3), ue();
      })),
      (ye = function() {
        3 == m.loadMode && (m.loadMode = 2), ve();
      }),
      (be = function() {
        I ||
          (r.now() - N < 999
            ? c(be, 999)
            : ((I = !0), (m.loadMode = 3), ue(), e("scroll", ye, !0)));
      }),
      {
        _: function() {
          (N = r.now()),
            (f.elements = h.getElementsByClassName(m.lazyClass)),
            (j = h.getElementsByClassName(m.lazyClass + " " + m.preloadClass)),
            e("scroll", ue, !0),
            e("resize", ue, !0),
            n.MutationObserver
              ? new MutationObserver(ue).observe(g, {
                  childList: !0,
                  subtree: !0,
                  attributes: !0
                })
              : (g[s]("DOMNodeInserted", ue, !0),
                g[s]("DOMAttrModified", ue, !0),
                setInterval(ue, 999)),
            e("hashchange", ue, !0),
            [
              "focus",
              "mouseover",
              "click",
              "load",
              "transitionend",
              "animationend"
            ].forEach(function(e) {
              h[s](e, ue, !0);
            }),
            /d$|^c/.test(h.readyState)
              ? be()
              : (e("load", be), h[s]("DOMContentLoaded", ue), c(be, 2e4)),
            f.elements.length ? (de(), T._lsFlush()) : ue();
        },
        checkElems: ue,
        unveil: ge,
        _aLSL: ye
      }),
      P = (($ = t(function(e, t, i, n) {
        var o, r, s;
        if (
          ((e._lazysizesWidth = n),
          (n += "px"),
          e.setAttribute("sizes", n),
          p.test(t.nodeName || ""))
        )
          for (
            o = t.getElementsByTagName("source"), r = 0, s = o.length;
            r < s;
            r++
          )
            o[r].setAttribute("sizes", n);
        i.detail.dataAttr || _(e, i.detail);
      })),
      (F = function(e, t, i) {
        var n,
          o = e.parentNode;
        o &&
          ((i = S(e, o, i)),
          (n = x(e, "lazybeforesizes", { width: i, dataAttr: !!t }))
            .defaultPrevented ||
            ((i = n.detail.width) && i !== e._lazysizesWidth && $(e, o, n, i)));
      }),
      (D = E(function() {
        var e,
          t = O.length;
        if (t) for (e = 0; e < t; e++) F(O[e]);
      })),
      {
        _: function() {
          (O = h.getElementsByClassName(m.autosizesClass)), e("resize", D);
        },
        checkElems: D,
        updateElem: F
      }),
      M = function() {
        !M.i && h.getElementsByClassName && ((M.i = !0), P._(), A._());
      };
    var O, $, F, D;
    var j,
      I,
      z,
      R,
      N,
      H,
      L,
      W,
      V,
      B,
      q,
      U,
      G,
      Y,
      K,
      Q,
      X,
      Z,
      J,
      ee,
      te,
      ie,
      ne,
      oe,
      re,
      se,
      ae,
      le,
      de,
      ue,
      ce,
      pe,
      he,
      fe,
      me,
      ge,
      ve,
      ye,
      be;
    var we, ke, xe, _e, Ce, Se, Te;
    return (
      c(function() {
        m.init && M();
      }),
      (f = {
        cfg: m,
        autoSizer: P,
        loader: A,
        init: M,
        uP: _,
        aC: b,
        rC: w,
        hC: u,
        fire: x,
        gW: S,
        rAF: T
      })
    );
  })(e, e.document);
  (e.lazySizes = i),
    "object" == typeof module && module.exports && (module.exports = i);
})("undefined" != typeof window ? window : {});
