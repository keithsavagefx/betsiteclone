import {Qa as fe, a as R, c as We, f as h, o as le} from "./chunk-G5P543E2.js";
var m = Object.create(null);
m.open = "0";
m.close = "1";
m.ping = "2";
m.pong = "3";
m.message = "4";
m.upgrade = "5";
m.noop = "6";
var B = Object.create(null);
Object.keys(m).forEach(s => {
    B[m[s]] = s
}
);
var O = {
    type: "error",
    data: "parser error"
};
var me = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , ge = typeof ArrayBuffer == "function"
  , ye = s => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer
  , P = ({type: s, data: t}, e, r) => me && t instanceof Blob ? e ? r(t) : pe(t, r) : ge && (t instanceof ArrayBuffer || ye(t)) ? e ? r(t) : pe(new Blob([t]), r) : r(m[s] + (t || ""))
  , pe = (s, t) => {
    let e = new FileReader;
    return e.onload = function() {
        let r = e.result.split(",")[1];
        t("b" + (r || ""))
    }
    ,
    e.readAsDataURL(s)
}
;
function de(s) {
    return s instanceof Uint8Array ? s : s instanceof ArrayBuffer ? new Uint8Array(s) : new Uint8Array(s.buffer,s.byteOffset,s.byteLength)
}
var j;
function be(s, t) {
    if (me && s.data instanceof Blob)
        return s.data.arrayBuffer().then(de).then(t);
    if (ge && (s.data instanceof ArrayBuffer || ye(s.data)))
        return t(de(s.data));
    P(s, !1, e => {
        j || (j = new TextEncoder),
        t(j.encode(e))
    }
    )
}
var _e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , I = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let s = 0; s < _e.length; s++)
    I[_e.charCodeAt(s)] = s;
var we = s => {
    let t = s.length * .75, e = s.length, r, n = 0, i, o, c, u;
    s[s.length - 1] === "=" && (t--,
    s[s.length - 2] === "=" && t--);
    let g = new ArrayBuffer(t)
      , d = new Uint8Array(g);
    for (r = 0; r < e; r += 4)
        i = I[s.charCodeAt(r)],
        o = I[s.charCodeAt(r + 1)],
        c = I[s.charCodeAt(r + 2)],
        u = I[s.charCodeAt(r + 3)],
        d[n++] = i << 2 | o >> 4,
        d[n++] = (o & 15) << 4 | c >> 2,
        d[n++] = (c & 3) << 6 | u & 63;
    return g
}
;
var Ke = typeof ArrayBuffer == "function"
  , L = (s, t) => {
    if (typeof s != "string")
        return {
            type: "message",
            data: ke(s, t)
        };
    let e = s.charAt(0);
    return e === "b" ? {
        type: "message",
        data: Ye(s.substring(1), t)
    } : B[e] ? s.length > 1 ? {
        type: B[e],
        data: s.substring(1)
    } : {
        type: B[e]
    } : O
}
  , Ye = (s, t) => {
    if (Ke) {
        let e = we(s);
        return ke(e, t)
    } else
        return {
            base64: !0,
            data: s
        }
}
  , ke = (s, t) => t === "blob" ? s instanceof Blob ? s : new Blob([s]) : s instanceof ArrayBuffer ? s : s.buffer;
var xe = ""
  , ve = (s, t) => {
    let e = s.length
      , r = new Array(e)
      , n = 0;
    s.forEach( (i, o) => {
        P(i, !1, c => {
            r[o] = c,
            ++n === e && t(r.join(xe))
        }
        )
    }
    )
}
  , Ee = (s, t) => {
    let e = s.split(xe)
      , r = [];
    for (let n = 0; n < e.length; n++) {
        let i = L(e[n], t);
        if (r.push(i),
        i.type === "error")
            break
    }
    return r
}
;
function Ae() {
    return new TransformStream({
        transform(s, t) {
            be(s, e => {
                let r = e.length, n;
                if (r < 126)
                    n = new Uint8Array(1),
                    new DataView(n.buffer).setUint8(0, r);
                else if (r < 65536) {
                    n = new Uint8Array(3);
                    let i = new DataView(n.buffer);
                    i.setUint8(0, 126),
                    i.setUint16(1, r)
                } else {
                    n = new Uint8Array(9);
                    let i = new DataView(n.buffer);
                    i.setUint8(0, 127),
                    i.setBigUint64(1, BigInt(r))
                }
                s.data && typeof s.data != "string" && (n[0] |= 128),
                t.enqueue(n),
                t.enqueue(e)
            }
            )
        }
    })
}
var Z;
function M(s) {
    return s.reduce( (t, e) => t + e.length, 0)
}
function V(s, t) {
    if (s[0].length === t)
        return s.shift();
    let e = new Uint8Array(t)
      , r = 0;
    for (let n = 0; n < t; n++)
        e[n] = s[0][r++],
        r === s[0].length && (s.shift(),
        r = 0);
    return s.length && r < s[0].length && (s[0] = s[0].slice(r)),
    e
}
function Se(s, t) {
    Z || (Z = new TextDecoder);
    let e = []
      , r = 0
      , n = -1
      , i = !1;
    return new TransformStream({
        transform(o, c) {
            for (e.push(o); ; ) {
                if (r === 0) {
                    if (M(e) < 1)
                        break;
                    let u = V(e, 1);
                    i = (u[0] & 128) === 128,
                    n = u[0] & 127,
                    n < 126 ? r = 3 : n === 126 ? r = 1 : r = 2
                } else if (r === 1) {
                    if (M(e) < 2)
                        break;
                    let u = V(e, 2);
                    n = new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),
                    r = 3
                } else if (r === 2) {
                    if (M(e) < 8)
                        break;
                    let u = V(e, 8)
                      , g = new DataView(u.buffer,u.byteOffset,u.length)
                      , d = g.getUint32(0);
                    if (d > Math.pow(2, 21) - 1) {
                        c.enqueue(O);
                        break
                    }
                    n = d * Math.pow(2, 32) + g.getUint32(4),
                    r = 3
                } else {
                    if (M(e) < n)
                        break;
                    let u = V(e, n);
                    c.enqueue(L(i ? u : Z.decode(u), t)),
                    r = 0
                }
                if (n === 0 || n > s) {
                    c.enqueue(O);
                    break
                }
            }
        }
    })
}
var ee = 4;
function l(s) {
    if (s)
        return Je(s)
}
function Je(s) {
    for (var t in l.prototype)
        s[t] = l.prototype[t];
    return s
}
l.prototype.on = l.prototype.addEventListener = function(s, t) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + s] = this._callbacks["$" + s] || []).push(t),
    this
}
;
l.prototype.once = function(s, t) {
    function e() {
        this.off(s, e),
        t.apply(this, arguments)
    }
    return e.fn = t,
    this.on(s, e),
    this
}
;
l.prototype.off = l.prototype.removeListener = l.prototype.removeAllListeners = l.prototype.removeEventListener = function(s, t) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var e = this._callbacks["$" + s];
    if (!e)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + s],
        this;
    for (var r, n = 0; n < e.length; n++)
        if (r = e[n],
        r === t || r.fn === t) {
            e.splice(n, 1);
            break
        }
    return e.length === 0 && delete this._callbacks["$" + s],
    this
}
;
l.prototype.emit = function(s) {
    this._callbacks = this._callbacks || {};
    for (var t = new Array(arguments.length - 1), e = this._callbacks["$" + s], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
    if (e) {
        e = e.slice(0);
        for (var r = 0, n = e.length; r < n; ++r)
            e[r].apply(this, t)
    }
    return this
}
;
l.prototype.emitReserved = l.prototype.emit;
l.prototype.listeners = function(s) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + s] || []
}
;
l.prototype.hasListeners = function(s) {
    return !!this.listeners(s).length
}
;
var y = typeof Promise == "function" && typeof Promise.resolve == "function" ? t => Promise.resolve().then(t) : (t, e) => e(t, 0)
  , f = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , Te = "arraybuffer";
