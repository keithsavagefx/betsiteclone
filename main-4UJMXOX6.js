import {b as dt, c as ut, d as Qt, e as Zt, f as gt, g as te, h as mt, j as ht, k as bt, l as ee, m as ft, o as ne, p as xt} from "./chunk-V5YE4NHB.js";
import {a as ie, b as _t} from "./chunk-NYDVTRX6.js";
import {$ as u, A as Dt, Aa as Lt, Ba as K, Ca as jt, Ea as $t, F as Ot, Fa as pt, G as j, Ga as qt, H as yt, Ha as Y, I as l, Ia as Kt, Ka as Yt, M as $, Na as Xt, Oa as W, Pa as Jt, Q as P, Qa as oe, Sa as V, T as kt, U as h, V as o, W as a, X as A, Y as Vt, Z as Rt, _ as v, a as _, aa as p, b as C, ba as Gt, ca as lt, da as ct, fa as St, ga as x, h as vt, ha as s, i as Et, ia as y, ja as M, k as Bt, ka as Ft, l as zt, la as nt, ma as it, na as ot, o as st, pa as O, qa as q, r as E, ra as S, s as g, sa as Wt, t as m, u as G, v as F, va as B, wa as Ut, y as Nt, z as b, za as Ht} from "./chunk-G5P543E2.js";
var Ct = class c {
    unlocked = !1;
    enabled = localStorage.getItem("aviator_sound_enabled") !== "false";
    isTabVisible = typeof document < "u" ? !document.hidden : !0;
    bgAudio = null;
    crashAudio = null;
    isBgPlaying = !1;
    constructor() {
        this.initAudioElements(),
        this.initVisibilityListeners()
    }
    initAudioElements() {
        typeof window > "u" || (this.bgAudio = new Audio("/assets/audio/flying.mp3.mpeg"),
        this.bgAudio.preload = "auto",
        this.bgAudio.loop = !0,
        this.bgAudio.volume = .45,
        this.bgAudio.setAttribute("playsinline", "true"),
        this.bgAudio.setAttribute("webkit-playsinline", "true"),
        this.bgAudio.onerror = () => {
            this.bgAudio && this.bgAudio.src.includes(".mpeg") && (this.bgAudio.src = "/assets/audio/flying.mp3",
            this.bgAudio.load())
        }
        ,
        this.crashAudio = new Audio("/assets/audio/flew-away.mp3.mpeg"),
        this.crashAudio.preload = "auto",
        this.crashAudio.loop = !1,
        this.crashAudio.volume = .85,
        this.crashAudio.setAttribute("playsinline", "true"),
        this.crashAudio.setAttribute("webkit-playsinline", "true"),
        this.crashAudio.onerror = () => {
            this.crashAudio && this.crashAudio.src.includes(".mpeg") && (this.crashAudio.src = "/assets/audio/flew-away.mp3",
            this.crashAudio.load())
        }
        ,
        document.addEventListener("click", () => this.unlock(), {
            once: !1
        }),
        document.addEventListener("touchstart", () => this.unlock(), {
            once: !1
        }))
    }
    initVisibilityListeners() {
        typeof document > "u" || (document.addEventListener("visibilitychange", () => {
            this.isTabVisible = !document.hidden,
            document.hidden && this.stopAllAudio()
        }
        ),
        typeof window < "u" && window.addEventListener("pagehide", () => {
            this.isTabVisible = !1,
            this.stopAllAudio()
        }
        ))
    }
    unlock() {
        this.unlocked || (this.unlocked = !0,
        this.bgAudio && this.bgAudio.load(),
        this.crashAudio && this.crashAudio.load())
    }
    playBackground() {
        !this.enabled || !this.isTabVisible || typeof document < "u" && document.hidden || this.isBgPlaying && this.bgAudio && !this.bgAudio.paused || (this.stopCrash(),
        this.bgAudio && (this.bgAudio.currentTime = 0,
        this.isBgPlaying = !0,
        this.bgAudio.play().catch( () => {
            this.isBgPlaying = !1
        }
        )))
    }
    stopBackground() {
        if (this.isBgPlaying = !1,
        this.bgAudio)
            try {
                this.bgAudio.pause(),
                this.bgAudio.currentTime = 0
            } catch {}
    }
    playCrash() {
        if (this.stopBackground(),
        !(!this.enabled || !this.isTabVisible || typeof document < "u" && document.hidden) && this.crashAudio)
            try {
                this.crashAudio.currentTime = 0,
                this.crashAudio.play().catch( () => {}
                )
            } catch {}
    }
    stopCrash() {
        if (this.crashAudio)
            try {
                this.crashAudio.pause(),
                this.crashAudio.currentTime = 0
            } catch {}
    }
    stopAllAudio() {
        this.stopBackground(),
        this.stopCrash()
    }
    playWin() {}
    updateEnginePitch(n) {}
    isEnabled() {
        return this.enabled
    }
    setEnabled(n) {
        this.enabled = n,
        localStorage.setItem("aviator_sound_enabled", String(n)),
        n || this.stopAllAudio()
    }
    static \u0275fac = function(t) {
        return new (t || c)
    }
    ;
    static \u0275prov = st({
        token: c,
        factory: c.\u0275fac,
        providedIn: "root"
    })
}
;
var be = ["flightCanvas"]
  , fe = ["canvasContainer"]
  , xe = ["chatScroll"];
function _e(c, n) {
    c & 1 && (o(0, "div", 92)(1, "div", 93)(2, "p", 94),
    s(3, "POWERED BY"),
    a(),
    o(4, "div", 95)(5, "div", 96),
    G(),
    o(6, "svg", 97),
    A(7, "circle", 98)(8, "circle", 99)(9, "circle", 100),
    a()(),
    F(),
    o(10, "span", 101),
    s(11, "SPRIBE"),
    a()(),
    o(12, "p", 102),
    s(13, "INSIGHTFUL ENTERTAINMENT"),
    a(),
    o(14, "div", 103),
    A(15, "span", 104)(16, "span", 104)(17, "span", 104),
    a()()())
}
function Ce(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 118),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.navigateToAdmin())
        }),
        o(1, "span", 114),
        s(2, "\u26A1"),
        a(),
        s(3),
        a()
    }
    if (c & 2) {
        let t, e = p(2);
        l(3),
        M(" ", ((t = e.currentUser()) == null ? null : t.role) === "superadmin" ? "Superadmin Dashboard" : "Admin Dashboard", " ")
    }
}
function we(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 105)(1, "div", 106)(2, "span", 107),
        s(3),
        a(),
        o(4, "div", 108)(5, "span", 109),
        s(6),
        a(),
        o(7, "span", 110),
        s(8),
        O(9, "number"),
        a()()(),
        A(10, "div", 111),
        P(11, Ce, 4, 1, "button", 112),
        o(12, "button", 113),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.openDepositFromProfile())
        }),
        o(13, "span", 114),
        s(14, "\u{1F4B3}"),
        a(),
        s(15, " Deposit "),
        a(),
        o(16, "button", 113),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.openWithdrawFromProfile())
        }),
        o(17, "span", 114),
        s(18, "\u{1F4B8}"),
        a(),
        s(19, " Withdraw "),
        a(),
        o(20, "button", 113),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.openHistoryModal())
        }),
        o(21, "span", 114),
        s(22, "\u{1F4DC}"),
        a(),
        s(23, " Bet History "),
        a(),
        o(24, "button", 115),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.claimWelcomeBonus())
        }),
        o(25, "span", 114),
        s(26, "\u{1F381}"),
        a(),
        o(27, "span"),
        s(28),
        a()(),
        o(29, "button", 116),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.toggleSound())
        }),
        o(30, "span", 114),
        s(31),
        a(),
        o(32, "span"),
        s(33),
        a()(),
        A(34, "div", 111),
        o(35, "button", 117),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.logout())
        }),
        o(36, "span", 114),
        s(37, "\u{1F6AA}"),
        a(),
        s(38, " Logout "),
        a()()
    }
    if (c & 2) {
        let t, e, i, r, d, f, w = p();
        l(3),
        y(((t = w.currentUser()) == null || t.username == null || (t = t.username.charAt(0)) == null ? null : t.toUpperCase()) || "P"),
        l(3),
        y(((e = w.currentUser()) == null ? null : e.username) || "Player"),
        l(2),
        M("", S(9, 12, w.userBalance(), "1.2-2"), " KES"),
        l(3),
        h("ngIf", ((i = w.currentUser()) == null ? null : i.role) === "admin" || ((i = w.currentUser()) == null ? null : i.role) === "superadmin"),
        l(13),
        x("claimed", (r = w.currentUser()) == null ? null : r.bonus_claimed),
        h("disabled", ((d = w.currentUser()) == null ? null : d.bonus_claimed) || w.isClaimingBonus()),
        l(4),
        y((f = w.currentUser()) != null && f.bonus_claimed ? "1,999 KES bonus claimed" : w.isClaimingBonus() ? "Claiming bonus..." : "Claim 1,999 KES bonus"),
        l(),
        x("muted", !w.soundEnabled()),
        l(2),
        y(w.soundEnabled() ? "\u{1F50A}" : "\u{1F507}"),
        l(2),
        M("Sound ", w.soundEnabled() ? "on" : "off")
    }
}
function Me(c, n) {
    if (c & 1 && A(0, "img", 128),
    c & 2) {
        let t = p().$implicit;
        h("src", t.avatarIcon, Ot)("alt", t.player)
    }
}
function Pe(c, n) {
    if (c & 1 && (o(0, "span", 129),
    s(1),
    a()),
    c & 2) {
        let t = p().$implicit;
        l(),
        y(t.avatarIcon)
    }
}
function ve(c, n) {
    if (c & 1 && (o(0, "span", 130),
    s(1),
    O(2, "number"),
    a()),
    c & 2) {
        let t = p().$implicit;
        x("mult-blue", t.multiplier < 2)("mult-purple", t.multiplier >= 2),
        l(),
        M(" ", S(2, 5, t.multiplier, "1.2-2"), "x ")
    }
}
function Oe(c, n) {
    if (c & 1 && (o(0, "span"),
    s(1),
    O(2, "number"),
    a()),
    c & 2) {
        let t = p().$implicit;
        l(),
        y(S(2, 1, t.win, "1.2-2"))
    }
}
function ye(c, n) {
    if (c & 1 && (o(0, "div", 119)(1, "span", 120)(2, "span", 121),
    P(3, Me, 1, 2, "img", 122)(4, Pe, 2, 1, "span", 123),
    a(),
    o(5, "span", 124),
    s(6),
    a()(),
    o(7, "span", 38),
    s(8),
    O(9, "number"),
    a(),
    o(10, "span", 39),
    P(11, ve, 3, 8, "span", 125),
    a(),
    o(12, "span", 126),
    P(13, Oe, 3, 4, "span", 127),
    a()()),
    c & 2) {
        let t = n.$implicit;
        x("cashed-out", t.cashedOut)("my-bet", t.isCurrentUser),
        l(3),
        h("ngIf", t.avatarIcon.includes(".svg") || t.avatarIcon.includes(".png") || t.avatarIcon.includes("/")),
        l(),
        h("ngIf", !t.avatarIcon.includes(".svg") && !t.avatarIcon.includes(".png") && !t.avatarIcon.includes("/")),
        l(2),
        y(t.player),
        l(2),
        y(S(9, 10, t.bet, "1.2-2")),
        l(3),
        h("ngIf", t.cashedOut && t.multiplier),
        l(2),
        h("ngIf", t.cashedOut && t.win > 0)
    }
}
function ke(c, n) {
    if (c & 1 && (o(0, "div", 131),
    s(1),
    O(2, "number"),
    a()),
    c & 2) {
        let t = n.$implicit;
        x("low", t < 2)("mid", t >= 2 && t < 10)("high", t >= 10),
        l(),
        M(" ", S(2, 7, t, "1.2-2"), "x ")
    }
}
function Se(c, n) {
    if (c & 1 && (o(0, "div", 132)(1, "div", 133)(2, "div", 134)(3, "span", 135),
    s(4, "UFC"),
    a(),
    o(5, "span", 136),
    s(6, "|"),
    a(),
    o(7, "span", 137),
    s(8, "Aviator"),
    a()(),
    o(9, "div", 138),
    s(10, "OFFICIAL PARTNERS"),
    a(),
    o(11, "div", 139),
    A(12, "div", 140),
    a(),
    o(13, "div", 141)(14, "span", 142),
    s(15, "\u{1F3AE} SPRIBE"),
    a(),
    o(16, "span", 143),
    s(17, "Official Game \u2714"),
    a()()()()),
    c & 2) {
        let t = p();
        l(12),
        St("width", t.countdownProgress(), "%")
    }
}
function Ae(c, n) {
    if (c & 1 && (o(0, "div", 144)(1, "h1", 145),
    s(2),
    O(3, "number"),
    a()()),
    c & 2) {
        let t = p();
        l(),
        x("mult-blue", t.animatedMultiplier() < 2)("mult-purple", t.animatedMultiplier() >= 2 && t.animatedMultiplier() < 10)("mult-pink", t.animatedMultiplier() >= 10),
        l(),
        M(" ", S(3, 7, t.animatedMultiplier(), "1.2-2"), "x ")
    }
}
function Te(c, n) {
    if (c & 1 && (o(0, "div", 146)(1, "h2", 147),
    s(2, "FLEW AWAY!"),
    a(),
    o(3, "h1", 148),
    s(4),
    O(5, "number"),
    a()()),
    c & 2) {
        let t = p();
        l(4),
        M("", S(5, 1, t.finalCrashMultiplier(), "1.2-2"), "x")
    }
}
function Ie(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "article", 151)(1, "div", 152)(2, "span"),
        s(3, "You have cashed out!"),
        a(),
        o(4, "strong"),
        s(5),
        O(6, "number"),
        a()(),
        o(7, "div", 153)(8, "span"),
        s(9, "Win KES"),
        a(),
        o(10, "strong"),
        s(11),
        O(12, "number"),
        a()(),
        o(13, "button", 154),
        u("click", function() {
            let i = g(t).$implicit
              , r = p(2);
            return m(r.dismissCashoutNotification(i.id))
        }),
        s(14, "\xD7"),
        a()()
    }
    if (c & 2) {
        let t = n.$implicit;
        l(5),
        M("", S(6, 2, t.multiplier, "1.2-2"), "x"),
        l(6),
        y(S(12, 5, t.payout, "1.2-2"))
    }
}
function Ee(c, n) {
    if (c & 1 && (o(0, "div", 149),
    P(1, Ie, 15, 8, "article", 150),
    a()),
    c & 2) {
        let t = p();
        l(),
        h("ngForOf", t.cashoutNotifications())
    }
}
function Be(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 155),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.placeBet(1))
        }),
        o(1, "span", 156),
        s(2),
        a(),
        o(3, "span", 157),
        s(4),
        O(5, "number"),
        a()()
    }
    if (c & 2) {
        let t = p();
        h("disabled", t.panel1().isPending),
        l(2),
        y(t.panel1().isPending ? "Placing..." : "Bet"),
        l(2),
        M("", S(5, 3, t.panel1().amount, "1.2-2"), " KES")
    }
}
function ze(c, n) {
    if (c & 1 && (o(0, "button", 158)(1, "span", 156),
    s(2, "Waiting..."),
    a(),
    o(3, "span", 157),
    s(4),
    O(5, "number"),
    a()()),
    c & 2) {
        let t = p();
        l(4),
        M("", S(5, 1, t.panel1().placedAmount, "1.2-2"), " KES")
    }
}
function Ne(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 159),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.cancelQueuedBet(1))
        }),
        o(1, "span", 156),
        s(2, "Cancel"),
        a(),
        o(3, "span", 157),
        s(4, "Waiting for next round"),
        a()()
    }
}
function De(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 160),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.cashOut(1))
        }),
        o(1, "span", 156),
        s(2),
        a(),
        o(3, "span", 157),
        s(4),
        O(5, "number"),
        a()()
    }
    if (c & 2) {
        let t = p();
        h("disabled", t.panel1().isPending),
        l(2),
        y(t.panel1().isPending ? "Cashing..." : "Cash Out"),
        l(2),
        M("", S(5, 3, t.potentialPayout1(), "1.2-2"), " KES")
    }
}
function Ve(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 161),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.queueBet(1))
        }),
        o(1, "span", 156),
        s(2, "Bet"),
        a(),
        o(3, "span", 157),
        s(4),
        O(5, "number"),
        a()()
    }
    if (c & 2) {
        let t = p();
        l(4),
        M("", S(5, 1, t.panel1().amount, "1.2-2"), " KES")
    }
}
function Re(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 161),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.queueBet(1))
        }),
        o(1, "span", 156),
        s(2, "Bet"),
        a(),
        o(3, "span", 157),
        s(4),
        O(5, "number"),
        a()()
    }
    if (c & 2) {
        let t = p();
        l(4),
        M("", S(5, 1, t.panel1().amount, "1.2-2"), " KES")
    }
}
function Ge(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 162)(1, "div", 163)(2, "span", 164),
        s(3, "Auto bet"),
        a(),
        o(4, "button", 165),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.toggleAutoBet(1))
        }),
        A(5, "span", 166),
        a()(),
        o(6, "div", 167)(7, "span", 164),
        s(8, "Auto Cash Out"),
        a(),
        o(9, "button", 168),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.toggleAutoCashout(1))
        }),
        A(10, "span", 166),
        a(),
        o(11, "div", 169)(12, "input", 170),
        u("ngModelChange", function(i) {
            g(t);
            let r = p();
            return m(r.setAutoCashout(1, i))
        }),
        a(),
        o(13, "span", 171),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.resetAutoCashout(1))
        }),
        s(14, "\u2715"),
        a()()()()
    }
    if (c & 2) {
        let t = p();
        l(4),
        x("active", t.panel1().autoBetEnabled),
        l(5),
        x("active", t.panel1().autoCashoutEnabled),
        l(2),
        x("active", t.panel1().autoCashoutEnabled),
        l(),
        h("ngModel", t.panel1().autoTarget)
    }
}
function Fe(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 155),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.placeBet(2))
        }),
        o(1, "span", 156),
        s(2),
        a(),
        o(3, "span", 157),
        s(4),
        O(5, "number"),
        a()()
    }
    if (c & 2) {
        let t = p(2);
        h("disabled", t.panel2().isPending),
        l(2),
        y(t.panel2().isPending ? "Placing..." : "Bet"),
        l(2),
        M("", S(5, 3, t.panel2().amount, "1.2-2"), " KES")
    }
}
function We(c, n) {
    if (c & 1 && (o(0, "button", 158)(1, "span", 156),
    s(2, "Waiting..."),
    a(),
    o(3, "span", 157),
    s(4),
    O(5, "number"),
    a()()),
    c & 2) {
        let t = p(2);
        l(4),
        M("", S(5, 1, t.panel2().placedAmount, "1.2-2"), " KES")
    }
}
function Ue(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 159),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.cancelQueuedBet(2))
        }),
        o(1, "span", 156),
        s(2, "Cancel"),
        a(),
        o(3, "span", 157),
        s(4, "Waiting for next round"),
        a()()
    }
}
function He(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 160),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.cashOut(2))
        }),
        o(1, "span", 156),
        s(2),
        a(),
        o(3, "span", 157),
        s(4),
        O(5, "number"),
        a()()
    }
    if (c & 2) {
        let t = p(2);
        h("disabled", t.panel2().isPending),
        l(2),
        y(t.panel2().isPending ? "Cashing..." : "Cash Out"),
        l(2),
        M("", S(5, 3, t.potentialPayout2(), "1.2-2"), " KES")
    }
}
function Le(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 161),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.queueBet(2))
        }),
        o(1, "span", 156),
        s(2, "Bet"),
        a(),
        o(3, "span", 157),
        s(4),
        O(5, "number"),
        a()()
    }
    if (c & 2) {
        let t = p(2);
        l(4),
        M("", S(5, 1, t.panel2().amount, "1.2-2"), " KES")
    }
}
function je(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 161),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.queueBet(2))
        }),
        o(1, "span", 156),
        s(2, "Bet"),
        a(),
        o(3, "span", 157),
        s(4),
        O(5, "number"),
        a()()
    }
    if (c & 2) {
        let t = p(2);
        l(4),
        M("", S(5, 1, t.panel2().amount, "1.2-2"), " KES")
    }
}
function $e(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 162)(1, "div", 163)(2, "span", 164),
        s(3, "Auto bet"),
        a(),
        o(4, "button", 165),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.toggleAutoBet(2))
        }),
        A(5, "span", 166),
        a()(),
        o(6, "div", 167)(7, "span", 164),
        s(8, "Auto Cash Out"),
        a(),
        o(9, "button", 168),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.toggleAutoCashout(2))
        }),
        A(10, "span", 166),
        a(),
        o(11, "div", 169)(12, "input", 170),
        u("ngModelChange", function(i) {
            g(t);
            let r = p(2);
            return m(r.setAutoCashout(2, i))
        }),
        a(),
        o(13, "span", 171),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.resetAutoCashout(2))
        }),
        s(14, "\u2715"),
        a()()()()
    }
    if (c & 2) {
        let t = p(2);
        l(4),
        x("active", t.panel2().autoBetEnabled),
        l(5),
        x("active", t.panel2().autoCashoutEnabled),
        l(2),
        x("active", t.panel2().autoCashoutEnabled),
        l(),
        h("ngModel", t.panel2().autoTarget)
    }
}
function qe(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "button", 67),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.setPanelMode(2, "bet"))
        }),
        s(4, "Bet"),
        a(),
        o(5, "button", 67),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.setPanelMode(2, "auto"))
        }),
        s(6, "Auto"),
        a()(),
        o(7, "button", 172),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.togglePanel2())
        }),
        o(8, "span", 173),
        s(9, "\u2212"),
        a()()(),
        o(10, "div", 68)(11, "div", 69)(12, "div", 70)(13, "button", 71),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.adjustPanelAmount(2, -10))
        }),
        s(14, "-"),
        a(),
        o(15, "div", 72)(16, "input", 73),
        O(17, "number"),
        u("input", function(i) {
            g(t);
            let r = p();
            return m(r.onAmountInput(2, i))
        })("blur", function(i) {
            g(t);
            let r = p();
            return m(r.onAmountBlur(2, i))
        }),
        a()(),
        o(18, "button", 74),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.adjustPanelAmount(2, 10))
        }),
        s(19, "+"),
        a()(),
        o(20, "div", 75)(21, "button", 76),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.selectPresetAmount(2, 100))
        }),
        s(22, "100"),
        a(),
        o(23, "button", 76),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.selectPresetAmount(2, 250))
        }),
        s(24, "250"),
        a(),
        o(25, "button", 76),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.selectPresetAmount(2, 1e3))
        }),
        s(26, "1,000"),
        a(),
        o(27, "button", 76),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.selectPresetAmount(2, 25e3))
        }),
        s(28, "25,000"),
        a()()(),
        o(29, "div", 77),
        P(30, Fe, 6, 6, "button", 78)(31, We, 6, 4, "button", 79)(32, Ue, 5, 0, "button", 80)(33, He, 6, 6, "button", 81)(34, Le, 6, 4, "button", 82)(35, je, 6, 4, "button", 82),
        a()(),
        P(36, $e, 15, 7, "div", 83),
        a()
    }
    if (c & 2) {
        let t = p();
        x("panel-active", t.panel2().hasActiveBet)("auto-mode", t.panel2().mode === "auto"),
        l(2),
        x("auto-mode", t.panel2().mode === "auto"),
        l(),
        x("active", t.panel2().mode === "bet"),
        l(2),
        x("active", t.panel2().mode === "auto"),
        l(8),
        h("disabled", t.panel2().hasActiveBet || t.panel2().queuedAmount > 0 || t.panel2().isPending),
        l(3),
        h("value", S(17, 33, t.panel2().amount, "1.2-2"))("disabled", t.panel2().hasActiveBet || t.panel2().queuedAmount > 0 || t.panel2().isPending),
        l(2),
        h("disabled", t.panel2().hasActiveBet || t.panel2().queuedAmount > 0 || t.panel2().isPending),
        l(3),
        x("active", t.panel2().selectedPreset === 100),
        h("disabled", t.panel2().hasActiveBet || t.panel2().queuedAmount > 0 || t.panel2().isPending),
        l(2),
        x("active", t.panel2().selectedPreset === 250),
        h("disabled", t.panel2().hasActiveBet || t.panel2().queuedAmount > 0 || t.panel2().isPending),
        l(2),
        x("active", t.panel2().selectedPreset === 1e3),
        h("disabled", t.panel2().hasActiveBet || t.panel2().queuedAmount > 0 || t.panel2().isPending),
        l(2),
        x("active", t.panel2().selectedPreset === 25e3),
        h("disabled", t.panel2().hasActiveBet || t.panel2().queuedAmount > 0 || t.panel2().isPending),
        l(3),
        h("ngIf", t.gameState() === "WAITING" && !t.panel2().hasActiveBet && !t.panel2().queuedAmount),
        l(),
        h("ngIf", t.gameState() === "WAITING" && t.panel2().hasActiveBet),
        l(),
        h("ngIf", t.panel2().queuedAmount > 0),
        l(),
        h("ngIf", t.gameState() === "RUNNING" && t.panel2().hasActiveBet && !t.panel2().hasCashedOut),
        l(),
        h("ngIf", (t.gameState() === "RUNNING" || t.gameState() === "CRASHED") && t.panel2().hasCashedOut && !t.panel2().queuedAmount),
        l(),
        h("ngIf", (t.gameState() === "RUNNING" || t.gameState() === "CRASHED") && !t.panel2().hasActiveBet && !t.panel2().hasCashedOut && !t.panel2().queuedAmount),
        l(),
        h("ngIf", t.panel2().mode === "auto")
    }
}
function Ke(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 174),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.togglePanel2())
        }),
        o(1, "span"),
        s(2, "+"),
        a()()
    }
}
function Ye(c, n) {
    c & 1 && (o(0, "div", 197)(1, "span", 198),
    s(2, "Chat access is restricted for players with"),
    A(3, "br"),
    s(4, "balance below 1,000 KES"),
    a()())
}
function Xe(c, n) {
    if (c & 1 && (o(0, "span", 209),
    s(1),
    a()),
    c & 2) {
        let t = p(2).$implicit;
        l(),
        y(t.likes)
    }
}
function Je(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 199),
        A(1, "img", 200),
        o(2, "div", 201)(3, "div", 202)(4, "span", 203),
        s(5),
        a(),
        o(6, "span", 204),
        s(7),
        a()(),
        o(8, "div", 205),
        s(9),
        a()(),
        o(10, "button", 206),
        u("click", function() {
            g(t);
            let i = p().$implicit
              , r = p(2);
            return m(r.toggleLikeMessage(i))
        }),
        o(11, "span", 207),
        s(12, "\u2665"),
        a(),
        P(13, Xe, 2, 1, "span", 208),
        a()()
    }
    if (c & 2) {
        let t = p().$implicit
          , e = p(2);
        x("own", e.isOwnChatMessage(t)),
        l(),
        h("src", t.avatar || "assets/avatars/avatar-pilot.svg", Ot)("alt", t.username),
        l(3),
        St("color", e.isOwnChatMessage(t) ? "#4ade80" : e.getChatUsernameColor(t.username)),
        l(),
        y(t.username),
        l(2),
        y(e.formatChatTime(t.timestamp)),
        l(2),
        y(t.text),
        l(4),
        h("ngIf", (t.likes || 0) > 0)
    }
}
function Qe(c, n) {
    if (c & 1 && (Vt(0),
    P(1, Ye, 5, 0, "div", 195)(2, Je, 14, 10, "div", 196),
    Rt()),
    c & 2) {
        let t = n.$implicit;
        l(),
        h("ngIf", t.isRestrictionNotice),
        l(),
        h("ngIf", !t.isRestrictionNotice)
    }
}
function Ze(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "button", 210),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.onNewMessagesPillClick())
        }),
        o(1, "span"),
        s(2, "New messages"),
        a(),
        o(3, "span", 211),
        s(4, "\u25BC"),
        a()()
    }
}
function tn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "aside", 175)(1, "div", 176)(2, "button", 177),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.closeChat())
        }),
        o(3, "span", 178),
        s(4, "\u2039"),
        a(),
        s(5, " Go Back "),
        a(),
        o(6, "button", 179),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.toggleFullscreen())
        }),
        s(7, " View Fullscreen "),
        o(8, "span", 180),
        s(9, "\u26F6"),
        a()()(),
        o(10, "div", 181)(11, "div", 182)(12, "button", 183),
        s(13, "i"),
        a(),
        o(14, "div", 184),
        s(15, "Online: "),
        o(16, "strong"),
        s(17),
        O(18, "number"),
        a()(),
        o(19, "button", 185),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.closeChat())
        }),
        s(20, "\u2715"),
        a()()(),
        o(21, "div", 186, 2),
        u("scroll", function() {
            g(t);
            let i = p();
            return m(i.onChatScroll())
        })("pointerdown", function() {
            g(t);
            let i = p();
            return m(i.onChatPointerDown())
        })("pointerup", function() {
            g(t);
            let i = p();
            return m(i.onChatPointerUp())
        })("pointercancel", function() {
            g(t);
            let i = p();
            return m(i.onChatPointerUp())
        })("mouseleave", function() {
            g(t);
            let i = p();
            return m(i.onChatPointerUp())
        })("touchstart", function() {
            g(t);
            let i = p();
            return m(i.onChatTouchStart())
        })("touchend", function() {
            g(t);
            let i = p();
            return m(i.onChatTouchEnd())
        }),
        P(23, Qe, 3, 2, "ng-container", 187),
        a(),
        P(24, Ze, 5, 0, "button", 188),
        o(25, "form", 189),
        u("ngSubmit", function() {
            g(t);
            let i = p();
            return m(i.sendChatMessage())
        }),
        o(26, "input", 190),
        u("ngModelChange", function(i) {
            g(t);
            let r = p();
            return m(r.chatDraft.set(i))
        }),
        a(),
        o(27, "div", 191)(28, "button", 192),
        s(29, "\u263A"),
        a(),
        o(30, "span", 193),
        s(31),
        a(),
        o(32, "button", 194),
        s(33, "\u27A4"),
        a()()()()
    }
    if (c & 2) {
        let t = p();
        l(17),
        y(S(18, 8, t.chatOnlineCount(), "1.0-0")),
        l(6),
        h("ngForOf", t.chatMessages())("ngForTrackBy", t.trackChatMessage),
        l(),
        h("ngIf", t.showNewMessagesPill()),
        l(2),
        h("ngModel", t.chatDraft())("disabled", !t.isConnected()),
        l(5),
        M("AA ", 220 - t.chatDraft().length),
        l(),
        h("disabled", !t.isConnected() || !t.chatDraft().trim())
    }
}
function en(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 212)(1, "div", 213),
        s(2),
        a(),
        o(3, "div", 214)(4, "span", 215),
        s(5, "BETZION REWARDS"),
        a(),
        o(6, "strong"),
        s(7),
        a(),
        o(8, "p"),
        s(9),
        a()(),
        o(10, "button", 216),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.dismissBonusNotification())
        }),
        s(11, "\xD7"),
        a()()
    }
    if (c & 2) {
        let t, e, i, r, d = p();
        x("info", ((t = d.bonusNotif()) == null ? null : t.type) === "info"),
        l(2),
        y(((e = d.bonusNotif()) == null ? null : e.type) === "success" ? "\u{1F389}" : "\u{1F4A1}"),
        l(5),
        y((i = d.bonusNotif()) == null ? null : i.title),
        l(2),
        y((r = d.bonusNotif()) == null ? null : r.message)
    }
}
function nn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 217)(1, "span"),
        s(2),
        a(),
        o(3, "button", 218),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.toastMessage.set(null))
        }),
        s(4, "\u2715"),
        a()()
    }
    if (c & 2) {
        let t = p();
        x("error", t.isToastError()),
        l(2),
        y(t.toastMessage())
    }
}
function on(c, n) {
    if (c & 1 && (o(0, "div", 246),
    s(1),
    a()),
    c & 2) {
        let t = p(3);
        x("failed", t.mpesaStatus() === "failed")("success", t.mpesaStatus() === "success"),
        l(),
        M(" ", t.mpesaStatusMsg(), " ")
    }
}
function an(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 229)(1, "h2", 230),
        s(2, "Deposit"),
        a(),
        o(3, "p", 231),
        s(4, "Send money into your account"),
        a(),
        o(5, "div", 232)(6, "button", 233),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.addDepositAmount(1e3))
        }),
        s(7, "+1,000"),
        a(),
        o(8, "button", 233),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.addDepositAmount(2e3))
        }),
        s(9, "+2,000"),
        a(),
        o(10, "button", 233),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.addDepositAmount(5e3))
        }),
        s(11, "+5,000"),
        a(),
        o(12, "button", 233),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.addDepositAmount(1e4))
        }),
        s(13, "+10,000"),
        a()(),
        o(14, "div", 234)(15, "label", 235),
        s(16, "Phone Number"),
        a(),
        o(17, "div", 236)(18, "select", 237)(19, "option", 238),
        s(20, "+254"),
        a()(),
        o(21, "input", 239),
        u("ngModelChange", function(i) {
            g(t);
            let r = p(2);
            return m(r.mpesaPhone.set(i))
        }),
        a()()(),
        o(22, "div", 234)(23, "label", 235),
        s(24, "Amount"),
        a(),
        o(25, "input", 240),
        u("ngModelChange", function(i) {
            g(t);
            let r = p(2);
            return m(r.depositVal.set(i))
        }),
        a(),
        o(26, "div", 241),
        s(27),
        O(28, "number"),
        a()(),
        P(29, on, 2, 5, "div", 242),
        o(30, "div", 243)(31, "button", 244),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.showWalletModal.set(!1))
        }),
        s(32, "BACK"),
        a(),
        o(33, "button", 245),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.submitDeposit())
        }),
        s(34),
        a()()()
    }
    if (c & 2) {
        let t = p(2);
        l(21),
        h("ngModel", t.mpesaPhone()),
        l(4),
        h("ngModel", t.depositVal())("placeholder", t.minDepositAmount().toString()),
        l(2),
        M("Minimum KES ", q(28, 7, t.minDepositAmount()), "."),
        l(2),
        h("ngIf", t.mpesaStatusMsg()),
        l(4),
        h("disabled", t.mpesaStatus() === "sending"),
        l(),
        M(" ", t.mpesaStatus() === "sending" ? "Sending..." : "Deposit", " ")
    }
}
function rn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 249),
        A(1, "div", 250),
        o(2, "div", 251)(3, "div", 252)(4, "div", 253)(5, "span", 254),
        s(6),
        a(),
        o(7, "span", 255),
        s(8, "BETZION WITHDRAWAL"),
        a(),
        o(9, "span", 256),
        s(10),
        a()(),
        o(11, "button", 257),
        u("click", function() {
            g(t);
            let i = p(3);
            return m(i.dismissWithdrawalNotification())
        }),
        s(12, "\u2715"),
        a()(),
        o(13, "div", 258),
        s(14),
        a(),
        o(15, "div", 259),
        s(16),
        a()()()
    }
    if (c & 2) {
        let t, e, i, r, d, f, w, k = p(3);
        x("type-complete", ((t = k.withdrawalNotif()) == null ? null : t.type) === "completed")("type-rejected", ((e = k.withdrawalNotif()) == null ? null : e.type) === "rejected")("type-pending", ((i = k.withdrawalNotif()) == null ? null : i.type) === "pending"),
        l(6),
        M(" ", ((r = k.withdrawalNotif()) == null ? null : r.type) === "completed" ? "\u2705" : ((r = k.withdrawalNotif()) == null ? null : r.type) === "rejected" ? "\u26A0\uFE0F" : "\u{1F4CB}", " "),
        l(4),
        y((d = k.withdrawalNotif()) == null ? null : d.timestamp),
        l(4),
        y((f = k.withdrawalNotif()) == null ? null : f.title),
        l(2),
        y((w = k.withdrawalNotif()) == null ? null : w.message)
    }
}
function sn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 229),
        P(1, rn, 17, 10, "div", 247),
        o(2, "h2", 230),
        s(3, "Withdrawals"),
        a(),
        o(4, "p", 231),
        s(5, "Withdraw from your wallet"),
        a(),
        o(6, "div", 232)(7, "button", 233),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.addWithdrawAmount(200))
        }),
        s(8, "+200"),
        a(),
        o(9, "button", 233),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.addWithdrawAmount(500))
        }),
        s(10, "+500"),
        a(),
        o(11, "button", 233),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.addWithdrawAmount(1e3))
        }),
        s(12, "+1,000"),
        a(),
        o(13, "button", 233),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.addWithdrawAmount(5e3))
        }),
        s(14, "+5,000"),
        a()(),
        o(15, "div", 234)(16, "label", 235),
        s(17, "Phone Number"),
        a(),
        o(18, "div", 236)(19, "select", 237)(20, "option", 238),
        s(21, "+254"),
        a()(),
        o(22, "input", 239),
        u("ngModelChange", function(i) {
            g(t);
            let r = p(2);
            return m(r.mpesaPhone.set(i))
        }),
        a()()(),
        o(23, "div", 234)(24, "label", 235),
        s(25, "Amount"),
        a(),
        o(26, "input", 248),
        u("ngModelChange", function(i) {
            g(t);
            let r = p(2);
            return m(r.withdrawVal.set(i))
        }),
        a(),
        o(27, "div", 241),
        s(28, "Daily withdrawal limits: Minimum KES 200, Maximum KES 300,000."),
        a()(),
        o(29, "div", 243)(30, "button", 244),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.showWalletModal.set(!1))
        }),
        s(31, "BACK"),
        a(),
        o(32, "button", 245),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.submitWithdraw())
        }),
        s(33),
        a()()()
    }
    if (c & 2) {
        let t = p(2);
        l(),
        h("ngIf", t.withdrawalNotif() !== null),
        l(21),
        h("ngModel", t.mpesaPhone()),
        l(4),
        h("ngModel", t.withdrawVal()),
        l(6),
        h("disabled", t.isSubmittingWithdrawal()),
        l(),
        M(" ", t.isSubmittingWithdrawal() ? "Submitting..." : "Withdraw", " ")
    }
}
function ln(c, n) {
    c & 1 && (o(0, "div", 269),
    s(1, "Loading transactions..."),
    a())
}
function cn(c, n) {
    if (c & 1 && (o(0, "div", 270),
    s(1),
    a()),
    c & 2) {
        let t = p(3);
        l(),
        M(" No ", t.transactionHistoryTab() === "deposit" ? "deposit" : "withdrawal", " transactions found. ")
    }
}
function pn(c, n) {
    if (c & 1 && (o(0, "span", 278),
    s(1),
    a()),
    c & 2) {
        let t = p().$implicit;
        l(),
        M("Ref: ", t.reference)
    }
}
function dn(c, n) {
    if (c & 1 && (o(0, "div", 273)(1, "div", 274)(2, "span"),
    s(3),
    O(4, "number"),
    a(),
    o(5, "span", 275),
    s(6),
    O(7, "date"),
    a(),
    P(8, pn, 2, 1, "span", 276),
    a(),
    o(9, "span", 277),
    s(10),
    a()()),
    c & 2) {
        let t = n.$implicit;
        l(2),
        x("tx-amount-green", t.type === "deposit")("tx-amount-orange", t.type === "withdrawal"),
        l(),
        Ft(" ", t.type === "deposit" ? "+ " : "- ", "", S(4, 15, t.amount, "1.2-2"), " KES "),
        l(3),
        y(S(7, 18, t.created_at, "dd/MM/yyyy, HH:mm:ss")),
        l(2),
        h("ngIf", t.reference),
        l(),
        x("failed", t.status === "failed")("completed", t.status === "completed")("pending", t.status === "pending"),
        l(),
        M(" ", t.status === "completed" ? "Completed" : t.status === "failed" ? "Failed" : "Pending", " ")
    }
}
function un(c, n) {
    if (c & 1 && (o(0, "div", 271),
    P(1, dn, 11, 21, "div", 272),
    a()),
    c & 2) {
        let t = p(3);
        l(),
        h("ngForOf", t.filteredTransactionHistory)
    }
}
function gn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 260)(1, "div", 261)(2, "div", 262)(3, "h3", 263),
        s(4, "Transaction History"),
        a(),
        o(5, "button", 264),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.loadTransactionsHistory())
        }),
        s(6, "Refresh"),
        a()(),
        o(7, "div", 265)(8, "button", 67),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.transactionHistoryTab.set("deposit"))
        }),
        s(9, "Deposits"),
        a(),
        o(10, "button", 67),
        u("click", function() {
            g(t);
            let i = p(2);
            return m(i.transactionHistoryTab.set("withdrawal"))
        }),
        s(11, "Withdrawals"),
        a()(),
        P(12, ln, 2, 0, "div", 266)(13, cn, 2, 1, "div", 267)(14, un, 2, 1, "div", 268),
        a()()
    }
    if (c & 2) {
        let t = p(2);
        l(8),
        x("active", t.transactionHistoryTab() === "deposit"),
        l(2),
        x("active", t.transactionHistoryTab() === "withdrawal"),
        l(2),
        h("ngIf", t.isLoadingTransactions),
        l(),
        h("ngIf", !t.isLoadingTransactions && t.filteredTransactionHistory.length === 0),
        l(),
        h("ngIf", !t.isLoadingTransactions && t.filteredTransactionHistory.length > 0)
    }
}
function mn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 219),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.showWalletModal.set(!1))
        }),
        o(1, "div", 220),
        u("click", function(i) {
            return i.stopPropagation()
        }),
        o(2, "div", 221)(3, "div", 222),
        s(4, "Current Balance"),
        a(),
        o(5, "div", 223),
        s(6, "Available wallet amount"),
        a(),
        o(7, "div", 224),
        s(8),
        O(9, "number"),
        a()(),
        o(10, "div", 225)(11, "button", 226),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.setWalletTab("deposit"))
        }),
        s(12, " Deposit "),
        a(),
        o(13, "button", 226),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.setWalletTab("withdraw"))
        }),
        s(14, " Withdraw "),
        a()(),
        P(15, an, 35, 9, "div", 227)(16, sn, 34, 5, "div", 227)(17, gn, 15, 7, "div", 228),
        a()()
    }
    if (c & 2) {
        let t = p();
        l(8),
        M("KES ", S(9, 8, t.userBalance(), "1.0-2")),
        l(3),
        x("active", t.walletTab() === "deposit"),
        l(2),
        x("active", t.walletTab() === "withdraw"),
        l(2),
        h("ngIf", t.walletTab() === "deposit"),
        l(),
        h("ngIf", t.walletTab() === "withdraw"),
        l(),
        h("ngIf", t.walletTab() === "transactions")
    }
}
function hn(c, n) {
    if (c & 1 && (o(0, "span", 313),
    s(1),
    O(2, "number"),
    a()),
    c & 2) {
        let t = p().$implicit;
        l(),
        M(" ", S(2, 1, t.win, "1.2-2"), " ")
    }
}
function bn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 297)(1, "div", 298)(2, "span", 299),
        s(3),
        a(),
        o(4, "span", 300),
        s(5),
        a()(),
        o(6, "div", 301),
        s(7),
        O(8, "number"),
        a(),
        o(9, "div", 302)(10, "span", 303),
        s(11),
        O(12, "number"),
        a()(),
        o(13, "div", 304),
        P(14, hn, 3, 4, "span", 305),
        a(),
        o(15, "div", 306)(16, "button", 307),
        G(),
        o(17, "svg", 308),
        A(18, "path", 309)(19, "path", 310),
        a()(),
        F(),
        o(20, "button", 311),
        u("click", function() {
            let i = g(t).$implicit
              , r = p(2);
            return m(r.shareBetToChat(i))
        }),
        G(),
        o(21, "svg", 308),
        A(22, "path", 312),
        a()()()()
    }
    if (c & 2) {
        let t = n.$implicit;
        x("won", t.cashedOut),
        l(3),
        y(t.time),
        l(2),
        y(t.date),
        l(2),
        M(" ", S(8, 13, t.bet, "1.2-2"), " "),
        l(3),
        x("low", t.multiplier < 2)("mid", t.multiplier >= 2 && t.multiplier < 10)("high", t.multiplier >= 10),
        l(),
        M(" ", S(12, 16, t.multiplier, "1.2-2"), "x "),
        l(3),
        h("ngIf", t.cashedOut && t.win > 0)
    }
}
function fn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 279),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.showHistoryModal.set(!1))
        }),
        o(1, "div", 280),
        u("click", function(i) {
            return i.stopPropagation()
        }),
        o(2, "div", 281)(3, "h2", 282),
        s(4, "MY BET HISTORY"),
        a(),
        o(5, "button", 283),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.showHistoryModal.set(!1))
        }),
        G(),
        o(6, "svg", 284),
        A(7, "line", 285)(8, "line", 286),
        a()()(),
        F(),
        o(9, "div", 287)(10, "span", 288),
        s(11, "Date"),
        a(),
        o(12, "span", 289),
        s(13, "Bet KES"),
        a(),
        o(14, "span", 290),
        s(15, "X"),
        a(),
        o(16, "span", 291),
        s(17, "Cash out KES"),
        a(),
        A(18, "span", 292),
        a(),
        o(19, "div", 293),
        P(20, bn, 23, 19, "div", 294),
        O(21, "slice"),
        a(),
        o(22, "div", 295)(23, "button", 296),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.loadMoreHistory())
        }),
        s(24, " Load more "),
        a()()()()
    }
    if (c & 2) {
        let t = p();
        l(20),
        h("ngForOf", Wt(21, 1, t.userBetHistoryList(), 0, t.betHistoryLimit()))
    }
}
function xn(c, n) {
    c & 1 && A(0, "span", 328)
}
function _n(c, n) {
    c & 1 && A(0, "span", 328)
}
function Cn(c, n) {
    c & 1 && A(0, "span", 328)
}
function wn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 314),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.closeChangeRoomModal())
        }),
        o(1, "div", 315),
        u("click", function(i) {
            return i.stopPropagation()
        }),
        o(2, "div", 316)(3, "h3", 317),
        s(4, "CHANGE ROOM"),
        a(),
        o(5, "button", 318),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.closeChangeRoomModal())
        }),
        o(6, "span", 45),
        s(7, "\u2715"),
        a()()(),
        A(8, "div", 319),
        o(9, "p", 320),
        s(10, "Switching rooms will load that room's current game. Do you wish to continue?"),
        a(),
        o(11, "div", 321)(12, "div", 322),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.pendingRoomSelection.set(1))
        }),
        o(13, "span", 323),
        P(14, xn, 1, 0, "span", 324),
        a(),
        o(15, "span", 325),
        s(16, "Room #1"),
        a()(),
        o(17, "div", 322),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.pendingRoomSelection.set(2))
        }),
        o(18, "span", 323),
        P(19, _n, 1, 0, "span", 324),
        a(),
        o(20, "span", 325),
        s(21, "Room #2"),
        a()(),
        o(22, "div", 322),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.pendingRoomSelection.set(3))
        }),
        o(23, "span", 323),
        P(24, Cn, 1, 0, "span", 324),
        a(),
        o(25, "span", 325),
        s(26, "Room #3"),
        a()()(),
        o(27, "div", 326)(28, "button", 327),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.confirmRoomChange())
        }),
        s(29, " CHANGE "),
        a()()()()
    }
    if (c & 2) {
        let t = p();
        l(12),
        x("selected", t.pendingRoomSelection() === 1),
        l(),
        x("checked", t.pendingRoomSelection() === 1),
        l(),
        h("ngIf", t.pendingRoomSelection() === 1),
        l(3),
        x("selected", t.pendingRoomSelection() === 2),
        l(),
        x("checked", t.pendingRoomSelection() === 2),
        l(),
        h("ngIf", t.pendingRoomSelection() === 2),
        l(3),
        x("selected", t.pendingRoomSelection() === 3),
        l(),
        x("checked", t.pendingRoomSelection() === 3),
        l(),
        h("ngIf", t.pendingRoomSelection() === 3)
    }
}
var X = class c {
    panel2Collapsed = b(!1);
    togglePanel2() {
        this.panel2Collapsed.update(n => !n)
    }
    toggleAutoBet(n) {
        n === 1 ? this.panel1.update(t => C(_({}, t), {
            autoBetEnabled: !t.autoBetEnabled
        })) : this.panel2.update(t => C(_({}, t), {
            autoBetEnabled: !t.autoBetEnabled
        }))
    }
    toggleAutoCashout(n) {
        n === 1 ? this.panel1.update(t => C(_({}, t), {
            autoCashoutEnabled: !t.autoCashoutEnabled
        })) : this.panel2.update(t => C(_({}, t), {
            autoCashoutEnabled: !t.autoCashoutEnabled
        }))
    }
    resetAutoCashout(n) {
        n === 1 ? this.panel1.update(t => C(_({}, t), {
            autoTarget: 1.1
        })) : this.panel2.update(t => C(_({}, t), {
            autoTarget: 1.1
        }))
    }
    onDocumentVisibilityChange() {
        typeof document < "u" && document.hidden ? this.gameSound.stopAllAudio() : this.syncAudioWithActiveRoom()
    }
    onPageHide() {
        this.gameSound.stopAllAudio()
    }
    onWindowBlur() {
        this.gameSound.stopAllAudio()
    }
    onWindowFocus() {
        this.syncAudioWithActiveRoom()
    }
    syncAudioWithActiveRoom() {
        if (!this.soundEnabled() || typeof document < "u" && document.hidden) {
            this.gameSound.stopBackground();
            return
        }
        let n = this.activeRoom();
        n && n.gameState() === "RUNNING" ? this.gameSound.playBackground() : this.gameSound.stopBackground()
    }
    canvasRef;
    canvasContainerRef;
    chatScrollRef;
    gameSocket = E(_t);
    authService = E(V);
    gameSound = E(Ct);
    router = E(W);
    location = E(Ht);
    subs = [];
    animationFrameId = null;
    bettingIntervalId = null;
    mockLoopIntervalId = null;
    resizeObserver = null;
    fakeJoinIntervalId = null;
    raysRotation = 0;
    lastRayFrameAt = performance.now();
    planeRenderPosition = {
        x: 0,
        y: 0
    };
    planeRenderAngle = -.12;
    planeRenderReady = !1;
    lastPlaneFrameAt = performance.now();
    lastMultiplierFrameAt = performance.now();
    renderedMultiplierValue = 1;
    crashFlightProgress = 0;
    flyingPhaseStartedAt = 0;
    selectedRoom = b(1);
    showChangeRoomModal = b(!1);
    pendingRoomSelection = b(1);
    room1 = {
        id: 1,
        name: "Room #1",
        panel1: b({
            amount: 10,
            selectedPreset: null,
            presetTapCount: 0,
            placedAmount: 0,
            queuedAmount: 0,
            mode: "bet",
            autoBetEnabled: !1,
            autoCashoutEnabled: !1,
            autoTarget: 1.1,
            isPending: !1,
            hasActiveBet: !1,
            hasCashedOut: !1,
            cashedOutPayout: 0,
            cashedOutMultiplier: 0
        }),
        panel2: b({
            amount: 10,
            selectedPreset: null,
            presetTapCount: 0,
            placedAmount: 0,
            queuedAmount: 0,
            mode: "bet",
            autoBetEnabled: !1,
            autoCashoutEnabled: !1,
            autoTarget: 1.1,
            isPending: !1,
            hasActiveBet: !1,
            hasCashedOut: !1,
            cashedOutPayout: 0,
            cashedOutMultiplier: 0
        }),
        gameState: b("WAITING"),
        currentMultiplier: b(1),
        animatedMultiplier: b(1),
        finalCrashMultiplier: b(1),
        countdownSeconds: b(5),
        countdownProgress: b(100),
        history: b([1.17, 2.98, 1.28, 3.03, 1.57, 1.46, 2.13, 1.72, 2.93, 1, 19.26, 1.28, 6.17, 1.86, 2.27, 1.04, 2.43, 1.15, 2.29, 5.66]),
        liveBets: b([]),
        flightProgress: 0,
        crashFlightProgress: 0,
        flyingStartedAt: 0,
        bettingIntervalId: null,
        mockLoopIntervalId: null,
        fakeJoinIntervalId: null
    };
    room2 = {
        id: 2,
        name: "Room #2",
        panel1: b({
            amount: 10,
            selectedPreset: null,
            presetTapCount: 0,
            placedAmount: 0,
            queuedAmount: 0,
            mode: "bet",
            autoBetEnabled: !1,
            autoCashoutEnabled: !1,
            autoTarget: 1.1,
            isPending: !1,
            hasActiveBet: !1,
            hasCashedOut: !1,
            cashedOutPayout: 0,
            cashedOutMultiplier: 0
        }),
        panel2: b({
            amount: 10,
            selectedPreset: null,
            presetTapCount: 0,
            placedAmount: 0,
            queuedAmount: 0,
            mode: "bet",
            autoBetEnabled: !1,
            autoCashoutEnabled: !1,
            autoTarget: 1.1,
            isPending: !1,
            hasActiveBet: !1,
            hasCashedOut: !1,
            cashedOutPayout: 0,
            cashedOutMultiplier: 0
        }),
        gameState: b("WAITING"),
        currentMultiplier: b(1),
        animatedMultiplier: b(1),
        finalCrashMultiplier: b(1),
        countdownSeconds: b(5),
        countdownProgress: b(100),
        history: b([2.15, 1.45, 5.6, 1.1, 3.25, 1.8, 8.9, 2.05, 1.5, 4.1, 1.22, 3.45, 1.95, 6.7, 2.3, 1.18, 2.8, 1.05, 4.5, 1.6]),
        liveBets: b([]),
        flightProgress: 0,
        crashFlightProgress: 0,
        flyingStartedAt: 0,
        bettingIntervalId: null,
        mockLoopIntervalId: null,
        fakeJoinIntervalId: null
    };
    room3 = {
        id: 3,
        name: "Room #3",
        panel1: b({
            amount: 10,
            selectedPreset: null,
            presetTapCount: 0,
            placedAmount: 0,
            queuedAmount: 0,
            mode: "bet",
            autoBetEnabled: !1,
            autoCashoutEnabled: !1,
            autoTarget: 1.1,
            isPending: !1,
            hasActiveBet: !1,
            hasCashedOut: !1,
            cashedOutPayout: 0,
            cashedOutMultiplier: 0
        }),
        panel2: b({
            amount: 10,
            selectedPreset: null,
            presetTapCount: 0,
            placedAmount: 0,
            queuedAmount: 0,
            mode: "bet",
            autoBetEnabled: !1,
            autoCashoutEnabled: !1,
            autoTarget: 1.1,
            isPending: !1,
            hasActiveBet: !1,
            hasCashedOut: !1,
            cashedOutPayout: 0,
            cashedOutMultiplier: 0
        }),
        gameState: b("WAITING"),
        currentMultiplier: b(1),
        animatedMultiplier: b(1),
        finalCrashMultiplier: b(1),
        countdownSeconds: b(5),
        countdownProgress: b(100),
        history: b([1.08, 3.9, 1.75, 12.4, 1.3, 2.4, 1.9, 6.7, 1.15, 2.8, 1.55, 4.2, 1.02, 2.1, 8.5, 1.4, 3.1, 2.05, 1.25, 5.8]),
        liveBets: b([]),
        flightProgress: 0,
        crashFlightProgress: 0,
        flyingStartedAt: 0,
        bettingIntervalId: null,
        mockLoopIntervalId: null,
        fakeJoinIntervalId: null
    };
    getRoom(n) {
        return n === 2 ? this.room2 : n === 3 ? this.room3 : this.room1
    }
    activeRoom = B( () => this.getRoom(this.selectedRoom()));
    get panel1() {
        return this.activeRoom().panel1
    }
    get panel2() {
        return this.activeRoom().panel2
    }
    gameState = B( () => this.activeRoom().gameState());
    currentMultiplier = B( () => this.activeRoom().currentMultiplier());
    animatedMultiplier = B( () => this.activeRoom().animatedMultiplier());
    finalCrashMultiplier = B( () => this.activeRoom().finalCrashMultiplier());
    countdownSeconds = B( () => this.activeRoom().countdownSeconds());
    countdownProgress = B( () => this.activeRoom().countdownProgress());
    history = B( () => this.activeRoom().history());
    liveBets = B( () => this.activeRoom().liveBets());
    userBalance = b(0);
    hasCompletedFirstDeposit = b(!1);
    isConnected = b(!1);
    activeTab = b("all");
    maxBetFeedSize = 3e3;
    visibleBetRows = 100;
    showWalletModal = b(!1);
    showHistoryModal = b(!1);
    userBetHistoryList = b([]);
    betHistoryLimit = b(10);
    showProfileModal = b(!1);
    showProfileDropdown = b(!1);
    walletTab = b("deposit");
    depositVal = b(null);
    minDepositAmount = b(999);
    maxDepositAmount = b(1999);
    depositSelectedPreset = b(null);
    depositPresetTapCount = b(0);
    withdrawVal = b(500);
    withdrawSelectedPreset = b(null);
    withdrawPresetTapCount = b(0);
    isSubmittingWithdrawal = b(!1);
    toastMessage = b(null);
    isToastError = b(!1);
    cashoutNotifications = b([]);
    cashoutNotificationSequence = 0;
    cashoutNotificationTimeouts = [];
    withdrawalNotif = b(null);
    withdrawalNotifTimeout = null;
    lastWithdrawalNotificationId = null;
    bonusNotif = b(null);
    isClaimingBonus = b(!1);
    soundEnabled = b(this.gameSound.isEnabled());
    bonusNotifTimeout = null;
    gameLoading = b(!0);
    transactionHistory = [];
    isLoadingTransactions = !1;
    transactionHistoryTab = b("deposit");
    mpesaPhone = b("");
    mpesaStatus = b("idle");
    mpesaStatusMsg = b("");
    mpesaReceipt = b("");
    mpesaCheckoutRequestId = "";
    currentUser = b(null);
    chatMinimumBalance = 1e3;
    chatOpen = b(!1);
    showNewMessagesPill = b(!1);
    accumulatedNewMessagesCount = b(0);
    isUserScrolledUp = !1;
    isUserHoldingChat = !1;
    chatDraft = b("");
    chatMessages = b([]);
    chatOnlineCount = b(8130);
    chatEligible = B( () => this.userBalance() >= this.chatMinimumBalance);
    chatSimulationIntervalId = null;
    chatOnlineIntervalId = null;
    chatFallbackMessages = ["Betzion inalipa mbaya sana leo! Nishatoa 45k kwa M-Pesa \u{1F911}", "Wazi bro, signals za leo zilikua on point sana, asante Mr Dan \u{1F64F}", "Nani ako Room 1 sai? Nimeona 18.5x ikitokea plane imepaa safi \u{1F680}", "Aki signals ziko legit, nimeanza na 500 nikatoa 14,000!", "Deposit ya M-Pesa imeingia instant bila delay yoyote.", "Kijana tulia usitoke mapema, target 3x hadi 5x ndio safe.", "Naitwa Rose thank you so much Mr Dan nmetoa kwa 50K leo ubarikiwe sana!", "Eii plane imeenda 54x! Nani alishika hii round ya moto?", "Signals za leo zimecome through fiti sana, niko happy.", "Hapa Betzion hakuna delay kwa payout, 2 mins pesa iko kwa M-Pesa \u{1F64C}", "Tuliza boli cheza na discipline usifuate emotions wakuu.", "Room 3 iko moto leo, continuous purple rounds \u{1F525}", "Nani ako na stake ya 1000 twende kazi kwa Room 1?", "Wakuu cashout at 2.50x ndio safe zone, usikue greedy.", "Betzion best platform Kenya hands down \u{1F4AF}", "Nimeangukia 12k with stake ndogo ya 300, signal ilisema 4x.", "Withdrawal ya 35,000 imeingia chap chap kwa M-Pesa!", "Mungu akubariki Mr Dan kwa signals safi sana mtafute ni legit.", "Leo ndio ile siku ya kuomoka na Betzion mabro.", "Room 1 prediction ilikua accurate 100% leo.", "Niko live hapa naona purple odds zikipanda tu.", "Leo round 10 zote zimepita 3x, hii ni baraka tupu.", "Signal ya saa nane imelipa fiti sana, nimerecover capital.", "Chezeni smart wakuu, aviator inataka patience na hesabu.", "Betzion engine iko smooth sana, hakuna lagging hata kidogo.", "Nimecatch 9.40x kwa Room 2, leo weekend imejipa mapema \u{1F4B0}", "Discipline ndio siri hapa, 2x kila round inatosha kabisa.", "Wadau signals za telegram ziko accurate leo, nimetoa 28k.", "Withdrawal yangu ya 15k imeingia instant bila stress.", "Room 2 inapeana ma odds kali sana, check history uone.", "Kila mtu anacheza Betzion anajua hapa hakuna delay ya cashout.", "Signals zimenisaidia kuelewa graph vizuri sana.", "Nimecashout kwa 4.50x nikaacha watu wakilia kwa crash.", "Small stakes with high frequency ndio format yangu ya leo.", "Betzion mko juu, engine ya spribe iko on point.", "Nimepiga 8k na stake ya 200 tu, asante Mr Dan!", "Guys remember to set auto cashout at 2.0x to protect your balance.", "Nani ako na tips za Room 3? Leo naona inatoa high multipliers.", "Kuingia na balance poa ndio unacheza bila pressure.", "Mimi niko disciplined, target yangu ya 20k per day nimehit tayari.", "Betzion payout speed is unmatched, seconds tu kwa simu.", "Bro signals za leo ziko fire \u{1F525}\u{1F525}\u{1F525}", "Nimepata 6.80x kwa first bet ya leo, blessed day!", "Always withdraw your profits first, kisha cheza na faida.", "Betzion ndio kusema, games zote ziko provably fair.", "Mr Dan signals are top tier, amerecover lost funds zote.", "Leo niko locked in, signals zikidrop tu naweka stake.", "Room 1 imepanda 33x sasa hivi, what a massive flight!", "Cashout early, secure the bag, rinse and repeat.", "Nimejaribu split betting kwa panel 1 na panel 2, method inawork fiti.", "Betzion customer service pia wako fast sana.", "Leo niko 4 wins in a row, thanks to the live signals.", "Hata na stake ndogo unaeza build balance pole pole.", "Nani mwingine amewithdraw leo? Mpesa yangu inasoma safi.", "Signals ziko accurate 90%+ hii wiki nzima.", "Discipline over emotions always, aviator rules.", "Plane imepaa tena 12x, Room 1 is cooking today!", "Nimepata 5k with just 250 bob, Betzion is the real deal.", "Wakuu chezeni na plan, don\u2019t gamble blindly.", "Mr Dan thank you bro, 40k profit in one afternoon!", "Betzion room switching is so seamless, nimeona 15x kwa Room 2!", "Kaa rada na signal ya 4:30pm inakam na multiplier nzito.", "Mimi leo sitoki kwa game hadi nihit 50k target.", "Nimecash out 5.20x nikamake 10,400 with 2k stake.", "Watu wa Betzion mko safe kabisa, hakuna delayed withdrawals.", "Respect the graph, check pink history kabla uweke heavy stake.", "24x caught safely! Mpesa alert ting ting \u{1F4F2}", "Chezeni na 2.0x auto cashout wakuu, consistency ndio key.", "Nani mwingine ako Room 2? Grafu inasoma fiti sana.", "Hii round imeenda 78x eish! Nani alibaki ndani?", "Nashukuru sana Mr Dan, nimelipa rent ya mwezi na aviator leo \u{1F64F}", "Deposit ya 2k imekua 26,400 in 30 mins!", "Wakuu never chase losses, take a break ukihit target.", "Signals za VIP channel ziko 98% win rate leo.", "Hapa Betzion hakuna delay ya ku-credit winnings.", "Plane imepaa tena! Room 1 inafanya mambo leo \u2708\uFE0F\u{1F525}", "Nimepata 16.50x na stake ya 500, day made!", "Leo ni mwendo wa green tu kwa history yangu.", "Follow the signals carefully usiruke round.", "M-Pesa balance inasoma vizuri sana baada ya hii session \u{1F4B0}", "Nimeeka auto cashout 3.5x imegonga pap!", "Watu wa 100 bob msiogope, pole pole ndio mwendo.", "Kila mtu anacheza smart leo, continuous wins!", "Room 3 has given 3 pinks in the last 10 minutes \u{1F525}", "Hii game iko smooth kuliko platforms zingine zote Kenya.", "Signals za Mr Dan ndio zimeniokoa baada ya bad run.", "Withdrawal processing in 60 seconds flat, incredible \u{1F64C}", "Nimefika 50k milestone ya leo, sasa naenda zangu.", "Always set a daily stop-loss and profit target.", "Pink rounds zimejaa kwa table, game is on fire!", "Leo niko 7 out of 8 wins, pure discipline.", "Betzion is the real king of crash games in KE \u{1F451}", "Nani ako ready na next signal? Dropping in 2 mins!", "Target hit! 10k profit locked and withdrawn \u{1F4B8}", "Aviator with fast payout is unmatched.", "Patience pays here wakuu, don\u2019t rush every round.", "Room 1 taking off again, 10x guaranteed soon!", "Nimecashout 4.2x with panel 1 and 8.0x with panel 2!", "Split betting strategy is working wonders today \u{1F525}", "Signal checked, bet placed, win secured \u{1F680}", "Hapa hakuna story ya pending withdrawals, instant payout.", "Nimeona 42x ikipaa, what a massive multiplier!", "Tukutane VIP session ya jioni wakuu \u{1F4AA}", "Respect the signals and manage your bankroll.", "Another 15,000 KES straight to my M-Pesa account!", "Betzion to the moon \u{1F680}\u{1F680}\u{1F680}"];
    potentialPayout1 = B( () => {
        let n = this.panel1();
        return !n.hasActiveBet || n.hasCashedOut ? 0 : parseFloat((n.placedAmount * this.currentMultiplier()).toFixed(2))
    }
    );
    potentialPayout2 = B( () => {
        let n = this.panel2();
        return !n.hasActiveBet || n.hasCashedOut ? 0 : parseFloat((n.placedAmount * this.currentMultiplier()).toFixed(2))
    }
    );
    displayBetsList = B( () => {
        let n = this.activeTab()
          , t = this.liveBets()
          , e = this.currentUser()?.username || "Player"
          , i = [...t].sort( (r, d) => d.bet - r.bet);
        return n === "my" ? t.filter(r => r.player === e || r.isCurrentUser).slice(0, 150) : i.slice(0, 150)
    }
    );
    betsCount = B( () => {
        let n = this.activeTab()
          , t = this.liveBets()
          , e = this.currentUser()?.username || "Player";
        return n === "my" ? t.filter(i => i.player === e || i.isCurrentUser).length : 4880 + t.length % 65
    }
    );
    get filteredTransactionHistory() {
        let n = this.transactionHistoryTab();
        return this.transactionHistory.filter(t => t.type === n)
    }
    ctx = null;
    planeAsset = null;
    flightProgress = 0;
    planeCrashOffset = {
        x: 0,
        y: 0
    };
    planeCrashVelocity = {
        x: 0,
        y: 0
    };
    allowStandaloneRounds = !1;
    constructor() {
        Dt( () => {
            let n = this.gameState()
              , t = this.currentMultiplier();
            n === "RUNNING" && this.evaluateAutoCashouts(t, this.selectedRoom())
        }
        )
    }
    ngOnInit() {
        this.initAuthAndSockets(),
        this.seedMockBets(),
        this.initUserBetHistory(),
        this.seedFallbackChat(),
        this.startChatSimulation(),
        this.startOnlineCounter(),
        setTimeout( () => this.gameLoading.set(!1), 3e3)
    }
    ngAfterViewInit() {
        this.initCanvas(),
        this.startCanvasRenderLoop()
    }
    ngOnDestroy() {
        this.subs.forEach(n => n.unsubscribe()),
        this.animationFrameId !== null && cancelAnimationFrame(this.animationFrameId),
        this.bettingIntervalId && clearInterval(this.bettingIntervalId),
        this.mockLoopIntervalId && clearInterval(this.mockLoopIntervalId),
        this.fakeJoinIntervalId && clearInterval(this.fakeJoinIntervalId),
        this.chatSimulationIntervalId && clearTimeout(this.chatSimulationIntervalId),
        this.chatOnlineIntervalId && clearInterval(this.chatOnlineIntervalId),
        this.cashoutNotificationTimeouts.forEach(n => clearTimeout(n)),
        this.resizeObserver && this.resizeObserver.disconnect(),
        this.gameSound.stopBackground(),
        this.gameSocket.disconnect()
    }
    onResize() {
        this.resizeCanvas()
    }
    handleSpaceKey(n) {
        let t = document.activeElement;
        t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") || (n.preventDefault(),
        this.triggerDualPanelAction())
    }
    onDocumentClick(n) {
        this.gameSound.unlock();
        let t = document.getElementById("profileDropdownWrap");
        t && !t.contains(n.target) && this.showProfileDropdown.set(!1)
    }
    initAuthAndSockets() {
        this.authService.getPaymentConfig().subscribe(t => {
            this.minDepositAmount.set(t.minDepositAmount),
            this.maxDepositAmount.set(t.maxDepositAmount)
        }
        ),
        this.subs.push(this.gameSocket.paymentConfig$.subscribe(t => {
            t && (this.minDepositAmount.set(t.minDepositAmount),
            this.maxDepositAmount.set(t.maxDepositAmount))
        }
        ), this.authService.currentUser$.subscribe(t => {
            this.currentUser.set(t),
            t && (this.userBalance.set(t.balance),
            this.hasCompletedFirstDeposit.set(Number(t.depositCount || 0) > 0 || Number(t.balance || 0) > 0),
            t.phone_number && !this.mpesaPhone() && this.mpesaPhone.set((t.phone_number || "").replace(/^(\+?254|0)+/, "")))
        }
        ), this.authService.userBalance$.subscribe(t => {
            this.userBalance.set(t)
        }
        ), this.gameSocket.isConnected$.subscribe(t => {
            this.isConnected.set(t)
        }
        ), this.gameSocket.roomStates$.subscribe(t => {
            t && [1, 2, 3].forEach(e => {
                let i = t[e];
                if (!i)
                    return;
                let r = this.getRoom(e);
                if (Array.isArray(i.history) && r.history.set(i.history),
                Array.isArray(i.activeBets) && this.replaceRoomLiveBets(e, i.activeBets),
                i.phase === "flying")
                    r.gameState.set("RUNNING"),
                    r.currentMultiplier.set(i.multiplier || 1),
                    r.animatedMultiplier.set(i.multiplier || 1),
                    r.flyingStartedAt = Number(i.flyingStartedAt) || Date.now(),
                    r.flightProgress = Math.min(.97, Math.max(0, 1 - 1 / Math.pow(Math.max(i.multiplier || 1, 1), 1.55)));
                else if (i.phase === "crashed") {
                    r.gameState.set("CRASHED"),
                    r.flyingStartedAt = 0;
                    let d = Number(i.multiplier) || 1;
                    r.currentMultiplier.set(d),
                    r.animatedMultiplier.set(d),
                    r.finalCrashMultiplier.set(d),
                    r.crashFlightProgress = Math.min(1.08, Math.max(0, 1 - 1 / Math.pow(Math.max(d, 1), 1.55))),
                    r.flightProgress = r.crashFlightProgress
                } else
                    this.onRoomRoundStart(r, i.bettingDuration)
            }
            )
        }
        ), this.gameSocket.roomTick$.subscribe(t => {
            t && t.roomId && this.onRoomMultiplierUpdate(t.roomId, t.multiplier)
        }
        ), this.gameSocket.roomPhase$.subscribe(t => {
            t && t.roomId && this.onRoomSocketPhaseChange(t.roomId, t.phase, t.durationMs, t.multiplier)
        }
        ), this.gameSocket.roomCrashed$.subscribe(t => {
            t && t.roomId && this.onRoomCrash(t.roomId, t.crashPoint)
        }
        ), this.gameSocket.roomHistory$.subscribe(t => {
            t && t.roomId && Array.isArray(t.history) && this.getRoom(t.roomId).history.set(t.history)
        }
        ), this.gameSocket.roomBets$.subscribe(t => {
            t && t.roomId && Array.isArray(t.bets) && this.replaceRoomLiveBets(t.roomId, t.bets)
        }
        ), this.gameSocket.chatHistory$.subscribe(t => {
            t.length > 0 && (this.chatMessages.set(t.slice(-120)),
            this.scrollChatToLatest())
        }
        ), this.gameSocket.chatMessage$.subscribe(t => {
            if (t) {
                let e = this.currentUser()?.id;
                this.chatMessages.update(i => i.some(d => d.id === t.id || d.text === t.text && d.userId && e && String(d.userId) === String(e) && Math.abs(new Date(d.timestamp).getTime() - new Date(t.timestamp).getTime()) < 4e3) ? i : [...i, t].slice(-200)),
                this.chatOpen() && (this.isUserScrolledUp || this.isUserHoldingChat ? (this.showNewMessagesPill.set(!0),
                this.accumulatedNewMessagesCount.update(i => i + 1)) : (this.scrollChatToLatest("smooth"),
                this.showNewMessagesPill.set(!1),
                this.accumulatedNewMessagesCount.set(0)))
            }
        }
        ), this.gameSocket.chatOnline$.subscribe(t => {
            this.chatOnlineCount.set(t)
        }
        ), this.gameSocket.chatError$.subscribe(t => {
            t && this.showToast(t.message, !0)
        }
        ), this.gameSocket.roundState$.subscribe(t => {
            this.isConnected() && this.onSocketPhaseChange(t)
        }
        ), this.gameSocket.multiplier$.subscribe(t => {
            this.isConnected() && this.gameState() === "RUNNING" && this.onMultiplierUpdate(t)
        }
        ), this.gameSocket.balance$.subscribe(t => {
            this.isConnected() && (this.userBalance.set(t),
            this.authService.updateBalance(t))
        }
        ), this.gameSocket.walletUpdated$.subscribe(t => {
            t && (t.balance !== void 0 && (this.userBalance.set(t.balance),
            this.authService.updateBalance(t.balance, t.depositCount)),
            (t.depositCount !== void 0 || t.balance !== void 0) && this.hasCompletedFirstDeposit.set(Number(t.depositCount || 0) > 0 || Number(t.balance ?? this.userBalance()) > 0))
        }
        ), this.gameSocket.roundHistory$.subscribe(t => {
            t && t.length > 0 && this.room1.history.set(t)
        }
        ), this.gameSocket.activeBets$.subscribe(t => {
            this.isConnected() && this.replaceRoomLiveBets(1, t)
        }
        ), this.gameSocket.betConfirmed$.subscribe(t => {
            if (t) {
                let e = this.resolveResponsePanel(t.slot, t.roomId);
                e && this.confirmBet(e, t.amount, t.roomId)
            }
        }
        ), this.gameSocket.cashOutSuccess$.subscribe(t => {
            if (t) {
                let e = this.resolveResponsePanel(t.slot, t.roomId);
                e ? this.confirmCashout(e, t.multiplier, t.payoutAmount, t.roomId) : this.triggerCashoutNotification(t.multiplier, t.payoutAmount, t.slot || 1)
            }
        }
        ), this.gameSocket.betPlacedBroadcast$.subscribe(t => {
            t && this.addLiveBetBroadcast(t)
        }
        ), this.gameSocket.betCashedOutBroadcast$.subscribe(t => {
            t && this.updateLiveBetBroadcast(t)
        }
        ), this.gameSocket.errorNotification$.subscribe(t => {
            t && (t.slot ? this.setPanelPending(t.slot, !1, !1, t.roomId) : this.clearPendingPanels(t.roomId),
            this.showToast(t.message, !0))
        }
        ), this.gameSocket.withdrawalNotification$.subscribe(t => {
            t && this.showWithdrawalNotification(t)
        }
        ), this.gameSocket.transactionsUpdated$.subscribe(t => {
            t && (this.loadTransactionsHistory(),
            t.action === "mpesa_deposit_completed" && this.mpesaStatus() === "waiting" && (this.mpesaStatus.set("success"),
            this.showToast("\u{1F4B0} M-Pesa deposit confirmed!"),
            setTimeout( () => this.showWalletModal.set(!1), 2500)),
            t.action === "mpesa_deposit_failed" && (this.mpesaStatus() === "waiting" || this.mpesaStatus() === "sending") && (this.mpesaStatus.set("failed"),
            this.mpesaStatusMsg.set("\u274C Payment failed or was cancelled.")))
        }
        ), this.gameSocket.depositsUpdated$.subscribe(t => {
            t && (this.loadTransactionsHistory(),
            t.action === "mpesa_deposit_completed" && this.mpesaStatus() === "waiting" && (this.mpesaStatus.set("success"),
            this.showToast("\u{1F4B0} M-Pesa deposit confirmed!"),
            setTimeout( () => this.showWalletModal.set(!1), 2500)),
            t.action === "mpesa_deposit_failed" && (this.mpesaStatus() === "waiting" || this.mpesaStatus() === "sending") && (this.mpesaStatus.set("failed"),
            this.mpesaStatusMsg.set("\u274C Payment failed or was cancelled.")))
        }
        ), this.gameSocket.withdrawalsUpdated$.subscribe(t => {
            t && this.loadTransactionsHistory()
        }
        ), this.gameSocket.userUpdated$.subscribe(t => {
            t && this.authService.loadCurrentUser().subscribe()
        }
        ));
        let n = this.authService.getToken();
        n && (this.gameSocket.connect(n),
        this.authService.getWallet().subscribe({
            next: t => {
                this.userBalance.set(t.balance),
                this.hasCompletedFirstDeposit.set(Number(t.depositCount || 0) > 0 || Number(t.balance || 0) > 0)
            }
        })),
        this.subs.push(this.gameSocket.mpesaSuccess$.subscribe(t => {
            t && (console.log(`[${new Date().toISOString()}] [PAYMENT_LOG] Player UI updated: mpesa_success`, t),
            this.mpesaStatus.set("success"),
            this.mpesaReceipt.set(t.receipt),
            this.mpesaStatusMsg.set(`\u2705 KES ${t.amount} deposited! Receipt: ${t.receipt}`),
            this.userBalance.set(t.balance),
            this.authService.updateBalance(t.balance),
            this.showToast(`\u{1F4B0} M-Pesa deposit of KES ${t.amount} confirmed!`),
            this.loadTransactionsHistory(),
            setTimeout( () => this.showWalletModal.set(!1), 2500))
        }
        ), this.gameSocket.mpesaFailed$.subscribe(t => {
            t && (this.mpesaStatus.set("failed"),
            this.mpesaStatusMsg.set(`\u274C Deposit of KES ${t.amount} failed or was cancelled (${t.reason}).`),
            this.showToast(`\u274C Payment Failed: ${t.reason}`, !0),
            this.loadTransactionsHistory())
        }
        ))
    }
    onRoomSocketPhaseChange(n, t, e, i) {
        let r = this.getRoom(n);
        if (t === "betting" || t === "WAITING")
            this.onRoomRoundStart(r, e);
        else if (t === "flying" || t === "RUNNING") {
            r.gameState.set("RUNNING"),
            r.flyingStartedAt = Date.now(),
            r.crashFlightProgress = 0;
            let d = i || 1;
            r.currentMultiplier.set(d),
            r.animatedMultiplier.set(d),
            r.flightProgress = Math.min(.97, Math.max(0, 1 - 1 / Math.pow(Math.max(d, 1), 1.55))),
            this.selectedRoom() === n && this.soundEnabled() && this.gameSound.playBackground()
        } else
            (t === "crashed" || t === "CRASHED") && this.onRoomCrash(n, i || r.currentMultiplier())
    }
    onRoomRoundStart(n, t=5e3) {
        n.gameState.set("WAITING"),
        n.currentMultiplier.set(1),
        n.animatedMultiplier.set(1),
        n.flightProgress = 0,
        n.crashFlightProgress = 0,
        n.flyingStartedAt = 0,
        n.panel1.update(r => C(_({}, r), {
            hasActiveBet: r.placedAmount > 0,
            isPending: !1,
            hasCashedOut: !1,
            cashedOutPayout: 0,
            cashedOutMultiplier: 0,
            selectedPreset: null,
            presetTapCount: 0
        })),
        n.panel2.update(r => C(_({}, r), {
            hasActiveBet: r.placedAmount > 0,
            isPending: !1,
            hasCashedOut: !1,
            cashedOutPayout: 0,
            cashedOutMultiplier: 0,
            selectedPreset: null,
            presetTapCount: 0
        })),
        this.selectedRoom() === n.id ? (this.planeCrashOffset = {
            x: 0,
            y: 0
        },
        this.activateQueuedBet(1, n.id),
        this.activateQueuedBet(2, n.id),
        n.panel1().autoBetEnabled && !n.panel1().hasActiveBet && !n.panel1().queuedAmount && setTimeout( () => this.placeBet(1), 120),
        n.panel2().autoBetEnabled && !n.panel2().hasActiveBet && !n.panel2().queuedAmount && !this.panel2Collapsed() && setTimeout( () => this.placeBet(2), 120)) : (this.activateQueuedBet(1, n.id),
        this.activateQueuedBet(2, n.id)),
        this.seedRoomMockBets(n);
        let e = Math.max(0, t || 5e3);
        n.countdownSeconds.set(Math.ceil(e / 1e3)),
        n.countdownProgress.set(100);
        let i = Date.now();
        n.bettingIntervalId && clearInterval(n.bettingIntervalId),
        n.bettingIntervalId = setInterval( () => {
            let r = Date.now() - i
              , d = Math.max(0, e - r);
            n.countdownSeconds.set(Math.ceil(d / 1e3));
            let f = Math.max(0, Math.min(100, d / e * 100));
            n.countdownProgress.set(f),
            d <= 0 && (clearInterval(n.bettingIntervalId),
            !this.isConnected() && this.allowStandaloneRounds && this.startRoomFlightPhase(n))
        }
        , 30)
    }
    startRoomFlightPhase(n) {
        if (n.gameState.set("RUNNING"),
        n.flyingStartedAt = Date.now(),
        n.currentMultiplier.set(1),
        n.animatedMultiplier.set(1),
        n.flightProgress = 0,
        this.selectedRoom() === n.id && this.soundEnabled() && this.gameSound.playBackground(),
        this.isConnected())
            return;
        let t = Math.random()
          , e = t < .03 ? 1 : parseFloat(Math.max(1, Math.min(1e5, .97 / (1 - t))).toFixed(2))
          , i = Date.now();
        n.mockLoopIntervalId && clearInterval(n.mockLoopIntervalId),
        n.mockLoopIntervalId = setInterval( () => {
            if (this.isConnected()) {
                clearInterval(n.mockLoopIntervalId);
                return
            }
            let r = (Date.now() - i) / 1e3
              , d = parseFloat((1 + .06 * r + .01 * Math.pow(r, 2)).toFixed(2));
            d >= e ? (clearInterval(n.mockLoopIntervalId),
            this.onRoomCrash(n.id, e)) : this.onRoomMultiplierUpdate(n.id, d)
        }
        , 16)
    }
    onRoomMultiplierUpdate(n, t) {
        let e = this.getRoom(n);
        e.currentMultiplier.set(t);
        let i = e.animatedMultiplier();
        e.animatedMultiplier.set(parseFloat((i + (t - i) * .4).toFixed(2))),
        e.flightProgress = Math.min(.97, Math.max(0, 1 - 1 / Math.pow(Math.max(t, 1), 1.55))),
        this.simulateRoomAICashouts(e, t),
        e.liveBets.update(r => r.map(d => d.cashedOut ? d : C(_({}, d), {
            win: parseFloat((d.bet * t).toFixed(2))
        }))),
        this.evaluateAutoCashouts(t, n)
    }
    onRoomCrash(n, t) {
        let e = this.getRoom(n);
        e.gameState.set("CRASHED"),
        e.finalCrashMultiplier.set(t),
        e.currentMultiplier.set(t),
        e.animatedMultiplier.set(t),
        e.crashFlightProgress = Math.min(1.08, Math.max(0, 1 - 1 / Math.pow(Math.max(t, 1), 1.55))),
        e.flightProgress = e.crashFlightProgress,
        e.flyingStartedAt = 0,
        e.panel1.update(i => C(_({}, i), {
            placedAmount: 0,
            isPending: !1,
            hasActiveBet: !1
        })),
        e.panel2.update(i => C(_({}, i), {
            placedAmount: 0,
            isPending: !1,
            hasActiveBet: !1
        })),
        this.selectedRoom() === n && (this.gameSound.stopBackground(),
        this.soundEnabled() && (typeof document > "u" || !document.hidden) && this.gameSound.playCrash()),
        this.isConnected() || (e.history.update(i => [t, ...i.slice(0, 19)]),
        this.allowStandaloneRounds && setTimeout( () => this.onRoomRoundStart(e), 1500))
    }
    seedRoomMockBets(n) {
        n.fakeJoinIntervalId && clearInterval(n.fakeJoinIntervalId);
        let t = [];
        for (let i = 0; i < 160; i++)
            t.push(this.makeFakePlayer(i));
        n.liveBets.set(t);
        let e = 0;
        n.fakeJoinIntervalId = setInterval( () => {
            if (e >= 40 || n.gameState() !== "WAITING") {
                clearInterval(n.fakeJoinIntervalId);
                return
            }
            let i = Math.floor(Math.random() * 4) + 2
              , r = [];
            for (let d = 0; d < i && e < 40; d++,
            e++)
                r.push(this.makeFakePlayer(160 + e));
            n.liveBets.update(d => [...r, ...d].slice(0, this.maxBetFeedSize))
        }
        , 250)
    }
    simulateRoomAICashouts(n, t) {
        n.liveBets.update(e => e.map(i => {
            if (!i.cashedOut && !i.isCurrentUser) {
                let r = i.targetMultiplier || 2;
                if (t >= r) {
                    let d = parseFloat(r.toFixed(2));
                    return C(_({}, i), {
                        multiplier: d,
                        win: parseFloat((i.bet * d).toFixed(2)),
                        cashedOut: !0
                    })
                }
            }
            return i
        }
        ))
    }
    replaceRoomLiveBets(n, t) {
        let e = this.getRoom(n)
          , i = String(this.currentUser()?.id ?? "")
          , r = t.map( (d, f) => ({
            id: `${d.odlutUserId || d.username}-${d.betId || f}`,
            player: d.username || "Player",
            avatarIcon: d.isBot ? this.FAKE_AVATARS[f % this.FAKE_AVATARS.length] : "assets/avatars/avatar-pilot.svg",
            bet: Number(d.amount) || 0,
            multiplier: d.status === "cashed_out" && Number(d.cashoutMultiplier) || null,
            win: d.status === "cashed_out" && Number(d.payout) || 0,
            cashedOut: d.status === "cashed_out",
            isCurrentUser: !!(d.odlutUserId && d.odlutUserId === i)
        }));
        r.length !== 0 && e.liveBets.update(d => {
            let f = d.filter(w => w.id.startsWith("fake-"));
            return [...r, ...f].slice(0, this.maxBetFeedSize)
        }
        )
    }
    onRoundStart(n=5e3) {
        this.onRoomRoundStart(this.room1, n)
    }
    onMultiplierUpdate(n) {
        this.onRoomMultiplierUpdate(1, n)
    }
    onCrash(n) {
        this.onRoomCrash(1, n)
    }
    onSocketPhaseChange(n) {
        this.onRoomSocketPhaseChange(1, n.phase, n.durationMs, n.multiplier)
    }
    toggleSound() {
        let n = !this.soundEnabled();
        this.gameSound.unlock(),
        this.gameSound.setEnabled(n),
        this.soundEnabled.set(n),
        n && this.gameState() === "RUNNING" && this.gameSound.playBackground()
    }
    evaluateAutoCashouts(n, t=this.selectedRoom()) {
        let e = this.getRoom(t)
          , i = e.panel1();
        i.mode === "auto" && i.hasActiveBet && !i.hasCashedOut && n >= i.autoTarget && this.cashOut(1, t);
        let r = e.panel2();
        r.mode === "auto" && r.hasActiveBet && !r.hasCashedOut && n >= r.autoTarget && this.cashOut(2, t)
    }
    placeBet(n) {
        if (this.gameState() !== "WAITING") {
            this.queueBet(n);
            return
        }
        let t = n === 1 ? this.panel1() : this.panel2()
          , e = t.amount;
        if (!Number.isFinite(e) || e <= 0) {
            this.showToast("Please enter a valid bet amount", !0);
            return
        }
        if (!this.hasCompletedFirstDeposit() && this.userBalance() <= 0) {
            this.showToast("Make at least one deposit to be able to play.", !0);
            return
        }
        if (t.hasActiveBet || t.queuedAmount > 0 || t.isPending)
            return;
        if (e > this.userBalance()) {
            this.showToast("Your wallet balance is too low. Use Deposit to add funds.", !0);
            return
        }
        if (this.isConnected()) {
            this.setPanelPending(n, !0);
            let f = t.mode === "auto" && t.autoCashoutEnabled && t.autoTarget && t.autoTarget >= 1.01 ? t.autoTarget : void 0;
            this.gameSocket.placeBet(e, n, f, this.selectedRoom());
            return
        }
        let i = this.userBalance() - e;
        this.userBalance.set(i),
        this.authService.updateBalance(i),
        n === 1 ? this.panel1.update(f => C(_({}, f), {
            placedAmount: e,
            hasActiveBet: !0,
            hasCashedOut: !1
        })) : this.panel2.update(f => C(_({}, f), {
            placedAmount: e,
            hasActiveBet: !0,
            hasCashedOut: !1
        }));
        let r = this.currentUser()?.username || "You"
          , d = {
            id: Math.random().toString(36).substring(2, 9),
            player: r,
            avatarIcon: "assets/avatars/avatar-pilot.svg",
            bet: e,
            multiplier: null,
            win: 0,
            cashedOut: !1,
            isCurrentUser: !0
        };
        this.activeRoom().liveBets.update(f => [d, ...f])
    }
    queueBet(n) {
        let t = n === 1 ? this.panel1() : this.panel2()
          , e = t.amount;
        if (this.gameState() === "WAITING") {
            this.placeBet(n);
            return
        }
        if (!Number.isFinite(e) || e <= 0) {
            this.showToast("Please enter a valid bet amount", !0);
            return
        }
        if (!this.hasCompletedFirstDeposit() && this.userBalance() <= 0) {
            this.showToast("Make at least one deposit to be able to play.", !0);
            return
        }
        if (t.queuedAmount > 0 || t.isPending)
            return;
        if (e > this.userBalance()) {
            this.showToast("Your wallet balance is too low. Use Deposit to add funds.", !0);
            return
        }
        if (this.isConnected()) {
            n === 1 ? this.panel1.update(r => C(_({}, r), {
                queuedAmount: e
            })) : this.panel2.update(r => C(_({}, r), {
                queuedAmount: e
            }));
            return
        }
        let i = this.userBalance() - e;
        this.userBalance.set(i),
        this.authService.updateBalance(i),
        n === 1 ? this.panel1.update(r => C(_({}, r), {
            queuedAmount: e
        })) : this.panel2.update(r => C(_({}, r), {
            queuedAmount: e
        }))
    }
    activateQueuedBet(n, t=this.selectedRoom()) {
        let e = this.getRoom(t)
          , i = n === 1 ? e.panel1() : e.panel2()
          , r = i.queuedAmount;
        if (r <= 0)
            return;
        if (this.isConnected()) {
            this.setPanelPending(n, !0, !0, t),
            this.gameSocket.placeBet(r, n, i.mode === "auto" ? i.autoTarget : void 0, t);
            return
        }
        let d = f => C(_({}, f), {
            placedAmount: r,
            queuedAmount: 0,
            hasActiveBet: !0,
            hasCashedOut: !1,
            cashedOutPayout: 0,
            cashedOutMultiplier: 0
        });
        n === 1 ? e.panel1.update(d) : e.panel2.update(d)
    }
    cancelQueuedBet(n) {
        let t = n === 1 ? this.panel1() : this.panel2();
        if (!(t.queuedAmount <= 0)) {
            if (!this.isConnected()) {
                let e = this.userBalance() + t.queuedAmount;
                this.userBalance.set(e),
                this.authService.updateBalance(e)
            }
            n === 1 ? this.panel1.update(e => C(_({}, e), {
                queuedAmount: 0
            })) : this.panel2.update(e => C(_({}, e), {
                queuedAmount: 0
            })),
            this.showToast("Next-round bet cancelled")
        }
    }
    cancelBet(n) {
        let t = n === 1 ? this.panel1() : this.panel2();
        if (this.gameState() !== "WAITING" || !t.hasActiveBet)
            return;
        if (this.isConnected()) {
            this.showToast("A live bet cannot be cancelled after the server confirms it.", !0);
            return
        }
        let e = this.userBalance() + t.placedAmount;
        this.userBalance.set(e),
        this.authService.updateBalance(e),
        n === 1 ? this.panel1.update(i => C(_({}, i), {
            hasActiveBet: !1,
            placedAmount: 0
        })) : this.panel2.update(i => C(_({}, i), {
            hasActiveBet: !1,
            placedAmount: 0
        })),
        this.showToast("Bet cancelled")
    }
    cashOut(n, t=this.selectedRoom()) {
        let e = this.getRoom(t)
          , i = e.currentMultiplier()
          , r = n === 1 ? e.panel1() : e.panel2();
        if (e.gameState() !== "RUNNING" || !r.hasActiveBet || r.hasCashedOut || r.isPending)
            return;
        if (this.isConnected()) {
            this.setPanelPending(n, !0, !1, t),
            this.gameSocket.cashOut(n, t);
            return
        }
        let d = parseFloat((r.placedAmount * i).toFixed(2))
          , f = this.userBalance() + d;
        this.userBalance.set(f),
        this.authService.updateBalance(f),
        n === 1 ? e.panel1.update(k => C(_({}, k), {
            hasCashedOut: !0,
            cashedOutPayout: d,
            cashedOutMultiplier: i
        })) : e.panel2.update(k => C(_({}, k), {
            hasCashedOut: !0,
            cashedOutPayout: d,
            cashedOutMultiplier: i
        }));
        let w = this.currentUser()?.username || "You";
        e.liveBets.update(k => k.map(I => I.player === w || I.isCurrentUser ? C(_({}, I), {
            multiplier: i,
            win: d,
            cashedOut: !0
        }) : I)),
        this.triggerCashoutNotification(i, d, n)
    }
    setPanelPending(n, t, e=!1, i=this.selectedRoom()) {
        let r = this.getRoom(i)
          , d = f => C(_({}, f), {
            isPending: t,
            queuedAmount: e ? 0 : f.queuedAmount
        });
        n === 1 ? r.panel1.update(d) : r.panel2.update(d)
    }
    resolveResponsePanel(n, t=this.selectedRoom()) {
        let e = this.getRoom(t);
        return n === 1 || n === 2 ? n : e.panel1().isPending ? 1 : e.panel2().isPending ? 2 : null
    }
    clearPendingPanels(n=this.selectedRoom()) {
        this.setPanelPending(1, !1, !1, n),
        this.setPanelPending(2, !1, !1, n)
    }
    confirmBet(n, t, e=this.selectedRoom()) {
        let i = this.getRoom(e)
          , r = d => C(_({}, d), {
            placedAmount: t,
            queuedAmount: 0,
            isPending: !1,
            hasActiveBet: !0,
            hasCashedOut: !1,
            cashedOutPayout: 0,
            cashedOutMultiplier: 0
        });
        n === 1 ? i.panel1.update(r) : i.panel2.update(r)
    }
    confirmCashout(n, t, e, i=this.selectedRoom()) {
        let r = this.getRoom(i)
          , d = k => C(_({}, k), {
            isPending: !1,
            hasCashedOut: !0,
            cashedOutPayout: e,
            cashedOutMultiplier: t
        });
        n === 1 ? r.panel1.update(d) : r.panel2.update(d);
        let f = n === 1 ? r.panel1() : r.panel2()
          , w = f.placedAmount || f.amount || 10;
        this.recordUserBetHistory(w, t, e, !0),
        this.triggerCashoutNotification(t, e, n)
    }
    triggerCashoutNotification(n, t, e=1) {
        let i = ++this.cashoutNotificationSequence;
        this.cashoutNotifications.update(d => [...d, {
            id: i,
            multiplier: n,
            payout: t,
            slot: e
        }].slice(-2));
        let r = setTimeout( () => {
            this.dismissCashoutNotification(i),
            this.cashoutNotificationTimeouts = this.cashoutNotificationTimeouts.filter(d => d !== r)
        }
        , 3600);
        this.cashoutNotificationTimeouts.push(r)
    }
    dismissCashoutNotification(n) {
        this.cashoutNotifications.update(t => t.filter(e => e.id !== n))
    }
    showWithdrawalNotification(n) {
        if (n.id && n.id === this.lastWithdrawalNotificationId)
            return;
        this.withdrawalNotifTimeout && clearTimeout(this.withdrawalNotifTimeout),
        n.id && (this.lastWithdrawalNotificationId = n.id);
        let t = n.createdAt || n.timestamp
          , e = t ? new Date(t).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        }) : new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
        this.withdrawalNotif.set({
            id: n.id,
            title: n.title || "\u{1F4CB} Betzion Notification",
            message: n.message,
            type: n.type || "info",
            timestamp: e
        }),
        this.withdrawalNotifTimeout = setTimeout( () => {
            this.withdrawalNotif.set(null)
        }
        , 6e3)
    }
    dismissWithdrawalNotification() {
        this.withdrawalNotifTimeout && clearTimeout(this.withdrawalNotifTimeout),
        this.withdrawalNotif.set(null)
    }
    claimWelcomeBonus() {
        if (!(this.isClaimingBonus() || this.currentUser()?.bonus_claimed)) {
            if (!this.hasCompletedFirstDeposit()) {
                this.showBonusNotification("Bonus unavailable", "Make at least one deposit to be able to claim the bonus.", "info");
                return
            }
            this.isClaimingBonus.set(!0),
            this.authService.claimWelcomeBonus().subscribe({
                next: n => {
                    this.userBalance.set(n.balance),
                    this.showProfileDropdown.set(!1),
                    this.showBonusNotification("Bonus claimed!", "1,999 KES has been added to your wallet.", "success"),
                    this.isClaimingBonus.set(!1),
                    this.loadTransactionsHistory()
                }
                ,
                error: n => {
                    this.showBonusNotification("Bonus unavailable", n, "info"),
                    this.isClaimingBonus.set(!1)
                }
            })
        }
    }
    showBonusNotification(n, t, e) {
        this.bonusNotifTimeout && clearTimeout(this.bonusNotifTimeout),
        this.bonusNotif.set({
            title: n,
            message: t,
            type: e
        }),
        this.bonusNotifTimeout = setTimeout( () => this.bonusNotif.set(null), 6500)
    }
    dismissBonusNotification() {
        this.bonusNotifTimeout && clearTimeout(this.bonusNotifTimeout),
        this.bonusNotif.set(null)
    }
    triggerDualPanelAction() {
        let n = this.gameState();
        n === "WAITING" ? (!this.panel1().hasActiveBet && !this.panel1().queuedAmount && !this.panel1().isPending && this.placeBet(1),
        !this.panel2().hasActiveBet && !this.panel2().queuedAmount && !this.panel2().isPending && this.placeBet(2)) : n === "RUNNING" && (this.panel1().hasActiveBet && !this.panel1().hasCashedOut && !this.panel1().isPending && this.cashOut(1),
        this.panel2().hasActiveBet && !this.panel2().hasCashedOut && !this.panel2().isPending && this.cashOut(2))
    }
    FAKE_PREFIX_DIGITS = ["2", "2", "2", "2", "7", "1", "0", "2", "2", "7"];
    FAKE_AVATARS = ["assets/avatars/avatar-vulture.svg", "assets/avatars/avatar-soldier.svg", "assets/avatars/avatar-girl.svg", "assets/avatars/avatar-leaf.svg", "assets/avatars/avatar-strawberry.svg", "assets/avatars/avatar-lips.svg", "assets/avatars/avatar-jet.svg", "assets/avatars/avatar-wolf.svg", "assets/avatars/avatar-lion.svg", "assets/avatars/avatar-pilot.svg"];
    FAKE_BET_POOL = [20, 50, 50, 100, 100, 100, 100, 150, 150, 200, 200, 200, 250, 300, 350, 500, 500, 600, 850, 1e3, 1e3, 1200, 1450, 1500, 2e3];
    generateFakeBetAmount() {
        let n = Math.random();
        return n < .012 ? 1e4 : n < .045 ? [6e3, 7e3, 8e3][Math.floor(Math.random() * 3)] : n < .16 ? [2500, 3e3, 3500, 3750, 4e3, 5e3][Math.floor(Math.random() * 6)] : this.FAKE_BET_POOL[Math.floor(Math.random() * this.FAKE_BET_POOL.length)]
    }
    generateRealisticCashoutTarget(n) {
        let t = Math.random();
        return n >= 2e3 ? t < .26 ? parseFloat((1.2 + Math.random() * .75).toFixed(2)) : t < .62 ? parseFloat((2 + Math.random() * 2.5).toFixed(2)) : t < .86 ? parseFloat((4.6 + Math.random() * 5.4).toFixed(2)) : t < .96 ? parseFloat((10.25 + Math.random() * 14.75).toFixed(2)) : parseFloat((25.5 + Math.random() * 34.5).toFixed(2)) : t < .3 ? parseFloat((1.15 + Math.random() * .85).toFixed(2)) : t < .66 ? parseFloat((2 + Math.random() * 2.7).toFixed(2)) : t < .88 ? parseFloat((4.75 + Math.random() * 6.25).toFixed(2)) : t < .97 ? parseFloat((11.25 + Math.random() * 18.75).toFixed(2)) : parseFloat((30.25 + Math.random() * 49.75).toFixed(2))
    }
    makeFakePlayer(n) {
        let t = this.FAKE_PREFIX_DIGITS[n % this.FAKE_PREFIX_DIGITS.length]
          , e = Math.floor(Math.random() * 10)
          , i = this.generateFakeBetAmount();
        return {
            id: `fake-${n}-${Date.now()}`,
            player: `${t}***${e}`,
            avatarIcon: this.FAKE_AVATARS[n % this.FAKE_AVATARS.length],
            bet: i,
            multiplier: null,
            win: 0,
            cashedOut: !1,
            targetMultiplier: this.generateRealisticCashoutTarget(i)
        }
    }
    seedMockBets() {
        this.fakeJoinIntervalId && clearInterval(this.fakeJoinIntervalId);
        let n = [];
        for (let e = 0; e < 160; e++)
            n.push(this.makeFakePlayer(e));
        this.activeRoom().liveBets.set(n);
        let t = 0;
        this.fakeJoinIntervalId = setInterval( () => {
            if (t >= 40 || this.gameState() !== "WAITING") {
                clearInterval(this.fakeJoinIntervalId);
                return
            }
            let e = Math.floor(Math.random() * 4) + 2
              , i = [];
            for (let r = 0; r < e && t < 40; r++,
            t++)
                i.push(this.makeFakePlayer(160 + t));
            this.activeRoom().liveBets.update(r => [...i, ...r].slice(0, this.maxBetFeedSize))
        }
        , 250)
    }
    simulateAICashouts(n) {
        this.activeRoom().liveBets.update(t => t.map(e => {
            if (!e.cashedOut && !e.isCurrentUser) {
                let i = e.targetMultiplier || 2;
                if (n >= i) {
                    let r = parseFloat(i.toFixed(2));
                    return C(_({}, e), {
                        multiplier: r,
                        win: parseFloat((e.bet * r).toFixed(2)),
                        cashedOut: !0
                    })
                }
            }
            return e
        }
        ))
    }
    addLiveBetBroadcast(n) {
        let t = {
            id: n.betId ? `bet-${n.betId}` : Math.random().toString(),
            player: n.player,
            avatarIcon: "assets/avatars/avatar-pilot.svg",
            bet: n.bet,
            multiplier: n.multiplier,
            win: n.win,
            cashedOut: n.cashedOut,
            isCurrentUser: n.userId === this.currentUser()?.id
        };
        this.activeRoom().liveBets.update(e => [t, ...e].slice(0, this.maxBetFeedSize))
    }
    updateLiveBetBroadcast(n) {
        this.activeRoom().liveBets.update(t => t.map(e => (n.betId ? e.id === `bet-${n.betId}` : e.player === n.player) ? C(_({}, e), {
            multiplier: n.multiplier,
            win: n.win,
            cashedOut: !0
        }) : e))
    }
    replaceLiveBets(n) {
        let t = String(this.currentUser()?.id ?? "")
          , e = n.map( (i, r) => ({
            id: `${i.odlutUserId || i.username}-${i.betId || r}`,
            player: i.username || "Player",
            avatarIcon: i.isBot ? this.FAKE_AVATARS[r % this.FAKE_AVATARS.length] : "assets/avatars/avatar-pilot.svg",
            bet: Number(i.amount) || 0,
            multiplier: i.status === "cashed_out" && Number(i.cashoutMultiplier) || null,
            win: i.status === "cashed_out" && Number(i.payout) || 0,
            cashedOut: i.status === "cashed_out",
            isCurrentUser: !!(i.odlutUserId && i.odlutUserId === t)
        }));
        e.length !== 0 && this.activeRoom().liveBets.update(i => {
            let r = i.filter(d => d.id.startsWith("fake-"));
            return [...e, ...r].slice(0, this.maxBetFeedSize)
        }
        )
    }
    initCanvas() {
        if (!this.canvasRef)
            return;
        let n = this.canvasRef.nativeElement;
        this.ctx = n.getContext("2d"),
        this.resizeCanvas(),
        this.canvasContainerRef && (this.resizeObserver = new ResizeObserver( () => {
            this.resizeCanvas()
        }
        ),
        this.resizeObserver.observe(this.canvasContainerRef.nativeElement)),
        this.loadPlaneAsset()
    }
    loadPlaneAsset() {
        let n = new Image;
        n.onload = () => {
            let t = document.createElement("canvas");
            t.width = n.naturalWidth,
            t.height = n.naturalHeight;
            let e = t.getContext("2d");
            if (!e)
                return;
            e.drawImage(n, 0, 0);
            let i = e.getImageData(0, 0, t.width, t.height);
            for (let r = 0; r < i.data.length; r += 4) {
                let d = i.data[r]
                  , f = i.data[r + 1]
                  , w = i.data[r + 2];
                d > 245 && f > 245 && w > 245 ? i.data[r + 3] = 0 : i.data[r + 3] > 0 && (i.data[r] = 255,
                i.data[r + 1] = 29,
                i.data[r + 2] = 77)
            }
            e.putImageData(i, 0, 0),
            this.planeAsset = t
        }
        ,
        n.src = "assets/images/aviator-plane.svg"
    }
    resizeCanvas() {
        if (!this.canvasRef || !this.canvasContainerRef)
            return;
        let n = this.canvasRef.nativeElement
          , t = this.canvasContainerRef.nativeElement
          , e = window.devicePixelRatio || 1
          , i = t.clientWidth
          , r = t.clientHeight;
        i === 0 || r === 0 || (n.width = Math.round(i * e),
        n.height = Math.round(r * e),
        this.ctx && (this.ctx.setTransform(1, 0, 0, 1, 0, 0),
        this.ctx.scale(e, e)))
    }
    startCanvasRenderLoop = () => {
        this.renderFrame(),
        this.animationFrameId = requestAnimationFrame(this.startCanvasRenderLoop)
    }
    ;
    renderFrame() {
        if (!this.ctx || !this.canvasRef || !this.canvasContainerRef)
            return;
        let n = this.canvasContainerRef.nativeElement
          , t = n.clientWidth
          , e = n.clientHeight;
        this.ctx.fillStyle = "#05070b",
        this.ctx.fillRect(0, 0, t, e),
        this.drawSunburstRays(t, e, this.gameState() === "RUNNING");
        let i = this.activeRoom()
          , r = i.gameState()
          , d = this.updateAnimatedMultiplier(this.currentMultiplier(), r);
        if (r === "RUNNING" || r === "CRASHED") {
            if (r === "CRASHED") {
                let T = Math.min(64, Math.max(0, performance.now() - this.lastPlaneFrameAt));
                i.crashFlightProgress = Math.min(1.16, i.crashFlightProgress + T * .00185),
                i.flightProgress = i.crashFlightProgress
            } else
                i.flightProgress = Math.min(.97, Math.max(0, 1 - 1 / Math.pow(Math.max(d, 1), 1.55)));
            let f = Math.max(18, t * .02)
              , w = e - Math.max(20, e * .06)
              , k = t <= 600
              , I = k ? .9 : 1.22
              , N = (k ? 65 : 66) * I
              , D = i.flightProgress;
            if (r === "RUNNING") {
                let T = t - 130 * I * .56
                  , z = Math.max(f, T - N);
                D = Math.min(D, Math.max(0, (z - f) / (t - f * 2)))
            }
            let pe = r === "RUNNING" ? this.getFlightLift(k ? 9 : 14, i) : 0
              , H = T => w - Math.pow(T, 2.4) * e * .78 - pe * Math.min(1, T * 1.5)
              , de = f + D * (t - f * 2)
              , ue = H(D)
              , Q = de
              , at = ue
              , rt = this.ctx.createLinearGradient(0, w, 0, 0);
            rt.addColorStop(0, "rgba(130, 0, 18, 0.88)"),
            rt.addColorStop(.35, "rgba(185, 10, 42, 0.72)"),
            rt.addColorStop(1, "rgba(255, 45, 96, 0.18)"),
            this.ctx.beginPath(),
            this.ctx.moveTo(f, w);
            let L = k ? 80 : 120;
            for (let T = 1; T <= Math.ceil(L * D); T++) {
                let z = Math.min(D, T / L)
                  , Z = f + z * (t - f * 2)
                  , R = H(z);
                this.ctx.lineTo(Z, R)
            }
            this.ctx.lineTo(Q, w),
            this.ctx.closePath(),
            this.ctx.fillStyle = rt,
            this.ctx.fill(),
            this.ctx.beginPath(),
            this.ctx.moveTo(f, w);
            for (let T = 1; T <= Math.ceil(L * D); T++) {
                let z = Math.min(D, T / L);
                this.ctx.lineTo(f + z * (t - f * 2), H(z))
            }
            this.ctx.strokeStyle = "rgba(255, 29, 77, 0.38)",
            this.ctx.lineWidth = 12,
            this.ctx.lineCap = "round",
            this.ctx.stroke(),
            this.ctx.beginPath(),
            this.ctx.moveTo(f, w);
            for (let T = 1; T <= Math.ceil(L * D); T++) {
                let z = Math.min(D, T / L);
                this.ctx.lineTo(f + z * (t - f * 2), H(z))
            }
            if (this.ctx.strokeStyle = "#ff1d4d",
            this.ctx.lineWidth = 4,
            this.ctx.shadowColor = "#E11D48",
            this.ctx.shadowBlur = 12,
            this.ctx.stroke(),
            this.ctx.shadowBlur = 0,
            r === "RUNNING") {
                let T = Math.max(0, D - .012)
                  , z = f + T * (t - f * 2)
                  , Z = H(T)
                  , R = Math.max(-.32, Math.atan2(at - Z, Q - z))
                  , tt = Q + Math.cos(R) * N
                  , et = at + Math.sin(R) * N;
                this.planeRenderPosition = {
                    x: tt,
                    y: et
                },
                this.planeRenderAngle = R,
                this.planeRenderReady = !0,
                this.drawAirplaneSprite(tt, et, this.planeRenderAngle, I)
            } else if (r === "CRASHED") {
                let T = Math.max(0, D - .012)
                  , z = f + T * (t - f * 2)
                  , Z = H(T)
                  , R = Math.max(-.32, Math.atan2(at - Z, Q - z))
                  , tt = performance.now()
                  , et = Math.min(64, Math.max(0, tt - this.lastPlaneFrameAt));
                this.lastPlaneFrameAt = tt;
                let It = 1 - Math.exp(-9 * (et / 1e3))
                  , ge = Q + Math.cos(R) * N
                  , me = at + Math.sin(R) * N;
                this.planeRenderPosition.x += (ge - this.planeRenderPosition.x) * It,
                this.planeRenderPosition.y += (me - this.planeRenderPosition.y) * It,
                this.planeRenderAngle += (R - this.planeRenderAngle) * (1 - Math.exp(-6 * (et / 1e3))),
                this.drawAirplaneSprite(this.planeRenderPosition.x, this.planeRenderPosition.y, this.planeRenderAngle, I)
            }
        } else {
            this.planeRenderReady = !1;
            let f = t <= 600
              , w = Date.now()
              , k = (f ? 52 : Math.max(70, t * .12)) + Math.sin(w / 220) * 4
              , I = e - (f ? 36 : 50) + Math.cos(w / 240) * 2;
            this.drawAirplaneSprite(k, I, -.08, f ? 1.02 : 1.35)
        }
    }
    resetAnimatedMultiplier(n) {
        this.renderedMultiplierValue = n,
        this.activeRoom().animatedMultiplier.set(n),
        this.lastMultiplierFrameAt = performance.now()
    }
    getFlightLift(n, t=this.activeRoom()) {
        if (!t.flyingStartedAt)
            return 0;
        let e = ((Date.now() - t.flyingStartedAt) % 6e3 + 6e3) % 6e3;
        if (e <= 4e3) {
            let r = e / 4e3;
            return n * (1 - Math.pow(1 - r, 2))
        }
        let i = (e - 4e3) / 2e3;
        return n * Math.pow(1 - i, 2)
    }
    updateAnimatedMultiplier(n, t) {
        let e = performance.now()
          , i = Math.min(64, Math.max(0, e - this.lastMultiplierFrameAt));
        if (this.lastMultiplierFrameAt = e,
        t === "WAITING" || t === "CRASHED")
            return this.renderedMultiplierValue !== n && this.resetAnimatedMultiplier(n),
            n;
        let r = Number.isFinite(n) ? n : 1
          , d = 1 - Math.exp(-12 * (i / 1e3));
        return this.renderedMultiplierValue += (r - this.renderedMultiplierValue) * d,
        Math.abs(r - this.renderedMultiplierValue) < 1e-4 && (this.renderedMultiplierValue = r),
        this.activeRoom().animatedMultiplier.set(this.renderedMultiplierValue),
        this.renderedMultiplierValue
    }
    drawSunburstRays(n, t, e=!1) {
        if (!this.ctx)
            return;
        this.ctx.save(),
        this.ctx.translate(0, t);
        let i = performance.now()
          , r = Math.min(64, Math.max(0, i - this.lastRayFrameAt));
        this.lastRayFrameAt = i,
        e && (this.raysRotation = (this.raysRotation + r * 3e-4) % (Math.PI * 2)),
        this.ctx.rotate(this.raysRotation);
        let d = n < 640 ? 32 : 44
          , f = Math.sqrt(n * n + t * t) * 2.5
          , w = Math.PI * 2 / d;
        for (let k = 0; k < d; k++) {
            let I = k * w
              , N = I + w * .5;
            this.ctx.beginPath(),
            this.ctx.moveTo(0, 0),
            this.ctx.lineTo(Math.cos(I) * f, Math.sin(I) * f),
            this.ctx.lineTo(Math.cos(N) * f, Math.sin(N) * f),
            this.ctx.closePath(),
            this.ctx.fillStyle = k % 2 === 0 ? "rgba(16, 18, 22, 0.45)" : "rgba(3, 4, 6, 0.95)",
            this.ctx.fill()
        }
        this.ctx.restore()
    }
    drawAirplaneSprite(n, t, e, i=1.55) {
        if (!this.ctx)
            return;
        this.ctx.save(),
        this.ctx.translate(n, t),
        this.ctx.rotate(e),
        this.ctx.scale(i, i);
        let r = this.ctx.createRadialGradient(-30, 0, 1, -30, 0, 22);
        if (r.addColorStop(0, "rgba(255, 56, 95, 0.72)"),
        r.addColorStop(1, "rgba(225, 29, 72, 0)"),
        this.ctx.fillStyle = r,
        this.ctx.beginPath(),
        this.ctx.arc(-30, 0, 22, 0, Math.PI * 2),
        this.ctx.fill(),
        this.planeAsset) {
            this.ctx.drawImage(this.planeAsset, 400, 400, 400, 230, -65, -38, 130, 75),
            this.ctx.restore();
            return
        }
        this.ctx.fillStyle = "#ed0042",
        this.ctx.beginPath(),
        this.ctx.moveTo(-43, -3),
        this.ctx.quadraticCurveTo(-18, -9, 20, -7),
        this.ctx.lineTo(37, -4),
        this.ctx.lineTo(44, 0),
        this.ctx.lineTo(37, 4),
        this.ctx.quadraticCurveTo(6, 9, -35, 6),
        this.ctx.lineTo(-45, 2),
        this.ctx.fill(),
        this.ctx.fillStyle = "#c90036",
        this.ctx.beginPath(),
        this.ctx.moveTo(-1, -6),
        this.ctx.lineTo(12, -27),
        this.ctx.lineTo(27, -21),
        this.ctx.lineTo(14, -3),
        this.ctx.fill(),
        this.ctx.beginPath(),
        this.ctx.moveTo(-14, 5),
        this.ctx.lineTo(-31, 18),
        this.ctx.lineTo(-21, 9),
        this.ctx.lineTo(-4, 5),
        this.ctx.fill(),
        this.ctx.fillStyle = "#b50031",
        this.ctx.beginPath(),
        this.ctx.moveTo(-30, -4),
        this.ctx.lineTo(-38, -21),
        this.ctx.lineTo(-21, -8),
        this.ctx.lineTo(-16, -4),
        this.ctx.fill(),
        this.ctx.fillStyle = "#16191c",
        this.ctx.beginPath(),
        this.ctx.moveTo(15, -5),
        this.ctx.lineTo(27, -3),
        this.ctx.lineTo(20, 0),
        this.ctx.lineTo(10, -1),
        this.ctx.closePath(),
        this.ctx.fill(),
        this.ctx.fillStyle = "rgba(255,255,255,0.72)",
        this.ctx.fillRect(-13, -3, 18, 1.4),
        this.ctx.fillStyle = "#910027",
        this.ctx.fillRect(-8, 2, 21, 1.2);
        let d = Date.now() / 20 % (Math.PI * 2);
        this.ctx.save(),
        this.ctx.translate(45, 0),
        this.ctx.rotate(d),
        this.ctx.fillStyle = "#ed0042";
        for (let f = 0; f < 3; f++)
            this.ctx.rotate(Math.PI * 2 / 3),
            this.ctx.beginPath(),
            this.ctx.moveTo(-1, -2),
            this.ctx.lineTo(4, -16),
            this.ctx.lineTo(2, -3),
            this.ctx.closePath(),
            this.ctx.fill();
        this.ctx.fillStyle = "#8d0027",
        this.ctx.beginPath(),
        this.ctx.arc(0, 0, 2.4, 0, Math.PI * 2),
        this.ctx.fill(),
        this.ctx.restore(),
        this.ctx.restore()
    }
    onAmountInput(n, t) {
        let i = t.target.value.replace(/[^0-9.]/g, "")
          , r = parseFloat(i);
        !isNaN(r) && r > 0 && (n === 1 ? this.panel1.update(d => C(_({}, d), {
            amount: r,
            selectedPreset: null
        })) : this.panel2.update(d => C(_({}, d), {
            amount: r,
            selectedPreset: null
        })))
    }
    onAmountBlur(n, t) {
        let e = t.target
          , i = n === 1 ? this.panel1() : this.panel2();
        e.value = i.amount.toFixed(2)
    }
    setPanelAmount(n, t) {
        let e = parseFloat(t);
        !isNaN(e) && e > 0 && (n === 1 ? this.panel1.update(i => C(_({}, i), {
            amount: e,
            selectedPreset: null
        })) : this.panel2.update(i => C(_({}, i), {
            amount: e,
            selectedPreset: null
        })))
    }
    adjustPanelAmount(n, t) {
        let e = i => C(_({}, i), {
            amount: Math.max(1, i.amount + t),
            selectedPreset: null,
            presetTapCount: 0
        });
        n === 1 ? this.panel1.update(e) : this.panel2.update(e)
    }
    selectPresetAmount(n, t) {
        let e = i => {
            let r = i.selectedPreset === t ? i.presetTapCount + 1 : 1;
            return C(_({}, i), {
                amount: t * r,
                selectedPreset: t,
                presetTapCount: r
            })
        }
        ;
        n === 1 ? this.panel1.update(e) : this.panel2.update(e)
    }
    setPanelMode(n, t) {
        n === 1 ? this.panel1.update(e => C(_({}, e), {
            mode: t
        })) : this.panel2.update(e => C(_({}, e), {
            mode: t
        }))
    }
    setAutoCashout(n, t) {
        let e = Math.max(1.1, Number(t) || 1.1);
        n === 1 ? this.panel1.update(i => C(_({}, i), {
            autoTarget: e
        })) : this.panel2.update(i => C(_({}, i), {
            autoTarget: e
        }))
    }
    chatAvatarPool = ["pilot", "wolf", "vulture", "strawberry", "soldier", "lips", "lion", "leaf", "jet", "girl"];
    chatNamePool = ["2***5", "2***1", "2***7", "2***4", "2***9", "2***3", "2***8", "2***6", "2***2", "2***0", "071***28", "072***91", "079***45", "070***63", "074***19", "075***82", "076***34", "078***50", "2547***12", "2547***99", "2547***34", "2547***88", "2547***56", "2547***71", "2547***03", "d***n", "k***o", "m***a", "j***2", "w***4", "b***9", "e***7", "p***1", "v***x", "s***8", "r***5", "c***0", "g***3", "t***6", "h***8", "l***2", "n***9", "y***4", "a***1", "f***7"];
    seedFallbackChat() {
        let n = Date.now()
          , t = 35
          , e = [];
        for (let i = 0; i < t; i++) {
            let r = i % this.chatFallbackMessages.length
              , d = i % this.chatNamePool.length
              , f = i % this.chatAvatarPool.length;
            e.push({
                id: `initial-chat-${i}`,
                username: this.chatNamePool[d],
                text: this.chatFallbackMessages[r],
                timestamp: new Date(n - (t - i) * 6500).toISOString(),
                avatar: `assets/avatars/avatar-${this.chatAvatarPool[f]}.svg`,
                likes: i * 3 % 7,
                isBot: !0
            })
        }
        this.chatMessages.set(e)
    }
    startChatSimulation() {
        this.chatSimulationIntervalId && clearTimeout(this.chatSimulationIntervalId);
        let n = () => {
            let t = 900 + Math.floor(Math.random() * 1300);
            this.chatSimulationIntervalId = setTimeout( () => {
                let e = Math.floor(Math.random() * this.chatFallbackMessages.length)
                  , i = Math.floor(Math.random() * this.chatNamePool.length)
                  , r = Math.floor(Math.random() * this.chatAvatarPool.length)
                  , d = {
                    id: `sim-chat-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
                    username: this.chatNamePool[i],
                    text: this.chatFallbackMessages[e],
                    timestamp: new Date().toISOString(),
                    avatar: `assets/avatars/avatar-${this.chatAvatarPool[r]}.svg`,
                    likes: Math.floor(Math.random() * 4),
                    isBot: !0
                };
                this.chatMessages.update(f => [...f, d].slice(-200)),
                this.chatOpen() && (this.isUserScrolledUp || this.isUserHoldingChat ? (this.showNewMessagesPill.set(!0),
                this.accumulatedNewMessagesCount.update(f => f + 1)) : (this.scrollChatToLatest("smooth"),
                this.showNewMessagesPill.set(!1),
                this.accumulatedNewMessagesCount.set(0))),
                Math.random() < .28 && setTimeout( () => {
                    let f = Math.floor(Math.random() * this.chatFallbackMessages.length)
                      , w = Math.floor(Math.random() * this.chatNamePool.length)
                      , k = Math.floor(Math.random() * this.chatAvatarPool.length)
                      , I = {
                        id: `sim-chat-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
                        username: this.chatNamePool[w],
                        text: this.chatFallbackMessages[f],
                        timestamp: new Date().toISOString(),
                        avatar: `assets/avatars/avatar-${this.chatAvatarPool[k]}.svg`,
                        likes: Math.floor(Math.random() * 3),
                        isBot: !0
                    };
                    this.chatMessages.update(N => [...N, I].slice(-200)),
                    this.chatOpen() && (this.isUserHoldingChat || this.isUserScrolledUp ? (this.showNewMessagesPill.set(!0),
                    this.accumulatedNewMessagesCount.update(N => N + 1)) : (this.scrollChatToLatest("smooth"),
                    this.showNewMessagesPill.set(!1),
                    this.accumulatedNewMessagesCount.set(0)))
                }
                , 260),
                n()
            }
            , t)
        }
        ;
        n()
    }
    startOnlineCounter() {
        this.chatOnlineIntervalId && clearInterval(this.chatOnlineIntervalId),
        this.chatOnlineIntervalId = setInterval( () => {
            let n = Math.floor(Math.random() * 31) - 15;
            this.chatOnlineCount.update(t => Math.max(7800, Math.min(9200, t + n)))
        }
        , 3e3)
    }
    onChatScroll() {
        let n = this.chatScrollRef?.nativeElement;
        if (!n)
            return;
        let t = n.scrollHeight - n.scrollTop - n.clientHeight;
        this.isUserScrolledUp = t > 50,
        !this.isUserScrolledUp && !this.isUserHoldingChat && (this.showNewMessagesPill.set(!1),
        this.accumulatedNewMessagesCount.set(0))
    }
    onChatPointerDown() {
        this.isUserHoldingChat = !0
    }
    onChatPointerUp() {
        this.isUserHoldingChat = !1,
        this.onChatScroll()
    }
    onChatTouchStart() {
        this.isUserHoldingChat = !0
    }
    onChatTouchEnd() {
        this.isUserHoldingChat = !1,
        this.onChatScroll()
    }
    onNewMessagesPillClick() {
        this.isUserHoldingChat = !1,
        this.isUserScrolledUp = !1,
        this.showNewMessagesPill.set(!1),
        this.scrollChatToLatest("smooth")
    }
    toggleLikeMessage(n) {
        this.chatMessages.update(t => t.map(e => e.id === n.id ? C(_({}, e), {
            likes: (e.likes || 0) + 1
        }) : e))
    }
    scrollChatToLatest(n="smooth") {
        requestAnimationFrame( () => {
            let t = this.chatScrollRef?.nativeElement;
            if (t)
                try {
                    t.scrollTo({
                        top: t.scrollHeight + 2e3,
                        behavior: n
                    })
                } catch {
                    t.scrollTop = t.scrollHeight
                }
        }
        )
    }
    toggleChat() {
        this.chatOpen.update(n => !n),
        this.chatOpen() && (this.isUserHoldingChat = !1,
        this.isUserScrolledUp = !1,
        this.showNewMessagesPill.set(!1),
        this.gameSocket.openChat(),
        this.scrollChatToLatest("auto"))
    }
    closeChat() {
        this.chatOpen.set(!1)
    }
    sendChatMessage() {
        let n = this.chatDraft().trim();
        if (!n)
            return;
        if (!this.chatEligible()) {
            let i = {
                id: `restrict-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
                username: "System",
                text: "Chat access is restricted for players with balance below 1,000 KES",
                timestamp: new Date().toISOString(),
                isRestrictionNotice: !0,
                isBot: !1
            };
            this.chatMessages.update(r => [...r, i].slice(-150)),
            this.scrollChatToLatest(),
            this.chatDraft.set("");
            return
        }
        if (!this.isConnected()) {
            this.showToast("Chat is connecting. Please try again in a moment.", !0);
            return
        }
        let t = this.currentUser()
          , e = {
            id: `own-${Date.now()}`,
            username: t?.username || "You",
            text: n,
            timestamp: new Date().toISOString(),
            userId: t?.id || "current-user",
            avatar: "assets/avatars/avatar-pilot.svg",
            isBot: !1,
            likes: 0
        };
        this.chatMessages.update(i => [...i, e].slice(-200)),
        this.isUserScrolledUp = !1,
        this.isUserHoldingChat = !1,
        this.showNewMessagesPill.set(!1),
        this.accumulatedNewMessagesCount.set(0),
        this.scrollChatToLatest("smooth"),
        this.gameSocket.sendChatMessage(n),
        this.chatDraft.set("")
    }
    formatChatTime(n) {
        let t = new Date(n);
        return Number.isNaN(t.getTime()) ? "--:--:--" : t.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1
        })
    }
    trackChatMessage(n, t) {
        return t.id
    }
    isOwnChatMessage(n) {
        let t = this.currentUser()
          , e = t?.id
          , i = t?.username;
        return !!(n.userId && e && String(n.userId) === String(e) || n.username && i && n.username.toLowerCase() === i.toLowerCase() || n.username === "You" || n.userId === "current-user")
    }
    getChatUsernameColor(n) {
        if (!n)
            return "#60a5fa";
        let t = ["#facc15", "#4ade80", "#f87171", "#38bdf8", "#c084fc", "#fb923c", "#34d399", "#818cf8", "#f472b6"]
          , e = 0;
        for (let i = 0; i < n.length; i++)
            e = e * 31 + n.charCodeAt(i) >>> 0;
        return t[e % t.length]
    }
    openChangeRoomModal(n) {
        let t = n || this.selectedRoom();
        this.pendingRoomSelection.set(t),
        this.showChangeRoomModal.set(!0)
    }
    closeChangeRoomModal() {
        this.showChangeRoomModal.set(!1)
    }
    confirmRoomChange() {
        let n = this.pendingRoomSelection()
          , t = this.getRoom(n);
        this.selectedRoom.set(n),
        this.renderedMultiplierValue = t.animatedMultiplier(),
        this.flightProgress = t.flightProgress,
        this.crashFlightProgress = t.crashFlightProgress,
        this.flyingPhaseStartedAt = t.flyingStartedAt,
        this.planeRenderReady = !1,
        this.planeRenderPosition = {
            x: 0,
            y: 0
        },
        this.planeRenderAngle = -.12,
        this.showChangeRoomModal.set(!1),
        this.syncAudioWithActiveRoom()
    }
    initUserBetHistory() {
        try {
            let r = localStorage.getItem("betzion_my_bet_history");
            if (r) {
                let d = JSON.parse(r);
                if (Array.isArray(d) && d.length > 0) {
                    this.userBetHistoryList.set(d);
                    return
                }
            }
        } catch {}
        let n = new Date
          , t = r => r.toString().padStart(2, "0")
          , e = `${n.getFullYear().toString().slice(-2)}-${t(n.getMonth() + 1)}-${t(n.getDate())}`
          , i = [{
            id: "h-1",
            time: "06:55",
            date: e,
            bet: 10,
            multiplier: 1,
            win: 0,
            cashedOut: !1,
            rawTimestamp: Date.now() - 6e4
        }, {
            id: "h-2",
            time: "06:55",
            date: e,
            bet: 10,
            multiplier: 1.01,
            win: 10.1,
            cashedOut: !0,
            rawTimestamp: Date.now() - 12e4
        }, {
            id: "h-3",
            time: "06:55",
            date: e,
            bet: 10,
            multiplier: 1.01,
            win: 10.1,
            cashedOut: !0,
            rawTimestamp: Date.now() - 18e4
        }, {
            id: "h-4",
            time: "06:55",
            date: e,
            bet: 10,
            multiplier: 1.01,
            win: 10.1,
            cashedOut: !0,
            rawTimestamp: Date.now() - 24e4
        }, {
            id: "h-5",
            time: "06:54",
            date: e,
            bet: 10,
            multiplier: 1.01,
            win: 10.1,
            cashedOut: !0,
            rawTimestamp: Date.now() - 3e5
        }, {
            id: "h-6",
            time: "06:54",
            date: e,
            bet: 10,
            multiplier: 1.01,
            win: 10.1,
            cashedOut: !0,
            rawTimestamp: Date.now() - 36e4
        }, {
            id: "h-7",
            time: "06:54",
            date: e,
            bet: 10,
            multiplier: 1.03,
            win: 10.3,
            cashedOut: !0,
            rawTimestamp: Date.now() - 42e4
        }, {
            id: "h-8",
            time: "06:53",
            date: e,
            bet: 10,
            multiplier: 1.04,
            win: 10.4,
            cashedOut: !0,
            rawTimestamp: Date.now() - 48e4
        }, {
            id: "h-9",
            time: "06:53",
            date: e,
            bet: 10,
            multiplier: 1.31,
            win: 0,
            cashedOut: !1,
            rawTimestamp: Date.now() - 54e4
        }, {
            id: "h-10",
            time: "06:53",
            date: e,
            bet: 10,
            multiplier: 1.44,
            win: 0,
            cashedOut: !1,
            rawTimestamp: Date.now() - 6e5
        }, {
            id: "h-11",
            time: "06:52",
            date: e,
            bet: 10,
            multiplier: 2.15,
            win: 21.5,
            cashedOut: !0,
            rawTimestamp: Date.now() - 66e4
        }, {
            id: "h-12",
            time: "06:50",
            date: e,
            bet: 20,
            multiplier: 3.4,
            win: 68,
            cashedOut: !0,
            rawTimestamp: Date.now() - 72e4
        }];
        this.userBetHistoryList.set(i),
        this.saveUserBetHistory()
    }
    saveUserBetHistory() {
        try {
            localStorage.setItem("betzion_my_bet_history", JSON.stringify(this.userBetHistoryList().slice(0, 50)))
        } catch {}
    }
    recordUserBetHistory(n, t, e, i) {
        let r = new Date
          , d = I => I.toString().padStart(2, "0")
          , f = `${d(r.getHours())}:${d(r.getMinutes())}`
          , w = `${r.getFullYear().toString().slice(-2)}-${d(r.getMonth() + 1)}-${d(r.getDate())}`
          , k = {
            id: `mybet-${Date.now()}-${Math.floor(Math.random() * 1e3)}`,
            time: f,
            date: w,
            bet: n,
            multiplier: Math.max(1, t),
            win: i ? e : 0,
            cashedOut: i,
            rawTimestamp: Date.now()
        };
        this.userBetHistoryList.update(I => [k, ...I].slice(0, 60)),
        this.saveUserBetHistory()
    }
    loadMoreHistory() {
        this.betHistoryLimit.update(r => r + 10);
        let n = new Date
          , t = r => r.toString().padStart(2, "0")
          , e = `${n.getFullYear().toString().slice(-2)}-${t(n.getMonth() + 1)}-${t(n.getDate())}`
          , i = [{
            id: `gen-${Date.now()}-1`,
            time: "06:48",
            date: e,
            bet: 10,
            multiplier: 1.02,
            win: 10.2,
            cashedOut: !0,
            rawTimestamp: Date.now() - 9e5
        }, {
            id: `gen-${Date.now()}-2`,
            time: "06:46",
            date: e,
            bet: 10,
            multiplier: 1.15,
            win: 11.5,
            cashedOut: !0,
            rawTimestamp: Date.now() - 1e6
        }, {
            id: `gen-${Date.now()}-3`,
            time: "06:44",
            date: e,
            bet: 10,
            multiplier: 1,
            win: 0,
            cashedOut: !1,
            rawTimestamp: Date.now() - 11e5
        }, {
            id: `gen-${Date.now()}-4`,
            time: "06:42",
            date: e,
            bet: 10,
            multiplier: 1.05,
            win: 10.5,
            cashedOut: !0,
            rawTimestamp: Date.now() - 12e5
        }];
        this.userBetHistoryList.update(r => [...r, ...i]),
        this.saveUserBetHistory()
    }
    shareBetToChat(n) {
        n.cashedOut && n.win > 0 ? this.chatDraft.set(`I just won ${n.win.toFixed(2)} KES at ${n.multiplier.toFixed(2)}x! \u{1F680}`) : this.chatDraft.set(`Just played a round at ${n.multiplier.toFixed(2)}x! \u{1F525}`),
        this.chatOpen() || (this.chatOpen.set(!0),
        this.gameSocket.openChat()),
        this.showToast("Bet copied to chat draft!")
    }
    openHistoryModal() {
        this.showHistoryModal.set(!0)
    }
    navigateToAdmin() {
        this.showProfileDropdown.set(!1),
        this.router.navigate(["/admin"])
    }
    setWalletTab(n) {
        this.walletTab.set(n),
        n === "transactions" && this.loadTransactionsHistory()
    }
    loadTransactionsHistory() {
        this.isLoadingTransactions = !0,
        this.authService.getTransactionHistory().subscribe({
            next: n => {
                this.transactionHistory = n.transactions || [],
                this.isLoadingTransactions = !1
            }
            ,
            error: () => {
                this.isLoadingTransactions = !1
            }
        })
    }
    openWalletModal() {
        localStorage.setItem("walletReturnUrl", "/play"),
        this.router.navigate(["/deposit"], {
            state: {
                returnUrl: "/play"
            }
        })
    }
    resetMpesaState() {
        this.mpesaStatus.set("idle"),
        this.mpesaStatusMsg.set(""),
        this.mpesaReceipt.set(""),
        this.mpesaCheckoutRequestId = ""
    }
    adjustDepositAmount(n) {
        let t = this.depositVal() || this.minDepositAmount();
        this.depositVal.set(Math.max(this.minDepositAmount(), t + n)),
        this.depositSelectedPreset.set(null),
        this.depositPresetTapCount.set(0)
    }
    selectDepositPreset(n) {
        if (this.depositSelectedPreset() === n) {
            let t = this.depositPresetTapCount() + 1;
            this.depositPresetTapCount.set(t),
            this.depositVal.set(n * t)
        } else
            this.depositSelectedPreset.set(n),
            this.depositPresetTapCount.set(1),
            this.depositVal.set(n)
    }
    addDepositAmount(n) {
        let t = this.depositVal() || this.minDepositAmount();
        this.depositVal.set(t + n)
    }
    adjustWithdrawAmount(n) {
        let t = this.withdrawVal() || 0;
        this.withdrawVal.set(Math.max(10, t + n)),
        this.withdrawSelectedPreset.set(null),
        this.withdrawPresetTapCount.set(0)
    }
    selectWithdrawPreset(n) {
        if (this.withdrawSelectedPreset() === n) {
            let t = this.withdrawPresetTapCount() + 1;
            this.withdrawPresetTapCount.set(t),
            this.withdrawVal.set(n * t)
        } else
            this.withdrawSelectedPreset.set(n),
            this.withdrawPresetTapCount.set(1),
            this.withdrawVal.set(n)
    }
    addWithdrawAmount(n) {
        let t = this.withdrawVal() || 0;
        this.withdrawVal.set(t + n)
    }
    mpesaPollingInterval = null;
    submitDeposit() {
        let n = this.depositVal()
          , t = n != null && !isNaN(Number(n)) && Number(n) > 0 ? Number(n) : this.minDepositAmount();
        if (isNaN(t) || t < this.minDepositAmount()) {
            this.showToast(`Minimum deposit is KES ${this.minDepositAmount().toLocaleString()}`, !0);
            return
        }
        if (t > this.maxDepositAmount()) {
            this.showToast(`Maximum deposit is KES ${this.maxDepositAmount().toLocaleString()}`, !0);
            return
        }
        let i = (this.mpesaPhone() || this.currentUser()?.phone_number || "").replace(/\D/g, "").replace(/^(254|0)+/, "");
        if (!i || i.length < 9) {
            this.showToast("Please enter a valid phone number for the M-Pesa prompt.", !0);
            return
        }
        let r = `254${i}`;
        this.mpesaStatus.set("sending"),
        this.mpesaStatusMsg.set("Initiating M-Pesa STK Push..."),
        this.authService.initiateMpesaSTKPush(t, r).pipe(zt( () => {
            this.mpesaStatus() === "sending" && this.mpesaStatus.set("idle")
        }
        )).subscribe({
            next: d => {
                this.mpesaCheckoutRequestId = d.checkoutRequestId,
                this.mpesaStatus.set("idle"),
                this.mpesaStatusMsg.set(`\u{1F4F1} Check phone (${r})! Enter your M-Pesa PIN to confirm KES ${t}.`),
                this.loadTransactionsHistory(),
                this.startMpesaStatusPolling()
            }
            ,
            error: d => {
                this.mpesaStatus.set("failed"),
                this.mpesaStatusMsg.set(this.friendlyPaymentError(d))
            }
        })
    }
    startMpesaStatusPolling() {
        this.mpesaPollingInterval && clearInterval(this.mpesaPollingInterval);
        let n = this.mpesaCheckoutRequestId
          , t = 0;
        this.mpesaPollingInterval = setInterval( () => {
            if (t++,
            this.mpesaStatus() !== "waiting" || t > 30) {
                clearInterval(this.mpesaPollingInterval),
                this.mpesaPollingInterval = null,
                t > 30 && this.mpesaStatus() === "waiting" && (this.mpesaStatus.set("failed"),
                this.mpesaStatusMsg.set("\u274C M-Pesa payment prompt timed out."),
                this.showToast("M-Pesa payment prompt timed out.", !0));
                return
            }
            n && this.authService.checkMpesaStatus(n).subscribe({
                next: e => {
                    e.status === "completed" ? (this.mpesaStatus.set("success"),
                    e.balance !== void 0 && this.authService.updateBalance(Number(e.balance)),
                    this.showToast("\u{1F4B0} M-Pesa deposit confirmed!"),
                    clearInterval(this.mpesaPollingInterval),
                    this.mpesaPollingInterval = null) : e.status === "failed" && (this.mpesaStatus.set("failed"),
                    this.mpesaStatusMsg.set(`\u274C ${e.reason || "Payment failed or was cancelled."}`),
                    clearInterval(this.mpesaPollingInterval),
                    this.mpesaPollingInterval = null)
                }
                ,
                error: () => {}
            })
        }
        , 1500)
    }
    cancelPendingStk() {
        let n = this.mpesaCheckoutRequestId;
        n ? this.authService.cancelPendingMpesa(n).subscribe({
            next: () => {
                this.resetMpesaState(),
                this.showToast("M-Pesa STK request cancelled."),
                this.loadTransactionsHistory()
            }
            ,
            error: () => {
                this.resetMpesaState(),
                this.loadTransactionsHistory()
            }
        }) : this.resetMpesaState()
    }
    submitWithdraw() {
        let n = this.withdrawVal();
        if (this.isSubmittingWithdrawal())
            return;
        if (n < 200) {
            this.showToast("Minimum withdrawal is 200 KES", !0);
            return
        }
        let t = this.mpesaPhone() || this.currentUser()?.phone_number || "";
        this.isSubmittingWithdrawal.set(!0),
        this.authService.withdraw(n, t).subscribe({
            next: e => {
                let i = typeof e.notification == "string" ? {
                    id: Date.now(),
                    title: "Withdrawal Notice",
                    message: e.notification,
                    type: e.status === "completed" ? "completed" : "pending",
                    createdAt: new Date().toISOString()
                } : e.notification;
                this.walletTab.set("withdraw"),
                this.showWithdrawalNotification(i),
                this.loadTransactionsHistory(),
                setTimeout( () => this.showWalletModal.set(!1), 6e3),
                this.isSubmittingWithdrawal.set(!1)
            }
            ,
            error: e => {
                this.showToast(e || "Withdrawal could not be completed.", !0),
                this.transactionHistoryTab.set("withdrawal"),
                this.loadTransactionsHistory(),
                this.isSubmittingWithdrawal.set(!1)
            }
        })
    }
    goBack() {
        this.router.navigate(["/bets"])
    }
    toggleProfileDropdown() {
        this.showProfileDropdown.update(n => !n)
    }
    closeProfileDropdown() {
        this.showProfileDropdown.set(!1)
    }
    openDepositFromProfile() {
        this.showProfileDropdown.set(!1),
        localStorage.setItem("walletReturnUrl", "/play"),
        this.router.navigate(["/deposit"], {
            state: {
                returnUrl: "/play"
            }
        })
    }
    openWalletPage() {
        localStorage.setItem("walletReturnUrl", "/play"),
        this.router.navigate(["/wallet"], {
            state: {
                returnUrl: "/play"
            }
        })
    }
    openWithdrawFromProfile() {
        this.showProfileDropdown.set(!1),
        localStorage.setItem("walletReturnUrl", "/play"),
        this.router.navigate(["/withdraw"], {
            state: {
                returnUrl: "/play"
            }
        })
    }
    claimBonus() {
        this.claimWelcomeBonus()
    }
    friendlyPaymentError(n) {
        let t = String(n || "").trim();
        return /endpoint not found|stk push failed|archpay/i.test(t) ? "M-Pesa is temporarily unavailable. No payment request was sent. Please try again shortly." : /unauthorized|log in/i.test(t) ? "Your session has expired. Log in again, then retry the deposit." : t || "We could not start the M-Pesa request. Please try again."
    }
    logout() {
        this.showProfileDropdown.set(!1),
        this.authService.logout(),
        this.router.navigate(["/login"])
    }
    toggleFullscreen() {
        document.fullscreenElement ? document.exitFullscreen().catch( () => {}
        ) : document.documentElement.requestFullscreen().catch( () => {}
        )
    }
    showToast(n, t=!1) {
        this.toastMessage.set(n),
        this.isToastError.set(t),
        setTimeout( () => {
            this.toastMessage() === n && this.toastMessage.set(null)
        }
        , 4e3)
    }
    static \u0275fac = function(t) {
        return new (t || c)
    }
    ;
    static \u0275cmp = $({
        type: c,
        selectors: [["app-aviator-game"]],
        viewQuery: function(t, e) {
            if (t & 1 && Gt(be, 5)(fe, 5)(xe, 5),
            t & 2) {
                let i;
                lt(i = ct()) && (e.canvasRef = i.first),
                lt(i = ct()) && (e.canvasContainerRef = i.first),
                lt(i = ct()) && (e.chatScrollRef = i.first)
            }
        },
        hostBindings: function(t, e) {
            t & 1 && u("visibilitychange", function() {
                return e.onDocumentVisibilityChange()
            }, yt)("pagehide", function() {
                return e.onPageHide()
            }, j)("blur", function() {
                return e.onWindowBlur()
            }, j)("focus", function() {
                return e.onWindowFocus()
            }, j)("resize", function() {
                return e.onResize()
            }, j)("keydown.space", function(r) {
                return e.handleSpaceKey(r)
            }, j)("click", function(r) {
                return e.onDocumentClick(r)
            }, yt)
        },
        decls: 152,
        vars: 81,
        consts: [["canvasContainer", ""], ["flightCanvas", ""], ["chatScroll", ""], [1, "aviator-root", "dark-theme"], ["class", "game-loading-splash", 4, "ngIf"], [1, "top-nav"], [1, "nav-left"], ["title", "Back to Dashboard", 1, "go-back-btn", 3, "click"], [1, "brand"], [1, "brand-title"], ["title", "Provably Fair Game Engine", 1, "provably-fair-tag", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "currentColor", 2, "vertical-align", "-2px", "margin-right", "4px"], ["d", "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"], [1, "nav-actions"], [1, "balance-badge", 3, "click"], [1, "balance-label"], [1, "balance-amount"], [1, "wallet-actions"], [1, "wallet-route-btn", 3, "click"], ["id", "profileDropdownWrap", 1, "profile-dropdown-wrap"], ["title", "Open menu", 1, "profile-btn", 3, "click"], ["aria-hidden", "true", 1, "hamburger-icon"], [1, "sr-only"], ["class", "profile-dropdown-menu", 4, "ngIf"], ["type", "button", "title", "Open Betzion live chat", 1, "chat-toggle-btn", 3, "click"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M20 11.25a7.5 7.5 0 0 1-8 7.47A7.9 7.9 0 0 1 8.72 18L4.5 19.5 6 15.28A7.9 7.9 0 0 1 5.28 12 7.5 7.5 0 0 1 12.75 4.5 7.5 7.5 0 0 1 20 11.25Z"], ["title", "Toggle Fullscreen", 1, "nav-icon-btn", 3, "click"], [1, "main-layout"], [1, "left-sidebar", "glass-card"], [1, "bets-tabs"], [3, "click"], [1, "bets-header-info"], [1, "bets-header-text"], [1, "bets-title"], [1, "bets-count"], [1, "bets-table-header"], [1, "col-player"], [1, "col-bet", "text-right"], [1, "col-mult", "text-center"], [1, "col-win", "text-right"], [1, "bets-list"], ["class", "bet-row", 3, "cashed-out", "my-bet", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], ["title", "Open provably fair game history", 3, "click"], ["aria-hidden", "true"], [1, "game-area"], [1, "live-banner"], [1, "live-dot"], [1, "banner-text"], [1, "connection-status"], [1, "history-bar-container", "glass-card"], [1, "room-selector"], ["aria-hidden", "true", 1, "room-close", 3, "click"], [1, "multiplier-ribbon"], ["class", "mult-pill", 3, "low", "mid", "high", 4, "ngFor", "ngForOf"], ["title", "View full history", 1, "more-ribbon-btn", 3, "click"], [1, "canvas-viewport", "glass-card"], [1, "canvas-overlay"], ["class", "stage-overlay waiting", 4, "ngIf"], ["class", "stage-overlay running", 4, "ngIf"], ["class", "stage-overlay crashed", 4, "ngIf"], ["class", "cashout-notification-stack", "aria-live", "polite", 4, "ngIf"], [1, "dual-bet-panels"], [1, "bet-panel-box", "glass-card"], [1, "panel-header-row"], [1, "panel-subtabs"], ["type", "button", 3, "click"], [1, "panel-body"], [1, "controls-col"], [1, "amount-stepper"], ["type", "button", "aria-label", "Decrease amount", 1, "step-btn", 3, "click", "disabled"], [1, "amount-display-box"], ["type", "text", "inputmode", "decimal", 1, "amount-input-field", 3, "input", "blur", "value", "disabled"], ["type", "button", "aria-label", "Increase amount", 1, "step-btn", 3, "click", "disabled"], [1, "preset-buttons"], ["type", "button", 3, "click", "disabled"], [1, "action-col"], ["class", "big-bet-btn green", 3, "disabled", "click", 4, "ngIf"], ["class", "big-bet-btn orange", "disabled", "", 4, "ngIf"], ["class", "big-bet-btn queued", 3, "click", 4, "ngIf"], ["class", "big-bet-btn orange pulse", 3, "disabled", "click", 4, "ngIf"], ["class", "big-bet-btn green", 3, "click", 4, "ngIf"], ["class", "panel-footer-row", 4, "ngIf"], ["class", "bet-panel-box glass-card", 3, "panel-active", "auto-mode", 4, "ngIf"], ["type", "button", "class", "expand-panel2-btn", "title", "Add second bet panel", 3, "click", 4, "ngIf"], ["class", "chat-drawer", "aria-label", "Betzion live chat", 4, "ngIf"], ["class", "bonus-notification", "role", "alert", 3, "info", 4, "ngIf"], ["class", "toast-popup", 3, "error", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-backdrop bet-history-backdrop", 3, "click", 4, "ngIf"], ["class", "modal-backdrop change-room-backdrop", 3, "click", 4, "ngIf"], [1, "game-loading-splash"], [1, "splash-inner"], [1, "splash-powered-label"], [1, "splash-logo-row"], [1, "splash-logo-icon"], ["viewBox", "0 0 48 48", "xmlns", "http://www.w3.org/2000/svg", "fill", "none"], ["cx", "24", "cy", "24", "r", "22", "stroke", "white", "stroke-width", "2", "stroke-dasharray", "4 3", "opacity", "0.6"], ["cx", "24", "cy", "24", "r", "14", "stroke", "white", "stroke-width", "1.5", "stroke-dasharray", "2 2", "opacity", "0.4"], ["cx", "24", "cy", "24", "r", "6", "fill", "white", "opacity", "0.8"], [1, "splash-logo-name"], [1, "splash-logo-tagline"], [1, "splash-dots"], [1, "dot"], [1, "profile-dropdown-menu"], [1, "profile-dropdown-header"], [1, "pdh-avatar"], [1, "pdh-info"], [1, "pdh-name"], [1, "pdh-balance"], [1, "profile-dropdown-divider"], ["class", "pdm-item admin-item", 3, "click", 4, "ngIf"], [1, "pdm-item", 3, "click"], [1, "pdm-icon"], [1, "pdm-item", "bonus-claim-item", 3, "click", "disabled"], [1, "pdm-item", "sound-item", 3, "click"], [1, "pdm-item", "logout-item", 3, "click"], [1, "pdm-item", "admin-item", 3, "click"], [1, "bet-row"], [1, "col-player", "player-name"], [1, "user-avatar-wrap"], ["class", "user-avatar-img", "loading", "lazy", 3, "src", "alt", 4, "ngIf"], ["class", "user-avatar-fallback", 4, "ngIf"], [1, "name-text"], ["class", "mult-badge", 3, "mult-blue", "mult-purple", 4, "ngIf"], [1, "col-win", "text-right", "win-amount"], [4, "ngIf"], ["loading", "lazy", 1, "user-avatar-img", 3, "src", "alt"], [1, "user-avatar-fallback"], [1, "mult-badge"], [1, "mult-pill"], [1, "stage-overlay", "waiting"], [1, "partner-branding-box"], [1, "ufc-partner-badge"], [1, "ufc-title"], [1, "divider"], [1, "aviator-title"], [1, "partner-subtitle"], [1, "red-line-countdown-wrap"], [1, "red-line-countdown"], [1, "spribe-cert-badge"], [1, "cert-title"], [1, "cert-status"], [1, "stage-overlay", "running"], [1, "live-multiplier-display"], [1, "stage-overlay", "crashed"], [1, "flew-away-text"], [1, "crashed-multiplier-display"], ["aria-live", "polite", 1, "cashout-notification-stack"], ["class", "cashout-notification-card", 4, "ngFor", "ngForOf"], [1, "cashout-notification-card"], [1, "cashout-notice-copy"], [1, "cashout-win"], ["type", "button", "aria-label", "Dismiss cash out notification", 1, "cashout-dismiss", 3, "click"], [1, "big-bet-btn", "green", 3, "click", "disabled"], [1, "btn-title"], [1, "btn-sub"], ["disabled", "", 1, "big-bet-btn", "orange"], [1, "big-bet-btn", "queued", 3, "click"], [1, "big-bet-btn", "orange", "pulse", 3, "click", "disabled"], [1, "big-bet-btn", "green", 3, "click"], [1, "panel-footer-row"], [1, "auto-opt-item"], [1, "auto-opt-label"], ["type", "button", "aria-label", "Toggle Auto bet", 1, "toggle-switch-btn", 3, "click"], [1, "toggle-knob"], [1, "auto-opt-item", "auto-cashout-wrap"], ["type", "button", "aria-label", "Toggle Auto Cash Out", 1, "toggle-switch-btn", 3, "click"], [1, "auto-cashout-pill"], ["type", "number", "step", "0.01", "min", "1.01", 1, "auto-mult-input", 3, "ngModelChange", "ngModel"], [1, "auto-mult-x", 3, "click"], ["type", "button", "title", "Minimize panel 2", "aria-label", "Minimize panel 2", 1, "panel-collapse-btn", 3, "click"], [1, "collapse-icon"], ["type", "button", "title", "Add second bet panel", 1, "expand-panel2-btn", 3, "click"], ["aria-label", "Betzion live chat", 1, "chat-drawer"], [1, "chat-mobile-top-bar"], ["type", "button", 1, "chat-mobile-back-btn", 3, "click"], [1, "back-arrow"], ["type", "button", 1, "chat-mobile-fullscreen-btn", 3, "click"], [1, "fs-icon"], [1, "chat-header-card"], [1, "chat-drawer-header"], ["type", "button", "title", "Chat information", "aria-label", "Chat information", 1, "chat-info-btn"], [1, "chat-online-label"], ["type", "button", "title", "Close chat", "aria-label", "Close chat", 1, "chat-close-btn", 3, "click"], [1, "chat-message-list", 3, "scroll", "pointerdown", "pointerup", "pointercancel", "mouseleave", "touchstart", "touchend"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", "class", "chat-new-messages-pill", "aria-label", "Scroll to latest messages", 3, "click", 4, "ngIf"], [1, "chat-composer", 3, "ngSubmit"], ["type", "text", "maxlength", "220", "autocomplete", "off", "placeholder", "Your message...", "name", "chatDraft", "aria-label", "Your message", 3, "ngModelChange", "ngModel", "disabled"], [1, "chat-composer-footer"], ["type", "button", "aria-label", "Add emoji", 1, "chat-emoji-btn"], [1, "chat-character-count"], ["type", "submit", "title", "Send message", "aria-label", "Send message", 1, "chat-send-btn", 3, "disabled"], ["class", "chat-restriction-notice-row", 4, "ngIf"], ["class", "chat-message-row", 3, "own", 4, "ngIf"], [1, "chat-restriction-notice-row"], [1, "chat-restriction-text"], [1, "chat-message-row"], [1, "chat-avatar", 3, "src", "alt"], [1, "chat-message-bubble"], [1, "chat-message-meta"], [1, "chat-username"], [1, "chat-time"], [1, "chat-message-text"], ["type", "button", "aria-label", "Like message", 1, "chat-like-btn", 3, "click"], [1, "heart-icon"], ["class", "likes-count", 4, "ngIf"], [1, "likes-count"], ["type", "button", "aria-label", "Scroll to latest messages", 1, "chat-new-messages-pill", 3, "click"], ["aria-hidden", "true", 1, "pill-arrow"], ["role", "alert", 1, "bonus-notification"], [1, "bonus-notification-icon"], [1, "bonus-notification-content"], [1, "bonus-notification-eyebrow"], ["aria-label", "Dismiss notification", 1, "bonus-notification-close", 3, "click"], [1, "toast-popup"], [1, "toast-close", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal-card", "wallet-screenshot-card", 3, "click"], [1, "wallet-balance-banner"], [1, "banner-title"], [1, "banner-subtitle"], [1, "banner-amount"], [1, "wallet-segmented-tabs"], ["type", "button", 1, "segmented-tab-btn", 3, "click"], ["class", "wallet-form-container", 4, "ngIf"], ["class", "screenshot-tab-body", 4, "ngIf"], [1, "wallet-form-container"], [1, "form-heading"], [1, "form-subheading"], [1, "preset-pills-grid"], ["type", "button", 1, "preset-pill-btn", 3, "click"], [1, "form-group-field"], [1, "form-group-label"], [1, "phone-select-wrap"], [1, "phone-prefix-select"], ["value", "+254"], ["type", "tel", "placeholder", "722220165", 1, "phone-text-input", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "amount-text-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-helper-text"], ["class", "mpesa-status-alert", 3, "failed", "success", 4, "ngIf"], [1, "form-actions-row"], ["type", "button", 1, "action-btn-back", 3, "click"], ["type", "button", 1, "action-btn-green", 3, "click", "disabled"], [1, "mpesa-status-alert"], ["class", "tab-withdrawal-notif-card", "role", "alert", 3, "type-complete", "type-rejected", "type-pending", 4, "ngIf"], ["type", "number", "placeholder", "200", 1, "amount-text-input", 3, "ngModelChange", "ngModel"], ["role", "alert", 1, "tab-withdrawal-notif-card"], [1, "notif-accent-bar"], [1, "notif-content-body"], [1, "notif-top-bar"], [1, "notif-brand-tag"], [1, "notif-icon-emoji"], [1, "notif-brand-title"], [1, "notif-time-stamp"], ["title", "Close", 1, "notif-close-btn", 3, "click"], [1, "notif-card-title"], [1, "notif-card-msg"], [1, "screenshot-tab-body"], [1, "mpesa-main-card"], [1, "tx-history-header"], [1, "mpesa-card-title"], [1, "tx-refresh-btn", 3, "click"], [1, "transaction-type-tabs"], ["class", "tx-loading", 4, "ngIf"], ["class", "tx-empty", 4, "ngIf"], ["class", "history-cards-list", 4, "ngIf"], [1, "tx-loading"], [1, "tx-empty"], [1, "history-cards-list"], ["class", "history-item-card", 4, "ngFor", "ngForOf"], [1, "history-item-card"], [1, "tx-info-col"], [1, "tx-date-sub"], ["class", "tx-ref-code", 4, "ngIf"], [1, "tx-status-tag"], [1, "tx-ref-code"], [1, "modal-backdrop", "bet-history-backdrop", 3, "click"], [1, "modal-card", "bet-history-card", 3, "click"], [1, "bet-history-header"], [1, "bet-history-title"], ["type", "button", "title", "Close", "aria-label", "Close", 1, "bet-history-close-btn", 3, "click"], ["viewBox", "0 0 24 24", "width", "16", "height", "16", "stroke", "currentColor", "stroke-width", "2.5", "fill", "none", "stroke-linecap", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "bet-history-table-header"], [1, "bth-col", "bth-date"], [1, "bth-col", "bth-bet"], [1, "bth-col", "bth-x"], [1, "bth-col", "bth-cashout"], [1, "bth-col", "bth-icons"], [1, "bet-history-list"], ["class", "bet-history-row", 3, "won", 4, "ngFor", "ngForOf"], [1, "bet-history-footer"], ["type", "button", 1, "btn-load-more-history", 3, "click"], [1, "bet-history-row"], [1, "btr-date"], [1, "btr-time"], [1, "btr-day"], [1, "btr-bet"], [1, "btr-multiplier"], [1, "btr-mult-pill"], [1, "btr-cashout"], ["class", "btr-win-amount", 4, "ngIf"], [1, "btr-actions"], ["type", "button", "title", "Provably Fair Verified", "aria-label", "Provably Fair", 1, "btr-icon-btn", "btr-shield-btn"], ["viewBox", "0 0 24 24", "width", "15", "height", "15", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["d", "m9 12 2 2 4-4"], ["type", "button", "title", "Share to Chat", "aria-label", "Share", 1, "btr-icon-btn", "btr-chat-btn", 3, "click"], ["d", "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"], [1, "btr-win-amount"], [1, "modal-backdrop", "change-room-backdrop", 3, "click"], [1, "modal-card", "change-room-card", 3, "click"], [1, "change-room-header"], [1, "change-room-title"], ["type", "button", "title", "Close", 1, "change-room-close-btn", 3, "click"], [1, "change-room-divider"], [1, "change-room-desc"], [1, "change-room-options"], [1, "room-option-item", 3, "click"], [1, "room-radio-circle"], ["class", "room-radio-dot", 4, "ngIf"], [1, "room-option-label"], [1, "change-room-actions"], ["type", "button", 1, "btn-confirm-room-change", 3, "click"], [1, "room-radio-dot"]],
        template: function(t, e) {
            if (t & 1) {
                let i = v();
                o(0, "div", 3),
                P(1, _e, 18, 0, "div", 4),
                o(2, "header", 5)(3, "div", 6)(4, "button", 7),
                u("click", function() {
                    return e.goBack()
                }),
                s(5, " \u2039 Go Back "),
                a(),
                o(6, "div", 8)(7, "span", 9),
                s(8, "Aviator"),
                a(),
                o(9, "span", 10),
                u("click", function() {
                    return e.openHistoryModal()
                }),
                G(),
                o(10, "svg", 11),
                A(11, "path", 12),
                a(),
                s(12, " Provably Fair "),
                a()()(),
                F(),
                o(13, "div", 13)(14, "div", 14),
                u("click", function() {
                    return e.openWalletPage()
                }),
                o(15, "span", 15),
                s(16, "WALLET"),
                a(),
                o(17, "span", 16),
                s(18),
                O(19, "number"),
                a()(),
                o(20, "div", 17)(21, "button", 18),
                u("click", function() {
                    return e.openDepositFromProfile()
                }),
                s(22, "Deposit"),
                a()(),
                o(23, "div", 19)(24, "button", 20),
                u("click", function() {
                    return e.toggleProfileDropdown()
                }),
                o(25, "span", 21),
                A(26, "i")(27, "i")(28, "i"),
                a(),
                o(29, "span", 22),
                s(30, "Open menu"),
                a()(),
                P(31, we, 39, 15, "div", 23),
                a(),
                o(32, "button", 24),
                u("click", function() {
                    return e.toggleChat()
                }),
                G(),
                o(33, "svg", 25),
                A(34, "path", 26),
                a(),
                F(),
                o(35, "span", 22),
                s(36, "Open Betzion live chat"),
                a()(),
                o(37, "button", 27),
                u("click", function() {
                    return e.toggleFullscreen()
                }),
                s(38, " \u26F6 "),
                a()()(),
                o(39, "div", 28)(40, "aside", 29)(41, "div", 30)(42, "button", 31),
                u("click", function() {
                    return e.activeTab.set("all")
                }),
                s(43, "All Bets"),
                a(),
                o(44, "button", 31),
                u("click", function() {
                    return e.activeTab.set("my")
                }),
                s(45, "Previous"),
                a(),
                o(46, "button", 31),
                u("click", function() {
                    return e.activeTab.set("top")
                }),
                s(47, "Top"),
                a()(),
                o(48, "div", 32)(49, "div", 33)(50, "span", 34),
                s(51),
                a(),
                o(52, "span", 35),
                s(53),
                a()()(),
                o(54, "div", 36)(55, "span", 37),
                s(56, "Player"),
                a(),
                o(57, "span", 38),
                s(58, "Bet KES"),
                a(),
                o(59, "span", 39),
                s(60, "X"),
                a(),
                o(61, "span", 40),
                s(62, "Win KES"),
                a()(),
                o(63, "div", 41),
                P(64, ye, 14, 13, "div", 42),
                a(),
                o(65, "div", 43)(66, "button", 44),
                u("click", function() {
                    return e.openHistoryModal()
                }),
                o(67, "span", 45),
                s(68, "\u25C6"),
                a(),
                s(69, " Provably Fair Game "),
                a(),
                o(70, "span"),
                s(71, "Powered by "),
                o(72, "strong"),
                s(73, "SPRIBE"),
                a()()()(),
                o(74, "main", 46)(75, "div", 47)(76, "span", 48),
                s(77, "\u{1F7E2} LIVE"),
                a(),
                o(78, "span", 49),
                s(79, "Mfalme Wa Anga KES 400,000 Daily Crown"),
                a(),
                o(80, "span", 50),
                s(81),
                a()(),
                o(82, "div", 51)(83, "div", 52)(84, "button", 31),
                u("click", function() {
                    return e.openChangeRoomModal(1)
                }),
                o(85, "span", 53),
                u("click", function(d) {
                    return g(i),
                    d.stopPropagation(),
                    m(e.openChangeRoomModal(1))
                }),
                s(86, "\xD7"),
                a(),
                s(87, " Room #1 "),
                a(),
                o(88, "button", 31),
                u("click", function() {
                    return e.openChangeRoomModal(2)
                }),
                o(89, "span", 53),
                u("click", function(d) {
                    return g(i),
                    d.stopPropagation(),
                    m(e.openChangeRoomModal(2))
                }),
                s(90, "\xD7"),
                a(),
                s(91, " Room #2 "),
                a(),
                o(92, "button", 31),
                u("click", function() {
                    return e.openChangeRoomModal(3)
                }),
                o(93, "span", 53),
                u("click", function(d) {
                    return g(i),
                    d.stopPropagation(),
                    m(e.openChangeRoomModal(3))
                }),
                s(94, "\xD7"),
                a(),
                s(95, " Room #3 "),
                a()(),
                o(96, "div", 54),
                P(97, ke, 3, 10, "div", 55),
                a(),
                o(98, "button", 56),
                u("click", function() {
                    return e.openHistoryModal()
                }),
                s(99, " \u{1F4DC} History "),
                a()(),
                o(100, "div", 57, 0),
                A(102, "canvas", null, 1),
                o(104, "div", 58),
                P(105, Se, 18, 2, "div", 59)(106, Ae, 4, 10, "div", 60)(107, Te, 6, 4, "div", 61)(108, Ee, 2, 1, "div", 62),
                a()(),
                o(109, "div", 63)(110, "div", 64)(111, "div", 65)(112, "div", 66)(113, "button", 67),
                u("click", function() {
                    return e.setPanelMode(1, "bet")
                }),
                s(114, "Bet"),
                a(),
                o(115, "button", 67),
                u("click", function() {
                    return e.setPanelMode(1, "auto")
                }),
                s(116, "Auto"),
                a()()(),
                o(117, "div", 68)(118, "div", 69)(119, "div", 70)(120, "button", 71),
                u("click", function() {
                    return e.adjustPanelAmount(1, -10)
                }),
                s(121, "-"),
                a(),
                o(122, "div", 72)(123, "input", 73),
                O(124, "number"),
                u("input", function(d) {
                    return e.onAmountInput(1, d)
                })("blur", function(d) {
                    return e.onAmountBlur(1, d)
                }),
                a()(),
                o(125, "button", 74),
                u("click", function() {
                    return e.adjustPanelAmount(1, 10)
                }),
                s(126, "+"),
                a()(),
                o(127, "div", 75)(128, "button", 76),
                u("click", function() {
                    return e.selectPresetAmount(1, 100)
                }),
                s(129, "100"),
                a(),
                o(130, "button", 76),
                u("click", function() {
                    return e.selectPresetAmount(1, 250)
                }),
                s(131, "250"),
                a(),
                o(132, "button", 76),
                u("click", function() {
                    return e.selectPresetAmount(1, 1e3)
                }),
                s(133, "1,000"),
                a(),
                o(134, "button", 76),
                u("click", function() {
                    return e.selectPresetAmount(1, 25e3)
                }),
                s(135, "25,000"),
                a()()(),
                o(136, "div", 77),
                P(137, Be, 6, 6, "button", 78)(138, ze, 6, 4, "button", 79)(139, Ne, 5, 0, "button", 80)(140, De, 6, 6, "button", 81)(141, Ve, 6, 4, "button", 82)(142, Re, 6, 4, "button", 82),
                a()(),
                P(143, Ge, 15, 7, "div", 83),
                a(),
                P(144, qe, 37, 36, "div", 84)(145, Ke, 3, 0, "button", 85),
                a()(),
                P(146, tn, 34, 11, "aside", 86),
                a(),
                P(147, en, 12, 5, "div", 87)(148, nn, 5, 3, "div", 88)(149, mn, 18, 11, "div", 89)(150, fn, 25, 5, "div", 90)(151, wn, 30, 15, "div", 91),
                a()
            }
            t & 2 && (x("chat-open", e.chatOpen()),
            l(),
            h("ngIf", e.gameLoading()),
            l(17),
            M("", S(19, 75, e.userBalance(), "1.2-2"), " KES"),
            l(6),
            kt("aria-expanded", e.showProfileDropdown()),
            l(7),
            h("ngIf", e.showProfileDropdown()),
            l(),
            x("active", e.chatOpen()),
            kt("aria-expanded", e.chatOpen()),
            l(7),
            x("chat-open", e.chatOpen()),
            l(3),
            x("active", e.activeTab() === "all"),
            l(2),
            x("active", e.activeTab() === "my"),
            l(2),
            x("active", e.activeTab() === "top"),
            l(5),
            M(" ", e.activeTab() === "all" ? "ALL BETS" : e.activeTab() === "my" ? "PREVIOUS" : "TOP", " "),
            l(2),
            y(e.betsCount()),
            l(11),
            h("ngForOf", e.displayBetsList()),
            l(16),
            x("online", e.isConnected()),
            l(),
            M(" ", e.isConnected() ? "Socket Connected" : "Reconnecting...", " "),
            l(3),
            x("active", e.selectedRoom() === 1),
            l(4),
            x("active", e.selectedRoom() === 2),
            l(4),
            x("active", e.selectedRoom() === 3),
            l(5),
            h("ngForOf", e.history()),
            l(8),
            h("ngIf", e.gameState() === "WAITING"),
            l(),
            h("ngIf", e.gameState() === "RUNNING"),
            l(),
            h("ngIf", e.gameState() === "CRASHED"),
            l(),
            h("ngIf", e.cashoutNotifications().length),
            l(2),
            x("panel-active", e.panel1().hasActiveBet)("auto-mode", e.panel1().mode === "auto"),
            l(2),
            x("auto-mode", e.panel1().mode === "auto"),
            l(),
            x("active", e.panel1().mode === "bet"),
            l(2),
            x("active", e.panel1().mode === "auto"),
            l(5),
            h("disabled", e.panel1().hasActiveBet || e.panel1().queuedAmount > 0 || e.panel1().isPending),
            l(3),
            h("value", S(124, 78, e.panel1().amount, "1.2-2"))("disabled", e.panel1().hasActiveBet || e.panel1().queuedAmount > 0 || e.panel1().isPending),
            l(2),
            h("disabled", e.panel1().hasActiveBet || e.panel1().queuedAmount > 0 || e.panel1().isPending),
            l(3),
            x("active", e.panel1().selectedPreset === 100),
            h("disabled", e.panel1().hasActiveBet || e.panel1().queuedAmount > 0 || e.panel1().isPending),
            l(2),
            x("active", e.panel1().selectedPreset === 250),
            h("disabled", e.panel1().hasActiveBet || e.panel1().queuedAmount > 0 || e.panel1().isPending),
            l(2),
            x("active", e.panel1().selectedPreset === 1e3),
            h("disabled", e.panel1().hasActiveBet || e.panel1().queuedAmount > 0 || e.panel1().isPending),
            l(2),
            x("active", e.panel1().selectedPreset === 25e3),
            h("disabled", e.panel1().hasActiveBet || e.panel1().queuedAmount > 0 || e.panel1().isPending),
            l(3),
            h("ngIf", e.gameState() === "WAITING" && !e.panel1().hasActiveBet && !e.panel1().queuedAmount),
            l(),
            h("ngIf", e.gameState() === "WAITING" && e.panel1().hasActiveBet),
            l(),
            h("ngIf", e.panel1().queuedAmount > 0),
            l(),
            h("ngIf", e.gameState() === "RUNNING" && e.panel1().hasActiveBet && !e.panel1().hasCashedOut),
            l(),
            h("ngIf", (e.gameState() === "RUNNING" || e.gameState() === "CRASHED") && e.panel1().hasCashedOut && !e.panel1().queuedAmount),
            l(),
            h("ngIf", (e.gameState() === "RUNNING" || e.gameState() === "CRASHED") && !e.panel1().hasActiveBet && !e.panel1().hasCashedOut && !e.panel1().queuedAmount),
            l(),
            h("ngIf", e.panel1().mode === "auto"),
            l(),
            h("ngIf", !e.panel2Collapsed()),
            l(),
            h("ngIf", e.panel2Collapsed()),
            l(),
            h("ngIf", e.chatOpen()),
            l(),
            h("ngIf", e.bonusNotif()),
            l(),
            h("ngIf", e.toastMessage()),
            l(),
            h("ngIf", e.showWalletModal()),
            l(),
            h("ngIf", e.showHistoryModal()),
            l(),
            h("ngIf", e.showChangeRoomModal()))
        },
        dependencies: [Y, Lt, K, xt, te, ht, bt, dt, mt, ut, Qt, ne, ft, gt, Zt, qt, pt, $t],
        styles: ['@charset "UTF-8";.aviator-root[_ngcontent-%COMP%]{height:100dvh;max-height:100dvh;overflow:hidden;display:flex;flex-direction:column;box-sizing:border-box;background:#111518;color:#e9edf1;font-family:Arial,Helvetica,sans-serif;transition:padding-right .22s ease}.game-loading-splash[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:9999;background:#000;display:flex;align-items:center;justify-content:center;animation:_ngcontent-%COMP%_splash-fade-out .4s ease 2.7s forwards}.game-loading-splash[_ngcontent-%COMP%]   .splash-inner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px;animation:_ngcontent-%COMP%_splash-pop-in .5s cubic-bezier(.16,1,.3,1) both}.game-loading-splash[_ngcontent-%COMP%]   .splash-powered-label[_ngcontent-%COMP%]{margin:0;font-size:11px;font-weight:600;letter-spacing:2px;color:#ffffff73;text-transform:uppercase}.game-loading-splash[_ngcontent-%COMP%]   .splash-logo-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin:4px 0 2px}.game-loading-splash[_ngcontent-%COMP%]   .splash-logo-icon[_ngcontent-%COMP%]{width:38px;height:38px;animation:_ngcontent-%COMP%_splash-logo-spin 8s linear infinite}.game-loading-splash[_ngcontent-%COMP%]   .splash-logo-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.game-loading-splash[_ngcontent-%COMP%]   .splash-logo-name[_ngcontent-%COMP%]{font-size:32px;font-weight:900;letter-spacing:2px;color:#fff;font-family:Arial,Helvetica,sans-serif}.game-loading-splash[_ngcontent-%COMP%]   .splash-logo-tagline[_ngcontent-%COMP%]{margin:0;font-size:9px;letter-spacing:2.5px;color:#ffffff59;text-transform:uppercase}.game-loading-splash[_ngcontent-%COMP%]   .splash-dots[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;margin-top:20px}.game-loading-splash[_ngcontent-%COMP%]   .splash-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:50%;background:#c00;animation:_ngcontent-%COMP%_splash-dot-pulse 1.2s ease-in-out infinite}.game-loading-splash[_ngcontent-%COMP%]   .splash-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(1){animation-delay:0s}.game-loading-splash[_ngcontent-%COMP%]   .splash-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(2){animation-delay:.2s;background:#f22}.game-loading-splash[_ngcontent-%COMP%]   .splash-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(3){animation-delay:.4s}@keyframes _ngcontent-%COMP%_splash-pop-in{0%{opacity:0;transform:scale(.92) translateY(12px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes _ngcontent-%COMP%_splash-fade-out{0%{opacity:1;pointer-events:auto}to{opacity:0;pointer-events:none}}@keyframes _ngcontent-%COMP%_splash-dot-pulse{0%,to{transform:scale(1);opacity:.5}50%{transform:scale(1.45);opacity:1}}@keyframes _ngcontent-%COMP%_splash-logo-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.glass-card[_ngcontent-%COMP%]{background:#1a1d1e;border:1px solid #22282b;border-radius:13px}.top-nav[_ngcontent-%COMP%]{position:relative;height:60px;min-height:60px;display:block;padding:0;background:#182431}.nav-left[_ngcontent-%COMP%]{display:contents}.go-back-btn[_ngcontent-%COMP%]{position:absolute;z-index:10;top:0;left:0;height:27px;padding:0 12px;border:0;background:transparent;color:#fff;font-size:11px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:4px;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;transition:background .15s ease}.go-back-btn[_ngcontent-%COMP%]:hover{background:#ffffff24}.go-back-btn[_ngcontent-%COMP%]:active{background:#ffffff3d;transform:scale(.97)}.brand[_ngcontent-%COMP%]{position:absolute;top:27px;right:0;left:0;height:33px;display:flex;align-items:center;box-sizing:border-box;padding:0 9px;background:#1c1f1f;border-top:1px solid #1c2227;border-bottom:1px solid #262c2e}.brand[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%]{color:#ed0a45;font-family:Georgia,Times New Roman,serif;font-size:20px;line-height:1;font-style:italic;font-weight:700;letter-spacing:-1.4px}.brand[_ngcontent-%COMP%]   .provably-fair-tag[_ngcontent-%COMP%]{display:none}.nav-actions[_ngcontent-%COMP%]{position:absolute;z-index:3;right:7px;bottom:2px;height:29px;display:flex;align-items:center;gap:9px}.wallet-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.wallet-route-btn[_ngcontent-%COMP%]{min-width:64px;height:25px;padding:0 9px;border:1px solid #ffcf21;border-radius:6px;background:#f4bc0d;color:#1b180b;font:800 10px/1 Arial,sans-serif;cursor:pointer;text-transform:uppercase}.wallet-route-btn[_ngcontent-%COMP%]:hover{background:#ffda39}.nav-actions[_ngcontent-%COMP%]   .balance-badge[_ngcontent-%COMP%]{display:block;padding:0;border:0;background:transparent;cursor:pointer}.nav-actions[_ngcontent-%COMP%]   .balance-label[_ngcontent-%COMP%]{display:none}.nav-actions[_ngcontent-%COMP%]   .balance-amount[_ngcontent-%COMP%]{color:#20b90a;font-size:12px;font-weight:700}.nav-actions[_ngcontent-%COMP%]   .nav-icon-btn[_ngcontent-%COMP%]{width:13px;min-width:13px;height:18px;padding:0;border:0;background:transparent;color:#aeb5b9;font-size:0;line-height:1;cursor:pointer}.nav-actions[_ngcontent-%COMP%]   .nav-icon-btn[_ngcontent-%COMP%]:hover{color:#fff}.nav-actions[_ngcontent-%COMP%]   .nav-icon-btn[_ngcontent-%COMP%]:after{display:block;color:currentColor;font:700 14px/18px Arial,sans-serif;text-align:center}.nav-actions[_ngcontent-%COMP%]   .deposit-btn[_ngcontent-%COMP%]:after{content:"+"}.nav-actions[_ngcontent-%COMP%]   .nav-icon-btn[_ngcontent-%COMP%]:nth-of-type(2):after{content:"\\2630";font-size:13px}.nav-actions[_ngcontent-%COMP%]   .nav-icon-btn[_ngcontent-%COMP%]:nth-of-type(3):after{content:"\\25cb";font-size:16px}.nav-actions[_ngcontent-%COMP%]   .nav-icon-btn[_ngcontent-%COMP%]:last-child{position:absolute;right:0;bottom:30px;width:112px;height:27px}.nav-actions[_ngcontent-%COMP%]   .nav-icon-btn[_ngcontent-%COMP%]:last-child:after{content:"View Fullscreen  \\2922";color:#fff;font-size:10px;line-height:27px;text-align:right;white-space:nowrap}.nav-actions[_ngcontent-%COMP%]   .profile-dropdown-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.profile-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:29px;height:26px;padding:0;border:0;border-radius:5px;background:transparent;color:#c7cdd0;cursor:pointer;transition:background .2s,color .2s}.profile-btn[_ngcontent-%COMP%]:hover{background:#ffffff14;color:#fff}.hamburger-icon[_ngcontent-%COMP%]{display:flex;width:12px;flex-direction:column;gap:2px}.hamburger-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;width:12px;height:1.5px;border-radius:2px;background:currentColor}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.main-layout[_ngcontent-%COMP%]{flex:1;min-height:0;overflow:hidden;display:flex;gap:4px;padding:3px 4px 4px;box-sizing:border-box}.left-sidebar[_ngcontent-%COMP%]{flex:0 0 clamp(240px,22vw,308px);min-height:0;overflow:hidden;display:flex;flex-direction:column;box-sizing:border-box;padding:12px 12px 8px;border:0;border-radius:26px;background:#1b1d1e}.bets-tabs[_ngcontent-%COMP%]{height:40px;flex:0 0 40px;display:flex;align-items:center;box-sizing:border-box;margin-bottom:15px;padding:3px;border-radius:22px;background:#111315;border:0}.bets-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;height:100%;padding:0 6px;border:0;border-radius:18px;background:transparent;color:#aab0b5;font-size:13px;font-weight:500;cursor:pointer;transition:background .15s,color .15s}.bets-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#2b3036;color:#fff;font-weight:600;box-shadow:0 2px 6px #0000004d}.bets-header-info[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;flex:0 0 auto;padding:0 10px 10px;box-sizing:border-box;line-height:1.2}.bets-header-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.bets-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:500;letter-spacing:.2px}.bets-count[_ngcontent-%COMP%]{color:#fff;font-size:17px;font-weight:500}.bets-table-header[_ngcontent-%COMP%], .bet-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.32fr 1.05fr .76fr 1.12fr;align-items:center}.bets-table-header[_ngcontent-%COMP%]{flex:0 0 28px;padding:3px 12px 6px;box-sizing:border-box;color:#858c90;font-size:11px;font-weight:400}.bets-list[_ngcontent-%COMP%]{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:6px;padding-bottom:6px}.bets-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.bets-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent;border-radius:3px}.bets-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;background:#2b3036}.bets-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#40464e}.bet-row[_ngcontent-%COMP%]{flex:0 0 43px;min-height:43px;box-sizing:border-box;padding:5px 12px;border-radius:22px;background:#15181a;border:0;color:#c7cdd0;font-size:13px;transition:background .2s ease,border-color .2s ease}.bet-row.my-bet[_ngcontent-%COMP%]{border-left:3px solid #ec0043}.bet-row.cashed-out[_ngcontent-%COMP%]{background:#173307;border:0}.player-name[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px;overflow:hidden;color:#c7cdd0;font-weight:400;font-size:13px;text-overflow:ellipsis;white-space:nowrap}.name-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;letter-spacing:.2px}.user-avatar-wrap[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:#1f2328;border:1px solid rgba(255,255,255,.12);flex-shrink:0;overflow:hidden}.user-avatar-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%;display:block}.user-avatar-fallback[_ngcontent-%COMP%]{font-size:11px}.col-bet[_ngcontent-%COMP%]{color:#c7cdd0;font-size:13px;font-weight:400}.mult-badge[_ngcontent-%COMP%]{padding:0;font-size:13px;font-weight:500}.mult-badge.mult-blue[_ngcontent-%COMP%]{color:#28a8ea;text-shadow:0 0 6px rgba(40,168,234,.35)}.mult-badge.mult-purple[_ngcontent-%COMP%]{color:#9d5cf2;text-shadow:0 0 8px rgba(157,92,242,.45)}.win-amount[_ngcontent-%COMP%]{color:#c7cdd0;font-size:13px;font-weight:400}.text-right[_ngcontent-%COMP%]{text-align:right}.text-center[_ngcontent-%COMP%]{text-align:center}.sidebar-footer[_ngcontent-%COMP%]{display:flex;flex:0 0 28px;align-items:center;justify-content:space-between;box-sizing:border-box;padding:4px 10px 0;border-top:0;color:#777e83;font-size:10px}.sidebar-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;border:0;background:transparent;color:#b4bac0;font-size:10px;cursor:pointer}.sidebar-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ebeff0}.sidebar-footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#b8bec1}.game-area[_ngcontent-%COMP%]{flex:1;min-width:0;min-height:0;overflow:hidden;display:flex;flex-direction:column;gap:3px}.live-banner[_ngcontent-%COMP%]{position:relative;flex:0 0 33px;display:flex;align-items:center;gap:8px;box-sizing:border-box;padding:0 37px 0 10px;border:1px solid #166f1d;border-radius:17px;background:linear-gradient(100deg,#2f1728,#242127 44%,#1d3d2e)}.live-dot[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;min-width:42px;color:#c8ced2;font-size:9px}.live-dot[_ngcontent-%COMP%]:before{content:"";width:8px;height:8px;border:1px solid #54dc66;border-radius:50%;box-shadow:inset 0 0 0 2px #26352b}.banner-text[_ngcontent-%COMP%]{flex:1;overflow:hidden;color:#e5e5e5;font-size:11px;font-weight:700;text-align:center;text-overflow:ellipsis;white-space:nowrap}.connection-status[_ngcontent-%COMP%]{display:none}.live-banner[_ngcontent-%COMP%]:after{content:"\\203a";position:absolute;top:4px;right:4px;width:23px;height:23px;border-radius:50%;background:#ffbe18;color:#252313;font-size:25px;line-height:19px;text-align:center}.history-bar-container[_ngcontent-%COMP%]{position:relative;flex:0 0 49px;display:grid;grid-template-rows:20px 19px;gap:10px;padding:0;border:0;border-radius:0;background:transparent}.room-selector[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,133px);gap:7px;padding-left:2px}.room-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:5px;padding:0 8px;border:0;border-radius:6px;background:#1d2022;color:#899196;font-size:10px;line-height:1;text-align:center;cursor:pointer}.room-selector[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{border:1px solid #16af16;background:#111713;color:#e2e6e8}.room-close[_ngcontent-%COMP%]{color:#7d878c;font-size:12px;font-weight:700;line-height:1}.room-selector[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   .room-close[_ngcontent-%COMP%]{color:#ed0042}.multiplier-ribbon[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;min-width:0;overflow:hidden;padding:0 37px 0 9px}.mult-pill[_ngcontent-%COMP%]{flex:0 0 auto;color:#00b8d1;font-size:9px;line-height:1}.mult-pill.mid[_ngcontent-%COMP%]{color:#9a35cf}.mult-pill.high[_ngcontent-%COMP%]{color:#d826c0}.more-ribbon-btn[_ngcontent-%COMP%]{position:absolute;right:5px;bottom:2px;width:18px;height:12px;padding:0;overflow:hidden;border:0;border-radius:8px;background:#414549;color:transparent;font-size:0;cursor:pointer}.more-ribbon-btn[_ngcontent-%COMP%]:after{content:"\\2022\\2022\\2022";color:#d2d6d8;font-size:7px;letter-spacing:1px;line-height:10px}.canvas-viewport[_ngcontent-%COMP%]{position:relative;flex:0 1 clamp(260px,42vh,400px);min-height:220px;overflow:hidden;border:1px solid #272c2d;border-radius:10px;background:#050606}.canvas-viewport[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{position:absolute;inset:0;display:block;width:100%;height:100%}.canvas-overlay[_ngcontent-%COMP%]{position:absolute;z-index:2;inset:0;pointer-events:none}.stage-overlay.waiting[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}.betting-countdown-box[_ngcontent-%COMP%]{display:none}.partner-branding-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px;transform:translateY(-3%)}.ufc-partner-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:13px;font-size:clamp(32px,4.5vw,54px);font-weight:900;line-height:.86}.ufc-title[_ngcontent-%COMP%]{color:#e10c2d;font-style:italic}.ufc-partner-badge[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{color:#e5e5e5;font-size:1.06em;font-weight:200}.ufc-partner-badge[_ngcontent-%COMP%]   .aviator-title[_ngcontent-%COMP%]{color:#ed1744;font-family:Georgia,Times New Roman,serif;font-size:.64em;font-style:italic}.partner-subtitle[_ngcontent-%COMP%]{position:relative;color:#f7f7f7;font-size:clamp(12px,1.65vw,20px);font-weight:900;letter-spacing:.8px}.red-line-countdown-wrap[_ngcontent-%COMP%]{width:120px;height:4px;margin:7px auto;background:#ed004240;border-radius:2px;overflow:hidden;display:flex;justify-content:center;align-items:center}.red-line-countdown[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,#ff1744,#ed0042);border-radius:2px;box-shadow:0 0 10px #ed0042,0 0 4px #ff1744;transition:width .03s linear}.spribe-cert-badge[_ngcontent-%COMP%]{display:flex;width:81px;height:56px;box-sizing:border-box;flex-direction:column;align-items:center;justify-content:center;gap:2px;margin-top:8px;padding:4px 5px 3px;border:1px solid #8ab438;border-radius:8px;background:#26350d;font-weight:800}.cert-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;color:#fff;font-size:11px}.cert-icon[_ngcontent-%COMP%]{color:#dbe6de;font-size:11px}.cert-status[_ngcontent-%COMP%]{padding:2px 4px;border-radius:3px;background:#5a921d;color:#effadd;font-size:7px;white-space:nowrap}.cert-status[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:inline-flex;width:8px;height:8px;align-items:center;justify-content:center;border-radius:50%;background:#2cc43a;color:#fff;font-size:6px}.cert-since[_ngcontent-%COMP%]{color:#ddd;font-size:6px;font-weight:400}.stage-overlay.running[_ngcontent-%COMP%], .stage-overlay.crashed[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}.waiting-multiplier-display[_ngcontent-%COMP%], .live-multiplier-display[_ngcontent-%COMP%]{margin:-3% 0 0;color:#fff!important;-webkit-text-fill-color:#ffffff!important;background:none!important;font-size:clamp(54px,8.5vw,92px);font-weight:900;letter-spacing:-.5px;line-height:1;text-shadow:0 4px 18px rgba(0,0,0,.75);-webkit-user-select:none;user-select:none}.live-multiplier-display.mult-blue[_ngcontent-%COMP%], .live-multiplier-display.mult-purple[_ngcontent-%COMP%], .live-multiplier-display.mult-pink[_ngcontent-%COMP%]{color:#fff!important;-webkit-text-fill-color:#ffffff!important;text-shadow:0 4px 18px rgba(0,0,0,.75)}.stage-overlay.crashed[_ngcontent-%COMP%]{flex-direction:column}.flew-away-text[_ngcontent-%COMP%]{margin:0;color:#e7e7e7;font-size:clamp(21px,3vw,31px);font-weight:900}.crashed-multiplier-display[_ngcontent-%COMP%]{margin:2px 0 0;color:#e2002e;font-size:clamp(54px,7vw,78px);font-weight:900;line-height:1}.dual-bet-panels[_ngcontent-%COMP%]{flex:0 0 auto;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;position:relative}.bet-panel-box[_ngcontent-%COMP%]{box-sizing:border-box;min-width:0;min-height:276px;padding:12px 28px 0;background:#1a1c1e;border:0;border-radius:30px;display:flex;flex-direction:column;justify-content:flex-start;overflow:hidden;transition:min-height .18s ease,background .18s ease}.bet-panel-box.panel-active[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #20b40f}.bet-panel-box.auto-mode[_ngcontent-%COMP%]{min-height:0}.panel-header-row[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;min-height:48px;margin-bottom:42px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-header-row[_ngcontent-%COMP%]{margin-bottom:16px}.panel-subtabs[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:space-between;width:min(310px,65%);height:42px;box-sizing:border-box;padding:2px;border-radius:22px;background:#0d0f12}.panel-subtabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;height:100%;padding:0;border:0;border-radius:20px;background:transparent;color:#64748b;font-size:18px;font-weight:400;cursor:pointer;transition:all .15s ease}.panel-subtabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#252a33;color:#fff;font-weight:700}.panel-subtabs.auto-mode[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child:not(.active){color:#ed0a31}.panel-collapse-btn[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);right:2px;width:44px;height:44px;padding:0;border:5px solid #121416;border-radius:50%;background:#292c31;color:#8c95a3;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:25px;line-height:1}.panel-collapse-btn[_ngcontent-%COMP%]:hover{background:#252b36;color:#fff}.expand-panel2-btn[_ngcontent-%COMP%]{height:100%;min-height:110px;border:1px dashed #2d333d;border-radius:16px;background:#121418;color:#8c95a3;display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer}.expand-panel2-btn[_ngcontent-%COMP%]:hover{background:#181b22;color:#fff;border-color:#22c55e}.panel-body[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,210fr) minmax(0,320fr);width:min(100%,546px);justify-content:center;gap:14px;align-items:center;margin:0 auto}.controls-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:7px}.amount-stepper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:42px;box-sizing:border-box;padding:1px 4px;background:transparent;border-radius:21px}.amount-stepper[_ngcontent-%COMP%]   .step-btn[_ngcontent-%COMP%]{width:40px;height:40px;padding:0;border:0;border-radius:50%;background:#2d3035;color:#aeb3bd;font-size:28px;font-weight:400;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1}.amount-stepper[_ngcontent-%COMP%]   .step-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:#323946;color:#fff}.amount-stepper[_ngcontent-%COMP%]   .amount-display-box[_ngcontent-%COMP%]{flex:1;text-align:center}.amount-stepper[_ngcontent-%COMP%]   .amount-input-field[_ngcontent-%COMP%]{width:100%;border:0;outline:none;background:transparent;color:#fff;font-family:inherit;font-size:13px;font-weight:800;text-align:center;padding:0;margin:0;-moz-appearance:textfield;appearance:textfield}.amount-stepper[_ngcontent-%COMP%]   .amount-input-field[_ngcontent-%COMP%]::-webkit-outer-spin-button, .amount-stepper[_ngcontent-%COMP%]   .amount-input-field[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.amount-stepper[_ngcontent-%COMP%]   .amount-input-field[_ngcontent-%COMP%]:focus{color:#42d86c}.amount-stepper[_ngcontent-%COMP%]   .amount-val-formatted[_ngcontent-%COMP%]{color:#fff;font-size:26px;font-weight:800;letter-spacing:-.2px}.preset-buttons[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:7px}.preset-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:36px;padding:0;border:0;border-radius:18px;background:#121416;color:#9da7b8;font-size:20px;font-weight:400;cursor:pointer;transition:all .15s ease}.preset-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled){background:#232831;color:#fff}.preset-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#19ae08;color:#fff}.action-col[_ngcontent-%COMP%]{display:flex;min-width:0}.big-bet-btn[_ngcontent-%COMP%]{width:100%;height:122px;padding:4px 6px;border:2px solid #d7dbe0;border-radius:18px;box-shadow:0 0 0 5px #0d0f12;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:transform .1s ease,filter .15s ease}.big-bet-btn[_ngcontent-%COMP%]:active{transform:scale(.98)}.big-bet-btn.green[_ngcontent-%COMP%]{background:#1eaf08;color:#fff;box-shadow:0 0 0 5px #0d0f12,inset 0 1px #ffffff38}.big-bet-btn.green[_ngcontent-%COMP%]:disabled{background:#1eaf08;color:#fff;opacity:.7}.big-bet-btn.orange[_ngcontent-%COMP%]{background:#d7660a;color:#fff}.big-bet-btn.queued[_ngcontent-%COMP%]{background:#d80728;color:#fff}.big-bet-btn.queued[_ngcontent-%COMP%]   .btn-sub[_ngcontent-%COMP%]{font-size:11px;font-weight:700}.big-bet-btn[_ngcontent-%COMP%]   .btn-title[_ngcontent-%COMP%]{display:block;font-size:34px;font-weight:400;line-height:1.1;letter-spacing:.2px}.big-bet-btn[_ngcontent-%COMP%]   .btn-sub[_ngcontent-%COMP%]{display:block;margin-top:1px;font-size:31px;font-weight:400;letter-spacing:-.2px}.panel-footer-row[_ngcontent-%COMP%]{display:flex;min-height:58px;align-items:center;justify-content:space-between;margin:16px -28px 0;padding:0 clamp(28px,9%,60px);border-top:2px solid #111315;gap:12px;animation:_ngcontent-%COMP%_footerExpand .18s ease-out both}.panel-footer-row[_ngcontent-%COMP%]   .auto-opt-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px}.panel-footer-row[_ngcontent-%COMP%]   .auto-opt-label[_ngcontent-%COMP%]{color:#cbd5e1;font-size:18px;font-weight:400}.panel-footer-row[_ngcontent-%COMP%]   .toggle-switch-btn[_ngcontent-%COMP%]{width:50px;height:34px;border-radius:18px;background:#111315;border:0;position:relative;cursor:pointer;padding:0;transition:background .15s ease}.panel-footer-row[_ngcontent-%COMP%]   .toggle-switch-btn[_ngcontent-%COMP%]   .toggle-knob[_ngcontent-%COMP%]{position:absolute;top:4px;left:4px;width:26px;height:26px;border-radius:50%;background:#2d3035;transition:transform .15s ease,background .15s ease}.panel-footer-row[_ngcontent-%COMP%]   .toggle-switch-btn.active[_ngcontent-%COMP%]{background:#16a34a}.panel-footer-row[_ngcontent-%COMP%]   .toggle-switch-btn.active[_ngcontent-%COMP%]   .toggle-knob[_ngcontent-%COMP%]{transform:translate(16px);background:#fff}.panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;background:#0d0f12;border-radius:18px;padding:2px 10px;border:1px solid #20242b;height:34px;margin-left:4px}.panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill[_ngcontent-%COMP%]   .auto-mult-input[_ngcontent-%COMP%]{width:48px;border:0;background:transparent;color:#64748b;font-size:18px;font-weight:700;text-align:center;outline:none;-moz-appearance:textfield}.panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill[_ngcontent-%COMP%]   .auto-mult-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill[_ngcontent-%COMP%]   .auto-mult-input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill[_ngcontent-%COMP%]   .auto-mult-x[_ngcontent-%COMP%]{color:#475569;font-size:16px;cursor:pointer;line-height:1}.panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill[_ngcontent-%COMP%]   .auto-mult-x[_ngcontent-%COMP%]:hover{color:#fff}.panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill.active[_ngcontent-%COMP%]{border-color:#334155}.panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill.active[_ngcontent-%COMP%]   .auto-mult-input[_ngcontent-%COMP%]{color:#fff}.panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill.active[_ngcontent-%COMP%]   .auto-mult-x[_ngcontent-%COMP%]{color:#94a3b8}@keyframes _ngcontent-%COMP%_footerExpand{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}@media(max-width:1200px)and (min-width:901px){.left-sidebar[_ngcontent-%COMP%]{flex-basis:clamp(200px,22vw,260px)}.room-selector[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(70px,1fr))}.canvas-viewport[_ngcontent-%COMP%]{flex-basis:clamp(220px,36vh,320px);min-height:220px}.bet-panel-box[_ngcontent-%COMP%]{padding-right:16px;padding-left:16px}.panel-footer-row[_ngcontent-%COMP%]{margin-right:-16px;margin-left:-16px;padding-right:20px;padding-left:20px}.panel-subtabs[_ngcontent-%COMP%]{width:min(270px,72%)}}@media(max-width:1024px){.aviator-root.chat-open[_ngcontent-%COMP%]{padding-right:0}}@media(max-width:900px){.aviator-root[_ngcontent-%COMP%]{height:auto;max-height:none;overflow:auto}.top-nav[_ngcontent-%COMP%]{height:50px;min-height:50px;padding:0 8px}.brand[_ngcontent-%COMP%]{top:24px;height:30px}.main-layout[_ngcontent-%COMP%]{min-height:calc(100dvh - 50px);overflow:visible;flex-direction:column;padding:3px;gap:5px}.left-sidebar[_ngcontent-%COMP%]{flex-basis:auto;width:100%;order:2;margin-top:4px;padding:4px 6px;border-radius:10px}.bets-list[_ngcontent-%COMP%]{max-height:220px;overflow-y:auto}.game-area[_ngcontent-%COMP%]{order:1;overflow:visible;gap:4px}.canvas-viewport[_ngcontent-%COMP%]{flex:0 0 clamp(180px,30vh,240px);min-height:180px;width:100%;border-radius:10px}.dual-bet-panels[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;flex:0 0 auto;gap:5px;width:100%}.bet-panel-box[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;padding:6px 10px 8px;border-radius:12px}.panel-header-row[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;min-height:22px;margin-bottom:4px}.panel-subtabs[_ngcontent-%COMP%]{width:min(130px,50%);height:22px;padding:1px 2px;border-radius:12px}.panel-subtabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:10px;font-size:11px;font-weight:700}.panel-collapse-btn[_ngcontent-%COMP%]{position:absolute;right:0;top:50%;transform:translateY(-50%);width:22px;height:22px;border:1px solid #2d333d;border-radius:50%;font-size:13px}.panel-body[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:minmax(95px,115px) minmax(130px,1fr);gap:8px;align-items:center}.controls-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.amount-stepper[_ngcontent-%COMP%]{height:24px;padding:1px 3px;background:#0d0f12;border-radius:12px}.amount-stepper[_ngcontent-%COMP%]   .step-btn[_ngcontent-%COMP%]{width:20px;height:20px;font-size:15px}.amount-stepper[_ngcontent-%COMP%]   .amount-val-formatted[_ngcontent-%COMP%]{font-size:13px;font-weight:800}.preset-buttons[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:3px}.preset-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:19px;min-height:19px;border-radius:8px;font-size:10.5px;font-weight:700}.big-bet-btn[_ngcontent-%COMP%]{width:100%;height:52px;min-height:52px;border-radius:10px;padding:2px 4px}.big-bet-btn[_ngcontent-%COMP%]   .btn-title[_ngcontent-%COMP%]{font-size:17px;font-weight:800;line-height:1.1}.big-bet-btn[_ngcontent-%COMP%]   .btn-sub[_ngcontent-%COMP%]{font-size:14px;font-weight:800;margin-top:1px}.panel-footer-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:4px;padding-top:2px;gap:6px}}@media(max-width:580px){.top-nav[_ngcontent-%COMP%]{padding:0 6px}.nav-actions[_ngcontent-%COMP%]{gap:4px}.nav-actions[_ngcontent-%COMP%]   .balance-badge[_ngcontent-%COMP%]{padding:4px 8px}.nav-actions[_ngcontent-%COMP%]   .balance-amount[_ngcontent-%COMP%]{font-size:11px;font-weight:800}.nav-actions[_ngcontent-%COMP%]   .wallet-route-btn[_ngcontent-%COMP%]{padding:6px 10px;font-size:11px}.nav-actions[_ngcontent-%COMP%]   .nav-icon-btn[_ngcontent-%COMP%]:last-child{display:none}.banner-text[_ngcontent-%COMP%]{font-size:9.5px}.room-selector[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr);gap:3px;padding-right:0}.room-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:2px 4px;font-size:9.5px}.multiplier-ribbon[_ngcontent-%COMP%]{gap:5px;overflow-x:auto;-webkit-overflow-scrolling:touch}.multiplier-ribbon[_ngcontent-%COMP%]   .mult-pill[_ngcontent-%COMP%]{padding:2px 7px;font-size:10px;flex-shrink:0}.left-sidebar[_ngcontent-%COMP%]{margin-top:4px;padding:4px 6px}.bets-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:11px;padding:5px 0}.bets-header-info[_ngcontent-%COMP%]{padding:3px 6px}.bets-title[_ngcontent-%COMP%], .bets-count[_ngcontent-%COMP%]{font-size:11px}.bets-table-header[_ngcontent-%COMP%]{font-size:10px;padding:4px 6px}.bet-row[_ngcontent-%COMP%]{padding:4px 6px;font-size:11px}.bets-list[_ngcontent-%COMP%]{max-height:220px}}@media(min-width:901px){.bet-panel-box[_ngcontent-%COMP%]{min-height:170px;padding:8px 18px 0;border-radius:18px}.bet-panel-box[_ngcontent-%COMP%]   .panel-header-row[_ngcontent-%COMP%]{min-height:30px;margin-bottom:18px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]{padding-top:10px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-header-row[_ngcontent-%COMP%]{margin-bottom:3px}.bet-panel-box[_ngcontent-%COMP%]   .panel-subtabs[_ngcontent-%COMP%]{width:min(186px,54%);height:30px;border-radius:16px}.bet-panel-box[_ngcontent-%COMP%]   .panel-subtabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:14px;font-size:12px}.bet-panel-box[_ngcontent-%COMP%]   .panel-collapse-btn[_ngcontent-%COMP%]{right:0;width:28px;height:28px;border-width:3px;font-size:16px}.bet-panel-box[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]{grid-template-columns:minmax(0,126fr) minmax(0,192fr);width:min(100%,328px);gap:10px}.bet-panel-box[_ngcontent-%COMP%]   .controls-col[_ngcontent-%COMP%]{gap:4px}.bet-panel-box[_ngcontent-%COMP%]   .amount-stepper[_ngcontent-%COMP%]{height:27px;padding:1px 2px}.bet-panel-box[_ngcontent-%COMP%]   .amount-stepper[_ngcontent-%COMP%]   .step-btn[_ngcontent-%COMP%]{width:26px;height:26px;font-size:17px}.bet-panel-box[_ngcontent-%COMP%]   .amount-stepper[_ngcontent-%COMP%]   .amount-val-formatted[_ngcontent-%COMP%]{font-size:16px}.bet-panel-box[_ngcontent-%COMP%]   .preset-buttons[_ngcontent-%COMP%]{gap:4px}.bet-panel-box[_ngcontent-%COMP%]   .preset-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:22px;border-radius:12px;font-size:13px}.bet-panel-box[_ngcontent-%COMP%]   .big-bet-btn[_ngcontent-%COMP%]{height:72px;border-radius:12px;box-shadow:none;border:0;outline:none}.bet-panel-box[_ngcontent-%COMP%]   .big-bet-btn.green[_ngcontent-%COMP%]{background:#19ae08;box-shadow:0 4px 12px #28c74a40;border:0;outline:none}.bet-panel-box[_ngcontent-%COMP%]   .big-bet-btn[_ngcontent-%COMP%]   .btn-title[_ngcontent-%COMP%]{font-size:20px}.bet-panel-box[_ngcontent-%COMP%]   .big-bet-btn[_ngcontent-%COMP%]   .btn-sub[_ngcontent-%COMP%]{font-size:17px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]{min-height:36px;justify-content:center;margin:5px -18px 0;padding:0 12px;gap:44px;border-top-width:1px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .auto-opt-item[_ngcontent-%COMP%]{gap:5px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .auto-opt-label[_ngcontent-%COMP%]{font-size:11px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .toggle-switch-btn[_ngcontent-%COMP%]{width:34px;height:22px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .toggle-switch-btn[_ngcontent-%COMP%]   .toggle-knob[_ngcontent-%COMP%]{top:3px;left:3px;width:16px;height:16px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .toggle-switch-btn.active[_ngcontent-%COMP%]   .toggle-knob[_ngcontent-%COMP%]{transform:translate(12px)}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill[_ngcontent-%COMP%]{height:22px;margin-left:2px;padding:1px 6px;border-radius:12px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .auto-mult-input[_ngcontent-%COMP%]{width:32px;font-size:11px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .auto-mult-x[_ngcontent-%COMP%]{font-size:11px}}.cashout-notification-stack[_ngcontent-%COMP%]{position:absolute;z-index:10;top:4px;left:50%;display:grid;width:min(480px,100% - 30px);gap:6px;transform:translate(-50%)}.cashout-notification-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) 132px 34px;align-items:center;min-height:58px;overflow:hidden;border:1px solid rgba(76,224,110,.68);border-radius:30px;background:linear-gradient(100deg,#0b1814f7,#133c24f5 58%,#115b2df7);box-shadow:0 8px 20px #00000059,inset 0 1px #cdffcb1f;animation:_ngcontent-%COMP%_cashoutNoticeIn .38s cubic-bezier(.2,.9,.22,1.2) both}.cashout-notice-copy[_ngcontent-%COMP%]{padding:0 14px 0 20px;color:#c5c9c8;font-size:12px;line-height:1.1;text-align:center}.cashout-notice-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .cashout-notice-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .cashout-win[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .cashout-win[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}.cashout-notice-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-top:3px;color:#fff;font-size:15px}.cashout-win[_ngcontent-%COMP%]{position:relative;align-self:stretch;display:grid;align-content:center;padding:0 23px;border-radius:28px;background:linear-gradient(90deg,#5ea728,#79c733);color:#f5ffec;text-align:center}.cashout-win[_ngcontent-%COMP%]:before, .cashout-win[_ngcontent-%COMP%]:after{position:absolute;top:50%;color:#ebffd26b;font-size:25px;line-height:1;transform:translateY(-50%);content:"\\2606"}.cashout-win[_ngcontent-%COMP%]:before{left:7px}.cashout-win[_ngcontent-%COMP%]:after{right:7px}.cashout-win[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:11px;font-weight:800}.cashout-win[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:18px;line-height:1.05}.cashout-dismiss[_ngcontent-%COMP%]{align-self:stretch;border:0;background:transparent;color:#e2f5df;font:300 32px/1 Arial,sans-serif;cursor:pointer}.cashout-dismiss[_ngcontent-%COMP%]:focus-visible{outline:2px solid #d8ffd0;outline-offset:-5px}@keyframes _ngcontent-%COMP%_cashoutNoticeIn{0%{opacity:0;transform:translateY(-18px) scale(.9)}65%{opacity:1;transform:translateY(2px) scale(1.015)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.cashout-notification-card[_ngcontent-%COMP%]{animation:none}}.toast-popup[_ngcontent-%COMP%]{position:fixed;z-index:1000;right:14px;top:70px;display:flex;gap:10px;align-items:center;padding:8px 14px;border-left:4px solid #20b90a;border-radius:6px;background:#1e293b;color:#fff;font-size:12px;font-weight:700;box-shadow:0 4px 14px #0006}.toast-popup.error[_ngcontent-%COMP%]{border-left-color:#e2002e}.toast-close[_ngcontent-%COMP%], .modal-close[_ngcontent-%COMP%]{border:0;background:transparent;color:#aeb7bc;cursor:pointer}.modal-backdrop[_ngcontent-%COMP%]{position:fixed;z-index:100;inset:0;display:flex;align-items:center;justify-content:center;padding:12px;background:#000000d1}.modal-card[_ngcontent-%COMP%]{position:relative;width:400px;max-width:100%;padding:18px}.modal-close[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;font-size:18px}.modal-title[_ngcontent-%COMP%]{margin:0 0 2px;font-size:18px}.modal-subtitle[_ngcontent-%COMP%]{margin:0 0 12px;color:#9ca3af;font-size:12px}.modal-tabs[_ngcontent-%COMP%]{display:flex;gap:4px;margin-bottom:12px;padding:3px;border-radius:6px;background:#101314}.modal-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;padding:5px;border:0;border-radius:4px;background:transparent;color:#9ca3af;cursor:pointer}.modal-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#35393b;color:#fff}.preset-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.preset-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .input-styled[_ngcontent-%COMP%]{box-sizing:border-box;border:1px solid #42494b;border-radius:6px;background:#101314;color:#fff}.preset-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.input-styled[_ngcontent-%COMP%]{width:100%;margin-top:4px;padding:7px}.input-label[_ngcontent-%COMP%]{color:#9ca3af;font-size:12px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.margin-top[_ngcontent-%COMP%]{margin-top:10px}.margin-top-sm[_ngcontent-%COMP%]{margin-top:6px}.modal-submit-btn[_ngcontent-%COMP%]{width:100%;margin-top:12px;padding:9px;border:0;border-radius:7px;font-weight:900;cursor:pointer}.modal-submit-btn.green[_ngcontent-%COMP%]{background:#19ae08;color:#fff}.modal-submit-btn.gold[_ngcontent-%COMP%]{background:#e2a300;color:#111}.history-modal[_ngcontent-%COMP%]{width:480px}.history-list-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;max-height:320px;overflow-y:auto}.history-modal-row[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;padding:5px 0;border-bottom:1px solid #303536}.round-num[_ngcontent-%COMP%]{width:70px;color:#9ca3af;font-size:11px}.round-mult-badge[_ngcontent-%COMP%]{color:#00b8d1;font-size:11px}.round-mult-badge.mid[_ngcontent-%COMP%]{color:#9a35cf}.round-mult-badge.high[_ngcontent-%COMP%]{color:#d826c0}.pf-hash[_ngcontent-%COMP%]{flex:1;color:#737b80;font:10px monospace}.user-summary-card[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:center;margin-top:12px}.big-avatar[_ngcontent-%COMP%]{display:flex;width:48px;height:48px;align-items:center;justify-content:center;border-radius:50%;background:#e2002e;color:#fff;font-size:22px;font-weight:900}.role-badge[_ngcontent-%COMP%]{color:#e2a300;font-size:10px}.profile-dropdown-wrap[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.profile-avatar-letter[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#ed0042;color:#fff;font-size:10px;font-weight:900;line-height:1;flex-shrink:0}.profile-chevron[_ngcontent-%COMP%]{font-size:10px;color:#c0c8cc;transition:transform .2s}.profile-chevron.open[_ngcontent-%COMP%]{transform:rotate(180deg)}.profile-dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:calc(100% + 8px);right:0;z-index:500;width:210px;border-radius:12px;background:#1a1d21;border:1px solid #2d3339;box-shadow:0 8px 32px #000000a6,0 2px 8px #0006;overflow:hidden;animation:_ngcontent-%COMP%_dropdownSlideIn .18s ease}@keyframes _ngcontent-%COMP%_dropdownSlideIn{0%{opacity:0;transform:translateY(-6px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}.profile-dropdown-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:12px 14px;background:#ed004212}.profile-dropdown-header[_ngcontent-%COMP%]   .pdh-avatar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#ed0042;color:#fff;font-size:16px;font-weight:900;flex-shrink:0}.profile-dropdown-header[_ngcontent-%COMP%]   .pdh-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.profile-dropdown-header[_ngcontent-%COMP%]   .pdh-name[_ngcontent-%COMP%]{color:#fff;font-size:12px;font-weight:700}.profile-dropdown-header[_ngcontent-%COMP%]   .pdh-balance[_ngcontent-%COMP%]{color:#20b90a;font-size:11px;font-weight:700}.profile-dropdown-divider[_ngcontent-%COMP%]{height:1px;background:#2a2f34;margin:0}.pdm-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;width:100%;padding:10px 14px;border:0;background:transparent;color:#c8d0d6;font-size:12px;font-weight:600;cursor:pointer;transition:background .15s,color .15s;text-align:left}.pdm-item[_ngcontent-%COMP%]:hover{background:#ffffff0e;color:#fff}.pdm-item[_ngcontent-%COMP%]   .pdm-icon[_ngcontent-%COMP%]{font-size:14px;width:20px;text-align:center;flex-shrink:0}.pdm-item.bonus-item[_ngcontent-%COMP%]{color:#f0b429}.pdm-item.bonus-item[_ngcontent-%COMP%]:hover{background:#f0b4291a;color:#ffd166}.pdm-item.logout-item[_ngcontent-%COMP%]{color:#f87171}.pdm-item.logout-item[_ngcontent-%COMP%]:hover{background:#f871711a;color:#ff8f8f}.pdm-item.bonus-claim-item[_ngcontent-%COMP%]{margin:6px 8px;width:calc(100% - 16px);border:1px solid rgba(250,204,21,.46);border-radius:9px;background:linear-gradient(105deg,#854d0e6b,#eab3082e);color:#fef3c7;font-weight:800}.pdm-item.bonus-claim-item[_ngcontent-%COMP%]:hover:not(:disabled){background:linear-gradient(105deg,#a1620794,#facc154d);color:#fff}.pdm-item.bonus-claim-item.claimed[_ngcontent-%COMP%], .pdm-item.bonus-claim-item[_ngcontent-%COMP%]:disabled{border-color:#4ade8042;background:#1665343b;color:#bbf7d0;cursor:default}.pdm-item.sound-item[_ngcontent-%COMP%]{margin:0 8px 6px;width:calc(100% - 16px);border:1px solid rgba(96,165,250,.32);border-radius:8px;background:#1e40af29;color:#dbeafe}.pdm-item.sound-item.muted[_ngcontent-%COMP%]{border-color:#94a3b847;background:#47556933;color:#cbd5e1}.bonus-notification[_ngcontent-%COMP%]{position:fixed;z-index:2000;top:max(18px,env(safe-area-inset-top));right:18px;display:flex;align-items:flex-start;gap:11px;width:min(380px,100vw - 28px);padding:14px;overflow:hidden;border:1px solid rgba(250,204,21,.55);border-radius:16px;background:linear-gradient(130deg,#3f2708,#1f1a0a 60%,#132516);box-shadow:0 18px 45px #0000008c,0 0 30px #facc1533;animation:_ngcontent-%COMP%_bonus-notification-in .32s cubic-bezier(.22,1,.36,1) both}.bonus-notification[_ngcontent-%COMP%]:before{position:absolute;top:0;right:0;left:0;height:3px;content:"";background:linear-gradient(90deg,#f59e0b,#fde047,#22c55e)}.bonus-notification.info[_ngcontent-%COMP%]{border-color:#60a5fa85;background:linear-gradient(130deg,#132342,#0f172a 64%,#142b34)}.bonus-notification.info[_ngcontent-%COMP%]:before{background:linear-gradient(90deg,#38bdf8,#60a5fa,#a78bfa)}.bonus-notification-icon[_ngcontent-%COMP%]{display:grid;width:40px;height:40px;flex:0 0 40px;place-items:center;border-radius:12px;background:#facc152e;font-size:21px}.bonus-notification-content[_ngcontent-%COMP%]{min-width:0;padding-top:1px}.bonus-notification-content[_ngcontent-%COMP%]   .bonus-notification-eyebrow[_ngcontent-%COMP%]{display:block;color:#fde68a;font-size:9px;font-weight:900;letter-spacing:.8px}.bonus-notification-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-top:2px;color:#fff;font-size:14px}.bonus-notification-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#e5e7eb;font-size:11px;line-height:1.35}.bonus-notification-close[_ngcontent-%COMP%]{width:24px;height:24px;padding:0;border:0;border-radius:7px;background:transparent;color:#d1d5db;font-size:19px;line-height:1;cursor:pointer}.bonus-notification-close[_ngcontent-%COMP%]:hover{background:#ffffff1a;color:#fff}@keyframes _ngcontent-%COMP%_bonus-notification-in{0%{opacity:0;transform:translateY(-12px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}.margin-bottom-sm[_ngcontent-%COMP%]{margin-bottom:12px}.mpesa-status-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin:14px 0;padding:12px 14px;border-radius:8px;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);font-size:13px;line-height:1.4}.mpesa-status-card[_ngcontent-%COMP%]   .mpesa-status-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.mpesa-status-card.waiting[_ngcontent-%COMP%]{background:#eab3081a;border-color:#eab3084d;color:#fef08a}.mpesa-status-card.success[_ngcontent-%COMP%]{background:#22c55e1a;border-color:#22c55e4d;color:#4ade80}.mpesa-status-card.failed[_ngcontent-%COMP%]{background:#ef44441a;border-color:#ef44444d;color:#fca5a5}.mpesa-status-card[_ngcontent-%COMP%]   .mpesa-status-icon[_ngcontent-%COMP%]{font-size:18px;flex-shrink:0}.mpesa-status-card[_ngcontent-%COMP%]   .spinner-icon[_ngcontent-%COMP%]{display:inline-block;animation:_ngcontent-%COMP%_spin 1s infinite linear}.cancel-stk-btn[_ngcontent-%COMP%]{align-self:flex-start;margin-top:2px;padding:5px 14px;border:1px solid rgba(239,68,68,.55);border-radius:6px;background:#ef44441f;color:#fca5a5;font-size:12px;font-weight:700;cursor:pointer;transition:background .15s,border-color .15s}.cancel-stk-btn[_ngcontent-%COMP%]:hover{background:#ef444440;border-color:#ef4444cc}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.deposit-smooth-tab[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.mpesa-account-badge[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:8px;background:linear-gradient(135deg,#22c55e26,#10b9810d);border:1px solid rgba(34,197,94,.25)}.mpesa-account-badge[_ngcontent-%COMP%]   .mpesa-badge-logo[_ngcontent-%COMP%]{color:#4ade80;font-size:13px;font-weight:800;letter-spacing:.5px}.mpesa-account-badge[_ngcontent-%COMP%]   .mpesa-badge-info[_ngcontent-%COMP%]{color:#94a3b8;font-size:11px}.input-with-suffix[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.input-with-suffix[_ngcontent-%COMP%]   .input-styled[_ngcontent-%COMP%]{width:100%;padding-right:50px}.input-with-suffix[_ngcontent-%COMP%]   .input-currency[_ngcontent-%COMP%]{position:absolute;right:14px;color:#94a3b8;font-size:12px;font-weight:700;pointer-events:none}.input-hint[_ngcontent-%COMP%]{display:block;margin-top:4px;font-size:11px;color:#64748b}.preset-grid[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#22c55e!important;color:#fff!important;border-color:#22c55e!important;box-shadow:0 0 12px #22c55e66}.admin-badge-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#e11d48,#be123c)!important;color:#fff!important;font-weight:800!important;font-size:.8rem!important;padding:6px 14px!important;border-radius:8px!important;border:1px solid rgba(255,255,255,.2)!important;box-shadow:0 0 15px #e11d4880!important;cursor:pointer;transition:all .2s ease}.admin-badge-btn[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 0 20px #e11d48b3!important}.pdm-item.admin-item[_ngcontent-%COMP%]{color:#f43f5e;font-weight:700}.pdm-item.admin-item[_ngcontent-%COMP%]:hover{background:#e11d4826}.transactions-tab[_ngcontent-%COMP%]{max-height:380px;overflow-y:auto}.transactions-tab[_ngcontent-%COMP%]   .tx-history-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.08)}.transactions-tab[_ngcontent-%COMP%]   .tx-history-header[_ngcontent-%COMP%]   .tx-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#f1f5f9}.transactions-tab[_ngcontent-%COMP%]   .tx-history-header[_ngcontent-%COMP%]   .tx-refresh-btn[_ngcontent-%COMP%]{background:#1e293b;border:1px solid rgba(255,255,255,.1);color:#94a3b8;font-size:.75rem;padding:4px 10px;border-radius:6px;cursor:pointer}.transactions-tab[_ngcontent-%COMP%]   .tx-history-header[_ngcontent-%COMP%]   .tx-refresh-btn[_ngcontent-%COMP%]:hover{color:#fff;background:#334155}.transactions-tab[_ngcontent-%COMP%]   .tx-loading[_ngcontent-%COMP%], .transactions-tab[_ngcontent-%COMP%]   .tx-empty[_ngcontent-%COMP%]{text-align:center;padding:24px;color:#94a3b8;font-size:.85rem}.transactions-tab[_ngcontent-%COMP%]   .transaction-type-tabs[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-bottom:12px;padding:4px;border:1px solid rgba(148,163,184,.14);border-radius:10px;background:#0f172ad1}.transactions-tab[_ngcontent-%COMP%]   .transaction-type-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:34px;border:0;border-radius:7px;background:transparent;color:#94a3b8;font-size:.78rem;font-weight:800;cursor:pointer;transition:background .16s ease,color .16s ease,transform .16s ease}.transactions-tab[_ngcontent-%COMP%]   .transaction-type-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#e2e8f0}.transactions-tab[_ngcontent-%COMP%]   .transaction-type-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:#fff;background:linear-gradient(135deg,#2563eb,#1d4ed8);box-shadow:0 5px 14px #2563eb40}.transactions-tab[_ngcontent-%COMP%]   .transaction-type-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{transform:scale(.98)}.transactions-tab[_ngcontent-%COMP%]   .tx-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]{background:#0f172a;border:1px solid rgba(255,255,255,.06);border-radius:10px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-left[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-left[_ngcontent-%COMP%]   .tx-type-badge[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:#e2e8f0}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-left[_ngcontent-%COMP%]   .tx-type-badge.deposit[_ngcontent-%COMP%]{color:#38bdf8}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-left[_ngcontent-%COMP%]   .tx-type-badge.withdrawal[_ngcontent-%COMP%]{color:#fbbf24}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-left[_ngcontent-%COMP%]   .tx-date[_ngcontent-%COMP%]{font-size:.7rem;color:#64748b}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-left[_ngcontent-%COMP%]   .tx-ref[_ngcontent-%COMP%]{font-size:.68rem;color:#94a3b8;font-family:monospace}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-left[_ngcontent-%COMP%]   .tx-failure-reason[_ngcontent-%COMP%]{max-width:280px;color:#fca5a5;font-size:.68rem;line-height:1.25}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;gap:4px}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-right[_ngcontent-%COMP%]   .tx-amount[_ngcontent-%COMP%]{font-size:.95rem;font-weight:800;color:#fff}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-right[_ngcontent-%COMP%]   .tx-status-badge[_ngcontent-%COMP%]{font-size:.72rem;font-weight:800;padding:3px 8px;border-radius:6px;letter-spacing:.5px}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-right[_ngcontent-%COMP%]   .tx-status-badge.completed[_ngcontent-%COMP%]{background:#22c55e26;color:#4ade80;border:1px solid rgba(34,197,94,.3)}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-right[_ngcontent-%COMP%]   .tx-status-badge.failed[_ngcontent-%COMP%]{background:#ef444426;color:#f87171;border:1px solid rgba(239,68,68,.3)}.transactions-tab[_ngcontent-%COMP%]   .tx-item-card[_ngcontent-%COMP%]   .tx-item-right[_ngcontent-%COMP%]   .tx-status-badge.pending[_ngcontent-%COMP%]{background:#f59e0b26;color:#fbbf24;border:1px solid rgba(245,158,11,.3)}@keyframes _ngcontent-%COMP%_notif-slide-in{0%{opacity:0;transform:translateY(-110%) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes _ngcontent-%COMP%_notif-bar-drain{0%{width:100%}to{width:0%}}.withdrawal-notif-wrap[_ngcontent-%COMP%]{position:fixed;top:max(8px,env(safe-area-inset-top));left:50%;transform:translate(-50%);z-index:100000;width:calc(100vw - 20px);max-width:360px;pointer-events:auto;animation:_ngcontent-%COMP%_notif-slide-down .28s cubic-bezier(.16,1,.3,1) forwards}@media(max-width:480px){.withdrawal-notif-wrap[_ngcontent-%COMP%]{top:6px;width:calc(100vw - 16px);max-width:340px}}@keyframes _ngcontent-%COMP%_notif-slide-down{0%{opacity:0;transform:translate(-50%,-18px) scale(.96)}to{opacity:1;transform:translate(-50%) scale(1)}}.withdrawal-notif-card[_ngcontent-%COMP%]{position:relative;display:flex;overflow:hidden;border-radius:12px;background:#0e1420f5;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border:1px solid rgba(255,255,255,.12);box-shadow:0 10px 30px #000000bf,0 0 0 1px #ffffff0d inset}.notif-accent-bar[_ngcontent-%COMP%]{width:4px;flex-shrink:0;background:#3b82f6}.type-complete[_ngcontent-%COMP%]   .notif-accent-bar[_ngcontent-%COMP%]{background:#22c55e}.type-rejected[_ngcontent-%COMP%]   .notif-accent-bar[_ngcontent-%COMP%]{background:#ef4444}.type-pending[_ngcontent-%COMP%]   .notif-accent-bar[_ngcontent-%COMP%]{background:#f59e0b}.type-complete[_ngcontent-%COMP%]   .withdrawal-notif-card[_ngcontent-%COMP%]{border-color:#22c55e59}.type-rejected[_ngcontent-%COMP%]   .withdrawal-notif-card[_ngcontent-%COMP%]{border-color:#ef444459}.type-pending[_ngcontent-%COMP%]   .withdrawal-notif-card[_ngcontent-%COMP%]{border-color:#f59e0b59}.notif-content[_ngcontent-%COMP%]{flex:1;padding:8px 10px 6px;display:flex;flex-direction:column;gap:3px;min-width:0}.notif-top-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:6px}.notif-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;min-width:0}.notif-badge-icon[_ngcontent-%COMP%]{font-size:13px;line-height:1}.notif-app-name[_ngcontent-%COMP%]{font-size:10px;font-weight:800;letter-spacing:.6px;color:#94a3b8;text-transform:uppercase}.notif-dot[_ngcontent-%COMP%]{font-size:10px;color:#475569}.notif-time[_ngcontent-%COMP%]{font-size:10px;color:#64748b;font-weight:600}.notif-close-x[_ngcontent-%COMP%]{background:transparent;border:0;color:#64748b;font-size:13px;font-weight:700;cursor:pointer;padding:0 4px;line-height:1;border-radius:4px;transition:color .15s,background .15s}.notif-close-x[_ngcontent-%COMP%]:hover{color:#fff;background:#ffffff1a}.notif-body-title[_ngcontent-%COMP%]{font-size:12px;font-weight:800;color:#fff;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.notif-body-msg[_ngcontent-%COMP%]{font-size:11px;font-weight:500;color:#cbd5e1;line-height:1.35;word-break:break-word}.notif-progress-track[_ngcontent-%COMP%]{height:2px;width:100%;background:#ffffff14;border-radius:2px;overflow:hidden;margin-top:4px}.notif-progress-bar[_ngcontent-%COMP%]{height:100%;border-radius:2px;background:#3b82f6;animation:_ngcontent-%COMP%_notif-bar-drain 6s linear forwards}.notif-progress-bar.type-complete[_ngcontent-%COMP%]{background:#22c55e}.notif-progress-bar.type-rejected[_ngcontent-%COMP%]{background:#ef4444}.notif-progress-bar.type-pending[_ngcontent-%COMP%]{background:#f59e0b}@media(prefers-reduced-motion:reduce){.withdrawal-notif-wrap[_ngcontent-%COMP%], .notif-progress-fill[_ngcontent-%COMP%]{animation:none}}.notif-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.notif-action-btn[_ngcontent-%COMP%]{background:#3b82f626;border:1px solid rgba(59,130,246,.35);color:#60a5fa;font-size:.78rem;font-weight:700;padding:5px 14px;border-radius:8px;cursor:pointer;transition:all .18s ease;letter-spacing:.3px}.notif-action-btn[_ngcontent-%COMP%]:hover{background:#3b82f64d;border-color:#3b82f6;color:#fff}.wallet-modal-card[_ngcontent-%COMP%]{width:min(560px,100vw - 24px);padding:16px;border:1px solid rgba(148,163,184,.2);border-radius:18px;background:linear-gradient(160deg,#1e293bfa,#0f172afa);box-shadow:0 24px 70px #0000009e,0 0 0 1px #ffffff09 inset;animation:_ngcontent-%COMP%_wallet-modal-in .26s cubic-bezier(.22,1,.36,1) both}@keyframes _ngcontent-%COMP%_wallet-modal-in{0%{opacity:0;transform:translateY(12px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.wallet-modal-card[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]{top:16px;right:16px;width:30px;height:30px;border-radius:9px;color:#94a3b8;transition:background .18s ease,color .18s ease}.wallet-modal-card[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover{background:#ffffff14;color:#fff}.wallet-balance-strip[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;min-height:48px;padding:0 44px 0 14px;border:1px solid rgba(96,165,250,.18);border-radius:12px;background:linear-gradient(90deg,#3b82f61f,#1e293b24);color:#93c5fd;font-size:.78rem;font-weight:700}.wallet-balance-strip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#f8fafc;font-size:.95rem;letter-spacing:.2px}.wallet-modal-card[_ngcontent-%COMP%]   .modal-tabs.wallet-action-tabs[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;margin:14px 0 18px;padding:5px;border:1px solid rgba(148,163,184,.14);border-radius:14px;background:#0206177a}.wallet-modal-card[_ngcontent-%COMP%]   .modal-tabs.wallet-action-tabs[_ngcontent-%COMP%]   .wallet-action-tab[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:7px;min-height:42px;padding:8px 6px;border:1px solid transparent;border-radius:10px;background:transparent;color:#94a3b8;font-size:.78rem;font-weight:800;letter-spacing:.1px;cursor:pointer;transition:transform .18s ease,background .18s ease,color .18s ease,box-shadow .18s ease}.wallet-modal-card[_ngcontent-%COMP%]   .modal-tabs.wallet-action-tabs[_ngcontent-%COMP%]   .wallet-action-tab[_ngcontent-%COMP%]:hover:not(.active){background:#94a3b81c;color:#e2e8f0}.wallet-modal-card[_ngcontent-%COMP%]   .modal-tabs.wallet-action-tabs[_ngcontent-%COMP%]   .wallet-action-tab[_ngcontent-%COMP%]:active{transform:scale(.97)}.wallet-modal-card[_ngcontent-%COMP%]   .modal-tabs.wallet-action-tabs[_ngcontent-%COMP%]   .wallet-action-tab.active[_ngcontent-%COMP%]{border-color:#4ade8085;background:linear-gradient(135deg,#22c55e,#15803d);color:#fff;box-shadow:0 6px 18px #16a34a47}.wallet-tab-icon[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#ffffff1f;font-size:1rem;font-weight:900;line-height:1}.wallet-modal-card[_ngcontent-%COMP%]   .modal-body-form[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_wallet-content-in .2s ease both}.withdraw-smooth-tab[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.withdrawal-info-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:11px 12px;border:1px solid rgba(96,165,250,.2);border-radius:11px;background:linear-gradient(135deg,#1e40af29,#0f172a52)}.withdrawal-info-card[_ngcontent-%COMP%]   .withdrawal-info-icon[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:9px;background:#3b82f633;color:#93c5fd;font-size:1.1rem;font-weight:900;flex-shrink:0}.withdrawal-info-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;min-width:0;flex-direction:column;gap:2px}.withdrawal-info-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#f8fafc;font-size:.82rem}.withdrawal-info-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.withdrawal-info-icon){color:#94a3b8;font-size:.7rem;line-height:1.35}.withdrawal-preset-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr));gap:7px}.wallet-modal-card[_ngcontent-%COMP%]   .withdrawal-preset-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:35px;padding:6px 3px;border-color:#60a5fa2e;background:#1e293bb3;color:#cbd5e1;font-size:.7rem;font-weight:800;transition:transform .16s ease,background .16s ease,border-color .16s ease,color .16s ease}.wallet-modal-card[_ngcontent-%COMP%]   .withdrawal-preset-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:translateY(-1px);border-color:#4ade807a;background:#22c55e24;color:#dcfce7}.wallet-modal-card[_ngcontent-%COMP%]   .withdrawal-preset-grid[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{border-color:#22c55e!important;background:#22c55e!important;color:#fff!important}.withdraw-smooth-tab[_ngcontent-%COMP%]   .modal-submit-btn.gold[_ngcontent-%COMP%]{min-height:44px;margin-top:0;border:1px solid rgba(134,239,172,.42);background:linear-gradient(135deg,#22c55e,#15803d);color:#fff;box-shadow:0 8px 20px #16a34a38;transition:transform .18s ease,box-shadow .18s ease,filter .18s ease}.withdraw-smooth-tab[_ngcontent-%COMP%]   .modal-submit-btn.gold[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 11px 24px #16a34a52;filter:brightness(1.05)}.withdraw-smooth-tab[_ngcontent-%COMP%]   .modal-submit-btn.gold[_ngcontent-%COMP%]:disabled{cursor:wait;opacity:.7}@keyframes _ngcontent-%COMP%_wallet-content-in{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}@media(max-width:480px){.wallet-modal-card[_ngcontent-%COMP%]{padding:12px;border-radius:15px}.wallet-balance-strip[_ngcontent-%COMP%]{min-height:44px;padding-left:12px;font-size:.72rem}.wallet-modal-card[_ngcontent-%COMP%]   .modal-tabs.wallet-action-tabs[_ngcontent-%COMP%]   .wallet-action-tab[_ngcontent-%COMP%]{gap:4px;min-height:40px;padding:7px 3px;font-size:.67rem}.wallet-tab-icon[_ngcontent-%COMP%]{width:16px;height:16px;font-size:.86rem}.withdrawal-preset-grid[_ngcontent-%COMP%]{gap:5px}.wallet-modal-card[_ngcontent-%COMP%]   .withdrawal-preset-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:33px;font-size:.64rem}}.betika-wallet-modal[_ngcontent-%COMP%]{width:520px!important;max-width:95vw;background:#141c24!important;border:1px solid #23303e!important;border-radius:16px!important;padding:16px!important;color:#e2e8f0;box-shadow:0 16px 40px #000c!important}.betika-wallet-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin-bottom:14px}.betika-wallet-header[_ngcontent-%COMP%]   .header-balances[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px}.betika-wallet-header[_ngcontent-%COMP%]   .balance-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;background:#1c2733;border:1px solid rgba(255,255,255,.08)}.betika-wallet-header[_ngcontent-%COMP%]   .balance-card[_ngcontent-%COMP%]   .wallet-icon[_ngcontent-%COMP%]{font-size:20px}.betika-wallet-header[_ngcontent-%COMP%]   .balance-card[_ngcontent-%COMP%]   .balance-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.betika-wallet-header[_ngcontent-%COMP%]   .balance-card[_ngcontent-%COMP%]   .balance-title[_ngcontent-%COMP%]{font-size:11px;color:#94a3b8;font-weight:600}.betika-wallet-header[_ngcontent-%COMP%]   .balance-card[_ngcontent-%COMP%]   .balance-value[_ngcontent-%COMP%]{font-size:15px;font-weight:800;color:#fff}.betika-wallet-header[_ngcontent-%COMP%]   .header-promos-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px}.betika-wallet-header[_ngcontent-%COMP%]   .promo-pill[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-radius:8px;background:#1b2530;border:1px solid rgba(255,255,255,.06)}.betika-wallet-header[_ngcontent-%COMP%]   .promo-pill[_ngcontent-%COMP%]   .promo-label[_ngcontent-%COMP%]{font-size:11px;font-weight:700;color:#e2e8f0}.betika-wallet-header[_ngcontent-%COMP%]   .promo-pill[_ngcontent-%COMP%]   .promo-view-btn[_ngcontent-%COMP%]{background:#eef8db;color:#2e5408;border:0;padding:3px 9px;border-radius:12px;font-size:10px;font-weight:800;cursor:pointer}.betika-wallet-header[_ngcontent-%COMP%]   .promo-pill[_ngcontent-%COMP%]   .promo-view-btn[_ngcontent-%COMP%]:hover{background:#dcecb9}.betika-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;background:#19232d;border-radius:12px;padding:16px;border:1px solid rgba(255,255,255,.06)}.betika-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:800;color:#fff}.betika-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{margin:2px 0 0;font-size:12px;color:#94a3b8}.betika-card[_ngcontent-%COMP%]   .amount-stepper-box[_ngcontent-%COMP%]{display:flex;align-items:center;height:48px;background:#10171e;border:1px solid #283747;border-radius:8px;overflow:hidden}.betika-card[_ngcontent-%COMP%]   .amount-stepper-box[_ngcontent-%COMP%]   .stepper-btn[_ngcontent-%COMP%]{width:48px;height:100%;background:#1e2a38;border:0;color:#fff;font-size:20px;font-weight:700;cursor:pointer;transition:background .15s}.betika-card[_ngcontent-%COMP%]   .amount-stepper-box[_ngcontent-%COMP%]   .stepper-btn[_ngcontent-%COMP%]:hover{background:#2b3b4d}.betika-card[_ngcontent-%COMP%]   .amount-stepper-box[_ngcontent-%COMP%]   .stepper-input-wrap[_ngcontent-%COMP%]{flex:1;height:100%}.betika-card[_ngcontent-%COMP%]   .amount-stepper-box[_ngcontent-%COMP%]   .stepper-input-wrap[_ngcontent-%COMP%]   .stepper-input[_ngcontent-%COMP%]{width:100%;height:100%;background:transparent;border:0;outline:0;color:#fff;font-size:14px;font-weight:700;text-align:center}.betika-card[_ngcontent-%COMP%]   .amount-stepper-box[_ngcontent-%COMP%]   .stepper-input-wrap[_ngcontent-%COMP%]   .stepper-input[_ngcontent-%COMP%]::placeholder{color:#64748b;font-weight:500}.betika-card[_ngcontent-%COMP%]   .tax-hint-text[_ngcontent-%COMP%]{margin:0;font-size:11px;color:#94a3b8}.betika-card[_ngcontent-%COMP%]   .quick-preset-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.betika-card[_ngcontent-%COMP%]   .quick-preset-row[_ngcontent-%COMP%]   .preset-pill-btn[_ngcontent-%COMP%]{padding:9px;background:#233140;border:1px solid transparent;border-radius:8px;color:#fff;font-size:13px;font-weight:800;cursor:pointer;transition:background .15s,transform .1s,border-color .15s}.betika-card[_ngcontent-%COMP%]   .quick-preset-row[_ngcontent-%COMP%]   .preset-pill-btn[_ngcontent-%COMP%]:hover{background:#314457;transform:translateY(-1px)}.betika-card[_ngcontent-%COMP%]   .quick-preset-row[_ngcontent-%COMP%]   .preset-pill-btn.preset-active[_ngcontent-%COMP%]{background:#19ae08;border-color:#2fd120;color:#fff;box-shadow:0 0 10px #19ae0866}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:4px}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .action-btn-col[_ngcontent-%COMP%]{display:flex;flex-direction:column}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .action-btn-col[_ngcontent-%COMP%]   .action-sub-hint[_ngcontent-%COMP%]{margin-top:4px;font-size:10px;color:#94a3b8;line-height:1.3}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .special-offer-wrapper[_ngcontent-%COMP%]{position:relative;width:100%}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .special-offer-wrapper[_ngcontent-%COMP%]   .special-offer-badge[_ngcontent-%COMP%]{position:absolute;top:-9px;right:12px;z-index:2;background:#fff;color:#e91e63;font-size:9px;font-weight:900;padding:2px 7px;border-radius:10px;box-shadow:0 2px 6px #0006;letter-spacing:.3px}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .gateway-action-btn[_ngcontent-%COMP%]{width:100%;height:44px;display:flex;align-items:center;justify-content:center;gap:6px;border:0;border-radius:8px;font-size:13px;font-weight:800;cursor:pointer;transition:transform .15s,filter .15s}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .gateway-action-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-1px);filter:brightness(1.08)}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .gateway-action-btn[_ngcontent-%COMP%]:disabled{opacity:.7;cursor:not-allowed}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .gateway-action-btn.cashia-btn[_ngcontent-%COMP%]{background:#e91e63;color:#fff}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .gateway-action-btn.mpesa-btn[_ngcontent-%COMP%]{background:#4caf50;color:#fff}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .gateway-action-btn.mpesa-withdraw-btn[_ngcontent-%COMP%]{background:#e2f0d9;color:#1b5e20}.betika-card[_ngcontent-%COMP%]   .action-buttons-grid[_ngcontent-%COMP%]   .gateway-action-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:15px}.betika-card[_ngcontent-%COMP%]   .action-buttons-single[_ngcontent-%COMP%]{width:100%;margin-top:4px}.betika-card[_ngcontent-%COMP%]   .action-buttons-single[_ngcontent-%COMP%]   .single-btn[_ngcontent-%COMP%]{width:100%;height:46px;font-size:14px}.custom-screenshot-wallet-modal[_ngcontent-%COMP%]{width:520px!important;max-width:95vw!important;max-height:92vh;overflow-y:auto;background:#0d111a!important;border:1px solid #1e2636!important;border-radius:20px!important;padding:16px!important;color:#e2e8f0;box-shadow:0 20px 60px #000000d9!important}.custom-screenshot-wallet-modal[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.custom-screenshot-wallet-modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#263044;border-radius:4px}.custom-wallet-top-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;margin-bottom:12px;border-radius:12px;background:linear-gradient(180deg,#162438,#0d1522);border:1px solid rgba(255,255,255,.08)}.custom-wallet-top-header[_ngcontent-%COMP%]   .back-glass-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:8px;background:#ffffff14;border:1px solid rgba(255,255,255,.12);color:#fff;font-size:16px;font-weight:800;cursor:pointer;transition:background .15s}.custom-wallet-top-header[_ngcontent-%COMP%]   .back-glass-btn[_ngcontent-%COMP%]:hover{background:#ffffff2e}.custom-wallet-top-header[_ngcontent-%COMP%]   .top-header-title[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:800;color:#fff;letter-spacing:.2px}.custom-wallet-top-header[_ngcontent-%COMP%]   .top-balance-pill[_ngcontent-%COMP%]{padding:6px 14px;border-radius:20px;background:#0d1b2ce6;border:1px solid rgba(56,189,248,.25);color:#38bdf8;font-size:12px;font-weight:800}.screenshot-tab-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.tab-withdrawal-notif-card[_ngcontent-%COMP%]{position:relative;display:flex;width:100%;box-sizing:border-box;border-radius:14px;background:linear-gradient(135deg,#121a2afa,#0c121efa);border:1px solid rgba(255,255,255,.14);box-shadow:0 8px 24px #00000080;overflow:hidden;animation:_ngcontent-%COMP%_notif-smooth-fade .35s cubic-bezier(.16,1,.3,1) both}.tab-withdrawal-notif-card.type-complete[_ngcontent-%COMP%]{border-color:#22c55e73;box-shadow:0 8px 24px #00000080,0 0 16px #22c55e33}.tab-withdrawal-notif-card.type-rejected[_ngcontent-%COMP%]{border-color:#ef444473;box-shadow:0 8px 24px #00000080,0 0 16px #ef444433}.tab-withdrawal-notif-card.type-pending[_ngcontent-%COMP%]{border-color:#f59e0b73;box-shadow:0 8px 24px #00000080,0 0 16px #f59e0b33}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-accent-bar[_ngcontent-%COMP%]{width:5px;flex-shrink:0;background:#3b82f6}.tab-withdrawal-notif-card.type-complete[_ngcontent-%COMP%]   .notif-accent-bar[_ngcontent-%COMP%]{background:#22c55e}.tab-withdrawal-notif-card.type-rejected[_ngcontent-%COMP%]   .notif-accent-bar[_ngcontent-%COMP%]{background:#ef4444}.tab-withdrawal-notif-card.type-pending[_ngcontent-%COMP%]   .notif-accent-bar[_ngcontent-%COMP%]{background:#f59e0b}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-content-body[_ngcontent-%COMP%]{flex:1;padding:12px 14px 10px;display:flex;flex-direction:column;gap:5px;min-width:0}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-top-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-brand-tag[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-icon-emoji[_ngcontent-%COMP%]{font-size:15px;line-height:1}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-brand-title[_ngcontent-%COMP%]{font-size:11px;font-weight:800;letter-spacing:.6px;color:#94a3b8;text-transform:uppercase}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-time-stamp[_ngcontent-%COMP%]{font-size:11px;color:#64748b;font-weight:600}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-close-btn[_ngcontent-%COMP%]{background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#94a3b8;font-size:13px;font-weight:700;cursor:pointer;width:24px;height:24px;border-radius:6px;display:flex;align-items:center;justify-content:center;transition:all .15s ease}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-close-btn[_ngcontent-%COMP%]:hover{background:#ffffff2e;color:#fff}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-card-title[_ngcontent-%COMP%]{font-size:14px;font-weight:800;color:#fff;line-height:1.3}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-card-msg[_ngcontent-%COMP%]{font-size:13px;font-weight:500;color:#cbd5e1;line-height:1.4;word-break:break-word}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-progress-track[_ngcontent-%COMP%]{height:3px;width:100%;background:#ffffff14;border-radius:2px;overflow:hidden;margin-top:4px}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-progress-bar[_ngcontent-%COMP%]{height:100%;border-radius:2px;background:#3b82f6;animation:_ngcontent-%COMP%_notif-bar-drain 6s linear forwards}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-progress-bar.type-complete[_ngcontent-%COMP%]{background:#22c55e}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-progress-bar.type-rejected[_ngcontent-%COMP%]{background:#ef4444}.tab-withdrawal-notif-card[_ngcontent-%COMP%]   .notif-progress-bar.type-pending[_ngcontent-%COMP%]{background:#f59e0b}@keyframes _ngcontent-%COMP%_notif-smooth-fade{0%{opacity:0;transform:translateY(-8px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}.mpesa-main-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px;background:#141923;border:1px solid #1e2636;border-radius:16px;padding:18px}.mpesa-main-card[_ngcontent-%COMP%]   .mpesa-card-title[_ngcontent-%COMP%]{margin:0;font-size:16px;font-weight:800;color:#fff;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.06)}.custom-field-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.custom-field-group[_ngcontent-%COMP%]   .custom-field-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:#8a99ad}.custom-field-group[_ngcontent-%COMP%]   .custom-dark-input[_ngcontent-%COMP%]{width:100%;height:46px;box-sizing:border-box;padding:0 14px;background:#0b0e16;border:1px solid #20293a;border-radius:10px;color:#fff;font-size:14px;font-weight:700;outline:none;transition:border-color .15s,box-shadow .15s}.custom-field-group[_ngcontent-%COMP%]   .custom-dark-input[_ngcontent-%COMP%]::placeholder{color:#475569;font-weight:500}.custom-field-group[_ngcontent-%COMP%]   .custom-dark-input[_ngcontent-%COMP%]:focus{border-color:#22c55e;box-shadow:0 0 0 2px #22c55e33}.preset-grid-6[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:2px}.preset-grid-6[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:42px;background:#1a2230;border:1px solid #263246;border-radius:10px;color:#fff;font-size:14px;font-weight:800;cursor:pointer;transition:background .15s,border-color .15s,transform .1s,box-shadow .15s}.preset-grid-6[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#232d40;transform:translateY(-1px)}.preset-grid-6[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:#22c55e29;border-color:#22c55e;color:#4ade80;box-shadow:0 0 14px #22c55e59}.main-green-action-btn[_ngcontent-%COMP%]{width:100%;height:48px;margin-top:4px;border-radius:12px;border:0;background:linear-gradient(135deg,#16b828,#10941f);color:#fff;font-size:15px;font-weight:800;cursor:pointer;box-shadow:0 6px 20px #16b82859;transition:transform .15s,filter .15s}.main-green-action-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-1px);filter:brightness(1.08)}.main-green-action-btn[_ngcontent-%COMP%]:disabled{opacity:.65;cursor:not-allowed;box-shadow:none}.stk-tracker-card[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:6px;padding:14px 16px;border-radius:12px;background:#090d14;border:1px solid rgba(255,255,255,.05)}.stk-tracker-card[_ngcontent-%COMP%]   .stk-step[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;flex:0 0 auto}.stk-tracker-card[_ngcontent-%COMP%]   .stk-step[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;border:2px solid #334155;background:#0f172a;color:#64748b;font-size:12px;font-weight:800;transition:all .2s ease}.stk-tracker-card[_ngcontent-%COMP%]   .stk-step[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%]{font-size:11px;font-weight:600;color:#475569;transition:color .2s ease}.stk-tracker-card[_ngcontent-%COMP%]   .stk-step.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%]{border-color:#22c55e;color:#22c55e;box-shadow:0 0 10px #22c55e66}.stk-tracker-card[_ngcontent-%COMP%]   .stk-step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%]{color:#94a3b8}.stk-tracker-card[_ngcontent-%COMP%]   .stk-step.done[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%]{background:#22c55e;border-color:#22c55e;color:#fff}.stk-tracker-card[_ngcontent-%COMP%]   .stk-step.done[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%]{color:#22c55e}.stk-tracker-card[_ngcontent-%COMP%]   .stk-step.error[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%]{background:#ef4444;border-color:#ef4444;color:#fff}.stk-tracker-card[_ngcontent-%COMP%]   .stk-step.error[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%]{color:#f87171}.stk-tracker-card[_ngcontent-%COMP%]   .step-line[_ngcontent-%COMP%]{flex:1;height:2px;margin:0 10px -18px;background:#334155;transition:background .2s ease}.stk-tracker-card[_ngcontent-%COMP%]   .step-line.active[_ngcontent-%COMP%]{background:#22c55e}.cancel-stk-wrap[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:4px}.embedded-history-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.embedded-history-section[_ngcontent-%COMP%]   .history-section-title[_ngcontent-%COMP%]{margin:0;font-size:14px;font-weight:800;color:#fff;letter-spacing:.2px}.embedded-history-section[_ngcontent-%COMP%]   .empty-history-text[_ngcontent-%COMP%]{padding:16px;text-align:center;color:#64748b;font-size:12px;background:#141923;border-radius:12px;border:1px solid rgba(255,255,255,.05)}.embedded-history-section[_ngcontent-%COMP%]   .history-cards-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.embedded-history-section[_ngcontent-%COMP%]   .history-item-card[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:12px;background:#141923;border:1px solid #1e2636}.embedded-history-section[_ngcontent-%COMP%]   .history-item-card[_ngcontent-%COMP%]   .tx-info-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.embedded-history-section[_ngcontent-%COMP%]   .history-item-card[_ngcontent-%COMP%]   .tx-amount-green[_ngcontent-%COMP%]{color:#22c55e;font-size:14px;font-weight:800}.embedded-history-section[_ngcontent-%COMP%]   .history-item-card[_ngcontent-%COMP%]   .tx-amount-orange[_ngcontent-%COMP%]{color:#f59e0b;font-size:14px;font-weight:800}.embedded-history-section[_ngcontent-%COMP%]   .history-item-card[_ngcontent-%COMP%]   .tx-date-sub[_ngcontent-%COMP%]{color:#64748b;font-size:11px}.embedded-history-section[_ngcontent-%COMP%]   .history-item-card[_ngcontent-%COMP%]   .tx-ref-code[_ngcontent-%COMP%]{color:#94a3b8;font-size:10px;font-family:monospace}.embedded-history-section[_ngcontent-%COMP%]   .history-item-card[_ngcontent-%COMP%]   .tx-status-tag[_ngcontent-%COMP%]{padding:4px 10px;border-radius:12px;font-size:11px;font-weight:800}.embedded-history-section[_ngcontent-%COMP%]   .history-item-card[_ngcontent-%COMP%]   .tx-status-tag.failed[_ngcontent-%COMP%]{background:#ef444426;color:#f87171;border:1px solid rgba(239,68,68,.3)}.embedded-history-section[_ngcontent-%COMP%]   .history-item-card[_ngcontent-%COMP%]   .tx-status-tag.completed[_ngcontent-%COMP%]{background:#22c55e26;color:#4ade80;border:1px solid rgba(34,197,94,.3)}.embedded-history-section[_ngcontent-%COMP%]   .history-item-card[_ngcontent-%COMP%]   .tx-status-tag.pending[_ngcontent-%COMP%]{background:#f59e0b26;color:#fbbf24;border:1px solid rgba(245,158,11,.3)}.wallet-screenshot-card[_ngcontent-%COMP%]{width:100%;max-width:580px;background:#111d2d!important;border:1px solid #1d2d42!important;border-radius:16px!important;padding:24px!important;color:#fff;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;box-shadow:0 25px 50px -12px #000000b3}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-balance-banner[_ngcontent-%COMP%]{background:#152233;border:1px solid #203146;border-radius:12px;padding:20px 24px;margin-bottom:20px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-balance-banner[_ngcontent-%COMP%]   .banner-title[_ngcontent-%COMP%]{color:#fff;font-size:1rem;font-weight:600;margin-bottom:4px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-balance-banner[_ngcontent-%COMP%]   .banner-subtitle[_ngcontent-%COMP%]{color:#8b9bb4;font-size:.9rem;margin-bottom:12px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-balance-banner[_ngcontent-%COMP%]   .banner-amount[_ngcontent-%COMP%]{color:#fff;font-size:2.2rem;font-weight:800;letter-spacing:-.5px;line-height:1.1}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-segmented-tabs[_ngcontent-%COMP%]{display:flex;gap:12px;margin-bottom:20px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-segmented-tabs[_ngcontent-%COMP%]   .segmented-tab-btn[_ngcontent-%COMP%]{flex:1;padding:12px 16px;border-radius:8px;font-size:.95rem;font-weight:600;border:1px solid #203146;background:#152233;color:#7f92ac;cursor:pointer;transition:all .2s ease;text-align:center}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-segmented-tabs[_ngcontent-%COMP%]   .segmented-tab-btn.active[_ngcontent-%COMP%]{background:#25384e;color:#fff;border-color:#364d68}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-segmented-tabs[_ngcontent-%COMP%]   .segmented-tab-btn[_ngcontent-%COMP%]:hover:not(.active){background:#1b2a3e;color:#a0b2cb}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]{background:#152233;border:1px solid #203146;border-radius:12px;padding:24px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-heading[_ngcontent-%COMP%]{color:#fff;font-size:1.8rem;font-weight:800;margin:0 0 4px;line-height:1.2}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-subheading[_ngcontent-%COMP%]{color:#8b9bb4;font-size:.95rem;margin:0 0 20px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .preset-pills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:24px}@media(max-width:480px){.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .preset-pills-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .preset-pills-grid[_ngcontent-%COMP%]   .preset-pill-btn[_ngcontent-%COMP%]{background:#23344a;color:#fff;border:1px solid #314660;border-radius:20px;padding:10px 14px;font-size:.9rem;font-weight:600;cursor:pointer;transition:all .2s ease}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .preset-pills-grid[_ngcontent-%COMP%]   .preset-pill-btn[_ngcontent-%COMP%]:hover{background:#2c425e;border-color:#415b7c}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .preset-pills-grid[_ngcontent-%COMP%]   .preset-pill-btn[_ngcontent-%COMP%]:active{transform:scale(.97)}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-group-field[_ngcontent-%COMP%]{margin-bottom:20px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-group-field[_ngcontent-%COMP%]   .form-group-label[_ngcontent-%COMP%]{display:block;color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-group-field[_ngcontent-%COMP%]   .phone-select-wrap[_ngcontent-%COMP%]{display:flex;width:100%}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-group-field[_ngcontent-%COMP%]   .phone-select-wrap[_ngcontent-%COMP%]   .phone-prefix-select[_ngcontent-%COMP%]{background:#0f1a28;border:1px solid #23344a;border-right:none;border-radius:8px 0 0 8px;color:#fff;padding:12px 28px 12px 14px;font-size:.95rem;font-weight:600;outline:none;cursor:pointer;appearance:none;background-image:url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);background-repeat:no-repeat;background-position:right 10px center;background-size:10px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-group-field[_ngcontent-%COMP%]   .phone-select-wrap[_ngcontent-%COMP%]   .phone-text-input[_ngcontent-%COMP%]{flex:1;background:#0f1a28;border:1px solid #23344a;border-radius:0 8px 8px 0;color:#fff;padding:12px 16px;font-size:1rem;font-weight:500;outline:none;transition:border-color .2s}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-group-field[_ngcontent-%COMP%]   .phone-select-wrap[_ngcontent-%COMP%]   .phone-text-input[_ngcontent-%COMP%]:focus{border-color:#3b82f6}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-group-field[_ngcontent-%COMP%]   .amount-text-input[_ngcontent-%COMP%]{width:100%;background:#0f1a28;border:1px solid #23344a;border-radius:8px;color:#fff;padding:12px 16px;font-size:1rem;font-weight:500;outline:none;box-sizing:border-box;transition:border-color .2s}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-group-field[_ngcontent-%COMP%]   .amount-text-input[_ngcontent-%COMP%]:focus{border-color:#3b82f6}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-group-field[_ngcontent-%COMP%]   .form-helper-text[_ngcontent-%COMP%]{color:#8b9bb4;font-size:.85rem;margin-top:8px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .mpesa-status-alert[_ngcontent-%COMP%]{padding:12px 16px;border-radius:8px;font-size:.9rem;margin-bottom:20px;background:#3b82f626;border:1px solid rgba(59,130,246,.3);color:#60a5fa}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .mpesa-status-alert.failed[_ngcontent-%COMP%]{background:#ef444426;border-color:#ef44444d;color:#f87171}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .mpesa-status-alert.success[_ngcontent-%COMP%]{background:#22c55e26;border-color:#22c55e4d;color:#4ade80}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-actions-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:28px;gap:16px}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-actions-row[_ngcontent-%COMP%]   .action-btn-back[_ngcontent-%COMP%]{background:#23344a;color:#fff;border:none;border-radius:8px;padding:12px 28px;font-size:.9rem;font-weight:700;letter-spacing:.5px;cursor:pointer;transition:background .2s}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-actions-row[_ngcontent-%COMP%]   .action-btn-back[_ngcontent-%COMP%]:hover{background:#2e4460}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-actions-row[_ngcontent-%COMP%]   .action-btn-green[_ngcontent-%COMP%]{background:#22c55e;color:#fff;border:none;border-radius:8px;padding:12px 32px;font-size:.95rem;font-weight:700;cursor:pointer;transition:background .2s;box-shadow:0 4px 14px #22c55e4d}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-actions-row[_ngcontent-%COMP%]   .action-btn-green[_ngcontent-%COMP%]:hover:not(:disabled){background:#16a34a}.wallet-screenshot-card[_ngcontent-%COMP%]   .wallet-form-container[_ngcontent-%COMP%]   .form-actions-row[_ngcontent-%COMP%]   .action-btn-green[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.change-room-backdrop[_ngcontent-%COMP%]{z-index:1200;display:flex;align-items:center;justify-content:center;background:#000000bf;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.change-room-card[_ngcontent-%COMP%]{width:90%;max-width:440px;background:#14171a;border:1px solid #262b32;border-radius:14px;padding:20px 24px 24px;box-shadow:0 24px 48px #000000d9;animation:modalFadeIn .2s ease-out}.change-room-card[_ngcontent-%COMP%]   .change-room-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.change-room-card[_ngcontent-%COMP%]   .change-room-header[_ngcontent-%COMP%]   .change-room-title[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;margin:0}.change-room-card[_ngcontent-%COMP%]   .change-room-header[_ngcontent-%COMP%]   .change-room-close-btn[_ngcontent-%COMP%]{width:32px;height:32px;background:#23282f;border:1px solid #343b45;border-radius:6px;color:#cbd5e1;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;transition:all .2s}.change-room-card[_ngcontent-%COMP%]   .change-room-header[_ngcontent-%COMP%]   .change-room-close-btn[_ngcontent-%COMP%]:hover{background:#2f3640;color:#fff;border-color:#4a5462}.change-room-card[_ngcontent-%COMP%]   .change-room-divider[_ngcontent-%COMP%]{height:1px;background:#242930;margin:14px 0 16px}.change-room-card[_ngcontent-%COMP%]   .change-room-desc[_ngcontent-%COMP%]{color:#cbd5e1;font-size:13.5px;line-height:1.45;margin:0 0 18px}.change-room-card[_ngcontent-%COMP%]   .change-room-options[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.change-room-card[_ngcontent-%COMP%]   .change-room-options[_ngcontent-%COMP%]   .room-option-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;background:#1c2025;border:1.5px solid transparent;border-radius:10px;padding:13px 18px;cursor:pointer;transition:all .2s}.change-room-card[_ngcontent-%COMP%]   .change-room-options[_ngcontent-%COMP%]   .room-option-item[_ngcontent-%COMP%]:hover{background:#22272e}.change-room-card[_ngcontent-%COMP%]   .change-room-options[_ngcontent-%COMP%]   .room-option-item.selected[_ngcontent-%COMP%]{border-color:#22c55e;background:#152219;box-shadow:inset 0 0 12px #22c55e14}.change-room-card[_ngcontent-%COMP%]   .change-room-options[_ngcontent-%COMP%]   .room-option-item[_ngcontent-%COMP%]   .room-radio-circle[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;border:2px solid #234d31;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s}.change-room-card[_ngcontent-%COMP%]   .change-room-options[_ngcontent-%COMP%]   .room-option-item[_ngcontent-%COMP%]   .room-radio-circle.checked[_ngcontent-%COMP%]{border-color:#22c55e;box-shadow:0 0 8px #22c55e59}.change-room-card[_ngcontent-%COMP%]   .change-room-options[_ngcontent-%COMP%]   .room-option-item[_ngcontent-%COMP%]   .room-radio-circle[_ngcontent-%COMP%]   .room-radio-dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;background:#22c55e}.change-room-card[_ngcontent-%COMP%]   .change-room-options[_ngcontent-%COMP%]   .room-option-item[_ngcontent-%COMP%]   .room-option-label[_ngcontent-%COMP%]{color:#fff;font-size:14.5px;font-weight:700}.change-room-card[_ngcontent-%COMP%]   .change-room-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:22px}.change-room-card[_ngcontent-%COMP%]   .change-room-actions[_ngcontent-%COMP%]   .btn-confirm-room-change[_ngcontent-%COMP%]{background:linear-gradient(180deg,#22c55e,#16a34a);color:#fff;font-weight:800;font-size:14px;letter-spacing:.5px;text-transform:uppercase;padding:11px 42px;border:0;border-radius:12px;cursor:pointer;box-shadow:0 4px 14px #22c55e59;transition:all .2s}.change-room-card[_ngcontent-%COMP%]   .change-room-actions[_ngcontent-%COMP%]   .btn-confirm-room-change[_ngcontent-%COMP%]:hover{transform:translateY(-1px);box-shadow:0 6px 18px #22c55e73}.change-room-card[_ngcontent-%COMP%]   .change-room-actions[_ngcontent-%COMP%]   .btn-confirm-room-change[_ngcontent-%COMP%]:active{transform:translateY(0)}.chat-toggle-btn[_ngcontent-%COMP%]{position:relative;width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:0;background:transparent;color:#a6adb4;cursor:pointer;transition:color .2s ease}.chat-toggle-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:21px;height:21px;fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.45}.chat-toggle-btn[_ngcontent-%COMP%]:hover, .chat-toggle-btn.active[_ngcontent-%COMP%]{color:#d1d5d9}.chat-drawer[_ngcontent-%COMP%]{flex:0 0 clamp(280px,23vw,340px);width:clamp(280px,23vw,340px);position:relative;height:100%;min-height:0;display:flex;flex-direction:column;overflow:hidden;color:#f2f4f5;background:#171717;border:1px solid #262626;border-radius:0 0 12px 12px;animation:_ngcontent-%COMP%_chat-drawer-in .22s cubic-bezier(.16,1,.3,1) both}@keyframes _ngcontent-%COMP%_chat-drawer-in{0%{opacity:0;transform:translate(20px)}to{opacity:1;transform:translate(0)}}.chat-mobile-top-bar[_ngcontent-%COMP%]{display:none}.chat-header-card[_ngcontent-%COMP%]{margin:8px 10px 4px;background:#242424;border:1px solid #3a3a3a;border-radius:18px;overflow:hidden}.chat-drawer-header[_ngcontent-%COMP%]{min-height:52px;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:7px 12px}.chat-online-label[_ngcontent-%COMP%]{flex:1;text-align:center;color:#b0b0b0;font-size:15px;font-weight:500}.chat-online-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#2cc43a;font-weight:800}.chat-info-btn[_ngcontent-%COMP%], .chat-close-btn[_ngcontent-%COMP%]{width:38px;height:38px;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:50%;background:#303030;color:#aaa;cursor:pointer;font-weight:700;font-size:19px;transition:all .15s ease}.chat-info-btn[_ngcontent-%COMP%]{font-family:Georgia,serif;font-size:20px}.chat-info-btn[_ngcontent-%COMP%]:hover, .chat-close-btn[_ngcontent-%COMP%]:hover{color:#fff;background:#3a3a3a}.chat-message-list[_ngcontent-%COMP%]{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;scroll-behavior:auto;scroll-padding-bottom:24px;padding:8px 10px 14px;scrollbar-color:#2b3036 transparent;scrollbar-width:thin;background:#191919}.chat-restriction-notice-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:16px auto;padding:6px 12px;text-align:center;animation:_ngcontent-%COMP%_chat-message-in .28s ease-out both}.chat-restriction-text[_ngcontent-%COMP%]{color:#64748b;font-size:13px;line-height:1.45;text-align:center;font-weight:500}.chat-message-row[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:8px;margin:5px 0 7px;animation:_ngcontent-%COMP%_chat-message-in .24s ease-out both}.chat-message-row[_ngcontent-%COMP%]   .chat-avatar[_ngcontent-%COMP%]{width:36px;height:36px;flex-shrink:0;object-fit:cover;border-radius:50%;background:#252525;border:1px solid rgba(255,255,255,.08)}.chat-message-row[_ngcontent-%COMP%]   .chat-message-bubble[_ngcontent-%COMP%]{flex:1;min-width:0;padding:8px 12px;border-radius:14px;background:#252525;border:1px solid rgba(255,255,255,.025)}.chat-message-row[_ngcontent-%COMP%]   .chat-message-meta[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:8px;margin-bottom:2px}.chat-message-row[_ngcontent-%COMP%]   .chat-username[_ngcontent-%COMP%]{font-size:12.5px;font-weight:700}.chat-message-row[_ngcontent-%COMP%]   .chat-time[_ngcontent-%COMP%]{color:#727883;font-size:11px}.chat-message-row[_ngcontent-%COMP%]   .chat-message-text[_ngcontent-%COMP%]{overflow-wrap:anywhere;color:#e5e7eb;font-size:13.5px;line-height:1.38}.chat-message-row[_ngcontent-%COMP%]   .chat-like-btn[_ngcontent-%COMP%]{flex-shrink:0;align-self:center;display:flex;flex-direction:column;align-items:center;gap:1px;padding:2px;border:0;background:transparent;color:#555b63;cursor:pointer;font-size:17px;line-height:1;transition:all .15s ease}.chat-message-row[_ngcontent-%COMP%]   .chat-like-btn[_ngcontent-%COMP%]   .likes-count[_ngcontent-%COMP%]{font-size:10px;color:#88909b}.chat-message-row[_ngcontent-%COMP%]   .chat-like-btn[_ngcontent-%COMP%]:hover{color:#f43f5e;transform:scale(1.15)}.chat-message-row[_ngcontent-%COMP%]   .chat-like-btn[_ngcontent-%COMP%]:active{transform:scale(.92)}.chat-message-row.own[_ngcontent-%COMP%]{flex-direction:row-reverse}.chat-message-row.own[_ngcontent-%COMP%]   .chat-message-bubble[_ngcontent-%COMP%]{background:#183321;border-color:#22c55e33}.chat-message-row.own[_ngcontent-%COMP%]   .chat-message-meta[_ngcontent-%COMP%]{justify-content:flex-end}.chat-message-row.own[_ngcontent-%COMP%]   .chat-message-text[_ngcontent-%COMP%]{text-align:right}.chat-message-row.own[_ngcontent-%COMP%]   .chat-username[_ngcontent-%COMP%]{color:#4ade80!important}@keyframes _ngcontent-%COMP%_chat-message-in{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}.chat-new-messages-pill[_ngcontent-%COMP%]{position:absolute;bottom:84px;left:50%;transform:translate(-50%);z-index:40;display:inline-flex;align-items:center;gap:6px;padding:6px 14px 7px 16px;border:0;border-radius:9999px;background:#42d86c;color:#000;font-size:13.5px;font-weight:700;cursor:pointer;box-shadow:0 4px 14px #00000073;transition:transform .15s ease,background .15s ease;animation:_ngcontent-%COMP%_pillSlideUp .2s ease-out both;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.chat-new-messages-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000;font-weight:700;line-height:1}.chat-new-messages-pill[_ngcontent-%COMP%]   .pill-arrow[_ngcontent-%COMP%]{color:#000;font-size:11px;margin-left:2px;display:inline-block;vertical-align:middle}.chat-new-messages-pill[_ngcontent-%COMP%]:hover{transform:translate(-50%) translateY(-2px);background:#3ac761}.chat-new-messages-pill[_ngcontent-%COMP%]:active{transform:translate(-50%) translateY(0);background:#32b555}@keyframes _ngcontent-%COMP%_pillSlideUp{0%{opacity:0;transform:translate(-50%) translateY(10px)}to{opacity:1;transform:translate(-50%) translateY(0)}}.chat-composer[_ngcontent-%COMP%]{margin:4px 10px 10px;padding:8px 12px 6px;border:1px solid #3b3b3b;border-radius:18px;background:#242424}.chat-composer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;border:0;outline:none;background:transparent;color:#f3f3f3;font:inherit;font-size:14px}.chat-composer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#727984}.chat-composer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.55}.chat-composer-footer[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;margin-top:6px}.chat-character-count[_ngcontent-%COMP%]{color:#727984;font-size:12px;font-weight:500}.chat-emoji-btn[_ngcontent-%COMP%]{justify-self:start;width:26px;height:26px;padding:0;border:0;background:transparent;color:#aaa;font-size:22px;line-height:1;cursor:pointer}.chat-send-btn[_ngcontent-%COMP%]{justify-self:end;width:30px;height:30px;border:0;border-radius:50%;background:#2a323d;color:#64748b;cursor:pointer;font-size:14px;line-height:1;display:inline-flex;align-items:center;justify-content:center;transition:all .15s ease}.chat-send-btn[_ngcontent-%COMP%]:not(:disabled){background:#22c55e;color:#fff;box-shadow:0 2px 8px #22c55e59}.chat-send-btn[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.5}@media(max-width:768px){.chat-drawer[_ngcontent-%COMP%]{position:fixed;z-index:1500;inset:0;width:100vw;height:100dvh;border-radius:0;background:#121519;border:0}.chat-mobile-top-bar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#0e1115;border-bottom:1px solid #1e232b}.chat-mobile-top-bar[_ngcontent-%COMP%]   .chat-mobile-back-btn[_ngcontent-%COMP%], .chat-mobile-top-bar[_ngcontent-%COMP%]   .chat-mobile-fullscreen-btn[_ngcontent-%COMP%]{background:transparent;border:0;color:#cbd5e1;font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:6px;padding:4px 6px}.chat-mobile-top-bar[_ngcontent-%COMP%]   .chat-mobile-back-btn[_ngcontent-%COMP%]:hover, .chat-mobile-top-bar[_ngcontent-%COMP%]   .chat-mobile-fullscreen-btn[_ngcontent-%COMP%]:hover{color:#fff}.chat-mobile-top-bar[_ngcontent-%COMP%]   .chat-mobile-back-btn[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%], .chat-mobile-top-bar[_ngcontent-%COMP%]   .chat-mobile-fullscreen-btn[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%]{font-size:18px;line-height:1}.chat-mobile-top-bar[_ngcontent-%COMP%]   .chat-mobile-back-btn[_ngcontent-%COMP%]   .fs-icon[_ngcontent-%COMP%], .chat-mobile-top-bar[_ngcontent-%COMP%]   .chat-mobile-fullscreen-btn[_ngcontent-%COMP%]   .fs-icon[_ngcontent-%COMP%]{font-size:14px}.chat-header-card[_ngcontent-%COMP%]{margin:8px 12px 6px;border-radius:16px;background:#1c2026}.chat-message-list[_ngcontent-%COMP%]{padding:8px 12px 14px}.chat-composer[_ngcontent-%COMP%]{margin:4px 12px 14px}.chat-new-messages-pill[_ngcontent-%COMP%]{bottom:84px;z-index:1600;padding:8px 20px;font-size:13px;box-shadow:0 4px 20px #000000b3,0 0 16px #22c55e99}.chat-toggle-btn[_ngcontent-%COMP%]{width:38px;height:38px}}@media(max-width:768px){.bet-panel-box.auto-mode[_ngcontent-%COMP%]{min-height:144px;padding-bottom:0}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]{min-height:30px;height:30px;margin:6px -12px 0;padding:0 10px;gap:8px;justify-content:center;flex-wrap:nowrap;overflow:hidden;border-top:1px solid #111315}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .auto-opt-item[_ngcontent-%COMP%]{min-width:0;gap:4px;flex-wrap:nowrap}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .auto-opt-label[_ngcontent-%COMP%]{color:#aeb3bd;font-size:10px;line-height:1;white-space:nowrap}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .toggle-switch-btn[_ngcontent-%COMP%]{width:28px;height:18px;flex:0 0 auto}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .toggle-switch-btn[_ngcontent-%COMP%]   .toggle-knob[_ngcontent-%COMP%]{top:3px;left:3px;width:12px;height:12px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .toggle-switch-btn.active[_ngcontent-%COMP%]   .toggle-knob[_ngcontent-%COMP%]{transform:translate(10px)}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .auto-cashout-pill[_ngcontent-%COMP%]{height:20px;margin-left:0;padding:1px 5px;gap:2px;border-radius:11px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .auto-mult-input[_ngcontent-%COMP%]{width:28px;font-size:10px}.bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-footer-row[_ngcontent-%COMP%]   .auto-mult-x[_ngcontent-%COMP%]{font-size:10px}.left-sidebar[_ngcontent-%COMP%]{flex:0 0 auto;width:100%;height:auto;min-height:240px;margin-top:6px;padding:6px 8px;border-radius:12px;overflow:visible}.bets-list[_ngcontent-%COMP%]{min-height:160px;max-height:380px;overflow-y:auto;-webkit-overflow-scrolling:touch}.sidebar-footer[_ngcontent-%COMP%]{margin-top:6px;padding-top:4px}}@media(min-width:901px){.left-sidebar[_ngcontent-%COMP%]{padding:12px 12px 8px;border-radius:26px;background:#1b1d1e}.bets-tabs[_ngcontent-%COMP%]{display:flex;height:40px;flex-basis:40px;margin-bottom:15px;padding:3px;border-radius:22px}.bets-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 6px;border-radius:18px;font-size:13px;font-weight:500}.bets-header-info[_ngcontent-%COMP%]{padding:0 10px 10px}.bets-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.bets-count[_ngcontent-%COMP%]{font-size:17px;font-weight:500}.bets-table-header[_ngcontent-%COMP%]{flex-basis:28px;padding:3px 12px 6px;font-size:11px}.bets-list[_ngcontent-%COMP%]{gap:6px;padding-bottom:6px}.bet-row[_ngcontent-%COMP%]{flex-basis:43px;min-height:43px;padding:5px 12px;border-radius:22px;background:#15181a;font-size:13px}.player-name[_ngcontent-%COMP%], .col-bet[_ngcontent-%COMP%], .mult-badge[_ngcontent-%COMP%], .win-amount[_ngcontent-%COMP%]{font-size:13px}.user-avatar-wrap[_ngcontent-%COMP%]{width:32px;height:32px}.sidebar-footer[_ngcontent-%COMP%]{flex-basis:28px;padding:4px 10px 0;font-size:10px}.sidebar-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:10px}}.bet-history-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:2000;display:flex;align-items:center;justify-content:center;padding:16px;background:#000000bf;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.bet-history-card[_ngcontent-%COMP%]{width:530px;max-width:96vw;background:#191c21;border:1px solid #282d36;border-radius:14px;padding:18px 22px 22px;box-shadow:0 24px 60px #000000e6;animation:modalFadeIn .2s cubic-bezier(.16,1,.3,1);display:flex;flex-direction:column}.bet-history-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.bet-history-header[_ngcontent-%COMP%]   .bet-history-title[_ngcontent-%COMP%]{color:#fff;font-size:15px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;margin:0}.bet-history-header[_ngcontent-%COMP%]   .bet-history-close-btn[_ngcontent-%COMP%]{background:transparent;border:0;color:#727a86;cursor:pointer;font-size:18px;line-height:1;display:inline-flex;align-items:center;justify-content:center;padding:4px;transition:color .15s ease}.bet-history-header[_ngcontent-%COMP%]   .bet-history-close-btn[_ngcontent-%COMP%]:hover{color:#fff}.bet-history-table-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:85px 85px 70px 1fr 62px;align-items:center;padding:0 10px 8px;color:#636b78;font-size:11.5px;font-weight:600;border-bottom:1px solid #222730;margin-bottom:6px}.bet-history-table-header[_ngcontent-%COMP%]   .bth-col.bth-cashout[_ngcontent-%COMP%]{text-align:right;padding-right:12px}.bet-history-list[_ngcontent-%COMP%]{max-height:380px;min-height:200px;overflow-y:auto;overscroll-behavior:contain;display:flex;flex-direction:column;gap:5px;padding-right:4px;scrollbar-width:thin;scrollbar-color:#2b313c transparent}.bet-history-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:85px 85px 70px 1fr 62px;align-items:center;gap:6px;padding:5px 10px;border-radius:8px;min-height:40px;background:transparent;border:1px solid transparent;transition:background .15s ease}.bet-history-row[_ngcontent-%COMP%]   .btr-date[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.2}.bet-history-row[_ngcontent-%COMP%]   .btr-date[_ngcontent-%COMP%]   .btr-time[_ngcontent-%COMP%]{font-size:12.5px;font-weight:700;color:#94a3b8}.bet-history-row[_ngcontent-%COMP%]   .btr-date[_ngcontent-%COMP%]   .btr-day[_ngcontent-%COMP%]{font-size:10.5px;color:#64748b;font-weight:500}.bet-history-row[_ngcontent-%COMP%]   .btr-bet[_ngcontent-%COMP%]{color:#8c95a3;font-size:13.5px;font-weight:600}.bet-history-row[_ngcontent-%COMP%]   .btr-multiplier[_ngcontent-%COMP%]   .btr-mult-pill[_ngcontent-%COMP%]{display:inline-block;padding:2px 7px;border-radius:4px;background:#091a2a;color:#38bdf8;font-size:12px;font-weight:800;letter-spacing:.2px}.bet-history-row[_ngcontent-%COMP%]   .btr-multiplier[_ngcontent-%COMP%]   .btr-mult-pill.mid[_ngcontent-%COMP%]{background:#1f112e;color:#c084fc}.bet-history-row[_ngcontent-%COMP%]   .btr-multiplier[_ngcontent-%COMP%]   .btr-mult-pill.high[_ngcontent-%COMP%]{background:#2b0b23;color:#f472b6}.bet-history-row[_ngcontent-%COMP%]   .btr-cashout[_ngcontent-%COMP%]{text-align:right;padding-right:12px;min-height:16px}.bet-history-row[_ngcontent-%COMP%]   .btr-cashout[_ngcontent-%COMP%]   .btr-win-amount[_ngcontent-%COMP%]{color:#fff;font-size:13.5px;font-weight:700}.bet-history-row[_ngcontent-%COMP%]   .btr-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:7px}.bet-history-row[_ngcontent-%COMP%]   .btr-actions[_ngcontent-%COMP%]   .btr-icon-btn[_ngcontent-%COMP%]{background:transparent;border:0;padding:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:transform .15s ease,opacity .15s ease}.bet-history-row[_ngcontent-%COMP%]   .btr-actions[_ngcontent-%COMP%]   .btr-icon-btn[_ngcontent-%COMP%]:hover{transform:scale(1.15)}.bet-history-row[_ngcontent-%COMP%]   .btr-actions[_ngcontent-%COMP%]   .btr-icon-btn.btr-shield-btn[_ngcontent-%COMP%]{color:#22c55e}.bet-history-row[_ngcontent-%COMP%]   .btr-actions[_ngcontent-%COMP%]   .btr-icon-btn.btr-chat-btn[_ngcontent-%COMP%]{color:#6b7280}.bet-history-row[_ngcontent-%COMP%]   .btr-actions[_ngcontent-%COMP%]   .btr-icon-btn.btr-chat-btn[_ngcontent-%COMP%]:hover{color:#9ca3af}.bet-history-row.won[_ngcontent-%COMP%]{background:#1626147a;border-color:#326e22}.bet-history-row.won[_ngcontent-%COMP%]   .btr-date[_ngcontent-%COMP%]   .btr-time[_ngcontent-%COMP%]{color:#4ade80}.bet-history-row.won[_ngcontent-%COMP%]   .btr-date[_ngcontent-%COMP%]   .btr-day[_ngcontent-%COMP%]{color:#86b876}.bet-history-row.won[_ngcontent-%COMP%]   .btr-bet[_ngcontent-%COMP%], .bet-history-row.won[_ngcontent-%COMP%]   .btr-cashout[_ngcontent-%COMP%]   .btr-win-amount[_ngcontent-%COMP%]{color:#fff;font-weight:700}.bet-history-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:14px}.bet-history-footer[_ngcontent-%COMP%]   .btn-load-more-history[_ngcontent-%COMP%]{background:#252a32;border:1px solid #363d47;border-radius:20px;color:#8c93a0;font-size:12.5px;font-weight:600;padding:7px 24px;cursor:pointer;transition:all .15s ease}.bet-history-footer[_ngcontent-%COMP%]   .btn-load-more-history[_ngcontent-%COMP%]:hover{background:#2f353f;color:#fff;border-color:#485260}.bet-history-footer[_ngcontent-%COMP%]   .btn-load-more-history[_ngcontent-%COMP%]:active{transform:scale(.97)}@media(max-width:768px){.dual-bet-panels[_ngcontent-%COMP%]{gap:5px}.bet-panel-box[_ngcontent-%COMP%]{min-height:144px;padding:8px 12px 10px;border-radius:12px}.panel-header-row[_ngcontent-%COMP%], .bet-panel-box.auto-mode[_ngcontent-%COMP%]   .panel-header-row[_ngcontent-%COMP%]{min-height:26px;margin-bottom:6px}.panel-subtabs[_ngcontent-%COMP%]{width:210px;height:28px;padding:2px 3px;border-radius:16px}.panel-subtabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:13px;font-size:12.5px;font-weight:700}.panel-body[_ngcontent-%COMP%]{grid-template-columns:minmax(0,126fr) minmax(0,192fr);width:min(100%,368px);gap:10px}.big-bet-btn[_ngcontent-%COMP%], .bet-panel-box[_ngcontent-%COMP%]   .big-bet-btn[_ngcontent-%COMP%]{height:82px;min-height:82px;padding:4px 6px;border:1px solid #b8c2b9;border-radius:14px;box-shadow:none}.big-bet-btn.green[_ngcontent-%COMP%], .bet-panel-box[_ngcontent-%COMP%]   .big-bet-btn.green[_ngcontent-%COMP%]{background:#28a809;color:#fff;border-color:#b8c2b9;box-shadow:none}.big-bet-btn[_ngcontent-%COMP%]   .btn-title[_ngcontent-%COMP%], .bet-panel-box[_ngcontent-%COMP%]   .big-bet-btn[_ngcontent-%COMP%]   .btn-title[_ngcontent-%COMP%]{font-size:22px;font-weight:800;line-height:1.1}.big-bet-btn[_ngcontent-%COMP%]   .btn-sub[_ngcontent-%COMP%], .bet-panel-box[_ngcontent-%COMP%]   .big-bet-btn[_ngcontent-%COMP%]   .btn-sub[_ngcontent-%COMP%]{margin-top:1px;font-size:18px;font-weight:800}}']
    })
}
;
function Mn(c, n) {
    if (c & 1 && (o(0, "div", 27),
    s(1),
    a()),
    c & 2) {
        let t = p(2);
        x("err", t.depositStatusType === "error")("ok", t.depositStatusType === "success"),
        l(),
        M(" ", t.depositStatusMsg, " ")
    }
}
function Pn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 10)(1, "h2", 11),
        s(2, "Deposit"),
        a(),
        o(3, "p", 12),
        s(4, "Send money into your account"),
        a(),
        o(5, "div", 13)(6, "button", 14),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.setDepositAmount(i.minDepositAmount))
        }),
        s(7),
        O(8, "number"),
        a(),
        o(9, "button", 14),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.setDepositAmount(2e3))
        }),
        s(10, "+2,000"),
        a(),
        o(11, "button", 14),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.setDepositAmount(5e3))
        }),
        s(12, "+5,000"),
        a(),
        o(13, "button", 14),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.setDepositAmount(1e4))
        }),
        s(14, "+10,000"),
        a()(),
        o(15, "div", 15)(16, "label", 16),
        s(17, "Phone Number"),
        a(),
        o(18, "div", 17)(19, "select", 18)(20, "option", 19),
        s(21, "+254"),
        a()(),
        o(22, "input", 20),
        ot("ngModelChange", function(i) {
            g(t);
            let r = p();
            return it(r.depositPhone, i) || (r.depositPhone = i),
            m(i)
        }),
        u("ngModelChange", function(i) {
            g(t);
            let r = p();
            return m(r.stripPrefix(i, "deposit"))
        }),
        a()()(),
        o(23, "div", 15)(24, "label", 16),
        s(25, "Amount"),
        a(),
        o(26, "input", 21),
        ot("ngModelChange", function(i) {
            g(t);
            let r = p();
            return it(r.depositVal, i) || (r.depositVal = i),
            m(i)
        }),
        a(),
        o(27, "span", 22),
        s(28),
        O(29, "number"),
        a()(),
        P(30, Mn, 2, 5, "div", 23),
        o(31, "div", 24)(32, "button", 25),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.goBack())
        }),
        s(33, "BACK"),
        a(),
        o(34, "button", 26),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.submitDeposit())
        }),
        s(35, "Deposit"),
        a()()()
    }
    if (c & 2) {
        let t = p();
        l(7),
        M("+", q(8, 7, t.minDepositAmount)),
        l(15),
        nt("ngModel", t.depositPhone),
        l(4),
        nt("ngModel", t.depositVal),
        h("placeholder", t.minDepositAmount.toString())("min", t.minDepositAmount),
        l(2),
        M("Minimum KES ", q(29, 9, t.minDepositAmount), "."),
        l(2),
        h("ngIf", t.depositStatusMsg)
    }
}
function vn(c, n) {
    if (c & 1 && (o(0, "div", 27),
    s(1),
    a()),
    c & 2) {
        let t = p(2);
        x("err", t.withdrawStatusType === "error")("ok", t.withdrawStatusType === "success"),
        l(),
        M(" ", t.withdrawStatusMsg, " ")
    }
}
function On(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 10)(1, "h2", 11),
        s(2, "Withdrawals"),
        a(),
        o(3, "p", 12),
        s(4, "Withdraw from your wallet"),
        a(),
        o(5, "div", 13)(6, "button", 14),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.addWithdrawAmount(200))
        }),
        s(7, "+200"),
        a(),
        o(8, "button", 14),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.addWithdrawAmount(500))
        }),
        s(9, "+500"),
        a(),
        o(10, "button", 14),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.addWithdrawAmount(1e3))
        }),
        s(11, "+1,000"),
        a(),
        o(12, "button", 14),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.addWithdrawAmount(5e3))
        }),
        s(13, "+5,000"),
        a()(),
        o(14, "div", 15)(15, "label", 16),
        s(16, "Phone Number"),
        a(),
        o(17, "div", 17)(18, "select", 18)(19, "option", 19),
        s(20, "+254"),
        a()(),
        o(21, "input", 20),
        ot("ngModelChange", function(i) {
            g(t);
            let r = p();
            return it(r.withdrawPhone, i) || (r.withdrawPhone = i),
            m(i)
        }),
        u("ngModelChange", function(i) {
            g(t);
            let r = p();
            return m(r.stripPrefix(i, "withdraw"))
        }),
        a()()(),
        o(22, "div", 15)(23, "label", 16),
        s(24, "Amount"),
        a(),
        o(25, "input", 28),
        ot("ngModelChange", function(i) {
            g(t);
            let r = p();
            return it(r.withdrawVal, i) || (r.withdrawVal = i),
            m(i)
        }),
        a(),
        o(26, "span", 22),
        s(27, "Daily withdrawal limits: Minimum KES 200, Maximum KES 300,000."),
        a()(),
        P(28, vn, 2, 5, "div", 23),
        o(29, "div", 24)(30, "button", 25),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.goBack())
        }),
        s(31, "BACK"),
        a(),
        o(32, "button", 29),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.submitWithdraw())
        }),
        s(33),
        a()()()
    }
    if (c & 2) {
        let t = p();
        l(21),
        nt("ngModel", t.withdrawPhone),
        l(4),
        nt("ngModel", t.withdrawVal),
        l(3),
        h("ngIf", t.withdrawStatusMsg),
        l(4),
        h("disabled", t.isWithdrawSubmitting),
        l(),
        M(" ", t.isWithdrawSubmitting ? "Submitting..." : "Withdraw", " ")
    }
}
function yn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "div", 30),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.closeWithdrawPopup())
        }),
        o(1, "div", 31),
        u("click", function(i) {
            return i.stopPropagation()
        }),
        o(2, "div", 32),
        G(),
        o(3, "svg", 33),
        A(4, "path", 34),
        a()(),
        F(),
        o(5, "h3", 35),
        s(6),
        a(),
        o(7, "p", 36),
        s(8),
        a(),
        o(9, "button", 37),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.closeWithdrawPopup())
        }),
        s(10, "OK, Got it"),
        a()()()
    }
    if (c & 2) {
        let t = p();
        l(6),
        y(t.withdrawPopupTitle || "Withdrawal Submitted"),
        l(2),
        y(t.withdrawPopupMsg)
    }
}
var J = class c {
    authService = E(V);
    gameSocket = E(_t);
    router = E(W);
    subscriptions = [];
    userBalance$ = this.authService.userBalance$;
    activeTab = "deposit";
    depositPhone = "";
    withdrawPhone = "";
    depositVal = null;
    minDepositAmount = 999;
    maxDepositAmount = 1999;
    withdrawVal = 200;
    isWithdrawSubmitting = !1;
    depositStatusMsg = "";
    withdrawStatusMsg = "";
    depositStatusType = "info";
    withdrawStatusType = "info";
    withdrawPopupVisible = !1;
    withdrawPopupTitle = "Withdrawal Submitted";
    withdrawPopupMsg = "";
    ngOnInit() {
        let n = this.router.url;
        this.activeTab = n.includes("/withdraw") ? "withdraw" : "deposit";
        let t = this.authService.currentUser$.getValue();
        t?.phone_number && (this.depositPhone = (t.phone_number || "").replace(/^(\+?254|0)+/, ""),
        this.withdrawPhone = (t.phone_number || "").replace(/^(\+?254|0)+/, ""));
        let e = this.authService.getToken();
        e && this.gameSocket.connect(e);
        let i = r => {
            let d = this.minDepositAmount;
            this.minDepositAmount = r.minDepositAmount,
            this.maxDepositAmount = r.maxDepositAmount,
            (this.depositVal === 999 || this.depositVal === d) && (this.depositVal = r.minDepositAmount)
        }
        ;
        this.authService.getPaymentConfig().subscribe(i),
        this.subscriptions.push(this.gameSocket.paymentConfig$.subscribe(r => {
            r && i(r)
        }
        ), this.authService.currentUser$.subscribe(r => {
            if (r?.phone_number) {
                let d = (r.phone_number || "").replace(/^(\+?254|0)+/, "");
                this.depositPhone || (this.depositPhone = d),
                this.withdrawPhone || (this.withdrawPhone = d)
            }
        }
        ), this.gameSocket.walletUpdated$.subscribe(r => {
            r?.balance !== void 0 && this.authService.updateBalance(r.balance)
        }
        ), this.gameSocket.mpesaSuccess$.subscribe(r => {
            r && (this.clearStkStatusPolling(),
            this.authService.updateBalance(r.balance),
            this.depositStatusMsg = `Deposit complete. KES ${r.amount.toLocaleString()} has been added to your balance.`,
            this.depositStatusType = "success",
            setTimeout( () => {
                this.depositStatusMsg = "",
                this.depositVal = null
            }
            , 2500))
        }
        ), this.gameSocket.mpesaFailed$.subscribe(r => {
            r && (this.clearStkStatusPolling(),
            this.depositStatusMsg = r.reason || "The M-Pesa payment was not completed.",
            this.depositStatusType = "error",
            setTimeout( () => {
                this.depositStatusMsg = ""
            }
            , 5e3))
        }
        ), this.gameSocket.userUpdated$.subscribe(r => {
            r && this.authService.loadCurrentUser().subscribe()
        }
        ))
    }
    ngOnDestroy() {
        this.clearStkStatusPolling(),
        this.subscriptions.forEach(n => n.unsubscribe())
    }
    stripPrefix(n, t) {
        let e = (n || "").replace(/^(\+?254|0)+/, "");
        t === "deposit" ? this.depositPhone = e : this.withdrawPhone = e
    }
    closeWithdrawPopup() {
        this.withdrawPopupVisible = !1,
        this.withdrawPopupMsg = ""
    }
    selectTab(n) {
        this.activeTab = n;
        let t = history.state?.returnUrl || localStorage.getItem("walletReturnUrl");
        n === "deposit" ? this.router.navigate(["/deposit"], {
            state: {
                returnUrl: t
            }
        }) : this.router.navigate(["/withdraw"], {
            state: {
                returnUrl: t
            }
        })
    }
    addDepositAmount(n) {
        this.depositVal = (this.depositVal || this.minDepositAmount) + n
    }
    setDepositAmount(n) {
        this.depositVal = n
    }
    addWithdrawAmount(n) {
        this.withdrawVal = (this.withdrawVal || 0) + n
    }
    submitDeposit() {
        let n = this.depositVal !== null && this.depositVal !== void 0 && !isNaN(Number(this.depositVal)) && Number(this.depositVal) > 0 ? Number(this.depositVal) : this.minDepositAmount;
        if (n < this.minDepositAmount) {
            this.depositStatusMsg = `Minimum deposit is KES ${this.minDepositAmount.toLocaleString()}.`,
            this.depositStatusType = "error";
            return
        }
        if (n > this.maxDepositAmount) {
            this.depositStatusMsg = `Maximum deposit is KES ${this.maxDepositAmount.toLocaleString()}.`,
            this.depositStatusType = "error";
            return
        }
        let e = (this.depositPhone || this.authService.currentUser$.getValue()?.phone_number || "").replace(/\D/g, "").replace(/^(254|0)+/, "");
        if (!e || e.length < 9) {
            this.depositStatusMsg = "Please enter a valid M-Pesa phone number (e.g. 7XXXXXXXX).",
            this.depositStatusType = "error";
            return
        }
        let i = `254${e}`;
        this.depositStatusMsg = "Initiating STK Push...",
        this.depositStatusType = "info",
        this.authService.initiateMpesaSTKPush(n, i).subscribe({
            next: r => {
                this.depositStatusMsg = "\u{1F4F1} Check your phone! Enter your M-Pesa PIN to complete payment.",
                this.depositStatusType = "info";
                let d = r.checkoutRequestId;
                d && this.startMpesaStatusPolling(d)
            }
            ,
            error: r => {
                let d = typeof r == "string" ? r : r?.message || "STK Push failed. Please try again.";
                this.depositStatusMsg = `\u274C ${d}`,
                this.depositStatusType = "error"
            }
        })
    }
    stkPollTimer = null;
    clearStkStatusPolling() {
        this.stkPollTimer && clearInterval(this.stkPollTimer),
        this.stkPollTimer = null
    }
    startMpesaStatusPolling(n) {
        this.clearStkStatusPolling();
        let t = 0
          , e = () => {
            if (t++,
            t > 150) {
                this.clearStkStatusPolling(),
                this.depositStatusType === "info" && (this.depositStatusMsg = "We are still waiting for ArchPay\u2019s final result. Your balance will update automatically once it is confirmed.",
                this.depositStatusType = "error",
                setTimeout( () => {
                    this.depositStatusMsg = ""
                }
                , 5e3));
                return
            }
            this.authService.checkMpesaStatus(n).subscribe({
                next: i => {
                    if (i.status === "completed") {
                        this.clearStkStatusPolling(),
                        i.balance !== void 0 && this.authService.updateBalance(Number(i.balance));
                        let r = i.amount || this.depositVal;
                        this.depositStatusMsg = `\u2705 Deposit complete! KES ${Number(r).toLocaleString()} added to your balance.`,
                        this.depositStatusType = "success",
                        setTimeout( () => {
                            this.depositStatusMsg = "",
                            this.depositVal = null
                        }
                        , 4e3)
                    } else
                        i.status === "failed" && (this.clearStkStatusPolling(),
                        this.depositStatusMsg = `\u274C ${i.reason || "Payment failed or was cancelled."}`,
                        this.depositStatusType = "error",
                        setTimeout( () => {
                            this.depositStatusMsg = ""
                        }
                        , 5e3))
                }
                ,
                error: () => {}
            })
        }
        ;
        e(),
        this.stkPollTimer = setInterval(e, 2e3)
    }
    submitWithdraw() {
        if (!this.withdrawVal || this.withdrawVal < 200) {
            this.withdrawStatusMsg = "Minimum withdrawal is KES 200.",
            this.withdrawStatusType = "error";
            return
        }
        if (this.withdrawVal > 3e5) {
            this.withdrawStatusMsg = "Maximum withdrawal is KES 300,000.",
            this.withdrawStatusType = "error";
            return
        }
        let n = this.authService.userBalance$.getValue() || 0;
        if (Number(n) < this.withdrawVal) {
            this.withdrawStatusMsg = `\u274C Insufficient balance. Your balance is KES ${Number(n).toFixed(2)}.`,
            this.withdrawStatusType = "error";
            return
        }
        let e = (this.withdrawPhone || this.authService.currentUser$.getValue()?.phone_number || "").replace(/^(\+?254|0)/, "");
        if (!e || e.length < 9) {
            this.withdrawStatusMsg = "Please enter a valid M-Pesa phone number (e.g. 7XXXXXXXX).",
            this.withdrawStatusType = "error";
            return
        }
        this.isWithdrawSubmitting = !0,
        this.withdrawStatusMsg = "Submitting withdrawal...",
        this.withdrawStatusType = "info",
        this.authService.withdraw(this.withdrawVal, `254${e}`).subscribe({
            next: i => {
                this.isWithdrawSubmitting = !1,
                this.withdrawStatusMsg = "";
                let r = i?.popup?.title || "Withdrawal Submitted"
                  , d = i?.popup?.message || i?.message || "Your withdrawal request has been submitted. The admin team will process it shortly.";
                this.withdrawPopupTitle = r,
                this.withdrawPopupMsg = d,
                this.withdrawPopupVisible = !0,
                i?.balance !== void 0 && this.authService.updateBalance(Number(i.balance))
            }
            ,
            error: i => {
                this.isWithdrawSubmitting = !1;
                let r = typeof i == "string" ? i : "Withdrawal failed. Check your balance.";
                this.withdrawStatusMsg = `\u274C ${r}`,
                this.withdrawStatusType = "error"
            }
        })
    }
    goBack() {
        let n = history.state?.returnUrl || localStorage.getItem("walletReturnUrl");
        n ? this.router.navigateByUrl(n) : this.router.navigate(["/bets"])
    }
    static \u0275fac = function(t) {
        return new (t || c)
    }
    ;
    static \u0275cmp = $({
        type: c,
        selectors: [["app-wallet"]],
        decls: 19,
        vars: 13,
        consts: [[1, "wallet-page-wrapper"], [1, "wallet-card-container"], [1, "balance-banner-card"], [1, "lbl-title"], [1, "lbl-sub"], [1, "val-amount"], [1, "segmented-control-row"], ["type", "button", 1, "seg-btn", 3, "click"], ["class", "main-form-box", 4, "ngIf"], ["class", "popup-overlay", 3, "click", 4, "ngIf"], [1, "main-form-box"], [1, "box-heading"], [1, "box-subheading"], [1, "presets-row"], ["type", "button", 1, "preset-pill", 3, "click"], [1, "field-wrap"], [1, "field-lbl"], [1, "phone-box"], [1, "code-select"], ["value", "+254"], ["type", "tel", "placeholder", "7XXXXXXXX", "autocomplete", "tel", 1, "phone-input", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "amount-input", 3, "ngModelChange", "ngModel", "placeholder", "min"], [1, "help-lbl"], ["class", "alert-msg", 3, "err", "ok", 4, "ngIf"], [1, "actions-row"], ["type", "button", 1, "btn-back", 3, "click"], ["type", "button", 1, "btn-green", 3, "click"], [1, "alert-msg"], ["type", "number", "placeholder", "200", "min", "200", "max", "300000", 1, "amount-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn-green", 3, "click", "disabled"], [1, "popup-overlay", 3, "click"], [1, "popup-modal", 3, "click"], [1, "popup-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#22c55e", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", 2, "margin", "0 auto"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], [1, "popup-title"], [1, "popup-body"], [1, "popup-ok-btn", 3, "click"]],
        template: function(t, e) {
            t & 1 && (o(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
            s(4, "Current Balance"),
            a(),
            o(5, "div", 4),
            s(6, "Available wallet amount"),
            a(),
            o(7, "div", 5),
            s(8),
            O(9, "async"),
            O(10, "number"),
            a()(),
            o(11, "div", 6)(12, "button", 7),
            u("click", function() {
                return e.selectTab("deposit")
            }),
            s(13, " Deposit "),
            a(),
            o(14, "button", 7),
            u("click", function() {
                return e.selectTab("withdraw")
            }),
            s(15, " Withdraw "),
            a()(),
            P(16, Pn, 36, 11, "div", 8)(17, On, 34, 5, "div", 8),
            a()(),
            P(18, yn, 11, 2, "div", 9)),
            t & 2 && (l(8),
            M("KES ", S(10, 10, q(9, 8, e.userBalance$), "1.0-2")),
            l(4),
            x("active", e.activeTab === "deposit"),
            l(2),
            x("active", e.activeTab === "withdraw"),
            l(2),
            h("ngIf", e.activeTab === "deposit"),
            l(),
            h("ngIf", e.activeTab === "withdraw"),
            l(),
            h("ngIf", e.withdrawPopupVisible))
        },
        dependencies: [Y, K, xt, ht, bt, dt, mt, ut, ft, ee, gt, jt, pt],
        styles: [".wallet-page-wrapper[_ngcontent-%COMP%]{height:100vh;background:#071524;display:flex;justify-content:center;align-items:flex-start;overflow-y:auto;padding:32px 20px 48px;box-sizing:border-box;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;color:#fff}.wallet-card-container[_ngcontent-%COMP%]{width:100%;max-width:920px;margin:0 auto;padding:16px;border:1px solid #173047;border-radius:16px;background:#071524b8;box-sizing:border-box}.balance-banner-card[_ngcontent-%COMP%]{background:#20364b;border:1px solid #2d4a64;border-radius:12px;padding:20px 24px;margin-bottom:20px}.lbl-title[_ngcontent-%COMP%]{color:#fff;font-size:1rem;font-weight:600;margin-bottom:4px}.lbl-sub[_ngcontent-%COMP%]{color:#f4f7fb;font-size:.9rem;margin-bottom:12px}.val-amount[_ngcontent-%COMP%]{color:#e6eefc;font-size:2.2rem;font-weight:800;letter-spacing:-.5px;line-height:1.1}.segmented-control-row[_ngcontent-%COMP%]{display:flex;gap:8px;padding:4px;background:#0d2039;border:1px solid #132b49;border-radius:12px;margin-bottom:20px}.seg-btn[_ngcontent-%COMP%]{flex:1;padding:12px 16px;border-radius:7px;font-size:.95rem;font-weight:600;border:1px solid transparent;background:transparent;color:#f4f7fb;cursor:pointer;transition:all .2s ease;text-align:center}.seg-btn.active[_ngcontent-%COMP%]{background:#233d63;color:#fff;border-color:#2a4a76}.seg-btn[_ngcontent-%COMP%]:hover:not(.active){background:#172e4d;color:#fff}.main-form-box[_ngcontent-%COMP%]{background:#20364b;border:1px solid #2d4a64;border-radius:12px;padding:24px;min-height:min-content;box-sizing:border-box}.box-heading[_ngcontent-%COMP%]{color:#fff;font-size:1.8rem;font-weight:800;margin:0 0 4px;line-height:1.2}.box-subheading[_ngcontent-%COMP%]{color:#f4f7fb;font-size:.95rem;margin:0 0 20px}.presets-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:24px}@media(max-width:480px){.presets-row[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}.preset-pill[_ngcontent-%COMP%]{background:#2d557f;color:#fff;border:1px solid #2d557f;border-radius:20px;padding:10px 14px;font-size:.9rem;font-weight:600;cursor:pointer;transition:all .2s ease}.preset-pill[_ngcontent-%COMP%]:hover{background:#38658f;border-color:#38658f}.preset-pill[_ngcontent-%COMP%]:active{transform:scale(.97)}.field-wrap[_ngcontent-%COMP%]{margin-bottom:20px}.field-lbl[_ngcontent-%COMP%]{display:block;color:#fff;font-size:.95rem;font-weight:600;margin-bottom:8px}.phone-box[_ngcontent-%COMP%]{display:flex;width:100%}.code-select[_ngcontent-%COMP%]{background:#0d2139;border:1px solid #183456;border-right:none;border-radius:8px 0 0 8px;color:#fff;padding:12px 28px 12px 14px;font-size:.95rem;font-weight:600;outline:none;cursor:pointer;appearance:none;background-image:url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E);background-repeat:no-repeat;background-position:right 10px center;background-size:10px}.phone-input[_ngcontent-%COMP%]{flex:1;background:#0d2139;border:1px solid #183456;border-radius:0 8px 8px 0;color:#fff;padding:12px 16px;font-size:1rem;font-weight:500;outline:none;transition:border-color .2s}.phone-input[_ngcontent-%COMP%]:focus, .amount-input[_ngcontent-%COMP%]:focus{border-color:#3b82f6}.amount-input[_ngcontent-%COMP%]{width:100%;background:#0d2139;border:1px solid #183456;border-radius:8px;color:#fff;padding:12px 16px;font-size:1rem;font-weight:500;outline:none;box-sizing:border-box}.help-lbl[_ngcontent-%COMP%]{display:block;color:#f4f7fb;font-size:.85rem;margin-top:8px}.alert-msg[_ngcontent-%COMP%]{padding:12px 16px;border-radius:8px;font-size:.9rem;margin-bottom:20px;background:#3b82f626;border:1px solid rgba(59,130,246,.3);color:#60a5fa}.alert-msg.err[_ngcontent-%COMP%]{background:#ef444426;border-color:#ef44444d;color:#f87171}.alert-msg.ok[_ngcontent-%COMP%]{background:#22c55e26;border-color:#22c55e4d;color:#4ade80}.actions-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:28px;gap:16px}@media(max-width:640px){.wallet-page-wrapper[_ngcontent-%COMP%]{padding:20px 12px 32px}.wallet-card-container[_ngcontent-%COMP%]{padding:12px;border-radius:12px}.balance-banner-card[_ngcontent-%COMP%], .main-form-box[_ngcontent-%COMP%]{padding:20px}.actions-row[_ngcontent-%COMP%]{margin-top:24px}}.btn-back[_ngcontent-%COMP%]{background:#2a3f5d;color:#fff;border:none;border-radius:8px;padding:12px 28px;font-size:.9rem;font-weight:700;letter-spacing:.5px;cursor:pointer;transition:background .2s}.btn-back[_ngcontent-%COMP%]:hover{background:#385575}.btn-green[_ngcontent-%COMP%]{background:#27c127;color:#fff;border:none;border-radius:8px;padding:12px 32px;font-size:.95rem;font-weight:700;cursor:pointer;transition:all .2s cubic-bezier(.16,1,.3,1);box-shadow:0 4px 14px #22c55e4d}.btn-green[_ngcontent-%COMP%]:hover:not(:disabled){background:#1eaa23;transform:translateY(-1px);box-shadow:0 6px 18px #22c55e73}.btn-green[_ngcontent-%COMP%]:active:not(:disabled){transform:translateY(1px) scale(.98)}.btn-green[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed;transform:none}.popup-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000000b3;display:flex;align-items:center;justify-content:center;z-index:9999;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.popup-modal[_ngcontent-%COMP%]{background:#132d4a;border:1px solid #1e4370;border-radius:18px;padding:36px 32px 28px;max-width:400px;width:92%;max-height:85vh;overflow-y:auto;text-align:center;box-shadow:0 20px 60px #00000080;animation:_ngcontent-%COMP%_popIn .25s ease}@keyframes _ngcontent-%COMP%_popIn{0%{transform:scale(.85);opacity:0}to{transform:scale(1);opacity:1}}.popup-icon[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:12px}.popup-title[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:800;color:#fff;margin:0 0 12px}.popup-body[_ngcontent-%COMP%]{font-size:.95rem;color:#a8c4e0;line-height:1.65;margin:0 0 24px;word-break:break-word;white-space:pre-wrap}.popup-ok-btn[_ngcontent-%COMP%]{background:#27c127;color:#fff;border:none;border-radius:10px;padding:13px 44px;font-size:1rem;font-weight:700;cursor:pointer;transition:background .2s}.popup-ok-btn[_ngcontent-%COMP%]:hover{background:#1fa81f}"]
    })
}
;
function Tt(c) {
    if (!c)
        return !1;
    let n = String(c).toLowerCase().replace(/[^a-z]/g, "");
    return n === "admin" || n === "superadmin"
}
var se = (c, n) => {
    let t = E(V)
      , e = E(W);
    if (!t.hasToken())
        return e.createUrlTree(["/login"]);
    let i = t.currentUser$.getValue();
    return i && Tt(i.role) ? !0 : t.loadCurrentUser().pipe(Et(r => Tt(r?.user.role) ? !0 : e.createUrlTree(["/play"])), Bt( () => {
        let r = t.currentUser$.getValue();
        return r && Tt(r.role) ? vt(!0) : vt(e.createUrlTree(["/login"]))
    }
    ))
}
;
var U = (c, n) => {
    let t = E(V)
      , e = E(W);
    return t.hasToken() ? !0 : e.createUrlTree(["/login"], {
        queryParams: {
            returnUrl: n.url
        }
    })
}
;
var le = [{
    path: "",
    component: X,
    canActivate: [U]
}, {
    path: "login",
    loadComponent: () => import("./chunk-M737HDDG.js").then(c => c.AuthLandingComponent)
}, {
    path: "play",
    component: X,
    canActivate: [U]
}, {
    path: "bets",
    loadComponent: () => import("./chunk-BUXP5S25.js").then(c => c.BetsComponent)
}, {
    path: "admin",
    canActivate: [se],
    loadComponent: () => import("./chunk-6OW5M64T.js").then(c => c.SourceAdminComponent)
}, {
    path: "predator",
    canActivate: [U],
    loadComponent: () => import("./chunk-USM7I7P2.js").then(c => c.PredatorComponent)
}, {
    path: "wallet",
    component: J,
    canActivate: [U]
}, {
    path: "deposit",
    component: J,
    canActivate: [U]
}, {
    path: "withdraw",
    component: J,
    canActivate: [U]
}, {
    path: "**",
    redirectTo: "bets"
}];
var ce = {
    providers: [Nt(), Jt(le), Yt()]
};
var Mt = class c {
    socket = null;
    token = null;
    connect(n) {
        if (n) {
            if (this.socket && this.token === n) {
                this.socket.connected || this.socket.connect();
                return
            }
            this.disconnect(),
            this.token = n,
            this.socket = ie(oe, {
                auth: {
                    token: n
                },
                transports: ["websocket", "polling"],
                reconnection: !0,
                reconnectionAttempts: 1 / 0,
                reconnectionDelay: 1e3,
                reconnectionDelayMax: 5e3
            }),
            this.socket.on("connect", () => this.socket?.emit("auth", n))
        }
    }
    disconnect() {
        this.socket?.removeAllListeners(),
        this.socket?.disconnect(),
        this.socket = null,
        this.token = null
    }
    static \u0275fac = function(t) {
        return new (t || c)
    }
    ;
    static \u0275prov = st({
        token: c,
        factory: c.\u0275fac,
        providedIn: "root"
    })
}
;
function kn(c, n) {
    c & 1 && (o(0, "p"),
    s(1, "In Chrome or Brave, open the browser menu and choose "),
    o(2, "b"),
    s(3, "Install app"),
    a(),
    s(4, " or "),
    o(5, "b"),
    s(6, "Add to Home screen"),
    a(),
    s(7, "."),
    a())
}
function Sn(c, n) {
    if (c & 1) {
        let t = v();
        o(0, "aside", 1),
        A(1, "img", 2),
        o(2, "div", 3)(3, "strong"),
        s(4, "Install Betzion"),
        a(),
        o(5, "span"),
        s(6, "Keep Betzion on your home screen for faster access."),
        a(),
        P(7, kn, 8, 0, "p", 4),
        a(),
        o(8, "button", 5),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.installApp())
        }),
        s(9, "Install app"),
        a(),
        o(10, "button", 6),
        u("click", function() {
            g(t);
            let i = p();
            return m(i.dismissInstallPrompt())
        }),
        s(11, "\xD7"),
        a()()
    }
    if (c & 2) {
        let t = p();
        l(7),
        h("ngIf", t.installHelpVisible)
    }
}
var Pt = class c {
    title = b("frontend");
    auth = E(V);
    presence = E(Mt);
    cdr = E(Ut);
    presenceSubscription;
    deferredInstallPrompt = null;
    showInstallPrompt = !1;
    installAvailable = !1;
    installHelpVisible = !1;
    isStandalone = !1;
    hasShownInstallPromptForSession = !1;
    appInitialized = !1;
    onBeforeInstallPrompt = n => {
        n.preventDefault(),
        this.deferredInstallPrompt = n,
        this.installAvailable = !0,
        this.isStandalone || (this.showInstallPrompt = !0),
        this.cdr.detectChanges()
    }
    ;
    onAppInstalled = () => {
        this.deferredInstallPrompt = null,
        this.installAvailable = !1,
        this.showInstallPrompt = !1,
        this.installHelpVisible = !1,
        this.cdr.detectChanges()
    }
    ;
    constructor() {
        this.presenceSubscription = this.auth.currentUser$.subscribe(n => {
            let t = this.auth.getToken();
            if (n && t ? this.presence.connect(t) : this.presence.disconnect(),
            !n || !t) {
                this.hasShownInstallPromptForSession = !1;
                return
            }
            !this.isStandalone && !this.hasShownInstallPromptForSession && (this.hasShownInstallPromptForSession = !0,
            this.showInstallPrompt = !0,
            this.installHelpVisible = !1,
            this.appInitialized && this.cdr.detectChanges())
        }
        )
    }
    ngOnInit() {
        this.appInitialized = !0,
        this.isStandalone = window.matchMedia("(display-mode: standalone)").matches || !!navigator.standalone,
        this.showInstallPrompt = !this.auth.hasToken() && !this.isStandalone,
        window.addEventListener("beforeinstallprompt", this.onBeforeInstallPrompt),
        window.addEventListener("appinstalled", this.onAppInstalled),
        "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").catch( () => {}
        )
    }
    async installApp() {
        if (!this.deferredInstallPrompt) {
            this.installHelpVisible = !0;
            return
        }
        await this.deferredInstallPrompt.prompt(),
        (await this.deferredInstallPrompt.userChoice).outcome === "accepted" ? this.onAppInstalled() : this.installHelpVisible = !0
    }
    dismissInstallPrompt() {
        this.showInstallPrompt = !1
    }
    ngOnDestroy() {
        this.presenceSubscription.unsubscribe(),
        this.presence.disconnect(),
        window.removeEventListener("beforeinstallprompt", this.onBeforeInstallPrompt),
        window.removeEventListener("appinstalled", this.onAppInstalled)
    }
    static \u0275fac = function(t) {
        return new (t || c)
    }
    ;
    static \u0275cmp = $({
        type: c,
        selectors: [["app-root"]],
        decls: 2,
        vars: 1,
        consts: [["class", "install-prompt", "role", "dialog", "aria-label", "Install Betzion app", 4, "ngIf"], ["role", "dialog", "aria-label", "Install Betzion app", 1, "install-prompt"], ["src", "/assets/icons/betzion-app-icon.svg", "alt", "Betzion app icon", 2, "width", "48px", "height", "48px", "border-radius", "12px", "object-fit", "cover"], [1, "install-copy"], [4, "ngIf"], ["type", "button", 1, "install-action", 3, "click"], ["type", "button", "aria-label", "Close install prompt", 1, "install-dismiss", 3, "click"]],
        template: function(t, e) {
            t & 1 && (P(0, Sn, 12, 1, "aside", 0),
            A(1, "router-outlet")),
            t & 2 && h("ngIf", e.showInstallPrompt && !e.isStandalone)
        },
        dependencies: [Y, K, Xt],
        styles: [".install-prompt[_ngcontent-%COMP%]{position:fixed;z-index:2000;right:14px;bottom:74px;left:14px;display:grid;grid-template-columns:44px minmax(0,1fr) auto 28px;align-items:center;gap:11px;max-width:570px;margin:0 auto;padding:11px 12px;border:1px solid #573247;border-radius:12px;background:#151a25;color:#f7f8fb;box-shadow:0 18px 42px #0000008c;font-family:Inter,system-ui,-apple-system,sans-serif}.install-prompt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:10px;background:#0f1520;object-fit:cover}.install-copy[_ngcontent-%COMP%]{display:grid;gap:2px;min-width:0}.install-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px;color:#fff}.install-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#abb7c7;font-size:11px;line-height:1.35}.install-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{grid-column:1 / -1;margin:4px 0 0;color:#d6ddeb;font-size:11px;line-height:1.35}.install-action[_ngcontent-%COMP%]{border:0;border-radius:7px;background:#ff1764;color:#fff;padding:9px 12px;font:800 12px Inter,system-ui,sans-serif;cursor:pointer}.install-dismiss[_ngcontent-%COMP%]{border:0;background:transparent;color:#b8c0cc;padding:5px;font-size:22px;line-height:1;cursor:pointer}@media(max-width:430px){.install-prompt[_ngcontent-%COMP%]{grid-template-columns:38px minmax(0,1fr) auto 23px;gap:8px;bottom:70px;right:9px;left:9px}.install-prompt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:38px;height:38px}.install-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px}.install-action[_ngcontent-%COMP%]{padding:8px 9px;font-size:11px}}"]
    })
}
;
Kt(Pt, ce).catch(c => console.error(c));
