(window["lionsearchpanel-Jsonp"] = window["lionsearchpanel-Jsonp"] || []).push([[77], {
    137: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ERacpOrRajx = t.ERacpOrRajxOrRajn = t.DtmMode = t.Edevice = void 0,
        function(e) {
            e[e.PC = 0] = "PC",
            e[e.Mobile = 1] = "Mobile"
        }(t.Edevice || (t.Edevice = {})),
        function(e) {
            e[e.NoTab = 0] = "NoTab",
            e[e.Tab = 1] = "Tab"
        }(t.DtmMode || (t.DtmMode = {})),
        function(e) {
            e[e.Racp = 0] = "Racp",
            e[e.Rajx = 1] = "Rajx",
            e[e.Rajn = 2] = "Rajn"
        }(t.ERacpOrRajxOrRajn || (t.ERacpOrRajxOrRajn = {})),
        function(e) {
            e[e.Racp = 0] = "Racp",
            e[e.Rajx = 1] = "Rajx"
        }(t.ERacpOrRajx || (t.ERacpOrRajx = {}))
    },
    139: function(e, t, n) {
        "use strict";
        var a = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useConnect = t.PanelMaster = t.initialState = void 0;
        var r = n(0)
          , o = n(0)
          , i = n(149);
        Object.defineProperty(t, "initialState", {
            enumerable: !0,
            get: function() {
                return i.initialState
            }
        });
        var l = n(142);
        Object.defineProperty(t, "onSubmit", {
            enumerable: !0,
            get: function() {
                return l.onSubmit
            }
        }),
        Object.defineProperty(t, "EPanelKeys", {
            enumerable: !0,
            get: function() {
                return l.EPanelKeys
            }
        });
        var c = r.createContext({});
        t.useConnect = function() {
            return o.useContext(c)
        }
        ;
        t.PanelMaster = function(e) {
            var t = e.store
              , n = e.children
              , i = a(o.useReducer(t.reducer, t.containerState), 2)
              , l = i[0]
              , s = i[1];
            return r.createElement(c.Provider, {
                value: {
                    state: l,
                    dispatch: s
                }
            }, n)
        }
    },
    141: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(194);
        t.default = a.default
    },
    144: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0)
          , i = n(13)
          , l = n(165)
          , c = n(138)
          , s = n(141)
          , u = n(155)
          , d = n(160);
        n(168);
        var p = n(27)
          , f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    show: !1
                },
                t.mainInt = o.createRef(),
                t.sidePageInt = o.createRef(),
                t.classnameM = "MMenuListDtmRajn",
                t.handleToggle = function() {
                    t.props.disabledOpen || (t.setState((function(e) {
                        return {
                            show: !e.show
                        }
                    }
                    )),
                    t.props.page.onClick())
                }
                ,
                t
            }
            return r(t, e),
            t.prototype.componentDidUpdate = function(e, t) {
                if (this.state.show !== t.show) {
                    if (!document.querySelector("#header_lion"))
                        return;
                    var n = document.querySelector("#header_lion");
                    this.state.show ? n.setAttribute("style", "display: none") : n.setAttribute("style", "display: block")
                }
            }
            ,
            t.prototype.disableScrolling = function() {
                window.onscroll = function() {
                    window.scrollTo(0, 0)
                }
            }
            ,
            t.prototype.enableScrolling = function() {
                window.onscroll = function() {}
            }
            ,
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.page
                  , a = t.multiItem
                  , r = t.slideClass
                  , p = t.insertNode
                  , f = t.customClass_container
                  , h = t.replaceRegular
                  , m = t.remindText;
                return o.createElement(o.Fragment, null, o.createElement("div", {
                    className: i.default({
                        inputSkin_disabled: this.props.disabledOpen
                    }, "inputSkin_Parent")
                }, o.createElement(s.default, {
                    setRef: this.mainInt,
                    isRequired: this.props.isRequired,
                    placeholder: this.props.placeholder,
                    title: this.props.title,
                    iconName: this.props.iconName,
                    inputText: this.props.inputText,
                    onClick: this.handleToggle,
                    maxItem: n.maxItem,
                    inputClose: !!a,
                    multiItem: a,
                    readOnly: !0,
                    replaceRegular: h
                })), o.createElement(l.default, {
                    style: {
                        color: "red"
                    },
                    className: r + " " + this.props.panelProps,
                    visible: this.state.show,
                    direction: "right",
                    insertNode: p,
                    zIndex: 1e4
                }, o.createElement("div", {
                    style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: 1e3,
                        display: this.state.show ? "block" : "none"
                    }
                }, o.createElement("div", {
                    className: "sideBar_content"
                }, o.createElement("header", null, o.createElement("div", {
                    className: "sideBar_header_top"
                }, o.createElement("span", {
                    className: "sideBar_goBack",
                    onClick: function() {
                        e.handleToggle(),
                        n.goBack()
                    },
                    "data-testid": "slide_back"
                }, o.createElement(c.default, {
                    name: "toolbefore svg pink",
                    style: "activity" === this.props.panelProps || "hotel" === this.props.panelProps ? {} : {
                        width: "25px",
                        height: "50px"
                    }
                })), o.createElement("span", {
                    className: "sideBar_title txt-center fz-lg"
                }, n.title)), o.createElement("div", {
                    className: "sideBar_header_bot",
                    "data-testid": "slide_header_control"
                }, o.createElement("div", {
                    className: "sideBar_header_intZone"
                }, o.createElement(s.default, {
                    panelName: this.props.panelName,
                    setRef: this.sidePageInt,
                    inputText: n.inputText,
                    placeholder: n.placeholder,
                    onChange: n.onChange,
                    onClick: n.onClick,
                    onClear: n.onClear,
                    readOnly: n.readOnly,
                    onKeyDown: function(e) {
                        return n.enterSend(e)
                    },
                    multiItem: n.multiItem,
                    itemsClick: function(e) {
                        return n.itemsClick(e)
                    },
                    replaceRegular: h
                })), o.createElement(d.default, {
                    radius: !0,
                    whenClick: function() {
                        "setTourVacation" === e.props.panelName && 0 === e.props.inputText.length || (e.handleToggle(),
                        n.confirm(),
                        e.props.submitCurrentState && e.props.submitCurrentState())
                    }
                }, "activity" === this.props.panelProps || "hotel" === this.props.panelProps ? o.createElement(c.default, {
                    name: "toolsearch2",
                    className: "svg"
                }) : this.props.t("slidePageBtn"))), o.createElement("div", {
                    className: "sideBar_header_background"
                }), this.props.hotKeywordContent && o.createElement(u.default, {
                    device: "m",
                    title: this.props.hotKeywordContent.title,
                    hotKeyword: this.props.hotKeywordContent.hotKeyword,
                    panelName: this.props.hotKeywordContent.panelName,
                    href: this.props.hotKeywordContent.href
                }), this.props.dtmShow && o.createElement("div", {
                    className: this.classnameM + "-RemindText"
                }, m)), this.state.show && o.createElement("div", {
                    className: "sideBar_moduleContainer " + (f || ""),
                    "data-testid": "slide_container"
                }, this.props.children)))))
            }
            ,
            t
        }(o.Component);
        t.default = p.withTranslation()(f)
    },
    145: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PanelName = void 0;
        var a = n(180);
        Object.defineProperty(t, "PanelName", {
            enumerable: !0,
            get: function() {
                return a.PanelName
            }
        })
    },
    146: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0)
          , l = n(171)
          , c = n(174)
          , s = n(137)
          , u = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.moduleName
                  , n = e.panelProps
                  , a = e.hotKeywordContent
                  , r = e.customClass
                  , u = e.tailoredClass
                  , d = (e.panelName,
                e.typeName)
                  , p = e.setOrderOfHotelPanelInput
                  , f = e.orderOfHotelPanelInput;
                return i.createElement(i.Fragment, null, t === s.ERacpOrRajxOrRajn.Racp ? i.createElement(l.default, o({}, this.props.data)) : i.createElement(c.default, o({
                    clearStateInReducer: this.props.clearStateInReducer,
                    panelName: this.props.panelName,
                    tailoredClass: u,
                    customClass: r,
                    inputRef: this.props.inputRef,
                    onFocus: this.props.onFocus,
                    onBlur: this.props.onBlur,
                    inputOnClick: this.props.inputOnClick
                }, this.props.data, {
                    insertNode: this.props.insertNode,
                    JSXofHistory: this.props.JSXofHistory ? this.props.JSXofHistory : null,
                    activitySubmit: this.props.activitySubmit,
                    hotDestinations: this.props.hotDestinations,
                    submitCurrentState: this.props.submitCurrentState,
                    panelProps: n,
                    hotKeywordContent: a,
                    disabled: this.props.disabled,
                    typeName: d,
                    setOrderOfHotelPanelInput: p,
                    orderOfHotelPanelInput: f
                })))
            }
            ,
            t
        }(i.Component);
        t.default = u
    },
    151: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(166);
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        })
    },
    152: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , o = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , i = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
          , l = this && this.__spread || function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(i(arguments[t]));
            return e
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.flatTravelDepartureData = t.travelDepartureData = t.onDestinationInputChange = t.deleteMultiItem = t.getUrlData = t.useToolTip = t.relatedKeywordValue = t.destinationFormat = t.filterExpiredRecord = t.fetchKeyWord = t.departureOption = t.getSearchData = t.themeTravelOption = t.getGroupFreeDestinationData = t.getGroupFreeDepartureData = t.getThemeTravelData = t.getTravelData = t.PanelType = void 0;
        var c = n(26)
          , s = n(147)
          , u = n(0)
          , d = n(149)
          , p = n(159)
          , f = n(181)
          , h = n(186)
          , m = n(140);
        !function(e) {
            e.Travel = "travel",
            e.Cruise = "cruise",
            e.ThemeTravel = "themeTravel",
            e.GroupFree = "groupFree",
            e.TravelSearch = "travelSearch"
        }(t.PanelType || (t.PanelType = {})),
        t.getTravelData = function(e) {
            return r(void 0, void 0, void 0, (function() {
                return o(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, fetch(e).then((function(e) {
                            return e.text()
                        }
                        )).then((function(e) {
                            var t = e.replace(/\r?\n|\r/g, "").replace(/(?:var|let|const)\s(\w+)\s=/g, '"$1":').replace(/;/g, ",").replace(/,$/g, "").replace(/'/g, '"');
                            return JSON.parse("{" + t + "}")
                        }
                        ))];
                    case 1:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.getThemeTravelData = function(e) {
            return r(void 0, void 0, void 0, (function() {
                return o(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, fetch(e).then((function(e) {
                            return e.text()
                        }
                        )).then((function(e) {
                            var t = e.replace(/\r?\n|\r/g, "").replace(/(?:var|let|const)\s(\w+)\s=/g, '"$1":').replace(/;/g, ",").replace(/,$/g, "").replace(/'/g, '"');
                            return JSON.parse("{" + t + "}")
                        }
                        ))];
                    case 1:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.getGroupFreeDepartureData = function(e) {
            return r(void 0, void 0, void 0, (function() {
                return o(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, fetch(e).then((function(e) {
                            return e.json()
                        }
                        )).then((function(e) {
                            var t = Object.keys(JSON.parse(e));
                            if (t)
                                return t.map((function(t) {
                                    return {
                                        text: JSON.parse(e)[t],
                                        value: t
                                    }
                                }
                                ))
                        }
                        ))];
                    case 1:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.getGroupFreeDestinationData = function(e) {
            return r(void 0, void 0, void 0, (function() {
                var t;
                return o(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return t = e ? e.vacationGroup.place : c.vacationGroup.place,
                        [4, fetch(t).then((function(e) {
                            return e.text()
                        }
                        )).then((function(e) {
                            var t = e.replace(/\r?\n|\r/g, "").replace(/(?:var|let|const)\s(\w+)\s=/g, '"$1":').replace(/;/g, ",").replace(/,$/g, "").replace(/'/g, '"');
                            return JSON.parse("{" + t + "}")
                        }
                        ))];
                    case 1:
                        return [2, n.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.themeTravelOption = function() {
            return [{
                text: "不限",
                value: "999"
            }, {
                text: "郵輪",
                value: "11"
            }, {
                text: "鐵道",
                value: "48"
            }, {
                text: "山林",
                value: "82"
            }, {
                text: "滑雪",
                value: "5"
            }, {
                text: "馬拉松",
                value: "76"
            }, {
                text: "單車",
                value: "9"
            }, {
                text: "登山健行",
                value: "71"
            }, {
                text: "Club Med",
                value: "23"
            }, {
                text: "高爾夫",
                value: "3"
            }]
        }
        ,
        t.getSearchData = function() {
            return r(void 0, void 0, void 0, (function() {
                var e;
                return o(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return e = c.travelSearch.place,
                        [4, fetch(e).then((function(e) {
                            return e.text()
                        }
                        )).then((function(e) {
                            var t = e.replace(/\r?\n|\r/g, "").replace(/(?:var|let|const)\s(\w+)\s=/g, '"$1":').replace(/;/g, ",").replace(/,$/g, "").replace(/'/g, '"');
                            return JSON.parse("{" + t + "}")
                        }
                        ))];
                    case 1:
                        return [2, t.sent()]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.departureOption = function(e) {
            var t = []
              , n = e.vCity;
            for (var a in n)
                n.hasOwnProperty(a) && t.push({
                    text: n[a],
                    value: a
                });
            return t
        }
        ,
        t.fetchKeyWord = function(e, t) {
            return r(void 0, void 0, void 0, (function() {
                var n, a;
                return o(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return r.trys.push([0, 3, , 4]),
                        /^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(e) ? (window.abortController && window.abortController.abort(),
                        n = new AbortController,
                        window.abortController = n,
                        [4, fetch(t + "?sLine=_6&sKeyWord=_A_6&Keyword=" + e + "&q=" + e + "&_=1594863360765&pageSize=15", {
                            method: "GET",
                            mode: "cors",
                            signal: n.signal,
                            headers: new Headers({
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                            })
                        })]) : [2, {
                            data: {
                                Destinations: []
                            },
                            searchKeyWord: e
                        }];
                    case 1:
                        return [4, r.sent().json()];
                    case 2:
                        return a = r.sent(),
                        [2, {
                            data: {
                                Destinations: a.map((function(e) {
                                    var t = {}
                                      , n = e.City || e.Country;
                                    return t.level2 = "only",
                                    t.level3 = n && e.Name !== n ? e.Name + '"' + n + '"' : e.Name,
                                    t.txt = t.level3,
                                    t
                                }
                                ))
                            },
                            searchKeyWord: e
                        }];
                    case 3:
                        return r.sent(),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.filterExpiredRecord = function(e) {
            var t, n = [{
                panelName: "travel",
                resetTime: {
                    yy: 2022,
                    mm: 1,
                    dd: 3,
                    h: 12,
                    m: 0,
                    s: 0
                }
            }, {
                panelName: "activity",
                resetTime: {
                    yy: 2025,
                    mm: 5,
                    dd: 19,
                    h: 11,
                    m: 0,
                    s: 0
                }
            }, {
                panelName: "taiwanVacation",
                resetTime: {
                    yy: 2020,
                    mm: 9,
                    dd: 30,
                    h: 0,
                    m: 0,
                    s: 0
                }
            }, {
                panelName: "hotel",
                resetTime: {
                    yy: 2021,
                    mm: 7,
                    dd: 1,
                    h: 12,
                    m: 0,
                    s: 0
                }
            }, {
                panelName: "B2B_uplan_Travel",
                resetTime: {
                    yy: 2021,
                    mm: 4,
                    dd: 1,
                    h: 0,
                    m: 0,
                    s: 0
                }
            }].find((function(e) {
                return "travel" === e.panelName
            }
            ));
            if (e && 0 !== e.length && Array.isArray(e)) {
                if (t = e.filter((function(e) {
                    var t = m();
                    return t.diff(m("" + e.createTime), "days") < 90 && m("" + e.urlParams.GoDateEnd).isAfter(t)
                }
                )),
                n) {
                    var a = n.resetTime
                      , r = a.yy
                      , o = a.mm
                      , i = a.dd
                      , l = a.h
                      , c = a.m
                      , s = a.s
                      , u = m(new Date(r,o - 1,i,l,c,s));
                    t = t.filter((function(e) {
                        return m("" + e.createTime).isAfter(u)
                    }
                    ))
                }
                return t
            }
            return null
        }
        ,
        t.destinationFormat = function(e, t) {
            var n = t.vLinewebarea
              , a = t.vLinetravel
              , r = t.vLine;
            return "" + e + n.split("_")[1] + "-" + a.split("_")[1] + "-" + r.split("_")[1] + ","
        }
        ,
        t.relatedKeywordValue = function(e, t) {
            if (void 0 === t && (t = null),
            t !== s.SearchType.Keyword)
                return {
                    Keywords: ""
                };
            var n = e
              , a = ""
              , r = /\"([^\)]+)\"/g;
            return r.test(e) && e.replace(r, (function(e, t) {
                n = n.replace(e, " "),
                a = "" + a + t + " "
            }
            )),
            {
                Keywords: n.trim(),
                KeywordsCity: a.trim()
            }
        }
        ,
        t.useToolTip = function(e) {
            var t = i(u.useState(""), 2)
              , n = t[0]
              , a = t[1];
            return u.useEffect((function() {
                !function() {
                    r(this, void 0, void 0, (function() {
                        var t;
                        return o(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, fetch(e, {
                                    method: "POST"
                                })];
                            case 1:
                                return [4, n.sent().json()];
                            case 2:
                                return t = n.sent(),
                                a(t[0].Message),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }()
            }
            ), []),
            n
        }
        ,
        t.getUrlData = function(e, t) {
            var n;
            return d.initialState({}).getUrl().done((function(a) {
                if (a.urlData.length > 0) {
                    if (h.findUrlProp(a.urlData, "TravelPavilionGroupID"))
                        return;
                    var r = t.departOption
                      , o = t.desnsOption
                      , i = t.airlinesOption
                      , l = new Map([["DepartureID", function(e, t) {
                        return void 0 === t && (t = {}),
                        t.Departure = p.valueToOption(r, e).value
                    }
                    ], ["ArriveID", function(e, t) {
                        return void 0 === t && (t = {}),
                        t.Destination = h.urlToDesns(o, e)
                    }
                    ], ["GoDateStart", function(e, t) {
                        return void 0 === t && (t = {}),
                        t.Date[0] = e
                    }
                    ], ["GoDateEnd", function(e, t) {
                        return void 0 === t && (t = {}),
                        t.Date[1] = e
                    }
                    ], ["Airlines", function(e) {
                        return f.urlToAirline(e, i)
                    }
                    ], ["IsEnsureGroup", function(e) {
                        return "true" === e
                    }
                    ], ["IsSold", function(e) {
                        return "true" === e
                    }
                    ]]);
                    n = a.urlData.reduce((function(t, n, a, r) {
                        var o = n.key
                          , i = n.value;
                        return i && (e.hasOwnProperty(o) || l.has(o)) ? (e.hasOwnProperty(o) ? t[o] = l.has(o) ? l.get(o)(h.findUrlProp(r, o)) : i : l.get(o)(h.findUrlProp(r, o), t),
                        t) : t
                    }
                    ), {
                        Date: Object.assign(e.Date)
                    }),
                    h.findUrlProp(a.urlData, "IsEnsureGroup") || (n.IsEnsureGroup = !1),
                    h.findUrlProp(a.urlData, "IsSold") || (n.IsSold = !1)
                }
            }
            )),
            n
        }
        ,
        t.deleteMultiItem = function(e, t, n) {
            var a = l(e.Destination);
            a.length > 0 && a.splice(n, 1),
            t(a)
        }
        ,
        t.onDestinationInputChange = function(e, n, r, o) {
            var i = function(e) {
                return [a(a({}, e.selectedData[0]), {
                    text: e.selectedData[0].text.replace(/全部|全區/g, "")
                })]
            };
            e.Destination.find((function(a, o) {
                var c;
                if (r.selectedData && r.selectedData[0]) {
                    if (a.value === r.selectedData[0].value)
                        return t.deleteMultiItem(e, n, o),
                        !0;
                    if (a.vLine === r.selectedData[0].vLine && (c = "_" === r.selectedData[0].vLinetravel ? e.Destination.filter((function(e) {
                        return e.vLine !== r.selectedData[0].vLine
                    }
                    )) : e.Destination.filter((function(e) {
                        return e.vLine !== r.selectedData[0].vLine || e.vLine === r.selectedData[0].vLine && e.vLinetravel !== r.selectedData[0].vLinetravel && "_" !== e.vLinetravel
                    }
                    )),
                    "_" === a.vLinetravel && "_" !== r.selectedData[0].vLinetravel || "_" !== a.vLinetravel && "_" === r.selectedData[0].vLinetravel || a.vLinetravel === r.selectedData[0].vLinetravel && "_" === a.vLinewebarea && "_" !== r.selectedData[0].vLinewebarea || a.vLinetravel === r.selectedData[0].vLinetravel && "_" !== a.vLinewebarea && "_" === r.selectedData[0].vLinewebarea))
                        return t.deleteMultiItem(e, n, o),
                        c.push(i(r)[0]),
                        n(l(c)),
                        !0
                }
                return !1
            }
            )) || (r.selectedData ? r.selectedData.length > 0 && e.Destination.length < 3 && !o && n(l(e.Destination, i(r))) : o && n(l(r)))
        }
        ,
        t.travelDepartureData = [{
            categoryName: "國外旅遊",
            categoryData: [{
                text: "台北(松山/桃園機場)",
                value: "TPE"
            }, {
                text: "台中",
                value: "TCH"
            }, {
                text: "台南",
                value: "TNN"
            }, {
                text: "高雄",
                value: "KHH"
            }]
        }, {
            categoryName: "台灣旅遊",
            categoryData: [{
                text: "不限",
                value: ""
            }, {
                text: "北北基",
                value: "TPE,KLU,PAN"
            }, {
                text: "桃竹苗",
                value: "TAO,HCU,MLI"
            }, {
                text: "中彰投",
                value: "TCH,CHA,NTO"
            }, {
                text: "雲嘉南",
                value: "TNN,YLI,CYI"
            }, {
                text: "高屏",
                value: "KHH,PIN"
            }, {
                text: "宜花東",
                value: "YLN,HLN,TTT"
            }]
        }],
        t.flatTravelDepartureData = t.travelDepartureData.reduce((function(e, t) {
            return l(e, t.categoryData)
        }
        ), [])
    },
    153: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.parseRoomListArray = t.calcShowText = t.RoomLitSection = t.ChildAgeSection = t.ChildrenAgeSelect = t.NoticeText = void 0;
        var a = n(0)
          , r = n(203)
          , o = n(27)
          , i = n(138);
        t.calcShowText = function(e) {
            var t = "共" + e.length + "間，"
              , n = e.reduce((function(e, t, n) {
                return e + Object.keys(t).reduce((function(e, n) {
                    return e + ("number" == typeof t[n] ? t[n] : t[n].length)
                }
                ), 0)
            }
            ), 0);
            return t + (n = String(n).replace(/([0-9]+)/g, "$1人"))
        }
        ,
        t.parseRoomListArray = function(e) {
            var t = []
              , n = [];
            return e.forEach((function(e, a) {
                var r = e.adult
                  , o = e.childrenNoBed
                  , i = e.childrenWithBed
                  , l = (null == i ? void 0 : i.length) || 0
                  , c = (null == o ? void 0 : o.length) || 0
                  , s = r + "-" + l + "-" + c
                  , u = [];
                l > 0 ? u.push(i.join(";")) : u.push(""),
                c > 0 ? u.push(o.join(";")) : u.push(""),
                n.push(u.join("-")),
                t.push(s)
            }
            )),
            [t, n]
        }
        ;
        var l = function(e) {
            var t = e.Notice;
            return a.createElement(a.Fragment, null, t.map((function(e, t) {
                return a.createElement("p", {
                    className: "txt_green",
                    key: t + "_NoticeText"
                }, e)
            }
            )))
        };
        t.NoticeText = l,
        l.defaultProps = {
            Notice: ["一筆訂單總人數若超過8位，請分兩張單訂購。", "一位大人最多只能帶2名小孩或1名小孩+1名嬰兒", "（小孩定義：年滿2歲(含)以上未滿12歲。嬰兒定義：未滿2歲。年齡以出發日為準。)"]
        };
        var c = function(e) {
            var t = e.onchange
              , n = e.defaultValue
              , r = e.option
              , l = e.panelProps
              , c = e.number
              , s = e.dropDownIcon
              , u = o.useTranslation()
              , d = u.t;
            u.i18n;
            return a.createElement("label", {
                className: "children_age_select"
            }, "RoomListForHotel" === l && "" + d("hotel.roomList.child") + (c + 1), a.createElement("select", {
                className: "age-select",
                onChange: t,
                value: n
            }, r.map((function(e, t) {
                return a.createElement("option", {
                    value: t,
                    key: t + "_option"
                }, e)
            }
            ))), s && a.createElement("div", {
                className: "nextIcon"
            }, a.createElement(i.default, {
                name: "toolnext",
                className: "svg icon_control"
            })))
        };
        t.ChildrenAgeSelect = c,
        c.defaultProps = {
            option: ["0歲", "1歲", "2歲", "3歲", "4歲", "5歲", "6歲", "7歲", "8歲", "9歲", "10歲", "11歲", "12歲"]
        };
        var s = function(e) {
            var t = e.ageArray
              , n = e.onChange
              , r = e.roomCount
              , o = e.target
              , i = e.option
              , l = e.panelProps
              , s = e.dropDownIcon;
            return a.createElement("div", {
                className: "children_ages_section"
            }, a.createElement("span", {
                className: "row_title"
            }, "小孩年齡"), a.createElement("div", {
                className: "age_select_section"
            }, t.map((function(e, t) {
                return a.createElement(c, {
                    key: t,
                    number: t,
                    onchange: function(e) {
                        n(r, o, t, e.target.value)
                    },
                    defaultValue: e,
                    option: i,
                    panelProps: l,
                    dropDownIcon: s
                })
            }
            ))))
        };
        t.ChildAgeSection = s;
        var u = function(e) {
            var t = e.roomCount
              , n = e.mainName
              , i = e.min
              , l = e.max
              , c = e.gpct
              , u = e.palceName
              , d = e.onClickAdd
              , p = e.onClickMinus
              , f = e.option
              , h = e.onChange
              , m = e.onInputChange
              , v = e.onInputBlur
              , y = e.readOnly
              , _ = e.panelProps
              , D = e.showChildrenAge
              , T = e.roomData
              , C = e.isDynamicLimitChildCount
              , g = e.totalLimit
              , S = o.useTranslation()
              , b = S.t
              , w = (S.i18n,
            function(e, t) {
                var n, a, r = [], o = [];
                if (!T)
                    return l[1];
                T && T.map((function(e) {
                    var t, n;
                    r.push(e.adult);
                    var a = (null === (t = e.childrenWithBed) || void 0 === t ? void 0 : t.length) || 0
                      , i = (null === (n = e.childrenNoBed) || void 0 === n ? void 0 : n.length) || 0;
                    o.push(a + i)
                }
                ));
                var i = r.reduce((function(e, t) {
                    return e + t
                }
                ))
                  , c = T.reduce((function(e, t) {
                    return e + Object.keys(t).reduce((function(e, n) {
                        return e + ("number" == typeof t[n] ? 0 : t[n].length)
                    }
                    ), 0)
                }
                ), 0);
                return C ? i + c >= g || ((null === (n = e.childrenWithBed) || void 0 === n ? void 0 : n.length) || 0) + ((null === (a = e.childrenNoBed) || void 0 === a ? void 0 : a.length) || 0) >= 2 * e.adult ? t : 2 * e.adult : c >= l[1] ? t : l[1]
            }
            );
            return a.createElement("section", {
                className: "room_list_section"
            }, n && a.createElement("h4", {
                className: "room_count_title"
            }, n), Object.keys(c).map((function(e, n) {
                return "number" == typeof c[e] && a.createElement("div", {
                    className: "room_list_row",
                    key: n
                }, a.createElement("span", {
                    className: "row_title"
                }, u[e] ? u[e] : e), a.createElement(r.default, {
                    max: null !== l[n] ? (o = c[e],
                    s = [],
                    T && T.map((function(e) {
                        s.push(e.adult)
                    }
                    )),
                    T ? s.reduce((function(e, t) {
                        return e + t
                    }
                    )) + T.reduce((function(e, t) {
                        return e + Object.keys(t).reduce((function(e, n) {
                            return e + ("number" == typeof t[n] ? 0 : t[n].length)
                        }
                        ), 0)
                    }
                    ), 0) >= g ? o : C ? g : l[0] : l[0]) : 9,
                    min: i[n] ? i[n] : 0,
                    count: c[e],
                    btnClassMinus: "ic_rcln toolcancelb svg",
                    btnClassAdd: "ic_rcln tooladdb svg",
                    onClickAdd: function() {
                        d(t, e)
                    },
                    onClickMinus: function() {
                        p(t, e)
                    },
                    onInputChange: function(e) {
                        return m(e, t, "adult")
                    },
                    onInputBlur: function(e) {
                        v(e, t, "adult")
                    },
                    readOnly: y
                }));
                var o, s
            }
            )), a.createElement("div", {
                className: "child_row"
            }, Object.keys(c).map((function(n, o) {
                return "object" == typeof c[n] && a.createElement("div", {
                    className: "room_list_row",
                    key: o + "_W"
                }, a.createElement("div", {
                    className: "child_count_control"
                }, a.createElement("span", {
                    className: "row_title"
                }, u[n] ? u[n] : n, D && a.createElement("span", {
                    className: "childrenAgePlaceholder"
                }, b("hotel.roomList.childrenAgePlaceholder"))), a.createElement(r.default, {
                    max: w(c, c[n].length),
                    min: i[1],
                    count: c[n].length,
                    btnClassMinus: "ic_rcln toolcancelb svg",
                    btnClassAdd: "ic_rcln tooladdb svg",
                    onClickAdd: function() {
                        d(t, n)
                    },
                    onClickMinus: function() {
                        p(t, n)
                    },
                    onInputChange: function(e) {
                        return m(e, t, "childrenWithBed")
                    },
                    readOnly: y
                })), c[n].length > 0 ? a.createElement(s, {
                    ageArray: c[n],
                    onChange: h,
                    roomCount: t,
                    target: n,
                    option: f,
                    panelProps: _,
                    dropDownIcon: e.dropDownIcon
                }) : null)
            }
            ))))
        };
        t.RoomLitSection = u,
        u.defaultProps = {
            min: [0, 0],
            max: [9, 9],
            palceName: {}
        }
    },
    161: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.FlightType = void 0,
        function(e) {
            e.Home = "Home",
            e.Landscape = "Landscape",
            e.Result = "Result",
            e.SEO = "SEO",
            e.Global = "Global"
        }(t.FlightType || (t.FlightType = {}))
    },
    162: function(e, t, n) {
        "use strict";
        var a = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(13)
          , i = n(150)
          , l = n(141)
          , c = function(e) {
            var t = e.onClick;
            return r.createElement("button", {
                className: "close_btn",
                onClick: t
            }, r.createElement("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 10 10"
            }, r.createElement("path", {
                d: "M10 8.59L8.59 10 5 6.41 1.41 10 0 8.59 3.59 5 0 1.41 1.41 0 5 3.59 8.59 0 10 1.41 6.41 5z"
            })))
        }
          , s = function(e) {
            var t = e.className
              , n = e.children
              , c = e.inputText
              , s = e.title
              , d = e.placeholder
              , p = e.isRequired
              , f = e.iconName
              , h = e.insertNode
              , m = e.readOnly
              , v = e.onCloseWindow
              , y = e.inputOnClick
              , _ = e.disabledOpen
              , D = e.setOrderOfHotelPanelInput
              , T = e.orderOfHotelPanelInput
              , C = e.typeName
              , g = a(r.useState(!1), 2)
              , S = g[0]
              , b = g[1]
              , w = function() {
                b(!1),
                v && v()
            }
              , E = o.default("room_list_wrap_container", {
                "d-no": !S
            });
            return r.useEffect((function() {
                return "RoomListForHotelPc" === T && b(!0),
                function() {}
            }
            ), [T]),
            r.createElement(i.default, {
                onClick: w,
                insertNode: h,
                setOrderOfHotelPanelInput: D,
                orderOfHotelPanelInput: T,
                typeName: C
            }, r.createElement("div", {
                className: t + " input_compose roomListInput "
            }, r.createElement("div", {
                className: o.default({
                    inputSkin_disabled: _
                }, "inputSkin_Parent")
            }, r.createElement(l.default, {
                isRequired: p,
                placeholder: d,
                title: s,
                iconName: f,
                inputText: c,
                onChange: function() {},
                onClick: function(e) {
                    _ || (y(e),
                    b(!0))
                },
                onClear: function() {},
                readOnly: m
            })), S ? r.createElement(u, {
                className: E,
                onClose: w
            }, n) : null))
        }
          , u = function(e) {
            return r.createElement("div", {
                className: e.className
            }, r.createElement(c, {
                onClick: e.onClose
            }), e.children)
        };
        s.defaultProps = {
            inputOnClick: function(e) {}
        },
        t.default = s
    },
    163: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(0)
          , r = n(144)
          , o = n(13)
          , i = function(e) {
            var t = e.inputText
              , n = e.title
              , i = e.placeholder
              , l = e.goBack
              , c = e.onClick
              , s = e.onChange
              , u = e.onClear
              , d = e.confirm
              , p = e.isRequired
              , f = e.iconName
              , h = e.readOnly
              , m = e.customClass_container
              , v = e.panelProps
              , y = e.children
              , _ = e.className
              , D = e.insertNode
              , T = e.disabledOpen
              , C = e.slideClass;
            return a.createElement(r.default, {
                customClass_container: m,
                isRequired: p,
                inputText: t,
                title: n,
                placeholder: i,
                iconName: f,
                page: {
                    inputText: t,
                    title: n,
                    placeholder: i,
                    goBack: l,
                    onClick: c,
                    onChange: s,
                    onClear: u,
                    confirm: d,
                    readOnly: h
                },
                insertNode: D,
                panelProps: v,
                disabledOpen: T,
                slideClass: C
            }, a.createElement("div", {
                className: o.default("page_content wrapper", _)
            }, y))
        };
        i.defaultProps = {
            goBack: function() {},
            onClick: function() {},
            onChange: function() {},
            onClear: function() {},
            confirm: function() {}
        },
        t.default = i
    },
    164: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.FooterSearch = void 0;
        var a = n(0);
        n(179);
        var r = n(13);
        t.FooterSearch = function(e) {
            var t, n, o = "FooterSearch";
            return a.createElement("div", {
                className: r.default(o, (t = {},
                t[o + "_mSearchResult"] = e.isSearchResultM,
                t), (n = {},
                n[e.className] = e.className,
                n))
            }, e.showCancelBtn ? a.createElement("button", {
                className: r.default(o + "_cancelBtn " + o + "_Btn", e.cancelBtnClassName),
                onClick: e.onCancel
            }, e.cancelBtnText) : null, a.createElement("button", {
                className: r.default(o + "_searchBtn " + o + "_Btn", e.searchBtnClassName),
                onClick: function(t) {
                    e.onSearch(t)
                },
                "aria-label": e.searchAriaLabel
            }, e.searchBtnText))
        }
        ,
        t.FooterSearch.defaultProps = {
            searchBtnText: "搜尋",
            cancelBtnText: "取消"
        }
    },
    166: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0)
          , l = n(27)
          , c = n(191)
          , s = n(193)
          , u = n(192)
          , d = n(195);
        n(167);
        var p = function(e) {
            var t = e.hotDestinations
              , n = e.onClickItem
              , a = e.onClickMore
              , r = e.panelProps
              , o = l.useTranslation().t
              , c = function(e) {
                switch (e) {
                case "activity":
                    return {
                        title: o("activity.list.title"),
                        seeMore: o("activity.list.seeMore")
                    };
                case "visa":
                    return {
                        title: "熱門辦理國家",
                        seeMore: "查看完整國家列表"
                    };
                default:
                    return {
                        title: o("activity.list.title"),
                        seeMore: o("activity.list.seeMore")
                    }
                }
            };
            return i.createElement("div", {
                className: "pop-attractions"
            }, i.createElement("div", {
                className: "pop-attractions_header"
            }, i.createElement("div", {
                className: "pop-attractions_title"
            }, c(r).title), i.createElement("div", {
                className: "pop-attractions_more",
                onClick: a
            }, c(r).seeMore)), i.createElement("ul", {
                className: "pop-attractions_content"
            }, t.map((function(e, t) {
                return i.createElement("li", {
                    key: t,
                    className: "pop-attractions_item",
                    onClick: function() {
                        return n(e)
                    }
                }, i.createElement("a", {
                    onClick: function(e) {
                        return e.preventDefault
                    }
                }, e.text))
            }
            ))))
        }
          , f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.classname = "ListStyle",
                t._onClickItem = function(e, n, a) {
                    (n || "choosed" === n && void 0 !== e) && t.props.onSelected([o(o({}, e), {
                        SelectedBy: a
                    })])
                }
                ,
                t._closeBtnRender = function(e) {
                    return i.createElement("span", {
                        className: t.classname + "-close_btn",
                        onClick: function() {
                            e()
                        }
                    }, i.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 10 10"
                    }, i.createElement("path", {
                        d: "M10 8.59L8.59 10 5 6.41 1.41 10 0 8.59 3.59 5 0 1.41 1.41 0 5 3.59 8.59 0 10 1.41 6.41 5z"
                    })))
                }
                ,
                t
            }
            return r(t, e),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , n = t.Dtm
                  , a = t.Racp
                  , r = t.Rajn
                  , o = t.customClass
                  , l = t.JSXofHistory
                  , f = t.PopAttractions
                  , h = t.panelProps
                  , m = this.props.Dtm.activeTabIndex;
                return i.createElement("div", {
                    className: this.classname + " " + (o || ""),
                    "data-testid": "shared_list"
                }, n && n.show && i.createElement("div", {
                    className: "dtm_rcfr-wrap " + (n.show ? "open" : "")
                }, i.createElement("p", {
                    className: "dtm_rcfr-label"
                }, n.remindText), l || null, this._closeBtnRender(n.closeBtn), i.createElement(c.default, {
                    levelKey: n.levelKey,
                    dataResouce: n.source,
                    orderMaps: n.orderMaps,
                    activeTabIndex: m || 0,
                    onClickItem: function(t) {
                        return e._onClickItem(t, !0, "Menu")
                    },
                    replaceRegular: n.replaceRegular,
                    selectedData: e.props.selectedData && e.props.selectedData.length ? Array.isArray(e.props.selectedData) ? e.props.selectedData.map((function(e) {
                        return e.value
                    }
                    )) : [e.props.selectedData.value] : [],
                    panelProps: this.props.panelProps,
                    device: this.props.device,
                    swtichToPop: this.props.switchToPop
                })), f && f.showPopAttractions && i.createElement(p, {
                    hotDestinations: f.hotDestinations,
                    onClickItem: function(t) {
                        return e._onClickItem(t, !0, "Menu")
                    },
                    onClickMore: f.switchToDtm,
                    panelProps: h
                }), a && i.createElement(s.default, {
                    url: a.source,
                    minimumStringQueryLength: a.minimumStringQueryLength,
                    minimumStringQuery: a.minimumStringQuery,
                    ClassName: !a.show && "d-no",
                    searchKeyWord: a.searchKeyWord,
                    whenItemSelect: function(e) {
                        return a.pressDown([e])
                    },
                    InputIsFocus: a.show,
                    noMatchText: a.noMatchText,
                    theme: "future",
                    closeActcallback: function(t) {
                        void 0 !== t ? (e._onClickItem(t, !0, "AutoComplete"),
                        a.closeBtn()) : a.closeBtn()
                    },
                    changeKey: a.changeKey,
                    catalogue: a.catalogue
                }), r && r.show && i.createElement("div", {
                    className: "act_wrap_container " + (r.show ? "" : "d-no")
                }, this._closeBtnRender(r.closeBtn), r.useHierarchyRender ? i.createElement(d.default, {
                    matchWord: r.searchKeyWord,
                    data: r.source,
                    rules: r.rules,
                    getItemClickValue: function(t, n) {
                        r.pressDown([t], n),
                        e._onClickItem(t, n, "AutoComplete")
                    },
                    isFocus: r.show,
                    minimumStringQueryLength: r.minimumStringQueryLength,
                    containerClass: !r.show && "d-no",
                    minimumStringQuery: r.minimumStringQuery,
                    closeBtnOnClick: function() {
                        return e.setState({
                            show: !1
                        })
                    },
                    noMatchText: r.noMatchText,
                    panelProps: this.props.panelProps,
                    fetchStatus: r.fetchStatus,
                    noShowCityName: r.noShowCityName
                }) : i.createElement(u.default, {
                    titleClass: r.titleClass,
                    containerClass: !r.show && "d-no",
                    data: r.source,
                    fetchKeyword: r.fetchKeyword,
                    matchWord: r.searchKeyWord,
                    closeBtnOnClick: function() {
                        return e.setState({
                            show: !1
                        })
                    },
                    getItemClickValue: function(t, n) {
                        r.pressDown([t], n),
                        e._onClickItem(t, n, "AutoComplete")
                    },
                    isFocus: r.show,
                    panelProps: this.props.panelProps,
                    defaultEnterStopChoiceFirst: function() {
                        return e.props.Rajn.enterClose()
                    },
                    selectedData: this.props.selectedData,
                    noMatchText: r.noMatchText,
                    minimumStringQuery: r.minimumStringQuery,
                    minimumStringQueryLength: r.minimumStringQueryLength,
                    footer: r.footer,
                    rules: r.rules,
                    fetchStatus: r.fetchStatus,
                    enterSearch: "travel" === this.props.panelProps && "關鍵字" === this.props.inputTitle
                })))
            }
            ,
            t
        }(i.Component);
        t.default = l.withTranslation()(f)
    },
    167: function(e, t, n) {
        e.exports = {
            ListStyle: "ListStyle",
            dtm_rcfr: "dtm_rcfr",
            ntb_rcln: "ntb_rcln",
            tabs: "tabs",
            ctns: "ctns",
            "dtm_rcfr-row": "dtm_rcfr-row",
            "dtm_rcfr-wrap": "dtm_rcfr-wrap",
            open: "open",
            "dtm_rcfr-label": "dtm_rcfr-label",
            "dtm_rcfr-selected-wrap": "dtm_rcfr-selected-wrap",
            "dtm_rcfr-selected": "dtm_rcfr-selected",
            "ListStyle-close_btn": "ListStyle-close_btn",
            act_racp: "act_racp",
            act_wrap_container: "act_wrap_container",
            "act_rajx-close": "act_rajx-close",
            "act_rajn-close": "act_rajn-close",
            "hierarchyRajn-close": "hierarchyRajn-close",
            "pop-attractions": "pop-attractions",
            "pop-attractions_header": "pop-attractions_header",
            "pop-attractions_title": "pop-attractions_title",
            "pop-attractions_more": "pop-attractions_more",
            "pop-attractions_content": "pop-attractions_content",
            "pop-attractions_item": "pop-attractions_item",
            sec_title: "sec_title",
            nvb_rslb: "nvb_rslb",
            sideBar_moduleContainer: "sideBar_moduleContainer"
        }
    },
    168: function(e, t, n) {
        e.exports = {
            sideBar_goBack: "sideBar_goBack",
            sideBar_title: "sideBar_title",
            sideBar_content: "sideBar_content",
            "MMenuListDtmRajn-RemindText": "MMenuListDtmRajn-RemindText",
            sideBar_header_line: "sideBar_header_line",
            sideBar_header_top: "sideBar_header_top",
            sideBar_header_bot: "sideBar_header_bot",
            bt_rcnb: "bt_rcnb",
            inputSkin_group: "inputSkin_group",
            inputSkin_group_content: "inputSkin_group_content",
            sideBar_header_intZone: "sideBar_header_intZone",
            sideBar_header_multi: "sideBar_header_multi",
            tooladdb: "tooladdb",
            sideBar_moduleContainer: "sideBar_moduleContainer",
            page_content: "page_content",
            wrapper: "wrapper",
            txt_green: "txt_green",
            "m-b-none": "m-b-none",
            room_list_section: "room_list_section",
            room_list_row: "room_list_row",
            int_gpct: "int_gpct",
            int_rcln: "int_rcln",
            amount: "amount",
            child_row: "child_row",
            child_count_control: "child_count_control",
            children_ages_section: "children_ages_section",
            age_select_section: "age_select_section",
            children_age_select: "children_age_select"
        }
    },
    169: function(e, t, n) {
        "use strict";
        var a = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(13)
          , i = n(150)
          , l = n(139);
        n(183);
        t.default = function(e) {
            var t = l.useConnect()
              , n = (t.state,
            t.dispatch)
              , c = e.title
              , s = e.boxTitle
              , u = (e.tailoredClass,
            e.customClass)
              , d = e.data
              , p = e.currentOption
              , f = e.isRequire
              , h = e.whenClick
              , m = e.onChangeCallBack
              , v = e.insertNode
              , y = e.showClearText
              , _ = a(r.useState(!1), 2)
              , D = _[0]
              , T = _[1]
              , C = a(r.useState(null), 2)
              , g = C[0]
              , S = C[1]
              , b = d && d.length && d[0].hasOwnProperty("categoryName")
              , w = function(e) {
                var t = ""
                  , n = "";
                if (/\(/.test(e.text)) {
                    var a = e.text.indexOf("(")
                      , i = e.text.length;
                    t = e.text.slice(0, a),
                    n = e.text.slice(a + 1, i - 1)
                } else
                    t = e.text;
                return r.createElement("div", {
                    className: o.default("option", {
                        active: g && g.value === e.value
                    }),
                    onClick: function(t) {
                        t.stopPropagation(),
                        function(e) {
                            S(e),
                            T(!1),
                            m && m(e.value)
                        }(e)
                    },
                    key: e.value
                }, r.createElement("span", null, " ", t), n && r.createElement("span", {
                    className: "subLabel"
                }, n))
            };
            return r.useEffect((function() {
                p ? S(p) : d && d.length > 0 && S(b ? d[0].categoryData[0] : d[0])
            }
            ), [p, d]),
            r.createElement(r.Fragment, null, r.createElement(i.default, {
                customClass: o.default(u, "dropdown-wrap"),
                onClick: function() {
                    return T(!1)
                },
                insertNode: v
            }, r.createElement("div", {
                className: o.default(u, "dropdownBoxPc"),
                onClick: function() {
                    return T(!0),
                    void (h && h())
                }
            }, r.createElement("div", {
                className: "selectBox"
            }, r.createElement("div", {
                className: o.default("title", {
                    require: f
                })
            }, r.createElement("span", null, c)), r.createElement("div", {
                className: "contentWrap"
            }, g && r.createElement("span", null, g.text), !0 === y && r.createElement("div", {
                className: "clearBtn_wrap",
                onClick: function(e) {
                    for (var t = e.target.closest(".location").classList, a = 0; a < t.length; a++)
                        "location-return" === t[a] ? n({
                            type: "SETDESTINATIONRETURN",
                            DestinationReturn: []
                        }) : "location-forward" === t[a] && n({
                            type: "SETDEPARTUREFORWARD",
                            DepartureForward: []
                        });
                    S(null)
                }
            }, r.createElement("svg", {
                className: "clearBtn",
                width: "14",
                height: "14",
                viewBox: "0 0 10 10"
            }, r.createElement("path", {
                d: "M10 8.59L8.59 10 5 6.41 1.41 10 0 8.59 3.59 5 0 1.41 1.41 0 5 3.59 8.59 0 10 1.41 6.41 5z"
            }))))), r.createElement("div", {
                className: o.default("dropdownBoxContent", {
                    open: D
                })
            }, b ? d.map((function(e) {
                return r.createElement(r.Fragment, {
                    key: e.categoryName
                }, r.createElement("div", {
                    className: "boxTitle"
                }, e.categoryName), r.createElement("div", {
                    className: "selectContentWrap"
                }, e.categoryData && e.categoryData.length > 0 && e.categoryData.map(w)))
            }
            )) : r.createElement(r.Fragment, null, s && r.createElement("div", {
                className: "boxTitle"
            }, s), r.createElement("div", {
                className: "selectContentWrap"
            }, d && d.length > 0 && d.map(w)))))))
        }
    },
    170: function(e, t, n) {
        "use strict";
        var a = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(13)
          , i = n(165)
          , l = n(138);
        n(184);
        t.default = function(e) {
            var t = e.title
              , n = e.boxTitle
              , c = e.customClass
              , s = e.data
              , u = e.currentOption
              , d = e.isRequire
              , p = e.whenClick
              , f = e.onChangeCallBack
              , h = e.insertNode
              , m = a(r.useState(!1), 2)
              , v = m[0]
              , y = m[1]
              , _ = a(r.useState(null), 2)
              , D = _[0]
              , T = _[1]
              , C = s && s.length && s[0].hasOwnProperty("categoryName")
              , g = function(e) {
                var t = ""
                  , n = "";
                if (/\(/.test(e.text)) {
                    var a = e.text.indexOf("(")
                      , i = e.text.length;
                    t = e.text.slice(0, a),
                    n = e.text.slice(a + 1, i - 1)
                } else
                    t = e.text;
                return r.createElement("div", {
                    className: o.default("option", {
                        active: D && D.value === e.value
                    }),
                    onClick: function(t) {
                        t.stopPropagation(),
                        function(e) {
                            T(e),
                            y(!1),
                            f && f(e.value)
                        }(e)
                    },
                    key: e.value
                }, r.createElement("span", null, t), n && r.createElement("span", {
                    className: "subLabel"
                }, n))
            };
            return r.useEffect((function() {
                u ? T(u) : s && s.length > 0 && T(C ? s[0].categoryData[0] : s[0])
            }
            ), [u, s]),
            r.createElement(r.Fragment, null, r.createElement("div", {
                className: "dropdown",
                onClick: function() {
                    return y(!0),
                    void (p && p())
                }
            }, r.createElement("div", {
                className: "selectBox"
            }, r.createElement("div", {
                className: o.default("title", {
                    require: d
                })
            }, r.createElement("span", null, t)), r.createElement("div", {
                className: "contentWrap"
            }, D && r.createElement("span", null, D.text)))), r.createElement(i.default, {
                visible: v,
                direction: "right",
                insertNode: h,
                className: o.default(c, "dropdownBoxM")
            }, r.createElement("div", {
                className: "header"
            }, r.createElement("span", {
                className: "nvb_rslb_goBack",
                onClick: function() {
                    return y(!1)
                }
            }, r.createElement(l.default, {
                name: "toolbefore",
                className: "svg pink",
                style: {
                    width: "30px",
                    height: "50px",
                    marginLeft: "9px",
                    position: "absolute"
                }
            })), r.createElement("span", {
                className: "boxTitle"
            }, t)), r.createElement("div", {
                className: "dropdownBoxContent"
            }, C ? s.map((function(e) {
                return r.createElement(r.Fragment, {
                    key: e.categoryName
                }, r.createElement("div", {
                    className: "boxTitle"
                }, e.categoryName), r.createElement("div", {
                    className: "selectContentWrap"
                }, e.categoryData && e.categoryData.length > 0 && e.categoryData.map(g)))
            }
            )) : r.createElement(r.Fragment, null, n && r.createElement("div", {
                className: "boxTitle"
            }, n), r.createElement("div", {
                className: "selectContentWrap"
            }, s && s.length > 0 && s.map(g))))))
        }
    },
    171: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0)
          , l = n(141)
          , c = n(151)
          , s = n(144)
          , u = n(172)
          , d = n(137);
        n(173);
        var p = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.classnameM = "MMenuListDtmRacp",
                n.classnamePC = "PCMenuListDtmRacp",
                n.fetchDtm = function() {
                    n.props.useDtm && n.dtm.fetchData()
                }
                ,
                n.useData = function() {
                    var e = n.getProps()
                      , t = e.isRequired
                      , a = e.placeholder
                      , r = e.iconName
                      , o = e.title
                      , i = e.multiItem
                      , l = e.maxItem
                      , c = e.itemsClick;
                    return {
                        _inputData: {
                            isRequired: t,
                            placeholder: a,
                            title: o,
                            iconName: r,
                            inputText: n.state.inputText
                        },
                        _inputEvent: {
                            onChange: function(e) {
                                n.Input_onChange(e)
                            },
                            onClick: function(e) {
                                n.Input_onClick()
                            },
                            onClear: function() {
                                n.Input_onClear()
                            }
                        },
                        _multiItems: {
                            maxItem: l || null,
                            multiItem: i || null,
                            itemsClick: function(e) {
                                c && c(e)
                            }
                        }
                    }
                }
                ,
                n.pcRender = function() {
                    var e = n.useData()
                      , t = e._inputData
                      , a = e._inputEvent
                      , r = e._multiItems;
                    return i.createElement("div", {
                        className: "inputSkin_Parent"
                    }, i.createElement(l.default, o({}, t, a, r), n.listItemRender()))
                }
                ,
                n.mobileRender = function() {
                    var e = n.state
                      , t = e.inputText
                      , a = e.finalText
                      , r = (e.mulitTemp,
                    n.getProps())
                      , l = r.multiItem
                      , c = r.title
                      , u = r.placeholder
                      , d = r.remindText
                      , p = n.useData()
                      , f = p._inputData
                      , h = p._inputEvent
                      , m = p._multiItems
                      , v = o(o(o({
                        inputText: t,
                        title: c,
                        placeholder: u
                    }, h), {
                        goBack: function() {
                            n.setState({
                                inputText: a,
                                selectedData: []
                            }),
                            n.Input_closeList(!1, !1, "", !0)
                        },
                        confirm: function() {
                            n.setState({
                                finalText: t,
                                mulitTemp: l
                            }),
                            n.Input_closeList()
                        }
                    }), m);
                    return i.createElement("div", {
                        className: n.classnameM
                    }, i.createElement(s.default, o({}, f, {
                        multiItem: l || null,
                        page: v
                    }), i.createElement(i.Fragment, null, i.createElement("div", {
                        className: n.classnameM + "-RemindText"
                    }, d), n.listItemRender())))
                }
                ,
                n.state = o(o({}, u.defaultStateCommon), {
                    inputText: n.props.inputText || "",
                    finalText: n.props.inputText || "",
                    mulitTemp: []
                }),
                n
            }
            return r(t, e),
            t.prototype.componentDidMount = function() {
                this.fetchDtm()
            }
            ,
            t.prototype.componentDidUpdate = function(e, t) {
                this.props.Dtm.fetchData !== e.Dtm.fetchData && this.fetchDtm(),
                this.props.inputText !== e.inputText && this.setState({
                    inputText: this.props.inputText
                })
            }
            ,
            t.prototype.listItemRender = function() {
                var e = this
                  , t = this.props.device
                  , n = this.getProps()
                  , a = n.Dtm
                  , r = n.Racp
                  , o = n.remindText
                  , l = n.useDtm
                  , s = n.multiItem
                  , u = this.state.selectedData
                  , p = t === d.Edevice.Mobile;
                return i.createElement(c.default, {
                    customClass: p ? this.classnameM + "-List" : null,
                    Dtm: {
                        source: this.state.Dtm.source,
                        show: p ? l && this.state.Dtm.show || "" === this.state.inputText : l && this.state.Dtm.show,
                        remindText: p ? "" : o,
                        levelKey: a.levelKey,
                        orderMaps: a.orderMaps,
                        closeBtn: function() {
                            return p ? null : l && e.dtm.show(!1)
                        }
                    },
                    Racp: {
                        source: r.source,
                        show: p ? this.state.Racp.show && "" !== this.state.inputText : this.state.Racp.show,
                        minimumStringQueryLength: r.minimumStringQueryLength,
                        minimumStringQuery: r.minimumStringQuery,
                        noMatchText: r.noMatchText,
                        searchKeyWord: this.state.Racp.searchKeyWord,
                        closeBtn: function() {
                            return e.racp.show(!1)
                        },
                        pressDown: function(t) {
                            return e.racp.pressDown(t)
                        },
                        changeKey: function(e) {
                            var t = e.AirlineInfoList
                              , n = []
                              , a = 0;
                            return t.forEach((function(e) {
                                var t = {};
                                t.txt = e.AirlineName + "(" + e.AirlineCode + ")",
                                t.dataIndex = a,
                                t.airline = e.AirlineCode,
                                n.push(t),
                                a++
                            }
                            )),
                            n
                        },
                        catalogue: [{
                            catalogueName: "",
                            catafilter: function(e) {
                                return e
                            }
                        }]
                    },
                    clickOutside: function() {
                        return e.Input_closeList()
                    },
                    selectedData: s || u,
                    onSelected: function(t) {
                        return e.Input_onSelected(t)
                    }
                })
            }
            ,
            t.prototype.render = function() {
                var e = this.props.device;
                return i.createElement(i.Fragment, null, e === d.Edevice.Mobile ? this.mobileRender() : this.pcRender())
            }
            ,
            t.defaultProps = u.defaultPropsCommon,
            t
        }(u.RacpCommonClass);
        t.default = p
    },
    172: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RacpCommonClass = t.defaultStateCommon = t.defaultPropsCommon = void 0;
        var i = n(0)
          , l = n(156)
          , c = n(26)
          , s = n(137);
        t.defaultPropsCommon = {
            device: s.Edevice.Mobile,
            isRequired: !1,
            placeholder: "",
            title: "",
            iconName: "toolmap",
            remindText: "找不到選項?請輸入關鍵字查詢",
            useDtm: !0,
            Dtm: {
                levelKey: [],
                fetchData: function() {
                    return !1
                },
                orderMaps: {}
            },
            Racp: {
                source: c.flightInternational.airlineAutoComplete,
                minimumStringQueryLength: 1,
                minimumStringQuery: "請至少輸入一個字",
                noMatchText: "很抱歉，找不到符合的項目"
            }
        },
        t.defaultStateCommon = {
            open: !0,
            inputText: "",
            finalText: "",
            mulitTemp: [],
            selectedData: [],
            Dtm: {
                show: !1,
                source: {}
            },
            Racp: {
                show: !1,
                searchKeyWord: ""
            }
        };
        var u = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.getProps = function() {
                    return l({}, t.defaultPropsCommon, n.props)
                }
                ,
                n.Input_onClick = function() {
                    var e = n.getProps()
                      , t = e.maxItem
                      , a = (e.multiItem,
                    n.state.inputText);
                    n.Input_closeList(!0, !1),
                    t ? "" !== a ? n.Input_closeList(!1, !0, a) : n.Input_closeList(!0, !1) : (n.state.selectedData.length || "" === n.state.inputText) && n.state.open || n.Input_closeList(!1, !0, a)
                }
                ,
                n.Input_onClear = function() {
                    n.setState({
                        selectedData: [],
                        inputText: ""
                    }, (function() {
                        n.inputChangeCallback()
                    }
                    )),
                    n.Input_closeList()
                }
                ,
                n.Input_onChange = function(e) {
                    n.setState({
                        inputText: e.target.value,
                        selectedData: []
                    }, (function() {
                        n.inputChangeCallback()
                    }
                    )),
                    "" === e.target.value ? n.Input_closeList(!0, !1) : n.Input_closeList(!1, !0, e.target.value)
                }
                ,
                n.Input_closeList = function(e, t, a, r) {
                    void 0 === e && (e = !1),
                    void 0 === t && (t = !1),
                    void 0 === a && (a = ""),
                    void 0 === r && (r = !1),
                    n.props.useDtm && n.dtm.show(e),
                    n.props.device === s.Edevice.Mobile && r && n.props.onInputChange(n.state.mulitTemp, r),
                    "" === a ? n.racp.show(t) : n.racp.show(t, a)
                }
                ,
                n.Input_onSelected = function(e) {
                    var t = n.getProps()
                      , a = t.maxItem;
                    t.multiItem;
                    n.setState({
                        selectedData: e,
                        inputText: a ? "" : "text"in e[0] ? e[0].text : e[0].txt
                    }, (function() {
                        n.inputChangeCallback()
                    }
                    ))
                }
                ,
                n.inputChangeCallback = function() {
                    n.props.onInputChange({
                        inputText: n.state.inputText,
                        selectedData: n.state.selectedData
                    }),
                    n.state.selectedData.length || "" !== n.state.inputText || n.setState({
                        open: !0
                    })
                }
                ,
                n
            }
            return r(n, e),
            Object.defineProperty(n.prototype, "dtm", {
                get: function() {
                    var e = this;
                    if (!e.props.useDtm)
                        return !1;
                    var t = e.getProps().Dtm.fetchData
                      , n = e.state.Dtm;
                    return {
                        fetchData: function() {
                            var a = t();
                            a instanceof Promise ? a.then((function(t) {
                                e.setState({
                                    Dtm: o(o({}, n), {
                                        source: t
                                    })
                                })
                            }
                            )) : e.setState({
                                Dtm: o(o({}, n), {
                                    source: a
                                })
                            })
                        },
                        show: function(e) {
                            this.setObj({
                                show: e
                            })
                        },
                        setObj: function(t) {
                            e.setState({
                                Dtm: o(o({}, n), t)
                            })
                        }
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "racp", {
                get: function() {
                    var e = this
                      , t = e.state.Racp;
                    return {
                        pressDown: function(t) {
                            e.setState({
                                selectedData: t,
                                open: !1
                            })
                        },
                        show: function(e, t) {
                            void 0 === t && (t = ""),
                            this.setObj({
                                show: e,
                                searchKeyWord: t
                            })
                        },
                        setObj: function(n) {
                            e.setState({
                                Racp: o(o({}, t), n)
                            })
                        }
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            n
        }(i.Component);
        t.RacpCommonClass = u
    },
    173: function(e, t, n) {
        e.exports = {
            "MMenuListDtmRacp-RemindText": "MMenuListDtmRacp-RemindText",
            "MMenuListDtmRacp-List": "MMenuListDtmRacp-List",
            ListStyle: "ListStyle",
            "ListStyle-close_btn": "ListStyle-close_btn",
            remindText: "remindText",
            "dtm_rcfr-wrap": "dtm_rcfr-wrap",
            dtm_rcfr: "dtm_rcfr",
            ntb_rcln: "ntb_rcln",
            search_panel_two: "search_panel_two",
            tabs: "tabs",
            "dtm_rcfr-close_btn": "dtm_rcfr-close_btn",
            "act_racp-future": "act_racp-future",
            section: "section",
            act_racp: "act_racp",
            noMatchText: "noMatchText",
            act_close: "act_close",
            act_wrap_container: "act_wrap_container"
        }
    },
    174: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0)
          , l = n(13)
          , c = n(150)
          , s = n(151)
          , u = n(141)
          , d = n(144)
          , p = n(175)
          , f = n(137);
        n(176);
        var h = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.commonClassname = "allDeviceMenuListDtmRajn",
                n.classnameM = "MMenuListDtmRajn",
                n.fetchDtm = function() {
                    n.props.useDtm && n.dtm.fetchData()
                }
                ,
                n.switchToDtm = function() {
                    n.setState({
                        showPopAttractions: !1
                    }),
                    n.Input_closeList(!0, !1)
                }
                ,
                n.switchToPop = function() {
                    n.setState({
                        showPopAttractions: !0
                    }),
                    n.Input_closeList(!1, !1)
                }
                ,
                n.useData = function() {
                    var e, t = n.props.device === f.Edevice.Mobile, a = n.getProps(), r = a.isRequired, o = a.placeholder, i = a.title, l = a.iconName, c = a.maxItem, s = a.itemsClick, u = a.multiItem, d = a.replaceRegular, p = a.onClickShow, h = "AirlineCompany" === n.props.customClass, m = function(e) {
                        switch (e) {
                        case "Xinflight":
                            return n.state.selectedData[0] && -1 !== n.state.inputText.indexOf(",") ? n.state.inputText.split(",")[1].trim() : n.state.inputText;
                        default:
                            return n.state.inputText
                        }
                    }(n.props.panelProps);
                    return {
                        _inputData: {
                            isRequired: r,
                            inputText: h && m.includes("LCC") ? (e = m,
                            e.replace(/\([^()]*\)/g, "")) : m,
                            title: i,
                            placeholder: o,
                            iconName: l,
                            replaceRegular: d
                        },
                        _inputEvent: {
                            onChange: function(e) {
                                n.Input_onChange(e.target.value),
                                n.setState({
                                    showPopAttractions: !1
                                })
                            },
                            onClick: function(e) {
                                if (n.props.isDetailPage && n.props.inputRef.current && n.Input_onChange(n.props.inputRef.current.value),
                                n.props.inputOnClick(),
                                n.props.Dtm.emptyApply)
                                    n.props.Dtm.emptyApply();
                                else {
                                    var a = n.state
                                      , r = a.selectedData
                                      , o = a.inputText;
                                    n.props.onClicktriggerFetch ? p && o.length < 2 ? n.Input_closeList(!1, !0, o) : n.Iniput_trigerFetch() : p ? n.Input_closeList(!1, !0, o) : (r.length > 0 ? "Menu" === r[0].SelectedBy || c ? n.Input_closeList(!0, !1) : n.props.Rajn.selectNoFetch ? n.Input_closeList(!1, !0, "" == n.state.finalText ? o : n.state.finalText) : n.Input_closeList(!1, !0, o) : ("activity" === n.props.panelProps && n.Iniput_trigerFetch(),
                                    "" !== o ? n.Input_closeList(!1, !0, o) : n.Input_closeList(!0, !1)),
                                    n.props.hotDestinations && !n.state.inputText && (t && n.state.Dtm.show ? (n.setState({
                                        showPopAttractions: !1
                                    }),
                                    n.Input_closeList(!0, !1)) : (n.setState({
                                        showPopAttractions: !0
                                    }),
                                    n.Input_closeList(!1, !1))))
                                }
                                "vacationSearch" === n.props.panelName && n.props.airlineList.length === n.state.Rajn.source.length && n.state.finalText && n.Iniput_trigerFetch()
                            },
                            onClear: function(e) {
                                var a;
                                if (void 0 === e && (e = null),
                                t) {
                                    n.props.panelProps;
                                    var r = n.state.Dtm.show;
                                    if (n.props.hotDestinations && r)
                                        return n.setState({
                                            showPopAttractions: !1
                                        }),
                                        void n.Input_onClear(!0, !1);
                                    if (n.props.hotDestinations && !r)
                                        return n.setState({
                                            showPopAttractions: !0
                                        }),
                                        void n.Input_onClear(!1, !1);
                                    n.Input_onClear(!0, !1)
                                } else if (n.Input_onClear(),
                                "setTourVacation" === n.props.panelName)
                                    for (var o = null === (a = e.closest(".location")) || void 0 === a ? void 0 : a.classList, i = 0; i < o.length; i++)
                                        "location-return" === o[i] ? n.props.clearStateInReducer(o[i]) : "location-forward" === o[i] && (n.props.clearStateInReducer("location-forward"),
                                        n.props.clearStateInReducer("location-return"))
                            },
                            onFocus: function(e) {
                                n.props.onFocus && n.props.onFocus(e)
                            },
                            onBlur: function(e) {
                                n.props.onBlur && n.props.onBlur(e)
                            }
                        },
                        _multiItems: {
                            maxItem: c || null,
                            multiItem: u || null,
                            itemsClick: function(e) {
                                s && s(e)
                            }
                        }
                    }
                }
                ,
                n.pcRender = function() {
                    var e, t = n.useData(), a = t._inputData, r = t._inputEvent, s = t._multiItems;
                    return i.createElement(c.default, {
                        tailoredClass: n.props.tailoredClass,
                        customClass: n.props.customClass,
                        onClick: function() {
                            n.Input_ClickOutChooseFirst(),
                            n.Input_closeList(),
                            n.setState({
                                showPopAttractions: !1
                            })
                        },
                        insertNode: n.props.insertNode
                    }, i.createElement("div", {
                        className: l.default("inputSkin_Parent", {
                            inputSkin_disabled: n.props.disabled
                        })
                    }, i.createElement(u.default, o({
                        showCancel: n.state.showCancel,
                        panelName: n.props.panelName
                    }, a, r, s, {
                        setRef: n.props.inputRef,
                        readOnly: null !== (e = n.props.disabled) && void 0 !== e ? e : n.props.disabledInput
                    }), n.listItemRender())))
                }
                ,
                n.mobileRender = function() {
                    var e = n.state
                      , t = e.inputText
                      , a = e.finalText
                      , r = e.mulitTemp
                      , l = e.selectedData
                      , s = e.lastSelected
                      , u = n.getProps()
                      , p = u.multiItem
                      , h = u.title
                      , m = u.mTitle
                      , v = u.placeholder
                      , y = u.remindText
                      , _ = u.mobileClass
                      , D = n.useData()
                      , T = D._inputData
                      , C = D._inputEvent
                      , g = D._multiItems
                      , S = n.props.device === f.Edevice.Mobile
                      , b = o(o(o({
                        inputText: function(e) {
                            switch (e) {
                            case "Xinflight":
                                return n.state.selectedData[0] && -1 !== n.state.inputText.indexOf(",") ? n.state.inputText.split(",")[1].trim() : n.state.inputText;
                            default:
                                return n.state.inputText
                            }
                        }(n.props.panelProps),
                        title: m || h,
                        placeholder: v
                    }, C), {
                        goBack: function() {
                            n.setState({
                                inputText: a,
                                selectedData: s || r || []
                            }, (function() {
                                n.props.hotDestinations && S && (n.state.inputText ? (n.setState({
                                    showPopAttractions: !1
                                }),
                                n.Input_closeList(!1, !0)) : (n.setState({
                                    showPopAttractions: !0
                                }),
                                n.Input_closeList(!1, !1))),
                                n.props.Rajn.selectNoFetch && l.length > 0 && ("AutoComplete" === l[0].SelectedBy || "Menu" === l[0].SelectedBy) || (n.Input_closeList(!1, !1, "", !0, !0),
                                n.rajn.onChange(a))
                            }
                            ))
                        },
                        confirm: function() {
                            if (n.props.maxItem)
                                new Promise((function(e) {
                                    n.Input_ClickOutChooseFirst(),
                                    e("完成多選補字預設選第一筆")
                                }
                                )).then((function(e) {
                                    n.setState({
                                        finalText: "",
                                        mulitTemp: n.props.multiItem,
                                        lastSelected: l
                                    }, (function() {
                                        n.Input_closeList(!1, !1, "", !1, !0)
                                    }
                                    ))
                                }
                                ));
                            else if (l && l.length)
                                n.setState({
                                    finalText: t,
                                    lastSelected: l
                                }, (function() {
                                    n.Input_closeList(!1, !1, "", !1, !0)
                                }
                                ));
                            else if (t)
                                if (n.state.Rajn.chooseFirst && !n.state.Rajn.clear) {
                                    n.Input_ClickOutChooseFirst();
                                    var e = n.state.Rajn.source.length ? n.state.Rajn.source[0].text : ""
                                      , a = n.state.Rajn.source.length ? n.state.Rajn.source[0] : [];
                                    n.setState({
                                        finalText: e,
                                        lastSelected: a
                                    }, (function() {
                                        n.Input_closeList(!1, !1, "", !1, !0)
                                    }
                                    ))
                                } else
                                    n.state.Rajn.chooseFirst || n.state.Rajn.clear || n.setState({
                                        finalText: t,
                                        lastSelected: l
                                    }, (function() {
                                        n.Input_closeList(!1, !1, "", !1, !0)
                                    }
                                    ));
                            else
                                n.setState({
                                    inputText: "",
                                    selectedData: []
                                }, (function() {
                                    n.Input_closeList(!1, !1, "", !1, !0)
                                }
                                ))
                        },
                        enterSend: function(e) {
                            if ("activity" === n.props.panelProps && 13 == e.keyCode) {
                                var t = n.state
                                  , a = t.selectedData
                                  , r = {
                                    Destination: {
                                        inputText: t.inputText,
                                        selectedData: a
                                    }
                                };
                                n.props.submitCallBack && n.props.submitCallBack(r)
                            }
                        }
                    }), g);
                    return i.createElement("div", {
                        className: n.classnameM
                    }, i.createElement(c.default, {
                        tailoredClass: n.props.tailoredClass,
                        customClass: n.props.customClass,
                        onClick: function() {}
                    }, i.createElement(d.default, o({}, T, {
                        panelName: n.props.panelName,
                        slideClass: _,
                        multiItem: p || null,
                        page: b,
                        insertNode: n.props.insertNode,
                        remindText: y,
                        dtmShow: !n.state.Rajn.show || "" === n.state.inputText,
                        panelProps: n.props.panelProps,
                        submitCurrentState: n.props.submitCurrentState,
                        hotKeywordContent: n.props.hotKeywordContent,
                        disabledOpen: n.props.disabled
                    }), n.listItemRender())))
                }
                ,
                n.state = o(o({}, p.defaultStateCommon), {
                    inputText: n.props.inputText || "",
                    finalText: n.props.inputText || "",
                    mulitTemp: [],
                    selectedData: n.props.selectedData || [],
                    lastSelected: n.props.selectedData || [],
                    Rajn: o(o({}, p.defaultStateCommon.Rajn), {
                        chooseFirst: !n.props.Rajn.hasOwnProperty("chooseFirst") || n.props.Rajn.chooseFirst,
                        clear: !!n.props.Rajn.hasOwnProperty("clear") && n.props.Rajn.clear
                    }),
                    showPopAttractions: !1,
                    showCancel: !1
                }),
                n
            }
            return r(t, e),
            t.prototype.componentDidMount = function() {
                this.fetchDtm(),
                "" !== this.props.inputText && this.rajn && this.props.useRajn && this.rajn.onChange(this.props.inputText)
            }
            ,
            t.prototype.componentDidUpdate = function(e, t) {
                var n = this.props.device === f.Edevice.Mobile;
                t.inputText !== this.state.inputText && ("" === this.state.inputText || (this.props.useDtm && this.dtm.show(!1),
                this.props.Rajn.fixList ? 0 === this.state.selectedData.length && this.rajn && this.props.useRajn && this.rajn.onChange(this.props.useInputTextToSearch ? this.state.inputText : this.state.Rajn.searchKeyWord) : this.rajn && this.props.useRajn && this.rajn.onChange(this.props.useInputTextToSearch ? this.state.inputText : this.state.Rajn.searchKeyWord))),
                this.props.Dtm.fetchData !== e.Dtm.fetchData && this.fetchDtm(),
                this.props.inputText !== e.inputText && (this.setState({
                    inputText: this.props.inputText,
                    finalText: this.props.inputText
                }),
                this.state.Rajn.chooseFirst && !this.state.Rajn.clear && (this.props.Rajn.selectNoFetch || this.rajn && this.props.useRajn && this.rajn.onChange(this.props.inputText))),
                this.props.selectedData !== e.selectedData && this.setState({
                    selectedData: this.props.selectedData,
                    lastSelected: this.props.selectedData,
                    inputText: this.props.inputText,
                    finalText: this.props.inputText
                }),
                this.props.Rajn.chooseFirst !== e.Rajn.chooseFirst && this.setState({
                    Rajn: o(o({}, this.state.Rajn), {
                        chooseFirst: this.props.Rajn.chooseFirst
                    })
                }),
                this.props.Rajn.clear !== e.Rajn.clear && this.setState({
                    Rajn: o(o({}, this.state.Rajn), {
                        clear: this.props.Rajn.clear
                    })
                }),
                n && this.state.shouldUpdateMultiTemp && this.props.multiItem !== e.multiItem && this.setState({
                    mulitTemp: this.props.multiItem,
                    shouldUpdateMultiTemp: !1
                })
            }
            ,
            t.prototype.close_DtmBtn = function() {
                this.dtm.show(!1),
                this.setState({
                    OpenDtm: !1
                })
            }
            ,
            t.prototype.listItemRender = function() {
                var e = this
                  , t = this.getProps()
                  , n = t.Dtm
                  , a = t.Rajn
                  , r = t.remindText
                  , o = t.useDtm
                  , l = t.useRajn
                  , c = t.multiItem
                  , u = t.customClass
                  , d = t.onClickShow
                  , p = t.hotDestinations
                  , h = t.onClicktriggerFetch
                  , m = t.device
                  , v = t.title;
                n.activeTabIndex = "travel" === this.props.panelProps ? 1 : n.activeTabIndex;
                var y = this.state.selectedData
                  , _ = !0
                  , D = m === f.Edevice.Mobile;
                this.state.Dtm.show ? (_ = y.length > 0 && "Menu" === y[0].SelectedBy || "" === this.state.inputText,
                "activity" === this.props.panelProps && 0 === this.state.Rajn.source.length && (_ = !0)) : (_ = !1,
                D && "hotel" === this.props.panelProps && !1 === this.state.Rajn.show && (_ = !0));
                var T = !(!l || !e.state.Rajn.show || e.props.disabled || !d && "" === e.state.inputText);
                return i.createElement(s.default, {
                    customClass: D ? this.commonClassname + " " + this.classnameM + "-List " + u : this.commonClassname + " " + (u || ""),
                    Dtm: {
                        source: this.state.Dtm.source,
                        show: o && _ && !this.props.disabled,
                        remindText: _ && !D ? r : "",
                        levelKey: n.levelKey,
                        closeBtn: function() {
                            e.close_DtmBtn()
                        },
                        orderMaps: n.orderMaps,
                        replaceRegular: n.replaceRegular,
                        activeTabIndex: n.activeTabIndex
                    },
                    Rajn: {
                        titleClass: a.titleClass,
                        source: this.state.Rajn.source,
                        searchKeyWord: this.props.Rajn.selectNoFetch ? this.state.inputText : this.state.Rajn.searchKeyWord,
                        fetchKeyword: this.state.Rajn.fetchKeyword,
                        show: T,
                        noMatchText: a.noMatchText,
                        minimumStringQuery: a.minimumStringQuery,
                        minimumStringQueryLength: a.minimumStringQueryLength,
                        closeBtn: function() {
                            e.rajn.show(!1),
                            e.state.Rajn.source.length && e.state.selectedData.length || e.Input_onClear()
                        },
                        pressDown: function(t, n) {
                            e.rajn.pressDown(t, n)
                        },
                        enterClose: function() {
                            D || e.rajn.show(!1)
                        },
                        footer: a.footer,
                        rules: a.rules.length > 0 ? a.rules : this.state.Rajn.rules,
                        fetchStatus: !!h || this.state.Rajn.fetchStatus,
                        useHierarchyRender: a.useHierarchyRender,
                        noShowCityName: a.noShowCityName
                    },
                    PopAttractions: {
                        hotDestinations: p,
                        showPopAttractions: this.state.showPopAttractions,
                        switchToDtm: this.switchToDtm
                    },
                    clickOutside: function() {
                        return e.Input_closeList()
                    },
                    selectedData: c || y,
                    onSelected: function(t) {
                        return e.Input_onSelected(t)
                    },
                    panelProps: this.props.panelProps,
                    JSXofHistory: this.props.JSXofHistory ? this.props.JSXofHistory : null,
                    switchToPop: this.switchToPop,
                    activitySubmit: this.props.activitySubmit,
                    device: this.props.device,
                    inputTitle: v
                })
            }
            ,
            t.prototype.render = function() {
                var e = this.props.device;
                return i.createElement(i.Fragment, null, e === f.Edevice.Mobile ? this.mobileRender() : this.pcRender())
            }
            ,
            t.defaultProps = p.defaultPropsCommon,
            t
        }(p.RajnCommonClass);
        t.default = h
    },
    175: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        , i = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        , l = this && this.__spread || function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(i(arguments[t]));
            return e
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RajnCommonClass = t.defaultPropsCommon = t.defaultStateCommon = void 0;
        var c = n(0)
          , s = n(156)
          , u = n(137);
        t.defaultStateCommon = {
            open: !0,
            inputText: "",
            finalText: "",
            mulitTemp: [],
            selectedData: [],
            lastSelected: [],
            Dtm: {
                source: {},
                show: !1,
                remindText: "下方找不到選項?請輸關鍵字查詢 / 最多可選3則目的地"
            },
            Rajn: {
                rules: [],
                source: [],
                show: !1,
                searchKeyWord: "",
                selectNoFetch: !1,
                isLoad: !1,
                fetchStatus: !1
            },
            shouldUpdateMultiTemp: !0
        },
        t.defaultPropsCommon = {
            device: u.Edevice.Mobile,
            isRequired: !1,
            placeholder: "",
            title: "",
            defaultSelectData: [],
            remindText: "下方找不到選項?請輸入關鍵字查詢",
            useDtm: !0,
            Dtm: {
                levelKey: [],
                fetchData: function() {
                    return !1
                },
                orderMaps: {}
            },
            useRajn: !0,
            Rajn: {
                minimumStringQueryLength: 1,
                minimumStringQuery: "請至少輸入一個字",
                noMatchText: "很抱歉，找不到符合的項目",
                fetchKeyword: "",
                fetchData: function() {
                    return !1
                },
                rules: [],
                useHierarchyRender: !1,
                noShowCityName: []
            },
            inputOnClick: function() {},
            onClicktriggerFetch: !1,
            onClickShow: !1,
            useInputTextToSearch: !1
        };
        var d = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.getProps = function() {
                    return s({}, t.defaultPropsCommon, n.props)
                }
                ,
                n.Iniput_trigerFetch = function() {
                    var e = n.getProps().Rajn.fetchData
                      , t = n.getProps()
                      , a = t.inputText
                      , r = t.panelProps
                      , i = n.state.Rajn;
                    n.setState({
                        Rajn: o(o({}, i), {
                            show: !0,
                            source: [],
                            searchKeyWord: a
                        })
                    }, (function() {
                        e(a).then((function(e) {
                            if (e) {
                                var t = e.data
                                  , a = e.searchKeyWord;
                                n.setState({
                                    Rajn: o(o({}, i), {
                                        show: !0,
                                        source: r && "activity" === r ? t : t.Destinations,
                                        searchKeyWord: a,
                                        isLoad: !1,
                                        fetchStatus: !0
                                    })
                                })
                            } else
                                n.setState({
                                    Rajn: o(o({}, i), {
                                        isLoad: !1
                                    })
                                })
                        }
                        ))
                    }
                    ))
                }
                ,
                n.Input_onClick = function() {
                    var e = n.getProps().maxItem
                      , t = n.state.inputText;
                    n.Input_closeList(!0, !1),
                    e ? "" !== t ? n.Input_closeList(!1, !0, t) : n.Input_closeList(!0, !1) : (n.state.selectedData.length || "" === n.state.inputText) && n.state.open || n.Input_closeList(!1, !0, t)
                }
                ,
                n.Input_onClear = function(e, t) {
                    void 0 === e && (e = !1),
                    void 0 === t && (t = !1),
                    n.setState({
                        selectedData: [],
                        inputText: "",
                        lastSelected: n.state.selectedData
                    }, (function() {
                        n.inputChangeCallback()
                    }
                    )),
                    n.Input_closeList(e, t)
                }
                ,
                n.Input_onChange = function(e) {
                    if (n.setState({
                        inputText: e,
                        selectedData: []
                    }, (function() {
                        n.inputChangeCallback()
                    }
                    )),
                    "" === e) {
                        var t = n.state.Rajn;
                        n.Input_closeList(!0, !1),
                        n.setState({
                            Rajn: o(o({}, t), {
                                source: []
                            })
                        })
                    } else
                        n.Input_closeList(!1, !0, e, n.props.device === u.Edevice.Mobile && !n.props.maxItem, !0)
                }
                ,
                n.Input_closeList = function(e, t, a, r, o) {
                    void 0 === e && (e = !1),
                    void 0 === t && (t = !1),
                    void 0 === a && (a = ""),
                    void 0 === r && (r = !1),
                    void 0 === o && (o = !1),
                    n.props.useDtm && n.dtm.show(e);
                    var i = {
                        inputText: a || n.state.inputText,
                        selectedData: n.state.selectedData
                    };
                    n.props.onValueChange && n.props.onValueChange(i),
                    n.props.device === u.Edevice.Mobile && o && (n.props.maxItem ? n.props.onInputChange(n.state.mulitTemp, r) : n.props.onInputChange({
                        inputText: a || n.state.inputText,
                        selectedData: n.state.selectedData
                    }, r)),
                    "" === a ? n.rajn && n.rajn.show(t) : n.rajn && n.rajn.show(t, a)
                }
                ,
                n.Input_onSelected = function(e) {
                    var t = n.getProps()
                      , a = t.maxItem
                      , r = (t.multiItem,
                    t.device);
                    n.setState({
                        selectedData: e,
                        inputText: a ? "" : "text"in e[0] ? e[0].text : e[0].txt
                    }, (function() {
                        var t = "Menu" === e[0].SelectedBy;
                        a ? r !== u.Edevice.PC && n.Input_closeList(!0, !1) : r === u.Edevice.PC ? (n.Input_closeList(),
                        "hotel" === n.props.panelProps && "search" === n.props.typeName && n.props.setOrderOfHotelPanelInput((function(e) {
                            return "CalendarPc"
                        }
                        ))) : n.Input_closeList(t, !t, n.state.inputText),
                        n.inputChangeCallback(!0)
                    }
                    ))
                }
                ,
                n.inputChangeCallback = function(e) {
                    (n.props.device !== u.Edevice.Mobile || n.props.maxItem || "activity" === n.props.panelProps) && n.props.onInputChange({
                        inputText: n.state.inputText,
                        selectedData: n.state.selectedData
                    }, !1, e),
                    n.state.selectedData.length || "" !== n.state.inputText || (n.setState({
                        open: !0
                    }),
                    n.props.onInputChange({
                        inputText: n.state.inputText,
                        selectedData: n.state.selectedData
                    }))
                }
                ,
                n.Input_ClickOutChooseFirst = function() {
                    n.state.Rajn.chooseFirst && n.state.Rajn.show && (n.state.Rajn.source.length && n.state.inputText ? n.Input_onSelected(l(n.state.Rajn.source[0])) : n.Input_onClear())
                }
                ,
                n
            }
            return r(n, e),
            Object.defineProperty(n.prototype, "dtm", {
                get: function() {
                    var e = this;
                    if (!e.props.useDtm)
                        return !1;
                    var t = e.getProps().Dtm.fetchData
                      , n = e.state.Dtm;
                    return {
                        fetchData: function() {
                            var a = t();
                            a instanceof Promise ? a.then((function(t) {
                                e.setState({
                                    Dtm: o(o({}, n), {
                                        source: t
                                    })
                                })
                            }
                            )) : e.setState({
                                Dtm: o(o({}, n), {
                                    source: a
                                })
                            })
                        },
                        show: function(e) {
                            this.setObj({
                                show: e
                            })
                        },
                        setObj: function(t) {
                            e.setState({
                                Dtm: o(o({}, n), t)
                            })
                        }
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "rajn", {
                get: function() {
                    var e = this;
                    if (!e.props.useRajn)
                        return !1;
                    var t = e.state.Rajn;
                    return {
                        onChange: function(n) {
                            var a = this;
                            e.setState({
                                Rajn: o(o({}, t), {
                                    isLoad: !0
                                })
                            }, (function() {
                                a.fetchData(n)
                            }
                            ))
                        },
                        fetchData: function(n) {
                            var a = (0,
                            e.getProps().Rajn.fetchData)(n)
                              , r = e.getProps().panelProps;
                            e.setState({
                                Rajn: o(o({}, t), {
                                    source: [],
                                    fetchStatus: !1
                                })
                            }, (function() {
                                a.then((function(n) {
                                    if (n) {
                                        var a = n.data
                                          , i = n.searchKeyWord;
                                        n.fetchKeyword;
                                        e.setState({
                                            Rajn: o(o({}, t), {
                                                rules: a.rules || [],
                                                source: r && "activity" === r ? a : a.Destinations,
                                                searchKeyWord: i,
                                                fetchKeyword: i,
                                                isLoad: !1,
                                                fetchStatus: !0,
                                                show: e.state.Rajn.show
                                            })
                                        })
                                    } else
                                        e.setState({
                                            Rajn: o(o({}, t), {
                                                isLoad: !1,
                                                fetchStatus: !1
                                            })
                                        })
                                }
                                ))
                            }
                            ))
                        },
                        pressDown: function(t, n) {
                            e.setState({
                                selectedData: t,
                                open: !1
                            }),
                            "choosed" === n && (e.getProps().device === u.Edevice.PC ? e.Input_closeList() : e.Input_closeList(!1, !0, e.state.inputText))
                        },
                        show: function(e, t) {
                            void 0 === t && (t = ""),
                            this.setObj({
                                show: e,
                                searchKeyWord: t
                            })
                        },
                        setObj: function(n) {
                            e.setState({
                                Rajn: o(o({}, t), n)
                            })
                        }
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            n
        }(c.Component);
        t.RajnCommonClass = d
    },
    176: function(e, t, n) {
        e.exports = {
            allDeviceMenuListDtmRajn: "allDeviceMenuListDtmRajn",
            act_wrap_container: "act_wrap_container",
            act_rajn: "act_rajn",
            item: "item",
            hierarchyRajn: "hierarchyRajn",
            "MMenuListDtmRajn-RemindText": "MMenuListDtmRajn-RemindText",
            "MMenuListDtmRajn-List": "MMenuListDtmRajn-List",
            ListStyle: "ListStyle",
            "ListStyle-close_btn": "ListStyle-close_btn",
            remindText: "remindText",
            "dtm_rcfr-wrap": "dtm_rcfr-wrap",
            dtm_rcfr: "dtm_rcfr",
            ntb_rcln: "ntb_rcln",
            search_panel_two: "search_panel_two",
            tabs: "tabs",
            "dtm_rcfr-close_btn": "dtm_rcfr-close_btn",
            "act_racp-future": "act_racp-future",
            section: "section",
            act_racp: "act_racp",
            noMatchText: "noMatchText",
            act_close: "act_close",
            one_floor: "one_floor",
            "act_rajn-result": "act_rajn-result",
            "m-place": "m-place",
            close: "close"
        }
    },
    179: function(e, t, n) {
        e.exports = {
            FooterSearch: "FooterSearch",
            FooterSearch_searchBtn: "FooterSearch_searchBtn",
            FooterSearch_mSearchResult: "FooterSearch_mSearchResult",
            FooterSearch_cancelBtn: "FooterSearch_cancelBtn"
        }
    },
    181: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , o = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , i = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
          , l = this && this.__values || function(e) {
            var t = "function" == typeof Symbol && Symbol.iterator
              , n = t && e[t]
              , a = 0;
            if (n)
                return n.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && a >= e.length && (e = void 0),
                        {
                            value: e && e[a++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
          , c = this && this.__spread || function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(i(arguments[t]));
            return e
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.urlToAirline = void 0;
        var s = n(0)
          , u = n(13)
          , d = n(140)
          , p = n(187)
          , f = n(161)
          , h = n(209)
          , m = n(138)
          , v = n(154)
          , y = n(160)
          , _ = n(188)
          , D = n(189)
          , T = n(146)
          , C = n(177)
          , g = n(137)
          , S = n(139)
          , b = n(190)
          , w = n(178)
          , E = n(148)
          , N = n(26)
          , x = n(142)
          , P = s.useEffect
          , k = s.useState
          , O = s.useRef;
        t.default = function(e) {
            var n, M = e.device, L = e.type, I = e.insertNode, j = e.intldtmOption, B = (e.mCloseBtn,
            e.rowSkin), K = e.renderNode, Y = S.useConnect(), F = Y.state, H = Y.dispatch, W = i(k(!1), 2), U = W[0], J = W[1], V = i(k(!1), 2), G = V[0], q = V[1], Q = i(s.useState(JSON.parse(localStorage.getItem("flightHistory_queryKey"))), 2), Z = Q[0], z = Q[1], X = i(k(!1), 2), $ = X[0], ee = X[1], te = O(0), ne = function(e, t) {
                var n, r, o = e.inputText.split("_").slice(1);
                if (o[1]) {
                    var i = (c = t.Destinations.find((function(e) {
                        return e.cityCode === o[0]
                    }
                    ))).airport.find((function(e) {
                        return e.airportCode === o[1]
                    }
                    ))
                      , l = a(a({}, c), i);
                    delete l.airport,
                    r = i ? {
                        inputText: l.text,
                        selectedData: [l]
                    } : {
                        inputText: "",
                        selectedData: []
                    }
                } else {
                    var c = t.Destinations.find((function(e) {
                        return e.cityCode === o[0]
                    }
                    ));
                    delete (n = a(a({}, c), {
                        airportCode: ""
                    })).airport,
                    r = c ? {
                        inputText: n.text,
                        selectedData: [n]
                    } : {
                        inputText: "",
                        selectedData: []
                    }
                }
                return r
            };
            function ae(e, t, n) {
                void 0 === n && (n = !1);
                var r = [];
                if (n) {
                    var o = []
                      , i = []
                      , l = []
                      , c = [];
                    for (e.Destinations.forEach((function(e) {
                        var n, r, c, s;
                        if (e.text.includes(t) || (null === (n = e.cityEName) || void 0 === n ? void 0 : n.toUpperCase().includes(t))) {
                            var u = (p = e.airport || []).map((function(t) {
                                return a(a({}, e), t)
                            }
                            ));
                            u.unshift(a(a({}, e), {
                                airportCode: ""
                            })),
                            o.push(u)
                        } else {
                            var d = [];
                            if (null === (r = e.airport) || void 0 === r || r.forEach((function(n) {
                                n.text.includes(t) && d.push(a(a({}, e), n))
                            }
                            )),
                            d.length > 0)
                                d.unshift(a(a({}, e), {
                                    airportCode: ""
                                })),
                                i.push(d);
                            else if (e.countryName.includes(t) || e.countryCode.includes(t) || (null === (c = e.cityEName) || void 0 === c ? void 0 : c.includes(t)) || (null === (s = e.countryEName) || void 0 === s ? void 0 : s.includes(t))) {
                                var p = e.airport || [];
                                (d = p.map((function(t) {
                                    return a(a({}, e), t)
                                }
                                ))).unshift(a(a({}, e), {
                                    airportCode: ""
                                })),
                                l.push(d)
                            }
                        }
                    }
                    )); c.length < 10 && (0 !== o.length || 0 !== i.length || 0 !== l.length); )
                        o.length > 0 ? c.push(o.shift()) : i.length > 0 ? c.push(i.shift()) : l.length > 0 && c.push(l.shift());
                    r = c = (c = c.reduce((function(e, t) {
                        return delete t.airport,
                        e.concat(t)
                    }
                    ), [])).map((function(e) {
                        return delete e.airport,
                        e
                    }
                    ))
                } else
                    r = e.Destinations.filter((function(e) {
                        return -1 !== e.txt.toUpperCase().indexOf(t)
                    }
                    ));
                return {
                    Destinations: r
                }
            }
            function re(e, t, n, r) {
                if (e.inputText) {
                    if (!e.selectedData.length && !/([\u4E00-\u9FA5]+$)|(d+$)|([a-zA-Z])|[0-9]/.test(e.inputText))
                        return;
                    if (r)
                        return;
                    if (e instanceof Array && 0 === e.length)
                        return
                }
                var o = {
                    idx: n
                };
                if (e.selectedData.length > 0)
                    if ("Menu" === e.selectedData[0].SelectedBy) {
                        var i = e.selectedData[0].value.split("-")
                          , l = j.PlaceDtm.FullCityName[i[1]][i[2]][0]
                          , c = l.slice(l.lastIndexOf("(") + 1, -1)
                          , s = j.PlaceDtm.FullCityName[i[1]][i[2]][1]
                          , u = i[2];
                        o[t] = {
                            inputText: s.replace(/\<(.*)\>/, ""),
                            selectedData: [a(a({}, e.selectedData[0]), {
                                countryCode: c,
                                cityCode: u
                            })]
                        }
                    } else
                        "AutoComplete" === e.selectedData[0].SelectedBy ? o[t] = {
                            inputText: e.inputText,
                            selectedData: [a({}, e.selectedData[0])]
                        } : o[t] = e;
                else
                    o[t] = e;
                H({
                    type: "Departure" === t ? "SET_DEP" : "SET_DEST",
                    payload: o
                })
            }
            P((function() {
                return j.PlaceAct && p.FlightInitialState(S.EPanelKeys.internationalFlight, p.defaultData, F.SeoDep, L, (function(e) {
                    if (L === f.FlightType.Result && (e.DepDest.forEach((function(e, t) {
                        e.Departure.inputText && (e.Departure = ne(e.Departure, j.PlaceAct)),
                        e.Destination.inputText && (e.Destination = ne(e.Destination, j.PlaceAct))
                    }
                    )),
                    e.Airline && (e.Airline = t.urlToAirline(e.Airline.inputText, j.AirlineAct))),
                    L === f.FlightType.SEO) {
                        var n = "" !== e.DepDest[0].Destination.inputText
                          , r = j.PlaceAct.Destinations.find((function(t) {
                            return -1 !== t.text.indexOf(e.DepDest[0].Destination.inputText)
                        }
                        ));
                        e.DepDest[0].Destination = {
                            inputText: n ? r.text : "",
                            selectedData: n ? [a({}, r)] : []
                        }
                    }
                    H({
                        type: "SET_INITSTATE",
                        payload: {
                            data: e
                        }
                    }),
                    J(e.isTaiwanLine),
                    q(!0)
                }
                )),
                function() {}
            }
            ), [j.PlaceAct]),
            P((function() {
                var e, t, n, a, r, o, c, s, u, d, p, f, h, m, v = function(e, t) {
                    if (F.Rtow < 2 && e < 1)
                        if ("TW" === (null === (a = null === (n = t.Departure) || void 0 === n ? void 0 : n.selectedData[0]) || void 0 === a ? void 0 : a.countryCode) && "TW" === (null === (o = null === (r = t.Destination) || void 0 === r ? void 0 : r.selectedData[0]) || void 0 === o ? void 0 : o.countryCode))
                            H({
                                type: "SET_ISTAIWANLINE",
                                payload: {
                                    isTaiwanLine: !0
                                }
                            });
                        else {
                            if (void 0 === (null === (s = null === (c = t.Departure) || void 0 === c ? void 0 : c.selectedData[0]) || void 0 === s ? void 0 : s.countryCode) || void 0 === (null === (d = null === (u = t.Destination) || void 0 === u ? void 0 : u.selectedData[0]) || void 0 === d ? void 0 : d.countryCode))
                                return "break";
                            H({
                                type: "SET_ISTAIWANLINE",
                                payload: {
                                    isTaiwanLine: !1
                                }
                            })
                        }
                    else
                        "TW" === (null === (f = null === (p = t.Departure) || void 0 === p ? void 0 : p.selectedData[0]) || void 0 === f ? void 0 : f.countryCode) && "TW" === (null === (m = null === (h = t.Destination) || void 0 === h ? void 0 : h.selectedData[0]) || void 0 === m ? void 0 : m.countryCode) && F.Rtow > 1 && setTimeout((function() {
                            alert("提醒您，多目的地目前僅提供國際線航班查詢"),
                            H({
                                type: "SET_DEST",
                                payload: {
                                    idx: e,
                                    Destination: {
                                        inputText: "",
                                        selectedData: []
                                    }
                                }
                            }),
                            H({
                                type: "SET_ISTAIWANLINE",
                                payload: {}
                            }),
                            H({
                                type: "SET_PEOPLE&CABIN",
                                payload: {
                                    peopleCabin: {
                                        Clskd: 0,
                                        Adult: 1,
                                        Child: 0,
                                        Infant: 0,
                                        Elder: 0
                                    }
                                }
                            })
                        }
                        ), 300);
                    t.Departure && "" !== t.Departure.inputText && t.Destination && "" !== t.Destination.inputText && (te.current > 0 && ee(!0),
                    te.current++)
                };
                try {
                    for (var y = l(F.DepDest.entries()), _ = y.next(); !_.done; _ = y.next()) {
                        var D = i(_.value, 2);
                        if ("break" === v(D[0], D[1]))
                            break
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        _ && !_.done && (t = y.return) && t.call(y)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
            }
            ), [F.DepDest, F.Rtow]),
            P((function() {
                F.isTaiwanLine !== U && F.Rtow < 2 && G && (H({
                    type: "SET_PEOPLE&CABIN",
                    payload: {
                        peopleCabin: {
                            Clskd: 0,
                            Adult: 1,
                            Child: 0,
                            Infant: 0,
                            Elder: 0
                        }
                    }
                }),
                H({
                    type: "SET_AIRLINE",
                    payload: {
                        Airline: null
                    }
                }),
                J(F.isTaiwanLine),
                $ && setTimeout((function() {
                    alert("因航程變更請重新選擇乘客人數與艙等")
                }
                ), 300))
            }
            ), [F.isTaiwanLine]),
            P((function() {
                G && F.DepDest[0].Departure.inputText && F.DepDest[0].Destination.inputText && ee(!0)
            }
            ), [G]),
            P((function() {
                Z && Z.length > 0 && me(Z)
            }
            ), []);
            var oe = {
                customClass: "PC" === M ? "flightGo" : "flightGoM",
                device: "PC" === M ? g.Edevice.PC : g.Edevice.Mobile,
                isRequired: !0,
                placeholder: "城市/國家/機場",
                title: "出發地",
                iconName: "",
                remindText: "找不到？改用 關鍵字 查查吧！",
                mobileClass: "flightMobile",
                useDtm: !0,
                replaceRegular: /([\(]+[\u4e00-\u9fa5/]+[\)])/,
                Dtm: {
                    levelKey: ["Line", "Country", "City"],
                    fetchData: function() {
                        return j.PlaceDtm
                    },
                    orderMaps: {
                        Line: ["_9", "_5", "_6", "_7", "_1", "_3", "_4", "_0"]
                    },
                    activeTabIndex: 0
                },
                Rajn: {
                    minimumStringQueryLength: 1,
                    minimumStringQuery: "請輸入至少一個字",
                    noMatchText: "很抱歉，找不到符合的項目",
                    footer: !1,
                    rules: [],
                    fixList: !0,
                    useHierarchyRender: !0
                }
            }
              , ie = a(a({}, oe), {
                title: "目的地",
                customClass: "PC" === M ? "flightBack" : "flightBackM",
                replaceRegular: /([\(]+[\u4e00-\u9fa5/]+[\)])/,
                Dtm: {
                    levelKey: ["Line", "Country", "City"],
                    fetchData: function() {
                        return j.PlaceDtm
                    },
                    orderMaps: {
                        Line: ["_5", "_6", "_7", "_1", "_3", "_4", "_0", "_9"]
                    },
                    replaceRegular: /(-[\w| ]+[\(]+[A-Za-z]+[\)])/,
                    activeTabIndex: 0
                }
            })
              , le = {
                customClass: "AirlineCompany",
                device: "PC" === M ? g.Edevice.PC : g.Edevice.Mobile,
                isRequired: !1,
                title: "航空公司",
                mobileClass: "flightMobile",
                iconName: "",
                inputText: F.Airline ? F.Airline.inputText : "",
                selectedData: F.Airline ? F.Airline.selectedData : [],
                onInputChange: function(e, t) {
                    if ((!e.inputText || /([\u4E00-\u9FA5]+$)|(d+$)|([a-zA-Z])|[0-9]/.test(e.inputText)) && !(t || e instanceof Array && 0 === e.length)) {
                        var n = "" === e.inputText ? null : e;
                        H({
                            type: "SET_AIRLINE",
                            payload: {
                                Airline: n
                            }
                        })
                    }
                },
                remindText: "找不到？改用 關鍵字 查查吧！",
                useDtm: !0,
                Dtm: {
                    levelKey: ["Line", "Country", "City"],
                    fetchData: function() {
                        return j.AirlineDtm
                    }
                },
                Rajn: {
                    titleClass: "d-no",
                    minimumStringQueryLength: 1,
                    minimumStringQuery: "請輸入至少一個字",
                    noMatchText: "很抱歉，找不到符合的項目",
                    fetchData: function(e) {
                        return r(void 0, void 0, void 0, (function() {
                            var t, n, a, r;
                            return o(this, (function(o) {
                                return t = e ? e.toUpperCase() : F.Airline ? F.Airline.inputText : "",
                                n = ae(j.AirlineAct, t, !1),
                                a = function(e) {
                                    return e.replace(/\([^()]*\)/g, "")
                                }
                                ,
                                (null == (r = n.Destinations[0]) ? void 0 : r.cityCode.includes("LCC")) && (r.txt = a(r.txt)),
                                [2, {
                                    data: n,
                                    searchKeyWord: t
                                }]
                            }
                            ))
                        }
                        ))
                    },
                    rules: [{
                        title: "航空公司"
                    }],
                    fixList: !0,
                    useHierarchyRender: !1
                }
            }
              , ce = i(s.useState({
                type: !1,
                date: ""
            }), 2)
              , se = ce[0]
              , ue = ce[1]
              , de = function(e) {
                var t = d().add(24, "hour").format("YYYY-MM-DD");
                return 0 === e && F.Date[0].start ? ("PC" === M ? se.type : !se.type) ? t : F.Date[0].start : t
            }
              , pe = {
                isRequired: [!0, !0],
                middle: "wave",
                iconName: "",
                doubleCalendar: !0,
                panelProps: "flightMcalendar",
                maxDate: d().add(360, "day").format("YYYY-MM-DD"),
                startTitle: "去程日期",
                endTitle: "回程日期",
                dateStartTxt: "去程",
                dateEndTxt: "回程",
                startMonth: d().add(24, "hour").format("YYYY-MM"),
                confirm: "確認",
                submitCallback: function(e, t) {
                    return H({
                        type: "SET_DATE",
                        payload: {
                            idx: 0,
                            Date: {
                                start: e,
                                end: t
                            }
                        }
                    })
                },
                insertNode: I,
                inputStatusCallback: function(e, t) {
                    ue({
                        type: e,
                        date: t
                    })
                }
            }
              , fe = function(e) {
                if (0 === e)
                    return d().add(24, "hour").format("YYYY-MM-DD");
                if (F.Date)
                    for (var t = e; t--; t < 0)
                        if (F.Date[t].start)
                            return F.Date[t].start
            }
              , he = function(e) {
                return e && e.selectedData && 0 !== e.selectedData.length ? e.selectedData : []
            }
              , me = function(e) {
                var t = d()
                  , n = [{
                    panelName: "travel",
                    resetTime: {
                        yy: 2022,
                        mm: 1,
                        dd: 3,
                        h: 12,
                        m: 0,
                        s: 0
                    }
                }, {
                    panelName: "activity",
                    resetTime: {
                        yy: 2025,
                        mm: 5,
                        dd: 19,
                        h: 11,
                        m: 0,
                        s: 0
                    }
                }, {
                    panelName: "taiwanVacation",
                    resetTime: {
                        yy: 2020,
                        mm: 9,
                        dd: 30,
                        h: 0,
                        m: 0,
                        s: 0
                    }
                }, {
                    panelName: "hotel",
                    resetTime: {
                        yy: 2021,
                        mm: 7,
                        dd: 1,
                        h: 12,
                        m: 0,
                        s: 0
                    }
                }, {
                    panelName: "B2B_uplan_Travel",
                    resetTime: {
                        yy: 2021,
                        mm: 4,
                        dd: 1,
                        h: 0,
                        m: 0,
                        s: 0
                    }
                }].find((function(e) {
                    return "flight" === e.panelName
                }
                ))
                  , a = e.filter((function(e) {
                    return t.diff(d(e.PostTime), "days") < 90 && d("" + e.Date[0].start).add(1, "day").isAfter(t)
                }
                ));
                if (n) {
                    var r = n.resetTime
                      , o = r.yy
                      , i = r.mm
                      , l = r.dd
                      , c = r.h
                      , s = r.m
                      , u = r.s
                      , p = d(new Date(o,i - 1,l,c,s,u));
                    a = a.filter((function(e) {
                        return d(e.PostTime).isAfter(p)
                    }
                    ))
                }
                z(a),
                localStorage.setItem("flightHistory_queryKey", JSON.stringify(a))
            }
              , ve = function(e) {
                return s.createElement(s.Fragment, null, s.createElement("div", {
                    className: "history_departure"
                }, s.createElement("span", null, R(e.DepDest[0].Departure.inputText)), s.createElement("span", null, e.Date[0].start)), s.createElement("span", {
                    className: "nextIcon"
                }), s.createElement("div", {
                    className: "history_destination"
                }, s.createElement("span", null, R(e.DepDest[0].Destination.inputText)), 0 === e.Rtow ? s.createElement("span", null, e.Date[0].end) : null), s.createElement("div", {
                    className: "history_peopleNum"
                }, 0 !== e.Adult ? s.createElement("span", null, e.Adult, "大人") : null, 0 !== e.Child ? s.createElement("span", null, e.Child, "小孩") : null, 0 !== e.Infant ? s.createElement("span", null, e.Infant, "嬰兒") : null, 0 !== e.Elder ? s.createElement("span", null, e.Elder, "敬老") : null))
            }
              , ye = function(e, t) {
                t.stopPropagation();
                var n = JSON.parse(localStorage.getItem("flightHistory_queryKey"));
                n.splice(e, 1),
                localStorage.setItem("flightHistory_queryKey", JSON.stringify(n)),
                z(n)
            }
              , _e = function(e, t) {
                var n = b.turnDataToUrl(e)
                  , a = c(Z);
                a.splice(t, 1),
                a.unshift(e),
                z(a),
                localStorage.setItem("flightHistory_queryKey", JSON.stringify(a));
                var r = b.formatClickRecordData(e);
                r.data.HistorySearch = "1",
                w.default(r);
                var o = e.isTaiwanLine ? N.b2c_submitUrl.twFlight : N.b2c_submitUrl.flight
                  , i = new URLSearchParams;
                for (var l in n)
                    i.append(l, n[l].toString());
                "Result" === L ? window.location.href = o + "?" + i.toString() : window.open(o + "?" + i.toString())
            }
              , De = function() {
                return (null == Z ? void 0 : Z.length) > 0 && s.createElement(C.default, {
                    dataList: Z || [],
                    dataRenderer: ve,
                    onClear: ye,
                    onClickLink: _e,
                    title: "繼續搜尋",
                    hideFirstData: !1
                })
            }
              , Te = null !== (n = new URLSearchParams(window.location.search).get("ProjectCode")) && void 0 !== n ? n : ""
              , Ce = x.isSearchOld ? "86" : Te;
            return P((function() {
                if (Te && G) {
                    var e = F.Adult
                      , t = F.Child
                      , n = F.Infant
                      , a = F.Clskd;
                    1 === e + t + n && 1 === e || (alert("本專案限持卡人購買「本人」機票適用"),
                    H({
                        type: "SET_PEOPLE&CABIN",
                        payload: {
                            peopleCabin: {
                                Clskd: a,
                                Adult: 1,
                                Child: 0,
                                Infant: 0,
                                Elder: 0
                            }
                        }
                    }))
                }
            }
            ), [F.Adult, F.Child, F.Infant, Te, G]),
            P((function() {
                var e = function() {
                    var e = new URLSearchParams(window.location.search)
                      , t = e.get("DepDate1")
                      , n = e.get("DepDate2");
                    H({
                        type: "SET_DATE",
                        payload: {
                            Date: {
                                start: t,
                                end: n || null
                            }
                        }
                    })
                }
                  , t = history.pushState;
                return history.pushState = function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    var a = t.apply(this, e);
                    return window.dispatchEvent(new Event("pushstate")),
                    a
                }
                ,
                window.addEventListener("pushstate", e),
                function() {
                    window.removeEventListener("pushstate", e)
                }
            }
            ), []),
            s.createElement(h.default, {
                defaultTab: 3 === F.Rtow ? 2 : F.Rtow
            }, A.map((function(e, t) {
                return s.createElement(h.default.Tab, {
                    label: e,
                    key: e,
                    callfuncClick: function() {
                        return H({
                            type: "SET_RTOW",
                            payload: {
                                Rtow: t
                            }
                        })
                    }
                }, s.createElement(h.default.TabContent, {
                    clickedIndex: t
                }, s.createElement("div", {
                    className: u.default({
                        multMode: 2 === t
                    }, {
                        mainSearch: "PC" === M
                    }, {
                        mainSearchM: "M" === M
                    }),
                    key: e
                }, s.createElement("div", {
                    className: "AllInputGroups"
                }, s.createElement("div", {
                    className: u.default("placeAndDateGroup", {
                        roundTrip: 0 === t
                    })
                }, 2 !== t ? s.createElement(D.default, {
                    key: "" + e,
                    device: M,
                    renderJSXofHistory: "PC" === M ? De() : null,
                    CalendarProps: a(a({}, pe), {
                        minDate: de(t),
                        doubleInput: 0 === t,
                        setStartDate: F.Date[0].start,
                        setEndDate: F.Date[0].end || "",
                        inputOnClick: function() {
                            return E.default(M, B, K)
                        }
                    }),
                    placeProps: [a(a({}, oe), {
                        inputText: F.DepDest[0].Departure && F.DepDest[0].Departure.inputText || "",
                        Rajn: a(a({}, oe.Rajn), {
                            fetchData: function(e) {
                                return r(void 0, void 0, void 0, (function() {
                                    var t;
                                    return o(this, (function(n) {
                                        return t = e || F.DepDest[0].Departure && F.DepDest[0].Departure.inputText || "",
                                        [2, {
                                            data: ae(j.PlaceAct, t.toUpperCase(), !0),
                                            searchKeyWord: t
                                        }]
                                    }
                                    ))
                                }
                                ))
                            }
                        }),
                        selectedData: he(F.DepDest[0].Departure),
                        onInputChange: function(e, t) {
                            return re(e, "Departure", 0, t)
                        },
                        useDtm: "Global" !== L,
                        inputOnClick: function() {
                            return E.default(M, B, K)
                        }
                    }), a(a({}, ie), {
                        inputText: F.DepDest[0].Destination && F.DepDest[0].Destination.inputText || "",
                        Rajn: a(a({}, ie.Rajn), {
                            fetchData: function(e) {
                                return r(void 0, void 0, void 0, (function() {
                                    var t;
                                    return o(this, (function(n) {
                                        return t = e || F.DepDest[0].Destination && F.DepDest[0].Destination.inputText || "",
                                        [2, {
                                            data: ae(j.PlaceAct, t.toUpperCase(), !0),
                                            searchKeyWord: t
                                        }]
                                    }
                                    ))
                                }
                                ))
                            }
                        }),
                        selectedData: he(F.DepDest[0].Destination),
                        onInputChange: function(e, t) {
                            return re(e, "Destination", 0, t)
                        },
                        useDtm: "Global" !== L,
                        inputOnClick: function() {
                            return E.default(M, B, K)
                        }
                    })],
                    customClass: 0 === t ? "doubleCalendar" : "",
                    exChange: function() {
                        return H({
                            type: "SET_CHANGE",
                            payload: {
                                idx: 0
                            }
                        })
                    },
                    insertNode: I
                }) : F.DepDest.map((function(t, n) {
                    var i = t.Departure
                      , l = t.Destination;
                    return s.createElement("div", {
                        key: "multi" + n,
                        style: {
                            position: "relative"
                        },
                        className: "multiPlaceAndDate"
                    }, s.createElement(D.default, {
                        key: "" + e + n,
                        device: M,
                        CalendarProps: a(a({}, pe), {
                            minDate: fe(n) || d().add(24, "hour").format("YYYY-MM-DD"),
                            doubleInput: !1,
                            setStartDate: F.Date[n].start || fe(n) || d().add(24, "hour").format("YYYY-MM-DD"),
                            setEndDate: F.Date[n].end || "",
                            submitCallback: function(e, t) {
                                return H({
                                    type: "SET_DATE",
                                    payload: {
                                        idx: n,
                                        Date: {
                                            start: e,
                                            end: t
                                        }
                                    }
                                })
                            },
                            fixedMinDate: !1,
                            hideInputValueBeforeClicked: 0 !== n && !F.Date[n].start,
                            inputOnClick: function() {
                                return E.default(M, B, K)
                            }
                        }),
                        placeProps: [a(a({}, oe), {
                            inputText: i ? i.inputText : "",
                            Rajn: a(a({}, oe.Rajn), {
                                fetchData: function(e) {
                                    return r(void 0, void 0, void 0, (function() {
                                        var t;
                                        return o(this, (function(n) {
                                            return t = e || i && i.inputText || "",
                                            [2, {
                                                data: ae(j.PlaceAct, t.toUpperCase(), !0),
                                                searchKeyWord: t
                                            }]
                                        }
                                        ))
                                    }
                                    ))
                                }
                            }),
                            selectedData: he(i),
                            Departure: i,
                            onInputChange: function(e, t) {
                                return re(e, "Departure", n, t)
                            },
                            useDtm: "Global" !== L,
                            inputOnClick: function() {
                                return E.default(M, B, K)
                            }
                        }), a(a({}, ie), {
                            inputText: l ? l.inputText : "",
                            Rajn: a(a({}, ie.Rajn), {
                                fetchData: function(e) {
                                    return r(void 0, void 0, void 0, (function() {
                                        var t;
                                        return o(this, (function(n) {
                                            return t = e || l && l.inputText || "",
                                            [2, {
                                                data: ae(j.PlaceAct, t.toUpperCase(), !0),
                                                searchKeyWord: t
                                            }]
                                        }
                                        ))
                                    }
                                    ))
                                }
                            }),
                            selectedData: he(l),
                            onInputChange: function(e, t) {
                                return re(e, "Destination", n, t)
                            },
                            useDtm: "Global" !== L,
                            inputOnClick: function() {
                                return E.default(M, B, K)
                            }
                        })],
                        exChange: function() {
                            return H({
                                type: "SET_CHANGE",
                                payload: {
                                    idx: n
                                }
                            })
                        },
                        customClass: n > 1 ? "multiMinusArea" : "",
                        insertNode: I
                    }), n > 1 && s.createElement("div", {
                        className: "multiMinus",
                        onClick: function() {
                            H({
                                type: "MINUS_PLACE&DATE",
                                payload: {
                                    idx: n
                                }
                            })
                        }
                    }, s.createElement(m.default, {
                        name: "toolcancelb svg",
                        className: u.default({
                            red: "M" === M
                        }, {
                            gray: "PC" === M && "Home" === L
                        })
                    })))
                }
                )), s.createElement("div", {
                    className: u.default({
                        multiAddThree: F.DepDest.length > 2
                    }, "plusArea")
                }, 2 === t && F.DepDest.length < 6 && s.createElement("div", {
                    className: "multiAdd",
                    onClick: function() {
                        H({
                            type: "ADD_PLACE&DATE"
                        })
                    }
                }, s.createElement(m.default, {
                    name: "tooladdb svg",
                    className: "PC" === M ? u.default("white") : ""
                }), "M" === M && s.createElement("span", null, "增加航段")))), s.createElement("div", {
                    className: "peopleCabinInput"
                }, s.createElement(_.default, {
                    insertNode: I,
                    device: M,
                    rowSkin: B,
                    renderNode: K,
                    iconName: "",
                    isTaiwanLine: F.isTaiwanLine
                })), s.createElement("div", {
                    className: u.default({
                        disabled: F.isTaiwanLine && 2 !== t
                    }, "airlineInput")
                }, s.createElement(T.default, {
                    moduleName: g.ERacpOrRajxOrRajn.Rajn,
                    data: a(a({}, le), {
                        placeholder: F.isTaiwanLine && 2 !== t ? "台灣航線不得指定" : "指定航空公司"
                    }),
                    insertNode: I,
                    inputOnClick: function() {
                        return E.default(M, B, K)
                    },
                    disabled: F.isTaiwanLine && 2 !== t
                }))), s.createElement("div", {
                    className: "checkBoxes"
                }, s.createElement(v.default, {
                    type: "checkbox",
                    textContent: "直飛(含中停)",
                    checked: F.Notrans,
                    whenChange: function() {
                        return H({
                            type: "SET_NOTRANS"
                        })
                    }
                })), s.createElement(y.default, {
                    className: u.default("searchSubmit"),
                    whenClick: function() {
                        b.handleSubmit(a(a({}, F), {
                            ProjectCode: Ce
                        }), L, t, z)
                    }
                }, "PC" === M ? s.createElement(m.default, {
                    name: "toolsearch2",
                    size: "x15",
                    className: "svg"
                }) : "搜尋"), "M" == M ? De() : null)))
            }
            )))
        }
        ,
        t.urlToAirline = function(e, t) {
            var n = t.Destinations.find((function(t) {
                return t.txt.match(/\(([^)]*)\)/)[1] === e
            }
            ));
            return {
                inputText: n.txt,
                selectedData: c(n)
            }
        }
        ;
        var A = ["來回", "單程", "多目的地"]
          , R = function(e) {
            var t = e.indexOf("-")
              , n = e.indexOf("(");
            return e.substring(0, t) + e.substring(n, e.length)
        }
    },
    182: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , o = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , i = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
          , l = this && this.__spread || function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(i(arguments[t]));
            return e
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.handleSaveData = t.turnSubmitDataToUrlParams = t.MainUI = t.HistoryProvider = void 0;
        var c = n(140)
          , s = n(0)
          , u = n(0)
          , d = n(27)
          , p = n(138)
          , f = n(154)
          , h = n(201)
          , m = n(26)
          , v = n(202)
          , y = n(148)
          , _ = n(196)
          , D = n(157)
          , T = n(158)
          , C = n(155)
          , g = n(177)
          , S = n(143)
          , b = n(147)
          , w = n(178)
          , E = n(159)
          , N = n(145)
          , x = n(169)
          , P = n(170)
          , k = n(164)
          , O = n(199)
          , A = n(146)
          , R = n(137)
          , M = n(152)
          , L = n(198)
          , I = s.createContext({});
        function j() {
            var e = s.useContext(I);
            if (!e)
                throw new Error("HistoryContext 必須使用在 HistoryProvider 底下");
            return e
        }
        t.HistoryProvider = function(e) {
            var t = e.panelType
              , n = i(u.useState([]), 2)
              , r = n[0]
              , o = n[1]
              , l = {
                historyRecords: r,
                setHistoryRecords: o
            };
            return u.useEffect((function() {
                var e = JSON.parse(localStorage.getItem(t + "_queryKey"));
                o(M.filterExpiredRecord(e)),
                localStorage.setItem(t + "_queryKey", JSON.stringify(M.filterExpiredRecord(e)))
            }
            ), []),
            s.createElement(I.Provider, a({
                value: l
            }, e))
        }
        ;
        function B(e) {
            var t = e.panelType
              , n = j()
              , a = n.historyRecords
              , r = n.setHistoryRecords;
            return (null == a ? void 0 : a.length) > 0 ? s.createElement(g.default, {
                dataList: a || [],
                dataRenderer: function(e) {
                    var t = e.urlParams
                      , n = e.departureName
                      , a = e.clickRecordData
                      , r = a.data.Destination.reduce((function(e, t) {
                        return e ? e.concat("、", t.City.Name) : t.City.Name
                    }
                    ), "");
                    return s.createElement(s.Fragment, null, s.createElement("div", {
                        className: L.history_destination
                    }, t.Keywords ? t.Keywords : r), s.createElement("div", {
                        className: a.data.Theme ? L.history_theme : ""
                    }, a.data.Theme), s.createElement("div", {
                        className: L.history_departure
                    }, t.DepartureID ? n + "出發" : "出發地不限"), s.createElement("div", {
                        className: L.history_date
                    }, t.GoDateStart, " ~ ", t.GoDateEnd))
                },
                onClear: function(e, n) {
                    n.stopPropagation();
                    var a = JSON.parse(localStorage.getItem(t + "_queryKey"));
                    a.splice(e, 1),
                    localStorage.setItem(t + "_queryKey", JSON.stringify(a)),
                    r(a)
                },
                onClickLink: function(t, n) {
                    var a = new URLSearchParams
                      , r = t.urlParams
                      , o = t.clickRecordData;
                    for (var i in r)
                        a.append(i, r[i]);
                    e.blank ? window.open(e.target + "?" + a.toString()) : window.location.href = e.target + "?" + a.toString(),
                    w.default(o)
                },
                title: "繼續搜尋",
                hideFirstData: !1
            }) : null
        }
        t.MainUI = function(e) {
            var t = e.state
              , n = e.dispatch
              , g = e.insertNode
              , w = e.device
              , N = e.panelType
              , I = e.submit
              , K = e.rowSkin
              , Y = e.renderNode
              , F = e.headerClassName
              , H = e.target
              , W = e.blank
              , U = e.urlParams
              , J = e.clickRecordData
              , V = e.departureName
              , G = e.panelTypeData
              , q = e.panelCall
              , Q = function(e, t, n) {
                var i, l = e.Main_Data, c = e.SubmitData, u = e.DepartureData, d = e.Theme_OptionData, f = e.ClickStart, h = e.DateRange, v = e.MonthShowRange, y = M.useToolTip(m.travel.article), D = function(n) {
                    t({
                        type: "SETSUBMITDATA",
                        SubmitData: a(a({}, e.SubmitData), {
                            Destination: n
                        })
                    })
                };
                return {
                    departureProps: {
                        data: M.travelDepartureData,
                        currentOption: E.valueToOption(u, c.Departure),
                        title: "出發地",
                        boxTitle: "出發地",
                        isRequire: !0,
                        onChangeCallBack: function(e) {
                            return t({
                                type: "SETSUBMITDATA",
                                SubmitData: a(a({}, c), {
                                    Departure: e
                                })
                            })
                        }
                    },
                    ThemeProps: {
                        data: d,
                        title: "主題",
                        boxTitle: "主題",
                        isRequire: !0,
                        onChangeCallBack: function(e) {
                            var n = E.valueToOption(d, e);
                            t({
                                type: "SETSUBMITDATA",
                                SubmitData: a(a({}, c), {
                                    Theme: {
                                        Name: n.text,
                                        Code: n.value
                                    }
                                })
                            })
                        }
                    },
                    CalendarProps: {
                        middle: "wave",
                        doubleCalendar: !0,
                        doubleInput: !0,
                        startTitle: "出發區間",
                        setStartDate: c.Date[0],
                        setEndDate: c.Date[1],
                        dateStartTxt: "最早",
                        dateEndTxt: "最晚",
                        minDate: n === S.Device.PC ? f.type ? h.start : f.date || h.start : f.type && f.date || h.start,
                        maxDate: h.end,
                        startMonth: v.start,
                        endMonth: v.end,
                        panelProps: "travel",
                        inputStatusCallback: function(e, n) {
                            t({
                                type: "SETCLICKSTART",
                                ClickStart: {
                                    type: e,
                                    date: n
                                }
                            })
                        },
                        submitCallback: function(e, n) {
                            t({
                                type: "SETSUBMITDATA",
                                SubmitData: a(a({}, c), {
                                    Date: [e, n]
                                })
                            })
                        }
                    },
                    travelDaysProps: {
                        placeholder: "不限",
                        label: "旅遊天數",
                        breakline: {},
                        onChangeCallBack: function(e) {
                            return t({
                                type: "SETSUBMITDATA",
                                SubmitData: a(a({}, c), {
                                    Days: e
                                })
                            })
                        }
                    },
                    KeywordsInputProps: {
                        isRequired: !0,
                        placeholder: "請輸入景點/團號/產品名稱",
                        title: "關鍵字",
                        inputText: c.Keywords,
                        onChange: function(e) {
                            return t({
                                type: "SETSUBMITDATA",
                                SubmitData: a(a({}, c), {
                                    Keywords: e.target.value
                                })
                            })
                        },
                        onClear: function() {
                            return t({
                                type: "SETSUBMITDATA",
                                SubmitData: a(a({}, c), {
                                    Keywords: ""
                                })
                            })
                        },
                        onClick: function() {}
                    },
                    DestinationProps: {
                        mobileClass: "travelDestinationSideCont",
                        device: n === S.Device.PC ? R.Edevice.PC : R.Edevice.Mobile,
                        isRequired: !0,
                        placeholder: c.Destination.length > 0 ? "" : "請選擇或輸入城市目的地",
                        title: "目的地",
                        iconName: "",
                        onInputChange: function(t, n) {
                            M.onDestinationInputChange(e.SubmitData, D, t, n)
                        },
                        remindText: s.createElement(s.Fragment, null, s.createElement("svg", {
                            className: "svg ",
                            fill: "#3ea5d9",
                            viewBox: "0 0 512 512",
                            width: "14px",
                            height: "14px",
                            key: "svg1"
                        }, s.createElement("path", {
                            key: "path1",
                            d: "M281.344 362.016c0 13.255-10.745 24-24 24s-24-10.745-24-24c0-13.255 10.745-24 24-24s24 10.745 24 24z"
                        }), s.createElement("path", {
                            key: "path2",
                            d: "M257.344 129.12c-13.28 0-24 10.784-24 24.096v143.776c0 13.312 10.72 24.096 24 24.096s24-10.784 24-24.096v-143.776c0-13.312-10.72-24.096-24-24.096z"
                        }), s.createElement("path", {
                            key: "path3",
                            d: "M256 32.736c-123.68 0-224 100.288-224 224s100.32 224 224 224 224-100.32 224-224-100.32-224-224-224zM256 448.736c-105.888 0-192-86.112-192-192s86.112-192 192-192c105.888 0 192 86.112 192 192s-86.112 192-192 192z"
                        })), s.createElement("span", {
                            key: "span1",
                            className: "remindSpan"
                        }, "以目的地優先搜尋，請選擇或輸入目的地。")),
                        Dtm: {
                            levelKey: ["vLine", "vLinetravel", "vLinewebarea"],
                            fetchData: function() {
                                if (l)
                                    return l
                            },
                            orderMaps: {
                                vLine: ["_9", "_6", "_5", "_7", "_3", "_1", "_4", "_2"]
                            }
                        },
                        Rajn: {
                            titleClass: "d-no",
                            minimumStringQueryLength: 2,
                            minimumStringQuery: "請至少輸入二個字",
                            noMatchText: "很抱歉，找不到符合的項目!!",
                            fetchData: function(e) {
                                return r(void 0, void 0, void 0, (function() {
                                    return o(this, (function(t) {
                                        return l ? [2, {
                                            data: E.keyFilter(_.rajxProcess(l), e),
                                            searchKeyWord: e
                                        }] : [2]
                                    }
                                    ))
                                }
                                ))
                            },
                            rules: [{
                                title: "線別"
                            }, {
                                title: "國家"
                            }, {
                                title: "城市"
                            }],
                            chooseFirst: !0
                        },
                        multiItem: c.Destination,
                        maxItem: 3,
                        itemsClick: function(t) {
                            M.deleteMultiItem(e.SubmitData, D, t)
                        }
                    },
                    checkIsEnsureGroupProps: {
                        textContent: "只找成行",
                        type: "checkbox",
                        whenChange: function(e) {
                            return t({
                                type: "SETSUBMITDATA",
                                SubmitData: a(a({}, c), {
                                    IsEnsureGroup: e
                                })
                            })
                        },
                        checked: c.IsEnsureGroup
                    },
                    IsEnsureGroupTooltipProps: {
                        CustomComponent: (i = "tooli",
                        s.createElement(p.default, {
                            name: i,
                            className: "svg",
                            size: "x1",
                            style: {
                                width: "14px",
                                height: "14px"
                            }
                        })),
                        ContentComponent: y,
                        moduleClassName: L.PpRcln1 + " m-l-xs m-r-md",
                        width: "360px",
                        events: ["click", "hover"],
                        position: ["bottom", "horizon_center"]
                    },
                    IsSoldProps: {
                        textContent: "只找可報名",
                        type: "checkbox",
                        checked: c.IsSold,
                        whenChange: function(e) {
                            t({
                                type: "SETSUBMITDATA",
                                SubmitData: a(a({}, c), {
                                    IsSold: e
                                })
                            })
                        }
                    }
                }
            }(t, n, w)
              , Z = function(e, t, n, r) {
                var o = i(u.useState(""), 2)
                  , l = o[0]
                  , c = o[1]
                  , d = function(n) {
                    t({
                        type: "SETSUBMITDATA",
                        SubmitData: a(a({}, e.SubmitData), {
                            Keywords: n
                        })
                    })
                };
                return {
                    device: "PC" === n ? R.Edevice.PC : R.Edevice.Mobile,
                    isRequired: !0,
                    placeholder: "請輸入景點、團號、產品名稱",
                    title: "關鍵字",
                    mobileClass: "travelKeywordSideCont",
                    inputText: e.SubmitData.Keywords || "",
                    iconName: "",
                    onInputChange: function(e, t) {
                        e && t || d(e.inputText)
                    },
                    onValueChange: function(e) {
                        c(e.inputText)
                    },
                    remindText: s.createElement(s.Fragment, null, s.createElement("svg", {
                        className: "svg",
                        fill: "#3ea5d9",
                        viewBox: "0 0 512 512",
                        width: "14px",
                        height: "14px",
                        key: "svg1"
                    }, s.createElement("path", {
                        key: "path1",
                        d: "M281.344 362.016c0 13.255-10.745 24-24 24s-24-10.745-24-24c0-13.255 10.745-24 24-24s24 10.745 24 24z"
                    }), s.createElement("path", {
                        key: "path2",
                        d: "M257.344 129.12c-13.28 0-24 10.784-24 24.096v143.776c0 13.312 10.72 24.096 24 24.096s24-10.784 24-24.096v-143.776c0-13.312-10.72-24.096-24-24.096z"
                    }), s.createElement("path", {
                        key: "path3",
                        d: "M256 32.736c-123.68 0-224 100.288-224 224s100.32 224 224 224 224-100.32 224-224-100.32-224-224-224zM256 448.736c-105.888 0-192-86.112-192-192s86.112-192 192-192c105.888 0 192 86.112 192 192s-86.112 192-192 192z"
                    })), s.createElement("span", {
                        key: "span1",
                        className: "remindSpan"
                    }, "以關鍵字優先搜尋，請輸入景點或城市區域。")),
                    useDtm: !0,
                    Dtm: {
                        levelKey: ["vLine", "vLinetravel", "vLinewebarea"],
                        fetchData: function() {
                            if (e.Main_Data)
                                return e.Main_Data
                        },
                        orderMaps: {
                            vLine: ["_9", "_6", "_5", "_7", "_3", "_1", "_4", "_2"]
                        }
                    },
                    Rajn: {
                        titleClass: "d-no",
                        noMatchText: "",
                        footer: function() {
                            var e = i(u.useState(!1), 2)
                              , t = e[0]
                              , a = e[1];
                            return u.useEffect((function() {
                                t && r()
                            }
                            ), [t]),
                            s.createElement("div", {
                                className: "rajnFooter",
                                onClick: function(e) {
                                    "PC" === n ? r(e) : (d(l),
                                    l && a(!0))
                                }
                            }, "查看所有   “", l, "”  的結果", s.createElement("svg", {
                                className: "svg angleRightIcon",
                                key: "rajnFooterAngleRightIcon",
                                fill: "#000",
                                width: "6px",
                                height: "10px"
                            }, s.createElement("path", {
                                d: "M0 .96.96 0 5.48 4.52a.678.678 0 0 1 0 .96L.959 10 0 9.04 4.043 5 0 .96z",
                                fill: "#222"
                            })))
                        }(),
                        fetchData: function(e) {
                            return l || c(e),
                            M.fetchKeyWord("PC" !== n && l ? l : e, m.travel.keyword)
                        },
                        rules: [{
                            title: "only"
                        }],
                        chooseFirst: !1
                    },
                    onClicktriggerFetch: e.SubmitData.Keywords !== l
                }
            }(t, n, w, ee)
              , z = d.useTranslation()
              , X = z.t
              , $ = (z.i18n,
            j().setHistoryRecords);
            function ee(e) {
                e && e.preventDefault && e.preventDefault(),
                I(),
                function() {
                    var e = JSON.parse(localStorage.getItem(N + "_queryKey"));
                    J.data.HistorySearch = "1";
                    var t = {
                        urlParams: U,
                        clickRecordData: J,
                        createTime: c().format("YYYY-MM-DD"),
                        departureName: V
                    }
                      , n = e ? l(e, [t]) : [t];
                    n.length > 4 && n.shift(),
                    $(n),
                    localStorage.setItem(N + "_queryKey", JSON.stringify(n))
                }()
            }
            return u.useEffect((function() {
                var e, t;
                G && (null === (t = null === (e = G[q]) || void 0 === e ? void 0 : e.group) || void 0 === t ? void 0 : t.menuType) && n({
                    type: "SEARCHTYPE",
                    SearchType: G[q].group.menuType
                })
            }
            ), [G]),
            s.createElement("div", {
                className: L[N + "_" + w] + " " + (K ? "" + L.rowSkin : "" + L.defaultSkin)
            }, N === M.PanelType.ThemeTravel ? s.createElement("div", {
                className: L.row
            }, w === S.Device.PC ? s.createElement(x.default, a({}, Q.ThemeProps, {
                insertNode: g,
                whenClick: function() {
                    return y.default(w, K, Y, F)
                }
            })) : s.createElement(P.default, a({}, Q.ThemeProps, {
                insertNode: g,
                whenClick: function() {
                    return y.default(w, K, Y, F)
                }
            }))) : "", s.createElement("div", {
                className: L.row
            }, w === S.Device.PC ? s.createElement(x.default, a({}, Q.departureProps, {
                insertNode: g,
                whenClick: function() {
                    return y.default(w, K, Y, F)
                }
            })) : s.createElement(P.default, a({}, Q.departureProps, {
                insertNode: g,
                whenClick: function() {
                    return y.default(w, K, Y, F)
                }
            }))), t.SearchType === b.SearchType.Keyword && s.createElement("div", {
                className: L.row + " " + L.keyword
            }, s.createElement("div", {
                className: L.row_input
            }, s.createElement("form", {
                onSubmit: ee
            }, s.createElement(A.default, {
                moduleName: R.ERacpOrRajxOrRajn.Rajn,
                data: Z,
                insertNode: g,
                panelProps: "travel",
                inputOnClick: function() {
                    return y.default(w, K, Y, F)
                },
                JSXofHistory: "PC" === w && s.createElement(B, {
                    target: H,
                    blank: W,
                    panelType: N
                })
            }), s.createElement("button", {
                className: "d-no"
            })))), t.SearchType === b.SearchType.Destination && s.createElement("div", {
                className: L.row
            }, s.createElement("div", {
                className: L.destination
            }, s.createElement("form", {
                onSubmit: ee
            }, s.createElement(A.default, {
                moduleName: R.ERacpOrRajxOrRajn.Rajn,
                data: Q.DestinationProps,
                insertNode: g,
                inputOnClick: function() {
                    return y.default(w, K, Y, F)
                },
                JSXofHistory: "PC" === w && s.createElement(B, {
                    target: H,
                    blank: W,
                    panelType: N
                }),
                panelProps: "travel"
            }), s.createElement("button", {
                className: "d-no"
            })))), s.createElement("div", {
                className: L.row + " " + L.doubleCalendar
            }, w === S.Device.PC ? s.createElement(D.default, a({}, Q.CalendarProps, {
                insertNode: g,
                iconName: "",
                inputOnClick: function() {
                    return y.default(w, K, Y, F)
                }
            })) : s.createElement(T.default, a({}, Q.CalendarProps, {
                calendarStartTitle: "最早出發日",
                calendarEndTitle: "最晚出發日",
                insertNode: g,
                iconName: ""
            }))), s.createElement("div", {
                className: L.row
            }, s.createElement("div", {
                className: "checkLabel"
            }, s.createElement(f.default, a({}, Q.checkIsEnsureGroupProps)), w === S.Device.PC ? s.createElement(h.default, a({}, Q.IsEnsureGroupTooltipProps, {
                moduleClassName: L.popup,
                insertNode: g
            })) : s.createElement(p.default, {
                name: "tooli",
                size: "x1",
                className: "pp_rcln m-l-xs m-r-md svg",
                style: {
                    width: "14px",
                    height: "14px"
                },
                onClick: function() {
                    return n({
                        type: "SETLBXRCLNOPEN",
                        LbxRclnisOpen: !t.LbxRclnisOpen
                    })
                }
            }), w === S.Device.PC ? null : s.createElement(O.default, {
                open: t.LbxRclnisOpen,
                className: L.popup,
                closeLbxRcln: function() {
                    return n({
                        type: "SETLBXRCLNOPEN",
                        LbxRclnisOpen: !t.LbxRclnisOpen
                    })
                },
                insertNode: g
            }, s.createElement(v.GroupTooltipContent, null))), s.createElement("div", {
                className: "checkLabel"
            }, s.createElement(f.default, a({}, Q.IsSoldProps)))), s.createElement("div", {
                className: L.row
            }, s.createElement(k.FooterSearch, {
                searchBtnText: "PC" === w ? s.createElement(p.default, {
                    name: "toolsearch2",
                    size: "x15",
                    className: "svg"
                }) : "搜尋",
                searchBtnClassName: L.red_btn,
                onSearch: ee,
                className: "",
                searchAriaLabel: X("searchBtn")
            })), s.createElement("div", {
                className: L.row
            }, s.createElement(C.default, {
                device: w,
                title: "熱門搜尋",
                panelName: J.panelName,
                hotKeyword: N === M.PanelType.GroupFree ? "計畫旅遊票" : "普發一萬",
                href: N === M.PanelType.GroupFree ? "https://travel.liontravel.com/search?DepartureID=&ArriveID=&Keywords=計畫旅遊票&KeywordsCity=&TravelType=2&Platform=APP" : "https://event.liontravel.com/zh-tw/campaign/hotsale/ten-thousand"
            })), "M" === w && s.createElement("div", {
                className: L.row
            }, s.createElement(B, {
                target: H,
                blank: W,
                panelType: N
            })), s.createElement("div", {
                className: L.tabs_container
            }, s.createElement("ul", {
                className: L.tabs
            }, s.createElement("li", {
                className: t.SearchType === b.SearchType.Keyword ? L.active : null,
                onClick: function() {
                    return n({
                        type: "SEARCHTYPE",
                        SearchType: b.SearchType.Keyword
                    })
                }
            }, "關鍵字搜尋"), s.createElement("li", {
                className: t.SearchType === b.SearchType.Destination ? L.active : null,
                onClick: function() {
                    return n({
                        type: "SEARCHTYPE",
                        SearchType: b.SearchType.Destination
                    })
                }
            }, "目的地搜尋"))))
        }
        ,
        t.turnSubmitDataToUrlParams = function(e, t, n) {
            var r = e.SubmitData
              , o = r.Keywords
              , i = r.Destination
              , l = r.Departure
              , c = r.IsEnsureGroup
              , s = r.IsSold
              , u = r.Date
              , d = r.Theme
              , p = a({
                DepartureID: l.replace(/\_/g, ""),
                ArriveID: e.SearchType === b.SearchType.Destination ? i.reduce(M.destinationFormat, []) : "",
                GoDateStart: u[0],
                GoDateEnd: u[1]
            }, M.relatedKeywordValue(o, e.SearchType));
            switch (t) {
            case "travel":
                n || (p.TravelType = 1);
                break;
            case "themeTravel":
                p = a(a({}, p), {
                    TravelType: 0,
                    ThemeID: d.Code ? d.Code.replace("_", "") : "999"
                });
                break;
            case "cruise":
                p = a(a({}, p), {
                    ThemeID: "11",
                    TravelType: 0
                });
                break;
            case "foreignVacation-group":
                p.TravelType = 2;
                break;
            case "travelSearch":
                p.TravelType = 0
            }
            return s && (p.IsSold = s),
            c && (p.IsEnsureGroup = c),
            p
        }
        ,
        t.handleSaveData = function(e, t, n, a) {
            var r = e.SubmitData
              , o = r.Theme.Name
              , i = e.DepartureData.filter((function(e) {
                var t = e.value;
                return (void 0 === t ? "" : t) === r.Departure
            }
            )).map((function(e) {
                var t = e.text
                  , n = void 0 === t ? "" : t
                  , a = e.value;
                return {
                    Name: n,
                    Code: void 0 === a ? "" : a
                }
            }
            ))
              , l = r.Destination.map((function(e) {
                var t = e.vLine
                  , n = void 0 === t ? "" : t
                  , a = e.vLinetravel
                  , r = void 0 === a ? "" : a
                  , o = e.vLinewebarea
                  , i = void 0 === o ? "" : o
                  , l = e.vLineText
                  , c = void 0 === l ? "" : l
                  , s = e.text
                  , u = void 0 === s ? "" : s
                  , d = e.vLinetravelText
                  , p = void 0 === d ? "" : d
                  , f = e.SelectedBy
                  , h = void 0 === f ? "" : f;
                return {
                    Line: {
                        Name: c || u.split("全區")[0],
                        Code: n
                    },
                    Country: {
                        Name: p,
                        Code: r
                    },
                    City: {
                        Name: u,
                        Code: i
                    },
                    SelectedBy: h
                }
            }
            ))
              , c = {
                Departure: i,
                Destination: e.SearchType === b.SearchType.Destination ? l : [],
                Date: n,
                Keyword: e.SearchType === b.SearchType.Keyword ? r.Keywords : "",
                IsEnsureGroup: r.IsEnsureGroup ? 1 : 0,
                IsSold: r.IsSold ? 1 : 0,
                HistorySearch: a ? "1" : "0"
            };
            return t === N.PanelName.themeTravel && (c.Theme = o),
            {
                panelName: t,
                data: c
            }
        }
    },
    183: function(e, t, n) {
        e.exports = {
            dropdownBoxPc: "dropdownBoxPc",
            selectBox: "selectBox",
            title: "title",
            require: "require",
            contentWrap: "contentWrap",
            dropdownBoxContent: "dropdownBoxContent",
            open: "open",
            boxTitle: "boxTitle",
            selectContentWrap: "selectContentWrap",
            option: "option",
            active: "active",
            subLabel: "subLabel"
        }
    },
    184: function(e, t, n) {
        e.exports = {
            dropdown: "dropdown",
            selectBox: "selectBox",
            title: "title",
            require: "require",
            contentWrap: "contentWrap",
            dropdownBoxM: "dropdownBoxM",
            header: "header",
            nvb_rslb_goBack: "nvb_rslb_goBack",
            boxTitle: "boxTitle",
            dropdownBoxContent: "dropdownBoxContent",
            selectContentWrap: "selectContentWrap",
            option: "option",
            active: "active",
            subLabel: "subLabel"
        }
    },
    186: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__rest || function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                    t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
            }
            return n
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.urlToDesns = t.findUrlProp = t.Search = void 0;
        var o = n(140)
          , i = n(0)
          , l = n(142)
          , c = n(147)
          , s = n(145)
          , u = n(139)
          , d = n(152)
          , p = n(182);
        t.Search = function(e) {
            var t, n = e.device, f = e.insertNode, h = e.rowSkin, m = e.onSubmitTarget, v = (e.source,
            e.headerClassName), y = r(e, ["device", "insertNode", "rowSkin", "onSubmitTarget", "source", "headerClassName"]), _ = u.useConnect(), D = _.state, T = _.dispatch, C = D.Main_Data, g = D.DepartureData, S = D.SubmitData;
            i.useEffect((function() {
                d.getSearchData().then((function(e) {
                    T({
                        type: "MAINDATA",
                        Main_Data: e
                    }),
                    T({
                        type: "DEPARTUREOPTIONDATA",
                        DepartureData: d.flatTravelDepartureData
                    })
                }
                ))
            }
            ), []),
            i.useEffect((function() {
                if (C && g.length) {
                    var e = d.getUrlData(S, {
                        departOption: g,
                        desnsOption: C
                    });
                    if (!e)
                        return;
                    e.Destination && e.Destination.length && T({
                        type: "SEARCHTYPE",
                        SearchType: c.SearchType.Destination
                    }),
                    T({
                        type: "SETSUBMITDATA",
                        SubmitData: a(a({}, D.SubmitData), e)
                    })
                }
            }
            ), [C, g]);
            var b = S.Date
              , w = S.Destination
              , E = S.Keywords
              , N = o()
              , x = o(b[0])
              , P = o(b[1])
              , k = m
              , O = p.turnSubmitDataToUrlParams(D, s.PanelName.travelSearch, !1)
              , A = p.handleSaveData(D, s.PanelName.travelSearch, b, !1)
              , R = null === (t = A.data.Departure[0]) || void 0 === t ? void 0 : t.Name;
            return i.createElement(p.HistoryProvider, {
                panelType: d.PanelType.TravelSearch
            }, i.createElement(p.MainUI, {
                state: D,
                dispatch: T,
                insertNode: f,
                device: n,
                panelType: d.PanelType.TravelSearch,
                submit: function() {
                    return l.onSubmit({
                        target: k,
                        params: a({}, y),
                        isAwait: !0
                    }).validate((function(e) {
                        var t = [];
                        return 0 === w.length && D.SearchType === c.SearchType.Destination && t.push("請輸入 / 選擇目的地"),
                        E.trim() || D.SearchType !== c.SearchType.Keyword || t.push("請輸入關鍵字"),
                        b[0] || t.push("請選擇出發日期"),
                        b[1] || t.push("請選擇回程日期"),
                        x.isBefore(N, "date") && t.push("起日不可早於今天日期"),
                        P.isBefore(N, "date") && t.push("迄日不可早於今天日期"),
                        0 === t.length || t
                    }
                    )).modifier((function(e) {
                        return O
                    }
                    )).saveData((function() {
                        return A
                    }
                    )).send("encodeURI")
                },
                rowSkin: h,
                renderNode: y.renderNode,
                headerClassName: v,
                target: k,
                blank: !1,
                urlParams: O,
                clickRecordData: A,
                departureName: R
            }))
        }
        ,
        t.findUrlProp = function(e, t) {
            var n, a = new RegExp(t,"i");
            return null === (n = e.find((function(e) {
                return e.key.match(a)
            }
            ))) || void 0 === n ? void 0 : n.value
        }
        ,
        t.urlToDesns = function(e, t) {
            if (!t)
                return [];
            var n = t.split(",")
              , a = [];
            return n.forEach((function(t) {
                var n, r, o, i, l;
                if (t) {
                    var c = t.split("-")
                      , s = {
                        Code: "",
                        Text: ""
                    };
                    s.Code = "_" + c[2],
                    s.Text = null === (n = e.vLine) || void 0 === n ? void 0 : n[s.Code];
                    var u = {
                        Code: "_",
                        Text: ""
                    };
                    c[1] && (u.Code = "_" + c[1] + "_" + c[2],
                    u.Text = null === (o = null === (r = e.vLinetravel) || void 0 === r ? void 0 : r[s.Code]) || void 0 === o ? void 0 : o[u.Code]);
                    var d = {
                        Code: "_",
                        Text: ""
                    };
                    if (c[0] && (d.Code = "_" + c[0],
                    d.Text = null === (l = null === (i = e.vLinewebarea) || void 0 === i ? void 0 : i[u.Code]) || void 0 === l ? void 0 : l[d.Code]),
                    void 0 === d.Text || void 0 === u.Text || void 0 === s.Text)
                        return;
                    var p = {
                        SelectedBy: "Menu",
                        text: c[0] ? d.Text : c[1] ? "" + u.Text : "" + s.Text,
                        vLine: s.Code,
                        vLineText: s.Text,
                        vLinetravel: u.Code,
                        vLinewebarea: d.Code,
                        value: s.Code + "-" + u.Code + "-" + d.Code
                    };
                    a.push(p)
                }
            }
            )),
            a
        }
    },
    187: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , o = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.defaultData = t.FlightInitialState = void 0;
        var i = n(26)
          , l = n(161)
          , c = n(149)
          , s = n(140);
        t.FlightInitialState = function(e, t, n, s, d) {
            c.initialState({
                LocalStorageName: e
            }).getLocalStorage().getUrl().setDefaultData((function() {
                return t
            }
            )).asyncGetData((function() {
                return r(void 0, void 0, void 0, (function() {
                    var t, a;
                    return o(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            if (t = "" + i.flightInternational.seoplace + location.pathname.split("/").pop(),
                            s !== l.FlightType.SEO || "internationalFlight" != e || "" != n)
                                return [3, 8];
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 6, , 7]),
                            [4, fetch(t, {
                                method: "get"
                            })];
                        case 2:
                            return (a = r.sent()).ok ? [4, a.text()] : [3, 4];
                        case 3:
                            return [2, r.sent()];
                        case 4:
                            throw a.statusText;
                        case 5:
                            return [3, 7];
                        case 6:
                            return r.sent(),
                            [3, 7];
                        case 7:
                            return [2, ""];
                        case 8:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            )).done((function(t) {
                return r(void 0, void 0, void 0, (function() {
                    var r, i, c, p, f, h;
                    return o(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return r = "Result" === s,
                            t.urlData.length > 0 && r && (i = u(t.urlData)),
                            t.asyncGetDataData ? [4, t.asyncGetDataData.then((function(e) {
                                t.asyncGetDataData = e
                            }
                            ))] : [3, 2];
                        case 1:
                            o.sent(),
                            o.label = 2;
                        case 2:
                            switch (s) {
                            case l.FlightType.Home:
                                c = a(a({}, t.DefaultData), t.LocalStorageData),
                                d && d(c);
                                break;
                            case l.FlightType.SEO:
                                p = a({}, t.DefaultData),
                                f = t.asyncGetDataData ? t.asyncGetDataData : n,
                                "internationalFlight" === e && (p.DepDest[0].Destination ? p.DepDest[0].Destination.inputText = f : p.DepDest[0].Destination = {
                                    inputText: f,
                                    selectedData: []
                                }),
                                p.SeoDep = f,
                                d && d(p);
                                break;
                            case l.FlightType.Result:
                                h = a(a({}, t.DefaultData), i),
                                d && d(h)
                            }
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ))
        }
        ;
        var u = function(e) {
            var n = a({}, t.defaultData)
              , r = e.filter((function(e) {
                return -1 !== e.key.toLowerCase().indexOf("depdate") ? e : ["clstype", "adt", "chd", "inf", "notrans"].includes(e.key.toLowerCase())
            }
            ))
              , o = e.find((function(e) {
                return "rtow" === e.key.toLowerCase()
            }
            ))
              , i = o ? o.value : n.Rtow.toString()
              , l = d(i);
            2 === l && (n.Date = []);
            var c = e.filter((function(e) {
                return -1 !== e.key.indexOf("DepCity")
            }
            )).length;
            n.DepDest = [];
            for (var u = 0; u < (2 === l ? c : 2); u++)
                n.DepDest.push({
                    Departure: {
                        inputText: "",
                        selectedData: []
                    },
                    Destination: {
                        inputText: "",
                        selectedData: []
                    }
                });
            if (0 === r.length)
                return function(e, t) {
                    return e.map((function(e) {
                        switch (e.key) {
                        case "DepCity1":
                        case "Depart1":
                        case "DepCountry1":
                            t.DepDest[0].Departure.inputText += "_" + e.value;
                            break;
                        case "ArrCity1":
                        case "Arrive1":
                        case "ArrCountry1":
                            t.DepDest[0].Destination.inputText += "_" + e.value;
                            break;
                        case "PreferAirlines":
                            t.Airline = "" === e.value ? null : {
                                inputText: e.value,
                                selectedData: [],
                                url: !0
                            }
                        }
                    }
                    )),
                    t.Date[0].start = s().add(60, "days").format("YYYY-MM-DD"),
                    t.Date[0].end = s().add(67, "days").format("YYYY-MM-DD"),
                    a(a({}, t), {
                        Rtow: 0,
                        Adult: 1,
                        Clskd: 0
                    })
                }(e, n);
            if (l < 2) {
                var p = e.find((function(e) {
                    return "depcountry1" === e.key.toLowerCase()
                }
                ))
                  , f = e.find((function(e) {
                    return "arrcountry1" === e.key.toLowerCase()
                }
                ));
                "TW" === p.value && "TW" === f.value && (n.isTaiwanLine = !0)
            }
            return e.map((function(e) {
                if (-1 !== e.key.toLowerCase().indexOf("dep") || -1 !== e.key.toLowerCase().indexOf("arr"))
                    if (-1 !== e.key.toLowerCase().indexOf("date"))
                        0 === l ? (0 === n.Date.length && n.Date.push({
                            start: null,
                            end: null
                        }),
                        "depdate1" === e.key.toLowerCase() && (n.Date[0].start = e.value),
                        "depdate2" === e.key.toLowerCase() && (n.Date[0].end = e.value)) : 2 === l ? n.Date.push({
                            start: e.value,
                            end: null
                        }) : 1 === l && "depdate1" === e.key.toLowerCase() && (n.Date[0].start = e.value);
                    else {
                        var t = Number(e.key[e.key.length - 1]);
                        if (l < 2 && t > 1)
                            return;
                        e.key === "DepCity" + t || e.key === "Depart" + t || e.key === "DepCountry" + t ? n.DepDest[t - 1].Departure.inputText += "_" + e.value : e.key !== "ArrCity" + t && e.key !== "Arrive" + t && e.key !== "ArrCountry" + t || (n.DepDest[t - 1].Destination.inputText += "_" + e.value)
                    }
                else
                    switch (e.key.toLowerCase()) {
                    case "preferairlines":
                        null === n.Airline && (n.Airline = "" === e.value ? null : {
                            inputText: e.value,
                            selectedData: [],
                            url: !0
                        });
                        break;
                    case "clstype":
                        var a = void 0;
                        switch (e.value) {
                        case "0":
                            a = 0;
                            break;
                        case "1":
                            a = 1;
                            break;
                        case "2":
                            a = 2;
                            break;
                        case "3":
                            a = 3;
                            break;
                        case "5":
                            a = 4;
                            break;
                        default:
                            a = 0
                        }
                        n.Clskd = Number(a);
                        break;
                    case "adt":
                        n.Adult = Number(e.value);
                        break;
                    case "chd":
                        n.Child = Number(e.value);
                        break;
                    case "inf":
                        n.Infant = Number(e.value);
                        break;
                    case "cd":
                        n.Elder = Number(e.value);
                        break;
                    case "notrans":
                        n.Notrans = "T" === e.value;
                        break;
                    case "seeklcc":
                        null === n.Airline && (n.Airline = 0 === Number(e.value) ? null : {
                            inputText: 1 === Number(e.value) ? "ONLYLCC" : "EXCLUDELCC",
                            selectedData: [],
                            url: !0
                        });
                        break;
                    case "sfrom":
                        n.Sfrom = e.value;
                        break;
                    case "stfn":
                        n.Stfn = e.value
                    }
            }
            )),
            s(n.Date[0].start).isBefore(s(), "date") && function(e, t) {
                switch (t) {
                case 0:
                    e.Date[0].start = s().add(60, "days").format("YYYY-MM-DD"),
                    e.Date[0].end = s().add(67, "days").format("YYYY-MM-DD");
                    break;
                case 1:
                    e.Date[0].start = s().add(60, "days").format("YYYY-MM-DD");
                    break;
                case 2:
                    e.Date.map((function(e, t) {
                        e.start = s().add(60 + 7 * t, "days").format("YYYY-MM-DD")
                    }
                    ))
                }
            }(n, l),
            a(a({}, n), {
                Rtow: Number(l)
            })
        }
          , d = function(e) {
            return "0" === e ? 1 : "1" === e ? 0 : "3" === e ? 2 : void 0
        };
        t.defaultData = {
            DepDest: [{
                Departure: {
                    inputText: "",
                    selectedData: []
                },
                Destination: {
                    inputText: "",
                    selectedData: []
                }
            }, {
                Departure: {
                    inputText: "",
                    selectedData: []
                },
                Destination: {
                    inputText: "",
                    selectedData: []
                }
            }],
            Date: [{
                start: s().add(1, "day").format("YYYY-MM-DD"),
                end: null
            }, {
                start: null,
                end: null
            }],
            Airline: null,
            Clskd: 0,
            Adult: 1,
            Child: 0,
            Infant: 0,
            Elder: 0,
            Notrans: !1,
            Rtow: 0,
            isTaiwanLine: !1,
            peopleNumWarningText: "",
            SeoDep: "",
            Stfn: ""
        }
    },
    188: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0)
          , i = n(153)
          , l = n(162)
          , c = n(163)
          , s = n(13)
          , u = n(139)
          , d = n(148)
          , p = n(138);
        t.default = function(e) {
            var t = u.useConnect()
              , n = t.state
              , f = t.dispatch
              , h = n.isTaiwanLine ? {
                Adult: "大人　12歲以上",
                Child: "小孩　2歲-11歲",
                Infant: "嬰兒　2歲以下",
                Elder: "敬老　65歲以上"
            } : {
                Adult: "大人　12歲以上",
                Child: "小孩　2歲-11歲",
                Infant: "嬰兒　2歲以下"
            }
              , m = n.isTaiwanLine ? {
                Adult: n.Adult,
                Child: n.Child,
                Infant: n.Infant,
                Elder: n.Elder
            } : {
                Adult: n.Adult,
                Child: n.Child,
                Infant: n.Infant
            }
              , v = [{
                text: "不限艙等",
                value: 0
            }, {
                text: "經濟艙",
                value: 1
            }, {
                text: "豪華經濟艙",
                value: 2
            }, {
                text: "商務艙",
                value: 3
            }, {
                text: "頭等艙",
                value: 4
            }]
              , y = e.insertNode
              , _ = e.device
              , D = e.rowSkin
              , T = e.renderNode
              , C = e.iconName
              , g = e.disabledOpen
              , S = e.isTaiwanLine
              , b = n.Clskd
              , w = n.Adult
              , E = n.Child
              , N = n.Infant
              , x = n.Elder
              , P = n.peopleNumWarningText
              , k = r(o.useState({
                Clskd: b,
                Adult: w,
                Child: E,
                Infant: N,
                Elder: x
            }), 2)
              , O = k[0]
              , A = k[1]
              , R = r(o.useState(!0), 2)
              , M = R[0]
              , L = R[1];
            o.useEffect((function() {
                A({
                    Clskd: 0,
                    Adult: 1,
                    Child: 0,
                    Infant: 0,
                    Elder: 0
                })
            }
            ), [S]),
            "M" === _ && o.useEffect((function() {
                A({
                    Clskd: b,
                    Adult: w,
                    Child: E,
                    Infant: N,
                    Elder: x
                }),
                L(!1)
            }
            ), [M]);
            var I = function(e, t) {
                return "共" + e + "人， " + t
            }
              , j = function(e, t) {
                void 0 === t && (t = b);
                var n = Object.values(e[0]).reduce((function(e, t) {
                    return e + t
                }
                ));
                return I(String(n), v[t].text)
            }
              , B = r(o.useState(I("2", v[b].text)), 2)
              , K = B[0]
              , Y = B[1]
              , F = {
                isRequired: !0,
                title: "人數/艙等",
                placeholder: I("N", v[b].text),
                iconName: C,
                className: "flightRoomList"
            };
            o.useEffect((function() {
                var e;
                Y(j([m], b)),
                f({
                    type: "SET_PEOPLENUMWARNINGTEXT",
                    payload: {
                        peopleNumWarningText: (e = "",
                        S ? w + E + x + N > 7 ? e = "乘客總人數不得超過7位" : w + E + N + x === 0 ? e = "請至少選擇一位乘客" : E + N > 0 && w + x === 0 ? e = "小孩、嬰兒需大人購票陪同" : (E / 2 > w + x || N > w + x || (N + E) / 2 > w + x) && (e = "1位大人最多可帶「2位小孩」或「1位小孩+1位嬰兒」") : w + E + N > 8 ? e = "乘客總人數不得超過8位" : (w < N || 2 * w < E || 2 * w < E + N) && (e = "1位大人最多可帶「2位小孩」或「1位小孩+1位嬰兒」"),
                        e)
                    }
                })
            }
            ), [w, E, N, x, b]);
            var H = function(e, t) {
                var n = "SET_" + t.toUpperCase()
                  , a = {};
                a[t] = ++m[t],
                f({
                    type: n,
                    payload: a
                });
                var r = j([m]);
                Y(r)
            }
              , W = function(e, t) {
                var n = "SET_" + t.toUpperCase()
                  , a = {};
                a[t] = --m[t],
                f({
                    type: n,
                    payload: a
                });
                var r = j([m]);
                Y(r)
            }
              , U = function(e) {
                var t = parseInt(e.target.dataset.class);
                if (t !== b) {
                    var n = j([m], t);
                    Y(n),
                    f({
                        type: "SET_ALCLASS",
                        payload: {
                            Clskd: t
                        }
                    })
                }
            }
              , J = function() {
                return o.createElement(o.Fragment, null, [m].length && o.createElement(i.RoomLitSection, {
                    max: S ? [7, 4, 3, 7] : [8, 5, 3],
                    min: S ? [0, 0, 0, 0] : [1, 0, 0],
                    key: 0,
                    roomCount: 0,
                    palceName: h,
                    gpct: m,
                    onClickAdd: H,
                    onClickMinus: W
                }), S && 2 !== n.Rtow ? null : o.createElement("div", {
                    className: "flightClass"
                }, o.createElement("div", {
                    className: "leftBlock"
                }, o.createElement("div", {
                    className: s.default({
                        active: 0 === b
                    }, "classOption"),
                    "data-class": 0,
                    onClick: function(e) {
                        return U(e)
                    }
                }, "不限艙等")), o.createElement("div", {
                    className: "rightBlock"
                }, o.createElement("div", {
                    className: "topBlock"
                }, o.createElement("div", {
                    className: s.default({
                        active: 1 === b
                    }, "classOption"),
                    "data-class": 1,
                    onClick: function(e) {
                        return U(e)
                    }
                }, "經濟艙"), o.createElement("div", {
                    className: s.default({
                        active: 2 === b
                    }, "classOption"),
                    "data-class": 2,
                    onClick: function(e) {
                        return U(e)
                    }
                }, "豪華經濟艙")), o.createElement("div", {
                    className: "bottomBlock"
                }, o.createElement("div", {
                    className: s.default({
                        active: 3 === b
                    }, "classOption"),
                    "data-class": 3,
                    onClick: function(e) {
                        return U(e)
                    }
                }, "商務艙"), o.createElement("div", {
                    className: s.default({
                        active: 4 === b
                    }, "classOption"),
                    "data-class": 4,
                    onClick: function(e) {
                        return U(e)
                    }
                }, "頭等艙")))), P.length > 0 ? o.createElement("div", {
                    className: "warningText"
                }, o.createElement(p.default, {
                    name: "toolremind svg"
                }), o.createElement("span", null, P)) : null)
            };
            return o.createElement("div", null, "PC" === _ ? o.createElement(l.default, a({
                inputText: K,
                insertNode: y
            }, F, {
                readOnly: !0,
                inputOnClick: function() {
                    return d.default(_, D, T)
                },
                disabledOpen: g
            }), o.createElement(J, null)) : o.createElement(c.default, a({
                inputText: K,
                insertNode: y
            }, F, {
                goBack: function() {
                    return function() {
                        var e = j([{
                            Adult: O.Adult,
                            Child: O.Child,
                            Infant: O.Infant,
                            Elder: O.Elder
                        }], O.Clskd);
                        Y(e),
                        L(!0),
                        f({
                            type: "SET_PEOPLE&CABIN",
                            payload: {
                                peopleCabin: O
                            }
                        })
                    }()
                },
                confirm: function() {
                    return L(!0)
                },
                readOnly: !0,
                disabledOpen: g,
                slideClass: "flightMobile"
            }), o.createElement(J, null)))
        }
    },
    189: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(157)
          , i = n(158)
          , l = n(146)
          , c = n(138)
          , s = n(137);
        t.default = function(e) {
            var t = e.device
              , n = e.CalendarProps
              , u = e.placeProps
              , d = e.insertNode
              , p = e.customClass
              , f = e.exChange
              , h = e.renderJSXofHistory;
            return r.createElement("div", {
                className: "placeAndDate"
            }, r.createElement("div", {
                className: "placeInput"
            }, r.createElement(l.default, {
                moduleName: s.ERacpOrRajxOrRajn.Rajx,
                data: u[0],
                insertNode: d,
                JSXofHistory: h
            }), r.createElement("div", {
                className: "changeBtn changeButton",
                onClick: f
            }, r.createElement(c.default, {
                name: "valuechangeRound",
                className: "svg"
            })), r.createElement(l.default, {
                moduleName: s.ERacpOrRajxOrRajn.Rajx,
                data: u[1],
                insertNode: d,
                JSXofHistory: h
            })), r.createElement("div", {
                className: "calendarInput " + (p || "")
            }, "PC" === t ? r.createElement(o.default, a({}, n)) : r.createElement(i.default, a({}, n, {
                insertNode: d
            }))))
        }
    },
    190: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.formatClickRecordData = t.turnDataToUrl = t.handleSubmit = void 0;
        n(140);
        var r = n(26)
          , o = n(142)
          , i = n(145);
        t.handleSubmit = function(e, n, i, l) {
            function c() {
                for (var t = [], n = 2 === i ? e.DepDest.length : 1, a = 0; a < n; a++) {
                    var r = e.DepDest[a].Departure
                      , o = e.DepDest[a].Destination;
                    r && r.selectedData.length || -1 === t.indexOf("出發地") && t.push("出發地"),
                    o && o.selectedData.length || -1 === t.indexOf("目的地") && t.push("目的地"),
                    e.Date[a].start || -1 === t.indexOf("去程日期") && t.push("去程日期"),
                    0 !== i || e.Date[0].end || -1 === t.indexOf("回程日期") && t.push("回程日期")
                }
                return t.length > 0 ? "請選擇" + t.join("、") : ""
            }
            function s() {
                var t = 2 === i ? e.DepDest.length : 1
                  , n = 0;
                if (e.isTaiwanLine)
                    return function() {
                        var t = e.DepDest[0].Departure.selectedData[0].cityCode
                          , n = e.DepDest[0].Destination.selectedData[0].cityCode;
                        if (!{
                            MZG: ["TPE", "TSA", "RMQ", "KHH", "KNH", "CYI", "TNN"],
                            KNH: ["TPE", "TSA", "RMQ", "KHH", "MZG", "CYI", "TNN"],
                            TSA: ["MZG", "KNH", "MFK", "LZN", "HUN", "TTT"],
                            TPE: ["MZG", "KNH", "MFK", "LZN", "HUN", "TTT"],
                            RMQ: ["MZG", "KNH", "LZN", "HUN"],
                            KHH: ["MZG", "KNH", "HUN"],
                            HUN: ["TPE", "TSA", "RMQ", "KHH"],
                            LZN: ["TPE", "TSA", "RMQ"],
                            CYI: ["MZG", "KNH"],
                            TNN: ["MZG", "KNH"],
                            MFK: ["TPE", "TSA"],
                            TTT: ["TPE", "TSA"]
                        }[t].includes(n))
                            return "很抱歉，目前不提供您選擇的地點航班查詢"
                    }();
                for (var a = 0; a < t; a++) {
                    var r = e.DepDest[a].Departure
                      , o = r && r.selectedData.length
                      , l = e.DepDest[a].Destination
                      , c = l && l.selectedData.length;
                    if (o && c) {
                        var s = r.selectedData[0].countryCode
                          , u = r.selectedData[0].cityCode
                          , d = r.selectedData[0].airportCode
                          , p = l.selectedData[0].countryCode
                          , f = l.selectedData[0].cityCode
                          , h = l.selectedData[0].airportCode
                          , m = /HKG|MFM/;
                        if (u === f)
                            return h && d && d === h ? "出發地機場和目的地機場不能相同" : "出發地和目的地不能相同";
                        s === p && ("CN" !== s || m.test(u) || m.test(f) || n++)
                    }
                }
                return n === t ? "很抱歉，目前不提供中國境內航班查詢" : void 0
            }
            function u() {
                if (e.peopleNumWarningText)
                    return e.peopleNumWarningText
            }
            o.onSubmit({
                target: e.isTaiwanLine ? r.b2c_submitUrl.twFlight : r.b2c_submitUrl.flight,
                params: a({}, e),
                isAwait: "Home" !== n,
                openTarget: "Result" === n ? "_self" : "_blank"
            }).validate((function() {
                var t = [];
                return c().length > 0 && t.push(c()),
                0 === c().length && s() && t.push(s()),
                u() && t.push(u()),
                0 === t.length && function() {
                    if (2 !== e.Rtow) {
                        var t = JSON.parse(localStorage.getItem("flightHistory_queryKey")) || []
                          , n = a({}, e)
                          , r = void 0;
                        n.PostTime = (new Date).getTime(),
                        Array.isArray(t) || (localStorage.removeItem("flightHistory_queryKey"),
                        t = []),
                        t.length < 3 ? (t.unshift(n),
                        r = t) : (t.pop(),
                        t.unshift(n),
                        r = t),
                        localStorage.setItem("flightHistory_queryKey", JSON.stringify(r)),
                        l(r)
                    }
                }(),
                0 === t.length || t
            }
            )).modifier(t.turnDataToUrl).save((function() {
                return {
                    panelName: o.EPanelKeys.internationalFlight,
                    data: a({}, e)
                }
            }
            )).saveData((function() {
                return t.formatClickRecordData(e)
            }
            )).send("none")
        }
        ,
        t.turnDataToUrl = function(e) {
            for (var t, n, a, r, o, i, l = 2 !== e.Rtow ? 1 : e.DepDest.length, c = {}, s = 0; s < 1; s++) {
                var u = e.DepDest[s].Departure.selectedData[0]
                  , d = e.DepDest[s].Destination.selectedData[0];
                c["DepCity" + (s + 1)] = u.cityCode,
                c["Depart" + (s + 1)] = u.airportCode || "",
                c["ArrCity" + (s + 1)] = d.cityCode,
                c["Arrive" + (s + 1)] = d.airportCode || "",
                c["DepCountry" + (s + 1)] = u.countryCode,
                c["ArrCountry" + (s + 1)] = d.countryCode,
                "TSA" === u.cityCode && (c["DepCity" + (s + 1)] = "TPE",
                c["Depart" + (s + 1)] = "TSA"),
                "TSA" === d.cityCode && (c["ArrCity" + (s + 1)] = "TPE",
                c["Arrive" + (s + 1)] = "TSA")
            }
            c.PreferAirlines = (null === (t = e.Airline) || void 0 === t ? void 0 : t.selectedData[0].cityCode) ? null === (n = e.Airline) || void 0 === n ? void 0 : n.selectedData[0].cityCode : (null === (a = e.Airline) || void 0 === a ? void 0 : a.selectedData[0].City) ? null === (r = e.Airline) || void 0 === r ? void 0 : r.selectedData[0].City : "",
            "ONLYLCC" === c.PreferAirlines ? (c.SeekLcc = 1,
            c.PreferAirlines = "") : "EXCLUDELCC" === c.PreferAirlines ? (c.SeekLcc = 2,
            c.PreferAirlines = "") : c.SeekLcc = 0;
            for (s = 0; s < 1; s++)
                c["DepDate" + (s + 1)] = e.Date[s].start,
                0 === e.Rtow && (c["DepDate" + (s + 2)] = e.Date[s].end);
            if (0 === e.Rtow)
                for (s = 0; s < 1; s++) {
                    u = e.DepDest[s].Departure.selectedData[0],
                    d = e.DepDest[s].Destination.selectedData[0];
                    c["DepCity" + (s + 2)] = d.cityCode,
                    c["Depart" + (s + 2)] = d.airportCode || "",
                    c["ArrCity" + (s + 2)] = u.cityCode,
                    c["Arrive" + (s + 2)] = u.airportCode || "",
                    c["DepCountry" + (s + 2)] = d.countryCode,
                    c["ArrCountry" + (s + 2)] = u.countryCode,
                    "TSA" === u.cityCode && (c["ArrCity" + (s + 2)] = "TPE",
                    c["Arrive" + (s + 2)] = "TSA"),
                    "TSA" === d.cityCode && (c["DepCity" + (s + 2)] = "TPE",
                    c["Depart" + (s + 2)] = "TSA")
                }
            else if (2 === e.Rtow)
                for (s = 0; s < l; s++) {
                    u = e.DepDest[s].Departure.selectedData[0],
                    d = e.DepDest[s].Destination.selectedData[0];
                    c["DepCity" + (s + 1)] = u.cityCode,
                    c["Depart" + (s + 1)] = u.airportCode || "",
                    c["ArrCity" + (s + 1)] = d.cityCode,
                    c["Arrive" + (s + 1)] = d.airportCode || "",
                    "TSA" === u.cityCode && (c["DepCity" + (s + 1)] = "TPE",
                    c["Depart" + (s + 1)] = "TSA"),
                    "TSA" === d.cityCode && (c["ArrCity" + (s + 1)] = "TPE",
                    c["Arrive" + (s + 1)] = "TSA"),
                    c["DepDate" + (s + 1)] = e.Date[s].start,
                    c["DepCountry" + (s + 1)] = u.countryCode,
                    c["ArrCountry" + (s + 1)] = d.countryCode
                }
            switch (e.Clskd) {
            case 0:
                o = "0";
                break;
            case 1:
                o = "1";
                break;
            case 2:
                o = "2";
                break;
            case 3:
                o = "3";
                break;
            case 4:
                o = "5";
                break;
            default:
                o = "0"
            }
            return c.Rtow = 0 === (i = e.Rtow) ? 1 : 1 === i ? 0 : 2 === i ? 3 : void 0,
            c.ClsType = o,
            c.Adt = e.Adult,
            c.Chd = e.Child,
            c.Inf = e.Infant,
            c.Cd = e.Elder,
            c.NoTrans = e.Notrans ? "T" : "F",
            e.Sfrom && (c.Sfrom = e.Sfrom),
            e.Stfn && (c.Stfn = e.Stfn),
            e.ProjectCode && (c.ProjectCode = e.ProjectCode),
            c
        }
        ,
        t.formatClickRecordData = function(e) {
            var t, n, a = e.Adult, r = e.Child, o = e.Date, c = e.Clskd, s = e.Notrans, u = e.Infant, d = e.Elder, p = e.Airline, f = e.Rtow, h = e.isTaiwanLine;
            switch (f) {
            case 0:
                t = "來回",
                n = [o[0].start, o[0].end];
                break;
            case 1:
                t = "單程",
                n = [o[0].start];
                break;
            case 2:
                n = [],
                t = "目的地";
                for (var m = 0; m < o.length; m++)
                    n.push(o[m].start)
            }
            var v = p && p.selectedData[0]
              , y = {
                Departure: l(e, "Departure", 2 == f),
                Destination: l(e, "Destination", 2 == f),
                DestinationType: t,
                Date: n,
                AdultCount: a,
                ChildCount: r,
                BabyCount: u,
                ElderCount: d,
                Clskd: c,
                Notrans: s ? 1 : 0,
                Airline: {
                    Name: v ? v.text : "",
                    Code: v ? v.City : "",
                    SelectedBy: v ? v.SelectedBy : ""
                },
                HistorySearch: "0"
            };
            return {
                panelName: h ? i.PanelName["flight-taiwan"] : i.PanelName["flight-international"],
                data: y
            }
        }
        ;
        var l = function(e, t, n) {
            var a;
            void 0 === n && (n = !1);
            for (var r = [], o = 0; o < e.DepDest.length && (n || !(o >= 1)); o++)
                if (null === (a = e.DepDest[o][t]) || void 0 === a ? void 0 : a.selectedData[0]) {
                    var i = e.DepDest[o][t].selectedData[0]
                      , l = i.airportCode
                      , c = i.cityCode
                      , s = i.countryCode
                      , u = i.SelectedBy
                      , d = i.txt
                      , p = i.value;
                    if ("Menu" === e.DepDest[o][t].selectedData[0].SelectedBy) {
                        var f = e.DepDest[o][t].selectedData[0]
                          , h = f.LineText
                          , m = f.Line
                          , v = f.text.split("-")[0];
                        r.push({
                            Line: {
                                Name: h,
                                Code: m
                            },
                            City: {
                                Name: v,
                                Code: c
                            },
                            SelectedBy: u
                        })
                    } else {
                        var y = e.DepDest[o][t].selectedData[0].airportName;
                        l && "" !== l ? "Departure" === t ? r.push({
                            Airport: {
                                Name: y,
                                Code: l
                            },
                            SelectedBy: u
                        }) : "Destination" === t && r.push({
                            DAirportType: {
                                Name: y,
                                Code: l
                            },
                            SelectedBy: u
                        }) : r.push({
                            Line: {
                                Name: p,
                                Code: s
                            },
                            City: {
                                Name: d,
                                Code: c
                            },
                            SelectedBy: u
                        })
                    }
                }
            return r
        }
    },
    197: function(e, t, n) {
        e.exports = {
            LbxRcln: "LbxRcln",
            LbxRcln_content: "LbxRcln_content",
            popup: "popup",
            "LbxRcln_close-btn": "LbxRcln_close-btn"
        }
    },
    198: function(e, t, n) {
        e.exports = {
            travel_M: "travel_M--25L85",
            themeTravel_M: "themeTravel_M--3KfXH",
            cruise_M: "cruise_M--3CCoJ",
            PpRcln1: "PpRcln1--2jaXA",
            row: "row--1f0Zy",
            red_btn: "red_btn--2JjvU",
            history_destination: "history_destination--1L5TD",
            history_theme: "history_theme--2OMl_",
            history_departure: "history_departure--32r_U",
            history_date: "history_date--1GReo",
            bubble_travel: "bubble_travel--CvbDX",
            groupFree_M: "groupFree_M--__fmf",
            inputSkin_Parent: "inputSkin_Parent--1C8-D",
            tabs_container: "tabs_container--3vm6i",
            travelSearch_M: "travelSearch_M--3_-Bu",
            tabs: "tabs--149im",
            popup: "popup--1esDi",
            rowSkin: "rowSkin--o1cKv",
            travel_PC: "travel_PC--3Puuh",
            history_dateAndRoom: "history_dateAndRoom--1AVjA",
            history_dateAndRoom_date: "history_dateAndRoom_date--oGs4O",
            doubleCalendar: "doubleCalendar--1irUG",
            keyword: "keyword--1NLIn",
            themeTravel_PC: "themeTravel_PC--3qR0e",
            cruise_PC: "cruise_PC--3UFwJ",
            groupFree_PC: "groupFree_PC--1afq0",
            travelSearch_PC: "travelSearch_PC--sisBx",
            defaultSkin: "defaultSkin--eTZR4",
            active: "active--3RmGg"
        }
    },
    199: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "default", (function() {
            return l
        }
        ));
        var a = n(0)
          , r = n.n(a)
          , o = n(8)
          , i = n.n(o)
          , l = (n(28),
        n(197),
        function(e) {
            var t = function() {
                e.closeLbxRcln && e.closeLbxRcln()
            };
            return i.a.createPortal(r.a.createElement(r.a.Fragment, null, e.children && e.open && r.a.createElement("div", {
                className: "LbxRcln ".concat(e.className, " commonBaseStyle"),
                onClick: t
            }, r.a.createElement("div", {
                className: "LbxRcln_content",
                onClick: function(t) {
                    t.stopPropagation(),
                    e.childrenClick && e.childrenClick()
                }
            }, r.a.createElement("span", {
                className: "LbxRcln_close-btn",
                onClick: t
            }, r.a.createElement("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 10 10"
            }, r.a.createElement("path", {
                d: "M10 8.59L8.59 10 5 6.41 1.41 10 0 8.59 3.59 5 0 1.41 1.41 0 5 3.59 8.59 0 10 1.41 6.41 5z"
            }))), e.children))), e.insertNode || document.body)
        }
        )
    },
    200: function(e, t, n) {
        "use strict";
        var a = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , r = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , o = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
          , i = this && this.__spread || function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(o(arguments[t]));
            return e
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.modifyAirlineCode = t.getAirlineMenu = t.getAirlineSearch = t.keyFilterForAirlines = t.twfetchKeyWord = t.twrajxProcess = t.parseRoomListArrayTw = t.formattwSoure = t.twDestination = t.twDeparture = t.fetchKeywordSecondAPI = t.fetchKeyWord = t.rajxProcess = t.airPortDataTransform = t.formatSoure = t.personalDestinationSimple = t.personalDestination = t.fullAirline = t.personalDeparture = t.urltoRoomList = t.daysOpt = t.classLevelOpt = t.classLevelOptB2B = void 0;
        var l = n(26)
          , c = n(205)
          , s = n(215)
          , u = n(237);
        t.classLevelOptB2B = [{
            text: "艙等不限",
            value: "4"
        }, {
            text: "經濟艙",
            value: "0"
        }, {
            text: "豪華經濟艙",
            value: "3"
        }, {
            text: "商務艙",
            value: "1"
        }, {
            text: "頭等艙",
            value: "2"
        }],
        t.classLevelOpt = [{
            text: "艙等不限",
            value: "4"
        }, {
            text: "經濟艙",
            value: "0"
        }, {
            text: "豪華經濟艙",
            value: "3"
        }, {
            text: "商務艙",
            value: "1"
        }, {
            text: "頭等艙",
            value: "2"
        }],
        t.daysOpt = [{
            text: "不限",
            value: ""
        }, {
            text: "2天",
            value: "2"
        }, {
            text: "3天",
            value: "3"
        }, {
            text: "4天",
            value: "4"
        }, {
            text: "5天",
            value: "5"
        }, {
            text: "6天",
            value: "6"
        }, {
            text: "7天",
            value: "7"
        }, {
            text: "8天以上",
            value: "8"
        }],
        t.urltoRoomList = function(e, t, n, a) {
            for (var r = [], o = 0; o < t; o++) {
                var i, l = parseInt(n[o].split("-")[0]), c = a[o].split("-")[0].split(";").filter((function(e) {
                    return e.length > 0
                }
                )), s = a[o].split("-")[1].split(";").filter((function(e) {
                    return e.length > 0
                }
                ));
                e.roomData.push({
                    adult: l,
                    childrenWithBed: c,
                    childrenNoBed: s
                }),
                i = l + c.length + s.length,
                r.push(i)
            }
            return r
        }
        ,
        t.personalDeparture = function(e) {
            return a(void 0, void 0, void 0, (function() {
                var t, n, a, o, i;
                return r(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = e ? e.vacationPersonal : l.vacationPersonal,
                        (n = sessionStorage.getItem(t.departure)) && c.isJsonString(n) ? (a = JSON.parse(n),
                        (i = Object.keys(a)) ? [2, i.map((function(e) {
                            return {
                                text: a[e],
                                value: e
                            }
                        }
                        ))] : [3, 4]) : [3, 1];
                    case 1:
                        return [4, fetch(t.departure)];
                    case 2:
                        return [4, r.sent().json()];
                    case 3:
                        if (o = r.sent(),
                        sessionStorage.setItem(t.departure, o),
                        Array.isArray(o))
                            return [2, o.map((function(e) {
                                return {
                                    text: e.CityName,
                                    value: e.Country + "_" + e.City
                                }
                            }
                            ))];
                        if ("string" == typeof o && (i = Object.keys(JSON.parse(o))))
                            return [2, i.map((function(e) {
                                return {
                                    text: JSON.parse(o)[e],
                                    value: e
                                }
                            }
                            ))];
                        r.label = 4;
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.fullAirline = function(e) {
            return a(void 0, void 0, void 0, (function() {
                var t, n;
                return r(this, (function(a) {
                    return t = e ? e.vacationPersonal : l.vacationPersonal,
                    (n = sessionStorage.getItem(t.airline)) && c.isJsonString(n) ? [2, JSON.parse(n)] : [2, fetch(t.airline).then((function(e) {
                        return e.json()
                    }
                    )).then((function(e) {
                        var n = JSON.parse(e);
                        return sessionStorage.setItem(t.airline, JSON.stringify(n)),
                        n
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        t.personalDestination = function(e, t) {
            return void 0 === t && (t = !1),
            a(void 0, void 0, void 0, (function() {
                var n, a, o;
                return r(this, (function(r) {
                    return n = t ? l.b2b_vacation.vacationPersonal : e ? e.vacationPersonal : l.vacationPersonal,
                    a = n.destination,
                    (o = sessionStorage.getItem(a)) && c.isJsonString(o) ? [2, JSON.parse(o)] : [2, fetch(a).then((function(e) {
                        return e.json()
                    }
                    )).then((function(e) {
                        return sessionStorage.setItem(a, e),
                        e
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        t.personalDestinationSimple = function(e) {
            return void 0 === e && (e = !1),
            a(void 0, void 0, void 0, (function() {
                var n, a, o, i, s;
                return r(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return n = e ? l.b2b_vacation.vacationPersonal.destinationSimple : l.vacationPersonal.destinationSimple,
                        (a = sessionStorage.getItem(n)) && c.isJsonString(a) ? [2, JSON.parse(a)] : [3, 1];
                    case 1:
                        return r.trys.push([1, 3, , 4]),
                        [4, u.default(n)];
                    case 2:
                        return o = r.sent(),
                        i = t.formatSoure(JSON.parse(o.data)),
                        s = JSON.stringify(i),
                        sessionStorage.setItem(n, s),
                        [2, i];
                    case 3:
                        throw r.sent();
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.formatSoure = function(e) {
            var t = e;
            "string" == typeof t && (t = JSON.parse(t));
            var n = {
                Line: {},
                Country: {},
                City: {}
            }
              , a = t.Line
              , r = t.City
              , o = t.Country;
            for (var i in a && a.forEach((function(e) {
                var t = e.Line
                  , a = e.LineName;
                n.Line[t] = a,
                n.Country[t] = {}
            }
            )),
            o && o.forEach((function(e) {
                var t = e.Line;
                e.CountryList.forEach((function(e) {
                    var a = e.Country
                      , r = e.CountryName;
                    n.Country[t][a] = r,
                    n.City[a] = {}
                }
                ))
            }
            )),
            r && r.forEach((function(e) {
                var t = e.Country;
                e.CityList.forEach((function(e) {
                    var a = e.City
                      , r = e.CityName + "(" + e.CityEName + ")" + a;
                    n.City[t][a] = r
                }
                ))
            }
            )),
            n.City)
                if (0 === Object.keys(n.City[i]).length)
                    for (var l in delete n.City[i],
                    n.Country)
                        n.Country[l][i] && delete n.Country[l][i];
            return n
        }
        ,
        t.airPortDataTransform = function(e) {
            var t = {
                Line: "",
                Country: "",
                City: "",
                level3: "",
                level2: "機場",
                Airport: "",
                txt: ""
            }
              , n = [];
            if ("string" == typeof e) {
                var a = JSON.parse(e);
                a.Airport.forEach((function(e) {
                    e.AirportList.forEach((function(a) {
                        (t = {}).Country = e.Country,
                        t.City = e.City,
                        t.Airport = a.Airport,
                        t.airportValue = a.Airport,
                        t.level3 = a.Airport,
                        t.value = a.Airport,
                        t.level2 = e.level2 ? e.level2 : "機場",
                        t.text = a.AirportName + " (" + a.AirportEName + ")",
                        t.txt = a.AirportName + " (" + a.Airport + ")",
                        n.push(t)
                    }
                    ))
                }
                ));
                var r = [];
                a.City.forEach((function(e) {
                    e.CityList.forEach((function(t) {
                        var n = {};
                        n.City = t.City,
                        n.CityEName = t.CityEName,
                        n.CityName = t.CityName,
                        n.Country = e.Country,
                        r.push(n)
                    }
                    ))
                }
                ));
                var o = [];
                a.Country.forEach((function(e) {
                    e.CountryList.forEach((function(t) {
                        var n = {};
                        n.Country = t.Country,
                        n.CountryName = t.CountryName,
                        n.Line = e.Line,
                        o.push(n)
                    }
                    ))
                }
                )),
                n.filter((function(e) {
                    r.filter((function(t) {
                        t.City === e.City && t.Country === e.Country && o.filter((function(n) {
                            n.Country === e.Country && (e.CountryName = n.CountryName,
                            e.Line = n.Line,
                            e.txt = t.CityName + "(" + t.CityEName + ")" + e.City + "-" + e.CountryName + "-" + e.txt,
                            e.CityName = t.CityName)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            if ("object" == typeof e) {
                e.Airport.forEach((function(e) {
                    e.AirportList.forEach((function(a) {
                        (t = {}).Country = e.Country,
                        t.City = e.City,
                        t.Airport = a.Airport,
                        t.airportValue = a.Airport,
                        t.level3 = a.Airport,
                        t.value = a.Airport,
                        t.level2 = e.level2 ? e.level2 : "機場",
                        t.text = a.AirportName + " (" + a.AirportEName + ")",
                        t.txt = a.AirportName + " (" + a.Airport + ")",
                        n.push(t)
                    }
                    ))
                }
                ));
                var i = [];
                e.City.forEach((function(e) {
                    e.CityList.forEach((function(t) {
                        var n = {};
                        n.City = t.City,
                        n.CityEName = t.CityEName,
                        n.CityName = t.CityName,
                        n.Country = e.Country,
                        i.push(n)
                    }
                    ))
                }
                ));
                var l = [];
                e.Country.forEach((function(e) {
                    e.CountryList.forEach((function(t) {
                        var n = {};
                        n.Country = t.Country,
                        n.CountryName = t.CountryName,
                        n.Line = e.Line,
                        l.push(n)
                    }
                    ))
                }
                )),
                n.filter((function(e) {
                    i.filter((function(t) {
                        t.City === e.City && t.Country === e.Country && l.filter((function(n) {
                            n.Country === e.Country && (e.CountryName = n.CountryName,
                            e.Line = n.Line,
                            e.txt = t.CityName + "(" + t.CityEName + ")" + e.City + "-" + e.CountryName + "-" + e.txt,
                            e.CityName = t.CityName)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            return n
        }
        ,
        t.rajxProcess = function(e) {
            var n = e;
            "string" == typeof e && (n = JSON.parse(e));
            var a = n.Line
              , r = n.City
              , o = n.Country
              , l = [];
            a && a.forEach((function(e, t) {
                for (var n, a = 0; a < o.length; a++)
                    if (parseInt(o[a].Line) === parseInt(e.Line)) {
                        n = o[a].CountryList;
                        break
                    }
                n.forEach((function(t) {
                    var n = t.Country;
                    r.find((function(e) {
                        if (e.Country === n)
                            return e
                    }
                    )).CityList.forEach((function(t) {
                        var a = {
                            City: t.City,
                            Country: n,
                            Line: e.Line,
                            level2: "城市",
                            level3: t.City + "-" + n,
                            text: t.CityName + "(" + t.CityEName + ")" + t.City,
                            txt: t.CityName + "(" + t.CityEName + ")" + t.City,
                            value: e.Line + "-" + n + "-" + t.City
                        };
                        l.push(a)
                    }
                    ))
                }
                ))
            }
            ));
            var c = t.airPortDataTransform(e);
            return l.push.apply(l, i(c)),
            {
                Destinations: l
            }
        }
        ,
        t.fetchKeyWord = s.fetchVacationKeyWord(!0),
        t.fetchKeywordSecondAPI = function(e) {
            return a(void 0, void 0, void 0, (function() {
                var t, n, a, o, i, c, s, u, d, p, f, h, m;
                return r(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = e.keyWord,
                        n = e.apiSource,
                        a = e.isResultInit,
                        o = e.isB2B,
                        i = /([\u4E00-\u9FA5]+$)|(d+$)|([a-zA-Z])|[0-9]/,
                        t.length < 1 ? [2] : i.test(t) ? (window.abortController && window.abortController.abort(),
                        c = new AbortController,
                        window.abortController = c,
                        s = {
                            method: "GET",
                            headers: new Headers({
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                            })
                        },
                        a || Object.assign(s, {
                            signal: c.signal
                        }),
                        o && Object.assign(s, {
                            credentials: "include"
                        }),
                        u = o ? l.b2b_vacation.vacationPersonal.destinationAutoComplete : n ? n.vacationPersonal.destinationAutoComplete : l.vacationPersonal.destinationAutoComplete,
                        d = "",
                        "keyWord",
                        a && (d = ")"),
                        p = -1 === u.indexOf(".json") ? u + (-1 !== u.indexOf("?") ? "&" : "?") + "keyWord=" + d + t : u,
                        [4, fetch(p, s)]) : [2, {
                            Destinations: []
                        }];
                    case 1:
                        return [4, r.sent().json()];
                    case 2:
                        return f = r.sent(),
                        h = [],
                        m = {
                            Line: "",
                            Country: "",
                            City: "",
                            level3: "",
                            level2: "",
                            text: "",
                            txt: ""
                        },
                        "object" == typeof f && f.Destinations && f.Destinations.forEach((function(e) {
                            m = {};
                            var t = e.Airport ? "機場" : "城市";
                            e.Airport && (m.Airport = e.Airport),
                            m.Line = e.line,
                            m.Country = e.country,
                            m.City = e.city,
                            m.level3 = e.city,
                            m.level2 = e.level2 ? e.level2 : t,
                            m.txt = e.Name,
                            m.text = e.Name,
                            m.value = "" + e.city,
                            h.push(m)
                        }
                        )),
                        [2, {
                            Destinations: h
                        }]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.twDeparture = function(e) {
            return a(void 0, void 0, void 0, (function() {
                var t, n, a, o, i;
                return r(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = e ? e.vacationTaiwanSearch.departure : l.vacationTaiwanSearch.departure,
                        (n = sessionStorage.getItem(t)) && c.isJsonString(n) ? (a = JSON.parse(n),
                        (i = Object.keys(a)) ? [2, i.map((function(e) {
                            return {
                                text: a[e],
                                value: e
                            }
                        }
                        ))] : [3, 4]) : [3, 1];
                    case 1:
                        return [4, fetch(t)];
                    case 2:
                        return [4, r.sent().json()];
                    case 3:
                        if (o = r.sent(),
                        sessionStorage.setItem(t, o),
                        i = Object.keys(JSON.parse(o)))
                            return [2, i.map((function(e) {
                                return {
                                    text: JSON.parse(o)[e],
                                    value: e
                                }
                            }
                            ))];
                        r.label = 4;
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.twDestination = function(e, t) {
            return a(void 0, void 0, void 0, (function() {
                var n, a, o, i;
                return r(this, (function(r) {
                    return n = t ? t.vacationTaiwanSearch.destinationS : l.vacationTaiwanSearch.destinationS,
                    a = t ? t.vacationTaiwanSearch.destination : l.vacationTaiwanSearch.destination,
                    o = e ? n : a,
                    (i = sessionStorage.getItem(o)) && c.isJsonString(i) ? [2, JSON.parse(i)] : [2, fetch(o).then((function(e) {
                        return e.json()
                    }
                    )).then((function(e) {
                        return sessionStorage.setItem(o, e),
                        e
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        t.formattwSoure = function(e) {
            var t = e;
            "string" == typeof t && (t = JSON.parse(t));
            var n = {
                Line: {
                    "01": "台灣"
                },
                Zone: {},
                City: {}
            }
              , a = t.Zone
              , r = t.City;
            return a && a.forEach((function(e) {
                var t = e.Zone;
                n.Zone["01"] = {},
                a.forEach((function(e) {
                    var t = e.Zone
                      , a = e.ZoneName;
                    n.Zone["01"][t] = a
                }
                )),
                n.City[t] = {}
            }
            )),
            r && r.forEach((function(e) {
                var t = e.Zone;
                e.CityList.forEach((function(e) {
                    var a = e.City
                      , r = e.CityName;
                    n.City[t][a] = r
                }
                ))
            }
            )),
            n
        }
        ,
        t.parseRoomListArrayTw = function(e) {
            var t = []
              , n = [];
            return e.forEach((function(e, a) {
                var r = e.adult
                  , o = e.childrenNoBed
                  , i = e.childrenWithBed
                  , l = i.length
                  , c = o ? o.length : 0
                  , s = r + "-" + l + "-" + c
                  , u = [];
                l > 0 ? u.push(i.join(";")) : u.push(""),
                c > 0 ? u.push(o.join(";")) : u.push(""),
                n.push(u.join("-")),
                t.push(s)
            }
            )),
            [t, n]
        }
        ,
        t.twrajxProcess = function(e) {
            var t = e;
            "string" == typeof e && (t = JSON.parse(e));
            t.Line;
            var n = t.City
              , a = (t.Country,
            []);
            return n && n.forEach((function(e, t) {
                var r = n[t].CityList
                  , o = n[t].Zone;
                r.forEach((function(e, t) {
                    var n = e.City
                      , r = e.CityName
                      , i = {
                        City: n,
                        Zone: o,
                        level2: "城市",
                        level3: o + "_" + n + "_",
                        text: r,
                        txt: r,
                        value: ""
                    };
                    a.push(i)
                }
                ))
            }
            )),
            {
                Destinations: a
            }
        }
        ,
        t.twfetchKeyWord = function(e) {
            return a(void 0, void 0, void 0, (function() {
                var t, n, a, o, i, c, s, u, d, p, f, h;
                return r(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        if (t = e.destination,
                        n = e.keyword,
                        a = e.callback,
                        o = e.apiSource,
                        i = e.isB2B,
                        window.abortController && window.abortController.abort(),
                        c = new AbortController,
                        window.abortController = c,
                        s = /([\u4E00-\u9FA5]+$)|(d+$)|([a-zA-Z])|[0-9]/,
                        n.length < 2)
                            return [2];
                        if (!s.test(n))
                            return [2];
                        u = "",
                        "" !== t.inputText && (u = t.selectedData[0].Zone + "_" + t.selectedData[0].City + "_"),
                        d = o ? o.vacationTaiwanSearch.keyword : l.vacationTaiwanSearch.keyword,
                        p = {
                            method: "POST",
                            body: "Destination=" + u + "&sKeyWord=" + n.replace(/([\s]*$)/g, ""),
                            signal: c.signal,
                            headers: new Headers({
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                            })
                        },
                        i && Object.assign(p, {
                            credentials: "include"
                        }),
                        r.label = 1;
                    case 1:
                        return r.trys.push([1, 4, , 5]),
                        [4, fetch(d, p)];
                    case 2:
                        return [4, r.sent().json()];
                    case 3:
                        return f = r.sent(),
                        h = f.map((function(e, t) {
                            return e.level2 = "only",
                            e.txt = e.label,
                            e.level3 = e.value,
                            delete e.label,
                            delete e.value,
                            e
                        }
                        )),
                        a(h),
                        [2, {
                            data: {
                                Destinations: h
                            },
                            searchKeyWord: n
                        }];
                    case 4:
                        return r.sent(),
                        [3, 5];
                    case 5:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.keyFilterForAirlines = function(e, t) {
            var n = [];
            return e.forEach((function(e) {
                (e.AirlineName + "(" + e.AirlineCode + ")").includes(t) && n.push(e)
            }
            )),
            {
                Destinations: n
            }
        }
        ,
        t.getAirlineSearch = function(e) {
            return void 0 === e && (e = !1),
            a(void 0, void 0, void 0, (function() {
                var t, n, a, o;
                return r(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = e ? l.b2b_vacation.vacationPersonal.airlineSearch : l.vacationPersonal.airlineSearch,
                        (n = sessionStorage.getItem(t)) && c.isJsonString(n) ? [2, JSON.parse(n)] : [3, 1];
                    case 1:
                        return r.trys.push([1, 3, , 4]),
                        [4, fetch(t).then((function(e) {
                            return e.json()
                        }
                        )).then((function(e) {
                            return e
                        }
                        ))];
                    case 2:
                        return a = r.sent(),
                        o = JSON.stringify(a),
                        sessionStorage.setItem(t, o),
                        [2, a];
                    case 3:
                        throw r.sent();
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.getAirlineMenu = function(e) {
            return void 0 === e && (e = !1),
            a(void 0, void 0, void 0, (function() {
                var t, n, a, o;
                return r(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = e ? l.b2b_vacation.vacationPersonal.airlineMenu : l.vacationPersonal.airlineMenu,
                        (n = sessionStorage.getItem(t)) && c.isJsonString(n) ? [2, JSON.parse(n)] : [3, 1];
                    case 1:
                        return [4, fetch(t).then((function(e) {
                            if (!e.ok)
                                throw new Error(" " + e.status + "(" + e.statusText + ").");
                            return e.json()
                        }
                        )).then((function(e) {
                            return JSON.parse("{ " + e.replace(/\r?\n|\r/g, "").replace(/(?:var|let|const)\s(\w+)\s=/g, '"$1":').replace(/;/g, ",").replace(/,$/g, "").replace(/'/g, '"') + "}")
                        }
                        ))];
                    case 2:
                        return (a = r.sent()).Country = {
                            _1: {
                                _1: "航空公司"
                            }
                        },
                        a.City = a.airline,
                        delete a.airline,
                        a.Line = a.line,
                        delete a.line,
                        o = JSON.stringify(a),
                        sessionStorage.setItem(t, o),
                        [2, a]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.modifyAirlineCode = function(e) {
            var t = e.match(/(.+) - (.+)/);
            return t ? t[1] + "(" + t[2] + ")" : e
        }
    },
    204: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.reducer = t.containerState = void 0;
        var r = n(147)
          , o = n(140);
        t.containerState = {
            DepartureData: [],
            Departure: "",
            LbxRclnisOpen: !1,
            ClickStart: {
                type: !1,
                date: ""
            },
            DateRange: {
                start: o().format("YYYY-MM-DD"),
                end: o().add(3, "y").format("YYYY-MM-DD")
            },
            DateDefaultRange: {
                start: o().add(15, "d").format("YYYY-MM-DD"),
                end: o().add(1, "m").format("YYYY-MM-DD")
            },
            MonthShowRange: {
                start: o().format("YYYY-MM"),
                end: o().add(3, "y").format("YYYY-MM")
            },
            lbxRclnisOpen: !1,
            SubmitData: {
                Destination: [],
                Departure: "",
                Keywords: "",
                IsEnsureGroup: !1,
                IsSold: !0,
                Date: [o().format("YYYY-MM-DD"), o().add(90, "d").format("YYYY-MM-DD")],
                Theme: {
                    Name: "不限",
                    Code: "999"
                }
            },
            SearchType: r.SearchType.Keyword
        },
        t.reducer = function(e, t) {
            switch (t.type) {
            case "PANELTYPE":
                return a(a({}, e), {
                    PanelType: t.PanelType
                });
            case "DEVICE":
                return a(a({}, e), {
                    Device: t.Device
                });
            case "MAINDATA":
                return a(a({}, e), {
                    Main_Data: t.Main_Data
                });
            case "DEPARTUREOPTIONDATA":
                return a(a({}, e), {
                    DepartureData: t.DepartureData
                });
            case "SETDESTINATIONDATA":
                return a(a({}, e), {
                    DestinationData: t.DestinationData
                });
            case "THEME_OPTIONDATA":
                return a(a({}, e), {
                    Theme_OptionData: t.Theme_OptionData
                });
            case "SETCLICKSTART":
                return a(a({}, e), {
                    ClickStart: t.ClickStart
                });
            case "SETLBXRCLNOPEN":
                return a(a({}, e), {
                    LbxRclnisOpen: t.LbxRclnisOpen
                });
            case "SETSUBMITDATA":
                return a(a({}, e), {
                    SubmitData: t.SubmitData
                });
            case "SEARCHTYPE":
                return a(a({}, e), {
                    SearchType: t.SearchType
                });
            default:
                return e
            }
        }
    },
    206: function(e, t, n) {
        e.exports = {
            HeadVacation_M: "HeadVacation_M",
            ntb_xitu_tab: "ntb_xitu_tab",
            foreignVacation_M: "foreignVacation_M",
            label: "label",
            active: "active",
            ntb_rcln: "ntb_rcln",
            tabs: "tabs",
            defaultSkin: "defaultSkin",
            HeadVacation_PC: "HeadVacation_PC",
            ctns: "ctns",
            panel: "panel",
            taiwanVacation: "taiwanVacation",
            foreignVacation_PC: "foreignVacation_PC",
            taiwanVacation_PC: "taiwanVacation_PC",
            ntb_xitu: "ntb_xitu",
            tabContent: "tabContent",
            highSpeedRail_PC: "highSpeedRail_PC",
            rowSkin: "rowSkin",
            groupfreeSearch: "groupfreeSearch",
            ListStyle: "ListStyle",
            "dtm_rcfr-wrap": "dtm_rcfr-wrap",
            one_floor: "one_floor",
            all_wrap: "all_wrap",
            cr_rcln: "cr_rcln",
            ic_rcln: "ic_rcln",
            tooli: "tooli",
            svg: "svg",
            "hotKeyword-pc": "hotKeyword-pc",
            HeadVacation_personal_PC: "HeadVacation_personal_PC",
            B2C_Vacation_M: "B2C_Vacation_M",
            inputSkin_group_title: "inputSkin_group_title",
            st_rcln: "st_rcln",
            "dropdown-label": "dropdown-label",
            st_rnls: "st_rnls",
            labelStyle: "labelStyle",
            labelStyle__top__title: "labelStyle__top__title",
            B2C_Vacation_PC: "B2C_Vacation_PC",
            groupfreeSearch_M: "groupfreeSearch_M",
            "search_panel-mobileHead": "search_panel-mobileHead",
            "search_panel-mobileHead_close": "search_panel-mobileHead_close",
            FooterSearch_searchBtn: "FooterSearch_searchBtn",
            shrink: "shrink",
            "dropdown-place-holder": "dropdown-place-holder",
            breakline: "breakline",
            hideMobileHead: "hideMobileHead"
        }
    },
    207: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PanelName = void 0,
        function(e) {
            e.HeadVacation = "HeadVacation",
            e.highSpeedRail = "highSpeedRail",
            e.foreignVacation = "foreignVacation",
            e.taiwanVacation = "taiwanVacation",
            e.vacationSearch = "vacationSearch",
            e.TWvacationSearch = "TWvacationSearch",
            e.setTourVacation = "setTourVacation"
        }(t.PanelName || (t.PanelName = {}))
    },
    208: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.reducer = t.containerState = void 0,
        t.containerState = {
            Departure: [{
                Name: "不限",
                Code: ""
            }],
            DepartureData: null,
            AllDepartue: [],
            Destination: [],
            DepartureForward: [{
                text: "台北(桃園機場)",
                value: "TW_TPE_TPE"
            }],
            DestinationForward: [],
            DepartureReturn: [],
            DestinationReturn: [{
                text: "台北(桃園機場)",
                value: "TW_TPE_TPE"
            }],
            DestinationTW: {
                inputText: "",
                selectedData: []
            },
            DestinationData: null,
            RajxData: null,
            NowMultiCities: [],
            Airline: {
                Name: "航空公司不限",
                Code: ""
            },
            AllAirlines: [],
            MatchAirlines: [{
                text: "航空公司不限",
                value: ""
            }],
            Clskd: "4",
            Notrans: !0,
            Keyword: {
                Code: "",
                Name: ""
            },
            KeywordTW: {
                inputText: "",
                selectedData: []
            },
            KeywordTWresource: null,
            RoomList: ["2-0-0"],
            roomage: [],
            roomData: [],
            roomInputText: "",
            Date: [],
            Traffic: "ALL",
            noHotel: 0,
            fthotel: "",
            Days: "",
            MatchKeywordData: [],
            MatchKeywordDataTW: [],
            KeywordText: "",
            AirlineMenu: null
        },
        t.reducer = function(e, n) {
            switch (n.type) {
            case "SETDEPARTUREDATA":
                return a(a({}, e), {
                    DepartureData: n.DepartureData
                });
            case "SETDEPARTURE":
                return a(a({}, e), {
                    Departure: n.Departure
                });
            case "SETALLDEPARTURE":
                return a(a({}, e), {
                    AllDepartue: n.AllDepartue
                });
            case "SETDEPARTUREFORWARD":
                return a(a({}, e), {
                    DepartureForward: n.DepartureForward
                });
            case "SETDEPARTURERETURN":
                return a(a({}, e), {
                    DepartureReturn: n.DepartureReturn
                });
            case "SETDESTINATIONDATA":
                return a(a({}, e), {
                    DestinationData: n.DestinationData
                });
            case "SETNOWMULTICITIES":
                return a(a({}, e), {
                    NowMultiCities: n.NowMultiCities
                });
            case "SETRAJXDATA":
                return a(a({}, e), {
                    RajxData: n.RajxData
                });
            case "SETDESTINATION":
                return a(a({}, e), {
                    Destination: n.Destination
                });
            case "SETDESTINATIONFORWARD":
                return a(a({}, e), {
                    DestinationForward: n.DestinationForward
                });
            case "SETDESTINATIONRETURN":
                return a(a({}, e), {
                    DestinationReturn: n.DestinationReturn
                });
            case "SETDATE":
                return a(a({}, e), {
                    Date: n.Date
                });
            case "SETAIRLINE":
                return a(a({}, e), {
                    Airline: n.Airline
                });
            case "SETALLAIRLINES":
                return a(a({}, e), {
                    AllAirlines: n.AllAirlines
                });
            case "SETMATCHAIRLINE":
                return a(a({}, e), {
                    MatchAirlines: n.MatchAirlines
                });
            case "SETCLSKD":
                return a(a({}, e), {
                    Clskd: n.Clskd
                });
            case "SETNOTRANS":
                return a(a({}, e), {
                    Notrans: n.Notrans
                });
            case "SETKEYWORD":
                return a(a({}, e), {
                    Keyword: n.Keyword
                });
            case "SETDAYS":
                return a(a({}, e), {
                    Days: n.Days
                });
            case "SETNOHOTEL":
                return a(a({}, e), {
                    noHotel: n.noHotel
                });
            case "SETROOMAGE":
                return a(a({}, e), {
                    roomage: n.roomage
                });
            case "SETROOMLIST":
                return a(a({}, e), {
                    RoomList: n.RoomList
                });
            case "SETROOMDATA":
                return a(a({}, e), {
                    roomData: n.roomData
                });
            case "SETROOMINPUTTEXT":
                return a(a({}, e), {
                    roomInputText: n.roomInputText
                });
            case "SETTRAFFIC":
                return a(a({}, e), {
                    Traffic: n.Traffic
                });
            case "SETISFETCHINGSECONDAPI":
                return a(a({}, e), {
                    isSecondAPI: n.isSecondAPI
                });
            case "SETDEFAULT":
                return a(a({}, e), n.defaultValue);
            case "RESET":
                return t.containerState;
            case "SETDESTINATIONTW":
                return a(a({}, e), {
                    DestinationTW: n.DestinationTW
                });
            case "SETKEYWORDTW":
                return a(a({}, e), {
                    KeywordTW: n.KeywordTW
                });
            case "SETMATCHKEYWORDDATATW":
                return a(a({}, e), {
                    MatchKeywordDataTW: n.MatchKeywordDataTW
                });
            case "SETMATCHKEYWORDDATA":
                return a(a({}, e), {
                    MatchKeywordData: n.MatchKeywordData
                });
            case "SETKEYWORDTEXT":
                return a(a({}, e), {
                    KeywordText: n.KeywordText
                });
            case "SETAIRLINEMENU":
                return a(a({}, e), {
                    AirlineMenu: n.AirlineMenu
                });
            default:
                return e
            }
        }
    },
    212: function(e, t, n) {
        "use strict";
        var a = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , r = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.fetchIntlData = void 0,
        t.fetchIntlData = function(e, t) {
            return a(void 0, void 0, void 0, (function() {
                var n, a, d, p, f, h, m, v, y, _, D, T, C;
                return r(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return n = (new Date).getTime(),
                        [4, s(t.updateTime + "?" + n)];
                    case 1:
                        if (a = r.sent(),
                        d = t.place,
                        p = t.airline,
                        f = t.placeAutoComplete,
                        h = t.airlineAutoComplete,
                        u(m = "" + d + p + f + h + "?" + a, d, p, f, h),
                        v = sessionStorage.getItem(m))
                            return [2, e(JSON.parse(v))];
                        r.label = 2;
                    case 2:
                        return r.trys.push([2, 7, , 8]),
                        [4, o(d)];
                    case 3:
                        return y = r.sent(),
                        [4, o(p)];
                    case 4:
                        return _ = r.sent(),
                        [4, o(f, !1)];
                    case 5:
                        return D = r.sent(),
                        [4, o(h, !1)];
                    case 6:
                        return T = r.sent(),
                        C = {
                            PlaceDtm: i(y),
                            AirlineDtm: l(_),
                            PlaceAct: (g = D,
                            /\([^()]*\)/,
                            /([()])/g,
                            S = g.map((function(e) {
                                return e.text = e.cityName + " " + e.cityCode,
                                e.txt = e.text + "," + e.countryName + " (所有機場)",
                                e.value = e.countryName + " " + e.countryCode + "__" + e.cityName + " " + e.cityCode,
                                e.airport && (e.airport = e.airport.map((function(t) {
                                    return t.text = t.airportName + " " + t.airportCode,
                                    t.txt = t.text,
                                    t.value = e.value + "__" + t.airportName,
                                    t
                                }
                                ))),
                                e
                            }
                            )),
                            {
                                Destinations: S
                            }),
                            AirlineAct: c(T)
                        },
                        sessionStorage.setItem(m, JSON.stringify(C)),
                        e(C),
                        [3, 8];
                    case 7:
                        return r.sent(),
                        [3, 8];
                    case 8:
                        return [2]
                    }
                    var g, S
                }
                ))
            }
            ))
        }
        ;
        var o = function(e, t, n) {
            void 0 === t && (t = !0),
            void 0 === n && (n = "GET");
            var a = (new Date).getTime();
            return fetch(e + "?" + a, {
                method: n,
                mode: "no-cors"
            }).then((function(e) {
                if (!e.ok)
                    throw new Error(" " + e.status + " (" + e.statusText + ").");
                return e.text()
            }
            )).then((function(e) {
                return t ? JSON.parse("{" + e.replace(/\r?\n|\r/g, "").replace(/(?:var|let|const)\s(\w+)\s=/g, '"$1":').replace(/;/g, ",").replace(/,$/g, "").replace(/'/g, '"') + "}") : JSON.parse(e)
            }
            )).catch((function(e) {}
            ))
        };
        function i(e) {
            var t = e.line
              , n = e.city
              , a = e.country
              , r = {}
              , o = {};
            return Object.keys(t).forEach((function(e) {
                var n = {};
                n[e] = t[e],
                o["" + e] = n
            }
            )),
            Object.keys(n).forEach((function(e) {
                r[e] = {},
                Object.keys(n[e]).forEach((function(t) {
                    var a = n[e][t];
                    r[e][t] = a.split("__");
                    var o = a.split("__")[1]
                      , i = o.split("-").length > 2;
                    "_5" === e ? i ? (n[e][t] = o.split("-")[0] + "-" + o.split("-")[1],
                    r[e][t][1] = n[e][t] + " " + o.split("-")[2].replace(/[^()]*\(|\)/g, "")) : (n[e][t] = o.split("-")[0],
                    r[e][t][1] = n[e][t] + " " + o.split("-")[1].replace(/[^()]*\(|\)/g, "")) : (n[e][t] = o.split("-")[0],
                    r[e][t][1] = i ? o.split("-")[0] + "-" + o.split("-")[1] + " " + o.split("-")[2].replace(/[^()]*\(|\)/g, "") : o.split("-")[0] + " " + o.split("-")[1].replace(/[^()]*\(|\)/g, ""))
                }
                ))
            }
            )),
            {
                Line: t,
                Country: a,
                City: n,
                FullCityName: r
            }
        }
        function l(e) {
            var t = e.line
              , n = e.airline
              , a = {};
            return Object.keys(t).forEach((function(e) {
                var n = {};
                n[e] = t[e],
                a["" + e] = n
            }
            )),
            {
                Line: t,
                Country: a,
                City: n
            }
        }
        function c(e) {
            var t = e.AirlineInfoList
              , n = [];
            return t.map((function(e, t) {
                var a = e.AirlineCode
                  , r = {
                    SelectedBy: "AutoComplete",
                    level2: "航空公司",
                    cityCode: a,
                    level3: e.AirlineName + "(" + a + ")-" + t,
                    txt: e.AirlineName + "(" + a + ")",
                    value: e.AirlineName + "(" + a + ")"
                };
                n.push(r)
            }
            )),
            {
                Destinations: n
            }
        }
        function s(e) {
            return a(this, void 0, void 0, (function() {
                var t, n, a;
                return r(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, fetch(e)];
                    case 1:
                        if (!(t = r.sent()).ok)
                            throw new Error("updateTimeData fetch failed");
                        return [4, t.text()];
                    case 2:
                        return n = r.sent(),
                        a = /let enginetime = '([^']+)'/,
                        [2, n.match(a)[1]]
                    }
                }
                ))
            }
            ))
        }
        var u = function(e, t, n, a, r) {
            for (var o = [], i = 0; i < sessionStorage.length; i++) {
                var l = sessionStorage.key(i)
                  , c = new RegExp("" + t + n + a + r);
                l.match(c) && l !== e && o.push(l)
            }
            o.forEach((function(e) {
                return sessionStorage.removeItem(e)
            }
            ))
        }
    },
    213: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0)
          , i = n(153)
          , l = n(162)
          , c = n(163)
          , s = n(13);
        n(216);
        var u = n(139)
          , d = n(150)
          , p = n(148)
          , f = n(143)
          , h = n(138);
        t.default = function(e) {
            var t = e.noHotelForRoomList
              , n = e.dropDownIcon
              , m = (e.Text,
            e.List,
            e.palceName)
              , v = e.listCount
              , y = e.onCallback
              , _ = e.limit
              , D = e.device
              , T = e.insertNode
              , C = e.totalLimit
              , g = e.childrenPerAdult
              , S = e.totalChildLimit
              , b = e.Notice
              , w = e.title
              , E = (e.readOnly,
            e.PanelProps)
              , N = e.rowSkin
              , x = (e.panelName,
            e.renderNode)
              , P = e.panel
              , k = e.isDynamicLimitChildCount
              , O = _.max
              , A = _.min
              , R = u.useConnect()
              , M = R.state
              , L = R.dispatch
              , I = M.roomData
              , j = M.roomInputText
              , B = r(o.useState([]), 2)
              , K = B[0]
              , Y = B[1]
              , F = r(o.useState(""), 2)
              , H = F[0]
              , W = F[1]
              , U = r(o.useState(0), 2)
              , J = (U[0],
            U[1])
              , V = r(o.useState(!1), 2)
              , G = V[0]
              , q = V[1]
              , Q = o.useRef(!0)
              , Z = o.useRef(!1)
              , z = -1 !== P.indexOf("b2b") ? "header_b2b_lion" : "header_lion"
              , X = {
                isRequired: !1,
                placeholder: "共N間，N人",
                iconName: "",
                readOnly: !0
            }
              , $ = ["0歲", "1歲", "2歲", "3歲", "4歲", "5歲", "6歲", "7歲", "8歲", "9歲", "10歲", "11歲"];
            o.useEffect((function() {
                Q.current && (Y(I),
                W(j))
            }
            ), [I, j]),
            o.useEffect((function() {
                Z.current ? y(I) : Z.current = !0
            }
            ), [I]);
            var ee = function(e) {
                return e.reduce((function(e, t) {
                    return e + Object.keys(t).reduce((function(e, n) {
                        return e + ("number" == typeof t[n] ? t[n] : t[n].length)
                    }
                    ), 0)
                }
                ), 0)
            }
              , te = function(e) {
                return e.reduce((function(e, t) {
                    return e + Object.keys(t).reduce((function(e, n) {
                        return e + ("number" == typeof t[n] ? 0 : t[n].length)
                    }
                    ), 0)
                }
                ), 0)
            }
              , ne = function(e) {
                var n = e.reduce((function(e, n) {
                    var a = !0 === t ? 0 : n.childrenNoBed.length;
                    return e + (n.adult + n.childrenWithBed.length + a)
                }
                ), 0);
                return !0 === t ? n + "人" : "共" + e.length + "間，" + n + "人"
            }
              , ae = function(e, t) {
                var n = e.value || e.target.value
                  , a = Number(n);
                if (J(n - 1),
                q(!1),
                a !== I.length) {
                    for (var r = [], o = 0; o < a; o++)
                        r.push({
                            adult: 1,
                            childrenWithBed: [],
                            childrenNoBed: []
                        });
                    L({
                        type: "SETROOMDATA",
                        roomData: r
                    });
                    var i = ne(r);
                    L({
                        type: "SETROOMINPUTTEXT",
                        roomInputText: i
                    })
                }
            }
              , re = function(e, n) {
                var a, r = I[e], o = (ee(I),
                te(I),
                r.adult), i = r.childrenWithBed.length;
                a = !0 === t ? 0 : r.childrenNoBed.length;
                var l = S > te(I)
                  , c = o * g > i + a
                  , s = S ? !!l && (!g || c) : !g || c;
                if (ee(I) < C) {
                    var u = JSON.parse(JSON.stringify(I))
                      , d = u[e][n];
                    "adult" !== n ? s && d.push(0) : u[e][n] = d + 1;
                    var p = ne(u);
                    L({
                        type: "SETROOMINPUTTEXT",
                        roomInputText: p
                    }),
                    L({
                        type: "SETROOMDATA",
                        roomData: u
                    })
                }
            }
              , oe = function(e, t) {
                var n = JSON.parse(JSON.stringify(I))
                  , a = n[e][t];
                if ("adult" === t) {
                    n[e][t] = a - 1;
                    var r = ee(n) - te(n)
                      , o = [];
                    switch (E) {
                    case f.EPanelKeys.personalVacation:
                        r < 2 && (n = n.map((function(e) {
                            return {
                                adult: e.adult,
                                childrenWithBed: o,
                                childrenNoBed: o
                            }
                        }
                        )));
                        break;
                    case f.EPanelKeys.taiwanVacation:
                    case f.EPanelKeys.highSpeedRail:
                    }
                } else {
                    if (0 === a.length)
                        return;
                    a.pop()
                }
                var i = ne(n);
                L({
                    type: "SETROOMINPUTTEXT",
                    roomInputText: i
                }),
                L({
                    type: "SETROOMDATA",
                    roomData: n
                })
            }
              , ie = function(e, t, n, a) {
                var r = Number(a)
                  , o = JSON.parse(JSON.stringify(I));
                o[e][t][n] = r,
                L({
                    type: "SETROOMDATA",
                    roomData: o
                })
            };
            return o.createElement(o.Fragment, null, "PC" === D ? o.createElement("div", {
                className: "room_setDropIcon"
            }, o.createElement("div", {
                className: "input-wrapper"
            }, o.createElement(l.default, a({
                inputText: j,
                title: w
            }, X, {
                insertNode: T,
                onCloseWindow: function() {
                    q(!1)
                },
                inputOnClick: function() {
                    return p.default(D, N, x, z)
                }
            }), v && o.createElement(d.default, {
                onClick: function() {
                    return q(!1)
                },
                insertNode: T
            }, o.createElement("div", {
                className: "room_count_select"
            }, o.createElement("select", null, v.map((function(e) {
                return o.createElement("option", {
                    key: e.value,
                    value: e.value
                }, e.text)
            }
            ))), o.createElement("div", {
                className: s.default({
                    "dropdown-focus": G
                }, "dropdown-place-holder selected"),
                onClick: function() {
                    q(!G)
                }
            }, "共" + I.length + "間", n ? o.createElement("div", {
                className: "nextIcon"
            }, o.createElement(h.default, {
                dropDownIcon: n,
                name: "toolnext",
                className: "svg icon_control"
            })) : ""), o.createElement("div", {
                className: s.default({
                    "dropdown-active": G
                }, "dropdown-content")
            }, v.map((function(e, t) {
                return o.createElement("span", {
                    key: e.value + "real",
                    onClick: function() {
                        ae(e)
                    }
                }, e.text)
            }
            ))))), I && I.length && I && I.map((function(e, a) {
                return o.createElement(i.RoomLitSection, {
                    key: a,
                    roomCount: a,
                    palceName: m,
                    mainName: t ? "" : "第" + (a + 1) + "間",
                    gpct: e,
                    max: O,
                    min: A,
                    onClickAdd: re,
                    onClickMinus: oe,
                    onChange: ie,
                    option: $,
                    dropDownIcon: n,
                    roomData: I,
                    isDynamicLimitChildCount: k,
                    totalLimit: C
                })
            }
            )), o.createElement(i.NoticeText, {
                Notice: b
            }))), n ? o.createElement("div", {
                className: "nextIcon"
            }, o.createElement(h.default, {
                name: "toolnext",
                className: "svg icon_control"
            })) : "") : o.createElement(c.default, a({
                customClass_container: "B2C_Vacation_M",
                inputText: j,
                title: w
            }, X, {
                insertNode: T,
                goBack: function() {
                    L({
                        type: "SETROOMDATA",
                        roomData: K
                    }),
                    L({
                        type: "SETROOMINPUTTEXT",
                        roomInputText: H
                    })
                },
                confirm: function() {
                    Y(I),
                    W(j)
                },
                onClick: function() {
                    Q.current = !1
                },
                panelProps: "",
                slideClass: "select-room"
            }), v && o.createElement("label", {
                className: "room_count_select"
            }, o.createElement("select", {
                onChange: ae,
                value: I && I.length
            }, v.map((function(e) {
                return o.createElement("option", {
                    key: e.value,
                    value: e.value
                }, e.text)
            }
            ))), e.dropDownIcon ? o.createElement("div", {
                className: "nextIcon"
            }, o.createElement(h.default, {
                name: "toolnext",
                className: "svg icon_control"
            })) : ""), I && I.length && I && I.map((function(n, a) {
                return o.createElement(i.RoomLitSection, {
                    key: a,
                    roomCount: a,
                    palceName: m,
                    mainName: t ? "" : "第" + (a + 1) + "間",
                    gpct: n,
                    max: O,
                    min: A,
                    onClickAdd: re,
                    onClickMinus: oe,
                    onChange: ie,
                    option: $,
                    dropDownIcon: e.dropDownIcon
                })
            }
            )), o.createElement(i.NoticeText, {
                Notice: b
            })))
        }
    },
    214: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.HandleSubmit = void 0;
        var a = n(140)
          , r = n(26)
          , o = n(142)
          , i = n(145)
          , l = n(200);
        t.HandleSubmit = function(e) {
            var t = e.PropsData
              , n = t.DepartureForward
              , c = t.DestinationForward
              , s = t.DepartureReturn
              , u = t.DestinationReturn
              , d = t.Departure
              , p = t.Destination
              , f = t.DestinationTW
              , h = t.Days
              , m = t.Airline
              , v = t.Clskd
              , y = t.Notrans
              , _ = t.Keyword
              , D = t.RoomList
              , T = t.roomage
              , C = t.noHotel
              , g = t.Traffic
              , S = t.roomData
              , b = e.PlaceKey
              , w = e.panelType
              , E = e.PropsData
              , N = e.panelName
              , x = (e.device,
            e.project)
              , P = e.initProps
              , k = -1 !== x.indexOf("b2b")
              , O = function(e) {
                if (P.submitUrlDomain)
                    return P.submitUrlDomain;
                if ("Xinflight" === x)
                    return r.Xinflight.Submit.freetrip;
                switch (e) {
                case "foreign":
                    return k ? r.b2b_submitUrl.vacation : r.b2c_submitUrl.vacation;
                case "TW":
                    return k ? r.b2b_submitUrl.twVacation : r.b2c_submitUrl.twVacation;
                case "setTourVacation":
                    return k ? r.b2b_submitUrl.setTourVacation : r.b2c_submitUrl.setTourVacation
                }
            }(b)
              , A = function(e, t) {
                var n, r, o, i = [];
                switch (e) {
                case "foreign":
                    return "" === t.Keywords.Name && 0 === t.Destination.length && i.push("目的地或關鍵字擇一必填"),
                    t.Date[0] ? t.Date[0] && !t.Date[1] && i.push("請輸入最晚出發日") : i.push("請輸入出發區間"),
                    a(t.Date[0]).isBefore(a(), "date") && i.push("出發日期不可早於今日"),
                    a(t.Date[1]).isBefore(a(), "date") && i.push("結束日期不可早於今日"),
                    n = [],
                    r = [],
                    o = !1,
                    S && S.map((function(e) {
                        n.push(e.adult),
                        r.push(e.childrenWithBed.length + e.childrenNoBed.length),
                        e.childrenWithBed.length + e.childrenNoBed.length > 2 * e.adult && (o = !0)
                    }
                    )),
                    2 * n.reduce((function(e, t) {
                        return e + t
                    }
                    )) < r.reduce((function(e, t) {
                        return e + t
                    }
                    )) && (o = !0),
                    o && i.push("一位大人最多只能帶2名小孩或1名小孩+1名嬰兒"),
                    !(i.length > 0) || i;
                case "TW":
                    return "" === t.Keywords.Name && (t.Destination.inputText || i.push("目的地或關鍵字擇一必填")),
                    a(t.Date[0]).isBefore(a(), "date") && i.push("出發日期不可早於今日"),
                    a(t.Date[1]).isBefore(a(), "date") && i.push("結束日期不可早於今日"),
                    t.Date[0] ? t.Date[0] && !t.Date[1] && i.push("請輸入最晚出發日") : i.push("請輸入出發區間"),
                    "" === t.Traffic && i.push("交通工具至少需要一項"),
                    !(i.length > 0) || i;
                case "setTourVacation":
                    return 0 === t.DepartureForward.length ? i.push("請輸入去程出發地") : 0 === t.DestinationForward.length ? i.push("請輸入去程目的地") : 0 === t.DepartureReturn.length ? i.push("請輸入回程出發地") : 0 === t.DestinationReturn.length ? i.push("請輸入回程目的地") : 0 !== t.Date[0].length && 0 !== t.Date[1].length || i.push("請輸入完整出發日期區間"),
                    !(i.length > 0) || i
                }
            }
              , R = {}
              , M = /([\u4E00-\u9FA5]+$)|(d+$)|([a-zA-Z])|[0-9]/
              , L = function() {
                if (void 0 === f.selectedData[0])
                    return "";
                var e = "TPH" === f.selectedData[0].City ? "PAN" : f.selectedData[0].City;
                return f.selectedData[0].Zone + "_" + e + "_"
            }
              , I = function(e) {
                return e.map((function(e, t) {
                    return e.Country + "_" + e.City + "_" + e.Line
                }
                )).join(",")
            }
              , j = function(e) {
                var t = [];
                return e && e.map((function(e) {
                    e.hasOwnProperty("Airport") ? t.push(e.Airport) : t.push("")
                }
                )),
                t.join(",")
            }
              , B = function() {
                return "vacationSearch" === N || "TWvacationSearch" === N || "setTourVacation" === N
            };
            o.onSubmit({
                target: O,
                params: function(e) {
                    switch (e) {
                    case "foreign":
                        return {
                            Departure: d,
                            Destination: p || "",
                            Date: E.Date,
                            Airline: m,
                            clskd: v,
                            noTrans: y,
                            Keywords: _,
                            FromDate: E.Date[0],
                            ToDate: E.Date[1]
                        };
                    case "setTourVacation":
                        return {
                            DepartureForward: n,
                            DestinationForward: c,
                            DepartureReturn: s,
                            DestinationReturn: u,
                            Date: E.Date,
                            Airline: m,
                            clskd: v,
                            noTrans: y,
                            Keywords: _,
                            FromDate: E.Date[0],
                            ToDate: E.Date[1]
                        };
                    case "TW":
                        return {
                            Departure: d,
                            Destination: f || "",
                            Date: E.Date,
                            Keywords: _,
                            FromDate: E.Date[0],
                            ToDate: E.Date[1],
                            Traffic: g
                        }
                    }
                }(b),
                isAwait: !!B(),
                openTarget: B() ? "_self" : "_blank"
            }).validate((function(e) {
                return A(b, e)
            }
            )).modifier((function(e) {
                return function(e, t) {
                    switch (e) {
                    case "foreign":
                        R = {
                            Departure: d[0].Code,
                            Destination: "" === p ? "" : I(p),
                            DestinationAirport: t.Destination ? j(t.Destination) : "",
                            radio: "",
                            roomlist: D,
                            roomage: T,
                            Days: h,
                            Airline: m.Code,
                            clskd: v,
                            noTrans: y ? 1 : 0,
                            Keywords: M.test(t.Keywords.Name) ? encodeURIComponent(t.Keywords.Name) : t.Keywords.Name,
                            FromDate: t.FromDate.split("-").join(""),
                            ToDate: t.ToDate.split("-").join(""),
                            fthotel: t.Keywords.Code || ""
                        };
                        break;
                    case "setTourVacation":
                        R = {
                            fDeparture: n[0].Code,
                            fDestination: "" === c ? "" : I(c),
                            tDeparture: "" === s ? "" : I(s),
                            tDestination: u[0].Code,
                            radio: "",
                            roomlist: D,
                            roomage: T,
                            Airline: m.Code,
                            clskd: v,
                            noTrans: y ? 1 : 0,
                            fdate: t.FromDate.split("-").join(""),
                            tdate: t.ToDate.split("-").join(""),
                            fthotel: t.Keywords.Code || ""
                        };
                        break;
                    case "TW":
                        R = {
                            Departure: d[0].Code,
                            Destination: L(),
                            roomlist: D,
                            roomage: T,
                            Days: h,
                            Keywords: M.test(t.Keywords.Name) ? encodeURIComponent(t.Keywords.Name) : t.Keywords.Name,
                            FromDate: t.FromDate.split("-").join(""),
                            ToDate: t.ToDate.split("-").join(""),
                            Traffic: g,
                            noHotel: C,
                            fthotel: t.Keywords.Code || ""
                        }
                    }
                    return R
                }(b, e)
            }
            )).save((function() {
                if (!k)
                    return "vacationSearch" === N || "TWvacationSearch" === N ? null : {
                        panelName: w,
                        data: E
                    }
            }
            )).saveData((function() {
                var t = e.PropsData
                  , n = function(e) {
                    return e.map((function(e) {
                        var t = e.Line
                          , n = void 0 === t ? "" : t
                          , a = e.LineText
                          , r = void 0 === a ? "" : a
                          , o = e.CountryText
                          , i = void 0 === o ? "" : o
                          , l = e.Country
                          , c = void 0 === l ? "" : l
                          , s = e.text
                          , u = void 0 === s ? "" : s
                          , d = e.City
                          , p = void 0 === d ? "" : d
                          , f = e.SelectedBy
                          , h = void 0 === f ? "" : f
                          , m = e.Zone
                          , v = void 0 === m ? "" : m
                          , y = e.ZoneText;
                        return {
                            Line: {
                                Name: r,
                                Code: n
                            },
                            Country: {
                                Name: "TW" === b ? void 0 === y ? "" : y : i,
                                Code: "TW" === b ? v : c
                            },
                            City: {
                                Name: u,
                                Code: p
                            },
                            SelectedBy: h
                        }
                    }
                    ))
                }
                  , a = t.DepartureForward;
                "setTourVacation" === b && (a.length >= 2 && a.pop(),
                a.push(n(t.DepartureReturn)[0]));
                var r, o, c = "setTourVacation" === b ? a : t.Departure;
                switch (b) {
                case "TW":
                    r = t.DestinationTW.selectedData;
                    break;
                case "setTourVacation":
                    var s = [];
                    s.push(n(t.DestinationForward)[0]),
                    (null == s ? void 0 : s.length) >= 2 && s.pop(),
                    s.push({
                        city: t.DestinationReturn[0]
                    }),
                    r = s;
                    break;
                default:
                    r = t.Destination
                }
                o = 0 === r.length ? {
                    Line: {
                        Name: "",
                        Code: ""
                    },
                    Country: {
                        Name: "",
                        Code: ""
                    },
                    City: {
                        Name: "",
                        Code: ","
                    },
                    SelectedBy: ""
                } : "setTourVacation" === b ? r : n(r);
                var u, d = l.daysOpt.filter((function(e) {
                    return e.value === t.Days
                }
                ))[0].text, p = t.Keyword.Name || "", f = t.noHotel ? 1 : 0, h = t.Notrans ? 1 : 0, m = t.Airline || "", v = t.Clskd;
                switch (t.Clskd) {
                case "0":
                    u = "經濟艙";
                    break;
                case "1":
                    u = "商務艙";
                    break;
                case "2":
                    u = "頭等艙";
                    break;
                default:
                    u = "不限"
                }
                var y = u
                  , _ = t.Date
                  , D = t.roomData.length || ""
                  , T = 0
                  , C = 0
                  , S = 0
                  , E = 0;
                t.roomData.map((function(e) {
                    var t = e.childrenWithBed.filter((function(e) {
                        return e < 2
                    }
                    ))
                      , n = e.childrenNoBed ? e.childrenNoBed.filter((function(e) {
                        return e < 2
                    }
                    )) : [];
                    E = t.length + n.length,
                    T += Number(e.adult),
                    S += Number(e.childrenWithBed.length),
                    f || (C += Number(e.childrenNoBed.length))
                }
                ));
                var N = C + S - E
                  , x = function(e, t) {
                    return {
                        panelName: e,
                        data: t
                    }
                };
                switch (w) {
                case "personalVacation":
                    return x(i.PanelName["foreignVacation-personal"], {
                        Departure: c,
                        Destination: o,
                        Date: _,
                        RoomCount: D,
                        AdultCount: T,
                        ChildrenNoBed: C,
                        ChildrenWithBed: S,
                        Keyword: p,
                        Notrans: h,
                        Airline: m,
                        Clskd: v,
                        Days: d
                    });
                case "taiwanVacation":
                    return x(i.PanelName.taiwanVacation, {
                        Departure: c,
                        Destination: o,
                        Date: _,
                        Days: d,
                        noHotel: f,
                        RoomCount: D,
                        AdultCount: T,
                        ChildrenNoBed: C,
                        ChildrenWithBed: S,
                        Keyword: p,
                        Traffic: g
                    });
                case "highSpeedRail":
                    return x(i.PanelName.highSpeedRail, {
                        Departure: c,
                        Destination: o,
                        Date: _,
                        Days: d,
                        noHotel: f,
                        Keyword: p,
                        RoomCount: D,
                        AdultCount: T,
                        ChildrenNoBed: C,
                        ChildrenWithBed: S
                    });
                case "setTourVacation":
                    return x(i.PanelName.searchFreeForeign, {
                        Departure: c,
                        Destination: o,
                        Date: _,
                        RoomCount: D,
                        AdultCount: T,
                        ChildCount: N,
                        BabyCount: E,
                        ChildrenNoBed: C,
                        ChildrenWithBed: S,
                        Keyword: p,
                        Notrans: h,
                        Airline: m,
                        Clskd: v,
                        ClskdName: y,
                        Days: d,
                        Extansion3: ""
                    });
                default:
                    return null
                }
            }
            )).send("none")
        }
    },
    215: function(e, t, n) {
        "use strict";
        var a = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , r = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.fetchVacationKeyWord = void 0;
        var o = n(26);
        t.fetchVacationKeyWord = function(e) {
            return void 0 === e && (e = !1),
            function(t, n, i, l, c) {
                return void 0 === i && (i = null),
                a(void 0, void 0, void 0, (function() {
                    var a, s, u, d, p, f, h, m;
                    return r(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return a = /([\u4E00-\u9FA5]+$)|(d+$)|([a-zA-Z])|[0-9]/,
                            n.length < 2 ? [2] : a.test(n) ? (window.abortController && window.abortController.abort(),
                            s = new AbortController,
                            window.abortController = s,
                            e ? (d = t && t.map((function(e) {
                                return e.Country + "_" + e.City
                            }
                            )),
                            u = t ? d.join(",") : "") : u = t[0].Code ? t[0].Code : t[0].Country + "_" + t[0].City,
                            p = l || (c ? o.b2b_vacation.vacationPersonal.keyword : o.vacationPersonal.keyword),
                            f = {
                                method: "POST",
                                body: "Destination=" + u + "&sKeyWord=" + encodeURIComponent(n),
                                signal: s.signal,
                                headers: new Headers({
                                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                })
                            },
                            c && Object.assign(f, {
                                credentials: "include"
                            }),
                            [4, fetch(p, f)]) : [2];
                        case 1:
                            return [4, r.sent().json()];
                        case 2:
                            return h = r.sent(),
                            m = h.map((function(e, t) {
                                return e.level2 = "only",
                                e.txt = e.label,
                                e.level3 = e.value,
                                delete e.label,
                                delete e.value,
                                e
                            }
                            )),
                            i && i(m),
                            [2, {
                                data: {
                                    Destinations: m
                                },
                                searchKeyWord: n
                            }]
                        }
                    }
                    ))
                }
                ))
            }
        }
    },
    216: function(e, t, n) {
        e.exports = {
            B2B_Vacation_M: "B2B_Vacation_M",
            sideBar_moduleContainer: "sideBar_moduleContainer",
            int_rcln_input: "int_rcln_input",
            room_count_select: "room_count_select",
            children_age_select: "children_age_select",
            B2C_Vacation_M: "B2C_Vacation_M",
            room_list_section: "room_list_section",
            child_row: "child_row",
            room_list_row: "room_list_row",
            children_ages_section: "children_ages_section",
            age_select_section: "age_select_section",
            B2B_Vacation_PC: "B2B_Vacation_PC",
            room_list_wrap_container: "room_list_wrap_container",
            B2C_Vacation_PC: "B2C_Vacation_PC",
            txt_green: "txt_green",
            "dropdown-place-holder": "dropdown-place-holder",
            selected: "selected",
            room_count_title: "room_count_title",
            row_title: "row_title",
            child_count_control: "child_count_control",
            "age-select": "age-select",
            int_gpct: "int_gpct",
            bt_rcnb: "bt_rcnb",
            page_content: "page_content",
            isHotel: "isHotel",
            input_compose: "input_compose",
            act_wrap_container: "act_wrap_container",
            wrap_container: "wrap_container",
            close_btn: "close_btn",
            st_rcln: "st_rcln",
            "dropdown-content": "dropdown-content",
            "dropdown-active": "dropdown-active"
        }
    },
    219: function(e, t, n) {
        e.exports = {
            calendar_control: "calendar_control",
            inputSkin: "inputSkin",
            inputSkin_group_content: "inputSkin_group_content",
            B2BvactionDtmM: "B2BvactionDtmM",
            allDeviceMenuListDtmRajn: "allDeviceMenuListDtmRajn",
            dtm_rcfn: "dtm_rcfn",
            sec_all: "sec_all",
            B2CvactionDtmM: "B2CvactionDtmM",
            B2C_Vacation_PC: "B2C_Vacation_PC",
            taiwanVacation: "taiwanVacation",
            freeTravel: "freeTravel",
            "dropdown-wrap": "dropdown-wrap",
            ntb_rcln: "ntb_rcln",
            tabs: "tabs",
            highSpeedRail: "highSpeedRail",
            taiwanMobile: "taiwanMobile",
            ctns: "ctns",
            panel: "panel",
            B2C_Vacation_M: "B2C_Vacation_M",
            inputSkin_Parent: "inputSkin_Parent",
            B2B_Vacation_M: "B2B_Vacation_M",
            ListStyle: "ListStyle",
            "dtm_rcfr-wrap": "dtm_rcfr-wrap",
            open: "open",
            "dtm_rcfr-label": "dtm_rcfr-label",
            sec: "sec",
            sec_title: "sec_title",
            active: "active",
            ic_rcln: "ic_rcln",
            toolchoose: "toolchoose",
            svg: "svg",
            item: "item",
            act_wrap_container: "act_wrap_container",
            noMatchText: "noMatchText",
            "m-place": "m-place",
            section: "section",
            title: "title",
            select: "select",
            red: "red",
            loadingAnimation: "loadingAnimation",
            dropdownBoxPc: "dropdownBoxPc",
            selectBox: "selectBox",
            Customize: "Customize",
            contentWrap: "contentWrap",
            dropdownBoxContent: "dropdownBoxContent",
            boxTitle: "boxTitle",
            inputGroup: "inputGroup",
            TWvacationSearch: "TWvacationSearch",
            inputBlock: "inputBlock",
            departure_control: "departure_control",
            dropdown: "dropdown",
            require: "require",
            st_rcln: "st_rcln",
            depAndDesArrow: "depAndDesArrow",
            destination_control: "destination_control",
            days_control: "days_control",
            "dropdown-place-holder": "dropdown-place-holder",
            nohotel_control: "nohotel_control",
            cr_rcln: "cr_rcln",
            indicator: "indicator",
            roomList_control: "roomList_control",
            keywords_control: "keywords_control",
            transportation: "transportation",
            M_Transport: "M_Transport",
            submitBtn: "submitBtn",
            FooterSearch_searchBtn: "FooterSearch_searchBtn",
            FooterSearch_Btn: "FooterSearch_Btn",
            search_button: "search_button",
            bt_rcnb: "bt_rcnb",
            defaultSkin: "defaultSkin",
            PC_Transport: "PC_Transport",
            taiwanVacation_PC: "taiwanVacation_PC",
            rowSkin: "rowSkin",
            calendar: "calendar",
            calendarContainer: "calendarContainer",
            close: "close",
            cy_rcln: "cy_rcln",
            next: "next",
            week: "week",
            holiday: "holiday",
            "custom-select": "custom-select",
            month_box: "month_box",
            date: "date",
            date_box: "date_box",
            empty: "empty",
            room_setDropIcon: "room_setDropIcon",
            room_list_wrap_container: "room_list_wrap_container",
            selected: "selected",
            nextIcon: "nextIcon",
            toolnext: "toolnext",
            room_list_section: "room_list_section",
            room_list_row: "room_list_row",
            int_gpct: "int_gpct",
            child_row: "child_row",
            child_count_control: "child_count_control",
            children_ages_section: "children_ages_section",
            row_title: "row_title",
            age_select_section: "age_select_section",
            children_age_select: "children_age_select",
            minus: "minus",
            add: "add",
            amount: "amount",
            close_btn: "close_btn",
            txt_green: "txt_green",
            B2B_Vacation_PC: "B2B_Vacation_PC",
            days: "days",
            departure: "departure",
            destination: "destination",
            "ListStyle-close_btn": "ListStyle-close_btn",
            sec_content: "sec_content",
            shrink: "shrink",
            check: "check",
            Rails: "Rails",
            roomList: "roomList",
            isHotel: "isHotel",
            keywords: "keywords",
            "act_rajn-result": "act_rajn-result",
            hotKey: "hotKey",
            TWvacationSearch_PC: "TWvacationSearch_PC",
            TWvacationSearch_M: "TWvacationSearch_M",
            "dropdown-content": "dropdown-content",
            toolmap: "toolmap",
            tooldate: "tooldate",
            toolmember: "toolmember",
            middleIcon: "middleIcon",
            setBackGround: "setBackGround",
            hotKeyword: "hotKeyword",
            "hotKeyword-pc": "hotKeyword-pc",
            header: "header",
            Icon: "Icon",
            free: "free",
            nvb_rslb: "nvb_rslb",
            dropdownBoxM: "dropdownBoxM",
            selectContentWrap: "selectContentWrap",
            option: "option",
            hotel: "hotel",
            sideBar_moduleContainer: "sideBar_moduleContainer",
            "MMenuListDtmRajn-RemindText": "MMenuListDtmRajn-RemindText",
            sideBar_goBack: "sideBar_goBack",
            radius: "radius",
            calendarM: "calendarM",
            noTotalNum: "noTotalNum",
            start_section: "start_section",
            year_month: "year_month",
            label_box: "label_box",
            calendar_content: "calendar_content",
            calendar_box: "calendar_box",
            canSelect: "canSelect",
            confirm_btn: "confirm_btn",
            page_content: "page_content",
            room_count_select: "room_count_select",
            int_rcln: "int_rcln",
            undefined: "undefined",
            wrapper: "wrapper",
            toolbefore: "toolbefore",
            sideBar_header_intZone: "sideBar_header_intZone",
            pink: "pink",
            inputSkin_group: "inputSkin_group",
            toolsearch2: "toolsearch2"
        }
    },
    223: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , o = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , i = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(0)
          , c = n(140)
          , s = n(13)
          , u = n(138)
          , d = n(154)
          , p = n(148)
          , f = n(159)
          , h = n(149)
          , m = n(139)
          , v = n(157)
          , y = n(158)
          , _ = n(155)
          , D = n(146)
          , T = n(137)
          , C = n(164)
          , g = n(213)
          , S = n(200)
          , b = n(214)
          , w = n(235);
        n(219);
        var E = n(143)
          , N = n(169)
          , x = n(170)
          , P = n(26)
          , k = n(287);
        t.default = function(e) {
            var t = e.device
              , n = e.PanelProps
              , O = e.PanelName
              , A = e.panel
              , R = e.rowSkin
              , M = e.renderNode
              , L = e.apiSource
              , I = -1 !== A.indexOf("b2b")
              , j = I ? "header_b2b_lion" : "header_lion"
              , B = m.useConnect()
              , K = B.state
              , Y = B.dispatch
              , F = "TWvacationSearch"
              , H = i(l.useState(), 2)
              , W = H[0]
              , U = H[1]
              , J = i(l.useState(!0), 2)
              , V = J[0]
              , G = J[1]
              , q = K.Departure
              , Q = K.DestinationTW
              , Z = K.AllDepartue
              , z = K.Days
              , X = K.Keyword
              , $ = K.RoomList
              , ee = K.roomage
              , te = K.Traffic
              , ne = K.noHotel
              , ae = K.DepartureData
              , re = K.DestinationData
              , oe = K.RajxData
              , ie = K.roomData
              , le = K.roomInputText
              , ce = K.KeywordTW
              , se = K.MatchKeywordDataTW
              , ue = K.KeywordText
              , de = {
                start: c().add(3, "day").format("YYYY-MM-DD"),
                end: c().add(360, "day").format("YYYY-MM-DD")
            }
              , pe = i(l.useState({
                type: !1,
                date: ""
            }), 2)
              , fe = pe[0]
              , he = pe[1]
              , me = i(l.useState(""), 2)
              , ve = me[0]
              , ye = me[1]
              , _e = 0
              , De = [];
            ie.forEach((function(e) {
                _e += e.adult,
                e.childrenWithBed.forEach((function(e) {
                    De.push(e)
                }
                ))
            }
            ));
            var Te = l.useCallback((function(e, t) {
                he({
                    type: e,
                    date: t
                })
            }
            ), []);
            l.useEffect((function() {
                if (G(!1),
                O !== F)
                    return h.initialState({
                        LocalStorageName: n
                    }).getLocalStorage().done((function(e) {
                        var t = e.LocalStorageData;
                        if (O === F)
                            ;
                        else if (null !== t) {
                            var n = t.Date
                              , a = "YYYY-MM-DD"
                              , r = c(n[0]).isBefore(c(), "date")
                              , o = c(n[1]).isBefore(c(), "date")
                              , i = c(n[0]).isBefore(c().add(3, "day"), "date")
                              , l = c(n[1]).isBefore(c().add(3, "day"), "date");
                            r && (ye(c().format(a)),
                            t.Date = o ? [c().format(a), c().add(30, "day").format(a)] : [c().format(a), n[1]]),
                            (i || l) && ye(c().format(a)),
                            Y({
                                type: "SETDEFAULT",
                                defaultValue: t
                            })
                        } else
                            Ce()
                    }
                    )),
                    function() {}
                    ;
                Ce()
            }
            ), []),
            l.useEffect((function() {
                if (O === F)
                    return null !== oe && null !== re && Z.length ? (h.initialState({
                        LocalStorageName: n
                    }).getUrl().done((function(e) {
                        var t = e.urlData;
                        if (t.length && O === F) {
                            var n = {
                                Date: [],
                                Keyword: {
                                    Name: "",
                                    Code: ""
                                },
                                roomage: [],
                                roomData: [],
                                roomInputText: ""
                            };
                            if (n) {
                                var a, r, o, i, l;
                                if (t.map((function(e) {
                                    switch (e.key) {
                                    case "Departure":
                                        n[e.key] = [{
                                            Name: f.valueToOption(Z, e.value).text,
                                            Code: e.value
                                        }];
                                        break;
                                    case "Destination":
                                        var t = e.value.split("_")
                                          , i = re.City[t[0]];
                                        "TPH" === t[1] && (t[1] = "PAN");
                                        var s = t[1];
                                        if ("" === e.value || !i) {
                                            n.DestinationTW = {
                                                inputText: "",
                                                selectedData: []
                                            };
                                            break
                                        }
                                        var u = i.hasOwnProperty("PAN")
                                          , d = i.hasOwnProperty("TPH");
                                        "PAN" !== s && "TPH" !== s || (u && (t[1] = "TPH"),
                                        d && (t[1] = "TPH"));
                                        var p = i[t[1]];
                                        if (!p) {
                                            n.DestinationTW = {
                                                inputText: "",
                                                selectedData: []
                                            };
                                            break
                                        }
                                        var h = !1;
                                        Object.keys(re).includes("Country") || Object.keys(re.City).forEach((function(e) {
                                            Object.keys(re.City[e]).forEach((function(t) {
                                                re.City[e][t] === re.Zone["01"][e] && p === re.City[e][t] && (h = !0)
                                            }
                                            ))
                                        }
                                        )),
                                        h && (p += "全部"),
                                        n.DestinationTW = {
                                            inputText: p,
                                            selectedData: [{
                                                City: t[1],
                                                Line: "01",
                                                LineText: "台灣",
                                                SelectedBy: "Menu",
                                                text: p,
                                                value: ["01", t[0], t[1]].join("-"),
                                                Zone: t[0],
                                                ZoneText: p
                                            }]
                                        };
                                        break;
                                    case "FromDate":
                                    case "ToDate":
                                        n.Date["FromDate" === e.key ? 0 : 1] = c(e.value).format("YYYY-MM-DD");
                                        break;
                                    case "Days":
                                        n[e.key] = e.value && 0 !== e.value ? e.value : "";
                                        break;
                                    case "Keywords":
                                        n.Keyword.Name = e.value;
                                        break;
                                    case "noHotel":
                                        a = parseInt(e.value),
                                        n[e.key] = parseInt(e.value);
                                        break;
                                    default:
                                        "roomlist" == e.key && (r = e.value),
                                        "roomage" == e.key && (o = e.value),
                                        "fthotel" == e.key && (l = e.value),
                                        n[e.key] = e.value
                                    }
                                }
                                )),
                                n.Keyword.Code = l,
                                o = o || ee.join(","),
                                i = (r = r || $.join(",")).split(",").length,
                                1 == a) {
                                    var s, u = parseInt(r.split("-")[0]), d = 0 == parseInt(r.split("-")[1]) ? [] : o.split("-")[0].split(";");
                                    n.roomData.push({
                                        adult: u,
                                        childrenWithBed: d
                                    }),
                                    s = u + d.length,
                                    n.roomInputText = s + "人"
                                } else {
                                    var p = r.split(",")
                                      , h = o.split(",")
                                      , m = S.urltoRoomList(n, i, p, h).reduce((function(e, t) {
                                        return e + t
                                    }
                                    ));
                                    n.roomInputText = "共" + p.length + "間，" + m + "人"
                                }
                                Y({
                                    type: "SETDEFAULT",
                                    defaultValue: n
                                })
                            }
                        }
                    }
                    )),
                    function() {}
                    ) : void 0
            }
            ), [Z, re, oe]);
            var Ce = function() {
                Y({
                    type: "RESET"
                }),
                Y({
                    type: "SETDATE",
                    Date: [c().add(3, "day").format("YYYY-MM-DD"), c().add(30, "day").format("YYYY-MM-DD")]
                }),
                Y({
                    type: "SETROOMDATA",
                    roomData: ge.List
                }),
                Y({
                    type: "SETROOMINPUTTEXT",
                    roomInputText: ge.Text
                }),
                Y({
                    type: "SETDAYS",
                    Days: ""
                }),
                S.twDeparture(L).then((function(e) {
                    Y({
                        type: "SETALLDEPARTURE",
                        AllDepartue: e
                    })
                }
                )),
                S.twDestination(!0, L).then((function(e) {
                    var t = S.formattwSoure(e);
                    Y({
                        type: "SETDESTINATIONDATA",
                        DestinationData: t
                    })
                }
                )),
                S.twDestination(!1, L).then((function(e) {
                    var t = S.twrajxProcess(e);
                    Y({
                        type: "SETRAJXDATA",
                        RajxData: t
                    })
                }
                )),
                "highSpeedRail" === n && Y({
                    type: "SETTRAFFIC",
                    Traffic: "THSR"
                })
            }
              , ge = {
                device: "PC" === t ? T.Edevice[0] : T.Edevice[1],
                Text: V ? "共1間，2人" : "共1間，" + (_e + De.length) + "人",
                noHotelForRoomList: !1,
                List: V ? [{
                    adult: V ? 2 : _e,
                    childrenWithBed: V ? [] : De,
                    childrenNoBed: []
                }] : [{
                    adult: _e,
                    childrenWithBed: De,
                    childrenNoBed: []
                }],
                palceName: {
                    adult: "大人",
                    childrenWithBed: "小孩佔床",
                    childrenNoBed: "小孩不佔床"
                },
                listCount: [{
                    text: "共1間",
                    value: 1
                }, {
                    text: "共2間",
                    value: 2
                }, {
                    text: "共3間",
                    value: 3
                }, {
                    text: "共4間",
                    value: 4
                }, {
                    text: "共5間",
                    value: 5
                }, {
                    text: "共6間",
                    value: 6
                }, {
                    text: "共7間",
                    value: 7
                }],
                onCallback: function(e) {
                    var t = i(S.parseRoomListArrayTw(e), 2)
                      , n = t[0]
                      , a = t[1];
                    Y({
                        type: "SETROOMLIST",
                        RoomList: n
                    }),
                    Y({
                        type: "SETROOMAGE",
                        roomage: a
                    })
                },
                limit: {
                    max: [10, 3],
                    min: [1, 0]
                },
                totalLimit: "highSpeedRail" === n ? 20 : 28,
                totalChildLimit: 3,
                Notice: ["highSpeedRail" === n ? "依高鐵產品類型，目前一張訂單最大上限人數為20人(含小孩及嬰兒，上限3人)。" : "※依據交通類型，目前一張訂單最大上限人數為28人(含小孩及嬰兒，上限3人)。", "※小孩定義：年滿2歲(含)以上未滿12歲。嬰兒定義：未滿2歲。"]
            }
              , Se = {
                device: "PC" === t ? T.Edevice[0] : T.Edevice[1],
                noHotelForRoomList: !0,
                Text: _e + De.length + "人",
                List: [{
                    adult: _e,
                    childrenWithBed: De
                }],
                palceName: {
                    adult: "成人",
                    childrenWithBed: "小孩"
                },
                onCallback: function(e) {
                    var t = i(S.parseRoomListArrayTw(e), 2)
                      , n = t[0]
                      , a = t[1];
                    Y({
                        type: "SETROOMLIST",
                        RoomList: n
                    }),
                    Y({
                        type: "SETROOMAGE",
                        roomage: a
                    })
                },
                limit: {
                    max: [28, 3],
                    min: [1, 0]
                },
                totalLimit: "highSpeedRail" === n ? 20 : 28,
                totalChildLimit: 3
            }
              , be = function(e, t) {
                Y({
                    type: "SETDATE",
                    Date: [e, t]
                })
            }
              , we = "PC" === t ? !fe.type : fe.type
              , Ee = {
                middle: "wave",
                doubleCalendar: !0,
                doubleInput: !0,
                setStartDate: K.Date[0],
                setEndDate: K.Date[1],
                startTitle: "出發區間",
                dateStartTxt: "最早",
                dateEndTxt: "最晚",
                icon: "",
                minDate: we ? fe.date || ve || de.start : ve || de.start,
                maxDate: de.end,
                startMonth: c().format("YYYY-MM"),
                inputStatusCallback: Te
            }
              , Ne = {
                device: "PC" === t ? T.Edevice.PC : T.Edevice.Mobile,
                isRequired: !1,
                placeholder: "請選擇/可輸入目的地",
                title: "目的地",
                selectedData: Q.selectedData,
                inputText: Q.inputText,
                mobileClass: "B2" + (I ? "B" : "C") + "vactionDtmM taiwanMobile",
                iconName: "",
                onInputChange: function(e, t) {
                    if (e.inputText) {
                        if (!/([\u4E00-\u9FA5]+$)|(d+$)|([a-zA-Z])|[0-9]|[\(\)]/.test(e.inputText))
                            return;
                        if (t)
                            return;
                        if (e instanceof Array && 0 === e.length)
                            return
                    }
                    !function(e, t) {
                        var n = e.inputText;
                        (n.length > 0 || "" === n) && Y({
                            type: "SETDESTINATIONTW",
                            DestinationTW: e
                        })
                    }(e)
                },
                remindText: "找不到？改用 關鍵字 查查吧！",
                Dtm: {
                    levelKey: ["Line", "Zone", "City"],
                    fetchData: function() {
                        var e = k.cloneDeep(re);
                        return null === re || Object.keys(re).includes("Country") || Object.keys(e.City).forEach((function(t) {
                            Object.keys(re.City[t]).forEach((function(n) {
                                re.City[t][n] === re.Zone["01"][t] && delete e.City[t][n]
                            }
                            )),
                            e.City[t]._ = "" + e.Zone["01"][t]
                        }
                        )),
                        e
                    },
                    orderMaps: {
                        Line: ["01"]
                    }
                },
                Rajn: {
                    minimumStringQueryLength: 2,
                    minimumStringQuery: "請至少輸入兩個字",
                    noMatchText: "很抱歉，找不到符合的項目!!",
                    fetchData: function(t) {
                        return function(t) {
                            return r(void 0, void 0, void 0, (function() {
                                var n, a, r, i, l;
                                return o(this, (function(o) {
                                    switch (o.label) {
                                    case 0:
                                        if (window.abortController && window.abortController.abort(),
                                        n = new AbortController,
                                        window.abortController = n,
                                        a = e.apiSource ? e.apiSource.vacationPersonal.destinationAutoComplete + "?keyWord=" + encodeURIComponent(t) : P.hotel.destinationAutoComplete + "?keyWord=" + encodeURIComponent(t),
                                        r = /([\u4E00-\u9FA5]+$)|(d+$)|([a-zA-Z])|[0-9]|\(|\)/,
                                        i = new Promise((function(e, t) {
                                            e(null)
                                        }
                                        )),
                                        (l = t.trim()).length < 2)
                                            return [2, i];
                                        if (!r.test(l))
                                            return [2, i];
                                        o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 4, , 5]),
                                        [4, fetch(a, {
                                            method: "GET",
                                            mode: "cors",
                                            signal: n.signal,
                                            headers: new Headers({
                                                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                                            })
                                        })];
                                    case 2:
                                        return [4, o.sent().json()];
                                    case 3:
                                        return o.sent(),
                                        [2, (c = l,
                                        {
                                            data: f.keyFilter(oe, c.toUpperCase()),
                                            searchKeyWord: c
                                        })];
                                    case 4:
                                        return o.sent(),
                                        [2, void 0];
                                    case 5:
                                        return [2]
                                    }
                                    var c
                                }
                                ))
                            }
                            ))
                        }(t)
                    },
                    rules: [{
                        title: "城市",
                        icon: l.createElement(u.default, {
                            key: 1
                        })
                    }],
                    fixList: !0
                },
                useInputTextToSearch: !0
            }
              , xe = ue.length >= 2 && 0 === se.length ? "d-no" : ""
              , Pe = {
                device: "PC" === t ? T.Edevice.PC : T.Edevice.Mobile,
                isRequired: !1,
                placeholder: "請輸入產品名稱、飯店名稱",
                inputText: X.Name || "",
                mobileClass: "taiwanMobile",
                title: "關鍵字",
                iconName: "",
                selectedData: Q.selectedData,
                onInputChange: function(e, t) {
                    e.inputText && t || function(e, t) {
                        e.inputText.length > 0 ? (Y({
                            type: "SETKEYWORD",
                            Keyword: {
                                Name: e.inputText,
                                Code: e.selectedData[0] ? e.selectedData[0].fthotel : ""
                            }
                        }),
                        Y({
                            type: "SETKEYWORDTW",
                            KeywordTW: a({}, e)
                        })) : (Y({
                            type: "SETKEYWORD",
                            Keyword: {
                                Name: "",
                                Code: ""
                            }
                        }),
                        Y({
                            type: "SETKEYWORDTW",
                            KeywordTW: a({}, e)
                        }))
                    }(e)
                },
                remindText: "",
                useDtm: !1,
                Rajn: {
                    titleClass: xe,
                    noMatchText: "很抱歉，找不到符合的項目!!",
                    minimumStringQueryLength: 2,
                    minimumStringQuery: "請至少輸入二個字",
                    fetchData: function(e) {
                        var t = {
                            destination: Q,
                            keyword: e,
                            callback: function(e) {
                                Y({
                                    type: "SETMATCHKEYWORDDATATW",
                                    MatchKeywordDataTW: e
                                })
                            },
                            apiSource: L,
                            isB2B: I
                        };
                        return Y({
                            type: "SETKEYWORDTEXT",
                            KeywordText: e
                        }),
                        S.twfetchKeyWord(t)
                    },
                    chooseFirst: !1,
                    Clear: !0,
                    rules: [{
                        title: "only"
                    }],
                    fixList: !0,
                    selectNoFetch: !0
                },
                useInputTextToSearch: !0
            }
              , ke = function(e, t) {
                var n = e;
                return t.filter((function(e) {
                    if ("number" == typeof e.value && (n = Number(n)),
                    e.value === n)
                        return e
                }
                ))
            }
              , Oe = function() {
                e.mCloseBtn && e.mCloseBtn()
            };
            l.useEffect((function() {
                var e = {}
                  , t = k.cloneDeep(Q);
                if (re && !Object.keys(re).includes("Country")) {
                    if (Object.keys(re.City).forEach((function(t) {
                        Object.keys(re.City[t]).forEach((function(n) {
                            re.City[t][n] === re.Zone["01"][t] && (e[t] = n)
                        }
                        ))
                    }
                    )),
                    t.selectedData[0]) {
                        var n = t.selectedData[0]
                          , r = n.Zone
                          , o = n.City
                          , i = n.Line;
                        "_" === o && (t.selectedData[0] = a(a({}, t.selectedData[0]), {
                            City: e[r],
                            value: i + "-" + r + "-" + e[r]
                        }))
                    }
                    U(t)
                }
            }
            ), [Q]);
            var Ae = function() {
                var a = {
                    PlaceKey: "TW",
                    panelType: n,
                    panelName: O,
                    device: t,
                    project: A,
                    PropsData: {
                        Departure: q,
                        AllDepartue: Z,
                        DestinationTW: W || {
                            inputText: "",
                            selectedData: []
                        },
                        Date: K.Date,
                        Days: z,
                        Keyword: X,
                        RoomList: $,
                        roomage: ee,
                        noHotel: ne,
                        Traffic: te,
                        clickStart: fe,
                        DepartureData: ae,
                        DestinationData: re,
                        RajxData: oe,
                        roomData: ie,
                        roomInputText: le,
                        KeywordTW: ce
                    },
                    initProps: e
                };
                b.HandleSubmit(a)
            }
              , Re = function(e) {
                if (void 0 !== e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        e[n].isChecked && t.push(e[n].name);
                    return t.filter((function(e) {
                        return "ALL" === e
                    }
                    )).length || t.length === e.length - 1 ? "ALL" : t.join(",")
                }
            }
              , Me = O === F && "M" === t
              , Le = {
                data: Z,
                currentOption: {
                    text: q[0].Name,
                    value: q[0].Code
                },
                title: "出發地",
                boxTitle: "出發地",
                isRequire: !0,
                onChangeCallBack: function(e) {
                    var t = ke(e, Z);
                    Y({
                        type: "SETDEPARTURE",
                        Departure: [{
                            Name: t[0].text,
                            Code: t[0].value.toString()
                        }]
                    })
                },
                customClass: "freeTravel"
            }
              , Ie = {
                data: S.daysOpt,
                currentOption: f.valueToOption(S.daysOpt, z),
                title: "旅遊天數",
                boxTitle: "旅遊天數",
                isRequire: !1,
                onChangeCallBack: function(e) {
                    var t = ke(e, S.daysOpt)[0].value;
                    Y({
                        type: "SETDAYS",
                        Days: t
                    })
                },
                customClass: "freeTravel"
            }
              , je = function() {
                return l.createElement("div", {
                    className: "inputBlock check nohotel_control " + ("highSpeedRail" !== O ? "" : "Rails")
                }, l.createElement("div", {
                    className: "setBackGround"
                }, " "), l.createElement(d.default, {
                    type: "checkbox",
                    textContent: "一日遊,或不含住宿",
                    checked: 1 === ne,
                    whenChange: function(e) {
                        var t = i(S.parseRoomListArrayTw(ge.List), 2)
                          , n = t[0]
                          , a = t[1]
                          , r = i(S.parseRoomListArrayTw(Se.List), 2)
                          , o = r[0]
                          , l = r[1];
                        Y({
                            type: "SETNOHOTEL",
                            noHotel: e ? 1 : 0
                        }),
                        Y({
                            type: "SETROOMDATA",
                            roomData: (e ? Se : ge).List
                        }),
                        Y({
                            type: "SETROOMINPUTTEXT",
                            roomInputText: (e ? Se : ge).Text
                        }),
                        Y({
                            type: "SETROOMLIST",
                            RoomList: e ? o : n
                        }),
                        Y({
                            type: "SETROOMAGE",
                            roomage: e ? l : a
                        })
                    }
                }))
            }
              , Be = function() {
                return l.createElement("div", {
                    className: s.default("submitBtn")
                }, l.createElement(C.FooterSearch, {
                    isSearchResultM: Me,
                    onCancel: Oe,
                    onSearch: Ae,
                    searchBtnClassName: "search_button",
                    cancelBtnClassName: "cancel",
                    searchBtnText: "PC" === t ? l.createElement(u.default, {
                        name: "toolsearch2",
                        size: "x15",
                        className: "svg"
                    }) : "搜尋"
                }))
            };
            return l.createElement("div", {
                className: s.default("panel", n, !re && "d-no")
            }, l.createElement("div", {
                className: "inputGroup"
            }, l.createElement("div", {
                className: "inputBlock departure departure_control"
            }, t === E.Device.PC ? l.createElement(N.default, a({}, Le, {
                insertNode: e.insertNode,
                whenClick: function() {
                    return p.default(t, R, M, j)
                }
            })) : l.createElement(x.default, a({}, Le, {
                insertNode: e.insertNode,
                whenClick: function() {
                    return p.default(t, R, M, j)
                }
            })), "M" === t && l.createElement("span", {
                className: "depAndDesArrow"
            }, "→")), l.createElement("div", {
                className: "inputBlock destination destination_control"
            }, l.createElement(D.default, {
                moduleName: T.ERacpOrRajxOrRajn.Rajn,
                data: Ne,
                insertNode: e.insertNode,
                inputOnClick: function() {
                    return p.default(t, R, M, j)
                },
                panelProps: "hotel"
            })), l.createElement("div", {
                className: s.default("inputBlock", "calendar", "calendar_control")
            }, "PC" === t ? l.createElement(v.default, a({}, Ee, {
                submitCallback: be,
                insertNode: e.insertNode,
                inputOnClick: function() {
                    return p.default(t, R, M, j)
                },
                iconName: ""
            })) : l.createElement(y.default, a({}, Ee, {
                calendarStartTitle: "最早出發日",
                calendarEndTitle: "最晚出發日",
                submitCallback: be,
                insertNode: e.insertNode,
                iconName: ""
            }))), l.createElement("div", {
                className: "inputBlock days shrink days_control"
            }, t === E.Device.PC ? l.createElement(N.default, a({}, Ie, {
                insertNode: e.insertNode,
                whenClick: function() {
                    return p.default(t, R, M, j)
                }
            })) : l.createElement(x.default, a({}, Ie, {
                insertNode: e.insertNode,
                whenClick: function() {
                    return p.default(t, R, M, j)
                }
            }))), "M" === t && je(), l.createElement("div", {
                className: s.default("inputBlock", "keywords", "keywords_control")
            }, l.createElement(D.default, {
                moduleName: T.ERacpOrRajxOrRajn.Rajn,
                data: Pe,
                insertNode: e.insertNode,
                inputOnClick: function() {
                    return p.default(t, R, M, j)
                }
            })), "PC" === t && Be()), l.createElement("div", {
                className: "inputGroup"
            }, l.createElement("div", {
                className: 'inputBlock roomList roomList_control "' + (ne ? " isHotel" : "")
            }, 0 === ne ? l.createElement(g.default, a({
                key: "roomlistNoHotel"
            }, ge, {
                insertNode: e.insertNode,
                PanelProps: e.PanelProps,
                device: t,
                rowSkin: R,
                renderNode: M,
                panel: A,
                title: "PC" === t ? void 0 : "間數/人數",
                dropDownIcon: !0
            })) : l.createElement(g.default, a({
                key: "roomlistWithHotel"
            }, Se, {
                insertNode: e.insertNode,
                PanelProps: e.PanelProps,
                device: t,
                rowSkin: R,
                renderNode: M,
                panel: A,
                title: "PC" === t ? void 0 : "間數/人數",
                dropDownIcon: !0
            }))), "highSpeedRail" === O ? null : l.createElement("div", {
                className: "inputBlock transportation"
            }, l.createElement(w.default, {
                customClass: t + "_Transport",
                Traffic: te,
                setPanelState: function(e) {
                    return function(e) {
                        0 !== e.TrafficData.length && Y({
                            type: "SETTRAFFIC",
                            Traffic: Re(e.TrafficData)
                        })
                    }(e)
                },
                apiSource: L
            })), "PC" === t && je(), "highSpeedRail" !== O && l.createElement("div", {
                className: "inputBlock hotKey"
            }, "PC" === t && l.createElement(_.default, {
                device: t,
                title: "超值推薦",
                hotKeyword: "立榮假期",
                href: "highSpeedRail" !== O ? "https://event.liontravel.com/zh-tw/uniairholidays/index" : "https://activity.liontravel.com/search?Foreign=0&SearchKindName=%E9%AB%98%E9%90%B5%E5%9C%8B%E6%97%85%E8%81%AF%E7%A5%A8"
            }))), "M" === t && Be(), "M" === t && "highSpeedRail" !== O && l.createElement(_.default, {
                device: t,
                title: "超值推薦",
                hotKeyword: "立榮假期",
                href: "highSpeedRail" !== O ? "https://event.liontravel.com/zh-tw/uniairholidays/index" : "https://activity.liontravel.com/search?Foreign=0&SearchKindName=%E9%AB%98%E9%90%B5%E5%9C%8B%E6%97%85%E8%81%AF%E7%A5%A8"
            }))
        }
    },
    224: function(e, t, n) {
        e.exports = {
            inputBlock: "inputBlock",
            dropdownBoxPc: "dropdownBoxPc",
            selectBox: "selectBox",
            title: "title",
            contentWrap: "contentWrap",
            inputSkin_group: "inputSkin_group",
            inputSkin_group_title: "inputSkin_group_title",
            inputSkin_group_content: "inputSkin_group_content",
            inputSkin_group_multi: "inputSkin_group_multi",
            dropdown: "dropdown",
            ListStyle: "ListStyle",
            "ld-icon": "ld-icon",
            calendar: "calendar",
            inputSkin: "inputSkin",
            B2BvactionDtmM: "B2BvactionDtmM",
            dtm_rcfn: "dtm_rcfn",
            sec_all: "sec_all",
            B2CvactionDtmM: "B2CvactionDtmM",
            vacationSearch_personal_M: "vacationSearch_personal_M",
            searchBlock: "searchBlock",
            foreignVacation_personal_M: "foreignVacation_personal_M",
            HeadVacation_personal_M: "HeadVacation_personal_M",
            search_button: "search_button",
            inputGroup: "inputGroup",
            days: "days",
            roomList: "roomList",
            airline: "airline",
            nextIcon: "nextIcon",
            classlevel: "classlevel",
            keywords: "keywords",
            check: "check",
            cr_rcln: "cr_rcln",
            indicator: "indicator",
            destination: "destination",
            defaultSkin: "defaultSkin",
            foreignVacation_personal_PC: "foreignVacation_personal_PC",
            HeadVacation_personal_PC: "HeadVacation_personal_PC",
            allDeviceMenuListDtmRajn: "allDeviceMenuListDtmRajn",
            "dtm_rcfr-wrap": "dtm_rcfr-wrap",
            sec_title: "sec_title",
            departure: "departure",
            shrink: "shrink",
            rowSkin: "rowSkin",
            vacationSearch_personal_PC: "vacationSearch_personal_PC",
            room_setDropIcon: "room_setDropIcon",
            room_list_wrap_container: "room_list_wrap_container",
            "dropdown-place-holder": "dropdown-place-holder",
            selected: "selected",
            toolnext: "toolnext",
            room_list_section: "room_list_section",
            room_list_row: "room_list_row",
            int_gpct: "int_gpct",
            child_row: "child_row",
            child_count_control: "child_count_control",
            children_ages_section: "children_ages_section",
            row_title: "row_title",
            age_select_section: "age_select_section",
            children_age_select: "children_age_select",
            minus: "minus",
            add: "add",
            amount: "amount",
            close_btn: "close_btn",
            txt_green: "txt_green",
            st_rcln: "st_rcln",
            open: "open",
            "dtm_rcfr-label": "dtm_rcfr-label",
            panel: "panel",
            sec: "sec",
            active: "active",
            ic_rcln: "ic_rcln",
            toolchoose: "toolchoose",
            svg: "svg",
            item: "item",
            "ListStyle-close_btn": "ListStyle-close_btn",
            act_wrap_container: "act_wrap_container",
            "act_rajn-result": "act_rajn-result",
            section: "section",
            noMatchText: "noMatchText",
            inputSkin_Parent: "inputSkin_Parent",
            calendarContainer: "calendarContainer",
            month_box: "month_box",
            week: "week",
            date: "date",
            date_box: "date_box",
            dropdownBoxContent: "dropdownBoxContent",
            selectContentWrap: "selectContentWrap",
            option: "option",
            "m-place": "m-place",
            no_iconName: "no_iconName",
            "input-wrapper": "input-wrapper",
            AirlineCompany: "AirlineCompany",
            tabs: "tabs",
            "dropdown-content": "dropdown-content",
            history_block: "history_block",
            remindSpan: "remindSpan",
            one_floor: "one_floor",
            dot: "dot",
            ctns: "ctns",
            all_wrap: "all_wrap",
            sec_content: "sec_content",
            act_rajn: "act_rajn",
            select: "select",
            red: "red",
            rajnFooter: "rajnFooter",
            angleRightIcon: "angleRightIcon",
            nvb_rslb: "nvb_rslb",
            foreignMobile: "foreignMobile",
            "MMenuListDtmRajn-RemindText": "MMenuListDtmRajn-RemindText",
            sideBar_header_bot: "sideBar_header_bot",
            sideBar_header_intZone: "sideBar_header_intZone",
            sideBar_content: "sideBar_content",
            sideBar_moduleContainer: "sideBar_moduleContainer",
            "select-room": "select-room",
            B2C_Vacation_M: "B2C_Vacation_M",
            page_content: "page_content",
            room_count_select: "room_count_select",
            bt_rcnb: "bt_rcnb",
            int_rcln: "int_rcln",
            calendarM: "calendarM",
            noTotalNum: "noTotalNum",
            start_section: "start_section",
            cy_rcln: "cy_rcln",
            year_month: "year_month",
            label_box: "label_box",
            holiday: "holiday",
            calendar_content: "calendar_content",
            calendar_box: "calendar_box",
            canSelect: "canSelect",
            "custom-select": "custom-select",
            empty: "empty",
            confirm_btn: "confirm_btn",
            setTourVacation_M: "setTourVacation_M",
            setTourVacation_personal_M: "setTourVacation_personal_M",
            location: "location",
            MMenuListDtmRajn: "MMenuListDtmRajn",
            arrow: "arrow",
            "location-forward": "location-forward",
            "location-return": "location-return",
            FooterSearch_searchBtn: "FooterSearch_searchBtn",
            setTourVacation_PC: "setTourVacation_PC",
            next: "next",
            prev: "prev",
            setTourVacation_personal_PC: "setTourVacation_personal_PC",
            "dropdown-wrap": "dropdown-wrap",
            clearBtn_wrap: "clearBtn_wrap",
            clearBtn: "clearBtn",
            room_count_title: "room_count_title",
            roomListInput: "roomListInput",
            "age-select": "age-select",
            "seat-level": "seat-level",
            toolsearch2: "toolsearch2",
            dropdownBoxM: "dropdownBoxM",
            TBSfq: "TBSfq",
            "vacation-panel": "vacation-panel",
            "MMenuListDtmRajn-List": "MMenuListDtmRajn-List",
            "flightMobile-vacation": "flightMobile-vacation",
            ntb_rcln: "ntb_rcln"
        }
    },
    225: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , o = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.findUrlProp = void 0;
        var i = n(0)
          , l = n(27);
        n(238);
        var c = n(274)
          , s = n(26)
          , u = n(149)
          , d = n(13);
        t.findUrlProp = function(e, t) {
            var n;
            return null === (n = e.find((function(e) {
                return e.key.toLowerCase() === t.toLowerCase()
            }
            ))) || void 0 === n ? void 0 : n.value
        }
        ;
        var p = function(e, t) {
            var n;
            switch (void 0 === t && (t = s.activity),
            e) {
            case "en-us":
                n = "_en";
                break;
            case "zh-cn":
                n = "_cn";
                break;
            case "ja-jp":
                n = "_jp";
                break;
            case "ko-kr":
                n = "_kr";
                break;
            case "th-th":
                n = "_th";
                break;
            case "zh-tw":
            default:
                n = ""
            }
            var a = t["menu" + n];
            return u.saveSessionData(a, (function() {
                return r(void 0, void 0, void 0, (function() {
                    return o(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, fetch(a)];
                        case 1:
                            return [4, e.sent().json()];
                        case 2:
                            return [2, e.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ))
        }
          , f = function(e) {
            var t, n = e.device, a = e.single, r = e.searchMode, o = e.rowSkin, s = l.useTranslation(), u = s.t, f = s.i18n, h = d.default(((t = {
                "activity-b2c": !0
            })["activity_" + n] = !0,
            t["active" + (n || "PC")] = !0,
            t.single = a,
            t.searchMode = r,
            t.defaultSkin = !o,
            t.rowSkin = o,
            t));
            return i.createElement("div", {
                className: h
            }, "PC" === e.device && i.createElement("div", {
                className: "activitySingleTitle"
            }, i.createElement("h2", null, u("activity.h2")), i.createElement("div", {
                className: "activitySingleSubTitle"
            }, u("activity.singleSubTitle"))), i.createElement(c.default, {
                device: e.device || "PC",
                source: p(f.language, e.apiSource),
                insertNode: e.insertNode,
                rowSkin: e.rowSkin,
                renderNode: e.renderNode,
                searchMode: e.searchMode,
                isImmediateSearch: !0
            }))
        };
        t.default = function(e) {
            return i.createElement(f, a({}, e))
        }
    },
    229: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__rest || function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                    t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
            }
            return n
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Travel = void 0;
        var o = n(140)
          , i = n(0)
          , l = n(142)
          , c = n(147)
          , s = n(145)
          , u = n(139)
          , d = n(152)
          , p = n(182);
        t.Travel = function(e) {
            var t, n = e.device, f = e.insertNode, h = e.rowSkin, m = e.onSubmitTarget, v = e.source, y = e.headerClassName, _ = e.isSoldDefault, D = e.panelTypeData, T = r(e, ["device", "insertNode", "rowSkin", "onSubmitTarget", "source", "headerClassName", "isSoldDefault", "panelTypeData"]), C = u.useConnect(), g = C.state, S = C.dispatch, b = "lionbobby_b2c_travel" === T.panel;
            i.useEffect((function() {
                d.getTravelData(v).then((function(e) {
                    S({
                        type: "MAINDATA",
                        Main_Data: e
                    }),
                    S({
                        type: "DEPARTUREOPTIONDATA",
                        DepartureData: d.flatTravelDepartureData
                    })
                }
                )),
                void 0 !== _ && S({
                    type: "SETSUBMITDATA",
                    SubmitData: a(a({}, g.SubmitData), {
                        IsSold: _
                    })
                })
            }
            ), []);
            var w = g.SubmitData
              , E = w.Date
              , N = w.Destination
              , x = w.Keywords
              , P = o()
              , k = o(E[0])
              , O = o(E[1])
              , A = m
              , R = p.turnSubmitDataToUrlParams(g, s.PanelName.travel, b)
              , M = p.handleSaveData(g, s.PanelName.travel, E, !1)
              , L = null === (t = M.data.Departure[0]) || void 0 === t ? void 0 : t.Name;
            i.useEffect((function() {
                var e = document.querySelector("body");
                "M" === n && (g.LbxRclnisOpen ? e.style.overflow = "hidden" : e.style.overflow = "visible")
            }
            ), [g.LbxRclnisOpen]);
            return i.createElement(p.HistoryProvider, {
                panelType: d.PanelType.Travel
            }, i.createElement(p.MainUI, {
                state: g,
                dispatch: S,
                insertNode: f,
                device: n,
                panelType: d.PanelType.Travel,
                submit: function() {
                    l.onSubmit({
                        target: A,
                        params: a({}, T),
                        openTarget: "_blank"
                    }).validate((function(e) {
                        var t = [];
                        return 0 === N.length && g.SearchType === c.SearchType.Destination && t.push("請輸入 / 選擇目的地"),
                        x.trim() || g.SearchType !== c.SearchType.Keyword || t.push("請輸入關鍵字"),
                        E[0] || t.push("請選擇出發日期"),
                        E[1] || t.push("請選擇回程日期"),
                        k.isBefore(P, "date") && t.push("起日不可早於今天日期"),
                        O.isBefore(P, "date") && t.push("迄日不可早於今天日期"),
                        0 === t.length || t
                    }
                    )).modifier((function(e) {
                        return R
                    }
                    )).saveData((function() {
                        return M
                    }
                    )).send("encodeURI")
                },
                rowSkin: h,
                renderNode: T.renderNode,
                headerClassName: y,
                target: A,
                blank: !0,
                urlParams: R,
                clickRecordData: M,
                departureName: L,
                panelTypeData: D,
                panelCall: T.panel
            }))
        }
    },
    234: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , o = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , i = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
          , l = this && this.__spread || function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(i(arguments[t]));
            return e
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(0);
        n(224);
        var s = n(138)
          , u = n(154)
          , d = n(157)
          , p = n(158)
          , f = n(155)
          , h = n(146)
          , m = n(213)
          , v = n(137)
          , y = n(153)
          , _ = n(139)
          , D = n(169)
          , T = n(170)
          , C = n(214)
          , g = n(149)
          , S = n(164)
          , b = n(13)
          , w = n(159)
          , E = n(222)
          , N = n(222)
          , x = n(200)
          , P = n(148)
          , k = n(140);
        t.default = function(e) {
            var t = _.useConnect()
              , n = t.state
              , O = t.dispatch
              , A = e.device
              , R = e.PanelName
              , M = e.PanelProps
              , L = e.rowSkin
              , I = e.renderNode
              , j = e.panel
              , B = e.apiSource
              , K = -1 !== j.indexOf("b2b")
              , Y = K ? "header_b2b_lion" : "header_lion"
              , F = {
                start: k().add(3, "day").format("YYYY-MM-DD"),
                end: k().add(360, "day").format("YYYY-MM-DD")
            }
              , H = i(c.useState({
                type: !1,
                date: ""
            }), 2)
              , W = H[0]
              , U = H[1]
              , J = i(c.useState(""), 2)
              , V = J[0]
              , G = J[1]
              , q = i(c.useState({
                tempDest: [],
                tempCity: []
            }), 2)
              , Q = q[0]
              , Z = q[1]
              , z = n.Departure
              , X = n.Destination
              , $ = n.NowMultiCities
              , ee = n.AllDepartue
              , te = n.Days
              , ne = n.Airline
              , ae = n.AllAirlines
              , re = n.MatchAirlines
              , oe = n.Clskd
              , ie = n.Notrans
              , le = n.Keyword
              , ce = n.RoomList
              , se = n.roomage
              , ue = n.noHotel
              , de = n.DepartureData
              , pe = n.DestinationData
              , fe = n.RajxData
              , he = n.roomData
              , me = n.roomInputText
              , ve = n.isSecondAPI
              , ye = n.MatchKeywordData
              , _e = n.KeywordText
              , De = n.AirlineMenu
              , Te = c.useCallback((function(e, t) {
                U({
                    type: e,
                    date: t
                })
            }
            ), []);
            c.useEffect((function() {
                return g.initialState({
                    LocalStorageName: M
                }).getLocalStorage().done((function(e) {
                    var t = e.LocalStorageData;
                    if ("vacationSearch" === R)
                        Ce();
                    else {
                        if (null !== t) {
                            var n = t.Date
                              , a = "YYYY-MM-DD"
                              , r = k(n[0]).isBefore(k(), "date")
                              , o = k(n[1]).isBefore(k(), "date")
                              , i = k(n[0]).isBefore(k().add(3, "days"), "date")
                              , l = k(n[1]).isBefore(k().add(3, "days"), "date");
                            r && (G(k().format(a)),
                            t.Date = o ? [k().format(a), k().add(30, "days").format(a)] : [k().format(a), n[1]]),
                            (i || l) && G(k().format(a)),
                            O({
                                type: "SETDEFAULT",
                                defaultValue: t
                            })
                        }
                        Ce()
                    }
                }
                )),
                function() {}
            }
            ), []),
            c.useEffect((function() {
                if ("vacationSearch" === R)
                    return null !== fe && null !== pe && ee.length && ae ? (g.initialState({
                        LocalStorageName: M
                    }).getUrl().done((function(e) {
                        var t = e.urlData;
                        if (t.length && "vacationSearch" === R) {
                            var a = {
                                Date: [],
                                Keyword: {
                                    Name: "",
                                    Code: ""
                                },
                                roomData: []
                            };
                            if (a) {
                                var r, o, i, l;
                                t.map((function(e) {
                                    switch (e.key) {
                                    case "Departure":
                                        a[e.key] = [{
                                            Name: w.valueToOption(ee, e.value).text,
                                            Code: e.value
                                        }];
                                        break;
                                    case "Destination":
                                        if (a.Destination = [],
                                        a.NowMultiCities = [],
                                        "" === e.value)
                                            break;
                                        var i = t.filter((function(e) {
                                            return "DestinationAirport" === e.key
                                        }
                                        ))
                                          , c = i[0] && i[0].value || ""
                                          , s = e.value.split(",")
                                          , u = fe.Destinations;
                                        s.map((function(e, t) {
                                            var n = e.split("_")[1]
                                              , r = e.split("_")[0]
                                              , o = e.split("_")[2]
                                              , l = n + "-" + r
                                              , s = c.split(",")[t]
                                              , d = u.filter((function(e) {
                                                return 0 === i.length || "" === s ? e.level3 === l : e.level3 === s
                                            }
                                            ));
                                            if (0 !== d.length) {
                                                var p = pe.Line[o];
                                                d[0].text.split("-")[1],
                                                d[0].text,
                                                d[0].value;
                                                a.Destination.push(d[0]),
                                                a.NowMultiCities.push(n)
                                            } else {
                                                var f = {
                                                    keyWord: n,
                                                    apiSource: B,
                                                    isResultInit: !0,
                                                    isB2B: K
                                                };
                                                x.fetchKeywordSecondAPI(f).then((function(e) {
                                                    var t = e.Destinations[0];
                                                    t && a.Destination.push(t),
                                                    a.NowMultiCities.push(n),
                                                    Z({
                                                        tempDest: a.Destination,
                                                        tempCity: a.NowMultiCities
                                                    })
                                                }
                                                ))
                                            }
                                        }
                                        ));
                                        break;
                                    case "FromDate":
                                    case "ToDate":
                                        a.Date["FromDate" === e.key ? 0 : 1] = k(e.value).format("YYYY-MM-DD");
                                        break;
                                    case "Keywords":
                                        a.Keyword.Name = e.value;
                                        break;
                                    case "noTrans":
                                        a.Notrans = !!parseInt(e.value);
                                        break;
                                    case "Days":
                                        a[e.key] = x.daysOpt.some((function(t) {
                                            return t.value === e.value
                                        }
                                        )) ? e.value : "";
                                        break;
                                    case "clskd":
                                        a.Clskd = e.value;
                                        break;
                                    case "Airline":
                                        e.value;
                                        if (n.AllAirlines) {
                                            a[e.key] = function() {
                                                var t, a = {
                                                    Code: "",
                                                    Name: ""
                                                };
                                                return null === (t = ("string" == typeof n.AllAirlines ? JSON.parse(n.AllAirlines) : n.AllAirlines).AirlineList) || void 0 === t || t.filter((function(t) {
                                                    t.AirlineCode === e.value && (a = {
                                                        Code: e.value,
                                                        Name: t.AirlineName + " - " + t.AirlineCode
                                                    })
                                                }
                                                )),
                                                a
                                            }()
                                        }
                                        break;
                                    default:
                                        "roomlist" == e.key && (r = e.value),
                                        "roomage" == e.key && (o = e.value),
                                        "fthotel" == e.key && (l = e.value),
                                        a[e.key] = e.value
                                    }
                                }
                                )),
                                a.Keyword.Code = l,
                                o = o || se.join(","),
                                i = (r = r || ce.join(",")).split(",").length;
                                var c = r.split(",")
                                  , s = o.split(",")
                                  , u = x.urltoRoomList(a, i, c, s).reduce((function(e, t) {
                                    return e + t
                                }
                                ));
                                a.roomInputText = "共" + c.length + "間，" + u + "人",
                                O({
                                    type: "SETDEFAULT",
                                    defaultValue: a
                                })
                            }
                        }
                    }
                    )),
                    function() {}
                    ) : void 0
            }
            ), [ee, pe, fe, ae]),
            c.useEffect((function() {
                "vacationSearch" === R && (O({
                    type: "SETDESTINATION",
                    Destination: Q.tempDest
                }),
                O({
                    type: "SETNOWMULTICITIES",
                    NowMultiCities: Q.tempCity
                }))
            }
            ), [Q]),
            c.useEffect((function() {
                O({
                    type: "SETCLSKD",
                    Clskd: "4"
                })
            }
            ), []);
            var Ce = function() {
                O({
                    type: "RESET"
                }),
                O({
                    type: "SETDATE",
                    Date: [k().add(3, "days").format("YYYY-MM-DD"), k().add(30, "days").format("YYYY-MM-DD")]
                }),
                O({
                    type: "SETROOMDATA",
                    roomData: Oe.List
                }),
                O({
                    type: "SETROOMINPUTTEXT",
                    roomInputText: Oe.Text
                }),
                x.personalDeparture(B).then((function(e) {
                    0 === e.filter((function(e) {
                        return "" === e.value && "不限" === e.text
                    }
                    )).length && O({
                        type: "SETDEPARTURE",
                        Departure: [{
                            Name: e[0].text,
                            Code: e[0].value.toString()
                        }]
                    }),
                    O({
                        type: "SETALLDEPARTURE",
                        AllDepartue: e
                    })
                }
                )),
                x.getAirlineSearch(K).then((function(e) {
                    function t(e) {
                        return e.map((function(e) {
                            return {
                                text: e.AirlineName + " - " + e.AirlineCode,
                                value: e.AirlineCode
                            }
                        }
                        ))
                    }
                    if ("string" == typeof e) {
                        var n = t(JSON.parse(e).AirlineList);
                        O({
                            type: "SETALLAIRLINES",
                            AllAirlines: JSON.parse(e)
                        }),
                        O({
                            type: "SETMATCHAIRLINE",
                            MatchAirlines: n
                        })
                    } else {
                        n = t(e.AirlineList);
                        O({
                            type: "SETMATCHAIRLINE",
                            MatchAirlines: n
                        })
                    }
                }
                )),
                x.personalDestination(B).then((function(e) {
                    var t = x.rajxProcess(e);
                    O({
                        type: "SETRAJXDATA",
                        RajxData: t
                    })
                }
                )),
                x.personalDestinationSimple(K).then((function(e) {
                    O({
                        type: "SETDESTINATIONDATA",
                        DestinationData: e
                    })
                }
                ))
            }
              , ge = "PC" === A ? !W.type : W.type
              , Se = {
                data: ee,
                currentOption: w.valueToOption(ee, z[0].Code),
                title: "出發地",
                boxTitle: "出發地",
                isRequire: !0,
                onChangeCallBack: function(e) {
                    var t = Le(e, ee);
                    O({
                        type: "SETDEPARTURE",
                        Departure: [{
                            Name: t[0].text,
                            Code: t[0].value.toString()
                        }]
                    })
                }
            }
              , be = {
                setStartDate: n.Date[0],
                setEndDate: n.Date[1],
                startMonth: k().format("YYYY-MM"),
                middle: "wave",
                doubleCalendar: !0,
                doubleInput: !0,
                startTitle: "出發區間",
                dateStartTxt: "最早",
                dateEndTxt: "最晚",
                minDate: ge ? W.date || V || F.start : V || F.start,
                maxDate: F.end,
                inputStatusCallback: Te,
                submitCallback: function(e, t) {
                    O({
                        type: "SETDATE",
                        Date: [e, t]
                    })
                }
            }
              , we = function(e, t) {
                var n = e.selectedData
                  , a = X || [];
                switch (t) {
                case !0:
                    a = e,
                    O({
                        type: "SETDESTINATION",
                        Destination: e
                    });
                    break;
                case !1:
                case void 0:
                    if (n && 0 !== n.length && a.map((function(t, n) {
                        var a = e.selectedData[0]
                          , r = (null == t ? void 0 : t.City) === (null == a ? void 0 : a.City)
                          , o = t.Country === a.Country
                          , i = t.Line === a.Line
                          , l = t.value === a.value;
                        r && o && i && l && Ee(n)
                    }
                    )),
                    n && n.length > 0 && a.length < 3) {
                        var r = []
                          , o = !1;
                        a.forEach((function(e) {
                            typeof e.Airport == typeof n[0].Airport ? e.Airport !== n[0].Airport || e.City !== n[0].City ? r.push(e) : o = !0 : r.push(e)
                        }
                        )),
                        o ? (a = r,
                        O({
                            type: "SETDESTINATION",
                            Destination: r
                        })) : (a = l(r, n),
                        O({
                            type: "SETDESTINATION",
                            Destination: l(r, n)
                        }))
                    }
                }
                var i = [];
                a.forEach((function(e) {
                    -1 === i.indexOf(e.City) && i.push(e.City)
                }
                )),
                O({
                    type: "SETNOWMULTICITIES",
                    NowMultiCities: i
                })
            }
              , Ee = function(e) {
                var t = l(n.Destination)
                  , a = l(n.NowMultiCities);
                t.length > 0 && (t.splice(e, 1),
                a.splice(e, 1)),
                O({
                    type: "SETDESTINATION",
                    Destination: t
                }),
                O({
                    type: "SETNOWMULTICITIES",
                    NowMultiCities: a
                })
            }
              , Ne = function(e) {
                return r(void 0, void 0, void 0, (function() {
                    var t, n, a;
                    return o(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return (null == fe ? void 0 : fe.hasOwnProperty("Destinations")) && 0 !== (null == fe ? void 0 : fe.Destinations.length) && e ? 0 === (t = w.keyFilter(fe, e.toUpperCase())).Destinations.length ? [3, 1] : [2, {
                                data: t,
                                searchKeyWord: e
                            }] : [3, 3];
                        case 1:
                            return O({
                                type: "SETISFETCHINGSECONDAPI",
                                isSecondAPI: !0
                            }),
                            n = {
                                data: {
                                    Destinations: []
                                },
                                searchKeyWord: e
                            },
                            a = {
                                keyWord: e,
                                apiSource: B,
                                isResultInit: !1,
                                isB2B: K
                            },
                            [4, x.fetchKeywordSecondAPI(a).then((function(t) {
                                t && (0 === t.Destinations.length ? O({
                                    type: "SETISFETCHINGSECONDAPI",
                                    isSecondAPI: !1
                                }) : n = {
                                    data: w.keyFilter(t, e.toUpperCase()),
                                    searchKeyWord: e
                                })
                            }
                            ))];
                        case 2:
                            return r.sent(),
                            [2, n];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
              , xe = {
                device: "PC" === A ? v.Edevice.PC : v.Edevice.Mobile,
                isRequired: !0,
                placeholder: (X || []).length > 0 ? "" : "請輸入國家/城市/機場",
                title: "目的地",
                iconName: "",
                onInputChange: function(e, t) {
                    return function(e, t) {
                        we(e, t)
                    }(e, t)
                },
                remindText: "找不到？改用 關鍵字 查查吧！",
                mobileClass: "B2" + (K ? "B" : "C") + "vactionDtmM foreignMobile",
                Dtm: {
                    levelKey: ["Line", "Country", "City"],
                    fetchData: function() {
                        return n.DestinationData
                    },
                    orderMaps: {
                        Line: ["6", "5", "7", "3", "1", "2", "4"]
                    },
                    replaceRegular: /\([\w\s\)]+/g
                },
                Rajn: {
                    minimumStringQueryLength: 1,
                    minimumStringQuery: "請至少輸入一個字",
                    noMatchText: ve ? "很抱歉，找不到符合的項目，馬上為您搜尋其他資訊" : "很抱歉，找不到符合的項目",
                    fetchData: function(e) {
                        return r(void 0, void 0, void 0, (function() {
                            return o(this, (function(t) {
                                return [2, Ne(e)]
                            }
                            ))
                        }
                        ))
                    },
                    rules: [{
                        title: "城市",
                        icon: c.createElement(N.default, {
                            type: "HotelforeignBookingF",
                            fill: "red",
                            width: "10px"
                        })
                    }, {
                        title: "機場",
                        icon: c.createElement(E.default, {
                            type: "PlaneAirplaneF",
                            fill: "red",
                            width: "10px"
                        })
                    }],
                    chooseFirst: !0
                },
                multiItem: X || [],
                maxItem: 3,
                itemsClick: function(e) {
                    Ee(e)
                }
            }
              , Pe = _e.length >= 2 && 0 === ye.length ? "d-no" : ""
              , ke = {
                device: "PC" === A ? v.Edevice.PC : v.Edevice.Mobile,
                isRequired: !1,
                placeholder: "請輸入產品名稱、飯店名稱",
                title: "關鍵字",
                inputText: le.Name || "",
                mobileClass: "foreignMobile",
                iconName: "",
                onInputChange: function(e, t) {
                    e.inputText && t || function(e) {
                        e.inputText.length > 0 ? O({
                            type: "SETKEYWORD",
                            Keyword: {
                                Name: e.inputText,
                                Code: e.selectedData[0] ? e.selectedData[0].fthotel : ""
                            }
                        }) : O({
                            type: "SETKEYWORD",
                            Keyword: {
                                Name: "",
                                Code: ""
                            }
                        })
                    }(e)
                },
                remindText: "",
                useDtm: !1,
                customClass: Pe,
                Rajn: {
                    titleClass: "d-no",
                    minimumStringQueryLength: 2,
                    minimumStringQuery: "請至少輸入二個字",
                    noMatchText: "很抱歉，找不到符合的項目",
                    fetchData: function(e) {
                        var t;
                        return O({
                            type: "SETKEYWORDTEXT",
                            KeywordText: e
                        }),
                        x.fetchKeyWord(X, e, (function(e) {
                            O({
                                type: "SETMATCHKEYWORDDATA",
                                MatchKeywordData: e
                            })
                        }
                        ), null === (t = null == B ? void 0 : B.vacationPersonal) || void 0 === t ? void 0 : t.keyword, K)
                    },
                    rules: [{
                        title: "only"
                    }],
                    chooseFirst: !1,
                    Clear: !1
                },
                onClicktriggerFetch: !0,
                onClickShow: !0
            }
              , Oe = {
                customClass: "room-people-number",
                device: "PC" === A ? v.Edevice[0] : v.Edevice[1],
                title: "間數/人數",
                Text: "共1間，2人",
                List: [{
                    adult: 2,
                    childrenWithBed: [],
                    childrenNoBed: []
                }],
                palceName: {
                    adult: "大人",
                    childrenWithBed: "小孩佔床",
                    childrenNoBed: "小孩未佔床"
                },
                listCount: [{
                    text: "共1間",
                    value: 1
                }, {
                    text: "共2間",
                    value: 2
                }, {
                    text: "共3間",
                    value: 3
                }, {
                    text: "共4間",
                    value: 4
                }, {
                    text: "共5間",
                    value: 5
                }, {
                    text: "共6間",
                    value: 6
                }, {
                    text: "共7間",
                    value: 7
                }],
                onCallback: function(e) {
                    var t = i(y.parseRoomListArray(e), 2)
                      , n = t[0]
                      , a = t[1];
                    O({
                        type: "SETROOMLIST",
                        RoomList: n
                    }),
                    O({
                        type: "SETROOMAGE",
                        roomage: a
                    })
                },
                limit: {
                    max: [8, 4],
                    min: [1, 0]
                },
                totalLimit: 8,
                childrenPerAdult: 2,
                Notice: ["一筆訂單總人數若超過8位，請分兩張單訂購。", "一位成人最多只能帶2名小孩或1名小孩+1名嬰兒", "（小孩定義：年滿2歲(含)以上未滿12歲。嬰兒定義：未滿2歲。年齡以出發日為準。)"],
                isDynamicLimitChildCount: !0
            }
              , Ae = {
                data: x.daysOpt,
                currentOption: w.valueToOption(x.daysOpt, te),
                title: "旅遊天數",
                isRequire: !1,
                customClass: "total-days",
                onChangeCallBack: function(e) {
                    var t = Le(e, x.daysOpt)[0].value;
                    O({
                        type: "SETDAYS",
                        Days: t
                    })
                }
            }
              , Re = {
                customClass: "AirlineCompany",
                device: "PC" === A ? v.Edevice.PC : v.Edevice.Mobile,
                isRequired: !1,
                title: "航空公司",
                mobileClass: "flightMobile-vacation",
                iconName: "",
                inputText: n.Airline.Code.length > 0 ? x.modifyAirlineCode(n.Airline.Name) : "",
                onInputChange: function(e, t) {
                    if ((!e.inputText || /([\u4E00-\u9FA5]+$)|(d+$)|([a-zA-Z])|[0-9]/.test(e.inputText)) && !(t || e instanceof Array && 0 === e.length)) {
                        e.inputText;
                        e.selectedData.length > 0 ? O({
                            type: "SETAIRLINE",
                            Airline: {
                                Code: e.inputText.match(/\((.*?)\)/)[1],
                                Name: e.inputText.replace(/\([^)]*\)/, "") + " - " + e.inputText.match(/\((.*?)\)/)[1]
                            }
                        }) : O({
                            type: "SETAIRLINE",
                            Airline: {
                                Name: "",
                                Code: ""
                            }
                        })
                    }
                },
                remindText: "找不到？改用 關鍵字 查查吧！",
                useDtm: !0,
                Dtm: {
                    levelKey: ["Line", "Country", "City"],
                    fetchData: function() {
                        return r(void 0, void 0, void 0, (function() {
                            var e;
                            return o(this, (function(t) {
                                return De ? [2, De] : (e = x.getAirlineMenu(K),
                                O({
                                    type: "SETAIRLINEMENU",
                                    AirlineMenu: e
                                }),
                                [2, e])
                            }
                            ))
                        }
                        ))
                    }
                },
                Rajn: {
                    titleClass: "d-no",
                    minimumStringQueryLength: 1,
                    minimumStringQuery: "請輸入至少一個字",
                    noMatchText: "很抱歉，找不到符合的項目",
                    fetchData: function(e) {
                        return r(void 0, void 0, void 0, (function() {
                            var t, n, a;
                            return o(this, (function(r) {
                                return t = e && e.toUpperCase(),
                                n = x.keyFilterForAirlines(ae.AirlineList, t),
                                a = n.Destinations.map((function(e) {
                                    return {
                                        level2: "航空公司",
                                        level3: e.AirlineName + "(" + e.AirlineEname + ")",
                                        cityCode: e.AirlineCode,
                                        txt: e.AirlineName + "(" + e.AirlineCode + ")",
                                        SelectedBy: "AutoComplete",
                                        value: e.AirlineName + "(" + e.AirlineCode + ")"
                                    }
                                }
                                )),
                                n.Destinations = a,
                                [2, {
                                    data: n,
                                    searchKeyWord: t
                                }]
                            }
                            ))
                        }
                        ))
                    },
                    rules: [{
                        title: "航空公司"
                    }],
                    fixList: !0,
                    useHierarchyRender: !1
                },
                airlineList: ae.AirlineList
            }
              , Me = {
                data: K ? x.classLevelOptB2B : x.classLevelOpt,
                currentOption: K ? w.valueToOption(x.classLevelOptB2B, oe) : w.valueToOption(x.classLevelOpt, oe),
                title: "PC" === A ? "" : "艙等",
                isRequire: !0,
                customClass: "seat-level",
                onChangeCallBack: function(e) {
                    var t = Le(e, x.classLevelOpt);
                    O({
                        type: "SETCLSKD",
                        Clskd: t[0].value
                    })
                }
            }
              , Le = function(e, t) {
                var n = e;
                return t.filter((function(e) {
                    if ("number" == typeof e.value && (n = Number(n)),
                    e.value === n)
                        return e
                }
                ))
            }
              , Ie = b.default(R + "_personal_" + A)
              , je = "vacationSearch" === R && "M" === A;
            return c.createElement(c.Fragment, null, c.createElement("div", {
                className: b.default(Ie + " vacation-panel", !pe && "d-no")
            }, c.createElement("div", {
                className: "inputGroup"
            }, c.createElement("div", {
                className: "inputBlock departure"
            }, "PC" === A ? c.createElement(D.default, a({}, Se, {
                insertNode: e.insertNode,
                whenClick: function() {
                    return P.default(A, L, I, Y)
                }
            })) : c.createElement(T.default, a({}, Se, {
                insertNode: e.insertNode,
                whenClick: function() {
                    return P.default(A, L, I, Y)
                }
            }))), c.createElement("div", {
                className: "inputBlock destination"
            }, c.createElement(h.default, {
                moduleName: v.ERacpOrRajxOrRajn.Rajn,
                data: xe,
                panelProps: "",
                insertNode: e.insertNode,
                inputOnClick: function() {
                    return P.default(A, L, I, Y)
                }
            })), c.createElement("div", {
                className: "inputBlock calendar"
            }, "PC" === A ? c.createElement(d.default, a({}, be, {
                insertNode: e.insertNode,
                inputOnClick: function() {
                    return P.default(A, L, I, Y)
                },
                iconName: ""
            })) : c.createElement(p.default, a({}, be, {
                calendarStartTitle: "最早出發日",
                calendarEndTitle: "最晚出發日",
                insertNode: e.insertNode,
                minDate: F.start,
                iconName: ""
            }))), c.createElement("div", {
                className: "inputBlock days shrink"
            }, "PC" === A ? c.createElement(D.default, a({}, Ae, {
                insertNode: e.insertNode,
                whenClick: function() {
                    return P.default(A, L, I, Y)
                }
            })) : c.createElement(T.default, a({}, Ae, {
                insertNode: e.insertNode,
                whenClick: function() {
                    return P.default(A, L, I, Y)
                }
            }))), c.createElement("div", {
                className: "inputBlock keywords"
            }, c.createElement(h.default, {
                tailoredClass: "keyword-wrap",
                moduleName: v.ERacpOrRajxOrRajn.Rajn,
                data: ke,
                panelProps: "",
                insertNode: e.insertNode,
                inputOnClick: function() {
                    return P.default(A, L, I, Y)
                }
            })), c.createElement("div", {
                className: "inputBlock roomList roomList_control shrink"
            }, c.createElement(c.Fragment, null, c.createElement(m.default, a({}, Oe, {
                insertNode: e.insertNode,
                PanelProps: e.PanelProps,
                device: A,
                rowSkin: L,
                renderNode: I,
                panel: j,
                dropDownIcon: !0
            })))), c.createElement("div", {
                className: "inputBlock classlevel shrink"
            }, "PC" === A ? c.createElement(c.Fragment, null, c.createElement(D.default, a({}, Me, {
                insertNode: e.insertNode,
                whenClick: function() {
                    return P.default(A, L, I, Y)
                }
            })), c.createElement("div", {
                className: "nextIcon"
            }, c.createElement(s.default, {
                name: "toolnext",
                className: "svg icon_control"
            }))) : c.createElement(T.default, a({}, Me, {
                insertNode: e.insertNode,
                whenClick: function() {
                    return P.default(A, L, I, Y)
                }
            }))), c.createElement("div", {
                className: "inputBlock airline shrink"
            }, c.createElement(h.default, {
                moduleName: v.ERacpOrRajxOrRajn.Rajn,
                data: a(a({}, Re), {
                    placeholder: "指定航空公司",
                    panelName: R
                }),
                panelProps: "",
                insertNode: e.insertNode,
                inputOnClick: function() {
                    return P.default(A, L, I, Y)
                }
            }), c.createElement("div", {
                className: "nextIcon"
            }, c.createElement(s.default, {
                name: "toolnext",
                className: "svg icon_control"
            }))), c.createElement("div", {
                className: "inputBlock check"
            }, c.createElement(u.default, {
                type: "checkbox",
                textContent: "直飛(含中停)",
                checked: ie,
                whenChange: function(e) {
                    return O({
                        type: "SETNOTRANS",
                        Notrans: e
                    })
                }
            })), "PC" === A && c.createElement(f.default, {
                device: A,
                title: "熱門搜尋",
                panelName: "foreignVacation-personal",
                hotKeyword: "機酒自由配",
                href: window.location.hostname.split(".")[0].includes("u") ? K ? "https://ub2b-event.liontravel.com/zh-tw/test/searchfree" : "https://uevent.liontravel.com/zh-tw/railtour/searchfree" : K ? "https://b2b-vacation.liontravel.com/searchfree?Destination=JP_TYO_6&tDeparture=JP_TYO_6" : "https://event.liontravel.com/zh-tw/flightandhotel/package"
            })), c.createElement("div", {
                className: b.default("searchBlock")
            }, c.createElement(S.FooterSearch, {
                isSearchResultM: je,
                onCancel: function() {
                    e.mCloseBtn && e.mCloseBtn()
                },
                onSearch: function() {
                    var t = {
                        PlaceKey: "foreign",
                        panelType: M,
                        panelName: R,
                        device: A,
                        project: e.panel,
                        PropsData: {
                            Departure: z,
                            AllDepartue: ee,
                            Destination: X,
                            Date: n.Date,
                            Days: te,
                            NowMultiCities: $,
                            Airline: ne,
                            AllAirlines: ae,
                            MatchAirlines: re,
                            Clskd: oe,
                            Notrans: ie,
                            Keyword: le,
                            RoomList: ce,
                            roomage: se,
                            noHotel: ue,
                            Traffic: "",
                            clickStart: W,
                            DepartureData: de,
                            DestinationData: pe,
                            RajxData: fe,
                            roomData: he,
                            roomInputText: me
                        },
                        initProps: e
                    };
                    C.HandleSubmit(t)
                },
                searchBtnClassName: "search_button",
                cancelBtnClassName: "cancel",
                searchBtnText: "PC" === A ? c.createElement(s.default, {
                    name: "toolsearch2",
                    size: "x15",
                    className: "svg"
                }) : "搜尋"
            })), "M" === A && c.createElement(f.default, {
                device: A,
                title: "熱門搜尋",
                panelName: "foreignVacation-personal",
                hotKeyword: "機酒自由配",
                href: window.location.hostname.split(".")[0].includes("u") ? K ? "https://ub2b-vacation.liontravel.com/searchfree?Destination=JP_TYO_6&tDeparture=JP_TYO_6" : "https://uevent.liontravel.com/zh-tw/railtour/searchfree" : K ? "https://b2b-vacation.liontravel.com/searchfree?Destination=JP_TYO_6&tDeparture=JP_TYO_6" : "https://event.liontravel.com/zh-tw/flightandhotel/package"
            })))
        }
    },
    235: function(e, t, n) {
        "use strict";
        var a, r = this && this.__extends || (a = function(e, t) {
            return (a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            a(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0)
          , l = n(138)
          , c = n(154)
          , s = n(26)
          , u = n(205)
          , d = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleChecked = function(e, t) {
                    var a, r = n.state.finalTransport.map((function(n) {
                        var a = Object.assign({}, n);
                        return a.name === e && (a.isChecked = t),
                        a
                    }
                    ));
                    if ("ALL" === e) {
                        var i = n.isAll(r);
                        a = n.allCheckboxIsTrue(r, i)
                    } else {
                        var l = r.map((function(e) {
                            return "ALL" === e.name ? o(o({}, e), {
                                isChecked: !1
                            }) : o({}, e)
                        }
                        ));
                        l.filter((function(e) {
                            return e.isChecked
                        }
                        )).length === r.length - 1 && l.forEach((function(e) {
                            "ALL" === e.name && (e.isChecked = !0)
                        }
                        )),
                        a = l
                    }
                    n.setState({
                        transport: a
                    }, n.setPanelState)
                }
                ,
                n.renderSub = function() {
                    var e = n.state
                      , t = e.isLoad
                      , a = e.transport;
                    if (t)
                        return a.map((function(e, t) {
                            var a = e.name
                              , r = e.text
                              , o = e.isChecked;
                            e.disabled;
                            return o && i.createElement("label", {
                                htmlFor: a,
                                key: a,
                                onClick: function(e) {
                                    return n.handleChecked(a, !1)
                                }
                            }, r, i.createElement(l.default, {
                                name: "tooladdb"
                            }))
                        }
                        ))
                }
                ,
                n.renderCom = function() {
                    var e = n.state
                      , t = e.isLoad
                      , a = e.transport;
                    if (t)
                        return a.map((function(e, t) {
                            var a = e.name
                              , r = e.text
                              , o = e.isChecked;
                            e.disabled;
                            return i.createElement(c.default, {
                                key: r,
                                type: "checkbox",
                                name: a,
                                textContent: r,
                                whenChange: function(e) {
                                    return n.handleChecked(a, e)
                                },
                                value: a,
                                checked: o
                            })
                        }
                        ))
                }
                ,
                n.state = {
                    transport: [],
                    isLoad: !1,
                    tempTrafficData: {
                        tempTraffics: "",
                        tempTransport: []
                    },
                    finalTransport: []
                },
                n
            }
            return r(t, e),
            t.prototype.componentDidMount = function() {
                this.fetchData()
            }
            ,
            t.prototype.componentDidUpdate = function(e, t) {
                if (e.Traffic !== this.props.Traffic && this.setState({
                    tempTrafficData: o(o({}, this.state.tempTrafficData), {
                        tempTraffics: this.props.Traffic
                    })
                }),
                t.transport !== this.state.transport && this.setState({
                    tempTrafficData: o(o({}, this.state.tempTrafficData), {
                        tempTransport: this.state.transport
                    })
                }),
                t.tempTrafficData !== this.state.tempTrafficData) {
                    if (0 === this.state.tempTrafficData.tempTransport.length)
                        return;
                    this.handleData(this.state.tempTrafficData.tempTransport)
                }
            }
            ,
            t.prototype.setPanelState = function() {
                var e = this.state.transport;
                this.props.setPanelState && this.props.setPanelState({
                    Traffic: this.transforTraffic(),
                    TrafficData: e
                })
            }
            ,
            t.prototype.fetchData = function() {
                var e = this
                  , t = this.props.apiSource ? this.props.apiSource.vacationTaiwanSearch.traffic : s.vacationTaiwanSearch.traffic
                  , n = sessionStorage.getItem(t);
                if (n && u.isJsonString(n)) {
                    var a = JSON.parse(n);
                    this.setState(a)
                } else
                    try {
                        fetch(t).then((function(e) {
                            return e.json()
                        }
                        )).then((function(n) {
                            var a;
                            "string" == typeof n ? a = JSON.parse(n).map((function(e) {
                                return o(o({}, e), {
                                    isChecked: !1,
                                    disabled: !1
                                })
                            }
                            )) : a = n.map((function(e) {
                                return o(o({}, e), {
                                    isChecked: !1,
                                    disabled: !1
                                })
                            }
                            ));
                            var r = JSON.stringify({
                                transport: a
                            });
                            sessionStorage.setItem(t, r),
                            e.setState({
                                transport: a
                            })
                        }
                        ))
                    } catch (e) {
                        throw e
                    }
            }
            ,
            t.prototype.allCheckboxIsTrue = function(e, t) {
                return e.forEach((function(e) {
                    e.isChecked = t
                }
                )),
                e
            }
            ,
            t.prototype.handleData = function(e) {
                var t = this;
                if (void 0 !== this.props.Traffic) {
                    var n = e.map((function(e) {
                        return "ALL" === t.props.Traffic || -1 !== t.props.Traffic.indexOf(e.name) ? o(o({}, e), {
                            isChecked: !0
                        }) : o(o({}, e), {
                            isChecked: !1
                        })
                    }
                    ))
                      , a = this.isAll(n)
                      , r = a ? this.allCheckboxIsTrue(n, a) : n;
                    this.setState({
                        finalTransport: r,
                        isLoad: !0
                    }, this.props.setPanelState({
                        TrafficData: r
                    }))
                }
            }
            ,
            t.prototype.isAll = function(e) {
                return e.filter((function(e) {
                    return "ALL" === e.name
                }
                ))[0].isChecked
            }
            ,
            t.prototype.transforTraffic = function() {
                for (var e = this.state.transport, t = [], n = 0; n < e.length; n++)
                    e[n].isChecked && t.push(e[n].name);
                return t.filter((function(e) {
                    return "ALL" === e
                }
                )).length || t.length === e.length - 1 ? "ALL" : t.join(",")
            }
            ,
            t.prototype.render = function() {
                var e = this
                  , t = this.props.customClass
                  , n = this.state.finalTransport;
                return i.createElement("div", {
                    className: t
                }, 0 !== n.length && n.map((function(t) {
                    var n = t.name
                      , a = t.text
                      , r = t.isChecked
                      , o = t.disabled;
                    return i.createElement(c.default, {
                        key: a,
                        type: "checkbox",
                        textContent: a,
                        id: n,
                        checked: r,
                        whenClick: function() {},
                        whenChange: function(t) {
                            return e.handleChecked(n, t)
                        },
                        disabled: o
                    })
                }
                )))
            }
            ,
            t
        }(i.PureComponent);
        t.default = d
    },
    236: function(e, t, n) {
        "use strict";
        var a = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(13)
          , i = n(26)
          , l = n(139)
          , c = n(251)
          , s = n(212)
          , u = n(181);
        n(240);
        t.default = function(e) {
            var t, n = e.device, d = e.type, p = e.insertNode, f = e.rowSkin, h = "panelFlight_" + d + "_" + n, m = o.default(((t = {})[h] = !0,
            t.rowSkin = f && "PC" === n,
            t.defaultSkin = !f && "PC" === n,
            t)), v = a(r.useState(null), 2), y = v[0], _ = v[1];
            return r.useEffect((function() {
                s.fetchIntlData((function(e) {
                    _(e)
                }
                ), i.flightInternational)
            }
            ), []),
            r.createElement(l.PanelMaster, {
                store: c.default
            }, r.createElement("div", {
                className: m
            }, y && r.createElement(u.default, {
                device: n,
                type: d,
                insertNode: p,
                intldtmOption: y,
                mCloseBtn: e.mCloseBtn
            })))
        }
    },
    238: function(e, t, n) {
        e.exports = {
            ActivityDestinationSideCont: "ActivityDestinationSideCont",
            allDeviceMenuListDtmRajn: "allDeviceMenuListDtmRajn",
            act_wrap_container: "act_wrap_container",
            ListStyle: "ListStyle",
            searchMode_m_focusBorder: "searchMode_m_focusBorder",
            act_rajn: "act_rajn",
            "act_rajn-result": "act_rajn-result",
            section: "section",
            title: "title",
            foot: "foot",
            "activity-b2c": "activity-b2c",
            defaultSkin: "defaultSkin",
            ft_gpmb: "ft_gpmb",
            cancel: "cancel",
            select: "select",
            keyword: "keyword",
            activityInput: "activityInput",
            inputSkin_Parent: "inputSkin_Parent",
            clearBtn_wrap: "clearBtn_wrap",
            inputSkin: "inputSkin",
            no_iconName: "no_iconName",
            inputSkin_group_title: "inputSkin_group_title",
            inputSkin_group_content: "inputSkin_group_content",
            activitySingleTitle: "activitySingleTitle",
            pcBtn: "pcBtn",
            bt_rcnb: "bt_rcnb",
            active: "active",
            sureBtn: "sureBtn",
            activity_links_wrap: "activity_links_wrap",
            oneline: "oneline",
            activePC: "activePC",
            "dtm_rcfr-wrap": "dtm_rcfr-wrap",
            open: "open",
            submitBtn: "submitBtn",
            single: "single",
            searchMode: "searchMode",
            destination: "destination",
            inputBlock: "inputBlock",
            search_button: "search_button",
            lg: "lg",
            ic_rcln: "ic_rcln",
            activeM: "activeM",
            inputSkin_group: "inputSkin_group",
            FooterSearch_searchBtn: "FooterSearch_searchBtn",
            rowSkin: "rowSkin",
            "ListStyle-close_btn": "ListStyle-close_btn",
            "dtm_rcfr-label": "dtm_rcfr-label",
            history_block: "history_block",
            history_destination: "history_destination",
            one_floor: "one_floor",
            tabs: "tabs",
            ctns: "ctns",
            panel: "panel",
            sec: "sec",
            sec_title: "sec_title",
            sec_all: "sec_all",
            item: "item",
            noMatchText: "noMatchText",
            red: "red",
            "m-place": "m-place",
            rajnFooter: "rajnFooter",
            angleRightIcon: "angleRightIcon",
            loader: "loader",
            toolsearch2: "toolsearch2",
            nvb_rslb: "nvb_rslb",
            activity: "activity",
            sideBar_content: "sideBar_content",
            "MMenuListDtmRajn-RemindText": "MMenuListDtmRajn-RemindText",
            sideBar_header_top: "sideBar_header_top",
            sideBar_goBack: "sideBar_goBack",
            sideBar_title: "sideBar_title",
            sideBar_header_bot: "sideBar_header_bot",
            sideBar_header_intZone: "sideBar_header_intZone",
            sideBar_header_background: "sideBar_header_background",
            i18n: "i18n",
            "hotKeyword-m": "hotKeyword-m",
            labelWrap: "labelWrap",
            "MMenuListDtmRajn-List": "MMenuListDtmRajn-List",
            sec_content: "sec_content",
            search_panel_pc: "search_panel_pc",
            activity_single: "activity_single",
            ntb_rcln: "ntb_rcln",
            hotKeyword_row: "hotKeyword_row",
            "hotKeyword-pc": "hotKeyword-pc",
            activity_PC: "activity_PC",
            hotKeyword: "hotKeyword",
            activity_History: "activity_History",
            activity_M: "activity_M"
        }
    },
    239: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__rest || function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                    t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
            }
            return n
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Theme = void 0;
        var o = n(140)
          , i = n(0)
          , l = n(142)
          , c = n(147)
          , s = n(145)
          , u = n(139)
          , d = n(152)
          , p = n(182);
        t.Theme = function(e) {
            var t, n = e.device, f = e.insertNode, h = e.rowSkin, m = e.onSubmitTarget, v = e.source, y = e.headerClassName, _ = r(e, ["device", "insertNode", "rowSkin", "onSubmitTarget", "source", "headerClassName"]), D = u.useConnect(), T = D.state, C = D.dispatch;
            i.useEffect((function() {
                d.getThemeTravelData(v).then((function(e) {
                    C({
                        type: "DEPARTUREOPTIONDATA",
                        DepartureData: d.flatTravelDepartureData
                    }),
                    C({
                        type: "THEME_OPTIONDATA",
                        Theme_OptionData: d.themeTravelOption()
                    }),
                    C({
                        type: "MAINDATA",
                        Main_Data: e
                    })
                }
                ))
            }
            ), []);
            var g = T.SubmitData
              , S = g.Date
              , b = g.Destination
              , w = g.Keywords
              , E = o()
              , N = o(S[0])
              , x = o(S[1])
              , P = m
              , k = p.turnSubmitDataToUrlParams(T, s.PanelName.themeTravel, !1)
              , O = p.handleSaveData(T, s.PanelName.themeTravel, S, !1)
              , A = null === (t = O.data.Departure[0]) || void 0 === t ? void 0 : t.Name;
            return i.createElement(p.HistoryProvider, {
                panelType: d.PanelType.ThemeTravel
            }, i.createElement(p.MainUI, {
                state: T,
                dispatch: C,
                insertNode: f,
                device: n,
                panelType: d.PanelType.ThemeTravel,
                submit: function() {
                    return l.onSubmit({
                        target: P,
                        params: a({}, _),
                        openTarget: "_blank"
                    }).validate((function(e) {
                        var t = [];
                        return 0 === b.length && T.SearchType === c.SearchType.Destination && t.push("請輸入 / 選擇目的地"),
                        w.trim() || T.SearchType !== c.SearchType.Keyword || t.push("請輸入關鍵字"),
                        S[0] || t.push("請選擇出發日期"),
                        S[1] || t.push("請選擇回程日期"),
                        N.isBefore(E, "date") && t.push("起日不可早於今天日期"),
                        x.isBefore(E, "date") && t.push("迄日不可早於今天日期"),
                        0 === t.length || t
                    }
                    )).modifier((function(e) {
                        return k
                    }
                    )).saveData((function() {
                        return O
                    }
                    )).send("encodeURI")
                },
                rowSkin: h,
                renderNode: _.renderNode,
                headerClassName: y,
                target: P,
                blank: !0,
                urlParams: k,
                clickRecordData: O,
                departureName: A
            }))
        }
    },
    240: function(e, t, n) {
        e.exports = {
            panelFlight_Home_PC: "panelFlight_Home_PC",
            rowSkin: "rowSkin",
            mainSearch: "mainSearch",
            placeAndDateGroup: "placeAndDateGroup",
            placeAndDate: "placeAndDate",
            placeInput: "placeInput",
            panelFlight_SEO_PC: "panelFlight_SEO_PC",
            panelFlight_Result_PC: "panelFlight_Result_PC",
            panelFlight_Global_PC: "panelFlight_Global_PC",
            panelFlight_Home_M: "panelFlight_Home_M",
            mainSearchM: "mainSearchM",
            panelFlight_SEO_M: "panelFlight_SEO_M",
            panelFlight_Result_M: "panelFlight_Result_M",
            panelFlight_Global_M: "panelFlight_Global_M",
            inputSkin_Parent: "inputSkin_Parent",
            inputSkin: "inputSkin",
            inputSkin_group_content: "inputSkin_group_content",
            peopleCabinInput: "peopleCabinInput",
            txt_green: "txt_green",
            nvb_rslb: "nvb_rslb",
            flightMobile: "flightMobile",
            sideBar_content: "sideBar_content",
            sideBar_moduleContainer: "sideBar_moduleContainer",
            flightRoomList: "flightRoomList",
            page_content: "page_content",
            wrapper: "wrapper",
            clearBtn_wrap: "clearBtn_wrap",
            input_compose: "input_compose",
            room_list_wrap_container: "room_list_wrap_container",
            room_count_select: "room_count_select",
            close_btn: "close_btn",
            ic_rcln: "ic_rcln",
            room_list_section: "room_list_section",
            room_list_row: "room_list_row",
            row_title: "row_title",
            int_gpct: "int_gpct",
            toolcancelb: "toolcancelb",
            svg: "svg",
            disabled: "disabled",
            tooladdb: "tooladdb",
            int_rcln: "int_rcln",
            amount: "amount",
            flightClass: "flightClass",
            classOption: "classOption",
            active: "active",
            leftBlock: "leftBlock",
            rightBlock: "rightBlock",
            topBlock: "topBlock",
            bottomBlock: "bottomBlock",
            warningText: "warningText",
            toolremind: "toolremind",
            calendarInput: "calendarInput",
            doubleCalendar: "doubleCalendar",
            middleStraight: "middleStraight",
            ListStyle: "ListStyle",
            ntb_rcln: "ntb_rcln",
            one_floor: "one_floor",
            tabs: "tabs",
            AllInputGroups: "AllInputGroups",
            "dtm_rcfr-wrap": "dtm_rcfr-wrap",
            "ListStyle-close_btn": "ListStyle-close_btn",
            history_block: "history_block",
            detail_info_block: "detail_info_block",
            history_departure: "history_departure",
            history_destination: "history_destination",
            nextIcon: "nextIcon",
            history_peopleNum: "history_peopleNum",
            "dtm_rcfr-label": "dtm_rcfr-label",
            dot: "dot",
            sec: "sec",
            sec_title: "sec_title",
            sec_all: "sec_all",
            item: "item",
            act_wrap_container: "act_wrap_container",
            act_rajn: "act_rajn",
            section: "section",
            hierarchyRajn: "hierarchyRajn",
            title: "title",
            select: "select",
            red: "red",
            "act_rajn-result": "act_rajn-result",
            "hierarchyRajn-result": "hierarchyRajn-result",
            "m-place": "m-place",
            noMatchText: "noMatchText",
            LOADING: "LOADING",
            changeBtn: "changeBtn",
            calendarContainer: "calendarContainer",
            close: "close",
            month_box: "month_box",
            week: "week",
            date: "date",
            date_box: "date_box",
            history_component: "history_component",
            multiMinus: "multiMinus",
            plusArea: "plusArea",
            editFlight: "editFlight",
            multiAddThree: "multiAddThree",
            multiAdd: "multiAdd",
            valuechangeRound: "valuechangeRound",
            checkBoxes: "checkBoxes",
            cr_rcln: "cr_rcln",
            indicator: "indicator",
            airlineInput: "airlineInput",
            dtm_rcfn: "dtm_rcfn",
            AirlineCompany: "AirlineCompany",
            sec_content: "sec_content",
            multiPlaceAndDate: "multiPlaceAndDate",
            MMenuListDtmRajn: "MMenuListDtmRajn",
            inputSkin_group: "inputSkin_group",
            multiMinusArea: "multiMinusArea",
            searchSubmit: "searchSubmit",
            history_title: "history_title",
            defaultSkin: "defaultSkin",
            wrap_container: "wrap_container",
            bt_rcnb: "bt_rcnb",
            st_rcln: "st_rcln",
            room_count_title: "room_count_title",
            "dropdown-place-holder": "dropdown-place-holder",
            "dropdown-label": "dropdown-label",
            selected: "selected",
            "dropdown-content": "dropdown-content",
            "dropdown-active": "dropdown-active",
            toolbefore: "toolbefore",
            "MMenuListDtmRajn-RemindText": "MMenuListDtmRajn-RemindText",
            sideBar_header_bot: "sideBar_header_bot",
            sideBar_header_intZone: "sideBar_header_intZone",
            ctns: "ctns",
            city: "city",
            country: "country",
            airport: "airport",
            flightGoM: "flightGoM",
            flightBackM: "flightBackM",
            flightMcalendar: "flightMcalendar",
            cy_rcln: "cy_rcln",
            selected_info: "selected_info",
            holiday: "holiday",
            calendar_content: "calendar_content",
            calendar_box: "calendar_box",
            year_month: "year_month",
            empty: "empty",
            canSelect: "canSelect",
            confirm_btn: "confirm_btn",
            inputSkin_group_title: "inputSkin_group_title",
            ntb_xitu: "ntb_xitu",
            ntb_xitu_tab: "ntb_xitu_tab",
            multMode: "multMode",
            roundTrip: "roundTrip",
            allDeviceMenuListDtmRajn: "allDeviceMenuListDtmRajn"
        }
    },
    247: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.RESULT = t.SEO = t.Hotel = void 0;
        var r = n(0)
          , o = n(267);
        t.Hotel = function(e) {
            return r.createElement(o.default, a({}, e))
        }
        ,
        t.SEO = function(e) {
            return r.createElement(o.default, a({}, e))
        }
        ,
        t.RESULT = function(e) {
            return r.createElement(o.default, a({}, e))
        }
    },
    249: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(26)
          , i = n(143)
          , l = n(139)
          , c = n(204)
          , s = n(229);
        t.default = function(e) {
            var t = e.onSubmitTarget ? e.onSubmitTarget : o.b2c_submitUrl.travel
              , n = e.source ? e.source : o.travel.place;
            return r.createElement(l.PanelMaster, {
                store: {
                    reducer: c.reducer,
                    containerState: c.containerState
                }
            }, r.createElement(s.Travel, a({
                device: i.Device.PC,
                onSubmitTarget: t,
                source: n
            }, e)))
        }
    },
    250: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(26)
          , i = n(143)
          , l = n(139)
          , c = n(204)
          , s = n(229);
        t.default = function(e) {
            var t = e.onSubmitTarget ? e.onSubmitTarget : o.b2c_submitUrl.travel
              , n = e.source ? e.source : o.travel.place;
            return r.createElement(l.PanelMaster, {
                store: {
                    reducer: c.reducer,
                    containerState: c.containerState
                }
            }, r.createElement(s.Travel, a({
                device: i.Device.Mobile,
                insertNode: e.insertNode,
                onSubmitTarget: t,
                source: n
            }, e)))
        }
    },
    251: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(140)
          , o = {
            DepDest: [{
                Departure: null,
                Destination: null
            }],
            Date: [{
                start: r().format("YYYY-MM-DD"),
                end: null
            }, {
                start: r().format("YYYY-MM-DD"),
                end: null
            }],
            Airline: null,
            Clskd: 0,
            Adult: 1,
            Child: 0,
            Infant: 0,
            Elder: 0,
            isTaiwanLine: !1,
            Notrans: !1,
            Rtow: 0,
            peopleNumWarningText: "",
            SeoDep: "",
            Stfn: "",
            Sfrom: ""
        };
        t.default = {
            containerState: o,
            reducer: function(e, t) {
                var n = t.hasOwnProperty("payload") && t.payload.idx || 0;
                switch (t.type) {
                case "SET_INITSTATE":
                    return a(a({}, e), t.payload.data);
                case "SET_RTOW":
                    return a(a({}, e), {
                        Rtow: t.payload.Rtow
                    });
                case "SET_DEP":
                    var o = JSON.parse(JSON.stringify(e.DepDest));
                    return o[n].Departure = t.payload.Departure,
                    a(a({}, e), {
                        DepDest: o
                    });
                case "SET_DEST":
                    return (i = JSON.parse(JSON.stringify(e.DepDest)))[n].Destination = t.payload.Destination,
                    a(a({}, e), {
                        DepDest: i
                    });
                case "ADD_PLACE&DATE":
                    var i = JSON.parse(JSON.stringify(e.DepDest))
                      , l = e.Date;
                    return i.length < 6 ? (i.push({
                        Departure: null,
                        Destination: null
                    }),
                    l.push({
                        start: null,
                        end: null
                    }),
                    a(a({}, e), {
                        DepDest: i,
                        Date: l
                    })) : e;
                case "MINUS_PLACE&DATE":
                    i = JSON.parse(JSON.stringify(e.DepDest));
                    var c = e.Date;
                    return i.splice(n, 1),
                    c.splice(n, 1),
                    a(a({}, e), {
                        DepDest: i,
                        Date: c
                    });
                case "SET_CHANGE":
                    return (i = JSON.parse(JSON.stringify(e.DepDest)))[n] = {
                        Departure: i[n].Destination,
                        Destination: i[n].Departure
                    },
                    a(a({}, e), {
                        DepDest: i
                    });
                case "SET_DATE":
                    var s = t.payload.Date
                      , u = s.start
                      , d = s.end
                      , p = e.Date.map((function(e, t) {
                        return (t === n || t > n && r(u).isAfter(e.start)) && (e.start = u,
                        e.end = d),
                        {
                            start: e.start,
                            end: e.end
                        }
                    }
                    ));
                    return a(a({}, e), {
                        Date: p
                    });
                case "SET_PEOPLE&CABIN":
                    var f = t.payload.peopleCabin
                      , h = f.Clskd
                      , m = f.Adult
                      , v = f.Child
                      , y = f.Infant
                      , _ = f.Elder;
                    return a(a({}, e), {
                        Clskd: h,
                        Adult: m,
                        Child: v,
                        Infant: y,
                        Elder: _
                    });
                case "SET_AIRLINE":
                    return a(a({}, e), {
                        Airline: t.payload.Airline
                    });
                case "SET_TWPEOPLENUM":
                    return a(a({}, e), {
                        PeopleNumTW: t.payload
                    });
                case "SET_ADULT":
                    return a(a({}, e), {
                        Adult: t.payload.Adult
                    });
                case "SET_CHILD":
                    return a(a({}, e), {
                        Child: t.payload.Child
                    });
                case "SET_INFANT":
                    return a(a({}, e), {
                        Infant: t.payload.Infant
                    });
                case "SET_ELDER":
                    return a(a({}, e), {
                        Elder: t.payload.Elder
                    });
                case "SET_ALCLASS":
                    return a(a({}, e), {
                        Clskd: t.payload.Clskd
                    });
                case "SET_NOTRANS":
                    return a(a({}, e), {
                        Notrans: !e.Notrans
                    });
                case "SET_ISTAIWANLINE":
                    return a(a({}, e), {
                        isTaiwanLine: t.payload.isTaiwanLine
                    });
                case "SET_PEOPLENUMWARNINGTEXT":
                    return a(a({}, e), {
                        peopleNumWarningText: t.payload.peopleNumWarningText
                    });
                default:
                    return e
                }
            }
        }
    },
    265: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TwoLabel = void 0;
        var o = n(0)
          , i = n(209)
          , l = n(218)
          , c = n(234)
          , s = n(223)
          , u = n(204)
          , d = n(139)
          , p = n(295)
          , f = n(26)
          , h = n(143)
          , m = function(e) {
            var t = e.label
              , n = e.subLabel
              , a = e.rowSkin
              , r = e.device;
            return a && "PC" === r ? o.createElement("div", {
                className: "label"
            }, o.createElement("div", null, t, " ", o.createElement("span", null, " (" + n + ")"))) : o.createElement("div", {
                className: "label"
            }, o.createElement("div", null, " ", t), o.createElement("p", null, "(" + n + ")"))
        };
        t.TwoLabel = function(e) {
            var t, n, v, y, _ = null !== (y = null === (v = null === (n = null === (t = null == e ? void 0 : e.panelTypeData) || void 0 === t ? void 0 : t[e.panel]) || void 0 === n ? void 0 : n.vacation) || void 0 === v ? void 0 : v.menuType) && void 0 !== y ? y : 1, D = r(o.useState(_), 2), T = D[0], C = D[1], g = "groupfreeSearch" === e.panel;
            return e.isHead ? o.createElement(l.default, {
                customClass: "search_panel_two " + (g ? "groupfreeSearch" : ""),
                activeTabIndex: T,
                onClick: function(e) {
                    C(e)
                }
            }, o.createElement(l.Tab, {
                label: "台灣"
            }, 0 === T ? o.createElement(s.default, a({}, e, {
                PanelProps: h.EPanelKeys.taiwanVacation
            })) : null), o.createElement(l.Tab, {
                label: "國外"
            }, 1 === T ? o.createElement(i.default, {
                defaultTab: g ? 1 : 0
            }, o.createElement(i.default.Tab, {
                label: o.createElement(m, {
                    label: "個人自由行",
                    subLabel: "天數航班自己選",
                    rowSkin: e.rowSkin,
                    device: e.device
                })
            }, o.createElement(i.default.TabContent, {
                clickedIndex: 0
            }, o.createElement(c.default, a({}, e, {
                PanelProps: h.EPanelKeys.personalVacation
            })))), o.createElement(i.default.Tab, {
                label: o.createElement(m, {
                    label: "團體自由行",
                    subLabel: "團體湊票享優惠",
                    rowSkin: e.rowSkin,
                    device: e.device
                })
            }, o.createElement(i.default.TabContent, {
                clickedIndex: 1
            }, o.createElement(d.PanelMaster, {
                store: {
                    reducer: u.reducer,
                    containerState: u.containerState
                }
            }, o.createElement(p.GroupFree, {
                device: e.device,
                insertNode: e.insertNode,
                onSubmitTarget: f.b2c_submitUrl.travel,
                rowSkin: e.rowSkin,
                renderNode: e.renderNode
            }))))) : null)) : o.createElement(i.default, null, o.createElement(i.default.Tab, {
                label: o.createElement(m, {
                    label: "個人自由行",
                    subLabel: "天數航班自己選",
                    rowSkin: e.rowSkin,
                    device: e.device
                })
            }, o.createElement(i.default.TabContent, {
                clickedIndex: 0
            }, o.createElement(c.default, a({}, e, {
                PanelProps: h.EPanelKeys.personalVacation
            })))), o.createElement(i.default.Tab, {
                label: o.createElement(m, {
                    label: "團體自由行",
                    subLabel: "團體湊票享優惠",
                    rowSkin: e.rowSkin,
                    device: e.device
                })
            }, o.createElement(i.default.TabContent, {
                clickedIndex: 1
            }, o.createElement(d.PanelMaster, {
                store: {
                    reducer: u.reducer,
                    containerState: u.containerState
                }
            }, o.createElement(p.GroupFree, {
                device: e.device,
                insertNode: e.insertNode,
                onSubmitTarget: f.b2c_submitUrl.travel,
                rowSkin: e.rowSkin,
                renderNode: e.renderNode
            })))))
        }
    },
    267: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.HotelSEOPanel = void 0;
        var r = n(0)
          , o = n(139)
          , i = n(268)
          , l = n(269);
        t.HotelSEOPanel = function(e) {
            return r.createElement(o.PanelMaster, {
                store: {
                    reducer: i.reducer,
                    containerState: i.containerState
                }
            }, r.createElement(l.default, a({}, e)))
        }
        ,
        t.default = t.HotelSEOPanel
    },
    268: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.reducer = t.containerState = void 0,
        t.containerState = {
            Destination: "",
            Date: ["", ""],
            RoomList: [],
            Allotment: !1,
            date: "",
            Text: "共1間，2位大人，0位小孩",
            type: !0,
            Filter: {
                Allotment: "1"
            },
            dataForRoomList: [],
            selectedDataDtm: {
                SelectedBy: "Menu",
                inTaiwan: "",
                inTaiwanText: "",
                text: "",
                vCity: "",
                vCountry: "",
                vCountryText: "",
                vLine: "",
                vLineText: "",
                value: ""
            },
            selectedDataRajx: {
                Kind: "",
                Newtxt: "",
                SelectedBy: "AutoComplete",
                dataIndex: 0,
                level2: "",
                level3: "",
                txt: ""
            },
            List: [{
                adult: 2,
                childrenWithBed: []
            }],
            DtmKind: 10,
            minAdult: 1,
            taiwanPage: !1
        },
        t.reducer = function(e, t) {
            switch (t.type) {
            case "SETHOTELDATA":
                return a(a({}, e), t.HotelData);
            case "DESTINATION":
                return a(a({}, e), {
                    Destination: t.Destination
                });
            case "SETHOTEL":
                return a(a({}, e), {
                    Hotel: t.Hotel
                });
            case "CalendarSUBMIT":
                return a(a({}, e), {
                    Date: t.Date
                });
            case "ROOMLISTINPUT":
                return a(a({}, e), t.RoomsData);
            case "ROOMLIST":
                return a(a({}, e), {
                    List: t.List
                });
            case "ATLEASTONEADULT":
                return a(a({}, e), {
                    List: t.List,
                    Text: t.Text
                });
            case "DTMTOTALDATA":
                return a(a({}, e), {
                    DtmTotalData: t.DtmTotalData
                });
            case "SELECTEDDATADTM":
                return a(a({}, e), {
                    selectedDataDtm: t.selectedDataDtm
                });
            case "SELECTEDDATARAJX":
                return a(a({}, e), {
                    selectedDataRajx: t.selectedDataRajx
                });
            case "SETSELECTEDBYRECORD":
                return a(a({}, e), {
                    SelectedByRecord: t.SelectedByRecord
                });
            case "ALLOTMENT":
                return a(a({}, e), {
                    Filter: t.Filter
                });
            case "CLEARDATA":
                return a(a({}, e), {
                    selectedDataDtm: {
                        SelectedBy: "Menu",
                        inTaiwan: "",
                        inTaiwanText: "",
                        text: "",
                        vCity: "",
                        vCountry: "",
                        vCountryText: "",
                        vLine: "",
                        vLineText: "",
                        value: ""
                    },
                    selectedDataRajx: {
                        Kind: "",
                        Newtxt: "",
                        SelectedBy: "AutoComplete",
                        dataIndex: 0,
                        level2: "",
                        level3: "",
                        txt: ""
                    },
                    Destination: ""
                });
            case "SET_DEFAULT":
                return a(a({}, e), {
                    Destination: "",
                    Date: [],
                    RoomList: [],
                    Allotment: !1
                });
            case "SET_TAIWANPAGE":
                return a(a({}, e), {
                    taiwanPage: t.taiwanPage
                });
            default:
                return e
            }
        }
    },
    269: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , o = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , i = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PC = void 0;
        var l = n(0)
          , c = n(138)
          , s = n(13)
          , u = n(157)
          , d = n(158)
          , p = n(270)
          , f = n(271)
          , h = n(154);
        n(272);
        var m = n(160)
          , v = n(142)
          , y = n(26)
          , _ = n(205)
          , D = n(146)
          , T = n(137)
          , C = n(140)
          , g = n(139)
          , S = n(149)
          , b = n(145)
          , w = n(178)
          , E = n(293)
          , N = n(273)
          , x = n(148)
          , P = n(164)
          , k = n(177)
          , O = n(27)
          , A = function(e, t) {
            return decodeURIComponent(function(e, t) {
                var n, a;
                return null === (a = null === (n = Object.entries(e)) || void 0 === n ? void 0 : n.find((function(e) {
                    return i(e, 1)[0].toLowerCase() === t.toLowerCase()
                }
                ))) || void 0 === a ? void 0 : a[1]
            }(e, t))
        };
        t.PC = function(e) {
            var t, n, R, M, L = g.useConnect(), I = L.state, j = L.dispatch, B = O.useTranslation(), K = B.t, Y = B.i18n, F = i(l.useState(!1), 2), H = F[0], W = F[1], U = i(l.useState(!0), 2), J = (U[0],
            U[1]), V = i(l.useState(!1), 2), G = V[0], q = V[1], Q = i(l.useState(JSON.parse(localStorage.getItem("hotel_queryKey"))), 2), Z = Q[0], z = Q[1], X = i(l.useState(), 2), $ = X[0], ee = X[1], te = i(l.useState(""), 2), ne = te[0], ae = te[1], re = function() {
                switch (Y.language) {
                case "en-us":
                    return y.hotel.destination_en;
                case "ja-jp":
                    return y.hotel.destination_jp;
                case "zh":
                case "zh-tw":
                default:
                    return y.hotel.destination
                }
            }, oe = (null == e ? void 0 : e.apiSource) ? null === (n = null == e ? void 0 : e.apiSource) || void 0 === n ? void 0 : n.destination : re(), ie = C().add(12, "months").format("YYYY-MM-DD"), le = {
                adult: K("hotel.roomList.adult"),
                childrenWithBed: K("hotel.roomList.child")
            }, ce = new URL(document.URL).searchParams.has("eventAct"), se = /^u?event.liontravel.com/.test(window.location.hostname), ue = e.device, de = e.rowSkin, pe = e.renderNode;
            l.useEffect((function() {
                j({
                    type: "SETSELECTEDBYRECORD",
                    SelectedByRecord: "Menu"
                }),
                j(N.IsTaiwanPage()),
                Me(),
                S.initialState({
                    LocalStorageName: v.EPanelKeys.hotel
                }).getLocalStorage().getUrl().asyncGetData().done((function(t) {
                    var n, r, o, i, l, c, s = t.urlData.reduce((function(e, t) {
                        var n;
                        return a(a({}, e), ((n = {})[t.key] = t.value,
                        n))
                    }
                    ), {});
                    if (se) {
                        if (!ce)
                            return void j({
                                type: "CLEARDATA"
                            });
                        var u = new URL(window.location.href)
                          , d = decodeURIComponent(u.searchParams.get("hotelName"));
                        Te(d).then((function(e) {
                            var t = e.data.Destinations[0];
                            j({
                                type: "SETHOTELDATA",
                                HotelData: {
                                    selectedDataRajx: a(a({}, t), {
                                        SelectedBy: "AutoComplete",
                                        dataIndex: 0
                                    }),
                                    Destination: t.txt,
                                    selectedDataDtm: {
                                        SelectedBy: "Menu",
                                        inTaiwan: "",
                                        inTaiwanText: "",
                                        text: "",
                                        vCity: "",
                                        vCountry: "",
                                        vCountryText: "",
                                        vLine: "",
                                        vLineText: "",
                                        value: ""
                                    }
                                }
                            })
                        }
                        ))
                    } else if ("result" === e.typeName) {
                        if (null == s ? void 0 : s.searchParam)
                            if (xe(null == s ? void 0 : s.searchParam)) {
                                var p = JSON.parse(null == s ? void 0 : s.searchParam)
                                  , f = p.CheckIn
                                  , h = p.CheckOut
                                  , m = p.Rooms
                                  , y = p.Destination
                                  , _ = p.Filter
                                  , D = void 0
                                  , T = void 0
                                  , g = f && h && C(h) > C() && C(h) > C(f) && C(f).format("YYYY-MM-DD") >= C().format("YYYY-MM-DD")
                                  , S = 0 === y.Code.indexOf("TW");
                                g ? (T = h.split("/").join("-"),
                                D = f.split("/").join("-")) : S ? (D = C().add(7, "day").format("YYYY-MM-DD"),
                                T = C().add(8, "day").format("YYYY-MM-DD")) : (D = C().add(25, "day").format("YYYY-MM-DD"),
                                T = C().add(26, "day").format("YYYY-MM-DD")),
                                j({
                                    type: "CalendarSUBMIT",
                                    Date: [D, T]
                                }),
                                me(y.Txt, y.Code).then((function(e) {
                                    j({
                                        type: "DESTINATION",
                                        Destination: e.text
                                    }),
                                    "Menu" === e.SelectedBy ? (j({
                                        type: "SELECTEDDATADTM",
                                        selectedDataDtm: e
                                    }),
                                    ye(e.vCity)) : j({
                                        type: "SELECTEDDATARAJX",
                                        selectedDataRajx: a(a({}, I.selectedDataRajx), {
                                            txt: y.Txt,
                                            level3: y.Code,
                                            Kind: y.Kind
                                        })
                                    })
                                }
                                ));
                                var b = [];
                                m ? m.map((function(e, t) {
                                    var n = {};
                                    n.adult = parseInt(m[t].AdultQty),
                                    n.childrenWithBed = m[t].ChildAges,
                                    b.push(n)
                                }
                                )) : b = [{
                                    adult: 2,
                                    childrenWithBed: []
                                }],
                                j({
                                    type: "ROOMLIST",
                                    List: b
                                }),
                                (null == _ ? void 0 : _.Allotment) ? j({
                                    type: "ALLOTMENT",
                                    Filter: {
                                        Allotment: _.Allotment
                                    }
                                }) : j({
                                    type: "ALLOTMENT",
                                    Filter: {
                                        Allotment: "1"
                                    }
                                })
                            } else {
                                var w = C().add(25, "day").format("YYYY-MM-DD")
                                  , N = C().add(26, "day").format("YYYY-MM-DD");
                                j({
                                    type: "CalendarSUBMIT",
                                    Date: [w, N]
                                }),
                                j({
                                    type: "DESTINATION",
                                    Destination: "東京"
                                }),
                                j({
                                    type: "SELECTEDDATADTM",
                                    selectedDataDtm: a(a({}, I.selectedDataDtm), {
                                        text: "東京",
                                        vCity: "JP_TYO_179900"
                                    })
                                })
                            }
                        else if (A(s, "hotelCode")) {
                            q(!0);
                            var x = A(s, "hotelCode")
                              , P = Number(A(s, "allotment"))
                              , k = A(s, "roomsData")
                              , O = [{
                                adult: 2,
                                childrenWithBed: []
                            }]
                              , R = O
                              , M = null === (r = null === (n = window.location.pathname) || void 0 === n ? void 0 : n.split("/")[2]) || void 0 === r ? void 0 : r.split("-")[0]
                              , L = null === (o = document.getElementById("mapData")) || void 0 === o ? void 0 : o.getAttribute("data-name")
                              , B = (null === (i = document.getElementById("mapData")) || void 0 === i ? void 0 : i.getAttribute("data-country")) + "_" + (null === (l = document.getElementById("mapData")) || void 0 === l ? void 0 : l.getAttribute("data-city")) + "_" + x;
                            f = A(s, "checkIn"),
                            h = A(s, "checkOut");
                            if (P || (P = 0),
                            k && xe(k)) {
                                var K = JSON.parse(k)
                                  , Y = K.map((function(e, t) {
                                    return {
                                        adult: parseInt(K[t].AdultQty),
                                        childrenWithBed: K[t].ChildAges
                                    }
                                }
                                ));
                                R = "[]" === k ? O : Y
                            }
                            D = void 0,
                            T = void 0,
                            S = "tw" === M;
                            (g = f && h && C(h) > C() && C(h) > C(f) && C(f).format("YYYY-MM-DD") >= C().format("YYYY-MM-DD")) ? (D = f.split("/").join("-"),
                            T = h.split("/").join("-")) : S ? (D = C().add(7, "day").format("YYYY-MM-DD"),
                            T = C().add(8, "day").format("YYYY-MM-DD")) : (D = C().add(25, "day").format("YYYY-MM-DD"),
                            T = C().add(26, "day").format("YYYY-MM-DD")),
                            j({
                                type: "CalendarSUBMIT",
                                Date: [D, T]
                            }),
                            j({
                                type: "SELECTEDDATARAJX",
                                selectedDataRajx: a(a({}, I.selectedDataRajx), {
                                    txt: L,
                                    level3: B,
                                    Kind: "90"
                                })
                            }),
                            j({
                                type: "DESTINATION",
                                Destination: void 0 === L ? "" : L
                            }),
                            j({
                                type: "ROOMLIST",
                                List: R
                            }),
                            j({
                                type: "ALLOTMENT",
                                Filter: {
                                    Allotment: P
                                }
                            })
                        } else if (0 === (null === (c = null == t ? void 0 : t.urlData) || void 0 === c ? void 0 : c.length)) {
                            w = C().add(25, "day").format("YYYY-MM-DD"),
                            N = C().add(26, "day").format("YYYY-MM-DD");
                            j({
                                type: "CalendarSUBMIT",
                                Date: [w, N]
                            }),
                            j({
                                type: "DESTINATION",
                                Destination: "東京"
                            }),
                            j({
                                type: "SELECTEDDATADTM",
                                selectedDataDtm: a(a({}, I.selectedDataDtm), {
                                    text: "東京",
                                    vCity: "JP_TYO_179900"
                                })
                            })
                        }
                    } else if ("seo" === e.typeName) {
                        var F = location.pathname.split("/").pop()
                          , H = "https://" + location.hostname + "/place/searchkeyword/" + F;
                        fetch(H).then((function(e) {
                            return e.json()
                        }
                        )).then((function(e) {
                            var t = e[0].CityName;
                            me(t, "").then((function(e) {
                                j({
                                    type: "DESTINATION",
                                    Destination: t
                                }),
                                j({
                                    type: "SELECTEDDATADTM",
                                    selectedDataDtm: a(a({}, I.selectedDataDtm), {
                                        text: t,
                                        vCity: e.vCity
                                    })
                                })
                            }
                            ))
                        }
                        ));
                        w = C().add(25, "day").format("YYYY-MM-DD"),
                        N = C().add(26, "day").format("YYYY-MM-DD");
                        j({
                            type: "CalendarSUBMIT",
                            Date: [w, N]
                        })
                    } else if ("search" === e.typeName && t.LocalStorageData && !t.urlData[0] && 0 !== t.LocalStorageData.length) {
                        var U = t.LocalStorageData[0]
                          , J = (D = U.setStartDate,
                        T = U.setEndDate,
                        R = U.List,
                        U.Destination)
                          , V = U.vCity
                          , G = U.level3
                          , Q = U.KindRajx;
                        if (!R || !T || !D)
                            return E.default({
                                panel: v.EPanelKeys.hotel,
                                methods: "delete"
                            }),
                            void j({
                                type: "SET_DEFAULT"
                            });
                        S = void 0;
                        V ? S = "TW" === V.split("_")[0] : G && (S = "TW" === G.split("_")[0]);
                        var Z = void 0
                          , z = void 0;
                        (g = D && T && C(T) > C() && C(T) > C(D) && C(D).format("YYYY-MM-DD") >= C().format("YYYY-MM-DD")) ? (Z = D,
                        z = T) : S ? (Z = C().add(7, "day").format("YYYY-MM-DD"),
                        z = C().add(8, "day").format("YYYY-MM-DD")) : (Z = C().add(25, "day").format("YYYY-MM-DD"),
                        z = C().add(26, "day").format("YYYY-MM-DD"));
                        var X = ve(R);
                        W(!0),
                        j({
                            type: "SETHOTELDATA",
                            HotelData: {
                                List: R,
                                Date: [Z, z],
                                Text: X,
                                Destination: J
                            }
                        }),
                        V ? (j({
                            type: "SELECTEDDATADTM",
                            selectedDataDtm: a(a({}, I.selectedDataDtm), {
                                text: J,
                                vCity: V
                            })
                        }),
                        ye(V)) : G && j({
                            type: "SELECTEDDATARAJX",
                            selectedDataRajx: a(a({}, I.selectedDataRajx), {
                                txt: J,
                                level3: G,
                                Kind: Q
                            })
                        })
                    }
                }
                ))
            }
            ), []),
            l.useEffect((function() {
                var e = "TW";
                I.selectedDataDtm && I.selectedDataDtm.vCity ? e = I.selectedDataDtm.vCity.split("_")[0] : I.selectedDataRajx && I.selectedDataRajx.level3 && (e = I.selectedDataRajx.level3.split("_")[0]);
                var t = C().format("YYYY-MM-DD");
                return ee(t),
                function() {}
            }
            ), [I.selectedDataRajx, I.selectedDataDtm]);
            var fe = {
                middle: "wave",
                doubleCalendar: !0,
                doubleInput: !0,
                startTitle: K("hotel.calendar.startTitle"),
                endTitle: K("hotel.calendar.endTitle"),
                dateStartTxt: K("hotel.calendar.dateStartTxt"),
                dateEndTxt: K("hotel.calendar.dateEndTxt"),
                startMonth: (new Date).getHours() > 11 ? C().add(1, "day").format("YYYY-MM") : C().format("YYYY-MM"),
                endMonth: C().add(13, "month").format("YYYY-MM"),
                customDiffTxt: function(e) {
                    return "" + K("hotel.calendar.unit", {
                        count: e
                    })
                },
                showNight: !0,
                inputStatusCallback: function(e, t) {
                    j({
                        type: "SETHOTELDATA",
                        HotelData: {
                            type: e,
                            date: t
                        }
                    })
                },
                calendarStartTitle: K("hotel.calendar.calendarStartTitle"),
                calendarEndTitle: K("hotel.calendar.calendarEndTitle"),
                panelName: "hotel"
            }
              , he = function() {
                for (var e = [], t = 1; t < 8; t++)
                    e.push({
                        text: K("hotel.roomList.totalRoom", {
                            count: t
                        }),
                        value: t
                    });
                return e
            }
              , me = function(e, t) {
                return r(void 0, void 0, void 0, (function() {
                    var n, a, i, l, c, s, u, d, p;
                    return o(this, (function(f) {
                        switch (f.label) {
                        case 0:
                            return [4, De()];
                        case 1:
                            return n = f.sent(),
                            a = {
                                SelectedBy: "",
                                inTaiwan: "",
                                inTaiwanText: "",
                                text: e,
                                vCity: t,
                                vCountry: "",
                                vCountryText: "",
                                vLine: "",
                                vLineText: "",
                                value: ""
                            },
                            i = function() {
                                return r(void 0, void 0, void 0, (function() {
                                    var e, t;
                                    return o(this, (function(r) {
                                        for (e in n.vCountry)
                                            for (t in n.vCountry[e])
                                                a.vCountry === t && (a.vCountryText = n.vCountry[e][t],
                                                a.vLine = e);
                                        return [2]
                                    }
                                    ))
                                }
                                ))
                            }
                            ,
                            l = function() {
                                return r(void 0, void 0, void 0, (function() {
                                    var e, t;
                                    return o(this, (function(r) {
                                        for (e in n.vLine)
                                            for (t in n.vLine[e])
                                                t === a.vLine && (a.inTaiwan = e,
                                                a.inTaiwanText = n.inTaiwan[e],
                                                a.vLineText = n.vLine[e][t]);
                                        return [2]
                                    }
                                    ))
                                }
                                ))
                            }
                            ,
                            c = function() {
                                return r(void 0, void 0, void 0, (function() {
                                    return o(this, (function(e) {
                                        return "" === a.vLine && "" === a.vCountry ? a.SelectedBy = "Autocomplete" : a.SelectedBy = "Menu",
                                        [2]
                                    }
                                    ))
                                }
                                ))
                            }
                            ,
                            [4, function() {
                                return r(void 0, void 0, void 0, (function() {
                                    var t, r;
                                    return o(this, (function(o) {
                                        for (t in n.vCity)
                                            for (r in n.vCity[t])
                                                if (e === n.vCity[t][r])
                                                    return a.vCountry = t,
                                                    a.vCity = r,
                                                    [2, a];
                                        return [2]
                                    }
                                    ))
                                }
                                ))
                            }()];
                        case 2:
                            return f.sent(),
                            [4, i()];
                        case 3:
                            return f.sent(),
                            [4, l()];
                        case 4:
                            return f.sent(),
                            [4, c()];
                        case 5:
                            return f.sent(),
                            s = a.inTaiwan,
                            u = a.vLine,
                            d = a.vCountry,
                            p = a.vCity,
                            a.value = s + "-" + u + "-" + d + "-" + p,
                            [2, a]
                        }
                    }
                    ))
                }
                ))
            }
              , ve = function(e) {
                for (var t = "共" + e.length + "間，", n = 0, a = 0, r = 0; r < e.length; r++)
                    n += e[r].adult,
                    a += e[r].childrenWithBed.length;
                return t = (t += n + "位大人、" + a + "位小孩").replace(/\、$/g, "人")
            }
              , ye = function(e) {
                _e(e).then((function(e) {
                    j({
                        type: "SETHOTELDATA",
                        HotelData: {
                            DtmKind: e
                        }
                    })
                }
                ))
            }
              , _e = function(e) {
                return r(void 0, void 0, void 0, (function() {
                    var t, n, a;
                    return o(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return t = "10",
                            [4, fetch(re())];
                        case 1:
                            return [4, r.sent().json()];
                        case 2:
                            for (a in (n = r.sent()).vKind)
                                a === e && (t = n.vKind[a]);
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
              , De = function() {
                var e = sessionStorage.getItem(oe);
                return e && _.isJsonString(e) ? JSON.parse(e) : fetch(oe).then((function(e) {
                    return e.json()
                }
                )).then((function(e) {
                    var t = JSON.stringify(e);
                    return sessionStorage.setItem(oe, t),
                    e
                }
                ))
            }
              , Te = function(t) {
                window.abortController && window.abortController.abort();
                var n = new AbortController;
                window.abortController = n;
                var a = e.apiSource ? e.apiSource.destinationAutoComplete + "?keyWord=" + encodeURIComponent(t) : y.hotel.destinationAutoComplete + "?keyWord=" + encodeURIComponent(t)
                  , r = new Promise((function(e, t) {
                    e(null)
                }
                ))
                  , o = t.trim();
                return o.length < 2 ? r : /([\u4E00-\u9FA5]+$)|(d+$)|([a-zA-Z])|[0-9]|\(|\)/.test(o) ? fetch(a, {
                    method: "GET",
                    mode: "cors",
                    signal: n.signal,
                    headers: new Headers({
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    })
                }).then((function(e) {
                    return e.json()
                }
                )).then((function(e) {
                    return Ce(e, o)
                }
                )).catch((function(e) {}
                )) : r
            }
              , Ce = function(e, t) {
                e.Destinations.map((function(e) {
                    e.level1 = e.Kind,
                    e.level2 = e.TypeName,
                    e.level3 = e.Code,
                    e.txt = e.Name,
                    delete e.level1,
                    delete e.KindName,
                    delete e.Code,
                    delete e.Name
                }
                ));
                var n;
                return {
                    data: {
                        Destinations: e.Destinations,
                        rules: (e.Destinations,
                        n = "TypeName",
                        Array.from(new Set(e.Destinations.map((function(e) {
                            return e[n]
                        }
                        )))).map((function(e) {
                            return {
                                title: e.replace("(含週邊)", "")
                            }
                        }
                        )))
                    },
                    searchKeyWord: t
                }
            }
              , ge = function(e) {
                0 !== e.length && j({
                    type: "SETHOTELDATA",
                    HotelData: {
                        List: e
                    }
                })
            }
              , Se = function(e, t) {
                j({
                    type: "CalendarSUBMIT",
                    Date: [e, t]
                })
            }
              , be = function() {
                var t, n = I.selectedDataDtm, i = I.selectedDataRajx, l = I.List, c = I.Filter, s = I.Date, u = I.DtmKind, d = I.Destination;
                if (void 0 !== n && "" !== n.text && d === n.text) {
                    var p = n.SelectedBy
                      , f = n.vCity
                      , h = n.text
                      , m = n.vLine
                      , _ = n.vLineText
                      , D = n.inTaiwanText;
                    t = Ee(p, f, u, h, m, _, D)
                } else if (void 0 !== i && "" !== i.txt && d === i.txt) {
                    p = i.SelectedBy;
                    var T = i.level3
                      , C = i.Kind
                      , g = i.txt;
                    t = Ee(p, T, C, g)
                }
                var S = [s[0].split("-").join(""), s[1].split("-").join("")].reduce((function(e, t, n) {
                    var r = t.substr(0, 4) + "/" + t.substr(4, 2) + "/" + t.substr(6, 2);
                    return a(a({}, e), 0 === n ? {
                        CheckIn: r
                    } : {
                        CheckOut: r
                    })
                }
                ), {})
                  , E = l.map((function(e) {
                    var t, n;
                    return {
                        AdultQty: Number(null == e ? void 0 : e.adult),
                        ChildQty: Number(null === (t = null == e ? void 0 : e.childrenWithBed) || void 0 === t ? void 0 : t.length),
                        ChildAges: null === (n = null == e ? void 0 : e.childrenWithBed) || void 0 === n ? void 0 : n.map((function(e) {
                            return Number(e)
                        }
                        ))
                    }
                }
                ))
                  , N = l.reduce((function(e, t) {
                    return {
                        RoomCount: e.RoomCount + 1,
                        AdultCount: e.AdultCount + t.adult,
                        ChildCount: e.ChildCount + t.childrenWithBed.length
                    }
                }
                ), {
                    RoomCount: 0,
                    AdultCount: 0,
                    ChildCount: 0
                })
                  , x = {
                    panelName: b.PanelName.hotel,
                    data: {
                        Destination: [{
                            Line: {
                                Name: null == t ? void 0 : t.vLineText,
                                Code: null == t ? void 0 : t.vLine
                            },
                            City: {
                                Name: null == t ? void 0 : t.Txt,
                                Code: null == t ? void 0 : t.Code
                            },
                            TourType: null == t ? void 0 : t.inTaiwanText,
                            SelectedBy: "Menu"
                        }],
                        Date: s,
                        RoomCount: null == N ? void 0 : N.RoomCount,
                        AdultCount: null == N ? void 0 : N.AdultCount,
                        ChildCount: null == N ? void 0 : N.ChildCount,
                        Allotment: parseInt(null == c ? void 0 : c.Allotment),
                        HistorySearch: "0"
                    }
                }
                  , P = {
                    panelName: b.PanelName.hotel,
                    data: {
                        Destination: [{
                            SelectedBy: "AutoComplete",
                            City: {
                                Name: null == t ? void 0 : t.Txt,
                                Code: null == t ? void 0 : t.Code
                            }
                        }],
                        Date: s,
                        RoomCount: null == N ? void 0 : N.RoomCount,
                        AdultCount: null == N ? void 0 : N.AdultCount,
                        ChildCount: null == N ? void 0 : N.ChildCount,
                        Allotment: parseInt(null == c ? void 0 : c.Allotment),
                        HistorySearch: "0"
                    }
                }
                  , k = "Menu" === (null == t ? void 0 : t.SelectedBy) ? x : P;
                if (t && 90 === Number(t.Kind)) {
                    var O, A = void 0, R = (C = void 0,
                    void 0);
                    t.hasOwnProperty("Code") && (A = t.Code),
                    t.hasOwnProperty("Kind") && (C = t.Kind),
                    t.hasOwnProperty("Txt") && (R = t.Txt);
                    var M = A && String(C) && R;
                    (O = Ne(M, s)).length > 0 && alert(O);
                    var L = y.hotel.KindSearch
                      , j = E.map((function(e) {
                        var t = "";
                        return t += '{"AdultQty":' + e.AdultQty + ',"ChildQty":' + e.ChildQty + ',"ChildAges":[' + e.ChildAges.map((function(e) {
                            return "" + e
                        }
                        )) + "]}"
                    }
                    ))
                      , B = L + "?Code=" + t.Code + "&Kind=90"
                      , K = "&checkIn=" + S.CheckIn + "&checkOut=" + S.CheckOut + "&roomsData=[" + j + "]&allotment=" + c.Allotment;
                    0 === O.length && e.whenSubmitBtnClick && e.whenSubmitBtnClick(),
                    fetch(B).then((function(e) {
                        return e.json()
                    }
                    )).then((function(t) {
                        return r(void 0, void 0, void 0, (function() {
                            var n, a, r, i, l;
                            return o(this, (function(o) {
                                switch (o.label) {
                                case 0:
                                    return n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                                    c = navigator.userAgent,
                                    s = new RegExp("(" + ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)", "Android.*(wv|.0.0.0)"].join("|") + ")","ig"),
                                    a = Boolean(c.match(s)),
                                    r = "_blank",
                                    i = we(),
                                    l = "",
                                    i.sproject && i.sgroupcode && i.hotelCode.includes(t.HotelCode) && (l = "&sproject=" + i.sproject + "&sgroupcode=" + i.sgroupcode),
                                    0 !== O.length ? [3, 2] : [4, w.default(k, "/category/_searchengine/clickrecord")];
                                case 1:
                                    o.sent(),
                                    Re(k),
                                    o.label = 2;
                                case 2:
                                    return 0 === O.length && ((n || a) && location.replace(t.HotelUrl + K + l),
                                    "result" == e.typeName ? window.location.href = t.HotelUrl + K + l : window.open(t.HotelUrl + K + l, r)),
                                    [2]
                                }
                                var c, s
                            }
                            ))
                        }
                        ))
                    }
                    ))
                } else
                    v.onSubmit({
                        target: y.b2c_submitUrl.newHotel,
                        params: {
                            desnData: t,
                            Date: s,
                            List: l,
                            Filter: c
                        },
                        openTarget: e.target && "_blank" === e.target ? "_blank" : "_self",
                        isAwait: "search" !== e.typeName
                    }).validate((function(t) {
                        var n, a, r, o, i, l;
                        t.hasOwnProperty("Date") && (r = t.Date),
                        t.hasOwnProperty("desnData") && ((a = t.desnData) && a.hasOwnProperty("Code") && (o = a.Code),
                        a && a.hasOwnProperty("Kind") && (i = a.Kind),
                        a && a.hasOwnProperty("Txt") && (l = a.Txt));
                        var c = o && String(i) && l;
                        return 0 === (n = Ne(c, r)).length && Re(k),
                        0 === n.length && e.whenSubmitBtnClick && e.whenSubmitBtnClick(),
                        !(n.length > 0) || n
                    }
                    )).modifier((function(e) {
                        var t = e.desnData
                          , n = (e.Date,
                        e.List,
                        e.Filter)
                          , a = {
                            CheckIn: S.CheckIn,
                            CheckOut: S.CheckOut,
                            Rooms: E,
                            Filter: n,
                            Destination: {
                                Code: t.Code,
                                Kind: t.Kind.toString(),
                                Txt: t.Txt
                            }
                        };
                        return {
                            searchParam: JSON.stringify(a)
                        }
                    }
                    )).saveData((function() {
                        return k
                    }
                    )).send("encodeURIComponent")
            }
              , we = function() {
                var e = window.location.toString()
                  , t = {};
                if (-1 != e.indexOf("?")) {
                    var n = e.split("?")[1].split("&");
                    for (var a in n)
                        if ("string" == typeof n[a]) {
                            var r = n[a].split("=")[0]
                              , o = n[a].split("=")[1];
                            t[r] = o
                        }
                }
                return t
            }
              , Ee = function(e, t, n, a, r, o, i) {
                return "Menu" === e ? {
                    SelectedBy: e,
                    Code: t,
                    Kind: n,
                    Txt: a,
                    vLine: r,
                    vLineText: o,
                    inTaiwanText: i
                } : {
                    SelectedBy: e,
                    Code: t,
                    Kind: n,
                    Txt: a
                }
            }
              , Ne = function(e, t) {
                var n = [];
                return e || n.push("請輸入 / 選擇目的地"),
                t[0] && t[1] || n.push("請選擇住房期間"),
                t[0] && t[1] && t[0] === t[1] && n.push("住房期間起迄不可是同一天"),
                n
            }
              , xe = function(e) {
                try {
                    JSON.parse(decodeURIComponent(e));
                    return !0
                } catch (e) {
                    return !1
                }
            }
              , Pe = function() {
                return (null == Z ? void 0 : Z.length) > 0 && l.createElement(k.default, {
                    dataList: Z || [],
                    dataRenderer: Oe,
                    onClear: Ae,
                    onClickLink: ke,
                    title: K("hotel.history.title"),
                    hideFirstData: !1
                })
            }
              , ke = function(e, t) {
                var n = C().format("YYYY-MM-DD");
                if (e.recordData.data.HistorySearch = "1",
                e.setStartDate < n && ("" === e.KindRajx ? j({
                    type: "SELECTEDDATADTM",
                    selectedDataDtm: a(a({}, I.selectedDataDtm), {
                        text: e.Destination,
                        vCity: e.vCity
                    })
                }) : "" !== e.KindRajx && j({
                    type: "SELECTEDDATARAJX",
                    selectedDataRajx: a(a({}, I.selectedDataRajx), {
                        txt: e.Destination,
                        level3: e.level3,
                        Kind: e.KindRajx
                    })
                }),
                j({
                    type: "DESTINATION",
                    Destination: e.Destination
                }),
                j({
                    type: "CalendarSUBMIT",
                    Date: ["", ""]
                }),
                j({
                    type: "ROOMLIST",
                    List: e.List
                }),
                j({
                    type: "ALLOTMENT",
                    Filter: {
                        Allotment: e.Allotment
                    }
                })),
                e.setStartDate >= n) {
                    if ("90" === e.KindRajx) {
                        var r = y.hotel.KindSearch
                          , o = e.List.map((function(e) {
                            var t = "";
                            return t += '{"AdultQty":"' + e.adult + '","ChildQty":"' + e.childrenWithBed.length + '","ChildAges":[' + e.childrenWithBed.map((function(e) {
                                return '"' + e + '"'
                            }
                            )) + "]}"
                        }
                        ))
                          , i = r + "?Code=" + e.level3 + "&Kind=90"
                          , l = "&checkIn=" + e.setStartDate.replace(/-/g, "/") + "&checkOut=" + e.setEndDate.replace(/-/g, "/") + "&roomsData=[" + o + "]&allotment=" + e.Allotment
                          , c = window.open("", "_blank");
                        fetch(i).then((function(e) {
                            return e.json()
                        }
                        )).then((function(t) {
                            w.default(e.recordData, "/category/_searchengine/clickrecord"),
                            c.location.href = t.HotelUrl + l
                        }
                        ))
                    }
                    if ("90" !== e.KindRajx) {
                        var s = window.open("", "_blank");
                        _e(e.vCity).then((function(t) {
                            var n = y.b2c_submitUrl.newHotel
                              , a = e.List.map((function(e) {
                                return {
                                    AdultQty: e.adult,
                                    ChildQty: e.childrenWithBed.length,
                                    ChildAges: e.childrenWithBed.map((function(e) {
                                        return e
                                    }
                                    ))
                                }
                            }
                            ))
                              , r = {
                                CheckIn: e.setStartDate.replace(/-/g, "/"),
                                CheckOut: e.setEndDate.replace(/-/g, "/"),
                                Rooms: a,
                                Filter: {
                                    Allotment: e.Allotment
                                },
                                Destination: {
                                    Code: e.level3 || e.vCity,
                                    Kind: e.KindRajx || t,
                                    Txt: e.Destination
                                }
                            }
                              , o = JSON.stringify(r)
                              , i = "?searchParam=" + encodeURIComponent(o);
                            w.default(e.recordData, "/category/_searchengine/clickrecord"),
                            s.location.href = n + i
                        }
                        ))
                    }
                    var u = JSON.parse(localStorage.getItem("hotel_queryKey"))
                      , d = u.splice(t, 1);
                    u.unshift(d[0]),
                    localStorage.setItem("hotel_queryKey", JSON.stringify(u)),
                    z(u)
                }
            }
              , Oe = function(e) {
                for (var t = e.List.length, n = e.setStartDate.replace(/-/g, "/"), a = e.setEndDate.replace(/-/g, "/"), r = 0, o = 0, i = 0; i < e.List.length; i++)
                    r += e.List[i].adult,
                    o += e.List[i].childrenWithBed.length;
                return l.createElement(l.Fragment, null, l.createElement("div", {
                    className: "history_destination"
                }, l.createElement("span", null, e.Destination)), l.createElement("div", {
                    className: "history_dateAndRoom"
                }, l.createElement("span", {
                    className: "history_dateAndRoom_date"
                }, n + "~" + a), l.createElement("span", {
                    className: "history_dateAndRoom_room"
                }, K("hotel.roomList.totalRoom", {
                    count: t
                }) + "，" + K("hotel.roomList.totalAdult", {
                    count: r
                }) + K("hotel.roomList.totalChild", {
                    count: o
                }))))
            }
              , Ae = function(e, t) {
                t.stopPropagation();
                var n = JSON.parse(localStorage.getItem("hotel_queryKey"));
                n.splice(e, 1),
                localStorage.setItem("hotel_queryKey", JSON.stringify(n)),
                z(n)
            }
              , Re = function(e) {
                var t, n = I.selectedDataDtm, a = I.selectedDataRajx, r = I.List, o = I.Filter, i = I.Date, l = I.Destination, c = (new window.Date).getTime(), s = JSON.parse(localStorage.getItem("hotel_queryKey")), u = [], d = "TW", p = l === (null == n ? void 0 : n.text) ? "Dtm" : "Rajx";
                I.selectedDataDtm && I.selectedDataDtm.vCity ? d = I.selectedDataDtm.vCity.split("_")[0] : I.selectedDataRajx && I.selectedDataRajx.level3 && (d = I.selectedDataRajx.level3.split("_")[0]),
                t = "TW" === d;
                var f = {
                    Allotment: o.Allotment,
                    Destination: l,
                    KindRajx: "Rajx" === p ? null == a ? void 0 : a.Kind : "",
                    List: r,
                    PostTime: c,
                    isInTaiwan: t,
                    level3: "Rajx" === p ? null == a ? void 0 : a.level3 : "",
                    setStartDate: i[0],
                    setEndDate: i[1],
                    vCity: "Dtm" === p ? null == n ? void 0 : n.vCity : "",
                    recordData: e
                };
                Array.isArray(s) || (localStorage.removeItem("hotel_queryKey"),
                s = []);
                for (var h = 0; h < s.length; h++)
                    s[h].Allotment === f.Allotment && s[h].Destination === f.Destination && s[h].KindRajx === f.KindRajx && JSON.stringify(s[h].List) === JSON.stringify(f.List) && s[h].isInTaiwan === f.isInTaiwan && s[h].level3 === f.level3 && s[h].setEndDate === f.setEndDate && s[h].setStartDate === f.setStartDate && s[h].vCity === f.vCity && s.splice(h, 1);
                s.length < 4 ? (s.unshift(f),
                u = s) : (s.pop(),
                s.unshift(f),
                u = s),
                localStorage.setItem("hotel_queryKey", JSON.stringify(u)),
                z(u)
            }
              , Me = function() {
                var e = JSON.parse(localStorage.getItem("hotel_queryKey"));
                if (e && e.length > 0) {
                    var t = e.filter((function(e) {
                        var t = new window.Date(e.PostTime)
                          , n = t.setDate(t.getDate() + 90);
                        return (new window.Date).setHours(0, 0, 0, 0) < n
                    }
                    ));
                    localStorage.setItem("hotel_queryKey", JSON.stringify(t)),
                    z(t)
                }
            }
              , Le = new URLSearchParams(window.location.search).get("hotelCode")
              , Ie = s.default(((t = {
                hotel: !0
            })[e.typeName] = e.typeName,
            t[e.device] = e.device,
            t.rowSkin = e.rowSkin,
            t.defaultSkin = !e.rowSkin,
            t.detail = !!Le,
            t));
            return l.createElement("div", {
                className: Ie
            }, l.createElement("div", {
                className: s.default("hotel_wrap", "" + e.typeName, "" + e.device)
            }, l.createElement("h1", {
                className: s.default("hotel_title", "" + e.typeName, "" + e.device)
            }, "國內外訂房搜尋"), l.createElement("div", {
                className: s.default("hotel_inputs", "" + e.typeName)
            }, l.createElement("div", {
                className: "inputBlock departure rajx_title"
            }, l.createElement(D.default, {
                moduleName: T.ERacpOrRajxOrRajn.Rajn,
                data: {
                    mobileClass: "HotelDestinationSideCont",
                    device: "PC" === e.device ? T.Edevice.PC : T.Edevice.Mobile,
                    isRequired: !0,
                    placeholder: K("hotel.destination.placeholder"),
                    title: K("hotel.destination.title"),
                    mTitle: K("hotel.destination.mTitle"),
                    iconName: "toolmap",
                    inputText: I.Destination,
                    onInputChange: function(t, n) {
                        J(!1),
                        function(t, n) {
                            if (!("M" === e.device && !0 === n)) {
                                var a = t.hasOwnProperty("selectedData") && t.selectedData.length > 0;
                                "" === t.inputText ? j({
                                    type: "CLEARDATA"
                                }) : a && t.selectedData[0].hasOwnProperty("Kind") ? j({
                                    type: "SETHOTELDATA",
                                    HotelData: {
                                        selectedDataRajx: t.selectedData[0],
                                        Destination: t.inputText,
                                        selectedDataDtm: {
                                            SelectedBy: "Menu",
                                            inTaiwan: "",
                                            inTaiwanText: "",
                                            text: "",
                                            vCity: "",
                                            vCountry: "",
                                            vCountryText: "",
                                            vLine: "",
                                            vLineText: "",
                                            value: ""
                                        }
                                    }
                                }) : (j({
                                    type: "SETHOTELDATA",
                                    HotelData: {
                                        selectedDataDtm: t.selectedData[0],
                                        Destination: t.inputText,
                                        selectedDataRajx: {
                                            Kind: "",
                                            Newtxt: "",
                                            SelectedBy: "AutoComplete",
                                            dataIndex: 0,
                                            level2: "",
                                            level3: "",
                                            txt: ""
                                        }
                                    }
                                }),
                                t.selectedData[0] && ye(t.selectedData[0].vCity))
                            }
                        }(t, n)
                    },
                    remindText: K("hotel.destination.remindText"),
                    useDtm: !0,
                    Dtm: {
                        levelKey: ["inTaiwan", "vLine", "vCountry", "vCity"],
                        fetchData: De,
                        replaceRegular: /\(.*/g,
                        activeTabIndex: I.taiwanPage || "TW" === (null === (R = null == I ? void 0 : I.selectedDataDtm) || void 0 === R ? void 0 : R.vCity.split("_")[0]) ? 1 : 0
                    },
                    Rajn: {
                        minimumStringQueryLength: 2,
                        minimumStringQuery: K("hotel.destination.minimumStringQuery"),
                        noMatchText: K("hotel.destination.noMatchText"),
                        chooseFirst: !0,
                        rules: [],
                        fixList: !0,
                        selectNoFetch: "M" === e.device,
                        fetchData: function(e) {
                            return Te(e)
                        },
                        onClickShow: !0
                    },
                    useInputTextToSearch: !0,
                    selectedData: (null === (M = I.selectedDataDtm) || void 0 === M ? void 0 : M.text) || I.selectedDataRajx.txt ? I.selectedDataRajx.txt ? [I.selectedDataRajx] : [I.selectedDataDtm] : [],
                    panelProps: "hotel",
                    isDetailPage: G,
                    inputRef: l.createRef()
                },
                inputOnClick: function() {
                    return x.default(ue, de, pe)
                },
                insertNode: e.insertNode,
                JSXofHistory: "PC" == e.device ? Pe() : null,
                panelProps: "hotel",
                disabled: se && ce,
                typeName: e.typeName,
                setOrderOfHotelPanelInput: ae
            })), l.createElement("div", {
                className: s.default("inputBlock", "calendar", "calendarInput")
            }, "PC" === e.device ? l.createElement(u.default, a({}, fe, {
                minDate: I.type ? $ : I.date || $,
                maxDate: I.type ? ie : C(I.date).add(45, "day").format("YYYY-MM-DD"),
                submitCallback: Se,
                insertNode: e.insertNode,
                setStartDate: I.Date[0],
                setEndDate: I.Date[1],
                fixedMinDate: !1,
                inputOnClick: function() {
                    return x.default(ue, de, pe)
                },
                typeName: e.typeName,
                hasHoverEffect: !0,
                panelProps: "hotel",
                setOrderOfHotelPanelInput: ae,
                orderOfHotelPanelInput: ne,
                tFunction: K
            })) : l.createElement(d.default, a({}, fe, {
                minDate: I.type && I.date || $,
                maxDate: !I.type && I.date ? C(I.date).add(45, "day").format("YYYY-MM-DD") : ie,
                submitCallback: Se,
                insertNode: e.insertNode,
                setStartDate: I.Date[0],
                setEndDate: I.Date[1],
                inputStatusEnd: "start",
                panelName: "hotel",
                typeName: e.typeName,
                panelProps: "hotel",
                isRequired: [!0],
                showWeek: !!/zh-tw/i.test(Y.language)
            }))), l.createElement("div", {
                className: s.default("inputBlock", "roomList")
            }, "PC" === e.device ? l.createElement(p.default, {
                palceName: le,
                listCount: he(),
                onCallback: ge,
                insertNode: e.insertNode,
                device: ue,
                rowSkin: de,
                renderNode: pe,
                panelProps: "RoomListForHotel",
                typeName: e.typeName,
                setOrderOfHotelPanelInput: ae,
                orderOfHotelPanelInput: ne
            }) : l.createElement(f.default, {
                customClass_container: "hotel_sideBarCont_M",
                panelProps: "RoomListForHotel",
                palceName: le,
                listCount: he(),
                onCallback: ge,
                insertNode: e.insertNode,
                isLoad: H
            }))), l.createElement("div", {
                className: s.default("hotel_links", "" + e.typeName)
            }, l.createElement("div", {
                className: "infos"
            }, "result" == e.typeName && "PC" == e.device ? null : l.createElement("div", {
                className: s.default("checkbox_mt")
            }, l.createElement(h.default, {
                type: "checkbox",
                whenChange: function(e) {
                    var t = JSON.parse(JSON.stringify(I.Filter));
                    t.Allotment = e ? "1" : "0",
                    j({
                        type: "SETHOTELDATA",
                        HotelData: {
                            Filter: t,
                            Allotment: t.Allotment
                        }
                    })
                },
                textContent: K("hotel.emptyRoom"),
                defaultChecked: !0
            })), l.createElement("div", {
                className: "searchBtn"
            }, "result" == e.typeName && "M" == e.device ? null : l.createElement(m.default, {
                className: s.default({
                    "w-full": "PC" !== e.device
                }, "lg", "radius"),
                ariaLabel: K("searchBtn"),
                whenClick: be
            }, "PC" == e.device ? l.createElement(c.default, {
                className: "toolsearch2 svg"
            }) : K("hotel.searchBtn"))), "result" == e.typeName && "M" == e.device ? l.createElement(P.FooterSearch, {
                showCancelBtn: !0,
                searchBtnText: K("hotel.searchBtn"),
                searchBtnClassName: "M_CloseBtn",
                cancelBtnText: K("hotel.cancelBtn"),
                cancelBtnClassName: "M_SearchBtn",
                onCancel: e.mCloseBtn,
                onSearch: be,
                className: "M_resoultBlock",
                isSearchResultM: !0
            }) : null)), "M" == e.device ? Pe() : null))
        }
        ,
        t.default = t.PC
    },
    270: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0)
          , i = n(162)
          , l = n(153)
          , c = n(139)
          , s = n(13)
          , u = n(150)
          , d = n(148)
          , p = n(27);
        t.default = function(e) {
            var t = p.useTranslation()
              , n = t.t
              , f = t.i18n
              , h = e.palceName
              , m = e.listCount
              , v = e.onCallback
              , y = e.insertNode
              , _ = e.device
              , D = e.rowSkin
              , T = e.renderNode
              , C = e.panelProps
              , g = e.setOrderOfHotelPanelInput
              , S = e.orderOfHotelPanelInput
              , b = e.typeName
              , w = c.useConnect()
              , E = w.state
              , N = w.dispatch
              , x = E.List
              , P = (E.roomList,
            r(o.useState(!1), 2))
              , k = P[0]
              , O = P[1]
              , A = o.useRef(!1)
              , R = E.List.length - 1
              , M = {
                readOnly: !0,
                isRequired: !0,
                title: n("hotel.roomList.title"),
                placeholder: "共N間，N人",
                iconName: "toolmember"
            };
            o.useEffect((function() {
                A.current ? v(E.roomList) : A.current = !0
            }
            ), [E.roomList]),
            o.useEffect((function() {
                N({
                    type: "SETHOTELDATA",
                    HotelData: {
                        Text: L(x)
                    }
                })
            }
            ), [E.List]),
            f.on("languageChanged", (function() {
                N({
                    type: "SETHOTELDATA",
                    HotelData: {
                        Text: L(x)
                    }
                })
            }
            ));
            var L = function(e) {
                for (var t = e.length, a = n("hotel.roomList.totalRoom", {
                    count: t
                }) + "，", r = 0, o = 0, i = 0; i < e.length; i++)
                    r += e[i].adult,
                    o += e[i].childrenWithBed.length;
                return a = (a += n("hotel.roomList.totalAdult", {
                    count: r
                }) + n("hotel.roomList.totalChild", {
                    count: o
                })).replace(/\、$/g, "人")
            }
              , I = function(e, t) {
                var n = JSON.parse(JSON.stringify(x))
                  , a = n[e][t];
                "adult" === t ? (a += 1,
                n[e][t] = a) : a.push(12);
                var r = L(n);
                N({
                    type: "SETHOTELDATA",
                    HotelData: {
                        List: n,
                        Text: r
                    }
                })
            }
              , j = function(e, t) {
                var n = JSON.parse(JSON.stringify(x))
                  , a = n[e][t];
                if ("adult" === t)
                    a -= 1,
                    n[e][t] = a;
                else {
                    if (0 === a.length)
                        return;
                    a.pop()
                }
                var r = L(n);
                N({
                    type: "SETHOTELDATA",
                    HotelData: {
                        List: n,
                        Text: r
                    }
                })
            }
              , B = function(e, t, n, a) {
                var r = Number(a)
                  , o = JSON.parse(JSON.stringify(x));
                o[e][t][n] = r,
                N({
                    type: "SETHOTELDATA",
                    HotelData: {
                        List: o
                    }
                })
            }
              , K = function(e, t, a) {
                var r = e.target.value
                  , o = JSON.parse(JSON.stringify(x))
                  , i = Number(r);
                if (!isNaN(i)) {
                    var l = 0;
                    if ("adult" === a)
                        i > 20 ? (o[t][a] = 20,
                        alert(n("hotel.roomList.maxAdultNum"))) : o[t][a] = i < 1 ? 0 : i;
                    else {
                        o[t][a] = [];
                        var c = o[t][a];
                        l = i > 3 ? 3 : i,
                        i > 3 && alert(n("hotel.roomList.maxChildNum"));
                        for (var s = 0; s < l; s++)
                            c.push(12);
                        o[t][a] = c
                    }
                    var u = L(o);
                    N({
                        type: "ROOMLISTINPUT",
                        RoomsData: {
                            List: o,
                            Text: u
                        }
                    })
                }
            }
              , Y = function(e, t, n) {
                var a = E.minAdult
                  , r = JSON.parse(JSON.stringify(E.List));
                if (0 === Number(e.target.value)) {
                    r[t][n] = a;
                    var o = L(r);
                    N({
                        type: "ATLEASTONEADULT",
                        List: r,
                        Text: o
                    })
                }
            };
            return o.createElement(i.default, a({
                inputText: E.Text,
                insertNode: y
            }, M, {
                onCloseWindow: function() {
                    O(!1)
                },
                inputOnClick: function() {
                    return d.default(_, D, T)
                },
                setOrderOfHotelPanelInput: g,
                orderOfHotelPanelInput: S,
                typeName: b
            }), m && o.createElement(u.default, {
                onClick: function() {
                    return O(!1)
                },
                insertNode: y
            }, o.createElement("div", {
                className: "room_count_select"
            }, o.createElement("span", null, n("hotel.roomList.roomPlaceholder")), o.createElement("select", null, m.map((function(e) {
                return o.createElement("option", {
                    key: e.value,
                    value: e.value
                }, e.text)
            }
            ))), o.createElement("div", {
                className: s.default({
                    "dropdown-focus": k
                }, "dropdown-place-holder selected"),
                onClick: function() {
                    O(!k)
                }
            }, m[R].text), o.createElement("div", {
                className: s.default({
                    "dropdown-active": k
                }, "dropdown-content")
            }, o.createElement("div", null, m.map((function(e, t) {
                return o.createElement("span", {
                    key: e.value + "real",
                    onClick: function() {
                        !function(e, t) {
                            var n = t + 1
                              , a = {
                                adult: 1,
                                childrenWithBed: []
                            };
                            if (O(!1),
                            n !== x.length) {
                                if (n > x.length)
                                    for (var r = x.length, o = 0; o < n - r; o++)
                                        x.push(a);
                                if (n < x.length)
                                    for (r = x.length,
                                    o = 0; o < r - n; o++)
                                        x.pop();
                                var i = L(x);
                                N({
                                    type: "SETHOTELDATA",
                                    HotelData: {
                                        List: x,
                                        Text: i
                                    }
                                })
                            }
                        }(0, t)
                    }
                }, e.text)
            }
            )))))), x.length && x.map((function(e, t) {
                return o.createElement(l.RoomLitSection, {
                    mainName: n("hotel.roomList.room." + (t + 1)),
                    max: [20, 3],
                    min: [1, 0],
                    key: t,
                    roomCount: t,
                    palceName: h,
                    gpct: e,
                    onClickAdd: I,
                    onClickMinus: j,
                    onChange: B,
                    onInputChange: K,
                    onInputBlur: Y,
                    readOnly: !1,
                    panelProps: C,
                    option: n("hotel.roomList.ageList"),
                    showChildrenAge: !0
                })
            }
            )), o.createElement(l.NoticeText, {
                Notice: [n("hotel.roomList.notice")]
            }))
        }
    },
    271: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
          , o = this && this.__spread || function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(r(arguments[t]));
            return e
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0)
          , l = n(163)
          , c = n(153)
          , s = n(139)
          , u = n(27);
        t.default = function(e) {
            var t = e.palceName
              , n = e.listCount
              , d = e.insertNode
              , p = e.panelProps
              , f = s.useConnect()
              , h = f.state
              , m = f.dispatch
              , v = h.List
              , y = r(i.useState(0), 2)
              , _ = y[0]
              , D = y[1]
              , T = r(i.useState(h.List), 2)
              , C = T[0]
              , g = T[1]
              , S = r(i.useState("共1間，1位大人、0位小孩"), 2)
              , b = S[0]
              , w = S[1]
              , E = u.useTranslation()
              , N = E.t
              , x = E.i18n
              , P = a({
                isRequired: !0,
                title: N("hotel.roomList.title"),
                placeholder: "共N間，N人",
                iconName: "toolmember"
            }, e);
            i.useEffect((function() {
                g(v),
                w(k(v)),
                m({
                    type: "SETHOTELDATA",
                    HotelData: {
                        Text: k(v)
                    }
                })
            }
            ), [e.isLoad]),
            x.on("languageChanged", (function() {
                w(k(v)),
                m({
                    type: "SETHOTELDATA",
                    HotelData: {
                        Text: k(v)
                    }
                })
            }
            )),
            i.useEffect((function() {
                "" !== window.location.search && 1 === _ && (g(v),
                w(k(v))),
                D(_ + 1),
                m({
                    type: "SETHOTELDATA",
                    HotelData: {
                        List: v,
                        Text: k(v)
                    }
                })
            }
            ), [h.List]);
            var k = function(e) {
                for (var t = e.length, n = N("hotel.roomList.totalRoom", {
                    count: t
                }) + "，", a = 0, r = 0, o = 0; o < e.length; o++)
                    a += e[o].adult,
                    r += e[o].childrenWithBed.length;
                return n = (n += N("hotel.roomList.totalAdult", {
                    count: a
                }) + N("hotel.roomList.totalChild", {
                    count: r
                })).replace(/\、$/g, "人")
            }
              , O = function(e, t) {
                var n = JSON.parse(JSON.stringify(v))
                  , a = n[e][t];
                "adult" === t ? (a += 1,
                n[e][t] = a) : a.push(12);
                var r = k(n);
                m({
                    type: "SETHOTELDATA",
                    HotelData: {
                        List: n,
                        Text: r
                    }
                })
            }
              , A = function(e, t) {
                var n = JSON.parse(JSON.stringify(v))
                  , a = n[e][t];
                if ("adult" === t)
                    a -= 1,
                    n[e][t] = a;
                else {
                    if (0 === a.length)
                        return;
                    a.pop()
                }
                var r = k(n);
                m({
                    type: "SETHOTELDATA",
                    HotelData: {
                        List: n,
                        Text: r
                    }
                })
            }
              , R = function(e, t, n, a) {
                var r = Number(a)
                  , o = JSON.parse(JSON.stringify(v));
                o[e][t][n] = r,
                m({
                    type: "SETHOTELDATA",
                    HotelData: {
                        List: o
                    }
                })
            }
              , M = function(e, t, n) {
                var a = e.target.value
                  , r = JSON.parse(JSON.stringify(v))
                  , o = Number(a);
                if (!isNaN(o)) {
                    var i = 0;
                    if ("adult" === n)
                        o > 20 ? (r[t][n] = 20,
                        alert(N("hotel.roomList.maxAdultNum"))) : r[t][n] = o < 1 ? 0 : o;
                    else {
                        r[t][n] = [];
                        var l = r[t][n];
                        i = o > 3 ? 3 : o,
                        o > 3 && alert(N("hotel.roomList.maxChildNum"));
                        for (var c = 0; c < i; c++)
                            l.push(12);
                        r[t][n] = l
                    }
                    var s = k(r);
                    m({
                        type: "ROOMLISTINPUT",
                        RoomsData: {
                            List: r,
                            Text: s
                        }
                    })
                }
            }
              , L = function(e, t, n) {
                var a = h.minAdult
                  , r = JSON.parse(JSON.stringify(v));
                if (0 === Number(e.target.value)) {
                    r[t][n] = a;
                    var o = k(r);
                    m({
                        type: "ATLEASTONEADULT",
                        List: r,
                        Text: o
                    })
                }
            };
            return i.createElement(l.default, a({
                confirm: function() {
                    var e = JSON.parse(JSON.stringify(v))
                      , t = k(e);
                    g(e),
                    w(t)
                },
                goBack: function() {
                    m({
                        type: "ATLEASTONEADULT",
                        List: C,
                        Text: b
                    })
                },
                inputText: h.Text
            }, P, {
                readOnly: !0,
                insertNode: d,
                panelProps: e.panelProps
            }), n && i.createElement("label", {
                className: "room_count_select"
            }, i.createElement("span", null, N("hotel.roomList.roomPlaceholder")), i.createElement("select", {
                onChange: function(e) {
                    var t = e.target.value
                      , n = Number(t)
                      , a = {
                        adult: 1,
                        childrenWithBed: []
                    }
                      , r = o(v);
                    if (n !== v.length) {
                        if (n > v.length)
                            for (var i = v.length, l = 0; l < n - i; l++)
                                r.push(a);
                        if (n < v.length)
                            for (i = v.length,
                            l = 0; l < i - n; l++)
                                r.pop();
                        var c = k(r);
                        m({
                            type: "SETHOTELDATA",
                            HotelData: {
                                List: r,
                                Text: c
                            }
                        })
                    }
                },
                value: v.length
            }, n.map((function(e) {
                return i.createElement("option", {
                    key: e.value,
                    value: e.value
                }, e.text)
            }
            )))), v.length && v.map((function(e, n) {
                return i.createElement(c.RoomLitSection, {
                    mainName: N("hotel.roomList.room." + (n + 1)),
                    max: [20, 3],
                    min: [1, 0],
                    key: n,
                    roomCount: n,
                    palceName: t,
                    gpct: e,
                    onClickAdd: O,
                    onClickMinus: A,
                    onChange: R,
                    onInputChange: M,
                    onInputBlur: L,
                    readOnly: !1,
                    panelProps: p,
                    option: N("hotel.roomList.ageList"),
                    showChildrenAge: !0
                })
            }
            )), i.createElement(c.NoticeText, {
                Notice: [N("hotel.roomList.notice")]
            }))
        }
    },
    272: function(e, t, n) {
        e.exports = {
            rowSkin: "rowSkin",
            hotel: "hotel",
            ListStyle: "ListStyle",
            "dtm_rcfr-wrap": "dtm_rcfr-wrap",
            one_floor: "one_floor",
            tabs: "tabs",
            active: "active",
            nvb_rslb: "nvb_rslb",
            HotelDestinationSideCont: "HotelDestinationSideCont",
            sideBar_moduleContainer: "sideBar_moduleContainer",
            hotel_sideBarCont_M: "hotel_sideBarCont_M",
            room_count_select: "room_count_select",
            room_list_section: "room_list_section",
            room_count_title: "room_count_title",
            room_list_row: "room_list_row",
            row_title: "row_title",
            child_row: "child_row",
            child_count_control: "child_count_control",
            children_ages_section: "children_ages_section",
            age_select_section: "age_select_section",
            children_age_select: "children_age_select",
            txt_green: "txt_green",
            dtm_rcfn: "dtm_rcfn",
            ntb_rcln: "ntb_rcln",
            sideBar_content: "sideBar_content",
            act_wrap_container: "act_wrap_container",
            panel: "panel",
            sec: "sec",
            sec_title: "sec_title",
            sec_all: "sec_all",
            search_panel_two: "search_panel_two",
            defaultSkin: "defaultSkin",
            roomList: "roomList",
            input_compose: "input_compose",
            room_list_wrap_container: "room_list_wrap_container",
            hotel_links: "hotel_links",
            searchBtn: "searchBtn",
            toolsearch2: "toolsearch2",
            hotel_wrap: "hotel_wrap",
            inputSkin_Parent: "inputSkin_Parent",
            inputSkin_disabled: "inputSkin_disabled",
            inputSkin_group_title: "inputSkin_group_title",
            inputSkin_group_content: "inputSkin_group_content",
            wrap_container: "wrap_container",
            close_btn: "close_btn",
            int_rcln_input: "int_rcln_input",
            "dropdown-place-holder": "dropdown-place-holder",
            selected: "selected",
            st_rcln: "st_rcln",
            "dropdown-content": "dropdown-content",
            "dropdown-active": "dropdown-active",
            search: "search",
            PC: "PC",
            M: "M",
            hotel_inputs: "hotel_inputs",
            calendar: "calendar",
            inputSkin: "inputSkin",
            inputSkin_group: "inputSkin_group",
            totalText: "totalText",
            checkbox_mt: "checkbox_mt",
            indicator: "indicator",
            departure: "departure",
            rajx_title: "rajx_title",
            inputBlock: "inputBlock",
            calendarInput: "calendarInput",
            clearBtn_wrap: "clearBtn_wrap",
            cy_rcln: "cy_rcln",
            hotel_title: "hotel_title",
            footerBtn: "footerBtn",
            mmb: "mmb",
            seo: "seo",
            ic_rcln: "ic_rcln",
            svg: "svg",
            middleIcon: "middleIcon",
            infos: "infos",
            mobileBtn: "mobileBtn",
            bt_rcnb: "bt_rcnb",
            lg: "lg",
            result: "result",
            ft_gpmb: "ft_gpmb",
            fixed: "fixed",
            bt_gplt: "bt_gplt",
            gray: "gray",
            allDeviceMenuListDtmRajn: "allDeviceMenuListDtmRajn",
            cr_rcln: "cr_rcln",
            int_gpct: "int_gpct",
            history_component: "history_component",
            history_title: "history_title",
            tooldate: "tooldate",
            detail: "detail",
            "ListStyle-close_btn": "ListStyle-close_btn",
            history_block: "history_block",
            "dtm_rcfr-label": "dtm_rcfr-label",
            dot: "dot",
            item: "item",
            act_rajn: "act_rajn",
            section: "section",
            title: "title",
            city: "city",
            location: "location",
            country: "country",
            state: "state",
            zone: "zone",
            airport: "airport",
            select: "select",
            red: "red",
            "act_rajn-result": "act_rajn-result",
            "m-place": "m-place",
            noMatchText: "noMatchText",
            LOADING: "LOADING",
            calendarContainer: "calendarContainer",
            week: "week",
            date: "date",
            date_box: "date_box",
            toolcancelb: "toolcancelb",
            disabled: "disabled",
            tooladdb: "tooladdb",
            int_rcln: "int_rcln",
            childrenAgePlaceholder: "childrenAgePlaceholder",
            history_destination: "history_destination",
            history_dateAndRoom: "history_dateAndRoom",
            history_dateAndRoom_date: "history_dateAndRoom_date",
            sideBar_header_top: "sideBar_header_top",
            sideBar_goBack: "sideBar_goBack",
            sideBar_title: "sideBar_title",
            sideBar_header_bot: "sideBar_header_bot",
            sideBar_header_intZone: "sideBar_header_intZone",
            sideBar_header_background: "sideBar_header_background",
            "MMenuListDtmRajn-RemindText": "MMenuListDtmRajn-RemindText",
            calendarM: "calendarM",
            nvb_rslb_goBack: "nvb_rslb_goBack",
            selected_info: "selected_info",
            start_section: "start_section",
            end_section: "end_section",
            calendar_content: "calendar_content",
            calendar_box: "calendar_box",
            year_month: "year_month",
            empty: "empty",
            canSelect: "canSelect",
            confirm_btn: "confirm_btn",
            RoomListForHotel: "RoomListForHotel",
            toolmember: "toolmember",
            toolmap: "toolmap"
        }
    },
    273: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.IsTaiwanPage = void 0,
        t.IsTaiwanPage = function() {
            return {
                type: "SET_TAIWANPAGE",
                taiwanPage: window.location.href.split("/").some((function(e) {
                    return "taiwan" === e
                }
                )) || window.location.host.includes("www.liontravel.com")
            }
        }
    },
    274: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, o) {
                function i(e) {
                    try {
                        c(a.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(e) {
                    try {
                        c(a.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                c((a = a.apply(e, t || [])).next())
            }
            ))
        }
          , o = this && this.__generator || function(e, t) {
            var n, a, r, o, i = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (n = 1,
                                a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a),
                                0) : a.next) && !(r = r.call(a, o[1])).done)
                                    return r;
                                switch (a = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    a = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                    (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        i.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && i.label < r[1]) {
                                        i.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                        i.ops.push(o);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e],
                                a = 0
                            } finally {
                                n = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , i = this && this.__read || function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var a, r, o = n.call(e), i = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(a = o.next()).done; )
                    i.push(a.value)
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return i
        }
          , l = this && this.__spread || function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(i(arguments[t]));
            return e
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = n(0)
          , s = n(0)
          , u = n(27)
          , d = n(138)
          , p = n(26)
          , f = n(148)
          , h = n(155)
          , m = n(139)
          , v = n(145)
          , y = n(146)
          , _ = n(137)
          , D = n(164);
        n(238);
        var T = n(225)
          , C = n(177)
          , g = function(e, t) {
            return c.createElement("div", {
                className: "rajnFooter",
                onClick: function() {
                    return t(e)
                }
            }, "查看所有   “", e.inputText, "”  的結果  ", c.createElement("svg", {
                className: "svg angleRightIcon",
                key: "rajnFooterAngleRightIcon",
                fill: "#000",
                width: "6px",
                height: "10px"
            }, c.createElement("path", {
                d: "M0 .96.96 0 5.48 4.52a.678.678 0 0 1 0 .96L.959 10 0 9.04 4.043 5 0 .96z",
                fill: "#222"
            })))
        }
          , S = !0;
        t.default = function(e) {
            var t = e.device
              , n = e.rowSkin
              , b = e.renderNode
              , w = e.source
              , E = e.searchMode
              , N = u.useTranslation()
              , x = N.t
              , P = N.i18n
              , k = i(s.useState({
                inputText: ""
            }), 2)
              , O = k[0]
              , A = k[1]
              , R = i(s.useState(!1), 2)
              , M = R[0]
              , L = R[1]
              , I = i(s.useState(!1), 2)
              , j = I[0]
              , B = I[1]
              , K = i(s.useState(), 2)
              , Y = K[0]
              , F = K[1]
              , H = s.useRef(null)
              , W = function(e) {
                13 === e.keyCode && M && J(a({}, O))
            };
            s.useEffect((function() {
                if ("M" !== e.device) {
                    var t = H.current;
                    return t.addEventListener("keydown", W),
                    function() {
                        t.removeEventListener("keydown", W)
                    }
                }
            }
            ), [O.inputText, M]);
            s.useEffect((function() {
                m.initialState({
                    LocalStorageName: m.EPanelKeys.activity
                }).getLocalStorage().getUrl().done((function(e) {
                    return r(void 0, void 0, void 0, (function() {
                        var t, n, a, r, i;
                        return o(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return e.urlData.length > 0 ? (t = e.urlData,
                                [4, w]) : [3, 2];
                            case 1:
                                n = o.sent(),
                                a = T.findUrlProp(t, "SearchKeyword") || "",
                                r = T.findUrlProp(t, "SearchCountryID"),
                                i = T.findUrlProp(t, "SearchCityID"),
                                A(a ? {
                                    inputText: a
                                } : {
                                    inputText: (l = n,
                                    c = {
                                        country: r,
                                        city: i
                                    },
                                    s = c.country,
                                    u = c.city,
                                    l.vItem._Destination[s + "-" + u] || ""),
                                    destination: {
                                        country: r || "",
                                        city: i || ""
                                    },
                                    isForeign: !(null == r ? void 0 : r.includes("TW"))
                                }),
                                o.label = 2;
                            case 2:
                                return e.LocalStorageData && F(e.LocalStorageData.data),
                                [2]
                            }
                            var l, c, s, u
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ), []);
            var U = function() {
                return {
                    title: x("activity.hotKeyWordText.foreignTitle"),
                    hotKeyword: x("activity.hotKeyWordText.foreignKeyText"),
                    panelName: v.PanelName.activityForeign,
                    href: "https://activity.liontravel.com/CarRental"
                }
            }
              , J = function(e) {
                var t, n = JSON.parse(JSON.stringify(e)), r = function() {
                    if (n.hasOwnProperty("id")) {
                        var e = n.inputText.replace(/[-//()|,&+.$]/g, "-").replace(/ /g, "").replace(/:/g, "").trim();
                        return p.b2c_submitUrl.activityDetail + "/" + n.id + "-" + e
                    }
                    return p.b2c_submitUrl.activity
                }();
                if ("Menu" === (null === (t = n.destination) || void 0 === t ? void 0 : t.SelectedBy)) {
                    var o = n.dtmItem;
                    switch (null == o ? void 0 : o.text) {
                    case "觀光列車":
                        n.inputText = "台灣鐵道";
                        break;
                    case "JR PASS":
                        n.destination.country = "_JP_6",
                        n.kindName = "交通票券";
                        break;
                    case "餐券":
                        n.kindName = "美食餐廳",
                        n.searchKeyword = "";
                        break;
                    case "日本玩樂通票":
                        n.inputText = "樂享周遊券"
                    }
                }
                m.onSubmit({
                    target: r,
                    params: a({}, n),
                    isAwait: !0
                }).validate((function(e) {
                    if ("" === e.inputText)
                        return ["請選擇目的地或輸入關鍵字"]
                }
                )).modifier((function(e) {
                    return B(!0),
                    a({}, function(e) {
                        var t, n = {};
                        if (!e.hasOwnProperty("id")) {
                            if (e.hasOwnProperty("destination")) {
                                if ("_Destination" === (null === (t = e.dtmItem) || void 0 === t ? void 0 : t.vCategory) && e.destination.country)
                                    return {
                                        SearchCountryID: e.destination.country,
                                        SearchCityID: e.destination.city
                                    };
                                e.destination.country && (n.SearchCountryID = e.destination.country),
                                e.destination.city && (n.SearchCityID = e.destination.city)
                            }
                            return e.kindName && "string" == typeof e.kindName && (n.SearchKindName = e.kindName),
                            "string" == typeof e.searchKeyword ? e.searchKeyword.trim() && (n.SearchKeyword = e.searchKeyword) : e.inputText && "string" == typeof e.inputText && (n.SearchKeyword = e.inputText),
                            n
                        }
                    }(e))
                }
                )).save((function() {
                    var e = [n];
                    if (Y && Y.length > 0) {
                        var t = Y.filter((function(e) {
                            return e.inputText !== n.inputText
                        }
                        ));
                        e = l([n], t).slice(0, 3)
                    }
                    return F(e),
                    {
                        panelName: m.EPanelKeys.activity,
                        data: {
                            data: e
                        }
                    }
                }
                )).saveData((function() {
                    return t = {
                        HistorySearch: (e = n).historySearch || "0"
                    },
                    e.hasOwnProperty("destination") ? e.hasOwnProperty("id") ? {
                        panelName: e.isForeign ? v.PanelName.activityForeign : v.PanelName.activityTaiwan,
                        data: a(a({}, t), {
                            Keyword: e.inputText,
                            Destination: [{
                                SelectedBy: "AutoComplete"
                            }]
                        })
                    } : e.destination.country ? {
                        panelName: e.isForeign ? v.PanelName.activityForeign : v.PanelName.activityTaiwan,
                        data: a(a({}, t), {
                            Keyword: e.inputText,
                            Destination: [{
                                Country: {
                                    Name: "",
                                    Code: e.destination.country
                                },
                                City: {
                                    Name: "",
                                    Code: e.destination.city
                                },
                                SelectedBy: "Menu"
                            }]
                        })
                    } : {
                        panelName: v.PanelName.activity,
                        data: a(a({}, t), {
                            Keyword: e.inputText,
                            Destination: [{
                                SelectedBy: "Menu"
                            }]
                        })
                    } : {
                        panelName: v.PanelName.activity,
                        data: a(a({}, t), {
                            Keyword: e.inputText
                        })
                    };
                    var e, t
                }
                )).send("encodeURIComponent", (function() {
                    B(!1)
                }
                ))
            };
            function V(e) {
                var t = e.historyData;
                return (null == Y ? void 0 : Y.length) > 0 ? c.createElement(C.default, {
                    dataList: null != Y ? Y : [],
                    dataRenderer: function(e) {
                        var t = e.inputText;
                        return c.createElement("div", {
                            className: "history_destination"
                        }, t)
                    },
                    onClear: function(e, n) {
                        n.stopPropagation();
                        var a = t.filter((function(t, n) {
                            return n !== e
                        }
                        ));
                        localStorage.setItem(m.EPanelKeys.activity + "_queryKey", JSON.stringify({
                            data: a
                        })),
                        F(a)
                    },
                    onClickLink: function(e) {
                        J(a(a({}, e), {
                            historySearch: "1"
                        }))
                    },
                    title: "繼續搜尋",
                    hideFirstData: !1
                }) : null
            }
            return c.createElement(c.Fragment, null, c.createElement("div", {
                className: "activityInput aboard"
            }, c.createElement("div", {
                className: "destination"
            }, c.createElement(y.default, {
                onBlur: function(e) {
                    return L(!1)
                },
                onFocus: function(e) {
                    return L(!0)
                },
                inputRef: H,
                moduleName: _.ERacpOrRajxOrRajn.Rajn,
                insertNode: e.insertNode,
                key: e.className,
                inputOnClick: function() {
                    return f.default(t, n, b)
                },
                data: {
                    mobileClass: "ActivityDestinationSideCont " + ("zh-tw" !== P.language ? "i18n" : ""),
                    device: "PC" === e.device ? _.Edevice.PC : _.Edevice.Mobile,
                    isRequired: !0,
                    placeholder: x("activity.destination.placeholder"),
                    customClass: "foreign",
                    inputText: O.inputText,
                    selectedData: S ? [{
                        SelectedBy: "Menu"
                    }] : [],
                    title: x("activity.destination.mTitle"),
                    iconName: "",
                    onInputChange: function(e, t) {
                        var n = e.inputText;
                        n !== O.inputText && (S = !1);
                        var r = e.selectedData[0];
                        if (S && "Menu" === (null == r ? void 0 : r.SelectedBy) && !(null == r ? void 0 : r.hasOwnProperty("vCategory")))
                            J(O);
                        else if (!t) {
                            var o;
                            if (e.selectedData.length > 0)
                                if ("Menu" === r.SelectedBy) {
                                    var l = r
                                      , c = i(l.vItem.split("-"), 2)
                                      , s = c[0]
                                      , u = c[1];
                                    o = {
                                        destination: {
                                            country: "_Keyword" === l.vCategory ? "" : s,
                                            city: "_Keyword" === l.vCategory ? "" : u,
                                            SelectedBy: l.SelectedBy
                                        },
                                        isForeign: !s.includes("TW"),
                                        dtmItem: l
                                    }
                                } else {
                                    var d = r;
                                    o = {
                                        destination: {
                                            SelectedBy: d.SelectedBy
                                        },
                                        id: d.level3,
                                        isForeign: d.isForeign
                                    }
                                }
                            A(a({
                                inputText: n
                            }, o)),
                            e.selectedData[0] && J(a({
                                inputText: n
                            }, o))
                        }
                    },
                    remindText: "",
                    Dtm: {
                        levelKey: ["vLine", "vCategory", "vItem"],
                        fetchData: function() {
                            return e.source
                        }
                    },
                    Rajn: {
                        minimumStringQueryLength: 1,
                        minimumStringQuery: x("activity.destination.minimumStringQuery"),
                        titleClass: "d-no",
                        rules: [{
                            title: "only"
                        }],
                        fixList: !0,
                        clear: !1,
                        chooseFirst: !1,
                        selectNoFetch: !0,
                        fetchData: function(e) {
                            return t = e,
                            r(void 0, void 0, void 0, (function() {
                                var e, n, a;
                                return o(this, (function(r) {
                                    switch (r.label) {
                                    case 0:
                                        window.abortController && window.abortController.abort(),
                                        e = new AbortController,
                                        window.abortController = e,
                                        n = p.activity.autoCompleteKeywords + "?Keyword=" + t + "&Count=15",
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 4, , 5]),
                                        [4, fetch(n, {
                                            method: "GET",
                                            mode: "cors",
                                            signal: e.signal,
                                            headers: new Headers({
                                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                                            })
                                        })];
                                    case 2:
                                        return [4, r.sent().json()];
                                    case 3:
                                        return [2, {
                                            data: (null == (a = r.sent()) ? void 0 : a.Products.map((function(e) {
                                                return {
                                                    level2: "only",
                                                    level3: e.ID,
                                                    txt: e.Name,
                                                    isForeign: !e.Countries.includes("TW")
                                                }
                                            }
                                            ))) || [],
                                            value: t
                                        }];
                                    case 4:
                                        return r.sent(),
                                        [2, {
                                            data: "error",
                                            value: t
                                        }];
                                    case 5:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ));
                            var t
                        },
                        footer: g(O, J)
                    },
                    panelProps: "activity",
                    submitCallBack: function(e) {
                        return J(O)
                    }
                },
                panelProps: "activity",
                hotKeywordContent: a({}, U()),
                JSXofHistory: "PC" === t && c.createElement(V, {
                    panelType: m.EPanelKeys.activity,
                    historyData: Y
                })
            })), c.createElement(D.FooterSearch, {
                showCancelBtn: !1,
                searchBtnText: "PC" === e.device ? j ? c.createElement("div", {
                    className: "loader"
                }, c.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    id: "group_2",
                    "data-name": "group_2",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20"
                }, c.createElement("animateTransform", {
                    dur: "2s",
                    attributeName: "transform",
                    repeatCount: "indefinite",
                    type: "rotate",
                    from: "0,0,0",
                    to: "360,0,0"
                }), c.createElement("path", {
                    id: "circle_1",
                    "data-name": "circle_1",
                    className: "cls-1",
                    fill: "#ffffff",
                    fillRule: "evenodd",
                    d: "M17.382,15.132A8.946,8.946,0,0,1,13,18.464V15.146a5.842,5.842,0,0,0,1.92-1.729,6,6,0,1,0-8.353,1.495A4.956,4.956,0,0,0,7,15.157v3.3a8.838,8.838,0,0,1-2.147-1.083A9,9,0,1,1,17.382,15.132Z"
                }))) : c.createElement(d.default, {
                    name: "toolsearch2",
                    className: "svg"
                }) : /activity/.test(x("activity.searchBtn")) ? "Search" : x("activity.searchBtn"),
                searchBtnClassName: "bt_rcnb search b-no radius search_button",
                cancelBtnText: "取消",
                cancelBtnClassName: "bt_rcnb search b-no radius cancel",
                onCancel: function() {
                    return e.mCloseBtn()
                },
                onSearch: function() {
                    return J(a({}, O))
                },
                className: "inputBlock submitBtn",
                searchAriaLabel: "確定"
            })), c.createElement("div", {
                className: "hotKeyword_row"
            }, c.createElement(h.default, a({
                device: t
            }, U()))), "M" === t && !E && c.createElement(V, {
                panelType: m.EPanelKeys.activity,
                historyData: Y
            }))
        }
    },
    275: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(26)
          , i = n(143)
          , l = n(139)
          , c = n(204)
          , s = n(239);
        t.default = function(e) {
            var t = e.onSubmitTarget ? e.onSubmitTarget : o.b2c_submitUrl.travel
              , n = e.source ? e.source : o.themeTravel.place;
            return r.createElement(l.PanelMaster, {
                store: {
                    reducer: c.reducer,
                    containerState: c.containerState
                }
            }, r.createElement(s.Theme, a({
                device: i.Device.PC
            }, e, {
                onSubmitTarget: t,
                source: n
            })))
        }
    },
    276: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(0)
          , r = n(26)
          , o = n(143)
          , i = n(139)
          , l = n(204)
          , c = n(239);
        t.default = function(e) {
            var t = e.onSubmitTarget ? e.onSubmitTarget : r.b2c_submitUrl.travel
              , n = e.source ? e.source : r.themeTravel.place;
            return a.createElement(i.PanelMaster, {
                store: {
                    reducer: l.reducer,
                    containerState: l.containerState
                }
            }, a.createElement(c.Theme, {
                device: o.Device.Mobile,
                insertNode: e.insertNode,
                onSubmitTarget: t,
                source: n
            }))
        }
    },
    295: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__rest || function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                    t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
            }
            return n
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.GroupFree = void 0;
        var o = n(140)
          , i = n(0)
          , l = n(142)
          , c = n(147)
          , s = n(145)
          , u = n(139)
          , d = n(152)
          , p = n(182);
        t.GroupFree = function(e) {
            var t, n = e.device, f = e.insertNode, h = e.rowSkin, m = e.onSubmitTarget, v = e.source, y = (e.headerClassName,
            r(e, ["device", "insertNode", "rowSkin", "onSubmitTarget", "source", "headerClassName"])), _ = u.useConnect(), D = _.state, T = _.dispatch, C = D.Main_Data, g = D.DepartureData, S = D.SubmitData;
            i.useEffect((function() {
                d.getGroupFreeDestinationData(v).then((function(e) {
                    T({
                        type: "MAINDATA",
                        Main_Data: e
                    }),
                    T({
                        type: "DEPARTUREOPTIONDATA",
                        DepartureData: d.flatTravelDepartureData
                    })
                }
                ))
            }
            ), []),
            i.useEffect((function() {
                if (C && g.length) {
                    var e = d.getUrlData(S, {
                        departOption: g,
                        desnsOption: C
                    });
                    if (!e)
                        return;
                    e.Destination && e.Destination.length && T({
                        type: "SEARCHTYPE",
                        SearchType: c.SearchType.Destination
                    }),
                    T({
                        type: "SETSUBMITDATA",
                        SubmitData: a(a({}, D.SubmitData), e)
                    })
                }
            }
            ), [C, g]);
            var b = D.SubmitData
              , w = b.Date
              , E = b.Destination
              , N = b.Keywords
              , x = o()
              , P = o(w[0])
              , k = o(w[1])
              , O = m
              , A = p.turnSubmitDataToUrlParams(D, s.PanelName["foreignVacation-group"], !1)
              , R = p.handleSaveData(D, s.PanelName["foreignVacation-group"], w, !1)
              , M = null === (t = R.data.Departure[0]) || void 0 === t ? void 0 : t.Name;
            return i.createElement(p.HistoryProvider, {
                panelType: d.PanelType.GroupFree
            }, i.createElement(p.MainUI, {
                state: D,
                dispatch: T,
                insertNode: f,
                device: n,
                panelType: d.PanelType.GroupFree,
                submit: function() {
                    return l.onSubmit({
                        target: O,
                        params: a({}, y),
                        openTarget: "_blank"
                    }).validate((function(e) {
                        var t = [];
                        return 0 === E.length && D.SearchType === c.SearchType.Destination && t.push("請輸入 / 選擇目的地"),
                        N.trim() || D.SearchType !== c.SearchType.Keyword || t.push("請輸入關鍵字"),
                        w[0] || t.push("請選擇出發日期"),
                        w[1] || t.push("請選擇回程日期"),
                        P.isBefore(x, "date") && t.push("起日不可早於今天日期"),
                        k.isBefore(x, "date") && t.push("迄日不可早於今天日期"),
                        0 === t.length || t
                    }
                    )).modifier((function(e) {
                        return A
                    }
                    )).saveData((function() {
                        return R
                    }
                    )).send("encodeURI")
                },
                rowSkin: h,
                renderNode: y.renderNode,
                target: O,
                blank: !0,
                urlParams: A,
                clickRecordData: R,
                departureName: M
            }))
        }
    },
    296: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(225);
        t.default = function(e) {
            return r.createElement(o.default, a({
                device: "PC"
            }, e))
        }
    },
    297: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(225);
        t.default = function(e) {
            return r.createElement(o.default, a({
                device: "M"
            }, e))
        }
    },
    309: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(27)
          , i = n(220);
        t.default = function(e) {
            var t = e.panel
              , n = o.useTranslation()
              , l = n.t
              , c = (n.i18n,
            "activityTaiwan" === t || "activityForeign" === t);
            return r.createElement(i.MobileHeadBase, a({}, e), r.createElement("div", {
                className: "search_panel-mobileHead"
            }, r.createElement("p", null, c ? l("activity.destination.mTitle") : e.mTitle), r.createElement("div", {
                className: "search_panel-mobileHead_close",
                onClick: e.mCloseBtn
            }, r.createElement("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 10 10"
            }, r.createElement("path", {
                d: "M10 8.59L8.59 10 5 6.41 1.41 10 0 8.59 3.59 5 0 1.41 1.41 0 5 3.59 8.59 0 10 1.41 6.41 5z"
            })))))
        }
    },
    318: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(236)
          , i = n(161);
        t.default = function(e) {
            return r.createElement(o.default, a({
                device: "PC"
            }, e, {
                type: i.FlightType.Home
            }))
        }
    },
    319: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__rest || function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                    t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
            }
            return n
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(0)
          , i = n(236)
          , l = n(161);
        t.default = function(e) {
            e.type;
            var t = r(e, ["type"]);
            return o.createElement(i.default, a({
                device: "M",
                type: l.FlightType.Home
            }, t))
        }
    },
    320: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(247);
        t.default = function(e) {
            return r.createElement(o.Hotel, a({
                typeName: "search",
                device: "PC",
                dtmMode: 1
            }, e))
        }
    },
    321: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(247);
        t.default = function(e) {
            return r.createElement(o.Hotel, a({
                typeName: "search",
                dtmMode: 1,
                device: "M"
            }, e))
        }
    },
    393: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , r = this && this.__rest || function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                    t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
            }
            return n
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Cruise = void 0;
        var o = n(140)
          , i = n(0)
          , l = n(142)
          , c = n(147)
          , s = n(145)
          , u = n(139)
          , d = n(152)
          , p = n(182);
        t.Cruise = function(e) {
            var t, n = e.device, f = e.insertNode, h = e.rowSkin, m = e.onSubmitTarget, v = e.source, y = e.headerClassName, _ = r(e, ["device", "insertNode", "rowSkin", "onSubmitTarget", "source", "headerClassName"]), D = u.useConnect(), T = D.state, C = D.dispatch;
            i.useEffect((function() {
                d.getThemeTravelData(v).then((function(e) {
                    C({
                        type: "MAINDATA",
                        Main_Data: e
                    }),
                    C({
                        type: "DEPARTUREOPTIONDATA",
                        DepartureData: d.flatTravelDepartureData
                    })
                }
                ))
            }
            ), []);
            var g = T.SubmitData
              , S = g.Date
              , b = g.Destination
              , w = g.Keywords
              , E = o()
              , N = o(S[0])
              , x = o(S[1])
              , P = m
              , k = p.turnSubmitDataToUrlParams(T, s.PanelName.cruise, !1)
              , O = p.handleSaveData(T, s.PanelName.cruise, S, !1)
              , A = null === (t = O.data.Departure[0]) || void 0 === t ? void 0 : t.Name;
            return i.createElement(p.HistoryProvider, {
                panelType: d.PanelType.Cruise
            }, i.createElement(p.MainUI, {
                state: T,
                dispatch: C,
                insertNode: f,
                device: n,
                panelType: d.PanelType.Cruise,
                submit: function() {
                    return l.onSubmit({
                        target: P,
                        params: a({}, _),
                        openTarget: "_blank"
                    }).validate((function(e) {
                        var t = [];
                        return 0 === b.length && T.SearchType === c.SearchType.Destination && t.push("請輸入 / 選擇目的地"),
                        w.trim() || T.SearchType !== c.SearchType.Keyword || t.push("請輸入關鍵字"),
                        S[0] || t.push("請選擇出發日期"),
                        S[1] || t.push("請選擇回程日期"),
                        N.isBefore(E, "date") && t.push("起日不可早於今天日期"),
                        x.isBefore(E, "date") && t.push("迄日不可早於今天日期"),
                        0 === t.length || t
                    }
                    )).modifier((function(e) {
                        return k
                    }
                    )).saveData((function() {
                        return O
                    }
                    )).send("encodeURI")
                },
                rowSkin: h,
                renderNode: _.renderNode,
                headerClassName: y,
                target: P,
                blank: !0,
                urlParams: k,
                clickRecordData: O,
                departureName: A
            }))
        }
    },
    406: function(e, t, n) {
        e.exports = {
            "search_panel-rowSkin": "search_panel-rowSkin",
            ntb_rcln: "ntb_rcln",
            tabs: "tabs",
            "dropdown-content": "dropdown-content",
            cy_rcln: "cy_rcln",
            ListStyle: "ListStyle",
            "MMenuListDtmRajn-List": "MMenuListDtmRajn-List",
            active: "active",
            ctns: "ctns",
            panel: "panel",
            "search_panel-defaultSkin": "search_panel-defaultSkin",
            st_rcln: "st_rcln",
            "dropdown-place-holder": "dropdown-place-holder",
            search_panel_m_content: "search_panel_m_content",
            action: "action",
            ic_rcln: "ic_rcln",
            breakline: "breakline",
            withIcon: "withIcon",
            "dropdown-label": "dropdown-label",
            inputSkin_group_title: "inputSkin_group_title",
            cr_rcln: "cr_rcln",
            indicator: "indicator",
            checkLabel: "checkLabel",
            "search_panel-singlePanel": "search_panel-singlePanel",
            "search_panel-singlePanel_m": "search_panel-singlePanel_m",
            "search_panel-m": "search_panel-m",
            "search_panel-sm": "search_panel-sm",
            "search_panel-md": "search_panel-md",
            "search_panel-lg": "search_panel-lg",
            travel: "travel",
            hotel: "hotel",
            foreignVacation: "foreignVacation",
            themeTravel: "themeTravel",
            cruise: "cruise",
            highSpeedRail: "highSpeedRail",
            flight: "flight",
            defaultSkin: "defaultSkin",
            mainSearch: "mainSearch",
            ntb_xitu_tw: "ntb_xitu_tw",
            multMode: "multMode",
            moveUp: "moveUp",
            "search_panel-mobileHead": "search_panel-mobileHead",
            "search_panel-mobileHead_close": "search_panel-mobileHead_close",
            FooterSearch: "FooterSearch",
            FooterSearch_searchBtn: "FooterSearch_searchBtn",
            search_panel_mobile: "search_panel_mobile",
            tab: "tab",
            i18n_mode: "i18n_mode",
            hotKeyword: "hotKeyword",
            labelWrap: "labelWrap",
            label: "label",
            hideMobileHead: "hideMobileHead",
            activityTaiwan: "activityTaiwan",
            "activity-b2c": "activity-b2c",
            activity_M: "activity_M",
            search_panel: "search_panel",
            "search_panel-suiyo": "search_panel-suiyo",
            activitySingleTitle: "activitySingleTitle",
            activityInput: "activityInput",
            bt_rcnb: "bt_rcnb",
            nvb_rslb: "nvb_rslb",
            ActivityDestinationSideCont: "ActivityDestinationSideCont",
            sideBar_header_bot: "sideBar_header_bot",
            dtm_rcfn: "dtm_rcfn",
            sec_all: "sec_all"
        }
    },
    418: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(26)
          , i = n(143)
          , l = n(139)
          , c = n(204)
          , s = n(393);
        t.default = function(e) {
            var t = e.onSubmitTarget ? e.onSubmitTarget : o.b2c_submitUrl.travel
              , n = e.source ? e.source : o.themeTravel.place;
            return r.createElement(l.PanelMaster, {
                store: {
                    reducer: c.reducer,
                    containerState: c.containerState
                }
            }, r.createElement(s.Cruise, a({
                device: i.Device.PC
            }, e, {
                onSubmitTarget: t,
                source: n
            })))
        }
    },
    419: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(0)
          , r = n(26)
          , o = n(143)
          , i = n(139)
          , l = n(204)
          , c = n(393);
        t.default = function(e) {
            var t = e.onSubmitTarget ? e.onSubmitTarget : r.b2c_submitUrl.travel
              , n = e.source ? e.source : r.themeTravel.place;
            return a.createElement(i.PanelMaster, {
                store: {
                    reducer: l.reducer,
                    containerState: l.containerState
                }
            }, a.createElement(c.Cruise, {
                device: o.Device.Mobile,
                insertNode: e.insertNode,
                onSubmitTarget: t,
                source: n
            }))
        }
    },
    420: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(143)
          , i = n(207);
        n(206);
        var l = n(223)
          , c = n(139)
          , s = n(208)
          , u = n(13);
        t.default = function(e) {
            var t = a({
                PanelName: i.PanelName.highSpeedRail,
                PanelProps: o.EPanelKeys.highSpeedRail,
                device: o.Device.PC
            }, e)
              , n = u.default(t.PanelName + "_" + t.device + " B2C_Vacation_" + t.device, {
                rowSkin: e.rowSkin && "PC" === t.device
            }, {
                defaultSkin: !e.rowSkin && "PC" === t.device
            });
            return r.createElement(c.PanelMaster, {
                store: {
                    reducer: s.reducer,
                    containerState: s.containerState
                }
            }, r.createElement("div", {
                className: n
            }, r.createElement(l.default, a({}, t))))
        }
    },
    421: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(143)
          , i = n(207)
          , l = n(223);
        n(206);
        var c = n(139)
          , s = n(208);
        t.default = function(e) {
            var t = a({
                PanelName: i.PanelName.highSpeedRail,
                PanelProps: o.EPanelKeys.highSpeedRail,
                device: o.Device.Mobile
            }, e);
            return r.createElement(c.PanelMaster, {
                store: {
                    reducer: s.reducer,
                    containerState: s.containerState
                }
            }, r.createElement("div", {
                className: t.PanelName + "_" + t.device + " B2C_Vacation_" + t.device
            }, r.createElement(l.default, a({}, t))))
        }
    },
    802: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(207)
          , i = n(143)
          , l = n(265);
        n(206);
        var c = n(139)
          , s = n(208);
        t.default = function(e) {
            var t = a({
                PanelName: o.PanelName.foreignVacation,
                device: i.Device.Mobile,
                isHead: !1
            }, e);
            return r.createElement(c.PanelMaster, {
                store: {
                    reducer: s.reducer,
                    containerState: s.containerState
                }
            }, r.createElement("div", {
                className: t.PanelName + "_" + t.device + " B2C_Vacation_" + t.device
            }, r.createElement(l.TwoLabel, a({}, t))))
        }
    },
    803: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(143)
          , i = n(207)
          , l = n(265);
        n(206);
        var c = n(139)
          , s = n(208)
          , u = n(13);
        t.default = function(e) {
            var t = a({
                PanelName: i.PanelName.foreignVacation,
                device: o.Device.PC,
                isHead: !1
            }, e)
              , n = u.default(t.PanelName + "_" + t.device + " B2C_Vacation_" + t.device, {
                rowSkin: e.rowSkin && "PC" === t.device
            }, {
                defaultSkin: !e.rowSkin && "PC" === t.device
            });
            return r.createElement(c.PanelMaster, {
                store: {
                    reducer: s.reducer,
                    containerState: s.containerState
                }
            }, r.createElement("div", {
                className: n
            }, r.createElement(l.TwoLabel, a({}, t))))
        }
    },
    804: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(143)
          , i = n(207)
          , l = n(223);
        n(206);
        var c = n(139)
          , s = n(208);
        t.default = function(e) {
            var t = a({
                PanelName: i.PanelName.taiwanVacation,
                PanelProps: o.EPanelKeys.taiwanVacation,
                device: o.Device.Mobile
            }, e);
            return r.createElement(c.PanelMaster, {
                store: {
                    reducer: s.reducer,
                    containerState: s.containerState
                }
            }, r.createElement("div", {
                className: t.PanelName + "_" + t.device + " B2C_Vacation_" + t.device
            }, r.createElement(l.default, a({}, t))))
        }
    },
    805: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(143)
          , i = n(207)
          , l = n(223);
        n(206);
        var c = n(139)
          , s = n(208)
          , u = n(13);
        t.default = function(e) {
            var t = a({
                PanelName: i.PanelName.taiwanVacation,
                PanelProps: o.EPanelKeys.taiwanVacation,
                device: o.Device.PC
            }, e)
              , n = u.default(t.PanelName + "_" + t.device + " B2C_Vacation_" + t.device, {
                rowSkin: e.rowSkin && "PC" === t.device
            }, {
                defaultSkin: !e.rowSkin && "PC" === t.device
            });
            return r.createElement(c.PanelMaster, {
                store: {
                    reducer: s.reducer,
                    containerState: s.containerState
                }
            }, r.createElement("div", {
                className: n
            }, r.createElement(l.default, a({}, t))))
        }
    },
    806: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(225);
        t.default = function(e) {
            return r.createElement(o.default, a({
                device: "M"
            }, e, {
                single: !0
            }))
        }
    },
    807: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(225);
        t.default = function(e) {
            return r.createElement(o.default, a({
                device: "PC"
            }, e, {
                single: !0
            }))
        }
    },
    84: function(e, t, n) {
        "use strict";
        var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , o = n(14);
        n(406);
        var i = n(309);
        t.default = function(e) {
            var t = e.type
              , l = e.panel
              , c = t.split("_").includes("m")
              , s = o({
                loader: function() {
                    return function() {
                        switch (l) {
                        case "travel":
                            return c ? Promise.resolve().then((function() {
                                return n(250)
                            }
                            )) : Promise.resolve().then((function() {
                                return n(249)
                            }
                            ));
                        case "flight":
                            return c ? Promise.resolve().then((function() {
                                return n(319)
                            }
                            )) : Promise.resolve().then((function() {
                                return n(318)
                            }
                            ));
                        case "hotel":
                            return c ? Promise.resolve().then((function() {
                                return n(321)
                            }
                            )) : Promise.resolve().then((function() {
                                return n(320)
                            }
                            ));
                        case "foreignVacation":
                            return c ? Promise.resolve().then((function() {
                                return n(802)
                            }
                            )) : Promise.resolve().then((function() {
                                return n(803)
                            }
                            ));
                        case "taiwanVacation":
                            return c ? Promise.resolve().then((function() {
                                return n(804)
                            }
                            )) : Promise.resolve().then((function() {
                                return n(805)
                            }
                            ));
                        case "themeTravel":
                            return c ? Promise.resolve().then((function() {
                                return n(276)
                            }
                            )) : Promise.resolve().then((function() {
                                return n(275)
                            }
                            ));
                        case "cruise":
                            return c ? Promise.resolve().then((function() {
                                return n(419)
                            }
                            )) : Promise.resolve().then((function() {
                                return n(418)
                            }
                            ));
                        case "highSpeedRail":
                            return c ? Promise.resolve().then((function() {
                                return n(421)
                            }
                            )) : Promise.resolve().then((function() {
                                return n(420)
                            }
                            ));
                        case "activityForeign":
                            return c ? Promise.resolve().then((function() {
                                return n(297)
                            }
                            )) : Promise.resolve().then((function() {
                                return n(296)
                            }
                            ));
                        case "activityTaiwan":
                            return c ? Promise.resolve().then((function() {
                                return n(806)
                            }
                            )) : Promise.resolve().then((function() {
                                return n(807)
                            }
                            ))
                        }
                    }()
                },
                loading: function(e) {
                    return e.error ? r.createElement("div", null, "Error!") : e.pastDelay ? r.createElement("div", null, "Loading...") : null
                }
            });
            return r.createElement(r.Fragment, null, c && r.createElement(i.default, a({}, e)), r.createElement(s, a({}, e)))
        }
    }
}]);