function H(s, ...t) {
    return t.reduce( (e, r) => (s.hasOwnProperty(r) && (e[r] = s[r]),
    e), {})
}
var Xe = f.setTimeout
  , ze = f.clearTimeout;
function b(s, t) {
    t.useNativeTimers ? (s.setTimeoutFn = Xe.bind(f),
    s.clearTimeoutFn = ze.bind(f)) : (s.setTimeoutFn = f.setTimeout.bind(f),
    s.clearTimeoutFn = f.clearTimeout.bind(f))
}
var Ge = 1.33;
function Ce(s) {
    return typeof s == "string" ? Qe(s) : Math.ceil((s.byteLength || s.size) * Ge)
}
function Qe(s) {
    let t = 0
      , e = 0;
    for (let r = 0, n = s.length; r < n; r++)
        t = s.charCodeAt(r),
        t < 128 ? e += 1 : t < 2048 ? e += 2 : t < 55296 || t >= 57344 ? e += 3 : (r++,
        e += 4);
    return e
}
function W() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function Ne(s) {
    let t = "";
    for (let e in s)
        s.hasOwnProperty(e) && (t.length && (t += "&"),
        t += encodeURIComponent(e) + "=" + encodeURIComponent(s[e]));
    return t
}
function Re(s) {
    let t = {}
      , e = s.split("&");
    for (let r = 0, n = e.length; r < n; r++) {
        let i = e[r].split("=");
        t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
    }
    return t
}
var K = class extends Error {
    constructor(t, e, r) {
        super(t),
        this.description = e,
        this.context = r,
        this.type = "TransportError"
    }
}
  , _ = class extends l {
    constructor(t) {
        super(),
        this.writable = !1,
        b(this, t),
        this.opts = t,
        this.query = t.query,
        this.socket = t.socket,
        this.supportsBinary = !t.forceBase64
    }
    onError(t, e, r) {
        return super.emitReserved("error", new K(t,e,r)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(t) {
        this.readyState === "open" && this.write(t)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(t) {
        let e = L(t, this.socket.binaryType);
        this.onPacket(e)
    }
    onPacket(t) {
        super.emitReserved("packet", t)
    }
    onClose(t) {
        this.readyState = "closed",
        super.emitReserved("close", t)
    }
    pause(t) {}
    createUri(t, e={}) {
        return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(e)
    }
    _hostname() {
        let t = this.opts.hostname;
        return t.indexOf(":") === -1 ? t : "[" + t + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(t) {
        let e = Ne(t);
        return e.length ? "?" + e : ""
    }
}
;
var $ = class extends _ {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(t) {
        this.readyState = "pausing";
        let e = () => {
            this.readyState = "paused",
            t()
        }
        ;
        if (this._polling || !this.writable) {
            let r = 0;
            this._polling && (r++,
            this.once("pollComplete", function() {
                --r || e()
            })),
            this.writable || (r++,
            this.once("drain", function() {
                --r || e()
            }))
        } else
            e()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(t) {
        let e = r => {
            if (this.readyState === "opening" && r.type === "open" && this.onOpen(),
            r.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(r)
        }
        ;
        Ee(t, this.socket.binaryType).forEach(e),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        let t = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? t() : this.once("open", t)
    }
    write(t) {
        this.writable = !1,
        ve(t, e => {
            this.doWrite(e, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        let t = this.opts.secure ? "https" : "http"
          , e = this.query || {};
        return this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = W()),
        !this.supportsBinary && !e.sid && (e.b64 = 1),
        this.createUri(t, e)
    }
}
;
var Be = !1;
try {
    Be = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {}
var Oe = Be;
function je() {}
var te = class extends $ {
    constructor(t) {
        if (super(t),
        typeof location < "u") {
            let e = location.protocol === "https:"
              , r = location.port;
            r || (r = e ? "443" : "80"),
            this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port
        }
    }
    doWrite(t, e) {
        let r = this.request({
            method: "POST",
            data: t
        });
        r.on("success", e),
        r.on("error", (n, i) => {
            this.onError("xhr post error", n, i)
        }
        )
    }
    doPoll() {
        let t = this.request();
        t.on("data", this.onData.bind(this)),
        t.on("error", (e, r) => {
            this.onError("xhr poll error", e, r)
        }
        ),
        this.pollXhr = t
    }
}
  , Y = ( () => {
    class s extends l {
        constructor(e, r, n) {
            super(),
            this.createRequest = e,
            b(this, n),
            this._opts = n,
            this._method = n.method || "GET",
            this._uri = r,
            this._data = n.data !== void 0 ? n.data : null,
            this._create()
        }
        _create() {
            var e;
            let r = H(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            r.xdomain = !!this._opts.xd;
            let n = this._xhr = this.createRequest(r);
            try {
                n.open(this._method, this._uri, !0);
                try {
                    if (this._opts.extraHeaders) {
                        n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                        for (let i in this._opts.extraHeaders)
                            this._opts.extraHeaders.hasOwnProperty(i) && n.setRequestHeader(i, this._opts.extraHeaders[i])
                    }
                } catch {}
                if (this._method === "POST")
                    try {
                        n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } catch {}
                try {
                    n.setRequestHeader("Accept", "*/*")
                } catch {}
                (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(n),
                "withCredentials" in n && (n.withCredentials = this._opts.withCredentials),
                this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout),
                n.onreadystatechange = () => {
                    var i;
                    n.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(n.getResponseHeader("set-cookie"))),
                    n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                        this._onError(typeof n.status == "number" ? n.status : 0)
                    }
                    , 0))
                }
                ,
                n.send(this._data)
            } catch (i) {
                this.setTimeoutFn( () => {
                    this._onError(i)
                }
                , 0);
                return
            }
            typeof document < "u" && (this._index = s.requestsCount++,
            s.requests[this._index] = this)
        }
        _onError(e) {
            this.emitReserved("error", e, this._xhr),
            this._cleanup(!0)
        }
        _cleanup(e) {
            if (!(typeof this._xhr > "u" || this._xhr === null)) {
                if (this._xhr.onreadystatechange = je,
                e)
                    try {
                        this._xhr.abort()
                    } catch {}
                typeof document < "u" && delete s.requests[this._index],
                this._xhr = null
            }
        }
        _onLoad() {
            let e = this._xhr.responseText;
            e !== null && (this.emitReserved("data", e),
            this.emitReserved("success"),
            this._cleanup())
        }
        abort() {
            this._cleanup()
        }
    }
    return s.requestsCount = 0,
    s.requests = {},
    s
}
)();
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", Pe);
    else if (typeof addEventListener == "function") {
        let s = "onpagehide" in f ? "pagehide" : "unload";
        addEventListener(s, Pe, !1)
    }
}
function Pe() {
    for (let s in Y.requests)
        Y.requests.hasOwnProperty(s) && Y.requests[s].abort()
}
var Ze = (function() {
    let s = Ie({
        xdomain: !1
    });
    return s && s.responseType !== null
}
)()
  , k = class extends te {
    constructor(t) {
        super(t);
        let e = t && t.forceBase64;
        this.supportsBinary = Ze && !e
    }
    request(t={}) {
        return Object.assign(t, {
            xd: this.xd
        }, this.opts),
        new Y(Ie,this.uri(),t)
    }
}
;
function Ie(s) {
    let t = s.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || Oe))
            return new XMLHttpRequest
    } catch {}
    if (!t)
        try {
            return new f[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
var Le = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative"
  , se = class extends _ {
    get name() {
        return "websocket"
    }
    doOpen() {
        let t = this.uri()
          , e = this.opts.protocols
          , r = Le ? {} : H(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(t, e, r)
        } catch (n) {
            return this.emitReserved("error", n)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = t => this.onClose({
            description: "websocket connection closed",
            context: t
        }),
        this.ws.onmessage = t => this.onData(t.data),
        this.ws.onerror = t => this.onError("websocket error", t)
    }
    write(t) {
        this.writable = !1;
        for (let e = 0; e < t.length; e++) {
            let r = t[e]
              , n = e === t.length - 1;
            P(r, this.supportsBinary, i => {
                try {
                    this.doWrite(r, i)
                } catch {}
                n && y( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        let t = this.opts.secure ? "wss" : "ws"
          , e = this.query || {};
        return this.opts.timestampRequests && (e[this.opts.timestampParam] = W()),
        this.supportsBinary || (e.b64 = 1),
        this.createUri(t, e)
    }
}
  , re = f.WebSocket || f.MozWebSocket
  , x = class extends se {
    createSocket(t, e, r) {
        return Le ? new re(t,e,r) : e ? new re(t,e) : new re(t)
    }
    doWrite(t, e) {
        this.ws.send(e)
    }
}
;
var E = class extends _ {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (t) {
            return this.emitReserved("error", t)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(t => {
            this.onError("webtransport error", t)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(t => {
                let e = Se(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , r = t.readable.pipeThrough(e).getReader()
                  , n = Ae();
                n.readable.pipeTo(t.writable),
                this._writer = n.writable.getWriter();
                let i = () => {
                    r.read().then( ({done: c, value: u}) => {
                        c || (this.onPacket(u),
                        i())
                    }
                    ).catch(c => {}
                    )
                }
                ;
                i();
                let o = {
                    type: "open"
                };
                this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(o).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(t) {
        this.writable = !1;
        for (let e = 0; e < t.length; e++) {
            let r = t[e]
              , n = e === t.length - 1;
            this._writer.write(r).then( () => {
                n && y( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var t;
        (t = this._transport) === null || t === void 0 || t.close()
    }
}
;
var ne = {
    websocket: x,
    webtransport: E,
    polling: k
};
var et = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , tt = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function A(s) {
    if (s.length > 8e3)
        throw "URI too long";
    let t = s
      , e = s.indexOf("[")
      , r = s.indexOf("]");
    e != -1 && r != -1 && (s = s.substring(0, e) + s.substring(e, r).replace(/:/g, ";") + s.substring(r, s.length));
    let n = et.exec(s || "")
      , i = {}
      , o = 14;
    for (; o--; )
        i[tt[o]] = n[o] || "";
    return e != -1 && r != -1 && (i.source = t,
    i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"),
    i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    i.ipv6uri = !0),
    i.pathNames = rt(i, i.path),
    i.queryKey = st(i, i.query),
    i
}
function rt(s, t) {
    let e = /\/{2,9}/g
      , r = t.replace(e, "/").split("/");
    return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
}
function st(s, t) {
    let e = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, n, i) {
        n && (e[n] = i)
    }),
    e
}
var ie = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , J = [];
ie && addEventListener("offline", () => {
    J.forEach(s => s())
}
, !1);
var X = ( () => {
    class s extends l {
        constructor(e, r) {
            if (super(),
            this.binaryType = Te,
            this.writeBuffer = [],
            this._prevBufferLen = 0,
            this._pingInterval = -1,
            this._pingTimeout = -1,
            this._maxPayload = -1,
            this._pingTimeoutTime = 1 / 0,
            e && typeof e == "object" && (r = e,
            e = null),
            e) {
                let n = A(e);
                r.hostname = n.host,
                r.secure = n.protocol === "https" || n.protocol === "wss",
                r.port = n.port,
                n.query && (r.query = n.query)
            } else
                r.host && (r.hostname = A(r.host).host);
            b(this, r),
            this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:",
            r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
            this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"),
            this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
            this.transports = [],
            this._transportsByName = {},
            r.transports.forEach(n => {
                let i = n.prototype.name;
                this.transports.push(i),
                this._transportsByName[i] = n
            }
            ),
            this.opts = Object.assign({
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: !1
            }, r),
            this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
            typeof this.opts.query == "string" && (this.opts.query = Re(this.opts.query)),
            ie && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
                this.transport && (this.transport.removeAllListeners(),
                this.transport.close())
            }
            ,
            addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
            this.hostname !== "localhost" && (this._offlineEventListener = () => {
                this._onClose("transport close", {
                    description: "network connection lost"
                })
            }
            ,
            J.push(this._offlineEventListener))),
            this.opts.withCredentials && (this._cookieJar = void 0),
            this._open()
        }
        createTransport(e) {
            let r = Object.assign({}, this.opts.query);
            r.EIO = ee,
            r.transport = e,
            this.id && (r.sid = this.id);
            let n = Object.assign({}, this.opts, {
                query: r,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port
            }, this.opts.transportOptions[e]);
            return new this._transportsByName[e](n)
        }
        _open() {
            if (this.transports.length === 0) {
                this.setTimeoutFn( () => {
                    this.emitReserved("error", "No transports available")
                }
                , 0);
                return
            }
            let e = this.opts.rememberUpgrade && s.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
            this.readyState = "opening";
            let r = this.createTransport(e);
            r.open(),
            this.setTransport(r)
        }
        setTransport(e) {
            this.transport && this.transport.removeAllListeners(),
            this.transport = e,
            e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
        }
        onOpen() {
            this.readyState = "open",
            s.priorWebsocketSuccess = this.transport.name === "websocket",
            this.emitReserved("open"),
            this.flush()
        }
        _onPacket(e) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
                switch (this.emitReserved("packet", e),
                this.emitReserved("heartbeat"),
                e.type) {
                case "open":
                    this.onHandshake(JSON.parse(e.data));
                    break;
                case "ping":
                    this._sendPacket("pong"),
                    this.emitReserved("ping"),
                    this.emitReserved("pong"),
                    this._resetPingTimeout();
                    break;
                case "error":
                    let r = new Error("server error");
                    r.code = e.data,
                    this._onError(r);
                    break;
                case "message":
                    this.emitReserved("data", e.data),
                    this.emitReserved("message", e.data);
                    break
                }
        }
        onHandshake(e) {
            this.emitReserved("handshake", e),
            this.id = e.sid,
            this.transport.query.sid = e.sid,
            this._pingInterval = e.pingInterval,
            this._pingTimeout = e.pingTimeout,
            this._maxPayload = e.maxPayload,
            this.onOpen(),
            this.readyState !== "closed" && this._resetPingTimeout()
        }
        _resetPingTimeout() {
            this.clearTimeoutFn(this._pingTimeoutTimer);
            let e = this._pingInterval + this._pingTimeout;
            this._pingTimeoutTime = Date.now() + e,
            this._pingTimeoutTimer = this.setTimeoutFn( () => {
                this._onClose("ping timeout")
            }
            , e),
            this.opts.autoUnref && this._pingTimeoutTimer.unref()
        }
        _onDrain() {
            this.writeBuffer.splice(0, this._prevBufferLen),
            this._prevBufferLen = 0,
            this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
        }
        flush() {
            if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                let e = this._getWritablePackets();
                this.transport.send(e),
                this._prevBufferLen = e.length,
                this.emitReserved("flush")
            }
        }
        _getWritablePackets() {
            if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
                return this.writeBuffer;
            let r = 1;
            for (let n = 0; n < this.writeBuffer.length; n++) {
                let i = this.writeBuffer[n].data;
                if (i && (r += Ce(i)),
                n > 0 && r > this._maxPayload)
                    return this.writeBuffer.slice(0, n);
                r += 2
            }
            return this.writeBuffer
        }
        _hasPingExpired() {
            if (!this._pingTimeoutTime)
                return !0;
            let e = Date.now() > this._pingTimeoutTime;
            return e && (this._pingTimeoutTime = 0,
            y( () => {
                this._onClose("ping timeout")
            }
            , this.setTimeoutFn)),
            e
        }
        write(e, r, n) {
            return this._sendPacket("message", e, r, n),
            this
        }
        send(e, r, n) {
            return this._sendPacket("message", e, r, n),
            this
        }
        _sendPacket(e, r, n, i) {
            if (typeof r == "function" && (i = r,
            r = void 0),
            typeof n == "function" && (i = n,
            n = null),
            this.readyState === "closing" || this.readyState === "closed")
                return;
            n = n || {},
            n.compress = n.compress !== !1;
            let o = {
                type: e,
                data: r,
                options: n
            };
            this.emitReserved("packetCreate", o),
            this.writeBuffer.push(o),
            i && this.once("flush", i),
            this.flush()
        }
        close() {
            let e = () => {
                this._onClose("forced close"),
                this.transport.close()
            }
              , r = () => {
                this.off("upgrade", r),
                this.off("upgradeError", r),
                e()
            }
              , n = () => {
                this.once("upgrade", r),
                this.once("upgradeError", r)
            }
            ;
            return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
            this.writeBuffer.length ? this.once("drain", () => {
                this.upgrading ? n() : e()
            }
            ) : this.upgrading ? n() : e()),
            this
        }
        _onError(e) {
            if (s.priorWebsocketSuccess = !1,
            this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
                return this.transports.shift(),
                this._open();
            this.emitReserved("error", e),
            this._onClose("transport error", e)
        }
        _onClose(e, r) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
                if (this.clearTimeoutFn(this._pingTimeoutTimer),
                this.transport.removeAllListeners("close"),
                this.transport.close(),
                this.transport.removeAllListeners(),
                ie && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
                this._offlineEventListener)) {
                    let n = J.indexOf(this._offlineEventListener);
                    n !== -1 && J.splice(n, 1)
                }
                this.readyState = "closed",
                this.id = null,
                this.emitReserved("close", e, r),
                this.writeBuffer = [],
                this._prevBufferLen = 0
            }
        }
    }
    return s.protocol = ee,
    s
}
)()
  , z = class extends X {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let t = 0; t < this._upgrades.length; t++)
                this._probe(this._upgrades[t])
    }
    _probe(t) {
        let e = this.createTransport(t)
          , r = !1;
        X.priorWebsocketSuccess = !1;
        let n = () => {
            r || (e.send([{
                type: "ping",
                data: "probe"
            }]),
            e.once("packet", w => {
                if (!r)
                    if (w.type === "pong" && w.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", e),
                        !e)
                            return;
                        X.priorWebsocketSuccess = e.name === "websocket",
                        this.transport.pause( () => {
                            r || this.readyState !== "closed" && (d(),
                            this.setTransport(e),
                            e.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", e),
                            e = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        let N = new Error("probe error");
                        N.transport = e.name,
                        this.emitReserved("upgradeError", N)
                    }
            }
            ))
        }
        ;
        function i() {
            r || (r = !0,
            d(),
            e.close(),
            e = null)
        }
        let o = w => {
            let N = new Error("probe error: " + w);
            N.transport = e.name,
            i(),
            this.emitReserved("upgradeError", N)
        }
        ;
        function c() {
            o("transport closed")
        }
        function u() {
            o("socket closed")
        }
        function g(w) {
            e && w.name !== e.name && i()
        }
        let d = () => {
            e.removeListener("open", n),
            e.removeListener("error", o),
            e.removeListener("close", c),
            this.off("close", u),
            this.off("upgrading", g)
        }
        ;
        e.once("open", n),
        e.once("error", o),
        e.once("close", c),
        this.once("close", u),
        this.once("upgrading", g),
        this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn( () => {
            r || e.open()
        }
        , 200) : e.open()
    }
    onHandshake(t) {
        this._upgrades = this._filterUpgrades(t.upgrades),
        super.onHandshake(t)
    }
    _filterUpgrades(t) {
        let e = [];
        for (let r = 0; r < t.length; r++)
            ~this.transports.indexOf(t[r]) && e.push(t[r]);
        return e
    }
}
  , S = class extends z {
    constructor(t, e={}) {
        let r = typeof t == "object"
          , n = r ? R({}, t) : R({}, e);
        (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map(i => ne[i]).filter(i => !!i)),
        super(r ? n : t, n)
    }
}
;
var wr = S.protocol;
function $e(s, t="", e) {
    let r = s;
    e = e || typeof location < "u" && location,
    s == null && (s = e.protocol + "//" + e.host),
    typeof s == "string" && (s.charAt(0) === "/" && (s.charAt(1) === "/" ? s = e.protocol + s : s = e.host + s),
    /^(https?|wss?):\/\//.test(s) || (typeof e < "u" ? s = e.protocol + "//" + s : s = "https://" + s),
    r = A(s)),
    r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    r.path = r.path || "/";
    let i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return r.id = r.protocol + "://" + i + ":" + r.port + t,
    r.href = r.protocol + "://" + i + (e && e.port === r.port ? "" : ":" + r.port),
    r
}
var ue = {};
We(ue, {
    Decoder: () => ce,
    Encoder: () => ae,
    PacketType: () => a,
    isPacketValid: () => ft,
    protocol: () => Me
});
var it = typeof ArrayBuffer == "function"
  , ot = s => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s.buffer instanceof ArrayBuffer
  , De = Object.prototype.toString
  , at = typeof Blob == "function" || typeof Blob < "u" && De.call(Blob) === "[object BlobConstructor]"
  , ct = typeof File == "function" || typeof File < "u" && De.call(File) === "[object FileConstructor]";
function q(s) {
    return it && (s instanceof ArrayBuffer || ot(s)) || at && s instanceof Blob || ct && s instanceof File
}
function D(s, t) {
    if (!s || typeof s != "object")
        return !1;
    if (Array.isArray(s)) {
        for (let e = 0, r = s.length; e < r; e++)
            if (D(s[e]))
                return !0;
        return !1
    }
    if (q(s))
        return !0;
    if (s.toJSON && typeof s.toJSON == "function" && arguments.length === 1)
        return D(s.toJSON(), !0);
    for (let e in s)
        if (Object.prototype.hasOwnProperty.call(s, e) && D(s[e]))
            return !0;
    return !1
}
function qe(s) {
    let t = []
      , e = s.data
      , r = s;
    return r.data = G(e, t),
    r.attachments = t.length,
    {
        packet: r,
        buffers: t
    }
}
function G(s, t, e) {
    if (!s)
        return s;
    if (q(s)) {
        let r = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(s),
        r
    } else if (Array.isArray(s)) {
        let r = new Array(s.length);
        for (let n = 0; n < s.length; n++)
            r[n] = G(s[n], t);
        return r
    } else if (typeof s == "object" && !(s instanceof Date)) {
        if (s.toJSON && typeof s.toJSON == "function" && !e)
            return G(s.toJSON(), t, !0);
        let r = {};
        for (let n in s)
            Object.prototype.hasOwnProperty.call(s, n) && (r[n] = G(s[n], t));
        return r
    }
    return s
}
function Ue(s, t) {
    return s.data = oe(s.data, t),
    delete s.attachments,
    s
}
function oe(s, t) {
    if (!s)
        return s;
    if (s && s._placeholder === !0) {
        if (typeof s.num == "number" && s.num >= 0 && s.num < t.length)
            return t[s.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(s))
        for (let e = 0; e < s.length; e++)
            s[e] = oe(s[e], t);
    else if (typeof s == "object")
        for (let e in s)
            Object.prototype.hasOwnProperty.call(s, e) && (s[e] = oe(s[e], t));
    return s
}
var Fe = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"]
  , Me = 5
  , a = (function(s) {
    return s[s.CONNECT = 0] = "CONNECT",
    s[s.DISCONNECT = 1] = "DISCONNECT",
    s[s.EVENT = 2] = "EVENT",
    s[s.ACK = 3] = "ACK",
    s[s.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    s[s.BINARY_EVENT = 5] = "BINARY_EVENT",
    s[s.BINARY_ACK = 6] = "BINARY_ACK",
    s
}
)(a || {})
  , ae = class {
    constructor(t) {
        this.replacer = t
    }
    encode(t) {
        return (t.type === a.EVENT || t.type === a.ACK) && D(t) ? this.encodeAsBinary({
            type: t.type === a.EVENT ? a.BINARY_EVENT : a.BINARY_ACK,
            nsp: t.nsp,
            data: t.data,
            id: t.id
        }) : [this.encodeAsString(t)]
    }
    encodeAsString(t) {
        let e = "" + t.type;
        return (t.type === a.BINARY_EVENT || t.type === a.BINARY_ACK) && (e += t.attachments + "-"),
        t.nsp && t.nsp !== "/" && (e += t.nsp + ","),
        t.id != null && (e += t.id),
        t.data != null && (e += JSON.stringify(t.data, this.replacer)),
        e
    }
    encodeAsBinary(t) {
        let e = qe(t)
          , r = this.encodeAsString(e.packet)
          , n = e.buffers;
        return n.unshift(r),
        n
    }
}
  , ce = class s extends l {
    constructor(t) {
        super(),
        this.opts = Object.assign({
            reviver: void 0,
            maxAttachments: 10
        }, typeof t == "function" ? {
            reviver: t
        } : t)
    }
    add(t) {
        let e;
        if (typeof t == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            e = this.decodeString(t);
            let r = e.type === a.BINARY_EVENT;
            r || e.type === a.BINARY_ACK ? (e.type = r ? a.EVENT : a.ACK,
            this.reconstructor = new he(e)) : super.emitReserved("decoded", e)
        } else if (q(t) || t.base64)
            if (this.reconstructor)
                e = this.reconstructor.takeBinaryData(t),
                e && (this.reconstructor = null,
                super.emitReserved("decoded", e));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + t)
    }
    decodeString(t) {
        let e = 0
          , r = {
            type: Number(t.charAt(0))
        };
        if (a[r.type] === void 0)
            throw new Error("unknown packet type " + r.type);
        if (r.type === a.BINARY_EVENT || r.type === a.BINARY_ACK) {
            let i = e + 1;
            for (; t.charAt(++e) !== "-" && e != t.length; )
                ;
            let o = t.substring(i, e);
            if (o != Number(o) || t.charAt(e) !== "-")
                throw new Error("Illegal attachments");
            let c = Number(o);
            if (!Ve(c) || c < 1)
                throw new Error("Illegal attachments");
            if (c > this.opts.maxAttachments)
                throw new Error("too many attachments");
            r.attachments = c
        }
        if (t.charAt(e + 1) === "/") {
            let i = e + 1;
            for (; ++e && !(t.charAt(e) === "," || e === t.length); )
                ;
            r.nsp = t.substring(i, e)
        } else
            r.nsp = "/";
        let n = t.charAt(e + 1);
        if (n !== "" && Number(n) == n) {
            let i = e + 1;
            for (; ++e; ) {
                let o = t.charAt(e);
                if (o == null || Number(o) != o) {
                    --e;
                    break
                }
                if (e === t.length)
                    break
            }
            r.id = Number(t.substring(i, e + 1))
        }
        if (t.charAt(++e)) {
            let i = this.tryParse(t.substr(e));
            if (s.isPayloadValid(r.type, i))
                r.data = i;
            else
                throw new Error("invalid payload")
        }
        return r
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.opts.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(t, e) {
        switch (t) {
        case a.CONNECT:
            return Q(e);
        case a.DISCONNECT:
            return e === void 0;
        case a.CONNECT_ERROR:
            return typeof e == "string" || Q(e);
        case a.EVENT:
        case a.BINARY_EVENT:
            return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && Fe.indexOf(e[0]) === -1);
        case a.ACK:
        case a.BINARY_ACK:
            return Array.isArray(e)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
  , he = class {
    constructor(t) {
        this.packet = t,
        this.buffers = [],
        this.reconPack = t
    }
    takeBinaryData(t) {
        if (this.buffers.push(t),
        this.buffers.length === this.reconPack.attachments) {
            let e = Ue(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            e
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
;
function ht(s) {
    return typeof s == "string"
}
var Ve = Number.isInteger || function(s) {
    return typeof s == "number" && isFinite(s) && Math.floor(s) === s
}
;
function ut(s) {
    return s === void 0 || Ve(s)
}
function Q(s) {
    return Object.prototype.toString.call(s) === "[object Object]"
}
function lt(s, t) {
    switch (s) {
    case a.CONNECT:
        return t === void 0 || Q(t);
    case a.DISCONNECT:
        return t === void 0;
    case a.EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && Fe.indexOf(t[0]) === -1);
    case a.ACK:
        return Array.isArray(t);
    case a.CONNECT_ERROR:
        return typeof t == "string" || Q(t);
    default:
        return !1
    }
}
function ft(s) {
    return ht(s.nsp) && ut(s.id) && lt(s.type, s.data)
}
function p(s, t, e) {
    return s.on(t, e),
    function() {
        s.off(t, e)
    }
}
var pt = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
})
  , T = class extends l {
    constructor(t, e, r) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = t,
        this.nsp = e,
        r && r.auth && (this.auth = r.auth),
        this._opts = Object.assign({}, r),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        let t = this.io;
        this.subs = [p(t, "open", this.onopen.bind(this)), p(t, "packet", this.onpacket.bind(this)), p(t, "error", this.onerror.bind(this)), p(t, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...t) {
        return t.unshift("message"),
        this.emit.apply(this, t),
        this
    }
    emit(t, ...e) {
        var r, n, i;
        if (pt.hasOwnProperty(t))
            throw new Error('"' + t.toString() + '" is a reserved event name');
        if (e.unshift(t),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(e),
            this;
        let o = {
            type: a.EVENT,
            data: e
        };
        if (o.options = {},
        o.options.compress = this.flags.compress !== !1,
        typeof e[e.length - 1] == "function") {
            let d = this.ids++
              , w = e.pop();
            this._registerAckCallback(d, w),
            o.id = d
        }
        let c = (n = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || n === void 0 ? void 0 : n.writable
          , u = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
        return this.flags.volatile && !c || (u ? (this.notifyOutgoingListeners(o),
        this.packet(o)) : this.sendBuffer.push(o)),
        this.flags = {},
        this
    }
    _registerAckCallback(t, e) {
        var r;
        let n = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
        if (n === void 0) {
            this.acks[t] = e;
            return
        }
        let i = this.io.setTimeoutFn( () => {
            delete this.acks[t];
            for (let c = 0; c < this.sendBuffer.length; c++)
                this.sendBuffer[c].id === t && this.sendBuffer.splice(c, 1);
            e.call(this, new Error("operation has timed out"))
        }
        , n)
          , o = (...c) => {
            this.io.clearTimeoutFn(i),
            e.apply(this, c)
        }
        ;
        o.withError = !0,
        this.acks[t] = o
    }
    emitWithAck(t, ...e) {
        return new Promise( (r, n) => {
            let i = (o, c) => o ? n(o) : r(c);
            i.withError = !0,
            e.push(i),
            this.emit(t, ...e)
        }
        )
    }
    _addToQueue(t) {
        let e;
        typeof t[t.length - 1] == "function" && (e = t.pop());
        let r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        t.push( (n, ...i) => (this._queue[0],
        n !== null ? r.tryCount > this._opts.retries && (this._queue.shift(),
        e && e(n)) : (this._queue.shift(),
        e && e(null, ...i)),
        r.pending = !1,
        this._drainQueue())),
        this._queue.push(r),
        this._drainQueue()
    }
    _drainQueue(t=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        let e = this._queue[0];
        e.pending && !t || (e.pending = !0,
        e.tryCount++,
        this.flags = e.flags,
        this.emit.apply(this, e.args))
    }
    packet(t) {
        t.nsp = this.nsp,
        this.io._packet(t)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(t => {
            this._sendConnectPacket(t)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(t) {
        this.packet({
            type: a.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, t) : t
        })
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t)
    }
    onclose(t, e) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", t, e),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(t => {
            if (!this.sendBuffer.some(r => String(r.id) === t)) {
                let r = this.acks[t];
                delete this.acks[t],
                r.withError && r.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(t) {
        if (t.nsp === this.nsp)
            switch (t.type) {
            case a.CONNECT:
                t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case a.EVENT:
            case a.BINARY_EVENT:
                this.onevent(t);
                break;
            case a.ACK:
            case a.BINARY_ACK:
                this.onack(t);
                break;
            case a.DISCONNECT:
                this.ondisconnect();
                break;
            case a.CONNECT_ERROR:
                this.destroy();
                let r = new Error(t.data.message);
                r.data = t.data.data,
                this.emitReserved("connect_error", r);
                break
            }
    }
    onevent(t) {
        let e = t.data || [];
        t.id != null && e.push(this.ack(t.id)),
        this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            let e = this._anyListeners.slice();
            for (let r of e)
                r.apply(this, t)
        }
        super.emit.apply(this, t),
        this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1])
    }
    ack(t) {
        let e = this
          , r = !1;
        return function(...n) {
            r || (r = !0,
            e.packet({
                type: a.ACK,
                id: t,
                data: n
            }))
        }
    }
    onack(t) {
        let e = this.acks[t.id];
        typeof e == "function" && (delete this.acks[t.id],
        e.withError && t.data.unshift(null),
        e.apply(this, t.data))
    }
    onconnect(t, e) {
        this.id = t,
        this.recovered = e && this._pid === e,
        this._pid = e,
        this.connected = !0,
        this.emitBuffered(),
        this._drainQueue(!0),
        this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(t => this.emitEvent(t)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(t => {
            this.notifyOutgoingListeners(t),
            this.packet(t)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(t => t()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: a.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(t) {
        return this.flags.compress = t,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(t) {
        return this.flags.timeout = t,
        this
    }
    onAny(t) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(t),
        this
    }
    prependAny(t) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(t),
        this
    }
    offAny(t) {
        if (!this._anyListeners)
            return this;
        if (t) {
            let e = this._anyListeners;
            for (let r = 0; r < e.length; r++)
                if (t === e[r])
                    return e.splice(r, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(t),
        this
    }
    prependAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(t),
        this
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners)
            return this;
        if (t) {
            let e = this._anyOutgoingListeners;
            for (let r = 0; r < e.length; r++)
                if (t === e[r])
                    return e.splice(r, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            let e = this._anyOutgoingListeners.slice();
            for (let r of e)
                r.apply(this, t.data)
        }
    }
}
;
function v(s) {
    s = s || {},
    this.ms = s.min || 100,
    this.max = s.max || 1e4,
    this.factor = s.factor || 2,
    this.jitter = s.jitter > 0 && s.jitter <= 1 ? s.jitter : 0,
    this.attempts = 0
}
v.prototype.duration = function() {
    var s = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random()
          , e = Math.floor(t * this.jitter * s);
        s = (Math.floor(t * 10) & 1) == 0 ? s - e : s + e
    }
    return Math.min(s, this.max) | 0
}
;
v.prototype.reset = function() {
    this.attempts = 0
}
;
v.prototype.setMin = function(s) {
    this.ms = s
}
;
v.prototype.setMax = function(s) {
    this.max = s
}
;
v.prototype.setJitter = function(s) {
    this.jitter = s
}
;
var C = class extends l {
    constructor(t, e) {
        var r;
        super(),
        this.nsps = {},
        this.subs = [],
        t && typeof t == "object" && (e = t,
        t = void 0),
        e = e || {},
        e.path = e.path || "/socket.io",
        this.opts = e,
        b(this, e),
        this.reconnection(e.reconnection !== !1),
        this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(e.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
        this.randomizationFactor((r = e.randomizationFactor) !== null && r !== void 0 ? r : .5),
        this.backoff = new v({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(e.timeout == null ? 2e4 : e.timeout),
        this._readyState = "closed",
        this.uri = t;
        let n = e.parser || ue;
        this.encoder = new n.Encoder,
        this.decoder = new n.Decoder,
        this._autoConnect = e.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(t) {
        return arguments.length ? (this._reconnection = !!t,
        t || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(t) {
        return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t,
        this)
    }
    reconnectionDelay(t) {
        var e;
        return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t,
        (e = this.backoff) === null || e === void 0 || e.setMin(t),
        this)
    }
    randomizationFactor(t) {
        var e;
        return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t,
        (e = this.backoff) === null || e === void 0 || e.setJitter(t),
        this)
    }
    reconnectionDelayMax(t) {
        var e;
        return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t,
        (e = this.backoff) === null || e === void 0 || e.setMax(t),
        this)
    }
    timeout(t) {
        return arguments.length ? (this._timeout = t,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(t) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new S(this.uri,this.opts);
        let e = this.engine
          , r = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        let n = p(e, "open", function() {
            r.onopen(),
            t && t()
        })
          , i = c => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", c),
            t ? t(c) : this.maybeReconnectOnOpen()
        }
          , o = p(e, "error", i);
        if (this._timeout !== !1) {
            let c = this._timeout
              , u = this.setTimeoutFn( () => {
                n(),
                i(new Error("timeout")),
                e.close()
            }
            , c);
            this.opts.autoUnref && u.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(u)
            }
            )
        }
        return this.subs.push(n),
        this.subs.push(o),
        this
    }
    connect(t) {
        return this.open(t)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        let t = this.engine;
        this.subs.push(p(t, "ping", this.onping.bind(this)), p(t, "data", this.ondata.bind(this)), p(t, "error", this.onerror.bind(this)), p(t, "close", this.onclose.bind(this)), p(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(t) {
        try {
            this.decoder.add(t)
        } catch (e) {
            this.onclose("parse error", e)
        }
    }
    ondecoded(t) {
        y( () => {
            this.emitReserved("packet", t)
        }
        , this.setTimeoutFn)
    }
    onerror(t) {
        this.emitReserved("error", t)
    }
    socket(t, e) {
        let r = this.nsps[t];
        return r ? this._autoConnect && !r.active && r.connect() : (r = new T(this,t,e),
        this.nsps[t] = r),
        r
    }
    _destroy(t) {
        let e = Object.keys(this.nsps);
        for (let r of e)
            if (this.nsps[r].active)
                return;
        this._close()
    }
    _packet(t) {
        let e = this.encoder.encode(t);
        for (let r = 0; r < e.length; r++)
            this.engine.write(e[r], t.options)
    }
    cleanup() {
        this.subs.forEach(t => t()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(t, e) {
        var r;
        this.cleanup(),
        (r = this.engine) === null || r === void 0 || r.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", t, e),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        let t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            let e = this.backoff.duration();
            this._reconnecting = !0;
            let r = this.setTimeoutFn( () => {
                t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                !t.skipReconnect && t.open(n => {
                    n ? (t._reconnecting = !1,
                    t.reconnect(),
                    this.emitReserved("reconnect_error", n)) : t.onreconnect()
                }
                ))
            }
            , e);
            this.opts.autoUnref && r.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(r)
            }
            )
        }
    }
    onreconnect() {
        let t = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", t)
    }
}
;
var U = {};
function F(s, t) {
    typeof s == "object" && (t = s,
    s = void 0),
    t = t || {};
    let e = $e(s, t.path || "/socket.io"), r = e.source, n = e.id, i = e.path, o = U[n] && i in U[n].nsps, c = t.forceNew || t["force new connection"] || t.multiplex === !1 || o, u;
    return c ? u = new C(r,t) : (U[n] || (U[n] = new C(r,t)),
    u = U[n]),
    e.query && !t.query && (t.query = e.queryKey),
    u.socket(e.path, t)
}
Object.assign(F, {
    Manager: C,
    Socket: T,
    io: F,
    connect: F
});
var He = class s {
    socket = null;
    serverUrl = fe;
    phase$ = new h("betting");
    roundState$ = new h({
        phase: "betting",
        multiplier: 1
    });
    multiplier$ = new h(1);
    balance$ = new h(0);
    roundHistory$ = new h([]);
    activeBets$ = new h([]);
    roomStates$ = new h({});
    roomTick$ = new h(null);
    roomPhase$ = new h(null);
    roomCrashed$ = new h(null);
    roomHistory$ = new h(null);
    roomBets$ = new h(null);
    chatHistory$ = new h([]);
    chatMessage$ = new h(null);
    chatOnline$ = new h(8130);
    chatAccess$ = new h(null);
    chatError$ = new h(null);
    betConfirmed$ = new h(null);
    cashOutSuccess$ = new h(null);
    errorNotification$ = new h(null);
    withdrawalNotification$ = new h(null);
    isConnected$ = new h(!1);
    pendingActionRooms = {};
    betPlacedBroadcast$ = new h(null);
    betCashedOutBroadcast$ = new h(null);
    mpesaSuccess$ = new h(null);
    mpesaFailed$ = new h(null);
    walletUpdated$ = new h(null);
    transactionsUpdated$ = new h(null);
    depositsUpdated$ = new h(null);
    withdrawalsUpdated$ = new h(null);
    paymentConfig$ = new h(null);
    userUpdated$ = new h(null);
    getSocket() {
        return this.socket
    }
    connect(t) {
        this.disconnect(),
        this.socket = F(this.serverUrl, {
            auth: {
                token: t
            },
            transports: ["websocket", "polling"],
            reconnection: !0,
            reconnectionAttempts: 1 / 0,
            reconnectionDelay: 1e3,
            reconnectionDelayMax: 5e3
        }),
        this.socket.on("connect", () => {
            this.socket?.emit("auth", t),
            this.isConnected$.next(!0),
            this.errorNotification$.next(null)
        }
        ),
        this.socket.on("connect_error", e => {
            this.isConnected$.next(!1),
            this.errorNotification$.next({
                message: e.message || "Failed to connect to the game server."
            })
        }
        ),
        this.socket.on("game:rooms:state", e => {
            this.roomStates$.next(e)
        }
        ),
        this.socket.on("game:room:tick", e => {
            this.roomTick$.next({
                roomId: Number(e.roomId),
                multiplier: Number(e.multiplier)
            })
        }
        ),
        this.socket.on("game:room:phase", e => {
            this.roomPhase$.next({
                roomId: Number(e.roomId),
                phase: e.phase,
                roundId: e.roundId,
                durationMs: e.bettingDuration,
                multiplier: e.multiplier ?? 1,
                phaseStartedAt: e.phase === "flying" ? e.flyingStartedAt : e.bettingStartedAt
            })
        }
        ),
        this.socket.on("game:room:crashed", e => {
            this.roomCrashed$.next({
                roomId: Number(e.roomId),
                crashPoint: Number(e.crashPoint)
            })
        }
        ),
        this.socket.on("game:room:history", e => {
            Array.isArray(e.history) && this.roomHistory$.next({
                roomId: Number(e.roomId),
                history: e.history
            })
        }
        ),
        this.socket.on("game:room:bets", e => {
            Array.isArray(e.bets) && this.roomBets$.next({
                roomId: Number(e.roomId),
                bets: e.bets
            })
        }
        ),
        this.socket.on("chat:history", e => {
            Array.isArray(e) && this.chatHistory$.next(e.slice(-120))
        }
        ),
        this.socket.on("chat:message", e => {
            e?.text && this.chatMessage$.next(e)
        }
        ),
        this.socket.on("chat:online", e => {
            let r = typeof e == "number" ? e : Number(e?.count);
            Number.isFinite(r) && this.chatOnline$.next(Math.max(0, Math.floor(r)))
        }
        ),
        this.socket.on("chat:access", e => {
            e && this.chatAccess$.next({
                allowed: !!e.allowed,
                balance: Number(e.balance) || 0,
                minimumBalance: Number(e.minimumBalance) || 1e3
            })
        }
        ),
        this.socket.on("chat:error", e => {
            this.chatError$.next({
                message: e?.message || "Chat message was not sent.",
                code: e?.code
            })
        }
        ),
        this.socket.on("game:state", e => {
            this.publishPhase({
                phase: e.phase,
                roundId: e.roundId,
                durationMs: e.bettingDuration,
                multiplier: e.multiplier ?? 1,
                phaseStartedAt: e.phase === "flying" ? e.flyingStartedAt : e.bettingStartedAt
            }),
            Array.isArray(e.history) && this.roundHistory$.next(e.history),
            Array.isArray(e.activeBets) && this.activeBets$.next(e.activeBets)
        }
        ),
        this.socket.on("game:phase", e => this.publishPhase({
            phase: e.phase,
            roundId: e.roundId,
            durationMs: e.bettingDuration,
            multiplier: e.multiplier ?? (e.phase === "betting" ? 1 : this.multiplier$.value),
            phaseStartedAt: e.phase === "flying" ? e.flyingStartedAt : e.bettingStartedAt
        })),
        this.socket.on("game:tick", e => {
            this.multiplier$.next(Number(e.multiplier))
        }
        ),
        this.socket.on("game:crashed", e => {
            this.publishPhase({
                phase: "crashed",
                multiplier: Number(e.crashPoint)
            })
        }
        ),
        this.socket.on("game:history", e => {
            Array.isArray(e) && this.roundHistory$.next(e)
        }
        ),
        this.socket.on("game:bets", e => {
            Array.isArray(e) && this.activeBets$.next(e)
        }
        ),
        this.socket.on("bet:placed", e => {
            let r = this.toSlot(e.betId)
              , n = Number(e.roomId) || (r ? this.pendingActionRooms[r] : void 0);
            r && delete this.pendingActionRooms[r],
            this.betConfirmed$.next({
                betId: e.betId,
                amount: Number(e.amount),
                slot: r,
                roomId: n
            }),
            this.publishBalance(e.balance)
        }
        ),
        this.socket.on("bet:cashout", e => {
            let r = this.toSlot(e.betId)
              , n = Number(e.roomId) || (r ? this.pendingActionRooms[r] : void 0);
            r && delete this.pendingActionRooms[r],
            this.cashOutSuccess$.next({
                multiplier: Number(e.multiplier),
                payoutAmount: Number(e.payout),
                slot: r,
                roomId: n
            }),
            this.publishBalance(e.balance)
        }
        ),
        this.socket.on("wallet:update", e => {
            this.publishBalance(e.balance),
            this.walletUpdated$.next({
                action: "wallet_update",
                userId: null,
                occurredAt: new Date().toISOString(),
                balance: Number(e.balance),
                depositCount: e.depositCount
            })
        }
        ),
        this.socket.on("deposit:success", e => {
            this.publishBalance(e.balance),
            this.mpesaSuccess$.next({
                amount: Number(e.amount),
                receipt: String(e.receipt || ""),
                balance: Number(e.balance)
            })
        }
        ),
        this.socket.on("deposit:failed", e => {
            this.mpesaFailed$.next({
                reason: e?.message || "The M-Pesa payment was not completed.",
                amount: Number(e?.amount || 0)
            })
        }
        ),
        this.socket.on("error", e => {
            let r = this.toSlot(e?.betId)
              , n = Number(e?.roomId) || (r ? this.pendingActionRooms[r] : void 0);
            r && delete this.pendingActionRooms[r],
            this.errorNotification$.next({
                message: e?.message || "The game server rejected that action.",
                slot: r,
                roomId: n
            })
        }
        ),
        this.socket.on("payment:config", e => {
            if (e) {
                let r = Number(e.minDepositAmount)
                  , n = Number(e.maxDepositAmount);
                Number.isFinite(r) && r >= 1 && this.paymentConfig$.next({
                    minDepositAmount: r,
                    maxDepositAmount: Number.isFinite(n) && n >= 1 ? n : 1999
                })
            }
        }
        ),
        this.socket.on("disconnect", () => this.isConnected$.next(!1))
    }
    placeBet(t, e, r, n=1) {
        if (!this.socket?.connected) {
            this.errorNotification$.next({
                message: "Socket connection offline. Please reconnect.",
                slot: e
            });
            return
        }
        this.pendingActionRooms[e] = n,
        this.socket.emit("bet:place", R({
            amount: t,
            betId: e === 1 ? "A" : "B",
            roomId: n
        }, r ? {
            autoCashout: r
        } : {}))
    }
    cashOut(t, e=1) {
        if (!this.socket?.connected) {
            this.errorNotification$.next({
                message: "Socket connection offline. Please reconnect.",
                slot: t
            });
            return
        }
        this.pendingActionRooms[t] = e,
        this.socket.emit("bet:cashout", {
            betId: t === 1 ? "A" : "B",
            roomId: e
        })
    }
    openChat() {
        this.socket?.emit("chat:open")
    }
    sendChatMessage(t) {
        if (!this.socket?.connected) {
            this.chatError$.next({
                message: "Chat is offline. Please reconnect and try again.",
                code: "OFFLINE"
            });
            return
        }
        this.socket.emit("chat:send", {
            text: t
        })
    }
    clearNotification() {
        this.errorNotification$.next(null)
    }
    disconnect() {
        this.socket?.removeAllListeners(),
        this.socket?.disconnect(),
        this.socket = null,
        this.pendingActionRooms = {},
        this.isConnected$.next(!1)
    }
    publishPhase(t) {
        this.phase$.next(t.phase),
        this.roundState$.next(t),
        t.multiplier !== void 0 && this.multiplier$.next(t.multiplier),
        t.phase === "betting" && (this.betConfirmed$.next(null),
        this.cashOutSuccess$.next(null))
    }
    publishBalance(t) {
        let e = Number(t);
        Number.isFinite(e) && this.balance$.next(e)
    }
    toSlot(t) {
        if (t === "A" || t === "1")
            return 1;
        if (t === "B" || t === "2")
            return 2
    }
    static \u0275fac = function(e) {
        return new (e || s)
    }
    ;
    static \u0275prov = le({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    })
}
;
export {F as a, He as b};
