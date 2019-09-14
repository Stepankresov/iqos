"use strict";
var _slicedToArray = function(e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e))
      return (function(e, t) {
        var a = [],
          s = !0,
          n = !1,
          i = void 0;
        try {
          for (
            var o, l = e[Symbol.iterator]();
            !(s = (o = l.next()).done) &&
            (a.push(o.value), !t || a.length !== t);
            s = !0
          );
        } catch (e) {
          (n = !0), (i = e);
        } finally {
          try {
            !s && l.return && l.return();
          } finally {
            if (n) throw i;
          }
        }
        return a;
      })(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  },
  _createClass = (function() {
    function defineProperties(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(e, s.key, s);
      }
    }
    return function(e, t, a) {
      return (
        t && defineProperties(e.prototype, t), a && defineProperties(e, a), e
      );
    };
  })();
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
$(document).ready(function() {
  var e,
    k = {
      time: 200,
      desktopXlSize: 1920,
      desktopLgSize: 1664,
      desktopMdSize: 1408,
      desktopSize: 1280,
      tabletLgSize: 1024,
      tabletSize: 768,
      mobileLgSize: 640,
      mobileSize: 480,
      popupsBreakpoint: 1024,
      popupsFixedTimeout: 5e3,
      isTouch: $.browser.mobile,
      lang: $("html").attr("lang")
    };
  if (/localhost|dev.greensight.ru/i.test(window.location.hostname))
    k.buildUrl = "./";
  else {
    var t = $("head").data("build") || "/assets/build/";
    k.buildUrl = window.location.origin + t;
  }
  $(window).load(function() {
    k.isTouch
      ? $("body")
          .addClass("touch")
          .removeClass("no-touch")
      : $("body")
          .addClass("no-touch")
          .removeClass("touch"),
      0 < $("textarea").length && autosize($("textarea"));
  }),
    (function() {
      var s = document.getElementById("cursor"),
        t = document.getElementById("cursor-tail-wrap"),
        e = [],
        o = { x: 0, y: 0 },
        a = !1;
      window.addEventListener("mousemove", function(e) {
        var t = e.clientX,
          a = e.clientY;
        (s.style.left = t + "px"),
          (s.style.top = a + "px"),
          (o.x = t),
          (o.y = a);
      });
      var n = function mouseOutHandler() {
          s.classList.remove("is-hover"),
            s.classList.remove("is-cursor-drag"),
            this.removeEventListener("mouseout", mouseOutHandler),
            this.removeEventListener("mousedown", i);
        },
        i = function() {
          s.classList.add("is-cursor-active");
        },
        l =
          "button, a[href], input, label, textarea, .btn, .link, .tabs__link:not(.is-active), .video__main, .slider__range",
        r = ".carousel, .map-contacts";
      document.addEventListener("mouseover", function(e) {
        var t = e.target;
        if (!t.closest('[disabled], [class*="disabled"], .no-pointer')) {
          if (t.closest(l))
            (t = t.closest(l)),
              s.classList.add("is-hover"),
              t.addEventListener("mousedown", i);
          else {
            if (!t.closest(r)) return;
            (t = t.closest(r)), s.classList.add("is-cursor-drag");
          }
          t.addEventListener("mouseout", n);
        }
      }),
        document.addEventListener("dragstart", function(e) {
          e.preventDefault();
        }),
        document.addEventListener("mouseup", function() {
          s.classList.remove("is-cursor-active");
        });
      for (
        var c = (function() {
            function Dot() {
              var e;
              _classCallCheck(this, Dot),
                (this.x = 0),
                (this.y = 0),
                (this.node = (((e = document.createElement("div")).className =
                  "cursor-tail"),
                t.appendChild(e),
                e));
            }
            return (
              _createClass(Dot, [
                {
                  key: "draw",
                  value: function() {
                    (this.node.style.left = this.x + "px"),
                      (this.node.style.top = this.y + "px");
                  }
                }
              ]),
              Dot
            );
          })(),
          d = 0;
        d < 12;
        d++
      ) {
        var u = new c(),
          p = 11 - (6 / 11) * d;
        (u.node.style.opacity = Math.round((1e4 * (12 - d)) / 12) / 1e4),
          (u.node.style.width = p + "px"),
          (u.node.style.height = p + "px"),
          e.push(u);
      }
      function animate() {
        var n, i;
        (n = o.x),
          (i = o.y),
          e.forEach(function(e, t, a) {
            var s = a[t + 1] || a[0];
            (e.x = n),
              (e.y = i),
              e.draw(),
              (n += 0.6 * (s.x - e.x)),
              (i += 0.6 * (s.y - e.y));
          }),
          a && window.requestAnimationFrame(animate);
      }
      document.addEventListener("dblclick", function() {
        (a = !a)
          ? ((t.style.display = "block"), animate())
          : (t.style.display = "none");
      }),
        $("html").on("mouseleave", function() {
          $(s).hide();
        }),
        $("html").on("mouseenter", function() {
          $(s).show();
        });
    })(),
    ((e = Element.prototype).matches =
      e.matches ||
      e.mozMatchesSelector ||
      e.msMatchesSelector ||
      e.oMatchesSelector ||
      e.webkitMatchesSelector),
    (e.closest =
      e.closest ||
      function(e) {
        return this
          ? this.matches(e)
            ? this
            : this.parentElement
            ? this.parentElement.closest(e)
            : null
          : null;
      });
  SmoothScroll({
    frameRate: 150,
    animationTime: 700,
    stepSize: 150,
    pulseAlgorithm: !0,
    pulseScale: 4,
    pulseNormalize: 1,
    accelerationDelta: 50,
    accelerationMax: 3,
    keyboardSupport: !0,
    arrowScroll: 50,
    fixedBackground: !0,
    excluded: ""
  }),
    ($.fn.customFileInput = function() {
      this.each(function(e, t) {
        var a = $(t);
        if (void 0 === a.attr("data-bfi-disabled")) {
          var s = "Browse";
          void 0 !== a.attr("title") && (s = a.attr("title")),
            a.attr("class") && " " + a.attr("class");
          var n = $(
            '<div class="custom-file"><label class="js-label link"></label></div>'
          ).appendTo(a.closest(".js-multiple-files__main"));
          n.find(".js-label")
            .append(a)
            .append(
              '<svg class="icon icon--plus"><use xlink:href="#icon-plus"></use></svg>' +
                s
            );
          var i = n.closest(".js-multiple-files");
          i.find(".errors-placement").length ||
            i.append('<div class="errors-placement"></div>');
        }
      })
        .promise()
        .done(function() {
          $(".custom-file input[type=file]")
            .off()
            .on("change", function() {
              var e,
                t,
                a,
                s,
                n,
                i,
                o,
                l,
                r,
                c,
                d,
                u,
                p,
                f,
                h,
                m,
                v,
                b,
                g,
                w,
                y = $(this).val();
              ($(this)
                .parent()
                .next(".custom-file__name")
                .remove(),
              (y =
                $(this).prop("files") && 1 < $(this).prop("files").length
                  ? $(this)[0].files.length + " files"
                  : y.substring(y.lastIndexOf("\\") + 1, y.length))) &&
                ((e = $(this)),
                (t = e.closest(".custom-file")),
                (a = e
                  .closest(".js-multiple-files")
                  .find(".multiple-files-list__item")),
                (s = e
                  .closest(".js-multiple-files")
                  .find("input:file")
                  .first()
                  .data("names")
                  .split(", ").length),
                e.parsley().isValid() &&
                  (a.length < s - 1 &&
                    ((d = (c = e).closest(".js-multiple-files")),
                    (u = d.find(".js-multiple-files__main")),
                    (p = d.find("input:file").length),
                    (f = d
                      .find("input:file")
                      .first()
                      .data("names")
                      .split(", ")),
                    (h = c.attr("data-parsley-file-extension") || ""),
                    (m = c.attr("data-parsley-file-max-size") || ""),
                    (v = c.attr("accept") || ""),
                    (b = f[p]),
                    (g =
                      '<input type="file" name="' +
                      b +
                      '" value="" data-parsley-file-extension="' +
                      h +
                      '" data-parsley-max-file-size="' +
                      m +
                      '" accept="' +
                      v +
                      '" title="Добавить файл">'),
                    (w = $.parseHTML(g)),
                    u.append(w),
                    d
                      .find('input[type="file"][name="' + b + '"]')
                      .customFileInput()),
                  (i = (n = e)
                    .val()
                    .substring(n.val().lastIndexOf("\\") + 1, n.val().length)),
                  (o = n.closest(".js-multiple-files")),
                  (l =
                    '<li class="multiple-files-list__item" data-input="' +
                    n.attr("name") +
                    '">\n                                    ' +
                    i +
                    '\n                                \n                                    <button class="multiple-files-list__remove js-remove-file" type="button" title="Удалить файл">\n                                        <svg class="icon icon--cross-sm"><use xlink:href="#icon-cross_sm"></use></svg>\n                                    </button>\n                                </li>'),
                  (r = $.parseHTML(l)),
                  o
                    .closest('form[data-validate="true"]')
                    .parsley()
                    .destroy(),
                  o.find(".js-multiple-file-list").append(r),
                  o.closest('form[data-validate="true"]').parsley(),
                  t.addClass("is-selected"),
                  $(window).width() > k.tabletLgSize && $.fancybox.update()));
            });
        });
    }),
    $('input[type="file"]').customFileInput();
  var a,
    s,
    n,
    i = "ru-RU" === k.lang ? "ru" : "en";
  function updateSvg(e) {
    var t = e.find("use");
    t.each(function(e) {
      t[e].href && t[e].href.baseVal && (t[e].href.baseVal = t[e].href.baseVal);
    });
  }
  Parsley.setLocale(i),
    Parsley.addMessages("ru", {
      type: { email: "Некорректный почтовый адрес" }
    }),
    Parsley.addMessages("en", { type: { email: "Incorrect email address" } }),
    $.extend(Parsley.options, {
      trigger: "blur change",
      validationThreshold: "0",
      errorsWrapper: "<div></div>",
      errorTemplate: '<p class="parsley-error-message"></p>',
      classHandler: function(e) {
        var t = e.$element,
          a = t.attr("type"),
          s = void 0;
        return (
          "checkbox" === a || "radio" === a
            ? (s = t)
            : t.hasClass("select2-hidden-accessible") &&
              (s = $(".select2-selection--single", t.next(".select2"))),
          s
        );
      },
      errorsContainer: function(e) {
        var t = e.$element,
          a = t.attr("type"),
          s = void 0;
        return (
          "checkbox" === a || "radio" === a
            ? (s = $('[name="' + t.attr("name") + '"]:last + label').next(
                ".errors-placement"
              ))
            : t.hasClass("select2-hidden-accessible")
            ? (s = t.next(".select2").next(".errors-placement"))
            : t.closest(".js-datepicker-range").length
            ? (s = t.closest(".js-datepicker-range").next(".errors-placement"))
            : "is_recaptcha_success" === t.attr("name")
            ? (s = t
                .parent()
                .next(".g-recaptcha")
                .next(".errors-placement"))
            : "file" === a &&
              (s = t.closest(".js-multiple-files").find(".errors-placement")),
          s
        );
      }
    }),
    Parsley.addValidator("nameRu", {
      validateString: function(e) {
        return /^[а-яё\- ]*$/i.test(e);
      },
      messages: {
        ru: 'Cимволы А-Я, а-я, " ", "-"',
        en: 'Only simbols А-Я, а-я, " ", "-"'
      }
    }),
    Parsley.addValidator("nameEn", {
      validateString: function(e) {
        return /^[a-z\- ]*$/i.test(e);
      },
      messages: {
        ru: 'Cимволы A-Z, a-z, " ", "-"',
        en: 'Only simbols A-Z, a-z, " ", "-"'
      }
    }),
    Parsley.addValidator("name", {
      validateString: function(e) {
        return /^[а-яёa-z\- ]*$/i.test(e);
      },
      messages: {
        ru: 'Cимволы A-Z, a-z, А-Я, а-я, " ", "-"',
        en: 'Only simbols A-Z, a-z, А-Я, а-я, " ", "-"'
      }
    }),
    Parsley.addValidator("numLetterRu", {
      validateString: function(e) {
        return /^[0-9а-яё]*$/i.test(e);
      },
      messages: {
        ru: "Cимволы А-Я, а-я, 0-9",
        en: "Only simbols А-Я, а-я, 0-9"
      }
    }),
    Parsley.addValidator("numLetter", {
      validateString: function(e) {
        return /^[а-яёa-z0-9]*$/i.test(e);
      },
      messages: {
        ru: "Cимволы A-Z, a-z, А-Я, а-я, 0-9",
        en: "Only simbols A-Z, a-z, А-Я, а-я, 0-9"
      }
    }),
    Parsley.addValidator("phone", {
      validateString: function(e) {
        return /^[-+0-9() ]*$/i.test(e);
      },
      messages: {
        ru: "Некорректный телефонный номер",
        en: "Incorrect phone number"
      }
    }),
    Parsley.addValidator("number", {
      validateString: function(e) {
        return /^[0-9]*$/i.test(e);
      },
      messages: { ru: "Cимволы 0-9", en: "Only simbols 0-9" }
    }),
    Parsley.addValidator("date", {
      validateString: function(e) {
        var t = /(\d{1,2})\.(\d{1,2})\.(\d{4})/,
          a = arguments[2].$element.data("dateMin"),
          s = arguments[2].$element.data("dateMax"),
          n = void 0,
          i = void 0,
          o = void 0,
          l = void 0;
        return (
          a && (l = a.match(t)) && (n = new Date(+l[3], l[2] - 1, +l[1])),
          s && (l = s.match(t)) && (i = new Date(+l[3], l[2] - 1, +l[1])),
          (l = e.match(t)) && (o = new Date(+l[3], l[2] - 1, +l[1])),
          /^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{4})$/.test(
            e
          ) &&
            (!n || n <= o) &&
            (!i || o <= i)
        );
      },
      messages: { ru: "Некорректная дата", en: "Incorrect date" }
    }),
    Parsley.addValidator("fileMaxSize", {
      validateString: function(e, t, a) {
        var s = a.$element[0].files;
        return 1 !== s.length || s[0].size <= 1024 * t * 1024;
      },
      requirementType: "integer",
      messages: {
        ru: "Файл должен весить не более, чем %s Mb",
        en: "File size can't be more then %s Mb"
      }
    }),
    Parsley.on("field:init", function() {
      var e = this.$element,
        t = e.attr("type"),
        a = $("<div/>").addClass("errors-placement"),
        s = void 0;
      "checkbox" === t || "radio" === t
        ? (s = $('[name="' + e.attr("name") + '"]:last + label')).next(
            ".errors-placement"
          ).length || s.after(a)
        : e.hasClass("select2-hidden-accessible")
        ? (s = e.next(".select2")).next(".errors-placement").length ||
          s.after(a)
        : "file" === t
        ? (s = e.closest(".custom-file")).next(".errors-placement").length ||
          s.after(a)
        : e.closest(".js-datepicker-range").length
        ? (s = e.closest(".js-datepicker-range")).next(".errors-placement")
            .length || s.after(a)
        : "is_recaptcha_success" === e.attr("name") &&
          ((s = e.parent().next(".g-recaptcha")).next(".errors-placement")
            .length ||
            s.after(a));
    }),
    $('form[data-validate="true"]').parsley(),
    $(".js-phone-mask").inputmask("+7 (999) 999-99-99", {
      clearMaskOnLostFocus: !0,
      showMaskOnHover: !1
    }),
    $(document).on("click", ".js-remove-file", function() {
      var e, t, a, s, n, i, o, l, r, c, d;
      return (
        (e = $(this)),
        (t = e.closest("[data-input]")),
        (a = t.data("input")),
        (s = e.closest(".js-multiple-files")),
        (n = s
          .find("input:file")
          .last()
          .closest(".custom-file")),
        (i = s.find('input[type="file"][name="' + a + '"]')),
        (o = e.closest(".js-multiple-file-list")),
        (l = s
          .find("input:file")
          .first()
          .data("names")
          .split(", ")),
        (r = l.length),
        (d = c = void 0),
        t
          .closest(".js-multiple-files")
          .find(".errors-placement")
          .html(""),
        t.remove(),
        o.find("li").size() !== r - 1 && n.remove(),
        (c = s.find("input:file")),
        (d = s.find("[data-input]")),
        c.each(function(e) {
          $(this).attr("name", l[e]);
        }),
        d.each(function(e) {
          $(this).attr("data-input", l[e]);
        }),
        o.find("li").size() ||
          o
            .siblings(".custom-file")
            .find(".link__dotted")
            .text(s.data("empty-list-text") || i.attr("title")),
        c
          .last()
          .closest(".custom-file")
          .removeClass("is-selected"),
        c.last().val(""),
        $(window).width() > k.tabletLgSize && $.fancybox.update(),
        !1
      );
    }),
    (a = $(".js-header").outerHeight()),
    (s = $(".js-telegram-link")),
    (n = window.matchMedia("(max-width: " + (k.desktopMdSize - 1) + "px)")),
    $(window).on("scroll", function() {
      n.matches ||
        (window.pageYOffset > a
          ? s.addClass("is-fixed")
          : s.removeClass("is-fixed"));
    });
  new ((function() {
    function TabSwitcher() {
      _classCallCheck(this, TabSwitcher);
      var a = this;
      (a.tabs = $(".js-tabs")),
        a.tabs.each(function() {
          $(this)
            .find(".js-tab-link.is-active")
            .next()
            .addClass("is-open");
        }),
        a.tabs.on("click", ".js-tab-link", function(e) {
          a.open($(this), e);
        }),
        $(document).on("click", "[data-tab-open]", function(e) {
          var t = $(this).attr("data-tab-open");
          if ((a.open($(t), e), void 0 === $(this).attr("data-popup")))
            return !1;
        });
    }
    return (
      _createClass(TabSwitcher, [
        {
          key: "open",
          value: function(e, t) {
            if ((t.preventDefault(), !e.hasClass("is-active"))) {
              var a = e.closest(this.tabs);
              a.find(".is-open").removeClass("is-open"),
                e.next().toggleClass("is-open"),
                a.find(".is-active").removeClass("is-active"),
                e.addClass("is-active");
            }
          }
        }
      ]),
      TabSwitcher
    );
  })())();
  var o = (function() {
    function Popup(e) {
      var t = this;
      _classCallCheck(this, Popup),
        (this.data = e),
        (this.data.breakpoint = this.data.breakpoint || k.popupsBreakpoint),
        (this.data.time = this.data.time || k.time),
        (this.settings = {
          href: this.data.id,
          fitToView: !1,
          margin: 0,
          padding: 0,
          openEffect: "none",
          closeEffect: "none",
          centerOnScroll: !!this.data.fixed,
          parent: this.data.parent ? this.data.parent : "body",
          autoCenter: !this.data.dropdown,
          helpers: {
            title: null,
            overlay: {
              locked: !(this.data.fixed || this.data.dropdown),
              closeClick: !1
            }
          },
          tpl: {
            wrap:
              '<div class="fancybox-wrap" tabIndex="-1">\n                                <div class="fancybox-skin ' +
              this.data.animation +
              '">\n                                    <div class="fancybox-outer">\n                                        <div class="fancybox-inner"></div>\n                                    </div>\n                                </div>\n                            </div>',
            closeBtn:
              '<button class="fancybox-item fancybox-close" type="button">\n                                    <svg class="icon icon--cross"><use xlink:href="#icon-cross"></use></svg>\n                                </button>'
          },
          onUpdate: function() {
            autosize.update($(".popup textarea"));
          },
          afterShow: function() {
            (autosize.update($(".popup textarea")),
            setTimeout(function() {
              $.fancybox.update();
            }, 500),
            t.data.isCarousel) &&
              $(t.data.id)
                .find(".js-carousel")
                .slick("setPosition");
          },
          beforeShow: function() {
            t.data.wrapClass && $(".fancybox-wrap").addClass(t.data.wrapClass),
              !1 === t.data.overlay &&
                $(".fancybox-overlay").addClass("is-disabled"),
              t.data.parent && $(t.data.parent).append($(".fancybox-wrap")),
              $(".fancybox-skin").addClass("animated"),
              t.settings.helpers.overlay.locked &&
                !$(".fancybox-wrap").closest(".fancybox-overlay").length &&
                ($(".fancybox-overlay").append($(".fancybox-wrap")),
                $("html").addClass("fancybox-margin fancybox-lock")),
              $("body").addClass("with-layer");
          },
          afterClose: function() {
            updateSvg($("body")),
              t.data.showParentAfterClose &&
                setTimeout(function() {
                  t.data.parentPopup &&
                    (t.data.parentPopup.open(),
                    (t.data.parentPopup = void 0),
                    (t.data.showParentAfterClose = null));
                }, 0),
              $("body").removeClass("with-layer");
          }
        }),
        (this.windowWidth = $(window).width()),
        this.calcSizes();
    }
    return (
      _createClass(
        Popup,
        [
          {
            key: "calcSizes",
            value: function() {
              var e = void 0,
                t = void 0,
                a = void 0;
              (!1 !== this.data.breakpoint &&
                $(window).width() < this.data.breakpoint) ||
              this.data.fullscreen
                ? (a = !(t = e = "100%"))
                : this.data.aside
                ? ((e = "auto"), (a = !(t = "100%")))
                : this.data.fixed
                ? ((e = "100%"), (a = !(t = "auto")))
                : this.data.dropdown
                ? (a = !(t = e = "auto"))
                : ((t = e = "auto"), (a = !0)),
                (this.settings.width = e),
                (this.settings.height = t),
                (this.settings.autoSize = a);
            }
          },
          {
            key: "open",
            value: function() {
              var e = this;
              (this.data.dropdown && $(window).width() < k.tabletSize) ||
                (this.calcSizes(),
                $.fancybox(this.settings),
                updateSvg($(this.data.id)),
                this.data.fixed &&
                  !1 !== this.data.fixedTimeout &&
                  setTimeout(function() {
                    e.close();
                  }, this.data.fixedTimeout || k.popupsFixedTimeout));
            }
          },
          {
            key: "close",
            value: function(e) {
              $(".fancybox-skin").removeClass("animated"),
                e
                  ? $.fancybox.close()
                  : setTimeout(function() {
                      $.fancybox.close();
                    }, this.data.time);
            }
          }
        ],
        [
          {
            key: "getInstance",
            value: function(t) {
              var a = Popup.popups,
                s = void 0;
              return (
                $.each(a, function(e) {
                  if (a[e].data.id === "#" + t) return (s = a[e]), !1;
                }),
                s
              );
            }
          }
        ]
      ),
      Popup
    );
  })();
  (o.popups = []),
    $(document).on("click", '[data-popup="open"]', function() {
      var e = $(this).attr("href") || $(this).data("href"),
        t = o.getInstance(e.slice(1)),
        a = $(this).closest(".popup");
      if (
        ((t.data.showParentAfterClose = $(this).data(
          "show-parent-after-close"
        )),
        a.length)
      ) {
        var s = o.getInstance(a.attr("id"));
        (t.data.parentPopup = s),
          setTimeout(function() {
            t.open();
          }, s.data.time);
      } else t.open();
    }),
    $(document).on("click", '[data-popup="close"]', function() {
      var e = $(".fancybox-opened .popup").attr("id");
      o.getInstance(e).close();
    }),
    $(document).on("click", ".fancybox-overlay", function(e) {
      var t = $(".fancybox-opened .popup").attr("id"),
        a = o.getInstance(t);
      $(e.target).closest(".fancybox-wrap").length || a.close();
    }),
    $(window).resize(function() {
      if (!$(".fancybox-opened").length) return null;
      var e = $(".fancybox-opened .popup").attr("id"),
        t = o.getInstance(e),
        a = !1,
        s = {};
      if (t.data.dropdown && $(window).width() < k.tabletSize)
        return t.close(!0), null;
      $.each(t.settings, function(e, t) {
        s[e] = t;
      }),
        t.calcSizes(),
        (t.settings.width === s.width &&
          t.settings.height === s.height &&
          t.settings.autoSize === s.autoSize) ||
          (a = !0),
        a &&
          (t.close(!0),
          t.open(),
          $(".fancybox-overlay").append($(".fancybox-wrap")),
          $("html").addClass("fancybox-margin fancybox-lock")),
        $("#" + e).css("display", ""),
        t.data.breakpointHide &&
          (($(window).width() < t.data.breakpointHide &&
            o.prototype.windowWidth >= t.data.breakpointHide) ||
            ($(window).width() >= t.data.breakpointHide &&
              o.prototype.windowWidth < t.data.breakpointHide)) &&
          t.close(),
        (o.prototype.windowWidth = $(window).width());
    }),
    $(".popup").each(function() {
      var e = {
        id: "#" + $(this).attr("id"),
        breakpoint: $(this).data("breakpoint"),
        animation: $(this).data("animation"),
        time: $(this).data("time"),
        wrapClass: $(this).data("wrap-class"),
        fullscreen: $(this).data("fullscreen"),
        aside: $(this).data("aside"),
        fixed: $(this).data("fixed"),
        fixedTimeout: $(this).data("fixed-timeout"),
        overlay: $(this).data("overlay"),
        dropdown: $(this).data("dropdown"),
        parent: $(this).data("parent"),
        parentId: $(this).data("parent-id"),
        breakpointHide: $(this).data("breakpoint-hide"),
        isCarousel: $(this).data("is-carousel"),
        showParentAfterClose: null
      };
      o.popups.push(new o(e));
    });
  var l = void 0;
  if (
    ($(window).resize(function() {
      clearTimeout(l),
        (l = setTimeout(function() {
          $.fancybox.update();
        }, 500));
    }),
    (function() {
      if ($(".header--main").length) {
        var e = $(document.body),
          t = $(window).width();
        e.addClass("fancybox-lock-test");
        var a = $(window).width();
        e.removeClass("fancybox-lock-test"),
          $(
            "<style type='text/css'>\n            @media(min-width: 1280px) {\n                .fancybox-margin .header--main,\n                .fancybox-margin .page-main__benefits-container.is-fixed {\n                    width: calc((100% - " +
              (a - t) +
              "px) / 2);\n                }\n            }\n        </style>"
          ).appendTo("head");
      }
    })(),
    $("#map-contacts").length)
  ) {
    var r = "#f2f2f2",
      c = "#ffffff",
      d = "#000000",
      u = [
        { elementType: "geometry", stylers: [{ color: r }] },
        { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ color: d }] },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: d }]
        },
        { featureType: "landscape", stylers: [{ color: r }] },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: c }]
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        },
        { featureType: "transit", stylers: [{ visibility: "off" }] },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: c }]
        },
        {
          featureType: "water",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ];
    $(window).load(function() {
      var e = _slicedToArray(window.coordinates, 2),
        t = e[0],
        a = e[1],
        s = new google.maps.Map(document.getElementById("map-contacts"), {
          center: { lat: t, lng: a },
          zoom: 17,
          disableDefaultUI: !0,
          styles: u
        }),
        n = new google.maps.LatLng(t, a),
        i = /MSIE |Trident.*rv[ :]/.test(navigator.userAgent),
        o = k.buildUrl + (i ? "img/pin.png" : "img/svg/pin.svg");
      new google.maps.Marker({
        position: n,
        icon: {
          url: o,
          size: new google.maps.Size(40, 40),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(20, 20)
        },
        map: s
      });
    });
  }
  function slickFabric(a, e, t, s, n, i, o, l, r) {
    var c = a.attr("data-scroll-num") || 1,
      d = a.attr("data-speed") || 6e3,
      u = a.attr("data-animation-speed") || 500,
      p = void 0 !== a.attr("data-vertical"),
      f = {
        slidesToShow: e,
        slidesToScroll: c,
        autoplay: void 0 !== a.attr("data-autoplay"),
        autoplaySpeed: d,
        speed: u,
        dots: void 0 !== a.attr("data-dots"),
        arrows: void 0 !== a.attr("data-arrows"),
        vertical: p,
        verticalSwiping: p,
        infinite: !0,
        swipeToSlide: !0,
        touchThreshold: 50,
        prevArrow:
          '<button class="carousel__btn carousel__btn--prev btn" type="button" title="Предыдущий слайд"><svg class="icon icon--prev"><use xlink:href="#icon-arrow"></use></svg></button>',
        nextArrow:
          '<button class="carousel__btn btn" type="button" title="Следующий слайд"><svg class="icon icon--next"><use xlink:href="#icon-arrow"></use></svg></button>'
      },
      h = [
        { breakpoint: 9999, settings: { slidesToShow: e } },
        { breakpoint: k.desktopLgSize, settings: { slidesToShow: t } },
        { breakpoint: k.desktopSize, settings: { slidesToShow: s } },
        { breakpoint: k.tabletLgSize, settings: { slidesToShow: n } },
        { breakpoint: k.tabletSize, settings: { slidesToShow: i } },
        { breakpoint: k.mobileSize, settings: { slidesToShow: o } }
      ];
    if (r) for (var m in r) f[m] = r[m];
    l &&
      l.forEach(function(a) {
        h.forEach(function(e) {
          if ("unslick-next" === a.settings) {
            if (e.breakpoint < a.breakpoint) return;
            e.settings = "unslick";
          } else if ("unslick-prev" === a.settings) {
            if (e.breakpoint >= a.breakpoint) return;
            e.settings = "unslick";
          } else {
            if (e.breakpoint > a.breakpoint) return;
            for (var t in a.settings) e.settings[t] = a.settings[t];
          }
        });
      }),
      (f.responsive = h),
      a.on("init", function(e, t) {
        updateSvg(a);
      }),
      a.slick(f);
  }
  if (
    ($(document).on("touchstart", ".js-touch-activation", function(e) {
      var t = e.target,
        a = $(t).closest(".js-directors-card");
      a.addClass("is-touch-active"),
        $(document).one("touchend", function() {
          a.removeClass("is-touch-active");
        });
    }),
    0 < $(".js-carousel").length &&
      ($(".js-carousel").each(function() {
        !(function(e) {
          e.hasClass("carousel--benefits") &&
            slickFabric(e, 1, 1, 1, 1, 1, 1, [], { swipe: !0 });
          e.hasClass("carousel--directors") && slickFabric(e, 4, 4, 3, 2, 2, 1);
        })($(this));
      }),
      $(document).on("click", ".js-main-carousel", function() {
        k.isTouch || $(this).slick("slickNext");
      }),
      k.isTouch && $(".js-main-carousel").slick("slickSetOption", "swipe", !0)),
    $(window).on("resize orientationchange", function() {
      $(".js-carousel").slick("resize");
    }),
    $(".js-sticky-block").length)
  ) {
    var p = function(e) {
        (this.$block = e),
          (this.$parent = e.closest(".js-sticky-parent")),
          (this.$container = e.closest(".js-sticky-container")),
          (this.breakpoint = e.attr("data-breakpoint")),
          (this.breakpointMedia = window.matchMedia(
            "(max-width: " + (this.breakpoint - 1) + "px)"
          )),
          (this.isParent = this.$parent.length);
      },
      f = [],
      h = void 0;
    (p.prototype.update = function() {
      if (!this.breakpointMedia.matches) {
        var e = $(window).scrollTop(),
          t = this.$block.is(".is-main") ? 0 : this.$container.offset().top;
        this.$block.hasClass("is-fixed")
          ? e < t
            ? (this.$block.removeClass("is-fixed"),
              this.$block.css("width", ""))
            : e >
                t + this.$container.outerHeight() - this.$block.outerHeight() &&
              (this.$block.removeClass("is-fixed"),
              this.$block.addClass("is-bottom"))
          : t <= e &&
            e <= t + this.$container.outerHeight() - this.$block.outerHeight()
          ? (this.$block.addClass("is-fixed"),
            this.$block.removeClass("is-bottom"),
            this.isParent &&
              this.$block.css("width", this.$parent.width() + "px"))
          : e > t + this.$container.outerHeight() - this.$block.outerHeight() &&
            (this.$block.addClass("is-bottom"),
            this.isParent &&
              this.$block.css("width", this.$parent.width() + "px"));
      }
    }),
      $(".js-sticky-block").each(function() {
        var e = new p($(this));
        f.push(e), e.update();
      }),
      $(window).on("scroll", function() {
        f.forEach(function(e) {
          e.update();
        });
      }),
      $(window).resize(function() {
        clearTimeout(h),
          (h = setTimeout(function() {
            f.forEach(function(e) {
              e.update(),
                e.breakpointMedia.matches &&
                  (e.$block.removeClass("is-fixed"),
                  e.$block.removeClass("is-bottom"),
                  e.$block.css("width", ""));
            });
          }, 250));
      });
  }
  if (
    ((function() {
      if ($(".js-main").length) {
        var e = function() {
            var e = $(".js-main-header"),
              t = $(".js-main-benefits"),
              a = $(".js-main-benefits-container"),
              s = $(".js-main-cases");
            window.matchMedia("(min-width: " + k.desktopSize + "px)").matches
              ? (t.css("height", s.outerHeight()),
                a.css("paddingTop", e.outerHeight()))
              : (t.css("height", ""), a.css("paddingTop", ""));
          },
          s = function() {
            var e = $(".js-main-header"),
              t = $(".js-main-cases"),
              a = window.matchMedia("(min-width: " + k.desktopSize + "px)"),
              s =
                t.outerHeight() - ($(window).scrollTop() + $(window).height());
            a.matches && s < 0 ? e.css("top", s) : e.css("top", "");
          };
        e(),
          s(),
          $(window).on("scroll", function() {
            var e, t, a;
            s(),
              (e = $(".js-main-circle")),
              (t = window.matchMedia("(min-width: " + k.desktopSize + "px)")),
              (a = $(window).scrollTop()),
              t.matches && e.css("transform", "rotate(" + a + "deg)");
          }),
          $(window).on("resize", function() {
            e(), s();
          });
      }
    })(),
    $(".js-video").length &&
      $(".js-video").each(function() {
        var a = $(this),
          s = $(".js-video-main", a).get(0);
        function handlePlaypause() {
          s.paused || s.ended ? s.play() : s.pause();
        }
        function togglePlayStatus() {
          s.paused || s.ended
            ? a.removeClass("is-play")
            : a.addClass("is-play");
        }
        function handleFullscreenChange(e) {
          e ? a.addClass("is-full") : a.removeClass("is-full");
        }
        document.fullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled ||
          document.webkitSupportsFullscreen ||
          document.webkitFullscreenEnabled ||
          document.createElement("video").webkitRequestFullScreen ||
          $(".js-video-controls-full").hide(),
          a.on("click", ".js-video-playpause", function() {
            handlePlaypause();
          }),
          a.on("click", ".js-video-main", function() {
            handlePlaypause();
          }),
          s.addEventListener("playing", function() {
            togglePlayStatus();
          }),
          s.addEventListener("pause", function() {
            togglePlayStatus();
          }),
          s.addEventListener("ended", function() {
            togglePlayStatus();
          }),
          a.on("click", ".js-video-controls-mute", function() {
            (s.muted = !s.muted), a.toggleClass("is-muted");
          }),
          s.addEventListener("loadedmetadata", function() {
            $(".js-video-controls-progress-range", a).slider({
              range: "min",
              min: 0,
              max: s.duration,
              step: 1,
              value: 0,
              slide: function(e, t) {
                s.currentTime = t.value;
              }
            }),
              $(".js-video-controls-volume-range", a).slider({
                range: "min",
                min: 0,
                max: 1,
                step: 0.1,
                value: 0.5,
                slide: function(e, t) {
                  (s.volume = t.value),
                    0 == t.value
                      ? a.addClass("is-muted")
                      : a.removeClass("is-muted");
                }
              });
          }),
          s.addEventListener("timeupdate", function() {
            $(".js-video-controls-progress-range", a).slider(
              "value",
              s.currentTime
            ),
              s.ended && a.removeClass("is-play");
          }),
          a.on("click", ".js-video-controls-full", function() {
            document.fullScreen ||
            document.webkitIsFullScreen ||
            document.mozFullScreen ||
            document.msFullscreenElement ||
            document.fullscreenElement
              ? document.exitFullscreen
                ? document.exitFullscreen()
                : document.mozCancelFullScreen
                ? document.mozCancelFullScreen()
                : document.webkitCancelFullScreen
                ? document.webkitCancelFullScreen()
                : document.msExitFullscreen && document.msExitFullscreen()
              : s.requestFullscreen
              ? s.requestFullscreen()
              : s.mozRequestFullScreen
              ? s.mozRequestFullScreen()
              : s.webkitRequestFullScreen
              ? s.webkitRequestFullScreen()
              : s.msRequestFullscreen && s.msRequestFullscreen();
          }),
          document.addEventListener("fullscreenchange", function() {
            handleFullscreenChange(
              !(!document.fullScreen && !document.fullscreenElement)
            );
          }),
          document.addEventListener("webkitfullscreenchange", function() {
            handleFullscreenChange(!!document.webkitIsFullScreen);
          }),
          document.addEventListener("mozfullscreenchange", function() {
            handleFullscreenChange(!!document.mozFullScreen);
          }),
          document.addEventListener("msfullscreenchange", function() {
            handleFullscreenChange(!!document.msFullscreenElement);
          });
      }),
    $(".js-404-black").length)
  ) {
    var m = $(".js-404-black"),
      v = $(".js-404-white");
    if (!k.isTouch) {
      var b = void 0,
        g = $(window).height();
      $(document).on("mousemove", function(e) {
        var t = e.clientY,
          a = 50 - Math.round((t / g) * 1e3) / 10,
          s = 1 * a;
        m.css("transform", "skew(0, " + s + "deg)");
        var n = (Math.round(((1.6 - 1) / 50) * 1e4) / 1e4) * Math.abs(a) + 1,
          i = 0.5 * -a;
        v.css("transform", "scale(" + n + ") skewY(" + i + "deg)");
      }),
        $(window).resize(function() {
          clearTimeout(b),
            (b = setTimeout(function() {
              g = $(window).height();
            }, 500));
        });
    }
    k.isTouch &&
      $(window).on("deviceorientation", function(e) {
        var t = e.originalEvent,
          a = t.beta,
          s = t.gamma;
        (a = Math.sign(a) * Math.floor(Math.abs(a))),
          (s = Math.sign(s) * Math.floor(Math.abs(s)));
        var n = Math.round(a) * (50 / 90);
        m.css("transform", "skew(0, " + n + "deg)");
        var i = (Math.round(((1.6 - 1) / 90) * 1e4) / 1e4) * Math.abs(s) + 1,
          o = (25 / 90) * -s;
        v.css("transform", "scale(" + i + ") skewY(" + o + "deg)");
      });
  }
  objectFitImages("img:not(.lazyload):not(.lazypreload)"),
    $(document).on("lazyloaded", function(e) {
      var t = e.target;
      objectFitImages(t);
    }),
    $(document).on("click", ".js-section-button", function() {
      $(".js-section-button.is-active").removeClass("is-active"),
        $(this).addClass("is-active"),
        $.ajax({
          url: "/api/internal/component/case:case.list",
          method: "post",
          data: {
            changeSection: !0,
            section: $(this).attr("data-section-code"),
            href: window.location.href
          },
          dataType: "json",
          success: function(t) {
            $(".js-another-language-link").attr("href", t.anotherLanguageHref),
              console.log($(".js-another-language-link")),
              history.pushState("data", "", t.href);
            var a = $(".cases-list");
            a.fadeOut("fast"),
              setTimeout(function() {
                a.html(t.html);
                var e = $("#cases-section-block");
                t.denyLoad
                  ? e.attr("data-show-more-cases", "false")
                  : e.attr("data-show-more-cases", "true"),
                  e.attr("data-cases-next-page", "2"),
                  a.fadeIn("fast");
              }, 200);
          }
        });
    }),
    $(document).on("submit", "#write-us", function(e) {
      e.preventDefault();
      var a = new FormData(),
        t = $(this).find("#write-us-name"),
        s = $(this).find("#write-us__email"),
        n = $(this).find("#write-us__tel"),
        i = $(this).find("#write-us__textarea"),
        o = $(this).find("#page-input"),
        l = $(this).find("#hidden-input"),
        r = $(this).find('input[type="file"]'),
        c = $(this)
          .find("#write-us__file-choose")
          .val(),
        d = $(this).find("#sessid");
      a.append(t.attr("name"), t.val()),
        a.append(s.attr("name"), s.val()),
        a.append(n.attr("name"), n.val()),
        a.append(i.attr("name"), i.val()),
        a.append(o.attr("name"), o.val()),
        a.append(l.attr("name"), l.val()),
        a.append(l.attr("name"), l.val()),
        a.append(d.attr("name"), d.val()),
        0 !== c.length &&
          $.each(r, function(e, t) {
            a.append("file_" + e, $(t).prop("files")[0]);
          }),
        $.ajax({
          url: "/api/internal/feedback/",
          type: "POST",
          processData: !1,
          contentType: !1,
          data: a,
          dataType: "json",
          beforeSend: function() {
            var e = $(".js-write-us-btn"),
              t = $(".js-write-us-btn-text"),
              a = e.find(".loading");
            t.addClass("is-hidden"), a.removeClass("is-hidden");
          },
          success: function(e) {
            var t = $("#error-message");
            if (e.success) {
              t.hide();
              var a = $(".js-write-us-btn"),
                s = $(".js-write-us-btn-text");
              a.find(".loading").addClass("is-hidden"),
                a.addClass("is-active"),
                s.html(e.button).removeClass("is-hidden"),
                $("#write-us :input").each(function() {
                  $(this).val(null);
                }),
                $(".js-remove-file").each(function() {
                  $(this).click();
                }),
                setTimeout(function() {
                  a.removeClass("is-active"),
                    a.removeAttr("disabled"),
                    s.html($("#old-name").text()),
                    $(".write-us__btn").click();
                }, 4e3),
                dataLayer.push({
                  event: "event-to-ga",
                  eventCategory: "form1",
                  eventAction: "fill1",
                  eventLabel: "Успешное заполнение формы",
                  eventValue: ""
                });
            } else
              t.html(e.message),
                t.show(),
                dataLayer.push({
                  event: "event-to-ga",
                  eventCategory: "form1",
                  eventAction: "fill1",
                  eventLabel: "Ошибка при заполнении формы",
                  eventValue: e.message
                });
          }
        });
    }),
    $(document).on("click", ".write-us__btn", function(e) {
      e.preventDefault();
      var t = $("#write-us");
      t[0].reset(),
        t.parsley().reset(),
        (function(e) {
          var t = e.find(".js-multiple-files"),
            a = t.find(".custom-file");
          t.find(".js-multiple-file-list").empty(),
            $(a[0]).removeClass("is-selected");
          for (var s = 1; s < a.length; s++)
            $(a[s])
              .next()
              .remove(),
              $(a[s]).remove();
        })(t);
    });
});
