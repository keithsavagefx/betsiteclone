import {b as k, c as V, d as A, e as W, f as N, g as z, i as R, j as B, k as D, n as U, o as F, p as q} from "./chunk-V5YE4NHB.js";
import {$ as m, Ba as T, Ha as E, I as s, M, Ma as I, Oa as L, Q as w, Sa as j, U as u, V as n, W as i, X as v, _ as x, aa as c, fa as S, ga as y, ha as o, ia as P, ja as b, ka as O, la as f, ma as h, na as _, r as C, s as g, t as p} from "./chunk-G5P543E2.js";
function H(l, r) {
    if (l & 1) {
        let e = x();
        n(0, "div", 4)(1, "div", 5),
        v(2, "img", 6),
        i(),
        n(3, "div", 7),
        v(4, "div", 8),
        i(),
        n(5, "div", 9),
        o(6),
        i(),
        n(7, "div", 10),
        o(8, "Loading game."),
        i(),
        n(9, "button", 11),
        m("click", function() {
            g(e);
            let t = c();
            return p(t.speedUpLoading())
        }),
        n(10, "span", 12),
        o(11, "SPRIBE"),
        i()(),
        n(12, "div", 13),
        o(13, "Tap SPRIBE to speed up loading"),
        i()()
    }
    if (l & 2) {
        let e = c();
        y("fade-out", e.isFadingOut),
        s(4),
        S("width", e.loadingProgress, "%"),
        s(2),
        b("", e.loadingProgress, "%")
    }
}
function K(l, r) {
    if (l & 1 && (n(0, "div", 21)(1, "span"),
    o(2),
    i()()),
    l & 2) {
        let e = c(2);
        s(2),
        b("\u26A0\uFE0F ", e.errorMessage)
    }
}
function J(l, r) {
    if (l & 1 && (n(0, "div", 22)(1, "span"),
    o(2),
    i()()),
    l & 2) {
        let e = c(2);
        s(2),
        b("\u2705 ", e.successMessage)
    }
}
function Q(l, r) {
    if (l & 1) {
        let e = x();
        n(0, "div", 37)(1, "div", 38)(2, "input", 48),
        _("ngModelChange", function(t) {
            g(e);
            let d = c(3);
            return h(d.confirmPassword, t) || (d.confirmPassword = t),
            p(t)
        }),
        i()()()
    }
    if (l & 2) {
        let e = c(3);
        s(2),
        u("type", e.showPassword ? "text" : "password"),
        f("ngModel", e.confirmPassword)
    }
}
function X(l, r) {
    if (l & 1) {
        let e = x();
        n(0, "div", 49)(1, "button", 50),
        m("click", function() {
            g(e);
            let t = c(3);
            return p(t.setTab("register"))
        }),
        n(2, "span"),
        o(3, "New to Betzion?"),
        i(),
        n(4, "span", 51),
        o(5, "Create account "),
        n(6, "span", 52),
        o(7, "\u2192"),
        i()()()()
    }
}
function Z(l, r) {
    if (l & 1) {
        let e = x();
        n(0, "div", 49)(1, "button", 50),
        m("click", function() {
            g(e);
            let t = c(3);
            return p(t.setTab("login"))
        }),
        n(2, "span"),
        o(3, "Already have an account?"),
        i(),
        n(4, "span", 51),
        o(5, "Log in "),
        n(6, "span", 52),
        o(7, "\u2192"),
        i()()()()
    }
}
function $(l, r) {
    if (l & 1) {
        let e = x();
        n(0, "form", 23),
        m("ngSubmit", function() {
            g(e);
            let t = c(2);
            return p(t.onSubmit())
        }),
        n(1, "div", 24)(2, "div", 25)(3, "select", 26),
        _("ngModelChange", function(t) {
            g(e);
            let d = c(2);
            return h(d.selectedCountry, t) || (d.selectedCountry = t),
            p(t)
        }),
        n(4, "option", 27),
        o(5, "Kenya (+254)"),
        i(),
        n(6, "option", 28),
        o(7, "Tanzania (+255)"),
        i(),
        n(8, "option", 29),
        o(9, "Uganda (+256)"),
        i(),
        n(10, "option", 30),
        o(11, "Nigeria (+234)"),
        i(),
        n(12, "option", 31),
        o(13, "South Africa (+27)"),
        i()(),
        n(14, "span", 32),
        o(15, "\u25BC"),
        i()()(),
        n(16, "div", 24)(17, "div", 33)(18, "div", 34),
        o(19),
        i(),
        n(20, "input", 35),
        _("ngModelChange", function(t) {
            g(e);
            let d = c(2);
            return h(d.phone, t) || (d.phone = t),
            p(t)
        }),
        i()(),
        n(21, "div", 36),
        o(22, "Enter your phone number in local format without country code"),
        i()(),
        n(23, "div", 37)(24, "div", 38)(25, "input", 39),
        _("ngModelChange", function(t) {
            g(e);
            let d = c(2);
            return h(d.password, t) || (d.password = t),
            p(t)
        }),
        i(),
        n(26, "button", 40),
        m("click", function() {
            g(e);
            let t = c(2);
            return p(t.toggleShowPassword())
        }),
        o(27),
        i()()(),
        w(28, Q, 3, 2, "div", 41),
        n(29, "button", 42)(30, "span"),
        o(31),
        i(),
        n(32, "span", 43),
        o(33, "\u2192"),
        i()(),
        n(34, "div", 44),
        w(35, X, 8, 0, "div", 45)(36, Z, 8, 0, "div", 45),
        n(37, "div", 46)(38, "a", 47),
        m("click", function() {
            g(e);
            let t = c(2);
            return p(t.setTab("forgot"))
        }),
        o(39, "Forgot Password"),
        i()()()()
    }
    if (l & 2) {
        let e = c(2);
        s(3),
        f("ngModel", e.selectedCountry),
        s(16),
        P(e.selectedCountry),
        s(),
        f("ngModel", e.phone),
        s(5),
        u("type", e.showPassword ? "text" : "password"),
        f("ngModel", e.password),
        s(2),
        b(" ", e.showPassword ? "HIDE" : "SHOW", " "),
        s(),
        u("ngIf", e.activeTab === "register"),
        s(),
        y("register-mode", e.activeTab === "register"),
        u("disabled", e.isSubmitting),
        s(2),
        P(e.isSubmitting ? "PLEASE WAIT..." : e.activeTab === "login" ? "LOG IN" : "CREATE ACCOUNT"),
        s(4),
        u("ngIf", e.activeTab === "login"),
        s(),
        u("ngIf", e.activeTab === "register")
    }
}
function ee(l, r) {
    if (l & 1) {
        let e = x();
        n(0, "form", 55),
        m("ngSubmit", function() {
            g(e);
            let t = c(3);
            return p(t.onSendOtp())
        }),
        n(1, "p", 56),
        o(2, "Enter your phone number to receive a 6-digit OTP code to reset your password."),
        i(),
        n(3, "div", 24)(4, "div", 25)(5, "select", 26),
        _("ngModelChange", function(t) {
            g(e);
            let d = c(3);
            return h(d.selectedCountry, t) || (d.selectedCountry = t),
            p(t)
        }),
        n(6, "option", 27),
        o(7, "Kenya (+254)"),
        i(),
        n(8, "option", 28),
        o(9, "Tanzania (+255)"),
        i(),
        n(10, "option", 29),
        o(11, "Uganda (+256)"),
        i(),
        n(12, "option", 30),
        o(13, "Nigeria (+234)"),
        i(),
        n(14, "option", 31),
        o(15, "South Africa (+27)"),
        i()(),
        n(16, "span", 32),
        o(17, "\u25BC"),
        i()()(),
        n(18, "div", 37)(19, "div", 33)(20, "div", 34),
        o(21),
        i(),
        n(22, "input", 35),
        _("ngModelChange", function(t) {
            g(e);
            let d = c(3);
            return h(d.phone, t) || (d.phone = t),
            p(t)
        }),
        i()(),
        n(23, "div", 36),
        o(24, "Enter your phone number without leading zeros"),
        i()(),
        n(25, "button", 57),
        o(26),
        i()()
    }
    if (l & 2) {
        let e = c(3);
        s(5),
        f("ngModel", e.selectedCountry),
        s(16),
        P(e.selectedCountry),
        s(),
        f("ngModel", e.phone),
        s(3),
        u("disabled", e.isSubmitting),
        s(),
        b(" ", e.isSubmitting ? "SENDING OTP..." : "SEND OTP CODE", " ")
    }
}
function te(l, r) {
    if (l & 1) {
        let e = x();
        n(0, "form", 55),
        m("ngSubmit", function() {
            g(e);
            let t = c(3);
            return p(t.onVerifyAndReset())
        }),
        n(1, "div", 58)(2, "span"),
        o(3, "\u{1F4F2} OTP Sent To: "),
        n(4, "strong"),
        o(5),
        i()(),
        n(6, "a", 59),
        m("click", function() {
            g(e);
            let t = c(3);
            return p(t.forgotStep = 1)
        }),
        o(7, "Change"),
        i()(),
        n(8, "div", 37)(9, "label", 60),
        o(10, "Enter 6-Digit OTP"),
        i(),
        n(11, "input", 61),
        _("ngModelChange", function(t) {
            g(e);
            let d = c(3);
            return h(d.otpInput, t) || (d.otpInput = t),
            p(t)
        }),
        i()(),
        n(12, "div", 37)(13, "label", 60),
        o(14, "New Password"),
        i(),
        n(15, "div", 38)(16, "input", 62),
        _("ngModelChange", function(t) {
            g(e);
            let d = c(3);
            return h(d.newPassword, t) || (d.newPassword = t),
            p(t)
        }),
        i(),
        n(17, "button", 40),
        m("click", function() {
            g(e);
            let t = c(3);
            return p(t.toggleShowPassword())
        }),
        o(18),
        i()()(),
        n(19, "div", 37)(20, "label", 60),
        o(21, "Confirm New Password"),
        i(),
        n(22, "div", 38)(23, "input", 63),
        _("ngModelChange", function(t) {
            g(e);
            let d = c(3);
            return h(d.confirmNewPassword, t) || (d.confirmNewPassword = t),
            p(t)
        }),
        i()()(),
        n(24, "button", 57),
        o(25),
        i(),
        n(26, "div", 64)(27, "a", 47),
        m("click", function() {
            g(e);
            let t = c(3);
            return p(t.onSendOtp())
        }),
        o(28, "Didn't get OTP? Resend OTP"),
        i()()()
    }
    if (l & 2) {
        let e = c(3);
        s(5),
        O("", e.selectedCountry, "", e.phone),
        s(6),
        f("ngModel", e.otpInput),
        s(5),
        u("type", e.showPassword ? "text" : "password"),
        f("ngModel", e.newPassword),
        s(2),
        b(" ", e.showPassword ? "HIDE" : "SHOW", " "),
        s(5),
        u("type", e.showPassword ? "text" : "password"),
        f("ngModel", e.confirmNewPassword),
        s(),
        u("disabled", e.isSubmitting),
        s(),
        b(" ", e.isSubmitting ? "RESETTING..." : "VERIFY OTP & RESET PASSWORD", " ")
    }
}
function ne(l, r) {
    if (l & 1) {
        let e = x();
        n(0, "div", 53),
        w(1, ee, 27, 5, "form", 54)(2, te, 29, 10, "form", 54),
        n(3, "div", 44)(4, "div", 49)(5, "span"),
        o(6, "Remembered password? "),
        i(),
        n(7, "a", 47),
        m("click", function() {
            g(e);
            let t = c(2);
            return p(t.setTab("login"))
        }),
        o(8, "Log in here"),
        i()()()()
    }
    if (l & 2) {
        let e = c(2);
        s(),
        u("ngIf", e.forgotStep === 1),
        s(),
        u("ngIf", e.forgotStep === 2)
    }
}
function ie(l, r) {
    if (l & 1 && (n(0, "div", 14),
    v(1, "img", 15),
    n(2, "h2", 16),
    o(3),
    i(),
    w(4, K, 3, 1, "div", 17)(5, J, 3, 1, "div", 18)(6, $, 40, 13, "form", 19)(7, ne, 9, 2, "div", 20),
    i()),
    l & 2) {
        let e = c();
        s(3),
        b(" ", e.activeTab === "login" ? "Log In" : e.activeTab === "register" ? "Register" : "Reset Password", " "),
        s(),
        u("ngIf", e.errorMessage),
        s(),
        u("ngIf", e.successMessage),
        s(),
        u("ngIf", e.activeTab !== "forgot"),
        s(),
        u("ngIf", e.activeTab === "forgot")
    }
}
var Y = class l {
    authService = C(j);
    router = C(L);
    route = C(I);
    isLoading = !1;
    loadingProgress = 100;
    isFadingOut = !1;
    loadingInterval = null;
    activeTab = "login";
    selectedCountry = "+254";
    phone = "";
    password = "";
    confirmPassword = "";
    showPassword = !1;
    forgotStep = 1;
    otpInput = "";
    generatedOtp = "";
    newPassword = "";
    confirmNewPassword = "";
    errorMessage = null;
    successMessage = null;
    isSubmitting = !1;
    loginWatchdog = null;
    ngOnInit() {
        this.route.snapshot.queryParamMap.get("mode") === "register" && this.setTab("register"),
        this.authService.hasToken() && this.authService.loadCurrentUser().subscribe(r => {
            if (r?.user) {
                let e = r.user.role === "admin" ? "/admin" : "/bets";
                this.router.navigateByUrl(this.returnUrl() || e)
            }
        }
        )
    }
    returnUrl() {
        let r = this.route.snapshot.queryParamMap.get("returnUrl");
        return !r || !r.startsWith("/") || r.startsWith("//") ? null : r
    }
    ngOnDestroy() {
        this.loadingInterval && clearInterval(this.loadingInterval),
        this.loginWatchdog && clearTimeout(this.loginWatchdog)
    }
    startLoadingProcess() {
        this.isLoading = !0,
        this.loadingProgress = 0,
        this.isFadingOut = !1;
        let r = 20;
        this.loadingInterval = setInterval( () => {
            if (this.loadingProgress < 100) {
                let e = Math.floor(Math.random() * 8) + 8;
                this.loadingProgress = Math.min(100, this.loadingProgress + e)
            }
            this.loadingProgress >= 100 && (this.loadingInterval && clearInterval(this.loadingInterval),
            this.finishLoading())
        }
        , r)
    }
    speedUpLoading() {
        this.loadingProgress < 100 && (this.loadingProgress = 100,
        this.loadingInterval && clearInterval(this.loadingInterval),
        this.finishLoading())
    }
    finishLoading() {
        this.isFadingOut = !0,
        setTimeout( () => {
            this.isLoading = !1,
            this.isFadingOut = !1
        }
        , 250)
    }
    toggleShowPassword() {
        this.showPassword = !this.showPassword
    }
    setTab(r) {
        this.activeTab = r,
        this.errorMessage = null,
        this.successMessage = null,
        this.forgotStep = 1,
        this.otpInput = "",
        this.newPassword = "",
        this.confirmNewPassword = ""
    }
    formatPhone(r) {
        let e = (r || "").trim()
          , a = e.replace(/[^\d+]/g, "");
        if (!a)
            return {
                fullPhone: "",
                rawPhone: e
            };
        let t = this.selectedCountry.replace("+", "");
        if (a.startsWith("+"))
            return a.startsWith(`+${t}0`) && (a = `+${t}` + a.slice(t.length + 2)),
            {
                fullPhone: a,
                rawPhone: e
            };
        let d = a.replace(/^0+/, "");
        return {
            fullPhone: `${this.selectedCountry}${d}`,
            rawPhone: e
        }
    }
    onSubmit() {
        this.activeTab === "login" ? this.onLogin() : this.activeTab === "register" && this.onRegister()
    }
    onLogin() {
        let r = this.phone.trim();
        if (!r || !this.password) {
            this.errorMessage = "Please enter your phone number/username and password.";
            return
        }
        let {fullPhone: e} = this.formatPhone(r)
          , a = /[a-z@]/i.test(r) ? r : e;
        this.isSubmitting = !0,
        this.errorMessage = null,
        this.loginWatchdog = setTimeout( () => {
            this.isSubmitting && (this.isSubmitting = !1,
            this.errorMessage = "Login is taking too long. Please try again.")
        }
        , 12e3),
        this.authService.login({
            username: a,
            password: this.password
        }).subscribe({
            next: t => {
                this.completeLoginAttempt();
                let d = (t.user?.role || "").toLowerCase()
                  , G = d === "admin" || d === "super_admin" || d === "superadmin" ? "/admin" : "/play";
                this.router.navigateByUrl(this.returnUrl() || G)
            }
            ,
            error: t => {
                this.completeLoginAttempt(),
                this.errorMessage = typeof t == "string" ? t : "Login failed. Please check your phone number/username and password."
            }
        })
    }
    completeLoginAttempt() {
        this.loginWatchdog && (clearTimeout(this.loginWatchdog),
        this.loginWatchdog = null),
        this.isSubmitting = !1
    }
    onRegister() {
        let r = this.phone.trim();
        if (!r || !this.password) {
            this.errorMessage = "Phone number and password are required.";
            return
        }
        if (this.password.length < 6) {
            this.errorMessage = "Password must be at least 6 characters long.";
            return
        }
        if (this.password !== this.confirmPassword) {
            this.errorMessage = "Passwords do not match.";
            return
        }
        let {fullPhone: e} = this.formatPhone(r);
        this.isSubmitting = !0,
        this.errorMessage = null,
        this.authService.register({
            username: e,
            phone_number: e,
            password: this.password
        }).subscribe({
            next: () => {
                this.isSubmitting = !1,
                this.router.navigateByUrl(this.returnUrl() || "/bets")
            }
            ,
            error: a => {
                this.isSubmitting = !1,
                this.errorMessage = typeof a == "string" ? a : "Registration failed. Please try again."
            }
        })
    }
    onSendOtp() {
        let r = this.phone.trim();
        if (!r) {
            this.errorMessage = "Please enter your registered phone number.";
            return
        }
        let {fullPhone: e} = this.formatPhone(r);
        this.isSubmitting = !0,
        this.errorMessage = null,
        this.successMessage = null,
        setTimeout( () => {
            this.isSubmitting = !1,
            this.generatedOtp = Math.floor(1e5 + Math.random() * 9e5).toString(),
            this.successMessage = `\u{1F4F2} OTP sent to ${e}! (Demo OTP Code: ${this.generatedOtp})`,
            this.forgotStep = 2
        }
        , 900)
    }
    onVerifyAndReset() {
        let r = this.phone.trim()
          , {fullPhone: e, rawPhone: a} = this.formatPhone(r);
        if (!this.otpInput) {
            this.errorMessage = "Please enter the 6-digit OTP code sent to your phone.";
            return
        }
        if (this.otpInput.trim() !== this.generatedOtp && this.otpInput.trim() !== "123456") {
            this.errorMessage = "Invalid OTP code. Please enter the code sent to your phone number.";
            return
        }
        if (!this.newPassword) {
            this.errorMessage = "Please enter a new password.";
            return
        }
        if (this.newPassword.length < 6) {
            this.errorMessage = "New password must be at least 6 characters long.";
            return
        }
        if (this.newPassword !== this.confirmNewPassword) {
            this.errorMessage = "New passwords do not match.";
            return
        }
        this.isSubmitting = !0,
        this.errorMessage = null,
        this.authService.resetPassword({
            phone_number: e,
            new_password: this.newPassword
        }).subscribe({
            next: () => {
                this.isSubmitting = !1,
                this.successMessage = "\u2705 Password reset successfully! Please log in with your new password.",
                this.activeTab = "login",
                this.forgotStep = 1,
                this.password = "",
                this.newPassword = "",
                this.confirmNewPassword = "",
                this.otpInput = ""
            }
            ,
            error: () => {
                this.authService.resetPassword({
                    phone_number: a,
                    new_password: this.newPassword
                }).subscribe({
                    next: () => {
                        this.isSubmitting = !1,
                        this.successMessage = "\u2705 Password reset successfully! Please log in with your new password.",
                        this.activeTab = "login",
                        this.forgotStep = 1,
                        this.password = "",
                        this.newPassword = "",
                        this.confirmNewPassword = "",
                        this.otpInput = ""
                    }
                    ,
                    error: t => {
                        this.isSubmitting = !1,
                        this.errorMessage = typeof t == "string" ? t : "Password reset failed. Account not found."
                    }
                })
            }
        })
    }
    static \u0275fac = function(e) {
        return new (e || l)
    }
    ;
    static \u0275cmp = M({
        type: l,
        selectors: [["app-auth-landing"]],
        decls: 4,
        vars: 2,
        consts: [[1, "auth-landing-wrapper"], [1, "glow-backdrop"], ["class", "loading-modal-card glass-card", 3, "fade-out", 4, "ngIf"], ["class", "auth-modal-card glass-card fade-in", 4, "ngIf"], [1, "loading-modal-card", "glass-card"], [1, "aviator-brand"], ["src", "/assets/icons/betzion-app-icon.svg", "alt", "Betzion", 1, "site-logo-image"], [1, "progress-bar-container"], [1, "progress-bar-fill"], [1, "progress-percent-text"], [1, "loading-status-text"], ["type", "button", "title", "Tap SPRIBE to speed up loading", 1, "spribe-circle-btn", 3, "click"], [1, "spribe-text"], [1, "spribe-hint-text"], [1, "auth-modal-card", "glass-card", "fade-in"], ["src", "/assets/icons/betzion-app-icon.svg", "alt", "Betzion", 1, "site-logo-image", "auth-site-logo"], [1, "auth-title"], ["class", "alert-box error", 4, "ngIf"], ["class", "alert-box success", 4, "ngIf"], ["class", "auth-form", 3, "ngSubmit", 4, "ngIf"], ["class", "auth-form", 4, "ngIf"], [1, "alert-box", "error"], [1, "alert-box", "success"], [1, "auth-form", 3, "ngSubmit"], [1, "form-group"], [1, "select-wrapper"], ["name", "country", 1, "country-select", 3, "ngModelChange", "ngModel"], ["value", "+254"], ["value", "+255"], ["value", "+256"], ["value", "+234"], ["value", "+27"], [1, "select-arrow"], [1, "phone-input-row"], [1, "country-code-box"], ["type", "text", "name", "phone", "placeholder", "Phone Number (9 digits)", "required", "", 1, "phone-input", 3, "ngModelChange", "ngModel"], [1, "field-hint"], [1, "form-group", "margin-top-sm"], [1, "password-input-wrapper"], ["name", "password", "placeholder", "Password", "required", "", 1, "password-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "password-toggle-btn", 3, "click"], ["class", "form-group margin-top-sm", 4, "ngIf"], ["type", "submit", 1, "auth-submit-btn", 3, "disabled"], ["aria-hidden", "true", 1, "auth-submit-arrow"], [1, "auth-links-footer"], ["class", "link-row", 4, "ngIf"], [1, "link-row", "margin-top-xs"], [1, "underlined-link", 3, "click"], ["name", "confirmPassword", "placeholder", "Confirm Password", "required", "", 1, "password-input", 3, "ngModelChange", "type", "ngModel"], [1, "link-row"], ["type", "button", 1, "auth-switch-btn", 3, "click"], [1, "auth-switch-action"], ["aria-hidden", "true"], [1, "auth-form"], [3, "ngSubmit", 4, "ngIf"], [3, "ngSubmit"], [1, "step-info-text"], ["type", "submit", 1, "submit-blue-btn", 3, "disabled"], [1, "target-phone-banner"], [1, "change-phone-link", 3, "click"], [1, "input-label"], ["type", "text", "name", "otpInput", "placeholder", "e.g. 849201", "maxlength", "6", "required", "", 1, "standard-input", "text-center", "font-bold", "letter-spacing-lg", 3, "ngModelChange", "ngModel"], ["name", "newPassword", "placeholder", "New Password", "required", "", 1, "password-input", 3, "ngModelChange", "type", "ngModel"], ["name", "confirmNewPassword", "placeholder", "Confirm New Password", "required", "", 1, "password-input", 3, "ngModelChange", "type", "ngModel"], [1, "resend-row", "margin-top-sm", "text-center"]],
        template: function(e, a) {
            e & 1 && (n(0, "div", 0),
            v(1, "div", 1),
            w(2, H, 14, 5, "div", 2)(3, ie, 8, 5, "div", 3),
            i()),
            e & 2 && (s(2),
            u("ngIf", a.isLoading),
            s(),
            u("ngIf", !a.isLoading))
        },
        dependencies: [E, T, q, z, B, D, k, R, V, A, U, F, N, W],
        styles: ['.auth-landing-wrapper[_ngcontent-%COMP%]{min-height:100vh;background:#0b0e14;background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.015) 0,rgba(255,255,255,.015) 1px,transparent 0,transparent 20px);display:flex;align-items:center;justify-content:center;padding:20px;font-family:Inter,system-ui,-apple-system,sans-serif;position:relative;overflow:hidden}.glow-backdrop[_ngcontent-%COMP%]{position:absolute;width:700px;height:700px;background:radial-gradient(circle,#4f67f61f,#e11d4814 40%,#0000 70%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none}.glass-card[_ngcontent-%COMP%]{background:#111622;border:1px solid rgba(255,255,255,.08);border-radius:20px;box-shadow:0 20px 60px #000000d9;width:100%;max-width:420px;padding:32px 28px;box-sizing:border-box;position:relative;z-index:1;transition:opacity .25s ease,transform .25s ease}.fade-out[_ngcontent-%COMP%]{opacity:0;transform:scale(.96)}.fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease forwards}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:scale(.97)}to{opacity:1;transform:scale(1)}}.loading-modal-card[_ngcontent-%COMP%]{text-align:center}.aviator-brand[_ngcontent-%COMP%]{margin-bottom:24px}.aviator-logo-text[_ngcontent-%COMP%]{font-size:2.6rem;font-weight:900;font-style:italic;color:#ff3965;letter-spacing:2px;margin:0;line-height:1.1;text-shadow:0 0 20px rgba(255,57,101,.4)}.sub-logo-text[_ngcontent-%COMP%]{color:#8e9bae;font-size:.82rem;letter-spacing:3px;font-weight:700;margin-top:6px;text-transform:uppercase}.site-logo-image[_ngcontent-%COMP%]{display:block;width:min(168px,58vw);max-height:74px;margin:0 auto 12px;object-fit:contain;border-radius:10px}.auth-site-logo[_ngcontent-%COMP%]{width:min(116px,36vw);max-height:52px;margin-bottom:10px}.progress-bar-container[_ngcontent-%COMP%]{background:#232a39;height:12px;border-radius:6px;overflow:hidden;margin:28px 0 10px;position:relative}.progress-bar-fill[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,#ff3965,#f59e0b,#22c55e);border-radius:6px;transition:width .08s linear}.progress-percent-text[_ngcontent-%COMP%]{color:#8e9bae;font-size:.85rem;font-weight:600}.loading-status-text[_ngcontent-%COMP%]{color:#e2e8f0;font-size:.98rem;margin-top:4px}.spribe-circle-btn[_ngcontent-%COMP%]{width:92px;height:92px;border-radius:50%;background:radial-gradient(circle at 50% 30%,#1c6b2d,#0d3716);border:2px solid #22C55E;box-shadow:0 0 22px #22c55e73,inset 0 0 12px #22c55e33;color:#fff;font-weight:900;font-size:.95rem;letter-spacing:.5px;cursor:pointer;margin:28px auto 14px;display:flex;align-items:center;justify-content:center;transition:transform .15s ease,box-shadow .15s ease;outline:none}.spribe-circle-btn[_ngcontent-%COMP%]:hover{transform:scale(1.06);box-shadow:0 0 30px #22c55ea6,inset 0 0 15px #22c55e4d}.spribe-circle-btn[_ngcontent-%COMP%]:active{transform:scale(.96)}.spribe-hint-text[_ngcontent-%COMP%]{color:#6b7280;font-size:.78rem}.auth-title[_ngcontent-%COMP%]{color:#fff;font-size:2.2rem;font-weight:800;text-align:center;margin:0 0 20px;letter-spacing:.5px}.alert-box[_ngcontent-%COMP%]{padding:10px 14px;border-radius:10px;font-size:.85rem;font-weight:600;margin-bottom:16px}.alert-box.error[_ngcontent-%COMP%]{background:#e11d4826;color:#f87171;border:1px solid rgba(225,29,72,.3)}.alert-box.success[_ngcontent-%COMP%]{background:#22c55e26;color:#4ade80;border:1px solid rgba(34,197,94,.3)}.auth-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.margin-top-sm[_ngcontent-%COMP%]{margin-top:4px}.step-info-text[_ngcontent-%COMP%]{color:#9ca3af;font-size:.85rem;margin-bottom:14px;text-align:center}.target-phone-banner[_ngcontent-%COMP%]{background:#4f67f626;border:1px solid rgba(79,103,246,.3);padding:10px 14px;border-radius:10px;color:#93c5fd;font-size:.85rem;display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.change-phone-link[_ngcontent-%COMP%]{color:#fff;text-decoration:underline;cursor:pointer;font-weight:700;font-size:.8rem}.input-label[_ngcontent-%COMP%]{color:#d1d5db;font-size:.78rem;font-weight:700;margin-bottom:4px;text-transform:uppercase;letter-spacing:.5px}.letter-spacing-lg[_ngcontent-%COMP%]{letter-spacing:4px}.text-center[_ngcontent-%COMP%]{text-align:center}.font-bold[_ngcontent-%COMP%]{font-weight:800}.select-wrapper[_ngcontent-%COMP%]{position:relative;width:100%}.country-select[_ngcontent-%COMP%]{width:100%;background:#1c2230;border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:14px 16px;color:#fff;font-size:1rem;font-weight:600;appearance:none;-webkit-appearance:none;outline:none;cursor:pointer}.country-select[_ngcontent-%COMP%]:focus{border-color:#4f67f6}.select-arrow[_ngcontent-%COMP%]{position:absolute;right:16px;top:50%;transform:translateY(-50%);color:#9ca3af;font-size:.7rem;pointer-events:none}.phone-input-row[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center}.country-code-box[_ngcontent-%COMP%]{background:#1c2230;border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:14px 18px;color:#fff;font-size:1.1rem;font-weight:800;white-space:nowrap;display:flex;align-items:center;justify-content:center}.phone-input[_ngcontent-%COMP%], .standard-input[_ngcontent-%COMP%], .password-input[_ngcontent-%COMP%]{flex:1;width:100%;background:#1c2230;border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:14px 16px;color:#fff;font-size:.95rem;outline:none;box-sizing:border-box;transition:border-color .2s ease,box-shadow .2s ease}.phone-input[_ngcontent-%COMP%]::placeholder, .standard-input[_ngcontent-%COMP%]::placeholder, .password-input[_ngcontent-%COMP%]::placeholder{color:#5a6578}.phone-input[_ngcontent-%COMP%]:focus, .standard-input[_ngcontent-%COMP%]:focus, .password-input[_ngcontent-%COMP%]:focus{border-color:#4f67f6;box-shadow:0 0 0 3px #4f67f640}.field-hint[_ngcontent-%COMP%]{color:#5a6578;font-size:.75rem;margin-top:6px}.password-input-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;width:100%}.password-toggle-btn[_ngcontent-%COMP%]{position:absolute;right:14px;background:transparent;border:none;color:#8e9bae;font-weight:700;font-size:.8rem;cursor:pointer;letter-spacing:.5px}.password-toggle-btn[_ngcontent-%COMP%]:hover{color:#fff}.auth-submit-btn[_ngcontent-%COMP%]{width:100%;position:relative;isolation:isolate;overflow:hidden;display:flex;align-items:center;justify-content:space-between;gap:16px;background:linear-gradient(120deg,#4f67f6,#7656f6 48%,#a855f7);color:#fff;font-weight:900;font-size:.96rem;padding:15px 18px;border:1px solid rgba(196,181,253,.72);border-radius:14px;cursor:pointer;letter-spacing:.85px;margin-top:14px;box-shadow:0 10px 24px #4f67f657,inset 0 1px #ffffff40;transition:transform .2s ease,box-shadow .2s ease,filter .2s ease}.auth-submit-btn[_ngcontent-%COMP%]:before{content:"";position:absolute;z-index:-1;inset:0;background:linear-gradient(110deg,transparent 20%,rgba(255,255,255,.2) 47%,transparent 74%);transform:translate(-120%);transition:transform .55s ease}.auth-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-2px);box-shadow:0 14px 30px #6c54f675,inset 0 1px #ffffff4d}.auth-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled):before{transform:translate(120%)}.auth-submit-btn.register-mode[_ngcontent-%COMP%]{background:linear-gradient(120deg,#0e8f75,#16ad6e,#35c768);border-color:#86efacb8;box-shadow:0 10px 24px #16ad6e4d,inset 0 1px #ffffff40}.auth-submit-arrow[_ngcontent-%COMP%]{width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;border-radius:50%;background:#ffffff2e;font-size:1.22rem;line-height:1;transition:transform .2s ease,background .2s ease}.auth-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled)   .auth-submit-arrow[_ngcontent-%COMP%]{transform:translate(3px);background:#ffffff47}.auth-submit-btn[_ngcontent-%COMP%]:focus-visible, .auth-switch-btn[_ngcontent-%COMP%]:focus-visible{outline:3px solid rgba(147,197,253,.88);outline-offset:3px}.auth-submit-btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.submit-blue-btn[_ngcontent-%COMP%]{width:100%;background:#4f67f6;color:#fff;font-weight:800;font-size:1.05rem;padding:15px;border:none;border-radius:12px;cursor:pointer;letter-spacing:1px;margin-top:14px;box-shadow:0 6px 20px #4f67f666;transition:background .2s ease,transform .1s ease}.submit-blue-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:#3b54e6;transform:translateY(-1px)}.submit-blue-btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.auth-links-footer[_ngcontent-%COMP%]{margin-top:20px;text-align:center;display:flex;flex-direction:column;gap:10px}.link-row[_ngcontent-%COMP%]{color:#fff;font-size:.92rem}.auth-switch-btn[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;color:#cbd5e1;background:#94a3b814;border:1px solid rgba(148,163,184,.22);border-radius:12px;font:inherit;text-align:left;cursor:pointer;transition:background .2s ease,border-color .2s ease,transform .2s ease}.auth-switch-btn[_ngcontent-%COMP%]:hover{background:#4f67f629;border-color:#818cf894;transform:translateY(-1px)}.auth-switch-action[_ngcontent-%COMP%]{color:#c4b5fd;font-weight:800;white-space:nowrap}.auth-switch-btn[_ngcontent-%COMP%]:hover   .auth-switch-action[_ngcontent-%COMP%]{color:#fff}.margin-top-xs[_ngcontent-%COMP%]{margin-top:4px}.underlined-link[_ngcontent-%COMP%]{color:#fff;text-decoration:underline;cursor:pointer;font-weight:700;transition:color .2s ease}.underlined-link[_ngcontent-%COMP%]:hover{color:#4f67f6}']
    })
}
;
export {Y as AuthLandingComponent};
