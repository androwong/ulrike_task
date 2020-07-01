window.viHeadScriptSize = 19.01;
(function() {
    var _f = function(e) {
        window.vi = window.vi || {}, window.vi.env = Object.freeze(e)
    };;
    _f.apply(null, [{
        "JKIDD_PATH": "https://a.nytimes.com/svc/nyt/data-layer",
        "ET2_URL": "https://a.et.nytimes.com",
        "WEDDINGS_PATH": "https://content.api.nytimes.com",
        "GDPR_PATH": "https://us-central1-nyt-wfvi-prd.cloudfunctions.net/gdpr-email-form",
        "RECAPTCHA_SITEKEY": "6LevSGcUAAAAAF-7fVZF05VTRiXvBDAY4vBSPaTF",
        "ABRA_ET_URL": "//et.nytimes.com",
        "NODE_ENV": "production",
        "SENTRY_SAMPLE_RATE": "10",
        "EXPERIMENTAL_ROUTE_PREFIX": "",
        "ENVIRONMENT": "prd",
        "RELEASE": "10dac3a4ea70ccb85ea9b994a1e209663a91e45e",
        "AUTH_HOST": "https://myaccount.nytimes.com",
        "SWG_PUBLICATION_ID": "nytimes.com",
        "GQL_FETCH_TIMEOUT": "4000",
        "GOOGLE_CLIENT_ID": "1005640118348-amh5tgkq641oru4fbhr3psm3gt2tcc94.apps.googleusercontent.com"
    }]);
})();;
! function() {
    if ('PerformanceLongTaskTiming' in window) {
        var g = window.__tti = {
            e: []
        };
        g.o = new PerformanceObserver(function(l) {
            g.e = g.e.concat(l.getEntries())
        });
        g.o.observe({
            entryTypes: ['longtask']
        })
    }
}();;
! function(n, e) {
    var t, o, i, c = [],
        f = {
            passive: !0,
            capture: !0
        },
        r = new Date,
        a = "pointerup",
        u = "pointercancel";

    function p(n, c) {
        t || (t = c, o = n, i = new Date, w(e), s())
    }

    function s() {
        o >= 0 && o < i - r && (c.forEach(function(n) {
            n(o, t)
        }), c = [])
    }

    function l(t) {
        if (t.cancelable) {
            var o = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
            "pointerdown" == t.type ? function(t, o) {
                function i() {
                    p(t, o), r()
                }

                function c() {
                    r()
                }

                function r() {
                    e(a, i, f), e(u, c, f)
                }
                n(a, i, f), n(u, c, f)
            }(o, t) : p(o, t)
        }
    }

    function w(n) {
        ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
            n(e, l, f)
        })
    }
    w(n), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = function(n) {
        c.push(n), s()
    }
}(addEventListener, removeEventListener);;
try {
    var observer = new window.PerformanceObserver(function(list) {
        var entries = list.getEntries();

        for (var i = 0; i < entries.length; i += 1) {
            var entry = entries[i];
            var performance = {};

            performance[entry.name] = Math.round(entry.startTime + entry.duration);
            (window.dataLayer = window.dataLayer || []).push({
                event: "performance",
                pageview: {
                    performance: performance
                }
            });
        }
    });
    observer.observe({
        entryTypes: ["paint"]
    });
} catch (e) {};
! function(i, e) {
    var a, s, c, p, u, g = [],
        l = "object" == typeof i.navigator && "string" == typeof i.navigator.userAgent && /iP(ad|hone|od)/.test(
            i.navigator.userAgent),
        f = "object" == typeof i.navigator && i.navigator.sendBeacon,
        y = f ? l ? "xhr_ios" : "beacon" : "xhr";

    function d() {
        var e, t, n = i.crypto || i.msCrypto;
        if (n) t = n.getRandomValues(
            new Uint8Array(18));
        else
            for (t = []; t.length < 18;) t.push(256 * Math.random() ^ 255 & (e = e || +new Date)),
                e = Math.floor(e / 256);
        return btoa(String.fromCharCode.apply(String, t)).replace(/\+/g, "-").replace(
            /\//g, "_")
    }
    if (i.nyt_et) try {
        console.warn("et2 snippet should only load once per page")
    } catch (e) {} else i.nyt_et = function() {
            var e, t, n, o = arguments;

            function r(r) {
                g.length && (function(e, t, n) {
                    if (
                        "beacon" === y || f && r) return i.navigator.sendBeacon(e, t);
                    var o = "undefined" != typeof XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                    o.open("POST", e), o.withCredentials = !0, o.setRequestHeader("Accept", "*/*"),
                        "string" == typeof t ? o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8") : "[object Blob]" === {}.toString.call(t) && t.type && o.setRequestHeader("Content-Type", t.type);
                    try {
                        o.send(t)
                    } catch (e) {}
                }(a + "/track", JSON.stringify(g)), g.length = 0, clearTimeout(u), u = null)
            }
            if (
                "string" == typeof o[0] && /init/.test(o[0]) && (c = d(), "init" == o[0] && !s)) {
                if (s = d(),
                    "string" != typeof o[1] || !/^http/.test(o[1])) throw new Error("init must include an et host url");
                a = String(o[1]).replace(/\/$/, ""), "string" == typeof o[2] && (p = o[2])
            }
            n = "page_exit" == (e = o[o.length - 1]).subject || "ob_click" == (e.eventData || {}).type, a && "object" == typeof e && (t = "page" == e.subject ? c : d(),
                e.sourceApp && (p = e.sourceApp), e.sourceApp = p, g.push({
                    context_id: s,
                    pageview_id: c,
                    event_id: t,
                    client_lib: "v1.0.5",
                    sourceApp: p,
                    how: n && l && f ? "beacon_ios" : y,
                    client_ts: +new Date,
                    data: JSON.parse(
                        JSON.stringify(e))
                }), "send" == o[0] || t == c || n ? r(n) : u || (u = setTimeout(r, 5500)))
        },
        i.nyt_et.get_pageview_id = function() {
            return c
        }
}(window);;
var NYTD = NYTD || {};
NYTD.Abra = function(t) {
        "use strict";

        function e(t) {
            var e = r[t];
            return e && e[1] || null
        }

        function n(t, e) {
            if (t) {
                var n, r, o = e[0],
                    i = e[1],
                    c = 0,
                    u = 0;
                if (1 !== i.length || 4294967296 !== i[0])
                    for (n = a(t + " " + o) >>> 0, c = 0, u = 0; r = i[c++];)
                        if (n < (u += r[0])) return r
            }
        }

        function a(t) {
            for (var e, n, a, r, o, i, c, u = 0, h = 0, l = [], s = [e = 1732584193, n = 4023233417, ~e, ~n, 3285377520], f = [], p = t.length; h <= p;) f[h >> 2] |= (h < p ? t.charCodeAt(h) : 128) << 8 * (3 - h++ % 4);
            for (f[c = p + 8 >> 2 | 15] = p << 3; u <= c; u += 16) {
                for (e = s, h = 0; h < 80; e = [0 | [(i = ((t = e[0]) << 5 | t >>> 27) + e[4] + (l[h] = h < 16 ? ~~f[u + h] : i << 1 | i >>> 31) + 1518500249) + ((n = e[1]) & (a = e[2]) | ~n & (r = e[3])), o = i + (n ^ a ^ r) + 341275144, i + (n & a | n & r | a & r) + 882459459, o + 1535694389][0 | h++/20],t,n<<30|n>>>2,a,r])i=l[h-3]^l[h-8]^l[h-14]^l[h-16];for(h=5;h;)s[--h]=s[h]+e[h]|0}return s[0]}var r,o={};return t.dataLayer=t.dataLayer||[],e.init=function(e){var a,o,i,c,u,h,l,s,f,p,d=[],v=[],m=(t.document.cookie.match(/ ( ? : ^ | ;) * nyt - a = ([ ^ ;] * ) / ) || [])[1], b = (t.document.cookie.match(/(?:^|;) *ab7=([^;]*)/) || [])[1], g = (t.location.search.match(/(?:^\?|&)abra=([^&]*)/) || [])[1];
                    if (r) throw new Error("can't init twice");
                    for (r = {}, u = (decodeURIComponent(b || "") + "&" + decodeURIComponent(g || "")).split("&"), a = u.length - 1; a >= 0; a--) h = u[a].split("="), h.length < 2 || (l = h[0]) && !r[l] && (s = h[1] || null, r[l] = [, s, 1], s && d.push(l + "=" + s), v.push({
                        test: l,
                        variant: s || "0"
                    }));
                    for (a = 0; a < e.length; a++) i = e[a], (o = i[0]) in r || (c = n(m, i) || [], c[0], f = c[1], p = !!c[2], r[o] = c, f && d.push(o.replace(/[^\w-]/g) + "=" + ("" + f).replace(/[^\w-]/g)), p && v.push({
                        test: o,
                        variant: f || "0"
                    })); d.length && t.document.documentElement.setAttribute("data-nyt-ab", d.join(" ")), v.length && t.dataLayer.push({
                        event: "ab-alloc",
                        abtest: {
                            batch: v
                        }
                    })
                }, e.reportExposure = function(e, n) {
                    if (!o[e]) {
                        o[e] = 1;
                        var a = r[e];
                        if (a) {
                            var i = a[1];
                            a[2] && t.dataLayer.push({
                                event: "ab-expose",
                                abtest: {
                                    test: e,
                                    variant: i || "0"
                                }
                            })
                        }
                        n && t.setTimeout(function() {
                            n(null)
                        }, 0)
                    }
                }, e
            }(this);;
            (function() {
                var NYTD = "undefined" != typeof window && window.NYTD ? window.NYTD : {};

                function setupTimeZone() {
                    var e = '[data-timezone][data-timezone~="' + (new Date).getHours() + '"] { display: block }',
                        n = document.createElement("style");
                    n.innerHTML = e, document.head.appendChild(n)
                }

                function addNYTAppClass() {
                    var e = window.navigator.userAgent || window.navigator.vendor || window.opera,
                        n = -1 !== e.indexOf("nyt_android"),
                        t = -1 !== e.indexOf("nytios");
                    (n || t) && document.documentElement.classList.add("NYTApp")
                }

                function setupPageViewId() {
                    NYTD.PageViewId = {}, NYTD.PageViewId.update = function() {
                        return "undefined" != typeof nyt_et && "function" == typeof window.nyt_et.get_pageview_id ? (window.nyt_et("pageinit"), NYTD.PageViewId.current = window.nyt_et.get_pageview_id()) : NYTD.PageViewId.current = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            var n = 16 * Math.random() | 0;
                            return ("x" === e ? n : 3 & n | 8).toString(16)
                        }), NYTD.PageViewId.current
                    }
                }
                var _f = function(e) {
                    try {
                        document.domain = "nytimes.com"
                    } catch (e) {}
                    window.swgUserInfoXhrObject = new XMLHttpRequest, window.__emotion = e.emotionIds, setupPageViewId(), setupTimeZone(), addNYTAppClass(), window.nyt_et && "function" == typeof window.nyt_et && window.nyt_et("init", vi.env.ET2_URL, "nyt-vi", {
                        subject: "page",
                        canonicalUrl: (document.querySelector("link[rel=canonical]") || {}).href,
                        articleId: (document.querySelector("meta[name=articleid]") || {}).content,
                        nyt_uri: (document.querySelector("meta[name=nyt_uri]") || {}).content,
                        pubpEventId: (document.querySelector("meta[name=pubp_event_id]") || {}).content,
                        url: location.href,
                        referrer: document.referrer || void 0,
                        client_tz_offset: (new Date).getTimezoneOffset()
                    }), "undefined" != typeof nyt_et && "function" == typeof window.nyt_et.get_pageview_id ? NYTD.PageViewId.current = window.nyt_et.get_pageview_id() : NYTD.PageViewId.update(), NYTD.Abra && "function" == typeof NYTD.Abra.init && NYTD.Abra.init(e.abraConfig, vi.env.ABRA_ET_URL)
                };;
                _f.apply(null, [{
                    "emotionIds": ["6n7j50", "1kj7lfb", "10m9xeu", "vz7hjd", "1fe7a5q", "1f8er69", "10488qs", "1iruc8t", "1ropbjl", "uw59u", "jxzr5i", "oylsik", "1otr2jl", "f758uo", "qtw155", "v0l3hm", "g4gku8", "1rr4qq7", "6xhk3s", "rxqrcl", "tj0ten", "ist4u3", "1gprdgz", "10t7hia", "mzqdl", "kwpx34", "1k2cjfc", "1vhk1ks", "6td9kr", "r5ic95", "15uy5yv", "1p8nkc0", "1hyfx7x", "5j8bii", "1am0aiv", "17ih8de", "8atqhb", "1d50gvk", "1pv1u79", "1dtr3u3", "n1r2ud", "y8aj3r", "60hakz", "1baulvz", "i29ckm", "k2fwhk", "1157aqr", "1vegfwe", "wkcogx", "1yiqkdd", "1fq2n5g", "ovgi28", "f8wsfj", "mhvv8m", "m6999o", "cfo9c3", "1m9j9gf", "1sj8ssj", "emn6zw", "we607y", "159bbcu", "1h21wu5", "akb3vb", "1yip8nf", "1bxnhxc", "1q1yk17", "10panej", "g7rb99", "ghw4n2", "1b9egsl", "k0lfw7", "xof0u2", "l4ebru", "qxlwcd", "7rf959", "1wts9aj", "12pp43k", "whdhgf", "1ioz9ps", "197vjfz", "934sss", "1dq4o0w", "1o3pems", "1e91rfo", "h29fi5", "1q05mva", "k543x9", "kxbuhr", "1sxmvgn", "g0tn84", "4tin05", "7y3qfv", "b7n1on", "1acbpvw", "cyqadh", "1egl8em", "1uqx5yl", "10698na", "1o2c7rh", "16ogagc", "4brsb6", "uhuo44", "mn5hq9", "1qmnftd", "1ho5u4o", "13o0c9t", "1yo489b", "l72opv", "brehiz", "1t75vzw", "1655c01", "r4p4fm", "1s4ffep", "x7rtpa", "1nf2dl3", "1weewy6", "htwhmc", "17jv7b4", "1py22c6", "1q44qq5", "zpgbet", "1qg0wjs", "c32q7m", "1c5207x", "4jmwet", "brak7x", "1bosqjw", "wt0co8", "b3zl3", "ar1l6a", "fvv964"],
                    "abraConfig": [
                        ["vi-ads-et", [
                            [257698038, "2_remainder", 1],
                            [4037269258, null, 0]
                        ]],
                        ["dfp_adslot4v2", [
                            [4294967296, "1_external", 1]
                        ]],
                        ["DFP_amzn", [
                            [42949673, "0_control", 1],
                            [42949673, "1_amzn_fast_fetch", 1],
                            [42949673, "2_adslot_priority", 1],
                            [42949673, "3_no_mnet", 1],
                            [4123168604, null, 0]
                        ]],
                        ["DFP_als", [
                            [4294967296, "1_als", 1]
                        ]],
                        ["DFP_als_home", [
                            [4294967296, "1_als", 1]
                        ]],
                        ["DFP_als_collections", [
                            [4294967296, null, 0]
                        ]],
                        ["dfp_lazy4", [
                            [4294967296, null, 0]
                        ]],
                        ["medianet_toggle", [
                            [4294967296, "0_default", 0]
                        ]],
                        ["amazon_toggle", [
                            [4294967296, null, 0]
                        ]],
                        ["index_toggle", [
                            [4294967296, "1_block", 0]
                        ]],
                        ["dfp_home_toggle", [
                            [4294967296, null, 0]
                        ]],
                        ["dfp_story_toggle", [
                            [4294967296, null, 0]
                        ]],
                        ["dfp_interactive_toggle", [
                            [4294967296, null, 0]
                        ]],
                        ["MKT_dfp_ocean_language", [
                            [2147483648, "0_control", 1],
                            [2147483648, "1_language", 1]
                        ]],
                        ["STORY_topical_recirc", [
                            [2147483648, "0_control", 1],
                            [2147483648, "1_variant", 1]
                        ]],
                        ["HOME_timesExclusive", [
                            [2147483648, "0_control", 1],
                            [2147483648, "1_variant", 1]
                        ]],
                        ["MKT_GateDockMsgTap", [
                            [715827883, "2_BAUDockTapGate", 1],
                            [715827883, "4_BAUDockRBGate", 1],
                            [1431655765, "2_BAUDockTapGate", 1],
                            [1431655765, "4_BAUDockRBGate", 1]
                        ]],
                        ["SEARCH_FACET_DROPDOWN", [
                            [2147483648, "0_FACET_MULTI_SELECT", 1],
                            [2147483648, "1_DYNAMIC_FACET_SELECT", 1]
                        ]],
                        ["VG_gift_upsell_x_only", [
                            [429496730, "0_control", 1],
                            [3865470566, "1_upsell", 1]
                        ]],
                        ["FREEX_LIRE_SPLIT", [
                            [2147483648, "0_LIRE", 0],
                            [2147483648, "1_FREEX", 0]
                        ]],
                        ["ON_app_dl_mc4_0919", [
                            [1073741824, "0_control", 1],
                            [1073741824, "1_newDock", 1],
                            [1073741824, "2_stdExpanded", 1],
                            [1073741824, "3_truncator", 1]
                        ]],
                        ["MKT_dfp_EDU_BTS_Offer_Test", [
                            [4294967296, "0_controloffer", 1]
                        ]],
                        ["MKT_DFP_ods", [
                            [214748365, "0_control", 1],
                            [1932735283, "1_test", 1],
                            [2147483648, "2_test", 1]
                        ]],
                        ["STYLN_menu_v2", [
                            [4294967296, "1_menu_v2", 1]
                        ]],
                        ["STYLN_menu_brexit", [
                            [4080218932, "1_menu_brexit", 1],
                            [214748364, "0_control_STYLN_menu_brexit", 1]
                        ]],
                        ["STYLN_menu_hongkong", [
                            [4080218932, "1_menu_hongkong", 1],
                            [214748364, "0_control_STYLN_menu_hongkong", 1]
                        ]],
                        ["STYLN_menu_election_live", [
                            [1431655766, "2_menu_election_live", 1],
                            [1431655765, "1_menu_election_live", 1],
                            [1431655765, "0_control_STYLN_menu_election_live", 1]
                        ]],
                        ["STYLN_menu_wildfires", [
                            [214748365, "0_control_STYLN_menu_wildfires", 1],
                            [4080218931, "1_menu_wildfires", 1]
                        ]],
                        ["STYLN_guide_election_regions", [
                            [1073741824, "3_guide_election_regions", 1],
                            [1073741824, "2_guide_election_regions", 1],
                            [1073741824, "1_guide_election_regions", 1],
                            [1073741824, "0_control_STYLN_guide_election_regions", 1]
                        ]],
                        ["MC_DFP_topbar_bar_anon_1019", [
                            [2147483648, "0_control", 1],
                            [2147483648, "1_login", 1]
                        ]],
                        ["MC_DFP_topbar_bar_regi_1019", [
                            [2147483648, "0_control", 1],
                            [2147483648, "1_subscription", 1]
                        ]],
                        ["INBOX_indexpage_redesign", [
                            [4294967296, "1_redesign", 0]
                        ]],
                        ["DFP_flexframe_video_player", [
                            [3435973837, "0_control", 1],
                            [858993459, "1_flexframe_proprietary", 1]
                        ]],
                        ["STYLN_trump_suite", [
                            [3865470567, "1_trump_suite", 1],
                            [429496729, "0_control_trump_suite", 1]
                        ]],
                        ["STYLN_trending", [
                            [2147483648, "1_trending", 1],
                            [2147483648, "0_control", 1]
                        ]],
                        ["STYLN_catchup_trump_ui", [
                            [1020054733, "4_catchup_trump_ui", 1],
                            [1020054733, "3_catchup_trump_ui", 1],
                            [1020054733, "2_catchup_trump_ui", 1],
                            [1020054733, "1_catchup_trump_ui", 1],
                            [214748364, "0_control_catchup_trump_ui", 1]
                        ]],
                        ["STYLN_trump_links", [
                            [2147483648, "1_trump_links", 1],
                            [2147483648, "0_control_trump_links", 1]
                        ]],
                        ["DFP_ad_counting", [
                            [4080218932, "0_control", 1],
                            [214748364, "1_variant", 1]
                        ]],
                        ["STYLN_menu_animation", [
                            [2147483648, "0_control_STYLN_menu_animation", 1],
                            [2147483648, "1_menu_animation", 1]
                        ]],
                        ["FREEX_Anon_Diff_Story", [
                            [613566757, "0_Control", 1],
                            [613566757, "1_Name_Intro_Bottom", 1],
                            [613566756, "2_Name_Bottom_Trunc", 1],
                            [613566757, "3_Name_Bottom_Dock", 1],
                            [613566756, "4_Name_Intro", 1],
                            [613566757, "5_Name_Trunc", 1],
                            [613566756, "6_Name_Dock", 1]
                        ]],
                        ["MKT_Subs_Referral", [
                            [2147483648, "0_control", 1],
                            [2147483648, "1_test", 1]
                        ]],
                        ["MKT_Validation_1019", [
                            [2147483648, "0_control", 1],
                            [2147483648, "1_control", 1]
                        ]],
                        ["MKT_dfp_GiftLP", [
                            [2147483648, "0_control", 1],
                            [2147483648, "1_new", 1]
                        ]],
                        ["STORY_intentional_links_v1", [
                            [4294967296, "0_control", 0]
                        ]],
                        ["MKT_dfp_hd_paywall_zip", [
                            [2147483648, "0_control", 1],
                            [2147483648, "1_zip", 1]
                        ]],
                        ["dfp_messaging_flexframe_ctr", [
                            [214748365, "3_center", 1],
                            [214748365, "2_noheadnosummary", 1],
                            [214748365, "1_msgInv_noCTA", 1],
                            [3650722201, "0_control", 1]
                        ]],
                        ["dfp_slideshow_flexframe_slideprog", [
                            [214748365, "3_prevnext_tapstory", 1],
                            [214748365, "2_navpos_nocta", 1],
                            [214748365, "1_equalimage_prevnext", 1],
                            [3650722201, "0_control", 1]
                        ]],
                        ["INBOX_individualpage_redesign", [
                            [4294967296, "0_control", 0]
                        ]],
                        ["MKT_dfp_intl_pricing_low_conv", [
                            [1431655766, "0_control", 1],
                            [1431655765, "1_25cents", 1],
                            [1431655765, "2_50cents", 1]
                        ]],
                        ["MKT_dfp_intl_pricing_med_conv", [
                            [1431655766, "0_control", 1],
                            [1431655765, "1_50cents", 1],
                            [1431655765, "2_75cents", 1]
                        ]]
                    ]
                }]);
            })();;
            (function() {
                var _f = function(e) {
                    var r = function() {
                        var r = e.url;
                        try {
                            r += window.location.search.slice(1).split("&").reduce(function(e, r) {
                                return "ip-override" === r.split("=")[0] ? "?" + r : e
                            }, "")
                        } catch (e) {
                            console.warn(e)
                        }
                        var n = new XMLHttpRequest;
                        for (var t in n.withCredentials = !0, n.open("POST", r, !0), n.setRequestHeader("Content-Type", "application/json"), e.headers) n.setRequestHeader(t, e.headers[t]);
                        return n.send(e.body), n
                    };
                    window.userXhrObject = r(), window.userXhrRefresh = function() {
                        return window.userXhrObject = r(), window.userXhrObject
                    }
                };;
                _f.apply(null, [{
                    "url": "https://samizdat-graphql.nytimes.com/graphql/v2",
                    "body": "{\"operationName\":\"UserQuery\",\"variables\":{},\"query\":\"   query UserQuery {     user {       __typename       profile {         displayName         email       }       userInfo {         regiId         entitlements         demographics {           emailSubscriptions           wat           bundleSubscriptions {             bundle             inGrace             promotion             source           }         }       }       subscriptionDetails {         graceStartDate         graceEndDate         isFreeTrial         hasQueuedSub         startDate         endDate         status         entitlements       }     }   } \"}",
                    "headers": {
                        "nyt-app-type": "project-vi",
                        "nyt-app-version": "0.0.5",
                        "nyt-token": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs+/oUCTBmD/cLdmcecrnBMHiU/pxQCn2DDyaPKUOXxi4p0uUSZQzsuq1pJ1m5z1i0YGPd1U1OeGHAChWtqoxC7bFMCXcwnE1oyui9G1uobgpm1GdhtwkR7ta7akVTcsF8zxiXx7DNXIPd2nIJFH83rmkZueKrC4JVaNzjvD+Z03piLn5bHWU6+w+rA+kyJtGgZNTXKyPh6EC6o5N+rknNMG5+CdTq35p8f99WjFawSvYgP9V64kgckbTbtdJ6YhVP58TnuYgr12urtwnIqWP9KSJ1e5vmgf3tunMqWNm6+AnsqNj8mCLdCuc5cEB74CwUeQcP2HQQmbCddBy2y0mEwIDAQAB"
                    }
                }]);
            })();;
            (function() {
                var registry = window._interactiveRegistry = {};

                function getId(t) {
                    for (;
                        (t = t.parentElement) && !t.matches("[data-sourceid].interactive-body"););
                    return t ? t.getAttribute("data-sourceid") : null
                }
                window.registerInteractive = function(t) {
                    var e = {
                        _subs: {
                            cleanup: []
                        },
                        id: t,
                        on: function(t, r) {
                            return this._subs[t].push(r), e
                        }
                    };
                    registry[t] = e
                }, window.getInteractiveBridge = function(t) {
                    var e = "string" == typeof t ? t : getId(t);
                    return registry[e]
                };
            })();;
            100 * Math.random() <= vi.env.SENTRY_SAMPLE_RATE ? (window.INSTALL_RAVEN = !0, window.nyt_errors = {
                ravenInstalled: !1,
                list: [],
                tags: []
            }, window.onerror = function(n, r, o, w, i) {
                if (!window.nyt_errors.ravenInstalled) {
                    var t = {
                        err: i,
                        data: {}
                    };
                    window.nyt_errors.list.push(t)
                }
            }) : window.INSTALL_RAVEN = !1;;
            (function() {
                function swgDataLayer(e) {
                    return !!window.dataLayer && ((window.dataLayer = window.dataLayer || []).push({
                        event: "impression",
                        module: e
                    }), !0)
                }

                function checkSwgOptOut() {
                    if (!window.localStorage) return !1;
                    var e = window.localStorage.getItem("nyt-swgOptOut");
                    if (!e) return !1;
                    var t = parseInt(e, 10);
                    return ((new Date).getTime() - t) / 864e5 < 1 || (window.localStorage.removeItem("nyt-swgOptOut"), !1)
                }

                function swgDeferredAccount(e, t) {
                    return e.completeDeferredAccountCreation({
                        entitlements: t,
                        consent: !1
                    }).then(function(e) {
                        var t = vi.env.AUTH_HOST + "/svc/account/auth/v1/swg-dal-web",
                            n = e.purchaseData.raw.data ? e.purchaseData.raw.data : e.purchaseData.raw,
                            o = JSON.parse(n),
                            a = {
                                package_name: o.packageName,
                                product_id: o.productId,
                                purchase_token: o.purchaseToken,
                                google_id_token: e.userData.idToken,
                                google_user_email: e.userData.email,
                                google_user_id: e.userData.id,
                                google_user_name: e.userData.name
                            },
                            r = new XMLHttpRequest;
                        r.withCredentials = !0, r.open("POST", t, !0), r.setRequestHeader("Content-Type", "application/json"), r.send(JSON.stringify(a)), r.onload = function() {
                            200 === r.status ? (swgDataLayer({
                                name: "swg",
                                context: "Deferred",
                                label: "Seamless Signin",
                                region: "swg-modal"
                            }), e.complete().then(function() {
                                window.location.reload(!0)
                            })) : (e.complete(), window.location = encodeURI(vi.env.AUTH_HOST + "/get-started/swg-link?redirect=" + window.location.href))
                        }
                    }).catch(function() {
                        return !!window.localStorage && (!window.localStorage.getItem("nyt-swgOptOut") && (window.localStorage.setItem("nyt-swgOptOut", (new Date).getTime()), !0))
                    }), !0
                }

                function loginWithGoogle() {
                    return "undefined" != typeof window && (-1 === document.cookie.indexOf("NYT-S") && (!0 !== checkSwgOptOut() && (!!window.SWG && ((window.SWG = window.SWG || []).push(function(e) {
                        return e.init(vi.env.SWG_PUBLICATION_ID), e.getEntitlements().then(function(t) {
                            if (void 0 === t || !t.raw) return !1;
                            window.SwGEntitlement = !0;
                            var n = {
                                entitlements_token: t.raw
                            };
                            return window.swgUserInfoXhrObject.withCredentials = !0, window.swgUserInfoXhrObject.open("POST", vi.env.AUTH_HOST + "/svc/account/auth/v1/login-swg-web", !0), window.swgUserInfoXhrObject.setRequestHeader("Content-Type", "application/json"), window.swgUserInfoXhrObject.send(JSON.stringify(n)), window.swgUserInfoXhrObject.onload = function() {
                                switch (window.swgUserInfoXhrObject.status) {
                                    case 200:
                                        return swgDataLayer({
                                            name: "swg",
                                            context: "Seamless",
                                            label: "Seamless Signin",
                                            region: "login"
                                        }), window.location.reload(!0), !0;
                                    case 412:
                                        return swgDeferredAccount(e, t);
                                    default:
                                        return !1
                                }
                            }, t
                        }).catch(function() {
                            return !1
                        }), !0
                    }), !0))))
                }
                var _f = function() {
                    if (window.swgUserInfoXhrObject.checkSwgResponse = !1, window.SwGEntitlement = !1, -1 === document.cookie.indexOf("NYT-S")) {
                        var e = document.createElement("script");
                        e.src = "https://news.google.com/swg/js/v1/swg.js", e.setAttribute("subscriptions-control", "manual"), e.setAttribute("async", !0), e.onload = function() {
                            loginWithGoogle()
                        }, document.getElementsByTagName("head")[0].appendChild(e)
                    }
                };;
                _f.apply(null, []);
            })();


