(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([[13], {
    1099: function(e, t, n) {
        "use strict";
        n.r(t);
        var c, r, i, a, o, s, l, u, b, j, d, p, O = n(0), x = n(34), f = n(46), m = n(204), h = n(224), v = n(48), g = n(54), w = n(3), y = n(19), k = n(201), C = n(2), S = n.n(C), E = n(12), I = n(33), A = n(16), T = n(10), F = n.n(T), R = n(71), P = .5, D = [5, 6, 7, 8, 9], z = n(8), N = {
            isInitialized: !1,
            currentStep: 0,
            teamId: null,
            tokenId: null,
            userName: "",
            minimumCakeRequired: new F.a(1.5).multipliedBy(new F.a(10).pow(18)),
            allowance: new F.a(7.5).multipliedBy(new F.a(10).pow(18))
        }, _ = function(e, t) {
            switch (t.type) {
            case "initialize":
                return Object(A.a)(Object(A.a)({}, e), {}, {
                    isInitialized: !0,
                    currentStep: t.step
                });
            case "next_step":
                return Object(A.a)(Object(A.a)({}, e), {}, {
                    currentStep: e.currentStep + 1
                });
            case "set_team":
                return Object(A.a)(Object(A.a)({}, e), {}, {
                    teamId: t.teamId
                });
            case "set_tokenid":
                return Object(A.a)(Object(A.a)({}, e), {}, {
                    tokenId: t.tokenId
                });
            case "set_username":
                return Object(A.a)(Object(A.a)({}, e), {}, {
                    userName: t.userName
                });
            default:
                return e
            }
        }, L = Object(O.createContext)(null), M = function(e) {
            var t = e.children
              , n = Object(O.useReducer)(_, N)
              , c = Object(I.a)(n, 2)
              , r = c[0]
              , i = c[1]
              , a = Object(f.c)().account;
            Object(O.useEffect)((function() {
                var e = !0;
                return a && function() {
                    var t = Object(E.a)(S.a.mark((function t() {
                        var n, c;
                        return S.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = Object(R.b)(),
                                    t.next = 3,
                                    n.methods.canMint(a).call();
                                case 3:
                                    c = t.sent,
                                    i({
                                        type: "initialize",
                                        step: c ? 0 : 1
                                    }),
                                    e && i({
                                        type: "initialize",
                                        step: c ? 0 : 1
                                    });
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()(),
                function() {
                    e = !1
                }
            }
            ), [a, i]);
            var o = Object(O.useMemo)((function() {
                return {
                    nextStep: function() {
                        return i({
                            type: "next_step"
                        })
                    },
                    setTeamId: function(e) {
                        return i({
                            type: "set_team",
                            teamId: e
                        })
                    },
                    setTokenId: function(e) {
                        return i({
                            type: "set_tokenid",
                            tokenId: e
                        })
                    },
                    setUserName: function(e) {
                        return i({
                            type: "set_username",
                            userName: e
                        })
                    }
                }
            }
            ), [i]);
            return Object(z.jsx)(L.Provider, {
                value: Object(A.a)(Object(A.a)({}, r), {}, {
                    actions: o
                }),
                children: t
            })
        }, Q = w.e.div(c || (c = Object(g.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) {
            return e.theme.colors.textSubtle
        }
        )), U = [{
            translationId: 776,
            label: "Get Starter Collectible"
        }, {
            translationId: 778,
            label: "Set Profile Picture"
        }, {
            translationId: 780,
            label: "Join Team"
        }, {
            translationId: 782,
            label: "Set Name"
        }], V = function() {
            var e = Object(k.a)()
              , t = Object(O.useContext)(L).currentStep;
            return Object(z.jsxs)(Q, {
                children: [Object(z.jsx)(y.F, {
                    as: "h1",
                    size: "xxl",
                    color: "secondary",
                    mb: "8px",
                    children: e(770, "Profile Setup")
                }), Object(z.jsx)(y.F, {
                    as: "h2",
                    size: "lg",
                    mb: "8px",
                    children: e(772, "Show off your stats and collectibles with your unique profile")
                }), Object(z.jsx)(y.db, {
                    color: "textSubtle",
                    mb: "24px",
                    children: e(999, "Total cost: 1.5 CAKE")
                }), Object(z.jsx)(y.i, {
                    children: U.map((function(n, c) {
                        var r = n.translationId
                          , i = n.label;
                        return Object(z.jsx)(y.db, {
                            color: c <= t ? "text" : "textDisabled",
                            children: e(r, i)
                        }, i)
                    }
                    ))
                })]
            })
        }, q = n(764), W = function() {
            var e = Object(k.a)();
            return Object(z.jsxs)("div", {
                children: [Object(z.jsx)(y.F, {
                    size: "xl",
                    mb: "8px",
                    children: e(852, "Oops!")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    mb: "16px",
                    children: e(999, "Please connect your wallet to continue")
                }), Object(z.jsx)(q.a, {})]
            })
        }, B = n(787), K = n(759), Y = n(17), J = n(770), G = function(e) {
            return Object(J.a)(Object(Y.d)()).gte(e)
        }, H = n(108), X = n(766), Z = Object(w.e)(y.o)(r || (r = Object(g.a)(["\n  ", "\n  border-radius: 16px;\n  margin-bottom: 16px;\n"])), (function(e) {
            return !e.isSuccess && "box-shadow: none;"
        }
        )), $ = w.e.label(i || (i = Object(g.a)(["\n  cursor: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ", ";\n"])), (function(e) {
            return e.isDisabled ? "not-allowed" : "pointer"
        }
        ), (function(e) {
            return e.isDisabled ? "0.6" : "1"
        }
        )), ee = w.e.div(a || (a = Object(g.a)(["\n  align-items: center;\n  border: 2px solid ", ";\n  border-radius: 16px 0 0 16px;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"])), (function(e) {
            return e.theme.colors.tertiary
        }
        )), te = w.e.div(o || (o = Object(g.a)(["\n  margin-left: 16px;\n"]))), ne = w.e.div(s || (s = Object(g.a)(["\n  align-self: stretch;\n  background-image: url('", "');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"])), (function(e) {
            return e.src
        }
        )), ce = function(e) {
            var t = e.name
              , n = e.value
              , c = e.isChecked
              , r = void 0 !== c && c
              , i = e.image
              , a = e.onChange
              , o = e.disabled
              , s = e.children
              , l = Object(X.a)(e, ["name", "value", "isChecked", "image", "onChange", "disabled", "children"]);
            return Object(z.jsx)(Z, Object(A.a)(Object(A.a)({
                isSuccess: r,
                isDisabled: o,
                mb: "16px"
            }, l), {}, {
                children: Object(z.jsxs)($, {
                    isDisabled: o,
                    children: [Object(z.jsxs)(ee, {
                        children: [Object(z.jsx)(y.Y, {
                            name: t,
                            checked: r,
                            value: n,
                            onChange: function(e) {
                                return a(e.target.value)
                            },
                            disabled: o,
                            style: {
                                flex: "none"
                            }
                        }), Object(z.jsx)(te, {
                            children: s
                        })]
                    }), Object(z.jsx)(ne, {
                        src: i
                    })]
                })
            }))
        }, re = function(e) {
            return Object(z.jsx)(y.k, Object(A.a)({
                endIcon: Object(z.jsx)(y.c, {
                    color: "currentColor"
                })
            }, e))
        }, ie = n(786), ae = function() {
            return Object(O.useContext)(L)
        }, oe = H.a.filter((function(e) {
            return D.includes(e.bunnyId)
        }
        )), se = new F.a(1).multipliedBy(new F.a(10).pow(18)), le = function() {
            var e = Object(O.useState)(null)
              , t = Object(I.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = ae()
              , i = r.actions
              , a = r.minimumCakeRequired
              , o = r.allowance
              , s = Object(f.c)().account
              , l = Object(K.c)()
              , u = Object(K.a)()
              , b = Object(k.a)()
              , j = G(se)
              , d = Object(B.a)({
                onRequiresApproval: function() {
                    var e = Object(E.a)(S.a.mark((function e() {
                        var t, n;
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    l.methods.allowance(s, u.options.address).call();
                                case 3:
                                    return t = e.sent,
                                    n = new F.a(t),
                                    e.abrupt("return", n.gte(a));
                                case 8:
                                    return e.prev = 8,
                                    e.t0 = e.catch(0),
                                    e.abrupt("return", !1);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 8]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                onApprove: function() {
                    return l.methods.approve(u.options.address, o.toJSON()).send({
                        from: s
                    })
                },
                onConfirm: function() {
                    return u.methods.mintNFT(n).send({
                        from: s
                    })
                },
                onSuccess: function() {
                    return i.nextStep()
                }
            })
              , p = d.isApproving
              , x = d.isApproved
              , m = d.isConfirmed
              , h = d.isConfirming
              , v = d.handleApprove
              , g = d.handleConfirm;
            return Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(y.db, {
                    fontSize: "20px",
                    color: "textSubtle",
                    bold: !0,
                    children: b(999, "Step ".concat(1))
                }), Object(z.jsx)(y.F, {
                    as: "h3",
                    size: "xl",
                    mb: "24px",
                    children: b(776, "Get Starter Collectible")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    children: b(786, "Every profile starts by making a \u201cstarter\u201d collectible (NFT).")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    children: b(788, "This starter will also become your first profile picture.")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    mb: "24px",
                    children: b(790, "You can change your profile pic later if you get another approved Pancake Collectible.")
                }), Object(z.jsx)(y.o, {
                    mb: "24px",
                    children: Object(z.jsxs)(y.p, {
                        children: [Object(z.jsx)(y.F, {
                            as: "h4",
                            size: "lg",
                            mb: "8px",
                            children: b(792, "Choose your Starter!")
                        }), Object(z.jsx)(y.db, {
                            as: "p",
                            color: "textSubtle",
                            children: b(794, "Choose wisely: you can only ever make one starter collectible!")
                        }), Object(z.jsx)(y.db, {
                            as: "p",
                            mb: "24px",
                            color: "textSubtle",
                            children: b(999, "Cost: ".concat(1, " CAKE"), {
                                num: 1
                            })
                        }), oe.map((function(e) {
                            return Object(z.jsx)(ce, {
                                name: "mintStarter",
                                value: e.bunnyId,
                                image: "/images/nfts/".concat(e.images.md),
                                isChecked: n === e.bunnyId,
                                onChange: function(e) {
                                    return c(parseInt(e, 10))
                                },
                                disabled: p || h || m || !j,
                                children: Object(z.jsx)(y.db, {
                                    bold: !0,
                                    children: e.name
                                })
                            }, e.bunnyId)
                        }
                        )), !j && Object(z.jsx)(y.db, {
                            color: "failure",
                            mb: "16px",
                            children: b(1098, "A minimum of ".concat(1, " CAKE is required"))
                        }), Object(z.jsx)(ie.a, {
                            isApproveDisabled: null === n || m || h || x,
                            isApproving: p,
                            isConfirmDisabled: !x || m || !j,
                            isConfirming: h,
                            onApprove: v,
                            onConfirm: g
                        })]
                    })
                }), Object(z.jsx)(re, {
                    onClick: i.nextStep,
                    disabled: !m,
                    children: b(798, "Next Step")
                })]
            })
        }, ue = n(94), be = n(798), je = Object(w.e)(ue.a)(l || (l = Object(g.a)(["\n  color: ", ";\n"])), (function(e) {
            return e.theme.colors.primary
        }
        )), de = w.e.div(u || (u = Object(g.a)(["\n  margin-bottom: 24px;\n"]))), pe = function() {
            var e = Object(O.useState)(!1)
              , t = Object(I.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = Object(O.useState)(!1)
              , i = Object(I.a)(r, 2)
              , a = i[0]
              , o = i[1]
              , s = Object(O.useContext)(L)
              , l = s.tokenId
              , u = s.actions
              , b = Object(k.a)()
              , j = Object(be.a)()
              , d = j.isLoading
              , p = j.nfts
              , x = Object(K.j)()
              , m = Object(f.c)().account
              , h = Object(v.r)().toastError
              , g = Object.keys(p).map((function(e) {
                return Number(e)
            }
            ))
              , w = H.a.filter((function(e) {
                return g.includes(e.bunnyId)
            }
            ));
            return d || 0 !== w.length ? Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(y.db, {
                    fontSize: "20px",
                    color: "textSubtle",
                    bold: !0,
                    children: b(999, "Step ".concat(2))
                }), Object(z.jsx)(y.F, {
                    as: "h3",
                    size: "xl",
                    mb: "24px",
                    children: b(778, "Set Profile Picture")
                }), Object(z.jsx)(y.o, {
                    mb: "24px",
                    children: Object(z.jsxs)(y.p, {
                        children: [Object(z.jsx)(y.F, {
                            as: "h4",
                            size: "lg",
                            mb: "8px",
                            children: b(812, "Choose collectible")
                        }), Object(z.jsx)(y.db, {
                            as: "p",
                            color: "textSubtle",
                            children: b(814, "Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.")
                        }), Object(z.jsxs)(y.db, {
                            as: "p",
                            color: "textSubtle",
                            mb: "24px",
                            children: [b(816, "Only approved Pancake Collectibles can be used."), Object(z.jsx)(je, {
                                to: "/collectibles",
                                style: {
                                    marginLeft: "4px"
                                },
                                children: b(999, "See the list >")
                            })]
                        }), Object(z.jsx)(de, {
                            children: d ? Object(z.jsx)(y.ab, {
                                height: "80px",
                                mb: "16px"
                            }) : w.map((function(e) {
                                var t = Object(I.a)(p[e.bunnyId].tokenIds, 1)[0];
                                return Object(z.jsx)(ce, {
                                    name: "profilePicture",
                                    value: t,
                                    image: "/images/nfts/".concat(e.images.md),
                                    isChecked: t === l,
                                    onChange: function(e) {
                                        return u.setTokenId(parseInt(e, 10))
                                    },
                                    children: Object(z.jsx)(y.db, {
                                        bold: !0,
                                        children: e.name
                                    })
                                }, e.bunnyId)
                            }
                            ))
                        }), Object(z.jsx)(y.F, {
                            as: "h4",
                            size: "lg",
                            mb: "8px",
                            children: b(818, "Allow collectible to be locked")
                        }), Object(z.jsx)(y.db, {
                            as: "p",
                            color: "textSubtle",
                            mb: "16px",
                            children: b(820, "The collectible you've chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don't worry - you'll be able to get it back at any time.")
                        }), Object(z.jsx)(y.k, {
                            isLoading: a,
                            disabled: n || a || null === l,
                            onClick: function() {
                                x.methods.approve(Object(Y.j)(), l).send({
                                    from: m
                                }).on("sending", (function() {
                                    o(!0)
                                }
                                )).on("receipt", (function() {
                                    o(!1),
                                    c(!0)
                                }
                                )).on("error", (function(e) {
                                    h("Error", null === e || void 0 === e ? void 0 : e.message),
                                    o(!1)
                                }
                                ))
                            },
                            endIcon: a ? Object(z.jsx)(y.d, {
                                spin: !0,
                                color: "currentColor"
                            }) : void 0,
                            children: b(564, "Approve")
                        })]
                    })
                }), Object(z.jsx)(re, {
                    onClick: u.nextStep,
                    disabled: null === l || !n || a,
                    children: b(798, "Next Step")
                })]
            }) : Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(y.F, {
                    size: "xl",
                    mb: "24px",
                    children: b(852, "Oops!")
                }), Object(z.jsx)(y.db, {
                    bold: !0,
                    fontSize: "20px",
                    mb: "24px",
                    children: b(854, "We couldn\u2019t find any Pancake Collectibles in your wallet.")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    children: b(856, "You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.")
                })]
            })
        }, Oe = n(929), xe = n.n(Oe), fe = function() {
            var e = ae()
              , t = e.teamId
              , n = e.actions
              , c = Object(k.a)()
              , r = Object(v.q)().teams
              , i = function(e) {
                return n.setTeamId(parseInt(e, 10))
            }
              , a = Object(O.useMemo)((function() {
                return xe()(Object.values(r))
            }
            ), [r]);
            return Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(y.db, {
                    fontSize: "20px",
                    color: "textSubtle",
                    bold: !0,
                    children: c(999, "Step ".concat(3))
                }), Object(z.jsx)(y.F, {
                    as: "h3",
                    size: "xl",
                    mb: "24px",
                    children: c(826, "Join a Team")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    mb: "24px",
                    children: c(828, "It won\u2019t be possible to undo the choice you make for the foreseeable future!")
                }), Object(z.jsx)(y.o, {
                    mb: "24px",
                    children: Object(z.jsxs)(y.p, {
                        children: [Object(z.jsx)(y.F, {
                            as: "h4",
                            size: "lg",
                            mb: "8px",
                            children: c(826, "Join a Team")
                        }), Object(z.jsx)(y.db, {
                            as: "p",
                            color: "textSubtle",
                            mb: "24px",
                            children: c(830, "There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!")
                        }), a && a.map((function(e) {
                            return Object(z.jsxs)(ce, {
                                name: "teams-selection",
                                value: e.id,
                                isChecked: t === e.id,
                                image: "/images/teams/".concat(e.images.md),
                                onChange: i,
                                disabled: !e.isJoinable,
                                children: [Object(z.jsx)(y.db, {
                                    bold: !0,
                                    children: e.name
                                }), Object(z.jsxs)(y.E, {
                                    children: [Object(z.jsx)(y.B, {
                                        mr: "8px"
                                    }), Object(z.jsx)(y.db, {
                                        children: e.users.toLocaleString()
                                    })]
                                })]
                            }, e.name)
                        }
                        ))]
                    })
                }), Object(z.jsx)(re, {
                    onClick: n.nextStep,
                    disabled: null === t,
                    children: c(798, "Next Step")
                })]
            })
        }, me = n(1102), he = n(1108), ve = n(761), ge = n(162), we = n.n(ge), ye = n(32), ke = n(77), Ce = function(e) {
            var t = e.account
              , n = e.teamId
              , c = e.tokenId
              , r = e.minimumCakeRequired
              , i = e.allowance
              , a = e.onDismiss
              , o = Object(k.a)()
              , s = Object(K.l)()
              , l = Object(K.j)()
              , u = Object(ye.b)()
              , b = Object(v.r)().toastSuccess
              , j = Object(K.c)()
              , d = Object(B.a)({
                onRequiresApproval: function() {
                    var e = Object(E.a)(S.a.mark((function e() {
                        var n, c;
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    j.methods.allowance(t, s.options.address).call();
                                case 3:
                                    return n = e.sent,
                                    c = new F.a(n),
                                    e.abrupt("return", c.gte(r));
                                case 8:
                                    return e.prev = 8,
                                    e.t0 = e.catch(0),
                                    e.abrupt("return", !1);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 8]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                onApprove: function() {
                    return j.methods.approve(s.options.address, i.toJSON()).send({
                        from: t
                    })
                },
                onConfirm: function() {
                    return s.methods.createProfile(n, l.options.address, c).send({
                        from: t
                    })
                },
                onSuccess: function() {
                    var e = Object(E.a)(S.a.mark((function e() {
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    u(Object(ke.c)(t));
                                case 2:
                                    a(),
                                    b("Profile created!");
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            })
              , p = d.isApproving
              , O = d.isApproved
              , x = d.isConfirmed
              , f = d.isConfirming
              , m = d.handleApprove
              , h = d.handleConfirm;
            return Object(z.jsxs)(y.R, {
                title: "Complete Profile",
                onDismiss: a,
                children: [Object(z.jsx)(y.db, {
                    color: "textSubtle",
                    mb: "8px",
                    children: o(999, "Submitting NFT to contract and confirming User Name and Team.")
                }), Object(z.jsxs)(y.E, {
                    justifyContent: "space-between",
                    mb: "16px",
                    children: [Object(z.jsx)(y.db, {
                        children: o(999, "Cost")
                    }), Object(z.jsx)(y.db, {
                        children: o(999, "".concat(P, " CAKE"), {
                            num: P
                        })
                    })]
                }), Object(z.jsx)(ie.a, {
                    isApproveDisabled: x || f || O,
                    isApproving: p,
                    isConfirmDisabled: !O || x,
                    isConfirming: f,
                    onApprove: m,
                    onConfirm: h
                })]
            })
        };
        !function(e) {
            e.IDLE = "idle",
            e.CREATED = "created",
            e.NEW = "new"
        }(p || (p = {}));
        var Se, Ee = "https://profile.pancakeswap.com", Ie = new F.a(P).multipliedBy(new F.a(10).pow(18)), Ae = w.e.div(b || (b = Object(g.a)(["\n  position: relative;\n  max-width: 240px;\n"]))), Te = Object(w.e)(y.J)(j || (j = Object(g.a)(["\n  padding-right: 40px;\n"]))), Fe = Object(w.e)(y.E)(d || (d = Object(g.a)(["\n  align-items: center;\n  height: 24px;\n  justify-content: center;\n  margin-top: -12px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  width: 24px;\n"]))), Re = function() {
            var e = Object(O.useState)(!1)
              , t = Object(I.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = ae()
              , i = r.teamId
              , a = r.tokenId
              , o = r.userName
              , s = r.actions
              , l = r.minimumCakeRequired
              , u = r.allowance
              , b = Object(k.a)()
              , j = Object(f.c)()
              , d = j.account
              , x = j.library
              , m = Object(v.r)().toastError
              , h = Object(ve.a)()
              , g = Object(O.useState)(p.IDLE)
              , w = Object(I.a)(g, 2)
              , C = w[0]
              , A = w[1]
              , T = Object(O.useState)(!1)
              , F = Object(I.a)(T, 2)
              , R = F[0]
              , D = F[1]
              , N = Object(O.useState)(!1)
              , _ = Object(I.a)(N, 2)
              , L = _[0]
              , M = _[1]
              , Q = Object(O.useState)("")
              , U = Object(I.a)(Q, 2)
              , V = U[0]
              , q = U[1]
              , W = G(Ie)
              , B = Object(y.rb)(Object(z.jsx)(Ce, {
                userName: o,
                tokenId: a,
                account: d,
                teamId: i,
                minimumCakeRequired: l,
                allowance: u
            }), !1)
              , K = Object(I.a)(B, 1)[0]
              , Y = C === p.CREATED
              , J = we()(function() {
                var e = Object(E.a)(S.a.mark((function e(t) {
                    var n, c, r;
                    return S.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                M(!0),
                                e.next = 4,
                                fetch("".concat(Ee, "/api/users/valid/").concat(t));
                            case 4:
                                if (!(n = e.sent).ok) {
                                    e.next = 10;
                                    break
                                }
                                D(!0),
                                q(""),
                                e.next = 15;
                                break;
                            case 10:
                                return e.next = 12,
                                n.json();
                            case 12:
                                r = e.sent,
                                D(!1),
                                q(null === r || void 0 === r || null === (c = r.error) || void 0 === c ? void 0 : c.message);
                            case 15:
                                return e.prev = 15,
                                M(!1),
                                e.finish(15);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, , 15, 18]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }(), 200)
              , H = function() {
                var e = Object(E.a)(S.a.mark((function e() {
                    var t, n, c, r, i;
                    return S.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0,
                                M(!0),
                                !(null === x || void 0 === x ? void 0 : x.bnbSign)) {
                                    e.next = 17;
                                    break
                                }
                                return e.next = 5,
                                x.bnbSign(d, o);
                            case 5:
                                if (e.t2 = t = e.sent,
                                e.t1 = null === e.t2,
                                e.t1) {
                                    e.next = 9;
                                    break
                                }
                                e.t1 = void 0 === t;
                            case 9:
                                if (!e.t1) {
                                    e.next = 13;
                                    break
                                }
                                e.t3 = void 0,
                                e.next = 14;
                                break;
                            case 13:
                                e.t3 = t.signature;
                            case 14:
                                e.t0 = e.t3,
                                e.next = 20;
                                break;
                            case 17:
                                return e.next = 19,
                                h.eth.personal.sign(o, d, null);
                            case 19:
                                e.t0 = e.sent;
                            case 20:
                                return n = e.t0,
                                e.next = 23,
                                fetch("".concat(Ee, "/api/users/register"), {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        address: d,
                                        username: o,
                                        signature: n
                                    })
                                });
                            case 23:
                                if (!(c = e.sent).ok) {
                                    e.next = 28;
                                    break
                                }
                                A(p.CREATED),
                                e.next = 32;
                                break;
                            case 28:
                                return e.next = 30,
                                c.json();
                            case 30:
                                i = e.sent,
                                m(null === i || void 0 === i || null === (r = i.error) || void 0 === r ? void 0 : r.message);
                            case 32:
                                e.next = 37;
                                break;
                            case 34:
                                e.prev = 34,
                                e.t4 = e.catch(0),
                                m((null === e.t4 || void 0 === e.t4 ? void 0 : e.t4.message) ? e.t4.message : JSON.stringify(e.t4));
                            case 37:
                                return e.prev = 37,
                                M(!1),
                                e.finish(37);
                            case 40:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 34, 37, 40]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return Object(O.useEffect)((function() {
                d && function() {
                    var e = Object(E.a)(S.a.mark((function e() {
                        var t, n, c;
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    fetch("".concat(Ee, "/api/users/").concat(d));
                                case 3:
                                    return t = e.sent,
                                    e.next = 6,
                                    t.json();
                                case 6:
                                    n = e.sent,
                                    t.ok ? (c = Object(me.a)(Object(he.a)(n.created_at), new Date),
                                    q("Created ".concat(c, " ago")),
                                    s.setUserName(n.username),
                                    A(p.CREATED),
                                    D(!0)) : A(p.NEW),
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(0),
                                    m("Error: Unable to verify username");
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 10]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [d, A, D, q, s, m]),
            Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(y.db, {
                    fontSize: "20px",
                    color: "textSubtle",
                    bold: !0,
                    children: b(999, "Step ".concat(4))
                }), Object(z.jsx)(y.F, {
                    as: "h3",
                    size: "xl",
                    mb: "24px",
                    children: b(1110, "Set Your Name")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    mb: "24px",
                    children: b(999, "This name will be shown in team leaderboards and search results as long as your profile is active.")
                }), Object(z.jsx)(y.o, {
                    mb: "24px",
                    children: Object(z.jsxs)(y.p, {
                        children: [Object(z.jsx)(y.F, {
                            as: "h4",
                            size: "lg",
                            mb: "8px",
                            children: b(1110, "Set Your Name")
                        }), Object(z.jsx)(y.db, {
                            as: "p",
                            color: "textSubtle",
                            mb: "24px",
                            children: b(840, "Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.")
                        }), C === p.IDLE ? Object(z.jsx)(y.ab, {
                            height: "40px",
                            width: "240px"
                        }) : Object(z.jsxs)(Ae, {
                            children: [Object(z.jsx)(Te, {
                                onChange: function(e) {
                                    var t = e.target.value;
                                    s.setUserName(t),
                                    J(t)
                                },
                                isWarning: o && !R,
                                isSuccess: o && R,
                                minLength: 3,
                                maxLength: 15,
                                disabled: Y,
                                placeholder: b(1094, "Enter your name..."),
                                value: o
                            }), Object(z.jsxs)(Fe, {
                                children: [L && Object(z.jsx)(y.d, {
                                    spin: !0
                                }), !L && R && o && Object(z.jsx)(y.w, {
                                    color: "success"
                                }), !L && !R && o && Object(z.jsx)(y.jb, {
                                    color: "failure"
                                })]
                            })]
                        }), Object(z.jsx)(y.db, {
                            color: "textSubtle",
                            fontSize: "14px",
                            py: "4px",
                            mb: "16px",
                            style: {
                                minHeight: "30px"
                            },
                            children: V
                        }), Object(z.jsx)(y.db, {
                            as: "p",
                            color: "failure",
                            mb: "8px",
                            children: b(1100, "Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.")
                        }), Object(z.jsx)("label", {
                            htmlFor: "checkbox",
                            style: {
                                display: "block",
                                cursor: "pointer",
                                marginBottom: "24px"
                            },
                            children: Object(z.jsxs)(y.E, {
                                alignItems: "center",
                                children: [Object(z.jsx)("div", {
                                    style: {
                                        flex: "none"
                                    },
                                    children: Object(z.jsx)(y.u, {
                                        id: "checkbox",
                                        scale: "sm",
                                        checked: n,
                                        onChange: function() {
                                            return c(!n)
                                        }
                                    })
                                }), Object(z.jsx)(y.db, {
                                    ml: "8px",
                                    children: b(1096, "I understand that people can view my wallet if they know my username")
                                })]
                            })
                        }), Object(z.jsx)(y.k, {
                            onClick: H,
                            disabled: !R || Y || L || !n,
                            children: b(464, "Confirm")
                        })]
                    })
                }), Object(z.jsx)(y.k, {
                    onClick: K,
                    disabled: !R || !Y,
                    children: b(842, "Complete Profile")
                }), !W && Object(z.jsx)(y.db, {
                    color: "failure",
                    mt: "16px",
                    children: b(1098, "A minimum of ".concat(P, " CAKE is required"), {
                        num: P
                    })
                })]
            })
        }, Pe = function() {
            var e = Object(O.useContext)(L)
              , t = e.isInitialized
              , n = e.currentStep;
            return Object(f.c)().account ? t ? 0 === n ? Object(z.jsx)(le, {}) : 1 === n ? Object(z.jsx)(pe, {}) : 2 === n ? Object(z.jsx)(fe, {}) : 3 === n ? Object(z.jsx)(Re, {}) : null : Object(z.jsx)("div", {
                children: "Loading..."
            }) : Object(z.jsx)(W, {})
        }, De = function() {
            return Object(z.jsx)(M, {
                children: Object(z.jsxs)(m.a, {
                    children: [Object(z.jsx)(V, {}), Object(z.jsx)(Pe, {})]
                })
            })
        }, ze = function() {
            var e = Object(O.useState)(!1)
              , t = Object(I.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = Object(O.useState)(1)
              , i = Object(I.a)(r, 2)
              , a = i[0]
              , o = i[1]
              , s = Object(f.c)().account
              , l = Object(O.useCallback)((function() {
                o((function(e) {
                    return e + 1
                }
                ))
            }
            ), [o]);
            return Object(O.useEffect)((function() {
                s && function() {
                    var e = Object(E.a)(S.a.mark((function e() {
                        var t, n;
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(R.e)(),
                                    e.next = 3,
                                    t.methods.canClaim(s).call();
                                case 3:
                                    n = e.sent,
                                    c(n);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [s, a, c]),
            {
                canClaim: n,
                checkClaimStatus: l
            }
        }, Ne = function(e) {
            var t = e.onSuccess
              , n = e.onDismiss
              , c = Object(O.useState)(!1)
              , r = Object(I.a)(c, 2)
              , i = r[0]
              , a = r[1]
              , o = Object(f.c)().account
              , s = Object(k.a)()
              , l = ze().canClaim
              , u = Object(K.d)()
              , b = Object(v.r)()
              , j = b.toastSuccess
              , d = b.toastError;
            return Object(z.jsx)(y.R, {
                title: s(999, "Claim your Gift!"),
                onDismiss: n,
                children: Object(z.jsxs)("div", {
                    style: {
                        maxWidth: "640px"
                    },
                    children: [Object(z.jsx)(y.db, {
                        as: "p",
                        children: s(999, "Thank you for being a day-one user of Pancake Profiles!")
                    }), Object(z.jsx)(y.db, {
                        as: "p",
                        mb: "8px",
                        children: s(999, "If you haven't already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!")
                    }), Object(z.jsx)(y.db, {
                        as: "p",
                        children: s(999, "To make it up to you, we'll refund you the full 4 CAKE it cost to make your bunny.")
                    }), Object(z.jsx)(y.db, {
                        as: "p",
                        mb: "8px",
                        children: s(999, "We're also preparing an all-new collectible for you to claim (for free!) in the near future.")
                    }), Object(z.jsx)(y.db, {
                        as: "p",
                        mb: "24px",
                        children: s(999, "Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.")
                    }), Object(z.jsx)(y.k, {
                        endIcon: i ? Object(z.jsx)(y.d, {
                            spin: !0,
                            color: "currentColor"
                        }) : null,
                        isLoading: i,
                        onClick: function() {
                            u.methods.getCakeBack().send({
                                from: o
                            }).on("sending", (function() {
                                a(!0)
                            }
                            )).on("receipt", (function() {
                                j("Success!"),
                                t(),
                                n()
                            }
                            )).on("error", (function(e) {
                                a(!1),
                                d("Error", null === e || void 0 === e ? void 0 : e.message)
                            }
                            ))
                        },
                        disabled: !l,
                        children: s(999, "Claim Your CAKE")
                    })]
                })
            })
        }, _e = n(799), Le = n(28);
        !function(e) {
            e.START = "start",
            e.CHANGE = "change",
            e.REMOVE = "remove",
            e.APPROVE = "approve"
        }(Se || (Se = {}));
        var Me, Qe, Ue, Ve, qe, We, Be, Ke, Ye, Je, Ge, He, Xe, Ze, $e, et, tt, nt, ct, rt, it, at, ot, st, lt, ut = function(e, t) {
            switch (t.type) {
            case "set_view":
                return Object(A.a)(Object(A.a)({}, e), {}, {
                    currentView: t.view,
                    previousView: e.currentView
                });
            case "go_previous":
                return Object(A.a)(Object(A.a)({}, e), {}, {
                    currentView: e.previousView,
                    previousView: e.currentView
                });
            default:
                return e
            }
        }, bt = function() {
            var e = Object(O.useReducer)(ut, {
                currentView: Se.START,
                previousView: null
            })
              , t = Object(I.a)(e, 2)
              , n = t[0]
              , c = t[1];
            return Object(A.a)(Object(A.a)({}, n), {}, {
                goToStart: function() {
                    return c({
                        type: "set_view",
                        view: Se.START
                    })
                },
                goToChange: function() {
                    return c({
                        type: "set_view",
                        view: Se.CHANGE
                    })
                },
                goToRemove: function() {
                    return c({
                        type: "set_view",
                        view: Se.REMOVE
                    })
                },
                goToApprove: function() {
                    return c({
                        type: "set_view",
                        view: Se.APPROVE
                    })
                },
                goPrevious: function() {
                    return c({
                        type: "go_previous"
                    })
                }
            })
        }, jt = n(760), dt = n(126), pt = function() {
            var e = Object(O.useState)({
                numberCakeToReactivate: new F.a(0),
                numberCakeToRegister: new F.a(0),
                numberCakeToUpdate: new F.a(0)
            })
              , t = Object(I.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = Object(v.r)().toastError;
            return Object(O.useEffect)((function() {
                (function() {
                    var e = Object(E.a)(S.a.mark((function e() {
                        var t, n, i, a, o, s;
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    t = Object(R.l)(),
                                    e.next = 4,
                                    Object(dt.a)([t.methods.numberCakeToReactivate().call, t.methods.numberCakeToRegister().call, t.methods.numberCakeToUpdate().call]);
                                case 4:
                                    n = e.sent,
                                    i = Object(I.a)(n, 3),
                                    a = i[0],
                                    o = i[1],
                                    s = i[2],
                                    c({
                                        numberCakeToReactivate: new F.a(a),
                                        numberCakeToRegister: new F.a(o),
                                        numberCakeToUpdate: new F.a(s)
                                    }),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    r("Error", "Could not retrieve CAKE costs for profile");
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 12]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }
                )()()
            }
            ), [c, r]),
            n
        }, Ot = w.e.img(Me || (Me = Object(g.a)(["\n  border: 1px solid ", ";\n  border-radius: 50%;\n  bottom: 0px;\n  height: 24px;\n  position: absolute;\n  right: 0px;\n  width: 24px;\n  z-index: 5;\n\n  ", " {\n    border-width: 2px;\n    height: 48px;\n    width: 48px;\n  }\n"])), (function(e) {
            return e.theme.card.background
        }
        ), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), xt = w.e.div(Qe || (Qe = Object(g.a)(["\n  background: url('", "');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  height: 64px;\n  position: relative;\n  width: 64px;\n\n  & > img {\n    border-radius: 50%;\n  }\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) {
            return e.bg
        }
        ), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), ft = Object(w.e)(y.T)(Ue || (Ue = Object(g.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), mt = function(e) {
            var t, n, c = e.profile;
            return Object(z.jsxs)(xt, {
                bg: "/images/nfts/".concat(null === (t = c.nft) || void 0 === t || null === (n = t.images) || void 0 === n ? void 0 : n.md),
                children: [!c.isActive && Object(z.jsx)(ft, {}), Object(z.jsx)(Ot, {
                    src: "/images/teams/".concat(c.team.images.alt),
                    alt: c.team.name
                })]
            })
        }, ht = Object(w.e)(y.k).attrs({
            variant: "secondary"
        })(Ve || (Ve = Object(g.a)(["\n  border-color: ", ";\n  color: ", ";\n  margin-bottom: 24px;\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    border-color: ", ";\n    opacity: 0.8;\n  }\n"])), (function(e) {
            return e.theme.colors.failure
        }
        ), (function(e) {
            return e.theme.colors.failure
        }
        ), (function(e) {
            return e.theme.colors.failure
        }
        )), vt = function(e) {
            var t = e.goToApprove
              , n = e.goToChange
              , c = e.goToRemove
              , r = e.onDismiss
              , i = Object(O.useState)(null)
              , a = Object(I.a)(i, 2)
              , o = a[0]
              , s = a[1]
              , l = Object(v.o)().profile
              , u = pt()
              , b = u.numberCakeToUpdate
              , j = u.numberCakeToReactivate
              , d = G(l.isActive ? b : j)
              , p = Object(k.a)()
              , x = Object(f.c)().account
              , m = Object(K.c)()
              , h = l.isActive ? b : j;
            return Object(O.useEffect)((function() {
                x && function() {
                    var e = Object(E.a)(S.a.mark((function e() {
                        var t, n;
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    m.methods.allowance(x, Object(Y.j)()).call();
                                case 2:
                                    t = e.sent,
                                    n = new F.a(t),
                                    s(n.lt(h));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [x, h, s, m]),
            l ? Object(z.jsxs)(y.E, {
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                children: [Object(z.jsx)(mt, {
                    profile: l
                }), Object(z.jsx)(y.E, {
                    alignItems: "center",
                    style: {
                        height: "48px"
                    },
                    justifyContent: "center",
                    children: Object(z.jsx)(y.db, {
                        as: "p",
                        color: "failure",
                        children: !d && p(999, "".concat(Object(jt.b)(b), " CAKE required to change profile pic"))
                    })
                }), l.isActive ? Object(z.jsxs)(z.Fragment, {
                    children: [Object(z.jsx)(y.k, {
                        width: "100%",
                        mb: "8px",
                        onClick: !0 === o ? t : n,
                        disabled: !d || null === o,
                        children: p(999, "Change Profile Pic")
                    }), Object(z.jsx)(ht, {
                        width: "100%",
                        onClick: c,
                        children: p(999, "Remove Profile Pic")
                    })]
                }) : Object(z.jsx)(y.k, {
                    width: "100%",
                    mb: "8px",
                    onClick: !0 === o ? t : n,
                    disabled: !d || null === o,
                    children: p(999, "Reactivate Profile")
                }), Object(z.jsx)(y.k, {
                    variant: "text",
                    width: "100%",
                    onClick: r,
                    children: p(999, "Close Window")
                })]
            }) : null
        }, gt = function(e) {
            var t = e.onDismiss
              , n = Object(O.useState)(!1)
              , c = Object(I.a)(n, 2)
              , r = c[0]
              , i = c[1]
              , a = Object(O.useState)(!1)
              , o = Object(I.a)(a, 2)
              , s = o[0]
              , l = o[1]
              , u = Object(v.o)().profile
              , b = pt().numberCakeToReactivate
              , j = Object(k.a)()
              , d = Object(K.l)()
              , p = Object(f.c)().account
              , x = Object(v.r)()
              , m = x.toastSuccess
              , h = x.toastError
              , g = Object(ye.b)();
            return u ? Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(y.db, {
                    as: "p",
                    color: "failure",
                    mb: "24px",
                    children: j(999, "This will suspend your profile and send your Collectible back to your wallet")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    color: "textSubtle",
                    mb: "24px",
                    children: j(999, "While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    color: "textSubtle",
                    mb: "24px",
                    children: j(999, "Cost to reactivate in future: ".concat(Object(jt.a)(b), " CAKE"))
                }), Object(z.jsx)("label", {
                    htmlFor: "acknowledgement",
                    style: {
                        cursor: "pointer",
                        display: "block",
                        marginBottom: "24px"
                    },
                    children: Object(z.jsxs)(y.E, {
                        alignItems: "center",
                        children: [Object(z.jsx)(y.u, {
                            id: "acknowledgement",
                            checked: r,
                            onChange: function() {
                                return i(!r)
                            },
                            scale: "sm"
                        }), Object(z.jsx)(y.db, {
                            ml: "8px",
                            children: j(999, "I understand")
                        })]
                    })
                }), Object(z.jsx)(y.k, {
                    width: "100%",
                    isLoading: s,
                    endIcon: s ? Object(z.jsx)(y.d, {
                        spin: !0,
                        color: "currentColor"
                    }) : null,
                    disabled: !r || s,
                    onClick: function() {
                        d.methods.pauseProfile().send({
                            from: p
                        }).on("sending", (function() {
                            l(!0)
                        }
                        )).on("receipt", Object(E.a)(S.a.mark((function e() {
                            return S.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        g(Object(ke.c)(p));
                                    case 2:
                                        m("Profile Paused!"),
                                        t();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))).on("error", (function(e) {
                            h("Error", null === e || void 0 === e ? void 0 : e.message),
                            l(!1)
                        }
                        ))
                    },
                    mb: "8px",
                    children: j(999, "Confirm")
                }), Object(z.jsx)(y.k, {
                    variant: "text",
                    width: "100%",
                    onClick: t,
                    children: j(999, "Close Window")
                })]
            }) : null
        }, wt = function(e) {
            var t = e.onDismiss
              , n = Object(O.useState)(null)
              , c = Object(I.a)(n, 2)
              , r = c[0]
              , i = c[1]
              , a = Object(k.a)()
              , o = Object(be.a)()
              , s = o.isLoading
              , l = o.nfts
              , u = Object(ye.b)()
              , b = Object(v.o)().profile
              , j = Object(K.j)()
              , d = Object(K.l)()
              , p = Object(f.c)().account
              , x = Object(v.r)().toastSuccess
              , m = Object(B.a)({
                onApprove: function() {
                    return j.methods.approve(Object(Y.j)(), r).send({
                        from: p
                    })
                },
                onConfirm: function() {
                    return b.isActive ? d.methods.updateProfile(Object(Y.k)(), r).send({
                        from: p
                    }) : d.methods.reactivateProfile(Object(Y.k)(), r).send({
                        from: p
                    })
                },
                onSuccess: function() {
                    var e = Object(E.a)(S.a.mark((function e() {
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    u(Object(ke.c)(p));
                                case 2:
                                    x("Profile Updated!"),
                                    t();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            })
              , h = m.isApproving
              , g = m.isApproved
              , w = m.isConfirmed
              , C = m.isConfirming
              , A = m.handleApprove
              , T = m.handleConfirm
              , F = Object.keys(l).map((function(e) {
                return Number(e)
            }
            ))
              , R = H.a.filter((function(e) {
                return F.includes(e.bunnyId)
            }
            ));
            return Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(y.db, {
                    as: "p",
                    color: "textSubtle",
                    mb: "24px",
                    children: a(999, "Choose a new Collectible to use as your profile pic.")
                }), s ? Object(z.jsx)(y.ab, {
                    height: "80px",
                    mb: "16px"
                }) : R.map((function(e) {
                    var t = Object(I.a)(l[e.bunnyId].tokenIds, 1)[0];
                    return Object(z.jsx)(ce, {
                        name: "profilePicture",
                        value: t,
                        image: "/images/nfts/".concat(e.images.md),
                        isChecked: t === r,
                        onChange: function(e) {
                            return i(parseInt(e, 10))
                        },
                        disabled: h || C || w,
                        children: Object(z.jsx)(y.db, {
                            bold: !0,
                            children: e.name
                        })
                    }, e.bunnyId)
                }
                )), !s && 0 === R.length && Object(z.jsxs)(z.Fragment, {
                    children: [Object(z.jsx)(y.db, {
                        as: "p",
                        color: "textSubtle",
                        mb: "16px",
                        children: a(999, "Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!")
                    }), Object(z.jsx)(y.db, {
                        as: "p",
                        color: "textSubtle",
                        mb: "24px",
                        children: a(999, "Make sure you have a Pancake Collectible in your wallet and try again!")
                    })]
                }), Object(z.jsx)(ie.a, {
                    isApproveDisabled: w || C || g || null === r,
                    isApproving: h,
                    isConfirmDisabled: !g || w || null === r,
                    isConfirming: C,
                    onApprove: A,
                    onConfirm: T
                }), Object(z.jsx)(y.k, {
                    variant: "text",
                    width: "100%",
                    onClick: t,
                    disabled: h || C,
                    children: a(999, "Close Window")
                })]
            })
        }, yt = function(e) {
            var t = e.goToChange
              , n = e.onDismiss
              , c = Object(O.useState)(!1)
              , r = Object(I.a)(c, 2)
              , i = r[0]
              , a = r[1]
              , o = Object(v.o)().profile
              , s = Object(k.a)()
              , l = Object(f.c)().account
              , u = pt()
              , b = u.numberCakeToUpdate
              , j = u.numberCakeToReactivate
              , d = Object(K.c)()
              , p = Object(v.r)().toastError
              , x = o.isActive ? b : j;
            return o ? Object(z.jsxs)(y.E, {
                flexDirection: "column",
                children: [Object(z.jsxs)(y.E, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: "24px",
                    children: [Object(z.jsx)(y.db, {
                        children: o.isActive ? s(999, "Cost to update:") : s(999, "Cost to reactivate:")
                    }), Object(z.jsx)(y.db, {
                        children: s(999, "".concat(Object(jt.b)(x), " CAKE"))
                    })]
                }), Object(z.jsx)(y.k, {
                    disabled: i,
                    isLoading: i,
                    endIcon: i ? Object(z.jsx)(y.d, {
                        spin: !0,
                        color: "currentColor"
                    }) : null,
                    width: "100%",
                    mb: "8px",
                    onClick: function() {
                        d.methods.approve(Object(Y.j)(), x.times(2).toJSON()).send({
                            from: l
                        }).on("sending", (function() {
                            a(!0)
                        }
                        )).on("receipt", (function() {
                            t()
                        }
                        )).on("error", (function(e) {
                            p("Error", null === e || void 0 === e ? void 0 : e.message),
                            a(!1)
                        }
                        ))
                    },
                    children: s(999, "Approve")
                }), Object(z.jsx)(y.k, {
                    variant: "text",
                    width: "100%",
                    onClick: n,
                    disabled: i,
                    children: s(999, "Close Window")
                })]
            }) : null
        }, kt = (qe = {},
        Object(Le.a)(qe, Se.START, {
            id: 999,
            label: "Edit Profile"
        }),
        Object(Le.a)(qe, Se.CHANGE, {
            id: 999,
            label: "Change Profile Pic"
        }),
        Object(Le.a)(qe, Se.REMOVE, {
            id: 999,
            label: "Remove Profile Pic"
        }),
        Object(Le.a)(qe, Se.APPROVE, {
            id: 999,
            label: "Approve CAKE"
        }),
        qe), Ct = function(e) {
            var t = e.onDismiss
              , n = bt()
              , c = n.currentView
              , r = n.goToChange
              , i = n.goToRemove
              , a = n.goToApprove
              , o = n.goPrevious
              , s = Object(k.a)()
              , l = kt[c]
              , u = l.id
              , b = l.label
              , j = c === Se.START
              , d = j ? null : function() {
                return o()
            }
            ;
            return Object(z.jsx)(y.R, {
                title: s(u, b),
                onBack: d,
                onDismiss: t,
                hideCloseButton: !j,
                children: Object(z.jsxs)("div", {
                    style: {
                        maxWidth: "400px"
                    },
                    children: [c === Se.START && Object(z.jsx)(vt, {
                        goToApprove: a,
                        goToChange: r,
                        goToRemove: i,
                        onDismiss: t
                    }), c === Se.REMOVE && Object(z.jsx)(gt, {
                        onDismiss: t
                    }), c === Se.CHANGE && Object(z.jsx)(wt, {
                        onDismiss: t
                    }), c === Se.APPROVE && Object(z.jsx)(yt, {
                        goToChange: r,
                        onDismiss: t
                    })]
                })
            })
        }, St = function() {
            var e = Object(k.a)()
              , t = ze()
              , n = t.canClaim
              , c = t.checkClaimStatus
              , r = Object(y.rb)(Object(z.jsx)(Ne, {
                onSuccess: c
            }))
              , i = Object(I.a)(r, 1)[0]
              , a = Object(y.rb)(Object(z.jsx)(Ct, {}), !1)
              , o = Object(I.a)(a, 1)[0]
              , s = Object(v.o)().hasProfile;
            return Object(z.jsx)(_e.a, {
                children: Object(z.jsxs)(y.E, {
                    flexDirection: ["column", null, "row"],
                    alignItems: ["start", null, "center"],
                    justifyContent: "space-between",
                    children: [Object(z.jsxs)("div", {
                        children: [Object(z.jsx)(y.F, {
                            as: "h1",
                            size: "xxl",
                            mb: "8px",
                            color: "secondary",
                            children: e(999, "Your Profile")
                        }), Object(z.jsx)(y.F, {
                            as: "h2",
                            size: "lg",
                            mb: "16px",
                            children: e(999, "Check your stats and collect achievements")
                        }), s && Object(z.jsx)(y.k, {
                            onClick: o,
                            children: e(999, "Edit Profile")
                        })]
                    }), n && Object(z.jsx)(y.k, {
                        variant: "tertiary",
                        onClick: i,
                        startIcon: Object(z.jsx)(y.kb, {}),
                        children: e(999, "You've got a gift to claim!")
                    })]
                })
            })
        }, Et = Object(w.e)(y.j)(We || (We = Object(g.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), It = w.e.img(Be || (Be = Object(g.a)(["\n  border-radius: 50%;\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), At = function(e) {
            var t = e.badge
              , n = Object(X.a)(e, ["badge"]);
            return t ? Object(z.jsx)(It, Object(A.a)({
                src: "/images/achievements/".concat(t),
                alt: "achievement badge"
            }, n)) : Object(z.jsx)(Et, {})
        }, Tt = function(e) {
            var t = e.title
              , n = Object(X.a)(e, ["title"])
              , c = Object(k.a)();
            if ("string" === typeof t)
                return Object(z.jsx)(y.db, Object(A.a)(Object(A.a)({
                    bold: !0
                }, n), {}, {
                    children: t
                }));
            var r = t.id
              , i = t.fallback
              , a = t.data
              , o = void 0 === a ? {} : a;
            return Object(z.jsx)(y.db, Object(A.a)(Object(A.a)({
                bold: !0
            }, n), {}, {
                children: c(r, i, o)
            }))
        }, Ft = Object(w.e)(y.db).attrs({
            as: "p",
            fontSize: "14px"
        })(Ke || (Ke = Object(g.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), Rt = function(e) {
            var t = e.description
              , n = Object(X.a)(e, ["description"])
              , c = Object(k.a)();
            if (!t)
                return null;
            if ("string" === typeof t)
                return Object(z.jsx)(y.db, Object(A.a)(Object(A.a)({
                    as: "p",
                    color: "textSubtle",
                    fontSize: "14px"
                }, n), {}, {
                    children: t
                }));
            var r = t.id
              , i = t.fallback
              , a = t.data
              , o = void 0 === a ? {} : a;
            return Object(z.jsx)(Ft, Object(A.a)(Object(A.a)({
                color: "textSubtle"
            }, n), {}, {
                children: c(r, i, o)
            }))
        }, Pt = Object(w.e)(y.E)(Ye || (Ye = Object(g.a)(["\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 8px;\n  padding-right: 8px;\n"]))), Dt = function(e) {
            var t = e.achievement;
            return Object(z.jsxs)(y.E, {
                children: [Object(z.jsx)(At, {
                    badge: t.badge
                }), Object(z.jsxs)(Pt, {
                    children: [Object(z.jsx)(Tt, {
                        title: t.title
                    }), Object(z.jsx)(Rt, {
                        description: t.description
                    })]
                }), Object(z.jsxs)(y.E, {
                    alignItems: "center",
                    children: [Object(z.jsx)(y.W, {
                        width: "18px",
                        color: "textSubtle",
                        mr: "4px"
                    }), Object(z.jsx)(y.db, {
                        color: "textSubtle",
                        children: t.points.toLocaleString()
                    })]
                })]
            })
        }, zt = w.e.div(Je || (Je = Object(g.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), Nt = function() {
            var e = Object(k.a)()
              , t = Object(v.a)();
            return Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(zt, {
                    children: t.map((function(e) {
                        return Object(z.jsx)(Dt, {
                            achievement: e
                        }, e.id)
                    }
                    ))
                }), 0 === t.length && Object(z.jsx)(y.E, {
                    alignItems: "center",
                    justifyContent: "center",
                    style: {
                        height: "64px"
                    },
                    children: Object(z.jsx)(y.F, {
                        as: "h5",
                        size: "md",
                        color: "textDisabled",
                        children: e(999, "No achievements yet!")
                    })
                })]
            })
        }, _t = n(75), Lt = n(145), Mt = n(194), Qt = w.e.div(Ge || (Ge = Object(g.a)(["\n  flex: none;\n  width: 100%;\n\n  ", " {\n    max-width: 160px;\n\n    & > button {\n      width: 100%;\n    }\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), Ut = function(e) {
            var t = e.points
              , n = Object(X.a)(e, ["points"])
              , c = Object(k.a)()
              , r = t.toLocaleString();
            return Object(z.jsxs)(y.E, Object(A.a)(Object(A.a)({
                alignItems: "center"
            }, n), {}, {
                children: [Object(z.jsx)(y.W, {
                    mr: "4px",
                    color: "textSubtle"
                }), Object(z.jsx)(y.db, {
                    color: "textSubtle",
                    children: c(999, "".concat(r, " points"), {
                        num: r
                    })
                })]
            }))
        }, Vt = Object(w.e)(y.E)(He || (He = Object(g.a)(["\n  border-bottom: 1px solid ", ";\n  padding-bottom: 16px;\n  padding-top: 16px;\n"])), (function(e) {
            return e.theme.colors.borderColor
        }
        )), qt = w.e.div(Xe || (Xe = Object(g.a)(["\n  flex: 1;\n"]))), Wt = Object(w.e)(y.E)(Ze || (Ze = Object(g.a)(["\n  flex-direction: column;\n  flex: 1;\n  margin-left: 8px;\n\n  ", " {\n    align-items: center;\n    flex-direction: row;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), Bt = function(e) {
            var t = e.achievement
              , n = e.onCollectSuccess
              , c = Object(O.useState)(!1)
              , r = Object(I.a)(c, 2)
              , i = r[0]
              , a = r[1]
              , o = Object(k.a)()
              , s = Object(K.k)()
              , l = Object(f.c)().account
              , u = Object(v.r)()
              , b = u.toastError
              , j = u.toastSuccess;
            return Object(z.jsxs)(Vt, {
                children: [Object(z.jsx)(At, {
                    badge: t.badge
                }), Object(z.jsxs)(Wt, {
                    children: [Object(z.jsxs)(qt, {
                        children: [Object(z.jsx)(Tt, {
                            title: t.title
                        }), Object(z.jsx)(Rt, {
                            description: t.description
                        })]
                    }), Object(z.jsx)(Ut, {
                        points: t.points,
                        px: [0, null, null, "32px"],
                        mb: ["16px", null, null, 0]
                    }), Object(z.jsx)(Qt, {
                        children: Object(z.jsx)(y.k, {
                            onClick: function() {
                                s.methods.getPoints(t.address).send({
                                    from: l
                                }).on("sending", (function() {
                                    a(!0)
                                }
                                )).on("receipt", (function() {
                                    a(!1),
                                    n(t),
                                    j("Points Collected!")
                                }
                                )).on("error", (function(e) {
                                    b("Error", null === e || void 0 === e ? void 0 : e.message),
                                    a(!1)
                                }
                                ))
                            },
                            isLoading: i,
                            endIcon: i ? Object(z.jsx)(y.d, {
                                spin: !0,
                                color: "currentColor"
                            }) : null,
                            disabled: i,
                            variant: "secondary",
                            children: o(999, "Collect")
                        })
                    })]
                })]
            })
        }, Kt = function() {
            var e = Object(O.useState)([])
              , t = Object(I.a)(e, 2)
              , n = t[0]
              , c = t[1]
              , r = Object(k.a)()
              , i = Object(ye.b)()
              , a = Object(v.o)().profile
              , o = Object(f.c)().account;
            Object(O.useEffect)((function() {
                o && function() {
                    var e = Object(E.a)(S.a.mark((function e() {
                        var t;
                        return S.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Object(Mt.c)(o);
                                case 2:
                                    t = e.sent,
                                    c(t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [o, i, c]);
            var s = function(e) {
                i(Object(Lt.a)(e)),
                i(Object(ke.a)(e.points)),
                c((function(t) {
                    return t.filter((function(t) {
                        return t.id !== e.id
                    }
                    ))
                }
                ))
            };
            if (!(null === a || void 0 === a ? void 0 : a.isActive))
                return null;
            if (0 === n.length)
                return null;
            var l = Object(_t.sumBy)(n, "points");
            return Object(z.jsxs)(y.o, {
                isActive: !0,
                mb: "32px",
                children: [Object(z.jsx)(y.r, {
                    children: Object(z.jsx)(y.E, {
                        flexDirection: ["column", null, "row"],
                        justifyContent: ["start", null, "space-between"],
                        children: Object(z.jsxs)(y.E, {
                            alignItems: "center",
                            mb: ["16px", null, 0],
                            children: [Object(z.jsx)(y.W, {
                                width: "32px",
                                mr: "8px"
                            }), Object(z.jsx)(y.F, {
                                size: "lg",
                                children: r(999, "".concat(l, " Points to Collect"), {
                                    num: l
                                })
                            })]
                        })
                    })
                }), Object(z.jsx)(y.p, {
                    children: n.map((function(e) {
                        return Object(z.jsx)(Bt, {
                            achievement: e,
                            onCollectSuccess: s
                        }, e.address)
                    }
                    ))
                })]
            })
        }, Yt = n(819), Jt = function(e) {
            var t = e.activeIndex
              , n = void 0 === t ? 0 : t
              , c = Object(k.a)();
            return Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(y.E, {
                    mb: "24px",
                    children: Object(z.jsx)(ue.a, {
                        to: "/teams",
                        children: Object(z.jsxs)(y.E, {
                            alignItems: "center",
                            children: [Object(z.jsx)(y.y, {
                                color: "primary"
                            }), Object(z.jsx)(y.db, {
                                color: "primary",
                                children: c(1038, "Teams Overview")
                            })]
                        })
                    })
                }), Object(z.jsx)(y.E, {
                    mb: "24px",
                    justifyContent: "center",
                    children: Object(z.jsxs)(y.l, {
                        activeIndex: n,
                        variant: "subtle",
                        scale: "sm",
                        children: [Object(z.jsx)(y.m, {
                            as: ue.a,
                            to: "/profile/tasks",
                            children: c(1090, "Task Center")
                        }), Object(z.jsx)(y.m, {
                            as: ue.a,
                            to: "/profile",
                            children: c(1104, "Public Profile")
                        })]
                    })
                })]
            })
        }, Gt = function() {
            var e = Object(k.a)();
            return Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(Jt, {}), Object(z.jsx)(Kt, {}), Object(z.jsxs)(y.o, {
                    mb: "32px",
                    children: [Object(z.jsx)(y.r, {
                        children: Object(z.jsx)(y.E, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: Object(z.jsxs)("div", {
                                children: [Object(z.jsx)(y.F, {
                                    size: "lg",
                                    mb: "8px",
                                    children: e(1092, "Achievements")
                                }), Object(z.jsx)(y.db, {
                                    as: "p",
                                    children: e(1084, "Earn more points for completing larger quests!")
                                })]
                            })
                        })
                    }), Object(z.jsx)(y.p, {
                        children: Object(z.jsx)(Nt, {})
                    })]
                }), Object(z.jsxs)(y.o, {
                    mb: "32px",
                    children: [Object(z.jsx)(y.r, {
                        children: Object(z.jsx)(y.E, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: Object(z.jsxs)("div", {
                                children: [Object(z.jsx)(y.F, {
                                    size: "lg",
                                    mb: "8px",
                                    children: e(1090, "Task Center")
                                }), Object(z.jsx)(y.db, {
                                    as: "p",
                                    children: e(1088, "Earn points by completing regular tasks!")
                                }), Object(z.jsx)(y.db, {
                                    as: "p",
                                    children: e(1086, "Collecting points for these tasks makes them available again.")
                                })]
                            })
                        })
                    }), Object(z.jsx)(y.p, {
                        children: Object(z.jsx)(Yt.a, {})
                    })]
                })]
            })
        }, Ht = Object(w.e)(y.r)($e || ($e = Object(g.a)(["\n  background: ", ";\n  position: relative;\n"])), (function(e) {
            return function(e) {
                return e.isDark ? "linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)" : "linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"
            }(e.theme)
        }
        )), Xt = w.e.img(et || (et = Object(g.a)(["\n  border-radius: 4px;\n  margin-bottom: 8px;\n"]))), Zt = function(e) {
            var t = e.nft;
            return Object(z.jsxs)("div", {
                children: [Object(z.jsx)(Xt, {
                    src: "/images/nfts/".concat(t.images.lg)
                }), Object(z.jsx)(y.db, {
                    bold: !0,
                    mb: "8px",
                    children: t.name
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    fontSize: "12px",
                    color: "textSubtle",
                    children: t.description
                })]
            })
        }, $t = w.e.div(tt || (tt = Object(g.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 16px 0;\n\n  ", " {\n    grid-gap: 24px;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 24px 0;\n  }\n\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  ", " {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.mediaQueries.md
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        )), en = function() {
            var e = Object(k.a)()
              , t = Object(be.a)().nfts
              , n = Object.keys(t).map((function(e) {
                return Number(e)
            }
            ))
              , c = H.a.filter((function(e) {
                return n.includes(e.bunnyId)
            }
            ));
            return Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(y.F, {
                    as: "h4",
                    size: "md",
                    mb: "8px",
                    children: e(999, "LockSwap Collectibles")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    children: e(999, "LockSwap Collectibles are special ERC-721 NFTs that can be used on the LockSwap platform.")
                }), Object(z.jsx)(y.db, {
                    as: "p",
                    children: e(999, "NFTs in this user's wallet that aren't approved LockSwap Collectibles won't be shown here.")
                }), c.length > 0 && Object(z.jsx)($t, {
                    children: c.map((function(e) {
                        return Object(z.jsx)(Zt, {
                            nft: e
                        }, e.bunnyId)
                    }
                    ))
                }), 0 === c.length && Object(z.jsx)(y.E, {
                    justifyContent: "center",
                    p: "32px",
                    children: Object(z.jsx)(y.db, {
                        fontSize: "20px",
                        bold: !0,
                        color: "textDisabled",
                        children: e(999, "No NFTs Found")
                    })
                }), Object(z.jsxs)(y.E, {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    children: [Object(z.jsx)(ue.a, {
                        to: "/collectibles",
                        children: e(999, "See all approved Pancake Collectibles")
                    }), Object(z.jsx)(y.z, {})]
                })]
            })
        }, tn = n(841), nn = w.e.div(nt || (nt = Object(g.a)(["\n  background: rgba(0, 0, 0, 0.6) url('/images/camera.svg') no-repeat center center;\n  background-size: 24px;\n  border-radius: 50%;\n  left: 0;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  transition: opacity 300ms;\n  width: 100%;\n  z-index: 3;\n\n  ", " {\n    background-size: 48px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), cn = w.e.div(ct || (ct = Object(g.a)(["\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n\n    ", " {\n      opacity: 1;\n    }\n  }\n"])), nn), rn = function(e) {
            var t = e.profile
              , n = Object(y.rb)(Object(z.jsx)(Ct, {}), !1)
              , c = Object(I.a)(n, 1)[0];
            return Object(z.jsxs)(cn, {
                onClick: c,
                children: [Object(z.jsx)(mt, {
                    profile: t
                }), Object(z.jsx)(nn, {})]
            })
        }, an = w.e.div(rt || (rt = Object(g.a)(["\n  flex: 1;\n  padding: 16px 0;\n\n  ", " {\n    padding: 0 16px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), on = Object(w.e)(y.F)(it || (it = Object(g.a)(["\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 8px;\n\n  ", " {\n    font-size: 40px;\n    line-height: 44px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), sn = w.e.div(at || (at = Object(g.a)(["\n  position: absolute;\n  right: 24px;\n  top: 24px;\n"]))), ln = Object(w.e)(y.db)(ot || (ot = Object(g.a)(["\n  font-size: 12px;\n\n  ", " {\n    font-size: 16px;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), un = Object(w.e)(y.K)(st || (st = Object(g.a)(["\n  display: inline-block;\n  font-weight: 400;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80px;\n  white-space: nowrap;\n\n  ", " {\n    font-size: 16px;\n    width: auto;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.sm
        }
        )), bn = w.e.div(lt || (lt = Object(g.a)(["\n  margin-bottom: 40px;\n"]))), jn = function() {
            var e = Object(f.c)().account
              , t = Object(v.o)().profile
              , n = Object(k.a)();
            return e ? Object(z.jsxs)(z.Fragment, {
                children: [Object(z.jsx)(Jt, {
                    activeIndex: 1
                }), Object(z.jsx)("div", {
                    children: Object(z.jsxs)(y.o, {
                        children: [Object(z.jsxs)(Ht, {
                            children: [Object(z.jsxs)(y.E, {
                                alignItems: ["start", null, "center"],
                                flexDirection: ["column", null, "row"],
                                children: [Object(z.jsx)(rn, {
                                    profile: t
                                }), Object(z.jsxs)(an, {
                                    children: [Object(z.jsx)(on, {
                                        children: "@".concat(t.username)
                                    }), Object(z.jsxs)(y.E, {
                                        alignItems: "center",
                                        children: [Object(z.jsx)(un, {
                                            href: "https://bscscan.com/address/".concat(e),
                                            color: "text",
                                            external: !0,
                                            children: e
                                        }), Object(z.jsx)(y.U, {
                                            ml: "4px"
                                        })]
                                    }), Object(z.jsx)(ln, {
                                        bold: !0,
                                        children: t.team.name
                                    })]
                                })]
                            }), Object(z.jsx)(sn, {
                                children: t.isActive ? Object(z.jsx)(y.cb, {
                                    startIcon: Object(z.jsx)(y.v, {
                                        width: "18px"
                                    }),
                                    outline: !0,
                                    children: n(698, "Active")
                                }) : Object(z.jsx)(y.cb, {
                                    variant: "failure",
                                    startIcon: Object(z.jsx)(y.g, {
                                        width: "18px"
                                    }),
                                    outline: !0,
                                    children: n(999, "Paused")
                                })
                            })]
                        }), Object(z.jsxs)(y.p, {
                            children: [Object(z.jsx)(tn.a, {
                                icon: y.W,
                                title: t.points,
                                subtitle: n(999, "Points"),
                                mb: "24px"
                            }), Object(z.jsxs)(bn, {
                                children: [Object(z.jsx)(y.F, {
                                    as: "h4",
                                    size: "md",
                                    mb: "16px",
                                    children: n(1092, "Achievements")
                                }), Object(z.jsx)(Nt, {})]
                            }), Object(z.jsx)(en, {})]
                        })]
                    })
                })]
            }) : Object(z.jsx)(W, {})
        };
        t.default = function() {
            var e = Object(v.o)()
              , t = e.isInitialized
              , n = e.isLoading
              , c = e.hasProfile
              , r = Object(f.c)().account;
            return Object(v.e)(),
            !t || n ? Object(z.jsx)(h.a, {}) : r && !c ? Object(z.jsx)(m.a, {
                children: Object(z.jsx)(De, {})
            }) : Object(z.jsxs)(m.a, {
                children: [Object(z.jsx)(St, {}), Object(z.jsx)(x.b, {
                    exact: !0,
                    path: "/profile",
                    children: Object(z.jsx)(jn, {})
                }), Object(z.jsx)(x.b, {
                    path: "/profile/tasks",
                    children: Object(z.jsx)(Gt, {})
                })]
            })
        }
    },
    759: function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
            return a
        }
        )),
        n.d(t, "e", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return s
        }
        )),
        n.d(t, "a", (function() {
            return l
        }
        )),
        n.d(t, "j", (function() {
            return u
        }
        )),
        n.d(t, "l", (function() {
            return b
        }
        )),
        n.d(t, "g", (function() {
            return j
        }
        )),
        n.d(t, "h", (function() {
            return d
        }
        )),
        n.d(t, "i", (function() {
            return p
        }
        )),
        n.d(t, "m", (function() {
            return O
        }
        )),
        n.d(t, "k", (function() {
            return x
        }
        )),
        n.d(t, "b", (function() {
            return f
        }
        )),
        n.d(t, "d", (function() {
            return m
        }
        ));
        var c = n(0)
          , r = n(761)
          , i = n(71)
          , a = function(e) {
            var t = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.f)(e, t)
            }
            ), [e, t])
        }
          , o = function(e) {
            var t = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.a)(e, t)
            }
            ), [e, t])
        }
          , s = function() {
            var e = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.d)(e)
            }
            ), [e])
        }
          , l = function() {
            var e = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.b)(e)
            }
            ), [e])
        }
          , u = function() {
            var e = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.j)(e)
            }
            ), [e])
        }
          , b = function() {
            var e = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.l)(e)
            }
            ), [e])
        }
          , j = function() {
            var e = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.g)(e)
            }
            ), [e])
        }
          , d = function() {
            var e = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.h)(e)
            }
            ), [e])
        }
          , p = function() {
            var e = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.i)(e)
            }
            ), [e])
        }
          , O = function(e) {
            var t = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.m)(e, t)
            }
            ), [e, t])
        }
          , x = function() {
            var e = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.k)(e)
            }
            ), [e])
        }
          , f = function() {
            var e = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.c)(e)
            }
            ), [e])
        }
          , m = function() {
            var e = Object(r.a)();
            return Object(c.useMemo)((function() {
                return Object(i.e)(e)
            }
            ), [e])
        }
    },
    760: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        )),
        n.d(t, "b", (function() {
            return a
        }
        ));
        var c = n(10)
          , r = n.n(c)
          , i = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18
              , n = new r.a(e).dividedBy(new r.a(10).pow(t));
            return n.toNumber()
        }
          , a = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
            return e.dividedBy(new r.a(10).pow(t)).toFixed()
        }
    },
    761: function(e, t, n) {
        "use strict";
        var c = n(33)
          , r = n(0)
          , i = n(154)
          , a = n.n(i)
          , o = n(46)
          , s = n(64);
        t.a = function() {
            var e = Object(o.c)().library
              , t = Object(r.useRef)(e)
              , n = Object(r.useState)(e ? new a.a(e) : Object(s.b)())
              , i = Object(c.a)(n, 2)
              , l = i[0]
              , u = i[1];
            return Object(r.useEffect)((function() {
                e !== t.current && (u(e ? new a.a(e) : Object(s.b)()),
                t.current = e)
            }
            ), [e]),
            l
        }
    },
    764: function(e, t, n) {
        "use strict";
        var c = n(16)
          , r = (n(0),
        n(19))
          , i = n(127)
          , a = n(201)
          , o = n(8);
        t.a = function(e) {
            var t = Object(a.a)()
              , n = Object(i.a)()
              , s = n.login
              , l = n.logout
              , u = Object(r.tb)(s, l).onPresentConnectModal;
            return Object(o.jsx)(r.k, Object(c.a)(Object(c.a)({
                onClick: u
            }, e), {}, {
                children: t(292, "Unlock Wallet")
            }))
        }
    },
    770: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return p
        }
        )),
        n.d(t, "b", (function() {
            return O
        }
        ));
        var c = n(2)
          , r = n.n(c)
          , i = n(12)
          , a = n(33)
          , o = n(0)
          , s = n(10)
          , l = n.n(s)
          , u = n(46)
          , b = n(71)
          , j = n(761)
          , d = n(125)
          , p = function() {
            var e = Object(d.a)().slowRefresh
              , t = Object(o.useState)()
              , n = Object(a.a)(t, 2)
              , c = n[0]
              , s = n[1];
            return Object(o.useEffect)((function() {
                function e() {
                    return (e = Object(i.a)(r.a.mark((function e() {
                        var t, n;
                        return r.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(b.d)(),
                                    e.next = 3,
                                    t.methods.totalSupply().call();
                                case 3:
                                    n = e.sent,
                                    s(new l.a(n));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
                !function() {
                    e.apply(this, arguments)
                }()
            }
            ), [e]),
            c
        }
          , O = function(e) {
            var t = Object(o.useState)(new l.a(0))
              , n = Object(a.a)(t, 2)
              , c = n[0]
              , s = n[1]
              , u = Object(d.a)().slowRefresh
              , p = Object(j.a)();
            return Object(o.useEffect)((function() {
                (function() {
                    var t = Object(i.a)(r.a.mark((function t() {
                        var n, c;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = Object(b.a)(e, p),
                                    t.next = 3,
                                    n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                case 3:
                                    c = t.sent,
                                    s(new l.a(c));
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
                )()()
            }
            ), [p, e, u]),
            c
        };
        t.a = function(e) {
            var t = Object(o.useState)(new l.a(0))
              , n = Object(a.a)(t, 2)
              , c = n[0]
              , s = n[1]
              , p = Object(u.c)().account
              , O = Object(j.a)()
              , x = Object(d.a)().fastRefresh;
            return Object(o.useEffect)((function() {
                p && function() {
                    var t = Object(i.a)(r.a.mark((function t() {
                        var n, c;
                        return r.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = Object(b.a)(e, O),
                                    t.next = 3,
                                    n.methods.balanceOf(p).call();
                                case 3:
                                    c = t.sent,
                                    s(new l.a(c));
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()()
            }
            ), [p, e, O, x]),
            c
        }
    },
    786: function(e, t, n) {
        "use strict";
        var c, r, i, a = n(54), o = (n(0),
        n(3)), s = n(19), l = n(201), u = n(8), b = Object(o.e)(s.k)(c || (c = Object(a.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n    width: auto;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), j = {
            width: "24px",
            color: "textDisabled"
        }, d = Object(o.e)(s.z).attrs(j)(r || (r = Object(a.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), p = Object(o.e)(s.x).attrs(j)(i || (i = Object(a.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) {
            return e.theme.mediaQueries.md
        }
        )), O = Object(u.jsx)(s.d, {
            spin: !0,
            color: "currentColor"
        });
        t.a = function(e) {
            var t = e.isApproveDisabled
              , n = e.isApproving
              , c = e.isConfirming
              , r = e.isConfirmDisabled
              , i = e.onApprove
              , a = e.onConfirm
              , o = Object(l.a)();
            return Object(u.jsxs)(s.E, {
                py: "8px",
                flexDirection: ["column", null, "row"],
                alignItems: "center",
                children: [Object(u.jsx)(b, {
                    disabled: t,
                    onClick: i,
                    endIcon: n ? O : void 0,
                    isLoading: n,
                    children: n ? o(800, "Approving") : o(564, "Approve")
                }), Object(u.jsx)(d, {}), Object(u.jsx)(p, {}), Object(u.jsx)(b, {
                    onClick: a,
                    disabled: r,
                    isLoading: c,
                    endIcon: c ? O : void 0,
                    children: c ? o(802, "Confirming") : o(464, "Confirm")
                })]
            })
        }
    },
    787: function(e, t, n) {
        "use strict";
        var c = n(33)
          , r = n(16)
          , i = n(0)
          , a = n(75)
          , o = n(46)
          , s = n(48)
          , l = {
            approvalState: "idle",
            approvalReceipt: null,
            approvalError: null,
            confirmState: "idle",
            confirmReceipt: null,
            confirmError: null
        }
          , u = function(e, t) {
            switch (t.type) {
            case "requires_approval":
                return Object(r.a)(Object(r.a)({}, e), {}, {
                    approvalState: "success"
                });
            case "approve_sending":
                return Object(r.a)(Object(r.a)({}, e), {}, {
                    approvalState: "loading"
                });
            case "approve_receipt":
                return Object(r.a)(Object(r.a)({}, e), {}, {
                    approvalState: "success",
                    approvalReceipt: t.payload
                });
            case "approve_error":
                return Object(r.a)(Object(r.a)({}, e), {}, {
                    approvalState: "fail",
                    approvalError: t.payload
                });
            case "confirm_sending":
                return Object(r.a)(Object(r.a)({}, e), {}, {
                    confirmState: "loading"
                });
            case "confirm_receipt":
                return Object(r.a)(Object(r.a)({}, e), {}, {
                    confirmState: "success",
                    confirmReceipt: t.payload
                });
            case "confirm_error":
                return Object(r.a)(Object(r.a)({}, e), {}, {
                    confirmState: "fail",
                    confirmError: t.payload
                });
            default:
                return e
            }
        };
        t.a = function(e) {
            var t = e.onApprove
              , n = e.onConfirm
              , r = e.onRequiresApproval
              , b = e.onSuccess
              , j = void 0 === b ? a.noop : b
              , d = Object(o.c)().account
              , p = Object(i.useReducer)(u, l)
              , O = Object(c.a)(p, 2)
              , x = O[0]
              , f = O[1]
              , m = Object(i.useRef)(r)
              , h = Object(s.r)().toastError;
            return Object(i.useEffect)((function() {
                d && m.current && m.current().then((function(e) {
                    e && f({
                        type: "requires_approval"
                    })
                }
                ))
            }
            ), [d, m, f]),
            {
                isApproving: "loading" === x.approvalState,
                isApproved: "success" === x.approvalState,
                isConfirming: "loading" === x.confirmState,
                isConfirmed: "success" === x.confirmState,
                approvalReceipt: x.approvalReceipt,
                approvalError: x.approvalError,
                confirmReceipt: x.confirmReceipt,
                confirmError: x.confirmError,
                handleApprove: function() {
                    t().on("sending", (function() {
                        f({
                            type: "approve_sending"
                        })
                    }
                    )).on("receipt", (function(e) {
                        f({
                            type: "approve_receipt",
                            payload: e
                        })
                    }
                    )).on("error", (function(e) {
                        f({
                            type: "approve_error",
                            payload: e
                        }),
                        console.error("An error occurred approving transaction:", e),
                        h("An error occurred approving transaction")
                    }
                    ))
                },
                handleConfirm: function() {
                    n().on("sending", (function() {
                        f({
                            type: "confirm_sending"
                        })
                    }
                    )).on("receipt", (function(e) {
                        f({
                            type: "confirm_receipt",
                            payload: e
                        }),
                        j(x)
                    }
                    )).on("error", (function(e) {
                        f({
                            type: "confirm_error",
                            payload: e
                        }),
                        console.error("An error occurred confirming transaction:", e),
                        h("An error occurred confirming transaction")
                    }
                    ))
                }
            }
        }
    },
    798: function(e, t, n) {
        "use strict";
        var c = n(28)
          , r = n(57)
          , i = n(2)
          , a = n.n(i)
          , o = n(12)
          , s = n(33)
          , l = n(16)
          , u = n(46)
          , b = n(0)
          , j = n(71)
          , d = n(126)
          , p = Object(j.j)()
          , O = {
            isLoading: !0,
            nfts: {},
            lastUpdated: Date.now()
        }
          , x = function(e, t) {
            switch (t.type) {
            case "set_nfts":
                return Object(l.a)(Object(l.a)({}, O), {}, {
                    isLoading: !1,
                    nfts: t.data
                });
            case "refresh":
                return Object(l.a)(Object(l.a)({}, O), {}, {
                    lastUpdated: t.timestamp
                });
            case "reset":
                return Object(l.a)(Object(l.a)({}, O), {}, {
                    isLoading: !1
                });
            default:
                return e
            }
        };
        t.a = function() {
            var e = Object(b.useReducer)(x, O)
              , t = Object(s.a)(e, 2)
              , n = t[0]
              , i = t[1]
              , j = Object(u.c)().account
              , f = n.lastUpdated;
            Object(b.useEffect)((function() {
                j && function() {
                    var e = Object(o.a)(a.a.mark((function e() {
                        var t, n, u, b, O, x;
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    p.methods.balanceOf(j).call();
                                case 3:
                                    if (!((t = e.sent) > 0)) {
                                        e.next = 16;
                                        break
                                    }
                                    for (n = {},
                                    u = function() {
                                        var e = Object(o.a)(a.a.mark((function e(t) {
                                            var n, c, r, i, o, l, u, b, O;
                                            return a.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0,
                                                        n = p.methods,
                                                        c = n.tokenOfOwnerByIndex,
                                                        r = n.getBunnyId,
                                                        i = n.tokenURI,
                                                        e.next = 4,
                                                        c(j, t).call();
                                                    case 4:
                                                        return o = e.sent,
                                                        e.next = 7,
                                                        Object(d.a)([r(o).call, i(o).call]);
                                                    case 7:
                                                        return l = e.sent,
                                                        u = Object(s.a)(l, 2),
                                                        b = u[0],
                                                        O = u[1],
                                                        e.abrupt("return", [Number(b), Number(o), O]);
                                                    case 14:
                                                        return e.prev = 14,
                                                        e.t0 = e.catch(0),
                                                        e.abrupt("return", null);
                                                    case 17:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e, null, [[0, 14]])
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    b = [],
                                    O = 0; O < t; O++)
                                        b.push(u(O));
                                    return e.next = 11,
                                    Promise.all(b);
                                case 11:
                                    x = e.sent,
                                    n = x.reduce((function(e, t) {
                                        if (!t)
                                            return e;
                                        var n = Object(s.a)(t, 3)
                                          , i = n[0]
                                          , a = n[1]
                                          , o = n[2];
                                        return Object(l.a)(Object(l.a)({}, e), {}, Object(c.a)({}, i, {
                                            tokenUri: o,
                                            tokenIds: e[i] ? [].concat(Object(r.a)(e[i].tokenIds), [a]) : [a]
                                        }))
                                    }
                                    ), {}),
                                    i({
                                        type: "set_nfts",
                                        data: n
                                    }),
                                    e.next = 17;
                                    break;
                                case 16:
                                    i({
                                        type: "reset"
                                    });
                                case 17:
                                    e.next = 22;
                                    break;
                                case 19:
                                    e.prev = 19,
                                    e.t0 = e.catch(0),
                                    i({
                                        type: "reset"
                                    });
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 19]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()()
            }
            ), [j, f, i]);
            return Object(l.a)(Object(l.a)({}, n), {}, {
                refresh: function() {
                    return i({
                        type: "refresh",
                        timestamp: Date.now()
                    })
                }
            })
        }
    },
    799: function(e, t, n) {
        "use strict";
        var c, r = n(54), i = n(3).e.div(c || (c = Object(r.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) {
            return e.theme.colors.textSubtle
        }
        ));
        t.a = i
    },
    819: function(e, t, n) {
        "use strict";
        n(0);
        var c = n(19)
          , r = n(201)
          , i = n(8);
        t.a = function(e) {
            var t = e.children
              , n = Object(r.a)();
            return Object(i.jsxs)(c.E, {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: "24px",
                children: [Object(i.jsx)(c.j, {
                    width: "72px",
                    height: "72px"
                }), Object(i.jsx)(c.F, {
                    as: "h5",
                    size: "md",
                    color: "textDisabled",
                    children: t || n(999, "Coming Soon!")
                })]
            })
        }
    },
    841: function(e, t, n) {
        "use strict";
        var c, r = n(16), i = n(766), a = (n(0),
        n(19)), o = n(54), s = n(3), l = Object(s.e)(a.db)(c || (c = Object(o.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n"])), (function(e) {
            return e.theme.colors.tertiary
        }
        ));
        l.defaultProps = {
            p: "24px"
        };
        var u = l
          , b = n(8);
        t.a = function(e) {
            var t = e.icon
              , n = e.title
              , c = e.subtitle
              , o = e.isDisabled
              , s = void 0 !== o && o
              , l = Object(i.a)(e, ["icon", "title", "subtitle", "isDisabled"]);
            return Object(b.jsx)(u, Object(r.a)(Object(r.a)({}, l), {}, {
                children: Object(b.jsxs)(a.E, {
                    alignItems: "start",
                    children: [Object(b.jsx)(t, {
                        width: "44px",
                        mr: "24px",
                        color: s ? "textDisabled" : "currentColor"
                    }), Object(b.jsxs)("div", {
                        children: [Object(b.jsx)(a.F, {
                            as: "h3",
                            size: "xl",
                            color: s ? "textDisabled" : "text",
                            children: n
                        }), Object(b.jsx)(a.db, {
                            textTransform: "uppercase",
                            color: s ? "textDisabled" : "textSubtle",
                            fontSize: "12px",
                            bold: !0,
                            children: c
                        })]
                    })]
                })
            }))
        }
    }
}]);
//# sourceMappingURL=13.3ba7ad1d.chunk.js.map
