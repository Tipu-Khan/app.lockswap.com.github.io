(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([[15], {
    1106: function(e, n, t) {
        "use strict";
        t.r(n);
        t(0);
        var i, r, c, s, a, o, l, d, u = t(19), j = t(788), x = t.n(j), b = t(48), f = t(204), p = t(201), h = t(54), m = t(3), O = t(94), g = t(8), v = m.e.div(i || (i = Object(h.a)(["\n  align-self: stretch;\n  background: ", ";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])), (function(e) {
            return function(e) {
                return e.isDark ? "linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)" : "linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"
            }(e.theme)
        }
        )), y = m.e.div(r || (r = Object(h.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  ", " {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), F = m.e.div(c || (c = Object(h.a)(["\n  flex: 1;\n"]))), w = m.e.img(s || (s = Object(h.a)(["\n  border-radius: 50%;\n"]))), k = Object(m.e)(u.F).attrs({
            as: "h3"
        })(a || (a = Object(h.a)(["\n  font-size: 24px;\n\n  ", " {\n    font-size: 40px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), S = m.e.div(o || (o = Object(h.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n\n  ", " {\n    display: none;\n  }\n"])), w, (function(e) {
            return e.theme.mediaQueries.md
        }
        )), z = m.e.div(l || (l = Object(h.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n    margin-left: 24px;\n\n    ", " {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        ), w), E = Object(m.e)(u.o)(d || (d = Object(h.a)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))), D = function(e) {
            var n = e.rank
              , t = e.team
              , i = Object(p.a)()
              , r = Object(g.jsx)(w, {
                src: "/images/teams/".concat(t.images.md),
                alt: "team avatar"
            });
            return Object(g.jsxs)(E, {
                children: [Object(g.jsx)(v, {
                    children: Object(g.jsx)(u.db, {
                        bold: !0,
                        fontSize: "24px",
                        children: n
                    })
                }), Object(g.jsxs)(y, {
                    children: [Object(g.jsxs)(F, {
                        children: [Object(g.jsxs)(u.E, {
                            alignItems: "center",
                            mb: "16px",
                            children: [Object(g.jsx)(S, {
                                children: r
                            }), Object(g.jsx)(k, {
                                children: t.name
                            })]
                        }), Object(g.jsx)(u.db, {
                            as: "p",
                            color: "textSubtle",
                            pr: "24px",
                            mb: "16px",
                            children: t.description
                        }), Object(g.jsxs)(u.E, {
                            children: [Object(g.jsxs)(u.E, {
                                children: [Object(g.jsx)(u.W, {
                                    width: "24px",
                                    mr: "8px",
                                    style: {
                                        alignSelf: "center"
                                    }
                                }), Object(g.jsx)(u.db, {
                                    fontSize: "24px",
                                    bold: !0,
                                    children: t.points.toLocaleString()
                                })]
                            }), Object(g.jsxs)(u.E, {
                                ml: "24px",
                                children: [Object(g.jsx)(u.B, {
                                    width: "24px",
                                    mr: "8px",
                                    style: {
                                        alignSelf: "center"
                                    }
                                }), Object(g.jsx)(u.db, {
                                    fontSize: "24px",
                                    bold: !0,
                                    children: t.users.toLocaleString()
                                })]
                            })]
                        })]
                    }), Object(g.jsx)(u.k, {
                        as: O.a,
                        to: "/teams/".concat(null === t || void 0 === t ? void 0 : t.id),
                        variant: "secondary",
                        scale: "sm",
                        children: i(1042, "See More")
                    }), Object(g.jsx)(z, {
                        children: r
                    })]
                })]
            })
        }, I = t(840);
        n.default = function() {
            var e = Object(p.a)()
              , n = Object(b.q)()
              , t = n.teams
              , i = n.isLoading
              , r = Object.values(t)
              , c = x()(r, ["points", "id", "name"], ["desc", "asc", "asc"]);
            return Object(g.jsxs)(f.a, {
                children: [Object(g.jsx)(I.a, {}), Object(g.jsxs)(u.E, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "32px",
                    children: [Object(g.jsx)(u.F, {
                        size: "xl",
                        children: e(1040, "Teams")
                    }), i && Object(g.jsx)(u.d, {
                        spin: !0
                    })]
                }), c.map((function(e, n) {
                    return Object(g.jsx)(D, {
                        rank: n + 1,
                        team: e
                    }, e.id)
                }
                ))]
            })
        }
    },
    788: function(e, n, t) {
        var i = t(789)
          , r = t(105);
        e.exports = function(e, n, t, c) {
            return null == e ? [] : (r(n) || (n = null == n ? [] : [n]),
            r(t = c ? void 0 : t) || (t = null == t ? [] : [t]),
            i(e, n, t))
        }
    },
    789: function(e, n, t) {
        var i = t(382)
          , r = t(381)
          , c = t(790)
          , s = t(793)
          , a = t(795)
          , o = t(387)
          , l = t(796)
          , d = t(207)
          , u = t(105);
        e.exports = function(e, n, t) {
            n = n.length ? i(n, (function(e) {
                return u(e) ? function(n) {
                    return r(n, 1 === e.length ? e[0] : e)
                }
                : e
            }
            )) : [d];
            var j = -1;
            n = i(n, o(c));
            var x = s(e, (function(e, t, r) {
                return {
                    criteria: i(n, (function(n) {
                        return n(e)
                    }
                    )),
                    index: ++j,
                    value: e
                }
            }
            ));
            return a(x, (function(e, n) {
                return l(e, n, t)
            }
            ))
        }
    },
    793: function(e, n, t) {
        var i = t(794)
          , r = t(153);
        e.exports = function(e, n) {
            var t = -1
              , c = r(e) ? Array(e.length) : [];
            return i(e, (function(e, i, r) {
                c[++t] = n(e, i, r)
            }
            )),
            c
        }
    },
    795: function(e, n) {
        e.exports = function(e, n) {
            var t = e.length;
            for (e.sort(n); t--; )
                e[t] = e[t].value;
            return e
        }
    },
    796: function(e, n, t) {
        var i = t(797);
        e.exports = function(e, n, t) {
            for (var r = -1, c = e.criteria, s = n.criteria, a = c.length, o = t.length; ++r < a; ) {
                var l = i(c[r], s[r]);
                if (l)
                    return r >= o ? l : l * ("desc" == t[r] ? -1 : 1)
            }
            return e.index - n.index
        }
    },
    797: function(e, n, t) {
        var i = t(128);
        e.exports = function(e, n) {
            if (e !== n) {
                var t = void 0 !== e
                  , r = null === e
                  , c = e === e
                  , s = i(e)
                  , a = void 0 !== n
                  , o = null === n
                  , l = n === n
                  , d = i(n);
                if (!o && !d && !s && e > n || s && a && l && !o && !d || r && a && l || !t && l || !c)
                    return 1;
                if (!r && !s && !d && e < n || d && t && c && !r && !s || o && t && c || !a && c || !l)
                    return -1
            }
            return 0
        }
    },
    799: function(e, n, t) {
        "use strict";
        var i, r = t(54), c = t(3).e.div(i || (i = Object(r.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) {
            return e.theme.colors.textSubtle
        }
        ));
        n.a = c
    },
    840: function(e, n, t) {
        "use strict";
        t(0);
        var i = t(19)
          , r = t(48)
          , c = t(201)
          , s = t(799)
          , a = t(94)
          , o = t(8)
          , l = function() {
            var e = Object(c.a)();
            return Object(o.jsx)(i.o, {
                mb: "32px",
                isActive: !0,
                children: Object(o.jsx)(i.p, {
                    children: Object(o.jsxs)(i.E, {
                        alignItems: ["start", null, "center"],
                        justifyContent: ["start", null, "space-between"],
                        flexDirection: ["column", null, "row"],
                        children: [Object(o.jsxs)("div", {
                            children: [Object(o.jsx)(i.F, {
                                size: "lg",
                                mb: "8px",
                                children: e(1052, "You haven't set up your profile yet!")
                            }), Object(o.jsx)(i.db, {
                                children: e(1054, "You can do this at any time by clicking on your profile picture in the menu")
                            })]
                        }), Object(o.jsx)(i.k, {
                            as: a.a,
                            to: "/profile",
                            mt: ["16px", null, 0],
                            children: e(1050, "Set up now")
                        })]
                    })
                })
            })
        };
        n.a = function() {
            var e = Object(c.a)()
              , n = Object(r.o)()
              , t = n.isInitialized
              , a = n.profile
              , d = t && !a;
            return Object(o.jsxs)(o.Fragment, {
                children: [d && Object(o.jsx)(l, {}), Object(o.jsxs)(s.a, {
                    children: [Object(o.jsx)(i.F, {
                        as: "h1",
                        size: "xxl",
                        color: "secondary",
                        children: e(1082, "Teams & Profiles")
                    }), Object(o.jsx)(i.db, {
                        bold: !0,
                        children: e(999, "Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")
                    })]
                })]
            })
        }
    }
}]);
//# sourceMappingURL=15.8605e56c.chunk.js.map
