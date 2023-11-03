(function(e) {
    function t(t) {
        for (var n, u, c = t[0], i = t[1], d = t[2], f = 0, s = []; f < c.length; f++)
            u = c[f],
            Object.prototype.hasOwnProperty.call(o, u) && o[u] && s.push(o[u][0]),
            o[u] = 0;
        for (n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        l && l(t);
        while (s.length)
            s.shift()();
        return a.push.apply(a, d || []),
        r()
    }
    function r() {
        for (var e, t = 0; t < a.length; t++) {
            for (var r = a[t], n = !0, c = 1; c < r.length; c++) {
                var i = r[c];
                0 !== o[i] && (n = !1)
            }
            n && (a.splice(t--, 1),
            e = u(u.s = r[0]))
        }
        return e
    }
    var n = {}
      , o = {
        web: 0
    }
      , a = [];
    function u(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, u),
        r.l = !0,
        r.exports
    }
    u.m = e,
    u.c = n,
    u.d = function(e, t, r) {
        u.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    u.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    u.t = function(e, t) {
        if (1 & t && (e = u(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (u.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                u.d(r, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return r
    }
    ,
    u.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return u.d(t, "a", t),
        t
    }
    ,
    u.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    u.p = "";
    var c = this["webpackJsonp"] = this["webpackJsonp"] || []
      , i = c.push.bind(c);
    c.push = t,
    c = c.slice();
    for (var d = 0; d < c.length; d++)
        t(c[d]);
    var l = i;
    a.push([4, "chunk-vendors", "chunk-common"]),
    r()
}
)(
{
    "2d89": function(e, t, r) {
        "use strict";
        var n = r("c23f")
          , o = r.n(n);
        o.a
    },
    "38a0": function(e, t, r) {
        "use strict";
        r.r(t);
        r("e260"),
        r("e6cf"),
        r("cca6"),
        r("a79d");
        var n = r("2b0e")
          , o = function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("div", {
                attrs: {
                    id: "app"
                }
            }, [e.xypfile ? r("Player", {
                ref: "player",
                attrs: {
                    qupu: e.filename,
                    defaultJianpu: e.jianpu,
                    defaultReadingMode: e.readingMode,
                    defaultWaterfallMode: e.waterfallMode,
                    defaultLocked: e.locked,
                    defaultCovered: e.covered,
                    defaultDisableTouchSeek: e.disableTouchSeek,
                    defaultBackgroundColor: e.backgroundColor,
                    defaultFilename:e.filename
                },
                on: {
                    onUpdateState: e.onUpdateState
                }
            }) : e._e()], 1)
        }
          , a = []
          , u = (r("b0c0"),
        r("4d63"),
        r("ac1f"),
        r("25f0"),
        r("466d"),
        r("841c"),
        r("cccf"))
          , c = {
            name: "App",
            components: {
                Player: u["a"]
            },
            data: function() {
                var e = this.getQueryString("name");
                e = e ? decodeURIComponent(e) : "test";
                var t = this.getQueryString("url");
                t = t ? decodeURIComponent(t) : void 0;
                var r = t || "./test/" + e + ".dat",
                 n = this.getQueryString("readingMode");
                n = "true" == n;
                var o = this.getQueryString("jianpuMode");
                o = "true" == o ? 1 : parseInt(o);
                var a = this.getQueryString("waterfallMode");
                a = "true" == a || "1" == a ? 1 : 0;
                var u = this.getQueryString("disableTouchSeek");
                u = "true" == u;
                var c = this.getQueryString("locked");
                c = "true" == c;
                var i = this.getQueryString("covered");
                i = "true" == i;
                var d = this.getQueryString("backgroundColor");
                 var filename = this.getQueryString("filename");
//                MusicApp.postMessage('{"method":"getSource2","data":'+JSON.stringify({"filename":filename})+',"success":"getusersuc","error":"getusererr"}');
                return {
                    xypfile: r,
                    jianpu: o,
                    readingMode: n,
                    waterfallMode: a,
                    disableTouchSeek: u,
                    locked: c,
                    covered: i,
                    backgroundColor: d,
                    filename:filename
                }
            },
            mounted: function() {},
            methods: {
                getQueryString: function(e) {
                    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
                      , r = window.location.search.substr(1).match(t);
                    return null != r ? decodeURIComponent(r[2]) : null
                },
                toFixed2: function(e) {
                    return e < 10 ? "0" + e : e
                },
                onUpdateState: function(e) {
                    "inited" == e.name && 2 == e.data.inited && window.parent.postMessage({
                        message: "onPlayerInited"
                    }, "*")
                }
            }
        }
          , i = c
          , d = (r("2d89"),
        r("2877"))
          , l = Object(d["a"])(i, o, a, !1, null, null, null)
          , f = l.exports;
        r("3a34");
        n["a"].config.productionTip = !1,
        new n["a"]({
            render: function(e) {
                return e(f)
            }
        }).$mount("#app")
    },
    4: function(e, t, r) {
        e.exports = r("38a0")
    },
    c23f: function(e, t, r) {}
});