var AdSlot4 = function() {
    "use strict";

    function _(n, i, t) {
        var o = document.getElementsByTagName("head")[0],
            e = document.createElement("script");
        i && (e.onload = i), t && (e.onerror = t), e.src = n, e.async = !0, o.appendChild(e)
    }

    function E(n) {
        var i = document.cookie.match(new RegExp("".concat(n, "=([^;]+)")));
        return i ? i[1] : ""
    }
    var a = [{
        id: "dfp-ad-top",
        sizes: {
            large: [
                [728, 90],
                [970, 90],
                [970, 250]
            ],
            medium: [
                [728, 90],
                [300, 250]
            ],
            small: [
                [300, 250],
                [300, 420]
            ]
        }
    }, {
        id: "dfp-ad-mid1",
        sizes: {
            large: [
                [728, 90],
                [970, 90],
                [970, 250]
            ],
            medium: [
                [728, 90],
                [300, 250]
            ],
            small: [
                [300, 250],
                [300, 420]
            ]
        }
    }, {
        id: "dfp-ad-bottom",
        sizes: {
            large: [
                [728, 90],
                [970, 90],
                [970, 250]
            ],
            medium: [
                [728, 90],
                [300, 250]
            ],
            small: [
                [300, 250],
                [300, 420]
            ]
        }
    }];
    return function() {
        var b = window.AdSlot4 || {};
        b.cmd = b.cmd || [];
        var z = !1;
        if (b.loadScripts) return b;
        var t, e = window.innerWidth;

        function d(o) {
            b.events.subscribe({
                name: "AdDefined",
                scope: "all",
                callback: function(n) {
                    var t, i = [-1];
                    n.sizes.forEach(function(n) {
                        n[0] < e && n[0] > i[0] && (i = [n])
                    }), i[0][1] && window.apstag.fetchBids({
                        slots: [{
                            slotID: n.id,
                            slotName: "".concat(n.id, "_").concat(o, "_web"),
                            sizes: (t = i[0][1], Array.isArray(t) ? [
                                [300, 250],
                                [728, 90],
                                [970, 90],
                                [970, 250]
                            ].filter(function(i) {
                                return t.some(function(n) {
                                    return n[0] === i[0] && n[1] === i[1]
                                })
                            }) : (console.warn("filterSizes() did not receive an array"), []))
                        }]
                    }, function() {
                        window.googletag.cmd.push(function() {
                            window.apstag.setDisplayBids()
                        })
                    })
                }
            })
        }

        function D(n, i) {
            "art, oak" !== n && "art,oak" !== n || (n = "art"), b.cmd.push(function() {
                var o, e;
                i ? window.apstag.fetchBids({
                    slots: (o = t, e = n, a.reduce(function(n, i) {
                        var t = {
                            slotID: i.id,
                            slotName: "".concat(i, "_").concat(e, "_web"),
                            sizes: i.sizes[o]
                        };
                        return n.push(t), n
                    }, []))
                }, function() {
                    window.googletag.cmd.push(function() {
                        window.apstag.setDisplayBids()
                    })
                }) : d(n)
            })
        }
        return e <= 600 ? t = "small" : e <= 740 ? t = "medium" : 740 < e && (t = "large"), b.loadScripts = function(n) {
            var i, t, o, e, d, a, s, c = n || {},
                r = c.loadMnet,
                u = void 0 === r || r,
                w = c.loadAmazon,
                l = void 0 === w || w,
                m = c.setFastFetch,
                p = void 0 !== m && m,
                f = c.loadBait,
                g = void 0 === f || f,
                v = c.section,
                h = void 0 === v ? "none" : v,
                y = c.pageViewId,
                B = void 0 === y ? "" : y,
                x = c.pageType,
                A = void 0 === x ? "" : x;
            z || (!("1" === E("nyt-gdpr") || (i = document.referrer || "", (t = /([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})/).test(i) || t.test(window.location.href)) || "s" === E("nyt-purr").substring(1, 2)) && (!u || window.advBidxc && window.advBidxc.isLoaded || (a = B, s = "8CU2553YN", window.innerWidth < 740 && (s = "8CULO58R6"), _("https://contextual.media.net/bidexchange.js?cid=".concat(s, "&dn=").concat("www.nytimes.com", "&https=1"), function() {
                window.advBidxc && window.advBidxc.isLoaded || console.warn("Media.net not loading properly")
            }, function() {
                b.cmd.push(function() {
                    b.events.publish({
                        name: "BidderError",
                        value: {
                            type: "Mnet"
                        }
                    })
                })
            }), window.advBidxc = window.advBidxc || {}, window.advBidxc.renderAd = function() {}, window.advBidxc.startTime = (new Date).getTime(), window.advBidxc.customerId = {
                mediaNetCID: s
            }, window.advBidxc.misc = {
                isGptDisabled: 1
            }, a && (window.advBidxc.misc.keywords = a)), l && !window.apstag && (o = h, e = A, d = p, function(t, o) {
                function n(n, i) {
                    o[t]._Q.push([n, i])
                }
                o[t] || (o[t] = {
                    init: function() {
                        n("i", arguments)
                    },
                    fetchBids: function() {
                        n("f", arguments)
                    },
                    setDisplayBids: function() {},
                    targetingKeys: function() {
                        return []
                    },
                    _Q: []
                })
            }("apstag", window), _("//c.amazon-adsystem.com/aax2/apstag.js", function() {
                window.apstag || console.warn("A9 not loading properly")
            }, function() {
                b.cmd.push(function() {
                    b.events.publish({
                        name: "BidderError",
                        value: {
                            type: "A9"
                        }
                    })
                })
            }), window.apstag.init({
                pubID: "3030",
                adServer: "googletag",
                params: {
                    si_section: o
                }
            }), D(e, d))), g && _("https://nytimes.com/ads/google/adsbygoogle.js", function() {}, function() {
                b.cmd.push(function() {
                    b.events.publish({
                        name: "AdEmpty",
                        value: {
                            type: "AdBlockOn"
                        }
                    })
                })
            }), z = !0)
        }, window.AdSlot4 = b
    }()
}();
AdSlot4.loadScripts({
    loadMnet: window.NYTD.Abra('medianet_toggle') !== '1_block',
    loadAmazon: window.NYTD.Abra('amazon_toggle') !== '1_block',
    section: 'world',
    pageType: 'int',
    pageViewId: window.NYTD.PageViewId.current,
});
(function() {
    var _f = function(e) {
        var r = performance.navigation && 1 === performance.navigation.type;

        function n() {
            return window.matchMedia("(max-width: 739px)").matches
        }

        function t(e) {
            var t, o, d, i, a, p, u = function() {
                var e = window.userXhrObject && "" !== window.userXhrObject.responseText && JSON.parse(window.userXhrObject.responseText).data || null,
                    r = null;
                return e && e.user && e.user.userInfo && (r = e.user.userInfo.demographics), r
            }();
            return u ? (o = e, i = (t = u) && t.emailSubscriptions, (a = t && t.bundleSubscriptions) && o && (o.sub = "reg", i && i.length && (o.em = i.toString().toLowerCase()), t.wat && (o.wat = t.wat.toLowerCase()), a && a.length && a[0].bundle && (d = a[0], o.sub = d.bundle.toLowerCase(), d.source && (o.subsrc = d.source.toLowerCase()), d.promotion && (o.subprm = d.promotion), d.in_grace && (o.grace = d.in_grace.toString()))), e = o) : e.sub = "anon", n() ? (e.prop = "mnyt", e.plat = "mweb", e.ver = "mvi") : (e.prop = "nyt", e.plat = "web", e.ver = "vi"), "/es/" === window.location.pathname.substring(0, 4) && (e.prop = "esnyt", e.edn = "es", n() && (e.prop = "mesnyt")), "hp" === e.typ && (document.referrer && (e.topref = document.referrer), r && (e.refresh = "manual")), e.abra_dfp = (p = document.documentElement.getAttribute("data-nyt-ab")) ? p.split(" ").reduce(function(e, r) {
                var n = r.split("="),
                    t = n[0].toLowerCase(),
                    o = n[1];
                return (t.indexOf("dfp") > -1 || t.indexOf("redbird") > -1) && e.push(t + "_" + o), e
            }, []) : "", e.page_view_id = window.NYTD.PageViewId && window.NYTD.PageViewId.current, e
        }

        function o(e) {
            var r = {};
            if (!e) return r;
            var n = {
                    "4_r60": {
                        fetch: 100,
                        render: 60
                    },
                    "5_r70": {
                        fetch: 100,
                        render: 70
                    },
                    "6_r80": {
                        fetch: 100,
                        render: 80
                    },
                    "7_r90": {
                        fetch: 100,
                        render: 90
                    },
                    "8_r100": {
                        fetch: 100,
                        render: 100
                    },
                    "9_f400_r75": {
                        fetch: 400,
                        render: 75
                    },
                    "10_f800_r75": {
                        fetch: 800,
                        render: 75
                    },
                    "11_f200_r50": {
                        fetch: 200,
                        render: 50
                    },
                    "0_control": {}
                },
                t = window.NYTD && window.NYTD.Abra && window.NYTD.Abra("dfp_lazy4");
            return t && n[t] && (r = n[t], window.NYTD.Abra.reportExposure("dfp_lazy4")), r
        }
        var d = e || {},
            i = d.adTargeting || {},
            a = d.adUnitPath || "/29390238/nyt/homepage",
            p = d.offset || 400,
            u = d.hideTopAd || n(),
            s = d.lockdownAds || !1,
            f = d.sizeMapping || {
                top: [
                    [970, ["fluid", [728, 90],
                        [970, 90],
                        [970, 250],
                        [1605, 300]
                    ]],
                    [728, ["fluid", [728, 90],
                        [1605, 300]
                    ]],
                    [0, ["fluid", [300, 250],
                        [300, 420]
                    ]]
                ],
                fp1: [
                    [0, [195, 250]]
                ],
                fp2: [
                    [0, [195, 250]]
                ],
                fp3: [
                    [0, [195, 250]]
                ],
                interstitial: [
                    [0, [
                        [1, 1],
                        [640, 480]
                    ]]
                ],
                mktg: [
                    [1020, [300, 250]],
                    [0, []]
                ],
                pencil: [
                    [728, [
                            [336, 46]
                        ],
                        [0, []]
                    ]
                ],
                pp_edpick: [
                    [0, ["fluid"]]
                ],
                pp_morein: [
                    [0, ["fluid"],
                        [210, 218]
                    ]
                ],
                ribbon: [
                    [0, ["fluid"]]
                ],
                sponsor: [
                    [765, [150, 50]],
                    [0, [320, 25]]
                ],
                supplemental: [
                    [1020, [
                        [300, 250],
                        [300, 600]
                    ]],
                    [0, []]
                ],
                chat: [
                    [0, ["fluid", [300, 250],
                        [300, 420]
                    ]]
                ],
                column: [
                    [0, ["fluid", [300, 250],
                        [300, 420]
                    ]]
                ],
                default: [
                    [970, ["fluid", [728, 90],
                        [970, 90],
                        [970, 250],
                        [1605, 300]
                    ]],
                    [728, ["fluid", [728, 90],
                        [300, 250],
                        [1605, 300]
                    ]],
                    [0, ["fluid", [300, 250],
                        [300, 420]
                    ]]
                ]
            },
            w = d.dfpToggleName || "dfp_home_toggle",
            l = d.lazyApi || !1;
        window.AdSlot4 = window.AdSlot4 || {}, window.AdSlot4.cmd = window.AdSlot4.cmd || [], window.AdSlot4.cmd.push(function() {
            window.AdSlot4.init({
                adTargeting: t(i),
                adUnitPath: a,
                sizeMapping: f,
                offset: p,
                haltDFP: "1_block" === window.NYTD.Abra(w),
                hideTopAd: u,
                lockdownAds: s,
                lazyApi: o(l)
            }), window.NYTD.Abra.reportExposure("dfp_adslot4v2")
        })
    };;
    _f.apply(null, [{
        "adTargeting": {
            "als_test": "1573574990274",
            "prop": "nyt",
            "plat": "web",
            "edn": "us",
            "brandsensitive": "false",
            "per": "assadbasharal",
            "org": "islamicstateiniraqandsyriaisis",
            "geo": "syria,turkey,russia",
            "des": "kurds",
            "auth": "allisonmccann,anjalisinghvi,jeremywhite",
            "coll": "worldnews,middleeast,atwar",
            "artlen": "short",
            "ledemedsz": "none",
            "template": "interactive",
            "typ": "int",
            "section": "world",
            "si_section": "world",
            "id": "100000006796105",
            "pt": "nt1,nt12,nt13,nt14,nt15,nt2,nt3,nt6,nt8,nt9,pt17",
            "gscat": "neg_ibmtest,neg_ibm,neg_bp,neg_mastercard,neg_hearts,neg_orep,neg_google,neg_cathay,neg_mktg_safe_q4_2019,neg_msft,gs_politics,gv_military,neg_chanel,gs_politics_misc,neg_citi,neg_citi_aa,gv_terrorism,gv_death_injury"
        },
        "adUnitPath": "/29390238/nyt/world/middleeast"
    }]);
})();
    