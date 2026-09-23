var ef = Object.defineProperty
  , yv = Object.defineProperties;
var vv = Object.getOwnPropertyDescriptors;
var Jd = Object.getOwnPropertySymbols;
var Dv = Object.prototype.hasOwnProperty
  , Ev = Object.prototype.propertyIsEnumerable;
var Xd = (e, t, n) => t in e ? ef(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , y = (e, t) => {
    for (var n in t ||= {})
        Dv.call(t, n) && Xd(e, n, t[n]);
    if (Jd)
        for (var n of Jd(t))
            Ev.call(t, n) && Xd(e, n, t[n]);
    return e
}
  , x = (e, t) => yv(e, vv(t));
var Q_ = (e, t) => {
    for (var n in t)
        ef(e, n, {
            get: t[n],
            enumerable: !0
        })
}
;
function M(e) {
    return typeof e == "function"
}
function jt(e) {
    let n = e(r => {
        Error.call(r),
        r.stack = new Error().stack
    }
    );
    return n.prototype = Object.create(Error.prototype),
    n.prototype.constructor = n,
    n
}
var ui = jt(e => function(n) {
    e(this),
    this.message = n ? `${n.length} errors occurred during unsubscription:
${n.map( (r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}` : "",
    this.name = "UnsubscriptionError",
    this.errors = n
}
);
function an(e, t) {
    if (e) {
        let n = e.indexOf(t);
        0 <= n && e.splice(n, 1)
    }
}
var ee = class e {
    constructor(t) {
        this.initialTeardown = t,
        this.closed = !1,
        this._parentage = null,
        this._finalizers = null
    }
    unsubscribe() {
        let t;
        if (!this.closed) {
            this.closed = !0;
            let {_parentage: n} = this;
            if (n)
                if (this._parentage = null,
                Array.isArray(n))
                    for (let i of n)
                        i.remove(this);
                else
                    n.remove(this);
            let {initialTeardown: r} = this;
            if (M(r))
                try {
                    r()
                } catch (i) {
                    t = i instanceof ui ? i.errors : [i]
                }
            let {_finalizers: o} = this;
            if (o) {
                this._finalizers = null;
                for (let i of o)
                    try {
                        tf(i)
                    } catch (s) {
                        t = t ?? [],
                        s instanceof ui ? t = [...t, ...s.errors] : t.push(s)
                    }
            }
            if (t)
                throw new ui(t)
        }
    }
    add(t) {
        var n;
        if (t && t !== this)
            if (this.closed)
                tf(t);
            else {
                if (t instanceof e) {
                    if (t.closed || t._hasParent(this))
                        return;
                    t._addParent(this)
                }
                (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t)
            }
    }
    _hasParent(t) {
        let {_parentage: n} = this;
        return n === t || Array.isArray(n) && n.includes(t)
    }
    _addParent(t) {
        let {_parentage: n} = this;
        this._parentage = Array.isArray(n) ? (n.push(t),
        n) : n ? [n, t] : t
    }
    _removeParent(t) {
        let {_parentage: n} = this;
        n === t ? this._parentage = null : Array.isArray(n) && an(n, t)
    }
    remove(t) {
        let {_finalizers: n} = this;
        n && an(n, t),
        t instanceof e && t._removeParent(this)
    }
}
;
ee.EMPTY = ( () => {
    let e = new ee;
    return e.closed = !0,
    e
}
)();
var tc = ee.EMPTY;
function li(e) {
    return e instanceof ee || e && "closed" in e && M(e.remove) && M(e.add) && M(e.unsubscribe)
}
function tf(e) {
    M(e) ? e() : e.unsubscribe()
}
var Ge = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
};
var $n = {
    setTimeout(e, t, ...n) {
        let {delegate: r} = $n;
        return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n)
    },
    clearTimeout(e) {
        let {delegate: t} = $n;
        return (t?.clearTimeout || clearTimeout)(e)
    },
    delegate: void 0
};
function di(e) {
    $n.setTimeout( () => {
        let {onUnhandledError: t} = Ge;
        if (t)
            t(e);
        else
            throw e
    }
    )
}
function jr() {}
var nf = nc("C", void 0, void 0);
function rf(e) {
    return nc("E", void 0, e)
}
function of(e) {
    return nc("N", e, void 0)
}
function nc(e, t, n) {
    return {
        kind: e,
        value: t,
        error: n
    }
}
var cn = null;
function zn(e) {
    if (Ge.useDeprecatedSynchronousErrorHandling) {
        let t = !cn;
        if (t && (cn = {
            errorThrown: !1,
            error: null
        }),
        e(),
        t) {
            let {errorThrown: n, error: r} = cn;
            if (cn = null,
            n)
                throw r
        }
    } else
        e()
}
function sf(e) {
    Ge.useDeprecatedSynchronousErrorHandling && cn && (cn.errorThrown = !0,
    cn.error = e)
}
var un = class extends ee {
    constructor(t) {
        super(),
        this.isStopped = !1,
        t ? (this.destination = t,
        li(t) && t.add(this)) : this.destination = Cv
    }
    static create(t, n, r) {
        return new Gn(t,n,r)
    }
    next(t) {
        this.isStopped ? oc(of(t), this) : this._next(t)
    }
    error(t) {
        this.isStopped ? oc(rf(t), this) : (this.isStopped = !0,
        this._error(t))
    }
    complete() {
        this.isStopped ? oc(nf, this) : (this.isStopped = !0,
        this._complete())
    }
    unsubscribe() {
        this.closed || (this.isStopped = !0,
        super.unsubscribe(),
        this.destination = null)
    }
    _next(t) {
        this.destination.next(t)
    }
    _error(t) {
        try {
            this.destination.error(t)
        } finally {
            this.unsubscribe()
        }
    }
    _complete() {
        try {
            this.destination.complete()
        } finally {
            this.unsubscribe()
        }
    }
}
  , wv = Function.prototype.bind;
function rc(e, t) {
    return wv.call(e, t)
}
var ic = class {
    constructor(t) {
        this.partialObserver = t
    }
    next(t) {
        let {partialObserver: n} = this;
        if (n.next)
            try {
                n.next(t)
            } catch (r) {
                fi(r)
            }
    }
    error(t) {
        let {partialObserver: n} = this;
        if (n.error)
            try {
                n.error(t)
            } catch (r) {
                fi(r)
            }
        else
            fi(t)
    }
    complete() {
        let {partialObserver: t} = this;
        if (t.complete)
            try {
                t.complete()
            } catch (n) {
                fi(n)
            }
    }
}
  , Gn = class extends un {
    constructor(t, n, r) {
        super();
        let o;
        if (M(t) || !t)
            o = {
                next: t ?? void 0,
                error: n ?? void 0,
                complete: r ?? void 0
            };
        else {
            let i;
            this && Ge.useDeprecatedNextContext ? (i = Object.create(t),
            i.unsubscribe = () => this.unsubscribe(),
            o = {
                next: t.next && rc(t.next, i),
                error: t.error && rc(t.error, i),
                complete: t.complete && rc(t.complete, i)
            }) : o = t
        }
        this.destination = new ic(o)
    }
}
;
function fi(e) {
    Ge.useDeprecatedSynchronousErrorHandling ? sf(e) : di(e)
}
function Iv(e) {
    throw e
}
function oc(e, t) {
    let {onStoppedNotification: n} = Ge;
    n && $n.setTimeout( () => n(e, t))
}
var Cv = {
    closed: !0,
    next: jr,
    error: Iv,
    complete: jr
};
var Wn = typeof Symbol == "function" && Symbol.observable || "@@observable";
function We(e) {
    return e
}
function sc(...e) {
    return ac(e)
}
function ac(e) {
    return e.length === 0 ? We : e.length === 1 ? e[0] : function(n) {
        return e.reduce( (r, o) => o(r), n)
    }
}
var O = ( () => {
    class e {
        constructor(n) {
            n && (this._subscribe = n)
        }
        lift(n) {
            let r = new e;
            return r.source = this,
            r.operator = n,
            r
        }
        subscribe(n, r, o) {
            let i = Tv(n) ? n : new Gn(n,r,o);
            return zn( () => {
                let {operator: s, source: a} = this;
                i.add(s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i))
            }
            ),
            i
        }
        _trySubscribe(n) {
            try {
                return this._subscribe(n)
            } catch (r) {
                n.error(r)
            }
        }
        forEach(n, r) {
            return r = af(r),
            new r( (o, i) => {
                let s = new Gn({
                    next: a => {
                        try {
                            n(a)
                        } catch (c) {
                            i(c),
                            s.unsubscribe()
                        }
                    }
                    ,
                    error: i,
                    complete: o
                });
                this.subscribe(s)
            }
            )
        }
        _subscribe(n) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)
        }
        [Wn]() {
            return this
        }
        pipe(...n) {
            return ac(n)(this)
        }
        toPromise(n) {
            return n = af(n),
            new n( (r, o) => {
                let i;
                this.subscribe(s => i = s, s => o(s), () => r(i))
            }
            )
        }
    }
    return e.create = t => new e(t),
    e
}
)();
function af(e) {
    var t;
    return (t = e ?? Ge.Promise) !== null && t !== void 0 ? t : Promise
}
function bv(e) {
    return e && M(e.next) && M(e.error) && M(e.complete)
}
function Tv(e) {
    return e && e instanceof un || bv(e) && li(e)
}
function Sv(e) {
    return M(e?.lift)
}
function F(e) {
    return t => {
        if (Sv(t))
            return t.lift(function(n) {
                try {
                    return e(n, this)
                } catch (r) {
                    this.error(r)
                }
            });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}
function L(e, t, n, r, o) {
    return new cc(e,t,n,r,o)
}
var cc = class extends un {
    constructor(t, n, r, o, i, s) {
        super(t),
        this.onFinalize = i,
        this.shouldUnsubscribe = s,
        this._next = n ? function(a) {
            try {
                n(a)
            } catch (c) {
                t.error(c)
            }
        }
        : super._next,
        this._error = o ? function(a) {
            try {
                o(a)
            } catch (c) {
                t.error(c)
            } finally {
                this.unsubscribe()
            }
        }
        : super._error,
        this._complete = r ? function() {
            try {
                r()
            } catch (a) {
                t.error(a)
            } finally {
                this.unsubscribe()
            }
        }
        : super._complete
    }
    unsubscribe() {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            let {closed: n} = this;
            super.unsubscribe(),
            !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
        }
    }
}
;
var cf = jt(e => function() {
    e(this),
    this.name = "ObjectUnsubscribedError",
    this.message = "object unsubscribed"
}
);
var ae = ( () => {
    class e extends O {
        constructor() {
            super(),
            this.closed = !1,
            this.currentObservers = null,
            this.observers = [],
            this.isStopped = !1,
            this.hasError = !1,
            this.thrownError = null
        }
        lift(n) {
            let r = new hi(this,this);
            return r.operator = n,
            r
        }
        _throwIfClosed() {
            if (this.closed)
                throw new cf
        }
        next(n) {
            zn( () => {
                if (this._throwIfClosed(),
                !this.isStopped) {
                    this.currentObservers || (this.currentObservers = Array.from(this.observers));
                    for (let r of this.currentObservers)
                        r.next(n)
                }
            }
            )
        }
        error(n) {
            zn( () => {
                if (this._throwIfClosed(),
                !this.isStopped) {
                    this.hasError = this.isStopped = !0,
                    this.thrownError = n;
                    let {observers: r} = this;
                    for (; r.length; )
                        r.shift().error(n)
                }
            }
            )
        }
        complete() {
            zn( () => {
                if (this._throwIfClosed(),
                !this.isStopped) {
                    this.isStopped = !0;
                    let {observers: n} = this;
                    for (; n.length; )
                        n.shift().complete()
                }
            }
            )
        }
        unsubscribe() {
            this.isStopped = this.closed = !0,
            this.observers = this.currentObservers = null
        }
        get observed() {
            var n;
            return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
        }
        _trySubscribe(n) {
            return this._throwIfClosed(),
            super._trySubscribe(n)
        }
        _subscribe(n) {
            return this._throwIfClosed(),
            this._checkFinalizedStatuses(n),
            this._innerSubscribe(n)
        }
        _innerSubscribe(n) {
            let {hasError: r, isStopped: o, observers: i} = this;
            return r || o ? tc : (this.currentObservers = null,
            i.push(n),
            new ee( () => {
                this.currentObservers = null,
                an(i, n)
            }
            ))
        }
        _checkFinalizedStatuses(n) {
            let {hasError: r, thrownError: o, isStopped: i} = this;
            r ? n.error(o) : i && n.complete()
        }
        asObservable() {
            let n = new O;
            return n.source = this,
            n
        }
    }
    return e.create = (t, n) => new hi(t,n),
    e
}
)()
  , hi = class extends ae {
    constructor(t, n) {
        super(),
        this.destination = t,
        this.source = n
    }
    next(t) {
        var n, r;
        (r = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || r === void 0 || r.call(n, t)
    }
    error(t) {
        var n, r;
        (r = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || r === void 0 || r.call(n, t)
    }
    complete() {
        var t, n;
        (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t)
    }
    _subscribe(t) {
        var n, r;
        return (r = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && r !== void 0 ? r : tc
    }
}
;
var Q = class extends ae {
    constructor(t) {
        super(),
        this._value = t
    }
    get value() {
        return this.getValue()
    }
    _subscribe(t) {
        let n = super._subscribe(t);
        return !n.closed && t.next(this._value),
        n
    }
    getValue() {
        let {hasError: t, thrownError: n, _value: r} = this;
        if (t)
            throw n;
        return this._throwIfClosed(),
        r
    }
    next(t) {
        super.next(this._value = t)
    }
}
;
var uc = {
    now() {
        return (uc.delegate || Date).now()
    },
    delegate: void 0
};
var pi = class extends ee {
    constructor(t, n) {
        super()
    }
    schedule(t, n=0) {
        return this
    }
}
;
var Ur = {
    setInterval(e, t, ...n) {
        let {delegate: r} = Ur;
        return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n)
    },
    clearInterval(e) {
        let {delegate: t} = Ur;
        return (t?.clearInterval || clearInterval)(e)
    },
    delegate: void 0
};
var gi = class extends pi {
    constructor(t, n) {
        super(t, n),
        this.scheduler = t,
        this.work = n,
        this.pending = !1
    }
    schedule(t, n=0) {
        var r;
        if (this.closed)
            return this;
        this.state = t;
        let o = this.id
          , i = this.scheduler;
        return o != null && (this.id = this.recycleAsyncId(i, o, n)),
        this.pending = !0,
        this.delay = n,
        this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(i, this.id, n),
        this
    }
    requestAsyncId(t, n, r=0) {
        return Ur.setInterval(t.flush.bind(t, this), r)
    }
    recycleAsyncId(t, n, r=0) {
        if (r != null && this.delay === r && this.pending === !1)
            return n;
        n != null && Ur.clearInterval(n)
    }
    execute(t, n) {
        if (this.closed)
            return new Error("executing a cancelled action");
        this.pending = !1;
        let r = this._execute(t, n);
        if (r)
            return r;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
    }
    _execute(t, n) {
        let r = !1, o;
        try {
            this.work(t)
        } catch (i) {
            r = !0,
            o = i || new Error("Scheduled action threw falsy error")
        }
        if (r)
            return this.unsubscribe(),
            o
    }
    unsubscribe() {
        if (!this.closed) {
            let {id: t, scheduler: n} = this
              , {actions: r} = n;
            this.work = this.state = this.scheduler = null,
            this.pending = !1,
            an(r, this),
            t != null && (this.id = this.recycleAsyncId(n, t, null)),
            this.delay = null,
            super.unsubscribe()
        }
    }
}
;
var qn = class e {
    constructor(t, n=e.now) {
        this.schedulerActionCtor = t,
        this.now = n
    }
    schedule(t, n=0, r) {
        return new this.schedulerActionCtor(this,t).schedule(r, n)
    }
}
;
qn.now = uc.now;
var mi = class extends qn {
    constructor(t, n=qn.now) {
        super(t, n),
        this.actions = [],
        this._active = !1
    }
    flush(t) {
        let {actions: n} = this;
        if (this._active) {
            n.push(t);
            return
        }
        let r;
        this._active = !0;
        do
            if (r = t.execute(t.state, t.delay))
                break;
        while (t = n.shift());
        if (this._active = !1,
        r) {
            for (; t = n.shift(); )
                t.unsubscribe();
            throw r
        }
    }
}
;
var uf = new mi(gi);
var ce = new O(e => e.complete());
function lf(e) {
    return e && M(e.schedule)
}
function df(e) {
    return e[e.length - 1]
}
function yi(e) {
    return M(df(e)) ? e.pop() : void 0
}
function Ut(e) {
    return lf(df(e)) ? e.pop() : void 0
}
function hf(e, t, n, r) {
    function o(i) {
        return i instanceof n ? i : new n(function(s) {
            s(i)
        }
        )
    }
    return new (n || (n = Promise))(function(i, s) {
        function a(l) {
            try {
                u(r.next(l))
            } catch (d) {
                s(d)
            }
        }
        function c(l) {
            try {
                u(r.throw(l))
            } catch (d) {
                s(d)
            }
        }
        function u(l) {
            l.done ? i(l.value) : o(l.value).then(a, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
}
function ff(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , n = t && e[t]
      , r = 0;
    if (n)
        return n.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function() {
                return e && r >= e.length && (e = void 0),
                {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function ln(e) {
    return this instanceof ln ? (this.v = e,
    this) : new ln(e)
}
function pf(e, t, n) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []), o, i = [];
    return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype),
    a("next"),
    a("throw"),
    a("return", s),
    o[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    o;
    function s(f) {
        return function(g) {
            return Promise.resolve(g).then(f, d)
        }
    }
    function a(f, g) {
        r[f] && (o[f] = function(N) {
            return new Promise(function(E, w) {
                i.push([f, N, E, w]) > 1 || c(f, N)
            }
            )
        }
        ,
        g && (o[f] = g(o[f])))
    }
    function c(f, g) {
        try {
            u(r[f](g))
        } catch (N) {
            h(i[0][3], N)
        }
    }
    function u(f) {
        f.value instanceof ln ? Promise.resolve(f.value.v).then(l, d) : h(i[0][2], f)
    }
    function l(f) {
        c("next", f)
    }
    function d(f) {
        c("throw", f)
    }
    function h(f, g) {
        f(g),
        i.shift(),
        i.length && c(i[0][0], i[0][1])
    }
}
function gf(e) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof ff == "function" ? ff(e) : e[Symbol.iterator](),
    n = {},
    r("next"),
    r("throw"),
    r("return"),
    n[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    n);
    function r(i) {
        n[i] = e[i] && function(s) {
            return new Promise(function(a, c) {
                s = e[i](s),
                o(a, c, s.done, s.value)
            }
            )
        }
    }
    function o(i, s, a, c) {
        Promise.resolve(c).then(function(u) {
            i({
                value: u,
                done: a
            })
        }, s)
    }
}
var vi = e => e && typeof e.length == "number" && typeof e != "function";
function Di(e) {
    return M(e?.then)
}
function Ei(e) {
    return M(e[Wn])
}
function wi(e) {
    return Symbol.asyncIterator && M(e?.[Symbol.asyncIterator])
}
function Ii(e) {
    return new TypeError(`You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
}
function _v() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var Ci = _v();
function bi(e) {
    return M(e?.[Ci])
}
function Ti(e) {
    return pf(this, arguments, function*() {
        let n = e.getReader();
        try {
            for (; ; ) {
                let {value: r, done: o} = yield ln(n.read());
                if (o)
                    return yield ln(void 0);
                yield yield ln(r)
            }
        } finally {
            n.releaseLock()
        }
    })
}
function Si(e) {
    return M(e?.getReader)
}
function W(e) {
    if (e instanceof O)
        return e;
    if (e != null) {
        if (Ei(e))
            return Mv(e);
        if (vi(e))
            return Nv(e);
        if (Di(e))
            return Rv(e);
        if (wi(e))
            return mf(e);
        if (bi(e))
            return Av(e);
        if (Si(e))
            return xv(e)
    }
    throw Ii(e)
}
function Mv(e) {
    return new O(t => {
        let n = e[Wn]();
        if (M(n.subscribe))
            return n.subscribe(t);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    }
    )
}
function Nv(e) {
    return new O(t => {
        for (let n = 0; n < e.length && !t.closed; n++)
            t.next(e[n]);
        t.complete()
    }
    )
}
function Rv(e) {
    return new O(t => {
        e.then(n => {
            t.closed || (t.next(n),
            t.complete())
        }
        , n => t.error(n)).then(null, di)
    }
    )
}
function Av(e) {
    return new O(t => {
        for (let n of e)
            if (t.next(n),
            t.closed)
                return;
        t.complete()
    }
    )
}
function mf(e) {
    return new O(t => {
        Ov(e, t).catch(n => t.error(n))
    }
    )
}
function xv(e) {
    return mf(Ti(e))
}
function Ov(e, t) {
    var n, r, o, i;
    return hf(this, void 0, void 0, function*() {
        try {
            for (n = gf(e); r = yield n.next(),
            !r.done; ) {
                let s = r.value;
                if (t.next(s),
                t.closed)
                    return
            }
        } catch (s) {
            o = {
                error: s
            }
        } finally {
            try {
                r && !r.done && (i = n.return) && (yield i.call(n))
            } finally {
                if (o)
                    throw o.error
            }
        }
        t.complete()
    })
}
function de(e, t, n, r=0, o=!1) {
    let i = t.schedule(function() {
        n(),
        o ? e.add(this.schedule(null, r)) : this.unsubscribe()
    }, r);
    if (e.add(i),
    !o)
        return i
}
function _i(e, t=0) {
    return F( (n, r) => {
        n.subscribe(L(r, o => de(r, e, () => r.next(o), t), () => de(r, e, () => r.complete(), t), o => de(r, e, () => r.error(o), t)))
    }
    )
}
function Mi(e, t=0) {
    return F( (n, r) => {
        r.add(e.schedule( () => n.subscribe(r), t))
    }
    )
}
function yf(e, t) {
    return W(e).pipe(Mi(t), _i(t))
}
function vf(e, t) {
    return W(e).pipe(Mi(t), _i(t))
}
function Df(e, t) {
    return new O(n => {
        let r = 0;
        return t.schedule(function() {
            r === e.length ? n.complete() : (n.next(e[r++]),
            n.closed || this.schedule())
        })
    }
    )
}
function Ef(e, t) {
    return new O(n => {
        let r;
        return de(n, t, () => {
            r = e[Ci](),
            de(n, t, () => {
                let o, i;
                try {
                    ({value: o, done: i} = r.next())
                } catch (s) {
                    n.error(s);
                    return
                }
                i ? n.complete() : n.next(o)
            }
            , 0, !0)
        }
        ),
        () => M(r?.return) && r.return()
    }
    )
}
function Ni(e, t) {
    if (!e)
        throw new Error("Iterable cannot be null");
    return new O(n => {
        de(n, t, () => {
            let r = e[Symbol.asyncIterator]();
            de(n, t, () => {
                r.next().then(o => {
                    o.done ? n.complete() : n.next(o.value)
                }
                )
            }
            , 0, !0)
        }
        )
    }
    )
}
function wf(e, t) {
    return Ni(Ti(e), t)
}
function If(e, t) {
    if (e != null) {
        if (Ei(e))
            return yf(e, t);
        if (vi(e))
            return Df(e, t);
        if (Di(e))
            return vf(e, t);
        if (wi(e))
            return Ni(e, t);
        if (bi(e))
            return Ef(e, t);
        if (Si(e))
            return wf(e, t)
    }
    throw Ii(e)
}
function K(e, t) {
    return t ? If(e, t) : W(e)
}
function T(...e) {
    let t = Ut(e);
    return K(e, t)
}
function fe(e, t) {
    let n = M(e) ? e : () => e
      , r = o => o.error(n());
    return new O(t ? o => t.schedule(r, 0, o) : r)
}
function Ri(e) {
    return !!e && (e instanceof O || M(e.lift) && M(e.subscribe))
}
var dn = jt(e => function() {
    e(this),
    this.name = "EmptyError",
    this.message = "no elements in sequence"
}
);
function Cf(e) {
    return e instanceof Date && !isNaN(e)
}
var kv = jt(e => function(n=null) {
    e(this),
    this.message = "Timeout has occurred",
    this.name = "TimeoutError",
    this.info = n
}
);
function Br(e, t) {
    let {first: n, each: r, with: o=Pv, scheduler: i=t ?? uf, meta: s=null} = Cf(e) ? {
        first: e
    } : typeof e == "number" ? {
        each: e
    } : e;
    if (n == null && r == null)
        throw new TypeError("No timeout provided.");
    return F( (a, c) => {
        let u, l, d = null, h = 0, f = g => {
            l = de(c, i, () => {
                try {
                    u.unsubscribe(),
                    W(o({
                        meta: s,
                        lastValue: d,
                        seen: h
                    })).subscribe(c)
                } catch (N) {
                    c.error(N)
                }
            }
            , g)
        }
        ;
        u = a.subscribe(L(c, g => {
            l?.unsubscribe(),
            h++,
            c.next(d = g),
            r > 0 && f(r)
        }
        , void 0, void 0, () => {
            l?.closed || l?.unsubscribe(),
            d = null
        }
        )),
        !h && f(n != null ? typeof n == "number" ? n : +n - i.now() : r)
    }
    )
}
function Pv(e) {
    throw new kv(e)
}
function k(e, t) {
    return F( (n, r) => {
        let o = 0;
        n.subscribe(L(r, i => {
            r.next(e.call(t, i, o++))
        }
        ))
    }
    )
}
var {isArray: Fv} = Array;
function Lv(e, t) {
    return Fv(t) ? e(...t) : e(t)
}
function Ai(e) {
    return k(t => Lv(e, t))
}
var {isArray: jv} = Array
  , {getPrototypeOf: Uv, prototype: Bv, keys: Vv} = Object;
function xi(e) {
    if (e.length === 1) {
        let t = e[0];
        if (jv(t))
            return {
                args: t,
                keys: null
            };
        if (Hv(t)) {
            let n = Vv(t);
            return {
                args: n.map(r => t[r]),
                keys: n
            }
        }
    }
    return {
        args: e,
        keys: null
    }
}
function Hv(e) {
    return e && typeof e == "object" && Uv(e) === Bv
}
function Oi(e, t) {
    return e.reduce( (n, r, o) => (n[r] = t[o],
    n), {})
}
function lc(...e) {
    let t = Ut(e)
      , n = yi(e)
      , {args: r, keys: o} = xi(e);
    if (r.length === 0)
        return K([], t);
    let i = new O($v(r, t, o ? s => Oi(o, s) : We));
    return n ? i.pipe(Ai(n)) : i
}
function $v(e, t, n=We) {
    return r => {
        bf(t, () => {
            let {length: o} = e
              , i = new Array(o)
              , s = o
              , a = o;
            for (let c = 0; c < o; c++)
                bf(t, () => {
                    let u = K(e[c], t)
                      , l = !1;
                    u.subscribe(L(r, d => {
                        i[c] = d,
                        l || (l = !0,
                        a--),
                        a || r.next(n(i.slice()))
                    }
                    , () => {
                        --s || r.complete()
                    }
                    ))
                }
                , r)
        }
        , r)
    }
}
function bf(e, t, n) {
    e ? de(n, e, t) : t()
}
function Tf(e, t, n, r, o, i, s, a) {
    let c = []
      , u = 0
      , l = 0
      , d = !1
      , h = () => {
        d && !c.length && !u && t.complete()
    }
      , f = N => u < r ? g(N) : c.push(N)
      , g = N => {
        i && t.next(N),
        u++;
        let E = !1;
        W(n(N, l++)).subscribe(L(t, w => {
            o?.(w),
            i ? f(w) : t.next(w)
        }
        , () => {
            E = !0
        }
        , void 0, () => {
            if (E)
                try {
                    for (u--; c.length && u < r; ) {
                        let w = c.shift();
                        s ? de(t, s, () => g(w)) : g(w)
                    }
                    h()
                } catch (w) {
                    t.error(w)
                }
        }
        ))
    }
    ;
    return e.subscribe(L(t, f, () => {
        d = !0,
        h()
    }
    )),
    () => {
        a?.()
    }
}
function De(e, t, n=1 / 0) {
    return M(t) ? De( (r, o) => k( (i, s) => t(r, i, o, s))(W(e(r, o))), n) : (typeof t == "number" && (n = t),
    F( (r, o) => Tf(r, o, e, n)))
}
function Sf(e=1 / 0) {
    return De(We, e)
}
function _f() {
    return Sf(1)
}
function Zn(...e) {
    return _f()(K(e, Ut(e)))
}
function Vr(e) {
    return new O(t => {
        W(e()).subscribe(t)
    }
    )
}
function zv(...e) {
    let t = yi(e)
      , {args: n, keys: r} = xi(e)
      , o = new O(i => {
        let {length: s} = n;
        if (!s) {
            i.complete();
            return
        }
        let a = new Array(s)
          , c = s
          , u = s;
        for (let l = 0; l < s; l++) {
            let d = !1;
            W(n[l]).subscribe(L(i, h => {
                d || (d = !0,
                u--),
                a[l] = h
            }
            , () => c--, void 0, () => {
                (!c || !d) && (u || i.next(r ? Oi(r, a) : a),
                i.complete())
            }
            ))
        }
    }
    );
    return t ? o.pipe(Ai(t)) : o
}
function qe(e, t) {
    return F( (n, r) => {
        let o = 0;
        n.subscribe(L(r, i => e.call(t, i, o++) && r.next(i)))
    }
    )
}
function J(e) {
    return F( (t, n) => {
        let r = null, o = !1, i;
        r = t.subscribe(L(n, void 0, void 0, s => {
            i = W(e(s, J(e)(t))),
            r ? (r.unsubscribe(),
            r = null,
            i.subscribe(n)) : o = !0
        }
        )),
        o && (r.unsubscribe(),
        r = null,
        i.subscribe(n))
    }
    )
}
function Yn(e, t) {
    return M(t) ? De(e, t, 1) : De(e, 1)
}
function Mf(e) {
    return F( (t, n) => {
        let r = !1;
        t.subscribe(L(n, o => {
            r = !0,
            n.next(o)
        }
        , () => {
            r || n.next(e),
            n.complete()
        }
        ))
    }
    )
}
function yt(e) {
    return e <= 0 ? () => ce : F( (t, n) => {
        let r = 0;
        t.subscribe(L(n, o => {
            ++r <= e && (n.next(o),
            e <= r && n.complete())
        }
        ))
    }
    )
}
function Nf(e=Gv) {
    return F( (t, n) => {
        let r = !1;
        t.subscribe(L(n, o => {
            r = !0,
            n.next(o)
        }
        , () => r ? n.complete() : n.error(e())))
    }
    )
}
function Gv() {
    return new dn
}
function Qn(e) {
    return F( (t, n) => {
        try {
            t.subscribe(n)
        } finally {
            n.add(e)
        }
    }
    )
}
function vt(e, t) {
    let n = arguments.length >= 2;
    return r => r.pipe(e ? qe( (o, i) => e(o, i, r)) : We, yt(1), n ? Mf(t) : Nf( () => new dn))
}
function ki(e) {
    return e <= 0 ? () => ce : F( (t, n) => {
        let r = [];
        t.subscribe(L(n, o => {
            r.push(o),
            e < r.length && r.shift()
        }
        , () => {
            for (let o of r)
                n.next(o);
            n.complete()
        }
        , void 0, () => {
            r = null
        }
        ))
    }
    )
}
function dc(...e) {
    let t = Ut(e);
    return F( (n, r) => {
        (t ? Zn(e, n, t) : Zn(e, n)).subscribe(r)
    }
    )
}
function re(e, t) {
    return F( (n, r) => {
        let o = null
          , i = 0
          , s = !1
          , a = () => s && !o && r.complete();
        n.subscribe(L(r, c => {
            o?.unsubscribe();
            let u = 0
              , l = i++;
            W(e(c, l)).subscribe(o = L(r, d => r.next(t ? t(c, d, l, u++) : d), () => {
                o = null,
                a()
            }
            ))
        }
        , () => {
            s = !0,
            a()
        }
        ))
    }
    )
}
function Hr(e) {
    return F( (t, n) => {
        W(e).subscribe(L(n, () => n.complete(), jr)),
        !n.closed && t.subscribe(n)
    }
    )
}
function te(e, t, n) {
    let r = M(e) || t || n ? {
        next: e,
        error: t,
        complete: n
    } : e;
    return r ? F( (o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(L(i, c => {
            var u;
            (u = r.next) === null || u === void 0 || u.call(r, c),
            i.next(c)
        }
        , () => {
            var c;
            a = !1,
            (c = r.complete) === null || c === void 0 || c.call(r),
            i.complete()
        }
        , c => {
            var u;
            a = !1,
            (u = r.error) === null || u === void 0 || u.call(r, c),
            i.error(c)
        }
        , () => {
            var c, u;
            a && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)),
            (u = r.finalize) === null || u === void 0 || u.call(r)
        }
        ))
    }
    ) : We
}
var he = null
  , Pi = !1
  , fc = 1
  , Wv = null
  , pe = Symbol("SIGNAL");
function S(e) {
    let t = he;
    return he = e,
    t
}
function Ui() {
    return he
}
var fn = {
    version: 0,
    lastCleanEpoch: 0,
    dirty: !1,
    producers: void 0,
    producersTail: void 0,
    consumers: void 0,
    consumersTail: void 0,
    recomputing: !1,
    consumerAllowSignalWrites: !1,
    consumerIsAlwaysLive: !1,
    kind: "unknown",
    producerMustRecompute: () => !1,
    producerRecomputeValue: () => {}
    ,
    consumerMarkedDirty: () => {}
    ,
    consumerOnSignalRead: () => {}
};
function Kn(e) {
    if (Pi)
        throw new Error("");
    if (he === null)
        return;
    he.consumerOnSignalRead(e);
    let t = he.producersTail;
    if (t !== void 0 && t.producer === e)
        return;
    let n, r = he.recomputing;
    if (r && (n = t !== void 0 ? t.nextProducer : he.producers,
    n !== void 0 && n.producer === e)) {
        he.producersTail = n,
        n.lastReadVersion = e.version;
        return
    }
    let o = e.consumersTail;
    if (o !== void 0 && o.consumer === he && (!r || Zv(o, he)))
        return;
    let i = Xn(he)
      , s = {
        producer: e,
        consumer: he,
        nextProducer: n,
        prevConsumer: o,
        lastReadVersion: e.version,
        nextConsumer: void 0
    };
    he.producersTail = s,
    t !== void 0 ? t.nextProducer = s : he.producers = s,
    i && Of(e, s)
}
function Rf() {
    fc++
}
function Bi(e) {
    if (!(Xn(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === fc)) {
        if (!e.producerMustRecompute(e) && !zr(e)) {
            ji(e);
            return
        }
        e.producerRecomputeValue(e),
        ji(e)
    }
}
function hc(e) {
    if (e.consumers === void 0)
        return;
    let t = Pi;
    Pi = !0;
    try {
        for (let n = e.consumers; n !== void 0; n = n.nextConsumer) {
            let r = n.consumer;
            r.dirty || qv(r)
        }
    } finally {
        Pi = t
    }
}
function pc() {
    return he?.consumerAllowSignalWrites !== !1
}
function qv(e) {
    e.dirty = !0,
    hc(e),
    e.consumerMarkedDirty?.(e)
}
function ji(e) {
    e.dirty = !1,
    e.lastCleanEpoch = fc
}
function hn(e) {
    return e && Af(e),
    S(e)
}
function Af(e) {
    e.producersTail = void 0,
    e.recomputing = !0
}
function Jn(e, t) {
    S(t),
    e && xf(e)
}
function xf(e) {
    e.recomputing = !1;
    let t = e.producersTail
      , n = t !== void 0 ? t.nextProducer : e.producers;
    if (n !== void 0) {
        if (Xn(e))
            do
                n = gc(n);
            while (n !== void 0);
        t !== void 0 ? t.nextProducer = void 0 : e.producers = void 0
    }
}
function zr(e) {
    for (let t = e.producers; t !== void 0; t = t.nextProducer) {
        let n = t.producer
          , r = t.lastReadVersion;
        if (r !== n.version || (Bi(n),
        r !== n.version))
            return !0
    }
    return !1
}
function pn(e) {
    if (Xn(e)) {
        let t = e.producers;
        for (; t !== void 0; )
            t = gc(t)
    }
    e.producers = void 0,
    e.producersTail = void 0,
    e.consumers = void 0,
    e.consumersTail = void 0
}
function Of(e, t) {
    let n = e.consumersTail
      , r = Xn(e);
    if (n !== void 0 ? (t.nextConsumer = n.nextConsumer,
    n.nextConsumer = t) : (t.nextConsumer = void 0,
    e.consumers = t),
    t.prevConsumer = n,
    e.consumersTail = t,
    !r)
        for (let o = e.producers; o !== void 0; o = o.nextProducer)
            Of(o.producer, o)
}
function gc(e) {
    let t = e.producer
      , n = e.nextProducer
      , r = e.nextConsumer
      , o = e.prevConsumer;
    if (e.nextConsumer = void 0,
    e.prevConsumer = void 0,
    r !== void 0 ? r.prevConsumer = o : t.consumersTail = o,
    o !== void 0)
        o.nextConsumer = r;
    else if (t.consumers = r,
    !Xn(t)) {
        let i = t.producers;
        for (; i !== void 0; )
            i = gc(i)
    }
    return n
}
function Xn(e) {
    return e.consumerIsAlwaysLive || e.consumers !== void 0
}
function Vi(e) {
    Wv?.(e)
}
function Zv(e, t) {
    let n = t.producersTail;
    if (n !== void 0) {
        let r = t.producers;
        do {
            if (r === e)
                return !0;
            if (r === n)
                break;
            r = r.nextProducer
        } while (r !== void 0)
    }
    return !1
}
function Hi(e, t) {
    return Object.is(e, t)
}
function $i(e, t) {
    let n = Object.create(Yv);
    n.computation = e,
    t !== void 0 && (n.equal = t);
    let r = () => {
        if (Bi(n),
        Kn(n),
        n.value === $r)
            throw n.error;
        return n.value
    }
    ;
    return r[pe] = n,
    Vi(n),
    r
}
var Fi = Symbol("UNSET")
  , Li = Symbol("COMPUTING")
  , $r = Symbol("ERRORED")
  , Yv = x(y({}, fn), {
    value: Fi,
    dirty: !0,
    error: null,
    equal: Hi,
    kind: "computed",
    producerMustRecompute(e) {
        return e.value === Fi || e.value === Li
    },
    producerRecomputeValue(e) {
        if (e.value === Li)
            throw new Error("");
        let t = e.value;
        e.value = Li;
        let n = hn(e), r, o = !1;
        try {
            r = e.computation(),
            S(null),
            o = t !== Fi && t !== $r && r !== $r && e.equal(t, r)
        } catch (i) {
            r = $r,
            e.error = i
        } finally {
            Jn(e, n)
        }
        if (o) {
            e.value = t;
            return
        }
        e.value = r,
        e.version++
    }
});
function Qv() {
    throw new Error
}
var kf = Qv;
function Pf(e) {
    kf(e)
}
function mc(e) {
    kf = e
}
var Kv = null;
function yc(e, t) {
    let n = Object.create(zi);
    n.value = e,
    t !== void 0 && (n.equal = t);
    let r = () => Ff(n);
    return r[pe] = n,
    Vi(n),
    [r, s => er(n, s), s => vc(n, s)]
}
function Ff(e) {
    return Kn(e),
    e.value
}
function er(e, t) {
    pc() || Pf(e),
    e.equal(e.value, t) || (e.value = t,
    Jv(e))
}
function vc(e, t) {
    pc() || Pf(e),
    er(e, t(e.value))
}
var zi = x(y({}, fn), {
    equal: Hi,
    value: void 0,
    kind: "signal"
});
function Jv(e) {
    e.version++,
    Rf(),
    hc(e),
    Kv?.(e)
}
var Dc = x(y({}, fn), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !0,
    dirty: !0,
    kind: "effect"
});
function Ec(e) {
    if (e.dirty = !1,
    e.version > 0 && !zr(e))
        return;
    e.version++;
    let t = hn(e);
    try {
        e.cleanup(),
        e.fn()
    } finally {
        Jn(e, t)
    }
}
var wc;
function Gi() {
    return wc
}
function st(e) {
    let t = wc;
    return wc = e,
    t
}
var Lf = Symbol("NotFound");
function tr(e) {
    return e === Lf || e?.name === "\u0275NotFound"
}
function jf(e) {
    let t = S(null);
    try {
        return e()
    } finally {
        S(t)
    }
}
var Ji = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss"
  , m = class extends Error {
    code;
    constructor(t, n) {
        super($t(t, n)),
        this.code = t
    }
}
;
function Xv(e) {
    return `NG0${Math.abs(e)}`
}
function $t(e, t) {
    return `${Xv(e)}${t ? ": " + t : ""}`
}
var Pe = globalThis;
function U(e) {
    for (let t in e)
        if (e[t] === U)
            return t;
    throw Error("")
}
function $f(e, t) {
    for (let n in t)
        t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
}
function Kr(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(Kr).join(", ")}]`;
    if (e == null)
        return "" + e;
    let t = e.overriddenName || e.name;
    if (t)
        return `${t}`;
    let n = e.toString();
    if (n == null)
        return "" + n;
    let r = n.indexOf(`
`);
    return r >= 0 ? n.slice(0, r) : n
}
function kc(e, t) {
    return e ? t ? `${e} ${t}` : e : t || ""
}
var eD = U({
    __forward_ref__: U
});
function Xi(e) {
    return e.__forward_ref__ = Xi,
    e
}
function ue(e) {
    return Pc(e) ? e() : e
}
function Pc(e) {
    return typeof e == "function" && e.hasOwnProperty(eD) && e.__forward_ref__ === Xi
}
function v(e) {
    return {
        token: e.token,
        providedIn: e.providedIn || null,
        factory: e.factory,
        value: void 0
    }
}
function Dn(e) {
    return {
        providers: e.providers || [],
        imports: e.imports || []
    }
}
function Jr(e) {
    return tD(e, es)
}
function Fc(e) {
    return Jr(e) !== null
}
function tD(e, t) {
    return e.hasOwnProperty(t) && e[t] || null
}
function nD(e) {
    let t = e?.[es] ?? null;
    return t || null
}
function Cc(e) {
    return e && e.hasOwnProperty(qi) ? e[qi] : null
}
var es = U({
    \u0275prov: U
})
  , qi = U({
    \u0275inj: U
})
  , D = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) {
        this._desc = t,
        this.\u0275prov = void 0,
        typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = v({
            token: this,
            providedIn: n.providedIn || "root",
            factory: n.factory
        }))
    }
    get multi() {
        return this
    }
    toString() {
        return `InjectionToken ${this._desc}`
    }
}
;
function Lc(e) {
    return e && !!e.\u0275providers
}
var Xr = U({
    \u0275cmp: U
})
  , eo = U({
    \u0275dir: U
})
  , jc = U({
    \u0275pipe: U
})
  , Uc = U({
    \u0275mod: U
})
  , Wr = U({
    \u0275fac: U
})
  , En = U({
    __NG_ELEMENT_ID__: U
})
  , Uf = U({
    __NG_ENV_ID__: U
});
function Bc(e) {
    return ts(e, "@NgModule"),
    e[Uc] || null
}
function zt(e) {
    return ts(e, "@Component"),
    e[Xr] || null
}
function Vc(e) {
    return ts(e, "@Directive"),
    e[eo] || null
}
function zf(e) {
    return ts(e, "@Pipe"),
    e[jc] || null
}
function ts(e, t) {
    if (e == null)
        throw new m(-919,!1)
}
function wn(e) {
    return typeof e == "string" ? e : e == null ? "" : String(e)
}
var Gf = U({
    ngErrorCode: U
})
  , rD = U({
    ngErrorMessage: U
})
  , oD = U({
    ngTokenPath: U
});
function Hc(e, t) {
    return Wf("", -200, t)
}
function ns(e, t) {
    throw new m(-201,!1)
}
function Wf(e, t, n) {
    let r = new m(t,e);
    return r[Gf] = t,
    r[rD] = e,
    n && (r[oD] = n),
    r
}
function iD(e) {
    return e[Gf]
}
var bc;
function qf() {
    return bc
}
function Ee(e) {
    let t = bc;
    return bc = e,
    t
}
function $c(e, t, n) {
    let r = Jr(e);
    if (r && r.providedIn == "root")
        return r.value === void 0 ? r.value = r.factory() : r.value;
    if (n & 8)
        return null;
    if (t !== void 0)
        return t;
    ns(e, "")
}
var sD = {}
  , gn = sD
  , aD = "__NG_DI_FLAG__"
  , Tc = class {
    injector;
    constructor(t) {
        this.injector = t
    }
    retrieve(t, n) {
        let r = mn(n) || 0;
        try {
            return this.injector.get(t, r & 8 ? null : gn, r)
        } catch (o) {
            if (tr(o))
                return o;
            throw o
        }
    }
}
;
function cD(e, t=0) {
    let n = Gi();
    if (n === void 0)
        throw new m(-203,!1);
    if (n === null)
        return $c(e, void 0, t);
    {
        let r = uD(t)
          , o = n.retrieve(e, r);
        if (tr(o)) {
            if (r.optional)
                return null;
            throw o
        }
        return o
    }
}
function I(e, t=0) {
    return (qf() || cD)(ue(e), t)
}
function p(e, t) {
    return I(e, mn(t))
}
function mn(e) {
    return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4)
}
function uD(e) {
    return {
        optional: !!(e & 8),
        host: !!(e & 1),
        self: !!(e & 2),
        skipSelf: !!(e & 4)
    }
}
function Sc(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = ue(e[n]);
        if (Array.isArray(r)) {
            if (r.length === 0)
                throw new m(900,!1);
            let o, i = 0;
            for (let s = 0; s < r.length; s++) {
                let a = r[s]
                  , c = lD(a);
                typeof c == "number" ? c === -1 ? o = a.token : i |= c : o = a
            }
            t.push(I(o, i))
        } else
            t.push(I(r))
    }
    return t
}
function lD(e) {
    return e[aD]
}
function Bt(e, t) {
    let n = e.hasOwnProperty(Wr);
    return n ? e[Wr] : null
}
function Zf(e, t, n) {
    if (e.length !== t.length)
        return !1;
    for (let r = 0; r < e.length; r++) {
        let o = e[r]
          , i = t[r];
        if (n && (o = n(o),
        i = n(i)),
        i !== o)
            return !1
    }
    return !0
}
function Yf(e) {
    return e.flat(Number.POSITIVE_INFINITY)
}
function rs(e, t) {
    e.forEach(n => Array.isArray(n) ? rs(n, t) : t(n))
}
function zc(e, t, n) {
    t >= e.length ? e.push(n) : e.splice(t, 0, n)
}
function to(e, t) {
    return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
}
function Qf(e, t, n, r) {
    let o = e.length;
    if (o == t)
        e.push(n, r);
    else if (o === 1)
        e.push(r, e[0]),
        e[0] = n;
    else {
        for (o--,
        e.push(e[o - 1], e[o]); o > t; ) {
            let i = o - 2;
            e[o] = e[i],
            o--
        }
        e[t] = n,
        e[t + 1] = r
    }
}
function Kf(e, t, n) {
    let r = rr(e, t);
    return r >= 0 ? e[r | 1] = n : (r = ~r,
    Qf(e, r, t, n)),
    r
}
function os(e, t) {
    let n = rr(e, t);
    if (n >= 0)
        return e[n | 1]
}
function rr(e, t) {
    return dD(e, t, 1)
}
function dD(e, t, n) {
    let r = 0
      , o = e.length >> n;
    for (; o !== r; ) {
        let i = r + (o - r >> 1)
          , s = e[i << n];
        if (t === s)
            return i << n;
        s > t ? o = i : r = i + 1
    }
    return ~(o << n)
}
var Gt = {}
  , Re = []
  , Wt = new D("")
  , Gc = new D("",-1)
  , Wc = new D("")
  , qr = class {
    get(t, n=gn) {
        if (n === gn) {
            let o = Wf("", -201);
            throw o.name = "\u0275NotFound",
            o
        }
        return n
    }
}
;
function wt(e) {
    return {
        \u0275providers: e
    }
}
function Jf(e) {
    return wt([{
        provide: Wt,
        multi: !0,
        useValue: e
    }])
}
function Xf(...e) {
    return {
        \u0275providers: qc(!0, e),
        \u0275fromNgModule: !0
    }
}
function qc(e, ...t) {
    let n = [], r = new Set, o, i = s => {
        n.push(s)
    }
    ;
    return rs(t, s => {
        let a = s;
        Zi(a, i, [], r) && (o ||= [],
        o.push(a))
    }
    ),
    o !== void 0 && eh(o, i),
    n
}
function eh(e, t) {
    for (let n = 0; n < e.length; n++) {
        let {ngModule: r, providers: o} = e[n];
        Zc(o, i => {
            t(i, r)
        }
        )
    }
}
function Zi(e, t, n, r) {
    if (e = ue(e),
    !e)
        return !1;
    let o = null
      , i = Cc(e)
      , s = !i && zt(e);
    if (!i && !s) {
        let c = e.ngModule;
        if (i = Cc(c),
        i)
            o = c;
        else
            return !1
    } else {
        if (s && !s.standalone)
            return !1;
        o = e
    }
    let a = r.has(o);
    if (s) {
        if (a)
            return !1;
        if (r.add(o),
        s.dependencies) {
            let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
            for (let u of c)
                Zi(u, t, n, r)
        }
    } else if (i) {
        if (i.imports != null && !a) {
            r.add(o);
            let u;
            rs(i.imports, l => {
                Zi(l, t, n, r) && (u ||= [],
                u.push(l))
            }
            ),
            u !== void 0 && eh(u, t)
        }
        if (!a) {
            let u = Bt(o) || ( () => new o);
            t({
                provide: o,
                useFactory: u,
                deps: Re
            }, o),
            t({
                provide: Wc,
                useValue: o,
                multi: !0
            }, o),
            t({
                provide: Wt,
                useValue: () => I(o),
                multi: !0
            }, o)
        }
        let c = i.providers;
        if (c != null && !a) {
            let u = e;
            Zc(c, l => {
                t(l, u)
            }
            )
        }
    } else
        return !1;
    return o !== e && e.providers !== void 0
}
function Zc(e, t) {
    for (let n of e)
        Lc(n) && (n = n.\u0275providers),
        Array.isArray(n) ? Zc(n, t) : t(n)
}
var fD = U({
    provide: String,
    useValue: U
});
function th(e) {
    return e !== null && typeof e == "object" && fD in e
}
function hD(e) {
    return !!(e && e.useExisting)
}
function pD(e) {
    return !!(e && e.useFactory)
}
function yn(e) {
    return typeof e == "function"
}
function nh(e) {
    return !!e.useClass
}
var no = new D(""), Wi = {}, Bf = {}, Ic;
function ro() {
    return Ic === void 0 && (Ic = new qr),
    Ic
}
var q = class {
}
  , vn = class extends q {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() {
        return this._destroyed
    }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, r, o) {
        super(),
        this.parent = n,
        this.source = r,
        this.scopes = o,
        Mc(t, s => this.processProvider(s)),
        this.records.set(Gc, nr(void 0, this)),
        o.has("environment") && this.records.set(q, nr(void 0, this));
        let i = this.records.get(no);
        i != null && typeof i.value == "string" && this.scopes.add(i.value),
        this.injectorDefTypes = new Set(this.get(Wc, Re, {
            self: !0
        }))
    }
    retrieve(t, n) {
        let r = mn(n) || 0;
        try {
            return this.get(t, gn, r)
        } catch (o) {
            if (tr(o))
                return o;
            throw o
        }
    }
    destroy() {
        Gr(this),
        this._destroyed = !0;
        let t = S(null);
        try {
            for (let r of this._ngOnDestroyHooks)
                r.ngOnDestroy();
            let n = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (let r of n)
                r()
        } finally {
            this.records.clear(),
            this._ngOnDestroyHooks.clear(),
            this.injectorDefTypes.clear(),
            S(t)
        }
    }
    onDestroy(t) {
        return Gr(this),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
    }
    runInContext(t) {
        Gr(this);
        let n = st(this), r = Ee(void 0), o;
        try {
            return t()
        } finally {
            st(n),
            Ee(r)
        }
    }
    get(t, n=gn, r) {
        if (Gr(this),
        t.hasOwnProperty(Uf))
            return t[Uf](this);
        let o = mn(r), i, s = st(this), a = Ee(void 0);
        try {
            if (!(o & 4)) {
                let u = this.records.get(t);
                if (u === void 0) {
                    let l = DD(t) && Jr(t);
                    l && this.injectableDefInScope(l) ? u = nr(_c(t), Wi) : u = null,
                    this.records.set(t, u)
                }
                if (u != null)
                    return this.hydrate(t, u, o)
            }
            let c = o & 2 ? ro() : this.parent;
            return n = o & 8 && n === gn ? null : n,
            c.get(t, n)
        } catch (c) {
            let u = iD(c);
            throw u === -200 || u === -201 ? new m(u,null) : c
        } finally {
            Ee(a),
            st(s)
        }
    }
    resolveInjectorInitializers() {
        let t = S(null), n = st(this), r = Ee(void 0), o;
        try {
            let i = this.get(Wt, Re, {
                self: !0
            });
            for (let s of i)
                s()
        } finally {
            st(n),
            Ee(r),
            S(t)
        }
    }
    toString() {
        return "R3Injector[...]"
    }
    processProvider(t) {
        t = ue(t);
        let n = yn(t) ? t : ue(t && t.provide)
          , r = mD(t);
        if (!yn(t) && t.multi === !0) {
            let o = this.records.get(n);
            o || (o = nr(void 0, Wi, !0),
            o.factory = () => Sc(o.multi),
            this.records.set(n, o)),
            n = t,
            o.multi.push(t)
        }
        this.records.set(n, r)
    }
    hydrate(t, n, r) {
        let o = S(null);
        try {
            if (n.value === Bf)
                throw Hc("");
            return n.value === Wi && (n.value = Bf,
            n.value = n.factory(void 0, r)),
            typeof n.value == "object" && n.value && vD(n.value) && this._ngOnDestroyHooks.add(n.value),
            n.value
        } finally {
            S(o)
        }
    }
    injectableDefInScope(t) {
        if (!t.providedIn)
            return !1;
        let n = ue(t.providedIn);
        return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n)
    }
    removeOnDestroy(t) {
        let n = this._onDestroyHooks.indexOf(t);
        n !== -1 && this._onDestroyHooks.splice(n, 1)
    }
}
;
function _c(e) {
    let t = Jr(e)
      , n = t !== null ? t.factory : Bt(e);
    if (n !== null)
        return n;
    if (e instanceof D)
        throw new m(-204,!1);
    if (e instanceof Function)
        return gD(e);
    throw new m(-204,!1)
}
function gD(e) {
    if (e.length > 0)
        throw new m(-204,!1);
    let n = nD(e);
    return n !== null ? () => n.factory(e) : () => new e
}
function mD(e) {
    if (th(e))
        return nr(void 0, e.useValue);
    {
        let t = Yc(e);
        return nr(t, Wi)
    }
}
function Yc(e, t, n) {
    let r;
    if (yn(e)) {
        let o = ue(e);
        return Bt(o) || _c(o)
    } else if (th(e))
        r = () => ue(e.useValue);
    else if (pD(e))
        r = () => e.useFactory(...Sc(e.deps || []));
    else if (hD(e))
        r = (o, i) => I(ue(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
    else {
        let o = ue(e && (e.useClass || e.provide));
        if (yD(e))
            r = () => new o(...Sc(e.deps));
        else
            return Bt(o) || _c(o)
    }
    return r
}
function Gr(e) {
    if (e.destroyed)
        throw new m(-205,!1)
}
function nr(e, t, n=!1) {
    return {
        factory: e,
        value: t,
        multi: n ? [] : void 0
    }
}
function yD(e) {
    return !!e.deps
}
function vD(e) {
    return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
}
function DD(e) {
    return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"
}
function Mc(e, t) {
    for (let n of e)
        Array.isArray(n) ? Mc(n, t) : n && Lc(n) ? Mc(n.\u0275providers, t) : t(n)
}
function ie(e, t) {
    let n;
    e instanceof vn ? (Gr(e),
    n = e) : n = new Tc(e);
    let r, o = st(n), i = Ee(void 0);
    try {
        return t()
    } finally {
        st(o),
        Ee(i)
    }
}
function rh() {
    return qf() !== void 0 || Gi() != null
}
var Ze = 0
  , C = 1
  , b = 2
  , oe = 3
  , Fe = 4
  , Le = 5
  , oo = 6
  , or = 7
  , ge = 8
  , qt = 9
  , Ye = 10
  , z = 11
  , ir = 12
  , Qc = 13
  , In = 14
  , je = 15
  , Zt = 16
  , Cn = 17
  , ct = 18
  , Yt = 19
  , Kc = 20
  , Dt = 21
  , is = 22
  , Vt = 23
  , Ae = 24
  , bn = 25
  , sr = 26
  , ne = 27
  , oh = 1;
var Qt = 7
  , io = 8
  , Tn = 9
  , Ce = 10;
function It(e) {
    return Array.isArray(e) && typeof e[oh] == "object"
}
function Qe(e) {
    return Array.isArray(e) && e[oh] === !0
}
function Jc(e) {
    return (e.flags & 4) !== 0
}
function Ct(e) {
    return e.componentOffset > -1
}
function ar(e) {
    return (e.flags & 1) === 1
}
function ut(e) {
    return !!e.template
}
function cr(e) {
    return (e[b] & 512) !== 0
}
function Sn(e) {
    return (e[b] & 256) === 256
}
var Xc = "svg"
  , ih = "math";
function Ue(e) {
    for (; Array.isArray(e); )
        e = e[Ze];
    return e
}
function eu(e, t) {
    return Ue(t[e])
}
function Ke(e, t) {
    return Ue(t[e.index])
}
function tu(e, t) {
    return e.data[t]
}
function so(e, t) {
    return e[t]
}
function nu(e, t, n, r) {
    n >= e.data.length && (e.data[n] = null,
    e.blueprint[n] = null),
    t[n] = r
}
function Be(e, t) {
    let n = t[e];
    return It(n) ? n : n[Ze]
}
function sh(e) {
    return (e[b] & 4) === 4
}
function ss(e) {
    return (e[b] & 128) === 128
}
function ah(e) {
    return Qe(e[oe])
}
function ao(e, t) {
    return t == null ? null : e[t]
}
function ru(e) {
    e[Cn] = 0
}
function ou(e) {
    e[b] & 1024 || (e[b] |= 1024,
    ss(e) && _n(e))
}
function ch(e, t) {
    for (; e > 0; )
        t = t[In],
        e--;
    return t
}
function co(e) {
    return !!(e[b] & 9216 || e[Ae]?.dirty)
}
function as(e) {
    e[Ye].changeDetectionScheduler?.notify(8),
    e[b] & 64 && (e[b] |= 1024),
    co(e) && _n(e)
}
function _n(e) {
    e[Ye].changeDetectionScheduler?.notify(0);
    let t = Ht(e);
    for (; t !== null && !(t[b] & 8192 || (t[b] |= 8192,
    !ss(t))); )
        t = Ht(t)
}
function iu(e, t) {
    if (Sn(e))
        throw new m(911,!1);
    e[Dt] === null && (e[Dt] = []),
    e[Dt].push(t)
}
function uh(e, t) {
    if (e[Dt] === null)
        return;
    let n = e[Dt].indexOf(t);
    n !== -1 && e[Dt].splice(n, 1)
}
function Ht(e) {
    let t = e[oe];
    return Qe(t) ? t[oe] : t
}
function su(e) {
    return e[or] ??= []
}
function au(e) {
    return e.cleanup ??= []
}
function lh(e, t, n, r) {
    let o = su(t);
    o.push(n),
    e.firstCreatePass && au(e).push(r, o.length - 1)
}
var R = {
    lFrame: Nh(null),
    bindingsEnabled: !0,
    skipHydrationRootTNode: null
};
var Nc = !1;
function dh() {
    return R.lFrame.elementDepthCount
}
function fh() {
    R.lFrame.elementDepthCount++
}
function hh() {
    R.lFrame.elementDepthCount--
}
function cs() {
    return R.bindingsEnabled
}
function ph() {
    return R.skipHydrationRootTNode !== null
}
function gh(e) {
    return R.skipHydrationRootTNode === e
}
function mh() {
    R.skipHydrationRootTNode = null
}
function A() {
    return R.lFrame.lView
}
function le() {
    return R.lFrame.tView
}
function yh(e) {
    return R.lFrame.contextLView = e,
    e[ge]
}
function vh(e) {
    return R.lFrame.contextLView = null,
    e
}
function be() {
    let e = cu();
    for (; e !== null && e.type === 64; )
        e = e.parent;
    return e
}
function cu() {
    return R.lFrame.currentTNode
}
function Dh() {
    let e = R.lFrame
      , t = e.currentTNode;
    return e.isParent ? t : t.parent
}
function ur(e, t) {
    let n = R.lFrame;
    n.currentTNode = e,
    n.isParent = t
}
function uu() {
    return R.lFrame.isParent
}
function Eh() {
    R.lFrame.isParent = !1
}
function wh() {
    return R.lFrame.contextLView
}
function lu() {
    return Nc
}
function Zr(e) {
    let t = Nc;
    return Nc = e,
    t
}
function us() {
    let e = R.lFrame
      , t = e.bindingRootIndex;
    return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex),
    t
}
function Ih() {
    return R.lFrame.bindingIndex
}
function Ch(e) {
    return R.lFrame.bindingIndex = e
}
function uo() {
    return R.lFrame.bindingIndex++
}
function du(e) {
    let t = R.lFrame
      , n = t.bindingIndex;
    return t.bindingIndex = t.bindingIndex + e,
    n
}
function bh() {
    return R.lFrame.inI18n
}
function Th(e, t) {
    let n = R.lFrame;
    n.bindingIndex = n.bindingRootIndex = e,
    ls(t)
}
function Sh() {
    return R.lFrame.currentDirectiveIndex
}
function ls(e) {
    R.lFrame.currentDirectiveIndex = e
}
function _h(e) {
    let t = R.lFrame.currentDirectiveIndex;
    return t === -1 ? null : e[t]
}
function fu() {
    return R.lFrame.currentQueryIndex
}
function ds(e) {
    R.lFrame.currentQueryIndex = e
}
function ED(e) {
    let t = e[C];
    return t.type === 2 ? t.declTNode : t.type === 1 ? e[Le] : null
}
function hu(e, t, n) {
    if (n & 4) {
        let o = t
          , i = e;
        for (; o = o.parent,
        o === null && !(n & 1); )
            if (o = ED(i),
            o === null || (i = i[In],
            o.type & 10))
                break;
        if (o === null)
            return !1;
        t = o,
        e = i
    }
    let r = R.lFrame = Mh();
    return r.currentTNode = t,
    r.lView = e,
    !0
}
function fs(e) {
    let t = Mh()
      , n = e[C];
    R.lFrame = t,
    t.currentTNode = n.firstChild,
    t.lView = e,
    t.tView = n,
    t.contextLView = e,
    t.bindingIndex = n.bindingStartIndex,
    t.inI18n = !1
}
function Mh() {
    let e = R.lFrame
      , t = e === null ? null : e.child;
    return t === null ? Nh(e) : t
}
function Nh(e) {
    let t = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: e,
        child: null,
        inI18n: !1
    };
    return e !== null && (e.child = t),
    t
}
function Rh() {
    let e = R.lFrame;
    return R.lFrame = e.parent,
    e.currentTNode = null,
    e.lView = null,
    e
}
var pu = Rh;
function hs() {
    let e = Rh();
    e.isParent = !0,
    e.tView = null,
    e.selectedIndex = -1,
    e.contextLView = null,
    e.elementDepthCount = 0,
    e.currentDirectiveIndex = -1,
    e.currentNamespace = null,
    e.bindingRootIndex = -1,
    e.bindingIndex = -1,
    e.currentQueryIndex = 0
}
function Ah(e) {
    return (R.lFrame.contextLView = ch(e, R.lFrame.contextLView))[ge]
}
function Kt() {
    return R.lFrame.selectedIndex
}
function Jt(e) {
    R.lFrame.selectedIndex = e
}
function ps() {
    let e = R.lFrame;
    return tu(e.tView, e.selectedIndex)
}
function xh() {
    R.lFrame.currentNamespace = Xc
}
function Oh() {
    wD()
}
function wD() {
    R.lFrame.currentNamespace = null
}
function gu() {
    return R.lFrame.currentNamespace
}
var kh = !0;
function gs() {
    return kh
}
function lo(e) {
    kh = e
}
function Rc(e, t=null, n=null, r) {
    let o = mu(e, t, n, r);
    return o.resolveInjectorInitializers(),
    o
}
function mu(e, t=null, n=null, r, o=new Set) {
    let i = [n || Re, Xf(e)], s;
    return new vn(i,t || ro(),s || null,o)
}
var Se = class e {
    static THROW_IF_NOT_FOUND = gn;
    static NULL = new qr;
    static create(t, n) {
        if (Array.isArray(t))
            return Rc({
                name: ""
            }, n, t, "");
        {
            let r = t.name ?? "";
            return Rc({
                name: r
            }, t.parent, t.providers, r)
        }
    }
    static \u0275prov = v({
        token: e,
        providedIn: "any",
        factory: () => I(Gc)
    });
    static __NG_ELEMENT_ID__ = -1
}
  , Z = new D("")
  , Je = ( () => {
    class e {
        static __NG_ELEMENT_ID__ = ID;
        static __NG_ENV_ID__ = n => n
    }
    return e
}
)()
  , Yi = class extends Je {
    _lView;
    constructor(t) {
        super(),
        this._lView = t
    }
    get destroyed() {
        return Sn(this._lView)
    }
    onDestroy(t) {
        let n = this._lView;
        return iu(n, t),
        () => uh(n, t)
    }
}
;
function ID() {
    return new Yi(A())
}
var Ph = !1
  , Fh = new D("")
  , bt = ( () => {
    class e {
        taskId = 0;
        pendingTasks = new Set;
        destroyed = !1;
        pendingTask = new Q(!1);
        debugTaskTracker = p(Fh, {
            optional: !0
        });
        get hasPendingTasks() {
            return this.destroyed ? !1 : this.pendingTask.value
        }
        get hasPendingTasksObservable() {
            return this.destroyed ? new O(n => {
                n.next(!1),
                n.complete()
            }
            ) : this.pendingTask
        }
        add() {
            !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0);
            let n = this.taskId++;
            return this.pendingTasks.add(n),
            this.debugTaskTracker?.add(n),
            n
        }
        has(n) {
            return this.pendingTasks.has(n)
        }
        remove(n) {
            this.pendingTasks.delete(n),
            this.debugTaskTracker?.remove(n),
            this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1)
        }
        ngOnDestroy() {
            this.pendingTasks.clear(),
            this.hasPendingTasks && this.pendingTask.next(!1),
            this.destroyed = !0,
            this.pendingTask.unsubscribe()
        }
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , Ac = class extends ae {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t=!1) {
        super(),
        this.__isAsync = t,
        rh() && (this.destroyRef = p(Je, {
            optional: !0
        }) ?? void 0,
        this.pendingTasks = p(bt, {
            optional: !0
        }) ?? void 0)
    }
    emit(t) {
        let n = S(null);
        try {
            super.next(t)
        } finally {
            S(n)
        }
    }
    subscribe(t, n, r) {
        let o = t
          , i = n || ( () => null)
          , s = r;
        if (t && typeof t == "object") {
            let c = t;
            o = c.next?.bind(c),
            i = c.error?.bind(c),
            s = c.complete?.bind(c)
        }
        this.__isAsync && (i = this.wrapInTimeout(i),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
        let a = super.subscribe({
            next: o,
            error: i,
            complete: s
        });
        return t instanceof ee && t.add(a),
        a
    }
    wrapInTimeout(t) {
        return n => {
            let r = this.pendingTasks?.add();
            setTimeout( () => {
                try {
                    t(n)
                } finally {
                    r !== void 0 && this.pendingTasks?.remove(r)
                }
            }
            )
        }
    }
}
  , we = Ac;
function Qi(...e) {}
function yu(e) {
    let t, n;
    function r() {
        e = Qi;
        try {
            n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n),
            t !== void 0 && clearTimeout(t)
        } catch {}
    }
    return t = setTimeout( () => {
        e(),
        r()
    }
    ),
    typeof requestAnimationFrame == "function" && (n = requestAnimationFrame( () => {
        e(),
        r()
    }
    )),
    () => r()
}
function Lh(e) {
    return queueMicrotask( () => e()),
    () => {
        e = Qi
    }
}
var vu = "isAngularZone"
  , Yr = vu + "_ID"
  , CD = 0
  , Ie = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new we(!1);
    onMicrotaskEmpty = new we(!1);
    onStable = new we(!1);
    onError = new we(!1);
    constructor(t) {
        let {enableLongStackTrace: n=!1, shouldCoalesceEventChangeDetection: r=!1, shouldCoalesceRunChangeDetection: o=!1, scheduleInRootZone: i=Ph} = t;
        if (typeof Zone > "u")
            throw new m(908,!1);
        Zone.assertZonePatched();
        let s = this;
        s._nesting = 0,
        s._outer = s._inner = Zone.current,
        Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)),
        n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        s.shouldCoalesceEventChangeDetection = !o && r,
        s.shouldCoalesceRunChangeDetection = o,
        s.callbackScheduled = !1,
        s.scheduleInRootZone = i,
        SD(s)
    }
    static isInAngularZone() {
        return typeof Zone < "u" && Zone.current.get(vu) === !0
    }
    static assertInAngularZone() {
        if (!e.isInAngularZone())
            throw new m(909,!1)
    }
    static assertNotInAngularZone() {
        if (e.isInAngularZone())
            throw new m(909,!1)
    }
    run(t, n, r) {
        return this._inner.run(t, n, r)
    }
    runTask(t, n, r, o) {
        let i = this._inner
          , s = i.scheduleEventTask("NgZoneEvent: " + o, t, bD, Qi, Qi);
        try {
            return i.runTask(s, n, r)
        } finally {
            i.cancelTask(s)
        }
    }
    runGuarded(t, n, r) {
        return this._inner.runGuarded(t, n, r)
    }
    runOutsideAngular(t) {
        return this._outer.run(t)
    }
}
  , bD = {};
function Du(e) {
    if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
        try {
            e._nesting++,
            e.onMicrotaskEmpty.emit(null)
        } finally {
            if (e._nesting--,
            !e.hasPendingMicrotasks)
                try {
                    e.runOutsideAngular( () => e.onStable.emit(null))
                } finally {
                    e.isStable = !0
                }
        }
}
function TD(e) {
    if (e.isCheckStableRunning || e.callbackScheduled)
        return;
    e.callbackScheduled = !0;
    function t() {
        yu( () => {
            e.callbackScheduled = !1,
            xc(e),
            e.isCheckStableRunning = !0,
            Du(e),
            e.isCheckStableRunning = !1
        }
        )
    }
    e.scheduleInRootZone ? Zone.root.run( () => {
        t()
    }
    ) : e._outer.run( () => {
        t()
    }
    ),
    xc(e)
}
function SD(e) {
    let t = () => {
        TD(e)
    }
      , n = CD++;
    e._inner = e._inner.fork({
        name: "angular",
        properties: {
            [vu]: !0,
            [Yr]: n,
            [Yr + n]: !0
        },
        onInvokeTask: (r, o, i, s, a, c) => {
            if (_D(c))
                return r.invokeTask(i, s, a, c);
            try {
                return Vf(e),
                r.invokeTask(i, s, a, c)
            } finally {
                (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(),
                Hf(e)
            }
        }
        ,
        onInvoke: (r, o, i, s, a, c, u) => {
            try {
                return Vf(e),
                r.invoke(i, s, a, c, u)
            } finally {
                e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !MD(c) && t(),
                Hf(e)
            }
        }
        ,
        onHasTask: (r, o, i, s) => {
            r.hasTask(i, s),
            o === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask,
            xc(e),
            Du(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask))
        }
        ,
        onHandleError: (r, o, i, s) => (r.handleError(i, s),
        e.runOutsideAngular( () => e.onError.emit(s)),
        !1)
    })
}
function xc(e) {
    e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1
}
function Vf(e) {
    e._nesting++,
    e.isStable && (e.isStable = !1,
    e.onUnstable.emit(null))
}
function Hf(e) {
    e._nesting--,
    Du(e)
}
var Qr = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new we;
    onMicrotaskEmpty = new we;
    onStable = new we;
    onError = new we;
    run(t, n, r) {
        return t.apply(n, r)
    }
    runGuarded(t, n, r) {
        return t.apply(n, r)
    }
    runOutsideAngular(t) {
        return t()
    }
    runTask(t, n, r, o) {
        return t.apply(n, r)
    }
}
;
function _D(e) {
    return jh(e, "__ignore_ng_zone__")
}
function MD(e) {
    return jh(e, "__scheduler_tick__")
}
function jh(e, t) {
    return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0
}
var at = class {
    _console = console;
    handleError(t) {
        this._console.error("ERROR", t)
    }
}
  , xe = new D("",{
    factory: () => {
        let e = p(Ie), t = p(q), n;
        return r => {
            e.runOutsideAngular( () => {
                t.destroyed && !n ? setTimeout( () => {
                    throw r
                }
                ) : (n ??= t.get(at),
                n.handleError(r))
            }
            )
        }
    }
})
  , Uh = {
    provide: Wt,
    useValue: () => {
        let e = p(at, {
            optional: !0
        })
    }
    ,
    multi: !0
}
  , ND = new D("",{
    factory: () => {
        let e = p(Z).defaultView;
        if (!e)
            return;
        let t = p(xe)
          , n = i => {
            t(i.reason),
            i.preventDefault()
        }
          , r = i => {
            i.error ? t(i.error) : t(new Error(i.message,{
                cause: i
            })),
            i.preventDefault()
        }
          , o = () => {
            e.addEventListener("unhandledrejection", n),
            e.addEventListener("error", r)
        }
        ;
        typeof Zone < "u" ? Zone.root.run(o) : o(),
        p(Je).onDestroy( () => {
            e.removeEventListener("error", r),
            e.removeEventListener("unhandledrejection", n)
        }
        )
    }
});
function RD() {
    return wt([Jf( () => {
        p(ND)
    }
    )])
}
function lr(e, t) {
    let[n,r,o] = yc(e, t?.equal)
      , i = n
      , s = i[pe];
    return i.set = r,
    i.update = o,
    i.asReadonly = Bh.bind(i),
    i
}
function Bh() {
    let e = this[pe];
    if (e.readonlyFn === void 0) {
        let t = () => this();
        t[pe] = e,
        e.readonlyFn = t
    }
    return e.readonlyFn
}
var fo = ( () => {
    class e {
        view;
        node;
        constructor(n, r) {
            this.view = n,
            this.node = r
        }
        static __NG_ELEMENT_ID__ = AD
    }
    return e
}
)();
function AD() {
    return new fo(A(),be())
}
var Et = class {
}
  , ho = new D("",{
    factory: () => !0
});
var Eu = new D("")
  , ms = ( () => {
    class e {
        internalPendingTasks = p(bt);
        scheduler = p(Et);
        errorHandler = p(xe);
        add() {
            let n = this.internalPendingTasks.add();
            return () => {
                this.internalPendingTasks.has(n) && (this.scheduler.notify(11),
                this.internalPendingTasks.remove(n))
            }
        }
        run(n) {
            let r = this.add();
            n().catch(this.errorHandler).finally(r)
        }
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , ys = ( () => {
    class e {
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => new Oc
        })
    }
    return e
}
)()
  , Oc = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(t) {
        this.enqueue(t),
        this.schedule(t)
    }
    schedule(t) {
        t.dirty && this.dirtyEffectCount++
    }
    remove(t) {
        let n = t.zone
          , r = this.queues.get(n);
        r.has(t) && (r.delete(t),
        t.dirty && this.dirtyEffectCount--)
    }
    enqueue(t) {
        let n = t.zone;
        this.queues.has(n) || this.queues.set(n, new Set);
        let r = this.queues.get(n);
        r.has(t) || r.add(t)
    }
    flush() {
        for (; this.dirtyEffectCount > 0; ) {
            let t = !1;
            for (let[n,r] of this.queues)
                n === null ? t ||= this.flushQueue(r) : t ||= n.run( () => this.flushQueue(r));
            t || (this.dirtyEffectCount = 0)
        }
    }
    flushQueue(t) {
        let n = !1;
        for (let r of t)
            r.dirty && (this.dirtyEffectCount--,
            n = !0,
            r.run());
        return n
    }
}
  , Ki = class {
    [pe];
    constructor(t) {
        this[pe] = t
    }
    destroy() {
        this[pe].destroy()
    }
}
;
function xD(e, t) {
    let n = t?.injector ?? p(Se), r = t?.manualCleanup !== !0 ? n.get(Je) : null, o, i = n.get(fo, null, {
        optional: !0
    }), s = n.get(Et);
    return i !== null ? (o = PD(i.view, s, e),
    r instanceof Yi && r._lView === i.view && (r = null)) : o = FD(e, n.get(ys), s),
    o.injector = n,
    r !== null && (o.onDestroyFns = [r.onDestroy( () => o.destroy())]),
    new Ki(o)
}
var Vh = x(y({}, Dc), {
    cleanupFns: void 0,
    zone: null,
    onDestroyFns: null,
    run() {
        let e = Zr(!1);
        try {
            Ec(this)
        } finally {
            Zr(e)
        }
    },
    cleanup() {
        if (!this.cleanupFns?.length)
            return;
        let e = S(null);
        try {
            for (; this.cleanupFns.length; )
                this.cleanupFns.pop()()
        } finally {
            this.cleanupFns = [],
            S(e)
        }
    }
})
  , OD = x(y({}, Vh), {
    consumerMarkedDirty() {
        this.scheduler.schedule(this),
        this.notifier.notify(12)
    },
    destroy() {
        if (pn(this),
        this.onDestroyFns !== null)
            for (let e of this.onDestroyFns)
                e();
        this.cleanup(),
        this.scheduler.remove(this)
    }
})
  , kD = x(y({}, Vh), {
    consumerMarkedDirty() {
        this.view[b] |= 8192,
        _n(this.view),
        this.notifier.notify(13)
    },
    destroy() {
        if (pn(this),
        this.onDestroyFns !== null)
            for (let e of this.onDestroyFns)
                e();
        this.cleanup(),
        this.view[Vt]?.delete(this)
    }
});
function PD(e, t, n) {
    let r = Object.create(kD);
    return r.view = e,
    r.zone = typeof Zone < "u" ? Zone.current : null,
    r.notifier = t,
    r.fn = Hh(r, n),
    e[Vt] ??= new Set,
    e[Vt].add(r),
    r.consumerMarkedDirty(r),
    r
}
function FD(e, t, n) {
    let r = Object.create(OD);
    return r.fn = Hh(r, e),
    r.scheduler = t,
    r.notifier = n,
    r.zone = typeof Zone < "u" ? Zone.current : null,
    r.scheduler.add(r),
    r.notifier.notify(12),
    r
}
function Hh(e, t) {
    return () => {
        t(n => (e.cleanupFns ??= []).push(n))
    }
}
function Co(e) {
    return {
        toString: e
    }.toString()
}
function $D(e) {
    return typeof e == "function"
}
function Tp(e, t, n, r) {
    t !== null ? t.applyValueToInputSignal(t, r) : e[n] = r
}
var Ss = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, r) {
        this.previousValue = t,
        this.currentValue = n,
        this.firstChange = r
    }
    isFirstChange() {
        return this.firstChange
    }
}
  , Vs = ( () => {
    let e = () => Sp;
    return e.ngInherit = !0,
    e
}
)();
function Sp(e) {
    return e.type.prototype.ngOnChanges && (e.setInput = GD),
    zD
}
function zD() {
    let e = Mp(this)
      , t = e?.current;
    if (t) {
        let n = e.previous;
        if (n === Gt)
            e.previous = t;
        else
            for (let r in t)
                n[r] = t[r];
        e.current = null,
        this.ngOnChanges(t)
    }
}
function GD(e, t, n, r, o) {
    let i = this.declaredInputs[r]
      , s = Mp(e) || WD(e, {
        previous: Gt,
        current: null
    })
      , a = s.current || (s.current = {})
      , c = s.previous
      , u = c[i];
    a[i] = new Ss(u && u.currentValue,n,c === Gt),
    Tp(e, t, o, n)
}
var _p = "__ngSimpleChanges__";
function Mp(e) {
    return e[_p] || null
}
function WD(e, t) {
    return e[_p] = t
}
var $h = [];
var B = function(e, t=null, n) {
    for (let r = 0; r < $h.length; r++) {
        let o = $h[r];
        o(e, t, n)
    }
}
  , P = (function(e) {
    return e[e.TemplateCreateStart = 0] = "TemplateCreateStart",
    e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd",
    e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart",
    e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd",
    e[e.LifecycleHookStart = 4] = "LifecycleHookStart",
    e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd",
    e[e.OutputStart = 6] = "OutputStart",
    e[e.OutputEnd = 7] = "OutputEnd",
    e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart",
    e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd",
    e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart",
    e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd",
    e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart",
    e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd",
    e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart",
    e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd",
    e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart",
    e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd",
    e[e.ComponentStart = 18] = "ComponentStart",
    e[e.ComponentEnd = 19] = "ComponentEnd",
    e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart",
    e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd",
    e[e.DynamicComponentStart = 22] = "DynamicComponentStart",
    e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd",
    e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart",
    e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd",
    e
}
)(P || {});
function qD(e, t, n) {
    let {ngOnChanges: r, ngOnInit: o, ngDoCheck: i} = t.type.prototype;
    if (r) {
        let s = Sp(t);
        (n.preOrderHooks ??= []).push(e, s),
        (n.preOrderCheckHooks ??= []).push(e, s)
    }
    o && (n.preOrderHooks ??= []).push(0 - e, o),
    i && ((n.preOrderHooks ??= []).push(e, i),
    (n.preOrderCheckHooks ??= []).push(e, i))
}
function Np(e, t) {
    for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
        let i = e.data[n].type.prototype
          , {ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: u, ngOnDestroy: l} = i;
        s && (e.contentHooks ??= []).push(-n, s),
        a && ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
        c && (e.viewHooks ??= []).push(-n, c),
        u && ((e.viewHooks ??= []).push(n, u),
        (e.viewCheckHooks ??= []).push(n, u)),
        l != null && (e.destroyHooks ??= []).push(n, l)
    }
}
function Is(e, t, n) {
    Rp(e, t, 3, n)
}
function Cs(e, t, n, r) {
    (e[b] & 3) === n && Rp(e, t, n, r)
}
function wu(e, t) {
    let n = e[b];
    (n & 3) === t && (n &= 16383,
    n += 1,
    e[b] = n)
}
function Rp(e, t, n, r) {
    let o = r !== void 0 ? e[Cn] & 65535 : 0
      , i = r ?? -1
      , s = t.length - 1
      , a = 0;
    for (let c = o; c < s; c++)
        if (typeof t[c + 1] == "number") {
            if (a = t[c],
            r != null && a >= r)
                break
        } else
            t[c] < 0 && (e[Cn] += 65536),
            (a < i || i == -1) && (ZD(e, n, t, c),
            e[Cn] = (e[Cn] & 4294901760) + c + 2),
            c++
}
function zh(e, t) {
    B(P.LifecycleHookStart, e, t);
    let n = S(null);
    try {
        t.call(e)
    } finally {
        S(n),
        B(P.LifecycleHookEnd, e, t)
    }
}
function ZD(e, t, n, r) {
    let o = n[r] < 0
      , i = n[r + 1]
      , s = o ? -n[r] : n[r]
      , a = e[s];
    o ? e[b] >> 14 < e[Cn] >> 16 && (e[b] & 3) === t && (e[b] += 16384,
    zh(a, i)) : zh(a, i)
}
var fr = -1
  , Nn = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, r, o) {
        this.factory = t,
        this.name = o,
        this.canSeeViewProviders = n,
        this.injectImpl = r
    }
}
;
function YD(e) {
    return (e.flags & 8) !== 0
}
function QD(e) {
    return (e.flags & 16) !== 0
}
function KD(e, t, n) {
    let r = 0;
    for (; r < n.length; ) {
        let o = n[r];
        if (typeof o == "number") {
            if (o !== 0)
                break;
            r++;
            let i = n[r++]
              , s = n[r++]
              , a = n[r++];
            e.setAttribute(t, s, a, i)
        } else {
            let i = o
              , s = n[++r];
            XD(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s),
            r++
        }
    }
    return r
}
function JD(e) {
    return e === 3 || e === 4 || e === 6
}
function XD(e) {
    return e.charCodeAt(0) === 64
}
function vo(e, t) {
    if (!(t === null || t.length === 0))
        if (e === null || e.length === 0)
            e = t.slice();
        else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
                let o = t[r];
                typeof o == "number" ? n = o : n === 0 || (n === -1 || n === 2 ? Gh(e, n, o, null, t[++r]) : Gh(e, n, o, null, null))
            }
        }
    return e
}
function Gh(e, t, n, r, o) {
    let i = 0
      , s = e.length;
    if (t === -1)
        s = -1;
    else
        for (; i < e.length; ) {
            let a = e[i++];
            if (typeof a == "number") {
                if (a === t) {
                    s = -1;
                    break
                } else if (a > t) {
                    s = i - 1;
                    break
                }
            }
        }
    for (; i < e.length; ) {
        let a = e[i];
        if (typeof a == "number")
            break;
        if (a === n) {
            o !== null && (e[i + 1] = o);
            return
        }
        i++,
        o !== null && i++
    }
    s !== -1 && (e.splice(s, 0, t),
    i = s + 1),
    e.splice(i++, 0, n),
    o !== null && e.splice(i++, 0, o)
}
function Ap(e) {
    return e !== fr
}
function _s(e) {
    return e & 32767
}
function eE(e) {
    return e >> 16
}
function Ms(e, t) {
    let n = eE(e)
      , r = t;
    for (; n > 0; )
        r = r[In],
        n--;
    return r
}
var xu = !0;
function Ns(e) {
    let t = xu;
    return xu = e,
    t
}
var tE = 256
  , xp = tE - 1
  , Op = 5
  , nE = 0
  , lt = {};
function rE(e, t, n) {
    let r;
    typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(En) && (r = n[En]),
    r == null && (r = n[En] = nE++);
    let o = r & xp
      , i = 1 << o;
    t.data[e + (o >> Op)] |= i
}
function Rs(e, t) {
    let n = kp(e, t);
    if (n !== -1)
        return n;
    let r = t[C];
    r.firstCreatePass && (e.injectorIndex = t.length,
    Iu(r.data, e),
    Iu(t, null),
    Iu(r.blueprint, null));
    let o = ll(e, t)
      , i = e.injectorIndex;
    if (Ap(o)) {
        let s = _s(o)
          , a = Ms(o, t)
          , c = a[C].data;
        for (let u = 0; u < 8; u++)
            t[i + u] = a[s + u] | c[s + u]
    }
    return t[i + 8] = o,
    i
}
function Iu(e, t) {
    e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
}
function kp(e, t) {
    return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex
}
function ll(e, t) {
    if (e.parent && e.parent.injectorIndex !== -1)
        return e.parent.injectorIndex;
    let n = 0
      , r = null
      , o = t;
    for (; o !== null; ) {
        if (r = Up(o),
        r === null)
            return fr;
        if (n++,
        o = o[In],
        r.injectorIndex !== -1)
            return r.injectorIndex | n << 16
    }
    return fr
}
function Ou(e, t, n) {
    rE(e, t, n)
}
function Pp(e, t, n) {
    if (n & 8 || e !== void 0)
        return e;
    ns(t, "NodeInjector")
}
function Fp(e, t, n, r) {
    if (n & 8 && r === void 0 && (r = null),
    (n & 3) === 0) {
        let o = e[qt]
          , i = Ee(void 0);
        try {
            return o ? o.get(t, r, n & 8) : $c(t, r, n & 8)
        } finally {
            Ee(i)
        }
    }
    return Pp(r, t, n)
}
function Lp(e, t, n, r=0, o) {
    if (e !== null) {
        if (t[b] & 2048 && !(r & 2)) {
            let s = aE(e, t, n, r, lt);
            if (s !== lt)
                return s
        }
        let i = jp(e, t, n, r, lt);
        if (i !== lt)
            return i
    }
    return Fp(t, n, r, o)
}
function jp(e, t, n, r, o) {
    let i = iE(n);
    if (typeof i == "function") {
        if (!hu(t, e, r))
            return r & 1 ? Pp(o, n, r) : Fp(t, n, r, o);
        try {
            let s;
            if (s = i(r),
            s == null && !(r & 8))
                ns(n);
            else
                return s
        } finally {
            pu()
        }
    } else if (typeof i == "number") {
        let s = null
          , a = kp(e, t)
          , c = fr
          , u = r & 1 ? t[je][Le] : null;
        for ((a === -1 || r & 4) && (c = a === -1 ? ll(e, t) : t[a + 8],
        c === fr || !qh(r, !1) ? a = -1 : (s = t[C],
        a = _s(c),
        t = Ms(c, t))); a !== -1; ) {
            let l = t[C];
            if (Wh(i, a, l.data)) {
                let d = oE(a, t, n, s, r, u);
                if (d !== lt)
                    return d
            }
            c = t[a + 8],
            c !== fr && qh(r, t[C].data[a + 8] === u) && Wh(i, a, t) ? (s = l,
            a = _s(c),
            t = Ms(c, t)) : a = -1
        }
    }
    return o
}
function oE(e, t, n, r, o, i) {
    let s = t[C]
      , a = s.data[e + 8]
      , c = r == null ? Ct(a) && xu : r != s && (a.type & 3) !== 0
      , u = o & 1 && i === a
      , l = bs(a, s, n, c, u);
    return l !== null ? Do(t, s, l, a, o) : lt
}
function bs(e, t, n, r, o) {
    let i = e.providerIndexes
      , s = t.data
      , a = i & 1048575
      , c = e.directiveStart
      , u = e.directiveEnd
      , l = i >> 20
      , d = r ? a : a + l
      , h = o ? a + l : u;
    for (let f = d; f < h; f++) {
        let g = s[f];
        if (f < c && n === g || f >= c && g.type === n)
            return f
    }
    if (o) {
        let f = s[c];
        if (f && ut(f) && f.type === n)
            return c
    }
    return null
}
function Do(e, t, n, r, o) {
    let i = e[n]
      , s = t.data;
    if (i instanceof Nn) {
        let a = i;
        if (a.resolving)
            throw Hc("");
        let c = Ns(a.canSeeViewProviders);
        a.resolving = !0;
        let u = s[n].type || s[n], l, d = a.injectImpl ? Ee(a.injectImpl) : null, h = hu(e, r, 0);
        try {
            i = e[n] = a.factory(void 0, o, s, e, r),
            t.firstCreatePass && n >= r.directiveStart && qD(n, s[n], t)
        } finally {
            d !== null && Ee(d),
            Ns(c),
            a.resolving = !1,
            pu()
        }
    }
    return i
}
function iE(e) {
    if (typeof e == "string")
        return e.charCodeAt(0) || 0;
    let t = e.hasOwnProperty(En) ? e[En] : void 0;
    return typeof t == "number" ? t >= 0 ? t & xp : sE : t
}
function Wh(e, t, n) {
    let r = 1 << e;
    return !!(n[t + (e >> Op)] & r)
}
function qh(e, t) {
    return !(e & 2) && !(e & 1 && t)
}
var Mn = class {
    _tNode;
    _lView;
    constructor(t, n) {
        this._tNode = t,
        this._lView = n
    }
    get(t, n, r) {
        return Lp(this._tNode, this._lView, t, mn(r), n)
    }
}
;
function sE() {
    return new Mn(be(),A())
}
function bo(e) {
    return Co( () => {
        let t = e.prototype.constructor
          , n = t[Wr] || ku(t)
          , r = Object.prototype
          , o = Object.getPrototypeOf(e.prototype).constructor;
        for (; o && o !== r; ) {
            let i = o[Wr] || ku(o);
            if (i && i !== n)
                return i;
            o = Object.getPrototypeOf(o)
        }
        return i => new i
    }
    )
}
function ku(e) {
    return Pc(e) ? () => {
        let t = ku(ue(e));
        return t && t()
    }
    : Bt(e)
}
function aE(e, t, n, r, o) {
    let i = e
      , s = t;
    for (; i !== null && s !== null && s[b] & 2048 && !cr(s); ) {
        let a = jp(i, s, n, r | 2, lt);
        if (a !== lt)
            return a;
        let c = i.parent;
        if (!c) {
            let u = s[Kc];
            if (u) {
                let l = u.get(n, lt, r & -5);
                if (l !== lt)
                    return l
            }
            c = Up(s),
            s = s[In]
        }
        i = c
    }
    return o
}
function Up(e) {
    let t = e[C]
      , n = t.type;
    return n === 2 ? t.declTNode : n === 1 ? e[Le] : null
}
function cE() {
    return yr(be(), A())
}
function yr(e, t) {
    return new vr(Ke(e, t))
}
var vr = ( () => {
    class e {
        nativeElement;
        constructor(n) {
            this.nativeElement = n
        }
        static __NG_ELEMENT_ID__ = cE
    }
    return e
}
)();
function uE(e) {
    return e instanceof vr ? e.nativeElement : e
}
function lE() {
    return this._results[Symbol.iterator]()
}
var As = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() {
        return this._changes ??= new ae
    }
    constructor(t=!1) {
        this._emitDistinctChangesOnly = t
    }
    get(t) {
        return this._results[t]
    }
    map(t) {
        return this._results.map(t)
    }
    filter(t) {
        return this._results.filter(t)
    }
    find(t) {
        return this._results.find(t)
    }
    reduce(t, n) {
        return this._results.reduce(t, n)
    }
    forEach(t) {
        this._results.forEach(t)
    }
    some(t) {
        return this._results.some(t)
    }
    toArray() {
        return this._results.slice()
    }
    toString() {
        return this._results.toString()
    }
    reset(t, n) {
        this.dirty = !1;
        let r = Yf(t);
        (this._changesDetected = !Zf(this._results, r, n)) && (this._results = r,
        this.length = r.length,
        this.last = r[this.length - 1],
        this.first = r[0])
    }
    notifyOnChanges() {
        this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this)
    }
    onDirty(t) {
        this._onDirty = t
    }
    setDirty() {
        this.dirty = !0,
        this._onDirty?.()
    }
    destroy() {
        this._changes !== void 0 && (this._changes.complete(),
        this._changes.unsubscribe())
    }
    [Symbol.iterator] = lE
}
;
function Bp(e) {
    return (e.flags & 128) === 128
}
var dl = (function(e) {
    return e[e.OnPush = 0] = "OnPush",
    e[e.Eager = 1] = "Eager",
    e[e.Default = 1] = "Default",
    e
}
)(dl || {})
  , Vp = new Map
  , dE = 0;
function fE() {
    return dE++
}
function hE(e) {
    Vp.set(e[Yt], e)
}
function Pu(e) {
    Vp.delete(e[Yt])
}
var Zh = "__ngContext__";
function hr(e, t) {
    It(t) ? (e[Zh] = t[Yt],
    hE(t)) : e[Zh] = t
}
function Hp(e) {
    return zp(e[ir])
}
function $p(e) {
    return zp(e[Fe])
}
function zp(e) {
    for (; e !== null && !Qe(e); )
        e = e[Fe];
    return e
}
var Fu;
function fl(e) {
    Fu = e
}
function Gp() {
    if (Fu !== void 0)
        return Fu;
    if (typeof document < "u")
        return document;
    throw new m(210,!1)
}
var Hs = new D("",{
    factory: () => pE
})
  , pE = "ng";
var $s = new D("")
  , To = new D("",{
    providedIn: "platform",
    factory: () => "unknown"
});
var So = new D("",{
    factory: () => p(Z).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null
});
var Wp = !1
  , qp = new D("",{
    factory: () => Wp
});
var Yh = new WeakMap;
function gE(e, t) {
    if (e == null || typeof e != "object")
        return;
    let n = Yh.get(e);
    n || (n = new WeakSet,
    Yh.set(e, n)),
    n.add(t)
}
var mE = (e, t, n, r) => {}
;
function yE(e, t, n, r) {
    mE(e, t, n, r)
}
function hl(e) {
    return (e.flags & 32) === 32
}
var vE = () => null;
function Zp(e, t, n=!1) {
    return vE(e, t, n)
}
function Yp(e, t) {
    let n = e.contentQueries;
    if (n !== null) {
        let r = S(null);
        try {
            for (let o = 0; o < n.length; o += 2) {
                let i = n[o]
                  , s = n[o + 1];
                if (s !== -1) {
                    let a = e.data[s];
                    ds(i),
                    a.contentQueries(2, t[s], s)
                }
            }
        } finally {
            S(r)
        }
    }
}
function Lu(e, t, n) {
    ds(0);
    let r = S(null);
    try {
        t(e, n)
    } finally {
        S(r)
    }
}
function pl(e, t, n) {
    if (Jc(t)) {
        let r = S(null);
        try {
            let o = t.directiveStart
              , i = t.directiveEnd;
            for (let s = o; s < i; s++) {
                let a = e.data[s];
                if (a.contentQueries) {
                    let c = n[s];
                    a.contentQueries(1, c, s)
                }
            }
        } finally {
            S(r)
        }
    }
}
var et = (function(e) {
    return e[e.Emulated = 0] = "Emulated",
    e[e.None = 2] = "None",
    e[e.ShadowDom = 3] = "ShadowDom",
    e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom",
    e
}
)(et || {});
var vs;
function DE() {
    if (vs === void 0 && (vs = null,
    Pe.trustedTypes))
        try {
            vs = Pe.trustedTypes.createPolicy("angular", {
                createHTML: e => e,
                createScript: e => e,
                createScriptURL: e => e
            })
        } catch {}
    return vs
}
function zs(e) {
    return DE()?.createHTML(e) || e
}
var Ds;
function EE() {
    if (Ds === void 0 && (Ds = null,
    Pe.trustedTypes))
        try {
            Ds = Pe.trustedTypes.createPolicy("angular#unsafe-bypass", {
                createHTML: e => e,
                createScript: e => e,
                createScriptURL: e => e
            })
        } catch {}
    return Ds
}
function Qh(e) {
    return EE()?.createHTML(e) || e
}
var Tt = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) {
        this.changingThisBreaksApplicationSecurity = t
    }
    toString() {
        return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ji})`
    }
}
  , ju = class extends Tt {
    getTypeName() {
        return "HTML"
    }
}
  , Uu = class extends Tt {
    getTypeName() {
        return "Style"
    }
}
  , Bu = class extends Tt {
    getTypeName() {
        return "Script"
    }
}
  , Vu = class extends Tt {
    getTypeName() {
        return "URL"
    }
}
  , Hu = class extends Tt {
    getTypeName() {
        return "ResourceURL"
    }
}
;
function ft(e) {
    return e instanceof Tt ? e.changingThisBreaksApplicationSecurity : e
}
function _t(e, t) {
    let n = Qp(e);
    if (n != null && n !== t) {
        if (n === "ResourceURL" && t === "URL")
            return !0;
        throw new Error(`Required a safe ${t}, got a ${n} (see ${Ji})`)
    }
    return n === t
}
function Qp(e) {
    return e instanceof Tt && e.getTypeName() || null
}
function gl(e) {
    return new ju(e)
}
function ml(e) {
    return new Uu(e)
}
function yl(e) {
    return new Bu(e)
}
function vl(e) {
    return new Vu(e)
}
function Dl(e) {
    return new Hu(e)
}
function wE(e) {
    let t = new zu(e);
    return IE() ? new $u(t) : t
}
var $u = class {
    inertDocumentHelper;
    constructor(t) {
        this.inertDocumentHelper = t
    }
    getInertBodyElement(t) {
        t = "<body><remove></remove>" + t;
        try {
            let n = new window.DOMParser().parseFromString(zs(t), "text/html").body;
            return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(),
            n)
        } catch {
            return null
        }
    }
}
  , zu = class {
    defaultDoc;
    inertDocument;
    constructor(t) {
        this.defaultDoc = t,
        this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")
    }
    getInertBodyElement(t) {
        let n = this.inertDocument.createElement("template");
        return n.innerHTML = zs(t),
        n
    }
}
;
function IE() {
    try {
        return !!new window.DOMParser().parseFromString(zs(""), "text/html")
    } catch {
        return !1
    }
}
var CE = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function _o(e) {
    return e = String(e),
    e.match(CE) ? e : "unsafe:" + e
}
function Mt(e) {
    let t = {};
    for (let n of e.split(","))
        t[n] = !0;
    return t
}
function Mo(...e) {
    let t = {};
    for (let n of e)
        for (let r in n)
            n.hasOwnProperty(r) && (t[r] = !0);
    return t
}
var Kp = Mt("area,br,col,hr,img,wbr")
  , Jp = Mt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr")
  , Xp = Mt("rp,rt")
  , bE = Mo(Xp, Jp)
  , TE = Mo(Jp, Mt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"))
  , SE = Mo(Xp, Mt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"))
  , Kh = Mo(Kp, TE, SE, bE)
  , eg = Mt("background,cite,href,itemtype,longdesc,poster,src,xlink:href")
  , _E = Mt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")
  , ME = Mt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")
  , NE = Mo(eg, _E, ME)
  , RE = Mt("script,style,template")
  , Gu = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) {
        let n = t.firstChild
          , r = !0
          , o = [];
        for (; n; ) {
            if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0,
            r && n.firstChild) {
                o.push(n),
                n = OE(n);
                continue
            }
            for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let i = xE(n);
                if (i) {
                    n = i;
                    break
                }
                n = o.pop()
            }
        }
        return this.buf.join("")
    }
    startElement(t) {
        let n = Jh(t).toLowerCase();
        if (!Kh.hasOwnProperty(n))
            return this.sanitizedSomething = !0,
            !RE.hasOwnProperty(n);
        this.buf.push("<"),
        this.buf.push(n);
        let r = t.attributes;
        for (let o = 0; o < r.length; o++) {
            let i = r.item(o)
              , s = i.name
              , a = s.toLowerCase();
            if (!NE.hasOwnProperty(a)) {
                this.sanitizedSomething = !0;
                continue
            }
            let c = i.value;
            eg[a] && (c = _o(c)),
            this.buf.push(" ", s, '="', Xh(c), '"')
        }
        return this.buf.push(">"),
        !0
    }
    endElement(t) {
        let n = Jh(t).toLowerCase();
        Kh.hasOwnProperty(n) && !Kp.hasOwnProperty(n) && (this.buf.push("</"),
        this.buf.push(n),
        this.buf.push(">"))
    }
    chars(t) {
        this.buf.push(Xh(t))
    }
}
;
function AE(e, t) {
    return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY
}
function xE(e) {
    let t = e.nextSibling;
    if (t && e !== t.previousSibling)
        throw tg(t);
    return t
}
function OE(e) {
    let t = e.firstChild;
    if (t && AE(e, t))
        throw tg(t);
    return t
}
function Jh(e) {
    let t = e.nodeName;
    return typeof t == "string" ? t : "FORM"
}
function tg(e) {
    return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)
}
var kE = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
  , PE = /([^\#-~ |!])/g;
function Xh(e) {
    return e.replace(/&/g, "&amp;").replace(kE, function(t) {
        let n = t.charCodeAt(0)
          , r = t.charCodeAt(1);
        return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";"
    }).replace(PE, function(t) {
        return "&#" + t.charCodeAt(0) + ";"
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
var Es;
function Gs(e, t) {
    let n = null;
    try {
        Es = Es || wE(e);
        let r = t ? String(t) : "";
        n = Es.getInertBodyElement(r);
        let o = 5
          , i = r;
        do {
            if (o === 0)
                throw new Error("Failed to sanitize html because the input is unstable");
            o--,
            r = i,
            i = n.innerHTML,
            n = Es.getInertBodyElement(r)
        } while (r !== i);
        let a = new Gu().sanitizeChildren(ep(n) || n);
        return zs(a)
    } finally {
        if (n) {
            let r = ep(n) || n;
            for (; r.firstChild; )
                r.firstChild.remove()
        }
    }
}
function ep(e) {
    return "content" in e && FE(e) ? e.content : null
}
function FE(e) {
    return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"
}
var LE = /^>|^->|<!--|-->|--!>|<!-$/g
  , jE = /(<|>)/g
  , UE = "\u200B$1\u200B";
function BE(e) {
    return e.replace(LE, t => t.replace(jE, UE))
}
function VE(e, t) {
    return e.createText(t)
}
function HE(e, t, n) {
    e.setValue(t, n)
}
function $E(e, t) {
    return e.createComment(BE(t))
}
function ng(e, t, n) {
    return e.createElement(t, n)
}
function xs(e, t, n, r, o) {
    e.insertBefore(t, n, r, o)
}
function rg(e, t, n) {
    e.appendChild(t, n)
}
function tp(e, t, n, r, o) {
    r !== null ? xs(e, t, n, r, o) : rg(e, t, n)
}
function zE(e, t, n, r) {
    e.removeChild(null, t, n, r)
}
function GE(e, t, n) {
    e.setAttribute(t, "style", n)
}
function WE(e, t, n) {
    n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n)
}
function og(e, t, n) {
    let {mergedAttrs: r, classes: o, styles: i} = n;
    r !== null && KD(e, t, r),
    o !== null && WE(e, t, o),
    i !== null && GE(e, t, i)
}
var tt = (function(e) {
    return e[e.NONE = 0] = "NONE",
    e[e.HTML = 1] = "HTML",
    e[e.STYLE = 2] = "STYLE",
    e[e.SCRIPT = 3] = "SCRIPT",
    e[e.URL = 4] = "URL",
    e[e.RESOURCE_URL = 5] = "RESOURCE_URL",
    e[e.ATTRIBUTE_NO_BINDING = 6] = "ATTRIBUTE_NO_BINDING",
    e
}
)(tt || {});
function qE(e) {
    let t = ig();
    return t ? Qh(t.sanitize(tt.HTML, e) || "") : _t(e, "HTML") ? Qh(ft(e)) : Gs(Gp(), wn(e))
}
function ZE(e) {
    let t = ig();
    return t ? t.sanitize(tt.URL, e) || "" : _t(e, "URL") ? ft(e) : _o(wn(e))
}
function ig() {
    let e = A();
    return e && e[Ye].sanitizer
}
function YE(e) {
    return e.ownerDocument.defaultView
}
function QE(e) {
    return e.ownerDocument
}
function sg(e) {
    return e instanceof Function ? e() : e
}
function KE(e, t, n) {
    let r = e.length;
    for (; ; ) {
        let o = e.indexOf(t, n);
        if (o === -1)
            return o;
        if (o === 0 || e.charCodeAt(o - 1) <= 32) {
            let i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32)
                return o
        }
        n = o + 1
    }
}
var ag = "ng-template";
function JE(e, t, n, r) {
    let o = 0;
    if (r) {
        for (; o < t.length && typeof t[o] == "string"; o += 2)
            if (t[o] === "class" && KE(t[o + 1].toLowerCase(), n, 0) !== -1)
                return !0
    } else if (El(e))
        return !1;
    if (o = t.indexOf(1, o),
    o > -1) {
        let i;
        for (; ++o < t.length && typeof (i = t[o]) == "string"; )
            if (i.toLowerCase() === n)
                return !0
    }
    return !1
}
function El(e) {
    return e.type === 4 && e.value !== ag
}
function XE(e, t, n) {
    let r = e.type === 4 && !n ? ag : e.value;
    return t === r
}
function ew(e, t, n) {
    let r = 4
      , o = e.attrs
      , i = o !== null ? rw(o) : 0
      , s = !1;
    for (let a = 0; a < t.length; a++) {
        let c = t[a];
        if (typeof c == "number") {
            if (!s && !Xe(r) && !Xe(c))
                return !1;
            if (s && Xe(c))
                continue;
            s = !1,
            r = c | r & 1;
            continue
        }
        if (!s)
            if (r & 4) {
                if (r = 2 | r & 1,
                c !== "" && !XE(e, c, n) || c === "" && t.length === 1) {
                    if (Xe(r))
                        return !1;
                    s = !0
                }
            } else if (r & 8) {
                if (o === null || !JE(e, o, c, n)) {
                    if (Xe(r))
                        return !1;
                    s = !0
                }
            } else {
                let u = t[++a]
                  , l = tw(c, o, El(e), n);
                if (l === -1) {
                    if (Xe(r))
                        return !1;
                    s = !0;
                    continue
                }
                if (u !== "") {
                    let d;
                    if (l > i ? d = "" : d = o[l + 1].toLowerCase(),
                    r & 2 && u !== d) {
                        if (Xe(r))
                            return !1;
                        s = !0
                    }
                }
            }
    }
    return Xe(r) || s
}
function Xe(e) {
    return (e & 1) === 0
}
function tw(e, t, n, r) {
    if (t === null)
        return -1;
    let o = 0;
    if (r || !n) {
        let i = !1;
        for (; o < t.length; ) {
            let s = t[o];
            if (s === e)
                return o;
            if (s === 3 || s === 6)
                i = !0;
            else if (s === 1 || s === 2) {
                let a = t[++o];
                for (; typeof a == "string"; )
                    a = t[++o];
                continue
            } else {
                if (s === 4)
                    break;
                if (s === 0) {
                    o += 4;
                    continue
                }
            }
            o += i ? 1 : 2
        }
        return -1
    } else
        return ow(t, e)
}
function nw(e, t, n=!1) {
    for (let r = 0; r < t.length; r++)
        if (ew(e, t[r], n))
            return !0;
    return !1
}
function rw(e) {
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (JD(n))
            return t
    }
    return e.length
}
function ow(e, t) {
    let n = e.indexOf(4);
    if (n > -1)
        for (n++; n < e.length; ) {
            let r = e[n];
            if (typeof r == "number")
                return -1;
            if (r === t)
                return n;
            n++
        }
    return -1
}
function np(e, t) {
    return e ? ":not(" + t.trim() + ")" : t
}
function iw(e) {
    let t = e[0]
      , n = 1
      , r = 2
      , o = ""
      , i = !1;
    for (; n < e.length; ) {
        let s = e[n];
        if (typeof s == "string")
            if (r & 2) {
                let a = e[++n];
                o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]"
            } else
                r & 8 ? o += "." + s : r & 4 && (o += " " + s);
        else
            o !== "" && !Xe(s) && (t += np(i, o),
            o = ""),
            r = s,
            i = i || !Xe(r);
        n++
    }
    return o !== "" && (t += np(i, o)),
    t
}
function sw(e) {
    return e.map(iw).join(",")
}
function aw(e) {
    let t = []
      , n = []
      , r = 1
      , o = 2;
    for (; r < e.length; ) {
        let i = e[r];
        if (typeof i == "string")
            o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
        else {
            if (!Xe(o))
                break;
            o = i
        }
        r++
    }
    return n.length && t.push(1, ...n),
    t
}
var nt = {};
function wl(e, t, n, r, o, i, s, a, c, u, l) {
    let d = ne + r
      , h = d + o
      , f = cw(d, h)
      , g = typeof u == "function" ? u() : u;
    return f[C] = {
        type: e,
        blueprint: f,
        template: n,
        queries: null,
        viewQuery: a,
        declTNode: t,
        data: f.slice().fill(null, d),
        bindingStartIndex: d,
        expandoStartIndex: h,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: typeof i == "function" ? i() : i,
        pipeRegistry: typeof s == "function" ? s() : s,
        firstChild: null,
        schemas: c,
        consts: g,
        incompleteFirstPass: !1,
        ssrId: l
    }
}
function cw(e, t) {
    let n = [];
    for (let r = 0; r < t; r++)
        n.push(r < e ? null : nt);
    return n
}
function uw(e) {
    let t = e.tView;
    return t === null || t.incompleteFirstPass ? e.tView = wl(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t
}
function Il(e, t, n, r, o, i, s, a, c, u, l) {
    let d = t.blueprint.slice();
    return d[Ze] = o,
    d[b] = r | 4 | 128 | 8 | 64 | 1024,
    (u !== null || e && e[b] & 2048) && (d[b] |= 2048),
    ru(d),
    d[oe] = d[In] = e,
    d[ge] = n,
    d[Ye] = s || e && e[Ye],
    d[z] = a || e && e[z],
    d[qt] = c || e && e[qt] || null,
    d[Le] = i,
    d[Yt] = fE(),
    d[oo] = l,
    d[Kc] = u,
    d[je] = t.type == 2 ? e[je] : d,
    d
}
function lw(e, t, n) {
    let r = Ke(t, e)
      , o = uw(n)
      , i = e[Ye].rendererFactory
      , s = Cl(e, Il(e, o, null, cg(n), r, t, null, i.createRenderer(r, n), null, null, null));
    return e[t.index] = s
}
function cg(e) {
    let t = 16;
    return e.signals ? t = 4096 : e.onPush && (t = 64),
    t
}
function ug(e, t, n, r) {
    if (n === 0)
        return -1;
    let o = t.length;
    for (let i = 0; i < n; i++)
        t.push(r),
        e.blueprint.push(r),
        e.data.push(null);
    return o
}
function Cl(e, t) {
    return e[ir] ? e[Qc][Fe] = t : e[ir] = t,
    e[Qc] = t,
    t
}
function dw(e=1) {
    lg(le(), A(), Kt() + e, !1)
}
function lg(e, t, n, r) {
    if (!r)
        if ((t[b] & 3) === 3) {
            let i = e.preOrderCheckHooks;
            i !== null && Is(t, i, n)
        } else {
            let i = e.preOrderHooks;
            i !== null && Cs(t, i, 0, n)
        }
    Jt(n)
}
var Ws = (function(e) {
    return e[e.None = 0] = "None",
    e[e.SignalBased = 1] = "SignalBased",
    e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform",
    e
}
)(Ws || {});
function Wu(e, t, n, r) {
    let o = S(null);
    try {
        let[i,s,a] = e.inputs[n]
          , c = null;
        (s & Ws.SignalBased) !== 0 && (c = t[i][pe]),
        c !== null && c.transformFn !== void 0 ? r = c.transformFn(r) : a !== null && (r = a.call(t, r)),
        e.setInput !== null ? e.setInput(t, c, r, n, i) : Tp(t, c, i, r)
    } finally {
        S(o)
    }
}
var dt = (function(e) {
    return e[e.Important = 1] = "Important",
    e[e.DashCase = 2] = "DashCase",
    e
}
)(dt || {}), fw;
function bl(e, t) {
    return fw(e, t)
}
var Ek = typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
var qu = new WeakMap
  , go = new WeakSet;
function hw(e, t) {
    let n = qu.get(e);
    if (!n || n.length === 0)
        return;
    let r = t.parentNode
      , o = t.previousSibling;
    for (let i = n.length - 1; i >= 0; i--) {
        let s = n[i]
          , a = s.parentNode;
        s === t ? (n.splice(i, 1),
        go.add(s),
        s.dispatchEvent(new CustomEvent("animationend",{
            detail: {
                cancel: !0
            }
        }))) : (o && s === o || a && r && a !== r) && (n.splice(i, 1),
        s.dispatchEvent(new CustomEvent("animationend",{
            detail: {
                cancel: !0
            }
        })),
        s.parentNode?.removeChild(s))
    }
}
function pw(e, t) {
    let n = qu.get(e);
    n ? n.includes(t) || n.push(t) : qu.set(e, [t])
}
var pr = new Set
  , qs = (function(e) {
    return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION",
    e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER",
    e
}
)(qs || {})
  , ht = new D("")
  , rp = new Set;
function Zs(e) {
    rp.has(e) || (rp.add(e),
    performance?.mark?.("mark_feature_usage", {
        detail: {
            feature: e
        }
    }))
}
var Tl = ( () => {
    class e {
        impl = null;
        execute() {
            this.impl?.execute()
        }
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , dg = [0, 1, 2, 3]
  , fg = ( () => {
    class e {
        ngZone = p(Ie);
        scheduler = p(Et);
        errorHandler = p(at, {
            optional: !0
        });
        sequences = new Set;
        deferredRegistrations = new Set;
        executing = !1;
        constructor() {
            p(ht, {
                optional: !0
            })
        }
        execute() {
            let n = this.sequences.size > 0;
            n && B(P.AfterRenderHooksStart),
            this.executing = !0;
            for (let r of dg)
                for (let o of this.sequences)
                    if (!(o.erroredOrDestroyed || !o.hooks[r]))
                        try {
                            o.pipelinedValue = this.ngZone.runOutsideAngular( () => this.maybeTrace( () => {
                                let i = o.hooks[r];
                                return i(o.pipelinedValue)
                            }
                            , o.snapshot))
                        } catch (i) {
                            o.erroredOrDestroyed = !0,
                            this.errorHandler?.handleError(i)
                        }
            this.executing = !1;
            for (let r of this.sequences)
                r.afterRun(),
                r.once && (this.sequences.delete(r),
                r.destroy());
            for (let r of this.deferredRegistrations)
                this.sequences.add(r);
            this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
            this.deferredRegistrations.clear(),
            n && B(P.AfterRenderHooksEnd)
        }
        register(n) {
            let {view: r} = n;
            r !== void 0 ? ((r[bn] ??= []).push(n),
            _n(r),
            r[b] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n)
        }
        addSequence(n) {
            this.sequences.add(n),
            this.scheduler.notify(7)
        }
        unregister(n) {
            this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0,
            n.pipelinedValue = void 0,
            n.once = !0) : (this.sequences.delete(n),
            this.deferredRegistrations.delete(n))
        }
        maybeTrace(n, r) {
            return r ? r.run(qs.AFTER_NEXT_RENDER, n) : n()
        }
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , Os = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, r, o, i, s=null) {
        this.impl = t,
        this.hooks = n,
        this.view = r,
        this.once = o,
        this.snapshot = s,
        this.unregisterOnDestroy = i?.onDestroy( () => this.destroy())
    }
    afterRun() {
        this.erroredOrDestroyed = !1,
        this.pipelinedValue = void 0,
        this.snapshot?.dispose(),
        this.snapshot = null
    }
    destroy() {
        this.impl.unregister(this),
        this.unregisterOnDestroy?.();
        let t = this.view?.[bn];
        t && (this.view[bn] = t.filter(n => n !== this))
    }
}
;
function Sl(e, t) {
    let n = t?.injector ?? p(Se);
    return Zs("NgAfterNextRender"),
    mw(e, n, t, !0)
}
function gw(e) {
    return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]
}
function mw(e, t, n, r) {
    let o = t.get(Tl);
    o.impl ??= t.get(fg);
    let i = t.get(ht, null, {
        optional: !0
    })
      , s = n?.manualCleanup !== !0 ? t.get(Je) : null
      , a = t.get(fo, null, {
        optional: !0
    })
      , c = new Os(o.impl,gw(e),a?.view,r,s,i?.snapshot(null));
    return o.impl.register(c),
    c
}
var yw = new D("",{
    factory: () => ({
        queue: new Set,
        isScheduled: !1,
        scheduler: null,
        injector: p(q)
    })
});
function hg(e, t, n) {
    let r = e.get(yw);
    if (Array.isArray(t))
        for (let o of t)
            r.queue.add(o),
            n?.detachedLeaveAnimationFns?.push(o);
    else
        r.queue.add(t),
        n?.detachedLeaveAnimationFns?.push(t);
    r.scheduler && r.scheduler(e)
}
function vw(e, t) {
    for (let[n,r] of t)
        hg(e, r.animateFns)
}
function op(e, t, n, r) {
    let o = e?.[sr]?.enter;
    t !== null && o && o.has(n.index) && vw(r, o)
}
function dr(e, t, n, r, o, i, s, a) {
    if (o != null) {
        let c, u = !1;
        Qe(o) ? c = o : It(o) && (u = !0,
        o = o[Ze]);
        let l = Ue(o);
        e === 0 && r !== null ? (op(a, r, i, n),
        s == null ? rg(t, r, l) : xs(t, r, l, s || null, !0)) : e === 1 && r !== null ? (op(a, r, i, n),
        xs(t, r, l, s || null, !0),
        hw(i, l)) : e === 2 ? (a?.[sr]?.leave?.has(i.index) && pw(i, l),
        go.delete(l),
        ip(a, i, n, d => {
            if (go.has(l)) {
                go.delete(l);
                return
            }
            zE(t, l, u, d)
        }
        )) : e === 3 && (go.delete(l),
        ip(a, i, n, () => {
            t.destroyNode(l)
        }
        )),
        c != null && Aw(t, e, n, c, i, r, s)
    }
}
function Dw(e, t) {
    pg(e, t),
    t[Ze] = null,
    t[Le] = null
}
function Ew(e, t, n, r, o, i) {
    r[Ze] = o,
    r[Le] = t,
    Ys(e, r, n, 1, o, i)
}
function pg(e, t) {
    t[Ye].changeDetectionScheduler?.notify(9),
    Ys(e, t, t[z], 2, null, null)
}
function ww(e) {
    let t = e[ir];
    if (!t)
        return Cu(e[C], e);
    for (; t; ) {
        let n = null;
        if (It(t))
            n = t[ir];
        else {
            let r = t[Ce];
            r && (n = r)
        }
        if (!n) {
            for (; t && !t[Fe] && t !== e; )
                It(t) && Cu(t[C], t),
                t = t[oe];
            t === null && (t = e),
            It(t) && Cu(t[C], t),
            n = t && t[Fe]
        }
        t = n
    }
}
function _l(e, t) {
    let n = e[Tn]
      , r = n.indexOf(t);
    n.splice(r, 1)
}
function gg(e, t) {
    if (Sn(t))
        return;
    let n = t[z];
    n.destroyNode && Ys(e, t, n, 3, null, null),
    ww(t)
}
function Cu(e, t) {
    if (Sn(t))
        return;
    let n = S(null);
    try {
        t[b] &= -129,
        t[b] |= 256,
        t[Ae] && pn(t[Ae]),
        bw(e, t),
        Cw(e, t),
        t[C].type === 1 && t[z].destroy();
        let r = t[Zt];
        if (r !== null && Qe(t[oe])) {
            r !== t[oe] && _l(r, t);
            let o = t[ct];
            o !== null && o.detachView(e)
        }
        Pu(t)
    } finally {
        S(n)
    }
}
function ip(e, t, n, r) {
    let o = e?.[sr];
    if (o == null || o.leave == null || !o.leave.has(t.index))
        return r(!1);
    e && pr.add(e[Yt]),
    hg(n, () => {
        if (o.leave && o.leave.has(t.index)) {
            let s = o.leave.get(t.index)
              , a = [];
            if (s) {
                for (let c = 0; c < s.animateFns.length; c++) {
                    let u = s.animateFns[c]
                      , {promise: l} = u();
                    a.push(l)
                }
                o.detachedLeaveAnimationFns = void 0
            }
            o.running = Promise.allSettled(a),
            Iw(e, r)
        } else
            e && pr.delete(e[Yt]),
            r(!1)
    }
    , o)
}
function Iw(e, t) {
    let n = e[sr]?.running;
    if (n) {
        n.then( () => {
            e[sr].running = void 0,
            pr.delete(e[Yt]),
            t(!0)
        }
        );
        return
    }
    t(!1)
}
function Cw(e, t) {
    let n = e.cleanup
      , r = t[or];
    if (n !== null)
        for (let s = 0; s < n.length - 1; s += 2)
            if (typeof n[s] == "string") {
                let a = n[s + 3];
                a >= 0 ? r[a]() : r[-a].unsubscribe(),
                s += 2
            } else {
                let a = r[n[s + 1]];
                n[s].call(a)
            }
    r !== null && (t[or] = null);
    let o = t[Dt];
    if (o !== null) {
        t[Dt] = null;
        for (let s = 0; s < o.length; s++) {
            let a = o[s];
            a()
        }
    }
    let i = t[Vt];
    if (i !== null) {
        t[Vt] = null;
        for (let s of i)
            s.destroy()
    }
}
function bw(e, t) {
    let n;
    if (e != null && (n = e.destroyHooks) != null)
        for (let r = 0; r < n.length; r += 2) {
            let o = t[n[r]];
            if (!(o instanceof Nn)) {
                let i = n[r + 1];
                if (Array.isArray(i))
                    for (let s = 0; s < i.length; s += 2) {
                        let a = o[i[s]]
                          , c = i[s + 1];
                        B(P.LifecycleHookStart, a, c);
                        try {
                            c.call(a)
                        } finally {
                            B(P.LifecycleHookEnd, a, c)
                        }
                    }
                else {
                    B(P.LifecycleHookStart, o, i);
                    try {
                        i.call(o)
                    } finally {
                        B(P.LifecycleHookEnd, o, i)
                    }
                }
            }
        }
}
function Tw(e, t, n) {
    return Sw(e, t.parent, n)
}
function Sw(e, t, n) {
    let r = t;
    for (; r !== null && r.type & 168; )
        t = r,
        r = t.parent;
    if (r === null)
        return n[Ze];
    if (Ct(r)) {
        let {encapsulation: o} = e.data[r.directiveStart + r.componentOffset];
        if (o === et.None || o === et.Emulated)
            return null
    }
    return Ke(r, n)
}
function _w(e, t, n) {
    return Nw(e, t, n)
}
function Mw(e, t, n) {
    return e.type & 40 ? Ke(e, n) : null
}
var Nw = Mw, sp;
function Ml(e, t, n, r) {
    let o = Tw(e, r, t)
      , i = t[z]
      , s = r.parent || t[Le]
      , a = _w(s, r, t);
    if (o != null)
        if (Array.isArray(n))
            for (let c = 0; c < n.length; c++)
                tp(i, o, n[c], a, !1);
        else
            tp(i, o, n, a, !1);
    sp !== void 0 && sp(i, r, t, n, o)
}
function mo(e, t) {
    if (t !== null) {
        let n = t.type;
        if (n & 3)
            return Ke(t, e);
        if (n & 4)
            return Zu(-1, e[t.index]);
        if (n & 8) {
            let r = t.child;
            if (r !== null)
                return mo(e, r);
            {
                let o = e[t.index];
                return Qe(o) ? Zu(-1, o) : Ue(o)
            }
        } else {
            if (n & 128)
                return mo(e, t.next);
            if (n & 32)
                return bl(t, e)() || Ue(e[t.index]);
            {
                let r = mg(e, t);
                if (r !== null) {
                    if (Array.isArray(r))
                        return r[0];
                    let o = Ht(e[je]);
                    return mo(o, r)
                } else
                    return mo(e, t.next)
            }
        }
    }
    return null
}
function mg(e, t) {
    if (t !== null) {
        let r = e[je][Le]
          , o = t.projection;
        return r.projection[o]
    }
    return null
}
function Zu(e, t) {
    let n = Ce + e + 1;
    if (n < t.length) {
        let r = t[n]
          , o = r[C].firstChild;
        if (o !== null)
            return mo(r, o)
    }
    return t[Qt]
}
function Nl(e, t, n, r, o, i, s) {
    for (; n != null; ) {
        let a = r[qt];
        if (n.type === 128) {
            n = n.next;
            continue
        }
        let c = r[n.index]
          , u = n.type;
        if (s && t === 0 && (c && hr(Ue(c), r),
        n.flags |= 2),
        !hl(n))
            if (u & 8)
                Nl(e, t, n.child, r, o, i, !1),
                dr(t, e, a, o, c, n, i, r);
            else if (u & 32) {
                let l = bl(n, r), d;
                for (; d = l(); )
                    dr(t, e, a, o, d, n, i, r);
                dr(t, e, a, o, c, n, i, r)
            } else
                u & 16 ? Rw(e, t, r, n, o, i) : dr(t, e, a, o, c, n, i, r);
        n = s ? n.projectionNext : n.next
    }
}
function Ys(e, t, n, r, o, i) {
    Nl(n, r, e.firstChild, t, o, i, !1)
}
function Rw(e, t, n, r, o, i) {
    let s = n[je]
      , c = s[Le].projection[r.projection];
    if (Array.isArray(c))
        for (let u = 0; u < c.length; u++) {
            let l = c[u];
            dr(t, e, n[qt], o, l, r, i, n)
        }
    else {
        let u = c
          , l = s[oe];
        Bp(r) && (u.flags |= 128),
        Nl(e, t, u, l, o, i, !0)
    }
}
function Aw(e, t, n, r, o, i, s) {
    let a = r[Qt]
      , c = Ue(r);
    a !== c && dr(t, e, n, i, a, o, s);
    for (let u = Ce; u < r.length; u++) {
        let l = r[u];
        Ys(l[C], l, e, t, i, a)
    }
}
function xw(e, t, n, r, o) {
    if (t)
        o ? e.addClass(n, r) : e.removeClass(n, r);
    else {
        let i = r.indexOf("-") === -1 ? void 0 : dt.DashCase;
        o == null ? e.removeStyle(n, r, i) : (typeof o == "string" && o.endsWith("!important") && (o = o.slice(0, -10),
        i |= dt.Important),
        e.setStyle(n, r, o, i))
    }
}
function yg(e, t, n, r, o) {
    let i = Kt()
      , s = r & 2;
    try {
        Jt(-1),
        s && t.length > ne && lg(e, t, ne, !1);
        let a = s ? P.TemplateUpdateStart : P.TemplateCreateStart;
        B(a, o, n),
        n(r, o)
    } finally {
        Jt(i);
        let a = s ? P.TemplateUpdateEnd : P.TemplateCreateEnd;
        B(a, o, n)
    }
}
function Qs(e, t, n) {
    Uw(e, t, n),
    (n.flags & 64) === 64 && Bw(e, t, n)
}
function Rl(e, t, n=Ke) {
    let r = t.localNames;
    if (r !== null) {
        let o = t.index + 1;
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i + 1]
              , a = s === -1 ? n(t, e) : e[s];
            e[o++] = a
        }
    }
}
function Ow(e, t, n, r) {
    let i = r.get(qp, Wp) || n === et.ShadowDom || n === et.ExperimentalIsolatedShadowDom
      , s = e.selectRootElement(t, i);
    return kw(s),
    s
}
function kw(e) {
    Pw(e)
}
var Pw = () => null;
function Fw(e) {
    return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e
}
function vg(e, t, n, r, o, i) {
    let s = t[C];
    if (xl(e, s, t, n, r)) {
        Ct(e) && jw(t, e.index);
        return
    }
    e.type & 3 && (n = Fw(n)),
    Lw(e, t, n, r, o, i)
}
function Lw(e, t, n, r, o, i) {
    if (e.type & 3) {
        let s = Ke(e, t);
        r = i != null ? i(r, e.value || "", n) : r,
        o.setProperty(s, n, r)
    } else
        e.type & 12
}
function jw(e, t) {
    let n = Be(t, e);
    n[b] & 16 || (n[b] |= 64)
}
function Uw(e, t, n) {
    let r = n.directiveStart
      , o = n.directiveEnd;
    Ct(n) && lw(t, n, e.data[r + n.componentOffset]),
    e.firstCreatePass || Rs(n, t);
    let i = n.initialInputs;
    for (let s = r; s < o; s++) {
        let a = e.data[s]
          , c = Do(t, e, s, n);
        if (hr(c, t),
        i !== null && zw(t, s - r, c, a, n, i),
        ut(a)) {
            let u = Be(n.index, t);
            u[ge] = Do(t, e, s, n)
        }
    }
}
function Bw(e, t, n) {
    let r = n.directiveStart
      , o = n.directiveEnd
      , i = n.index
      , s = Sh();
    try {
        Jt(i);
        for (let a = r; a < o; a++) {
            let c = e.data[a]
              , u = t[a];
            ls(a),
            (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && Vw(c, u)
        }
    } finally {
        Jt(-1),
        ls(s)
    }
}
function Vw(e, t) {
    e.hostBindings !== null && e.hostBindings(1, t)
}
function Al(e, t) {
    let n = e.directiveRegistry
      , r = null;
    if (n)
        for (let o = 0; o < n.length; o++) {
            let i = n[o];
            nw(t, i.selectors, !1) && (r ??= [],
            ut(i) ? r.unshift(i) : r.push(i))
        }
    return r
}
function Hw(e, t, n, r, o, i) {
    let s = Ke(e, t);
    $w(t[z], s, i, e.value, n, r, o)
}
function $w(e, t, n, r, o, i, s) {
    if (i == null)
        e.removeAttribute(t, o, n);
    else {
        let a = s == null ? wn(i) : s(i, r || "", o);
        e.setAttribute(t, o, a, n)
    }
}
function zw(e, t, n, r, o, i) {
    let s = i[t];
    if (s !== null)
        for (let a = 0; a < s.length; a += 2) {
            let c = s[a]
              , u = s[a + 1];
            Wu(r, n, c, u)
        }
}
function Dg(e, t, n, r, o) {
    let i = ne + n
      , s = t[C]
      , a = o(s, t, e, r, n);
    t[i] = a,
    ur(e, !0);
    let c = e.type === 2;
    return c ? (og(t[z], a, e),
    (dh() === 0 || ar(e)) && hr(a, t),
    fh()) : hr(a, t),
    gs() && (!c || !hl(e)) && Ml(s, t, a, e),
    e
}
function Eg(e) {
    let t = e;
    return uu() ? Eh() : (t = t.parent,
    ur(t, !1)),
    t
}
function Gw(e, t) {
    let n = e[qt];
    if (!n)
        return;
    let r;
    try {
        r = n.get(xe, null)
    } catch {
        r = null
    }
    r?.(t)
}
function xl(e, t, n, r, o) {
    let i = e.inputs?.[r]
      , s = e.hostDirectiveInputs?.[r]
      , a = !1;
    if (s)
        for (let c = 0; c < s.length; c += 2) {
            let u = s[c]
              , l = s[c + 1]
              , d = t.data[u];
            Wu(d, n[u], l, o),
            a = !0
        }
    if (i)
        for (let c of i) {
            let u = n[c]
              , l = t.data[c];
            Wu(l, u, r, o),
            a = !0
        }
    return a
}
function Ww(e, t) {
    let n = Be(t, e)
      , r = n[C];
    qw(r, n);
    let o = n[Ze];
    o !== null && n[oo] === null && (n[oo] = Zp(o, n[qt])),
    B(P.ComponentStart);
    try {
        Ol(r, n, n[ge])
    } finally {
        B(P.ComponentEnd, n[ge])
    }
}
function qw(e, t) {
    for (let n = t.length; n < e.blueprint.length; n++)
        t.push(e.blueprint[n])
}
function Ol(e, t, n) {
    fs(t);
    try {
        let r = e.viewQuery;
        r !== null && Lu(1, r, n);
        let o = e.template;
        o !== null && yg(e, t, o, 1, n),
        e.firstCreatePass && (e.firstCreatePass = !1),
        t[ct]?.finishViewCreation(e),
        e.staticContentQueries && Yp(e, t),
        e.staticViewQueries && Lu(2, e.viewQuery, n);
        let i = e.components;
        i !== null && Zw(t, i)
    } catch (r) {
        throw e.firstCreatePass && (e.incompleteFirstPass = !0,
        e.firstCreatePass = !1),
        r
    } finally {
        t[b] &= -5,
        hs()
    }
}
function Zw(e, t) {
    for (let n = 0; n < t.length; n++)
        Ww(e, t[n])
}
function Yw(e, t, n, r) {
    let o = S(null);
    try {
        let i = t.tView
          , a = e[b] & 4096 ? 4096 : 16
          , c = Il(e, i, n, a, null, t, null, null, r?.injector ?? null, r?.embeddedViewInjector ?? null, r?.dehydratedView ?? null)
          , u = e[t.index];
        c[Zt] = u;
        let l = e[ct];
        return l !== null && (c[ct] = l.createEmbeddedView(i)),
        Ol(i, c, n),
        c
    } finally {
        S(o)
    }
}
function ap(e, t) {
    return !t || t.firstChild === null || Bp(e)
}
function Eo(e, t, n, r, o=!1) {
    for (; n !== null; ) {
        if (n.type === 128) {
            n = o ? n.projectionNext : n.next;
            continue
        }
        let i = t[n.index];
        i !== null && r.push(Ue(i)),
        Qe(i) && wg(i, r);
        let s = n.type;
        if (s & 8)
            Eo(e, t, n.child, r);
        else if (s & 32) {
            let a = bl(n, t), c;
            for (; c = a(); )
                r.push(c)
        } else if (s & 16) {
            let a = mg(t, n);
            if (Array.isArray(a))
                r.push(...a);
            else {
                let c = Ht(t[je]);
                Eo(c[C], c, a, r, !0)
            }
        }
        n = o ? n.projectionNext : n.next
    }
    return r
}
function wg(e, t) {
    for (let n = Ce; n < e.length; n++) {
        let r = e[n]
          , o = r[C].firstChild;
        o !== null && Eo(r[C], r, o, t)
    }
    e[Qt] !== e[Ze] && t.push(e[Qt])
}
function Ig(e) {
    if (e[bn] !== null) {
        for (let t of e[bn])
            t.impl.addSequence(t);
        e[bn].length = 0
    }
}
var Cg = [];
function Qw(e) {
    return e[Ae] ?? Kw(e)
}
function Kw(e) {
    let t = Cg.pop() ?? Object.create(Xw);
    return t.lView = e,
    t
}
function Jw(e) {
    e.lView[Ae] !== e && (e.lView = null,
    Cg.push(e))
}
var Xw = x(y({}, fn), {
    consumerIsAlwaysLive: !0,
    kind: "template",
    consumerMarkedDirty: e => {
        _n(e.lView)
    }
    ,
    consumerOnSignalRead() {
        this.lView[Ae] = this
    }
});
function eI(e) {
    let t = e[Ae] ?? Object.create(tI);
    return t.lView = e,
    t
}
var tI = x(y({}, fn), {
    consumerIsAlwaysLive: !0,
    kind: "template",
    consumerMarkedDirty: e => {
        let t = Ht(e.lView);
        for (; t && !bg(t[C]); )
            t = Ht(t);
        t && ou(t)
    }
    ,
    consumerOnSignalRead() {
        this.lView[Ae] = this
    }
});
function bg(e) {
    return e.type !== 2
}
function Tg(e) {
    if (e[Vt] === null)
        return;
    let t = !0;
    for (; t; ) {
        let n = !1;
        for (let r of e[Vt])
            r.dirty && (n = !0,
            r.zone === null || Zone.current === r.zone ? r.run() : r.zone.run( () => r.run()));
        t = n && !!(e[b] & 8192)
    }
}
var nI = 100;
function Sg(e, t=0) {
    let r = e[Ye].rendererFactory
      , o = !1;
    o || r.begin?.();
    try {
        rI(e, t)
    } finally {
        o || r.end?.()
    }
}
function rI(e, t) {
    let n = lu();
    try {
        Zr(!0),
        Yu(e, t);
        let r = 0;
        for (; co(e); ) {
            if (r === nI)
                throw new m(103,!1);
            r++,
            Yu(e, 1)
        }
    } finally {
        Zr(n)
    }
}
function oI(e, t, n, r) {
    if (Sn(t))
        return;
    let o = t[b]
      , i = !1
      , s = !1;
    fs(t);
    let a = !0
      , c = null
      , u = null;
    i || (bg(e) ? (u = Qw(t),
    c = hn(u)) : Ui() === null ? (a = !1,
    u = eI(t),
    c = hn(u)) : t[Ae] && (pn(t[Ae]),
    t[Ae] = null));
    try {
        ru(t),
        Ch(e.bindingStartIndex),
        n !== null && yg(e, t, n, 2, r);
        let l = (o & 3) === 3;
        if (!i)
            if (l) {
                let f = e.preOrderCheckHooks;
                f !== null && Is(t, f, null)
            } else {
                let f = e.preOrderHooks;
                f !== null && Cs(t, f, 0, null),
                wu(t, 0)
            }
        if (s || iI(t),
        Tg(t),
        _g(t, 0),
        e.contentQueries !== null && Yp(e, t),
        !i)
            if (l) {
                let f = e.contentCheckHooks;
                f !== null && Is(t, f)
            } else {
                let f = e.contentHooks;
                f !== null && Cs(t, f, 1),
                wu(t, 1)
            }
        aI(e, t);
        let d = e.components;
        d !== null && Ng(t, d, 0);
        let h = e.viewQuery;
        if (h !== null && Lu(2, h, r),
        !i)
            if (l) {
                let f = e.viewCheckHooks;
                f !== null && Is(t, f)
            } else {
                let f = e.viewHooks;
                f !== null && Cs(t, f, 2),
                wu(t, 2)
            }
        if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1),
        t[is]) {
            for (let f of t[is])
                f();
            t[is] = null
        }
        i || (Ig(t),
        t[b] &= -73)
    } catch (l) {
        throw i || _n(t),
        l
    } finally {
        u !== null && (Jn(u, c),
        a && Jw(u)),
        hs()
    }
}
function _g(e, t) {
    for (let n = Hp(e); n !== null; n = $p(n))
        for (let r = Ce; r < n.length; r++) {
            let o = n[r];
            Mg(o, t)
        }
}
function iI(e) {
    for (let t = Hp(e); t !== null; t = $p(t)) {
        if (!(t[b] & 2))
            continue;
        let n = t[Tn];
        for (let r = 0; r < n.length; r++) {
            let o = n[r];
            ou(o)
        }
    }
}
function sI(e, t, n) {
    B(P.ComponentStart);
    let r = Be(t, e);
    try {
        Mg(r, n)
    } finally {
        B(P.ComponentEnd, r[ge])
    }
}
function Mg(e, t) {
    ss(e) && Yu(e, t)
}
function Yu(e, t) {
    let r = e[C]
      , o = e[b]
      , i = e[Ae]
      , s = !!(t === 0 && o & 16);
    if (s ||= !!(o & 64 && t === 0),
    s ||= !!(o & 1024),
    s ||= !!(i?.dirty && zr(i)),
    s ||= !1,
    i && (i.dirty = !1),
    e[b] &= -9217,
    s)
        oI(r, e, r.template, e[ge]);
    else if (o & 8192) {
        let a = S(null);
        try {
            Tg(e),
            _g(e, 1);
            let c = r.components;
            c !== null && Ng(e, c, 1),
            Ig(e)
        } finally {
            S(a)
        }
    }
}
function Ng(e, t, n) {
    for (let r = 0; r < t.length; r++)
        sI(e, t[r], n)
}
function aI(e, t) {
    let n = e.hostBindingOpCodes;
    if (n !== null)
        try {
            for (let r = 0; r < n.length; r++) {
                let o = n[r];
                if (o < 0)
                    Jt(~o);
                else {
                    let i = o
                      , s = n[++r]
                      , a = n[++r];
                    Th(s, i);
                    let c = t[i];
                    B(P.HostBindingsUpdateStart, c);
                    try {
                        a(2, c)
                    } finally {
                        B(P.HostBindingsUpdateEnd, c)
                    }
                }
            }
        } finally {
            Jt(-1)
        }
}
function kl(e, t) {
    let n = lu() ? 64 : 1088;
    for (e[Ye].changeDetectionScheduler?.notify(t); e; ) {
        e[b] |= n;
        let r = Ht(e);
        if (cr(e) && !r)
            return e;
        e = r
    }
    return null
}
function Rg(e, t, n, r) {
    return [e, !0, 0, t, null, r, null, n, null, null]
}
function cI(e, t, n, r=!0) {
    let o = t[C];
    if (uI(o, t, e, n),
    r) {
        let s = Zu(n, e)
          , a = t[z]
          , c = a.parentNode(e[Qt]);
        c !== null && Ew(o, e[Le], a, t, c, s)
    }
    let i = t[oo];
    i !== null && i.firstChild !== null && (i.firstChild = null)
}
function Qu(e, t) {
    if (e.length <= Ce)
        return;
    let n = Ce + t
      , r = e[n];
    if (r) {
        let o = r[Zt];
        o !== null && o !== e && _l(o, r),
        t > 0 && (e[n - 1][Fe] = r[Fe]);
        let i = to(e, Ce + t);
        Dw(r[C], r);
        let s = i[ct];
        s !== null && s.detachView(i[C]),
        r[oe] = null,
        r[Fe] = null,
        r[b] &= -129
    }
    return r
}
function uI(e, t, n, r) {
    let o = Ce + r
      , i = n.length;
    r > 0 && (n[o - 1][Fe] = t),
    r < i - Ce ? (t[Fe] = n[o],
    zc(n, Ce + r, t)) : (n.push(t),
    t[Fe] = null),
    t[oe] = n;
    let s = t[Zt];
    s !== null && n !== s && Ag(s, t);
    let a = t[ct];
    a !== null && a.insertView(e),
    as(t),
    t[b] |= 128
}
function Ag(e, t) {
    let n = e[Tn]
      , r = t[oe];
    if (It(r))
        e[b] |= 2;
    else {
        let o = r[oe][je];
        t[je] !== o && (e[b] |= 2)
    }
    n === null ? e[Tn] = [t] : n.push(t)
}
var Xt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() {
        let t = this._lView
          , n = t[C];
        return Eo(n, t, n.firstChild, [])
    }
    constructor(t, n) {
        this._lView = t,
        this._cdRefInjectingView = n
    }
    get context() {
        return this._lView[ge]
    }
    set context(t) {
        this._lView[ge] = t
    }
    get destroyed() {
        return Sn(this._lView)
    }
    destroy() {
        if (this._appRef)
            this._appRef.detachView(this);
        else if (this._attachedToViewContainer) {
            let t = this._lView[oe];
            if (Qe(t)) {
                let n = t[io]
                  , r = n ? n.indexOf(this) : -1;
                r > -1 && (Qu(t, r),
                to(n, r))
            }
            this._attachedToViewContainer = !1
        }
        gg(this._lView[C], this._lView)
    }
    onDestroy(t) {
        iu(this._lView, t)
    }
    markForCheck() {
        kl(this._cdRefInjectingView || this._lView, 4)
    }
    detach() {
        this._lView[b] &= -129
    }
    reattach() {
        as(this._lView),
        this._lView[b] |= 128
    }
    detectChanges() {
        this._lView[b] |= 1024,
        Sg(this._lView)
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
        if (this._appRef)
            throw new m(902,!1);
        this._attachedToViewContainer = !0
    }
    detachFromAppRef() {
        this._appRef = null;
        let t = cr(this._lView)
          , n = this._lView[Zt];
        n !== null && !t && _l(n, this._lView),
        pg(this._lView[C], this._lView)
    }
    attachToAppRef(t) {
        if (this._attachedToViewContainer)
            throw new m(902,!1);
        this._appRef = t;
        let n = cr(this._lView)
          , r = this._lView[Zt];
        r !== null && !n && Ag(r, this._lView),
        as(this._lView)
    }
}
;
var en = ( () => {
    class e {
        _declarationLView;
        _declarationTContainer;
        elementRef;
        static __NG_ELEMENT_ID__ = lI;
        constructor(n, r, o) {
            this._declarationLView = n,
            this._declarationTContainer = r,
            this.elementRef = o
        }
        get ssrId() {
            return this._declarationTContainer.tView?.ssrId || null
        }
        createEmbeddedView(n, r) {
            return this.createEmbeddedViewImpl(n, r)
        }
        createEmbeddedViewImpl(n, r, o) {
            let i = Yw(this._declarationLView, this._declarationTContainer, n, {
                embeddedViewInjector: r,
                dehydratedView: o
            });
            return new Xt(i)
        }
    }
    return e
}
)();
function lI() {
    return Ks(be(), A())
}
function Ks(e, t) {
    return e.type & 4 ? new en(t,e,yr(e, t)) : null
}
function Pl(e, t, n, r, o) {
    let i = e.data[t];
    if (i === null)
        i = dI(e, t, n, r, o),
        bh() && (i.flags |= 32);
    else if (i.type & 64) {
        i.type = n,
        i.value = r,
        i.attrs = o;
        let s = Dh();
        i.injectorIndex = s === null ? -1 : s.injectorIndex
    }
    return ur(i, !0),
    i
}
function dI(e, t, n, r, o) {
    let i = cu()
      , s = uu()
      , a = s ? i : i && i.parent
      , c = e.data[t] = hI(e, a, n, t, r, o);
    return fI(e, c, i, s),
    c
}
function fI(e, t, n, r) {
    e.firstChild === null && (e.firstChild = t),
    n !== null && (r ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t,
    t.prev = n))
}
function hI(e, t, n, r, o, i) {
    let s = t ? t.injectorIndex : -1
      , a = 0;
    return ph() && (a |= 128),
    {
        type: n,
        index: r,
        insertBeforeIndex: null,
        injectorIndex: s,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        componentOffset: -1,
        controlDirectiveIndex: -1,
        customControlIndex: -1,
        propertyBindings: null,
        flags: a,
        providerIndexes: 0,
        value: o,
        namespace: gu(),
        attrs: i,
        mergedAttrs: null,
        localNames: null,
        initialInputs: null,
        inputs: null,
        hostDirectiveInputs: null,
        outputs: null,
        hostDirectiveOutputs: null,
        directiveToIndex: null,
        tView: null,
        next: null,
        prev: null,
        projectionNext: null,
        child: null,
        parent: t,
        projection: null,
        styles: null,
        stylesWithoutHost: null,
        residualStyles: void 0,
        classes: null,
        classesWithoutHost: null,
        residualClasses: void 0,
        classBindings: 0,
        styleBindings: 0
    }
}
var pI = () => null;
function cp(e, t) {
    return pI(e, t)
}
var xg = class {
}
  , Js = class {
}
  , Ku = class {
    resolveComponentFactory(t) {
        throw new m(917,!1)
    }
}
  , No = class {
    static NULL = new Ku
}
  , Rn = class {
}
  , Og = ( () => {
    class e {
        destroyNode = null;
        static __NG_ELEMENT_ID__ = () => gI()
    }
    return e
}
)();
function gI() {
    let e = A()
      , t = be()
      , n = Be(t.index, e);
    return (It(n) ? n : e)[z]
}
var kg = ( () => {
    class e {
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => null
        })
    }
    return e
}
)();
var Ts = {}
  , Ju = class {
    injector;
    parentInjector;
    constructor(t, n) {
        this.injector = t,
        this.parentInjector = n
    }
    get(t, n, r) {
        let o = this.injector.get(t, Ts, r);
        return o !== Ts || n === Ts ? o : this.parentInjector.get(t, n, r)
    }
}
;
function up(e, t, n) {
    let r = n ? e.styles : null
      , o = n ? e.classes : null
      , i = 0;
    if (t !== null)
        for (let s = 0; s < t.length; s++) {
            let a = t[s];
            if (typeof a == "number")
                i = a;
            else if (i == 1)
                o = kc(o, a);
            else if (i == 2) {
                let c = a
                  , u = t[++s];
                r = kc(r, c + ": " + u + ";")
            }
        }
    n ? e.styles = r : e.stylesWithoutHost = r,
    n ? e.classes = o : e.classesWithoutHost = o
}
function me(e, t=0) {
    let n = A();
    if (n === null)
        return I(e, t);
    let r = be();
    return Lp(r, n, ue(e), t)
}
function Pg(e, t, n, r, o) {
    let i = r === null ? null : {
        "": -1
    }
      , s = o(e, n);
    if (s !== null) {
        let a = s
          , c = null
          , u = null;
        for (let l of s)
            if (l.resolveHostDirectives !== null) {
                [a,c,u] = l.resolveHostDirectives(s);
                break
            }
        vI(e, t, n, a, i, c, u)
    }
    i !== null && r !== null && mI(n, r, i)
}
function mI(e, t, n) {
    let r = e.localNames = [];
    for (let o = 0; o < t.length; o += 2) {
        let i = n[t[o + 1]];
        if (i == null)
            throw new m(-301,!1);
        r.push(t[o], i)
    }
}
function yI(e, t, n) {
    t.componentOffset = n,
    (e.components ??= []).push(t.index)
}
function vI(e, t, n, r, o, i, s) {
    let a = r.length
      , c = null;
    for (let h = 0; h < a; h++) {
        let f = r[h];
        c === null && ut(f) && (c = f,
        yI(e, n, h)),
        Ou(Rs(n, t), e, f.type)
    }
    bI(n, e.data.length, a),
    c?.viewProvidersResolver && c.viewProvidersResolver(c);
    for (let h = 0; h < a; h++) {
        let f = r[h];
        f.providersResolver && f.providersResolver(f)
    }
    let u = !1
      , l = !1
      , d = ug(e, t, a, null);
    a > 0 && (n.directiveToIndex = new Map);
    for (let h = 0; h < a; h++) {
        let f = r[h];
        if (n.mergedAttrs = vo(n.mergedAttrs, f.hostAttrs),
        EI(e, n, t, d, f),
        CI(d, f, o),
        s !== null && s.has(f)) {
            let[N,E] = s.get(f);
            n.directiveToIndex.set(f.type, [d, N + n.directiveStart, E + n.directiveStart])
        } else
            (i === null || !i.has(f)) && n.directiveToIndex.set(f.type, d);
        f.contentQueries !== null && (n.flags |= 4),
        (f.hostBindings !== null || f.hostAttrs !== null || f.hostVars !== 0) && (n.flags |= 64);
        let g = f.type.prototype;
        !u && (g.ngOnChanges || g.ngOnInit || g.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index),
        u = !0),
        !l && (g.ngOnChanges || g.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index),
        l = !0),
        d++
    }
    DI(e, n, i)
}
function DI(e, t, n) {
    for (let r = t.directiveStart; r < t.directiveEnd; r++) {
        let o = e.data[r];
        if (n === null || !n.has(o))
            lp(0, t, o, r),
            lp(1, t, o, r),
            fp(t, r, !1);
        else {
            let i = n.get(o);
            dp(0, t, i, r),
            dp(1, t, i, r),
            fp(t, r, !0)
        }
    }
}
function lp(e, t, n, r) {
    let o = e === 0 ? n.inputs : n.outputs;
    for (let i in o)
        if (o.hasOwnProperty(i)) {
            let s;
            e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {},
            s[i] ??= [],
            s[i].push(r),
            Fg(t, i)
        }
}
function dp(e, t, n, r) {
    let o = e === 0 ? n.inputs : n.outputs;
    for (let i in o)
        if (o.hasOwnProperty(i)) {
            let s = o[i], a;
            e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {},
            a[s] ??= [],
            a[s].push(r, i),
            Fg(t, s)
        }
}
function Fg(e, t) {
    t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16)
}
function fp(e, t, n) {
    let {attrs: r, inputs: o, hostDirectiveInputs: i} = e;
    if (r === null || !n && o === null || n && i === null || El(e)) {
        e.initialInputs ??= [],
        e.initialInputs.push(null);
        return
    }
    let s = null
      , a = 0;
    for (; a < r.length; ) {
        let c = r[a];
        if (c === 0) {
            a += 4;
            continue
        } else if (c === 5) {
            a += 2;
            continue
        } else if (typeof c == "number")
            break;
        if (!n && o.hasOwnProperty(c)) {
            let u = o[c];
            for (let l of u)
                if (l === t) {
                    s ??= [],
                    s.push(c, r[a + 1]);
                    break
                }
        } else if (n && i.hasOwnProperty(c)) {
            let u = i[c];
            for (let l = 0; l < u.length; l += 2)
                if (u[l] === t) {
                    s ??= [],
                    s.push(u[l + 1], r[a + 1]);
                    break
                }
        }
        a += 2
    }
    e.initialInputs ??= [],
    e.initialInputs.push(s)
}
function EI(e, t, n, r, o) {
    e.data[r] = o;
    let i = o.factory || (o.factory = Bt(o.type, !0))
      , s = new Nn(i,ut(o),me,null);
    e.blueprint[r] = s,
    n[r] = s,
    wI(e, t, r, ug(e, n, o.hostVars, nt), o)
}
function wI(e, t, n, r, o) {
    let i = o.hostBindings;
    if (i) {
        let s = e.hostBindingOpCodes;
        s === null && (s = e.hostBindingOpCodes = []);
        let a = ~t.index;
        II(s) != a && s.push(a),
        s.push(n, r, i)
    }
}
function II(e) {
    let t = e.length;
    for (; t > 0; ) {
        let n = e[--t];
        if (typeof n == "number" && n < 0)
            return n
    }
    return 0
}
function CI(e, t, n) {
    if (n) {
        if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++)
                n[t.exportAs[r]] = e;
        ut(t) && (n[""] = e)
    }
}
function bI(e, t, n) {
    e.flags |= 1,
    e.directiveStart = t,
    e.directiveEnd = t + n,
    e.providerIndexes = t
}
function Fl(e, t, n, r, o, i, s, a) {
    let c = t[C]
      , u = c.consts
      , l = ao(u, s)
      , d = Pl(c, e, n, r, l);
    return i && Pg(c, t, d, ao(u, a), o),
    d.mergedAttrs = vo(d.mergedAttrs, d.attrs),
    d.attrs !== null && up(d, d.attrs, !1),
    d.mergedAttrs !== null && up(d, d.mergedAttrs, !0),
    c.queries !== null && c.queries.elementStart(c, d),
    d
}
function Ll(e, t) {
    Np(e, t),
    Jc(t) && e.queries.elementEnd(t)
}
function jl(e) {
    return jg(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1
}
function Lg(e, t) {
    if (Array.isArray(e))
        for (let n = 0; n < e.length; n++)
            t(e[n]);
    else {
        let n = e[Symbol.iterator](), r;
        for (; !(r = n.next()).done; )
            t(r.value)
    }
}
function jg(e) {
    return e !== null && (typeof e == "function" || typeof e == "object")
}
function Ul(e, t, n) {
    return e[t] = n
}
function St(e, t, n) {
    if (n === nt)
        return !1;
    let r = e[t];
    return Object.is(r, n) ? !1 : (e[t] = n,
    !0)
}
function Bl(e, t, n, r) {
    let o = St(e, t, n);
    return St(e, t + 1, r) || o
}
function TI(e, t, n, r, o) {
    let i = Bl(e, t, n, r);
    return St(e, t + 2, o) || i
}
function bu(e, t, n) {
    return function r(o) {
        let i = r.__ngNativeEl__;
        i !== void 0 && gE(o, i);
        let s = Ct(e) ? Be(e.index, t) : t;
        kl(s, 5);
        let a = t[ge]
          , c = hp(t, a, n, o)
          , u = r.__ngNextListenerFn__;
        for (; u; )
            c = hp(t, a, u, o) && c,
            u = u.__ngNextListenerFn__;
        return c
    }
}
function hp(e, t, n, r) {
    let o = S(null);
    try {
        return B(P.OutputStart, t, n),
        n(r) !== !1
    } catch (i) {
        return Gw(e, i),
        !1
    } finally {
        B(P.OutputEnd, t, n),
        S(o)
    }
}
function SI(e, t, n, r, o, i, s, a) {
    let c = ar(e)
      , u = !1
      , l = null;
    if (!r && c && (l = MI(t, n, i, e.index)),
    l !== null) {
        let d = l.__ngLastListenerFn__ || l;
        d.__ngNextListenerFn__ = s,
        l.__ngLastListenerFn__ = s,
        u = !0
    } else {
        let d = Ke(e, n)
          , h = r ? r(d) : d;
        yE(n, h, i, a),
        r || (a.__ngNativeEl__ = d);
        let f = o.listen(h, i, a);
        if (!_I(i)) {
            let g = r ? N => r(Ue(N[e.index])) : e.index;
            Ug(g, t, n, i, a, f, !1)
        }
    }
    return u
}
function _I(e) {
    return e.startsWith("animation") || e.startsWith("transition")
}
function MI(e, t, n, r) {
    let o = e.cleanup;
    if (o != null)
        for (let i = 0; i < o.length - 1; i += 2) {
            let s = o[i];
            if (s === n && o[i + 1] === r) {
                let a = t[or]
                  , c = o[i + 2];
                return a && a.length > c ? a[c] : null
            }
            typeof s == "string" && (i += 2)
        }
    return null
}
function Ug(e, t, n, r, o, i, s) {
    let a = t.firstCreatePass ? au(t) : null
      , c = su(n)
      , u = c.length;
    c.push(o, i),
    a && a.push(r, e, u, (u + 1) * (s ? -1 : 1))
}
function pp(e, t, n, r, o, i) {
    let s = t[n]
      , a = t[C]
      , u = a.data[n].outputs[r]
      , d = s[u].subscribe(i);
    Ug(e.index, a, t, o, i, d, !0)
}
var Xu = Symbol("BINDING");
function Bg(e) {
    return e.debugInfo?.className || e.type.name || null
}
var ks = class extends No {
    ngModule;
    constructor(t) {
        super(),
        this.ngModule = t
    }
    resolveComponentFactory(t) {
        let n = zt(t);
        return new gr(n,this.ngModule)
    }
}
;
function NI(e) {
    return Object.keys(e).map(t => {
        let[n,r,o] = e[t]
          , i = {
            propName: n,
            templateName: t,
            isSignal: (r & Ws.SignalBased) !== 0
        };
        return o && (i.transform = o),
        i
    }
    )
}
function RI(e) {
    return Object.keys(e).map(t => ({
        propName: e[t],
        templateName: t
    }))
}
function AI(e, t, n) {
    let r = t instanceof q ? t : t?.injector;
    return r && e.getStandaloneInjector !== null && (r = e.getStandaloneInjector(r) || r),
    r ? new Ju(n,r) : n
}
function xI(e) {
    let t = e.get(Rn, null);
    if (t === null)
        throw new m(407,!1);
    let n = e.get(kg, null)
      , r = e.get(Et, null)
      , o = e.get(ht, null, {
        optional: !0
    });
    return {
        rendererFactory: t,
        sanitizer: n,
        changeDetectionScheduler: r,
        ngReflect: !1,
        tracingService: o
    }
}
function OI(e, t) {
    let n = Vg(e);
    return ng(t, n, n === "svg" ? Xc : n === "math" ? ih : null)
}
function kI(e) {
    if (e?.toLowerCase() === "script")
        throw new m(905,!1)
}
function Vg(e) {
    return (e.selectors[0][0] || "div").toLowerCase()
}
var gr = class extends Js {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() {
        return this.cachedInputs ??= NI(this.componentDef.inputs),
        this.cachedInputs
    }
    get outputs() {
        return this.cachedOutputs ??= RI(this.componentDef.outputs),
        this.cachedOutputs
    }
    constructor(t, n) {
        super(),
        this.componentDef = t,
        this.ngModule = n,
        this.componentType = t.type,
        this.selector = sw(t.selectors),
        this.ngContentSelectors = t.ngContentSelectors ?? [],
        this.isBoundToModule = !!n
    }
    create(t, n, r, o, i, s) {
        B(P.DynamicComponentStart);
        let a = S(null);
        try {
            let c = this.componentDef
              , u = AI(c, o || this.ngModule, t)
              , l = xI(u)
              , d = l.tracingService;
            return d && d.componentCreate ? d.componentCreate(Bg(c), () => this.createComponentRef(l, u, n, r, i, s)) : this.createComponentRef(l, u, n, r, i, s)
        } finally {
            S(a)
        }
    }
    createComponentRef(t, n, r, o, i, s) {
        let a = this.componentDef
          , c = PI(o, a, s, i)
          , u = t.rendererFactory.createRenderer(null, a)
          , l = o ? Ow(u, o, a.encapsulation, n) : OI(a, u);
        kI(l?.tagName);
        let d = s?.some(gp) || i?.some(g => typeof g != "function" && g.bindings.some(gp))
          , h = Il(null, c, null, 512 | cg(a), null, null, t, u, n, null, Zp(l, n, !0));
        h[ne] = l,
        fs(h);
        let f = null;
        try {
            let g = Fl(ne, h, 2, "#host", () => c.directiveRegistry, !0, 0);
            og(u, l, g),
            hr(l, h),
            Qs(c, h, g),
            pl(c, g, h),
            Ll(c, g),
            r !== void 0 && LI(g, this.ngContentSelectors, r),
            f = Be(g.index, h),
            h[ge] = f[ge],
            Ol(c, h, null)
        } catch (g) {
            throw f !== null && Pu(f),
            Pu(h),
            g
        } finally {
            B(P.DynamicComponentEnd),
            hs()
        }
        return new Ps(this.componentType,h,!!d)
    }
}
;
function PI(e, t, n, r) {
    let o = e ? ["ng-version", "21.2.18"] : aw(t.selectors[0])
      , i = null
      , s = null
      , a = 0;
    if (n)
        for (let l of n)
            a += l[Xu].requiredVars,
            l.create && (l.targetIdx = 0,
            (i ??= []).push(l)),
            l.update && (l.targetIdx = 0,
            (s ??= []).push(l));
    if (r)
        for (let l = 0; l < r.length; l++) {
            let d = r[l];
            if (typeof d != "function")
                for (let h of d.bindings) {
                    a += h[Xu].requiredVars;
                    let f = l + 1;
                    h.create && (h.targetIdx = f,
                    (i ??= []).push(h)),
                    h.update && (h.targetIdx = f,
                    (s ??= []).push(h))
                }
        }
    let c = [t];
    if (r)
        for (let l of r) {
            let d = typeof l == "function" ? l : l.type
              , h = Vc(d);
            c.push(h)
        }
    return wl(0, null, FI(i, s), 1, a, c, null, null, null, [o], null)
}
function FI(e, t) {
    return !e && !t ? null : n => {
        if (n & 1 && e)
            for (let r of e)
                r.create();
        if (n & 2 && t)
            for (let r of t)
                r.update()
    }
}
function gp(e) {
    let t = e[Xu].kind;
    return t === "input" || t === "twoWay"
}
var Ps = class extends xg {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, r) {
        super(),
        this._rootLView = n,
        this._hasInputBindings = r,
        this._tNode = tu(n[C], ne),
        this.location = yr(this._tNode, n),
        this.instance = Be(this._tNode.index, n)[ge],
        this.hostView = this.changeDetectorRef = new Xt(n,void 0),
        this.componentType = t
    }
    setInput(t, n) {
        this._hasInputBindings;
        let r = this._tNode;
        if (this.previousInputValues ??= new Map,
        this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
            return;
        let o = this._rootLView
          , i = xl(r, o[C], o, t, n);
        this.previousInputValues.set(t, n);
        let s = Be(r.index, o);
        kl(s, 1)
    }
    get injector() {
        return new Mn(this._tNode,this._rootLView)
    }
    destroy() {
        this.hostView.destroy()
    }
    onDestroy(t) {
        this.hostView.onDestroy(t)
    }
}
;
function LI(e, t, n) {
    let r = e.projection = [];
    for (let o = 0; o < t.length; o++) {
        let i = n[o];
        r.push(i != null && i.length ? Array.from(i) : null)
    }
}
var Nt = ( () => {
    class e {
        static __NG_ELEMENT_ID__ = jI
    }
    return e
}
)();
function jI() {
    let e = be();
    return Hg(e, A())
}
var el = class e extends Nt {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, r) {
        super(),
        this._lContainer = t,
        this._hostTNode = n,
        this._hostLView = r
    }
    get element() {
        return yr(this._hostTNode, this._hostLView)
    }
    get injector() {
        return new Mn(this._hostTNode,this._hostLView)
    }
    get parentInjector() {
        let t = ll(this._hostTNode, this._hostLView);
        if (Ap(t)) {
            let n = Ms(t, this._hostLView)
              , r = _s(t)
              , o = n[C].data[r + 8];
            return new Mn(o,n)
        } else
            return new Mn(null,this._hostLView)
    }
    clear() {
        for (; this.length > 0; )
            this.remove(this.length - 1)
    }
    get(t) {
        let n = mp(this._lContainer);
        return n !== null && n[t] || null
    }
    get length() {
        return this._lContainer.length - Ce
    }
    createEmbeddedView(t, n, r) {
        let o, i;
        typeof r == "number" ? o = r : r != null && (o = r.index,
        i = r.injector);
        let s = cp(this._lContainer, t.ssrId)
          , a = t.createEmbeddedViewImpl(n || {}, i, s);
        return this.insertImpl(a, o, ap(this._hostTNode, s)),
        a
    }
    createComponent(t, n, r, o, i, s, a) {
        let c = t && !$D(t), u;
        if (c)
            u = n;
        else {
            let E = n || {};
            u = E.index,
            r = E.injector,
            o = E.projectableNodes,
            i = E.environmentInjector || E.ngModuleRef,
            s = E.directives,
            a = E.bindings
        }
        let l = c ? t : new gr(zt(t))
          , d = r || this.parentInjector;
        if (!i && l.ngModule == null) {
            let w = (c ? d : this.parentInjector).get(q, null);
            w && (i = w)
        }
        let h = zt(l.componentType ?? {})
          , f = cp(this._lContainer, h?.id ?? null)
          , g = f?.firstChild ?? null
          , N = l.create(d, o, g, i, s, a);
        return this.insertImpl(N.hostView, u, ap(this._hostTNode, f)),
        N
    }
    insert(t, n) {
        return this.insertImpl(t, n, !0)
    }
    insertImpl(t, n, r) {
        let o = t._lView;
        if (ah(o)) {
            let a = this.indexOf(t);
            if (a !== -1)
                this.detach(a);
            else {
                let c = o[oe]
                  , u = new e(c,c[Le],c[oe]);
                u.detach(u.indexOf(t))
            }
        }
        let i = this._adjustIndex(n)
          , s = this._lContainer;
        return cI(s, o, i, r),
        t.attachToViewContainerRef(),
        zc(Tu(s), i, t),
        t
    }
    move(t, n) {
        return this.insert(t, n)
    }
    indexOf(t) {
        let n = mp(this._lContainer);
        return n !== null ? n.indexOf(t) : -1
    }
    remove(t) {
        let n = this._adjustIndex(t, -1)
          , r = Qu(this._lContainer, n);
        r && (to(Tu(this._lContainer), n),
        gg(r[C], r))
    }
    detach(t) {
        let n = this._adjustIndex(t, -1)
          , r = Qu(this._lContainer, n);
        return r && to(Tu(this._lContainer), n) != null ? new Xt(r) : null
    }
    _adjustIndex(t, n=0) {
        return t ?? this.length + n
    }
}
;
function mp(e) {
    return e[io]
}
function Tu(e) {
    return e[io] || (e[io] = [])
}
function Hg(e, t) {
    let n, r = t[e.index];
    return Qe(r) ? n = r : (n = Rg(r, t, null, e),
    t[e.index] = n,
    Cl(t, n)),
    BI(n, t, e, r),
    new el(n,e,t)
}
function UI(e, t) {
    let n = e[z]
      , r = n.createComment("")
      , o = Ke(t, e)
      , i = n.parentNode(o);
    return xs(n, i, r, n.nextSibling(o), !1),
    r
}
var BI = $I
  , VI = () => !1;
function HI(e, t, n) {
    return VI(e, t, n)
}
function $I(e, t, n, r) {
    if (e[Qt])
        return;
    let o;
    n.type & 8 ? o = Ue(r) : o = UI(t, n),
    e[Qt] = o
}
var tl = class e {
    queryList;
    matches = null;
    constructor(t) {
        this.queryList = t
    }
    clone() {
        return new e(this.queryList)
    }
    setDirty() {
        this.queryList.setDirty()
    }
}
  , nl = class e {
    queries;
    constructor(t=[]) {
        this.queries = t
    }
    createEmbeddedView(t) {
        let n = t.queries;
        if (n !== null) {
            let r = t.contentQueries !== null ? t.contentQueries[0] : n.length
              , o = [];
            for (let i = 0; i < r; i++) {
                let s = n.getByIndex(i)
                  , a = this.queries[s.indexInDeclarationView];
                o.push(a.clone())
            }
            return new e(o)
        }
        return null
    }
    insertView(t) {
        this.dirtyQueriesWithMatches(t)
    }
    detachView(t) {
        this.dirtyQueriesWithMatches(t)
    }
    finishViewCreation(t) {
        this.dirtyQueriesWithMatches(t)
    }
    dirtyQueriesWithMatches(t) {
        for (let n = 0; n < this.queries.length; n++)
            Vl(t, n).matches !== null && this.queries[n].setDirty()
    }
}
  , rl = class {
    flags;
    read;
    predicate;
    constructor(t, n, r=null) {
        this.flags = n,
        this.read = r,
        typeof t == "string" ? this.predicate = KI(t) : this.predicate = t
    }
}
  , ol = class e {
    queries;
    constructor(t=[]) {
        this.queries = t
    }
    elementStart(t, n) {
        for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n)
    }
    elementEnd(t) {
        for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t)
    }
    embeddedTView(t) {
        let n = null;
        for (let r = 0; r < this.length; r++) {
            let o = n !== null ? n.length : 0
              , i = this.getByIndex(r).embeddedTView(t, o);
            i && (i.indexInDeclarationView = r,
            n !== null ? n.push(i) : n = [i])
        }
        return n !== null ? new e(n) : null
    }
    template(t, n) {
        for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n)
    }
    getByIndex(t) {
        return this.queries[t]
    }
    get length() {
        return this.queries.length
    }
    track(t) {
        this.queries.push(t)
    }
}
  , il = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n=-1) {
        this.metadata = t,
        this._declarationNodeIndex = n
    }
    elementStart(t, n) {
        this.isApplyingToNode(n) && this.matchTNode(t, n)
    }
    elementEnd(t) {
        this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
    }
    template(t, n) {
        this.elementStart(t, n)
    }
    embeddedTView(t, n) {
        return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0,
        this.addMatch(-t.index, n),
        new e(this.metadata)) : null
    }
    isApplyingToNode(t) {
        if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
            let n = this._declarationNodeIndex
              , r = t.parent;
            for (; r !== null && r.type & 8 && r.index !== n; )
                r = r.parent;
            return n === (r !== null ? r.index : -1)
        }
        return this._appliesToNextNode
    }
    matchTNode(t, n) {
        let r = this.metadata.predicate;
        if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
                let i = r[o];
                this.matchTNodeWithReadOption(t, n, zI(n, i)),
                this.matchTNodeWithReadOption(t, n, bs(n, t, i, !1, !1))
            }
        else
            r === en ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, bs(n, t, r, !1, !1))
    }
    matchTNodeWithReadOption(t, n, r) {
        if (r !== null) {
            let o = this.metadata.read;
            if (o !== null)
                if (o === vr || o === Nt || o === en && n.type & 4)
                    this.addMatch(n.index, -2);
                else {
                    let i = bs(n, t, o, !1, !1);
                    i !== null && this.addMatch(n.index, i)
                }
            else
                this.addMatch(n.index, r)
        }
    }
    addMatch(t, n) {
        this.matches === null ? this.matches = [t, n] : this.matches.push(t, n)
    }
}
;
function zI(e, t) {
    let n = e.localNames;
    if (n !== null) {
        for (let r = 0; r < n.length; r += 2)
            if (n[r] === t)
                return n[r + 1]
    }
    return null
}
function GI(e, t) {
    return e.type & 11 ? yr(e, t) : e.type & 4 ? Ks(e, t) : null
}
function WI(e, t, n, r) {
    return n === -1 ? GI(t, e) : n === -2 ? qI(e, t, r) : Do(e, e[C], n, t)
}
function qI(e, t, n) {
    if (n === vr)
        return yr(t, e);
    if (n === en)
        return Ks(t, e);
    if (n === Nt)
        return Hg(t, e)
}
function $g(e, t, n, r) {
    let o = t[ct].queries[r];
    if (o.matches === null) {
        let i = e.data
          , s = n.matches
          , a = [];
        for (let c = 0; s !== null && c < s.length; c += 2) {
            let u = s[c];
            if (u < 0)
                a.push(null);
            else {
                let l = i[u];
                a.push(WI(t, l, s[c + 1], n.metadata.read))
            }
        }
        o.matches = a
    }
    return o.matches
}
function sl(e, t, n, r) {
    let o = e.queries.getByIndex(n)
      , i = o.matches;
    if (i !== null) {
        let s = $g(e, t, o, n);
        for (let a = 0; a < i.length; a += 2) {
            let c = i[a];
            if (c > 0)
                r.push(s[a / 2]);
            else {
                let u = i[a + 1]
                  , l = t[-c];
                for (let d = Ce; d < l.length; d++) {
                    let h = l[d];
                    h[Zt] === h[oe] && sl(h[C], h, u, r)
                }
                if (l[Tn] !== null) {
                    let d = l[Tn];
                    for (let h = 0; h < d.length; h++) {
                        let f = d[h];
                        sl(f[C], f, u, r)
                    }
                }
            }
        }
    }
    return r
}
function ZI(e, t) {
    return e[ct].queries[t].queryList
}
function YI(e, t, n) {
    let r = new As((n & 4) === 4);
    return lh(e, t, r, r.destroy),
    (t[ct] ??= new nl).queries.push(new tl(r)) - 1
}
function QI(e, t, n) {
    let r = le();
    return r.firstCreatePass && (JI(r, new rl(e,t,n), -1),
    (t & 2) === 2 && (r.staticViewQueries = !0)),
    YI(r, A(), t)
}
function KI(e) {
    return e.split(",").map(t => t.trim())
}
function JI(e, t, n) {
    e.queries === null && (e.queries = new ol),
    e.queries.track(new il(t,n))
}
function Vl(e, t) {
    return e.queries.getByIndex(t)
}
function XI(e, t) {
    let n = e[C]
      , r = Vl(n, t);
    return r.crossesNgTemplate ? sl(n, e, t, []) : $g(n, e, r, t)
}
var An = class {
}
  , Xs = class {
}
;
var Fs = class extends An {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new ks(this);
    constructor(t, n, r, o=!0) {
        super(),
        this.ngModuleType = t,
        this._parent = n;
        let i = Bc(t);
        this._bootstrapComponents = sg(i.bootstrap),
        this._r3Injector = mu(t, n, [{
            provide: An,
            useValue: this
        }, {
            provide: No,
            useValue: this.componentFactoryResolver
        }, ...r], Kr(t), new Set(["environment"])),
        o && this.resolveInjectorInitializers()
    }
    resolveInjectorInitializers() {
        this._r3Injector.resolveInjectorInitializers(),
        this.instance = this._r3Injector.get(this.ngModuleType)
    }
    get injector() {
        return this._r3Injector
    }
    destroy() {
        let t = this._r3Injector;
        !t.destroyed && t.destroy(),
        this.destroyCbs.forEach(n => n()),
        this.destroyCbs = null
    }
    onDestroy(t) {
        this.destroyCbs.push(t)
    }
}
  , Ls = class extends Xs {
    moduleType;
    constructor(t) {
        super(),
        this.moduleType = t
    }
    create(t) {
        return new Fs(this.moduleType,t,[])
    }
}
;
var wo = class extends An {
    injector;
    componentFactoryResolver = new ks(this);
    instance = null;
    constructor(t) {
        super();
        let n = new vn([...t.providers, {
            provide: An,
            useValue: this
        }, {
            provide: No,
            useValue: this.componentFactoryResolver
        }],t.parent || ro(),t.debugName,new Set(["environment"]));
        this.injector = n,
        t.runEnvironmentInitializers && n.resolveInjectorInitializers()
    }
    destroy() {
        this.injector.destroy()
    }
    onDestroy(t) {
        this.injector.onDestroy(t)
    }
}
;
function Ro(e, t, n=null) {
    return new wo({
        providers: e,
        parent: t,
        debugName: n,
        runEnvironmentInitializers: !0
    }).injector
}
var eC = ( () => {
    class e {
        _injector;
        cachedInjectors = new Map;
        constructor(n) {
            this._injector = n
        }
        getOrCreateStandaloneInjector(n) {
            if (!n.standalone)
                return null;
            if (!this.cachedInjectors.has(n)) {
                let r = qc(!1, n.type)
                  , o = r.length > 0 ? Ro([r], this._injector, "") : null;
                this.cachedInjectors.set(n, o)
            }
            return this.cachedInjectors.get(n)
        }
        ngOnDestroy() {
            try {
                for (let n of this.cachedInjectors.values())
                    n !== null && n.destroy()
            } finally {
                this.cachedInjectors.clear()
            }
        }
        static \u0275prov = v({
            token: e,
            providedIn: "environment",
            factory: () => new e(I(q))
        })
    }
    return e
}
)();
function Hl(e) {
    return Co( () => {
        let t = zg(e)
          , n = x(y({}, t), {
            decls: e.decls,
            vars: e.vars,
            template: e.template,
            consts: e.consts || null,
            ngContentSelectors: e.ngContentSelectors,
            onPush: e.changeDetection === dl.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            dependencies: t.standalone && e.dependencies || null,
            getStandaloneInjector: t.standalone ? o => o.get(eC).getOrCreateStandaloneInjector(n) : null,
            getExternalStyles: null,
            signals: e.signals ?? !1,
            data: e.data || {},
            encapsulation: e.encapsulation || et.Emulated,
            styles: e.styles || Re,
            _: null,
            schemas: e.schemas || null,
            tView: null,
            id: ""
        });
        t.standalone && Zs("NgStandalone"),
        Gg(n);
        let r = e.dependencies;
        return n.directiveDefs = yp(r, tC),
        n.pipeDefs = yp(r, zf),
        n.id = oC(n),
        n
    }
    )
}
function tC(e) {
    return zt(e) || Vc(e)
}
function Dr(e) {
    return Co( () => ({
        type: e.type,
        bootstrap: e.bootstrap || Re,
        declarations: e.declarations || Re,
        imports: e.imports || Re,
        exports: e.exports || Re,
        transitiveCompileScopes: null,
        schemas: e.schemas || null,
        id: e.id || null
    }))
}
function nC(e, t) {
    if (e == null)
        return Gt;
    let n = {};
    for (let r in e)
        if (e.hasOwnProperty(r)) {
            let o = e[r], i, s, a, c;
            Array.isArray(o) ? (a = o[0],
            i = o[1],
            s = o[2] ?? i,
            c = o[3] || null) : (i = o,
            s = o,
            a = Ws.None,
            c = null),
            n[i] = [r, a, c],
            t[i] = s
        }
    return n
}
function rC(e) {
    if (e == null)
        return Gt;
    let t = {};
    for (let n in e)
        e.hasOwnProperty(n) && (t[e[n]] = n);
    return t
}
function Er(e) {
    return Co( () => {
        let t = zg(e);
        return Gg(t),
        t
    }
    )
}
function On(e) {
    return {
        type: e.type,
        name: e.name,
        factory: null,
        pure: e.pure !== !1,
        standalone: e.standalone ?? !0,
        onDestroy: e.type.prototype.ngOnDestroy || null
    }
}
function zg(e) {
    let t = {};
    return {
        type: e.type,
        providersResolver: null,
        viewProvidersResolver: null,
        factory: null,
        hostBindings: e.hostBindings || null,
        hostVars: e.hostVars || 0,
        hostAttrs: e.hostAttrs || null,
        contentQueries: e.contentQueries || null,
        declaredInputs: t,
        inputConfig: e.inputs || Gt,
        exportAs: e.exportAs || null,
        standalone: e.standalone ?? !0,
        signals: e.signals === !0,
        selectors: e.selectors || Re,
        viewQuery: e.viewQuery || null,
        features: e.features || null,
        setInput: null,
        resolveHostDirectives: null,
        hostDirectives: null,
        controlDef: null,
        inputs: nC(e.inputs, t),
        outputs: rC(e.outputs),
        debugInfo: null
    }
}
function Gg(e) {
    e.features?.forEach(t => t(e))
}
function yp(e, t) {
    return e ? () => {
        let n = typeof e == "function" ? e() : e
          , r = [];
        for (let o of n) {
            let i = t(o);
            i !== null && r.push(i)
        }
        return r
    }
    : null
}
function oC(e) {
    let t = 0
      , n = typeof e.consts == "function" ? "" : e.consts
      , r = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery];
    for (let i of r.join("|"))
        t = Math.imul(31, t) + i.charCodeAt(0) << 0;
    return t += 2147483648,
    "c" + t
}
function iC(e) {
    return Object.getPrototypeOf(e.prototype).constructor
}
function Wg(e) {
    let t = iC(e.type)
      , n = !0
      , r = [e];
    for (; t && t !== Function.prototype && t !== Object.prototype; ) {
        let o, i = Object.hasOwn(t, Xr) ? t[Xr] : void 0, s = Object.hasOwn(t, eo) ? t[eo] : void 0;
        if (ut(e))
            o = i ?? s;
        else {
            if (i)
                throw new m(903,!1);
            o = s
        }
        if (o) {
            if (n) {
                r.push(o);
                let c = e;
                c.inputs = Su(e.inputs),
                c.declaredInputs = Su(e.declaredInputs),
                c.outputs = Su(e.outputs);
                let u = o.hostBindings;
                u && lC(e, u);
                let l = o.viewQuery
                  , d = o.contentQueries;
                if (l && cC(e, l),
                d && uC(e, d),
                sC(e, o),
                $f(e.outputs, o.outputs),
                ut(o) && o.data.animation) {
                    let h = e.data;
                    h.animation = (h.animation || []).concat(o.data.animation)
                }
            }
            let a = o.features;
            if (a)
                for (let c = 0; c < a.length; c++) {
                    let u = a[c];
                    u && u.ngInherit && u(e),
                    u === Wg && (n = !1)
                }
        }
        t = Object.getPrototypeOf(t)
    }
    aC(r)
}
function sC(e, t) {
    for (let n in t.inputs) {
        if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
            continue;
        let r = t.inputs[n];
        r !== void 0 && (e.inputs[n] = r,
        e.declaredInputs[n] = t.declaredInputs[n])
    }
}
function aC(e) {
    let t = 0
      , n = null;
    for (let r = e.length - 1; r >= 0; r--) {
        let o = e[r];
        o.hostVars = t += o.hostVars,
        o.hostAttrs = vo(o.hostAttrs, n = vo(n, o.hostAttrs))
    }
}
function Su(e) {
    return e === Gt ? {} : e === Re ? [] : e
}
function cC(e, t) {
    let n = e.viewQuery;
    n ? e.viewQuery = (r, o) => {
        t(r, o),
        n(r, o)
    }
    : e.viewQuery = t
}
function uC(e, t) {
    let n = e.contentQueries;
    n ? e.contentQueries = (r, o, i) => {
        t(r, o, i),
        n(r, o, i)
    }
    : e.contentQueries = t
}
function lC(e, t) {
    let n = e.hostBindings;
    n ? e.hostBindings = (r, o) => {
        t(r, o),
        n(r, o)
    }
    : e.hostBindings = t
}
function dC(e, t, n, r, o, i, s, a) {
    if (n.firstCreatePass) {
        e.mergedAttrs = vo(e.mergedAttrs, e.attrs);
        let l = e.tView = wl(2, e, o, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
        n.queries !== null && (n.queries.template(n, e),
        l.queries = n.queries.embeddedTView(e))
    }
    a && (e.flags |= a),
    ur(e, !1);
    let c = hC(n, t, e, r);
    gs() && Ml(n, t, c, e),
    hr(c, t);
    let u = Rg(c, t, c, e);
    t[r + ne] = u,
    Cl(t, u),
    HI(u, e, t)
}
function fC(e, t, n, r, o, i, s, a, c, u, l) {
    let d = n + ne, h;
    return t.firstCreatePass ? (h = Pl(t, d, 4, s || null, a || null),
    cs() && Pg(t, e, h, ao(t.consts, u), Al),
    Np(t, h)) : h = t.data[d],
    dC(h, e, t, n, r, o, i, c),
    ar(h) && Qs(t, e, h),
    u != null && Rl(e, h, l),
    h
}
function qg(e, t, n, r, o, i, s, a) {
    let c = A()
      , u = le()
      , l = ao(u.consts, i);
    return fC(c, u, e, t, n, r, o, l, void 0, s, a),
    qg
}
var hC = pC;
function pC(e, t, n, r) {
    return lo(!0),
    t[z].createComment("")
}
var ea = ( () => {
    class e {
        log(n) {
            console.log(n)
        }
        warn(n) {
            console.warn(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "platform"
        })
    }
    return e
}
)();
function $l(e) {
    return typeof e == "function" && e[pe] !== void 0
}
function zl(e) {
    return $l(e) && typeof e.set == "function"
}
var Gl = new D("");
function kn(e) {
    return !!e && typeof e.then == "function"
}
function ta(e) {
    return !!e && typeof e.subscribe == "function"
}
var Zg = new D("");
var Wl = ( () => {
    class e {
        resolve;
        reject;
        initialized = !1;
        done = !1;
        donePromise = new Promise( (n, r) => {
            this.resolve = n,
            this.reject = r
        }
        );
        appInits = p(Zg, {
            optional: !0
        }) ?? [];
        injector = p(Se);
        constructor() {}
        runInitializers() {
            if (this.initialized)
                return;
            let n = [];
            for (let o of this.appInits) {
                let i = ie(this.injector, o);
                if (kn(i))
                    n.push(i);
                else if (ta(i)) {
                    let s = new Promise( (a, c) => {
                        i.subscribe({
                            complete: a,
                            error: c
                        })
                    }
                    );
                    n.push(s)
                }
            }
            let r = () => {
                this.done = !0,
                this.resolve()
            }
            ;
            Promise.all(n).then( () => {
                r()
            }
            ).catch(o => {
                this.reject(o)
            }
            ),
            n.length === 0 && r(),
            this.initialized = !0
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , na = new D("");
function Yg() {
    mc( () => {
        let e = "";
        throw new m(600,e)
    }
    )
}
function Qg(e) {
    return e.isBoundToModule
}
var gC = 10;
var Pn = ( () => {
    class e {
        _runningTick = !1;
        _destroyed = !1;
        _destroyListeners = [];
        _views = [];
        internalErrorHandler = p(xe);
        afterRenderManager = p(Tl);
        zonelessEnabled = p(ho);
        rootEffectScheduler = p(ys);
        dirtyFlags = 0;
        tracingSnapshot = null;
        allTestViews = new Set;
        autoDetectTestViews = new Set;
        includeAllTestViews = !1;
        afterTick = new ae;
        get allViews() {
            return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]
        }
        get destroyed() {
            return this._destroyed
        }
        componentTypes = [];
        components = [];
        internalPendingTask = p(bt);
        get isStable() {
            return this.internalPendingTask.hasPendingTasksObservable.pipe(k(n => !n))
        }
        constructor() {
            p(ht, {
                optional: !0
            })
        }
        whenStable() {
            let n;
            return new Promise(r => {
                n = this.isStable.subscribe({
                    next: o => {
                        o && r()
                    }
                })
            }
            ).finally( () => {
                n.unsubscribe()
            }
            )
        }
        _injector = p(q);
        _rendererFactory = null;
        get injector() {
            return this._injector
        }
        bootstrap(n, r) {
            return this.bootstrapImpl(n, r)
        }
        bootstrapImpl(n, r, o=Se.NULL) {
            return this._injector.get(Ie).run( () => {
                B(P.BootstrapComponentStart);
                let s = n instanceof Js;
                if (!this._injector.get(Wl).done) {
                    let g = "";
                    throw new m(405,g)
                }
                let c;
                s ? c = n : c = this._injector.get(No).resolveComponentFactory(n),
                this.componentTypes.push(c.componentType);
                let u = Qg(c) ? void 0 : this._injector.get(An)
                  , l = r || c.selector
                  , d = c.create(o, [], l, u)
                  , h = d.location.nativeElement
                  , f = d.injector.get(Gl, null);
                return f?.registerApplication(h),
                d.onDestroy( () => {
                    this.detachView(d.hostView),
                    yo(this.components, d),
                    f?.unregisterApplication(h)
                }
                ),
                this._loadComponent(d),
                B(P.BootstrapComponentEnd, d),
                d
            }
            )
        }
        tick() {
            this.zonelessEnabled || (this.dirtyFlags |= 1),
            this._tick()
        }
        _tick() {
            B(P.ChangeDetectionStart),
            this.tracingSnapshot !== null ? this.tracingSnapshot.run(qs.CHANGE_DETECTION, this.tickImpl) : this.tickImpl()
        }
        tickImpl = () => {
            if (this._runningTick)
                throw B(P.ChangeDetectionEnd),
                new m(101,!1);
            let n = S(null);
            try {
                this._runningTick = !0,
                this.synchronize()
            } finally {
                this._runningTick = !1,
                this.tracingSnapshot?.dispose(),
                this.tracingSnapshot = null,
                S(n),
                this.afterTick.next(),
                B(P.ChangeDetectionEnd)
            }
        }
        ;
        synchronize() {
            this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(Rn, null, {
                optional: !0
            }));
            let n = 0;
            for (; this.dirtyFlags !== 0 && n++ < gC; ) {
                B(P.ChangeDetectionSyncStart);
                try {
                    this.synchronizeOnce()
                } finally {
                    B(P.ChangeDetectionSyncEnd)
                }
            }
        }
        synchronizeOnce() {
            this.dirtyFlags & 16 && (this.dirtyFlags &= -17,
            this.rootEffectScheduler.flush());
            let n = !1;
            if (this.dirtyFlags & 7) {
                let r = !!(this.dirtyFlags & 1);
                this.dirtyFlags &= -8,
                this.dirtyFlags |= 8;
                for (let {_lView: o} of this.allViews) {
                    if (!r && !co(o))
                        continue;
                    let i = r && !this.zonelessEnabled ? 0 : 1;
                    Sg(o, i),
                    n = !0
                }
                if (this.dirtyFlags &= -5,
                this.syncDirtyFlagsWithViews(),
                this.dirtyFlags & 23)
                    return
            }
            n || (this._rendererFactory?.begin?.(),
            this._rendererFactory?.end?.()),
            this.dirtyFlags & 8 && (this.dirtyFlags &= -9,
            this.afterRenderManager.execute()),
            this.syncDirtyFlagsWithViews()
        }
        syncDirtyFlagsWithViews() {
            if (this.allViews.some( ({_lView: n}) => co(n))) {
                this.dirtyFlags |= 2;
                return
            } else
                this.dirtyFlags &= -8
        }
        attachView(n) {
            let r = n;
            this._views.push(r),
            r.attachToAppRef(this)
        }
        detachView(n) {
            let r = n;
            yo(this._views, r),
            r.detachFromAppRef()
        }
        _loadComponent(n) {
            this.attachView(n.hostView);
            try {
                this.tick()
            } catch (o) {
                this.internalErrorHandler(o)
            }
            this.components.push(n),
            this._injector.get(na, []).forEach(o => o(n))
        }
        ngOnDestroy() {
            if (!this._destroyed)
                try {
                    this._destroyListeners.forEach(n => n()),
                    this._views.slice().forEach(n => n.destroy())
                } finally {
                    this._destroyed = !0,
                    this._views = [],
                    this._destroyListeners = []
                }
        }
        onDestroy(n) {
            return this._destroyListeners.push(n),
            () => yo(this._destroyListeners, n)
        }
        destroy() {
            if (this._destroyed)
                throw new m(406,!1);
            let n = this._injector;
            n.destroy && !n.destroyed && n.destroy()
        }
        get viewCount() {
            return this._views.length
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function yo(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
function Kg(e, t, n, r) {
    let o = A()
      , i = uo();
    if (St(o, i, t)) {
        let s = le()
          , a = ps();
        Hw(a, o, e, t, n, r)
    }
    return Kg
}
function Jg(e, t, n) {
    let r = A()
      , o = uo();
    if (St(r, o, t)) {
        let i = le()
          , s = ps();
        vg(s, r, e, t, r[z], n)
    }
    return Jg
}
function vp(e, t, n, r, o) {
    xl(t, e, n, o ? "class" : "style", r)
}
function js(e, t, n, r) {
    let o = A()
      , i = o[C]
      , s = e + ne
      , a = i.firstCreatePass ? Fl(s, o, 2, t, Al, cs(), n, r) : i.data[s];
    if (Ct(a)) {
        let c = o[Ye].tracingService;
        if (c && c.componentCreate) {
            let u = i.data[a.directiveStart + a.componentOffset];
            return c.componentCreate(Bg(u), () => (Dp(e, t, o, a, r),
            js))
        }
    }
    return Dp(e, t, o, a, r),
    js
}
function Dp(e, t, n, r, o) {
    if (Dg(r, n, e, t, mC),
    ar(r)) {
        let i = n[C];
        Qs(i, n, r),
        pl(i, r, n)
    }
    o != null && Rl(n, r)
}
function ql() {
    let e = le()
      , t = be()
      , n = Eg(t);
    return e.firstCreatePass && Ll(e, n),
    gh(n) && mh(),
    hh(),
    n.classesWithoutHost != null && YD(n) && vp(e, n, A(), n.classesWithoutHost, !0),
    n.stylesWithoutHost != null && QD(n) && vp(e, n, A(), n.stylesWithoutHost, !1),
    ql
}
function ra(e, t, n, r) {
    return js(e, t, n, r),
    ql(),
    ra
}
var mC = (e, t, n, r, o) => (lo(!0),
ng(t[z], r, gu()));
function Xg(e, t, n) {
    let r = A()
      , o = r[C]
      , i = e + ne
      , s = o.firstCreatePass ? Fl(i, r, 8, "ng-container", Al, cs(), t, n) : o.data[i];
    if (Dg(s, r, e, "ng-container", yC),
    ar(s)) {
        let a = r[C];
        Qs(a, r, s),
        pl(a, s, r)
    }
    return n != null && Rl(r, s),
    Xg
}
function em() {
    let e = le()
      , t = be()
      , n = Eg(t);
    return e.firstCreatePass && Ll(e, n),
    em
}
var yC = (e, t, n, r, o) => (lo(!0),
$E(t[z], ""));
function vC() {
    return A()
}
var po = void 0;
function DC(e) {
    let t = Math.floor(Math.abs(e))
      , n = e.toString().replace(/^[^.]*\.?/, "").length;
    return t === 1 && n === 0 ? 1 : 5
}
var EC = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], po, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], po, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", po, po, po], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", DC]
  , _u = Object.create(null);
function _e(e) {
    let t = wC(e)
      , n = Ep(t);
    if (n)
        return n;
    let r = t.split("-")[0];
    if (n = Ep(r),
    n)
        return n;
    if (r === "en")
        return EC;
    throw new m(701,!1)
}
function Ep(e) {
    if (!(e in _u)) {
        let t = Pe.ng && Pe.ng.common && Pe.ng.common.locales && Pe.ng.common.locales[e];
        return t !== void 0 && (_u[e] = t),
        t
    }
    return _u[e]
}
var Y = (function(e) {
    return e[e.LocaleId = 0] = "LocaleId",
    e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat",
    e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone",
    e[e.DaysFormat = 3] = "DaysFormat",
    e[e.DaysStandalone = 4] = "DaysStandalone",
    e[e.MonthsFormat = 5] = "MonthsFormat",
    e[e.MonthsStandalone = 6] = "MonthsStandalone",
    e[e.Eras = 7] = "Eras",
    e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek",
    e[e.WeekendRange = 9] = "WeekendRange",
    e[e.DateFormat = 10] = "DateFormat",
    e[e.TimeFormat = 11] = "TimeFormat",
    e[e.DateTimeFormat = 12] = "DateTimeFormat",
    e[e.NumberSymbols = 13] = "NumberSymbols",
    e[e.NumberFormats = 14] = "NumberFormats",
    e[e.CurrencyCode = 15] = "CurrencyCode",
    e[e.CurrencySymbol = 16] = "CurrencySymbol",
    e[e.CurrencyName = 17] = "CurrencyName",
    e[e.Currencies = 18] = "Currencies",
    e[e.Directionality = 19] = "Directionality",
    e[e.PluralCase = 20] = "PluralCase",
    e[e.ExtraData = 21] = "ExtraData",
    e
}
)(Y || {});
function wC(e) {
    return e.toLowerCase().replace(/_/g, "-")
}
var Ao = "en-US";
var IC = Ao;
function tm(e) {
    typeof e == "string" && (IC = e.toLowerCase().replace(/_/g, "-"))
}
function nm(e, t, n) {
    let r = A()
      , o = le()
      , i = be();
    return rm(o, r, r[z], i, e, t, n),
    nm
}
function rm(e, t, n, r, o, i, s) {
    let a = !0
      , c = null;
    if ((r.type & 3 || s) && (c ??= bu(r, t, i),
    SI(r, e, t, s, n, o, i, c) && (a = !1)),
    a) {
        let u = r.outputs?.[o]
          , l = r.hostDirectiveOutputs?.[o];
        if (l && l.length)
            for (let d = 0; d < l.length; d += 2) {
                let h = l[d]
                  , f = l[d + 1];
                c ??= bu(r, t, i),
                pp(r, t, h, f, o, c)
            }
        if (u && u.length)
            for (let d of u)
                c ??= bu(r, t, i),
                pp(r, t, d, o, o, c)
    }
}
function CC(e=1) {
    return Ah(e)
}
function om(e, t, n) {
    return QI(e, t, n),
    om
}
function bC(e) {
    let t = A()
      , n = le()
      , r = fu();
    ds(r + 1);
    let o = Vl(n, r);
    if (e.dirty && sh(t) === ((o.metadata.flags & 2) === 2)) {
        if (o.matches === null)
            e.reset([]);
        else {
            let i = XI(t, r);
            e.reset(i, uE),
            e.notifyOnChanges()
        }
        return !0
    }
    return !1
}
function TC() {
    return ZI(A(), fu())
}
function SC(e) {
    let t = wh();
    return so(t, ne + e)
}
function ws(e, t) {
    return e << 17 | t << 2
}
function xn(e) {
    return e >> 17 & 32767
}
function _C(e) {
    return (e & 2) == 2
}
function MC(e, t) {
    return e & 131071 | t << 17
}
function al(e) {
    return e | 2
}
function mr(e) {
    return (e & 131068) >> 2
}
function Mu(e, t) {
    return e & -131069 | t << 2
}
function NC(e) {
    return (e & 1) === 1
}
function cl(e) {
    return e | 1
}
function RC(e, t, n, r, o, i) {
    let s = i ? t.classBindings : t.styleBindings
      , a = xn(s)
      , c = mr(s);
    e[r] = n;
    let u = !1, l;
    if (Array.isArray(n)) {
        let d = n;
        l = d[1],
        (l === null || rr(d, l) > 0) && (u = !0)
    } else
        l = n;
    if (o)
        if (c !== 0) {
            let h = xn(e[a + 1]);
            e[r + 1] = ws(h, a),
            h !== 0 && (e[h + 1] = Mu(e[h + 1], r)),
            e[a + 1] = MC(e[a + 1], r)
        } else
            e[r + 1] = ws(a, 0),
            a !== 0 && (e[a + 1] = Mu(e[a + 1], r)),
            a = r;
    else
        e[r + 1] = ws(c, 0),
        a === 0 ? a = r : e[c + 1] = Mu(e[c + 1], r),
        c = r;
    u && (e[r + 1] = al(e[r + 1])),
    wp(e, l, r, !0),
    wp(e, l, r, !1),
    AC(t, l, e, r, i),
    s = ws(a, c),
    i ? t.classBindings = s : t.styleBindings = s
}
function AC(e, t, n, r, o) {
    let i = o ? e.residualClasses : e.residualStyles;
    i != null && typeof t == "string" && rr(i, t) >= 0 && (n[r + 1] = cl(n[r + 1]))
}
function wp(e, t, n, r) {
    let o = e[n + 1]
      , i = t === null
      , s = r ? xn(o) : mr(o)
      , a = !1;
    for (; s !== 0 && (a === !1 || i); ) {
        let c = e[s]
          , u = e[s + 1];
        xC(c, t) && (a = !0,
        e[s + 1] = r ? cl(u) : al(u)),
        s = r ? xn(u) : mr(u)
    }
    a && (e[n + 1] = r ? al(o) : cl(o))
}
function xC(e, t) {
    return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? rr(e, t) >= 0 : !1
}
function im(e, t, n) {
    return am(e, t, n, !1),
    im
}
function sm(e, t) {
    return am(e, t, null, !0),
    sm
}
function am(e, t, n, r) {
    let o = A()
      , i = le()
      , s = du(2);
    if (i.firstUpdatePass && kC(i, e, s, r),
    t !== nt && St(o, s, t)) {
        let a = i.data[Kt()];
        UC(i, a, o, o[z], e, o[s + 1] = BC(t, n), r, s)
    }
}
function OC(e, t) {
    return t >= e.expandoStartIndex
}
function kC(e, t, n, r) {
    let o = e.data;
    if (o[n + 1] === null) {
        let i = o[Kt()]
          , s = OC(e, n);
        VC(i, r) && t === null && !s && (t = !1),
        t = PC(o, i, t, r),
        RC(o, i, t, n, s, r)
    }
}
function PC(e, t, n, r) {
    let o = _h(e)
      , i = r ? t.residualClasses : t.residualStyles;
    if (o === null)
        (r ? t.classBindings : t.styleBindings) === 0 && (n = Nu(null, e, t, n, r),
        n = Io(n, t.attrs, r),
        i = null);
    else {
        let s = t.directiveStylingLast;
        if (s === -1 || e[s] !== o)
            if (n = Nu(o, e, t, n, r),
            i === null) {
                let c = FC(e, t, r);
                c !== void 0 && Array.isArray(c) && (c = Nu(null, e, t, c[1], r),
                c = Io(c, t.attrs, r),
                LC(e, t, r, c))
            } else
                i = jC(e, t, r)
    }
    return i !== void 0 && (r ? t.residualClasses = i : t.residualStyles = i),
    n
}
function FC(e, t, n) {
    let r = n ? t.classBindings : t.styleBindings;
    if (mr(r) !== 0)
        return e[xn(r)]
}
function LC(e, t, n, r) {
    let o = n ? t.classBindings : t.styleBindings;
    e[xn(o)] = r
}
function jC(e, t, n) {
    let r, o = t.directiveEnd;
    for (let i = 1 + t.directiveStylingLast; i < o; i++) {
        let s = e[i].hostAttrs;
        r = Io(r, s, n)
    }
    return Io(r, t.attrs, n)
}
function Nu(e, t, n, r, o) {
    let i = null
      , s = n.directiveEnd
      , a = n.directiveStylingLast;
    for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a],
    r = Io(r, i.hostAttrs, o),
    i !== e); )
        a++;
    return e !== null && (n.directiveStylingLast = a),
    r
}
function Io(e, t, n) {
    let r = n ? 1 : 2
      , o = -1;
    if (t !== null)
        for (let i = 0; i < t.length; i++) {
            let s = t[i];
            typeof s == "number" ? o = s : o === r && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
            Kf(e, s, n ? !0 : t[++i]))
        }
    return e === void 0 ? null : e
}
function UC(e, t, n, r, o, i, s, a) {
    if (!(t.type & 3))
        return;
    let c = e.data
      , u = c[a + 1]
      , l = NC(u) ? Ip(c, t, n, o, mr(u), s) : void 0;
    if (!Us(l)) {
        Us(i) || _C(u) && (i = Ip(c, null, n, o, a, s));
        let d = eu(Kt(), n);
        xw(r, s, d, o, i)
    }
}
function Ip(e, t, n, r, o, i) {
    let s = t === null, a;
    for (; o > 0; ) {
        let c = e[o]
          , u = Array.isArray(c)
          , l = u ? c[1] : c
          , d = l === null
          , h = n[o + 1];
        h === nt && (h = d ? Re : void 0);
        let f = d ? os(h, r) : l === r ? h : void 0;
        if (u && !Us(f) && (f = os(c, r)),
        Us(f) && (a = f,
        s))
            return a;
        let g = e[o + 1];
        o = s ? xn(g) : mr(g)
    }
    if (t !== null) {
        let c = i ? t.residualClasses : t.residualStyles;
        c != null && (a = os(c, r))
    }
    return a
}
function Us(e) {
    return e !== void 0
}
function BC(e, t) {
    return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Kr(ft(e)))),
    e
}
function VC(e, t) {
    return (e.flags & (t ? 8 : 16)) !== 0
}
function HC(e, t="") {
    let n = A()
      , r = le()
      , o = e + ne
      , i = r.firstCreatePass ? Pl(r, o, 1, t, null) : r.data[o]
      , s = $C(r, n, i, t);
    n[o] = s,
    gs() && Ml(r, n, s, i),
    ur(i, !1)
}
var $C = (e, t, n, r) => (lo(!0),
VE(t[z], r));
function zC(e, t, n, r="") {
    return St(e, uo(), n) ? t + wn(n) + r : nt
}
function GC(e, t, n, r, o, i="") {
    let s = Ih()
      , a = Bl(e, s, n, o);
    return du(2),
    a ? t + wn(n) + r + wn(o) + i : nt
}
function cm(e) {
    return Zl("", e),
    cm
}
function Zl(e, t, n) {
    let r = A()
      , o = zC(r, e, t, n);
    return o !== nt && lm(r, Kt(), o),
    Zl
}
function um(e, t, n, r, o) {
    let i = A()
      , s = GC(i, e, t, n, r, o);
    return s !== nt && lm(i, Kt(), s),
    um
}
function lm(e, t, n) {
    let r = eu(t, e);
    HE(e[z], r, n)
}
function dm(e, t, n) {
    zl(t) && (t = t());
    let r = A()
      , o = uo();
    if (St(r, o, t)) {
        let i = le()
          , s = ps();
        vg(s, r, e, t, r[z], n)
    }
    return dm
}
function WC(e, t) {
    let n = zl(e);
    return n && e.set(t),
    n
}
function fm(e, t) {
    let n = A()
      , r = le()
      , o = be();
    return rm(r, n, n[z], o, e, t),
    fm
}
function Cp(e, t, n) {
    let r = le();
    r.firstCreatePass && hm(t, r.data, r.blueprint, ut(e), n)
}
function hm(e, t, n, r, o) {
    if (e = ue(e),
    Array.isArray(e))
        for (let i = 0; i < e.length; i++)
            hm(e[i], t, n, r, o);
    else {
        let i = le()
          , s = A()
          , a = be()
          , c = yn(e) ? e : ue(e.provide)
          , u = Yc(e)
          , l = a.providerIndexes & 1048575
          , d = a.directiveStart
          , h = a.providerIndexes >> 20;
        if (yn(e) || !e.multi) {
            let f = new Nn(u,o,me,null)
              , g = Au(c, t, o ? l : l + h, d);
            g === -1 ? (Ou(Rs(a, s), i, c),
            Ru(i, e, t.length),
            t.push(c),
            a.directiveStart++,
            a.directiveEnd++,
            o && (a.providerIndexes += 1048576),
            n.push(f),
            s.push(f)) : (n[g] = f,
            s[g] = f)
        } else {
            let f = Au(c, t, l + h, d)
              , g = Au(c, t, l, l + h)
              , N = f >= 0 && n[f]
              , E = g >= 0 && n[g];
            if (o && !E || !o && !N) {
                Ou(Rs(a, s), i, c);
                let w = YC(o ? ZC : qC, n.length, o, r, u, e);
                !o && E && (n[g].providerFactory = w),
                Ru(i, e, t.length, 0),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(w),
                s.push(w)
            } else {
                let w = pm(n[o ? g : f], u, !o && r);
                Ru(i, e, f > -1 ? f : g, w)
            }
            !o && r && E && n[g].componentProviders++
        }
    }
}
function Ru(e, t, n, r) {
    let o = yn(t)
      , i = nh(t);
    if (o || i) {
        let c = (i ? ue(t.useClass) : t).prototype.ngOnDestroy;
        if (c) {
            let u = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
                let l = u.indexOf(n);
                l === -1 ? u.push(n, [r, c]) : u[l + 1].push(r, c)
            } else
                u.push(n, c)
        }
    }
}
function pm(e, t, n) {
    return n && e.componentProviders++,
    e.multi.push(t) - 1
}
function Au(e, t, n, r) {
    for (let o = n; o < r; o++)
        if (t[o] === e)
            return o;
    return -1
}
function qC(e, t, n, r, o) {
    return ul(this.multi, [])
}
function ZC(e, t, n, r, o) {
    let i = this.multi, s;
    if (this.providerFactory) {
        let a = this.providerFactory.componentProviders
          , c = Do(r, r[C], this.providerFactory.index, o);
        s = c.slice(0, a),
        ul(i, s);
        for (let u = a; u < c.length; u++)
            s.push(c[u])
    } else
        s = [],
        ul(i, s);
    return s
}
function ul(e, t) {
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        t.push(r())
    }
    return t
}
function YC(e, t, n, r, o, i) {
    let s = new Nn(e,n,me,null);
    return s.multi = [],
    s.index = t,
    s.componentProviders = 0,
    pm(s, o, r && !n),
    s
}
function QC(e, t) {
    return n => {
        n.providersResolver = (r, o) => Cp(r, o ? o(e) : e, !1),
        t && (n.viewProvidersResolver = (r, o) => Cp(r, o ? o(t) : t, !0))
    }
}
function Yl(e, t) {
    let n = e[t];
    return n === nt ? void 0 : n
}
function KC(e, t, n, r, o, i) {
    let s = t + n;
    return St(e, s, o) ? Ul(e, s + 1, i ? r.call(i, o) : r(o)) : Yl(e, s + 1)
}
function JC(e, t, n, r, o, i, s) {
    let a = t + n;
    return Bl(e, a, o, i) ? Ul(e, a + 2, s ? r.call(s, o, i) : r(o, i)) : Yl(e, a + 2)
}
function XC(e, t, n, r, o, i, s, a) {
    let c = t + n;
    return TI(e, c, o, i, s) ? Ul(e, c + 3, a ? r.call(a, o, i, s) : r(o, i, s)) : Yl(e, c + 3)
}
function eb(e, t) {
    let n = le(), r, o = e + ne;
    n.firstCreatePass ? (r = tb(t, n.pipeRegistry),
    n.data[o] = r,
    r.onDestroy && (n.destroyHooks ??= []).push(o, r.onDestroy)) : r = n.data[o];
    let i = r.factory || (r.factory = Bt(r.type, !0)), s, a = Ee(me);
    try {
        let c = Ns(!1)
          , u = i();
        return Ns(c),
        nu(n, A(), o, u),
        u
    } finally {
        Ee(a)
    }
}
function tb(e, t) {
    if (t)
        for (let n = t.length - 1; n >= 0; n--) {
            let r = t[n];
            if (e === r.name)
                return r
        }
}
function nb(e, t, n) {
    let r = e + ne
      , o = A()
      , i = so(o, r);
    return Ql(o, r) ? KC(o, us(), t, i.transform, n, i) : i.transform(n)
}
function rb(e, t, n, r) {
    let o = e + ne
      , i = A()
      , s = so(i, o);
    return Ql(i, o) ? JC(i, us(), t, s.transform, n, r, s) : s.transform(n, r)
}
function ob(e, t, n, r, o) {
    let i = e + ne
      , s = A()
      , a = so(s, i);
    return Ql(s, i) ? XC(s, us(), t, a.transform, n, r, o, a) : a.transform(n, r, o)
}
function Ql(e, t) {
    return e[C].data[t].pure
}
function ib(e, t) {
    return Ks(e, t)
}
var Bs = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) {
        this.ngModuleFactory = t,
        this.componentFactories = n
    }
}
  , Kl = ( () => {
    class e {
        compileModuleSync(n) {
            return new Ls(n)
        }
        compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n))
        }
        compileModuleAndAllComponentsSync(n) {
            let r = this.compileModuleSync(n)
              , o = Bc(n)
              , i = sg(o.declarations).reduce( (s, a) => {
                let c = zt(a);
                return c && s.push(new gr(c)),
                s
            }
            , []);
            return new Bs(r,i)
        }
        compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n))
        }
        clearCache() {}
        clearCacheFor(n) {}
        getModuleId(n) {}
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var gm = ( () => {
    class e {
        applicationErrorHandler = p(xe);
        appRef = p(Pn);
        taskService = p(bt);
        ngZone = p(Ie);
        zonelessEnabled = p(ho);
        tracing = p(ht, {
            optional: !0
        });
        zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
        schedulerTickApplyArgs = [{
            data: {
                __scheduler_tick__: !0
            }
        }];
        subscriptions = new ee;
        angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Yr) : null;
        scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (p(Eu, {
            optional: !0
        }) ?? !1);
        cancelScheduledCallback = null;
        useMicrotaskScheduler = !1;
        runningTick = !1;
        pendingRenderTaskId = null;
        constructor() {
            this.subscriptions.add(this.appRef.afterTick.subscribe( () => {
                let n = this.taskService.add();
                if (!this.runningTick && (this.cleanup(),
                !this.zonelessEnabled || this.appRef.includeAllTestViews)) {
                    this.taskService.remove(n);
                    return
                }
                this.switchToMicrotaskScheduler(),
                this.taskService.remove(n)
            }
            )),
            this.subscriptions.add(this.ngZone.onUnstable.subscribe( () => {
                this.runningTick || this.cleanup()
            }
            ))
        }
        switchToMicrotaskScheduler() {
            this.ngZone.runOutsideAngular( () => {
                let n = this.taskService.add();
                this.useMicrotaskScheduler = !0,
                queueMicrotask( () => {
                    this.useMicrotaskScheduler = !1,
                    this.taskService.remove(n)
                }
                )
            }
            )
        }
        notify(n) {
            if (!this.zonelessEnabled && n === 5)
                return;
            switch (n) {
            case 0:
                {
                    this.appRef.dirtyFlags |= 2;
                    break
                }
            case 3:
            case 2:
            case 4:
            case 5:
            case 1:
                {
                    this.appRef.dirtyFlags |= 4;
                    break
                }
            case 6:
                {
                    this.appRef.dirtyFlags |= 2;
                    break
                }
            case 12:
                {
                    this.appRef.dirtyFlags |= 16;
                    break
                }
            case 13:
                {
                    this.appRef.dirtyFlags |= 2;
                    break
                }
            case 11:
                break;
            default:
                this.appRef.dirtyFlags |= 8
            }
            if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null,
            !this.shouldScheduleTick())
                return;
            let r = this.useMicrotaskScheduler ? Lh : yu;
            this.pendingRenderTaskId = this.taskService.add(),
            this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run( () => r( () => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular( () => r( () => this.tick()))
        }
        shouldScheduleTick() {
            return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Yr + this.angularZoneId))
        }
        tick() {
            if (this.runningTick || this.appRef.destroyed)
                return;
            if (this.appRef.dirtyFlags === 0) {
                this.cleanup();
                return
            }
            !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1);
            let n = this.taskService.add();
            try {
                this.ngZone.run( () => {
                    this.runningTick = !0,
                    this.appRef._tick()
                }
                , void 0, this.schedulerTickApplyArgs)
            } catch (r) {
                this.applicationErrorHandler(r)
            } finally {
                this.taskService.remove(n),
                this.cleanup()
            }
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe(),
            this.cleanup()
        }
        cleanup() {
            if (this.runningTick = !1,
            this.cancelScheduledCallback?.(),
            this.cancelScheduledCallback = null,
            this.pendingRenderTaskId !== null) {
                let n = this.pendingRenderTaskId;
                this.pendingRenderTaskId = null,
                this.taskService.remove(n)
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function mm() {
    return [{
        provide: Et,
        useExisting: gm
    }, {
        provide: Ie,
        useClass: Qr
    }, {
        provide: ho,
        useValue: !0
    }]
}
function sb() {
    return typeof $localize < "u" && $localize.locale || Ao
}
var wr = new D("",{
    factory: () => p(wr, {
        optional: !0,
        skipSelf: !0
    }) || sb()
});
function rt(e) {
    return jf(e)
}
function Jl(e, t) {
    return $i(e, t?.equal)
}
var wm = Symbol("InputSignalNode#UNSET")
  , Cb = x(y({}, zi), {
    transformFn: void 0,
    applyValueToInputSignal(e, t) {
        er(e, t)
    }
});
function Im(e, t) {
    let n = Object.create(Cb);
    n.value = e,
    n.transformFn = t?.transform;
    function r() {
        if (Kn(n),
        n.value === wm) {
            let o = null;
            throw new m(-950,o)
        }
        return n.value
    }
    return r[pe] = n,
    r
}
function ym(e, t) {
    return Im(e, t)
}
function bb(e) {
    return Im(wm, e)
}
var Cm = (ym.required = bb,
ym);
var Xl = new D("")
  , Tb = new D("");
function xo(e) {
    return !e.moduleRef
}
function Sb(e) {
    let t = xo(e) ? e.r3Injector : e.moduleRef.injector
      , n = t.get(Ie);
    return n.run( () => {
        xo(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers();
        let r = t.get(xe), o;
        if (n.runOutsideAngular( () => {
            o = n.onError.subscribe({
                next: r
            })
        }
        ),
        xo(e)) {
            let i = () => t.destroy()
              , s = e.platformInjector.get(Xl);
            s.add(i),
            t.onDestroy( () => {
                o.unsubscribe(),
                s.delete(i)
            }
            )
        } else {
            let i = () => e.moduleRef.destroy()
              , s = e.platformInjector.get(Xl);
            s.add(i),
            e.moduleRef.onDestroy( () => {
                yo(e.allPlatformModules, e.moduleRef),
                o.unsubscribe(),
                s.delete(i)
            }
            )
        }
        return Mb(r, n, () => {
            let i = t.get(bt)
              , s = i.add()
              , a = t.get(Wl);
            return a.runInitializers(),
            a.donePromise.then( () => {
                let c = t.get(wr, Ao);
                if (tm(c || Ao),
                !t.get(Tb, !0))
                    return xo(e) ? t.get(Pn) : (e.allPlatformModules.push(e.moduleRef),
                    e.moduleRef);
                if (xo(e)) {
                    let l = t.get(Pn);
                    return e.rootComponent !== void 0 && l.bootstrap(e.rootComponent),
                    l
                } else
                    return _b?.(e.moduleRef, e.allPlatformModules),
                    e.moduleRef
            }
            ).finally( () => {
                i.remove(s)
            }
            )
        }
        )
    }
    )
}
var _b;
function Mb(e, t, n) {
    try {
        let r = n();
        return kn(r) ? r.catch(o => {
            throw t.runOutsideAngular( () => e(o)),
            o
        }
        ) : r
    } catch (r) {
        throw t.runOutsideAngular( () => e(r)),
        r
    }
}
var oa = null;
function Nb(e=[], t) {
    return Se.create({
        name: t,
        providers: [{
            provide: no,
            useValue: "platform"
        }, {
            provide: Xl,
            useValue: new Set([ () => oa = null])
        }, ...e]
    })
}
function Rb(e=[]) {
    if (oa)
        return oa;
    let t = Nb(e);
    return oa = t,
    Yg(),
    Ab(t),
    t
}
function Ab(e) {
    let t = e.get($s, null);
    ie(e, () => {
        t?.forEach(n => n())
    }
    )
}
var xb = 1e4;
var jU = xb - 1e3;
var sa = ( () => {
    class e {
        static __NG_ELEMENT_ID__ = Ob
    }
    return e
}
)();
function Ob(e) {
    return kb(be(), A(), (e & 16) === 16)
}
function kb(e, t, n) {
    if (Ct(e) && !n) {
        let r = Be(e.index, t);
        return new Xt(r,r)
    } else if (e.type & 175) {
        let r = t[je];
        return new Xt(r,t)
    }
    return null
}
var ed = class {
    supports(t) {
        return jl(t)
    }
    create(t) {
        return new td(t)
    }
}
  , Pb = (e, t) => t
  , td = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) {
        this._trackByFn = t || Pb
    }
    forEachItem(t) {
        let n;
        for (n = this._itHead; n !== null; n = n._next)
            t(n)
    }
    forEachOperation(t) {
        let n = this._itHead
          , r = this._removalsHead
          , o = 0
          , i = null;
        for (; n || r; ) {
            let s = !r || n && n.currentIndex < vm(r, o, i) ? n : r
              , a = vm(s, o, i)
              , c = s.currentIndex;
            if (s === r)
                o--,
                r = r._nextRemoved;
            else if (n = n._next,
            s.previousIndex == null)
                o++;
            else {
                i || (i = []);
                let u = a - o
                  , l = c - o;
                if (u != l) {
                    for (let h = 0; h < u; h++) {
                        let f = h < i.length ? i[h] : i[h] = 0
                          , g = f + h;
                        l <= g && g < u && (i[h] = f + 1)
                    }
                    let d = s.previousIndex;
                    i[d] = l - u
                }
            }
            a !== c && t(s, a, c)
        }
    }
    forEachPreviousItem(t) {
        let n;
        for (n = this._previousItHead; n !== null; n = n._nextPrevious)
            t(n)
    }
    forEachAddedItem(t) {
        let n;
        for (n = this._additionsHead; n !== null; n = n._nextAdded)
            t(n)
    }
    forEachMovedItem(t) {
        let n;
        for (n = this._movesHead; n !== null; n = n._nextMoved)
            t(n)
    }
    forEachRemovedItem(t) {
        let n;
        for (n = this._removalsHead; n !== null; n = n._nextRemoved)
            t(n)
    }
    forEachIdentityChange(t) {
        let n;
        for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
            t(n)
    }
    diff(t) {
        if (t == null && (t = []),
        !jl(t))
            throw new m(900,!1);
        return this.check(t) ? this : null
    }
    onDestroy() {}
    check(t) {
        this._reset();
        let n = this._itHead, r = !1, o, i, s;
        if (Array.isArray(t)) {
            this.length = t.length;
            for (let a = 0; a < this.length; a++)
                i = t[a],
                s = this._trackByFn(a, i),
                n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a),
                r = !0) : (r && (n = this._verifyReinsertion(n, i, s, a)),
                Object.is(n.item, i) || this._addIdentityChange(n, i)),
                n = n._next
        } else
            o = 0,
            Lg(t, a => {
                s = this._trackByFn(o, a),
                n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, o),
                r = !0) : (r && (n = this._verifyReinsertion(n, a, s, o)),
                Object.is(n.item, a) || this._addIdentityChange(n, a)),
                n = n._next,
                o++
            }
            ),
            this.length = o;
        return this._truncate(n),
        this.collection = t,
        this.isDirty
    }
    get isDirty() {
        return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null
    }
    _reset() {
        if (this.isDirty) {
            let t;
            for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
                t._nextPrevious = t._next;
            for (t = this._additionsHead; t !== null; t = t._nextAdded)
                t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null,
            t = this._movesHead; t !== null; t = t._nextMoved)
                t.previousIndex = t.currentIndex;
            this._movesHead = this._movesTail = null,
            this._removalsHead = this._removalsTail = null,
            this._identityChangesHead = this._identityChangesTail = null
        }
    }
    _mismatch(t, n, r, o) {
        let i;
        return t === null ? i = this._itTail : (i = t._prev,
        this._remove(t)),
        t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null),
        t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
        this._reinsertAfter(t, i, o)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(r, o),
        t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
        this._moveAfter(t, i, o)) : t = this._addAfter(new nd(n,r), i, o)),
        t
    }
    _verifyReinsertion(t, n, r, o) {
        let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null);
        return i !== null ? t = this._reinsertAfter(i, t._prev, o) : t.currentIndex != o && (t.currentIndex = o,
        this._addToMoves(t, o)),
        t
    }
    _truncate(t) {
        for (; t !== null; ) {
            let n = t._next;
            this._addToRemovals(this._unlink(t)),
            t = n
        }
        this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null)
    }
    _reinsertAfter(t, n, r) {
        this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
        let o = t._prevRemoved
          , i = t._nextRemoved;
        return o === null ? this._removalsHead = i : o._nextRemoved = i,
        i === null ? this._removalsTail = o : i._prevRemoved = o,
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t
    }
    _moveAfter(t, n, r) {
        return this._unlink(t),
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t
    }
    _addAfter(t, n, r) {
        return this._insertAfter(t, n, r),
        this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t,
        t
    }
    _insertAfter(t, n, r) {
        let o = n === null ? this._itHead : n._next;
        return t._next = o,
        t._prev = n,
        o === null ? this._itTail = t : o._prev = t,
        n === null ? this._itHead = t : n._next = t,
        this._linkedRecords === null && (this._linkedRecords = new ia),
        this._linkedRecords.put(t),
        t.currentIndex = r,
        t
    }
    _remove(t) {
        return this._addToRemovals(this._unlink(t))
    }
    _unlink(t) {
        this._linkedRecords !== null && this._linkedRecords.remove(t);
        let n = t._prev
          , r = t._next;
        return n === null ? this._itHead = r : n._next = r,
        r === null ? this._itTail = n : r._prev = n,
        t
    }
    _addToMoves(t, n) {
        return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t),
        t
    }
    _addToRemovals(t) {
        return this._unlinkedRecords === null && (this._unlinkedRecords = new ia),
        this._unlinkedRecords.put(t),
        t.currentIndex = null,
        t._nextRemoved = null,
        this._removalsTail === null ? (this._removalsTail = this._removalsHead = t,
        t._prevRemoved = null) : (t._prevRemoved = this._removalsTail,
        this._removalsTail = this._removalsTail._nextRemoved = t),
        t
    }
    _addIdentityChange(t, n) {
        return t.item = n,
        this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t,
        t
    }
}
  , nd = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) {
        this.item = t,
        this.trackById = n
    }
}
  , rd = class {
    _head = null;
    _tail = null;
    add(t) {
        this._head === null ? (this._head = this._tail = t,
        t._nextDup = null,
        t._prevDup = null) : (this._tail._nextDup = t,
        t._prevDup = this._tail,
        t._nextDup = null,
        this._tail = t)
    }
    get(t, n) {
        let r;
        for (r = this._head; r !== null; r = r._nextDup)
            if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t))
                return r;
        return null
    }
    remove(t) {
        let n = t._prevDup
          , r = t._nextDup;
        return n === null ? this._head = r : n._nextDup = r,
        r === null ? this._tail = n : r._prevDup = n,
        this._head === null
    }
}
  , ia = class {
    map = new Map;
    put(t) {
        let n = t.trackById
          , r = this.map.get(n);
        r || (r = new rd,
        this.map.set(n, r)),
        r.add(t)
    }
    get(t, n) {
        let r = t
          , o = this.map.get(r);
        return o ? o.get(t, n) : null
    }
    remove(t) {
        let n = t.trackById;
        return this.map.get(n).remove(t) && this.map.delete(n),
        t
    }
    get isEmpty() {
        return this.map.size === 0
    }
    clear() {
        this.map.clear()
    }
}
;
function vm(e, t, n) {
    let r = e.previousIndex;
    if (r === null)
        return r;
    let o = 0;
    return n && r < n.length && (o = n[r]),
    r + t + o
}
function Dm() {
    return new od([new ed])
}
var od = ( () => {
    class e {
        factories;
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: Dm
        });
        constructor(n) {
            this.factories = n
        }
        static create(n, r) {
            if (r != null) {
                let o = r.factories.slice();
                n = n.concat(o)
            }
            return new e(n)
        }
        static extend(n) {
            return {
                provide: e,
                useFactory: () => {
                    let r = p(e, {
                        optional: !0,
                        skipSelf: !0
                    });
                    return e.create(n, r || Dm())
                }
            }
        }
        find(n) {
            let r = this.factories.find(o => o.supports(n));
            if (r != null)
                return r;
            throw new m(901,!1)
        }
    }
    return e
}
)();
function bm(e) {
    let {rootComponent: t, appProviders: n, platformProviders: r, platformRef: o} = e;
    B(P.BootstrapApplicationStart);
    try {
        let i = o?.injector ?? Rb(r)
          , s = [mm(), Uh, ...n || []]
          , a = new wo({
            providers: s,
            parent: i,
            debugName: "",
            runEnvironmentInitializers: !1
        });
        return Sb({
            r3Injector: a.injector,
            platformInjector: i,
            rootComponent: t
        })
    } catch (i) {
        return Promise.reject(i)
    } finally {
        B(P.BootstrapApplicationEnd)
    }
}
function Fb(e) {
    return typeof e == "boolean" ? e : e != null && e !== "false"
}
var Tm = null;
function At() {
    return Tm
}
function id(e) {
    Tm ??= e
}
var Oo = class {
}
  , Ir = ( () => {
    class e {
        historyGo(n) {
            throw new Error("")
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(Sm),
            providedIn: "platform"
        })
    }
    return e
}
)();
var Sm = ( () => {
    class e extends Ir {
        _location;
        _history;
        _doc = p(Z);
        constructor() {
            super(),
            this._location = window.location,
            this._history = window.history
        }
        getBaseHrefFromDOM() {
            return At().getBaseHref(this._doc)
        }
        onPopState(n) {
            let r = At().getGlobalEventTarget(this._doc, "window");
            return r.addEventListener("popstate", n, !1),
            () => r.removeEventListener("popstate", n)
        }
        onHashChange(n) {
            let r = At().getGlobalEventTarget(this._doc, "window");
            return r.addEventListener("hashchange", n, !1),
            () => r.removeEventListener("hashchange", n)
        }
        get href() {
            return this._location.href
        }
        get protocol() {
            return this._location.protocol
        }
        get hostname() {
            return this._location.hostname
        }
        get port() {
            return this._location.port
        }
        get pathname() {
            return this._location.pathname
        }
        get search() {
            return this._location.search
        }
        get hash() {
            return this._location.hash
        }
        set pathname(n) {
            this._location.pathname = n
        }
        pushState(n, r, o) {
            this._history.pushState(n, r, o)
        }
        replaceState(n, r, o) {
            this._history.replaceState(n, r, o)
        }
        forward() {
            this._history.forward()
        }
        back() {
            this._history.back()
        }
        historyGo(n=0) {
            this._history.go(n)
        }
        getState() {
            return this._history.state
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => new e,
            providedIn: "platform"
        })
    }
    return e
}
)();
function Nm(e, t) {
    return e ? t ? e.endsWith("/") ? t.startsWith("/") ? e + t.slice(1) : e + t : t.startsWith("/") ? e + t : `${e}/${t}` : e : t
}
function _m(e) {
    let t = e.search(/#|\?|$/);
    return e[t - 1] === "/" ? e.slice(0, t - 1) + e.slice(t) : e
}
function tn(e) {
    return e && e[0] !== "?" ? `?${e}` : e
}
var aa = ( () => {
    class e {
        historyGo(n) {
            throw new Error("")
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(jb),
            providedIn: "root"
        })
    }
    return e
}
)()
  , Lb = new D("")
  , jb = ( () => {
    class e extends aa {
        _platformLocation;
        _baseHref;
        _removeListenerFns = [];
        constructor(n, r) {
            super(),
            this._platformLocation = n,
            this._baseHref = r ?? this._platformLocation.getBaseHrefFromDOM() ?? p(Z).location?.origin ?? ""
        }
        ngOnDestroy() {
            for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()()
        }
        onPopState(n) {
            this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
        }
        getBaseHref() {
            return this._baseHref
        }
        prepareExternalUrl(n) {
            return Nm(this._baseHref, n)
        }
        path(n=!1) {
            let r = this._platformLocation.pathname + tn(this._platformLocation.search)
              , o = this._platformLocation.hash;
            return o && n ? `${r}${o}` : r
        }
        pushState(n, r, o, i) {
            let s = this.prepareExternalUrl(o + tn(i));
            this._platformLocation.pushState(n, r, s)
        }
        replaceState(n, r, o, i) {
            let s = this.prepareExternalUrl(o + tn(i));
            this._platformLocation.replaceState(n, r, s)
        }
        forward() {
            this._platformLocation.forward()
        }
        back() {
            this._platformLocation.back()
        }
        getState() {
            return this._platformLocation.getState()
        }
        historyGo(n=0) {
            this._platformLocation.historyGo?.(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(Ir),I(Lb, 8))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var Cr = ( () => {
    class e {
        _subject = new ae;
        _basePath;
        _locationStrategy;
        _urlChangeListeners = [];
        _urlChangeSubscription = null;
        constructor(n) {
            this._locationStrategy = n;
            let r = this._locationStrategy.getBaseHref();
            this._basePath = Vb(_m(Mm(r))),
            this._locationStrategy.onPopState(o => {
                this._subject.next({
                    url: this.path(!0),
                    pop: !0,
                    state: o.state,
                    type: o.type
                })
            }
            )
        }
        ngOnDestroy() {
            this._urlChangeSubscription?.unsubscribe(),
            this._urlChangeListeners = []
        }
        path(n=!1) {
            return this.normalize(this._locationStrategy.path(n))
        }
        getState() {
            return this._locationStrategy.getState()
        }
        isCurrentPathEqualTo(n, r="") {
            return this.path() == this.normalize(n + tn(r))
        }
        normalize(n) {
            return e.stripTrailingSlash(Bb(this._basePath, Mm(n)))
        }
        prepareExternalUrl(n) {
            return n && n[0] !== "/" && (n = "/" + n),
            this._locationStrategy.prepareExternalUrl(n)
        }
        go(n, r="", o=null) {
            this._locationStrategy.pushState(o, "", n, r),
            this._notifyUrlChangeListeners(this.prepareExternalUrl(n + tn(r)), o)
        }
        replaceState(n, r="", o=null) {
            this._locationStrategy.replaceState(o, "", n, r),
            this._notifyUrlChangeListeners(this.prepareExternalUrl(n + tn(r)), o)
        }
        forward() {
            this._locationStrategy.forward()
        }
        back() {
            this._locationStrategy.back()
        }
        historyGo(n=0) {
            this._locationStrategy.historyGo?.(n)
        }
        onUrlChange(n) {
            return this._urlChangeListeners.push(n),
            this._urlChangeSubscription ??= this.subscribe(r => {
                this._notifyUrlChangeListeners(r.url, r.state)
            }
            ),
            () => {
                let r = this._urlChangeListeners.indexOf(n);
                this._urlChangeListeners.splice(r, 1),
                this._urlChangeListeners.length === 0 && (this._urlChangeSubscription?.unsubscribe(),
                this._urlChangeSubscription = null)
            }
        }
        _notifyUrlChangeListeners(n="", r) {
            this._urlChangeListeners.forEach(o => o(n, r))
        }
        subscribe(n, r, o) {
            return this._subject.subscribe({
                next: n,
                error: r ?? void 0,
                complete: o ?? void 0
            })
        }
        static normalizeQueryParams = tn;
        static joinWithSlash = Nm;
        static stripTrailingSlash = _m;
        static \u0275fac = function(r) {
            return new (r || e)(I(aa))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => Ub(),
            providedIn: "root"
        })
    }
    return e
}
)();
function Ub() {
    return new Cr(I(aa))
}
function Bb(e, t) {
    if (!e || !t.startsWith(e))
        return t;
    let n = t.substring(e.length);
    return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t
}
function Mm(e) {
    return e.replace(/\/index\.html$/, "")
}
function Vb(e) {
    if (new RegExp("^(https?:)?//").test(e)) {
        let[,n] = e.split(/\/\/[^\/]+/);
        return n
    }
    return e
}
var hd = (function(e) {
    return e[e.Decimal = 0] = "Decimal",
    e[e.Percent = 1] = "Percent",
    e[e.Currency = 2] = "Currency",
    e[e.Scientific = 3] = "Scientific",
    e
}
)(hd || {});
var ye = (function(e) {
    return e[e.Format = 0] = "Format",
    e[e.Standalone = 1] = "Standalone",
    e
}
)(ye || {})
  , V = (function(e) {
    return e[e.Narrow = 0] = "Narrow",
    e[e.Abbreviated = 1] = "Abbreviated",
    e[e.Wide = 2] = "Wide",
    e[e.Short = 3] = "Short",
    e
}
)(V || {})
  , Me = (function(e) {
    return e[e.Short = 0] = "Short",
    e[e.Medium = 1] = "Medium",
    e[e.Long = 2] = "Long",
    e[e.Full = 3] = "Full",
    e
}
)(Me || {})
  , Ne = {
    Decimal: 0,
    Group: 1,
    List: 2,
    PercentSign: 3,
    PlusSign: 4,
    MinusSign: 5,
    Exponential: 6,
    SuperscriptingExponent: 7,
    PerMille: 8,
    Infinity: 9,
    NaN: 10,
    TimeSeparator: 11,
    CurrencyDecimal: 12,
    CurrencyGroup: 13
};
function km(e) {
    return _e(e)[Y.LocaleId]
}
function Pm(e, t, n) {
    let r = _e(e)
      , o = [r[Y.DayPeriodsFormat], r[Y.DayPeriodsStandalone]]
      , i = Ve(o, t);
    return Ve(i, n)
}
function Fm(e, t, n) {
    let r = _e(e)
      , o = [r[Y.DaysFormat], r[Y.DaysStandalone]]
      , i = Ve(o, t);
    return Ve(i, n)
}
function Lm(e, t, n) {
    let r = _e(e)
      , o = [r[Y.MonthsFormat], r[Y.MonthsStandalone]]
      , i = Ve(o, t);
    return Ve(i, n)
}
function jm(e, t) {
    let r = _e(e)[Y.Eras];
    return Ve(r, t)
}
function ko(e, t) {
    let n = _e(e);
    return Ve(n[Y.DateFormat], t)
}
function Po(e, t) {
    let n = _e(e);
    return Ve(n[Y.TimeFormat], t)
}
function Fo(e, t) {
    let r = _e(e)[Y.DateTimeFormat];
    return Ve(r, t)
}
function pt(e, t) {
    let n = _e(e)
      , r = n[Y.NumberSymbols][t];
    if (typeof r > "u") {
        if (t === Ne.CurrencyDecimal)
            return n[Y.NumberSymbols][Ne.Decimal];
        if (t === Ne.CurrencyGroup)
            return n[Y.NumberSymbols][Ne.Group]
    }
    return r
}
function Um(e, t) {
    return _e(e)[Y.NumberFormats][t]
}
function Bm(e) {
    if (!e[Y.ExtraData])
        throw new m(2303,!1)
}
function Vm(e) {
    let t = _e(e);
    return Bm(t),
    (t[Y.ExtraData][2] || []).map(r => typeof r == "string" ? sd(r) : [sd(r[0]), sd(r[1])])
}
function Hm(e, t, n) {
    let r = _e(e);
    Bm(r);
    let o = [r[Y.ExtraData][0], r[Y.ExtraData][1]]
      , i = Ve(o, t) || [];
    return Ve(i, n) || []
}
function Ve(e, t) {
    for (let n = t; n > -1; n--)
        if (typeof e[n] < "u")
            return e[n];
    throw new m(2304,!1)
}
function sd(e) {
    let[t,n] = e.split(":");
    return {
        hours: +t,
        minutes: +n
    }
}
var Hb = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
  , ca = {}
  , $b = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/
  , zb = 256;
function $m(e, t, n, r) {
    let o = eT(e);
    Gb(t),
    t = xt(n, t) || t;
    let s = [], a;
    for (; t; )
        if (a = $b.exec(t),
        a) {
            s = s.concat(a.slice(1));
            let l = s.pop();
            if (!l)
                break;
            t = l
        } else {
            s.push(t);
            break
        }
    let c = o.getTimezoneOffset();
    r && (c = Gm(r, c),
    o = Xb(o, r));
    let u = "";
    return s.forEach(l => {
        let d = Kb(l);
        u += d ? d(o, n, c) : l === "''" ? "'" : l.replace(/(^'|'$)/g, "").replace(/''/g, "'")
    }
    ),
    u
}
function Gb(e) {
    if (e.length > zb)
        throw new m(2300,!1)
}
function ha(e, t, n) {
    let r = new Date(0);
    return r.setFullYear(e, t, n),
    r.setHours(0, 0, 0),
    r
}
function xt(e, t) {
    let n = km(e);
    if (ca[n] ??= {},
    ca[n][t])
        return ca[n][t];
    let r = "";
    switch (t) {
    case "shortDate":
        r = ko(e, Me.Short);
        break;
    case "mediumDate":
        r = ko(e, Me.Medium);
        break;
    case "longDate":
        r = ko(e, Me.Long);
        break;
    case "fullDate":
        r = ko(e, Me.Full);
        break;
    case "shortTime":
        r = Po(e, Me.Short);
        break;
    case "mediumTime":
        r = Po(e, Me.Medium);
        break;
    case "longTime":
        r = Po(e, Me.Long);
        break;
    case "fullTime":
        r = Po(e, Me.Full);
        break;
    case "short":
        let o = xt(e, "shortTime")
          , i = xt(e, "shortDate");
        r = ua(Fo(e, Me.Short), [o, i]);
        break;
    case "medium":
        let s = xt(e, "mediumTime")
          , a = xt(e, "mediumDate");
        r = ua(Fo(e, Me.Medium), [s, a]);
        break;
    case "long":
        let c = xt(e, "longTime")
          , u = xt(e, "longDate");
        r = ua(Fo(e, Me.Long), [c, u]);
        break;
    case "full":
        let l = xt(e, "fullTime")
          , d = xt(e, "fullDate");
        r = ua(Fo(e, Me.Full), [l, d]);
        break
    }
    return r && (ca[n][t] = r),
    r
}
function ua(e, t) {
    return t && (e = e.replace(/\{([^}]+)}/g, function(n, r) {
        return t != null && r in t ? t[r] : n
    })),
    e
}
function ot(e, t, n="-", r, o) {
    let i = "";
    (e < 0 || o && e <= 0) && (o ? e = -e + 1 : (e = -e,
    i = n));
    let s = String(e);
    for (; s.length < t; )
        s = "0" + s;
    return r && (s = s.slice(s.length - t)),
    i + s
}
function Wb(e, t) {
    return ot(e, 3).substring(0, t)
}
function X(e, t, n=0, r=!1, o=!1) {
    return function(i, s) {
        let a = qb(e, i);
        if ((n > 0 || a > -n) && (a += n),
        e === 3)
            a === 0 && n === -12 && (a = 12);
        else if (e === 6)
            return Wb(a, t);
        let c = pt(s, Ne.MinusSign);
        return ot(a, t, c, r, o)
    }
}
function qb(e, t) {
    switch (e) {
    case 0:
        return t.getFullYear();
    case 1:
        return t.getMonth();
    case 2:
        return t.getDate();
    case 3:
        return t.getHours();
    case 4:
        return t.getMinutes();
    case 5:
        return t.getSeconds();
    case 6:
        return t.getMilliseconds();
    case 7:
        return t.getDay();
    default:
        throw new m(2301,!1)
    }
}
function H(e, t, n=ye.Format, r=!1) {
    return function(o, i) {
        return Zb(o, i, e, t, n, r)
    }
}
function Zb(e, t, n, r, o, i) {
    switch (n) {
    case 2:
        return Lm(t, o, r)[e.getMonth()];
    case 1:
        return Fm(t, o, r)[e.getDay()];
    case 0:
        let s = e.getHours()
          , a = e.getMinutes();
        if (i) {
            let u = Vm(t)
              , l = Hm(t, o, r)
              , d = u.findIndex(h => {
                if (Array.isArray(h)) {
                    let[f,g] = h
                      , N = s >= f.hours && a >= f.minutes
                      , E = s < g.hours || s === g.hours && a < g.minutes;
                    if (f.hours < g.hours) {
                        if (N && E)
                            return !0
                    } else if (N || E)
                        return !0
                } else if (h.hours === s && h.minutes === a)
                    return !0;
                return !1
            }
            );
            if (d !== -1)
                return l[d]
        }
        return Pm(t, o, r)[s < 12 ? 0 : 1];
    case 3:
        return jm(t, r)[e.getFullYear() <= 0 ? 0 : 1];
    default:
        let c = n;
        throw new m(2302,!1)
    }
}
function la(e) {
    return function(t, n, r) {
        let o = -1 * r
          , i = pt(n, Ne.MinusSign)
          , s = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
        switch (e) {
        case 0:
            return (o >= 0 ? "+" : "") + ot(s, 2, i) + ot(Math.abs(o % 60), 2, i);
        case 1:
            return "GMT" + (o >= 0 ? "+" : "") + ot(s, 1, i);
        case 2:
            return "GMT" + (o >= 0 ? "+" : "") + ot(s, 2, i) + ":" + ot(Math.abs(o % 60), 2, i);
        case 3:
            return r === 0 ? "Z" : (o >= 0 ? "+" : "") + ot(s, 2, i) + ":" + ot(Math.abs(o % 60), 2, i);
        default:
            throw new m(2310,!1)
        }
    }
}
var Yb = 0
  , fa = 4;
function Qb(e) {
    let t = ha(e, Yb, 1).getDay();
    return ha(e, 0, 1 + (t <= fa ? fa : fa + 7) - t)
}
function zm(e) {
    let t = e.getDay()
      , n = t === 0 ? -3 : fa - t;
    return ha(e.getFullYear(), e.getMonth(), e.getDate() + n)
}
function ad(e, t=!1) {
    return function(n, r) {
        let o;
        if (t) {
            let i = new Date(n.getFullYear(),n.getMonth(),1).getDay() - 1
              , s = n.getDate();
            o = 1 + Math.floor((s + i) / 7)
        } else {
            let i = zm(n)
              , s = Qb(i.getFullYear())
              , a = i.getTime() - s.getTime();
            o = 1 + Math.round(a / 6048e5)
        }
        return ot(o, e, pt(r, Ne.MinusSign))
    }
}
function da(e, t=!1) {
    return function(n, r) {
        let i = zm(n).getFullYear();
        return ot(i, e, pt(r, Ne.MinusSign), t)
    }
}
var cd = {};
function Kb(e) {
    if (cd[e])
        return cd[e];
    let t;
    switch (e) {
    case "G":
    case "GG":
    case "GGG":
        t = H(3, V.Abbreviated);
        break;
    case "GGGG":
        t = H(3, V.Wide);
        break;
    case "GGGGG":
        t = H(3, V.Narrow);
        break;
    case "y":
        t = X(0, 1, 0, !1, !0);
        break;
    case "yy":
        t = X(0, 2, 0, !0, !0);
        break;
    case "yyy":
        t = X(0, 3, 0, !1, !0);
        break;
    case "yyyy":
        t = X(0, 4, 0, !1, !0);
        break;
    case "Y":
        t = da(1);
        break;
    case "YY":
        t = da(2, !0);
        break;
    case "YYY":
        t = da(3);
        break;
    case "YYYY":
        t = da(4);
        break;
    case "M":
    case "L":
        t = X(1, 1, 1);
        break;
    case "MM":
    case "LL":
        t = X(1, 2, 1);
        break;
    case "MMM":
        t = H(2, V.Abbreviated);
        break;
    case "MMMM":
        t = H(2, V.Wide);
        break;
    case "MMMMM":
        t = H(2, V.Narrow);
        break;
    case "LLL":
        t = H(2, V.Abbreviated, ye.Standalone);
        break;
    case "LLLL":
        t = H(2, V.Wide, ye.Standalone);
        break;
    case "LLLLL":
        t = H(2, V.Narrow, ye.Standalone);
        break;
    case "w":
        t = ad(1);
        break;
    case "ww":
        t = ad(2);
        break;
    case "W":
        t = ad(1, !0);
        break;
    case "d":
        t = X(2, 1);
        break;
    case "dd":
        t = X(2, 2);
        break;
    case "c":
    case "cc":
        t = X(7, 1);
        break;
    case "ccc":
        t = H(1, V.Abbreviated, ye.Standalone);
        break;
    case "cccc":
        t = H(1, V.Wide, ye.Standalone);
        break;
    case "ccccc":
        t = H(1, V.Narrow, ye.Standalone);
        break;
    case "cccccc":
        t = H(1, V.Short, ye.Standalone);
        break;
    case "E":
    case "EE":
    case "EEE":
        t = H(1, V.Abbreviated);
        break;
    case "EEEE":
        t = H(1, V.Wide);
        break;
    case "EEEEE":
        t = H(1, V.Narrow);
        break;
    case "EEEEEE":
        t = H(1, V.Short);
        break;
    case "a":
    case "aa":
    case "aaa":
        t = H(0, V.Abbreviated);
        break;
    case "aaaa":
        t = H(0, V.Wide);
        break;
    case "aaaaa":
        t = H(0, V.Narrow);
        break;
    case "b":
    case "bb":
    case "bbb":
        t = H(0, V.Abbreviated, ye.Standalone, !0);
        break;
    case "bbbb":
        t = H(0, V.Wide, ye.Standalone, !0);
        break;
    case "bbbbb":
        t = H(0, V.Narrow, ye.Standalone, !0);
        break;
    case "B":
    case "BB":
    case "BBB":
        t = H(0, V.Abbreviated, ye.Format, !0);
        break;
    case "BBBB":
        t = H(0, V.Wide, ye.Format, !0);
        break;
    case "BBBBB":
        t = H(0, V.Narrow, ye.Format, !0);
        break;
    case "h":
        t = X(3, 1, -12);
        break;
    case "hh":
        t = X(3, 2, -12);
        break;
    case "H":
        t = X(3, 1);
        break;
    case "HH":
        t = X(3, 2);
        break;
    case "m":
        t = X(4, 1);
        break;
    case "mm":
        t = X(4, 2);
        break;
    case "s":
        t = X(5, 1);
        break;
    case "ss":
        t = X(5, 2);
        break;
    case "S":
        t = X(6, 1);
        break;
    case "SS":
        t = X(6, 2);
        break;
    case "SSS":
        t = X(6, 3);
        break;
    case "Z":
    case "ZZ":
    case "ZZZ":
        t = la(0);
        break;
    case "ZZZZZ":
        t = la(3);
        break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
        t = la(1);
        break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
        t = la(2);
        break;
    default:
        return null
    }
    return cd[e] = t,
    t
}
function Gm(e, t) {
    e = e.replace(/:/g, "");
    let n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
    return isNaN(n) ? t : n
}
function Jb(e, t) {
    return e = new Date(e.getTime()),
    e.setMinutes(e.getMinutes() + t),
    e
}
function Xb(e, t, n) {
    let o = e.getTimezoneOffset()
      , i = Gm(t, o);
    return Jb(e, -1 * (i - o))
}
function eT(e) {
    if (Rm(e))
        return e;
    if (typeof e == "number" && !isNaN(e))
        return new Date(e);
    if (typeof e == "string") {
        if (e = e.trim(),
        /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)) {
            let[o,i=1,s=1] = e.split("-").map(a => +a);
            return ha(o, i - 1, s)
        }
        let n = parseFloat(e);
        if (!isNaN(e - n))
            return new Date(n);
        let r;
        if (r = e.match(Hb))
            return tT(r)
    }
    let t = new Date(e);
    if (!Rm(t))
        throw new m(2311,!1);
    return t
}
function tT(e) {
    let t = new Date(0)
      , n = 0
      , r = 0
      , o = e[8] ? t.setUTCFullYear : t.setFullYear
      , i = e[8] ? t.setUTCHours : t.setHours;
    e[9] && (n = Number(e[9] + e[10]),
    r = Number(e[9] + e[11])),
    o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
    let s = Number(e[4] || 0) - n
      , a = Number(e[5] || 0) - r
      , c = Number(e[6] || 0)
      , u = Math.floor(parseFloat("0." + (e[7] || 0)) * 1e3);
    return i.call(t, s, a, c, u),
    t
}
function Rm(e) {
    return e instanceof Date && !isNaN(e.valueOf())
}
var nT = /^(\d+)?\.((\d+)(-(\d+))?)?$/
  , Am = 22
  , pa = "."
  , Lo = "0"
  , rT = ";"
  , oT = ","
  , ud = "#";
function iT(e, t, n, r, o, i, s=!1) {
    let a = ""
      , c = !1;
    if (!isFinite(e))
        a = pt(n, Ne.Infinity);
    else {
        let u = cT(e);
        s && (u = aT(u));
        let l = t.minInt
          , d = t.minFrac
          , h = t.maxFrac;
        if (i) {
            let $ = i.match(nT);
            if ($ === null)
                throw new m(2306,!1);
            let Te = $[1]
              , G = $[3]
              , Lt = $[5];
            Te != null && (l = ld(Te)),
            G != null && (d = ld(G)),
            Lt != null ? h = ld(Lt) : G != null && d > h && (h = d);
            let mt = 100;
            if (l > mt || d > mt || h > mt)
                throw new m(2306,!1)
        }
        uT(u, d, h);
        let f = u.digits
          , g = u.integerLen
          , N = u.exponent
          , E = [];
        for (c = f.every($ => !$); g < l; g++)
            f.unshift(0);
        for (; g < 0; g++)
            f.unshift(0);
        g > 0 ? E = f.splice(g, f.length) : (E = f,
        f = [0]);
        let w = [];
        for (f.length >= t.lgSize && w.unshift(f.splice(-t.lgSize, f.length).join("")); f.length > t.gSize; )
            w.unshift(f.splice(-t.gSize, f.length).join(""));
        f.length && w.unshift(f.join("")),
        a = w.join(pt(n, r)),
        E.length && (a += pt(n, o) + E.join("")),
        N && (a += pt(n, Ne.Exponential) + "+" + N)
    }
    return e < 0 && !c ? a = t.negPre + a + t.negSuf : a = t.posPre + a + t.posSuf,
    a
}
function Wm(e, t, n) {
    let r = Um(t, hd.Decimal)
      , o = sT(r, pt(t, Ne.MinusSign));
    return iT(e, o, t, Ne.Group, Ne.Decimal, n)
}
function sT(e, t="-") {
    let n = {
        minInt: 1,
        minFrac: 0,
        maxFrac: 0,
        posPre: "",
        posSuf: "",
        negPre: "",
        negSuf: "",
        gSize: 0,
        lgSize: 0
    }
      , r = e.split(rT)
      , o = r[0]
      , i = r[1]
      , s = o.indexOf(pa) !== -1 ? o.split(pa) : [o.substring(0, o.lastIndexOf(Lo) + 1), o.substring(o.lastIndexOf(Lo) + 1)]
      , a = s[0]
      , c = s[1] || "";
    n.posPre = a.substring(0, a.indexOf(ud));
    for (let l = 0; l < c.length; l++) {
        let d = c.charAt(l);
        d === Lo ? n.minFrac = n.maxFrac = l + 1 : d === ud ? n.maxFrac = l + 1 : n.posSuf += d
    }
    let u = a.split(oT);
    if (n.gSize = u[1] ? u[1].length : 0,
    n.lgSize = u[2] || u[1] ? (u[2] || u[1]).length : 0,
    i) {
        let l = o.length - n.posPre.length - n.posSuf.length
          , d = i.indexOf(ud);
        n.negPre = i.substring(0, d).replace(/'/g, ""),
        n.negSuf = i.slice(d + l).replace(/'/g, "")
    } else
        n.negPre = t + n.posPre,
        n.negSuf = n.posSuf;
    return n
}
function aT(e) {
    if (e.digits[0] === 0)
        return e;
    let t = e.digits.length - e.integerLen;
    return e.exponent ? e.exponent += 2 : (t === 0 ? e.digits.push(0, 0) : t === 1 && e.digits.push(0),
    e.integerLen += 2),
    e
}
function cT(e) {
    let t = Math.abs(e) + "", n = 0, r, o, i, s, a;
    for ((o = t.indexOf(pa)) > -1 && (t = t.replace(pa, "")),
    (i = t.search(/e/i)) > 0 ? (o < 0 && (o = i),
    o += +t.slice(i + 1),
    t = t.substring(0, i)) : o < 0 && (o = t.length),
    i = 0; t.charAt(i) === Lo; i++)
        ;
    if (i === (a = t.length))
        r = [0],
        o = 1;
    else {
        for (a--; t.charAt(a) === Lo; )
            a--;
        for (o -= i,
        r = [],
        s = 0; i <= a; i++,
        s++)
            r[s] = Number(t.charAt(i))
    }
    return o > Am && (r = r.splice(0, Am - 1),
    n = o - 1,
    o = 1),
    {
        digits: r,
        exponent: n,
        integerLen: o
    }
}
function uT(e, t, n) {
    if (t > n)
        throw new m(2307,!1);
    let r = e.digits
      , o = r.length - e.integerLen
      , i = Math.min(Math.max(t, o), n)
      , s = i + e.integerLen
      , a = r[s];
    if (s > 0) {
        r.splice(Math.max(e.integerLen, s));
        for (let d = s; d < r.length; d++)
            r[d] = 0
    } else {
        o = Math.max(0, o),
        e.integerLen = 1,
        r.length = Math.max(1, s = i + 1),
        r[0] = 0;
        for (let d = 1; d < s; d++)
            r[d] = 0
    }
    if (a >= 5)
        if (s - 1 < 0) {
            for (let d = 0; d > s; d--)
                r.unshift(0),
                e.integerLen++;
            r.unshift(1),
            e.integerLen++
        } else
            r[s - 1]++;
    for (; o < Math.max(0, i); o++)
        r.push(0);
    let c = i !== 0
      , u = t + e.integerLen
      , l = r.reduceRight(function(d, h, f, g) {
        return h = h + d,
        g[f] = h < 10 ? h : h - 10,
        c && (g[f] === 0 && f >= u ? g.pop() : c = !1),
        h >= 10 ? 1 : 0
    }, 0);
    l && (r.unshift(l),
    e.integerLen++)
}
function ld(e) {
    let t = parseInt(e);
    if (isNaN(t))
        throw new m(2305,!1);
    return t
}
var ga = class {
    $implicit;
    ngForOf;
    index;
    count;
    constructor(t, n, r, o) {
        this.$implicit = t,
        this.ngForOf = n,
        this.index = r,
        this.count = o
    }
    get first() {
        return this.index === 0
    }
    get last() {
        return this.index === this.count - 1
    }
    get even() {
        return this.index % 2 === 0
    }
    get odd() {
        return !this.even
    }
}
  , qm = ( () => {
    class e {
        _viewContainer;
        _template;
        _differs;
        set ngForOf(n) {
            this._ngForOf = n,
            this._ngForOfDirty = !0
        }
        set ngForTrackBy(n) {
            this._trackByFn = n
        }
        get ngForTrackBy() {
            return this._trackByFn
        }
        _ngForOf = null;
        _ngForOfDirty = !0;
        _differ = null;
        _trackByFn;
        constructor(n, r, o) {
            this._viewContainer = n,
            this._template = r,
            this._differs = o
        }
        set ngForTemplate(n) {
            n && (this._template = n)
        }
        ngDoCheck() {
            if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                let n = this._ngForOf;
                !this._differ && n && (this._differ = this._differs.find(n).create(this.ngForTrackBy))
            }
            if (this._differ) {
                let n = this._differ.diff(this._ngForOf);
                n && this._applyChanges(n)
            }
        }
        _applyChanges(n) {
            let r = this._viewContainer;
            n.forEachOperation( (o, i, s) => {
                if (o.previousIndex == null)
                    r.createEmbeddedView(this._template, new ga(o.item,this._ngForOf,-1,-1), s === null ? void 0 : s);
                else if (s == null)
                    r.remove(i === null ? void 0 : i);
                else if (i !== null) {
                    let a = r.get(i);
                    r.move(a, s),
                    xm(a, o)
                }
            }
            );
            for (let o = 0, i = r.length; o < i; o++) {
                let a = r.get(o).context;
                a.index = o,
                a.count = i,
                a.ngForOf = this._ngForOf
            }
            n.forEachIdentityChange(o => {
                let i = r.get(o.currentIndex);
                xm(i, o)
            }
            )
        }
        static ngTemplateContextGuard(n, r) {
            return !0
        }
        static \u0275fac = function(r) {
            return new (r || e)(me(Nt),me(en),me(od))
        }
        ;
        static \u0275dir = Er({
            type: e,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
                ngForOf: "ngForOf",
                ngForTrackBy: "ngForTrackBy",
                ngForTemplate: "ngForTemplate"
            }
        })
    }
    return e
}
)();
function xm(e, t) {
    e.context.$implicit = t.item
}
var lT = ( () => {
    class e {
        _viewContainer;
        _context = new ma;
        _thenTemplateRef = null;
        _elseTemplateRef = null;
        _thenViewRef = null;
        _elseViewRef = null;
        constructor(n, r) {
            this._viewContainer = n,
            this._thenTemplateRef = r
        }
        set ngIf(n) {
            this._context.$implicit = this._context.ngIf = n,
            this._updateView()
        }
        set ngIfThen(n) {
            Om(n, !1),
            this._thenTemplateRef = n,
            this._thenViewRef = null,
            this._updateView()
        }
        set ngIfElse(n) {
            Om(n, !1),
            this._elseTemplateRef = n,
            this._elseViewRef = null,
            this._updateView()
        }
        _updateView() {
            this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(),
            this._elseViewRef = null,
            this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(),
            this._thenViewRef = null,
            this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
        }
        static ngIfUseIfTypeGuard;
        static ngTemplateGuard_ngIf;
        static ngTemplateContextGuard(n, r) {
            return !0
        }
        static \u0275fac = function(r) {
            return new (r || e)(me(Nt),me(en))
        }
        ;
        static \u0275dir = Er({
            type: e,
            selectors: [["", "ngIf", ""]],
            inputs: {
                ngIf: "ngIf",
                ngIfThen: "ngIfThen",
                ngIfElse: "ngIfElse"
            }
        })
    }
    return e
}
)()
  , ma = class {
    $implicit = null;
    ngIf = null
}
;
function Om(e, t) {
    if (e && !e.createEmbeddedView)
        throw new m(2020,!1)
}
function jo(e, t) {
    return new m(2100,!1)
}
var dd = class {
    createSubscription(t, n, r) {
        return rt( () => t.subscribe({
            next: n,
            error: r
        }))
    }
    dispose(t) {
        rt( () => t.unsubscribe())
    }
}
  , fd = class {
    createSubscription(t, n, r) {
        return t.then(o => n?.(o), o => r?.(o)),
        {
            unsubscribe: () => {
                n = null,
                r = null
            }
        }
    }
    dispose(t) {
        t.unsubscribe()
    }
}
  , dT = new fd
  , fT = new dd
  , hT = ( () => {
    class e {
        _ref;
        _latestValue = null;
        markForCheckOnValueUpdate = !0;
        _subscription = null;
        _obj = null;
        _strategy = null;
        applicationErrorHandler = p(xe);
        constructor(n) {
            this._ref = n
        }
        ngOnDestroy() {
            this._subscription && this._dispose(),
            this._ref = null
        }
        transform(n) {
            if (!this._obj) {
                if (n)
                    try {
                        this.markForCheckOnValueUpdate = !1,
                        this._subscribe(n)
                    } finally {
                        this.markForCheckOnValueUpdate = !0
                    }
                return this._latestValue
            }
            return n !== this._obj ? (this._dispose(),
            this.transform(n)) : this._latestValue
        }
        _subscribe(n) {
            this._obj = n,
            this._strategy = this._selectStrategy(n),
            this._subscription = this._strategy.createSubscription(n, r => this._updateLatestValue(n, r), r => this.applicationErrorHandler(r))
        }
        _selectStrategy(n) {
            if (kn(n))
                return dT;
            if (ta(n))
                return fT;
            throw jo(e, n)
        }
        _dispose() {
            this._strategy.dispose(this._subscription),
            this._latestValue = null,
            this._subscription = null,
            this._obj = null
        }
        _updateLatestValue(n, r) {
            n === this._obj && (this._latestValue = r,
            this.markForCheckOnValueUpdate && this._ref?.markForCheck())
        }
        static \u0275fac = function(r) {
            return new (r || e)(me(sa, 16))
        }
        ;
        static \u0275pipe = On({
            name: "async",
            type: e,
            pure: !1
        })
    }
    return e
}
)();
var pT = ( () => {
    class e {
        transform(n) {
            return n == null ? null : (gT(e, n),
            n.toUpperCase())
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275pipe = On({
            name: "uppercase",
            type: e,
            pure: !0
        })
    }
    return e
}
)();
function gT(e, t) {
    if (typeof t != "string")
        throw jo(e, t)
}
var mT = "mediumDate"
  , Zm = new D("")
  , Ym = new D("")
  , yT = ( () => {
    class e {
        locale;
        defaultTimezone;
        defaultOptions;
        constructor(n, r, o) {
            this.locale = n,
            this.defaultTimezone = r,
            this.defaultOptions = o
        }
        transform(n, r, o, i) {
            if (n == null || n === "" || n !== n)
                return null;
            try {
                let s = r ?? this.defaultOptions?.dateFormat ?? mT
                  , a = o ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? void 0;
                return $m(n, s, i || this.locale, a)
            } catch (s) {
                throw jo(e, s.message)
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)(me(wr, 16),me(Zm, 24),me(Ym, 24))
        }
        ;
        static \u0275pipe = On({
            name: "date",
            type: e,
            pure: !0
        })
    }
    return e
}
)();
var vT = ( () => {
    class e {
        _locale;
        constructor(n) {
            this._locale = n
        }
        transform(n, r, o) {
            if (!DT(n))
                return null;
            o ||= this._locale;
            try {
                let i = ET(n);
                return Wm(i, o, r)
            } catch (i) {
                throw jo(e, i.message)
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)(me(wr, 16))
        }
        ;
        static \u0275pipe = On({
            name: "number",
            type: e,
            pure: !0
        })
    }
    return e
}
)();
function DT(e) {
    return !(e == null || e === "" || e !== e)
}
function ET(e) {
    if (typeof e == "string" && !isNaN(Number(e) - parseFloat(e)))
        return Number(e);
    if (typeof e != "number")
        throw new m(2309,!1);
    return e
}
var wT = ( () => {
    class e {
        transform(n, r, o) {
            if (n == null)
                return null;
            if (!(typeof n == "string" || Array.isArray(n)))
                throw jo(e, n);
            return n.slice(r, o)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275pipe = On({
            name: "slice",
            type: e,
            pure: !1
        })
    }
    return e
}
)();
var Qm = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275mod = Dr({
            type: e
        });
        static \u0275inj = Dn({})
    }
    return e
}
)();
function Uo(e, t) {
    t = encodeURIComponent(t);
    for (let n of e.split(";")) {
        let r = n.indexOf("=")
          , [o,i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
        if (o.trim() === t)
            return decodeURIComponent(i)
    }
    return null
}
var Fn = class {
}
;
var Km = "browser";
var Bo = class {
    _doc;
    constructor(t) {
        this._doc = t
    }
    manager
}
  , ya = ( () => {
    class e extends Bo {
        constructor(n) {
            super(n)
        }
        supports(n) {
            return !0
        }
        addEventListener(n, r, o, i) {
            return n.addEventListener(r, o, i),
            () => this.removeEventListener(n, r, o, i)
        }
        removeEventListener(n, r, o, i) {
            return n.removeEventListener(r, o, i)
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(Z))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , Ea = new D("")
  , yd = ( () => {
    class e {
        _zone;
        _plugins;
        _eventNameToPlugin = new Map;
        constructor(n, r) {
            this._zone = r,
            n.forEach(s => {
                s.manager = this
            }
            );
            let o = n.filter(s => !(s instanceof ya));
            this._plugins = o.slice().reverse();
            let i = n.find(s => s instanceof ya);
            i && this._plugins.push(i)
        }
        addEventListener(n, r, o, i) {
            return this._findPluginFor(r).addEventListener(n, r, o, i)
        }
        getZone() {
            return this._zone
        }
        _findPluginFor(n) {
            let r = this._eventNameToPlugin.get(n);
            if (r)
                return r;
            if (r = this._plugins.find(i => i.supports(n)),
            !r)
                throw new m(5101,!1);
            return this._eventNameToPlugin.set(n, r),
            r
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(Ea),I(Ie))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , pd = "ng-app-id";
function Jm(e) {
    for (let t of e)
        t.remove()
}
function Xm(e, t) {
    let n = t.createElement("style");
    return n.textContent = e,
    n
}
function IT(e, t, n, r) {
    let o = e.head?.querySelectorAll(`style[${pd}="${t}"],link[${pd}="${t}"]`);
    if (o)
        for (let i of o)
            i.removeAttribute(pd),
            i instanceof HTMLLinkElement ? r.set(i.href.slice(i.href.lastIndexOf("/") + 1), {
                usage: 0,
                elements: [i]
            }) : i.textContent && n.set(i.textContent, {
                usage: 0,
                elements: [i]
            })
}
function md(e, t) {
    let n = t.createElement("link");
    return n.setAttribute("rel", "stylesheet"),
    n.setAttribute("href", e),
    n
}
var vd = ( () => {
    class e {
        doc;
        appId;
        nonce;
        inline = new Map;
        external = new Map;
        hosts = new Set;
        constructor(n, r, o, i={}) {
            this.doc = n,
            this.appId = r,
            this.nonce = o,
            IT(n, r, this.inline, this.external),
            this.hosts.add(n.head)
        }
        addStyles(n, r) {
            for (let o of n)
                this.addUsage(o, this.inline, Xm);
            r?.forEach(o => this.addUsage(o, this.external, md))
        }
        removeStyles(n, r) {
            for (let o of n)
                this.removeUsage(o, this.inline);
            r?.forEach(o => this.removeUsage(o, this.external))
        }
        addUsage(n, r, o) {
            let i = r.get(n);
            i ? i.usage++ : r.set(n, {
                usage: 1,
                elements: [...this.hosts].map(s => this.addElement(s, o(n, this.doc)))
            })
        }
        removeUsage(n, r) {
            let o = r.get(n);
            o && (o.usage--,
            o.usage <= 0 && (Jm(o.elements),
            r.delete(n)))
        }
        ngOnDestroy() {
            for (let[,{elements: n}] of [...this.inline, ...this.external])
                Jm(n);
            this.hosts.clear()
        }
        addHost(n) {
            this.hosts.add(n);
            for (let[r,{elements: o}] of this.inline)
                o.push(this.addElement(n, Xm(r, this.doc)));
            for (let[r,{elements: o}] of this.external)
                o.push(this.addElement(n, md(r, this.doc)))
        }
        removeHost(n) {
            this.hosts.delete(n)
        }
        addElement(n, r) {
            return this.nonce && r.setAttribute("nonce", this.nonce),
            n.appendChild(r)
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(Z),I(Hs),I(So, 8),I(To))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , gd = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML"
}
  , Dd = /%COMP%/g;
var ty = "%COMP%"
  , CT = `_nghost-${ty}`
  , bT = `_ngcontent-${ty}`
  , TT = !0
  , ST = new D("",{
    factory: () => TT
});
function _T(e) {
    return bT.replace(Dd, e)
}
function MT(e) {
    return CT.replace(Dd, e)
}
function ny(e, t) {
    return t.map(n => n.replace(Dd, e))
}
var Ed = ( () => {
    class e {
        eventManager;
        sharedStylesHost;
        appId;
        removeStylesOnCompDestroy;
        doc;
        ngZone;
        nonce;
        tracingService;
        rendererByCompId = new Map;
        defaultRenderer;
        constructor(n, r, o, i, s, a, c=null, u=null) {
            this.eventManager = n,
            this.sharedStylesHost = r,
            this.appId = o,
            this.removeStylesOnCompDestroy = i,
            this.doc = s,
            this.ngZone = a,
            this.nonce = c,
            this.tracingService = u,
            this.defaultRenderer = new Vo(n,s,a,this.tracingService)
        }
        createRenderer(n, r) {
            if (!n || !r)
                return this.defaultRenderer;
            let o = this.getOrCreateRenderer(n, r);
            return o instanceof Da ? o.applyToHost(n) : o instanceof Ho && o.applyStyles(),
            o
        }
        getOrCreateRenderer(n, r) {
            let o = this.rendererByCompId
              , i = o.get(r.id);
            if (!i) {
                let s = this.doc
                  , a = this.ngZone
                  , c = this.eventManager
                  , u = this.sharedStylesHost
                  , l = this.removeStylesOnCompDestroy
                  , d = this.tracingService;
                switch (r.encapsulation) {
                case et.Emulated:
                    i = new Da(c,u,r,this.appId,l,s,a,d);
                    break;
                case et.ShadowDom:
                    return new va(c,n,r,s,a,this.nonce,d,u);
                case et.ExperimentalIsolatedShadowDom:
                    return new va(c,n,r,s,a,this.nonce,d);
                default:
                    i = new Ho(c,u,r,l,s,a,d);
                    break
                }
                o.set(r.id, i)
            }
            return i
        }
        ngOnDestroy() {
            this.rendererByCompId.clear()
        }
        componentReplaced(n) {
            this.rendererByCompId.delete(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(yd),I(vd),I(Hs),I(ST),I(Z),I(Ie),I(So),I(ht, 8))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , Vo = class {
    eventManager;
    doc;
    ngZone;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(t, n, r, o) {
        this.eventManager = t,
        this.doc = n,
        this.ngZone = r,
        this.tracingService = o
    }
    destroy() {}
    destroyNode = null;
    createElement(t, n) {
        return n ? this.doc.createElementNS(gd[n] || n, t) : this.doc.createElement(t)
    }
    createComment(t) {
        return this.doc.createComment(t)
    }
    createText(t) {
        return this.doc.createTextNode(t)
    }
    appendChild(t, n) {
        (ey(t) ? t.content : t).appendChild(n)
    }
    insertBefore(t, n, r) {
        t && (ey(t) ? t.content : t).insertBefore(n, r)
    }
    removeChild(t, n) {
        n.remove()
    }
    selectRootElement(t, n) {
        let r = typeof t == "string" ? this.doc.querySelector(t) : t;
        if (!r)
            throw new m(-5104,!1);
        return n || (r.textContent = ""),
        r
    }
    parentNode(t) {
        return t.parentNode
    }
    nextSibling(t) {
        return t.nextSibling
    }
    setAttribute(t, n, r, o) {
        if (o) {
            n = o + ":" + n;
            let i = gd[o];
            i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r)
        } else
            t.setAttribute(n, r)
    }
    removeAttribute(t, n, r) {
        if (r) {
            let o = gd[r];
            o ? t.removeAttributeNS(o, n) : t.removeAttribute(`${r}:${n}`)
        } else
            t.removeAttribute(n)
    }
    addClass(t, n) {
        t.classList.add(n)
    }
    removeClass(t, n) {
        t.classList.remove(n)
    }
    setStyle(t, n, r, o) {
        o & (dt.DashCase | dt.Important) ? t.style.setProperty(n, r, o & dt.Important ? "important" : "") : t.style[n] = r
    }
    removeStyle(t, n, r) {
        r & dt.DashCase ? t.style.removeProperty(n) : t.style[n] = ""
    }
    setProperty(t, n, r) {
        t != null && (t[n] = r)
    }
    setValue(t, n) {
        t.nodeValue = n
    }
    listen(t, n, r, o) {
        if (typeof t == "string" && (t = At().getGlobalEventTarget(this.doc, t),
        !t))
            throw new m(5102,!1);
        let i = this.decoratePreventDefault(r);
        return this.tracingService?.wrapEventListener && (i = this.tracingService.wrapEventListener(t, n, i)),
        this.eventManager.addEventListener(t, n, i, o)
    }
    decoratePreventDefault(t) {
        return n => {
            if (n === "__ngUnwrap__")
                return t;
            t(n) === !1 && n.preventDefault()
        }
    }
}
;
function ey(e) {
    return e.tagName === "TEMPLATE" && e.content !== void 0
}
var va = class extends Vo {
    hostEl;
    sharedStylesHost;
    shadowRoot;
    constructor(t, n, r, o, i, s, a, c) {
        super(t, o, i, a),
        this.hostEl = n,
        this.sharedStylesHost = c,
        this.shadowRoot = n.attachShadow({
            mode: "open"
        }),
        this.sharedStylesHost && this.sharedStylesHost.addHost(this.shadowRoot);
        let u = r.styles;
        u = ny(r.id, u);
        for (let d of u) {
            let h = document.createElement("style");
            s && h.setAttribute("nonce", s),
            h.textContent = d,
            this.shadowRoot.appendChild(h)
        }
        let l = r.getExternalStyles?.();
        if (l)
            for (let d of l) {
                let h = md(d, o);
                s && h.setAttribute("nonce", s),
                this.shadowRoot.appendChild(h)
            }
    }
    nodeOrShadowRoot(t) {
        return t === this.hostEl ? this.shadowRoot : t
    }
    appendChild(t, n) {
        return super.appendChild(this.nodeOrShadowRoot(t), n)
    }
    insertBefore(t, n, r) {
        return super.insertBefore(this.nodeOrShadowRoot(t), n, r)
    }
    removeChild(t, n) {
        return super.removeChild(null, n)
    }
    parentNode(t) {
        return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
    }
    destroy() {
        this.sharedStylesHost && this.sharedStylesHost.removeHost(this.shadowRoot)
    }
}
  , Ho = class extends Vo {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(t, n, r, o, i, s, a, c) {
        super(t, i, s, a),
        this.sharedStylesHost = n,
        this.removeStylesOnCompDestroy = o;
        let u = r.styles;
        this.styles = c ? ny(c, u) : u,
        this.styleUrls = r.getExternalStyles?.(c)
    }
    applyStyles() {
        this.sharedStylesHost.addStyles(this.styles, this.styleUrls)
    }
    destroy() {
        this.removeStylesOnCompDestroy && pr.size === 0 && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls)
    }
}
  , Da = class extends Ho {
    contentAttr;
    hostAttr;
    constructor(t, n, r, o, i, s, a, c) {
        let u = o + "-" + r.id;
        super(t, n, r, i, s, a, c, u),
        this.contentAttr = _T(u),
        this.hostAttr = MT(u)
    }
    applyToHost(t) {
        this.applyStyles(),
        this.setAttribute(t, this.hostAttr, "")
    }
    createElement(t, n) {
        let r = super.createElement(t, n);
        return super.setAttribute(r, this.contentAttr, ""),
        r
    }
}
;
var wa = class e extends Oo {
    supportsDOMEvents = !0;
    static makeCurrent() {
        id(new e)
    }
    onAndCancel(t, n, r, o) {
        return t.addEventListener(n, r, o),
        () => {
            t.removeEventListener(n, r, o)
        }
    }
    dispatchEvent(t, n) {
        t.dispatchEvent(n)
    }
    remove(t) {
        t.remove()
    }
    createElement(t, n) {
        return n = n || this.getDefaultDocument(),
        n.createElement(t)
    }
    createHtmlDocument() {
        return document.implementation.createHTMLDocument("fakeTitle")
    }
    getDefaultDocument() {
        return document
    }
    isElementNode(t) {
        return t.nodeType === Node.ELEMENT_NODE
    }
    isShadowRoot(t) {
        return t instanceof DocumentFragment
    }
    getGlobalEventTarget(t, n) {
        return n === "window" ? window : n === "document" ? t : n === "body" ? t.body : null
    }
    getBaseHref(t) {
        let n = NT();
        return n == null ? null : RT(n)
    }
    resetBaseElement() {
        $o = null
    }
    getUserAgent() {
        return window.navigator.userAgent
    }
    getCookie(t) {
        return Uo(document.cookie, t)
    }
}
  , $o = null;
function NT() {
    return $o = $o || document.head.querySelector("base"),
    $o ? $o.getAttribute("href") : null
}
function RT(e) {
    return new URL(e,document.baseURI).pathname
}
var AT = ( () => {
    class e {
        build() {
            return new XMLHttpRequest
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , ry = ["alt", "control", "meta", "shift"]
  , xT = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS"
}
  , OT = {
    alt: e => e.altKey,
    control: e => e.ctrlKey,
    meta: e => e.metaKey,
    shift: e => e.shiftKey
}
  , oy = ( () => {
    class e extends Bo {
        constructor(n) {
            super(n)
        }
        supports(n) {
            return e.parseEventName(n) != null
        }
        addEventListener(n, r, o, i) {
            let s = e.parseEventName(r)
              , a = e.eventCallback(s.fullKey, o, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular( () => At().onAndCancel(n, s.domEventName, a, i))
        }
        static parseEventName(n) {
            let r = n.toLowerCase().split(".")
              , o = r.shift();
            if (r.length === 0 || !(o === "keydown" || o === "keyup"))
                return null;
            let i = e._normalizeKey(r.pop())
              , s = ""
              , a = r.indexOf("code");
            if (a > -1 && (r.splice(a, 1),
            s = "code."),
            ry.forEach(u => {
                let l = r.indexOf(u);
                l > -1 && (r.splice(l, 1),
                s += u + ".")
            }
            ),
            s += i,
            r.length != 0 || i.length === 0)
                return null;
            let c = {};
            return c.domEventName = o,
            c.fullKey = s,
            c
        }
        static matchEventFullKeyCode(n, r) {
            let o = xT[n.key] || n.key
              , i = "";
            return r.indexOf("code.") > -1 && (o = n.code,
            i = "code."),
            o == null || !o ? !1 : (o = o.toLowerCase(),
            o === " " ? o = "space" : o === "." && (o = "dot"),
            ry.forEach(s => {
                if (s !== o) {
                    let a = OT[s];
                    a(n) && (i += s + ".")
                }
            }
            ),
            i += o,
            i === r)
        }
        static eventCallback(n, r, o) {
            return i => {
                e.matchEventFullKeyCode(i, n) && o.runGuarded( () => r(i))
            }
        }
        static _normalizeKey(n) {
            return n === "esc" ? "escape" : n
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(Z))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)();
async function kT(e, t, n) {
    let r = y({
        rootComponent: e
    }, PT(t, n));
    return bm(r)
}
function PT(e, t) {
    return {
        platformRef: t?.platformRef,
        appProviders: [...BT, ...e?.providers ?? []],
        platformProviders: UT
    }
}
function FT() {
    wa.makeCurrent()
}
function LT() {
    return new at
}
function jT() {
    return fl(document),
    document
}
var UT = [{
    provide: To,
    useValue: Km
}, {
    provide: $s,
    useValue: FT,
    multi: !0
}, {
    provide: Z,
    useFactory: jT
}];
var BT = [{
    provide: no,
    useValue: "root"
}, {
    provide: at,
    useFactory: LT
}, {
    provide: Ea,
    useClass: ya,
    multi: !0
}, {
    provide: Ea,
    useClass: oy,
    multi: !0
}, Ed, vd, yd, {
    provide: Rn,
    useExisting: Ed
}, {
    provide: Fn,
    useClass: AT
}, []];
var He = class e {
    headers;
    normalizedNames = new Map;
    lazyInit;
    lazyUpdate = null;
    constructor(t) {
        t ? typeof t == "string" ? this.lazyInit = () => {
            this.headers = new Map,
            t.split(`
`).forEach(n => {
                let r = n.indexOf(":");
                if (r > 0) {
                    let o = n.slice(0, r)
                      , i = n.slice(r + 1).trim();
                    this.addHeaderEntry(o, i)
                }
            }
            )
        }
        : typeof Headers < "u" && t instanceof Headers ? (this.headers = new Map,
        t.forEach( (n, r) => {
            this.addHeaderEntry(r, n)
        }
        )) : this.lazyInit = () => {
            this.headers = new Map,
            Object.entries(t).forEach( ([n,r]) => {
                this.setHeaderEntries(n, r)
            }
            )
        }
        : this.headers = new Map
    }
    has(t) {
        return this.init(),
        this.headers.has(t.toLowerCase())
    }
    get(t) {
        this.init();
        let n = this.headers.get(t.toLowerCase());
        return n && n.length > 0 ? n[0] : null
    }
    keys() {
        return this.init(),
        Array.from(this.normalizedNames.values())
    }
    getAll(t) {
        return this.init(),
        this.headers.get(t.toLowerCase()) || null
    }
    append(t, n) {
        return this.clone({
            name: t,
            value: n,
            op: "a"
        })
    }
    set(t, n) {
        return this.clone({
            name: t,
            value: n,
            op: "s"
        })
    }
    delete(t, n) {
        return this.clone({
            name: t,
            value: n,
            op: "d"
        })
    }
    maybeSetNormalizedName(t, n) {
        this.normalizedNames.has(n) || this.normalizedNames.set(n, t)
    }
    init() {
        this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(),
        this.lazyInit = null,
        this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)),
        this.lazyUpdate = null))
    }
    copyFrom(t) {
        t.init(),
        Array.from(t.headers.keys()).forEach(n => {
            this.headers.set(n, t.headers.get(n)),
            this.normalizedNames.set(n, t.normalizedNames.get(n))
        }
        )
    }
    clone(t) {
        let n = new e;
        return n.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this,
        n.lazyUpdate = (this.lazyUpdate || []).concat([t]),
        n
    }
    applyUpdate(t) {
        let n = t.name.toLowerCase();
        switch (t.op) {
        case "a":
        case "s":
            let r = t.value;
            if (typeof r == "string" && (r = [r]),
            r.length === 0)
                return;
            this.maybeSetNormalizedName(t.name, n);
            let o = (t.op === "a" ? this.headers.get(n) : void 0) || [];
            o.push(...r),
            this.headers.set(n, o);
            break;
        case "d":
            let i = t.value;
            if (!i)
                this.headers.delete(n),
                this.normalizedNames.delete(n);
            else {
                let s = this.headers.get(n);
                if (!s)
                    return;
                s = s.filter(a => i.indexOf(a) === -1),
                s.length === 0 ? (this.headers.delete(n),
                this.normalizedNames.delete(n)) : this.headers.set(n, s)
            }
            break
        }
    }
    addHeaderEntry(t, n) {
        let r = t.toLowerCase();
        this.maybeSetNormalizedName(t, r),
        this.headers.has(r) ? this.headers.get(r).push(n) : this.headers.set(r, [n])
    }
    setHeaderEntries(t, n) {
        let r = (Array.isArray(n) ? n : [n]).map(i => i.toString())
          , o = t.toLowerCase();
        this.headers.set(o, r),
        this.maybeSetNormalizedName(t, o)
    }
    forEach(t) {
        this.init(),
        Array.from(this.normalizedNames.keys()).forEach(n => t(this.normalizedNames.get(n), this.headers.get(n)))
    }
}
;
var Ca = class {
    map = new Map;
    set(t, n) {
        return this.map.set(t, n),
        this
    }
    get(t) {
        return this.map.has(t) || this.map.set(t, t.defaultValue()),
        this.map.get(t)
    }
    delete(t) {
        return this.map.delete(t),
        this
    }
    has(t) {
        return this.map.has(t)
    }
    keys() {
        return this.map.keys()
    }
}
  , ba = class {
    encodeKey(t) {
        return iy(t)
    }
    encodeValue(t) {
        return iy(t)
    }
    decodeKey(t) {
        return decodeURIComponent(t)
    }
    decodeValue(t) {
        return decodeURIComponent(t)
    }
}
;
function VT(e, t) {
    let n = new Map;
    return e.length > 0 && e.replace(/^\?/, "").split("&").forEach(o => {
        let i = o.indexOf("=")
          , [s,a] = i == -1 ? [t.decodeKey(o), ""] : [t.decodeKey(o.slice(0, i)), t.decodeValue(o.slice(i + 1))]
          , c = n.get(s) || [];
        c.push(a),
        n.set(s, c)
    }
    ),
    n
}
var HT = /%(\d[a-f0-9])/gi
  , $T = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/"
};
function iy(e) {
    return encodeURIComponent(e).replace(HT, (t, n) => $T[n] ?? t)
}
function Ia(e) {
    return `${e}`
}
var Ot = class e {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(t={}) {
        if (this.encoder = t.encoder || new ba,
        t.fromString) {
            if (t.fromObject)
                throw new m(2805,!1);
            this.map = VT(t.fromString, this.encoder)
        } else
            t.fromObject ? (this.map = new Map,
            Object.keys(t.fromObject).forEach(n => {
                let r = t.fromObject[n]
                  , o = Array.isArray(r) ? r.map(Ia) : [Ia(r)];
                this.map.set(n, o)
            }
            )) : this.map = null
    }
    has(t) {
        return this.init(),
        this.map.has(t)
    }
    get(t) {
        this.init();
        let n = this.map.get(t);
        return n ? n[0] : null
    }
    getAll(t) {
        return this.init(),
        this.map.get(t) || null
    }
    keys() {
        return this.init(),
        Array.from(this.map.keys())
    }
    append(t, n) {
        return this.clone({
            param: t,
            value: n,
            op: "a"
        })
    }
    appendAll(t) {
        let n = [];
        return Object.keys(t).forEach(r => {
            let o = t[r];
            Array.isArray(o) ? o.forEach(i => {
                n.push({
                    param: r,
                    value: i,
                    op: "a"
                })
            }
            ) : n.push({
                param: r,
                value: o,
                op: "a"
            })
        }
        ),
        this.clone(n)
    }
    set(t, n) {
        return this.clone({
            param: t,
            value: n,
            op: "s"
        })
    }
    delete(t, n) {
        return this.clone({
            param: t,
            value: n,
            op: "d"
        })
    }
    toString() {
        return this.init(),
        this.keys().map(t => {
            let n = this.encoder.encodeKey(t);
            return this.map.get(t).map(r => n + "=" + this.encoder.encodeValue(r)).join("&")
        }
        ).filter(t => t !== "").join("&")
    }
    clone(t) {
        let n = new e({
            encoder: this.encoder
        });
        return n.cloneFrom = this.cloneFrom || this,
        n.updates = (this.updates || []).concat(t),
        n
    }
    init() {
        this.map === null && (this.map = new Map),
        this.cloneFrom !== null && (this.cloneFrom.init(),
        this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))),
        this.updates.forEach(t => {
            switch (t.op) {
            case "a":
            case "s":
                let n = (t.op === "a" ? this.map.get(t.param) : void 0) || [];
                n.push(Ia(t.value)),
                this.map.set(t.param, n);
                break;
            case "d":
                if (t.value !== void 0) {
                    let r = this.map.get(t.param) || []
                      , o = r.indexOf(Ia(t.value));
                    o !== -1 && r.splice(o, 1),
                    r.length > 0 ? this.map.set(t.param, r) : this.map.delete(t.param)
                } else {
                    this.map.delete(t.param);
                    break
                }
            }
        }
        ),
        this.cloneFrom = this.updates = null)
    }
}
;
function zT(e) {
    switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
        return !1;
    default:
        return !0
    }
}
function sy(e) {
    return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer
}
function ay(e) {
    return typeof Blob < "u" && e instanceof Blob
}
function cy(e) {
    return typeof FormData < "u" && e instanceof FormData
}
function GT(e) {
    return typeof URLSearchParams < "u" && e instanceof URLSearchParams
}
var uy = "Content-Type"
  , ly = "Accept"
  , dy = "text/plain"
  , fy = "application/json"
  , WT = `${fy}, ${dy}, */*`
  , br = class e {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    credentials;
    keepalive = !1;
    cache;
    priority;
    mode;
    redirect;
    referrer;
    integrity;
    referrerPolicy;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    timeout;
    constructor(t, n, r, o) {
        this.url = n,
        this.method = t.toUpperCase();
        let i;
        if (zT(this.method) || o ? (this.body = r !== void 0 ? r : null,
        i = o) : i = r,
        i) {
            if (this.reportProgress = !!i.reportProgress,
            this.withCredentials = !!i.withCredentials,
            this.keepalive = !!i.keepalive,
            i.responseType && (this.responseType = i.responseType),
            i.headers && (this.headers = i.headers),
            i.context && (this.context = i.context),
            i.params && (this.params = i.params),
            i.priority && (this.priority = i.priority),
            i.cache && (this.cache = i.cache),
            i.credentials && (this.credentials = i.credentials),
            typeof i.timeout == "number") {
                if (i.timeout < 1 || !Number.isInteger(i.timeout))
                    throw new m(2822,"");
                this.timeout = i.timeout
            }
            i.mode && (this.mode = i.mode),
            i.redirect && (this.redirect = i.redirect),
            i.integrity && (this.integrity = i.integrity),
            i.referrer !== void 0 && (this.referrer = i.referrer),
            i.referrerPolicy && (this.referrerPolicy = i.referrerPolicy),
            this.transferCache = i.transferCache
        }
        if (this.headers ??= new He,
        this.context ??= new Ca,
        !this.params)
            this.params = new Ot,
            this.urlWithParams = n;
        else {
            let s = this.params.toString();
            if (s.length === 0)
                this.urlWithParams = n;
            else {
                let a = n.indexOf("?")
                  , c = a === -1 ? "?" : a < n.length - 1 ? "&" : "";
                this.urlWithParams = n + c + s
            }
        }
    }
    serializeBody() {
        return this.body === null ? null : typeof this.body == "string" || sy(this.body) || ay(this.body) || cy(this.body) || GT(this.body) ? this.body : this.body instanceof Ot ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
    }
    detectContentTypeHeader() {
        return this.body === null || cy(this.body) ? null : ay(this.body) ? this.body.type || null : sy(this.body) ? null : typeof this.body == "string" ? dy : this.body instanceof Ot ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? fy : null
    }
    clone(t={}) {
        let n = t.method || this.method
          , r = t.url || this.url
          , o = t.responseType || this.responseType
          , i = t.keepalive ?? this.keepalive
          , s = t.priority || this.priority
          , a = t.cache || this.cache
          , c = t.mode || this.mode
          , u = t.redirect || this.redirect
          , l = t.credentials || this.credentials
          , d = t.referrer ?? this.referrer
          , h = t.integrity || this.integrity
          , f = t.referrerPolicy || this.referrerPolicy
          , g = t.transferCache ?? this.transferCache
          , N = t.timeout ?? this.timeout
          , E = t.body !== void 0 ? t.body : this.body
          , w = t.withCredentials ?? this.withCredentials
          , $ = t.reportProgress ?? this.reportProgress
          , Te = t.headers || this.headers
          , G = t.params || this.params
          , Lt = t.context ?? this.context;
        return t.setHeaders !== void 0 && (Te = Object.keys(t.setHeaders).reduce( (mt, sn) => mt.set(sn, t.setHeaders[sn]), Te)),
        t.setParams && (G = Object.keys(t.setParams).reduce( (mt, sn) => mt.set(sn, t.setParams[sn]), G)),
        new e(n,r,E,{
            params: G,
            headers: Te,
            context: Lt,
            reportProgress: $,
            responseType: o,
            withCredentials: w,
            transferCache: g,
            keepalive: i,
            cache: a,
            priority: s,
            timeout: N,
            mode: c,
            redirect: u,
            credentials: l,
            referrer: d,
            integrity: h,
            referrerPolicy: f
        })
    }
}
  , Ln = (function(e) {
    return e[e.Sent = 0] = "Sent",
    e[e.UploadProgress = 1] = "UploadProgress",
    e[e.ResponseHeader = 2] = "ResponseHeader",
    e[e.DownloadProgress = 3] = "DownloadProgress",
    e[e.Response = 4] = "Response",
    e[e.User = 5] = "User",
    e
}
)(Ln || {})
  , Sr = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    redirected;
    responseType;
    constructor(t, n=200, r="OK") {
        this.headers = t.headers || new He,
        this.status = t.status !== void 0 ? t.status : n,
        this.statusText = t.statusText || r,
        this.url = t.url || null,
        this.redirected = t.redirected,
        this.responseType = t.responseType,
        this.ok = this.status >= 200 && this.status < 300
    }
}
  , Ta = class e extends Sr {
    constructor(t={}) {
        super(t)
    }
    type = Ln.ResponseHeader;
    clone(t={}) {
        return new e({
            headers: t.headers || this.headers,
            status: t.status !== void 0 ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0
        })
    }
}
  , zo = class e extends Sr {
    body;
    constructor(t={}) {
        super(t),
        this.body = t.body !== void 0 ? t.body : null
    }
    type = Ln.Response;
    clone(t={}) {
        return new e({
            body: t.body !== void 0 ? t.body : this.body,
            headers: t.headers || this.headers,
            status: t.status !== void 0 ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0,
            redirected: t.redirected ?? this.redirected,
            responseType: t.responseType ?? this.responseType
        })
    }
}
  , Tr = class extends Sr {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(t) {
        super(t, 0, "Unknown Error"),
        this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${t.url || "(unknown url)"}` : this.message = `Http failure response for ${t.url || "(unknown url)"}: ${t.status} ${t.statusText}`,
        this.error = t.error || null
    }
}
  , qT = 200
  , ZT = 204;
var YT = new D("");
var QT = /^\)\]\}',?\n/;
var Id = ( () => {
    class e {
        xhrFactory;
        tracingService = p(ht, {
            optional: !0
        });
        constructor(n) {
            this.xhrFactory = n
        }
        maybePropagateTrace(n) {
            return this.tracingService?.propagate ? this.tracingService.propagate(n) : n
        }
        handle(n) {
            if (n.method === "JSONP")
                throw new m(-2800,!1);
            let r = this.xhrFactory;
            return T(null).pipe(re( () => new O(i => {
                let s = r.build();
                if (s.open(n.method, n.urlWithParams),
                n.withCredentials && (s.withCredentials = !0),
                n.headers.forEach( (E, w) => s.setRequestHeader(E, w.join(","))),
                n.headers.has(ly) || s.setRequestHeader(ly, WT),
                !n.headers.has(uy)) {
                    let E = n.detectContentTypeHeader();
                    E !== null && s.setRequestHeader(uy, E)
                }
                if (n.timeout && (s.timeout = n.timeout),
                n.responseType) {
                    let E = n.responseType.toLowerCase();
                    s.responseType = E !== "json" ? E : "text"
                }
                let a = n.serializeBody()
                  , c = null
                  , u = () => {
                    if (c !== null)
                        return c;
                    let E = s.statusText || "OK"
                      , w = new He(s.getAllResponseHeaders())
                      , $ = s.responseURL || n.url;
                    return c = new Ta({
                        headers: w,
                        status: s.status,
                        statusText: E,
                        url: $
                    }),
                    c
                }
                  , l = this.maybePropagateTrace( () => {
                    let {headers: E, status: w, statusText: $, url: Te} = u()
                      , G = null;
                    w !== ZT && (G = typeof s.response > "u" ? s.responseText : s.response),
                    w === 0 && (w = G ? qT : 0);
                    let Lt = w >= 200 && w < 300;
                    if (n.responseType === "json" && typeof G == "string") {
                        let mt = G;
                        G = G.replace(QT, "");
                        try {
                            G = G !== "" ? JSON.parse(G) : null
                        } catch (sn) {
                            G = mt,
                            Lt && (Lt = !1,
                            G = {
                                error: sn,
                                text: G
                            })
                        }
                    }
                    Lt ? (i.next(new zo({
                        body: G,
                        headers: E,
                        status: w,
                        statusText: $,
                        url: Te || void 0
                    })),
                    i.complete()) : i.error(new Tr({
                        error: G,
                        headers: E,
                        status: w,
                        statusText: $,
                        url: Te || void 0
                    }))
                }
                )
                  , d = this.maybePropagateTrace(E => {
                    let {url: w} = u()
                      , $ = new Tr({
                        error: E,
                        status: s.status || 0,
                        statusText: s.statusText || "Unknown Error",
                        url: w || void 0
                    });
                    i.error($)
                }
                )
                  , h = d;
                n.timeout && (h = this.maybePropagateTrace(E => {
                    let {url: w} = u()
                      , $ = new Tr({
                        error: new DOMException("Request timed out","TimeoutError"),
                        status: s.status || 0,
                        statusText: s.statusText || "Request timeout",
                        url: w || void 0
                    });
                    i.error($)
                }
                ));
                let f = !1
                  , g = this.maybePropagateTrace(E => {
                    f || (i.next(u()),
                    f = !0);
                    let w = {
                        type: Ln.DownloadProgress,
                        loaded: E.loaded
                    };
                    E.lengthComputable && (w.total = E.total),
                    n.responseType === "text" && s.responseText && (w.partialText = s.responseText),
                    i.next(w)
                }
                )
                  , N = this.maybePropagateTrace(E => {
                    let w = {
                        type: Ln.UploadProgress,
                        loaded: E.loaded
                    };
                    E.lengthComputable && (w.total = E.total),
                    i.next(w)
                }
                );
                return s.addEventListener("load", l),
                s.addEventListener("error", d),
                s.addEventListener("timeout", h),
                s.addEventListener("abort", d),
                n.reportProgress && (s.addEventListener("progress", g),
                a !== null && s.upload && s.upload.addEventListener("progress", N)),
                s.send(a),
                i.next({
                    type: Ln.Sent
                }),
                () => {
                    s.removeEventListener("error", d),
                    s.removeEventListener("abort", d),
                    s.removeEventListener("load", l),
                    s.removeEventListener("timeout", h),
                    n.reportProgress && (s.removeEventListener("progress", g),
                    a !== null && s.upload && s.upload.removeEventListener("progress", N)),
                    s.readyState !== s.DONE && s.abort()
                }
            }
            )))
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(Fn))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function KT(e, t) {
    return t(e)
}
function JT(e, t, n) {
    return (r, o) => ie(n, () => t(r, i => e(i, o)))
}
var hy = new D("",{
    factory: () => []
})
  , py = new D("")
  , gy = new D("",{
    factory: () => !0
});
var Cd = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: function(r) {
                let o = null;
                return r ? o = new (r || e) : o = I(Id),
                o
            },
            providedIn: "root"
        })
    }
    return e
}
)();
var Sa = ( () => {
    class e {
        backend;
        injector;
        chain = null;
        pendingTasks = p(ms);
        contributeToStability = p(gy);
        constructor(n, r) {
            this.backend = n,
            this.injector = r
        }
        handle(n) {
            if (this.chain === null) {
                let r = Array.from(new Set([...this.injector.get(hy), ...this.injector.get(py, [])]));
                this.chain = r.reduceRight( (o, i) => JT(o, i, this.injector), KT)
            }
            if (this.contributeToStability) {
                let r = this.pendingTasks.add();
                return this.chain(n, o => this.backend.handle(o)).pipe(Qn(r))
            } else
                return this.chain(n, r => this.backend.handle(r))
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(Cd),I(q))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , bd = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: function(r) {
                let o = null;
                return r ? o = new (r || e) : o = I(Sa),
                o
            },
            providedIn: "root"
        })
    }
    return e
}
)();
function wd(e, t) {
    return {
        body: t,
        headers: e.headers,
        context: e.context,
        observe: e.observe,
        params: e.params,
        reportProgress: e.reportProgress,
        responseType: e.responseType,
        withCredentials: e.withCredentials,
        credentials: e.credentials,
        transferCache: e.transferCache,
        timeout: e.timeout,
        keepalive: e.keepalive,
        priority: e.priority,
        cache: e.cache,
        mode: e.mode,
        redirect: e.redirect,
        integrity: e.integrity,
        referrer: e.referrer,
        referrerPolicy: e.referrerPolicy
    }
}
var _a = ( () => {
    class e {
        handler;
        constructor(n) {
            this.handler = n
        }
        request(n, r, o={}) {
            let i;
            if (n instanceof br)
                i = n;
            else {
                let c;
                o.headers instanceof He ? c = o.headers : c = new He(o.headers);
                let u;
                o.params && (o.params instanceof Ot ? u = o.params : u = new Ot({
                    fromObject: o.params
                })),
                i = new br(n,r,o.body !== void 0 ? o.body : null,{
                    headers: c,
                    context: o.context,
                    params: u,
                    reportProgress: o.reportProgress,
                    responseType: o.responseType || "json",
                    withCredentials: o.withCredentials,
                    transferCache: o.transferCache,
                    keepalive: o.keepalive,
                    priority: o.priority,
                    cache: o.cache,
                    mode: o.mode,
                    redirect: o.redirect,
                    credentials: o.credentials,
                    referrer: o.referrer,
                    referrerPolicy: o.referrerPolicy,
                    integrity: o.integrity,
                    timeout: o.timeout
                })
            }
            let s = T(i).pipe(Yn(c => this.handler.handle(c)));
            if (n instanceof br || o.observe === "events")
                return s;
            let a = s.pipe(qe(c => c instanceof zo));
            switch (o.observe || "body") {
            case "body":
                switch (i.responseType) {
                case "arraybuffer":
                    return a.pipe(k(c => {
                        if (c.body !== null && !(c.body instanceof ArrayBuffer))
                            throw new m(2806,!1);
                        return c.body
                    }
                    ));
                case "blob":
                    return a.pipe(k(c => {
                        if (c.body !== null && !(c.body instanceof Blob))
                            throw new m(2807,!1);
                        return c.body
                    }
                    ));
                case "text":
                    return a.pipe(k(c => {
                        if (c.body !== null && typeof c.body != "string")
                            throw new m(2808,!1);
                        return c.body
                    }
                    ));
                default:
                    return a.pipe(k(c => c.body))
                }
            case "response":
                return a;
            default:
                throw new m(2809,!1)
            }
        }
        delete(n, r={}) {
            return this.request("DELETE", n, r)
        }
        get(n, r={}) {
            return this.request("GET", n, r)
        }
        head(n, r={}) {
            return this.request("HEAD", n, r)
        }
        jsonp(n, r) {
            return this.request("JSONP", n, {
                params: new Ot().append(r, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
            })
        }
        options(n, r={}) {
            return this.request("OPTIONS", n, r)
        }
        patch(n, r, o={}) {
            return this.request("PATCH", n, wd(o, r))
        }
        post(n, r, o={}) {
            return this.request("POST", n, wd(o, r))
        }
        put(n, r, o={}) {
            return this.request("PUT", n, wd(o, r))
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(bd))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var XT = new D("",{
    factory: () => !0
})
  , eS = "XSRF-TOKEN"
  , tS = new D("",{
    factory: () => eS
})
  , nS = "X-XSRF-TOKEN"
  , rS = new D("",{
    factory: () => nS
})
  , oS = ( () => {
    class e {
        cookieName = p(tS);
        doc = p(Z);
        lastCookieString = "";
        lastToken = null;
        parseCount = 0;
        getToken() {
            let n = this.doc.cookie || "";
            return n !== this.lastCookieString && (this.parseCount++,
            this.lastToken = Uo(n, this.cookieName),
            this.lastCookieString = n),
            this.lastToken
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , my = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: function(r) {
                let o = null;
                return r ? o = new (r || e) : o = I(oS),
                o
            },
            providedIn: "root"
        })
    }
    return e
}
)();
function iS(e, t) {
    if (!p(XT) || e.method === "GET" || e.method === "HEAD")
        return t(e);
    try {
        let o = p(Ir).href
          , {origin: i} = new URL(o)
          , {origin: s} = new URL(e.url,i);
        if (i !== s)
            return t(e)
    } catch {
        return t(e)
    }
    let n = p(my).getToken()
      , r = p(rS);
    return n != null && !e.headers.has(r) && (e = e.clone({
        headers: e.headers.set(r, n)
    })),
    t(e)
}
function sS(...e) {
    let t = [_a, Sa, {
        provide: bd,
        useExisting: Sa
    }, {
        provide: Cd,
        useFactory: () => p(YT, {
            optional: !0
        }) ?? p(Id)
    }, {
        provide: hy,
        useValue: iS,
        multi: !0
    }];
    for (let n of e)
        t.push(...n.\u0275providers);
    return wt(t)
}
var yy = ( () => {
    class e {
        _doc;
        constructor(n) {
            this._doc = n
        }
        getTitle() {
            return this._doc.title
        }
        setTitle(n) {
            this._doc.title = n || ""
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(Z))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var cS = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: function(r) {
                let o = null;
                return r ? o = new (r || e) : o = I(uS),
                o
            },
            providedIn: "root"
        })
    }
    return e
}
)()
  , uS = ( () => {
    class e extends cS {
        _doc;
        constructor(n) {
            super(),
            this._doc = n
        }
        sanitize(n, r) {
            if (r == null)
                return null;
            switch (n) {
            case tt.NONE:
                return r;
            case tt.HTML:
                return _t(r, "HTML") ? ft(r) : Gs(this._doc, String(r)).toString();
            case tt.STYLE:
                return _t(r, "Style") ? ft(r) : r;
            case tt.SCRIPT:
                if (_t(r, "Script"))
                    return ft(r);
                throw new m(5200,!1);
            case tt.URL:
                return _t(r, "URL") ? ft(r) : _o(String(r));
            case tt.RESOURCE_URL:
                if (_t(r, "ResourceURL"))
                    return ft(r);
                throw new m(5201,!1);
            default:
                throw new m(5202,!1)
            }
        }
        bypassSecurityTrustHtml(n) {
            return gl(n)
        }
        bypassSecurityTrustStyle(n) {
            return ml(n)
        }
        bypassSecurityTrustScript(n) {
            return yl(n)
        }
        bypassSecurityTrustUrl(n) {
            return vl(n)
        }
        bypassSecurityTrustResourceUrl(n) {
            return Dl(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(Z))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var _ = "primary"
  , oi = Symbol("RouteTitle")
  , Nd = class {
    params;
    constructor(t) {
        this.params = t || {}
    }
    has(t) {
        return Object.prototype.hasOwnProperty.call(this.params, t)
    }
    get(t) {
        if (this.has(t)) {
            let n = this.params[t];
            return Array.isArray(n) ? n[0] : n
        }
        return null
    }
    getAll(t) {
        if (this.has(t)) {
            let n = this.params[t];
            return Array.isArray(n) ? n : [n]
        }
        return []
    }
    get keys() {
        return Object.keys(this.params)
    }
}
;
function Un(e) {
    return new Nd(e)
}
function Td(e, t, n) {
    for (let r = 0; r < e.length; r++) {
        let o = e[r]
          , i = t[r];
        if (o[0] === ":")
            n[o.substring(1)] = i;
        else if (o !== i.path)
            return !1
    }
    return !0
}
function Ty(e, t, n) {
    let r = n.path.split("/")
      , o = r.indexOf("**");
    if (o === -1) {
        if (r.length > e.length || n.pathMatch === "full" && (t.hasChildren() || r.length < e.length))
            return null;
        let c = {}
          , u = e.slice(0, r.length);
        return Td(r, u, c) ? {
            consumed: u,
            posParams: c
        } : null
    }
    if (o !== r.lastIndexOf("**"))
        return null;
    let i = r.slice(0, o)
      , s = r.slice(o + 1);
    if (i.length + s.length > e.length || n.pathMatch === "full" && t.hasChildren() && n.path !== "**")
        return null;
    let a = {};
    return !Td(i, e.slice(0, i.length), a) || !Td(s, e.slice(e.length - s.length), a) ? null : {
        consumed: e,
        posParams: a
    }
}
function Oa(e) {
    return new Promise( (t, n) => {
        e.pipe(vt()).subscribe({
            next: r => t(r),
            error: r => n(r)
        })
    }
    )
}
function dS(e, t) {
    if (e.length !== t.length)
        return !1;
    for (let n = 0; n < e.length; ++n)
        if (!gt(e[n], t[n]))
            return !1;
    return !0
}
function gt(e, t) {
    let n = e ? Rd(e) : void 0
      , r = t ? Rd(t) : void 0;
    if (!n || !r || n.length != r.length)
        return !1;
    let o;
    for (let i = 0; i < n.length; i++)
        if (o = n[i],
        !Sy(e[o], t[o]))
            return !1;
    return !0
}
function Rd(e) {
    return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)]
}
function Sy(e, t) {
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length)
            return !1;
        let n = [...e].sort()
          , r = [...t].sort();
        return n.every( (o, i) => r[i] === o)
    } else
        return e === t
}
function fS(e) {
    return e.length > 0 ? e[e.length - 1] : null
}
function Hn(e) {
    return Ri(e) ? e : kn(e) ? K(Promise.resolve(e)) : T(e)
}
function _y(e) {
    return Ri(e) ? Oa(e) : Promise.resolve(e)
}
var hS = {
    exact: Ry,
    subset: Ay
}
  , My = {
    exact: pS,
    subset: gS,
    ignored: () => !0
}
  , Ny = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact"
}
  , Ad = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset"
};
function vy(e, t, n) {
    return hS[n.paths](e.root, t.root, n.matrixParams) && My[n.queryParams](e.queryParams, t.queryParams) && !(n.fragment === "exact" && e.fragment !== t.fragment)
}
function pS(e, t) {
    return gt(e, t)
}
function Ry(e, t, n) {
    if (!jn(e.segments, t.segments) || !Ra(e.segments, t.segments, n) || e.numberOfChildren !== t.numberOfChildren)
        return !1;
    for (let r in t.children)
        if (!e.children[r] || !Ry(e.children[r], t.children[r], n))
            return !1;
    return !0
}
function gS(e, t) {
    return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every(n => Sy(e[n], t[n]))
}
function Ay(e, t, n) {
    return xy(e, t, t.segments, n)
}
function xy(e, t, n, r) {
    if (e.segments.length > n.length) {
        let o = e.segments.slice(0, n.length);
        return !(!jn(o, n) || t.hasChildren() || !Ra(o, n, r))
    } else if (e.segments.length === n.length) {
        if (!jn(e.segments, n) || !Ra(e.segments, n, r))
            return !1;
        for (let o in t.children)
            if (!e.children[o] || !Ay(e.children[o], t.children[o], r))
                return !1;
        return !0
    } else {
        let o = n.slice(0, e.segments.length)
          , i = n.slice(e.segments.length);
        return !jn(e.segments, o) || !Ra(e.segments, o, r) || !e.children[_] ? !1 : xy(e.children[_], t, i, r)
    }
}
function Ra(e, t, n) {
    return t.every( (r, o) => My[n](e[o].parameters, r.parameters))
}
var ze = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(t=new j([],{}), n={}, r=null) {
        this.root = t,
        this.queryParams = n,
        this.fragment = r
    }
    get queryParamMap() {
        return this._queryParamMap ??= Un(this.queryParams),
        this._queryParamMap
    }
    toString() {
        return vS.serialize(this)
    }
}
  , j = class {
    segments;
    children;
    parent = null;
    constructor(t, n) {
        this.segments = t,
        this.children = n,
        Object.values(n).forEach(r => r.parent = this)
    }
    hasChildren() {
        return this.numberOfChildren > 0
    }
    get numberOfChildren() {
        return Object.keys(this.children).length
    }
    toString() {
        return Aa(this)
    }
}
  , nn = class {
    path;
    parameters;
    _parameterMap;
    constructor(t, n) {
        this.path = t,
        this.parameters = n
    }
    get parameterMap() {
        return this._parameterMap ??= Un(this.parameters),
        this._parameterMap
    }
    toString() {
        return ky(this)
    }
}
;
function mS(e, t) {
    return jn(e, t) && e.every( (n, r) => gt(n.parameters, t[r].parameters))
}
function jn(e, t) {
    return e.length !== t.length ? !1 : e.every( (n, r) => n.path === t[r].path)
}
function yS(e, t) {
    let n = [];
    return Object.entries(e.children).forEach( ([r,o]) => {
        r === _ && (n = n.concat(t(o, r)))
    }
    ),
    Object.entries(e.children).forEach( ([r,o]) => {
        r !== _ && (n = n.concat(t(o, r)))
    }
    ),
    n
}
var ii = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => new rn,
            providedIn: "root"
        })
    }
    return e
}
)()
  , rn = class {
    parse(t) {
        let n = new Od(t);
        return new ze(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())
    }
    serialize(t) {
        let n = `/${Go(t.root, !0)}`
          , r = wS(t.queryParams)
          , o = typeof t.fragment == "string" ? `#${DS(t.fragment)}` : "";
        return `${n}${r}${o}`
    }
}
  , vS = new rn;
function Aa(e) {
    return e.segments.map(t => ky(t)).join("/")
}
function Go(e, t) {
    if (!e.hasChildren())
        return Aa(e);
    if (t) {
        let n = e.children[_] ? Go(e.children[_], !1) : ""
          , r = [];
        return Object.entries(e.children).forEach( ([o,i]) => {
            o !== _ && r.push(`${o}:${Go(i, !1)}`)
        }
        ),
        r.length > 0 ? `${n}(${r.join("//")})` : n
    } else {
        let n = yS(e, (r, o) => o === _ ? [Go(e.children[_], !1)] : [`${o}:${Go(r, !1)}`]);
        return Object.keys(e.children).length === 1 && e.children[_] != null ? `${Aa(e)}/${n[0]}` : `${Aa(e)}/(${n.join("//")})`
    }
}
function Oy(e) {
    return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
}
function Ma(e) {
    return Oy(e).replace(/%3B/gi, ";")
}
function DS(e) {
    return encodeURI(e)
}
function xd(e) {
    return Oy(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
}
function xa(e) {
    return decodeURIComponent(e)
}
function Dy(e) {
    return xa(e.replace(/\+/g, "%20"))
}
function ky(e) {
    return `${xd(e.path)}${ES(e.parameters)}`
}
function ES(e) {
    return Object.entries(e).map( ([t,n]) => `;${xd(t)}=${xd(n)}`).join("")
}
function wS(e) {
    let t = Object.entries(e).map( ([n,r]) => Array.isArray(r) ? r.map(o => `${Ma(n)}=${Ma(o)}`).join("&") : `${Ma(n)}=${Ma(r)}`).filter(n => n);
    return t.length ? `?${t.join("&")}` : ""
}
var IS = /^[^\/()?;#]+/;
function Sd(e) {
    let t = e.match(IS);
    return t ? t[0] : ""
}
var CS = /^[^\/()?;=#]+/;
function bS(e) {
    let t = e.match(CS);
    return t ? t[0] : ""
}
var TS = /^[^=?&#]+/;
function SS(e) {
    let t = e.match(TS);
    return t ? t[0] : ""
}
var _S = /^[^&#]+/;
function MS(e) {
    let t = e.match(_S);
    return t ? t[0] : ""
}
var Od = class {
    url;
    remaining;
    constructor(t) {
        this.url = t,
        this.remaining = t
    }
    parseRootSegment() {
        for (; this.consumeOptional("/"); )
            ;
        return this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new j([],{}) : new j([],this.parseChildren())
    }
    parseQueryParams() {
        let t = {};
        if (this.consumeOptional("?"))
            do
                this.parseQueryParam(t);
            while (this.consumeOptional("&"));
        return t
    }
    parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }
    parseChildren(t=0) {
        if (t > 50)
            throw new m(4010,!1);
        if (this.remaining === "")
            return {};
        this.consumeOptional("/");
        let n = [];
        for (this.peekStartsWith("(") || n.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/("); )
            this.capture("/"),
            n.push(this.parseSegment());
        let r = {};
        this.peekStartsWith("/(") && (this.capture("/"),
        r = this.parseParens(!0, t));
        let o = {};
        return this.peekStartsWith("(") && (o = this.parseParens(!1, t)),
        (n.length > 0 || Object.keys(r).length > 0) && (o[_] = new j(n,r)),
        o
    }
    parseSegment() {
        let t = Sd(this.remaining);
        if (t === "" && this.peekStartsWith(";"))
            throw new m(4009,!1);
        return this.capture(t),
        new nn(xa(t),this.parseMatrixParams())
    }
    parseMatrixParams() {
        let t = {};
        for (; this.consumeOptional(";"); )
            this.parseParam(t);
        return t
    }
    parseParam(t) {
        let n = bS(this.remaining);
        if (!n)
            return;
        this.capture(n);
        let r = "";
        if (this.consumeOptional("=")) {
            let o = Sd(this.remaining);
            o && (r = o,
            this.capture(r))
        }
        t[xa(n)] = xa(r)
    }
    parseQueryParam(t) {
        let n = SS(this.remaining);
        if (!n)
            return;
        this.capture(n);
        let r = "";
        if (this.consumeOptional("=")) {
            let s = MS(this.remaining);
            s && (r = s,
            this.capture(r))
        }
        let o = Dy(n)
          , i = Dy(r);
        if (t.hasOwnProperty(o)) {
            let s = t[o];
            Array.isArray(s) || (s = [s],
            t[o] = s),
            s.push(i)
        } else
            t[o] = i
    }
    parseParens(t, n) {
        let r = {};
        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0; ) {
            let o = Sd(this.remaining)
              , i = this.remaining[o.length];
            if (i !== "/" && i !== ")" && i !== ";")
                throw new m(4010,!1);
            let s;
            o.indexOf(":") > -1 ? (s = o.slice(0, o.indexOf(":")),
            this.capture(s),
            this.capture(":")) : t && (s = _);
            let a = this.parseChildren(n + 1);
            r[s ?? _] = Object.keys(a).length === 1 && a[_] ? a[_] : new j([],a),
            this.consumeOptional("//")
        }
        return r
    }
    peekStartsWith(t) {
        return this.remaining.startsWith(t)
    }
    consumeOptional(t) {
        return this.peekStartsWith(t) ? (this.remaining = this.remaining.substring(t.length),
        !0) : !1
    }
    capture(t) {
        if (!this.consumeOptional(t))
            throw new m(4011,!1)
    }
}
;
function Py(e) {
    return e.segments.length > 0 ? new j([],{
        [_]: e
    }) : e
}
function Fy(e) {
    let t = {};
    for (let[r,o] of Object.entries(e.children)) {
        let i = Fy(o);
        if (r === _ && i.segments.length === 0 && i.hasChildren())
            for (let[s,a] of Object.entries(i.children))
                t[s] = a;
        else
            (i.segments.length > 0 || i.hasChildren()) && (t[r] = i)
    }
    let n = new j(e.segments,t);
    return NS(n)
}
function NS(e) {
    if (e.numberOfChildren === 1 && e.children[_]) {
        let t = e.children[_];
        return new j(e.segments.concat(t.segments),t.children)
    }
    return e
}
function Rr(e) {
    return e instanceof ze
}
function Ly(e, t, n=null, r=null, o=new rn) {
    let i = jy(e);
    return Uy(i, t, n, r, o)
}
function jy(e) {
    let t;
    function n(i) {
        let s = {};
        for (let c of i.children) {
            let u = n(c);
            s[c.outlet] = u
        }
        let a = new j(i.url,s);
        return i === e && (t = a),
        a
    }
    let r = n(e.root)
      , o = Py(r);
    return t ?? o
}
function Uy(e, t, n, r, o) {
    let i = e;
    for (; i.parent; )
        i = i.parent;
    if (t.length === 0)
        return _d(i, i, i, n, r, o);
    let s = RS(t);
    if (s.toRoot())
        return _d(i, i, new j([],{}), n, r, o);
    let a = AS(s, i, e)
      , c = a.processChildren ? qo(a.segmentGroup, a.index, s.commands) : Vy(a.segmentGroup, a.index, s.commands);
    return _d(i, a.segmentGroup, c, n, r, o)
}
function ka(e) {
    return typeof e == "object" && e != null && !e.outlets && !e.segmentPath
}
function Qo(e) {
    return typeof e == "object" && e != null && e.outlets
}
function Ey(e, t, n) {
    e ||= "\u0275";
    let r = new ze;
    return r.queryParams = {
        [e]: t
    },
    n.parse(n.serialize(r)).queryParams[e]
}
function _d(e, t, n, r, o, i) {
    let s = {};
    for (let[u,l] of Object.entries(r ?? {}))
        s[u] = Array.isArray(l) ? l.map(d => Ey(u, d, i)) : Ey(u, l, i);
    let a;
    e === t ? a = n : a = By(e, t, n);
    let c = Py(Fy(a));
    return new ze(c,s,o)
}
function By(e, t, n) {
    let r = {};
    return Object.entries(e.children).forEach( ([o,i]) => {
        i === t ? r[o] = n : r[o] = By(i, t, n)
    }
    ),
    new j(e.segments,r)
}
var Pa = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(t, n, r) {
        if (this.isAbsolute = t,
        this.numberOfDoubleDots = n,
        this.commands = r,
        t && r.length > 0 && ka(r[0]))
            throw new m(4003,!1);
        let o = r.find(Qo);
        if (o && o !== fS(r))
            throw new m(4004,!1)
    }
    toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    }
}
;
function RS(e) {
    if (typeof e[0] == "string" && e.length === 1 && e[0] === "/")
        return new Pa(!0,0,e);
    let t = 0
      , n = !1
      , r = e.reduce( (o, i, s) => {
        if (typeof i == "object" && i != null) {
            if (i.outlets) {
                let a = {};
                return Object.entries(i.outlets).forEach( ([c,u]) => {
                    a[c] = typeof u == "string" ? u.split("/") : u
                }
                ),
                [...o, {
                    outlets: a
                }]
            }
            if (i.segmentPath)
                return [...o, i.segmentPath]
        }
        return typeof i != "string" ? [...o, i] : s === 0 ? (i.split("/").forEach( (a, c) => {
            c == 0 && a === "." || (c == 0 && a === "" ? n = !0 : a === ".." ? t++ : a != "" && o.push(a))
        }
        ),
        o) : [...o, i]
    }
    , []);
    return new Pa(n,t,r)
}
var Mr = class {
    segmentGroup;
    processChildren;
    index;
    constructor(t, n, r) {
        this.segmentGroup = t,
        this.processChildren = n,
        this.index = r
    }
}
;
function AS(e, t, n) {
    if (e.isAbsolute)
        return new Mr(t,!0,0);
    if (!n)
        return new Mr(t,!1,NaN);
    if (n.parent === null)
        return new Mr(n,!0,0);
    let r = ka(e.commands[0]) ? 0 : 1
      , o = n.segments.length - 1 + r;
    return xS(n, o, e.numberOfDoubleDots)
}
function xS(e, t, n) {
    let r = e
      , o = t
      , i = n;
    for (; i > o; ) {
        if (i -= o,
        r = r.parent,
        !r)
            throw new m(4005,!1);
        o = r.segments.length
    }
    return new Mr(r,!1,o - i)
}
function OS(e) {
    return Qo(e[0]) ? e[0].outlets : {
        [_]: e
    }
}
function Vy(e, t, n) {
    if (e ??= new j([],{}),
    e.segments.length === 0 && e.hasChildren())
        return qo(e, t, n);
    let r = kS(e, t, n)
      , o = n.slice(r.commandIndex);
    if (r.match && r.pathIndex < e.segments.length) {
        let i = new j(e.segments.slice(0, r.pathIndex),{});
        return i.children[_] = new j(e.segments.slice(r.pathIndex),e.children),
        qo(i, 0, o)
    } else
        return r.match && o.length === 0 ? new j(e.segments,{}) : r.match && !e.hasChildren() ? kd(e, t, n) : r.match ? qo(e, 0, o) : kd(e, t, n)
}
function qo(e, t, n) {
    if (n.length === 0)
        return new j(e.segments,{});
    {
        let r = OS(n)
          , o = {};
        if (Object.keys(r).some(i => i !== _) && e.children[_] && e.numberOfChildren === 1 && e.children[_].segments.length === 0) {
            let i = qo(e.children[_], t, n);
            return new j(e.segments,i.children)
        }
        return Object.entries(r).forEach( ([i,s]) => {
            typeof s == "string" && (s = [s]),
            s !== null && (o[i] = Vy(e.children[i], t, s))
        }
        ),
        Object.entries(e.children).forEach( ([i,s]) => {
            r[i] === void 0 && (o[i] = s)
        }
        ),
        new j(e.segments,o)
    }
}
function kS(e, t, n) {
    let r = 0
      , o = t
      , i = {
        match: !1,
        pathIndex: 0,
        commandIndex: 0
    };
    for (; o < e.segments.length; ) {
        if (r >= n.length)
            return i;
        let s = e.segments[o]
          , a = n[r];
        if (Qo(a))
            break;
        let c = `${a}`
          , u = r < n.length - 1 ? n[r + 1] : null;
        if (o > 0 && c === void 0)
            break;
        if (c && u && typeof u == "object" && u.outlets === void 0) {
            if (!Iy(c, u, s))
                return i;
            r += 2
        } else {
            if (!Iy(c, {}, s))
                return i;
            r++
        }
        o++
    }
    return {
        match: !0,
        pathIndex: o,
        commandIndex: r
    }
}
function kd(e, t, n) {
    let r = e.segments.slice(0, t)
      , o = 0;
    for (; o < n.length; ) {
        let i = n[o];
        if (Qo(i)) {
            let c = PS(i.outlets);
            return new j(r,c)
        }
        if (o === 0 && ka(n[0])) {
            let c = e.segments[t];
            r.push(new nn(c.path,wy(n[0]))),
            o++;
            continue
        }
        let s = Qo(i) ? i.outlets[_] : `${i}`
          , a = o < n.length - 1 ? n[o + 1] : null;
        s && a && ka(a) ? (r.push(new nn(s,wy(a))),
        o += 2) : (r.push(new nn(s,{})),
        o++)
    }
    return new j(r,{})
}
function PS(e) {
    let t = {};
    return Object.entries(e).forEach( ([n,r]) => {
        typeof r == "string" && (r = [r]),
        r !== null && (t[n] = kd(new j([],{}), 0, r))
    }
    ),
    t
}
function wy(e) {
    let t = {};
    return Object.entries(e).forEach( ([n,r]) => t[n] = `${r}`),
    t
}
function Iy(e, t, n) {
    return e == n.path && gt(t, n.parameters)
}
var Zo = "imperative"
  , se = (function(e) {
    return e[e.NavigationStart = 0] = "NavigationStart",
    e[e.NavigationEnd = 1] = "NavigationEnd",
    e[e.NavigationCancel = 2] = "NavigationCancel",
    e[e.NavigationError = 3] = "NavigationError",
    e[e.RoutesRecognized = 4] = "RoutesRecognized",
    e[e.ResolveStart = 5] = "ResolveStart",
    e[e.ResolveEnd = 6] = "ResolveEnd",
    e[e.GuardsCheckStart = 7] = "GuardsCheckStart",
    e[e.GuardsCheckEnd = 8] = "GuardsCheckEnd",
    e[e.RouteConfigLoadStart = 9] = "RouteConfigLoadStart",
    e[e.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd",
    e[e.ChildActivationStart = 11] = "ChildActivationStart",
    e[e.ChildActivationEnd = 12] = "ChildActivationEnd",
    e[e.ActivationStart = 13] = "ActivationStart",
    e[e.ActivationEnd = 14] = "ActivationEnd",
    e[e.Scroll = 15] = "Scroll",
    e[e.NavigationSkipped = 16] = "NavigationSkipped",
    e
}
)(se || {})
  , ke = class {
    id;
    url;
    constructor(t, n) {
        this.id = t,
        this.url = n
    }
}
  , Bn = class extends ke {
    type = se.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(t, n, r="imperative", o=null) {
        super(t, n),
        this.navigationTrigger = r,
        this.restoredState = o
    }
    toString() {
        return `NavigationStart(id: ${this.id}, url: '${this.url}')`
    }
}
  , Pt = class extends ke {
    urlAfterRedirects;
    type = se.NavigationEnd;
    constructor(t, n, r) {
        super(t, n),
        this.urlAfterRedirects = r
    }
    toString() {
        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
    }
}
  , ve = (function(e) {
    return e[e.Redirect = 0] = "Redirect",
    e[e.SupersededByNewNavigation = 1] = "SupersededByNewNavigation",
    e[e.NoDataFromResolver = 2] = "NoDataFromResolver",
    e[e.GuardRejected = 3] = "GuardRejected",
    e[e.Aborted = 4] = "Aborted",
    e
}
)(ve || {})
  , Ko = (function(e) {
    return e[e.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation",
    e[e.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy",
    e
}
)(Ko || {})
  , $e = class extends ke {
    reason;
    code;
    type = se.NavigationCancel;
    constructor(t, n, r, o) {
        super(t, n),
        this.reason = r,
        this.code = o
    }
    toString() {
        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
    }
}
;
function Hy(e) {
    return e instanceof $e && (e.code === ve.Redirect || e.code === ve.SupersededByNewNavigation)
}
var Ft = class extends ke {
    reason;
    code;
    type = se.NavigationSkipped;
    constructor(t, n, r, o) {
        super(t, n),
        this.reason = r,
        this.code = o
    }
}
  , Vn = class extends ke {
    error;
    target;
    type = se.NavigationError;
    constructor(t, n, r, o) {
        super(t, n),
        this.error = r,
        this.target = o
    }
    toString() {
        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
    }
}
  , Jo = class extends ke {
    urlAfterRedirects;
    state;
    type = se.RoutesRecognized;
    constructor(t, n, r, o) {
        super(t, n),
        this.urlAfterRedirects = r,
        this.state = o
    }
    toString() {
        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , Fa = class extends ke {
    urlAfterRedirects;
    state;
    type = se.GuardsCheckStart;
    constructor(t, n, r, o) {
        super(t, n),
        this.urlAfterRedirects = r,
        this.state = o
    }
    toString() {
        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , La = class extends ke {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = se.GuardsCheckEnd;
    constructor(t, n, r, o, i) {
        super(t, n),
        this.urlAfterRedirects = r,
        this.state = o,
        this.shouldActivate = i
    }
    toString() {
        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
    }
}
  , ja = class extends ke {
    urlAfterRedirects;
    state;
    type = se.ResolveStart;
    constructor(t, n, r, o) {
        super(t, n),
        this.urlAfterRedirects = r,
        this.state = o
    }
    toString() {
        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , Ua = class extends ke {
    urlAfterRedirects;
    state;
    type = se.ResolveEnd;
    constructor(t, n, r, o) {
        super(t, n),
        this.urlAfterRedirects = r,
        this.state = o
    }
    toString() {
        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , Ba = class {
    route;
    type = se.RouteConfigLoadStart;
    constructor(t) {
        this.route = t
    }
    toString() {
        return `RouteConfigLoadStart(path: ${this.route.path})`
    }
}
  , Va = class {
    route;
    type = se.RouteConfigLoadEnd;
    constructor(t) {
        this.route = t
    }
    toString() {
        return `RouteConfigLoadEnd(path: ${this.route.path})`
    }
}
  , Ha = class {
    snapshot;
    type = se.ChildActivationStart;
    constructor(t) {
        this.snapshot = t
    }
    toString() {
        return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
  , $a = class {
    snapshot;
    type = se.ChildActivationEnd;
    constructor(t) {
        this.snapshot = t
    }
    toString() {
        return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
  , za = class {
    snapshot;
    type = se.ActivationStart;
    constructor(t) {
        this.snapshot = t
    }
    toString() {
        return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
  , Ga = class {
    snapshot;
    type = se.ActivationEnd;
    constructor(t) {
        this.snapshot = t
    }
    toString() {
        return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
;
var Ar = class {
}
  , Xo = class {
}
  , xr = class {
    url;
    navigationBehaviorOptions;
    constructor(t, n) {
        this.url = t,
        this.navigationBehaviorOptions = n
    }
}
;
function FS(e) {
    return !(e instanceof Ar) && !(e instanceof xr) && !(e instanceof Xo)
}
var Wa = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() {
        return this.route?.snapshot._environmentInjector ?? this.rootInjector
    }
    constructor(t) {
        this.rootInjector = t,
        this.children = new Fr(this.rootInjector)
    }
}
  , Fr = ( () => {
    class e {
        rootInjector;
        contexts = new Map;
        constructor(n) {
            this.rootInjector = n
        }
        onChildOutletCreated(n, r) {
            let o = this.getOrCreateContext(n);
            o.outlet = r,
            this.contexts.set(n, o)
        }
        onChildOutletDestroyed(n) {
            let r = this.getContext(n);
            r && (r.outlet = null,
            r.attachRef = null)
        }
        onOutletDeactivated() {
            let n = this.contexts;
            return this.contexts = new Map,
            n
        }
        onOutletReAttached(n) {
            this.contexts = n
        }
        getOrCreateContext(n) {
            let r = this.getContext(n);
            return r || (r = new Wa(this.rootInjector),
            this.contexts.set(n, r)),
            r
        }
        getContext(n) {
            return this.contexts.get(n) || null
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(q))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , qa = class {
    _root;
    constructor(t) {
        this._root = t
    }
    get root() {
        return this._root.value
    }
    parent(t) {
        let n = this.pathFromRoot(t);
        return n.length > 1 ? n[n.length - 2] : null
    }
    children(t) {
        let n = Pd(t, this._root);
        return n ? n.children.map(r => r.value) : []
    }
    firstChild(t) {
        let n = Pd(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null
    }
    siblings(t) {
        let n = Fd(t, this._root);
        return n.length < 2 ? [] : n[n.length - 2].children.map(o => o.value).filter(o => o !== t)
    }
    pathFromRoot(t) {
        return Fd(t, this._root).map(n => n.value)
    }
}
;
function Pd(e, t) {
    if (e === t.value)
        return t;
    for (let n of t.children) {
        let r = Pd(e, n);
        if (r)
            return r
    }
    return null
}
function Fd(e, t) {
    if (e === t.value)
        return [t];
    for (let n of t.children) {
        let r = Fd(e, n);
        if (r.length)
            return r.unshift(t),
            r
    }
    return []
}
var Oe = class {
    value;
    children;
    constructor(t, n) {
        this.value = t,
        this.children = n
    }
    toString() {
        return `TreeNode(${this.value})`
    }
}
;
function _r(e) {
    let t = {};
    return e && e.children.forEach(n => t[n.value.outlet] = n),
    t
}
var ei = class extends qa {
    snapshot;
    constructor(t, n) {
        super(t),
        this.snapshot = n,
        Gd(this, t)
    }
    toString() {
        return this.snapshot.toString()
    }
}
;
function $y(e, t) {
    let n = LS(e, t)
      , r = new Q([new nn("",{})])
      , o = new Q({})
      , i = new Q({})
      , s = new Q({})
      , a = new Q("")
      , c = new on(r,o,s,a,i,_,e,n.root);
    return c.snapshot = n.root,
    new ei(new Oe(c,[]),n)
}
function LS(e, t) {
    let n = {}
      , r = {}
      , o = {}
      , s = new Or([],n,o,"",r,_,e,null,{},t);
    return new ti("",new Oe(s,[]))
}
var on = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(t, n, r, o, i, s, a, c) {
        this.urlSubject = t,
        this.paramsSubject = n,
        this.queryParamsSubject = r,
        this.fragmentSubject = o,
        this.dataSubject = i,
        this.outlet = s,
        this.component = a,
        this._futureSnapshot = c,
        this.title = this.dataSubject?.pipe(k(u => u[oi])) ?? T(void 0),
        this.url = t,
        this.params = n,
        this.queryParams = r,
        this.fragment = o,
        this.data = i
    }
    get routeConfig() {
        return this._futureSnapshot.routeConfig
    }
    get root() {
        return this._routerState.root
    }
    get parent() {
        return this._routerState.parent(this)
    }
    get firstChild() {
        return this._routerState.firstChild(this)
    }
    get children() {
        return this._routerState.children(this)
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
        return this._paramMap ??= this.params.pipe(k(t => Un(t))),
        this._paramMap
    }
    get queryParamMap() {
        return this._queryParamMap ??= this.queryParams.pipe(k(t => Un(t))),
        this._queryParamMap
    }
    toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
}
;
function zd(e, t, n="emptyOnly") {
    let r, {routeConfig: o} = e;
    return t !== null && (n === "always" || o?.path === "" || !t.component && !t.routeConfig?.loadComponent) ? r = {
        params: y(y({}, t.params), e.params),
        data: y(y({}, t.data), e.data),
        resolve: y(y(y(y({}, e.data), t.data), o?.data), e._resolvedData)
    } : r = {
        params: y({}, e.params),
        data: y({}, e.data),
        resolve: y(y({}, e.data), e._resolvedData ?? {})
    },
    o && Gy(o) && (r.resolve[oi] = o.title),
    r
}
var Or = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    _environmentInjector;
    get title() {
        return this.data?.[oi]
    }
    constructor(t, n, r, o, i, s, a, c, u, l) {
        this.url = t,
        this.params = n,
        this.queryParams = r,
        this.fragment = o,
        this.data = i,
        this.outlet = s,
        this.component = a,
        this.routeConfig = c,
        this._resolve = u,
        this._environmentInjector = l
    }
    get root() {
        return this._routerState.root
    }
    get parent() {
        return this._routerState.parent(this)
    }
    get firstChild() {
        return this._routerState.firstChild(this)
    }
    get children() {
        return this._routerState.children(this)
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
        return this._paramMap ??= Un(this.params),
        this._paramMap
    }
    get queryParamMap() {
        return this._queryParamMap ??= Un(this.queryParams),
        this._queryParamMap
    }
    toString() {
        let t = this.url.map(r => r.toString()).join("/")
          , n = this.routeConfig ? this.routeConfig.path : "";
        return `Route(url:'${t}', path:'${n}')`
    }
}
  , ti = class extends qa {
    url;
    constructor(t, n) {
        super(n),
        this.url = t,
        Gd(this, n)
    }
    toString() {
        return zy(this._root)
    }
}
;
function Gd(e, t) {
    t.value._routerState = e,
    t.children.forEach(n => Gd(e, n))
}
function zy(e) {
    let t = e.children.length > 0 ? ` { ${e.children.map(zy).join(", ")} } ` : "";
    return `${e.value}${t}`
}
function Md(e) {
    if (e.snapshot) {
        let t = e.snapshot
          , n = e._futureSnapshot;
        e.snapshot = n,
        gt(t.queryParams, n.queryParams) || e.queryParamsSubject.next(n.queryParams),
        t.fragment !== n.fragment && e.fragmentSubject.next(n.fragment),
        gt(t.params, n.params) || e.paramsSubject.next(n.params),
        dS(t.url, n.url) || e.urlSubject.next(n.url),
        gt(t.data, n.data) || e.dataSubject.next(n.data)
    } else
        e.snapshot = e._futureSnapshot,
        e.dataSubject.next(e._futureSnapshot.data)
}
function Ld(e, t) {
    let n = gt(e.params, t.params) && mS(e.url, t.url)
      , r = !e.parent != !t.parent;
    return n && !r && (!e.parent || Ld(e.parent, t.parent))
}
function Gy(e) {
    return typeof e.title == "string" || e.title === null
}
var Wy = new D("")
  , Wd = ( () => {
    class e {
        activated = null;
        get activatedComponentRef() {
            return this.activated
        }
        _activatedRoute = null;
        name = _;
        activateEvents = new we;
        deactivateEvents = new we;
        attachEvents = new we;
        detachEvents = new we;
        routerOutletData = Cm();
        parentContexts = p(Fr);
        location = p(Nt);
        changeDetector = p(sa);
        inputBinder = p(Ka, {
            optional: !0
        });
        supportsBindingToComponentInputs = !0;
        ngOnChanges(n) {
            if (n.name) {
                let {firstChange: r, previousValue: o} = n.name;
                if (r)
                    return;
                this.isTrackedInParentContexts(o) && (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(o)),
                this.initializeOutletWithName()
            }
        }
        ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name),
            this.inputBinder?.unsubscribeFromRouteData(this)
        }
        isTrackedInParentContexts(n) {
            return this.parentContexts.getContext(n)?.outlet === this
        }
        ngOnInit() {
            this.initializeOutletWithName()
        }
        initializeOutletWithName() {
            if (this.parentContexts.onChildOutletCreated(this.name, this),
            this.activated)
                return;
            let n = this.parentContexts.getContext(this.name);
            n?.route && (n.attachRef ? this.attach(n.attachRef, n.route) : this.activateWith(n.route, n.injector))
        }
        get isActivated() {
            return !!this.activated
        }
        get component() {
            if (!this.activated)
                throw new m(4012,!1);
            return this.activated.instance
        }
        get activatedRoute() {
            if (!this.activated)
                throw new m(4012,!1);
            return this._activatedRoute
        }
        get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
        }
        detach() {
            if (!this.activated)
                throw new m(4012,!1);
            this.location.detach();
            let n = this.activated;
            return this.activated = null,
            this._activatedRoute = null,
            this.detachEvents.emit(n.instance),
            n
        }
        attach(n, r) {
            this.activated = n,
            this._activatedRoute = r,
            this.location.insert(n.hostView),
            this.inputBinder?.bindActivatedRouteToOutletComponent(this),
            this.attachEvents.emit(n.instance)
        }
        deactivate() {
            if (this.activated) {
                let n = this.component;
                this.activated.destroy(),
                this.activated = null,
                this._activatedRoute = null,
                this.deactivateEvents.emit(n)
            }
        }
        activateWith(n, r) {
            if (this.isActivated)
                throw new m(4013,!1);
            this._activatedRoute = n;
            let o = this.location
              , s = n.snapshot.component
              , a = this.parentContexts.getOrCreateContext(this.name).children
              , c = new jd(n,a,o.injector,this.routerOutletData);
            this.activated = o.createComponent(s, {
                index: o.length,
                injector: c,
                environmentInjector: r
            }),
            this.changeDetector.markForCheck(),
            this.inputBinder?.bindActivatedRouteToOutletComponent(this),
            this.activateEvents.emit(this.activated.instance)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275dir = Er({
            type: e,
            selectors: [["router-outlet"]],
            inputs: {
                name: "name",
                routerOutletData: [1, "routerOutletData"]
            },
            outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
                attachEvents: "attach",
                detachEvents: "detach"
            },
            exportAs: ["outlet"],
            features: [Vs]
        })
    }
    return e
}
)()
  , jd = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(t, n, r, o) {
        this.route = t,
        this.childContexts = n,
        this.parent = r,
        this.outletData = o
    }
    get(t, n) {
        return t === on ? this.route : t === Fr ? this.childContexts : t === Wy ? this.outletData : this.parent.get(t, n)
    }
}
  , Ka = new D("");
var qd = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275cmp = Hl({
            type: e,
            selectors: [["ng-component"]],
            exportAs: ["emptyRouterOutlet"],
            decls: 1,
            vars: 0,
            template: function(r, o) {
                r & 1 && ra(0, "router-outlet")
            },
            dependencies: [Wd],
            encapsulation: 2
        })
    }
    return e
}
)();
function Zd(e) {
    let t = e.children && e.children.map(Zd)
      , n = t ? x(y({}, e), {
        children: t
    }) : y({}, e);
    return !n.component && !n.loadComponent && (t || n.loadChildren) && n.outlet && n.outlet !== _ && (n.component = qd),
    n
}
function jS(e, t, n) {
    let r = ni(e, t._root, n ? n._root : void 0);
    return new ei(r,t)
}
function ni(e, t, n) {
    if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
        let r = n.value;
        r._futureSnapshot = t.value;
        let o = US(e, t, n);
        return new Oe(r,o)
    } else {
        if (e.shouldAttach(t.value)) {
            let i = e.retrieve(t.value);
            if (i !== null) {
                let s = i.route;
                return s.value._futureSnapshot = t.value,
                s.children = t.children.map(a => ni(e, a)),
                s
            }
        }
        let r = BS(t.value)
          , o = t.children.map(i => ni(e, i));
        return new Oe(r,o)
    }
}
function US(e, t, n) {
    return t.children.map(r => {
        for (let o of n.children)
            if (e.shouldReuseRoute(r.value, o.value.snapshot))
                return ni(e, r, o);
        return ni(e, r)
    }
    )
}
function BS(e) {
    return new on(new Q(e.url),new Q(e.params),new Q(e.queryParams),new Q(e.fragment),new Q(e.data),e.outlet,e.component,e)
}
var kr = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(t, n) {
        this.redirectTo = t,
        this.navigationBehaviorOptions = n
    }
}
  , qy = "ngNavigationCancelingError";
function Za(e, t) {
    let {redirectTo: n, navigationBehaviorOptions: r} = Rr(t) ? {
        redirectTo: t,
        navigationBehaviorOptions: void 0
    } : t
      , o = Zy(!1, ve.Redirect);
    return o.url = n,
    o.navigationBehaviorOptions = r,
    o
}
function Zy(e, t) {
    let n = new Error(`NavigationCancelingError: ${e || ""}`);
    return n[qy] = !0,
    n.cancellationCode = t,
    n
}
function VS(e) {
    return Yy(e) && Rr(e.url)
}
function Yy(e) {
    return !!e && e[qy]
}
var Ud = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(t, n, r, o, i) {
        this.routeReuseStrategy = t,
        this.futureState = n,
        this.currState = r,
        this.forwardEvent = o,
        this.inputBindingEnabled = i
    }
    activate(t) {
        let n = this.futureState._root
          , r = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(n, r, t),
        Md(this.futureState.root),
        this.activateChildRoutes(n, r, t)
    }
    deactivateChildRoutes(t, n, r) {
        let o = _r(n);
        t.children.forEach(i => {
            let s = i.value.outlet;
            this.deactivateRoutes(i, o[s], r),
            delete o[s]
        }
        ),
        Object.values(o).forEach(i => {
            this.deactivateRouteAndItsChildren(i, r)
        }
        )
    }
    deactivateRoutes(t, n, r) {
        let o = t.value
          , i = n ? n.value : null;
        if (o === i)
            if (o.component) {
                let s = r.getContext(o.outlet);
                s && this.deactivateChildRoutes(t, n, s.children)
            } else
                this.deactivateChildRoutes(t, n, r);
        else
            i && this.deactivateRouteAndItsChildren(n, r)
    }
    deactivateRouteAndItsChildren(t, n) {
        t.value.component && this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, n) : this.deactivateRouteAndOutlet(t, n)
    }
    detachAndStoreRouteSubtree(t, n) {
        let r = n.getContext(t.value.outlet)
          , o = r && t.value.component ? r.children : n
          , i = _r(t);
        for (let s of Object.values(i))
            this.deactivateRouteAndItsChildren(s, o);
        if (r && r.outlet) {
            let s = r.outlet.detach()
              , a = r.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
                componentRef: s,
                route: t,
                contexts: a
            })
        }
    }
    deactivateRouteAndOutlet(t, n) {
        let r = n.getContext(t.value.outlet)
          , o = r && t.value.component ? r.children : n
          , i = _r(t);
        for (let s of Object.values(i))
            this.deactivateRouteAndItsChildren(s, o);
        r && (r.outlet && (r.outlet.deactivate(),
        r.children.onOutletDeactivated()),
        r.attachRef = null,
        r.route = null)
    }
    activateChildRoutes(t, n, r) {
        let o = _r(n);
        t.children.forEach(i => {
            this.activateRoutes(i, o[i.value.outlet], r),
            this.forwardEvent(new Ga(i.value.snapshot))
        }
        ),
        t.children.length && this.forwardEvent(new $a(t.value.snapshot))
    }
    activateRoutes(t, n, r) {
        let o = t.value
          , i = n ? n.value : null;
        if (Md(o),
        o === i)
            if (o.component) {
                let s = r.getOrCreateContext(o.outlet);
                this.activateChildRoutes(t, n, s.children)
            } else
                this.activateChildRoutes(t, n, r);
        else if (o.component) {
            let s = r.getOrCreateContext(o.outlet);
            if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
                let a = this.routeReuseStrategy.retrieve(o.snapshot);
                this.routeReuseStrategy.store(o.snapshot, null),
                s.children.onOutletReAttached(a.contexts),
                s.attachRef = a.componentRef,
                s.route = a.route.value,
                s.outlet && s.outlet.attach(a.componentRef, a.route.value),
                Md(a.route.value),
                this.activateChildRoutes(t, null, s.children)
            } else
                s.attachRef = null,
                s.route = o,
                s.outlet && s.outlet.activateWith(o, s.injector),
                this.activateChildRoutes(t, null, s.children)
        } else
            this.activateChildRoutes(t, null, r)
    }
}
  , Ya = class {
    path;
    route;
    constructor(t) {
        this.path = t,
        this.route = this.path[this.path.length - 1]
    }
}
  , Nr = class {
    component;
    route;
    constructor(t, n) {
        this.component = t,
        this.route = n
    }
}
;
function HS(e, t, n) {
    let r = e._root
      , o = t ? t._root : null;
    return Wo(r, o, n, [r.value])
}
function $S(e) {
    let t = e.routeConfig ? e.routeConfig.canActivateChild : null;
    return !t || t.length === 0 ? null : {
        node: e,
        guards: t
    }
}
function Lr(e, t) {
    let n = Symbol()
      , r = t.get(e, n);
    return r === n ? typeof e == "function" && !Fc(e) ? e : t.get(e) : r
}
function Wo(e, t, n, r, o={
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let i = _r(t);
    return e.children.forEach(s => {
        zS(s, i[s.value.outlet], n, r.concat([s.value]), o),
        delete i[s.value.outlet]
    }
    ),
    Object.entries(i).forEach( ([s,a]) => Yo(a, n.getContext(s), o)),
    o
}
function zS(e, t, n, r, o={
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let i = e.value
      , s = t ? t.value : null
      , a = n ? n.getContext(e.value.outlet) : null;
    if (s && i.routeConfig === s.routeConfig) {
        let c = GS(s, i, i.routeConfig.runGuardsAndResolvers);
        c ? o.canActivateChecks.push(new Ya(r)) : (i.data = s.data,
        i._resolvedData = s._resolvedData),
        i.component ? Wo(e, t, a ? a.children : null, r, o) : Wo(e, t, n, r, o),
        c && a && a.outlet && a.outlet.isActivated && o.canDeactivateChecks.push(new Nr(a.outlet.component,s))
    } else
        s && Yo(t, a, o),
        o.canActivateChecks.push(new Ya(r)),
        i.component ? Wo(e, null, a ? a.children : null, r, o) : Wo(e, null, n, r, o);
    return o
}
function GS(e, t, n) {
    if (typeof n == "function")
        return ie(t._environmentInjector, () => n(e, t));
    switch (n) {
    case "pathParamsChange":
        return !jn(e.url, t.url);
    case "pathParamsOrQueryParamsChange":
        return !jn(e.url, t.url) || !gt(e.queryParams, t.queryParams);
    case "always":
        return !0;
    case "paramsOrQueryParamsChange":
        return !Ld(e, t) || !gt(e.queryParams, t.queryParams);
    default:
        return !Ld(e, t)
    }
}
function Yo(e, t, n) {
    let r = _r(e)
      , o = e.value;
    Object.entries(r).forEach( ([i,s]) => {
        o.component ? t ? Yo(s, t.children.getContext(i), n) : Yo(s, null, n) : Yo(s, t, n)
    }
    ),
    o.component ? t && t.outlet && t.outlet.isActivated ? n.canDeactivateChecks.push(new Nr(t.outlet.component,o)) : n.canDeactivateChecks.push(new Nr(null,o)) : n.canDeactivateChecks.push(new Nr(null,o))
}
function si(e) {
    return typeof e == "function"
}
function WS(e) {
    return typeof e == "boolean"
}
function qS(e) {
    return e && si(e.canLoad)
}
function ZS(e) {
    return e && si(e.canActivate)
}
function YS(e) {
    return e && si(e.canActivateChild)
}
function QS(e) {
    return e && si(e.canDeactivate)
}
function KS(e) {
    return e && si(e.canMatch)
}
function Qy(e) {
    return e instanceof dn || e?.name === "EmptyError"
}
var Na = Symbol("INITIAL_VALUE");
function Pr() {
    return re(e => lc(e.map(t => t.pipe(yt(1), dc(Na)))).pipe(k(t => {
        for (let n of t)
            if (n !== !0) {
                if (n === Na)
                    return Na;
                if (n === !1 || JS(n))
                    return n
            }
        return !0
    }
    ), qe(t => t !== Na), yt(1)))
}
function JS(e) {
    return Rr(e) || e instanceof kr
}
function Ky(e) {
    return e.aborted ? T(void 0).pipe(yt(1)) : new O(t => {
        let n = () => {
            t.next(),
            t.complete()
        }
        ;
        return e.addEventListener("abort", n),
        () => e.removeEventListener("abort", n)
    }
    )
}
function Jy(e) {
    return Hr(Ky(e))
}
function XS(e) {
    return De(t => {
        let {targetSnapshot: n, currentSnapshot: r, guards: {canActivateChecks: o, canDeactivateChecks: i}} = t;
        return i.length === 0 && o.length === 0 ? T(x(y({}, t), {
            guardsResult: !0
        })) : e_(i, n, r).pipe(De(s => s && WS(s) ? t_(n, o, e) : T(s)), k(s => x(y({}, t), {
            guardsResult: s
        })))
    }
    )
}
function e_(e, t, n) {
    return K(e).pipe(De(r => s_(r.component, r.route, n, t)), vt(r => r !== !0, !0))
}
function t_(e, t, n) {
    return K(t).pipe(Yn(r => Zn(r_(r.route.parent, n), n_(r.route, n), i_(e, r.path), o_(e, r.route))), vt(r => r !== !0, !0))
}
function n_(e, t) {
    return e !== null && t && t(new za(e)),
    T(!0)
}
function r_(e, t) {
    return e !== null && t && t(new Ha(e)),
    T(!0)
}
function o_(e, t) {
    let n = t.routeConfig ? t.routeConfig.canActivate : null;
    if (!n || n.length === 0)
        return T(!0);
    let r = n.map(o => Vr( () => {
        let i = t._environmentInjector
          , s = Lr(o, i)
          , a = ZS(s) ? s.canActivate(t, e) : ie(i, () => s(t, e));
        return Hn(a).pipe(vt())
    }
    ));
    return T(r).pipe(Pr())
}
function i_(e, t) {
    let n = t[t.length - 1]
      , o = t.slice(0, t.length - 1).reverse().map(i => $S(i)).filter(i => i !== null).map(i => Vr( () => {
        let s = i.guards.map(a => {
            let c = i.node._environmentInjector
              , u = Lr(a, c)
              , l = YS(u) ? u.canActivateChild(n, e) : ie(c, () => u(n, e));
            return Hn(l).pipe(vt())
        }
        );
        return T(s).pipe(Pr())
    }
    ));
    return T(o).pipe(Pr())
}
function s_(e, t, n, r) {
    let o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
    if (!o || o.length === 0)
        return T(!0);
    let i = o.map(s => {
        let a = t._environmentInjector
          , c = Lr(s, a)
          , u = QS(c) ? c.canDeactivate(e, t, n, r) : ie(a, () => c(e, t, n, r));
        return Hn(u).pipe(vt())
    }
    );
    return T(i).pipe(Pr())
}
function a_(e, t, n, r, o) {
    let i = t.canLoad;
    if (i === void 0 || i.length === 0)
        return T(!0);
    let s = i.map(a => {
        let c = Lr(a, e)
          , u = qS(c) ? c.canLoad(t, n) : ie(e, () => c(t, n))
          , l = Hn(u);
        return o ? l.pipe(Jy(o)) : l
    }
    );
    return T(s).pipe(Pr(), Xy(r))
}
function Xy(e) {
    return sc(te(t => {
        if (typeof t != "boolean")
            throw Za(e, t)
    }
    ), k(t => t === !0))
}
function c_(e, t, n, r, o, i) {
    let s = t.canMatch;
    if (!s || s.length === 0)
        return T(!0);
    let a = s.map(c => {
        let u = Lr(c, e)
          , l = KS(u) ? u.canMatch(t, n, o) : ie(e, () => u(t, n, o));
        return Hn(l).pipe(Jy(i))
    }
    );
    return T(a).pipe(Pr(), Xy(r))
}
var kt = class e extends Error {
    segmentGroup;
    constructor(t) {
        super(),
        this.segmentGroup = t || null,
        Object.setPrototypeOf(this, e.prototype)
    }
}
  , ri = class e extends Error {
    urlTree;
    constructor(t) {
        super(),
        this.urlTree = t,
        Object.setPrototypeOf(this, e.prototype)
    }
}
;
function u_(e) {
    throw new m(4e3,!1)
}
function l_(e) {
    throw Zy(!1, ve.GuardRejected)
}
var Bd = class {
    urlSerializer;
    urlTree;
    constructor(t, n) {
        this.urlSerializer = t,
        this.urlTree = n
    }
    async lineralizeSegments(t, n) {
        let r = []
          , o = n.root;
        for (; ; ) {
            if (r = r.concat(o.segments),
            o.numberOfChildren === 0)
                return r;
            if (o.numberOfChildren > 1 || !o.children[_])
                throw u_(`${t.redirectTo}`);
            o = o.children[_]
        }
    }
    async applyRedirectCommands(t, n, r, o, i) {
        let s = await d_(n, o, i);
        if (s instanceof ze)
            throw new ri(s);
        let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), t, r);
        if (s[0] === "/")
            throw new ri(a);
        return a
    }
    applyRedirectCreateUrlTree(t, n, r, o) {
        let i = this.createSegmentGroup(t, n.root, r, o);
        return new ze(i,this.createQueryParams(n.queryParams, this.urlTree.queryParams),n.fragment)
    }
    createQueryParams(t, n) {
        let r = {};
        return Object.entries(t).forEach( ([o,i]) => {
            if (typeof i == "string" && i[0] === ":") {
                let a = i.substring(1);
                r[o] = n[a]
            } else
                r[o] = i
        }
        ),
        r
    }
    createSegmentGroup(t, n, r, o) {
        let i = this.createSegments(t, n.segments, r, o)
          , s = {};
        return Object.entries(n.children).forEach( ([a,c]) => {
            s[a] = this.createSegmentGroup(t, c, r, o)
        }
        ),
        new j(i,s)
    }
    createSegments(t, n, r, o) {
        return n.map(i => i.path[0] === ":" ? this.findPosParam(t, i, o) : this.findOrReturn(i, r))
    }
    findPosParam(t, n, r) {
        let o = r[n.path.substring(1)];
        if (!o)
            throw new m(4001,!1);
        return o
    }
    findOrReturn(t, n) {
        let r = 0;
        for (let o of n) {
            if (o.path === t.path)
                return n.splice(r),
                o;
            r++
        }
        return t
    }
}
;
function d_(e, t, n) {
    if (typeof e == "string")
        return Promise.resolve(e);
    let r = e;
    return Oa(Hn(ie(n, () => r(t))))
}
function f_(e, t) {
    return e.providers && !e._injector && (e._injector = Ro(e.providers, t, `Route: ${e.path}`)),
    e._injector ?? t
}
function it(e) {
    return e.outlet || _
}
function h_(e, t) {
    let n = e.filter(r => it(r) === t);
    return n.push(...e.filter(r => it(r) !== t)),
    n
}
var Vd = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {}
};
function ev(e) {
    return {
        routeConfig: e.routeConfig,
        url: e.url,
        params: e.params,
        queryParams: e.queryParams,
        fragment: e.fragment,
        data: e.data,
        outlet: e.outlet,
        title: e.title,
        paramMap: e.paramMap,
        queryParamMap: e.queryParamMap
    }
}
function p_(e, t, n, r, o, i, s) {
    let a = tv(e, t, n);
    if (!a.matched)
        return T(a);
    let c = ev(i(a));
    return r = f_(t, r),
    c_(r, t, n, o, c, s).pipe(k(u => u === !0 ? a : y({}, Vd)))
}
function tv(e, t, n) {
    if (t.path === "")
        return t.pathMatch === "full" && (e.hasChildren() || n.length > 0) ? y({}, Vd) : {
            matched: !0,
            consumedSegments: [],
            remainingSegments: n,
            parameters: {},
            positionalParamSegments: {}
        };
    let o = (t.matcher || Ty)(n, e, t);
    if (!o)
        return y({}, Vd);
    let i = {};
    Object.entries(o.posParams ?? {}).forEach( ([a,c]) => {
        i[a] = c.path
    }
    );
    let s = o.consumed.length > 0 ? y(y({}, i), o.consumed[o.consumed.length - 1].parameters) : i;
    return {
        matched: !0,
        consumedSegments: o.consumed,
        remainingSegments: n.slice(o.consumed.length),
        parameters: s,
        positionalParamSegments: o.posParams ?? {}
    }
}
function Cy(e, t, n, r, o) {
    return n.length > 0 && y_(e, n, r, o) ? {
        segmentGroup: new j(t,m_(r, new j(n,e.children))),
        slicedSegments: []
    } : n.length === 0 && v_(e, n, r) ? {
        segmentGroup: new j(e.segments,g_(e, n, r, e.children)),
        slicedSegments: n
    } : {
        segmentGroup: new j(e.segments,e.children),
        slicedSegments: n
    }
}
function g_(e, t, n, r) {
    let o = {};
    for (let i of n)
        if (Ja(e, t, i) && !r[it(i)]) {
            let s = new j([],{});
            o[it(i)] = s
        }
    return y(y({}, r), o)
}
function m_(e, t) {
    let n = {};
    n[_] = t;
    for (let r of e)
        if (r.path === "" && it(r) !== _) {
            let o = new j([],{});
            n[it(r)] = o
        }
    return n
}
function y_(e, t, n, r) {
    return n.some(o => !Ja(e, t, o) || !(it(o) !== _) ? !1 : !(r !== void 0 && it(o) === r))
}
function v_(e, t, n) {
    return n.some(r => Ja(e, t, r))
}
function Ja(e, t, n) {
    return (e.hasChildren() || t.length > 0) && n.pathMatch === "full" ? !1 : n.path === ""
}
function D_(e, t, n) {
    return t.length === 0 && !e.children[n]
}
var Hd = class {
}
;
async function E_(e, t, n, r, o, i, s="emptyOnly", a) {
    return new $d(e,t,n,r,o,s,i,a).recognize()
}
var w_ = 31
  , $d = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    abortSignal;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(t, n, r, o, i, s, a, c) {
        this.injector = t,
        this.configLoader = n,
        this.rootComponentType = r,
        this.config = o,
        this.urlTree = i,
        this.paramsInheritanceStrategy = s,
        this.urlSerializer = a,
        this.abortSignal = c,
        this.applyRedirects = new Bd(this.urlSerializer,this.urlTree)
    }
    noMatchError(t) {
        return new m(4002,`'${t.segmentGroup}'`)
    }
    async recognize() {
        let t = Cy(this.urlTree.root, [], [], this.config).segmentGroup
          , {children: n, rootSnapshot: r} = await this.match(t)
          , o = new Oe(r,n)
          , i = new ti("",o)
          , s = Ly(r, [], this.urlTree.queryParams, this.urlTree.fragment);
        return s.queryParams = this.urlTree.queryParams,
        i.url = this.urlSerializer.serialize(s),
        {
            state: i,
            tree: s
        }
    }
    async match(t) {
        let n = new Or([],Object.freeze({}),Object.freeze(y({}, this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),_,this.rootComponentType,null,{},this.injector);
        try {
            return {
                children: await this.processSegmentGroup(this.injector, this.config, t, _, n),
                rootSnapshot: n
            }
        } catch (r) {
            if (r instanceof ri)
                return this.urlTree = r.urlTree,
                this.match(r.urlTree.root);
            throw r instanceof kt ? this.noMatchError(r) : r
        }
    }
    async processSegmentGroup(t, n, r, o, i) {
        if (r.segments.length === 0 && r.hasChildren())
            return this.processChildren(t, n, r, i);
        let s = await this.processSegment(t, n, r, r.segments, o, !0, i);
        return s instanceof Oe ? [s] : []
    }
    async processChildren(t, n, r, o) {
        let i = [];
        for (let c of Object.keys(r.children))
            c === "primary" ? i.unshift(c) : i.push(c);
        let s = [];
        for (let c of i) {
            let u = r.children[c]
              , l = h_(n, c)
              , d = await this.processSegmentGroup(t, l, u, c, o);
            s.push(...d)
        }
        let a = nv(s);
        return I_(a),
        a
    }
    async processSegment(t, n, r, o, i, s, a) {
        for (let c of n)
            try {
                return await this.processSegmentAgainstRoute(c._injector ?? t, n, c, r, o, i, s, a)
            } catch (u) {
                if (u instanceof kt || Qy(u))
                    continue;
                throw u
            }
        if (D_(r, o, i))
            return new Hd;
        throw new kt(r)
    }
    async processSegmentAgainstRoute(t, n, r, o, i, s, a, c) {
        if (it(r) !== s && (s === _ || !Ja(o, i, r)))
            throw new kt(o);
        if (r.redirectTo === void 0)
            return this.matchSegmentAgainstRoute(t, o, r, i, s, c);
        if (this.allowRedirects && a)
            return this.expandSegmentAgainstRouteUsingRedirect(t, o, n, r, i, s, c);
        throw new kt(o)
    }
    async expandSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s, a) {
        let {matched: c, parameters: u, consumedSegments: l, positionalParamSegments: d, remainingSegments: h} = tv(n, o, i);
        if (!c)
            throw new kt(n);
        typeof o.redirectTo == "string" && o.redirectTo[0] === "/" && (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > w_ && (this.allowRedirects = !1));
        let f = this.createSnapshot(t, o, i, u, a);
        if (this.abortSignal.aborted)
            throw new Error(this.abortSignal.reason);
        let g = await this.applyRedirects.applyRedirectCommands(l, o.redirectTo, d, ev(f), t)
          , N = await this.applyRedirects.lineralizeSegments(o, g);
        return this.processSegment(t, r, n, N.concat(h), s, !1, a)
    }
    createSnapshot(t, n, r, o, i) {
        let s = new Or(r,o,Object.freeze(y({}, this.urlTree.queryParams)),this.urlTree.fragment,b_(n),it(n),n.component ?? n._loadedComponent ?? null,n,T_(n),t)
          , a = zd(s, i, this.paramsInheritanceStrategy);
        return s.params = Object.freeze(a.params),
        s.data = Object.freeze(a.data),
        s
    }
    async matchSegmentAgainstRoute(t, n, r, o, i, s) {
        if (this.abortSignal.aborted)
            throw new Error(this.abortSignal.reason);
        let a = Te => this.createSnapshot(t, r, Te.consumedSegments, Te.parameters, s)
          , c = await Oa(p_(n, r, o, t, this.urlSerializer, a, this.abortSignal));
        if (r.path === "**" && (n.children = {}),
        !c?.matched)
            throw new kt(n);
        t = r._injector ?? t;
        let {routes: u} = await this.getChildConfig(t, r, o)
          , l = r._loadedInjector ?? t
          , {parameters: d, consumedSegments: h, remainingSegments: f} = c
          , g = this.createSnapshot(t, r, h, d, s)
          , {segmentGroup: N, slicedSegments: E} = Cy(n, h, f, u, i);
        if (E.length === 0 && N.hasChildren()) {
            let Te = await this.processChildren(l, u, N, g);
            return new Oe(g,Te)
        }
        if (u.length === 0 && E.length === 0)
            return new Oe(g,[]);
        let w = it(r) === i
          , $ = await this.processSegment(l, u, N, E, w ? _ : i, !0, g);
        return new Oe(g,$ instanceof Oe ? [$] : [])
    }
    async getChildConfig(t, n, r) {
        if (n.children)
            return {
                routes: n.children,
                injector: t
            };
        if (n.loadChildren) {
            if (n._loadedRoutes !== void 0) {
                let i = n._loadedNgModuleFactory;
                return i && !n._loadedInjector && (n._loadedInjector = i.create(t).injector),
                {
                    routes: n._loadedRoutes,
                    injector: n._loadedInjector
                }
            }
            if (this.abortSignal.aborted)
                throw new Error(this.abortSignal.reason);
            if (await Oa(a_(t, n, r, this.urlSerializer, this.abortSignal))) {
                let i = await this.configLoader.loadChildren(t, n);
                return n._loadedRoutes = i.routes,
                n._loadedInjector = i.injector,
                n._loadedNgModuleFactory = i.factory,
                i
            }
            throw l_(n)
        }
        return {
            routes: [],
            injector: t
        }
    }
}
;
function I_(e) {
    e.sort( (t, n) => t.value.outlet === _ ? -1 : n.value.outlet === _ ? 1 : t.value.outlet.localeCompare(n.value.outlet))
}
function C_(e) {
    let t = e.value.routeConfig;
    return t && t.path === ""
}
function nv(e) {
    let t = []
      , n = new Set;
    for (let r of e) {
        if (!C_(r)) {
            t.push(r);
            continue
        }
        let o = t.find(i => r.value.routeConfig === i.value.routeConfig);
        o !== void 0 ? (o.children.push(...r.children),
        n.add(o)) : t.push(r)
    }
    for (let r of n) {
        let o = nv(r.children);
        t.push(new Oe(r.value,o))
    }
    return t.filter(r => !n.has(r))
}
function b_(e) {
    return e.data || {}
}
function T_(e) {
    return e.resolve || {}
}
function S_(e, t, n, r, o, i, s) {
    return De(async a => {
        let {state: c, tree: u} = await E_(e, t, n, r, a.extractedUrl, o, i, s);
        return x(y({}, a), {
            targetSnapshot: c,
            urlAfterRedirects: u
        })
    }
    )
}
function __(e) {
    return De(t => {
        let {targetSnapshot: n, guards: {canActivateChecks: r}} = t;
        if (!r.length)
            return T(t);
        let o = new Set(r.map(a => a.route))
          , i = new Set;
        for (let a of o)
            if (!i.has(a))
                for (let c of rv(a))
                    i.add(c);
        let s = 0;
        return K(i).pipe(Yn(a => o.has(a) ? M_(a, n, e) : (a.data = zd(a, a.parent, e).resolve,
        T(void 0))), te( () => s++), ki(1), De(a => s === i.size ? T(t) : ce))
    }
    )
}
function rv(e) {
    let t = e.children.map(n => rv(n)).flat();
    return [e, ...t]
}
function M_(e, t, n) {
    let r = e.routeConfig
      , o = e._resolve;
    return r?.title !== void 0 && !Gy(r) && (o[oi] = r.title),
    Vr( () => (e.data = zd(e, e.parent, n).resolve,
    N_(o, e, t).pipe(k(i => (e._resolvedData = i,
    e.data = y(y({}, e.data), i),
    null)))))
}
function N_(e, t, n) {
    let r = Rd(e);
    if (r.length === 0)
        return T({});
    let o = {};
    return K(r).pipe(De(i => R_(e[i], t, n).pipe(vt(), te(s => {
        if (s instanceof kr)
            throw Za(new rn, s);
        o[i] = s
    }
    ))), ki(1), k( () => o), J(i => Qy(i) ? ce : fe(i)))
}
function R_(e, t, n) {
    let r = t._environmentInjector
      , o = Lr(e, r)
      , i = o.resolve ? o.resolve(t, n) : ie(r, () => o(t, n));
    return Hn(i)
}
function by(e) {
    return re(t => {
        let n = e(t);
        return n ? K(n).pipe(k( () => t)) : T(t)
    }
    )
}
var Yd = ( () => {
    class e {
        buildTitle(n) {
            let r, o = n.root;
            for (; o !== void 0; )
                r = this.getResolvedTitleForRoute(o) ?? r,
                o = o.children.find(i => i.outlet === _);
            return r
        }
        getResolvedTitleForRoute(n) {
            return n.data[oi]
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(ov),
            providedIn: "root"
        })
    }
    return e
}
)()
  , ov = ( () => {
    class e extends Yd {
        title;
        constructor(n) {
            super(),
            this.title = n
        }
        updateTitle(n) {
            let r = this.buildTitle(n);
            r !== void 0 && this.title.setTitle(r)
        }
        static \u0275fac = function(r) {
            return new (r || e)(I(yy))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , ai = new D("",{
    factory: () => ({})
})
  , ci = new D("")
  , iv = ( () => {
    class e {
        componentLoaders = new WeakMap;
        childrenLoaders = new WeakMap;
        onLoadStartListener;
        onLoadEndListener;
        compiler = p(Kl);
        async loadComponent(n, r) {
            if (this.componentLoaders.get(r))
                return this.componentLoaders.get(r);
            if (r._loadedComponent)
                return Promise.resolve(r._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(r);
            let o = (async () => {
                try {
                    let i = await _y(ie(n, () => r.loadComponent()))
                      , s = await cv(av(i));
                    return this.onLoadEndListener && this.onLoadEndListener(r),
                    r._loadedComponent = s,
                    s
                } finally {
                    this.componentLoaders.delete(r)
                }
            }
            )();
            return this.componentLoaders.set(r, o),
            o
        }
        loadChildren(n, r) {
            if (this.childrenLoaders.get(r))
                return this.childrenLoaders.get(r);
            if (r._loadedRoutes)
                return Promise.resolve({
                    routes: r._loadedRoutes,
                    injector: r._loadedInjector
                });
            this.onLoadStartListener && this.onLoadStartListener(r);
            let o = (async () => {
                try {
                    let i = await sv(r, this.compiler, n, this.onLoadEndListener);
                    return r._loadedRoutes = i.routes,
                    r._loadedInjector = i.injector,
                    r._loadedNgModuleFactory = i.factory,
                    i
                } finally {
                    this.childrenLoaders.delete(r)
                }
            }
            )();
            return this.childrenLoaders.set(r, o),
            o
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
async function sv(e, t, n, r) {
    let o = await _y(ie(n, () => e.loadChildren())), i = await cv(av(o)), s;
    i instanceof Xs || Array.isArray(i) ? s = i : s = await t.compileModuleAsync(i),
    r && r(e);
    let a, c, u = !1, l;
    return Array.isArray(s) ? (c = s,
    u = !0) : (a = s.create(n).injector,
    l = s,
    c = a.get(ci, [], {
        optional: !0,
        self: !0
    }).flat()),
    {
        routes: c.map(Zd),
        injector: a,
        factory: l
    }
}
function A_(e) {
    return e && typeof e == "object" && "default" in e
}
function av(e) {
    return A_(e) ? e.default : e
}
async function cv(e) {
    return e
}
var Xa = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(x_),
            providedIn: "root"
        })
    }
    return e
}
)()
  , x_ = ( () => {
    class e {
        shouldProcessUrl(n) {
            return !0
        }
        extract(n) {
            return n
        }
        merge(n, r) {
            return n
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , uv = new D("");
var O_ = () => {}
  , lv = new D("")
  , dv = ( () => {
    class e {
        currentNavigation = lr(null, {
            equal: () => !1
        });
        currentTransition = null;
        lastSuccessfulNavigation = lr(null);
        events = new ae;
        transitionAbortWithErrorSubject = new ae;
        configLoader = p(iv);
        environmentInjector = p(q);
        destroyRef = p(Je);
        urlSerializer = p(ii);
        rootContexts = p(Fr);
        location = p(Cr);
        inputBindingEnabled = p(Ka, {
            optional: !0
        }) !== null;
        titleStrategy = p(Yd);
        options = p(ai, {
            optional: !0
        }) || {};
        paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
        urlHandlingStrategy = p(Xa);
        createViewTransition = p(uv, {
            optional: !0
        });
        navigationErrorHandler = p(lv, {
            optional: !0
        });
        navigationId = 0;
        get hasRequestedNavigation() {
            return this.navigationId !== 0
        }
        transitions;
        afterPreactivation = () => T(void 0);
        rootComponentType = null;
        destroyed = !1;
        constructor() {
            let n = o => this.events.next(new Ba(o))
              , r = o => this.events.next(new Va(o));
            this.configLoader.onLoadEndListener = r,
            this.configLoader.onLoadStartListener = n,
            this.destroyRef.onDestroy( () => {
                this.destroyed = !0
            }
            )
        }
        complete() {
            this.transitions?.complete()
        }
        handleNavigationRequest(n) {
            let r = ++this.navigationId;
            rt( () => {
                this.transitions?.next(x(y({}, n), {
                    extractedUrl: this.urlHandlingStrategy.extract(n.rawUrl),
                    targetSnapshot: null,
                    targetRouterState: null,
                    guards: {
                        canActivateChecks: [],
                        canDeactivateChecks: []
                    },
                    guardsResult: null,
                    id: r,
                    routesRecognizeHandler: {},
                    beforeActivateHandler: {}
                }))
            }
            )
        }
        setupNavigations(n) {
            return this.transitions = new Q(null),
            this.transitions.pipe(qe(r => r !== null), re(r => {
                let o = !1
                  , i = new AbortController
                  , s = () => !o && this.currentTransition?.id === r.id;
                return T(r).pipe(re(a => {
                    if (this.navigationId > r.id)
                        return this.cancelNavigationTransition(r, "", ve.SupersededByNewNavigation),
                        ce;
                    this.currentTransition = r;
                    let c = this.lastSuccessfulNavigation();
                    this.currentNavigation.set({
                        id: a.id,
                        initialUrl: a.rawUrl,
                        extractedUrl: a.extractedUrl,
                        targetBrowserUrl: typeof a.extras.browserUrl == "string" ? this.urlSerializer.parse(a.extras.browserUrl) : a.extras.browserUrl,
                        trigger: a.source,
                        extras: a.extras,
                        previousNavigation: c ? x(y({}, c), {
                            previousNavigation: null
                        }) : null,
                        abort: () => i.abort(),
                        routesRecognizeHandler: a.routesRecognizeHandler,
                        beforeActivateHandler: a.beforeActivateHandler
                    });
                    let u = !n.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl()
                      , l = a.extras.onSameUrlNavigation ?? n.onSameUrlNavigation;
                    if (!u && l !== "reload")
                        return this.events.next(new Ft(a.id,this.urlSerializer.serialize(a.rawUrl),"",Ko.IgnoredSameUrlNavigation)),
                        a.resolve(!1),
                        ce;
                    if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
                        return T(a).pipe(re(d => (this.events.next(new Bn(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),
                        d.id !== this.navigationId ? ce : Promise.resolve(d))), S_(this.environmentInjector, this.configLoader, this.rootComponentType, n.config, this.urlSerializer, this.paramsInheritanceStrategy, i.signal), te(d => {
                            r.targetSnapshot = d.targetSnapshot,
                            r.urlAfterRedirects = d.urlAfterRedirects,
                            this.currentNavigation.update(h => (h.finalUrl = d.urlAfterRedirects,
                            h)),
                            this.events.next(new Xo)
                        }
                        ), re(d => K(r.routesRecognizeHandler.deferredHandle ?? T(void 0)).pipe(k( () => d))), te( () => {
                            let d = new Jo(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);
                            this.events.next(d)
                        }
                        ));
                    if (u && this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)) {
                        let {id: d, extractedUrl: h, source: f, restoredState: g, extras: N} = a
                          , E = new Bn(d,this.urlSerializer.serialize(h),f,g);
                        this.events.next(E);
                        let w = $y(this.rootComponentType, this.environmentInjector).snapshot;
                        return this.currentTransition = r = x(y({}, a), {
                            targetSnapshot: w,
                            urlAfterRedirects: h,
                            extras: x(y({}, N), {
                                skipLocationChange: !1,
                                replaceUrl: !1
                            })
                        }),
                        this.currentNavigation.update($ => ($.finalUrl = h,
                        $)),
                        T(r)
                    } else
                        return this.events.next(new Ft(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Ko.IgnoredByUrlHandlingStrategy)),
                        a.resolve(!1),
                        ce
                }
                ), k(a => {
                    let c = new Fa(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);
                    return this.events.next(c),
                    this.currentTransition = r = x(y({}, a), {
                        guards: HS(a.targetSnapshot, a.currentSnapshot, this.rootContexts)
                    }),
                    r
                }
                ), XS(a => this.events.next(a)), re(a => {
                    if (r.guardsResult = a.guardsResult,
                    a.guardsResult && typeof a.guardsResult != "boolean")
                        throw Za(this.urlSerializer, a.guardsResult);
                    let c = new La(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);
                    if (this.events.next(c),
                    !s())
                        return ce;
                    if (!a.guardsResult)
                        return this.cancelNavigationTransition(a, "", ve.GuardRejected),
                        ce;
                    if (a.guards.canActivateChecks.length === 0)
                        return T(a);
                    let u = new ja(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);
                    if (this.events.next(u),
                    !s())
                        return ce;
                    let l = !1;
                    return T(a).pipe(__(this.paramsInheritanceStrategy), te({
                        next: () => {
                            l = !0;
                            let d = new Ua(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);
                            this.events.next(d)
                        }
                        ,
                        complete: () => {
                            l || this.cancelNavigationTransition(a, "", ve.NoDataFromResolver)
                        }
                    }))
                }
                ), by(a => {
                    let c = l => {
                        let d = [];
                        if (l.routeConfig?._loadedComponent)
                            l.component = l.routeConfig?._loadedComponent;
                        else if (l.routeConfig?.loadComponent) {
                            let h = l._environmentInjector;
                            d.push(this.configLoader.loadComponent(h, l.routeConfig).then(f => {
                                l.component = f
                            }
                            ))
                        }
                        for (let h of l.children)
                            d.push(...c(h));
                        return d
                    }
                      , u = c(a.targetSnapshot.root);
                    return u.length === 0 ? T(a) : K(Promise.all(u).then( () => a))
                }
                ), by( () => this.afterPreactivation()), re( () => {
                    let {currentSnapshot: a, targetSnapshot: c} = r
                      , u = this.createViewTransition?.(this.environmentInjector, a.root, c.root);
                    return u ? K(u).pipe(k( () => r)) : T(r)
                }
                ), yt(1), re(a => {
                    let c = jS(n.routeReuseStrategy, a.targetSnapshot, a.currentRouterState);
                    this.currentTransition = r = a = x(y({}, a), {
                        targetRouterState: c
                    }),
                    this.currentNavigation.update(l => (l.targetRouterState = c,
                    l)),
                    this.events.next(new Ar);
                    let u = r.beforeActivateHandler.deferredHandle;
                    return u ? K(u.then( () => a)) : T(a)
                }
                ), te(a => {
                    new Ud(n.routeReuseStrategy,r.targetRouterState,r.currentRouterState,c => this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),
                    s() && (o = !0,
                    this.currentNavigation.update(c => (c.abort = O_,
                    c)),
                    this.lastSuccessfulNavigation.set(rt(this.currentNavigation)),
                    this.events.next(new Pt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),
                    this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),
                    a.resolve(!0))
                }
                ), Hr(Ky(i.signal).pipe(qe( () => !o && !r.targetRouterState), te( () => {
                    this.cancelNavigationTransition(r, i.signal.reason + "", ve.Aborted)
                }
                ))), te({
                    complete: () => {
                        o = !0
                    }
                }), Hr(this.transitionAbortWithErrorSubject.pipe(te(a => {
                    throw a
                }
                ))), Qn( () => {
                    i.abort(),
                    o || this.cancelNavigationTransition(r, "", ve.SupersededByNewNavigation),
                    this.currentTransition?.id === r.id && (this.currentNavigation.set(null),
                    this.currentTransition = null)
                }
                ), J(a => {
                    if (o = !0,
                    this.destroyed)
                        return r.resolve(!1),
                        ce;
                    if (Yy(a))
                        this.events.next(new $e(r.id,this.urlSerializer.serialize(r.extractedUrl),a.message,a.cancellationCode)),
                        VS(a) ? this.events.next(new xr(a.url,a.navigationBehaviorOptions)) : r.resolve(!1);
                    else {
                        let c = new Vn(r.id,this.urlSerializer.serialize(r.extractedUrl),a,r.targetSnapshot ?? void 0);
                        try {
                            let u = ie(this.environmentInjector, () => this.navigationErrorHandler?.(c));
                            if (u instanceof kr) {
                                let {message: l, cancellationCode: d} = Za(this.urlSerializer, u);
                                this.events.next(new $e(r.id,this.urlSerializer.serialize(r.extractedUrl),l,d)),
                                this.events.next(new xr(u.redirectTo,u.navigationBehaviorOptions))
                            } else
                                throw this.events.next(c),
                                a
                        } catch (u) {
                            this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(u)
                        }
                    }
                    return ce
                }
                ))
            }
            ))
        }
        cancelNavigationTransition(n, r, o) {
            let i = new $e(n.id,this.urlSerializer.serialize(n.extractedUrl),r,o);
            this.events.next(i),
            n.resolve(!1)
        }
        isUpdatingInternalState() {
            return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString()
        }
        isUpdatedBrowserUrl() {
            let n = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0)))
              , r = rt(this.currentNavigation)
              , o = r?.targetBrowserUrl ?? r?.extractedUrl;
            return n.toString() !== o?.toString() && !r?.extras.skipLocationChange
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function k_(e) {
    return e !== Zo
}
var fv = new D("");
var hv = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(P_),
            providedIn: "root"
        })
    }
    return e
}
)()
  , Qa = class {
    shouldDetach(t) {
        return !1
    }
    store(t, n) {}
    shouldAttach(t) {
        return !1
    }
    retrieve(t) {
        return null
    }
    shouldReuseRoute(t, n) {
        return t.routeConfig === n.routeConfig
    }
    shouldDestroyInjector(t) {
        return !0
    }
}
  , P_ = ( () => {
    class e extends Qa {
        static \u0275fac = ( () => {
            let n;
            return function(o) {
                return (n || (n = bo(e)))(o || e)
            }
        }
        )();
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , Qd = ( () => {
    class e {
        urlSerializer = p(ii);
        options = p(ai, {
            optional: !0
        }) || {};
        canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
        location = p(Cr);
        urlHandlingStrategy = p(Xa);
        urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
        currentUrlTree = new ze;
        getCurrentUrlTree() {
            return this.currentUrlTree
        }
        rawUrlTree = this.currentUrlTree;
        getRawUrlTree() {
            return this.rawUrlTree
        }
        createBrowserPath({finalUrl: n, initialUrl: r, targetBrowserUrl: o}) {
            let i = n !== void 0 ? this.urlHandlingStrategy.merge(n, r) : r
              , s = o ?? i;
            return s instanceof ze ? this.urlSerializer.serialize(s) : s
        }
        routerUrlState(n) {
            return n?.targetBrowserUrl === void 0 || n?.finalUrl === void 0 ? {} : {
                \u0275routerUrl: this.urlSerializer.serialize(n.finalUrl)
            }
        }
        commitTransition({targetRouterState: n, finalUrl: r, initialUrl: o}) {
            r && n ? (this.currentUrlTree = r,
            this.rawUrlTree = this.urlHandlingStrategy.merge(r, o),
            this.routerState = n) : this.rawUrlTree = o
        }
        routerState = $y(null, p(q));
        getRouterState() {
            return this.routerState
        }
        _stateMemento = this.createStateMemento();
        get stateMemento() {
            return this._stateMemento
        }
        updateStateMemento() {
            this._stateMemento = this.createStateMemento()
        }
        createStateMemento() {
            return {
                rawUrlTree: this.rawUrlTree,
                currentUrlTree: this.currentUrlTree,
                routerState: this.routerState
            }
        }
        restoredState() {
            return this.location.getState()
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(F_),
            providedIn: "root"
        })
    }
    return e
}
)()
  , F_ = ( () => {
    class e extends Qd {
        currentPageId = 0;
        lastSuccessfulId = -1;
        get browserPageId() {
            return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId
        }
        registerNonRouterCurrentEntryChangeListener(n) {
            return this.location.subscribe(r => {
                r.type === "popstate" && setTimeout( () => {
                    n(r.url, r.state, "popstate", {
                        replaceUrl: !0
                    })
                }
                )
            }
            )
        }
        handleRouterEvent(n, r) {
            n instanceof Bn ? this.updateStateMemento() : n instanceof Ft ? this.commitTransition(r) : n instanceof Jo ? this.urlUpdateStrategy === "eager" && (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r)) : n instanceof Ar ? (this.commitTransition(r),
            this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(r), r)) : n instanceof $e && !Hy(n) ? this.restoreHistory(r) : n instanceof Vn ? this.restoreHistory(r, !0) : n instanceof Pt && (this.lastSuccessfulId = n.id,
            this.currentPageId = this.browserPageId)
        }
        setBrowserUrl(n, r) {
            let {extras: o, id: i} = r
              , {replaceUrl: s, state: a} = o;
            if (this.location.isCurrentPathEqualTo(n) || s) {
                let c = this.browserPageId
                  , u = y(y({}, a), this.generateNgRouterState(i, c, r));
                this.location.replaceState(n, "", u)
            } else {
                let c = y(y({}, a), this.generateNgRouterState(i, this.browserPageId + 1, r));
                this.location.go(n, "", c)
            }
        }
        restoreHistory(n, r=!1) {
            if (this.canceledNavigationResolution === "computed") {
                let o = this.browserPageId
                  , i = this.currentPageId - o;
                i !== 0 ? this.location.historyGo(i) : this.getCurrentUrlTree() === n.finalUrl && i === 0 && (this.resetInternalState(n),
                this.resetUrlToCurrentUrlTree())
            } else
                this.canceledNavigationResolution === "replace" && (r && this.resetInternalState(n),
                this.resetUrlToCurrentUrlTree())
        }
        resetInternalState({finalUrl: n}) {
            this.routerState = this.stateMemento.routerState,
            this.currentUrlTree = this.stateMemento.currentUrlTree,
            this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n ?? this.rawUrlTree)
        }
        resetUrlToCurrentUrlTree() {
            this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
        }
        generateNgRouterState(n, r, o) {
            return this.canceledNavigationResolution === "computed" ? y({
                navigationId: n,
                \u0275routerPageId: r
            }, this.routerUrlState(o)) : y({
                navigationId: n
            }, this.routerUrlState(o))
        }
        static \u0275fac = ( () => {
            let n;
            return function(o) {
                return (n || (n = bo(e)))(o || e)
            }
        }
        )();
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function Kd(e, t) {
    e.events.pipe(qe(n => n instanceof Pt || n instanceof $e || n instanceof Vn || n instanceof Ft), k(n => n instanceof Pt || n instanceof Ft ? 0 : (n instanceof $e ? n.code === ve.Redirect || n.code === ve.SupersededByNewNavigation : !1) ? 2 : 1), qe(n => n !== 2), yt(1)).subscribe( () => {
        t()
    }
    )
}
var ec = ( () => {
    class e {
        get currentUrlTree() {
            return this.stateManager.getCurrentUrlTree()
        }
        get rawUrlTree() {
            return this.stateManager.getRawUrlTree()
        }
        disposed = !1;
        nonRouterCurrentEntryChangeSubscription;
        console = p(ea);
        stateManager = p(Qd);
        options = p(ai, {
            optional: !0
        }) || {};
        pendingTasks = p(bt);
        urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
        navigationTransitions = p(dv);
        urlSerializer = p(ii);
        location = p(Cr);
        urlHandlingStrategy = p(Xa);
        injector = p(q);
        _events = new ae;
        get events() {
            return this._events
        }
        get routerState() {
            return this.stateManager.getRouterState()
        }
        navigated = !1;
        routeReuseStrategy = p(hv);
        injectorCleanup = p(fv, {
            optional: !0
        });
        onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
        config = p(ci, {
            optional: !0
        })?.flat() ?? [];
        componentInputBindingEnabled = !!p(Ka, {
            optional: !0
        });
        currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
        constructor() {
            this.resetConfig(this.config),
            this.navigationTransitions.setupNavigations(this).subscribe({
                error: n => {}
            }),
            this.subscribeToNavigationEvents()
        }
        eventsSubscription = new ee;
        subscribeToNavigationEvents() {
            let n = this.navigationTransitions.events.subscribe(r => {
                try {
                    let o = this.navigationTransitions.currentTransition
                      , i = rt(this.navigationTransitions.currentNavigation);
                    if (o !== null && i !== null) {
                        if (this.stateManager.handleRouterEvent(r, i),
                        r instanceof $e && r.code !== ve.Redirect && r.code !== ve.SupersededByNewNavigation)
                            this.navigated = !0;
                        else if (r instanceof Pt)
                            this.navigated = !0,
                            this.injectorCleanup?.(this.routeReuseStrategy, this.routerState, this.config);
                        else if (r instanceof xr) {
                            let s = r.navigationBehaviorOptions
                              , a = this.urlHandlingStrategy.merge(r.url, o.currentRawUrl)
                              , c = y({
                                scroll: o.extras.scroll,
                                browserUrl: o.extras.browserUrl,
                                info: o.extras.info,
                                skipLocationChange: o.extras.skipLocationChange,
                                replaceUrl: o.extras.replaceUrl || this.urlUpdateStrategy === "eager" || k_(o.source)
                            }, s);
                            this.scheduleNavigation(a, Zo, null, c, {
                                resolve: o.resolve,
                                reject: o.reject,
                                promise: o.promise
                            })
                        }
                    }
                    FS(r) && this._events.next(r)
                } catch (o) {
                    this.navigationTransitions.transitionAbortWithErrorSubject.next(o)
                }
            }
            );
            this.eventsSubscription.add(n)
        }
        resetRootComponentType(n) {
            this.routerState.root.component = n,
            this.navigationTransitions.rootComponentType = n
        }
        initialNavigation() {
            this.setUpLocationChangeListener(),
            this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), Zo, this.stateManager.restoredState(), {
                replaceUrl: !0
            })
        }
        setUpLocationChangeListener() {
            this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener( (n, r, o, i) => {
                this.navigateToSyncWithBrowser(n, o, r, i)
            }
            )
        }
        navigateToSyncWithBrowser(n, r, o, i) {
            let s = o?.navigationId ? o : null
              , a = o?.\u0275routerUrl ?? n;
            if (o?.\u0275routerUrl && (i = x(y({}, i), {
                browserUrl: n
            })),
            o) {
                let u = y({}, o);
                delete u.navigationId,
                delete u.\u0275routerPageId,
                delete u.\u0275routerUrl,
                Object.keys(u).length !== 0 && (i.state = u)
            }
            let c = this.parseUrl(a);
            this.scheduleNavigation(c, r, s, i).catch(u => {
                this.disposed || this.injector.get(xe)(u)
            }
            )
        }
        get url() {
            return this.serializeUrl(this.currentUrlTree)
        }
        getCurrentNavigation() {
            return rt(this.navigationTransitions.currentNavigation)
        }
        get lastSuccessfulNavigation() {
            return this.navigationTransitions.lastSuccessfulNavigation
        }
        resetConfig(n) {
            this.config = n.map(Zd),
            this.navigated = !1
        }
        ngOnDestroy() {
            this.dispose()
        }
        dispose() {
            this._events.unsubscribe(),
            this.navigationTransitions.complete(),
            this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),
            this.nonRouterCurrentEntryChangeSubscription = void 0,
            this.disposed = !0,
            this.eventsSubscription.unsubscribe()
        }
        createUrlTree(n, r={}) {
            let {relativeTo: o, queryParams: i, fragment: s, queryParamsHandling: a, preserveFragment: c} = r
              , u = c ? this.currentUrlTree.fragment : s
              , l = null;
            switch (a ?? this.options.defaultQueryParamsHandling) {
            case "merge":
                l = y(y({}, this.currentUrlTree.queryParams), i);
                break;
            case "preserve":
                l = this.currentUrlTree.queryParams;
                break;
            default:
                l = i || null
            }
            l !== null && (l = this.removeEmptyProps(l));
            let d;
            try {
                let h = o ? o.snapshot : this.routerState.snapshot.root;
                d = jy(h)
            } catch {
                (typeof n[0] != "string" || n[0][0] !== "/") && (n = []),
                d = this.currentUrlTree.root
            }
            return Uy(d, n, l, u ?? null, this.urlSerializer)
        }
        navigateByUrl(n, r={
            skipLocationChange: !1
        }) {
            let o = Rr(n) ? n : this.parseUrl(n)
              , i = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
            return this.scheduleNavigation(i, Zo, null, r)
        }
        navigate(n, r={
            skipLocationChange: !1
        }) {
            return L_(n),
            this.navigateByUrl(this.createUrlTree(n, r), r)
        }
        serializeUrl(n) {
            return this.urlSerializer.serialize(n)
        }
        parseUrl(n) {
            try {
                return this.urlSerializer.parse(n)
            } catch {
                return this.console.warn($t(4018, !1)),
                this.urlSerializer.parse("/")
            }
        }
        isActive(n, r) {
            let o;
            if (r === !0 ? o = y({}, Ny) : r === !1 ? o = y({}, Ad) : o = y(y({}, Ad), r),
            Rr(n))
                return vy(this.currentUrlTree, n, o);
            let i = this.parseUrl(n);
            return vy(this.currentUrlTree, i, o)
        }
        removeEmptyProps(n) {
            return Object.entries(n).reduce( (r, [o,i]) => (i != null && (r[o] = i),
            r), {})
        }
        scheduleNavigation(n, r, o, i, s) {
            if (this.disposed)
                return Promise.resolve(!1);
            let a, c, u;
            s ? (a = s.resolve,
            c = s.reject,
            u = s.promise) : u = new Promise( (d, h) => {
                a = d,
                c = h
            }
            );
            let l = this.pendingTasks.add();
            return Kd(this, () => {
                queueMicrotask( () => this.pendingTasks.remove(l))
            }
            ),
            this.navigationTransitions.handleNavigationRequest({
                source: r,
                restoredState: o,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                rawUrl: n,
                extras: i,
                resolve: a,
                reject: c,
                promise: u,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState
            }),
            u.catch(Promise.reject.bind(Promise))
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function L_(e) {
    for (let t = 0; t < e.length; t++)
        if (e[t] == null)
            throw new m(4008,!1)
}
var B_ = new D("");
function V_(e, ...t) {
    return wt([{
        provide: ci,
        multi: !0,
        useValue: e
    }, [], {
        provide: on,
        useFactory: H_
    }, {
        provide: na,
        multi: !0,
        useFactory: $_
    }, t.map(n => n.\u0275providers)])
}
function H_() {
    return p(ec).routerState.root
}
function $_() {
    let e = p(Se);
    return t => {
        let n = e.get(Pn);
        if (t !== n.components[0])
            return;
        let r = e.get(ec)
          , o = e.get(z_);
        e.get(G_) === 1 && r.initialNavigation(),
        e.get(W_, null, {
            optional: !0
        })?.setUpPreloading(),
        e.get(B_, null, {
            optional: !0
        })?.init(),
        r.resetRootComponentType(n.componentTypes[0]),
        o.closed || (o.next(),
        o.complete(),
        o.unsubscribe())
    }
}
var z_ = new D("",{
    factory: () => new ae
})
  , G_ = new D("",{
    factory: () => 1
});
var W_ = new D("");
var Z_ = typeof window < "u" && ["localhost", "127.0.0.1"].includes(window.location.hostname)
  , Y_ = Z_ ? "http://localhost:3022" : "https://api.betzion.site"
  , pv = `${Y_}/api`;
var mv = class e {
    constructor(t) {
        this.http = t;
        this.hasToken() && this.loadCurrentUser().subscribe()
    }
    http;
    get baseUrl() {
        return pv
    }
    get apiUrl() {
        return `${this.baseUrl}/auth`
    }
    tokenKey = "aviator_jwt_token";
    currentUser$ = new Q(null);
    isAuthenticated$ = new Q(this.hasToken());
    userBalance$ = new Q(0);
    getToken() {
        return localStorage.getItem(this.tokenKey)
    }
    hasToken() {
        return !!this.getToken()
    }
    isAdmin() {
        let t = this.currentUser$.getValue()?.role;
        return t === "admin" || t === "superadmin"
    }
    isSuperAdmin() {
        return this.currentUser$.getValue()?.role === "superadmin"
    }
    setSession(t) {
        localStorage.setItem(this.tokenKey, t.token),
        this.currentUser$.next(t.user),
        this.userBalance$.next(t.user.balance),
        this.isAuthenticated$.next(!0)
    }
    extractErrorMessage(t) {
        if (t && t.error && typeof t.error == "object") {
            if (t.error.message)
                return t.error.message;
            if (t.error.error)
                return t.error.error
        }
        return t && typeof t.error == "string" ? t.error : t && t.message ? t.message : "Connection to server failed. Please ensure backend is running."
    }
    register(t) {
        let n = t.phone_number || t.username;
        return this.http.post(`${this.apiUrl}/register`, {
            username: t.username,
            phone: n,
            password: t.password
        }).pipe(re(r => {
            if (r && r.token && r.user) {
                let o = {
                    token: r.token,
                    user: {
                        id: r.user.id || Date.now(),
                        username: r.user.username || n,
                        phone_number: r.user.phone || n,
                        balance: Number(r.user.balance) || 0,
                        role: (r.user.role || "user").toLowerCase(),
                        depositCount: Number(r.user.depositCount) || 0
                    }
                };
                return this.setSession(o),
                T(o)
            }
            return this.login({
                username: n,
                password: t.password
            })
        }
        ), J(r => fe( () => this.extractErrorMessage(r))))
    }
    login(t) {
        return this.http.post(`${this.apiUrl}/login`, {
            login: t.username,
            password: t.password
        }).pipe(Br(1e4), re(n => this.loadWallet(n.token).pipe(Br(1e4), k(r => ({
            token: n.token,
            user: this.toUser(n.user, r)
        })))), te(n => this.setSession(n)), J(n => fe( () => this.extractErrorMessage(n))))
    }
    resetPassword(t) {
        return this.http.post(`${this.apiUrl}/reset-password`, {
            phone: t.phone_number,
            password: t.new_password
        }).pipe(J(n => fe( () => this.extractErrorMessage(n))))
    }
    loadCurrentUser() {
        let t = this.getToken();
        if (!t)
            return T(null);
        let n = new He({
            Authorization: `Bearer ${t}`
        });
        return this.http.get(`${this.apiUrl}/me`, {
            headers: n
        }).pipe(re(r => this.loadWallet(t).pipe(k(o => ({
            user: this.toUser(r, o)
        })))), te(r => {
            this.currentUser$.next(r.user),
            this.userBalance$.next(r.user.balance),
            this.isAuthenticated$.next(!0)
        }
        ), J(r => ((r?.status === 401 || r?.status === 403) && this.logout(),
        T(null))))
    }
    initiateMpesaSTKPush(t, n) {
        let r = this.getAuthHeaders();
        return this.http.post(`${this.baseUrl}/payments/stk-push`, {
            amount: t,
            phone: n
        }, {
            headers: r
        }).pipe(Br(15e3), J(o => fe( () => this.extractErrorMessage(o))))
    }
    getPaymentConfig() {
        return this.http.get(`${this.baseUrl}/payments/config`).pipe(k(t => {
            let n = Number(t?.minDepositAmount)
              , r = Number(t?.maxDepositAmount);
            return {
                minDepositAmount: Number.isFinite(n) && n >= 1 ? n : 999,
                maxDepositAmount: Number.isFinite(r) && r >= 1 ? r : 1999
            }
        }
        ), J( () => T({
            minDepositAmount: 999,
            maxDepositAmount: 1999
        })))
    }
    getDepositHistory() {
        let t = this.getAuthHeaders();
        return this.http.get(`${this.baseUrl}/payments/transactions`, {
            headers: t
        }).pipe(k(n => ({
            deposits: (n.transactions || []).filter(r => r.type === "deposit").map(r => ({
                id: Number(String(r.id).replace(/\D/g, "")) || Date.now(),
                amount: r.amount,
                status: r.status,
                mpesa_receipt_number: r.mpesa_receipt_number || void 0,
                payment_method: "M-PESA",
                created_at: r.created_at
            }))
        })), J(n => fe( () => this.extractErrorMessage(n))))
    }
    getTransactionHistory() {
        let t = this.getAuthHeaders();
        return this.http.get(`${this.baseUrl}/payments/transactions`, {
            headers: t
        }).pipe(J(n => fe( () => this.extractErrorMessage(n))))
    }
    checkMpesaStatus(t) {
        let n = this.getAuthHeaders();
        return this.http.get(`${this.baseUrl}/payments/stk-status/${t}`, {
            headers: n
        }).pipe(J(r => fe( () => this.extractErrorMessage(r))))
    }
    cancelPendingMpesa(t) {
        return T({
            message: "Cancelled"
        })
    }
    deposit(t) {
        return this.initiateMpesaSTKPush(t).pipe(k(n => ({
            message: n.message,
            balance: this.userBalance$.getValue()
        })))
    }
    withdraw(t, n) {
        let r = this.getAuthHeaders();
        return this.http.post(`${this.baseUrl}/payments/withdraw`, {
            amount: t,
            phone: n
        }, {
            headers: r
        }).pipe(te(o => {
            o.balance !== void 0 && this.updateBalance(o.balance)
        }
        ), J(o => fe( () => this.extractErrorMessage(o))))
    }
    getWithdrawalPopupSettings() {
        return this.http.get(`${this.baseUrl}/settings`, {
            headers: this.getAuthHeaders()
        }).pipe(J(t => fe( () => this.extractErrorMessage(t))))
    }
    claimWelcomeBonus() {
        let t = this.getAuthHeaders();
        return this.http.post(`${this.baseUrl}/bonus/claim`, {}, {
            headers: t
        }).pipe(te(n => {
            this.updateBalance(n.balance);
            let r = this.currentUser$.getValue();
            r && this.currentUser$.next(x(y({}, r), {
                bonus_claimed: n.bonusClaimed
            }))
        }
        ), J(n => fe( () => this.extractErrorMessage(n))))
    }
    updateBalance(t, n) {
        this.userBalance$.next(t);
        let r = this.currentUser$.getValue();
        r && this.currentUser$.next(y(x(y({}, r), {
            balance: t
        }), n === void 0 ? {} : {
            depositCount: n
        }))
    }
    logout() {
        localStorage.removeItem(this.tokenKey),
        this.currentUser$.next(null),
        this.userBalance$.next(0),
        this.isAuthenticated$.next(!1)
    }
    getAuthHeaders() {
        let t = this.getToken();
        return new He({
            Authorization: t ? `Bearer ${t}` : ""
        })
    }
    getWallet() {
        let t = this.getToken();
        return t ? this.loadWallet(t).pipe(k(n => ({
            balance: Number(n.balance) || 0,
            depositCount: Number(n.depositCount) || 0
        })), te(n => this.updateBalance(n.balance, n.depositCount)), J(n => fe( () => this.extractErrorMessage(n)))) : fe( () => "Please log in again.")
    }
    loadWallet(t) {
        return this.http.get(`${this.baseUrl}/wallet`, {
            headers: new He({
                Authorization: `Bearer ${t}`
            })
        })
    }
    toUser(t, n) {
        let r = String(t.role || "user").toLowerCase().replace("_", "")
          , o = r === "superadmin" ? "superadmin" : r === "admin" ? "admin" : "user";
        return x(y({}, t), {
            phone_number: t.phone_number || t.phone || void 0,
            balance: Number(n.balance) || 0,
            role: o
        })
    }
    static \u0275fac = function(n) {
        return new (n || e)(I(_a))
    }
    ;
    static \u0275prov = v({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    })
}
;
export {y as a, x as b, Q_ as c, ee as d, ae as e, Q as f, K as g, T as h, k as i, zv as j, J as k, Qn as l, m, Xi as n, v as o, Dn as p, D as q, p as r, yh as s, vh as t, xh as u, Oh as v, Je as w, we as x, RD as y, lr as z, xD as A, Vs as B, bo as C, vr as D, qE as E, ZE as F, YE as G, QE as H, dw as I, Sl as J, Og as K, me as L, Hl as M, Dr as N, Er as O, Wg as P, qg as Q, kn as R, Pn as S, Kg as T, Jg as U, js as V, ql as W, ra as X, Xg as Y, em as Z, vC as _, nm as $, CC as aa, om as ba, bC as ca, TC as da, SC as ea, im as fa, sm as ga, HC as ha, cm as ia, Zl as ja, um as ka, dm as la, WC as ma, fm as na, QC as oa, eb as pa, nb as qa, rb as ra, ob as sa, ib as ta, rt as ua, Jl as va, sa as wa, Fb as xa, At as ya, Cr as za, qm as Aa, lT as Ba, hT as Ca, pT as Da, yT as Ea, vT as Fa, wT as Ga, Qm as Ha, kT as Ia, _a as Ja, sS as Ka, cS as La, on as Ma, Wd as Na, ec as Oa, V_ as Pa, Y_ as Qa, pv as Ra, mv as Sa};
