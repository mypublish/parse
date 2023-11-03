(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["chunk-common"], {
    "2f67": function(e, t, i) {},
    5237: function(e, t, i) {
        e.exports = i.p + "static/img/correct.f1b737fd.svg"
    },
    6131: function(e, t, i) {
        "use strict";
        var n = i("2f67")
          , s = i.n(n);
        s.a
    },
    "69a1": function(e, t, i) {
        (function(e) {
            var n, s, a;
            i("a4d3"),
            i("e01a"),
            i("d28b"),
            i("4160"),
            i("c975"),
            i("a15b"),
            i("b0c0"),
            i("b64b"),
            i("d3b7"),
            i("ac1f"),
            i("25f0"),
            i("3ca3"),
            i("5319"),
            i("1276"),
            i("5cc6"),
            i("9a8c"),
            i("a975"),
            i("735e"),
            i("c1ac"),
            i("d139"),
            i("3a7b"),
            i("d5d6"),
            i("82f8"),
            i("e91f"),
            i("60bd"),
            i("5f96"),
            i("3280"),
            i("3fcc"),
            i("ca91"),
            i("25a1"),
            i("cd26"),
            i("3c5d"),
            i("2954"),
            i("649e"),
            i("219c"),
            i("170b"),
            i("b39a"),
            i("72f7"),
            i("159b"),
            i("ddb0");
            var r = i("7037");
            (function(i, o) {
                "object" === r(t) && "object" === r(e) ? e.exports = o() : (s = [],
                n = o,
                a = "function" === typeof n ? n.apply(t, s) : n,
                void 0 === a || (e.exports = a))
            }
            )(0, (function() {
                return function(e) {
                    var t = {};

                    function i(n) {
                        if (t[n])
                            return t[n].exports;
                        var s = t[n] = {
                            exports: {},
                            id: n,
                            loaded: !1
                        };
                        return e[n].call(s.exports, s, s.exports, i),
                        s.loaded = !0,
                        s.exports
                    }
                    return i.m = e,
                    i.c = t,
                    i.p = "",
                    i(0)
                }([function(e, t, i) {
                    e.exports = i(1)
                }
                , function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = i(2)
                      , s = a(n);

                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    i(3),
                    i(8),
                    i(9),
                    i(14),
                    window.MIDI = s.default,
                    t.default = s.default,
                    e.exports = t["default"]
                }
                , function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.default = {},
                    e.exports = t["default"]
                }
                , function(e, t, i) {
                    "use strict";
                    var n = "function" === typeof Symbol && "symbol" === r(Symbol.iterator) ? function(e) {
                        return r(e)
                    }
                    : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
                    }
                      , s = i(4)
                      , a = i(2)
                      , o = l(a);

                    function l(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    o.default.Soundfont = {},
                    o.default.DEBUG = !0,
                    o.default.USE_XHR = !0,
                    o.default.soundfontUrl = "./soundfont/",
                    o.default.loadPlugin = function(e) {
                        "function" === typeof e && (e = {
                            onsuccess: e
                        }),
                        o.default.soundfontUrl = e.soundfontUrl || o.default.soundfontUrl,
                        (0,
                        s.audioDetect)((function(t) {
                            var i = window.location.hash
                              , n = "";
                            if (t[e.api] ? n = e.api : t[i.substr(1)] ? n = i.substr(1) : t.webmidi ? n = "webmidi" : window.AudioContext || window.webkitAudioContext ? n = "webaudio" : window.Audio && (n = "audiotag"),
                            console.log("audioDetect:", n),
                            u[n]) {
                                var s = void 0;
                                s = e.targetFormat ? e.targetFormat : t["audio/ogg"] ? "ogg" : "mp3",
                                o.default.__api = n,
                                o.default.__audioFormat = s,
                                o.default.supports = t,
                                o.default.loadResource(e)
                            }
                        }
                        ))
                    }
                    ,
                    o.default.loadResource = function(e) {
                        console.log("loadResource");
                        var t = e.instruments || e.instrument || "acoustic_grand_piano";
                        "object" !== ("undefined" === typeof t ? "undefined" : n(t)) && (t = t || 0 === t ? [t] : []);
                        for (var i = 0; i < t.length; i++) {
                            var s = t[i];
                            s === +s && o.default.GM.byId[s] && (t[i] = o.default.GM.byId[s].id)
                        }
                        e.format = o.default.__audioFormat,
                        e.instruments = t,
                        u[o.default.__api](e)
                    }
                    ;
                    var u = {
                        webmidi: function(e) {
                            o.default.WebMIDI.connect(e)
                        },
                        audiotag: function(e) {
                            h(e, "AudioTag")
                        },
                        webaudio: function(e) {
                            h(e, "WebAudio")
                        }
                    }
                      , h = function(e, t) {
                        for (var i = e.format, n = e.instruments, s = e.onprogress, a = e.onerror, r = n.length, l = r, u = function() {
                            --l || (s && s("load", 1),
                            o.default[t].connect(e))
                        }, h = 0; h < r; h++) {
                            var f = n[h];
                            o.default.Soundfont[f] ? u() : c(n[h], i, (function(e, t) {
                                var i = t / r
                                  , n = (r - l) / r;
                                s && s("load", i + n, f)
                            }
                            ), (function() {
                                u()
                            }
                            ), a)
                        }
                    }
                      , c = function(e, t, i, n, a) {
                        console.log("sendRequest");
                        var r = o.default.soundfontUrl + e + "-" + t + ".js";
                        o.default.USE_XHR ? (0,
                        s.request)({
                            url: r,
                            format: "text",
                            onerror: a,
                            onprogress: i,
                            onsuccess: function(e, t) {
                                var i = document.createElement("script");
                                i.language = "javascript",
                                i.type = "text/javascript",
                                i.text = t,
                                document.body.appendChild(i),
                                n()
                            }
                        }) : s.loadScript.add({
                            url: r,
                            verify: 'root.Soundfont["' + e + '"]',
                            onerror: a,
                            onsuccess: function() {
                                n()
                            }
                        })
                    };
                    o.default.setDefaultPlugin = function(e) {
                        for (var t in e)
                            o.default[t] = e[t]
                    }
                }
                , function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = i(5);
                    Object.keys(n).forEach((function(e) {
                        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: function() {
                                return n[e]
                            }
                        })
                    }
                    ));
                    var s = i(6);
                    Object.keys(s).forEach((function(e) {
                        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: function() {
                                return s[e]
                            }
                        })
                    }
                    ));
                    var a = i(7);
                    Object.keys(a).forEach((function(e) {
                        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: function() {
                                return a[e]
                            }
                        })
                    }
                    ))
                }
                , function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = {}
                      , n = 0
                      , s = function(e) {
                        n++;
                        var t = document.body
                          , s = new window.Audio
                          , a = e.split(";")[0];
                        s.id = "audio",
                        s.setAttribute("preload", "auto"),
                        s.setAttribute("audiobuffer", !0),
                        s.addEventListener("error", (function() {
                            t.removeChild(s),
                            i[a] = !1,
                            n--
                        }
                        ), !1),
                        s.addEventListener("canplaythrough", (function() {
                            t.removeChild(s),
                            i[a] = !0,
                            n--
                        }
                        ), !1),
                        s.src = "data:" + e,
                        t.appendChild(s)
                    };
                    t.audioDetect = function(e) {
                        if (navigator.requestMIDIAccess) {
                            var t = Function.prototype.toString.call(navigator.requestMIDIAccess).indexOf("[native code]");
                            if (t)
                                i["webmidi"] = !0;
                            else
                                for (var a = 0; navigator.plugins.length > a; a++) {
                                    var r = navigator.plugins[a];
                                    r.name.indexOf("Jazz-Plugin") >= 0 && (i["webmidi"] = !0)
                                }
                        }
                        if ("undefined" === typeof window.Audio)
                            return e({});
                        i["audiotag"] = !0,
                        (window.AudioContext || window.webkitAudioContext) && (i["webaudio"] = !0);
                        var o = new window.Audio;
                        if ("undefined" === typeof o.canPlayType)
                            return e(i);
                        var l = o.canPlayType('audio/ogg; codecs="vorbis"');
                        l = "probably" === l || "maybe" === l;
                        var u = o.canPlayType("audio/mpeg");
                        if (u = "probably" === u || "maybe" === u,
                        l || u) {
                            l && s("audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA="),
                            u && s("audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
                            var h = (new Date).getTime()
                              , c = window.setInterval((function() {
                                var t = (new Date).getTime()
                                  , s = t - h > 5e3;
                                n && !s || (window.clearInterval(c),
                                e(i))
                            }
                            ), 1)
                        } else
                            e(i)
                    }
                }
                , function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = "function" === typeof Symbol && "symbol" === r(Symbol.iterator) ? function(e) {
                        return r(e)
                    }
                    : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
                    }
                      , n = function(e, t) {
                        try {
                            e = e.split('"').join("").split("'").join("").split("]").join("").split("[").join(".");
                            for (var i = e.split("."), n = i.length, s = t || window, a = 0; a < n; a++) {
                                var r = i[a];
                                if (null == s[r])
                                    return !1;
                                s = s[r]
                            }
                            return !0
                        } catch (o) {
                            return !1
                        }
                    }
                      , s = function() {
                        return this.loaded = {},
                        this.loading = {},
                        this
                    };
                    s.prototype.add = function(e) {
                        var t = this;
                        "string" === typeof e && (e = {
                            url: e
                        });
                        var s = e.urls;
                        "undefined" === typeof s && (s = [{
                            url: e.url,
                            verify: e.verify
                        }]);
                        var a = document.getElementsByTagName("head")[0]
                          , r = function(e, i) {
                            t.loaded[e.url] || i && !1 === n(i) || (t.loaded[e.url] = !0,
                            t.loading[e.url] && t.loading[e.url](),
                            delete t.loading[e.url],
                            e.onsuccess && e.onsuccess(),
                            "undefined" !== typeof d && d())
                        }
                          , o = !1
                          , l = []
                          , u = function(n) {
                            if ("string" === typeof n && (n = {
                                url: n,
                                verify: e.verify
                            }),
                            /([\w\d.\[\]'"])$/.test(n.verify)) {
                                var s = n.test = n.verify;
                                if ("object" === ("undefined" === typeof s ? "undefined" : i(s)))
                                    for (var u = 0; u < s.length; u++)
                                        l.push(s[u]);
                                else
                                    l.push(s)
                            }
                            if (!t.loaded[n.url]) {
                                var c = document.createElement("script");
                                c.onreadystatechange = function() {
                                    "loaded" !== this.readyState && "complete" !== this.readyState || r(n)
                                }
                                ,
                                c.onload = function() {
                                    r(n)
                                }
                                ,
                                c.onerror = function() {
                                    if (o = !0,
                                    delete t.loading[n.url],
                                    "object" === i(n.test))
                                        for (var e in n.test)
                                            h(n.test[e]);
                                    else
                                        h(n.test)
                                }
                                ,
                                c.setAttribute("type", "text/javascript"),
                                c.setAttribute("src", n.url),
                                a.appendChild(c),
                                t.loading[n.url] = function() {}
                            }
                        }
                          , h = function(e) {
                            for (var t = [], i = 0; i < l.length; i++)
                                l[i] !== e && t.push(l[i]);
                            l = t
                        }
                          , c = function t(i) {
                            if (i)
                                r(i, i.test);
                            else
                                for (var a = 0; a < s.length; a++)
                                    r(s[a], s[a].test);
                            for (var u = !0, h = 0; h < l.length; h++)
                                !1 === n(l[h]) && (u = !1);
                            !e.strictOrder && u ? o ? e.error && e.error() : e.onsuccess && e.onsuccess() : setTimeout((function() {
                                t(i)
                            }
                            ), 10)
                        };
                        if (e.strictOrder) {
                            var f = -1
                              , d = function i() {
                                if (f++,
                                s[f]) {
                                    var n = s[f]
                                      , a = n.url;
                                    t.loading[a] ? t.loading[a] = function() {
                                        n.onsuccess && n.onsuccess(),
                                        i()
                                    }
                                    : t.loaded[a] ? i() : (u(n),
                                    c(n))
                                } else
                                    o ? e.error && e.error() : e.onsuccess && e.onsuccess()
                            };
                            d()
                        } else
                            for (var p = 0; p < s.length; p++)
                                u(s[p]),
                                c(s[p])
                    }
                    ;
                    t.loadScript = new s
                }
                , function(e, t) {
                    "use strict";

                    function i(e, t, i, n) {
                        "string" === typeof e && (e = {
                            url: e
                        });
                        var s = e.data
                          , a = e.url
                          , r = e.method || (e.data ? "POST" : "GET")
                          , o = e.format
                          , l = e.headers
                          , u = e.responseType
                          , h = e.withCredentials || !1
                          , c = new window.XMLHttpRequest;
                        if (t = t || e.onsuccess,
                        i = i || e.onerror,
                        n = n || e.onprogress,
                        c.open(r, a, !0),
                        l)
                            for (var f in l)
                                c.setRequestHeader(f, l[f]);
                        else
                            s && c.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        return "binary" === o && c.overrideMimeType && c.overrideMimeType("text/plain; charset=x-user-defined"),
                        u && (c.responseType = u),
                        h && (c.withCredentials = "true"),
                        i && "onerror"in c && (c.onerror = i),
                        n && c.upload && "onprogress"in c.upload && (s ? c.upload.onprogress = function(e) {
                            n.call(c, e, e.loaded / e.total)
                        }
                        : c.addEventListener("progress", (function(e) {
                            var t = 0;
                            if (e.lengthComputable)
                                t = e.total;
                            else if (c.totalBytes)
                                t = c.totalBytes;
                            else {
                                var i = parseInt(c.getResponseHeader("Content-Length-Raw"));
                                if (!isFinite(i))
                                    return;
                                c.totalBytes = t = i
                            }
                            n.call(c, e, e.loaded / t)
                        }
                        ))),
                        c.onreadystatechange = function(e) {
                            if (4 === c.readyState)
                                if (200 === c.status || 304 === c.status || 308 === c.status) {
                                    if (t) {
                                        var n;
                                        if ("xml" === o)
                                            n = e.target.responseXML;
                                        else if ("text" === o)
                                            n = e.target.responseText;
                                        else if ("json" === o)
                                            try {
                                                n = JSON.parse(e.target.response)
                                            } catch (s) {
                                                i && i.call(c, e)
                                            }
                                        t.call(c, e, n)
                                    }
                                } else
                                    i && i.call(c, e)
                        }
                        ,
                        c.send(s),
                        c
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.request = i
                }
                , function(e, t, i) {
                    "use strict";
                    var n = i(2)
                      , s = a(n);

                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    s.default.GM = function(e) {
                        var t = function(e) {
                            return e.replace(/[^a-z0-9 ]/gi, "").replace(/[ ]/g, "_").toLowerCase()
                        }
                          , i = {
                            byName: {},
                            byId: {},
                            byCategory: {}
                        };
                        for (var n in e)
                            for (var s = e[n], a = 0, r = s.length; a < r; a++) {
                                var o = s[a];
                                if (o) {
                                    var l = parseInt(o.substr(0, o.indexOf(" ")), 10);
                                    o = o.replace(l + " ", ""),
                                    i.byId[--l] = i.byName[t(o)] = i.byCategory[t(n)] = {
                                        id: t(o),
                                        instrument: o,
                                        number: l,
                                        category: n
                                    }
                                }
                            }
                        return i
                    }({
                        Piano: ["1 Acoustic Grand Piano", "2 Bright Acoustic Piano", "3 Electric Grand Piano", "4 Honky-tonk Piano", "5 Electric Piano 1", "6 Electric Piano 2", "7 Harpsichord", "8 Clavinet"],
                        "Chromatic Percussion": ["9 Celesta", "10 Glockenspiel", "11 Music Box", "12 Vibraphone", "13 Marimba", "14 Xylophone", "15 Tubular Bells", "16 Dulcimer"],
                        Organ: ["17 Drawbar Organ", "18 Percussive Organ", "19 Rock Organ", "20 Church Organ", "21 Reed Organ", "22 Accordion", "23 Harmonica", "24 Tango Accordion"],
                        Guitar: ["25 Acoustic Guitar (nylon)", "26 Acoustic Guitar (steel)", "27 Electric Guitar (jazz)", "28 Electric Guitar (clean)", "29 Electric Guitar (muted)", "30 Overdriven Guitar", "31 Distortion Guitar", "32 Guitar Harmonics"],
                        Bass: ["33 Acoustic Bass", "34 Electric Bass (finger)", "35 Electric Bass (pick)", "36 Fretless Bass", "37 Slap Bass 1", "38 Slap Bass 2", "39 Synth Bass 1", "40 Synth Bass 2"],
                        Strings: ["41 Violin", "42 Viola", "43 Cello", "44 Contrabass", "45 Tremolo Strings", "46 Pizzicato Strings", "47 Orchestral Harp", "48 Timpani"],
                        Ensemble: ["49 String Ensemble 1", "50 String Ensemble 2", "51 Synth Strings 1", "52 Synth Strings 2", "53 Choir Aahs", "54 Voice Oohs", "55 Synth Choir", "56 Orchestra Hit"],
                        Brass: ["57 Trumpet", "58 Trombone", "59 Tuba", "60 Muted Trumpet", "61 French Horn", "62 Brass Section", "63 Synth Brass 1", "64 Synth Brass 2"],
                        Reed: ["65 Soprano Sax", "66 Alto Sax", "67 Tenor Sax", "68 Baritone Sax", "69 Oboe", "70 English Horn", "71 Bassoon", "72 Clarinet"],
                        Pipe: ["73 Piccolo", "74 Flute", "75 Recorder", "76 Pan Flute", "77 Blown Bottle", "78 Shakuhachi", "79 Whistle", "80 Ocarina"],
                        "Synth Lead": ["81 Lead 1 (square)", "82 Lead 2 (sawtooth)", "83 Lead 3 (calliope)", "84 Lead 4 (chiff)", "85 Lead 5 (charang)", "86 Lead 6 (voice)", "87 Lead 7 (fifths)", "88 Lead 8 (bass + lead)"],
                        "Synth Pad": ["89 Pad 1 (new age)", "90 Pad 2 (warm)", "91 Pad 3 (polysynth)", "92 Pad 4 (choir)", "93 Pad 5 (bowed)", "94 Pad 6 (metallic)", "95 Pad 7 (halo)", "96 Pad 8 (sweep)"],
                        "Synth Effects": ["97 FX 1 (rain)", "98 FX 2 (soundtrack)", "99 FX 3 (crystal)", "100 FX 4 (atmosphere)", "101 FX 5 (brightness)", "102 FX 6 (goblins)", "103 FX 7 (echoes)", "104 FX 8 (sci-fi)"],
                        Ethnic: ["105 Sitar", "106 Banjo", "107 Shamisen", "108 Koto", "109 Kalimba", "110 Bagpipe", "111 Fiddle", "112 Shanai"],
                        Percussive: ["113 Tinkle Bell", "114 Agogo", "115 Steel Drums", "116 Woodblock", "117 Taiko Drum", "118 Melodic Tom", "119 Synth Drum"],
                        "Sound effects": ["120 Reverse Cymbal", "121 Guitar Fret Noise", "122 Breath Noise", "123 Seashore", "124 Bird Tweet", "125 Telephone Ring", "126 Helicopter", "127 Applause", "128 Gunshot"]
                    }),
                    s.default.getInstrument = function(e) {
                        var t = s.default.channels[e];
                        return t && t.instrument
                    }
                    ,
                    s.default.setInstrument = function(e, t, i) {
                        var n = s.default.channels[e];
                        if (i)
                            return setTimeout((function() {
                                n.instrument = t
                            }
                            ), i);
                        n.instrument = t
                    }
                    ,
                    s.default.getMono = function(e) {
                        var t = s.default.channels[e];
                        return t && t.mono
                    }
                    ,
                    s.default.setMono = function(e, t, i) {
                        var n = s.default.channels[e];
                        if (i)
                            return setTimeout((function() {
                                n.mono = t
                            }
                            ), i);
                        n.mono = t
                    }
                    ,
                    s.default.getOmni = function(e) {
                        var t = s.default.channels[e];
                        return t && t.omni
                    }
                    ,
                    s.default.setOmni = function(e, t, i) {
                        var n = s.default.channels[e];
                        if (i)
                            return setTimeout((function() {
                                n.omni = t
                            }
                            ), i);
                        n.omni = t
                    }
                    ,
                    s.default.getSolo = function(e) {
                        var t = s.default.channels[e];
                        return t && t.solo
                    }
                    ,
                    s.default.setSolo = function(e, t, i) {
                        var n = s.default.channels[e];
                        if (i)
                            return setTimeout((function() {
                                n.solo = t
                            }
                            ), i);
                        n.solo = t
                    }
                    ,
                    s.default.channels = function() {
                        for (var e = {}, t = 0; t < 16; t++)
                            e[t] = {
                                instrument: t,
                                pitchBend: 0,
                                mute: !1,
                                mono: !1,
                                omni: !1,
                                solo: !1
                            };
                        return e
                    }(),
                    s.default.keyToNote = {},
                    s.default.noteToKey = {},
                    function() {
                        for (var e = 21, t = 108, i = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"], n = e; n <= t; n++) {
                            var a = (n - 12) / 12 >> 0
                              , r = i[n % 12] + a;
                            s.default.keyToNote[r] = n,
                            s.default.noteToKey[n] = r
                        }
                    }()
                }
                , function(e, t, i) {
                    "use strict";
                    var n = i(10)
                      , s = i(2)
                      , a = r(s);

                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    (function() {
                        a.default.Player = {};
                        var e = a.default.Player;
                        e.currentTime = 0,
                        e.endTime = 0,
                        e.restart = 0,
                        e.playing = !1,
                        e.timeWarp = 1,
                        e.startDelay = 0,
                        e.BPM = 120,
                        e.start = e.resume = function(t) {
                            e.currentTime < -1 && (e.currentTime = -1),
                            d(e.currentTime, null, t)
                        }
                        ,
                        e.pause = function() {
                            var t = e.restart;
                            p(),
                            e.restart = t
                        }
                        ,
                        e.stop = function() {
                            p(),
                            e.restart = 0,
                            e.currentTime = 0
                        }
                        ,
                        e.addListener = function(e) {
                            i = e
                        }
                        ,
                        e.removeListener = function() {
                            i = void 0
                        }
                        ,
                        e.clearAnimation = function() {
                            e.animationFrameId && window.cancelAnimationFrame(e.animationFrameId)
                        }
                        ,
                        e.setAnimation = function(t) {
                            var i = 0
                              , n = 0
                              , s = 0;
                            e.clearAnimation();
                            var a = function a() {
                                if (e.animationFrameId = window.requestAnimationFrame(a),
                                0 !== e.endTime) {
                                    e.playing ? (i = s === e.currentTime ? n - Date.now() : 0,
                                    i = 0 === e.currentTime ? 0 : e.currentTime - i,
                                    s !== e.currentTime && (n = Date.now(),
                                    s = e.currentTime)) : i = e.currentTime;
                                    var r = e.endTime
                                      , o = i / 1e3
                                      , u = o / 60
                                      , h = o - 60 * u
                                      , c = 60 * u + h
                                      , f = r / 1e3;
                                    f - c < -1 || t({
                                        now: c,
                                        end: f,
                                        events: l
                                    })
                                }
                            };
                            window.requestAnimationFrame(a)
                        }
                        ,
                        e.loadMidiFile = function(t, i, s) {
                            try {
                                e.replayer = new n.Replayer((0,
                                n.MidiFile)(e.currentData),e.timeWarp,null,e.BPM),
                                e.data = e.replayer.getData(),
                                e.endTime = c(),
                                a.default.loadPlugin({
                                    onsuccess: t,
                                    onprogress: i,
                                    onerror: s
                                })
                            } catch (r) {
                                console.error(r),
                                s && s(r)
                            }
                        }
                        ,
                        e.loadFile = function(t, i, n, s) {
                            if (e.stop(),
                            -1 !== t.indexOf("base64,")) {
                                var a = window.atob(t.split(",")[1]);
                                e.currentData = a,
                                e.loadMidiFile(i, n, s)
                            } else {
                                var r = new window.XMLHttpRequest;
                                r.open("GET", t),
                                r.overrideMimeType("text/plain; charset=x-user-defined"),
                                r.onreadystatechange = function() {
                                    if (4 === this.readyState)
                                        if (200 === this.status) {
                                            for (var t = this.responseText || "", a = [], r = t.length, o = String.fromCharCode, l = 0; l < r; l++)
                                                a[l] = o(255 & t.charCodeAt(l));
                                            var u = a.join("");
                                            e.currentData = u,
                                            e.loadMidiFile(i, n, s)
                                        } else
                                            s && s("Unable to load MIDI file")
                                }
                                ,
                                r.send()
                            }
                        }
                        ,
                        e.getFileInstruments = function() {
                            for (var t = {}, i = {}, n = 0; n < e.data.length; n++) {
                                var s = e.data[n][0].event;
                                if ("channel" === s.type) {
                                    var r = s.channel;
                                    switch (s.subtype) {
                                    case "controller":
                                        break;
                                    case "programChange":
                                        i[r] = s.programNumber;
                                        break;
                                    case "noteOn":
                                        var o = i[r]
                                          , l = a.default.GM.byId[isFinite(o) ? o : r];
                                        t[l.id] = !0;
                                        break
                                    }
                                }
                            }
                            var u = [];
                            for (var h in t)
                                u.push(h);
                            return u
                        }
                        ;
                        var t, i, s, r = [], o = 0, l = {}, u = function(n, s, a, o, u, h, c) {
                            return setTimeout((function() {
                                var o = {
                                    channel: n,
                                    note: s,
                                    now: a,
                                    end: e.endTime,
                                    message: u,
                                    velocity: h
                                };
                                128 === u ? delete l[s] : l[s] = o,
                                i && i(o),
                                e.currentTime = a,
                                r.shift(),
                                (r.length < 1e3 || e.currentTime === t && t < e.endTime) && d(t, !0)
                            }
                            ), a - o)
                        }, h = function() {
                            return "webaudio" === a.default.api ? a.default.WebAudio.getContext() : (e.ctx = {
                                currentTime: 0
                            },
                            e.ctx)
                        }, c = function() {
                            for (var t = e.data, i = t.length, n = .5, s = 0; s < i; s++)
                                n += t[s][1];
                            return n
                        }, f = function() {
                            return window.performance && window.performance.now ? window.performance.now() : Date.now()
                        }, d = function(i, n, l) {
                            if (e.replayer) {
                                var d;
                                n || ("undefined" === typeof i && (i = e.restart),
                                e.playing && p(),
                                e.playing = !0,
                                e.data = e.replayer.getData(),
                                e.endTime = c());
                                var m = 0
                                  , v = 0
                                  , y = e.data
                                  , g = h()
                                  , b = y.length;
                                t = .5;
                                var x = i - e.currentTime;
                                if ("webaudio" !== a.default.api) {
                                    var k = f();
                                    s = s || k,
                                    g.currentTime = (k - s) / 1e3
                                }
                                o = g.currentTime;
                                for (var _ = 0; _ < b && v < 100; _++) {
                                    var w = y[_];
                                    if ((t += w[1]) <= i)
                                        m = t;
                                    else {
                                        i = t - m;
                                        var S = w[0].event;
                                        if ("channel" === S.type) {
                                            var A = S.channel
                                              , O = a.default.channels[A]
                                              , T = g.currentTime + (i + x + e.startDelay) / 1e3
                                              , I = t - m + e.startDelay;
                                            switch (S.subtype) {
                                            case "controller":
                                                a.default.setController(A, S.controllerType, S.value, T);
                                                break;
                                            case "programChange":
                                                a.default.programChange(A, S.programNumber, T);
                                                break;
                                            case "pitchBend":
                                                a.default.pitchBend(A, S.value, T);
                                                break;
                                            case "noteOn":
                                                if (O.mute)
                                                    break;
                                                d = S.noteNumber - (e.MIDIOffset || 0),
                                                r.push({
                                                    event: S,
                                                    time: I,
                                                    source: a.default.noteOn(A, S.noteNumber, S.velocity, T),
                                                    interval: u(A, d, t + e.startDelay, m - x, 144, S.velocity)
                                                }),
                                                v++;
                                                break;
                                            case "noteOff":
                                                if (O.mute)
                                                    break;
                                                d = S.noteNumber - (e.MIDIOffset || 0),
                                                r.push({
                                                    event: S,
                                                    time: I,
                                                    source: a.default.noteOff(A, S.noteNumber, T),
                                                    interval: u(A, d, t, m - x, 128, 0)
                                                });
                                                break;
                                            default:
                                                break
                                            }
                                        }
                                    }
                                }
                                l && l(r)
                            }
                        }, p = function() {
                            var t = h();
                            e.playing = !1,
                            e.restart += 1e3 * (t.currentTime - o);
                            while (r.length) {
                                var n = r.pop();
                                window.clearInterval(n.interval),
                                n.source && ("number" === typeof n.source ? window.clearTimeout(n.source) : n.source.disconnect(0))
                            }
                            for (var s in l) {
                                var a = l[s];
                                144 === l[s].message && i && i({
                                    channel: a.channel,
                                    note: a.note,
                                    now: a.now,
                                    end: a.end,
                                    message: 128,
                                    velocity: a.velocity
                                })
                            }
                            l = {}
                        }
                    }
                    )()
                }
                , function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = i(11);
                    Object.keys(n).forEach((function(e) {
                        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: function() {
                                return n[e]
                            }
                        })
                    }
                    ));
                    var s = i(13);
                    Object.keys(s).forEach((function(e) {
                        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: function() {
                                return s[e]
                            }
                        })
                    }
                    ))
                }
                , function(e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.MidiFile = r;
                    var n = i(12)
                      , s = a(n);

                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function r(e) {
                        var t;

                        function i(e) {
                            var t = e.read(4)
                              , i = e.readInt32();
                            return {
                                id: t,
                                length: i,
                                data: e.read(i)
                            }
                        }

                        function n(e) {
                            var i = {};
                            i.deltaTime = e.readVarInt();
                            var n = e.readInt8();
                            if (240 === (240 & n)) {
                                if (255 !== n) {
                                    if (240 === n) {
                                        i.type = "sysEx";
                                        var s = e.readVarInt();
                                        return i.data = e.read(s),
                                        i
                                    }
                                    if (247 === n) {
                                        i.type = "dividedSysEx";
                                        var a = e.readVarInt();
                                        return i.data = e.read(a),
                                        i
                                    }
                                    throw new Error("Unrecognised MIDI event type byte: " + n)
                                }
                                i.type = "meta";
                                var r = e.readInt8()
                                  , o = e.readVarInt();
                                switch (r) {
                                case 0:
                                    if (i.subtype = "sequenceNumber",
                                    2 !== o)
                                        throw new Error("Expected length for sequenceNumber event is 2, got " + o);
                                    return i.number = e.readInt16(),
                                    i;
                                case 1:
                                    return i.subtype = "text",
                                    i.text = e.read(o),
                                    i;
                                case 2:
                                    return i.subtype = "copyrightNotice",
                                    i.text = e.read(o),
                                    i;
                                case 3:
                                    return i.subtype = "trackName",
                                    i.text = e.read(o),
                                    i;
                                case 4:
                                    return i.subtype = "instrumentName",
                                    i.text = e.read(o),
                                    i;
                                case 5:
                                    return i.subtype = "lyrics",
                                    i.text = e.read(o),
                                    i;
                                case 6:
                                    return i.subtype = "marker",
                                    i.text = e.read(o),
                                    i;
                                case 7:
                                    return i.subtype = "cuePoint",
                                    i.text = e.read(o),
                                    i;
                                case 32:
                                    if (i.subtype = "midiChannelPrefix",
                                    1 !== o)
                                        throw new Error("Expected length for midiChannelPrefix event is 1, got " + o);
                                    return i.channel = e.readInt8(),
                                    i;
                                case 47:
                                    if (i.subtype = "endOfTrack",
                                    0 !== o)
                                        throw new Error("Expected length for endOfTrack event is 0, got " + o);
                                    return i;
                                case 81:
                                    if (i.subtype = "setTempo",
                                    3 !== o)
                                        throw new Error("Expected length for setTempo event is 3, got " + o);
                                    return i.microsecondsPerBeat = (e.readInt8() << 16) + (e.readInt8() << 8) + e.readInt8(),
                                    i;
                                case 84:
                                    if (i.subtype = "smpteOffset",
                                    5 !== o)
                                        throw new Error("Expected length for smpteOffset event is 5, got " + o);
                                    var l = e.readInt8();
                                    return i.frameRate = {
                                        0: 24,
                                        32: 25,
                                        64: 29,
                                        96: 30
                                    }[96 & l],
                                    i.hour = 31 & l,
                                    i.min = e.readInt8(),
                                    i.sec = e.readInt8(),
                                    i.frame = e.readInt8(),
                                    i.subframe = e.readInt8(),
                                    i;
                                case 88:
                                    if (i.subtype = "timeSignature",
                                    4 !== o)
                                        throw new Error("Expected length for timeSignature event is 4, got " + o);
                                    return i.numerator = e.readInt8(),
                                    i.denominator = Math.pow(2, e.readInt8()),
                                    i.metronome = e.readInt8(),
                                    i.thirtyseconds = e.readInt8(),
                                    i;
                                case 89:
                                    if (i.subtype = "keySignature",
                                    2 !== o)
                                        throw new Error("Expected length for keySignature event is 2, got " + o);
                                    return i.key = e.readInt8(!0),
                                    i.scale = e.readInt8(),
                                    i;
                                case 127:
                                    return i.subtype = "sequencerSpecific",
                                    i.data = e.read(o),
                                    i;
                                default:
                                    return i.subtype = "unknown",
                                    i.data = e.read(o),
                                    i
                                }
                            } else {
                                var u;
                                0 === (128 & n) ? (u = n,
                                n = t) : (u = e.readInt8(),
                                t = n);
                                var h = n >> 4;
                                switch (i.channel = 15 & n,
                                i.type = "channel",
                                h) {
                                case 8:
                                    return i.subtype = "noteOff",
                                    i.noteNumber = u,
                                    i.velocity = e.readInt8(),
                                    i;
                                case 9:
                                    return i.noteNumber = u,
                                    i.velocity = e.readInt8(),
                                    0 === i.velocity ? i.subtype = "noteOff" : i.subtype = "noteOn",
                                    i;
                                case 10:
                                    return i.subtype = "noteAftertouch",
                                    i.noteNumber = u,
                                    i.amount = e.readInt8(),
                                    i;
                                case 11:
                                    return i.subtype = "controller",
                                    i.controllerType = u,
                                    i.value = e.readInt8(),
                                    i;
                                case 12:
                                    return i.subtype = "programChange",
                                    i.programNumber = u,
                                    i;
                                case 13:
                                    return i.subtype = "channelAftertouch",
                                    i.amount = u,
                                    i;
                                case 14:
                                    return i.subtype = "pitchBend",
                                    i.value = u + (e.readInt8() << 7),
                                    i;
                                default:
                                    throw new Error("Unrecognised MIDI event type: " + h)
                                }
                            }
                        }
                        var a = (0,
                        s.default)(e)
                          , r = i(a);
                        if ("MThd" !== r.id || 6 !== r.length)
                            throw new Error("Bad .mid file - header not found");
                        var o, l = (0,
                        s.default)(r.data), u = l.readInt16(), h = l.readInt16(), c = l.readInt16();
                        if (32768 & c)
                            throw new Error("Expressing time division in SMTPE frames is not supported yet");
                        o = c;
                        for (var f = {
                            formatType: u,
                            trackCount: h,
                            ticksPerBeat: o
                        }, d = [], p = 0; p < f.trackCount; p++) {
                            d[p] = [];
                            var m = i(a);
                            if ("MTrk" !== m.id)
                                throw new Error("Unexpected chunk - expected MTrk, got " + m.id);
                            var v = (0,
                            s.default)(m.data);
                            while (!v.eof()) {
                                var y = n(v);
                                d[p].push(y)
                            }
                        }
                        return {
                            header: f,
                            tracks: d
                        }
                    }
                }
                , function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    t.default = function(e) {
                        var t = 0;

                        function i(i) {
                            var n = e.substr(t, i);
                            return t += i,
                            n
                        }

                        function n() {
                            var i = (e.charCodeAt(t) << 24) + (e.charCodeAt(t + 1) << 16) + (e.charCodeAt(t + 2) << 8) + e.charCodeAt(t + 3);
                            return t += 4,
                            i
                        }

                        function s() {
                            var i = (e.charCodeAt(t) << 8) + e.charCodeAt(t + 1);
                            return t += 2,
                            i
                        }

                        function a(i) {
                            var n = e.charCodeAt(t);
                            return i && n > 127 && (n -= 256),
                            t += 1,
                            n
                        }

                        function r() {
                            return t >= e.length
                        }

                        function o() {
                            var e = 0;
                            while (1) {
                                var t = a();
                                if (!(128 & t))
                                    return e + t;
                                e += 127 & t,
                                e <<= 7
                            }
                        }
                        return {
                            eof: r,
                            read: i,
                            readInt32: n,
                            readInt16: s,
                            readInt8: a,
                            readVarInt: o
                        }
                    }
                    ,
                    e.exports = t["default"]
                }
                , function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = "function" === typeof Symbol && "symbol" === r(Symbol.iterator) ? function(e) {
                        return r(e)
                    }
                    : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
                    }
                    ;
                    t.Replayer = s;
                    var n = function e(t) {
                        if ("object" !== ("undefined" === typeof t ? "undefined" : i(t)))
                            return t;
                        if (null === t)
                            return t;
                        var n = "number" === typeof t.length ? [] : {};
                        for (var s in t)
                            n[s] = e(t[s]);
                        return n
                    };

                    function s(e, t, i, s) {
                        for (var a, r = [], o = s || 120, l = !!s, u = e.header.ticksPerBeat, h = 0; h < e.tracks.length; h++)
                            r[h] = {
                                nextEventIndex: 0,
                                ticksToNextEvent: e.tracks[h].length ? e.tracks[h][0].deltaTime : null
                            };

                        function c() {
                            for (var t = null, i = null, n = null, s = 0; s < r.length; s++)
                                null != r[s].ticksToNextEvent && (null == t || r[s].ticksToNextEvent < t) && (t = r[s].ticksToNextEvent,
                                i = s,
                                n = r[s].nextEventIndex);
                            if (null != i) {
                                var a = e.tracks[i][n];
                                e.tracks[i][n + 1] ? r[i].ticksToNextEvent += e.tracks[i][n + 1].deltaTime : r[i].ticksToNextEvent = null,
                                r[i].nextEventIndex += 1;
                                for (var o = 0; o < r.length; o++)
                                    null != r[o].ticksToNextEvent && (r[o].ticksToNextEvent -= t);
                                return {
                                    ticksToEvent: t,
                                    event: a,
                                    track: i
                                }
                            }
                            return null
                        }
                        var f = [];
                        return function() {
                            function e() {
                                l || "meta" !== a.event.type || "setTempo" !== a.event.subtype || (o = 6e7 / a.event.microsecondsPerBeat);
                                var e = 0
                                  , i = 0;
                                a.ticksToEvent > 0 && (e = a.ticksToEvent / u,
                                i = e / (o / 60));
                                var n = 1e3 * i * t || 0;
                                f.push([a, n]),
                                a = c()
                            }
                            if (a = c(),
                            a)
                                while (a)
                                    e(!0)
                        }(),
                        {
                            getData: function() {
                                return n(f)
                            }
                        }
                    }
                }
                , function(e, t, i) {
                    "use strict";
                    i(15),
                    i(16),
                    i(17)
                }
                , function(e, t, i) {
                    "use strict";
                    var n = i(2)
                      , s = a(n);

                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    window.Audio && function() {
                        for (var e = s.default.AudioTag = {
                            api: "audiotag"
                        }, t = {}, i = 127, n = -1, a = [], r = [], o = {}, l = 0; l < 12; l++)
                            a[l] = new window.Audio;
                        var u = function(e, t) {
                            if (s.default.channels[e]) {
                                var l = s.default.channels[e].instrument
                                  , u = s.default.GM.byId[l].id;
                                if (t = o[t],
                                t) {
                                    var h = u + "" + t.id
                                      , c = (n + 1) % a.length
                                      , f = a[c];
                                    if (r[c] = h,
                                    !s.default.Soundfont[u])
                                        return void (s.default.DEBUG && console.log("404", u));
                                    f.src = s.default.Soundfont[u][t.id],
                                    f.volume = i / 127,
                                    f.play(),
                                    n = c
                                }
                            }
                        }
                          , h = function(e, t) {
                            if (s.default.channels[e]) {
                                var i = s.default.channels[e].instrument
                                  , l = s.default.GM.byId[i].id;
                                if (t = o[t],
                                t)
                                    for (var u = l + "" + t.id, h = 0, c = a.length; h < c; h++) {
                                        var f = (h + n + 1) % c
                                          , d = r[f];
                                        if (d && d === u)
                                            return a[f].pause(),
                                            void (r[f] = null)
                                    }
                            }
                        };
                        e.audioBuffers = a,
                        e.send = function(e, t) {}
                        ,
                        e.setController = function(e, t, i, n) {}
                        ,
                        e.setVolume = function(e, t) {
                            i = t
                        }
                        ,
                        e.programChange = function(e, t) {
                            s.default.channels[e].instrument = t
                        }
                        ,
                        e.pitchBend = function(e, t, i) {}
                        ,
                        e.noteOn = function(e, i, n, s) {
                            var a = t[i];
                            if (o[a])
                                return s ? setTimeout((function() {
                                    u(e, a)
                                }
                                ), 1e3 * s) : void u(e, a)
                        }
                        ,
                        e.noteOff = function(e, t, i) {}
                        ,
                        e.chordOn = function(e, i, n, s) {
                            for (var a = 0; a < i.length; a++) {
                                var r = i[a]
                                  , l = t[r];
                                if (o[l]) {
                                    if (s)
                                        return setTimeout((function() {
                                            u(e, l)
                                        }
                                        ), 1e3 * s);
                                    u(e, l)
                                }
                            }
                        }
                        ,
                        e.chordOff = function(e, i, n) {
                            for (var s = 0; s < i.length; s++) {
                                var a = i[s]
                                  , r = t[a];
                                if (o[r]) {
                                    if (n)
                                        return setTimeout((function() {
                                            h(e, r)
                                        }
                                        ), 1e3 * n);
                                    h(e, r)
                                }
                            }
                        }
                        ,
                        e.stopAllNotes = function() {
                            for (var e = 0, t = a.length; e < t; e++)
                                a[e].pause()
                        }
                        ,
                        e.connect = function(i) {
                            for (var n in s.default.setDefaultPlugin(e),
                            s.default.keyToNote)
                                t[s.default.keyToNote[n]] = n,
                                o[n] = {
                                    id: n
                                };
                            i.onsuccess && i.onsuccess()
                        }
                    }()
                }
                , function(e, t, i) {
                    "use strict";
                    var n = i(2)
                      , s = a(n);

                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function r(e) {
                        for (var t = window.atob(e), i = t.length, n = new Uint8Array(i), s = 0; s < i; s++)
                            n[s] = t.charCodeAt(s);
                        return n.buffer
                    }
                    (window.AudioContext || window.webkitAudioContext) && function() {
                        var e, t = !1, i = s.default.WebAudio = {
                            api: "webaudio"
                        }, n = {}, a = {}, o = 127, l = {};

                        function u(i, n, s) {
                            if (t) {
                                var a = new window.Audio;
                                a.src = i,
                                a.controls = !1,
                                a.autoplay = !1,
                                a.preload = !1,
                                a.addEventListener("canplay", (function() {
                                    n && n(a)
                                }
                                )),
                                a.addEventListener("error", (function(e) {
                                    s && s(e)
                                }
                                )),
                                document.body.appendChild(a)
                            } else if (0 === i.indexOf("data:audio")) {
                                var o = i.split(",")[1]
                                  , l = r(o);
                                e.decodeAudioData(l, n, s)
                            } else {
                                var u = new window.XMLHttpRequest;
                                u.open("GET", i, !0),
                                u.responseType = "arraybuffer",
                                u.onload = function() {
                                    e.decodeAudioData(u.response, n, s)
                                }
                                ,
                                u.send()
                            }
                        }

                        function h() {
                            return new (window.AudioContext || window.webkitAudioContext)
                        }
                        i.audioBuffers = l,
                        i.send = function(e, t) {}
                        ,
                        i.setController = function(e, t, i, n) {}
                        ,
                        i.setVolume = function(e, t, i) {
                            i ? setTimeout((function() {
                                o = t
                            }
                            ), 1e3 * i) : o = t
                        }
                        ,
                        i.programChange = function(e, t, i) {
                            var n = s.default.channels[e];
                            n.instrument = t
                        }
                        ,
                        i.pitchBend = function(e, t, i) {
                            var n = s.default.channels[e];
                            n.pitchBend = t
                        }
                        ,
                        i.noteOn = function(i, r, u, h) {
                            h = h || 0;
                            var c = s.default.channels[i]
                              , f = c.instrument
                              , d = f + "" + r
                              , p = l[d];
                            if (p) {
                                var m;
                                if (h < e.currentTime && (h += e.currentTime),
                                t ? m = e.createMediaElementSource(p) : (m = e.createBufferSource(),
                                m.buffer = p),
                                a) {
                                    var v = m;
                                    for (var y in a)
                                        v.connect(a[y].input),
                                        v = a[y]
                                }
                                var g = u / 127 * (o / 127) * 2 - 1;
                                if (m.connect(e.destination),
                                m.playbackRate.value = 1,
                                m.gainNode = e.createGain(),
                                m.gainNode.connect(e.destination),
                                m.gainNode.gain.value = Math.min(10, Math.max(-10, g)),
                                m.connect(m.gainNode),
                                t) {
                                    if (h)
                                        return setTimeout((function() {
                                            p.currentTime = 0,
                                            p.play()
                                        }
                                        ), 1e3 * h);
                                    p.currentTime = 0,
                                    p.play()
                                } else
                                    m.start(h || 0);
                                return n[i + "" + r] = m,
                                m
                            }
                        }
                        ,
                        i.noteOff = function(i, a, r) {
                            r = r || 0;
                            var o = s.default.channels[i]
                              , u = o.instrument
                              , h = u + "" + a
                              , c = l[h];
                            if (c) {
                                r < e.currentTime && (r += e.currentTime);
                                var f = n[i + "" + a];
                                if (f) {
                                    if (f.gainNode) {
                                        var d = f.gainNode.gain;
                                        d.linearRampToValueAtTime(d.value, r),
                                        d.linearRampToValueAtTime(-1, r + .3)
                                    }
                                    return t ? r ? setTimeout((function() {
                                        c.pause()
                                    }
                                    ), 1e3 * r) : c.pause() : f.noteOff ? f.noteOff(r + .5) : f.stop(r + .5),
                                    delete n[i + "" + a],
                                    f
                                }
                            }
                        }
                        ,
                        i.chordOn = function(e, t, n, s) {
                            for (var a, r = {}, o = 0, l = t.length; o < l; o++)
                                r[a = t[o]] = i.noteOn(e, a, n, s);
                            return r
                        }
                        ,
                        i.chordOff = function(e, t, n) {
                            for (var s, a = {}, r = 0, o = t.length; r < o; r++)
                                a[s = t[r]] = i.noteOff(e, s, n);
                            return a
                        }
                        ,
                        i.stopAllNotes = function() {
                            for (var t in n) {
                                var i = 0;
                                i < e.currentTime && (i += e.currentTime);
                                var s = n[t];
                                s.gain.linearRampToValueAtTime(1, i),
                                s.gain.linearRampToValueAtTime(0, i + .3),
                                s.noteOff ? s.noteOff(i + .3) : s.stop(i + .3),
                                delete n[t]
                            }
                        }
                        ,
                        i.setEffects = function(t) {
                            if (!e.tunajs)
                                return console.log("Effects module not installed.");
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i]
                                  , s = new e.tunajs[n.type](n);
                                s.connect(e.destination),
                                a[n.type] = s
                            }
                        }
                        ,
                        i.connect = function(t) {
                            s.default.setDefaultPlugin(i),
                            i.setContext(e || h(), t.onsuccess)
                        }
                        ,
                        i.getContext = function() {
                            return e
                        }
                        ,
                        i.setContext = function(t, i, n, a) {
                            e = t,
                            "undefined" === typeof window.Tuna || e.tunajs || (e.tunajs = new window.Tuna(e));
                            var r = []
                              , o = s.default.keyToNote;
                            for (var h in o)
                                r.push(h);
                            var c = function(e) {
                                for (var t in d)
                                    if (d[t])
                                        return;
                                i && (i(),
                                i = null)
                            }
                              , f = function(e, t, i, n) {
                                var a = e[n];
                                a && (d[t]++,
                                u(a, (function(i) {
                                    i.id = n;
                                    var a = s.default.keyToNote[n];
                                    l[t + "" + a] = i,
                                    0 === --d[t] && (e.isLoaded = !0,
                                    c(p))
                                }
                                ), (function(e) {
                                    console.error(e)
                                }
                                )))
                            }
                              , d = {};
                            for (var p in s.default.Soundfont) {
                                var m = s.default.Soundfont[p];
                                if (!m.isLoaded) {
                                    var v = s.default.GM.byName[p]
                                      , y = v.number;
                                    d[y] = 0;
                                    for (var g = 0; g < r.length; g++) {
                                        var b = r[g];
                                        f(m, y, g, b)
                                    }
                                }
                            }
                            setTimeout(c, 1)
                        }
                    }()
                }
                , function(e, t, i) {
                    "use strict";
                    var n = i(2)
                      , s = a(n);

                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    (function() {
                        var e = null
                          , t = null
                          , i = s.default.WebMIDI = {
                            api: "webmidi"
                        };
                        i.send = function(e, i) {
                            t.send(e, 1e3 * i)
                        }
                        ,
                        i.setController = function(e, i, n, s) {
                            t.send([e, i, n], 1e3 * s)
                        }
                        ,
                        i.setVolume = function(e, i, n) {
                            t.send([176 + e, 7, i], 1e3 * n)
                        }
                        ,
                        i.programChange = function(e, i, n) {
                            t.send([192 + e, i], 1e3 * n)
                        }
                        ,
                        i.pitchBend = function(e, i, n) {
                            t.send([224 + e, i], 1e3 * n)
                        }
                        ,
                        i.noteOn = function(e, i, n, s) {
                            t.send([144 + e, i, n], 1e3 * s)
                        }
                        ,
                        i.noteOff = function(e, i, n) {
                            t.send([128 + e, i, 0], 1e3 * n)
                        }
                        ,
                        i.chordOn = function(e, i, n, s) {
                            for (var a = 0; a < i.length; a++) {
                                var r = i[a];
                                t.send([144 + e, r, n], 1e3 * s)
                            }
                        }
                        ,
                        i.chordOff = function(e, i, n) {
                            for (var s = 0; s < i.length; s++) {
                                var a = i[s];
                                t.send([128 + e, a, 0], 1e3 * n)
                            }
                        }
                        ,
                        i.stopAllNotes = function() {
                            t.cancel();
                            for (var e = 0; e < 16; e++)
                                t.send([176 + e, 123, 0])
                        }
                        ,
                        i.connect = function(n) {
                            s.default.setDefaultPlugin(i);
                            var a = function(e) {
                                if (window.AudioContext || window.webkitAudioContext)
                                    n.api = "webaudio";
                                else {
                                    if (!window.Audio)
                                        return e;
                                    n.api = "audiotag"
                                }
                                s.default.loadPlugin(n)
                            };
                            navigator.requestMIDIAccess().then((function(i) {
                                e = i;
                                var s = e.outputs;
                                t = "function" === typeof s ? s()[0] : s[0],
                                void 0 === t ? a() : n.onsuccess && n.onsuccess()
                            }
                            ), a)
                        }
                    }
                    )()
                }
                ])
            }
            ))
        }
        ).call(this, i("62e4")(e))
    },
    "94a1": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return k
        }
        ));
        i("4160"),
        i("d81d"),
        i("fb6a"),
        i("4ec9"),
        i("d3b7"),
        i("ac1f"),
        i("3ca3"),
        i("1276"),
        i("5cc6"),
        i("9a8c"),
        i("a975"),
        i("735e"),
        i("c1ac"),
        i("d139"),
        i("3a7b"),
        i("d5d6"),
        i("82f8"),
        i("e91f"),
        i("60bd"),
        i("5f96"),
        i("3280"),
        i("3fcc"),
        i("ca91"),
        i("25a1"),
        i("cd26"),
        i("3c5d"),
        i("2954"),
        i("649e"),
        i("219c"),
        i("170b"),
        i("b39a"),
        i("72f7"),
        i("159b"),
        i("ddb0");
        var n = i("2909")
          , s = i("d4ec")
          , a = i("bee2")
          , r = (i("c740"),
        i("a434"),
        i("b64b"),
        i("ade3"))
          , o = (i("b680"),
        i("69a1"))
          , l = i.n(o)
          , u = function() {
            function e(t) {
                var i = this;
                Object(s["a"])(this, e),
                Object(r["a"])(this, "buffers", []),
                this.context = t,
                this.loadAudioFile(t, "./sounds/tick.mp3", (function(e) {
                    i.buffers[0] = e
                }
                )),
                this.loadAudioFile(t, "./sounds/tack.mp3", (function(e) {
                    i.buffers[1] = e
                }
                ))
            }
            return Object(a["a"])(e, [{
                key: "playSound",
                value: function(e) {
                    var t = this.context.createBufferSource();
                    t.buffer = e,
                    t.loop = !1,
                    t.connect(this.context.destination),
                    t.start(0)
                }
            }, {
                key: "loadAudioFile",
                value: function(e, t, i) {
                    var n = new XMLHttpRequest;
                    n.open("GET", t, !0),
                    n.responseType = "arraybuffer",
                    n.onload = function() {
                        e.decodeAudioData(n.response, (function(e) {
                            i(e)
                        }
                        ), (function(e) {
                            console.log("Error decoding file", e)
                        }
                        ))
                    }
                    ,
                    n.send()
                }
            }, {
                key: "play",
                value: function(e) {
                    2 == this.buffers.length && this.playSound(this.buffers[e ? 0 : 1])
                }
            }]),
            e
        }()
          , h = i("6502")
          , c = function() {
            function e(t) {
                Object(s["a"])(this, e),
                Object(r["a"])(this, "trackStatus", []),
                Object(r["a"])(this, "volume", 1),
                Object(r["a"])(this, "ticktackParams", [{
                    frequency: 880,
                    duration: .4
                }, {
                    frequency: 440,
                    duration: .2
                }]),
                this.initCallback = t
            }
            return Object(a["a"])(e, [{
                key: "init",
                value: function(e) {
                    for (var t = this, i = [], n = 0; n < e.length; n++)
                        i.push(this.mapProgram(e[n].program));
                    window.Tuna = h,
                    console.log("start login soundfont"),
                    l.a.loadPlugin({
                        soundfontUrl: "./soundfont/",
                        instruments: i,
                        onerror: function() {
                            console.log("loadPlugin error")
                        },
                        onsuccess: function() {
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                l.a.programChange(n.channel, t.mapProgram(n.program)),
                                l.a.setVolume(n.channel, (127 * t.volume).toFixed(0))
                            }
                            l.a.setEffects([{
                                type: "Convolver",
                                highCut: 22050,
                                lowCut: 20,
                                dryLevel: 1,
                                wetLevel: 1,
                                level: 1,
                                impulse: "./sounds/impulse_rev.wav",
                                bypass: 0
                            }]),
                            t.audioCtx = l.a.getContext(),
                            t.ticktacker = new u(l.a.getContext()),
                            t.trackStatus = [],
                            t.initCallback && t.initCallback()
                        }
                    })
                }
            }, {
                key: "mapProgram",
                value: function(e) {
                    var t = 0;
                    switch (e) {
                    case 0:
                        t = 0;
                        break;
                    case 25:
                        t = 25;
                        break;
                    case 24:
                        t = 24;
                        break;
                    default:
                        t = 68;
                        break
                    }
                    return t
                }
            }, {
                key: "enableAudio",
                value: function() {
                    this.audioCtx && this.audioCtx.resume()
                }
            }, {
                key: "noteEvent",
                value: function(e, t, i, n) {
                    l.a.noteOn(e, t, i, 0),
                    l.a.noteOff(e, t, n)
                }
            }, {
                key: "noteOn",
                value: function(e, t, i, n) {
                    l.a.noteOn(e, t, i, n)
                }
            }, {
                key: "noteOff",
                value: function(e, t, i) {
                    l.a.noteOff(e, t, i)
                }
            }, {
                key: "setController",
                value: function(e, t, i) {
                    l.a.setController(e, t, i)
                }
            }, {
                key: "programChange",
                value: function(e, t) {
                    l.a.programChange(e, this.mapProgram(t))
                }
            }, {
                key: "pitchBend",
                value: function(e, t) {
                    l.a.pitchBend(e, t)
                }
            }, {
                key: "setTrackMute",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , i = this.trackStatus[e];
                    void 0 == i && (i = {}),
                    i.mute = t,
                    this.trackStatus[e] = i
                }
            }, {
                key: "isTrackMute",
                value: function(e) {
                    var t = this.trackStatus[e];
                    return void 0 != t && t.mute
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.volume = e,
                    l.a.setVolume(0, (127 * this.volume).toFixed(0))
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.volume
                }
            }, {
                key: "setTrackVolume",
                value: function(e, t) {
                    var i = this.trackStatus[e];
                    void 0 == i && (i = {}),
                    i.volume = t,
                    this.trackStatus[e] = i
                }
            }, {
                key: "getTrackVolume",
                value: function(e) {
                    var t = this.trackStatus[e];
                    return t ? t.volume : 1
                }
            }, {
                key: "ticktack",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.ticktacker && this.ticktacker.play(e)
                }
            }]),
            e
        }()
          , f = function() {
            function e(t) {
                Object(s["a"])(this, e),
                Object(r["a"])(this, "position", 0),
                this.str = t
            }
            return Object(a["a"])(e, [{
                key: "read",
                value: function(e) {
                    var t = this.str.substr(this.position, e);
                    return this.position += e,
                    t
                }
            }, {
                key: "readInt32",
                value: function() {
                    var e = (this.str.charCodeAt(this.position) << 24) + (this.str.charCodeAt(this.position + 1) << 16) + (this.str.charCodeAt(this.position + 2) << 8) + this.str.charCodeAt(this.position + 3);
                    return this.position += 4,
                    e
                }
            }, {
                key: "readInt16",
                value: function() {
                    var e = (this.str.charCodeAt(this.position) << 8) + this.str.charCodeAt(this.position + 1);
                    return this.position += 2,
                    e
                }
            }, {
                key: "readInt8",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , t = this.str.charCodeAt(this.position);
                    return e && t > 127 && (t -= 256),
                    this.position += 1,
                    t
                }
            }, {
                key: "eof",
                value: function() {
                    return this.position >= this.str.length
                }
            }, {
                key: "readVarInt",
                value: function() {
                    var e = 0;
                    while (1) {
                        var t = this.readInt8();
                        if (!(128 & t))
                            return e + t;
                        e += 127 & t,
                        e <<= 7
                    }
                }
            }]),
            e
        }();

        function d(e) {
            function t(e) {
                for (var t = "", i = 0; i < e.length; i++)
                    t += String.fromCharCode(e[i]);
                return new f(t)
            }

            function i(e) {
                var t = {}
                  , i = e.readInt8();
                if (240 == (240 & i)) {
                    if (255 != i) {
                        if (240 == i)
                            return t.type = "sysEx",
                            t.data = e.read(e.readVarInt()),
                            t;
                        if (247 == i)
                            return t.type = "dividedSysEx",
                            t.data = e.read(e.readVarInt()),
                            t;
                        throw "Unrecognised MIDI event type byte: " + i
                    }
                    t.type = "meta";
                    var n = e.readInt8()
                      , s = e.readVarInt();
                    switch (n) {
                    case 0:
                        if (t.subtype = "sequenceNumber",
                        2 != s)
                            throw "Expected length for sequenceNumber event is 2, got " + s;
                        return t.number = e.readInt16(),
                        t;
                    case 1:
                        return t.subtype = "text",
                        t.text = e.read(s),
                        t;
                    case 2:
                        return t.subtype = "copyrightNotice",
                        t.text = e.read(s),
                        t;
                    case 3:
                        return t.subtype = "trackName",
                        t.text = e.read(s),
                        t;
                    case 4:
                        return t.subtype = "instrumentName",
                        t.text = e.read(s),
                        t;
                    case 5:
                        return t.subtype = "lyrics",
                        t.text = e.read(s),
                        t;
                    case 6:
                        return t.subtype = "marker",
                        t.text = e.read(s),
                        t;
                    case 7:
                        return t.subtype = "cuePoint",
                        t.text = e.read(s),
                        t;
                    case 32:
                        if (t.subtype = "midiChannelPrefix",
                        1 != s)
                            throw "Expected length for midiChannelPrefix event is 1, got " + s;
                        return t.channel = e.readInt8(),
                        t;
                    case 47:
                        if (t.subtype = "endOfTrack",
                        0 != s)
                            throw "Expected length for endOfTrack event is 0, got " + s;
                        return t;
                    case 81:
                        if (t.subtype = "setTempo",
                        3 != s)
                            throw "Expected length for setTempo event is 3, got " + s;
                        return t.microsecondsPerBeat = (e.readInt8() << 16) + (e.readInt8() << 8) + e.readInt8(),
                        t;
                    case 84:
                        if (t.subtype = "smpteOffset",
                        5 != s)
                            throw "Expected length for smpteOffset event is 5, got " + s;
                        var a = e.readInt8();
                        return t.frameRate = {
                            0: 24,
                            32: 25,
                            64: 29,
                            96: 30
                        }[96 & a],
                        t.hour = 31 & a,
                        t.min = e.readInt8(),
                        t.sec = e.readInt8(),
                        t.frame = e.readInt8(),
                        t.subframe = e.readInt8(),
                        t;
                    case 88:
                        if (t.subtype = "timeSignature",
                        4 != s)
                            throw "Expected length for timeSignature event is 4, got " + s;
                        return t.numerator = e.readInt8(),
                        t.denominator = Math.pow(2, e.readInt8()),
                        t.metronome = e.readInt8(),
                        t.thirtyseconds = e.readInt8(),
                        t;
                    case 89:
                        if (t.subtype = "keySignature",
                        2 != s)
                            throw "Expected length for keySignature event is 2, got " + s;
                        return t.key = e.readInt8(!0),
                        t.scale = e.readInt8(),
                        t;
                    case 127:
                        return t.subtype = "sequencerSpecific",
                        t.data = e.read(s),
                        t;
                    default:
                        return t.subtype = "unknown",
                        t.data = e.read(s),
                        t
                    }
                } else {
                    var r;
                    r = e.readInt8();
                    var o = i >> 4;
                    switch (t.channel = 15 & i,
                    t.type = "channel",
                    o) {
                    case 8:
                        return t.subtype = "noteOff",
                        t.noteNumber = r,
                        t.velocity = e.readInt8(),
                        t;
                    case 9:
                        return t.noteNumber = r,
                        t.velocity = e.readInt8(),
                        0 == t.velocity ? t.subtype = "noteOff" : t.subtype = "noteOn",
                        t;
                    case 10:
                        return t.subtype = "noteAftertouch",
                        t.noteNumber = r,
                        t.amount = e.readInt8(),
                        t;
                    case 11:
                        return t.subtype = "controller",
                        t.controllerType = r,
                        t.value = e.readInt8(),
                        t;
                    case 12:
                        return t.subtype = "programChange",
                        t.programNumber = r,
                        t;
                    case 13:
                        return t.subtype = "channelAftertouch",
                        t.amount = r,
                        t;
                    case 14:
                        return t.subtype = "pitchBend",
                        t.value = r + (e.readInt8() << 7),
                        t;
                    default:
                        throw "Unrecognised MIDI event type: " + o
                    }
                }
            }
            for (var n = e.tracks.length, s = [], a = [], r = [], o = 0, l = 0; l < e.events.length; l++) {
                var u = e.events[l]
                  , h = u.track;
                void 0 == s[h] && (s[h] = [],
                a[h] = 0);
                var c = i(t(u.event));
                c.deltaTime = u.tick - a[h],
                c.delta = u.tick - o,
                c.staff = u.staff,
                c.tick = u.tick,
                c.id = u.id,
                c.duration = u.duration,
                c.finger = u.finger,
                c.meas_start_tick = u.meas_start_tick,
                c.noteIndex = u.note,
                c.track = u.track,
                c.measure = u.measure,
                c.repeatIndex = u.repeatIndex,
                a[h] = u.tick,
                o = u.tick,
                s[h].push(c),
                r.push(c)
            }
            var d = Object.keys(e.measures);
            d.sort((function(e, t) {
                return e - t
            }
            ));
            var p = 0;
            if (d.length > 0) {
                var m = d[d.length - 1];
                p = +m + e.measures[m].duration
            }
            var v = {
                trackCount: n,
                totalTicks: p,
                beatInfos: e.beatInfos,
                leftHandTrack: e.leftHandTrack,
                rightHandTrack: e.rightHandTrack
            };
            return {
                header: v,
                trackEvents: s,
                events: r,
                measures: e.measures,
                tempos: e.tempos,
                measureTicks: d,
                tracks: e.tracks
            }
        }
        i("cb29"),
        i("6062");
        var p = function() {
            function e(t, i) {
                Object(s["a"])(this, e),
                this.canvas = t,
                this.player = i,
                this.canvasContext = t.getContext("2d"),
                this.canvasBuffer = document.createElement("canvas"),
                this.canvasBufferContext = this.canvasBuffer.getContext("2d"),
                this.notes = new Set,
                this.events = [],
                this.rendering = !1
            }
            return Object(a["a"])(e, [{
                key: "onFrame",
                value: function() {
                    this.rendering && (this.last = (new Date).getTime(),
                    this.width && this.height || (this.width = this.canvas.clientWidth,
                    this.height = this.canvas.clientHeight,
                    this.canvas.width = this.width,
                    this.canvas.height = this.height,
                    this.canvasBuffer.width = this.width,
                    this.canvasBuffer.height = this.height),
                    this.tick(),
                    window.requestAnimationFrame(this.onFrame.bind(this)))
                }
            }, {
                key: "setVisible",
                value: function(e) {
                    this.rendering = e,
                    e && this.onFrame()
                }
            }, {
                key: "tick",
                value: function() {
                    var e, t = this.player.refreshWaterfallEvents(this.events), i = t.baseTime, s = t.splice;
                    this.events.splice(0, s);
                    var a = this.player.addWaterfallEvents(i);
                    (e = this.events).push.apply(e, Object(n["a"])(a));
                    var r = this.player.getBaseGapTime();
                    return this.width && this.height && this.draw(this.events, i, r),
                    i
                }
            }, {
                key: "resetEvents",
                value: function(e) {
                    this.events = e,
                    this.rendering && this.tick()
                }
            }, {
                key: "getNotePosition",
                value: function(e) {
                    var t = this.width / 52
                      , i = t / 2
                      , n = -this.width / 52 * 12
                      , s = Math.floor(e / 12)
                      , a = e % 12
                      , r = a < 5 ? a % 2 == 0 : a % 2 == 1
                      , o = r ? Math.floor((a + 1) / 2) : Math.floor(a / 2);
                    return r ? {
                        x: n + s * t * 7 + t * o,
                        width: t
                    } : {
                        x: n + s * t * 7 + t * o + t - i / 2,
                        width: i
                    }
                }
            }, {
                key: "draw",
                value: function(e, t, i) {
                    var n = this
                      , s = this.canvasBufferContext
                      , a = this.width
                      , r = this.height;
                    s.fillStyle = "#000231",
                    s.fillRect(0, 0, a, r),
                    e.forEach((function(e) {
                        var n = r - r * (e.time - t) / i;
                        "measure" == e.type && (s.save(),
                        s.strokeStyle = "#0000ff",
                        s.beginPath(),
                        s.setLineDash([5, 15]),
                        s.moveTo(0, n),
                        s.lineTo(a, n),
                        s.stroke(),
                        s.restore())
                    }
                    )),
                    e.forEach((function(e) {
                        var a = r - r * (e.time - t) / i;
                        "notes" == e.type && e.noteEvents.forEach((function(o) {
                            var l = r * o.delay / i
                              , u = n.getNotePosition(o.noteNumber)
                              , h = n.notes.has(o.noteNumber) && e.time < t ? "#9cf6fc" : "#4a9cd0";
                            s.save(),
                            n.drawRoundRect(s, u.x, a - l, u.width, l, 4, h),
                            s.restore()
                        }
                        ))
                    }
                    )),
                    this.canvasContext.drawImage(this.canvasBuffer, 0, 0)
                }
            }, {
                key: "drawRoundRect",
                value: function(e, t, i, n, s, a, r) {
                    e.beginPath(),
                    e.arc(t + a, i + a, a, Math.PI, 3 * Math.PI / 2),
                    e.lineTo(n - a + t, i),
                    e.arc(n - a + t, a + i, a, 3 * Math.PI / 2, 2 * Math.PI),
                    e.lineTo(n + t, s + i - a),
                    e.arc(n - a + t, s - a + i, a, 0, 1 * Math.PI / 2),
                    e.lineTo(a + t, s + i),
                    e.arc(a + t, s - a + i, a, 1 * Math.PI / 2, Math.PI),
                    e.closePath(),
                    e.fillStyle = r,
                    e.strokeStyle = r,
                    e.fill()
                }
            }, {
                key: "noteOn",
                value: function(e) {
                    this.notes.add(e)
                }
            }, {
                key: "noteOff",
                value: function(e) {
                    this.notes.delete(e)
                }
            }]),
            e
        }()
          , m = function() {
            function e(t, i, n, a) {
                var o = this;
                Object(s["a"])(this, e),
                Object(r["a"])(this, "nextIndex", 0),
                Object(r["a"])(this, "duration", 0),
                Object(r["a"])(this, "currentTime", 0),
                Object(r["a"])(this, "pausedTime", 0),
                Object(r["a"])(this, "tickTime", 0),
                Object(r["a"])(this, "DEFAULT_BPM", 60),
                Object(r["a"])(this, "DEFAULT_QUATER_TICKS", 480),
                Object(r["a"])(this, "eventQueue", []),
                Object(r["a"])(this, "state", {
                    inited: 0,
                    isPlaying: !1,
                    duration: 0,
                    currentTime: 0,
                    speed: 1,
                    volume: 1,
                    isLoopAll: !1,
                    transposition: 0,
                    enabledTrack: -1,
                    isMetronomeOn: !1,
                    trackCount: 0
                }),
                Object(r["a"])(this, "maxGap", 3e3),
                this.cursorCallback = a,
                this.stateCallback = t,
                this.measureCallback = i,
                this.noteCallback = n;
                var l = c;
                this.midiInterface = new l((function() {
                    console.log("inited ok"),
                    o.refreshState("inited", 2)
                }
                ))
            }
            return Object(a["a"])(e, [{
                key: "init",
                value: function(e) {
                    this.reader = d(e),
                    this.beatInfos = this.reader.header.beatInfos,
                    this.measures = this.reader.measures,
                    this.tempos = this.reader.tempos,
                    this.measureTicks = Object.keys(this.measures),
                    this.measureTicks.sort((function(e, t) {
                        return e - t
                    }
                    )),
                    this.makeQueue(),
                    this.refreshState("trackCount", this.reader.tracks.length)
                }
            }, {
                key: "loadSoundfont",
                value: function() {
                    this.midiInterface.init(this.reader.tracks)
                }
            }, {
                key: "refreshState",
                value: function(e, t) {
                    this.state[e] != t && (this.state[e] = t,
                    this.stateCallback && this.stateCallback(this.state, e))
                }
            }, {
                key: "inited",
                value: function() {
                    return this.state.inited
                }
            }, {
                key: "ready",
                value: function() {
                    return 2 == this.state.inited
                }
            }, {
                key: "getDuration",
                value: function() {
                    return parseInt(this.duration / this.state.speed)
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    if (this.nextIndex >= this.eventQueue.length)
                        return parseInt(this.duration / this.state.speed);
                    var e = 0 == this.nextIndex ? -this.maxGap : parseInt(this.eventQueue[this.nextIndex - 1].time / this.state.speed);
                    return this.isPlaying() ? e += (new Date).getTime() - this.tickTime : 0 != this.pausedTime && (e = this.pausedTime),
                    e
                }
            }, {
                key: "seekTo",
                value: function(e) {
                    var t = this.duration * e
                      , i = this.eventQueue.findIndex((function(e) {
                        return e.time >= t
                    }
                    ));
                    console.log("seek to index:", i),
                    -1 != i && (this.nextIndex = i,
                    this.pausedTime = 0),
                    this.waterfall && this.resetWaterfallEvents()
                }
            }, {
                key: "setSpeed",
                value: function(e) {
                    this.refreshState("speed", e),
                    this.refreshState("duration", this.getDuration()),
                    this.refreshState("currentTime", this.getCurrentTime())
                }
            }, {
                key: "getSpeed",
                value: function() {
                    return this.state.speed
                }
            }, {
                key: "getTransposition",
                value: function() {
                    return this.state.transposition
                }
            }, {
                key: "setTransposition",
                value: function(e) {
                    this.refreshState("transposition", e)
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.ready() && (this.refreshState("volume", e),
                    this.midiInterface.setVolume(e))
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.state.volume
                }
            }, {
                key: "resetPlay",
                value: function() {
                    this.onPlayStop(),
                    this.nextIndex = 0,
                    this.currentTime = 0,
                    this.pausedTime = 0,
                    this.tickTime = 0,
                    this.waterfall && this.resetWaterfallEvents()
                }
            }, {
                key: "setLoopAll",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.refreshState("isLoopAll", e)
                }
            }, {
                key: "isLoopAll",
                value: function() {
                    return this.state.isLoopAll
                }
            }, {
                key: "loopABMeasure",
                value: function(e, t) {
                    this.loopStartIndex = this.eventQueue.findIndex((function(t) {
                        return "measure" == t.type && t.measure.measure >= e
                    }
                    )),
                    this.loopEndIndex = this.eventQueue.findIndex((function(e) {
                        return "measure" == e.type && e.measure.measure >= t + 1 || "end" == e.type
                    }
                    ))
                }
            }, {
                key: "loopABMeasureAndIndex",
                value: function(e, t, i, n) {
                    this.loopStartIndex = this.eventQueue.findIndex((function(i) {
                        if ("notes" != i.type || i.measureIndex != e)
                            return !1;
                        var n = i.noteEvents.findIndex((function(e) {
                            return e.noteIndex == t
                        }
                        ));
                        return -1 != n
                    }
                    )),
                    this.loopEndIndex = this.eventQueue.findIndex((function(e) {
                        if ("notes" != e.type || e.measureIndex != i)
                            return !1;
                        var t = e.noteEvents.findIndex((function(e) {
                            return e.noteIndex == n
                        }
                        ));
                        return -1 != t
                    }
                    )) + 1
                }
            }, {
                key: "loopABCancel",
                value: function() {
                    this.loopStartIndex = void 0,
                    this.loopEndIndex = void 0
                }
            }, {
                key: "onPlayStart",
                value: function() {
                    this.refreshState("isPlaying", !0),
                    this.waterfall && (this.waterfallInfo || this.resetWaterfallEvents())
                }
            }, {
                key: "onPlayStop",
                value: function() {
                    this.refreshState("isPlaying", !1),
                    this.timer && clearTimeout(this.timer)
                }
            }, {
                key: "startPlay",
                value: function() {
                    if (this.ready()) {
                        this.onPlayStart(),
                        this.midiInterface.enableAudio();
                        var e = 0 == this.nextIndex ? this.maxGap : 0
                          , t = (new Date).getTime();
                        if (this.tickTime = t,
                        0 != this.pausedTime) {
                            var i = this.nextIndex > 0 ? this.eventQueue[this.nextIndex - 1].time / this.state.speed : -this.maxGap
                              , n = this.nextIndex > 0 ? this.eventQueue[this.nextIndex - 1].delay / this.state.speed : this.maxGap
                              , s = this.pausedTime - i
                              , a = Math.max(0, n - s);
                            e = a,
                            this.pausedTime = 0,
                            this.tickTime = t - s
                        }
                        return this.loop(e, this),
                        !0
                    }
                    return !1
                }
            }, {
                key: "pausePlay",
                value: function() {
                    this.ready() && (this.pausedTime = this.getCurrentTime(),
                    this.onPlayStop())
                }
            }, {
                key: "stopPlay",
                value: function() {
                    this.onPlayStop(),
                    this.resetPlay()
                }
            }, {
                key: "isPlaying",
                value: function() {
                    return !!this.ready() && this.state.isPlaying
                }
            }, {
                key: "setMute",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.ready() && this.midiInterface.setTrackMute(e, t)
                }
            }, {
                key: "isMute",
                value: function(e) {
                    return !!this.ready() && this.midiInterface.isTrackMute(e)
                }
            }, {
                key: "setEnabledTrack",
                value: function(e) {
                    this.refreshState("enabledTrack", e)
                }
            }, {
                key: "switchTrack",
                value: function() {
                    return this.state.enabledTrack < this.reader.tracks.length - 1 ? this.refreshState("enabledTrack", this.state.enabledTrack + 1) : this.refreshState("enabledTrack", -1),
                    this.state.enabledTrack
                }
            }, {
                key: "getEnabledTrack",
                value: function() {
                    return this.state.enabledTrack
                }
            }, {
                key: "getTrackCount",
                value: function() {
                    return this.reader.tracks.length
                }
            }, {
                key: "moveToIndex",
                value: function(e) {
                    this.nextIndex = e,
                    this.pausedTime = 0,
                    this.ready() && !this.isPlaying() && this.playNext(),
                    this.waterfall && this.resetWaterfallEvents()
                }
            }, {
                key: "moveToNextChord",
                value: function() {
                    if (this.ready()) {
                        this.onPlayStop();
                        do {
                            this.playNext()
                        } while ("notes" != this.eventQueue[this.nextIndex].type);
                        this.pausedTime = 0
                    }
                    this.waterfall && this.resetWaterfallEvents()
                }
            }, {
                key: "getCurrentMeasure",
                value: function() {
                    var e = this.nextIndex - 1;
                    while (e >= 0) {
                        var t = this.eventQueue[e];
                        if ("measure" == t.type)
                            return t.measureIndex;
                        e--
                    }
                    return 0
                }
            }, {
                key: "placeTo",
                value: function(e, t) {
                    var i = this
                      , n = this.measureTicks.findIndex((function(t) {
                        return i.measures[t].measure >= e
                    }
                    ))
                      , s = +this.measureTicks[n]
                      , a = s + this.measures[s].note_ticks[t];
                    this.nextIndex = this.eventQueue.findIndex((function(e) {
                        return "notes" == e.type && e.tick >= a
                    }
                    )),
                    this.pausedTime = 0,
                    this.waterfall && this.resetWaterfallEvents()
                }
            }, {
                key: "playNext",
                value: function() {
                    if (this.nextIndex >= this.eventQueue.length)
                        if (void 0 != this.loopStartIndex && void 0 != this.loopEndIndex)
                            this.nextIndex = this.loopStartIndex;
                        else {
                            if (!this.state.isLoopAll)
                                return void this.resetPlay();
                            this.nextIndex = 0
                        }
                    else
                        void 0 != this.loopStartIndex && void 0 != this.loopEndIndex && (this.nextIndex < this.loopStartIndex || this.nextIndex >= this.loopEndIndex) && (this.nextIndex = this.loopStartIndex);
                    var e = this.eventQueue[this.nextIndex];
                    return "metronome" == e.type ? this.ticktack(e.firstBeatInMeasure) : "notes" == e.type ? this.handleEvents(e.noteEvents) : "measure" == e.type ? this.measureCallback(e.measure.measure, e.measure.notes) : "end" == e.type && this.measureCallback(-1),
                    this.refreshState("currentTime", this.getCurrentTime()),
                    this.nextIndex++,
                    e.delay
                }
            }, {
                key: "loop",
                value: function(e, t) {
                    var i = t;
                    this.timer = setTimeout((function() {
                        if (i.state.isPlaying) {
                            i.currentTime += e,
                            i.tickTime = (new Date).getTime();
                            var t = i.playNext();
                            void 0 != t && i.loop(t, i)
                        }
                    }
                    ), e / this.state.speed)
                }
            }, {
                key: "makeQueue",
                value: function() {
                    var e = this
                      , t = 0
                      , i = 0
                      , n = void 0
                      , s = 0
                      , a = 0;
                    this.eventQueue = [];
                    for (var r = 0, o = 0, l = function(l) {
                        var u = [];
                        i = +e.measureTicks[l],
                        n = e.measures[i],
                        s = l + 1 < e.measureTicks.length ? +e.measureTicks[l + 1] : i + n.duration,
                        0 == l && i > 0 && (o = i),
                        u.push({
                            type: "measure",
                            tick: i,
                            measureIndex: n.measure,
                            measure: n
                        });
                        while (r + 1 < e.beatInfos.length && e.beatInfos[r + 1].tick <= i)
                            r++;
                        for (var h = e.DEFAULT_QUATER_TICKS / e.beatInfos[r].beatsUnit * 4, c = e.beatInfos[r].beats, f = 0; f < c; f++)
                            u.push({
                                type: "metronome",
                                firstBeatInMeasure: 0 == f,
                                tick: i + h * f
                            });
                        var d = []
                          , p = [];
                        while (t < e.reader.events.length) {
                            var m = e.reader.events[t];
                            if (m.tick >= s)
                                break;
                            m.tick < i ? 0 == m.tick && (a = o,
                            m.tick = o,
                            p.push(m)) : (p.length > 0 && (e.eventQueue.unshift({
                                type: "notes",
                                tick: a,
                                noteEvents: p,
                                delay: 0,
                                delayTicks: 0
                            }),
                            p = []),
                            "noteOff" != m.subtype && (m.tick != a && (d.length > 0 && u.push({
                                type: "notes",
                                tick: a,
                                measureIndex: n.measure,
                                measure: n,
                                noteEvents: d
                            }),
                            d = [],
                            a = +m.tick),
                            d.push(m))),
                            t++
                        }
                        d.length > 0 && u.push({
                            type: "notes",
                            tick: a,
                            measureIndex: n.measure,
                            measure: n,
                            noteEvents: d
                        }),
                        u = e.bubble(u, (function(e, t) {
                            return +e.tick - t.tick
                        }
                        ));
                        var v = {};
                        u.forEach((function(e) {
                            if ("notes" == e.type) {
                                var t = {};
                                e.noteEvents.forEach((function(e) {
                                    "noteOn" == e.subtype && e.noteNumber && (t[e.noteNumber] = e.track,
                                    v[e.noteNumber] = e.track)
                                }
                                )),
                                e.notes = t
                            }
                        }
                        )),
                        n.notes = v,
                        e.eventQueue.push.apply(e.eventQueue, u)
                    }, u = 0; u < this.measureTicks.length; u++)
                        l(u);
                    this.eventQueue.push({
                        type: "end",
                        tick: s,
                        delayTicks: 0,
                        delay: 0
                    });
                    var h = 0
                      , c = 60 / this.DEFAULT_BPM * 1e6
                      , f = 0;
                    t = 0;
                    while (t < this.eventQueue.length - 1) {
                        var d = this.eventQueue[t];
                        d.time = f;
                        while (h < this.tempos.length && d.tick >= this.tempos[h].tick)
                            c = this.tempos[h].tempo,
                            h++;
                        "notes" == d.type && d.noteEvents.forEach((function(t) {
                            "noteOn" == t.subtype && (t.delay = e.ticksToMilliseconds(t.duration, c))
                        }
                        )),
                        d.delayTicks = this.eventQueue[t + 1].tick - d.tick,
                        d.delay = this.ticksToMilliseconds(d.delayTicks, c),
                        f += d.delay,
                        t++
                    }
                    if (t == this.eventQueue.length - 1) {
                        var p = this.eventQueue[t];
                        p.time = f,
                        p.delayTicks = 0,
                        p.delay = 0,
                        this.duration = f,
                        this.refreshState("duration", this.getDuration())
                    }
                }
            }, {
                key: "ticksToMilliseconds",
                value: function(e, t) {
                    return e / this.DEFAULT_QUATER_TICKS * t / 1e3
                }
            }, {
                key: "isTrackMute",
                value: function(e) {
                    return -1 != this.state.enabledTrack && this.state.enabledTrack != e
                }
            }, {
                key: "handleEvents",
                value: function(e) {
                    for (var t = this, i = function(i) {
                        var n = e[i]
                          , s = n.channel
                          , a = t.midiInterface.isTrackMute(n.track) || t.isTrackMute(n.track)
                          , r = t.midiInterface.getTrackVolume(n.track);
                        switch (n.subtype) {
                        case "controller":
                            t.midiInterface.setController(s, n.controllerType, n.value);
                            break;
                        case "programChange":
                            t.midiInterface.programChange(s, n.programNumber);
                            break;
                        case "pitchBend":
                            t.midiInterface.pitchBend(s, n.value);
                            break;
                        case "noteOn":
                            if (!a) {
                                var o = Math.round(n.velocity * r)
                                  , l = n.delay / t.state.speed / 1e3;
                                t.midiInterface.noteEvent(s, n.noteNumber + t.state.transposition, o, l),
                                t.onNoteOn(n);
                                var u = t;
                                setTimeout((function() {
                                    u.onNoteOff(n)
                                }
                                ), 1e3 * l)
                            }
                            break;
                        default:
                            break
                        }
                    }, n = 0; n < e.length; n++)
                        i(n)
                }
            }, {
                key: "onNoteOn",
                value: function(e) {
                    if (this.cursorCallback && void 0 != e.meas_start_tick) {
                        var t = e.tick - e.meas_start_tick
                          , i = this.measures[e.meas_start_tick]
                          , n = i.note_ticks;
                        if (0 == n.length)
                            return;
                        for (var s = 0, a = 1; a < n.length; a++) {
                            if (!(t >= n[a]))
                                break;
                            s++
                        }
                        this.cursorCallback(e.measure, s, 0)
                    }
                    this.noteCallback && void 0 != e.meas_start_tick && this.noteCallback(1, e.noteNumber, e.track),
                    this.waterfall && void 0 != e.meas_start_tick && this.waterfall.noteOn(e.noteNumber)
                }
            }, {
                key: "onNoteOff",
                value: function(e) {
                    this.noteCallback && void 0 != e.meas_start_tick && this.noteCallback(0, e.noteNumber, e.track),
                    this.waterfall && void 0 != e.meas_start_tick && this.waterfall.noteOff(e.noteNumber)
                }
            }, {
                key: "noteOn",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 480
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 127;
                    if (this.ready()) {
                        var s = this.ticksToMilliseconds(i);
                        this.midiInterface.noteOn(t, e, n, s / 1e3)
                    }
                }
            }, {
                key: "setMetronomeOn",
                value: function(e) {
                    this.refreshState("isMetronomeOn", e)
                }
            }, {
                key: "isMetronomeOn",
                value: function() {
                    return this.state.isMetronomeOn
                }
            }, {
                key: "ticktack",
                value: function(e) {
                    this.ready() && this.isPlaying() && this.state.isMetronomeOn && this.midiInterface.ticktack(e)
                }
            }, {
                key: "bubble",
                value: function(e, t) {
                    var i, n, s, a, r = e.length;
                    for (a = e.slice(0),
                    i = 0; i < r; i++)
                        for (n = r - 1; n > i; n--)
                            t(a[n], a[n - 1]) < 0 && (s = a[n - 1],
                            a[n - 1] = a[n],
                            a[n] = s);
                    return a
                }
            }, {
                key: "setWaterfall",
                value: function(e) {
                    this.waterfall = new p(e,this),
                    this.resetWaterfallEvents()
                }
            }, {
                key: "setWaterfallVisible",
                value: function(e) {
                    this.waterfallVisible = e,
                    this.maxGap = this.waterfallVisible ? 3e3 : 0,
                    this.waterfall && this.waterfall.setVisible(e)
                }
            }, {
                key: "resetWaterfallEvents",
                value: function() {
                    var e = []
                      , t = this.getCurrentTime() * this.getSpeed()
                      , i = this.nextIndex
                      , s = void 0;
                    while (i >= 0) {
                        var a = this.eventQueue[i];
                        if ("measure" == a.type) {
                            if (void 0 != s)
                                break;
                            s = a.measureIndex
                        }
                        i--
                    }
                    return this.waterfallInfo = {
                        next: Math.max(0, i)
                    },
                    e.push.apply(e, Object(n["a"])(this.addWaterfallEvents(t))),
                    this.waterfall.resetEvents(e),
                    e
                }
            }, {
                key: "addWaterfallEvents",
                value: function(e) {
                    var t = this.waterfallInfo.next
                      , i = [];
                    while (t < this.eventQueue.length) {
                        var n = this.eventQueue[t];
                        if ("measure" == n.type) {
                            if (n.time > e + this.maxGap * this.getSpeed())
                                break;
                            i.push(n),
                            t++
                        } else {
                            if ("end" == n.type) {
                                i.push(n),
                                t++;
                                break
                            }
                            "notes" == n.type ? (i.push(n),
                            t++) : t++
                        }
                    }
                    return this.waterfallInfo.next = t,
                    i
                }
            }, {
                key: "refreshWaterfallEvents",
                value: function(e) {
                    var t = this.getCurrentTime() * this.getSpeed()
                      , i = this.getCurrentMeasure() - 1
                      , n = 0;
                    while (n < e.length) {
                        if (e[n].measureIndex >= i)
                            break;
                        n++
                    }
                    var s = [];
                    return n > 0 && (s = e.splice(0, n)),
                    {
                        baseTime: t,
                        splice: s
                    }
                }
            }, {
                key: "getBaseGapTime",
                value: function() {
                    return this.maxGap * this.getSpeed()
                }
            }]),
            e
        }()
          , v = function() {
            function e(t) {
                Object(s["a"])(this, e),
                Object(r["a"])(this, "state", {}),
                this.signal = t,
                this.track = -1
            }
            return Object(a["a"])(e, [{
                key: "init",
                value: function() {
                    console.log("error invoke")
                }
            }, {
                key: "refreshState",
                value: function(e, t) {
                    this.state[e] != t && (this.state[e] = t,
                    this.signal.send("onUpdateState", {
                        data: this.state,
                        name: e
                    }))
                }
            }, {
                key: "placeTo",
                value: function(e, t) {
                    this.signal.send("onPlayerControl", {
                        type: "placeTo",
                        measure: e,
                        index: t
                    })
                }
            }, {
                key: "loopABMeasure",
                value: function(e, t) {
                    this.signal.send("onPlayerControl", {
                        type: "loopABMeasure",
                        loopStartMeasure: e,
                        loopEndMeasure: t
                    })
                }
            }, {
                key: "loopABMeasureAndIndex",
                value: function(e, t, i, n) {
                    this.signal.send("onPlayerControl", {
                        type: "loopABMeasure",
                        loopStartMeasure: e,
                        loopStartIndex: t,
                        loopEndMeasure: i,
                        loopEndIndex: n
                    })
                }
            }, {
                key: "loopABCancel",
                value: function() {
                    this.signal.send("onPlayerControl", {
                        type: "loopABCancel"
                    })
                }
            }, {
                key: "resetPlay",
                value: function() {
                    console.log("error invoke")
                }
            }, {
                key: "setEnabledTrack",
                value: function(e) {
                    this.track = e,
                    this.signal.send("onPlayerControl", {
                        type: "setEnabledTrack",
                        track: e
                    })
                }
            }, {
                key: "getTrackCount",
                value: function() {
                    return this.trackCount
                }
            }, {
                key: "setTrackCount",
                value: function(e) {
                    this.trackCount = e
                }
            }, {
                key: "getEnabledTrack",
                value: function() {
                    return this.track
                }
            }, {
                key: "moveToNextChord",
                value: function() {
                    this.signal.send("onPlayerControl", {
                        type: "moveToNextChord"
                    })
                }
            }, {
                key: "setMetronomeOn",
                value: function() {
                    console.log("error invoke")
                }
            }, {
                key: "setWaterfall",
                value: function() {
                    console.log("error invoke")
                }
            }, {
                key: "setWaterfallMode",
                value: function() {
                    console.log("error invoke")
                }
            }, {
                key: "setWaterfallVisible",
                value: function() {
                    console.log("error invoke")
                }
            }]),
            e
        }()
          , y = (i("c975"),
        i("a15b"),
        function() {
            function e(t) {
                if (Object(s["a"])(this, e),
                this.component = t,
                -1 != navigator.userAgent.indexOf("ccpiano-android") ? this.platform = "android" : -1 != navigator.userAgent.indexOf("ccpiano-ios") && (this.platform = "ios"),
                "ios" == this.platform) {
                    var i = console.log;
                    console.log = function() {
                        var e = Array.prototype.join.call(arguments, "");
                        i(e),
                        window.webkit.messageHandlers.logger.postMessage(e)
                    }
                }
            }
            return Object(a["a"])(e, [{
                key: "send",
                value: function(e, t) {
                    "ios" == this.platform ? window.webkit.messageHandlers[e].postMessage(JSON.stringify(t)) : "android" == this.platform ? window.android[e](JSON.stringify(t)) : this.component.$emit(e, t)
                }
            }, {
                key: "isApp",
                value: function() {
                    return "ios" == this.platform || "android" == this.platform
                }
            }]),
            e
        }())
          , g = i("c4e3")
          , b = i("1fb5")
          , x = i("66cb")
          , k = function() {
            function e(t, i, n) {
                Object(s["a"])(this, e),
                this.vue = t,
                this.viewCallback = i,
                this.signal = new y(t),
                this.nativeMode = !1,
                this.colorIds = new Map,
                this.appVersion = parseInt(n),
                isNaN(this.appVersion) && (this.appVersion = 0);
                var a = this;
                window.addEventListener("resize", (function() {
                    console.log("onResize"),
                    a.svgScore && (a.svgScore.onrotate(),
                    a.vue.$nextTick((function() {
                        a.refreshPosition()
                    }
                    )))
                }
                ), !1),
                window.onorientationchange = function() {
                    console.log("onResize111111111111"),
                    a.svgScore && (a.svgScore.onrotate(),
                    a.vue.$nextTick((function() {
                        a.refreshPosition()
                    }
                    )))
                }
                ,
                this.setUserScrollDisabled(!1)
            }
            return Object(a["a"])(e, [{
                key: "isFromApp",
                value: function() {
                    return this.signal.isApp()
                }
            }, {
                key: "setSvgScore",
                value: function(e) {
                    this.svgScore = e
                }
            }, {
                key: "setWaterfall",
                value: function(e) {
                    this.waterfall = e,
                    this.player && (this.player.setWaterfall(this.waterfall),
                    this.player.setWaterfallMode(this.waterfallMode)),
                    this.setWaterfallMode(this.waterfallMode)
                }
            }, {
                key: "setWaterfallMode",
                value: function(e) {
                    this.waterfallMode = e,
                    this.updateState({
                        waterfallMode: this.waterfallMode
                    }, "waterfallMode"),
                    this.viewCallback && this.viewCallback.onWaterfallMode(this.waterfallMode),
                    this.player && this.player.setWaterfallVisible(this.waterfallMode)
                }
            }, {
                key: "getWaterfallMode",
                value: function() {
                    return this.waterfallMode
                }
            },




            {
                key: "readTextFile",
                value: function(e, t, i,filename) {

                    this.readingMode = t;
                    var n = this
                      , s = new XMLHttpRequest;
                    s.open("GET", e, !0),
                    s.onload = function() {


                        n.readQUPU(s.response, i)
                    }
                    ,
                    s.onerror = function() {
                        console.log("request error:", s.status, ",", s.statusText)
                    }
                    ,
                    s.send()




                }
            }, {
                key: "readQUPU",
                value: function(e, t) {

                 var s = JSON.parse(e);
                    t(s);

            }}, {
                key: "setDataCallback",
                value: function(e) {
                    this.callback = e
                }
            }, {
                key: "setupXml",
                value: function(e) {
                    var t = b.toByteArray(e)
                      , i = new TextDecoder("utf-8").decode(t)
                      , n = JSON.parse(i);
                    this.callback && this.callback(n),
                    this.player = new v(this.signal),
                    this.nativeMode = !0,
                    this.svgScore && this.updateState({
                        pageCount: this.svgScore.getPages().length
                    }, "pageCount")
                }
            }, {
                key: "initPlayer",
                value: function(e) {
                    var t = this;
                    this.player = new m((function(e, i) {
                        t.onStateCallback(e, i)
                    }
                    ),(function(e, i) {
                        t.onMeasureCallback(e, i)
                    }
                    ),(function(e, i, n) {
                        t.onNoteCallback(e, i, n)
                    }
                    ),(function(e, i, n) {
                        t.onCursorCallback(e, i, n)
                    }
                    )),
                    this.nativeMode = !1,
                    this.player.init(JSON.parse(e)),
                    this.waterfall && (this.player.setWaterfall(this.waterfall),
                    this.player.setWaterfallVisible(this.waterfallMode)),
                    this.svgScore && this.updateState({
                        pageCount: this.svgScore.getPages().length
                    }, "pageCount"),
                    this.readingMode ? this.player.refreshState("inited", 2) : (this.player.refreshState("inited", 1),
                    console.log("loadsoundfont"),
                    this.player.loadSoundfont())
                }
            }, {
                key: "isPlayerReady",
                value: function() {
                    return !this.readingMode && this.player && this.player.ready()
                }
            }, {
                key: "onMeasureCallback",
                value: function(e, t) {
                    this.signal.send("onMeasureCallback", {
                        measure: e,
                        notes: t
                    })
                }
            }, {
                key: "onNoteCallback",
                value: function(e, t, i) {
                    this.signal.send("onNoteCallback", {
                        state: e,
                        note: t,
                        track: i
                    })
                }
            }, {
                key: "updateState",
                value: function(e, t) {
                    this.signal.send("onUpdateState", {
                        data: e,
                        name: t
                    })
                }
            }, {
                key: "onStateCallback",
                value: function(e, t) {
                    "inited" == t && console.log("inited"),
                    this.updateState(e, t)
                }
            }, {
                key: "onCursorCallback",
                value: function(e, t, i) {
                    if (-1 == e)
                        return this.showCursor(-1, 0, 0),
                        window.scrollTo(0, 0),
                        void (this.lastPos = null);
                    var n = this.showCursor(e, t, i)
                      , s = null != n || void 0 != n;
                    this.signal.send("onUpdateCursor", {
                        visible: s,
                        measureIndex: e,
                        noteIndex: t,
                        percent: i,
                        x: s ? n.x * this.svgScore.musScore.scale : 0,
                        y: s ? n.y * this.svgScore.musScore.scale : 0,
                        width: s ? n.width * this.svgScore.musScore.scale : 0,
                        height: s ? n.height * this.svgScore.musScore.scale : 0
                    }),
                    !n || this.lastPos && this.lastPos.y == n.y || this.autoScrollDisabled && e > 0 || (this.scrollToCursor(n),
                    this.lastPos = n)
                }
            }, {
                key: "onScrollToMeasure",
                value: function(e) {
                    if (-1 != e) {
                        var t = this.svgScore.musScore.posOf(e, -1, 0);
                        !t || this.lastPos && this.lastPos.y == t.y || this.autoScrollDisabled && e > 0 || (this.scrollToCursor(t),
                        this.lastPos = t)
                    } else
                        window.scrollTo(0, 0)
                }
            }, {
                key: "getOffsetTop",
                value: function(e) {
                    return e.offsetParent ? e.offsetTop + this.getOffsetTop(e.offsetParent) : e.offsetTop
                }
            }, {
                key: "scrollToCursor",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , i = this.getOffsetTop(this.svgScore.$el.parentElement)
                      , n = this.svgScore.getMeasureRect(0)
                      , s = i + (e.y - n.y) * this.svgScore.musScore.scale;
                    Math.abs(window.orientation) % 180 == 90 && (console.log("orientation=", window.orientation),
                    console.log("scale=", this.svgScore.musScore.scale),
                    console.log("document.documentElement.clientHeight=", document.documentElement.clientHeight),
                    s = i + e.y * this.svgScore.musScore.scale - (document.documentElement.clientHeight - e.height * this.svgScore.musScore.scale) / 2),
                    s = Math.max(0, s),
                    this.scrolling || (t ? this.scrollAnimation(window.scrollY, s) : window.scrollTo(0, s))
                }
            }, {
                key: "scrollAnimation",
                value: function(e, t) {
                    var i = this
                      , n = t - e
                      , s = e;
                    setTimeout((function() {
                        var a = Math.ceil(n / 10);
                        s += a,
                        window.scrollTo(0, e),
                        n > 10 || n < -10 ? (i.scrolling = !0,
                        i.scrollAnimation(s, t)) : (i.scrolling = !1,
                        window.scrollTo(0, t))
                    }
                    ), 1)
                }
            }, {
                key: "refreshPosition",
                value: function() {
                    this.lastPos && this.scrollToCursor(this.lastPos, !1)
                }
            }, {
                key: "playOrPause",
                value: function() {
                    this.player.isPlaying() ? this.player.pausePlay() : this.player.startPlay()
                }
            }, {
                key: "startPlay",
                value: function() {
                    this.player && !this.player.isPlaying() && this.player.startPlay()
                }
            }, {
                key: "pausePlay",
                value: function() {
                    this.player && this.player.isPlaying() && this.player.pausePlay()
                }
            }, {
                key: "isPlaying",
                value: function() {
                    return !!this.player && this.player.isPlaying()
                }
            }, {
                key: "onTouchStart",
                value: function(e) {
                    this.svgScore.onTouchStart(e)
                }
            }, {
                key: "onTouchEnd",
                value: function(e) {
                    this.svgScore.onTouchEnd(e)
                }
            }, {
                key: "onMouseDown",
                value: function(e) {
                    this.svgScore.onMouseDown(e)
                }
            }, {
                key: "onMouseUp",
                value: function(e) {
                    this.svgScore.onMouseUp(e)
                }
            }, {
                key: "clickmeas",
                value: function(e) {
                    if (console.log("touched measure, locked:", this.locked, ",covered:", this.covered),
                    void 0 != e && !this.userClickDisabled)
                        return this.loopABStep || this.userSeekDisabled ? void (this.nativeMode && this.appVersion < 1 ? this.loopAbClick(e) : this.loopAbClickNew(e)) : (this.player.placeTo(e.mm, e.nn),
                        void this.showCursor(e.mm, e.nn, 0))
                }
            }, {
                key: "loopAbClick",
                value: function(e) {
                    if (1 == this.loopABStep) {
                        this.loopABStart = e;
                        var t = this.svgScore.getMeasureRect(e.mm);
                        this.viewCallback.showLoop(t),
                        this.loopABStep = 2,
                        this.updateState({
                            loopABStep: this.loopABStep
                        }, "loopABStep")
                    } else if (2 == this.loopABStep) {
                        this.loopABEnd = e;
                        var i = this.loopABStart.mm < this.loopABEnd.mm || this.loopABStart.mm == this.loopABEnd.mm && this.loopABStart.nn < this.loopABEnd.nn ? this.loopABStart : this.loopABEnd
                          , n = this.loopABStart.mm < this.loopABEnd.mm || this.loopABStart.mm == this.loopABEnd.mm && this.loopABStart.nn < this.loopABEnd.nn ? this.loopABEnd : this.loopABStart
                          , s = this.getRectsBetweenMeasures(i.mm, n.mm);
                        this.viewCallback.showLoop(s),
                        this.player.loopABMeasure(i.mm, n.mm),
                        this.loopABStep = 3,
                        this.updateState({
                            loopABStep: this.loopABStep
                        }, "loopABStep")
                    }
                }
            }, {
                key: "loopAbClickNew",
                value: function(e) {
                    if (1 == this.loopABStep) {
                        this.loopABStart = e;
                        var t = this.svgScore.musScore.posOf(e.mm, e.nn, 0);
                        this.viewCallback.showLoop(t),
                        this.loopABStep = 2,
                        this.updateState({
                            loopABStep: this.loopABStep
                        }, "loopABStep")
                    } else if (2 == this.loopABStep) {
                        this.loopABEnd = e;
                        var i = this.loopABStart.mm < this.loopABEnd.mm || this.loopABStart.mm == this.loopABEnd.mm && this.loopABStart.nn < this.loopABEnd.nn ? this.loopABStart : this.loopABEnd
                          , n = this.loopABStart.mm < this.loopABEnd.mm || this.loopABStart.mm == this.loopABEnd.mm && this.loopABStart.nn < this.loopABEnd.nn ? this.loopABEnd : this.loopABStart
                          , s = this.getRectsBetweenCursor(i.mm, i.nn, n.mm, n.nn);
                        this.viewCallback.showLoop(s),
                        this.player.loopABMeasureAndIndex(i.mm, i.nn, n.mm, n.nn),
                        this.loopABStep = 3,
                        this.updateState({
                            loopABStep: this.loopABStep
                        }, "loopABStep")
                    }
                }
            }, {
                key: "loopABOn",
                value: function() {
                    this.loopABStep = 1,
                    this.updateState({
                        loopABStep: this.loopABStep
                    }, "loopABStep"),
                    this.viewCallback.showLoop()
                }
            }, {
                key: "loopABOff",
                value: function() {
                    this.loopABStep = 0,
                    this.updateState({
                        loopABStep: this.loopABStep
                    }, "loopABStep"),
                    this.svgScore.highlightMeasure([]),
                    this.player.loopABCancel(),
                    this.viewCallback.showLoop()
                }
            }, {
                key: "setLoopAll",
                value: function(e) {
                    this.player.setLoopAll(e)
                }
            }, {
                key: "isLoopAll",
                value: function() {
                    return this.player.isLoopAll()
                }
            }, {
                key: "setSpeed",
                value: function(e) {
                    this.player.setSpeed(e)
                }
            }, {
                key: "getSpeed",
                value: function() {
                    return this.player.getSpeed()
                }
            }, {
                key: "setTransposition",
                value: function(e) {
                    this.player.setTransposition(e)
                }
            }, {
                key: "getTransposition",
                value: function() {
                    return this.player.getTransposition()
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.player.setVolume(e)
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.player.getVolume()
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.player.getDuration()
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return Math.max(0, this.player.getCurrentTime())
                }
            }, {
                key: "seekTo",
                value: function(e) {
                    this.player.seekTo(e)
                }
            }, {
                key: "setJianpuMode",
                value: function(e) {
                    console.log("jianpu:", e),
                    "true" === e || !0 === e ? e = 1 : "false" !== e && !1 !== e || (e = 0),
                    this.svgScore.showJianpu(e),
                    this.updateState({
                        isJianpuMode: 0 != e
                    }, "isJianpuMode"),
                    this.updateState({
                        jianpuMode: e
                    }, "jianpuMode"),
                    this.viewCallback && this.viewCallback.onSetJianpuMode(e)
                }
            }, {
                key: "isJianpuMode",
                value: function() {
                    return 0 != this.svgScore.musScore.jianpu
                }
            }, {
                key: "getJianpuMode",
                value: function() {
                    return this.svgScore.musScore.jianpu
                }
            }, {
                key: "resetPlay",
                value: function() {
                    this.player.resetPlay(),
                    this.autoScrollDisabled || (this.showCursor(-1, 0, 0),
                    window.scrollTo(0, 0))
                }
            }, {
                key: "showCursor",
                value: function(e, t, i) {
                    if (this.svgScore) {
                        var n = -1 == e ? null : this.svgScore.showCursor(e, t, i);
                        return this.viewCallback && this.viewCallback.showCursor(n),
                        n
                    }
                }
            }, {
                key: "dropCursor",
                value: function() {
                    this.svgScore && this.viewCallback && this.viewCallback.showCursor(null)
                }
            }, {
                key: "setCursorVisibility",
                value: function(e) {
                    this.viewCallback && (1 == e || "true" == e ? this.viewCallback.showCursor() : this.viewCallback.hideCursor())
                }
            }, {
                key: "getTrackCount",
                value: function() {
                    return this.player.getTrackCount()
                }
            }, {
                key: "switchTrack",
                value: function() {
                    this.player.switchTrack(),
                    this.renewTrackColor()
                }
            }, {
                key: "setEnabledTrack",
                value: function(e, t) {
                    void 0 == t && null == t || this.player.setTrackCount(t),
                    this.player.setEnabledTrack(e),
                    this.renewTrackColor()
                }
            }, {
                key: "renewTrackColor",
                value: function() {
                    var e = this.player.getEnabledTrack()
                      , t = this.player.getTrackCount()
                      , i = [];
                    if (-1 != e)
                        for (var n = 0; n < t; n++)
                            n != e && i.push(n);
                    this.svgScore.setTrackStyle(i, {
                        color: "gray"
                    })
                }
            }, {
                key: "noteOn",
                value: function(e) {
                    this.player.noteOn(e)
                }
            }, {
                key: "moveToNextChord",
                value: function() {
                    var e = this.player.getCurrentMeasure()
                      , t = this.svgScore.getMeasureRect(e);
                    console.log("measure ", e),
                    this.scrollToCursor(t),
                    this.player.moveToNextChord()
                }
            }, {
                key: "setMetronomeOn",
                value: function(e) {
                    this.player.setMetronomeOn(e)
                }
            }, {
                key: "isMetronomeOn",
                value: function() {
                    return this.player.isMetronomeOn()
                }
            }, {
                key: "setScrollEnabled",
                value: function(e) {
                    this.userScrollDisabled = !e,
                    e ? (document.body.removeEventListener("touchmove", this.scrollListener, {
                        passive: !1
                    }),
                    document.body.removeEventListener("mousemove", this.scrollListener, {
                        passive: !1
                    }),
                    document.body.removeEventListener("scroll", this.scrollListener, {
                        passive: !1
                    }),
                    document.body.removeEventListener("wheel", this.scrollListener, {
                        passive: !1
                    })) : (document.body.addEventListener("touchmove", this.scrollListener, {
                        passive: !1
                    }),
                    document.body.addEventListener("mousemove", this.scrollListener, {
                        passive: !1
                    }),
                    document.body.addEventListener("scroll", this.scrollListener, {
                        passive: !1
                    }),
                    document.body.addEventListener("wheel", this.scrollListener, {
                        passive: !1
                    })),
                    this.updateState({
                        userScrollDisabled: !e
                    }, "userScrollDisabled")
                }
            }, {
                key: "setUserScrollDisabled",
                value: function(e) {
                    this.setScrollEnabled(!e)
                }
            }, {
                key: "setAutoScrollDisabled",
                value: function(e) {
                    this.autoScrollDisabled = e,
                    this.updateState({
                        autoScrollDisabled: e
                    }, "autoScrollDisabled")
                }
            }, {
                key: "setUserSeekDisabled",
                value: function(e) {
                    this.userSeekDisabled = e,
                    this.updateState({
                        userSeekDisabled: e
                    }, "userSeekDisabled")
                }
            }, {
                key: "setUserClickDisabled",
                value: function(e) {
                    this.userClickDisabled = e,
                    this.updateState({
                        userClickDisabled: e
                    }, "userClickDisabled")
                }
            }, {
                key: "isLocked",
                value: function() {
                    return this.locked
                }
            }, {
                key: "setLocked",
                value: function(e) {
                    this.locked = e,
                    this.setUserScrollDisabled(e),
                    this.setAutoScrollDisabled(e),
                    this.setUserSeekDisabled(e),
                    this.setUserClickDisabled(e),
                    this.updateState({
                        locked: e
                    }, "locked")
                }
            }, {
                key: "setCovered",
                value: function(e) {
                    this.covered = e,
                    this.setUserScrollDisabled(!1),
                    this.setAutoScrollDisabled(e),
                    this.setUserSeekDisabled(!1),
                    this.setUserClickDisabled(!1),
                    this.updateState({
                        covered: e
                    }, "covered"),
                    this.viewCallback && this.viewCallback.onCovered(e)
                }
            }, {
                key: "setShowMask",
                value: function(e) {
                    this.covered = e,
                    this.updateState({
                        covered: e
                    }, "covered"),
                    this.viewCallback && this.viewCallback.onCovered(e)
                }
            }, {
                key: "disableTouchSeek",
                value: function(e) {
                    this.setUserSeekDisabled(e)
                }
            }, {
                key: "scrollListener",
                value: function(e) {
                    e.preventDefault()
                }
            }, {
                key: "setNoteResult",
                value: function(e, t, i, n) {
                    if (this.viewCallback) {
                        var s = this.svgScore.musScore.posOf(i, n, 0);
                        this.viewCallback.onSetIndicator(e, {
                            pos: s,
                            result: t
                        })
                    }
                }
            }, {
                key: "setNoteResults",
                value: function(e) {
                    if (this.viewCallback) {
                        for (var t = b.toByteArray(e), i = new TextDecoder("utf-8").decode(t), s = JSON.parse(i), a = {}, r = 0; r < s.chords.length; r++) {
                            var o = s.chords[r];
                            a[o[0]] = {
                                pos: this.svgScore.musScore.posOf(o[2], o[3], 0),
                                result: o[1]
                            }
                        }
                        for (var l = [], u = [], h = 0; h < s.messy.length; h++) {
                            var c = s.messy[h]
                              , f = this.svgScore.musScore.posOf(c.start[0], c.start[1], 0)
                              , d = this.svgScore.musScore.posOf(c.end[0], c.end[1], 0);
                            l.push({
                                start: {
                                    x: f.x,
                                    y: f.y,
                                    height: f.height
                                },
                                end: {
                                    x: d.x + 20,
                                    y: d.y,
                                    height: d.height
                                }
                            });
                            var p = this.getRectsBetweenCursor(c.start[0], c.start[1], c.end[0], c.end[1]);
                            u.push.apply(u, Object(n["a"])(p))
                        }
                        this.viewCallback.onSetIndicators(a, l, u)
                    }
                }
            }, {
                key: "getRectsBetweenCursor",
                value: function(e, t, i, n) {
                    var s = []
                      , a = {
                        start: this.svgScore.musScore.posOf(e, t, 0),
                        end: this.svgScore.musScore.posOf(i, n, 0)
                    }
                      , r = this.svgScore.getMeasureRect(e)
                      , o = this.svgScore.getMeasureRect(i);
                    if (r.y == o.y)
                        s.push({
                            x: a.start.x,
                            y: a.start.y,
                            width: a.end.x - a.start.x + 20,
                            height: a.start.height
                        });
                    else
                        for (var l = a.start.x, u = a.start.x, h = a.start.y, c = e; c <= i; c++) {
                            var f = this.svgScore.getMeasureRect(c);
                            if (f.y == h)
                                u = f.x + f.width;
                            else if (s.push({
                                x: l,
                                y: h,
                                width: u - l,
                                height: f.height
                            }),
                            h = f.y,
                            l = f.x,
                            h == o.y) {
                                u = a.end.x,
                                s.push({
                                    x: l + 20,
                                    y: h,
                                    width: u - l,
                                    height: f.height
                                });
                                break
                            }
                        }
                    return s
                }
            }, {
                key: "getRectsBetweenMeasures",
                value: function(e, t) {
                    var i = []
                      , n = this.svgScore.getMeasureRect(e)
                      , s = this.svgScore.getMeasureRect(t);
                    if (n.y == s.y)
                        i.push({
                            x: n.x,
                            y: n.y,
                            width: s.x + s.width - n.x,
                            height: n.height
                        });
                    else
                        for (var a = n.x, r = n.x, o = n.y, l = e; l <= t; l++) {
                            var u = this.svgScore.getMeasureRect(l);
                            if (u.y == o)
                                r = u.x + u.width;
                            else if (i.push({
                                x: a,
                                y: o,
                                width: r - a,
                                height: u.height
                            }),
                            o = u.y,
                            a = u.x,
                            o == s.y) {
                                r = s.x + s.width,
                                i.push({
                                    x: a,
                                    y: o,
                                    width: r - a,
                                    height: u.height
                                });
                                break
                            }
                        }
                    return i
                }
            }, {
                key: "clearNoteIndicator",
                value: function() {
                    this.viewCallback && this.viewCallback.onClearIndicator()
                }
            }, {
                key: "setBackgroundColor",
                value: function(e) {
                    this.viewCallback && this.viewCallback.onSetBackgroundColor(e)
                }
            }, {
                key: "setNoteColor",
                value: function(e, t) {
                    var i = this;
                    if ("" != e) {
                        var n = e.split(",");
                        n.forEach((function(e) {
                            i.colorIds.set(e, t)
                        }
                        )),
                        this.svgScore.setNoteColor(n, x(t)),
                        this.svgScore.setStemColor(n, x(t))
                    }
                }
            }, {
                key: "removeNoteColor",
                value: function(e) {
                    var t = this;
                    if ("" != e) {
                        var i = e.split(",");
                        i.forEach((function(e) {
                            t.colorIds.delete(e)
                        }
                        )),
                        this.svgScore.setNoteColor(i),
                        this.svgScore.setStemColor(i)
                    }
                }
            }, {
                key: "resetNoteColor",
                value: function() {
                    var e = [];
                    this.colorIds.forEach((function(t, i) {
                        e.push(i)
                    }
                    )),
                    this.colorIds.clear(),
                    this.svgScore.setNoteColor(e),
                    this.svgScore.setStemColor(e)
                }
            }]),
            e
        }()
    },
    cccf: function(e, t, i) {
        "use strict";
        var n, s, a, r, o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                ref: "container",
                attrs: {
                    id: "container"
                },
                on: {
                    mousedown: e.onMouseDown,
                    mouseup: e.onMouseUp
                }
            }, [e.score && !e.waterfallMode ? n("SvgScore", {
                ref: "svgScore",
                attrs: {
                    score: e.score,
                    config: {
                        display: "onepage",
                        showall: !0,
                        displayParam: {
                            paged: e.paged,
                            jianpu: e.jianpu,
                            showVersion: e.showVersion,
                            noPrintWatermark: e.noPrintWatermark,
                            noPrintQrcode: e.noPrintQrcode
                        }
                    },
                    lineh: e.lineh
                },
                on: {
                    svgmounted: e.svgmounted,
                    svgrendered: e.svgrendered,
                    clickmeas: e.clickmeas
                },
                scopedSlots: e._u([{
                    key: "background",
                    fn: function() {
                        return [0 != e.svgWidth ? n("rect", {
                            key: "background",
                            staticClass: "noprint",
                            attrs: {
                                x: 0,
                                y: 0,
                                width: e.svgWidth,
                                height: e.svgHeight,
                                fill: e.backgroundColor,
                                opacity: e.backgroundAlpha
                            }
                        }) : e._e(), e.messyRects ? [e._l(e.messyRects, (function(t, i) {
                            return [n("g", {
                                key: "messyRects" + i,
                                staticClass: "noprint"
                            }, [n("rect", {
                                attrs: {
                                    fill: "#ffcccc",
                                    x: t.x,
                                    y: t.y - 2 * e.lineh,
                                    width: t.width,
                                    height: t.height + 4 * e.lineh
                                }
                            })])]
                        }
                        ))] : e._e(), e.loopRects ? [e._l(e.loopRects, (function(e, t) {
                            return [n("g", {
                                key: "loopRects" + t,
                                staticClass: "noprint"
                            }, [n("rect", {
                                attrs: {
                                    fill: "#e6ffee",
                                    x: e.x,
                                    y: e.y,
                                    width: e.width,
                                    height: e.height
                                }
                            })])]
                        }
                        ))] : e._e()]
                    },
                    proxy: !0
                }, {
                    key: "cursorbg",
                    fn: function() {
                        return [e.cursorPos && 0 != e.cursorPos.height && !0 !== e.hideCursor ? n("rect", e._b({
                            staticClass: "noprint",
                            attrs: {
                                width: 1.5 * e.lineh,
                                x: e.cursorPos.x,
                                y: e.cursorPos.y - 2 * e.lineh,
                                height: e.cursorPos.height + 4 * e.lineh,
                                rx: .75 * e.lineh,
                                ry: .75 * e.lineh,
                                fill: "rgba(251,121,127,0.6)"
                            }
                        }, "rect", e.cursorPos, !1)) : e._e()]
                    },
                    proxy: !0
                }, {
                    key: "foreground",
                    fn: function() {
                        return [e.messy ? [e._l(e.messy, (function(t, i) {
                            return [t.start ? n("g", e._b({
                                key: "messystart" + i,
                                staticClass: "noprint"
                            }, "g", t.start, !1), [n("line", {
                                attrs: {
                                    stroke: "#ee7487",
                                    x1: t.start.x,
                                    x2: t.start.x,
                                    y1: t.start.y - 4 * e.lineh,
                                    y2: t.start.y + t.start.height + 4 * e.lineh,
                                    "stroke-width": .6 * e.lineh
                                }
                            }), n("line", {
                                attrs: {
                                    stroke: "#ee7487",
                                    x1: t.start.x,
                                    x2: t.start.x + 2 * e.lineh,
                                    y1: t.start.y - 4 * e.lineh,
                                    y2: t.start.y - 4 * e.lineh,
                                    "stroke-width": .6 * e.lineh
                                }
                            }), n("line", {
                                attrs: {
                                    stroke: "#ee7487",
                                    x1: t.start.x,
                                    x2: t.start.x + 2 * e.lineh,
                                    y1: t.start.y + t.start.height + 4 * e.lineh,
                                    y2: t.start.y + t.start.height + 4 * e.lineh,
                                    "stroke-width": .6 * e.lineh
                                }
                            })]) : e._e(), t.end ? n("g", e._b({
                                key: "messyend" + i,
                                staticClass: "noprint"
                            }, "g", t.end, !1), [n("line", {
                                attrs: {
                                    stroke: "#ee7487",
                                    x1: t.end.x,
                                    x2: t.end.x,
                                    y1: t.end.y - 4 * e.lineh,
                                    y2: t.end.y + t.end.height + 4 * e.lineh,
                                    "stroke-width": .6 * e.lineh
                                }
                            }), n("line", {
                                attrs: {
                                    stroke: "#ee7487",
                                    x1: t.end.x,
                                    x2: t.end.x - 2 * e.lineh,
                                    y1: t.end.y - 4 * e.lineh,
                                    y2: t.end.y - 4 * e.lineh,
                                    "stroke-width": .6 * e.lineh
                                }
                            }), n("line", {
                                attrs: {
                                    stroke: "#ee7487",
                                    x1: t.end.x,
                                    x2: t.end.x - 2 * e.lineh,
                                    y1: t.end.y + t.end.height + 4 * e.lineh,
                                    y2: t.end.y + t.end.height + 4 * e.lineh,
                                    "stroke-width": .6 * e.lineh
                                }
                            })]) : e._e()]
                        }
                        ))] : e._e(), e.loopARect ? n("g", e._b({
                            staticClass: "noprint"
                        }, "g", e.loopARect, !1), [n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopARect.x - .2 * e.lineh,
                                x2: e.loopARect.x - .2 * e.lineh,
                                y1: e.loopARect.y,
                                y2: e.loopARect.y + e.loopARect.height,
                                "stroke-width": .6 * e.lineh
                            }
                        }), n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopARect.x + .5 * e.lineh,
                                x2: e.loopARect.x + .5 * e.lineh,
                                y1: e.loopARect.y,
                                y2: e.loopARect.y + e.loopARect.height,
                                "stroke-width": .2 * e.lineh
                            }
                        }), n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopARect.x + 1 * e.lineh,
                                x2: e.loopARect.x + 1 * e.lineh,
                                y1: e.loopARect.y + 1.5 * e.lineh,
                                y2: e.loopARect.y + 1.5 * e.lineh,
                                "stroke-width": .4 * e.lineh,
                                "stroke-linecap": "round"
                            }
                        }), n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopARect.x + 1 * e.lineh,
                                x2: e.loopARect.x + 1 * e.lineh,
                                y1: e.loopARect.y + 2.5 * e.lineh,
                                y2: e.loopARect.y + 2.5 * e.lineh,
                                "stroke-width": .4 * e.lineh,
                                "stroke-linecap": "round"
                            }
                        }), n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopARect.x + 1 * e.lineh,
                                x2: e.loopARect.x + 1 * e.lineh,
                                y1: e.loopARect.y + e.loopARect.height - 2.5 * e.lineh,
                                y2: e.loopARect.y + e.loopARect.height - 2.5 * e.lineh,
                                "stroke-width": .4 * e.lineh,
                                "stroke-linecap": "round"
                            }
                        }), n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopARect.x + 1 * e.lineh,
                                x2: e.loopARect.x + 1 * e.lineh,
                                y1: e.loopARect.y + e.loopARect.height - 1.5 * e.lineh,
                                y2: e.loopARect.y + e.loopARect.height - 1.5 * e.lineh,
                                "stroke-width": .4 * e.lineh,
                                "stroke-linecap": "round"
                            }
                        })]) : e._e(), e.loopBRect ? n("g", e._b({
                            staticClass: "noprint"
                        }, "g", e.loopBRect, !1), [n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopBRect.x + e.loopBRect.width + .2 * e.lineh,
                                x2: e.loopBRect.x + e.loopBRect.width + .2 * e.lineh,
                                y1: e.loopBRect.y,
                                y2: e.loopBRect.y + e.loopBRect.height,
                                "stroke-width": .6 * e.lineh
                            }
                        }), n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopBRect.x + e.loopBRect.width - .5 * e.lineh,
                                x2: e.loopBRect.x + e.loopBRect.width - .5 * e.lineh,
                                y1: e.loopBRect.y,
                                y2: e.loopBRect.y + e.loopBRect.height,
                                "stroke-width": .2 * e.lineh
                            }
                        }), n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopBRect.x + e.loopBRect.width - 1 * e.lineh,
                                x2: e.loopBRect.x + e.loopBRect.width - 1 * e.lineh,
                                y1: e.loopBRect.y + 1.5 * e.lineh,
                                y2: e.loopBRect.y + 1.5 * e.lineh,
                                "stroke-width": .4 * e.lineh,
                                "stroke-linecap": "round"
                            }
                        }), n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopBRect.x + e.loopBRect.width - 1 * e.lineh,
                                x2: e.loopBRect.x + e.loopBRect.width - 1 * e.lineh,
                                y1: e.loopBRect.y + 2.5 * e.lineh,
                                y2: e.loopBRect.y + 2.5 * e.lineh,
                                "stroke-width": .4 * e.lineh,
                                "stroke-linecap": "round"
                            }
                        }), n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopBRect.x + e.loopBRect.width - 1 * e.lineh,
                                x2: e.loopBRect.x + e.loopBRect.width - 1 * e.lineh,
                                y1: e.loopBRect.y + e.loopBRect.height - 2.5 * e.lineh,
                                y2: e.loopBRect.y + e.loopBRect.height - 2.5 * e.lineh,
                                "stroke-width": .4 * e.lineh,
                                "stroke-linecap": "round"
                            }
                        }), n("line", {
                            attrs: {
                                stroke: "#77ebbf",
                                x1: e.loopBRect.x + e.loopBRect.width - 1 * e.lineh,
                                x2: e.loopBRect.x + e.loopBRect.width - 1 * e.lineh,
                                y1: e.loopBRect.y + e.loopBRect.height - 1.5 * e.lineh,
                                y2: e.loopBRect.y + e.loopBRect.height - 1.5 * e.lineh,
                                "stroke-width": .4 * e.lineh,
                                "stroke-linecap": "round"
                            }
                        })]) : e._e(), n("g", {
                            staticClass: "noprint"
                        }, [e._l(e.noteIndicators, (function(t, s) {
                            return [1 == t.result ? [n("image", {
                                key: "indicator" + s,
                                attrs: {
                                    x: t.pos.x,
                                    y: t.pos.y - 3 * e.lineh,
                                    width: 1.5 * e.lineh,
                                    height: 1.5 * e.lineh,
                                    href: i("5237")
                                }
                            })] : e._e(), 0 == t.result ? [n("image", {
                                key: "indicator" + s,
                                attrs: {
                                    x: t.pos.x,
                                    y: t.pos.y - 3 * e.lineh,
                                    width: 1.5 * e.lineh,
                                    height: 1.5 * e.lineh,
                                    href: i("de55")
                                }
                            })] : e._e()]
                        }
                        ))], 2), e.musScore && e.covered ? n("g", [n("defs", [n("linearGradient", {
                            attrs: {
                                id: "gradient_start",
                                x1: "0%",
                                y1: "0%",
                                x2: "0%",
                                y2: "100%"
                            }
                        }, [n("stop", {
                            style: "stop-color:" + e.backgroundColor + ";stop-opacity:0",
                            attrs: {
                                offset: "0%"
                            }
                        }), n("stop", {
                            style: "stop-color:" + e.backgroundColor + ";stop-opacity:0.8",
                            attrs: {
                                offset: "50%"
                            }
                        }), n("stop", {
                            style: "stop-color:" + e.backgroundColor + ";stop-opacity:1",
                            attrs: {
                                offset: "70%"
                            }
                        }), n("stop", {
                            style: "stop-color:" + e.backgroundColor + ";stop-opacity:1",
                            attrs: {
                                offset: "100%"
                            }
                        })], 1), n("linearGradient", {
                            attrs: {
                                id: "gradient_main",
                                x1: "0%",
                                y1: "0%",
                                x2: "0%",
                                y2: "100%"
                            }
                        }, [n("stop", {
                            style: "stop-color:" + e.backgroundColor + ";stop-opacity:1",
                            attrs: {
                                offset: "0%"
                            }
                        }), n("stop", {
                            style: "stop-color:" + e.backgroundColor + ";stop-opacity:1",
                            attrs: {
                                offset: "70%"
                            }
                        }), n("stop", {
                            style: "stop-color:" + e.backgroundColor + ";stop-opacity:1",
                            attrs: {
                                offset: "100%"
                            }
                        })], 1)], 1), e._l(e.musScore.pages, (function(t, i) {
                            return [0 == i ? [n("rect", {
                                key: "shadow" + i,
                                staticStyle: {
                                    fill: "url(#gradient_start)"
                                },
                                attrs: {
                                    width: t.w,
                                    height: t.h,
                                    x: t.x,
                                    y: t.y
                                }
                            })] : i > 0 ? [n("rect", {
                                key: "shadow" + i,
                                staticStyle: {
                                    fill: "url(#gradient_main)"
                                },
                                attrs: {
                                    width: t.w,
                                    height: t.h,
                                    x: t.x,
                                    y: t.y
                                }
                            })] : e._e()]
                        }
                        ))], 2) : e._e()]
                    },
                    proxy: !0
                }], null, !1, 2303918760)
            }) : e._e(), n("canvas", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.score && e.waterfallMode,
                    expression: "score && waterfallMode"
                }],
                ref: "waterfall",
                staticClass: "waterfall"
            })], 1)
        }, l = [], u = i("2b0e"), h = (i("a4d3"),
        i("e01a"),
        i("d28b"),
        i("99af"),
        i("cb29"),
        i("4de4"),
        i("a630"),
        i("caad"),
        i("c975"),
        i("a15b"),
        i("d81d"),
        i("fb6a"),
        i("b0c0"),
        i("a9e3"),
        i("b64b"),
        i("d3b7"),
        i("ac1f"),
        i("5377"),
        i("25f0"),
        i("6062"),
        i("8a79"),
        i("2532"),
        i("3ca3"),
        i("38cf"),
        i("1276"),
        i("2ca0"),
        i("9911"),
        i("ddb0"),
        i("3835")), c = i("262e"), f = i("2caf"), d = i("2909"), p = i("b85c"), m = i("d4ec"), v = i("bee2");
        i("cca6");

        function y(e) {
            return function(e) {
                if (Array.isArray(e))
                    return b(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || g(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function g(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return b(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === i && e.constructor && (i = e.constructor.name),
                "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? b(e, t) : void 0
            }
        }

        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }

        function x(e, t) {
            var i;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (i = g(e)) || t && e && "number" == typeof e.length) {
                    i && (e = i);
                    var n = 0
                      , s = function() {};
                    return {
                        s: s,
                        n: function() {
                            return n >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[n++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: s
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, r = !0, o = !1;
            return {
                s: function() {
                    i = e[Symbol.iterator]()
                },
                n: function() {
                    var e = i.next();
                    return r = e.done,
                    e
                },
                e: function(e) {
                    o = !0,
                    a = e
                },
                f: function() {
                    try {
                        r || null == i.return || i.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
            }
        }
        !function(e) {
            e.slur = "slur",
            e.tied = "tied",
            e.tuplet = "tuplet",
            e.slide = "slide",
            e.tremolo = "tremolo",
            e.wavyLine = "wavy-line",
            e.glissando = "glissando"
        }(n || (n = {})),
        function(e) {
            e.tenuto = "tenuto",
            e.fermata = "fermata",
            e.accent_staccato = "accent_staccato",
            e.accent_tenuto = "accent_tenuto",
            e.detached_legato = "detached-legato",
            e.upBow = "up-bow",
            e.downBow = "down-bow",
            e.staccatissimo = "staccatissimo",
            e.spiccato = "spiccato",
            e.strongAccent = "strong-accent",
            e.scoop = "scoop",
            e.fingering = "fingering",
            e.arpeggiate = "arpeggiate",
            e.fret_string = "fret_string",
            e.staccato = "staccato",
            e.breathMark = "breath-mark"
        }(s || (s = {})),
        function(e) {
            e.Sharp = "Sharp",
            e.Flat = "Flat",
            e.Natural = "Natural",
            e.DoubleFlat = "DoubleFlat",
            e.DoubleSharp = "DoubleSharp"
        }(a || (a = {})),
        function(e) {
            e.Treble = "Treble",
            e.bass = "bass",
            e.bass3 = "Bass3",
            e.TAB = "TAB",
            e.Percussion = "Percussion",
            e.Treble8vb = "Treble8vb",
            e.Treble8va = "Treble8va"
        }(r || (r = {}));
        var k = function() {
            function e() {
                Object(m["a"])(this, e),
                this.inbeam = !1,
                this.tick = 0,
                this.type = 4,
                this.staff = 1,
                this.v = 1,
                this.x = 0,
                this.dots = 0,
                this.cue = !1,
                this.partIndex = 0,
                this.mm = 0,
                this.tails = 0
            }
            return Object(v["a"])(e, null, [{
                key: "newElem",
                value: function() {
                    return {
                        line: 0,
                        val: 0,
                        step: 0,
                        octave: 0
                    }
                }
            }, {
                key: "elemStaff",
                value: function(e, t) {
                    return t.staff || e.staff || 1
                }
            }, {
                key: "calcNoteElem",
                value: function(t, i, n) {
                    if (t.elems) {
                        var s, r = Object(p["a"])(t.elems);
                        try {
                            for (r.s(); !(s = r.n()).done; ) {
                                var o = s.value;
                                if (o.val) {
                                    var l = i[this.elemStaff(t, o)]
                                      , u = 0
                                      , h = e.noteInfos[n + 7][o.val % 12]
                                      , c = h[0]
                                      , f = Number(h[1])
                                      , d = Math.floor(o.val / 12);
                                    u = "Treble" === l ? f - 7 + 7 * (d - 5) : f - 7 + 7 * (d - 4) + 5,
                                    o.line = u;
                                    var m = "#" === c ? a.Sharp : "b" === c ? a.Flat : "n" === c ? a.Natural : null;
                                    m && (o.acc = {
                                        acc: m
                                    })
                                }
                            }
                        } catch (v) {
                            r.e(v)
                        } finally {
                            r.f()
                        }
                    }
                }
            }]),
            e
        }();
        k.uitool = !1,
        k.noteInfos = [["n1", " 2", "n2", " 3", " 4", "n4", " 5", "n5", " 6", "n6", " 7", " 1"], ["n1", " 2", "n2", " 3", "n3", " 4", " 5", "n5", " 6", "n6", " 7", " 1"], [" 1", " 2", "n2", " 3", "n3", " 4", " 5", "n5", " 6", "n6", " 7", "n7"], [" 1", " 2", "n2", " 3", "n3", " 4", "b5", " 5", " 6", "n6", " 7", "n7"], [" 1", "b2", " 2", " 3", "n3", " 4", "b5", " 5", " 6", "n6", " 7", "n7"], [" 1", "b2", " 2", " 3", "n3", " 4", "b5", " 5", "b6", " 6", " 7", "n7"], [" 1", "b2", " 2", "b3", " 3", " 4", "b5", " 5", "b6", " 6", " 7", "n7"], [" 1", "#1", " 2", "b3", " 3", " 4", "#4", " 5", "b6", " 6", "b7", " 7"], [" 1", "#1", " 2", "#2", " 3", "n4", " 4", " 5", "#5", " 6", "#6", " 7"], ["n1", " 1", " 2", "#2", " 3", "n4", " 4", " 5", "#5", " 6", "#6", " 7"], ["n1", " 1", " 2", "#2", " 3", "n4", " 4", "n5", " 5", " 6", "#6", " 7"], ["n1", " 1", "n2", " 2", " 3", "n4", " 4", "n5", " 5", " 6", "#6", " 7"], ["n1", " 1", "n2", " 2", " 3", "n4", " 4", "n5", " 5", "n6", " 6", " 7"], ["n1", " 1", "n2", " 2", "n3", " 3", " 4", "n5", " 5", "n6", " 6", " 7"], [" 7", " 1", "n2", " 2", "n3", " 3", " 4", "n5", " 5", "n6", " 6", "n7"]];
        var _ = function() {
            function e(t, i, n) {
                var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                Object(m["a"])(this, e),
                this.score = t,
                this.lines = i,
                this.lineh = n,
                this.oneline = s,
                this.continues = {},
                this.checkContinues()
            }
            return Object(v["a"])(e, [{
                key: "getContinueItem",
                value: function(e) {
                    return this.continues[e]
                }
            }, {
                key: "checkContinues",
                value: function() {
                    for (var e = 0; e < this.lines.length; e++)
                        for (var t = this.lines[e], i = 0; i < t.lineStaves.length; i++) {
                            var n = t.lineStaves[i]
                              , s = n.distances[n.distances.length - 1];
                            if (e < this.lines.length - 1) {
                                var a = this.lines[e + 1].lineStaves[i];
                                s = a.distances[a.distances.length - 1]
                            }
                            for (var r = n.parti, o = this.score.parts[r], l = [], u = 0, h = o.measures[t.m1].keyw || (6 + Math.abs(n.fifths)) * this.lineh, c = t.m1; c < t.m2; c++) {
                                var f = o.measures[c];
                                f.pdirs && this.continuePDirs(l, f.pdirs, t, u);
                                var d = c < o.measures.length - 1 && o.measures[c + 1].keyw || 0;
                                this.continueDirs(f, d, t, u),
                                this.continueSlurs(l, f, d, t, u, s, h),
                                f.ends && this.continueEnds(l, o, f, f.ends, t, n.fifths, u),
                                u += f.w
                            }
                            if (l.length > 0) {
                                var m, v = Object(p["a"])(l);
                                try {
                                    for (v.s(); !(m = v.n()).done; ) {
                                        var y = m.value
                                          , g = y.continueOffset ? y.continueOffset : 1
                                          , b = this.continues[e + g];
                                        b || (b = {},
                                        this.continues[e + g] = b);
                                        var x = b[r];
                                        x || (x = [],
                                        b[r] = x),
                                        x.push(y)
                                    }
                                } catch (k) {
                                    v.e(k)
                                } finally {
                                    v.f()
                                }
                            }
                        }
                }
            }, {
                key: "continueEnds",
                value: function(e, t, i, n, s, a, r) {
                    n.discontinue = !1,
                    n.m1 === s.m1 ? n.x1 = this.lineh * (Math.abs(a) + 6) : n.x1 = 0;
                    var o = i.w;
                    if (this.oneline && i.keyw && (o -= i.keyw),
                    n.m2 > n.m1)
                        for (var l = n.m1 + 1; l <= n.m2; l++) {
                            var u = t.measures[l];
                            if (o += u.w,
                            this.oneline && u.keyw && (o -= u.keyw),
                            l >= s.m2) {
                                n.stop = !1,
                                n.discontinue = !0,
                                o = s.w - r;
                                break
                            }
                        }
                    n.x2 = o - 5
                }
            }, {
                key: "continueDirs",
                value: function(e, t, i, n) {
                    if (e.dirs) {
                        var s, a = Object(p["a"])(e.dirs);
                        try {
                            for (a.s(); !(s = a.n()).done; ) {
                                var r = s.value;
                                "pedal" === r.type && r.line && (this.oneline ? (r.x1 = r.param.x - (e.keyw || 0),
                                r.stopx && (r.x2 = r.stopx - (e.keyw || 0),
                                t && r.x2 > e.w && (r.x2 = r.stopx - t))) : (r.x1 = r.param.x,
                                r.stopx && (r.x2 = r.stopx,
                                n + r.stopx - i.w > 0 && (r.x2 = i.w - n))))
                            }
                        } catch (o) {
                            a.e(o)
                        } finally {
                            a.f()
                        }
                    }
                }
            }, {
                key: "continuePDirs",
                value: function(e, t, i, n) {
                    var s, a = Object(p["a"])(t);
                    try {
                        for (a.s(); !(s = a.n()).done; ) {
                            var r = s.value;
                            if (r.x2 = r.stopx,
                            r.continueOffset = void 0,
                            !this.oneline) {
                                var o = n + r.x2 - i.w;
                                if (o > 0) {
                                    for (var l = 1; o > 0; ) {
                                        var u = o > i.w ? i.w : o;
                                        e.push(Object.assign(Object.assign({}, r), {
                                            x1: 8 * this.lineh,
                                            x2: u,
                                            y1: r.y2,
                                            continueOffset: l
                                        })),
                                        o -= i.w,
                                        l++
                                    }
                                    r.continueOffset = 0,
                                    r.x2 = i.w - n,
                                    r.y2 = r.y1
                                }
                            }
                        }
                    } catch (h) {
                        a.e(h)
                    } finally {
                        a.f()
                    }
                }
            }, {
                key: "slurPair",
                value: function(e, t, i, n) {
                    return {
                        type: "tied" === e.type ? "slur" : e.type,
                        slur: e,
                        notex: t,
                        notey: i,
                        staffDistance: n,
                        x1: e.x1,
                        y1: e.y1,
                        x2: e.x2,
                        y2: e.y2,
                        stopx: 0,
                        staff: 1
                    }
                }
            }, {
                key: "continueSlurs",
                value: function(e, t, i, n, s, a, r) {
                    if (t.notes) {
                        var o, l = Object(p["a"])(t.notes);
                        try {
                            for (l.s(); !(o = l.n()).done; ) {
                                var u = o.value;
                                if (u.elems)
                                    for (var h = (4 - u.elems[u.elems.length - 1].line) * this.lineh / 2, c = 0; c < u.elems.length; c++) {
                                        var f = u.elems[c];
                                        if (f.pairs) {
                                            var d = (4 - f.line) * this.lineh / 2
                                              , m = h
                                              , v = f.staff || u.staff || 1;
                                            v > 1 && (d += (4 * this.lineh + a) * (v - 1),
                                            m += (4 * this.lineh + a) * (v - 1));
                                            var y, g = Object(p["a"])(f.pairs);
                                            try {
                                                for (g.s(); !(y = g.n()).done; ) {
                                                    var b = y.value;
                                                    if ("slur" === b.type || "tied" === b.type || "wavy-line" === b.type) {
                                                        var x = s + b.x2 + u.x
                                                          , k = b.up && "slur" === b.type ? m : d;
                                                        if (b.contx && (b.contx = void 0,
                                                        b.conty = void 0),
                                                        this.oneline) {
                                                            i && b.x2 + u.x > t.w && (b.contx = b.x2 - i,
                                                            b.conty = b.y2);
                                                            continue
                                                        }
                                                        var _ = x - n.w - r;
                                                        if (0 === c && "tied" === b.type && x > n.w + this.lineh) {
                                                            var w = -(u.elems.length - 1.5) * this.lineh * 2.3;
                                                            v > 1 && (w += (4 * this.lineh + a) * (v - 1));
                                                            var S = Object.assign(Object.assign({}, b), {
                                                                x1: 0,
                                                                x2: _
                                                            })
                                                              , A = this.slurPair(S, r, w, a);
                                                            A.jianpu = !0,
                                                            e.push(A)
                                                        }
                                                        if (b.cx1 || b.cy1) {
                                                            var O = Object.assign(Object.assign({}, b), {
                                                                y1: b.y2,
                                                                x1: -10,
                                                                x2: _,
                                                                bx1: void 0,
                                                                by1: void 0
                                                            });
                                                            void 0 === b.bx2 && (O.bx1 = void 0,
                                                            O.by1 = void 0),
                                                            b.cy2 && (O.y1 = b.cy2),
                                                            void 0 !== b.contbx && (b.contbx = void 0,
                                                            b.contby = void 0),
                                                            O.x2 < O.x1 + 20 && (O.x1 = O.x2 - 1.5 * this.lineh,
                                                            O.bx1 = void 0,
                                                            O.by1 = void 0);
                                                            var T = this.slurPair(O, r, k, a);
                                                            e.push(T),
                                                            b.contx = b.cx1,
                                                            b.conty = b.cy1,
                                                            b.contbx = b.cbx1,
                                                            b.contby = b.cby1
                                                        } else if (x > n.w + 2 * this.lineh) {
                                                            var I = "slur" === b.type ? b.up ? -5 : 5 : 0
                                                              , j = Object.assign(Object.assign({}, b), {
                                                                y1: b.y2 + I,
                                                                x1: 0,
                                                                x2: _
                                                            })
                                                              , M = this.slurPair(j, r, k, a);
                                                            e.push(M),
                                                            b.contx = n.w - s - u.x,
                                                            b.conty = b.y1 + I
                                                        }
                                                    }
                                                }
                                            } catch (N) {
                                                g.e(N)
                                            } finally {
                                                g.f()
                                            }
                                        }
                                    }
                            }
                        } catch (N) {
                            l.e(N)
                        } finally {
                            l.f()
                        }
                    }
                }
            }]),
            e
        }()
          , w = function() {
            function e() {
                Object(m["a"])(this, e)
            }
            return Object(v["a"])(e, null, [{
                key: "calcScoreMargin",
                value: function(e, t) {
                    var i, n = Object(p["a"])(e.lines);
                    try {
                        for (n.s(); !(i = n.n()).done; ) {
                            var s, a = i.value, r = Object(p["a"])(a.lineStaves);
                            try {
                                for (r.s(); !(s = r.n()).done; ) {
                                    for (var o = s.value, l = 0, u = 4 * t, h = 1; h <= o.distances.length; h++)
                                        if (!(o.details && o.details[h] && o.details[h].hide)) {
                                            l = h,
                                            o.details && o.details[h] && 5 !== o.details[h].lines && (u = (o.details[h].lines - 1) * t);
                                            break
                                        }
                                    if (0 === l)
                                        u = 0;
                                    else
                                        for (var c = l; c < o.distances.length; c++)
                                            o.details && o.details[c + 1] && o.details[c + 1].hide || (u += o.distances[c] + 4 * t);
                                    o.height = u;
                                    for (var f = e.parts[o.parti], d = a.m1; d < a.m2; d++) {
                                        var m = f.measures[d];
                                        this._getMeasureRange(m, o, t)
                                    }
                                }
                            } catch (v) {
                                r.e(v)
                            } finally {
                                r.f()
                            }
                        }
                    } catch (v) {
                        n.e(v)
                    } finally {
                        n.f()
                    }
                    this.calcLineStaffRange(e, e.lines)
                }
            }, {
                key: "calcLineStaffRange",
                value: function(e, t) {
                    var i, n = Object(p["a"])(t);
                    try {
                        for (n.s(); !(i = n.n()).done; ) {
                            var s, a = i.value, r = Object(p["a"])(a.lineStaves);
                            try {
                                for (r.s(); !(s = r.n()).done; ) {
                                    var o = s.value;
                                    if (o.margin)
                                        return;
                                    for (var l = 0, u = 0, h = 0, c = 0, f = e.parts[o.parti], d = a.m1; d < a.m2; d++) {
                                        var m = f.measures[d].margin;
                                        m && (l = Math.max(l, m.top),
                                        u = Math.max(u, m.bottom),
                                        h = Math.max(h, m.topJp),
                                        c = Math.max(c, m.bottomJp))
                                    }
                                    o.margin = {
                                        top: l,
                                        bottom: u,
                                        topJp: h,
                                        bottomJp: c,
                                        yOrig: o.y
                                    }
                                }
                            } catch (v) {
                                r.e(v)
                            } finally {
                                r.f()
                            }
                        }
                    } catch (v) {
                        n.e(v)
                    } finally {
                        n.f()
                    }
                }
            }, {
                key: "_yOf",
                value: function(e, t, i, n) {
                    for (var s = 1; s < i.distances.length && s < t; s++)
                        e += i.distances[s] + 4 * n;
                    return e
                }
            }, {
                key: "_getNoteRange",
                value: function(e, t, i, n, s) {
                    var a = e.topy
                      , r = e.bottomy;
                    if (void 0 !== t.rest && 0 !== t.rest.line) {
                        var o = this._yOf(5 * (4 - t.rest.line), t.staff, i, n);
                        o - 10 < a && (a = o - 10),
                        o + 10 > r && (r = o + 10)
                    }
                    if (void 0 === t.elems)
                        return {
                            topy: a,
                            bottomy: r
                        };
                    if (s) {
                        if (a = Math.min(a, -(t.elems.length + 1) * n * 1.5),
                        void 0 !== t.v)
                            if (t.v > 0) {
                                var l = this._yOf(60, t.staff, i, n);
                                r = Math.max(r, l)
                            } else {
                                var u = this._yOf(-60, t.staff, i, n);
                                a = Math.min(a, u)
                            }
                        if (void 0 !== t.lyrics) {
                            var h, c = Object(p["a"])(t.lyrics);
                            try {
                                for (c.s(); !(h = c.n()).done; ) {
                                    var f = h.value;
                                    a = Math.min(a, f.param.y + 40 - 20),
                                    r = Math.max(r, f.param.y + 20)
                                }
                            } catch (E) {
                                c.e(E)
                            } finally {
                                c.f()
                            }
                        }
                        return {
                            topy: a,
                            bottomy: r
                        }
                    }
                    var d, m = Object(p["a"])(t.elems);
                    try {
                        for (m.s(); !(d = m.n()).done; ) {
                            var v = d.value
                              , y = this._yOf(5 * (4 - v.line), t.staff, i, n);
                            if (a = Math.min(a, y - 10),
                            r = Math.max(r, y + 10),
                            void 0 !== v.pairs) {
                                var g, b = Object(p["a"])(v.pairs);
                                try {
                                    for (b.s(); !(g = b.n()).done; ) {
                                        var x = g.value
                                          , k = y;
                                        if (x.up) {
                                            var _ = t.elems[t.elems.length - 1];
                                            k = this._yOf(5 * (4 - _.line), t.staff, i, n)
                                        }
                                        var w = "slur" === x.type || "tied" === x.type ? (x.x2 - x.x1) / 20 + 5 : 10
                                          , S = x.y1 + k
                                          , A = x.y2 + k;
                                        a = Math.min(a, S - w, A - w),
                                        r = Math.max(r, S + w, A + w)
                                    }
                                } catch (E) {
                                    b.e(E)
                                } finally {
                                    b.f()
                                }
                            }
                        }
                    } catch (E) {
                        m.e(E)
                    } finally {
                        m.f()
                    }
                    var O = this._yOf(5 * (4 - t.elems[0].line), t.staff, i, n);
                    if (void 0 !== t.stem && (a = Math.min(a, t.stem.y + O - 5),
                    r = Math.max(r, t.stem.y + O + 5)),
                    void 0 !== t.arts) {
                        var T, I = Object(p["a"])(t.arts);
                        try {
                            for (I.s(); !(T = I.n()).done; ) {
                                var j = T.value;
                                a = Math.min(a, j.y + O - 15),
                                r = Math.max(r, j.y + O + 15)
                            }
                        } catch (E) {
                            I.e(E)
                        } finally {
                            I.f()
                        }
                    }
                    if (void 0 !== t.lyrics) {
                        var M, N = Object(p["a"])(t.lyrics);
                        try {
                            for (N.s(); !(M = N.n()).done; ) {
                                var C = M.value;
                                a = Math.min(a, C.param.y + 40 - 20),
                                r = Math.max(r, C.param.y + 20)
                            }
                        } catch (E) {
                            N.e(E)
                        } finally {
                            N.f()
                        }
                    }
                    return {
                        topy: a,
                        bottomy: r
                    }
                }
            }, {
                key: "_getMeasureRange",
                value: function(e, t, i) {
                    var n = -25
                      , s = (t.height || 40) + 20
                      , a = t.clef && t.clef[1] === r.TAB;
                    if (void 0 !== e.dirs) {
                        var o, l = Object(p["a"])(e.dirs);
                        try {
                            for (l.s(); !(o = l.n()).done; ) {
                                var u = o.value
                                  , h = u.param.y;
                                void 0 !== h && (h = this._yOf(h, u.staff, t, i),
                                n = Math.min(n, h - 20),
                                s = Math.max(s, h + 20))
                            }
                        } catch (M) {
                            l.e(M)
                        } finally {
                            l.f()
                        }
                    }
                    if (void 0 !== e.pdirs) {
                        var c, f = Object(p["a"])(e.pdirs);
                        try {
                            for (f.s(); !(c = f.n()).done; ) {
                                var d = c.value
                                  , m = this._yOf(d.y1, d.staff, t, i)
                                  , v = this._yOf(d.y2, d.staff, t, i);
                                n = Math.min(n, m - 20, v - 20),
                                s = Math.max(s, m + 20, v + 20)
                            }
                        } catch (M) {
                            f.e(M)
                        } finally {
                            f.f()
                        }
                    }
                    if (void 0 !== e.ends) {
                        var y = e.ends.y;
                        n = Math.min(n, y - 20)
                    }
                    if (void 0 !== e.harmonys) {
                        var g, b = Object(p["a"])(e.harmonys);
                        try {
                            for (b.s(); !(g = b.n()).done; ) {
                                var x = g.value
                                  , k = this._yOf(x.y, x.staff, t, i);
                                a && (k -= 40),
                                n = Math.min(n, k - 20, k - 20)
                            }
                        } catch (M) {
                            b.e(M)
                        } finally {
                            b.f()
                        }
                    }
                    var _, w = n, S = s, A = Object(p["a"])(e.notes);
                    try {
                        for (A.s(); !(_ = A.n()).done; ) {
                            var O = _.value
                              , T = this._getNoteRange({
                                topy: n,
                                bottomy: s
                            }, O, t, i, !1);
                            n = Math.min(n, T.topy),
                            s = Math.max(s, T.bottomy);
                            var I = this._getNoteRange({
                                topy: w,
                                bottomy: S
                            }, O, t, i, !0);
                            w = Math.min(w, I.topy),
                            S = Math.max(S, I.bottomy)
                        }
                    } catch (M) {
                        A.e(M)
                    } finally {
                        A.f()
                    }
                    var j = t.height || 40;
                    e.margin = {
                        top: -n,
                        bottom: j < s ? s - j : 20,
                        topJp: -w,
                        bottomJp: j < S ? S - j : 20
                    }
                }
            }]),
            e
        }()
          , S = function() {
            function e() {
                Object(m["a"])(this, e)
            }
            return Object(v["a"])(e, null, [{
                key: "calMeasure",
                value: function(e, t, i, n) {
                    var s, a = [], r = 0, o = 0, l = Object(p["a"])(e.notes);
                    try {
                        for (l.s(); !(s = l.n()).done; ) {
                            var u = s.value;
                            a.includes(u.tick) || a.push(u.tick),
                            u.ticks = this.noteTicks[u.type],
                            u.dots && (u.ticks *= 1.5);
                            var h = u.tick + u.ticks;
                            if (r < h && (r = h),
                            u.elems) {
                                var c, f = i[u.staff], d = Object(p["a"])(u.elems);
                                try {
                                    for (d.s(); !(c = d.n()).done; ) {
                                        var m = c.value;
                                        m.id = "n_" + t + "_" + o,
                                        o++,
                                        m.val = 12 * (m.octave + 1) + this.valueOfStep[m.step] + (m.alter || 0),
                                        this.setElemLine(m, f),
                                        this.setElemAcc(m, n)
                                    }
                                } catch (b) {
                                    d.e(b)
                                } finally {
                                    d.f()
                                }
                            }
                            if (u.arts) {
                                var v, y = Object(p["a"])(u.arts);
                                try {
                                    for (y.s(); !(v = y.n()).done; ) {
                                        var g = v.value;
                                        void 0 === g.x && (g.x = 2),
                                        void 0 === g.y && (g.up ? g.y = -12 : g.y = 12)
                                    }
                                } catch (b) {
                                    y.e(b)
                                } finally {
                                    y.f()
                                }
                            }
                            u.tails = this.noteTails[u.type] || 0
                        }
                    } catch (b) {
                        l.e(b)
                    } finally {
                        l.f()
                    }
                    e.cols = a.length < 4 ? 4 : a.length,
                    e.ticks = r
                }
            }, {
                key: "setElemAcc",
                value: function(e, t) {
                    1 === e.alter ? t > 0 && 4 === e.step || t > 1 && 1 === e.step || t > 2 && 5 === e.step || t > 3 && 2 === e.step || t > 4 && 6 === e.step || t > 5 && 3 === e.step || t > 6 && 7 === e.step || (e.acc = {
                        acc: a.Sharp
                    }) : -1 === e.alter ? t < 0 && 7 === e.step || t < -1 && 3 === e.step || t < -2 && 6 === e.step || t < -3 && 2 === e.step || t < -4 && 5 === e.step || t < -5 && 1 === e.step || t < -6 && 4 === e.step || (e.acc = {
                        acc: a.Flat
                    }) : -2 === e.alter ? e.acc = {
                        acc: a.DoubleFlat
                    } : 2 === e.alter ? e.acc = {
                        acc: a.DoubleSharp
                    } : (t > 0 && 4 === e.step || t > 1 && 1 === e.step || t > 2 && 5 === e.step || t > 3 && 2 === e.step || t > 4 && 6 === e.step || t > 5 && 3 === e.step || t > 6 && 7 === e.step || t < 0 && 7 === e.step || t < -1 && 3 === e.step || t < -2 && 6 === e.step || t < -3 && 2 === e.step || t < -4 && 5 === e.step || t < -5 && 1 === e.step || t < -6 && 4 === e.step) && (e.acc = {
                        acc: a.Natural
                    })
                }
            }, {
                key: "setElemLine",
                value: function(e, t) {
                    e.line = e.step + 7 * (e.octave - 4),
                    t === r.Treble ? e.line -= 7 : t === r.bass && (e.line += 5)
                }
            }]),
            e
        }();
        S.valueOfStep = [0, 0, 2, 4, 5, 7, 9, 11],
        S.noteTicks = {
            0: 1920,
            2: 960,
            4: 480,
            8: 240,
            16: 120,
            32: 60,
            64: 30
        },
        S.noteTails = {
            8: 1,
            16: 2,
            32: 3,
            64: 4,
            128: 5,
            256: 6
        };
        var A = function() {
            function e() {
                Object(m["a"])(this, e)
            }
            return Object(v["a"])(e, null, [{
                key: "autoLayout",
                value: function(e) {
                    e.page || (e.page = {
                        l1: 0,
                        ls: 0,
                        x: 72,
                        y: 72,
                        w: 1200,
                        h: 1643
                    }),
                    e.lines || (e.measInfo = [],
                    this.genLines(e),
                    this.setNotePos(e),
                    this.setNotePairs(e))
                }
            }, {
                key: "genLines",
                value: function(e) {
                    var t = e.parts[0]
                      , i = [];
                    e.lines = i;
                    for (var n, s = t.measures.length, a = 100, o = .88 * e.page.w, l = 0, u = 0, h = {
                        1: r.Treble,
                        2: r.Treble
                    }, c = {
                        beatu: 4,
                        beats: 4
                    }, f = 0, d = 0; d < s; d++) {
                        var m = t.measures[d];
                        if (m.clefs) {
                            var v, y = Object(p["a"])(m.clefs);
                            try {
                                for (y.s(); !(v = y.n()).done; ) {
                                    var g = v.value;
                                    0 === g.tick && (h[g.staff] = g.clef)
                                }
                            } catch (_) {
                                y.e(_)
                            } finally {
                                y.f()
                            }
                        }
                        if (m.fifths && (f = m.fifths.fifths),
                        m.time && (c = m.time),
                        S.calMeasure(m, d, h, f),
                        (0 === d || u >= this.colsPerLine) && (n && (n.m2 = d,
                        l = d),
                        n = {
                            x: 0,
                            y: a,
                            w: o,
                            h: 200,
                            m1: l,
                            m2: 0,
                            distance: 100,
                            lineStaves: [{
                                staves: 2,
                                fifths: f,
                                parti: 0,
                                hidden: !1,
                                y: 10,
                                clef: {
                                    1: h[1],
                                    2: h[2]
                                },
                                time: 0 === d ? c : void 0,
                                distances: [0, 120]
                            }]
                        },
                        i.push(n),
                        a += 200,
                        u = 0),
                        m.clefs) {
                            var b, x = Object(p["a"])(m.clefs);
                            try {
                                for (x.s(); !(b = x.n()).done; ) {
                                    var k = b.value;
                                    h[k.staff] = k.clef
                                }
                            } catch (_) {
                                x.e(_)
                            } finally {
                                x.f()
                            }
                        }
                        m.fifths && (f = m.fifths.fifths),
                        m.time && (c = m.time),
                        u += m.cols || 4
                    }
                    n && (n.m2 = s),
                    console.log(e.lines)
                }
            }, {
                key: "nextColNote",
                value: function(e, t, i) {
                    var n, s = e.measures[t], a = s.notes[i];
                    return i < s.notes.length - 1 && (n = s.notes[i + 1],
                    (n.tick <= a.tick || n.staff !== a.staff) && (n = void 0)),
                    !n && t < e.measures.length - 1 && (s = e.measures[t],
                    n = s.notes[0]),
                    n
                }
            }, {
                key: "setNotePairs",
                value: function(e) {
                    var t, i = Object(p["a"])(e.parts);
                    try {
                        for (i.s(); !(t = i.n()).done; )
                            for (var s = t.value, a = 0; a < s.measures.length; a++)
                                for (var r = s.measures[a], o = 0; o < r.notes.length; o++) {
                                    var l = r.notes[o];
                                    if (l.elems) {
                                        var u, h = Object(p["a"])(l.elems);
                                        try {
                                            for (h.s(); !(u = h.n()).done; ) {
                                                var c = u.value;
                                                if ("begin" === c.tied || "endBegin" === c.tied) {
                                                    c.pairs || (c.pairs = []);
                                                    var f = this.nextColNote(s, a, o);
                                                    if (f && f.x > l.x) {
                                                        var d = {
                                                            x1: 0,
                                                            x2: f.x - l.x,
                                                            type: n.tied,
                                                            up: !1,
                                                            y1: 8,
                                                            y2: 8
                                                        };
                                                        console.log("next note:", d),
                                                        c.pairs.push(d)
                                                    }
                                                }
                                            }
                                        } catch (m) {
                                            h.e(m)
                                        } finally {
                                            h.f()
                                        }
                                    }
                                }
                    } catch (m) {
                        i.e(m)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "setNotePos",
                value: function(e) {
                    var t, i = e.parts[0], s = Object(p["a"])(e.lines);
                    try {
                        for (s.s(); !(t = s.n()).done; ) {
                            for (var a = t.value, r = 0, o = a.m1; o < a.m2; o++) {
                                var l = i.measures[o];
                                l.cols || 4,
                                r += l.ticks || 480
                            }
                            for (var u = 10 * Math.abs(a.lineStaves[0].fifths), h = a.w - this.keyW - u - 2 * (a.m2 - a.m1) * this.measMargin, c = a.m1; c < a.m2; c++) {
                                var f = i.measures[c];
                                (f.time || 0 === c) && (h -= this.beatW),
                                f.fifths && c > a.m1 && (h -= 10 * Math.abs(f.fifths.fifths))
                            }
                            for (var d = h / r, m = a.m1; m < a.m2; m++) {
                                var v = i.measures[m]
                                  , y = this.measMargin;
                                if (m === a.m1 && (y += this.keyW + u),
                                (0 === m || v.time) && (y += this.beatW),
                                m > a.m1 && v.fifths && (y += 10 * Math.abs(v.fifths.fifths)),
                                v.w = y + this.measMargin + d * (v.ticks || 480),
                                v.clefs) {
                                    var g, b = Object(p["a"])(v.clefs);
                                    try {
                                        for (b.s(); !(g = b.n()).done; ) {
                                            var x = g.value;
                                            void 0 === x.x && (0 === x.tick ? x.x = 0 : x.x = y + (x.tick || 0) * d)
                                        }
                                    } catch (P) {
                                        b.e(P)
                                    } finally {
                                        b.f()
                                    }
                                }
                                var k, _ = Object(p["a"])(v.notes);
                                try {
                                    for (_.s(); !(k = _.n()).done; ) {
                                        var w = k.value;
                                        if (w.x = y + w.tick * d,
                                        w.lyrics) {
                                            var S, A = 1, O = Object(p["a"])(w.lyrics);
                                            try {
                                                for (O.s(); !(S = O.n()).done; ) {
                                                    var T = S.value;
                                                    T.num || (T.num = A),
                                                    T.param || (T.param = {
                                                        x: w.x,
                                                        y: 50 + 30 * A
                                                    }),
                                                    A++
                                                }
                                            } catch (P) {
                                                O.e(P)
                                            } finally {
                                                O.f()
                                            }
                                        }
                                        if (w.elems) {
                                            var I, j = Object(p["a"])(w.elems);
                                            try {
                                                for (j.s(); !(I = j.n()).done; ) {
                                                    var M = I.value;
                                                    if ("begin" === M.tied || "endBegin" === M.tied) {
                                                        M.pairs || (M.pairs = []);
                                                        var N = {
                                                            x1: 0,
                                                            x2: 34,
                                                            type: n.tied,
                                                            up: !0,
                                                            y1: -8,
                                                            y2: -8
                                                        };
                                                        M.pairs.push(N)
                                                    }
                                                }
                                            } catch (P) {
                                                j.e(P)
                                            } finally {
                                                j.f()
                                            }
                                        }
                                    }
                                } catch (P) {
                                    _.e(P)
                                } finally {
                                    _.f()
                                }
                                if (null != v.dirs) {
                                    var C, E = Object(p["a"])(v.dirs);
                                    try {
                                        for (E.s(); !(C = E.n()).done; ) {
                                            var B = C.value;
                                            B.tick && (B.param = {
                                                x: y + B.tick * d,
                                                y: -20
                                            })
                                        }
                                    } catch (P) {
                                        E.e(P)
                                    } finally {
                                        E.f()
                                    }
                                }
                            }
                        }
                    } catch (P) {
                        s.e(P)
                    } finally {
                        s.f()
                    }
                }
            }]),
            e
        }();
        A.colsPerLine = 20,
        A.measMargin = 10,
        A.keyW = 50,
        A.beatW = 30;
        var O = function() {
            function e() {
                Object(m["a"])(this, e),
                this.rightHandTrack = 0,
                this.leftHandTrack = 1,
                this.measures = {},
                this.events = [],
                this.tracks = [{
                    program: 0,
                    channel: 0
                }, {
                    program: 0,
                    channel: 1
                }]
            }
            return Object(v["a"])(e, [{
                key: "genMidi",
                value: function(e) {
                    for (var t = e.parts[0], i = 0, n = 0; n < t.measures.length; n++) {
                        var s, a = t.measures[n], r = [], o = Object(p["a"])(a.notes);
                        try {
                            for (o.s(); !(s = o.n()).done; ) {
                                var l = s.value;
                                if (l.elems) {
                                    var u, h = Object(p["a"])(l.elems);
                                    try {
                                        for (h.s(); !(u = h.n()).done; ) {
                                            var c = u.value
                                              , f = {
                                                tick: i + l.tick,
                                                duration: l.ticks || 0,
                                                track: l.staff - 1,
                                                event: [128 + l.staff - 1, c.val || 0, 80],
                                                staff: l.staff,
                                                elem_ids: [c.id || "noid"],
                                                note: c.val || 0,
                                                meas_start_tick: i,
                                                part: 0,
                                                measure: n
                                            };
                                            this.events.push(f)
                                        }
                                    } catch (d) {
                                        h.e(d)
                                    } finally {
                                        h.f()
                                    }
                                    r.includes(l.tick) || r.push(l.tick)
                                }
                            }
                        } catch (d) {
                            o.e(d)
                        } finally {
                            o.f()
                        }
                        this.measures[i] = {
                            measure: n,
                            duration: a.ticks || 0,
                            note_ticks: r.sort()
                        },
                        i += a.ticks || 0
                    }
                }
            }], [{
                key: "genMidi",
                value: function(t) {
                    var i = new e;
                    return i.genMidi(t),
                    i
                }
            }]),
            e
        }()
          , T = [0, 4, 1, 5, 2, 6, 3, 0, 4, 1, 5, 2, 6, 3, 0]
          , I = Math.sqrt(2)
          , j = function() {
            function e(t, i, n) {
                Object(m["a"])(this, e),
                this.score = t,
                this.lineh = i,
                this.jpFifthsPos = {
                    x: 0,
                    y: 0
                },
                this.hiMeasures = [],
                this.svgSize = {
                    width: 0,
                    height: 0
                },
                this.jianpu = 0,
                this.scale = 1,
                this.continues = null,
                this.showTrackIndexs = null,
                this.addedNotes = null,
                this.display = "",
                this.onelineHead = {
                    x: 0,
                    mm: 0,
                    fifths: 0,
                    color: "white"
                },
                this.classroom = !1,
                A.autoLayout(t),
                this.autoMidi = O.genMidi(t),
                this.prefSize = {
                    onelineHeight: 0
                },
                w.calcScoreMargin(t, i),
                this.prefSize.onelineHeight = this._onelinePrefHeight(),
                n.classroom && (this.classroom = !0),
                n && n.w ? this.parentw = n.w : this.parentw = 3840,
                n && n.h ? this.parenth = n.h : this.parenth = 1080,
                n.uitool && (k.uitool = !0);
                var s = n ? n.display : null;
                this.measureInfos = [],
                this.pages = [],
                this.lines = t.lines,
                this.page = t.page,
                s && this.setDisplayMode(s, n.displayParam)
            }
            return Object(v["a"])(e, [{
                key: "clearNotes",
                value: function(e) {
                    e && this.addedNotes ? this.addedNotes = this.addedNotes.filter((function(t, i) {
                        return !(!t.elems || !t.elems[0].id) && !e.includes(t.elems[0].id)
                    }
                    )) : this.addedNotes = null
                }
            }, {
                key: "addNoteId",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , s = this.parseElemId(e);
                    s && this._addNoteMm(s.partIndex, s.mm, s.elemx + n, t, i, e, s.staff)
                }
            }, {
                key: "setHorpageMode",
                value: function(e) {
                    var t, i, n = e && e.hidetitle, s = !0;
                    e && e.noblank && (s = !1),
                    t = e && e.w ? e.w : this.parentw / 4,
                    i = e && e.h ? e.h : this.parenth;
                    var a = 0
                      , r = 0
                      , o = 0
                      , l = 0
                      , u = 0
                      , h = 0;
                    e && (e.margin && (a = e.margin.left ? e.margin.left : 0,
                    r = e.margin.right ? e.margin.right : 0),
                    e.padding && (o = e.padding.left || 0,
                    l = e.padding.right || 0,
                    t -= o + l,
                    u = e.padding.top || 0,
                    h = e.padding.bottom || 0,
                    i -= u + h));
                    var c = t / this.score.page.w;
                    t = this.score.page.w / 1,
                    i = i / c / 1,
                    o /= c,
                    l /= c,
                    u /= c,
                    h /= c,
                    this.scale = 1 * c;
                    var f = i / 25
                      , d = 0
                      , m = 0
                      , v = 0
                      , y = [];
                    if (this.pages = [],
                    !n) {
                        var g = this._creatHorPage(0, 0, t + a + r, i);
                        g.x += o,
                        g.y += u,
                        g.title = this.score.title,
                        g.titlex = .48 * t,
                        g.titley = .4 * i,
                        this.pages.push(g)
                    }
                    var b, x = Object(p["a"])(this.score.lines);
                    try {
                        for (x.s(); !(b = x.n()).done; ) {
                            var k = b.value
                              , _ = Object.assign({}, k)
                              , w = this._getLineHeight(_);
                            _.h = w.h,
                            _.bottomMargin = w.bottomMargin,
                            _.topMargin = w.topMargin,
                            y.push(_)
                        }
                    } catch (E) {
                        x.e(E)
                    } finally {
                        x.f()
                    }
                    for (var S = 0; S < y.length; S++) {
                        var A = y[S];
                        A.x += this.score.page.x,
                        m += A.h + (A.topMargin || 0) + (A.bottomMargin || 0);
                        var O = 0;
                        if (S < y.length - 1) {
                            var T = y[S + 1];
                            O = T.h + (T.topMargin || 0) + (T.bottomMargin || 0)
                        }
                        var I = S - v + 1;
                        if (m + (I + .5) * f + O > i || S === y.length - 1) {
                            this.pages.length > 0 && S === y.length - 1 && I < this.pages[this.pages.length - 1].ls ? d = Math.min(i / 10, (i - m) / (I + 1)) : (d = (i - m) / (I + 1),
                            this.classroom && (d -= 2.4 * this.lineh),
                            d > A.distance && I < 4 && I === y.length && (d = A.distance));
                            var j = .7 * d;
                            e && e.top ? j = e.top : this.classroom && (j += 2 * this.lineh);
                            for (var M = v; M <= S; M++) {
                                var N = y[M];
                                N.y = j + (N.topMargin || 0),
                                N.distance = d,
                                j += d + N.h,
                                N.topMargin && N.bottomMargin && (j += N.topMargin + N.bottomMargin)
                            }
                            m = 0;
                            var C = this._creatHorPage(v, S - v + 1, t + a + r, i);
                            C.x += o,
                            C.y += u,
                            this.pages.push(C),
                            v = S + 1
                        }
                    }
                    this.lines = y,
                    s || (this.pages.push(this._creatHorPage(0, 0, t, i)),
                    this.pages.length < 4 && this.pages.push(this._creatHorPage(0, 0, t, i))),
                    this.page = {
                        x: 0,
                        w: this.pages.length * (t + o + l),
                        h: i + u + h
                    }
                }
            }, {
                key: "showParts",
                value: function(e) {
                    this.showTrackIndexs = e,
                    this._updateDisplayMode()
                }
            }, {
                key: "getPrefSize",
                value: function(e) {
                    return this.showTrackIndexs = e,
                    this._onelinePrefHeight()
                }
            }, {
                key: "transposeKey",
                value: function(e, t) {
                    var i, n = this.lines, s = this.score.parts, a = t, r = Object(p["a"])(n);
                    try {
                        for (r.s(); !(i = r.n()).done; ) {
                            var o, l = i.value, u = 0, h = Object(p["a"])(l.lineStaves);
                            try {
                                for (h.s(); !(o = h.n()).done; ) {
                                    var c = o.value
                                      , f = s[c.parti];
                                    if (f.measures) {
                                        u = a !== c.fifths ? T[a + 7] - T[c.fifths + 7] : 6;
                                        for (var d = 10, m = (Math.abs(t) - Math.abs(e)) * d, v = -m / f.measures[l.m1].w, y = l.m1; y < l.m2 && !(y >= f.measures.length); y++) {
                                            var g = f.measures[y];
                                            if (g.notes) {
                                                var b, x = Object(p["a"])(g.notes);
                                                try {
                                                    for (x.s(); !(b = x.n()).done; ) {
                                                        var k = b.value;
                                                        if (y === l.m1 && (k.x += v * k.x + m),
                                                        k.elems) {
                                                            var _, w = Object(p["a"])(k.elems);
                                                            try {
                                                                for (w.s(); !(_ = w.n()).done; ) {
                                                                    var S = _.value;
                                                                    S.line += u;
                                                                    var A = S.step + u;
                                                                    A > 7 ? (S.octave += 1,
                                                                    A %= 7) : A < 0 && (S.octave -= 1,
                                                                    A = (7 + A) % 7),
                                                                    S.step = A
                                                                }
                                                            } catch (O) {
                                                                w.e(O)
                                                            } finally {
                                                                w.f()
                                                            }
                                                        }
                                                    }
                                                } catch (O) {
                                                    x.e(O)
                                                } finally {
                                                    x.f()
                                                }
                                            }
                                        }
                                        c.fifths = a
                                    }
                                }
                            } catch (O) {
                                h.e(O)
                            } finally {
                                h.f()
                            }
                        }
                    } catch (O) {
                        r.e(O)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "nextMmNn",
                value: function(e, t) {
                    if (!(e < 0 || e >= this.measureInfos.length)) {
                        if (t < this.measureInfos[e].notes.length - 1)
                            t += 1;
                        else {
                            if (!(e < this.measureInfos.length - 1))
                                return;
                            e += 1,
                            t = 0
                        }
                        return {
                            mm: e,
                            nn: t
                        }
                    }
                }
            }, {
                key: "posOf",
                value: function(e, t, i) {
                    if (0 === this.measureInfos.length && this.updateMeasurePos(),
                    !(e < 0 || e >= this.measureInfos.length)) {
                        var n = this.measureInfos[e]
                          , s = {
                            x: this.measurex(n),
                            y: n.pagey + n.liney,
                            height: n.h
                        }
                          , a = n.notes;
                        if (t < 0)
                            a.length > 0 ? s.x += a[0] + (n.w - a[0]) * i : s.x += n.w * i;
                        else if (t < a.length) {
                            if (s.x += a[t],
                            i) {
                                var r;
                                if (t < a.length - 1)
                                    r = a[t + 1] - a[t];
                                else if (r = n.w - a[t],
                                "oneline" === this.display && e < this.measureInfos.length - 1) {
                                    var o = this.measureInfos[e + 1].notes;
                                    o.length > 0 && (r += o[0])
                                }
                                s.x += r * i
                            }
                            0 === e && this.jianpu && (s.x -= 20)
                        }
                        return s
                    }
                }
            }, {
                key: "getTouchPos",
                value: function(e, t) {
                    e /= this.scale,
                    t /= this.scale;
                    for (var i = 0; i < this.measureInfos.length; i++) {
                        var n = this.measureInfos[i]
                          , s = this.measurex(n)
                          , a = n.liney + n.pagey - 20;
                        if (e > s && e < s + n.w && t > a && t < a + n.h + 20) {
                            for (var r = n.notes, o = 1; o < r.length; o++)
                                if (e < r[o] + s - 5)
                                    return {
                                        mm: i,
                                        nn: o - 1
                                    };
                            return {
                                mm: i,
                                nn: r.length - 1
                            }
                        }
                    }
                }
            }, {
                key: "getMueasurePos",
                value: function(e) {
                    if (e < this.measureInfos.length) {
                        var t = this.measureInfos[e];
                        return {
                            x: this.measurex(t),
                            y: t.liney,
                            w: t.w,
                            h: t.h
                        }
                    }
                }
            }, {
                key: "getNotePos",
                value: function(e) {
                    var t = this.parseElemId(e);
                    if (t) {
                        var i = this.measureInfos[t.mm]
                          , n = this.scale * (i.liney + t.elemy - this.lineh / 2);
                        return {
                            x: this.scale * (this.measurex(i) + t.elemx),
                            y: n,
                            w: this.lineh * this.scale,
                            h: this.lineh * this.scale
                        }
                    }
                }
            }, {
                key: "getNoteInfo",
                value: function(e) {
                    var t = this.parseElemId(e);
                    if (t) {
                        var i, n, s, a = this.measureInfos[t.mm], r = this.scale * (a.liney + t.elemy - this.lineh / 2), o = this.scale * (this.measurex(a) + t.elemx), l = this.score.parts[t.partIndex].measures[t.mm], u = 0, h = !1, c = 4, f = Object(p["a"])(l.notes);
                        try {
                            for (f.s(); !(s = f.n()).done; ) {
                                var d = s.value;
                                if (d.elems) {
                                    var m, v = !1, y = Object(p["a"])(d.elems);
                                    try {
                                        for (y.s(); !(m = y.n()).done; ) {
                                            var g = m.value;
                                            if (g.id === e) {
                                                v = !0,
                                                u = (4 - g.line) / 2,
                                                d.stem && ("up" === d.stem.type ? h = !0 : d.stem.up && (h = d.stem.up)),
                                                c = d.type,
                                                g.acc && "Natural" === g.acc.acc ? n = 0 : g.alter && (n = g.alter);
                                                break
                                            }
                                        }
                                    } catch (S) {
                                        y.e(S)
                                    } finally {
                                        y.f()
                                    }
                                    if (v) {
                                        if (d.arts) {
                                            var b, x = Object(p["a"])(d.arts);
                                            try {
                                                for (x.s(); !(b = x.n()).done; ) {
                                                    var k = b.value;
                                                    if ("fingering" === k.type && k.val) {
                                                        var _ = "fg_" + k.val + "_" + e;
                                                        if (k.id === _) {
                                                            i = {
                                                                id: _,
                                                                x: o + k.x,
                                                                y: r + k.y,
                                                                hide: k.hide,
                                                                val: k.val
                                                            },
                                                            2 === (d.hand || d.staff) && (i.val = -i.val);
                                                            break
                                                        }
                                                    }
                                                }
                                            } catch (S) {
                                                x.e(S)
                                            } finally {
                                                x.f()
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        } catch (S) {
                            f.e(S)
                        } finally {
                            f.f()
                        }
                        var w = {
                            type: c,
                            line: u,
                            stemUp: h,
                            pos: {
                                x: o,
                                y: r,
                                w: this.lineh * this.scale,
                                h: this.lineh * this.scale
                            }
                        };
                        return i && (w.finger = i),
                        void 0 !== n && (w.alter = n),
                        w
                    }
                }
            }, {
                key: "showStaffHead",
                value: function(e, t) {
                    if ("oneline" === this.display) {
                        for (var i = 0, n = this.lines[0], s = e - (this.pages[0].x + n.x), a = 0; a < this.measureInfos.length; a++) {
                            var r = this.measureInfos[a];
                            if (s < r.x)
                                break;
                            if (s >= r.x && s < r.x + r.w) {
                                i = a;
                                break
                            }
                        }
                        if (i < 1)
                            this.onelineHead.mm = 0;
                        else if (this.onelineHead.x = s,
                        t && (this.onelineHead.color = t),
                        (this.onelineHead ? this.onelineHead.mm : 0) !== i) {
                            var o, l = [], u = Object(p["a"])(this.lines);
                            try {
                                for (u.s(); !(o = u.n()).done; ) {
                                    var h, c = o.value, f = [], d = Object(p["a"])(c.lineStaves);
                                    try {
                                        for (d.s(); !(h = d.n()).done; ) {
                                            for (var m = h.value, v = this.score.parts[m.parti], y = {}, g = [], b = 0, x = i; x >= 0; x--) {
                                                var k = v.measures[x];
                                                if (k.clefs) {
                                                    var _, w = Object(p["a"])(k.clefs);
                                                    try {
                                                        for (w.s(); !(_ = w.n()).done; ) {
                                                            var S = _.value;
                                                            if (!y[S.staff] && (y[S.staff] = S.clef,
                                                            g.push(Object.assign(Object.assign({}, S), {
                                                                x: 0
                                                            })),
                                                            b += 1,
                                                            b >= m.staves))
                                                                break
                                                        }
                                                    } catch (A) {
                                                        w.e(A)
                                                    } finally {
                                                        w.f()
                                                    }
                                                    if (b >= m.staves)
                                                        break
                                                }
                                            }
                                            f.push({
                                                y: m.y,
                                                staves: m.staves,
                                                distances: m.distances,
                                                clefs: y,
                                                mclefs: g
                                            })
                                        }
                                    } catch (A) {
                                        d.e(A)
                                    } finally {
                                        d.f()
                                    }
                                    l.push({
                                        y: c.y,
                                        headStaves: f
                                    })
                                }
                            } catch (A) {
                                u.e(A)
                            } finally {
                                u.f()
                            }
                            this.onelineHead.mm = i,
                            this.onelineHead.time = this.prevTime(i),
                            this.onelineHead.fifths = this.prevFifths(i),
                            this.onelineHead.headLines = l
                        }
                    }
                }
            }, {
                key: "setNoteColor",
                value: function(e, t) {
                    var i, n = Object(p["a"])(e);
                    try {
                        for (n.s(); !(i = n.n()).done; ) {
                            var s = i.value
                              , a = this.parseElemId(s);
                            a && a.noteElem && u["a"].set(a.noteElem, "color", t)
                        }
                    } catch (r) {
                        n.e(r)
                    } finally {
                        n.f()
                    }
                }
            }, {
                key: "setStemColor",
                value: function(e, t) {
                    var i, n = Object(p["a"])(e);
                    try {
                        for (n.s(); !(i = n.n()).done; ) {
                            var s = i.value
                              , a = this.parseElemId(s);
                            a && a.note && a.note.stem && u["a"].set(a.note.stem, "color", t)
                        }
                    } catch (r) {
                        n.e(r)
                    } finally {
                        n.f()
                    }
                }
            }, {
                key: "addFlag",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.measureInfos) {
                        var t = e.mm || 0;
                        if ("beats" === e.type) {
                            var i = this.measureInfos[t]
                              , n = {
                                beats: this.prevTime(t).beats,
                                style: {
                                    color: e.color || "red",
                                    fontSize: e.fontSize || 20
                                }
                            };
                            i.flags = n
                        } else if ("meas" === e.type)
                            for (var s = this.score.parts[0].measures.length, a = 0; a < s; a++) {
                                var r = this.measureInfos[a];
                                t.includes(a) ? r.flags = null : e.color ? r.flags = {
                                    beats: 0,
                                    foreground: e.color
                                } : r.flags = null
                            }
                        else if ("rect" === e.type) {
                            var o, l, u = e.color || "rgb(200, 200, 210)", h = !1, c = Object(p["a"])(this.hiMeasures);
                            try {
                                for (c.s(); !(l = c.n()).done; ) {
                                    var f = l.value;
                                    if (f.mm === t) {
                                        o = f,
                                        o.fill = u,
                                        h = !0;
                                        break
                                    }
                                }
                            } catch (m) {
                                c.e(m)
                            } finally {
                                c.f()
                            }
                            if (!h) {
                                var d = this.measureInfos[t];
                                o = {
                                    x: this.measurex(d),
                                    y: d.pagey + d.liney,
                                    width: d.w,
                                    height: d.h,
                                    mm: t,
                                    fill: u
                                },
                                this.hiMeasures.push(o)
                            }
                        }
                    }
                }
            }, {
                key: "clearFlag",
                value: function(e) {
                    if (this.measureInfos)
                        if (void 0 !== e)
                            this.measureInfos[e].flags = null;
                        else {
                            var t, i = Object(p["a"])(this.measureInfos);
                            try {
                                for (i.s(); !(t = i.n()).done; ) {
                                    var n = t.value;
                                    n.flags = null
                                }
                            } catch (s) {
                                i.e(s)
                            } finally {
                                i.f()
                            }
                            this.hiMeasures = []
                        }
                }
            }, {
                key: "setDisplayMode",
                value: function(e, t) {
                    this.display = e,
                    this.displayParam = t,
                    t && void 0 !== t.tracks && (this.showTrackIndexs = t.tracks),
                    this._updateDisplayMode(),
                    this.continues = null;
                    var i = this.page.w + 2;
                    this.svgSize = {
                        width: i,
                        height: this.page.h
                    },
                    "onepage" !== e && "onepaged" !== e || (this.svgSize = {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 " + i + " " + this.page.h
                    })
                }
            }, {
                key: "getContinueItem",
                value: function(e) {
                    return this.continues || (this.continues = new _(this.score,this.lines,this.lineh,"oneline" === this.display)),
                    this.continues.getContinueItem(e)
                }
            }, {
                key: "getMeasureInfos",
                value: function(e) {
                    var t = this.lines[e];
                    return this.measureInfos.slice(t.m1, t.m2)
                }
            }, {
                key: "setJianpu",
                value: function(e, t) {
                    t ? (this.jianpu = 0,
                    this.setPartJianpu(e, t)) : this.jianpu = e,
                    this.setJianpuStaffY(0 === e),
                    this.continues = null
                }
            }, {
                key: "changeKey",
                value: function(e) {
                    var t, i = this.lines[0].lineStaves, n = Object(p["a"])(i);
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var s = t.value;
                            s.clef && "TAB" !== s.clef[1] && (s.fifths = e)
                        }
                    } catch (a) {
                        n.e(a)
                    } finally {
                        n.f()
                    }
                }
            }, {
                key: "setPartJianpu",
                value: function(e, t) {
                    for (var i = this.score.parts, n = 0; n < i.length; n++) {
                        var s = i[n]
                          , a = t.includes(n) ? e : 0;
                        void 0 === s.jianpu ? u["a"].set(s, "jianpu", a) : s.jianpu = a
                    }
                }
            }, {
                key: "setJianpuStaffY",
                value: function(e) {
                    var t, i, n, s, a, r, o = Object(p["a"])(this.lines);
                    try {
                        for (o.s(); !(r = o.n()).done; )
                            for (var l = r.value, u = 0, h = 0; h < l.lineStaves.length; h++) {
                                var c = l.lineStaves[h];
                                if (!c.hidden)
                                    if (e)
                                        c.y = (null === (t = c.margin) || void 0 === t ? void 0 : t.yOrig) || 0,
                                        h === l.lineStaves.length - 1 && (l.h = c.y + (c.height || 40));
                                    else {
                                        var f = this.jianpu || this.score.parts[c.parti].jianpu
                                          , d = c.margin;
                                        0 === u ? c.y = 0 : (u += f ? (null === (i = d) || void 0 === i ? void 0 : i.topJp) || 20 : (null === (n = d) || void 0 === n ? void 0 : n.top) || 20,
                                        c.y = u),
                                        u += c.height || 80,
                                        h === l.lineStaves.length - 1 && (l.h = u),
                                        u += f ? (null === (s = d) || void 0 === s ? void 0 : s.bottomJp) || 20 : (null === (a = d) || void 0 === a ? void 0 : a.bottom) || 20
                                    }
                            }
                    } catch (m) {
                        o.e(m)
                    } finally {
                        o.f()
                    }
                }
            }, {
                key: "prevTime",
                value: function(e) {
                    for (var t = this.score.parts[0], i = e; i >= 0; i--) {
                        var n = t.measures[i];
                        if (n.time)
                            return n.time
                    }
                    return {
                        beats: 4,
                        beatu: 4,
                        sym: ""
                    }
                }
            }, {
                key: "prevFifths",
                value: function(e) {
                    for (var t = this.score.parts[0], i = e; i >= 0; i--) {
                        var n = t.measures[i];
                        if (n.fifths)
                            return n.fifths.fifths
                    }
                    return 0
                }
            }, {
                key: "_updateDisplayMode",
                value: function() {
                    var e = this.display
                      , t = this.displayParam;
                    if ("oneline" === e)
                        this.setOnelineMode(t);
                    else if ("horpage" === e)
                        this.setHorpageMode(t);
                    else if ("onepage" === e)
                        this.setOnepageMode(t);
                    else if ("onepaged" === e) {
                        var i = document.documentElement.clientWidth;
                        this.setOnepageMode({
                            w: i,
                            paged: !0
                        })
                    }
                    if ("horpage" === e || "oneline" === e) {
                        var n = -4 * this.lineh
                          , s = 5 * -this.lineh
                          , a = this.score.parts[0].measures[0];
                        if (a.dirs) {
                            var r, o = Object(p["a"])(a.dirs);
                            try {
                                for (o.s(); !(r = o.n()).done; ) {
                                    var l = r.value;
                                    if ("metronome" === l.type) {
                                        n = l.param.x - 8 * this.lineh,
                                        s = l.param.y + .5 * this.lineh;
                                        break
                                    }
                                }
                            } catch (u) {
                                o.e(u)
                            } finally {
                                o.f()
                            }
                        }
                        this.jpFifthsPos = {
                            x: n,
                            y: s
                        }
                    } else
                        this.jpFifthsPos = {
                            x: (Math.abs(this.score.fifths) + 5) * this.lineh,
                            y: 12 * -this.lineh
                        };
                    this.updateMeasurePos()
                }
            }, {
                key: "updateMeasurePos",
                value: function() {
                    var e, t = [], i = this.score.parts[0].measures, n = Object(p["a"])(this.pages);
                    try {
                        for (n.s(); !(e = n.n()).done; )
                            for (var s = e.value, a = s.l1; a < s.l1 + s.ls; a++)
                                for (var r = this.lines[a], o = this.page.x + r.x, l = 0, u = r.m1; u < r.m2; u++) {
                                    var h = i[u]
                                      , c = h.w
                                      , f = this.score.measInfo[u];
                                    if ("oneline" === this.display && h.keyw) {
                                        c -= h.keyw;
                                        var d, m = [], v = Object(p["a"])(f);
                                        try {
                                            for (v.s(); !(d = v.n()).done; ) {
                                                var y = d.value;
                                                m.push(y - h.keyw)
                                            }
                                        } catch (g) {
                                            v.e(g)
                                        } finally {
                                            v.f()
                                        }
                                        f = m
                                    }
                                    t.push({
                                        pagex: s.x,
                                        pagey: s.y,
                                        x: l,
                                        w: c,
                                        h: r.h,
                                        linex: o,
                                        liney: r.y,
                                        mm: u,
                                        notes: f,
                                        info: h,
                                        flags: null
                                    }),
                                    l += c
                                }
                    } catch (g) {
                        n.e(g)
                    } finally {
                        n.f()
                    }
                    this.measureInfos = t
                }
            }, {
                key: "measurex",
                value: function(e) {
                    return e.x + e.linex + e.pagex
                }
            }, {
                key: "parseElemId",
                value: function(e) {
                    var t = e.split("_")
                      , i = 0
                      , n = 1;
                    t.length > 3 && (i = Number(t[n]),
                    n += 1);
                    var s = Number(t[n])
                      , a = this.score.parts[i];
                    if (a) {
                        var r, o, l, u = a.measures[s], h = 0, c = 0, f = 0, d = Object(p["a"])(u.notes);
                        try {
                            for (d.s(); !(l = d.n()).done; ) {
                                var m = l.value;
                                if (m.elems) {
                                    var v, y = Object(p["a"])(m.elems);
                                    try {
                                        for (y.s(); !(v = y.n()).done; ) {
                                            var g = v.value;
                                            g.id === e && (h = g.staff || m.staff,
                                            c = m.x,
                                            f = g.y || 0,
                                            o = g,
                                            r = m)
                                        }
                                    } catch (b) {
                                        y.e(b)
                                    } finally {
                                        y.f()
                                    }
                                    if (h)
                                        break
                                }
                            }
                        } catch (b) {
                            d.e(b)
                        } finally {
                            d.f()
                        }
                        return {
                            partIndex: i,
                            mm: s,
                            staff: h,
                            elemx: c,
                            elemy: f,
                            note: r,
                            noteElem: o
                        }
                    }
                }
            }, {
                key: "_addNoteMm",
                value: function(e, t, i, n, s, a, r) {
                    var o = new k;
                    o.partIndex = e,
                    o.mm = t,
                    o.x = i,
                    o.staff = r || 1;
                    var l = k.newElem();
                    l.val = n,
                    l.color = s,
                    l.id = a,
                    o.elems = [l],
                    this.addedNotes ? this.addedNotes = [].concat(Object(d["a"])(this.addedNotes), [o]) : this.addedNotes = [o]
                }
            }, {
                key: "setOnepageTitle",
                value: function(e, t, i) {
                    this.score.title && (e.title = this.score.title,
                    e.titlex = (t.x + t.w) / 2,
                    e.titley = 10 * this.lineh)
                }
            }, {
                key: "setOnepageMode",
                value: function(e) {
                    var t;
                    t = e && e.w ? e.w : document.documentElement.clientWidth;
                    var i = e && e.paged;
                    this.display = i ? "onepaged" : "onepage",
                    this.displayParam = e;
                    var n = !1
                      , s = Object.assign({}, this.score.page);
                    if (i) {
                        s.h = this.score.page.w * I;
                        var a, r = Object(p["a"])(this.score.lines);
                        try {
                            for (r.s(); !(a = r.n()).done; ) {
                                var o = a.value;
                                if (o.newpage) {
                                    n = !0;
                                    break
                                }
                            }
                        } catch (w) {
                            r.e(w)
                        } finally {
                            r.f()
                        }
                    }
                    this.scale = t / s.w,
                    t = s.w;
                    var l = s.h;
                    this.page = s;
                    var u = this.score.lines
                      , h = [];
                    this.pages = [];
                    var c = 0
                      , f = this.score.page.y
                      , d = null
                      , m = 10 * this.lineh
                      , v = f + 30;
                    this.score.title && (this.score.title.subtitle && (v += 30 * this.score.title.subtitle.split("\n").length),
                   this.score.title.composer && (v += 30 * this.score.title.composer.split("\n").length));
                    for (var y = 0; y < u.length; y++) {
                        var g = Object.assign({}, u[y])
                          , b = this._getLineHeight(g);
                        if (g.h = b.h,
                        g.bottomMargin = b.bottomMargin,
                        g.topMargin = b.topMargin,
                        g.x += s.x,
                        h.push(g),
                        i) {
                            if (0 === y && g.top && (m = g.top),
                            this.pages.length > 0) {
                                var x = this.pages[this.pages.length - 1];
                                g.y -= x.y + x.h
                            }
                            var k = 0 === y || g.newpage;
                            if (!k && !n && f + g.h > l && (k = !0),
                            k) {
                                d && (d.ls = y - c,
                                this.pages.push(d));
                                var _ = this.pages.length;
                                d = this.createPage(t, l),
                                d.x = 0,
                                d.l1 = y,
                                d.y = _ * l,
                                0 === _ && this.setOnepageTitle(d, g, m),
                                f = this.score.page.y,
                                c = y,
                                g.top ? f += g.top : f += 10 * this.lineh
                            }
                            g.y = f,
                            f += g.h + b.topMargin + b.bottomMargin + 5 * this.lineh,
                            y === u.length - 1 && d && (d.ls = y - c + 1,
                            this.pages.push(d))
                        } else
                            0 === y && (f += v),
                            f += b.topMargin,
                            g.y = f,
                            f += g.h + b.bottomMargin + 3 * this.lineh,
                            y === u.length - 1 && (l = f + g.distance,
                            d = this.createPage(t, l),
                            d.x = 0,
                            d.ls = u.length,
                            this.setOnepageTitle(d, g, h[0].y),
                            this.pages.push(d))
                    }
                    s.x = 0,
                    s.h = this.pages.length * l,
                    i && (s.h -= 5 + this.pages.length),
                    this.lines = h,
                    i && this.rearrangePage(m - 20)
                }
            }, {
                key: "rearrangePage",
                value: function(e) {
                    var t, i = Object(p["a"])(this.pages);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            for (var n = t.value, s = 0, a = n.l1; a < n.l1 + n.ls; a++) {
                                var r = this.lines[a];
                                s += r.h + (r.topMargin || 0) + (r.bottomMargin || 0)
                            }
                            var o = n.h - s;
                            n.title && (o -= e);
                            var l = o / (n.ls + 1.5);
                            l > n.h / 10 ? l = n.h / 10 : l < 0 && (l = 0,
                            e = n.h - s);
                            var u = l;
                            n.title && (u += e);
                            for (var h = n.l1; h < n.l1 + n.ls; h++) {
                                var c = this.lines[h];
                                u += c.topMargin || 0,
                                c.y = u,
                                u += c.h + (c.bottomMargin || 0) + l
                            }
                        }
                    } catch (f) {
                        i.e(f)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "createPage",
                value: function(e, t) {
                    return {
                        x: 0,
                        y: 0,
                        w: e,
                        h: t,
                        l1: 0,
                        ls: 0
                    }
                }
            }, {
                key: "_creatHorPage",
                value: function(e, t, i, n) {
                    var s = this.pages.length
                      , a = this.createPage(i, n);
                    return a.l1 = e,
                    a.ls = t,
                    a.x = s * i,
                    a.fill = s % 2 == 0 ? "#faf0ea" : "#f0fdf0",
                    a
                }
            }, {
                key: "_onelinePrefHeight",
                value: function() {
                    var e, t = this.score.lines, i = 0, n = Object(p["a"])(t);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var s = e.value
                              , a = this._getLineHeight(s).h;
                            a > i && (i = a)
                        }
                    } catch (o) {
                        n.e(o)
                    } finally {
                        n.f()
                    }
                    var r = .8 * i;
                    return r < 12 * this.lineh ? r = 12 * this.lineh : r > 24 * this.lineh && (r = 24 * this.lineh),
                    i += 2 * r,
                    i
                }
            }, {
                key: "setOnelineMode",
                value: function(e) {
                    var t, i = e && e.hidetitle;
                    t = e && e.h ? e.h : this.parenth;
                    var n, s = this.score.lines, a = s[0], r = [], o = Object(p["a"])(a.lineStaves);
                    try {
                        for (o.s(); !(n = o.n()).done; ) {
                            var l = n.value
                              , u = Object.assign({}, l);
                            u.margin = void 0,
                            u.distances = Object(d["a"])(l.distances),
                            r.push(u)
                        }
                    } catch (j) {
                        o.e(j)
                    } finally {
                        o.f()
                    }
                    var h, c = {
                        x: 0,
                        y: 0,
                        w: 0,
                        h: 0,
                        m1: 0,
                        m2: s[s.length - 1].m2,
                        lineStaves: r,
                        oneline: !0,
                        distance: 0
                    }, f = 0, m = this.score.parts[0].measures, v = Object(p["a"])(s);
                    try {
                        for (v.s(); !(h = v.n()).done; ) {
                            for (var y = h.value, g = 0; g < y.lineStaves.length; g++) {
                                var b = y.lineStaves[g]
                                  , x = r[g];
                                if (b.distances.length > x.distances.length)
                                    x.distances = Object(d["a"])(b.distances);
                                else {
                                    for (var k = 4 * this.lineh, _ = 0; _ < b.distances.length; _++)
                                        x.distances[_] < b.distances[_] && (x.distances[_] = b.distances[_]),
                                        _ > 0 && (k += x.distances[_] + 4 * this.lineh);
                                    x.height = k
                                }
                            }
                            for (var S = 0, A = y.m1; A < y.m2; A++) {
                                var O = m[A];
                                O.keyw && (S -= O.keyw),
                                S += O.w
                            }
                            f += S
                        }
                    } catch (j) {
                        v.e(j)
                    } finally {
                        v.f()
                    }
                    c.h = this._getLineHeight(c).h;
                    var T = .8 * c.h;
                    T < 12 * this.lineh ? T = 12 * this.lineh : T > 24 * this.lineh && (T = 24 * this.lineh),
                    this.scale = t / (2 * T + c.h),
                    this.scale > 1 && (this.scale = 1),
                    c.x = i ? 100 : 768,
                    c.y = e && e.top ? e.top : T,
                    c.w = f,
                    this.lines = [c],
                    this.page = {
                        x: 0,
                        y: 0
                    },
                    this.page.w = f + this.page.x + c.x + 3456 / this.scale,
                    this.page.h = t / this.scale;
                    var I = this.createPage(this.page.w, this.page.h);
                    I.ls = 1,
                    i || (I.title = this.score.title,
                    I.titlex = .4 * c.x,
                    I.titley = .4 * this.page.h),
                    this.pages = [I],
                    w.calcLineStaffRange(this.score, this.lines)
                }
            }, {
                key: "_getLineHeight",
                value: function(e) {
                    for (var t = this.showTrackIndexs, i = 0, n = 0, s = 0, a = null, r = null, o = 0; o < e.lineStaves.length; o++) {
                        var l = e.lineStaves[o]
                          , u = l.staves || 1;
                        if (!t || t.includes(s) || u > 1 && t.includes(s + 1)) {
                            l.hidden = !1,
                            l.y = n,
                            l.margin && (l.margin.yOrig = n);
                            for (var h = 1; h <= u; h++) {
                                var c = l.details ? l.details[h] : void 0;
                                if (c) {
                                    if (c.hide && "oneline" !== this.display)
                                        continue;
                                    c.lines && c.lines > 5 && (n += this.lineh)
                                }
                                var f = 0;
                                h < l.distances.length ? f = l.distances[h] : h === u && o < e.lineStaves.length - 1 && (f = e.lineStaves[o + 1].distances[0]),
                                n += 4 * this.lineh + f,
                                i = f
                            }
                            n === l.y && (l.hidden = !0)
                        } else
                            l.hidden = !0;
                        s += u,
                        l.hidden || (a || (a = l),
                        r = l)
                    }
                    return n -= i,
                    {
                        h: n,
                        topMargin: a && a.margin ? a.margin.top : 20,
                        bottomMargin: r && r.margin ? r.margin.bottom : 20
                    }
                }
            }]),
            e
        }()
          , M = function e(t, i) {
            var n;
            Object(m["a"])(this, e),
            this.maintitles = t.title ? t.title.split("\n") : void 0,
            this.titleSize = t.t && t.t.size ? t.t.size * e.scale : 4 * i,
            this.subtitles = t.subtitle ? t.subtitle.split("\n") : void 0,
            this.subtitleSize = t.s && t.s.size ? t.s.size * e.scale : 2.7 * i,
           this.comps = t.composer ? t.composer.split("\n") : void 0,
            this.compSize = t.c && t.c.size ? t.c.size * e.scale : 2.3 * i,
            this.instructions = t.instruction ? t.instruction.split("\n") : void 0,
            this.instSize = t.c && t.c.size ? t.c.size * e.scale : 2.3 * i,
            this.comps ? this.instructions && (n = this.comps).unshift.apply(n, Object(d["a"])(this.instructions)) : this.comps = this.instructions,
            this.instructions = void 0
        };
        M.scale = 3.8;
        var N = {
            name: "SvgTitle",
            props: {
                x: Number,
                y: Number,
                pagex: {
                    type: Number,
                    default: 0
                },
                lineh: Number,
                title: Object
            },
            data: function() {
                return {
                    obj: new M(this.title,this.lineh)
                }
            },
            computed: {
                titley: function() {
                    var e = this.y;
                    return this.obj.maintitles && this.obj.maintitles.length > 1 && (e -= this.obj.titleSize * (this.obj.maintitles.length - 1)),
                    e
                },
                subtitley: function() {
                    var e = this.titley + 3 * this.lineh;
                    return this.obj.maintitles && (e += 2 * this.obj.maintitles.length * this.lineh),
                    e
                }
            }
        };

        function C(e, t, i, n, s, a, r, o, l, u) {
            "boolean" != typeof r && (l = o,
            o = r,
            r = !1);
            var h, c = "function" == typeof i ? i.options : i;
            if (e && e.render && (c.render = e.render,
            c.staticRenderFns = e.staticRenderFns,
            c._compiled = !0,
            s && (c.functional = !0)),
            n && (c._scopeId = n),
            a ? (h = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                t && t.call(this, l(e)),
                e && e._registeredComponents && e._registeredComponents.add(a)
            }
            ,
            c._ssrRegister = h) : t && (h = r ? function(e) {
                t.call(this, u(e, this.$root.$options.shadowRoot))
            }
            : function(e) {
                t.call(this, o(e))
            }
            ),
            h)
                if (c.functional) {
                    var f = c.render;
                    c.render = function(e, t) {
                        return h.call(t),
                        f(e, t)
                    }
                } else {
                    var d = c.beforeCreate;
                    c.beforeCreate = d ? [].concat(d, h) : [h]
                }
            return i
        }
        var E, B = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

        function P(e) {
            return function(e, t) {
                return function(e, t) {
                    var i = B ? t.media || "default" : e
                      , n = R[i] || (R[i] = {
                        ids: new Set,
                        styles: []
                    });
                    if (!n.ids.has(e)) {
                        n.ids.add(e);
                        var s = t.source;
                        if (t.map && (s += "\n/*# sourceURL=" + t.map.sources[0] + " */",
                        s += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t.map)))) + " */"),
                        n.element || (n.element = document.createElement("style"),
                        n.element.type = "text/css",
                        t.media && n.element.setAttribute("media", t.media),
                        void 0 === E && (E = document.head || document.getElementsByTagName("head")[0]),
                        E.appendChild(n.element)),
                        "styleSheet"in n.element)
                            n.styles.push(s),
                            n.element.styleSheet.cssText = n.styles.filter(Boolean).join("\n");
                        else {
                            var a = n.ids.size - 1
                              , r = document.createTextNode(s)
                              , o = n.element.childNodes;
                            o[a] && n.element.removeChild(o[a]),
                            o.length ? n.element.insertBefore(r, o[a]) : n.element.appendChild(r)
                        }
                    }
                }(e, t)
            }
        }
        var R = {}
          , D = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    staticClass: "title"
                }, [e.obj.maintitles ? e._l(e.obj.maintitles, (function(t, n) {
                    return i("text", {
                        key: "t" + n,
                        attrs: {
                            x: e.pagex + e.x,
                            y: e.titley + 1.15 * n * e.obj.titleSize,
                            "font-size": e.obj.titleSize,
                            "text-anchor": "middle"
                        }
                    }, [e._v(e._s(t))])
                }
                )) : e._e(), e._v(" "), e.obj.subtitles ? e._l(e.obj.subtitles, (function(t, n) {
                    return i("text", {
                        key: "s" + n,
                        attrs: {
                            x: e.pagex + e.x,
                            y: e.subtitley + 1.15 * n * e.obj.subtitleSize,
                            "font-size": e.obj.subtitleSize,
                            "text-anchor": "middle"
                        }
                    }, [e._v(e._s(t))])
                }
                )) : e._e(), e._v(" "), e.obj.comps ? e._l(e.obj.comps, (function(t, n) {
                    return i("text", {
                        key: "c" + n,
                        attrs: {
                            x: e.pagex + 2 * e.x,
                            y: e.titley + e.obj.titleSize / 2 + 1.15 * n * e.obj.compSize - 1.15 * e.obj.comps.length * e.obj.compSize / 2 - e.obj.compSize / 2,
                            "font-size": e.obj.compSize,
                            "text-anchor": "end",
//                            "style":" display: none;"
                        }
                    }, [e._v(e._s(t))])
                }
                )) : e._e()], 2)
            },
            staticRenderFns: []
        }, (function(e) {
            e && e("data-v-9ea6a786_0", {
                source: ".title[data-v-9ea6a786]{font-family:Times New Roman,Times,serif;white-space:pre}",
                map: void 0,
                media: void 0
            })
        }
        ), N, "data-v-9ea6a786", !1, void 0, !1, P, void 0, void 0)
          , F = {
            Group: "ğ",
            ACC_Sharp: "ġ",
            ACC_Flat: "Ģ",
            ACC_Natural: "ģ",
            ACC_DoubleSharp: "Ĥ",
            ACC_DoubleFlat: "ĥ",
            ACC_Sharp_Caution: "Ħ",
            ACC_Flat_Caution: "ħ",
            ACC_Natural_Caution: "Ĩ",
            ACC_DoubleSharp_Caution: "ĩ",
            ACC_DoubleFlat_Caution: "Ī",
            ACC_Small_SHARP: "ī",
            ACC_Small_FLAT: "Ĭ",
            ACC_Small_STOP: "ĭ",
            ACC_Small_DOUBLE_SHARP: "Į",
            ACC_Small_DOUBLE_FLAT: "į",
            BracketUp: "Ļ",
            BracketDown: "ļ",
            NOTE_QUADRUPLE_WHOLE: "ũ",
            NOTE_DOUBLE_WHOLE: "ŀ",
            NOTE_1: "Ł",
            NOTE_2_UP: "ł",
            NOTE_4_UP: "Ń",
            NOTE_8_UP: "ń",
            NOTE_16_UP: "Ņ",
            NOTE_32_UP: "ņ",
            NOTE_64_UP: "Ň",
            NOTE_128_UP: "ň",
            TAIL_8_UP: "ŉ",
            TAIL_16_UP: "Ŋ",
            TAIL_32_UP: "ŋ",
            TAIL_64_UP: "Ō",
            TAIL_128_UP: "ō",
            NOTE_x: "Ŏ",
            NOTE_diamond: "ŏ",
            NOTE_diamond_n: "ŏ",
            NOTE_slash: "Ő",
            "NOTE_circle-x": "ő",
            NOTE_2_DOWN: "Œ",
            NOTE_4_DOWN: "œ",
            NOTE_8_DOWN: "Ŕ",
            NOTE_16_DOWN: "ŕ",
            NOTE_32_DOWN: "Ŗ",
            NOTE_64_DOWN: "ŗ",
            NOTE_128_DOWN: "Ř",
            TAIL_8_DOWN: "ř",
            TAIL_16_DOWN: "Ś",
            TAIL_32_DOWN: "ś",
            TAIL_64_DOWN: "Ŝ",
            TAIL_128_DOWN: "ŝ",
            NOTE_do: "Ű",
            NOTE_re: "ű",
            NOTE_mi: "Ų",
            NOTE_diamond_f: "Ų",
            NOTE_fa: "ų",
            NOTE_4: "Ŵ",
            NOTE_so: "Ŵ",
            NOTE_la: "ŵ",
            NOTE_square_f: "ŵ",
            NOTE_ti: "Ŷ",
            NOTE_Diamond: "ź",
            NOTE_2: "ż",
            NOTE_square: "Ž",
            Clef_Treble: "ƀ",
            Clef_Bass: "Ɓ",
            Clef_Middle: "Ƃ",
            Clef_Percussion: "ƃ",
            Clef_Treble8va: "ƅ",
            Clef_Treble8vb: "Ɔ",
            Clef_Bass8va: "Ƈ",
            Clef_Bass8vb: "ƈ",
            Clef_TAB: "Ɖ",
            Time_common: "Ɗ",
            Time_cut: "Ƌ",
            p: "Ɛ",
            pp: "Ƒ",
            ppp: "ƒ",
            pppp: "Ɠ",
            mp: "Ɣ",
            f: "ƕ",
            ff: "Ɩ",
            fff: "Ɨ",
            ffff: "Ƙ",
            mf: "ƙ",
            sf: "ƚ",
            fz: "ƛ",
            sfz: "Ɯ",
            fp: "Ɲ",
            "ART_trill-mark": "Ơ",
            ART_WAVE_Hor: "Ƣ",
            "ART_inverted-mordent": "ƣ",
            ART_mordent: "Ƥ",
            ART_MORDENT_LONG: "ƥ",
            ART_turn: "Ʀ",
            TREMOLO_8: "ƨ",
            TREMOLO_16: "Ʃ",
            TREMOLO_32: "ƪ",
            TREMOLO_64: "ƫ",
            ART_WAVE_Ver: "Ƭ",
            segno: "ư",
            coda: "Ʊ",
            ART_FERMATA_UP: "Ʋ",
            ART_FERMATA_DOWN: "Ƴ",
            OCTAVE_8va: "ƴ",
            OCTAVE_8vb: "Ƶ",
            OCTAVE_15ma: "ƶ",
            ART_breath_mark: "ƹ",
            ART_caesura: "ƺ",
            ART_accent: "ǀ",
            ART_Accent_dot_up: "ǁ",
            "ART_strong-accent": "đ",
            ART_scoop: "Ē",
            ART_strong_accent_down: "Ǆ",
            ART_SFORZANDO_DOWN: "ǅ",
            ART_staccatissimo: "Đ",
            ART_spiccato: "Đ",
            ART_staccatoJianpu: "ǆ",
            ART_staccato: "Ǉ",
            ART_tenuto: "ǈ",
            ART_harmonic: "ǉ",
            ART_Add: "ǋ",
            ART_BOWUP: "ǌ",
            ART_BOWDOWN: "Ǎ",
            ART_BOWUP_BELOW: "ǎ",
            ART_BOWDOWN_BELOW: "Ǐ",
            ART_PEDAL_DOWN: "ǐ",
            ART_PEDAL_UP: "Ǒ",
            ART_A: "ǒ",
            ART_U: "Ǔ",
            Round_Num1: "ǜ",
            Round_Num2: "ǝ",
            Round_Num3: "Ǟ",
            Round_Num4: "ǟ",
            Round_Num5: "Ǡ",
            Round_Num6: "ǡ",
            Round_Num7: "Ǣ",
            Round_Num8: "ǣ",
            Italic_Num0: "ǰ",
            Italic_Num1: "Ǳ",
            Italic_Num2: "ǲ",
            Italic_Num3: "ǳ",
            Italic_Num4: "Ǵ",
            Italic_Num5: "ǵ",
            Italic_Num6: "Ƕ",
            Italic_Num7: "Ƿ",
            Italic_Num8: "Ǹ",
            Italic_Num9: "ǹ"
        }
          , q = function e() {
            Object(m["a"])(this, e)
        };
        q.num = ["İ", "ı", "Ĳ", "ĳ", "Ĵ", "ĵ", "Ķ", "ķ", "ĸ", "Ĺ"],
        q.rest = {
            1: "š",
            2: "Ţ",
            4: "ţ",
            8: "Ť",
            16: "ť",
            32: "Ŧ",
            64: "ŧ",
            128: "Ũ"
        };
        var L = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return e.type && e.y1 < e.y2 && e.y1 >= 0 ? i("g", [e._l(e.brackets, (function(t, n) {
                    return ["text" == t.type ? i("text", e._b({
                        key: n
                    }, "text", t.param, !1), [e._v(e._s(t.text))]) : e._e(), e._v(" "), "line" == t.type ? i("line", e._b({
                        key: n,
                        attrs: {
                            stroke: "black"
                        }
                    }, "line", t.param, !1)) : e._e(), e._v(" "), "rect" == t.type ? i("rect", e._b({
                        key: n,
                        staticStyle: {
                            fill: "rgba(0,0,0,0)",
                            "stroke-width": "1",
                            stroke: "black"
                        }
                    }, "rect", t.param, !1)) : e._e()]
                }
                ))], 2) : e._e()
            },
            staticRenderFns: []
        }, void 0, {
            name: "SvgGroup",
            props: {
                x: Number,
                y1: Number,
                y2: Number,
                type: String,
                lineh: Number
            },
            computed: {
                brackets: function() {
                    var e = []
                      , t = this.y2 - this.y1
                      , i = 1.8 * this.lineh;
                    if ("bracket" === this.type) {
                        var n = .29 * i
                          , s = this.x + .6 * n;
                        e.push({
                            type: "line",
                            param: {
                                x1: s,
                                x2: s,
                                y1: this.y1,
                                y2: this.y2,
                                "stroke-width": n
                            }
                        }),
                        e.push({
                            type: "text",
                            text: F.BracketUp,
                            param: {
                                x: s - n / 2,
                                y: this.y1,
                                "font-size": i
                            }
                        }),
                        e.push({
                            type: "text",
                            text: F.BracketDown,
                            param: {
                                x: s - n / 2,
                                y: this.y2,
                                "font-size": i
                            }
                        })
                    } else if ("square" === this.type) {
                        var a = 1.4 * this.lineh
                          , r = this.x - a + this.lineh;
                        e.push({
                            type: "rect",
                            param: {
                                x: r,
                                y: this.y1,
                                width: a,
                                height: t
                            }
                        })
                    } else {
                        i = 2.96 * t;
                        var o = this.x - i / this.lineh / 13;
                        e.push({
                            type: "text",
                            param: {
                                x: o,
                                y: this.y2,
                                "font-size": i
                            },
                            text: F.Group
                        })
                    }
                    return e
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , W = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", e._b({}, "g", e.style, !1), e._l(e.lines, (function(t) {
                    return i("line", {
                        key: t,
                        attrs: {
                            x1: e.x,
                            x2: e.x + e.width,
                            y1: e.top + (t - 1) * e.seg,
                            y2: e.top + (t - 1) * e.seg
                        }
                    })
                }
                )), 0)
            },
            staticRenderFns: []
        }, void 0, {
            name: "SvgFiveLine",
            props: {
                x: Number,
                y: Number,
                width: Number,
                lines: {
                    type: Number,
                    default: 5
                },
                lineh: Number,
                attr: Object
            },
            data: function() {
                var e = this.y
                  , t = this.lineh;
                return 1 === this.lines ? e += 2 * this.lineh : 2 === this.lines ? (e += 1 * this.lineh,
                t = 2 * this.lineh) : 3 === this.lines ? e += 1 * this.lineh : 4 === this.lines && (e += 0 * this.lineh),
                {
                    top: e,
                    seg: t
                }
            },
            computed: {
                style: function() {
                    var e = {
                        stroke: "black"
                    };
                    return this.attr && (this.attr.color && (e.stroke = this.attr.color),
                    this.attr.opacity && (e.style = "opacity: " + this.attr.opacity + ";")),
                    e
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , U = function() {
            function e() {
                Object(m["a"])(this, e)
            }
            return Object(v["a"])(e, null, [{
                key: "getGlyphs",
                value: function(t) {
                    return t.jianpu ? e.getJianpuText(t.fifths, t.lineh) : e.getWuxianpuText(t)
                }
            }, {
                key: "getJianpuText",
                value: function(e, t) {
                    var i = 2.5 * t
                      , n = [{
                        text: this.jianpuhao[e + 10],
                        param: {
                            x: 0,
                            y: 0,
                            "font-size": i
                        }
                    }];
                    if (e < -8) {
                        var s = {
                            x: 1.1 * i,
                            y: -t,
                            "font-size": .6 * i
                        };
                        n.push({
                            text: F.ACC_DoubleFlat,
                            param: s
                        })
                    } else if (e < -1) {
                        var a = {
                            x: 1.2 * i,
                            y: -t,
                            "font-size": .6 * i
                        };
                        n.push({
                            text: F.ACC_Flat,
                            param: a
                        })
                    } else if (e > 5) {
                        var r = {
                            x: 1.1 * i,
                            y: 1.5 * -t,
                            "font-size": .5 * i
                        };
                        n.push({
                            text: F.ACC_Sharp,
                            param: r
                        })
                    }
                    return n
                }
            }, {
                key: "getWuxianpuText",
                value: function(e) {
                    for (var t = e.fifths > 0 ? F.ACC_Sharp : F.ACC_Flat, i = [], n = Math.abs(e.fifths), s = e.staves || 1, a = 1; a <= s; a++) {
                        var o = e.staffOffset[a - 1];
                        if (!(o < 0)) {
                            var l = e.clef["" + a];
                            if ("Treble8va" === l)
                                l = r.Treble;
                            else if ("Percussion" === l || "TAB" === l)
                                continue;
                            if (this.sharpLines[l]) {
                                var u = 0;
                                if (e.cancel)
                                    for (var h = e.cancel > 0 ? this.sharpLines[l] : this.flatLines[l], c = Math.abs(e.cancel), f = e.fifths * e.cancel < 0 ? 0 : n; f < c; f++) {
                                        var d = o + 2 * e.lineh - h[f] * e.lineh / 2;
                                        i.push({
                                            text: F.ACC_Natural,
                                            param: {
                                                x: u,
                                                y: d
                                            }
                                        }),
                                        u += e.lineh
                                    }
                                if (e.fifths)
                                    for (var p = e.fifths > 0 ? this.sharpLines[l] : this.flatLines[l], m = "track" + (e.trackIndex + a - 1), v = 0; v < n; v++) {
                                        var y = o + 2 * e.lineh - p[v] * e.lineh / 2;
                                        i.push({
                                            text: t,
                                            param: {
                                                x: u,
                                                y: y,
                                                class: m
                                            }
                                        }),
                                        u += e.lineh
                                    }
                            } else
                                console.log("Error lines for fifths:" + e.fifths + " clef:" + l)
                        }
                    }
                    return i
                }
            }]),
            e
        }();
        U.sharpLines = {
            Treble: [4, 1, 5, 2, -1, 3, 0],
            Bass: [2, -1, 3, 0, -3, 1, -2],
            Alto: [3, 0, 4, 1, -2, 2, -1],
            UpAlto: [-2, 2, -1, 3, 0, 4, 1],
            DownDownAlto: [-1, -4, 0, -3, 1, -2, -5],
            DownAlto: [2, -2, 3, -1, -4, 0, -3],
            UpUpAlto: [0, 4, 1, 5, 2, 6, 3]
        },
        U.flatLines = {
            Treble: [0, 3, -1, 2, -2, 1, -3],
            Bass: [-2, 1, -3, 0, -4, -1, -5],
            Alto: [-1, 2, -2, 1, -3, 0, 3],
            UpAlto: [1, 4, 0, 3, -1, 2, -2],
            DownDownAlto: [-5, -2, 1, -3, 0, -4, -1],
            DownAlto: [-3, 0, -4, -2, 3, -2, 2],
            UpUpAlto: [3, 6, 2, 5, 1, 4, 0]
        },
        U.jianpuhao = ["1=   E", "1=   B", "1= F", "1= C", "1= G", "1= D", "1= A", "1= E", "1= B", "1= F", "1= C", "1= G", "1= D", "1= A", "1= E", "1= B", "1= F", "1= C", "1= G", "1= D", "1= A"];
        var J = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    attrs: {
                        transform: "translate(" + e.x + "," + e.y + ")",
                        "font-size": e.jianpu ? 1.4 * e.lineh : 2 * e.lineh
                    }
                }, e._l(e.glyphs, (function(t, n) {
                    return i("text", e._b({
                        key: "g" + n
                    }, "text", t.param, !1), [e._v(e._s(t.text))])
                }
                )), 0)
            },
            staticRenderFns: []
        }, void 0, {
            name: "SvgFifths",
            props: {
                fifths: Number,
                cancel: Number,
                clef: Object,
                lineh: Number,
                y: {
                    type: Number,
                    default: 0
                },
                x: Number,
                staffOffset: Array,
                staves: {
                    type: Number,
                    default: 1
                },
                jianpu: Boolean,
                trackIndex: Number
            },
            computed: {
                glyphs: function() {
                    return U.getGlyphs(this._props)
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , z = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return e.time ? i("g", [e._l(e.glyphs, (function(t, n) {
                    return ["line" == t.type ? i("line", e._b({
                        key: n
                    }, "line", t.param, !1)) : i("text", e._b({
                        key: n
                    }, "text", t.param, !1), [e._v(e._s(t.text))])]
                }
                ))], 2) : e._e()
            },
            staticRenderFns: []
        }, void 0, {
            name: "SvgTime",
            props: {
                time: Object,
                x: Number,
                basey: Number,
                lineh: Number,
                staffOffset: Array,
                staves: Number,
                jianpu: Boolean,
                trackIndex: Number
            },
            computed: {
                glyphs: function() {
                    return function() {
                        function e() {
                            Object(m["a"])(this, e)
                        }
                        return Object(v["a"])(e, null, [{
                            key: "timeGlyphs",
                            value: function(e) {
                                for (var t = [], i = e.jianpu ? 2.5 * e.lineh : 2 * e.lineh, n = e.staves || 1, s = this.glyphsOfNum(e.time.beats, e.jianpu), a = this.glyphsOfNum(e.time.beatu, e.jianpu), r = 1; r <= n; r++) {
                                    var o = e.staffOffset ? e.staffOffset[r - 1] : 0;
                                    if (!(o < 0)) {
                                        e.basey ? o += e.basey : e.jianpu && (o -= 50);
                                        var l = "track" + (e.trackIndex + r - 1);
                                        if ("cut" !== e.time.sym && "common" !== e.time.sym || e.jianpu)
                                            this.insertBeat(t, s, i, l, e.x, o + .5 * i),
                                            this.insertBeat(t, a, i, l, e.x, o + 1.5 * i);
                                        else {
                                            var u = {
                                                x: e.x,
                                                y: o + 2 * e.lineh,
                                                "font-size": i,
                                                class: l
                                            };
                                            t.push({
                                                text: F["Time_" + e.time.sym],
                                                param: u
                                            })
                                        }
                                        if (e.jianpu) {
                                            var h = o + .65 * i
                                              , c = .6 * i
                                              , f = e.x;
                                            e.time.beats > 9 && (c += .2 * i,
                                            f -= .2 * i);
                                            var d = {
                                                x1: f,
                                                y1: h,
                                                x2: e.x + c,
                                                y2: h,
                                                stroke: "black"
                                            };
                                            t.push({
                                                type: "line",
                                                param: d
                                            })
                                        }
                                    }
                                }
                                return t
                            }
                        }, {
                            key: "glyphsOfNum",
                            value: function(e, t) {
                                if (t)
                                    return [e];
                                var i = [];
                                if (e >= 10) {
                                    var n = Math.floor(e / 10)
                                      , s = e % 10;
                                    i.push(q.num[n]),
                                    i.push(q.num[s])
                                } else
                                    i = [q.num[e]];
                                return i
                            }
                        }, {
                            key: "insertBeat",
                            value: function(e, t, i, n, s, a) {
                                var r, o = t.length < 2 ? s : s - .3 * i, l = Object(p["a"])(t);
                                try {
                                    for (l.s(); !(r = l.n()).done; ) {
                                        var u = r.value
                                          , h = {
                                            x: o,
                                            y: a,
                                            "font-size": i,
                                            class: n
                                        };
                                        e.push({
                                            text: u,
                                            param: h
                                        }),
                                        o += .7 * i
                                    }
                                } catch (c) {
                                    l.e(c)
                                } finally {
                                    l.f()
                                }
                            }
                        }]),
                        e
                    }().timeGlyphs(this._props)
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , H = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    attrs: {
                        transform: "translate(" + (e.notex + e.x1) + "," + (e.notey + e.y1) + ")",
                        "font-size": e.fontSize
                    }
                }, e._l(e.items, (function(t, n) {
                    return i("text", e._b({
                        key: "w" + n
                    }, "text", t.param, !1), [e._v(e._s(t.text))])
                }
                )), 0)
            },
            staticRenderFns: []
        }, void 0, {
            name: "NoteWaveline",
            props: {
                lineh: Number,
                x1: Number,
                y1: Number,
                x2: Number,
                y2: Number,
                contx: Number,
                conty: Number,
                notex: Number,
                notey: Number
            },
            data: function() {
                return {
                    fontSize: 1.1 * this.lineh * 1.5
                }
            },
            computed: {
                top: function() {
                    return (this.y1 < this.y2 ? this.y1 : this.y2) + this.notey
                },
                items: function() {
                    var e = []
                      , t = 1.1 * this.lineh
                      , i = this.contx || this.x2
                      , n = this.conty || this.y2;
                    if (this.x1 === i || void 0 === i)
                        for (var s = Math.abs(this.y1 - n) / t, a = 10, r = 0; r < s; r++)
                            e.push({
                                text: F.ART_WAVE_Ver,
                                param: {
                                    y: a
                                }
                            }),
                            a += t;
                    else if (this.y1 === n || void 0 === n)
                        for (var o = Math.abs(this.x1 - i) / t, l = 0, u = 0; u < o; u++)
                            e.push({
                                text: F.ART_WAVE_Hor,
                                param: {
                                    x: l,
                                    y: 0
                                }
                            }),
                            l += t;
                    else
                        for (var h = (n - this.y1) / (i - this.x1), c = Math.atan(h), f = t * Math.cos(c), d = t * Math.sin(c), p = (i - this.x1) / Math.cos(c) / t, m = 0, v = 0, y = 180 * c / 3.14, g = 0; g < p; g++)
                            e.push({
                                text: F.ART_WAVE_Hor,
                                param: {
                                    x: m,
                                    y: v,
                                    rotate: y
                                }
                            }),
                            m += f,
                            v += d;
                    return e
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , V = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    attrs: {
                        transform: "translate(" + e.notex + "," + e.notey + ")"
                    }
                }, [e.jianpu ? [i("path", {
                    staticClass: "slurline",
                    attrs: {
                        d: e.slurPath
                    }
                })] : e.bracket ? [i("line", e._b({
                    attrs: {
                        stroke: "black"
                    }
                }, "line", e.items.line1, !1)), e._v(" "), i("line", e._b({
                    attrs: {
                        stroke: "black"
                    }
                }, "line", e.items.line2, !1)), e._v(" "), i("line", e._b({
                    attrs: {
                        stroke: "black"
                    }
                }, "line", e.items.line3, !1)), e._v(" "), i("line", e._b({
                    attrs: {
                        stroke: "black"
                    }
                }, "line", e.items.line4, !1))] : e._e(), e._v(" "), i("text", {
                    staticClass: "num",
                    attrs: {
                        x: e.items.textx,
                        y: e.jianpu ? e.items.texty - 10 : e.items.texty
                    }
                }, [e._v(e._s(e.value))])], 2)
            },
            staticRenderFns: []
        }, (function(e) {
            e && e("data-v-fe23292a_0", {
                source: ".slurline[data-v-fe23292a]{stroke-width:.5;fill:#000;stroke:#000}.num[data-v-fe23292a]{fill:#000;font-style:italic;font-size:16px}",
                map: void 0,
                media: void 0
            })
        }
        ), {
            name: "NoteTuplet",
            props: {
                x1: Number,
                y1: Number,
                x2: Number,
                y2: Number,
                up: Boolean,
                value: Number,
                bracket: Boolean,
                notex: Number,
                notey: Number,
                staff2: Number,
                jianpu: Boolean
            },
            data: function() {
                return {
                    items: this.getItems()
                }
            },
            computed: {
                slurPath: function() {
                    var e = {
                        x1: this.x1,
                        x2: this.x2 + 8,
                        y1: this.y1,
                        y2: this.y2
                    }
                      , t = .15 * (this.x2 - this.x1);
                    e.cp1x = e.x1 + t,
                    e.cp2x = e.x2 - t,
                    e.cp1y = e.y1 - t,
                    e.cp2y = e.y2 - t;
                    var i = "C".concat(e.cp2x, ",").concat(e.cp2y + 1, " ").concat(e.cp1x, ",").concat(e.cp1y + 2, " ").concat(e.x1, ",").concat(e.y1);
                    return "M".concat(e.x1, ",").concat(e.y1, " C").concat(e.cp1x, ",").concat(e.cp1y, " ").concat(e.cp2x, ",").concat(e.cp2y, " ").concat(e.x2, ",").concat(e.y2, " ").concat(i)
                }
            },
            methods: {
                getItems: function() {
                    var e = this.up ? 4 : -4
                      , t = this.x1
                      , i = this.x2 + 8
                      , n = this.y1 - e
                      , s = this.y2 - e
                      , a = (s - n) / (i - t)
                      , r = 6;
                    this.value > 9 && (r = 10);
                    var o = (t + i) / 2
                      , l = o - r
                      , u = o + r
                      , h = a * (l - t) + n
                      , c = a * (u - t) + n
                      , f = (n + s) / 2;
                    return this.bracket ? f += this.up ? 4 : 6 : (l = o - r / 2,
                    this.up ? f += 4 : (f += 12,
                    this.staff2 && (f += 10))),
                    {
                        line1: {
                            x1: t,
                            x2: t,
                            y1: n,
                            y2: n + e
                        },
                        line2: {
                            x1: t,
                            x2: l,
                            y1: n,
                            y2: h
                        },
                        line3: {
                            x1: u,
                            x2: i,
                            y1: c,
                            y2: s
                        },
                        line4: {
                            x1: i,
                            x2: i,
                            y1: s,
                            y2: s + e
                        },
                        textx: l,
                        texty: f
                    }
                }
            }
        }, "data-v-fe23292a", !1, void 0, !1, P, void 0, void 0)
          , G = function() {
            function e() {
                Object(m["a"])(this, e)
            }
            return Object(v["a"])(e, null, [{
                key: "slurPosJianpu",
                value: function(e, t) {
                    var i, n = e.x1 + .8 * t;
                    i = void 0 !== e.contx ? e.contx : e.x2 + t / 4,
                    i <= n + t && (n = i - t);
                    var s = (i - n) / 5;
                    return s > 4 * t ? s = 2 * t : s > t ? s = t : s < .7 * t && (s = .7 * t),
                    {
                        x1: n,
                        y1: 0,
                        cp1x: n,
                        cp1y: 0 - 1 * s,
                        x2: i,
                        y2: 0,
                        cp2x: i,
                        cp2y: 0 - 1 * s
                    }
                }
            }, {
                key: "slurPathJianpu",
                value: function(e) {
                    var t = e.y1 - e.cp1y
                      , i = 1.2 * t
                      , n = t / 3;
                    return "M".concat(e.x1, ",").concat(e.y1, " q").concat(n, ",-").concat(t, ",").concat(i, ",-").concat(t, " l").concat(e.x2 - e.x1 - 2 * i, ",0 q").concat(i - n, ",0,").concat(i, ",").concat(t)
                }
            }, {
                key: "slurPos",
                value: function(e, t, i, n, s) {
                    var a, r, o, l, u = e.x1, h = void 0 !== e.contx ? e.contx : e.x2, c = e.y1, f = void 0 !== e.conty ? e.conty : e.y2;
                    if (e.staff2 && (f += e.staff2 * (s + 4 * n)),
                    0 === u && (u += n / 2,
                    t && e.up ? u += .7 * n : t || e.up || (h -= .2 * n)),
                    h < u + 1.5 * n && (u = h - 1.5 * n),
                    e.bx1 && e.by1 && (e.bx2 || e.contbx)) {
                        if (a = u + e.bx1,
                        r = c + e.by1,
                        e.contbx && e.contby ? (o = h + e.contbx,
                        l = f + e.contby) : (o = h + (e.bx2 || 0),
                        l = f + (e.by2 || 0)),
                        a > o) {
                            var d = (h - u) / 4;
                            a = u + d,
                            o = h - d,
                            e.up ? (r = c - d,
                            l = f - d) : (r = c + d,
                            l = f + d)
                        }
                    } else {
                        u += .5 * n,
                        h += .2 * n;
                        var p = Math.sqrt((f - c) * (f - c) + (h - u) * (h - u))
                          , m = Math.atan((f - c) / (h - u))
                          , v = p / 4
                          , y = .6;
                        p > 900 ? (v = p / 10,
                        y = .5) : p > 400 ? (v = p / 8,
                        y = .5) : p > 100 ? (v = p / 5,
                        y = .5) : v = p / 3,
                        e.up ? (a = u + v * Math.cos(m - y),
                        r = c + v * Math.sin(m - y),
                        o = h - v * Math.cos(m + y),
                        l = f - v * Math.sin(m + y)) : (a = u + v * Math.cos(m + y),
                        r = c + v * Math.sin(m + y),
                        o = h - v * Math.cos(m - y),
                        l = f - v * Math.sin(m - y))
                    }
                    return {
                        x1: u,
                        y1: c,
                        cp1x: a,
                        cp1y: r,
                        x2: h,
                        y2: f,
                        cp2x: o,
                        cp2y: l
                    }
                }
            }, {
                key: "slurPath",
                value: function(e) {
                    var t = "C".concat(e.cp2x, ",").concat(e.cp2y + 1, " ").concat(e.cp1x, ",").concat(e.cp1y + 2, " ").concat(e.x1, ",").concat(e.y1);
                    return "M".concat(e.x1, ",").concat(e.y1, " C").concat(e.cp1x, ",").concat(e.cp1y, " ").concat(e.cp2x, ",").concat(e.cp2y, " ").concat(e.x2, ",").concat(e.y2, " ").concat(t)
                }
            }]),
            e
        }()
          , K = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    attrs: {
                        transform: "translate(" + e.notex + "," + e.notey + ")"
                    }
                }, [e.tieText ? i("text", {
                    attrs: {
                        x: (e.pos.x1 + e.pos.x2) / 2 - 5,
                        y: e.pos.y1 - 5
                    }
                }, [e._v(e._s(e.tieText))]) : e._e(), e._v(" "), i("path", {
                    class: e.jianpu ? "slurlinejp" : "slurline",
                    attrs: {
                        d: e.path
                    }
                })])
            },
            staticRenderFns: []
        }, (function(e) {
            e && e("data-v-35a9c118_0", {
                source: ".slurline[data-v-35a9c118]{stroke-width:.5;fill:#000;stroke:#000}.slurlinejp[data-v-35a9c118]{stroke-width:2;fill:transparent;stroke:#000}",
                map: void 0,
                media: void 0
            })
        }
        ), {
            name: "NoteSlur",
            props: {
                notex: {
                    type: Number,
                    required: !0
                },
                notey: {
                    type: Number,
                    required: !0
                },
                slur: Object,
                stemup: Boolean,
                lineh: Number,
                staffDistance: Number,
                jianpu: Boolean,
                tied: Boolean,
                tieText: String
            },
            computed: {
                pos: function() {
                    var e;
                    return e = this.jianpu ? G.slurPosJianpu(this.slur, this.lineh) : G.slurPos(this.slur, this.stemup, this.tied, this.lineh, this.staffDistance),
                    e
                },
                path: function() {
                    var e;
                    return e = this.jianpu ? G.slurPathJianpu(this.pos) : G.slurPath(this.pos),
                    e
                }
            }
        }, "data-v-35a9c118", !1, void 0, !1, P, void 0, void 0)
          , Q = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    attrs: {
                        transform: "translate(" + e.notex + "," + e.notey + ")"
                    }
                }, [i("line", {
                    attrs: {
                        x1: e.x1,
                        y1: e.y1,
                        x2: e.x2,
                        y2: e.y2,
                        stroke: "black"
                    }
                }), e._v(" "), e.text ? i("text", {
                    attrs: {
                        x: (e.x1 + e.x2) / 2 - 20,
                        y: (e.y1 + e.y2) / 2 - 10,
                        fill: "black"
                    }
                }, [e._v(e._s(e.text))]) : e._e()])
            },
            staticRenderFns: []
        }, void 0, {
            name: "NoteSlide",
            props: {
                x1: Number,
                y1: Number,
                x2: Number,
                y2: Number,
                up: Boolean,
                text: String,
                glissando: Boolean,
                notex: Number,
                notey: Number
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , Y = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", e._l(e.num, (function(t) {
                    return i("line", {
                        key: t,
                        attrs: {
                            x1: e.notex + e.x1 + 10,
                            x2: e.notex + e.x2 - 3,
                            y1: e.notey - 15 + e.y1 + 7 * t,
                            y2: e.notey - 15 + e.y2 + 7 * t,
                            "stroke-width": "5",
                            stroke: "black"
                        }
                    })
                }
                )), 0)
            },
            staticRenderFns: []
        }, void 0, {
            name: "NoteTremolo",
            props: {
                x1: Number,
                y1: Number,
                x2: Number,
                y2: Number,
                notex: Number,
                notey: Number,
                num: Number
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , Z = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    staticClass: "lyric"
                }, e._l(e.lyrics, (function(t, n) {
                    return i("text", e._b({
                        key: n,
                        attrs: {
                            x: t.param.x - e.x + 8,
                            y: t.param.y + e.y,
                            "text-anchor": "middle"
                        }
                    }, "text", t.param, !1), [e._v("\n        " + e._s("begin" == t.syllabic || "middle" == t.syllabic ? t.text + " -" : t.text) + "\n    ")])
                }
                )), 0)
            },
            staticRenderFns: []
        }, (function(e) {
            e && e("data-v-6ba72c00_0", {
                source: ".lyric[data-v-6ba72c00]{font-size:20px}",
                map: void 0,
                media: void 0
            })
        }
        ), {
            name: "NoteLyrics",
            props: {
                x: Number,
                y: Number,
                lyrics: Array
            }
        }, "data-v-6ba72c00", !1, void 0, !1, P, void 0, void 0)
          , X = function() {
            function e(t) {
                Object(m["a"])(this, e),
                this.type = t
            }
            return Object(v["a"])(e, null, [{
                key: "textItem",
                value: function(e, t, i, n, s, a) {
                    var r = {
                        x: e,
                        y: t
                    };
                    return n && (r["font-size"] = n),
                    s && (r.fill = s),
                    a && (r.id = a),
                    {
                        type: "text",
                        text: i,
                        param: r
                    }
                }
            }, {
                key: "lineItem",
                value: function(e, t, i, n, s, a) {
                    var r = {
                        x1: e,
                        y1: t,
                        x2: i,
                        y2: n,
                        stroke: "black"
                    };
                    return s && 1 !== s && (r["stroke-width"] = s),
                    a && (r.stroke = a),
                    {
                        type: "line",
                        param: r
                    }
                }
            }, {
                key: "rectItem",
                value: function(e, t, i, n, s, a) {
                    var r = {
                        x: e,
                        y: t,
                        width: i,
                        height: n
                    };
                    return s && (r.fill = s),
                    a && (r.rx = a,
                    r.ry = a),
                    {
                        type: "rect",
                        param: r
                    }
                }
            }, {
                key: "circleItem",
                value: function(e, t, i, n) {
                    var s = {
                        cx: e,
                        cy: t,
                        r: i
                    };
                    return n && (s.fill = n),
                    {
                        type: "circle",
                        param: s
                    }
                }
            }, {
                key: "ellipseItem",
                value: function(e, t, i, n, s) {
                    var a = {
                        cx: e,
                        cy: t,
                        rx: i,
                        ry: n
                    };
                    return s && (a.fill = s),
                    {
                        type: "ellipse",
                        param: a
                    }
                }
            }, {
                key: "setStyle",
                value: function(e, t) {
                    e.param.style = t
                }
            }]),
            e
        }()
          , $ = function() {
            function e() {
                Object(m["a"])(this, e)
            }
            return Object(v["a"])(e, null, [{
                key: "wavyItem",
                value: function(e, t, i, n, s) {
                    return {
                        type: "wavy-line",
                        param: {
                            notex: this.prop.note.x - this.prop.noteOffsetx,
                            notey: s,
                            x1: e,
                            y1: t,
                            x2: i,
                            y2: n
                        }
                    }
                }
            }, {
                key: "yOfLine",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                      , i = this.prop
                      , n = (4 - e) * i.lineh / 2;
                    return t > 1 && (t <= i.staffOffset.length ? n += i.staffOffset[t - 1] : console.log("error staffOffset is smaller than staff")),
                    i.note.basey && !i.jianpu && (n += i.note.basey),
                    n
                }
            }]),
            e
        }()
          , ee = function(e) {
            Object(c["a"])(i, e);
            var t = Object(f["a"])(i);

            function i() {
                return Object(m["a"])(this, i),
                t.apply(this, arguments)
            }
            return Object(v["a"])(i, null, [{
                key: "getDrawItems",
                value: function(e) {
                    var t = this.prop
                      , i = []
                      , n = t.note.x - t.noteOffsetx;
                    t.tabClef = !!t.curClefs && t.curClefs[t.note.staff] === r.TAB;
                    var s = 2 * t.lineh;
                    t.tabClef && t.note.grace ? n -= .5 * s : t.note.grace || t.note.cue ? s *= .7 : "large" === t.note.size && (s *= 1.5);
                    var a = 0;
                    if (t.note.rest) {
                        if (t.staffOffset[t.note.staff - 1] < 0)
                            return i;
                        a = this.yOfLine(t.note.rest.line, t.note.staff);
                        var o = a
                          , l = n;
                        8 === t.note.type ? o -= t.lineh / 2 : 16 === t.note.type || 32 === t.note.type ? (o += .5 * t.lineh,
                        l -= t.lineh / 2) : 64 === t.note.type ? (o += 1.5 * t.lineh,
                        l -= t.lineh / 2) : 128 === t.note.type && (o += 2.5 * t.lineh,
                        l -= t.lineh);
                        var u = q.rest[t.note.type];
                        i.push(X.textItem(l, o, u, s)),
                        this.drawDots(i, n, a - t.lineh / 2, t.note.rest, s),
                        t.note.rest.pairs && this.drawPairs(i, t.note.rest.pairs, a)
                    } else if (t.note.elems) {
                        if (a = this.yOfLine(t.note.elems[0].line, t.note.staff),
                        t.tabClef) {
                            var h = t.note.elems[0]
                              , c = t.note.elems[t.note.elems.length - 1]
                              , f = h.pairs || c.pairs;
                            if (f) {
                                var d = this.yOfElem(c);
                                this.drawPairs(i, f, d)
                            }
                            var p = 70;
                            t.note.type > 4 && (p -= 5),
                            this.drawDots(i, n - 10, p, h, s)
                        }
                        if (t.note.guitarTech ? this.drawGuitarTech(i, s) : this.drawElems(i, n, s, e),
                        this.moreLines(i),
                        t.tabClef && t.note.grace) {
                            var m = n - .6 * t.lineh
                              , v = n + .6 * t.lineh
                              , y = a + .7 * t.lineh;
                            i.push(X.lineItem(m, y, v, y)),
                            i.push(X.lineItem(m, y + 6, v, y + 6)),
                            i.push(X.lineItem(n, y + 6, n, y + 12)),
                            i.push(X.lineItem(n, y + 12, n + 6, y + 12))
                        } else if (t.tabClef && t.note.type < 4) {
                            var g = {
                                y: 70 - a,
                                up: !1
                            };
                            this.drawStem(i, g, s, a),
                            this.drawGuitarDelayLines(i, n)
                        } else if (t.note.stem) {
                            if (this.drawStem(i, t.note.stem, s, a),
                            t.note.grace && t.note.grace.slash)
                                if (t.note.stem.up) {
                                    var b = n + .4 * t.lineh
                                      , x = a + t.note.stem.y + 1.5 * t.lineh;
                                    i.push(X.lineItem(b, x, b + 1.4 * t.lineh, x - 1 * t.lineh))
                                } else {
                                    var k = n - .4 * t.lineh
                                      , _ = a + .5 * t.lineh;
                                    i.push(X.lineItem(k, _, k + 1.4 * t.lineh, _ + 1 * t.lineh))
                                }
                            t.note.beams ? this.drawBeams(i, t.note.beams, a, s) : !t.note.inbeam && t.note.type > 4 && this.drawTail(i, n, a, s)
                        }
                    }
                    var w = n;
                    return t.note.elems && t.note.elems.length > 1 && t.note.elems[0].x && (w += t.note.elems[0].x),
                    this.getArts(i, w, a, s),
                    i
                }
            }, {
                key: "drawElems",
                value: function(e, t, i, n) {
                    var s = this.prop;
                    if (null != s.note.elems) {
                        var r, o = Object(p["a"])(s.note.elems);
                        try {
                            for (o.s(); !(r = o.n()).done; ) {
                                var l = r.value
                                  , u = this.yOfElem(l);
                                l.y = u,
                                !s.tabClef && l.pairs && this.drawPairs(e, l.pairs, u);
                                var h = l.x ? t + l.x : t;
                                if ("none" !== l.head && this.drawNoteHead(e, l, h, u, i, n),
                                l.headtext && this.drawHeadtext(e, l, h, u, i),
                                s.tabClef || this.drawDots(e, t, u, l, i),
                                l.acc) {
                                    var c = h - (s.note.grace || s.note.cue ? .7 * s.lineh : s.lineh);
                                    l.acc.x && (c += l.acc.x),
                                    l.acc.acc === a.DoubleFlat || l.acc.acc === a.DoubleSharp ? c -= .4 * s.lineh : l.acc.acc.endsWith("Caution") && (c -= 1.3 * s.lineh),
                                    e.push(X.textItem(c, u, F["ACC_" + l.acc.acc], i, l.color))
                                }
                                if (l.parentheses) {
                                    var f = u + s.lineh / 2
                                      , d = h - s.lineh;
                                    l.acc && (d -= s.lineh),
                                    e.push(X.textItem(d, f, "(", i, l.color)),
                                    e.push(X.textItem(h + 1.3 * s.lineh, f, ")", i, l.color))
                                }
                            }
                        } catch (m) {
                            o.e(m)
                        } finally {
                            o.f()
                        }
                    }
                }
            }, {
                key: "glyphOfElem",
                value: function(e) {
                    var t;
                    return e.head ? (t = F["NOTE_" + e.head],
                    t || (t = F.NOTE_4,
                    console.log("todo to draw notehead:" + e.head))) : (t = F["NOTE_" + this.prop.note.type],
                    t || (t = this.prop.note.type < 1 ? F.NOTE_DOUBLE_WHOLE : F.NOTE_4)),
                    t
                }
            }, {
                key: "drawNoteHead",
                value: function(e, t, i, n, s, a) {
                    var r, o = this.prop, l = this.glyphOfElem(t);
                    if ("square_f" !== t.head && "diamond" !== t.head && "diamond_n" !== t.head || (s *= .6),
                    "x" === t.head && (o.tabClef ? i -= .15 * s : o.note.stem && o.note.stem.up && (i += .18 * s)),
                    t.color && (r = t.color),
                    t.id && o.wrongNotes && o.wrongNotes.includes(t.id) && (r = "red"),
                    e.push(X.textItem(i, n, l, s, r, t.id)),
                    a) {
                        var u = this.prop.note.type <= 2 ? r : "white"
                          , h = 0 == this.prop.note.type ? i + .3 * s : i + .15 * s;
                        e.push(X.textItem(h, n + .15 * s, t.step + "", .5 * s, u, t.id))
                    }
                }
            }, {
                key: "drawTail",
                value: function(e, t, i, n) {
                    var s, a = this.prop;
                    if (a.note.stem) {
                        var r = a.note.stem.y + i
                          , o = "TAIL_" + a.note.type;
                        a.note.stem.up ? (o += "_UP",
                        r += 1.7 * n) : (o += "_DOWN",
                        r -= 1.7 * n);
                        var l = F[o];
                        l || console.log("error for tail:" + o),
                        e.push(X.textItem(t, r, l, n, null === (s = a.note.stem) || void 0 === s ? void 0 : s.color))
                    }
                }
            }, {
                key: "drawHeadtext",
                value: function(e, t, i, n, s) {
                    var a = t.headtext;
                    if (a) {
                        var r, o, l = this.prop, u = n + .15 * s;
                        if (r = l.note.type >= 2 ? i + .15 * s : i + .26 * s,
                        "none" === t.head)
                            o = "black",
                            u = n + .2 * s,
                            s *= 1.6,
                            r = i - 3 * a.length;
                        else if (l.note.type >= 4)
                            o = "white";
                        else if (o = "black",
                        l.note.type <= 2) {
                            var h = r + .15 * s
                              , c = {
                                type: "line",
                                param: {
                                    x1: h,
                                    y1: n,
                                    x2: h,
                                    y2: n,
                                    stroke: "white",
                                    "stroke-width": .45 * s,
                                    "stroke-linecap": "round"
                                }
                            };
                            e.push(c)
                        }
                        e.push(X.textItem(r, u, a, .45 * s, o))
                    }
                }
            }, {
                key: "drawDots",
                value: function(e, t, i, n, s) {
                    var a = this.prop;
                    if (a.note.dots) {
                        var r = 1.4 * a.lineh;
                        1 === a.note.type ? r += .5 * a.lineh : a.note.type < 1 && (r += 1.2 * a.lineh),
                        void 0 !== n.dotx && (r += n.dotx);
                        var o = n.line % 2 == 0 ? i - a.lineh / 2 : i;
                        n.doty && (o += n.doty);
                        for (var l = 0; l < a.note.dots; l++)
                            e.push(X.textItem(t + r, o, F.ART_staccato, s, n.color)),
                            r += .6 * a.lineh
                    }
                }
            }, {
                key: "getArts",
                value: function(e, t, i, n) {
                    var a = this.prop;
                    if (a.note.arts) {
                        n = 2 * a.lineh,
                        (a.note.grace || a.note.cue) && (n *= .7);
                        var r, o = 0, l = i, u = Object(p["a"])(a.note.arts);
                        try {
                            for (u.s(); !(r = u.n()).done; ) {
                                var h = r.value
                                  , c = t + h.x
                                  , f = l + h.y;
                                h.up || (f -= a.lineh / 3);
                                var d = F["ART_" + h.type];
                                if (h.type === s.fermata)
                                    h.up ? d = F.ART_FERMATA_UP : (d = F.ART_FERMATA_DOWN,
                                    f += a.lineh / 3);
                                else if (h.type === s.accent_staccato)
                                    if (h.up)
                                        d = F.ART_Accent_dot_up;
                                    else {
                                        d = F.ART_accent;
                                        var m = X.textItem(c + .25 * n, f - .3 * n, F.ART_staccato, n);
                                        f += .35 * n,
                                        e.push(m)
                                    }
                                else if (h.type === s.accent_tenuto) {
                                    d = F.ART_accent,
                                    h.up ? f -= .2 * n : f += .2 * n;
                                    var v = X.textItem(c + 0 * n, h.up ? f + .15 * n : f - .65 * n, F.ART_tenuto, n);
                                    e.push(v)
                                } else if (h.type === s.upBow)
                                    d = h.up ? F.ART_BOWUP : F.ART_BOWUP_BELOW;
                                else if (h.type === s.downBow)
                                    d = h.up ? F.ART_BOWDOWN : F.ART_BOWDOWN_BELOW;
                                else if (h.type === s.breathMark)
                                    d = F.ART_breath_mark;
                                else if (h.type === s.detached_legato) {
                                    d = F.ART_tenuto;
                                    var y = X.textItem(c + .2 * n, h.up ? f + .3 * n : f - .3 * n, F.ART_staccato, n);
                                    e.push(y)
                                }
                                if (d) {
                                    var g = X.textItem(c, f, d, n);
                                    if ((h.type === s.staccatissimo || h.type === s.spiccato || h.type === s.strongAccent || h.type === s.scoop) && !h.up) {
                                        var b = g.param;
                                        b.rotate = 180,
                                        h.type === s.scoop ? (b.x += .9 * a.lineh,
                                        b.y -= 1.2 * a.lineh) : (b.x += .5 * a.lineh,
                                        b.y -= .9 * a.lineh)
                                    }
                                    e.push(g)
                                } else if (h.type === s.fingering) {
                                    var x = void 0
                                      , _ = h.id;
                                    if (!_ && this.prop.note.elems && this.prop.note.elems.length > 0) {
                                        var w = void 0;
                                        w = o < this.prop.note.elems.length ? this.prop.note.elems[this.prop.note.elems.length - o - 1].id : this.prop.note.elems[0].id,
                                        _ = "fg_" + h.val + "_" + w,
                                        h.id = _
                                    }
                                    h.color ? x = h.color : h.hide && (x = k.uitool ? "red" : "rgba(0,0,0,0)");
                                    var S = X.textItem(c, f, q.num[h.val || 1], .6 * n, x, _);
                                    !k.uitool && h.hide && X.setStyle(S, "visibility: hidden;"),
                                    !0 === h.alternate && e.push(X.textItem(c - 7, f + 5, "-", 1 * n)),
                                    e.push(S),
                                    o++
                                } else if (h.type === s.arpeggiate && a.note.elems) {
                                    var A = a.note.elems[0]
                                      , O = a.note.elems[a.note.elems.length - 1]
                                      , T = void 0 === h.line1 ? O.line : h.line1
                                      , I = void 0 === h.line2 ? A.line : h.line2
                                      , j = void 0 === h.staff1 ? O.staff || a.note.staff : h.staff1
                                      , M = void 0 === h.staff2 ? O.staff || a.note.staff : h.staff2
                                      , N = this.yOfLine(T, j) - a.lineh
                                      , C = this.yOfLine(I, M) + a.lineh
                                      , E = 0 === h.x ? -.8 * a.lineh : h.x;
                                    if (e.push(this.wavyItem(E, 0, E, C - N, N)),
                                    h.down) {
                                        var B = this.prop.note.x + E;
                                        e.push(X.textItem(B, C + .5 * n, F.ART_staccatissimo, 1.5 * n))
                                    }
                                } else if (h.type === s.fret_string) {
                                    var P = (h.line - .5) * a.lineh
                                      , R = {
                                        x: t + h.x,
                                        y: P,
                                        "font-size": .8 * n,
                                        "font-weight": "bold"
                                    }
                                      , D = {
                                        type: "text",
                                        text: h.val + "",
                                        param: R
                                    };
                                    e.push(D)
                                } else
                                    console.log("Todo to draw note art:" + h.type);
                                if (h.marks) {
                                    var L, W = c + a.lineh, U = f - 2.2 * a.lineh, J = Object(p["a"])(h.marks);
                                    try {
                                        for (J.s(); !(L = J.n()).done; ) {
                                            var z = L.value;
                                            z.y && (U = l + z.y),
                                            e.push(X.textItem(W, U, F["ACC_" + z.acc], 1.3 * a.lineh)),
                                            U += 2.4 * a.lineh
                                        }
                                    } catch (H) {
                                        J.e(H)
                                    } finally {
                                        J.f()
                                    }
                                }
                            }
                        } catch (H) {
                            u.e(H)
                        } finally {
                            u.f()
                        }
                    }
                }
            }, {
                key: "moreLines",
                value: function(e) {
                    var t = this.prop;
                    if (!t.note.rest && t.note.elems) {
                        var i = t.note.elems[0]
                          , n = t.note.elems[t.note.elems.length - 1];
                        this.getMoreLines(e, i),
                        this.getMoreLines(e, n)
                    }
                }
            }, {
                key: "getMoreLines",
                value: function(e, t) {
                    var i = this.prop
                      , n = 0
                      , s = 0
                      , a = t.staff || i.note.staff
                      , r = 5;
                    if (i.staffLines && i.staffLines[a] && (r = i.staffLines[a]),
                    t.line > r ? (s = Math.floor((t.line - 6) / 2) + 1,
                    n = -s * i.lineh) : t.line < -r && (s = Math.floor((-t.line - 6) / 2) + 1,
                    n = 5 * +i.lineh),
                    0 !== n) {
                        var o = k.elemStaff(i.note, t);
                        o > 1 && (n += i.staffOffset[o - 1]);
                        var l = i.note.x - i.noteOffsetx - .2 * i.lineh;
                        t.x && (l += t.x);
                        var u, h = l;
                        i.note.grace || i.note.cue ? u = l + 1.2 * i.lineh : "arrow up" === t.head ? (h = l - .7 * i.lineh,
                        u = l + 1 * i.lineh) : "circle-x" === t.head ? (h = l - .4 * i.lineh,
                        u = l + 1.7 * i.lineh) : u = i.note.type <= 1 ? l + 2 * i.lineh : l + 1.7 * i.lineh;
                        for (var c = 0; c < s; c++) {
                            var f = X.lineItem(h, n, u, n);
                            e.push(f),
                            n += i.lineh
                        }
                    }
                }
            }, {
                key: "yOfElem",
                value: function(e) {
                    var t = k.elemStaff(this.prop.note, e);
                    return this.yOfLine(e.line, t)
                }
            }, {
                key: "getStemx",
                value: function(e) {
                    var t = this.prop
                      , i = t.note.x - t.noteOffsetx + .025 * e;
                    return t.note.stem && t.note.stem.up && (i += .556 * e),
                    i
                }
            }, {
                key: "drawStem",
                value: function(e, t, i, n) {
                    var s = this.prop;
                    if (s.note.elems) {
                        var a, r, o = s.note.elems[0], l = s.note.elems[s.note.elems.length - 1], u = this.getStemx(i), h = k.elemStaff(s.note, l), c = k.elemStaff(s.note, o);
                        if (t.up)
                            a = this.yOfLine(o.line, c),
                            "x" === o.head || "none" === o.head ? a -= .2 * i : "do" === o.head && (a += .2 * i);
                        else if (!s.tabClef || "x" !== l.head && "none" !== l.head)
                            a = this.yOfLine(l.line, h),
                            "x" !== l.head && "none" !== l.head || (a += .15 * i);
                        else {
                            if (!s.note.guitarTech && s.note.elems.length > 1)
                                for (var f = 1; f < s.note.elems.length; f++) {
                                    var d = s.note.elems[f]
                                      , m = s.note.elems[f - 1];
                                    if (d.line > m.line + 2) {
                                        var v = this.yOfLine(m.line, c) - .5 * s.lineh
                                          , y = this.yOfLine(d.line, c) + .5 * s.lineh;
                                        e.push(X.lineItem(u, v, u, y, .1 * s.lineh, t.color))
                                    }
                                }
                            a = this.yOfLine(o.line, c) + .8 * s.lineh
                        }
                        if (r = void 0 !== t.y ? t.y * s.lineh / 10 + n : t.up ? this.yOfLine(l.line, h) - 3 * s.lineh : this.yOfLine(o.line, c) + 3 * s.lineh,
                        !t.up && 2 === s.note.elems.length && void 0 !== l.x && l.x > 15) {
                            a += 2,
                            u -= 2;
                            var g = u + l.x / 2
                              , b = (a + r) / 2;
                            return e.push(X.lineItem(g, b, g, r, .1 * s.lineh, t.color)),
                            e.push(X.lineItem(g, b, u + l.x + 2, a, .1 * s.lineh, t.color)),
                            void e.push(X.lineItem(g, b, u, a, .1 * s.lineh, t.color))
                        }
                        e.push(X.lineItem(u, a, u, r, .1 * s.lineh, t.color));
                        var x, _ = Object(p["a"])(s.note.elems);
                        try {
                            for (_.s(); !(x = _.n()).done; ) {
                                var w = x.value;
                                void 0 !== w.x && w.x > 15 && e.push(X.lineItem(u, (a + r) / 2, u + w.x, a, .1 * s.lineh, t.color))
                            }
                        } catch (S) {
                            _.e(S)
                        } finally {
                            _.f()
                        }
                    }
                }
            }, {
                key: "drawGuitarTech",
                value: function(e, t) {
                    var i = this.prop.note.elems;
                    if (null != i) {
                        var n = i[0]
                          , s = i[i.length - 1]
                          , a = this.getStemx(t)
                          , r = k.elemStaff(this.prop.note, s)
                          , o = k.elemStaff(this.prop.note, n)
                          , l = this.yOfLine(s.line, r) - 2
                          , u = this.yOfLine(n.line, o) + 2
                          , h = this.prop.note.guitarTech;
                        if ("V" === h || "U" === h)
                            e.push(X.lineItem(a, l, a, u, 1));
                        else if ("A" === h || "B" === h) {
                            var c = {
                                notex: a - 3,
                                notey: 18,
                                x1: 0,
                                y1: l,
                                x2: 0,
                                y2: u - 15
                            };
                            e.push({
                                type: "wavy-line",
                                param: c
                            })
                        } else
                            console.log("todo to support guitar tech", h);
                        "V" === h || "B" === h ? (e.push(X.lineItem(a - 3, l + 8, a, l, 1)),
                        e.push(X.lineItem(a + 3, l + 8, a, l, 1))) : (e.push(X.lineItem(a - 3, u - 8, a, u, 1)),
                        e.push(X.lineItem(a + 3, u - 8, a, u, 1)))
                    }
                }
            }, {
                key: "drawGuitarDelayLines",
                value: function(e, t) {
                    var i, n = this.prop, s = 2 === n.note.type ? 1 : 3;
                    n.note.dots && (s += 1),
                    n.nextNote && n.nextNote.staff === n.note.staff && n.nextNote.tick > n.note.tick ? i = n.nextNote.x - n.note.x : (i = n.measWidth - n.note.x,
                    s > 3 && (i -= n.measMargin));
                    for (var a = i / (s + 1), r = t, o = 2.5 * n.lineh, l = 0; l < s; l++)
                        r += a,
                        e.push(X.lineItem(r, o, r + 1 * n.lineh, o, .2 * n.lineh))
                }
            }, {
                key: "drawBeams",
                value: function(e, t, i, n) {
                    var s, a = this.prop;
                    if (a.note.elems) {
                        var r = a.note.elems[0].staff;
                        r || (r = a.note.staff);
                        var o, l = a.note.stem && a.note.stem.up, u = this.getStemx(n) - .5, h = null === (s = a.note.stem) || void 0 === s ? void 0 : s.color, c = a.tabClef || a.note.grace || a.note.cue ? .4 * a.lineh : .5 * a.lineh, f = Object(p["a"])(t);
                        try {
                            for (f.s(); !(o = f.n()).done; ) {
                                var d = o.value
                                  , m = d.y1 * a.lineh / 10 + i
                                  , v = void 0 !== d.up2 ? d.up2 : l
                                  , y = (v ? .6 * n : .1 * a.lineh) - a.noteOffsetx;
                                void 0 !== d.n2 ? (d.n2 >= a.notes.length && console.log("error for beam note:" + d.n2 + "/" + a.notes.length),
                                y += a.notes[d.n2].x) : y += a.note.x + d.x2;
                                var g = d.y2 * a.lineh / 10 + i;
                                l && !v ? (m += .6 * c,
                                g -= 1.4 * c) : l && v ? (m += .5 * c,
                                g += .5 * c) : (m -= .5 * c,
                                g -= .5 * c),
                                e.push(X.lineItem(u, m, y, g, c, h))
                            }
                        } catch (b) {
                            f.e(b)
                        } finally {
                            f.f()
                        }
                    }
                }
            }, {
                key: "drawPairs",
                value: function(e, t, i) {
                    var n = this.prop
                      , s = n.note.x - n.noteOffsetx;
                    n.tabClef && (s -= 5);
                    var a, r = Object(p["a"])(t);
                    try {
                        for (r.s(); !(a = r.n()).done; ) {
                            var o = a.value;
                            if ("slur" === o.type || "tied" === o.type) {
                                var l = i;
                                "slur" === o.type && o.up && n.note.elems && (l = this.yOfElem(n.note.elems[n.note.elems.length - 1]));
                                var u = {
                                    notex: s,
                                    notey: l,
                                    slur: o,
                                    stemup: !1,
                                    tied: !1,
                                    tieText: n.note.tieText,
                                    lineh: n.lineh,
                                    staffDistance: n.staffDistance
                                };
                                n.note.stem && (u.stemup = n.note.stem.up || !1),
                                "tied" === o.type && (u.tied = !0),
                                e.push({
                                    type: "slur",
                                    param: u
                                })
                            } else
                                "tuplet" === o.type || "slide" === o.type || "tremolo" === o.type ? e.push({
                                    type: o.type,
                                    param: Object.assign({
                                        notex: s,
                                        notey: i
                                    }, o)
                                }) : "wavy-line" === o.type || "glissando" === o.type ? e.push({
                                    type: "wavy-line",
                                    param: Object.assign({
                                        notex: s,
                                        notey: i
                                    }, o)
                                }) : console.log("Todo to draw note pairs:" + o.type)
                        }
                    } catch (h) {
                        r.e(h)
                    } finally {
                        r.f()
                    }
                }
            }]),
            i
        }($)
          , te = function(e) {
            Object(c["a"])(i, e);
            var t = Object(f["a"])(i);

            function i() {
                return Object(m["a"])(this, i),
                t.apply(this, arguments)
            }
            return Object(v["a"])(i, null, [{
                key: "getDrawItems",
                value: function() {
                    var e, t = this.prop, i = [];
                    e = void 0 !== t.note.colx ? t.note.colx - t.noteOffsetx : t.note.x - t.noteOffsetx;
                    var n, s = 2.5 * t.lineh;
                    if (void 0 === t.note.v)
                        n = this.yOfLine(-4, t.note.staff);
                    else {
                        var a = t.note.elems ? t.note.elems.length : 1;
                        n = this.yOfLine(3 - (7 + 2 * a) * t.note.v, t.note.staff)
                    }
                    t.note.grace && (s *= .55,
                    n -= 1.8 * t.lineh,
                    e -= .2 * s);
                    var r = n;
                    if (t.note.rest) {
                        var o = t.measWidth
                          , l = n
                          , u = t.note.rest.nums
                          , c = o / 4;
                        if (1 === t.note.type)
                            e = t.measMargin - t.noteOffsetx,
                            c = u ? (o - e) / u : (o - e) / 4;
                        else if (2 === t.note.type) {
                            u = 2,
                            0 === t.note.tick && (e = t.measMargin - t.noteOffsetx);
                            var f = t.nextNote ? t.nextNote.x - t.noteOffsetx : 0;
                            f < e && (f = t.measWidth),
                            c = (f - e) / 2
                        }
                        for (var d = 0; d < u; d++)
                            if ("x" === t.note.rest.head)
                                i.push(X.textItem(e, l - .2 * s, F.NOTE_x, s));
                            else {
                                var p = X.textItem(e + c * d, l, "0", s);
                                p.param["font-weight"] = "bold",
                                i.push(p)
                            }
                        if (t.note.dots && t.note.type > 2)
                            for (var m = .6 * s, v = l - .3 * s, y = 0; y < t.note.dots; y++)
                                i.push(X.textItem(e + m, v, F.ART_staccato, s)),
                                m += y * t.lineh;
                        r -= s
                    } else if (t.note.elems) {
                        for (var g = n, b = t.note.elems.length > 1 ? .75 : 1, x = s * b, k = 0; k < t.note.elems.length; k++) {
                            var _ = t.note.elems[k]
                              , w = this.jianpuOfStep(_.step, _.octave)
                              , S = Object(h["a"])(w, 2)
                              , A = S[0]
                              , O = S[1];
                            if (O < 4) {
                                var T = 4 - O
                                  , I = .25 * s
                                  , j = g + .2 * x;
                                k > 0 ? (g -= T * I,
                                j -= T * I) : t.note.grace ? (j -= .2 * x,
                                g -= .2 * x) : t.note.type > 4 && (j += .1 * x,
                                t.note.type > 8 && (j += .1 * x));
                                for (var M = e + .2 * s, N = 0; N < T; N++)
                                    i.push(X.textItem(M, j, F.ART_staccato, .9 * s)),
                                    j += I
                            }
                            var C = void 0;
                            if (_.color && (C = _.color),
                            "x" === _.head) {
                                var E = g - .2 * x;
                                i.push(X.textItem(e, E, F.NOTE_x, s, C, _.id))
                            } else {
                                var B = 1 === A ? e - 1 : e
                                  , P = X.textItem(B, g / b, A + "", s, C, _.id);
                                1 !== b && (P.param.style = "transform: scale(1,".concat(b, ");")),
                                P.param["font-weight"] = "bold",
                                i.push(P),
                                "circle" === _.enclosure && (b < 1 ? i.push(X.circleItem(e + 7, g - .37 * x, 10, "rgba(0,0,0,0)")) : i.push(X.circleItem(e + 7, g - .35 * x, 12, "rgba(0,0,0,0)")))
                            }
                            if (t.note.dots && t.note.type > 2)
                                for (var R = e + .6 * s, D = g - .3 * x, q = 0; q < t.note.dots; q++)
                                    i.push(X.textItem(R, D, F.ART_staccato, s)),
                                    R += t.lineh;
                            if (O > 4)
                                for (var L = O - 4, W = .25 * s, U = e + .2 * s, J = 0; J < L; J++) {
                                    var z = g - .9 * x;
                                    i.push(X.textItem(U, z, F.ART_staccato, .9 * s)),
                                    g -= W
                                }
                            var H = this.getAcc(t.curFifths, _, _.step);
                            if (H) {
                                var V = e - .25 * s;
                                H.endsWith("Caution") && (V -= .3 * x);
                                var G = g - .6 * x;
                                i.push(X.textItem(V, G, F["ACC_" + H], .6 * s, C, _.id))
                            }
                            g -= x
                        }
                        r = g + .15 * x;
                        var K = t.note.elems[0];
                        K.pairs && (this.getPairs(i, K.pairs, n, r - 3),
                        r -= .3 * x)
                    }
                    return this.drawBelowLines(i, e, n, s),
                    this.getArts(i, e, n, r, s),
                    i
                }
            }, {
                key: "jianpuOfStep",
                value: function(e, t) {
                    var i = e + 6;
                    return 1 === this.prop.jianpu && (i += this.jianpuSteps[this.prop.curFifths + 7]),
                    [i % 7 + 1, t + Math.floor(i / 7) - 1]
                }
            }, {
                key: "getAcc",
                value: function(e, t, i) {
                    if (2 === this.prop.jianpu)
                        return 1 === t.alter ? a.Sharp : -1 === t.alter ? a.Flat : 2 === t.alter ? a.DoubleSharp : -2 === t.alter ? a.DoubleFlat : null;
                    var n = t.acc ? t.acc.acc : null;
                    if (null === n)
                        return null;
                    var s = n;
                    if (0 !== e && n)
                        for (var r = [4, 1, 5, 2, 6, 3, 7], o = Math.abs(e), l = 0; l < o; l++) {
                            if (e > 0 && i === r[l]) {
                                "Natural" === n ? s = a.Flat : "DoubleSharp" === n ? s = a.Sharp : "Sharp" === n ? s = null : "Flat" === n && (s = a.DoubleFlat);
                                break
                            }
                            if (e < 0 && i === r[6 - l]) {
                                "Natural" === n ? s = a.Sharp : "DoubleFlat" === n ? s = a.Flat : "Sharp" === n ? s = a.DoubleSharp : "Flat" === n && (s = null);
                                break
                            }
                        }
                    return s
                }
            }, {
                key: "getArts",
                value: function(e, t, i, n, s) {
                    var a = this.prop;
                    if (a.note.arts) {
                        var r = i - .4 * s
                          , o = i;
                        a.note.elems ? (r -= (a.note.elems.length - 1) * s * 1.2,
                        o = n) : o = i - 2.5 * a.lineh;
                        var l, u = Object(p["a"])(a.note.arts);
                        try {
                            for (u.s(); !(l = u.n()).done; ) {
                                var h = l.value;
                                if ("tenuto" !== h.type) {
                                    var c = h.x
                                      , f = F["ART_" + h.type];
                                    if ("fermata" === h.type ? (f = F.ART_FERMATA_UP,
                                    c = .35 * -a.lineh) : "accent_staccato" === h.type ? f = F.ART_accent : "up-bow" === h.type ? f = h.up ? F.ART_BOWUP : F.ART_BOWUP_BELOW : "down-bow" === h.type ? f = h.up ? F.ART_BOWDOWN : F.ART_BOWDOWN_BELOW : "staccatissimo" === h.type ? c = .17 * s : "staccato" === h.type && (f = F.ART_staccatoJianpu,
                                    c = .15 * s),
                                    f)
                                        e.push(X.textItem(t + c, o, f, .65 * s)),
                                        o -= a.lineh;
                                    else if ("fingering" === h.type && h.val) {
                                        var d = void 0;
                                        f = this.fingers[h.val - 1],
                                        a.note.elems && 1 === a.note.elems.length ? (d = t,
                                        r = o,
                                        o -= 1.2 * a.lineh) : d = t + .6 * s;
                                        var m = X.textItem(d, r, f, .5 * s, "blue");
                                        e.push(m),
                                        r += 1.2 * s
                                    } else if ("arpeggiate" === h.type) {
                                        var v = 0 === h.x ? -.8 * a.lineh : h.x
                                          , y = i - n;
                                        h.staff2 && (y += a.staffDistance + 4 * a.lineh),
                                        e.push(this.wavyItem(v, 0, v, y, n))
                                    } else
                                        console.log("Todo to draw art:" + h.type)
                                }
                            }
                        } catch (g) {
                            u.e(g)
                        } finally {
                            u.f()
                        }
                    }
                }
            }, {
                key: "drawBelowLines",
                value: function(e, t, i, n) {
                    var s = this.prop
                      , a = i + .2 * s.lineh;
                    if (s.note.beams) {
                        var r, o = Object(p["a"])(s.note.beams);
                        try {
                            for (o.s(); !(r = o.n()).done; ) {
                                var l = r.value
                                  , u = a + 3 * (l.i || 0)
                                  , h = .5 * n;
                                void 0 !== l.n2 ? h += s.notes[l.n2].x : h += t,
                                e.push(X.lineItem(t, u, h, u, .1 * s.lineh))
                            }
                        } catch (T) {
                            o.e(T)
                        } finally {
                            o.f()
                        }
                    } else if (!s.note.inbeam && s.note.type > 4) {
                        if (s.note.rest && s.note.tick % s.beatTicks != 0)
                            return;
                        var c = 1;
                        16 === s.note.type ? c = 2 : 32 === s.note.type ? c = 3 : 64 === s.note.type ? c = 4 : 128 === s.note.type && (c = 5);
                        var f, d = t;
                        f = s.nextNote && s.nextNote.rest !== s.note.rest && s.nextNote.tick % s.beatTicks != 0 ? s.nextNote.x + .5 * n : d + .6 * n;
                        var m = 3
                          , v = .1 * s.lineh;
                        if (s.note.grace) {
                            m = 2,
                            f -= .1 * s.lineh;
                            var y = d + .35 * s.lineh
                              , g = a + c * m + .2 * s.lineh;
                            e.push(X.lineItem(y, g - .4 * s.lineh, y, g, v)),
                            e.push(X.lineItem(y, g, d + .8 * s.lineh, g, v))
                        }
                        for (var b = 0; b < c; b++) {
                            var x = a + b * m;
                            e.push(X.lineItem(d, x, f, x, v))
                        }
                    } else if (!s.note.rest && s.note.type < 4) {
                        var k, _ = 2 === s.note.type ? 1 : 3;
                        s.note.dots && (_ += 1),
                        s.nextNote && s.nextNote.staff === s.note.staff && s.nextNote.tick > s.note.tick ? k = s.nextNote.x - s.note.x : (k = s.measWidth - s.note.x,
                        _ > 3 && (k -= s.measMargin));
                        for (var w = k / (_ + 1), S = t, A = a - .7 * s.lineh, O = 0; O < _; O++)
                            S += w,
                            e.push(X.lineItem(S, A, S + .4 * n, A, .1 * s.lineh))
                    }
                }
            }, {
                key: "getPairs",
                value: function(e, t, i, n) {
                    var s, a = this.prop, r = Object(p["a"])(t);
                    try {
                        for (r.s(); !(s = r.n()).done; ) {
                            var o = s.value;
                            if ("slur" === o.type || "tied" === o.type) {
                                if (!a.note.grace) {
                                    var l = {
                                        notex: a.note.x,
                                        notey: n,
                                        slur: o,
                                        lineh: a.lineh,
                                        jianpu: !0
                                    };
                                    e.push({
                                        type: "slur",
                                        param: l
                                    })
                                }
                            } else if ("tuplet" === o.type || "tremolo" === o.type) {
                                var u = -a.lineh
                                  , h = Object.assign(Object.assign({
                                    notex: a.note.x,
                                    notey: n
                                }, o), {
                                    y1: u,
                                    y2: u,
                                    up: !0,
                                    jianpu: !0
                                });
                                e.push({
                                    type: "tuplet",
                                    param: h
                                })
                            } else
                                "slide" === o.type ? e.push({
                                    type: "slide",
                                    param: Object.assign(Object.assign({
                                        notex: a.note.x,
                                        notey: i
                                    }, o), {
                                        jianpu: !0
                                    })
                                }) : "wavy-line" === o.type || "glissando" === o.type ? e.push({
                                    type: "wavy-line",
                                    param: Object.assign(Object.assign({
                                        notex: a.note.x,
                                        notey: i
                                    }, o), {
                                        jianpu: !0
                                    })
                                }) : console.log("Todo to draw jianpu pair:" + o.type)
                        }
                    } catch (c) {
                        r.e(c)
                    } finally {
                        r.f()
                    }
                }
            }]),
            i
        }($);
        te.fingers = ["一", "二", "三", "四", "五"],
        te.jianpuSteps = [0, -4, -1, -5, -2, 1, -3, 0, -4, -1, -5, -2, 1, -3, 0];
        var ie = function() {
            function e() {
                Object(m["a"])(this, e)
            }
            return Object(v["a"])(e, null, [{
                key: "getDrawItems",
                value: function(e, t, i) {
                    return $.prop = e,
                    t ? te.getDrawItems() : ee.getDrawItems(i)
                }
            }, {
                key: "yOfLine",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    return $.prop = e,
                    $.yOfLine(t, i)
                }
            }]),
            e
        }()
          , ne = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    class: e.noteClass
                }, [e._l(e.items, (function(t, n) {
                    return ["text" == t.type ? i("text", e._b({
                        key: n
                    }, "text", t.param, !1), [e._v(e._s(t.text))]) : "line" == t.type ? i("line", e._b({
                        key: n
                    }, "line", t.param, !1)) : "wavy-line" == t.type ? i("NoteWaveline", e._b({
                        key: n,
                        attrs: {
                            lineh: e.lineh
                        }
                    }, "NoteWaveline", t.param, !1)) : "slur" == t.type ? i("NoteSlur", e._b({
                        key: n
                    }, "NoteSlur", t.param, !1)) : "tuplet" == t.type ? i("NoteTuplet", e._b({
                        key: n
                    }, "NoteTuplet", t.param, !1)) : "slide" == t.type ? i("NoteSlide", e._b({
                        key: n
                    }, "NoteSlide", t.param, !1)) : "tremolo" == t.type ? i("NoteTremolo", e._b({
                        key: n
                    }, "NoteTremolo", t.param, !1)) : e._e()]
                }
                )), e._v(" "), e.note.lyrics ? [i("NoteLyrics", {
                    attrs: {
                        lyrics: e.note.lyrics,
                        x: e.noteOffsetx,
                        y: e.yOfLine(4, e.note.staff)
                    }
                })] : e._e()], 2)
            },
            staticRenderFns: []
        }, void 0, {
            name: "SvgNoteElem",
            props: {
                lineh: Number,
                noteOffsetx: {
                    type: Number,
                    default: 0
                },
                staffDistance: Number,
                curFifths: Number,
                notes: Array,
                staffLines: Object,
                staffOffset: Array,
                trackIndex: Number,
                wrong_notes: Array,
                note: Object,
                jianpu: Number,
                innerJianpu: Number,
                nextNote: Object,
                measMargin: Number,
                measWidth: Number,
                beatTicks: Number
            },
            components: {
                NoteLyrics: Z,
                NoteWaveline: H,
                NoteSlur: K,
                NoteTuplet: V,
                NoteSlide: Q,
                NoteTremolo: Y
            },
            data: function() {
                var e = "";
                return void 0 !== this.trackIndex && this.note.staff && (e = "track" + (this.trackIndex + this.note.staff - 1)),
                {
                    noteClass: e
                }
            },
            computed: {
                items: function() {
                    return ie.getDrawItems(this._props, this.jianpu, this.innerJianpu)
                },
                style: function() {
                    var e = "";
                    return this.jianpu || (e += "font-size: " + 2 * this.lineh + ";"),
                    e
                }
            },
            methods: {
                yOfLine: function(e, t) {
                    return ie.yOfLine(this._props, e, t)
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , se = function() {
            function e() {
                Object(m["a"])(this, e)
            }
            return Object(v["a"])(e, null, [{
                key: "clefGlyphs",
                value: function(e) {
                    var t, i = [], n = e.lineh, s = Object(p["a"])(e.clefs);
                    try {
                        for (s.s(); !(t = s.n()).done; ) {
                            var a = t.value
                              , r = e.basey + 1 * n;
                            e.staffOffset && (r += e.staffOffset[a.staff - 1]),
                            "Treble" === a.clef || "Treble8va" === a.clef || "Treble8vb" === a.clef ? r += 2 * n : "Percussion" === a.clef ? r += 1 * n : "TAB" === a.clef && (r += 2 * n);
                            var o = 2 * n;
                            a.scale ? o *= a.scale : e.scale && (o *= e.scale);
                            var l = F["Clef_" + a.clef];
                            l || (l = a.clef.startsWith("Bass") ? F.Clef_Bass : F.Clef_Middle,
                            r -= (this.lineOfClef[a.clef] - 4) * n);
                            var u = "track" + (e.trackIndex + a.staff - 1)
                              , h = {
                                x: a.x,
                                y: r,
                                "font-size": o,
                                class: u
                            };
                            i.push({
                                param: h,
                                text: l
                            })
                        }
                    } catch (c) {
                        s.e(c)
                    } finally {
                        s.f()
                    }
                    return i
                }
            }]),
            e
        }();
        se.lineOfClef = {
            Alto: 3,
            UpAlto: 4,
            DownDownAlto: 1,
            DownAlto: 2,
            UpUpAlto: 5,
            Percussion: 1,
            Bass3: 3,
            Bass2: 2,
            Bass1: 1
        };
        var ae = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", e._l(e.clefGlyphs, (function(t, n) {
                    return i("text", e._b({
                        key: "c" + n
                    }, "text", t.param, !1), [e._v(e._s(t.text))])
                }
                )), 0)
            },
            staticRenderFns: []
        }, void 0, {
            name: "SvgClef",
            props: {
                basey: {
                    type: Number,
                    default: 0
                },
                clefs: Array,
                lineh: Number,
                staffOffset: Array,
                scale: Number,
                trackIndex: Number
            },
            computed: {
                clefGlyphs: function() {
                    return se.clefGlyphs(this._props)
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , re = new Set(["augmented", "diminished", "diminished-seventh", "diminished-11th", "major-sixth", "dominant", "dominant-ninth", "dominant-11th", "dominant-13th", "major-seventh", "major-ninth", "major-11th", "major-13th", "major-add9", "major_add11", "major_sixth_add9", "suspended-second", "suspended-fourth", "half-diminished"])
          , oe = {
            major: "",
            minor: "m",
            augmented: "+",
            diminished: "o",
            dominant: "7",
            "major-seventh": "maj7",
            "minor-seventh": "m7",
            "diminished-seventh": "o7",
            "augmented-seventh": "+7",
            "half-diminished": "ø7",
            "major-minor": "m(maj7)",
            "major-sixth": "6",
            "minor-sixth": "m6",
            "major-add9": "add9",
            major_add11: "add11",
            major_sixth_add9: "6add9",
            "dominant-ninth": "9",
            "major-ninth": "maj9",
            "minor-ninth": "m9",
            "diminished-11th": "o11",
            "dominant-11th": "11",
            "major-11th": "maj11",
            "minor-major-11th": "-maj11",
            "minor-11th": "m11",
            "dominant-13th": "13",
            "major-13th": "maj13",
            "minor-major-13th": "-maj13",
            "minor-13th": "m13",
            "suspended-second": "(sus2)",
            "suspended-fourth": "(sus4)"
        }
          , le = {
            0: 0,
            7: 0,
            "-7": 0,
            2: 1,
            "-5": 1,
            4: 2,
            "-3": 2,
            6: 3,
            "-1": 3,
            1: 4,
            "-6": 4,
            3: 5,
            "-4": 5,
            5: 6,
            "-2": 6
        }
          , ue = ["①", "②", "③", "④", "⑤", "⑥", "⑦"]
          , he = ["C", "D", "E", "F", "G", "A", "B"]
          , ce = function() {
            function e() {
                Object(m["a"])(this, e)
            }
            return Object(v["a"])(e, null, [{
                key: "getItems",
                value: function(e) {
                    var t = []
                      , i = this.getFrameItems(e, t)
                      , n = this.getSpanItems(e)
                      , s = 0
                      , a = 0;
                    i > 0 && (s += .6 * i - .2 * i * n.length,
                    a -= i);
                    var r = {
                        type: "span",
                        param: {
                            x: s,
                            y: a,
                            items: n
                        }
                    };
                    return t.push(r),
                    t
                }
            }, {
                key: "getFrameItems",
                value: function(e, t) {
                    var i = e.harmony.frame;
                    if (i) {
                        var n = .7 * e.lineh
                          , s = (i.strings - 1) * n
                          , a = (i.frets - 1) * n
                          , r = -a;
                        i.baseFret && t.push(X.textItem(-1.3 * n, r + n, "" + (i.baseFret + 1), 1.6 * n));
                        for (var o = 0; o < i.frets; o++) {
                            var l = 0 === o && void 0 === i.baseFret ? 3 : 1;
                            t.push(X.lineItem(-.5, r + o * n, s + .5, r + o * n, l))
                        }
                        for (var u = 0; u < i.strings; u++)
                            t.push(X.lineItem(u * n, 0, u * n, -a));
                        var h, c = [1, 1, 1, 1, 1, 1], f = .3 * n, d = Object(p["a"])(i.notes);
                        try {
                            for (d.s(); !(h = d.n()).done; ) {
                                var m = h.value
                                  , v = n * (6 - m.str)
                                  , y = r + n * m.fret - n / 2;
                                0 === m.fret ? (y -= 1,
                                t.push(X.circleItem(v, y, f, "white"))) : t.push(X.circleItem(v, y, f)),
                                c[m.str - 1] = 0
                            }
                        } catch (k) {
                            d.e(k)
                        } finally {
                            d.f()
                        }
                        for (var g = 0; g < c.length; g++)
                            if (c[g]) {
                                var b = n * (5 - g)
                                  , x = r - n / 2 - 1;
                                t.push(X.lineItem(b - f, x - f, b + f, x + f)),
                                t.push(X.lineItem(b - f, x + f, b + f, x - f))
                            }
                        return 6 * n
                    }
                    return 0
                }
            }, {
                key: "getSpanItems",
                value: function(e) {
                    this.dy = 0,
                    this.lineh = e.lineh;
                    var t = [];
                    if (e.jianpu) {
                        var i = ue[this.jianpuStep(e.harmony.root.step, e.fifths)];
                        t.push({
                            text: i
                        })
                    } else
                        t.push({
                            text: e.harmony.root.step
                        });
                    if (0 === e.harmony.root.alter || e.jianpu || (-1 === e.harmony.root.alter ? t.push(this.dxyItem("♭", -9, -2, 1.6 * e.lineh)) : 1 === e.harmony.root.alter && t.push(this.dxyItem("#", -5, -1, 1.9 * e.lineh))),
                    re.has(e.harmony.kind.type)) {
                        var n = e.harmony.kind.text || oe[e.harmony.kind.type];
                        "" !== n && t.push(this.upItem(n))
                    } else
                        switch (e.harmony.kind.type) {
                        case "minor-sixth":
                            t.push(this.minorItem()),
                            t.push(this.upItem("6"));
                            break;
                        case "minor-seventh":
                            t.push(this.minorItem()),
                            t.push(this.upItem("7"));
                            break;
                        case "minor-ninth":
                            t.push(this.minorItem()),
                            t.push(this.upItem("9"));
                            break;
                        case "minor-11th":
                            t.push(this.minorItem()),
                            t.push(this.upItem("11"));
                            break;
                        case "minor-13th":
                            t.push(this.minorItem()),
                            t.push(this.upItem("13"));
                            break;
                        case "major-minor":
                            t.push(this.minorItem()),
                            t.push(this.upItem("(maj7)"));
                            break;
                        case "minor":
                            t.push(this.minorItem());
                            break;
                        case "major":
                            break;
                        default:
                            var s = e.harmony.kind.text || oe[e.harmony.kind.type];
                            "" !== s && t.push({
                                text: s
                            })
                        }
                    if (e.harmony.degree) {
                        var a = e.harmony.degree;
                        1 === a.alter && "add" === a.type && 7 === a.value ? t.push(this.upItem("(maj".concat(a.value, ")"))) : 0 !== a.alter || "add" !== a.type || 11 !== a.value && 13 !== a.value ? 0 === a.alter ? "add" === a.type ? t.push(this.upItem("(add".concat(a.value, ")"))) : t.push(this.upItem("(".concat(a.type).concat(a.value, ")"))) : 1 === a.alter ? t.push(this.upItem("(#".concat(a.value, ")"))) : -1 === a.alter ? t.push(this.upItem("(b".concat(a.value, ")"))) : (t.push(this.upItem("(")),
                        t.push(this.upItem(a.value + ")"))) : t.push(this.upItem("(maj".concat(a.value, ")")))
                    }
                    if (e.harmony.bass && "" !== e.harmony.bass.step) {
                        var r = e.harmony.bass
                          , o = r.alter;
                        if (e.jianpu) {
                            var l = this.jianpuStep(r.step, e.fifths) + 1;
                            if (o = this.jianpuAlter(r.step, r.alter, e.fifths),
                            t.push(this.dxyItem("/" + l, -5)),
                            r.oct < 4 && r.oct > 0)
                                for (var u = 4 - r.oct, h = 2.1 * e.lineh, c = .65 * -h, f = 0; f < u; f++)
                                    t.push(this.dxyItem(".", c, 4, h)),
                                    c += .1 * h;
                            1 === o ? t.push(this.dxyItem("#", -4)) : -1 === o && t.push(this.dxyItem("♭", -7))
                        } else {
                            var d = r.step;
                            1 === o ? t.push(this.dxyItem("/".concat(d, "#"), -5)) : -1 === o ? t.push(this.dxyItem("/".concat(d, "♭"), -5)) : t.push(this.dxyItem("/" + d, -5))
                        }
                    }
                    return t
                }
            }, {
                key: "upItem",
                value: function(e) {
                    return this.dxyItem(e, -4, -5, 1.1 * this.lineh)
                }
            }, {
                key: "minorItem",
                value: function() {
                    return this.dxyItem("m", -4, 0, 1.6 * this.lineh)
                }
            }, {
                key: "dxyItem",
                value: function(e, t, i, n) {
                    var s = {};
                    return t && (s.dx = t),
                    i ? (s.dy = i,
                    this.dy += i) : this.dy && (s.dy = -this.dy,
                    this.dy = 0),
                    n && (s["font-size"] = n),
                    {
                        text: e,
                        param: s
                    }
                }
            }, {
                key: "jianpuStep",
                value: function(e, t) {
                    var i = le[t];
                    return (7 + he.indexOf(e) - i) % 7
                }
            }, {
                key: "jianpuAlter",
                value: function(e, t, i) {
                    var n = ["F", "C", "G", "D", "A", "E", "B"];
                    if (t > 0 && i > 0) {
                        for (var s = 0; s < i; s++)
                            if (e === n[s]) {
                                t -= 1;
                                break
                            }
                    } else if (t < 0 && i < 0)
                        for (var a = -i, r = 0; r < a; r++)
                            if (e === n[6 - r]) {
                                t += 1;
                                break
                            }
                    return t
                }
            }]),
            e
        }();
        ce.dy = 0,
        ce.lineh = 0;
        var fe = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    attrs: {
                        transform: "translate(" + e.harmony.x + "," + e.y + ")"
                    }
                }, [e._l(e.items, (function(t, n) {
                    return ["text" == t.type ? i("text", e._b({
                        key: "i" + n
                    }, "text", t.param, !1), [e._v(e._s(t.text))]) : e._e(), e._v(" "), "line" == t.type ? i("line", e._b({
                        key: "l" + n
                    }, "line", t.param, !1)) : e._e(), e._v(" "), "circle" == t.type ? i("circle", e._b({
                        key: "c" + n,
                        attrs: {
                            stroke: "black",
                            "stroke-width": "1"
                        }
                    }, "circle", t.param, !1)) : e._e(), e._v(" "), "span" == t.type ? i("text", {
                        key: "s" + n,
                        attrs: {
                            x: t.param.x,
                            y: t.param.y,
                            "font-size": 2 * e.lineh
                        }
                    }, e._l(t.param.items, (function(t, n) {
                        return i("tspan", e._b({
                            key: n
                        }, "tspan", t.param, !1), [e._v(e._s(t.text) + " ")])
                    }
                    )), 0) : e._e()]
                }
                ))], 2)
            },
            staticRenderFns: []
        }, void 0, {
            name: "MeasHarmony",
            props: {
                harmony: Object,
                lineh: Number,
                fifths: Number,
                jianpu: Boolean,
                staffOffset: Array
            },
            data: function() {
                var e = this.harmony.y;
                return this.harmony.staff > 1 && (e += this.staffOffset[this.harmony.staff - 1]),
                {
                    y: e
                }
            },
            computed: {
                items: function() {
                    return ce.getItems(this._props)
                },
                svgItems: function() {
                    return ce.getFrameItems(this._props)
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , de = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", [i("text", {
                    attrs: {
                        x: e.x1 - e.lineh,
                        y: e.y + .8 * e.lineh,
                        "font-size": 2 * e.lineh
                    }
                }, [e._v(e._s(e.text))]), e._v(" "), i("line", {
                    attrs: {
                        x1: e.x1 + 1.5 * e.lineh,
                        x2: e.x2,
                        y1: e.y,
                        y2: e.y,
                        "stroke-dasharray": "5.5",
                        stroke: "black"
                    }
                }), e._v(" "), i("line", {
                    attrs: {
                        x1: e.x2,
                        x2: e.x2,
                        y1: e.y,
                        y2: e.up ? e.y - 5 : e.y + 5,
                        stroke: "black"
                    }
                })])
            },
            staticRenderFns: []
        }, void 0, {
            name: "MeasPdirOctave",
            props: {
                x1: Number,
                y1: Number,
                x2: Number,
                y2: Number,
                line: String,
                staff: Number,
                lineh: Number,
                staffOffset: Array,
                size: Number,
                up: Boolean,
                stopx: Number,
                type: String,
                continueOffset: Number
            },
            data: function() {
                var e = this.y1;
                return this.staff > 1 && this.staffOffset && (e += this.staffOffset[this.staff - 1]),
                {
                    y: e,
                    text: 8 === this.size ? this.up ? F.OCTAVE_8vb : F.OCTAVE_8va : F.OCTAVE_15ma
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , pe = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    attrs: {
                        stroke: "black"
                    }
                }, [i("line", {
                    attrs: {
                        x1: e.x1,
                        x2: e.x2,
                        y1: e.lefty1,
                        y2: e.righty1
                    }
                }), e._v(" "), i("line", {
                    attrs: {
                        x1: e.x1,
                        x2: e.x2,
                        y1: e.lefty2,
                        y2: e.righty2
                    }
                })])
            },
            staticRenderFns: []
        }, void 0, {
            name: "MeasPdirWedge",
            props: {
                x1: Number,
                y1: Number,
                x2: Number,
                y2: Number,
                line: String,
                staff: Number,
                lineh: Number,
                staffOffset: Array,
                continueOffset: Number,
                crescendo: Boolean,
                type: String,
                stopx: Number
            },
            data: function() {
                var e = this.y1
                  , t = this.y2;
                return this.staff > 1 && (e += this.staffOffset[this.staff - 1],
                t += this.staffOffset[this.staff - 1]),
                {
                    lefty: e,
                    righty: t
                }
            },
            computed: {
                lefty1: function() {
                    var e = this.lefty;
                    return this.crescendo ? this.continueOffset && (e -= .2 * this.lineh) : e -= .6 * this.lineh,
                    e
                },
                lefty2: function() {
                    var e = this.lefty;
                    return this.crescendo ? this.continueOffset && (e += .2 * this.lineh) : e += .6 * this.lineh,
                    e
                },
                righty1: function() {
                    var e = this.righty;
                    return this.crescendo ? e -= .6 * this.lineh : 0 === this.continueOffset && (e -= .2 * this.lineh),
                    e
                },
                righty2: function() {
                    var e = this.righty;
                    return this.crescendo ? e += .6 * this.lineh : 0 === this.continueOffset && (e += .2 * this.lineh),
                    e
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , me = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    attrs: {
                        stroke: "black"
                    }
                }, ["down" == e.end1 ? i("line", {
                    attrs: {
                        x1: e.x1,
                        x2: e.x1,
                        y1: e.lefty,
                        y2: e.lefty + 5
                    }
                }) : "up" == e.end1 ? i("line", {
                    attrs: {
                        x1: e.x1,
                        x2: e.x1,
                        y1: e.lefty,
                        y2: e.lefty - 5
                    }
                }) : e._e(), e._v(" "), i("line", e._b({
                    attrs: {
                        x1: e.x1,
                        x2: e.x2,
                        y1: e.lefty,
                        y2: e.righty
                    }
                }, "line", e.lineParam, !1)), e._v(" "), "down" == e.end2 ? i("line", {
                    attrs: {
                        x1: e.x2,
                        x2: e.x2,
                        y1: e.righty,
                        y2: e.righty + 5
                    }
                }) : "up" == e.end2 ? i("line", {
                    attrs: {
                        x1: e.x2,
                        x2: e.x2,
                        y1: e.righty,
                        y2: e.righty - 5
                    }
                }) : e._e()])
            },
            staticRenderFns: []
        }, void 0, {
            name: "MeasPdirBracket",
            props: {
                x1: Number,
                y1: Number,
                x2: Number,
                y2: Number,
                line: String,
                staff: Number,
                lineh: Number,
                staffOffset: Array,
                end1: String,
                end2: String
            },
            data: function() {
                var e = this.y1
                  , t = this.y2;
                return this.staff > 1 && (e += this.staffOffset[this.staff - 1],
                t += this.staffOffset[this.staff - 1]),
                {
                    lefty: e,
                    righty: t
                }
            },
            computed: {
                lineParam: function() {
                    var e = {};
                    return "dashed" === this.line && (e["stroke-dasharray"] = "7,7"),
                    e
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , ve = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", [i("line", {
                    attrs: {
                        x1: e.x1,
                        y1: e.y,
                        x2: e.x1,
                        y2: e.y + 15,
                        stroke: "black"
                    }
                }), e._v(" "), i("line", {
                    attrs: {
                        x1: e.x1,
                        y1: e.y,
                        x2: e.x2,
                        y2: e.y,
                        stroke: "black"
                    }
                }), e._v(" "), e.stop ? i("line", {
                    attrs: {
                        x1: e.x2,
                        y1: e.y,
                        x2: e.x2,
                        y2: e.y + 15,
                        stroke: "black"
                    }
                }) : e._e(), e._v(" "), e.num ? i("text", {
                    attrs: {
                        x: e.x1 + 5,
                        y: e.y + 15
                    }
                }, [e._v(e._s(e.num + "."))]) : e._e()])
            },
            staticRenderFns: []
        }, void 0, {
            name: "MeasEnding",
            props: {
                num: String,
                x1: Number,
                x2: Number,
                y: Number,
                stop: Boolean
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , ye = function() {
            function e(t) {
                var i;
                if (Object(m["a"])(this, e),
                this.items = [],
                this.shapes = [],
                this.measure = t.measure,
                this.curFifths = t.curFifths,
                this.lineh = t.lineh,
                this.staffOffset = t.staffOffset,
                this.wrongEvents = t.wrong_events,
                this.jianpu = t.jianpu,
                this.isFirstMeasure = t.isFirstMeasure,
                this.measureIndex = t.measureIndex,
                this.measures = t.measures,
                this.staffDistance = t.staffDistance,
                this.keyw = t.keyw,
                this.trackIndex = t.trackIndex,
                this.measure.dirs) {
                    var n, s = Object(p["a"])(this.measure.dirs);
                    try {
                        for (s.s(); !(n = s.n()).done; ) {
                            var a = n.value;
                            if ("metronome" !== a.type)
                                if ("graphics" !== a.type)
                                    if ("sym" === a.type && a.text.startsWith("Accord_"))
                                        this.drawSym(a);
                                    else {
                                        var r = a.param ? Object.assign({}, a.param) : {};
                                        r["font-size"] || (r["font-size"] = 1.8 * this.lineh),
                                        a.staff > 1 && this.staffOffset && (r.y += this.staffOffset[a.staff - 1]);
                                        var o = a.text;
                                        if ("Swing!  iq=qK  e" !== o) {
                                            if ("f-p" === o) {
                                                r["font-style"] && (r["font-style"] = void 0);
                                                var l = .7 * r["font-size"]
                                                  , u = r.x - l
                                                  , h = Object.assign(Object.assign({}, r), {
                                                    x: u
                                                });
                                                this.items.push({
                                                    type: "text",
                                                    text: F.f,
                                                    param: h
                                                }),
                                                u += l,
                                                this.items.push(X.lineItem(u, r.y, u + .8 * l, r.y)),
                                                u += .8 * l,
                                                r.x = u,
                                                o = F.p
                                            } else if (a.type) {
                                                if ("pedal" === a.type) {
                                                    if (a.line) {
                                                        this.pedalLines(a);
                                                        continue
                                                    }
                                                    0 === r.y && (r.y = 8 * this.lineh),
                                                    "start" === a.text ? o = F.ART_PEDAL_DOWN : (o = F.ART_PEDAL_UP,
                                                    r.x -= 1.5 * this.lineh)
                                                } else {
                                                    if ("sfp" === o || "sff" === o) {
                                                        var c = Object.assign({}, r);
                                                        this.items.push({
                                                            type: "text",
                                                            text: F.sf,
                                                            param: c
                                                        }),
                                                        r.x += .65 * r["font-size"],
                                                        o = "sfp" === o ? F.p : F.f
                                                    } else
                                                        o = F[o];
                                                    o || console.log("Todo to draw dirs: " + a.type + " text:" + a.text)
                                                }
                                                this.keyw && (r.x -= this.keyw)
                                            } else
                                                "(" === o ? r.x -= .8 * this.lineh : ")" === o && (r.x += 1.5 * this.lineh);
                                            this.items.push({
                                                type: "text",
                                                text: o,
                                                param: r
                                            }),
                                            a.enclosure && this.drawEnclosure(a.enclosure, r.x, r.y)
                                        } else
                                            this.getSwingItems(a.param)
                                    }
                                else
                                    this.drawGraphics(a);
                            else
                                this.getMetronomeItems(a)
                        }
                    } catch (S) {
                        s.e(S)
                    } finally {
                        s.f()
                    }
                }
                if (null != this.measure.mrest) {
                    var f = .1 * this.measure.w + (this.measure.keyw ? this.measure.keyw : 0);
                    if (0 === this.measureIndex) {
                        f += 5 * this.lineh;
                        var d = (null === (i = this.measure.fifths) || void 0 === i ? void 0 : i.fifths) || 0;
                        d && (f += Math.abs(d) * this.lineh)
                    }
                    for (var v = .9 * this.measure.w, y = 0; y < this.measure.staves; y++) {
                        var g = 2 * this.lineh + this.staffOffset[y]
                          , b = X.lineItem(f, g, v, g, 6);
                        this.items.push(b);
                        var x = this.lineh
                          , k = X.lineItem(f, g - x, f, g + x);
                        this.items.push(k);
                        var _ = X.lineItem(v, g - x, v, g + x);
                        this.items.push(_);
                        var w = X.textItem((f + v) / 2, g - 22, "" + this.measure.mrest, 25);
                        this.items.push(w)
                    }
                }
            }
            return Object(v["a"])(e, [{
                key: "flagItems",
                value: function(e) {
                    var t = []
                      , i = e.beats;
                    if (i && e.style) {
                        var n, s = this.measure.keyw || this.lineh, a = this.measure.notes[0], r = Object(p["a"])(this.measure.notes);
                        try {
                            for (r.s(); !(n = r.n()).done; ) {
                                var o = n.value;
                                o.x < a.x && (a = o)
                            }
                        } catch (m) {
                            r.e(m)
                        } finally {
                            r.f()
                        }
                        (!a.rest || a.rest && a.type > 1) && (s = a.x);
                        for (var l = 5 * this.lineh + this.staffDistance / 2, u = e.style.color ? e.style.color : "red", h = e.style.fontSize ? e.style.fontSize : 30, c = (this.measure.w - s) / i, f = 1; f <= i; f++) {
                            var d = X.textItem(s, l, "" + f, h, u);
                            t.push(d),
                            s += c
                        }
                    }
                    return t
                }
            }, {
                key: "getFifthsParam",
                value: function() {
                    var e = this.lineh
                      , t = 0;
                    return this.jianpu && this.measure.fifths && (e += (2 + Math.abs(this.measure.fifths.fifths)) * this.lineh,
                    t -= 2 * this.lineh),
                    {
                        x: e,
                        y: t
                    }
                }
            }, {
                key: "getBarlinex",
                value: function() {
                    var e = 0;
                    return this.isFirstMeasure && (e = this.lineh * (Math.abs(this.curFifths) + 6.5),
                    this.measure.time && (e += 2 * this.lineh)),
                    e
                }
            }, {
                key: "getMeasMargin",
                value: function(e) {
                    var t = 0;
                    return this.jianpu = e,
                    0 === this.measureIndex && this.jianpu ? (t = this.lineh * (Math.abs(this.curFifths) + 9),
                    this.measure.lbar && (t += 2 * this.lineh)) : t = this.jianpu && this.isFirstMeasure ? this.lineh * (Math.abs(this.curFifths) + 6) : this.measure.keyw ? this.measure.keyw : 15,
                    t
                }
            }, {
                key: "getClefs",
                value: function() {
                    if (this.measure.clefs) {
                        var e, t = [], i = Object(p["a"])(this.measure.clefs);
                        try {
                            for (i.s(); !(e = i.n()).done; ) {
                                var n = e.value
                                  , s = n.x;
                                if (0 === s) {
                                    if (this.isFirstMeasure)
                                        continue;
                                    if (s = -2.2 * this.lineh,
                                    this.measureIndex > 0) {
                                        var a = this.measures[this.measureIndex - 1];
                                        a.rbar && "backward" === a.rbar.repeat && (s -= 1.2 * this.lineh)
                                    }
                                } else
                                    s -= 2.5 * this.lineh,
                                    this.keyw && (s -= this.keyw),
                                    s > this.measure.w - 2.5 * this.lineh && (s = this.measure.w - 2.5 * this.lineh);
                                t.push(Object.assign(Object.assign({}, n), {
                                    x: s,
                                    scale: .75
                                }))
                            }
                        } catch (r) {
                            i.e(r)
                        } finally {
                            i.f()
                        }
                        return t
                    }
                }
            }, {
                key: "nextNote",
                value: function(e) {
                    if (this.measure.notes && e < this.measure.notes.length - 1) {
                        var t = this.measure.notes[e]
                          , i = this.measure.notes[e + 1];
                        if (i.tick > t.tick && i.staff === t.staff && i.v === t.v)
                            return i
                    }
                }
            }, {
                key: "drawEnclosure",
                value: function(e, t, i) {
                    "rectangle" === e || "square" === e ? this.shapes.push({
                        component: "rect",
                        param: {
                            x: t - .8 * this.lineh,
                            y: i - 1.8 * this.lineh,
                            width: 2.8 * this.lineh,
                            height: 2.8 * this.lineh,
                            style: "fill:none;stroke-width:1; stroke:rgb(0,0,0)"
                        }
                    }) : "circle" === e ? this.shapes.push({
                        component: "circle",
                        param: {
                            cx: t + .3 * this.lineh,
                            cy: i - .5 * this.lineh,
                            r: .7 * this.lineh,
                            style: "fill:none;stroke-width:1; stroke:rgb(0,0,0)"
                        }
                    }) : console.log("Todo to draw dir enclosure:" + e)
                }
            }, {
                key: "drawGraphics",
                value: function(e) {
                    var t = e.param.x
                      , i = e.param.x1
                      , n = e.param.y
                      , s = e.param.y1;
                    if (e.staff > 1 && this.staffOffset && (n += this.staffOffset[e.staff - 1],
                    s += this.staffOffset[e.staff - 1]),
                    "line" === e.param.graph)
                        this.items.push(X.lineItem(t, n, i, s));
                    else if ("rect" === e.param.graph)
                        this.items.push(X.rectItem(t, n, i - t, s - n, void 0, e.param.rx));
                    else if ("ellipse" === e.param.graph) {
                        var a = (t + i) / 2
                          , r = (n + s) / 2
                          , o = (i - t) / 2
                          , l = Math.abs(s - n) / 2;
                        this.items.push(X.ellipseItem(a, r, o, l, "white"))
                    }
                }
            }, {
                key: "drawSym",
                value: function(e) {
                    if (10 === e.text.length && e.text.startsWith("Accord_")) {
                        var t = e.param.x
                          , i = e.param.y
                          , n = 1.2 * this.lineh;
                        this.items.push(X.circleItem(t, i, n, "rgba(0,0,0,0)")),
                        this.items.push(X.lineItem(t - n, i - 4, t + n, i - 4)),
                        this.items.push(X.lineItem(t - n, i + 4, t + n, i + 4));
                        for (var s = [e.text[7], e.text[8], e.text[9]], a = i - .65 * n, r = 0, o = s; r < o.length; r++) {
                            var l = o[r];
                            "1" === l ? this.drawDot(t - 2, a) : "2" === l && (this.drawDot(t - 6, a),
                            this.drawDot(t + 2, a)),
                            a += .65 * n
                        }
                    }
                }
            }, {
                key: "drawDot",
                value: function(e, t) {
                    var i = {
                        x: e,
                        y: t,
                        "font-size": 1.7 * this.lineh
                    };
                    this.items.push({
                        type: "text",
                        text: F.ART_staccato,
                        param: i
                    })
                }
            }, {
                key: "prevTime",
                value: function() {
                    for (var e = this.measureIndex; e >= 0; e--) {
                        var t = this.measures[e];
                        if (t.time)
                            return t.time
                    }
                }
            }, {
                key: "getSwingItems",
                value: function(e) {
                    var t = e.x
                      , i = e.y;
                    this.items.push({
                        type: "text",
                        text: "Swing!",
                        param: {
                            x: t,
                            y: i,
                            "font-weight": "bold"
                        }
                    }),
                    t += 60,
                    this.swingItems(t, i)
                }
            }, {
                key: "swingItems",
                value: function(e, t) {
                    var i = this.swingNote(e, t, 8);
                    i.beams = [{
                        y1: -2 * this.lineh,
                        y2: -2 * this.lineh,
                        x2: 15
                    }],
                    this.items.push({
                        type: "note",
                        param: i
                    }),
                    e += 15;
                    var s = this.swingNote(e, t, 8);
                    s.inbeam = !0,
                    this.items.push({
                        type: "note",
                        param: s
                    }),
                    e += 15,
                    this.items.push({
                        type: "text",
                        text: "=",
                        param: {
                            x: e,
                            y: t
                        }
                    }),
                    e += 15;
                    var a = this.swingNote(e, t, 4);
                    if (a.elems) {
                        var r = {
                            type: n.tuplet,
                            bracket: !0,
                            up: !0,
                            value: 3,
                            x1: 5,
                            x2: 20,
                            y1: -2 * this.lineh,
                            y2: -2 * this.lineh
                        };
                        a.elems[0].pairs = [r]
                    }
                    this.items.push({
                        type: "note",
                        param: a
                    }),
                    e += 15;
                    var o = this.swingNote(e, t, 8);
                    this.items.push({
                        type: "note",
                        param: o
                    })
                }
            }, {
                key: "swingNote",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , s = new k;
                    s.grace = {
                        slash: !1
                    },
                    s.x = e,
                    s.type = i,
                    s.dots = n,
                    s.stem = {
                        type: "up",
                        up: !0,
                        y: -2 * this.lineh
                    },
                    s.basey = t;
                    var a = k.newElem();
                    return a.line = 3,
                    s.elems = [a],
                    s
                }
            }, {
                key: "metronomeNote",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , s = F[1 === i ? "NOTE_" + i : "NOTE_" + i + "_UP"]
                      , a = e;
                    this.items.push({
                        type: "text",
                        text: s,
                        param: {
                            x: a,
                            y: t,
                            "font-size": 1.7 * this.lineh
                        }
                    }),
                    a += 1.5 * this.lineh;
                    for (var r = n || 0, o = 0; o < r; o++) {
                        var l = {
                            x: a,
                            y: t,
                            "font-size": 1.7 * this.lineh
                        };
                        this.items.push({
                            type: "text",
                            text: F.ART_staccato,
                            param: l
                        }),
                        a += .5 * this.lineh
                    }
                    return a
                }
            }, {
                key: "getTextWidth",
                value: function(e, t, i) {
                    var n, s = 5, a = Object(p["a"])(e);
                    try {
                        for (a.s(); !(n = a.n()).done; ) {
                            var r = n.value;
                            s += "l" === r || "i" === r || "j" === r || "I" === r ? .25 * t : "f" === r || "r" === r || "t" === r ? .35 * t : "m" === r || "w" === r ? .7 * t : .55 * t
                        }
                    } catch (o) {
                        a.e(o)
                    } finally {
                        a.f()
                    }
                    return s
                }
            }, {
                key: "getTextWidthEx",
                value: function(e, t, i) {
                    var n = document.createElement("span")
                      , s = n.offsetWidth;
                    return n.style.fontSize = t + "px",
                    void 0 !== i && (n.style.fontWeight = i),
                    n.style.visibility = "hidden",
                    n.style.display = "inline-block",
                    document.body.appendChild(n),
                    void 0 !== n.textContent ? n.textContent = e : n.innerText = e,
                    s = parseFloat(window.getComputedStyle(n).width) - s,
                    document.body.removeChild(n),
                    s
                }
            }, {
                key: "getMetronomeItems",
                value: function(e) {
                    var t = e.param.x
                      , i = e.param.y
                      , n = 1.5 * (e.param["font-size"] || 1.4 * this.lineh);
                    if (e.textl) {
                        this.items.push({
                            type: "text",
                            text: e.textl,
                            param: {
                                x: t,
                                y: i,
                                id: "metronome",
                                "font-weight": "bold",
                                "font-size": n
                            }
                        });
                        var s = this.getTextWidthEx(e.textl, n, "bold");
                        0 === s && (s = this.getTextWidth(e.textl, n, "bold")),
                        t += s + this.lineh
                    }
                    if (e.parentheses && (this.items.push({
                        type: "text",
                        text: "(",
                        param: {
                            x: t,
                            y: i
                        }
                    }),
                    t += .8 * this.lineh),
                    e.notel && (t = this.metronomeNote(t, i, e.notel, e.notel_dot)),
                    e.value) {
                        var a = "= " + e.value;
                        this.items.push({
                            type: "text",
                            text: a,
                            param: {
                                x: t,
                                y: i,
                                "font-size": 1.8 * this.lineh
                            }
                        }),
                        t += this.getTextWidthEx(a, 1.8 * this.lineh)
                    } else
                        e.noter && (this.items.push({
                            type: "text",
                            text: "=",
                            param: {
                                x: t,
                                y: i
                            }
                        }),
                        t = this.metronomeNote(t, i, e.noter, e.noter_dot),
                        t += .5 * this.lineh);
                    e.parentheses && (this.items.push({
                        type: "text",
                        text: ")",
                        param: {
                            x: t,
                            y: i
                        }
                    }),
                    t += this.lineh),
                    (e.swing || e.textl && e.textl.indexOf("swing") >= 0) && (t += this.lineh,
                    this.items.push({
                        type: "text",
                        text: "(",
                        param: {
                            x: t,
                            y: i
                        }
                    }),
                    t += this.lineh,
                    this.swingItems(t, i),
                    t += 8 * this.lineh,
                    this.items.push({
                        type: "text",
                        text: ")",
                        param: {
                            x: t,
                            y: i
                        }
                    }),
                    t += this.lineh),
                    e.textr && (t += this.lineh,
                    this.items.push({
                        type: "text",
                        text: e.textr,
                        param: {
                            x: t,
                            y: i,
                            "font-size": n
                        }
                    }))
                }
            }, {
                key: "pedalLines",
                value: function(e) {
                    var t = e.param.y || 0;
                    e.staff > 1 && this.staffOffset && (t += this.staffOffset[e.staff - 1]);
                    var i, n = e.x1 || e.param.x || 0;
                    if ("change" === e.text ? (i = X.lineItem(n, t, n + 3, t - 8),
                    this.items.push(i),
                    i = X.lineItem(n + 3, t - 8, n + 6, t),
                    this.items.push(i),
                    n += 6) : e.str ? (this.items.push({
                        type: "text",
                        text: e.str,
                        param: {
                            x: n,
                            y: t + 3
                        }
                    }),
                    n += 30) : (i = X.lineItem(n, t - 8, n, t),
                    this.items.push(i)),
                    void 0 !== e.stopx) {
                        var s = e.x2 || e.stopx || 0;
                        i = X.lineItem(n, t, s, t),
                        this.items.push(i)
                    }
                }
            }, {
                key: "rects",
                get: function() {
                    var e = [];
                    if (this.wrongEvents && this.measure.notes && this.measure.notes.length > 0) {
                        var t, i = -100, n = this.measure.notes[0].x, s = this.measure.w - n, a = Object(p["a"])(this.wrongEvents);
                        try {
                            for (a.s(); !(t = a.n()).done; ) {
                                var r = t.value;
                                if (!(r.track < this.trackIndex || r.track >= this.trackIndex + this.measure.staves)) {
                                    var o = n + r.x * s / 100
                                      , l = i + 3 * (120 - r.val)
                                      , u = void 0
                                      , h = r.w * s / 100;
                                    if (h < 3 && (h = 3),
                                    u = 1 === r.staff ? r.wrong ? "#fe0" : "#2b2" : r.wrong ? "#f20" : "#0a0",
                                    e.push(X.rectItem(o, l, h, 5, u)),
                                    void 0 !== r.note_x) {
                                        var c = (4 - r.line) * this.lineh / 2;
                                        r.staff > 1 && this.staffOffset && (c += this.staffOffset[r.staff - 1]);
                                        var f = r.note_x + this.lineh / 2
                                          , d = X.lineItem(f, c, o + h / 2, l + 3, void 0, "#0af");
                                        e.push(d)
                                    }
                                    if (r.msg) {
                                        var m = {
                                            x: o,
                                            y: l,
                                            "font-size": 8
                                        };
                                        e.push({
                                            type: "text",
                                            text: r.msg,
                                            param: m
                                        })
                                    }
                                }
                            }
                        } catch (v) {
                            a.e(v)
                        } finally {
                            a.f()
                        }
                    }
                    return e
                }
            }, {
                key: "timex",
                get: function() {
                    var e = this.lineh;
                    return this.jianpu && this.isFirstMeasure ? e += (4 + Math.abs(this.curFifths)) * this.lineh : this.measure.fifths && (this.measure.fifths.fifths || this.measure.fifths.cancel) && (e += (.5 + Math.abs(this.measure.fifths.fifths) + Math.abs(this.measure.fifths.cancel || 0)) * this.lineh),
                    e
                }
            }, {
                key: "beatTicks",
                get: function() {
                    var e = this.prevTime();
                    if (e) {
                        var t = e.beatu || 4;
                        if (8 === t)
                            return 720;
                        if (2 === t)
                            return 960
                    }
                    return 480
                }
            }]),
            e
        }()
          , ge = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return e.w > 0 ? i("g", {
                    attrs: {
                        transform: "translate(" + e.x + ",0)",
                        fill: e.measureInfo.flags && e.measureInfo.flags.foreground ? e.measureInfo.flags.foreground : void 0
                    }
                }, [e.oneline && e.isTopMeasure && e.measureIndex % 10 == 9 ? [i("rect", {
                    staticStyle: {
                        fill: "rgba(0,0,0,0)",
                        "stroke-width": "1",
                        stroke: "black"
                    },
                    attrs: {
                        x: -5,
                        y: 2.4 * -e.lineh,
                        width: 1.6 * e.lineh,
                        height: 1.5 * e.lineh
                    }
                }), e._v(" "), i("text", {
                    attrs: {
                        x: -3,
                        y: 1.2 * -e.lineh,
                        "font-size": 1.1 * e.lineh
                    }
                }, [e._v(e._s(e.measure.num))])] : e._e(), e._v(" "), !e.isFirstMeasure && !e.jianpu || e.measureIndex > 0 && e.isTopMeasure && e.jianpu ? [e.measure.fifths ? [i("SvgFifths", e._b({
                    attrs: {
                        fifths: e.measure.fifths.fifths,
                        cancel: e.measure.fifths.cancel,
                        clef: e.curClefs,
                        staffOffset: e.staffOffset,
                        staves: e.measure.staves,
                        lineh: e.lineh,
                        jianpu: 0 != e.jianpu,
                        trackIndex: e.trackIndex
                    }
                }, "SvgFifths", e.getFifthsParam(), !1))] : e._e(), e._v(" "), e.measure.time ? [i("SvgTime", {
                    attrs: {
                        time: e.measure.time,
                        x: e.timex,
                        lineh: e.lineh,
                        staffOffset: e.staffOffset,
                        staves: e.measure.staves,
                        jianpu: 0 != e.jianpu,
                        trackIndex: e.trackIndex
                    }
                })] : e._e()] : e._e(), e._v(" "), !e.jianpu && e.measure.clefs ? [i("SvgClef", {
                    attrs: {
                        clefs: e.obj.getClefs(),
                        lineh: e.lineh,
                        staffOffset: e.staffOffset,
                        scale: .75,
                        trackIndex: e.trackIndex
                    }
                })] : e._e(), e._v(" "), e._l(e.measure.harmonys, (function(t, n) {
                    return [i("MeasHarmony", {
                        key: "h" + n,
                        attrs: {
                            harmony: t,
                            lineh: e.lineh,
                            jianpu: 0 != e.jianpu,
                            fifths: e.curFifths,
                            staffOffset: e.staffOffset
                        }
                    })]
                }
                )), e._v(" "), e._l(e.measure.pdirs, (function(t, n) {
                    return [e.jianpu || "shift" != t.type ? "wedge" == t.type ? i("MeasPdirWedge", e._b({
                        key: "p" + n,
                        attrs: {
                            lineh: e.lineh,
                            staffOffset: e.staffOffset
                        }
                    }, "MeasPdirWedge", t, !1)) : "bracket" == t.type ? i("MeasPdirBracket", e._b({
                        key: "p" + n,
                        attrs: {
                            lineh: e.lineh,
                            staffOffset: e.staffOffset
                        }
                    }, "MeasPdirBracket", t, !1)) : e._e() : i("MeasPdirOctave", e._b({
                        key: "p" + n,
                        attrs: {
                            lineh: e.lineh,
                            staffOffset: e.staffOffset
                        }
                    }, "MeasPdirOctave", t, !1))]
                }
                )), e._v(" "), e.measure.ends ? [i("MeasEnding", e._b({
                    attrs: {
                        stop: e.measure.ends.stop || 0 == e.measure.ends.discontinue
                    }
                }, "MeasEnding", e.measure.ends, !1))] : e._e(), e._v(" "), e.continues ? [e._l(e.continues, (function(t, n) {
                    return [e.jianpu || "shift" != t.type ? "slur" == t.type && (!t.jianpu && !e.jianpu || t.jianpu && e.jianpu) ? i("NoteSlur", e._b({
                        key: "pc" + n,
                        attrs: {
                            lineh: e.lineh,
                            jianpu: 0 != e.jianpu
                        }
                    }, "NoteSlur", t, !1)) : "wedge" == t.type ? i("MeasPdirWedge", e._b({
                        key: "pc" + n,
                        attrs: {
                            lineh: e.lineh,
                            staffOffset: e.staffOffset
                        }
                    }, "MeasPdirWedge", t, !1)) : "wavy-line" == t.type ? i("NoteWaveline", e._b({
                        key: "wl" + n,
                        attrs: {
                            lineh: e.lineh
                        }
                    }, "NoteWaveline", t, !1)) : e._e() : i("MeasPdirOctave", e._b({
                        key: "pc" + n,
                        attrs: {
                            lineh: e.lineh,
                            staffOffset: e.staffOffset
                        }
                    }, "MeasPdirOctave", t, !1))]
                }
                ))] : e._e(), e._v(" "), e.groupInfo ? [e.measure.lbar ? e._l(e.getBarlines(!0), (function(t, n) {
                    return i("line", e._b({
                        key: "bl" + n,
                        attrs: {
                            stroke: "black"
                        }
                    }, "line", t, !1))
                }
                )) : e._e(), e._v(" "), e._l(e.getBarlines(!1), (function(t, n) {
                    return i("line", e._b({
                        key: "br" + n,
                        attrs: {
                            stroke: "black"
                        }
                    }, "line", t, !1))
                }
                ))] : e._e(), e._v(" "), e._l(e.items, (function(t, n) {
                    return ["text" == t.type ? i("text", e._b({
                        key: "t" + n
                    }, "text", t.param, !1), [e._v(e._s(t.text))]) : e._e(), e._v(" "), "line" == t.type ? i("line", e._b({
                        key: "l" + n
                    }, "line", t.param, !1)) : e._e(), e._v(" "), "rect" == t.type ? i("rect", e._b({
                        key: "r" + n,
                        staticStyle: {
                            fill: "rgba(0,0,0,0)",
                            "stroke-width": "1",
                            stroke: "black"
                        }
                    }, "rect", t.param, !1)) : e._e(), e._v(" "), "ellipse" == t.type ? i("ellipse", e._b({
                        key: "e" + n,
                        attrs: {
                            stroke: "black",
                            "stroke-width": "1"
                        }
                    }, "ellipse", t.param, !1)) : e._e(), e._v(" "), "circle" == t.type ? i("circle", e._b({
                        key: "c" + n,
                        attrs: {
                            stroke: "black",
                            "stroke-width": "1"
                        }
                    }, "circle", t.param, !1)) : e._e(), e._v(" "), "note" == t.type ? i("SvgNoteElem", {
                        key: "i" + n,
                        attrs: {
                            note: t.param,
                            lineh: e.lineh
                        }
                    }) : e._e()]
                }
                )), e._v(" "), e._l(e.shapes, (function(t, n) {
                    return [i(t.component, e._b({
                        key: "s" + n,
                        tag: "component",
                        attrs: {
                            lineh: e.lineh
                        }
                    }, "component", t.param, !1))]
                }
                )), e._v(" "), e._l(e.allNotes, (function(t, n) {
                    return [t.hide ? e._e() : i("g", {
                        key: n,
                        class: t.class
                    }, [e._l(t.items, (function(n, s) {
                        return ["text" == n.type ? i("text", e._b({
                            key: s
                        }, "text", n.param, !1), [e._v(e._s(n.text))]) : e._e(), e._v(" "), "line" == n.type ? i("line", e._b({
                            key: s,
                            class: t.class
                        }, "line", n.param, !1)) : e._e(), e._v(" "), "rect" == n.type ? i("rect", e._b({
                            key: "r" + s,
                            staticStyle: {
                                fill: "rgba(0,0,0,0)",
                                "stroke-width": "1",
                                stroke: "black"
                            }
                        }, "rect", n.param, !1)) : e._e(), e._v(" "), "circle" == n.type ? i("circle", e._b({
                            key: "c" + s,
                            attrs: {
                                stroke: "black",
                                "stroke-width": "1"
                            }
                        }, "circle", n.param, !1)) : "wavy-line" == n.type ? i("NoteWaveline", e._b({
                            key: s,
                            attrs: {
                                lineh: e.lineh
                            }
                        }, "NoteWaveline", n.param, !1)) : "slur" == n.type ? i("NoteSlur", e._b({
                            key: s
                        }, "NoteSlur", n.param, !1)) : "tuplet" == n.type ? i("NoteTuplet", e._b({
                            key: s
                        }, "NoteTuplet", n.param, !1)) : "slide" == n.type ? i("NoteSlide", e._b({
                            key: s
                        }, "NoteSlide", n.param, !1)) : "tremolo" == n.type ? i("NoteTremolo", e._b({
                            key: s
                        }, "NoteTremolo", n.param, !1)) : e._e()]
                    }
                    )), e._v(" "), t.lyrics ? [i("NoteLyrics", {
                        attrs: {
                            lyrics: t.lyrics,
                            x: e.noteOffsetx,
                            y: e.yOfLine(4, t, n)
                        }
                    })] : e._e()], 2)]
                }
                )), e._v(" "), e.wrong_events ? [i("rect", {
                    attrs: {
                        x: 0,
                        y: -2 * e.lineh,
                        width: e.w,
                        height: e.staffDistance + 12 * e.lineh,
                        fill: "rgba(200,200,250,0.6)"
                    }
                }), e._v(" "), e._l(e.rects, (function(t, n) {
                    return ["rect" == t.type ? i("rect", e._b({
                        key: "b" + n
                    }, "rect", t.param, !1)) : e._e(), e._v(" "), "line" == t.type ? i("line", e._b({
                        key: "b" + n
                    }, "line", t.param, !1)) : e._e(), e._v(" "), "text" == t.type ? i("text", e._b({
                        key: "b" + n
                    }, "text", t.param, !1), [e._v(" " + e._s(t.text) + " ")]) : e._e()]
                }
                ))] : e._e(), e._v(" "), e.measureInfo.flags ? e._l(e.flags, (function(t, n) {
                    return i("text", e._b({
                        key: "f" + n
                    }, "text", t.param, !1), [e._v(e._s(t.text))])
                }
                )) : e._e()], 2) : e._e()
            },
            staticRenderFns: []
        }, void 0, {
            name: "SvgMeasure",
            props: {
                measure: Object,
                measureIndex: Number,
                x: Number,
                w: Number,
                keyw: Number,
                lineh: Number,
                curClefs: Object,
                curFifths: Number,
                groupInfo: Object,
                staffDistance: Number,
                jianpu: Number,
                innerJianpu: Number,
                continues: Array,
                isFirstMeasure: Boolean,
                isTopMeasure: Boolean,
                staffLines: Object,
                measures: Array,
                addedNotes: Array,
                staffOffset: Array,
                trackIndex: Number,
                wrong_notes: Array,
                wrong_events: Array,
                measureInfo: Object,
                oneline: Boolean
            },
            data: function() {
                var e = new ye(this._props);
                return this.obj = e,
                {
                    shapes: e.shapes,
                    items: e.items,
                    rects: e.rects
                }
            },
            computed: {
                allNotes: function() {
                    var e = [];
                    if (void 0 !== this.measure.mrest)
                        return e;
                    if (!this.jianpu && this.addedNotes && this.measure.notes) {
                        var t, i = x(this.addedNotes);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var n = t.value;
                                k.calcNoteElem(n, this.curClefs, this.curFifths)
                            }
                        } catch (u) {
                            i.e(u)
                        } finally {
                            i.f()
                        }
                        e = [].concat(y(this.measure.notes), y(this.addedNotes))
                    } else
                        e = this.measure.notes;
                    var s, a = 0, r = x(e);
                    try {
                        for (r.s(); !(s = r.n()).done; ) {
                            var o = s.value;
                            void 0 !== this.trackIndex && o.staff && (o.class = "track" + (this.trackIndex + o.staff - 1));
                            var l = this.getNoteProp(o, a);
                            o.items = ie.getDrawItems(l, this.jianpu, this.innerJianpu),
                            a += 1
                        }
                    } catch (u) {
                        r.e(u)
                    } finally {
                        r.f()
                    }
                    return e
                },
                timex: function() {
                    return this.obj.timex
                },
                beatTicks: function() {
                    return this.obj.beatTicks
                },
                flags: function() {
                    return this.obj.flagItems(this.measureInfo.flags)
                },
                noteOffsetx: function() {
                    return this.keyw ? this.keyw : 0
                }
            },
            methods: {
                getFifthsParam: function() {
                    return this.obj.getFifthsParam()
                },
                getNoteClass: function(e, t) {
                    var i = "";
                    return void 0 !== t && e.staff && (i = "track" + (t + e.staff - 1)),
                    i
                },
                getNoteProp: function(e, t) {
                    return {
                        note: e,
                        staffDistance: this.staffDistance,
                        lineh: this.lineh,
                        measWidth: this.w,
                        measMargin: this.obj.getMeasMargin(this.jianpu),
                        noteOffsetx: this.noteOffsetx,
                        curFifths: this.curFifths,
                        notes: this.measure.notes,
                        nextNote: this.obj.nextNote(t),
                        beatTicks: this.beatTicks,
                        staffLines: this.staffLines,
                        staffOffset: this.staffOffset,
                        jianpu: this.jianpu,
                        innerJianpu: this.innerJianpu,
                        curClefs: this.curClefs
                    }
                },
                getNoteItems: function(e, t) {
                    var i = this.getNoteProp(e, t);
                    return ie.getDrawItems(i, this.jianpu, this.innerJianpu)
                },
                yOfLine: function(e, t, i) {
                    var n = this.getNoteProp(t, i);
                    return ie.yOfLine(n, e, t.staff)
                },
                getBarlines: function(e) {
                    var t = {
                        lineh: this.lineh,
                        staffLines: this.staffLines,
                        staffDistance: this.staffDistance,
                        groupInfo: this.groupInfo,
                        jianpu: 0 !== this.jianpu,
                        staffOffset: this.staffOffset
                    };
                    return e ? (t.x = this.obj.getBarlinex(),
                    t.bar = this.measure.lbar) : (t.x = this.w - (this.keyw ? this.keyw : 0),
                    t.bar = this.measure.rbar),
                    function() {
                        function e() {
                            Object(m["a"])(this, e)
                        }
                        return Object(v["a"])(e, null, [{
                            key: "getBarlines",
                            value: function(e) {
                                var t = [];
                                if (e.jianpu) {
                                    var i, n = this.staffH(1, e), s = Object(p["a"])(e.staffOffset);
                                    try {
                                        for (s.s(); !(i = s.n()).done; ) {
                                            var a = i.value
                                              , r = a + 9;
                                            e.bar ? this.drawBarline(t, r, n, 1, e) : t.push({
                                                x1: e.x,
                                                x2: e.x,
                                                y1: r,
                                                y2: r + n,
                                                "stroke-width": 1.5
                                            })
                                        }
                                    } catch (l) {
                                        s.e(l)
                                    } finally {
                                        s.f()
                                    }
                                } else {
                                    var o = e.groupInfo.h;
                                    e.bar ? this.drawBarline(t, 0, o, e.groupInfo.staves, e) : t.push({
                                        x1: e.x,
                                        x2: e.x,
                                        y1: 0,
                                        y2: o,
                                        "stroke-width": 1.5
                                    })
                                }
                                return t
                            }
                        }, {
                            key: "staffH",
                            value: function(e, t) {
                                var i = 4;
                                return t.staffLines && t.staffLines[e] > 3 && (i = t.staffLines[e] - 1),
                                i * t.lineh
                            }
                        }, {
                            key: "drawBarline",
                            value: function(e, t, i, n, s) {
                                var a = s.bar
                                  , r = s.lineh
                                  , o = s.staffDistance
                                  , l = s.x;
                                if ("light-heavy" === a.type ? (e.push({
                                    x1: l - 6,
                                    x2: l - 6,
                                    y1: t,
                                    y2: t + i
                                }),
                                e.push({
                                    x1: l - 2,
                                    x2: l - 2,
                                    y1: t,
                                    y2: t + i,
                                    "stroke-width": 4
                                })) : "heavy-light" === a.type ? (e.push({
                                    x1: l - 2,
                                    x2: l - 2,
                                    y1: t,
                                    y2: t + i,
                                    "stroke-width": 4
                                }),
                                e.push({
                                    x1: l + 2,
                                    x2: l + 2,
                                    y1: t,
                                    y2: t + i
                                })) : "light-light" === a.type ? (e.push({
                                    x1: l - 3,
                                    x2: l - 3,
                                    y1: t,
                                    y2: t + i
                                }),
                                e.push({
                                    x1: l - 0,
                                    x2: l - 0,
                                    y1: t,
                                    y2: t + i
                                })) : "dashed" === a.type ? e.push({
                                    x1: l - 0,
                                    x2: l - 0,
                                    y1: t,
                                    y2: t + i,
                                    "stroke-dasharray": "3,3"
                                }) : "none" !== a.type && console.log("Todo to draw barline:" + a.type),
                                a.repeat) {
                                    l = "forward" === a.repeat ? l + 6 : l - r;
                                    for (var u = t, h = .4 * r, c = 0; c < n; c++) {
                                        var f = u + 1.5 * r;
                                        e.push({
                                            x1: l,
                                            x2: l,
                                            y1: f,
                                            y2: f,
                                            "stroke-width": h,
                                            "stroke-linecap": "round"
                                        }),
                                        f = u + 2.5 * r,
                                        e.push({
                                            x1: l,
                                            x2: l,
                                            y1: f,
                                            y2: f,
                                            "stroke-width": h,
                                            "stroke-linecap": "round"
                                        }),
                                        u += o + 4 * r
                                    }
                                }
                            }
                        }]),
                        e
                    }().getBarlines(t)
                },
                onClickNote: function(e) {
                    console.log("onClickNote", e);
                    var t, i = "";
                    if (e.arts) {
                        var n, s = x(e.arts);
                        try {
                            for (s.s(); !(n = s.n()).done; ) {
                                var a = n.value;
                                "fingering" === a.type && (t = a,
                                i = a.val)
                            }
                        } catch (r) {
                            s.e(r)
                        } finally {
                            s.f()
                        }
                    }
                    i = prompt("finger:", i),
                    console.log("finger", i),
                    i && (e.arts || (e.arts = []),
                    t ? t.val = i : e.arts.push({
                        up: !0,
                        x: 2,
                        type: "fingering",
                        y: -48,
                        val: i,
                        hide: !0
                    }))
                }
            },
            components: {
                SvgNoteElem: ne,
                SvgTime: z,
                SvgClef: ae,
                MeasHarmony: fe,
                MeasPdirOctave: de,
                NoteSlur: K,
                NoteTuplet: V,
                NoteSlide: Q,
                MeasPdirWedge: pe,
                SvgFifths: J,
                MeasEnding: ve,
                MeasPdirBracket: me,
                NoteLyrics: Z,
                NoteWaveline: H,
                NoteTremolo: Y
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , be = function() {
            function e(t) {
                Object(m["a"])(this, e),
                this.prop = t
            }
            return Object(v["a"])(e, [{
                key: "getFifths",
                value: function() {
                    var e = this.prop.lineStaff
                      , t = this.prop.measures
                      , i = [{
                        x: this.fifthsx(),
                        fifths: e.fifths,
                        clef: e.clef
                    }];
                    if (!this._hideChanged() && this.prop.m2 < t.length) {
                        var n = t[this.prop.m2];
                        if (n.fifths) {
                            var s = this.prop.width - this._lineEndWidth() + this.prop.lineh / 2
                              , a = Object.assign(Object.assign({}, n.fifths), {
                                x: s,
                                clef: e.clef
                            });
                            i.push(a)
                        }
                    }
                    return i
                }
            }, {
                key: "fivelines",
                value: function(e) {
                    for (var t = this.prop.lineStaff, i = [], n = 0, s = t.staves || 1, a = 1; a <= s; a++)
                        if (!this._staffHide(a)) {
                            var r = 5
                              , o = t.details ? t.details[a] : void 0;
                            if (o && void 0 !== o.lines && (r = o.lines),
                            r > 0) {
                                var l = {
                                    y: n,
                                    lines: r,
                                    class: "track" + (this.prop.trackIndex + a - 1)
                                };
                                i.push(l)
                            }
                            n = e[a]
                        }
                    return i
                }
            }, {
                key: "staffLines",
                value: function() {
                    if (this.prop.lineStaff.details) {
                        for (var e = {}, t = 0, i = Object.keys(this.prop.lineStaff.details); t < i.length; t++) {
                            var n = i[t]
                              , s = this.prop.lineStaff.details[n];
                            void 0 !== s.lines && (e[n] = s.lines)
                        }
                        return e
                    }
                }
            }, {
                key: "getClefs",
                value: function() {
                    for (var e = [], t = this.prop.lineStaff.staves || 1, i = 1; i <= t; i++)
                        if (!this._staffHide(i)) {
                            var n = this.prop.lineStaff.clef["" + i]
                              , s = {
                                x: .6 * this.prop.lineh,
                                clef: n,
                                staff: i
                            };
                            e.push(s)
                        }
                    if (this.prop.m2 < this.prop.measures.length) {
                        var a = this.prop.measures[this.prop.m2];
                        if (a.clefs) {
                            var r, o = Object(p["a"])(a.clefs);
                            try {
                                for (o.s(); !(r = o.n()).done; ) {
                                    var l = r.value;
                                    if (l.x < 30) {
                                        var u = this.prop.width - this._lineEndWidth() - 2.6 * this.prop.lineh
                                          , h = Object.assign(Object.assign({}, l), {
                                            x: u,
                                            scale: .7
                                        });
                                        e.push(h)
                                    }
                                }
                            } catch (c) {
                                o.e(c)
                            } finally {
                                o.f()
                            }
                        }
                    }
                    return e
                }
            }, {
                key: "_timeChanged",
                value: function() {
                    if (this.prop.m2 < this.prop.measures.length) {
                        var e = this.prop.measures[this.prop.m2];
                        if (e.time)
                            return e.time
                    }
                }
            }, {
                key: "_measWidth",
                value: function(e) {
                    if (e.mm === this.prop.m2 - 1) {
                        var t = this.prop.jianpu ? 0 : this._lineEndWidth();
                        if (t)
                            return e.info.w - t
                    }
                    return e.info.w
                }
            }, {
                key: "_staffHide",
                value: function(e) {
                    if (this.prop.oneline)
                        return !1;
                    var t = this.prop.lineStaff.details ? this.prop.lineStaff.details[e] : null;
                    return !(!t || !t.hide)
                }
            }, {
                key: "_groups",
                value: function() {
                    var e = this.prop.lineStaff.staves || 1;
                    if (e < 2)
                        return [];
                    var t = this.prop.lineh
                      , i = this.prop.lineStaff.height ? this.prop.lineStaff.height * t / 10 : 4 * t;
                    if (i > 4 * t) {
                        var n = i;
                        e > 2 && this.prop.groupInfo && (n = this.prop.groupInfo.h);
                        var s = 2.96 * n
                          , a = -s / t / 5;
                        return this.prop.jianpu && (a += (Math.abs(this.prop.lineStaff.fifths) + 2.8) * t,
                        a *= s / 600),
                        [{
                            x: a,
                            y: n,
                            "font-size": s,
                            text: F.Group,
                            transform: "scale(".concat(600 / s, ", 1)")
                        }]
                    }
                    return []
                }
            }, {
                key: "fifthsx",
                value: function() {
                    var e = 0;
                    return this.prop.lineStaff.clef && (e += 4 * this.prop.lineh),
                    e
                }
            }, {
                key: "_hideChanged",
                value: function() {
                    if (this.prop.m2 > 0 && this.prop.m2 < this.prop.measures.length) {
                        var e = this.prop.measures[this.prop.m2 - 1];
                        if (e.rbar && "light-heavy" === e.rbar.type && !e.rbar.repeat)
                            return !0
                    }
                    return !1
                }
            }, {
                key: "_lineEndWidth",
                value: function() {
                    if (this._hideChanged())
                        return 0;
                    var e = 0;
                    if (this.prop.m2 < this.prop.measures.length) {
                        var t = this.prop.measures[this.prop.m2];
                        t.fifths && (e = this.prop.lineh * (Math.abs(t.fifths.fifths) + 2),
                        t.fifths.cancel && (e += this.prop.lineh * Math.abs(t.fifths.cancel)))
                    }
                    return this._timeChanged() && (e += 2.5 * this.prop.lineh),
                    e
                }
            }]),
            e
        }()
          , xe = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    attrs: {
                        transform: "translate(" + e.x + "," + e.lineStaff.y + ")"
                    }
                }, [e.lineStaff.name ? [i("text", {
                    attrs: {
                        x: e.jianpu ? 0 : 3 * -e.lineh,
                        y: e.staffHeight / 2 + e.lineh,
                        "font-size": 2 * e.lineh,
                        fill: "black",
                        "text-anchor": "end"
                    }
                }, [e._v(e._s(e.lineStaff.name))])] : e._e(), e._v(" "), e._l(e._groups(), (function(t, n) {
                    return i("text", e._b({
                        key: "g" + n
                    }, "text", t, !1), [e._v(e._s(t.text))])
                }
                )), e._v(" "), e.jianpu ? e._e() : [e.oneline && e.musScore.onelineHead.mm > 0 ? [i("StaffHead", {
                    attrs: {
                        x: e.musScore.onelineHead.x,
                        fifths: e.musScore.onelineHead.fifths,
                        time: e.musScore.onelineHead.time,
                        lineh: e.lineh,
                        staffOffset: e.staffOffset,
                        staffInfo: e.musScore.onelineHead.headLines[e.lineIndex].headStaves[e.staffIndex],
                        height: e.lineStaff.height || 4 * e.lineh,
                        color: e.musScore.onelineHead.color,
                        measNum: e.measures[e.musScore.onelineHead.mm].num,
                        trackIndex: e.trackIndex
                    }
                })] : e._e(), e._v(" "), e._l(e.fivelines, (function(t, n) {
                    return i("SvgFiveLine", e._b({
                        key: n,
                        attrs: {
                            x: 0,
                            width: e.width,
                            lineh: e.lineh
                        }
                    }, "SvgFiveLine", t, !1))
                }
                ))], e._v(" "), e.jianpu ? e._e() : [[i("SvgClef", {
                    attrs: {
                        clefs: e.getClefs,
                        lineh: e.lineh,
                        staffOffset: e.staffOffset,
                        trackIndex: e.trackIndex
                    }
                })], e._v(" "), e._l(e.getFifths, (function(t, n) {
                    return [i("SvgFifths", e._b({
                        key: "f" + n,
                        attrs: {
                            staffOffset: e.staffOffset,
                            staves: e.lineStaff.staves,
                            lineh: e.lineh,
                            trackIndex: e.trackIndex
                        }
                    }, "SvgFifths", t, !1))]
                }
                )), e._v(" "), e.lineStaff.time ? [i("SvgTime", {
                    attrs: {
                        time: e.lineStaff.time,
                        x: e.timex,
                        lineh: e.lineh,
                        staffOffset: e.staffOffset,
                        staves: e.lineStaff.staves,
                        trackIndex: e.trackIndex
                    }
                })] : e._e(), e._v(" "), e.changedTime ? [i("SvgTime", {
                    attrs: {
                        time: e.changedTime,
                        x: e.width - 2 * e.lineh,
                        lineh: e.lineh,
                        staffOffset: e.staffOffset,
                        staves: e.lineStaff.staves,
                        trackIndex: e.trackIndex
                    }
                })] : e._e()], e._v(" "), e._l(e.measureInfos, (function(t, n) {
                    return [e.mountMeas0 < 0 || t.mm >= e.mountMeas0 && t.mm < e.mountMeas1 ? i("SvgMeasure", {
                        key: "m" + n,
                        attrs: {
                            measure: e.measures[t.mm],
                            measureIndex: t.mm,
                            x: e.jianpu && 0 == t.mm ? t.x - 20 : t.x,
                            isFirstMeasure: 0 == n,
                            isTopMeasure: 0 == e.staffIndex,
                            staffDistance: e.distance,
                            lineh: e.lineh,
                            curFifths: e.lineStaff.fifths,
                            curClefs: e.lineStaff.clef,
                            jianpu: e.jianpu,
                            innerJianpu: e.innerJianpu,
                            continues: 0 == n ? e.continues : void 0,
                            keyw: e.m1 > 0 ? 0 : t.info.keyw,
                            staffLines: e.staffLines,
                            w: e._measWidth(t),
                            measures: e.measures,
                            groupInfo: e.groupInfo,
                            addedNotes: e.curAddedNotes(t.mm),
                            staffOffset: e.staffOffset,
                            trackIndex: e.trackIndex,
                            wrong_notes: e.compile_status ? e.compile_status.losed_notes : null,
                            wrong_events: e.compile_status && e.compile_status.more_events ? e.compile_status.more_events[t.mm] : null,
                            measureInfo: t,
                            oneline: e.oneline
                        }
                    }) : e._e()]
                }
                ))], 2)
            },
            staticRenderFns: []
        }, void 0, {
            name: "SvgLineStaff",
            props: {
                lineStaff: Object,
                lineIndex: Number,
                staffIndex: Number,
                lineh: Number,
                x: Number,
                width: Number,
                measures: Array,
                m1: Number,
                m2: Number,
                continues: Array,
                jianpu: Number,
                innerJianpu: Number,
                groupInfo: Object,
                mountMeas: Number,
                mountMeas0: Number,
                mountMeas1: Number,
                addedNotes: Array,
                oneline: Boolean,
                trackIndex: Number,
                compile_status: Object,
                musScore: Object
            },
            data: function() {
                this.obj = new be(this._props);
                for (var e = 0, t = [], i = this.lineStaff.staves || 1, n = 1; n <= i; n++)
                    this.obj._staffHide(n) ? t.push(-1) : (t.push(e),
                    n < this.lineStaff.distances.length && (e += 4 * this.lineh + this.lineStaff.distances[n] * this.lineh / 10));
                return {
                    distance: this.lineStaff.distances[this.lineStaff.distances.length - 1] * this.lineh / 10,
                    staffHeight: this.lineStaff.height ? this.lineStaff.height * this.lineh / 10 : 4 * this.lineh,
                    staffOffset: t
                }
            },
            computed: {
                measureInfos: function() {
                    return this.musScore.getMeasureInfos(this.lineIndex)
                },
                timex: function() {
                    return this.lineh * (4.5 + Math.abs(this.lineStaff.fifths))
                },
                fivelines: function() {
                    return this.obj.fivelines(this.staffOffset)
                },
                staffLines: function() {
                    return this.obj.staffLines()
                },
                getFifths: function() {
                    return this.obj.getFifths()
                },
                getClefs: function() {
                    return this.obj.getClefs()
                },
                changedTime: function() {
                    return this.obj._timeChanged()
                }
            },
            methods: {
                curAddedNotes: function(e) {
                    var t = null;
                    return this.addedNotes && (t = this.addedNotes.filter((function(t) {
                        return t.mm === e
                    }
                    ))),
                    t && t.length > 0 ? t : null
                },
                _measWidth: function(e) {
                    return this.obj._measWidth(e)
                },
                _groups: function() {
                    return this.obj._groups()
                }
            },
            components: {
                SvgFiveLine: W,
                SvgMeasure: ge,
                SvgFifths: J,
                SvgTime: z,
                SvgClef: ae,
                StaffHead: C({
                    render: function() {
                        var e = this
                          , t = e.$createElement
                          , i = e._self._c || t;
                        return i("g", {
                            attrs: {
                                transform: "translate(" + e.x + ",0)"
                            }
                        }, [i("rect", {
                            style: "fill:" + e.color + ";",
                            attrs: {
                                x: -40,
                                y: -60,
                                width: 7 * e.lineh + e.timex,
                                height: e.height + 120
                            }
                        }), e._v(" "), i("text", {
                            attrs: {
                                x: 0,
                                y: 2 * -e.lineh,
                                "font-size": 1.2 * e.lineh
                            }
                        }, [e._v(e._s(e.measNum))]), e._v(" "), i("SvgClef", {
                            attrs: {
                                clefs: e.staffInfo.mclefs,
                                lineh: e.lineh,
                                staffOffset: e.staffOffset,
                                trackIndex: e.trackIndex
                            }
                        }), e._v(" "), i("SvgFifths", e._b({
                            attrs: {
                                staffOffset: e.staffOffset,
                                staves: e.staffInfo.staves,
                                lineh: e.lineh,
                                trackIndex: e.trackIndex
                            }
                        }, "SvgFifths", e.f, !1)), e._v(" "), i("SvgTime", {
                            attrs: {
                                time: e.time,
                                x: e.timex,
                                lineh: e.lineh,
                                staffOffset: e.staffOffset,
                                staves: e.staffInfo.staves,
                                trackIndex: e.trackIndex
                            }
                        })], 1)
                    },
                    staticRenderFns: []
                }, void 0, {
                    name: "StaffHead",
                    props: {
                        staffOffset: Array,
                        lineh: Number,
                        trackIndex: Number,
                        staffInfo: Object,
                        x: Number,
                        fifths: Number,
                        time: Object,
                        height: Number,
                        color: String,
                        measNum: String
                    },
                    components: {
                        SvgFifths: J,
                        SvgTime: z,
                        SvgClef: ae
                    },
                    computed: {
                        f: function() {
                            var e = {
                                x: 4 * this.lineh,
                                fifths: this.fifths,
                                clef: this.staffInfo.clefs
                            };
                            return e
                        },
                        timex: function() {
                            return (Math.abs(this.fifths) + 5) * this.lineh
                        }
                    }
                }, void 0, !1, void 0, !1, void 0, void 0, void 0)
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , ke = function() {
            function e(t) {
                Object(m["a"])(this, e),
                this.prop = t
            }
            return Object(v["a"])(e, [{
                key: "leftMargin",
                value: function() {
                    return this.prop.jianpu ? this.prop.page.x / 2 : this.prop.page.x
                }
            }, {
                key: "barlineParam",
                value: function() {
                    var e = this.prop.mline.lineStaves
                      , t = this.leftMargin();
                    this.prop.jianpu && (t += (Math.abs(e[0].fifths) + 3) * this.prop.lineh);
                    var i = this.prop.mline.h;
                    if (this.prop.mline.oneline) {
                        i = 4 * this.prop.lineh;
                        var n, s = Object(p["a"])(e);
                        try {
                            for (s.s(); !(n = s.n()).done; ) {
                                var a = n.value;
                                if (!a.hidden && a.staves > 1)
                                    for (var r = 1; r < a.staves; r++)
                                        a.details && a.details[r] && a.details[r].hide || (i += a.distances[r] * this.prop.lineh / 10 + 4 * this.prop.lineh)
                            }
                        } catch (o) {
                            s.e(o)
                        } finally {
                            s.f()
                        }
                    }
                    return {
                        x1: t,
                        x2: t,
                        y1: 0,
                        y2: i
                    }
                }
            }, {
                key: "isHidden",
                value: function(e) {
                    if (e.hidden)
                        return !0;
                    if (this.prop.mline.oneline)
                        return !1;
                    if (e.details) {
                        for (var t = !0, i = e.staves || 1, n = 1; n <= i; n++)
                            if (!e.details[n] || !e.details[n].hide) {
                                t = !1;
                                break
                            }
                        return t
                    }
                    return !1
                }
            }, {
                key: "trackIndex",
                value: function(e) {
                    for (var t = 0, i = 0; i < e; i++)
                        t += this.prop.mline.lineStaves[i].staves || 1;
                    return t
                }
            }, {
                key: "groupInfo",
                value: function(e) {
                    var t, i = this.prop.lineh, n = this.prop.mline.lineStaves, s = n[e], a = s.staves ? s.staves : 1, r = 0, o = Object(p["a"])(this.prop.groups);
                    try {
                        for (o.s(); !(t = o.n()).done; ) {
                            var l = t.value;
                            if (s.parti === l.p1) {
                                if (a = l.p2 - l.p1 + 1,
                                a > 1 && e < n.length - 1) {
                                    r = 0,
                                    a = 0;
                                    for (var u = e; u < n.length && u <= l.p2; u++) {
                                        var h = n[u];
                                        this.isHidden(h) || (a += h.staves || 1,
                                        r += 4 * i,
                                        u > e && (r += h.distances[0]))
                                    }
                                    r > 0 && (r -= 4 * i)
                                }
                                break
                            }
                            if (s.parti === l.p2) {
                                a = 1,
                                r = 0;
                                break
                            }
                        }
                    } catch (c) {
                        o.e(c)
                    } finally {
                        o.f()
                    }
                    return 0 === r && (r = s.height || 4 * i),
                    a > 0 ? {
                        staves: a,
                        h: r
                    } : null
                }
            }, {
                key: "groupParam",
                value: function(e) {
                    var t, i = this.prop.mline.lineStaves, n = this.prop.lineh, s = -1, a = 0, r = 0, o = Object(p["a"])(i);
                    try {
                        for (o.s(); !(t = o.n()).done; ) {
                            var l = t.value;
                            s < 0 && l.parti >= e.p1 && !l.hidden && (s = l.y),
                            l.parti <= e.p2 && !l.hidden && (a = l.y + 4 * n,
                            l.staves && (a += (l.staves - 1) * (4 * n + l.distances[0])),
                            r++)
                        }
                    } catch (h) {
                        o.e(h)
                    } finally {
                        o.f()
                    }
                    if (1 !== r) {
                        var u = this.leftMargin() - n;
                        return this.prop.jianpu && (u += (Math.abs(i[0].fifths) + 3) * n,
                        0 === this.prop.lineIndex && (u += 2 * n)),
                        {
                            type: e.type,
                            x: u,
                            y1: s,
                            y2: a
                        }
                    }
                }
            }]),
            e
        }()
          , _e = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    attrs: {
                        id: "line_" + e.lineIndex,
                        transform: e.transform
                    }
                }, [e.mline.h > 4 * e.lineh ? i("line", e._b({
                    attrs: {
                        stroke: "black",
                        "stroke-width": "1.0"
                    }
                }, "line", e.barlineParam(), !1)) : e._e(), e._v(" "), e.mline.h > 4 * e.lineh ? [e._l(e.groups, (function(t, n) {
                    return [i("SvgGroup", e._b({
                        key: "g" + n,
                        attrs: {
                            lineh: e.lineh
                        }
                    }, "SvgGroup", e.groupParam(t), !1))]
                }
                ))] : e._e(), e._v(" "), !e.jianpu && e.measNum > 1 ? [i("text", {
                    attrs: {
                        x: 0,
                        y: 2 * -e.lineh,
                        "font-size": 1.2 * e.lineh
                    }
                }, [e._v(e._s(e.measNum))])] : e._e(), e._v(" "), 0 === this.lineIndex && e.jpStaff && 2 != e.jianpu ? [i("SvgFifths", {
                    attrs: {
                        fifths: e.jpStaff.fifths,
                        x: e.jpFifthsPos.x,
                        y: e.jpFifthsPos.y,
                        lineh: e.lineh,
                        jianpu: !0,
                        trackIndex: 1
                    }
                }), e._v(" "), e.jpStaff.time ? [i("SvgTime", {
                    attrs: {
                        time: e.jpStaff.time,
                        x: e.jpFifthsPos.x + 6 * e.lineh,
                        lineh: e.lineh,
                        basey: e.jpFifthsPos.y - 2 * e.lineh,
                        jianpu: !0
                    }
                })] : e._e()] : e._e(), e._v(" "), 0 === this.lineIndex && e.jpStaff && 2 == e.jianpu ? [i("text", {
                    attrs: {
                        x: e.jpFifthsPos.x,
                        y: e.jpFifthsPos.y,
                        "font-size": 2 * e.lineh
                    }
                }, [e._v("固定调简谱")])] : e._e(), e._v(" "), e._l(e.mline.lineStaves, (function(t, n) {
                    return [e.isHidden(t) ? e._e() : i("SvgLineStaff", {
                        key: n,
                        attrs: {
                            lineIndex: e.lineIndex,
                            staffIndex: n,
                            lineStaff: t,
                            x: e.leftMargin(),
                            width: e.mline.w,
                            lineh: e.lineh,
                            jianpu: e.parts[t.parti].jianpu || e.jianpu,
                            innerJianpu: e.innerJianpu,
                            m1: e.mline.m1,
                            m2: e.mline.m2,
                            musScore: e.musScore,
                            groupInfo: e.groupInfo(n),
                            continues: e.continues ? e.continues[n] : null,
                            measures: e.parts[t.parti].measures,
                            trackIndex: e.trackIndex(n),
                            addedNotes: e.curAddedNotes(n),
                            mountMeas0: e.mountMeas0,
                            mountMeas1: e.mountMeas1,
                            oneline: e.mline.oneline,
                            compile_status: e.compile_status
                        }
                    })]
                }
                ))], 2)
            },
            staticRenderFns: []
        }, void 0, {
            name: "SvgLine",
            props: {
                mline: Object,
                parts: Array,
                lineh: Number,
                lineIndex: Number,
                musScore: Object,
                groups: Array,
                page: Object,
                jianpu: Number,
                innerJianpu: Number,
                continues: Object,
                nextLine: Object,
                jpFifthsPos: Object,
                addedNotes: Array,
                mountMeas0: Number,
                mountMeas1: Number,
                compile_status: Object
            },
            components: {
                SvgLineStaff: xe,
                SvgGroup: L,
                SvgFifths: J,
                SvgTime: z
            },
            data: function() {
                this.obj = new ke(this._props);
                var e = "translate(" + this.mline.x + "," + this.mline.y + ")";
                return this.scale && (e += "scale(" + this.mline.scale + "," + this.mline.scale + ")"),
                {
                    transform: e,
                    measNum: this.parts[0].measures[this.mline.m1].num
                }
            },
            computed: {
                jpStaff: function() {
                    var e = this.jianpu ? this.mline.lineStaves[0] : void 0;
                    if (!e) {
                        var t, i = x(this.mline.lineStaves);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var n = t.value;
                                if (this.parts[n.parti].jianpu) {
                                    e = n;
                                    break
                                }
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                }
            },
            methods: {
                curAddedNotes: function(e) {
                    var t = null;
                    return this.addedNotes && (t = this.addedNotes.filter((function(t) {
                        return t.partIndex === e
                    }
                    ))),
                    t
                },
                leftMargin: function() {
                    return this.obj.leftMargin()
                },
                barlineParam: function() {
                    return this.obj.barlineParam()
                },
                isHidden: function(e) {
                    return this.obj.isHidden(e)
                },
                trackIndex: function(e) {
                    return this.obj.trackIndex(e)
                },
                groupInfo: function(e) {
                    return this.obj.groupInfo(e)
                },
                groupParam: function(e) {
                    return this.obj.groupParam(e)
                }
            }
        }, void 0, !1, void 0, !1, void 0, void 0, void 0)
          , we = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                rights: ""
            }
              , i = arguments.length > 1 ? arguments[1] : void 0
              , n = arguments.length > 2 ? arguments[2] : void 0
              , s = arguments.length > 3 ? arguments[3] : void 0;
            Object(m["a"])(this, e),
            this.rights = "",//t.rights,
            this.rightsSize = t.size ? t.size * e.scale : 1.5 * s,
            this.pagination = i + "/"+n,
            this.paginationSize = t.size ? t.size * e.scale : 1.5 * s
        };
        we.scale = 3.8;
        var Se = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return i("g", {
                    staticClass: "footer"
                }, [e.obj.rights ? [i("text", {
                    staticClass: "print",
                    attrs: {
                        x: e.pagex + e.x,
                        y: e.rightsy,
                        "font-size": e.obj.rightsSize,
                        "text-anchor": "middle"
                    }
                }, [e._v(e._s(e.obj.rights))])] : e._e(), e._v(" "), e.obj.pagination ? [i("text", {
                    attrs: {
                        x: e.pagex + e.x,
                        y: e.paginationy,
                        "font-size": e.obj.paginationSize,
                        "text-anchor": "middle"
                    }
                }, [e._v(e._s(e.obj.pagination))])] : e._e()], 2)
            },
            staticRenderFns: []
        }, (function(e) {
            e && e("data-v-5c1c5b43_0", {
                source: ".footer[data-v-5c1c5b43]{font-family:Times New Roman,Times,serif;white-space:pre}",
                map: void 0,
                media: void 0
            })
        }
        ), {
            name: "SvgFooter",
            props: {
                x: Number,
                y: Number,
                pagex: {
                    type: Number,
                    default: 0
                },
                lineh: Number,
                footer: Object,
                pageIndex: Number,
                pageCount: Number
            },
            data: function() {
                return {
                    obj: new we(this.footer,this.pageIndex,this.pageCount,this.lineh)
                }
            },
            computed: {
                rightsy: function() {
                    var e = this.y;
                    return e
                },
                paginationy: function() {
                    return this.rightsy + this.obj.rightsSize + .5 * this.lineh
                }
            }
        }, "data-v-5c1c5b43", !1, void 0, !1, P, void 0, void 0)
          , Ae = i("d044")
          , Oe = function() {
            function e() {
                var t =  {
                    link: "",
                    title: ""
                }
                  , i = arguments.length > 1 ? arguments[1] : void 0
                  , n = arguments.length > 2 ? arguments[2] : void 0
                  , s = arguments.length > 3 ? arguments[3] : void 0
                  , a = arguments.length > 4 ? arguments[4] : void 0;
                Object(m["a"])(this, e),
                this.titles = t.title ? t.title.split("\n") : void 0,
                this.titleSize = t.titlesize ? t.titlesize * e.scale : 1.5 * a,
                // this.createQrcode(t.link, i, n, s)
            }
            return Object(v["a"])(e, [{
                key: "createQrcode",
                value: function(e, t, i, n) {
                    var s = document.createElement("div");
                    new Ae(s,{
                        height: 100,
                        useSVG: !0,
                        width: 100
                    }).makeCode(e);
                    var a = s.firstChild;
                    a && (s.removeChild(a),
                    a.setAttribute("id", "qrcode"),
                    a.setAttribute("x", t + ""),
                    a.setAttribute("y", i + ""),
                    a.setAttribute("width", n + ""),
                    a.setAttribute("height", n + ""),
                    this.qrcode = a.outerHTML)
                }
            }]),
            e
        }();
        Oe.scale = 3.8;
        var Te = C({
            render: function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return e.musScore.display ? i("svg", e._b({
                    staticClass: "scorefont",
                    class: e.disableClass,
                    style: "zoom:" + e.musScore.scale,
                    attrs: {
                        id: "svg",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, "svg", e.musScore.svgSize, !1), [e._t("background", [e._l(e.musScore.pages, (function(t, n) {
                    return [t.fill ? i("rect", {
                        key: "b" + n,
                        staticClass: "noprint",
                        attrs: {
                            x: t.x,
                            y: t.y,
                            width: t.w,
                            height: t.h,
                            fill: t.fill
                        }
                    }) : e._e()]
                }
                ))]), e._v(" "), e.musScore.displayParam.showVersion ? i("text", {
                    staticClass: "noprint",
                    attrs: {
                        x: 5,
                        y: 20,
                        fill: "gray"
                    }
                }, [e._v(e._s(e.score.ver) + "-0401")]) : e._e(), e._v(" "), e._t("measurebg", [e._l(e.musScore.hiMeasures, (function(t, n) {
                    return [i("rect", e._b({
                        key: "r" + n,
                        staticClass: "noprint"
                    }, "rect", t, !1))]
                }
                ))]), e._v(" "), e._t("cursorbg"), e._v(" "), e._l(e.musScore.pages, (function(t, n) {
                    return [e.mountPage0 < 0 || n >= e.mountPage0 && n < e.mountPage1 ? i("g", {
                        key: "p" + n,
                        attrs: {
                            id: "page_" + n,
                            transform: "translate(" + t.x + "," + t.y + ")"
                        }
                    }, [e.musScore.displayParam.noPrintWatermark ? e._e() : i("g", {
                        staticClass: "print"
                    }, ), e._v(" "), t.title ? i("SvgTitle", {
                        attrs: {
                            title: e.score.title,
                            lineh: e.lineh,
                            pagex: e.musScore.page.x,
                            x: e.getTitlex(t),
                            y: t.titley
                        }
                    }) : e._e(), e._v(" "), t.ls > 0 ? e._l(t.ls, (function(n) {
                        return i("SvgLine", {
                            key: "l" + t.l1 + n,
                            attrs: {
                                lineIndex: t.l1 + n - 1,
                                mline: e.musScore.lines[t.l1 + n - 1],
                                musScore: e.musScore,
                                lineh: e.lineh,
                                parts: e.score.parts,
                                groups: e.score.groups || [],
                                page: e.musScore.page,
                                jianpu: e.musScore.jianpu,
                                innerJianpu: e.innerJianpu,
                                continues: e.musScore.getContinueItem(t.l1 + n - 1),
                                nextLine: n < e.musScore.lines.length - 1 ? e.musScore.lines[t.l1 + n] : null,
                                jpFifthsPos: e.musScore.jpFifthsPos,
                                addedNotes: e.musScore.addedNotes,
                                mountMeas0: e.mountMeas0,
                                mountMeas1: e.mountMeas1,
                                compile_status: e.compile_status
                            }
                        })
                    }
                    )) : e._e(), e._v(" "), "onepaged" == e.musScore.display ? i("SvgFooter", {
                        attrs: {
                            footer: e.score.footer,
                            pageIndex: n + 1,
                            pageCount: e.musScore.pages.length,
                            lineh: e.lineh,
                            pagex: e.musScore.page.x,
                            x: t.w / 2,
                            y: t.h - 5 * e.lineh
                        }
                    }) : e._e(), e._v(" "), 0 == n && e.score.qrcode && !e.musScore.displayParam.noPrintQrcode ? i("SvgQrcode", {
                        attrs: {
                            qrcode: e.score.qrcode,
                            pagex: e.musScore.page.x,
                            x: 2 * e.lineh,
                            y: 2 * e.lineh,
                            lineh: e.lineh
                        }
                    }) : e._e(), e._v(" "), "onepaged" == e.musScore.display ? i("g", {
                        staticClass: "noprint"
                    }, [i("rect", {
                        attrs: {
                            width: t.w,
                            height: 2 * e.lineh,
                            y: t.h - 2 * e.lineh,
                            fill: "#696969"
                        }
                    })]) : e._e()], 2) : e._e()]
                }
                )), e._v(" "), e._t("foreground")], 2) : i("div", [e._v("\n    >>\n")])
            },
            staticRenderFns: []
        }, (function(e) {
            e && (e("data-v-1d111dd8_0", {
                source: ".disable0 .track0,.disable1 .track1,.disable10 .track10,.disable11 .track11,.disable2 .track2,.disable3 .track3,.disable4 .track4,.disable5 .track5,.disable6 .track6,.disable7 .track7,.disable8 .track8,.disable9 .track9{fill:#d3d3d3;stroke:#d3d3d3}",
                map: void 0,
                media: void 0
            }),
            e("data-v-1d111dd8_1", {
                source: ".scorefont[data-v-1d111dd8]{font-family:Aloisen New,Arial,Times New Roman,Times,serif}@media print{.noprint[data-v-1d111dd8]{display:none}.print[data-v-1d111dd8]{display:block}}@media screen{.print[data-v-1d111dd8]{display:none}}",
                map: void 0,
                media: void 0
            }))
        }
        ), {
            name: "SvgScore",
            props: {
                score: {
                    type: Object,
                    required: !0
                },
                lineh: {
                    type: Number,
                    default: 10
                },
                config: Object,
                compile_status: Object
            },
            data: function() {
                var e = new j(this.score,this.lineh,this.config);
                this.config.displayParam && this.config.displayParam.jianpu && (e.jianpu = 1),
                this.config.displayParam && this.config.displayParam.innerJianpu ? this.innerJianpu = 1 : this.innerJianpu = 0;
                var t = 0
                  , i = 0;
                return this.config.showall && (t = 1e4,
                i = 1e5),
                {
                    musScore: e,
                    orig_fifths: this.score.fifths,
                    fifths: this.score.fifths,
                    jianpu: this.jianpu,
                    innerJianpu: this.innerJianpu,
                    cursor: {},
                    startTime: 0,
                    usedTime: 0,
                    disableClass: {},
                    mountPage0: 0,
                    mountPage1: t,
                    mountMeas0: 0,
                    mountMeas1: i,
                    filename:e.defaultFilename
                }
            },
            components: {
                SvgTitle: D,
                SvgLine: _e,
                SvgFooter: Se,
                SvgQrcode: C({
                    render: function() {
                        var e = this
                          , t = e.$createElement
                          , i = e._self._c || t;
                        return i("g", {
                            staticClass: "qrcode print"
                        }, [e.obj.qrcode ? [i("g", {
                            domProps: {
                                innerHTML: e._s(e.obj.qrcode)
                            }
                        })] : e._e(), e._v(" "), e.obj.titles && e.obj.titles.length > 0 ? e._l(e.obj.titles, (function(t, n) {
                            return i("text", {
                                key: "qrcode" + n,
                                attrs: {
                                    x: e.qrcodeSize + e.pagex + e.x + 3 * e.lineh,
                                    y: e.y + 2 * e.lineh + e.qrcodeSize / 2 - e.obj.titleSize * e.obj.titles.length / 2 - e.lineh * (e.obj.titles.length - 1) / 2 + (e.obj.titleSize + e.lineh) * n + e.obj.titleSize,
                                    "font-size": e.obj.titleSize
                                }
                            }, [e._v(e._s(t))])
                        }
                        )) : e._e()], 2)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-38b00224_0", {
                        source: ".qrcode[data-v-38b00224]{font-family:Times New Roman,Times,serif;white-space:pre}",
                        map: void 0,
                        media: void 0
                    })
                }
                ), {
                    name: "SvgQrcode",
                    props: {
                        x: Number,
                        y: Number,
                        pagex: {
                            type: Number,
                            default: 0
                        },
                        lineh: Number,
                        qrcode: Object,
                        qrcodeSize: {
                            type: Number,
                            default: 100
                        }
                    },
                    data: function() {
                        return {
                            obj: new Oe(this.qrcode,this.pagex + this.x + 2 * this.lineh,this.y + 2 * this.lineh,this.qrcodeSize,this.lineh)
                        }
                    }
                }, "data-v-38b00224", !1, void 0, !1, P, void 0, void 0)
            },
            mounted: function() {
                this.$emit("svgmounted")

            },
            methods: {
                setScore: function(e) {
                    this.musScore = new j(e,this.lineh,this.config),
                    this.config.displayParam && this.config.displayParam.jianpu && (this.musScore.jianpu = 1)
                },
                getTitlex: function(e) {
                    var t = e.titlex;
                    return this.musScore.jianpu && (t -= this.musScore.page.x / 4),
                    t
                },
                transFifths: function(e) {
                    if (e !== this.fifths) {
                        var t = e;
                        this.musScore.transposeKey(this.fifths, t),
                        this.fifths = t
                    }
                },
                highlightMeasure: function(e) {
                    this.musScore.hiMeasures = [];
                    var t, i = x(e);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var n = t.value;
                            this.musScore.addFlag({
                                type: "rect",
                                mm: n
                            })
                        }
                    } catch (s) {
                        i.e(s)
                    } finally {
                        i.f()
                    }
                },
                showStaffHead: function(e, t) {
                    this.musScore.showStaffHead(e, t)
                },
                showCursor: function(e, t, i) {
                    var n = this.musScore.posOf(e, t, i);
                    if (n)
                        return this.cursor = n,
                        n
                },
                getMeasureRect: function(e) {
                    var t = this.musScore.measureInfos[e];
                    return {
                        x: this.musScore.measurex(t),
                        y: t.pagey + t.liney,
                        height: t.h,
                        width: t.w
                    }
                },
                updateCursorPos: function(e) {
                    if (e) {
                        var t = this.musScore.posOf(e.mm, e.nn, e.percent);
                        t && (this.cursor = t)
                    }
                },
                getPrefSize: function(e) {
                    return this.musScore.getPrefSize(e)
                },
                showParts: function(e) {
                    this.musScore.showParts(e),
                    this.$nextTick((function() {
                        this.$emit("svgrendered")
                    }
                    ))
                },
                setTrackStyle: function(e, t) {
                    var i, n = {}, s = x(e);
                    try {
                        for (s.s(); !(i = s.n()).done; )
                            n["disable" + i.value] = !0
                    } catch (a) {
                        s.e(a)
                    } finally {
                        s.f()
                    }
                    this.disableClass = n
                },
                setTrackClass: function(e) {
                    this.disableClass = e
                },
                setDisplayMode: function(e, t) {
                    t.jianpu && (this.musScore.jianpu = 1),
                    t.innerJianpu && (this.innerJianpu = 1),
                    this.config.showall || ("oneline" === e ? (this.mountPage0 = -1,
                    this.mountPage1 = 0,
                    this.mountMeas0 = 0,
                    this.mountMeas1 = 0) : (this.mountPage0 = 0,
                    this.mountPage1 = 0,
                    this.mountMeas0 = -1,
                    this.mountMeas1 = 0)),
                    this.musScore.setDisplayMode(e, t),
                    this.$nextTick((function() {
                        this.$emit("svgrendered")
                    }
                    ))
                },
                setOnepageMode: function(e) {
                    this.setDisplayMode("onepage", e)
                },
                setHorpageMode: function(e) {
                    this.setDisplayMode("horpage", e)
                },
                setOnelineMode: function(e) {
                    this.setDisplayMode("oneline", e)
                },
                showJianpu: function(e, t) {
                    this.musScore.setJianpu(e, t)
                },
                showInnerJianpu: function(e) {
                    this.innerJianpu = e,
                    this.musScore.continues = null
                },
                addNote: function(e, t, i, n) {
                    this.musScore.addNoteId(e, t, i, n)
                },
                clearNotes: function(e) {
                    this.musScore.clearNotes(e)
                },
                clearAllNotes: function() {
                    this.musScore.addedNotes = null
                },
                getMeasurePos: function(e) {
                    return this.musScore.getMueasurePos(e)
                },
                getNotePos: function(e) {
                    return this.musScore.getNotePos(e)
                },
                getNoteInfo: function(e) {
                    return this.musScore.getNoteInfo(e)
                },
                setNoteColor: function(e, t) {
                    return this.musScore.setNoteColor(e, t)
                },
                setStemColor: function(e, t) {
                    return this.musScore.setStemColor(e, t)
                },
                showFlag: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.musScore.addFlag(e)
                },
                clearFlag: function(e) {
                    this.musScore.clearFlag(e)
                },
                setMountPages: function(e, t) {
                    this.mountPage0 = e,
                    this.mountPage1 = e + t,
                    this.mountMeas0 = -1
                },
                setMountMeas: function(e, t) {
                    this.mountMeas0 = e,
                    this.mountMeas1 = e + t,
                    this.mountPage0 = -1
                },
                onClickMeas: function(e) {},
                getOffsetLeft: function(e) {
                    return e.offsetParent ? e.getOffsetLeft + this.getOffsetTop(e.offsetParent) : e.getOffsetLeft
                },
                getOffsetTop: function(e) {
                    return e.offsetParent ? e.offsetTop + this.getOffsetTop(e.offsetParent) : e.offsetTop
                },
                onTouchStart: function(e) {
                    var t = e.targetTouches[0];
                    this.touchX = t.screenX,
                    this.touchY = t.screenY
                },
                onTouchEnd: function(e) {
                    var t = e.changedTouches[0];
                    if (!(Math.abs(t.screenX - this.touchX) + Math.abs(t.screenY - this.touchY) > 20)) {
                        var i = document.querySelector("#svg").parentElement
                          , n = this.getOffsetTop(i)
                          , s = t.pageX
                          , a = t.pageY - n
                          , r = this.musScore.getTouchPos(s, a);
                        r && this.$emit("clickmeas", r)
                    }
                },
                onMouseDown: function(e) {
                    this.touchX = e.screenX,
                    this.touchY = e.screenY
                },
                onMouseUp: function(e) {
                    var t = e;
                    if (!(Math.abs(t.screenX - this.touchX) + Math.abs(t.screenY - this.touchY) > 20)) {
                        var i = document.querySelector("#svg").parentElement
                          , n = this.getOffsetTop(i)
                          , s = t.pageX
                          , a = t.pageY - n
                          , r = this.musScore.getTouchPos(s, a);
                        r && this.$emit("clickmeas", r)
                    }
                },
                getPages: function() {
                    console.log("getpage11111111");
                    return this.musScore.pages
                },
                getPageSvg: function() {
                    console.log("getpagesvg");
                    for (var e = [], t = this.musScore.pages.length, i = 'width="'.concat(this.score.page.w, '0', ).concat('" height="').concat(this.score.page.h, '0').concat('" viewBox="0 0 ').concat(this.score.page.w, " ").concat(this.score.page.h, '"'), n = 0; n < t; n++) {
                        var s = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" '.concat(i, ' style="zoom: ').concat(this.musScore.scale, ';">');
                        s += document.getElementById("page_" + n).innerHTML,
                        s += "</svg>",
                        e.push(s)
                    }
                    return e
                },
                onrotate: function(e) {
                    var t = document.documentElement.clientWidth;
                    console.log("orientation=", window.orientation, ",scale=", this.musScore.scale, t / this.score.page.w, ",screen width=", screen.width, ",screen height=", screen.height),
                    this.musScore.scale = t / this.musScore.page.w
                },
                changeKey: function(e) {
                    this.musScore.changeKey(e)
                }
            }
        }, "data-v-1d111dd8", !1, void 0, !1, P, void 0, void 0)
          , Ie = function e(t, i) {
            if (!e.installed) {
                var n, s = i || {};
                if (s.plugins) {
                    var a = Te.mixins || [];
                    a = a.concat(s.plugins),
                    n = Object.assign(Te, {
                        mixins: a
                    })
                } else
                    n = Te;
                t.component(Te.name, n)
            }
        };
        "undefined" != typeof window && window.Vue && Ie(window.Vue);
        var je = i("94a1")
          , Me = i("66cb")
          , Ne = {
            name: "Player",
            components: {
                SvgScore: Te
            },
            props: ["qupu", "showVersion", "noPrintWatermark", "noPrintQrcode", "defaultJianpu", "defaultReadingMode", "defaultWaterfallMode", "defaultDisableTouchSeek", "defaultLocked", "defaultCovered", "defaultBackgroundColor", "appVersion","defaultFilename"],
            data: function(e) {
                console.log("client size:" + document.documentElement.clientWidth, ",", document.documentElement.clientHeight),
                console.log("loading " + this.qupu);
                var t = e.defaultBackgroundColor ? e.defaultBackgroundColor : "FFFFFF00"
                  , i = Me(t)
                  , n = i.toHexString()
                  , s = i.getAlpha();
                return console.log("backgroundColor:", n, ",backgroundAlpha:", s),
                {
                    paged: !0,
                    lineh: 10,
                    score: null,
                    musScore: null,
                    cursorPos: null,
                    hideCursor: !1,
                    loopARect: null,
                    loopBRect: null,
                    loopRects: null,
                    waterfallMode: e.defaultWaterfallMode,
                    noteIndicators: {},
                    svgWidth: 0,
                    svgHeight: 0,
                    backgroundColor: n,
                    backgroundAlpha: s,
                    messy: null,
                    messyRects: null,
                    locked: e.defaultLocked,
                    covered: e.defaultCovered,
                    jianpu: e.defaultJianpu,
                    readingMode: e.defaultReadingMode,
                    defaultFilename:e.defaultFilename

                }
            },
            mounted: function() {
                var e = this
                  , t = {
                    showCursor: function(t) {
                        void 0 !== t ? e.cursorPos = t : e.hideCursor = !1
                    },
                    hideCursor: function() {
                        e.hideCursor = !0
                    },
                    showLoop: function(t) {
                        Array.isArray(t) ? (e.loopARect = t[0],
                        e.loopBRect = t[t.length - 1],
                        e.loopRects = t) : t ? (e.loopARect = t,
                        e.loopBRect = null,
                        e.loopRects = null) : (e.loopARect = null,
                        e.loopBRect = null,
                        e.loopRects = null)
                    },
                    onWaterfallMode: function(t) {
                        e.waterfallMode = t
                    },
                    onClearIndicator: function() {
                        e.noteIndicators = {},
                        e.messy = [],
                        e.messyRects = []
                    },
                    onSetIndicator: function(t, i) {
                        u["a"].set(e.noteIndicators, t, i)
                    },
                    onSetIndicators: function(t, i, n) {
                        e.noteIndicators = t,
                        e.messy = i,
                        e.messyRects = n
                    },
                    onSetBackgroundColor: function(t) {
                        var i = Me(t);
                        e.backgroundColor = i.toHexString(),
                        e.backgroundAlpha = i.getAlpha()
                    },
                    onCovered: function(t) {
                        e.covered = t
                    },
                    onSetJianpuMode: function(t) {
                        e.jianpu = t
                    },
                    onSetReadingMode: function(t) {
                        e.readingMode = t
                    }
                };
                this.controller = new je["a"](this,t,this.appVersion),
                this.controller.setWaterfallMode(this.waterfallMode),
                this.controller.setLocked(this.defaultLocked),
                this.controller.setCovered(this.defaultCovered),
                this.controller.disableTouchSeek(this.defaultDisableTouchSeek),

                this.qupu && this.controller.readTextFile(this.qupu, this.readingMode, this.onDataCallback,this.defaultFilename),

                this.controller.setDataCallback(this.onDataCallback),
                window.Player = this.controller
                window.PPlayer=this
            },
            methods: {
                onDataCallback: function(e) {

                try{
                    var t = null == this.score;
                    t ? this.score = e : (this.score = null,
                    this.$refs.svgScore.setScore(e),
                    this.$nextTick((function() {
                        this.score = e
                    }
                    ))),
                    this.$nextTick((function() {
                        this.musScore = this.$refs.svgScore.musScore,
                        this.controller.updateState({
                            inited: 1
                        }, "inited"),
                        this.controller.setWaterfall(this.$refs.waterfall)
                    }
                    ))}
                    catch(ex){
                    alert(ex);
                    }
                },
                onMouseDown: function(e) {
                    this.controller.onMouseDown(e)
                },
                onMouseUp: function(e) {
                    this.controller.onMouseUp(e)
                },
                svgmounted: function() {
                    console.log("svgmounted"),
                    this.controller.setSvgScore(this.$refs.svgScore),
                    this.svgWidth = this.$refs.svgScore.musScore.page.w + 2,
                    this.svgHeight = this.$refs.svgScore.musScore.page.h




                },
                svgrendered: function() {
                    console.log("svgrendered")
                },
                clickmeas: function(e) {
                    this.controller.clickmeas(e)
                }
            }
        }
          , Ce = Ne
          , Ee = (i("6131"),
        i("2877"))
          , Be = Object(Ee["a"])(Ce, o, l, !1, null, null, null);
        t["a"] = Be.exports
    },
    de55: function(e, t, i) {
        e.exports = i.p + "static/img/wrong.906657b0.svg"
    }
}]);

