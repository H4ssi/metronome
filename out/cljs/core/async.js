// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t56604 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t56604 = (function (fn_handler,f,meta56605){
this.fn_handler = fn_handler;
this.f = f;
this.meta56605 = meta56605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t56604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56606,meta56605__$1){
var self__ = this;
var _56606__$1 = this;
return (new cljs.core.async.t56604(self__.fn_handler,self__.f,meta56605__$1));
});

cljs.core.async.t56604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56606){
var self__ = this;
var _56606__$1 = this;
return self__.meta56605;
});

cljs.core.async.t56604.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t56604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t56604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t56604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta56605","meta56605",1144584682,null)], null);
});

cljs.core.async.t56604.cljs$lang$type = true;

cljs.core.async.t56604.cljs$lang$ctorStr = "cljs.core.async/t56604";

cljs.core.async.t56604.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t56604");
});

cljs.core.async.__GT_t56604 = (function cljs$core$async$fn_handler_$___GT_t56604(fn_handler__$1,f__$1,meta56605){
return (new cljs.core.async.t56604(fn_handler__$1,f__$1,meta56605));
});

}

return (new cljs.core.async.t56604(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__56608 = buff;
if(G__56608){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__56608.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__56608.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__56608);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__56608);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__56610 = arguments.length;
switch (G__56610) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__56613 = arguments.length;
switch (G__56613) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_56615 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_56615);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_56615,ret){
return (function (){
return fn1.call(null,val_56615);
});})(val_56615,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__56617 = arguments.length;
switch (G__56617) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5194__auto___56619 = n;
var x_56620 = (0);
while(true){
if((x_56620 < n__5194__auto___56619)){
(a[x_56620] = (0));

var G__56621 = (x_56620 + (1));
x_56620 = G__56621;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__56622 = (i + (1));
i = G__56622;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t56626 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t56626 = (function (alt_flag,flag,meta56627){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta56627 = meta56627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t56626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_56628,meta56627__$1){
var self__ = this;
var _56628__$1 = this;
return (new cljs.core.async.t56626(self__.alt_flag,self__.flag,meta56627__$1));
});})(flag))
;

cljs.core.async.t56626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_56628){
var self__ = this;
var _56628__$1 = this;
return self__.meta56627;
});})(flag))
;

cljs.core.async.t56626.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t56626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t56626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t56626.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56627","meta56627",-190307932,null)], null);
});})(flag))
;

cljs.core.async.t56626.cljs$lang$type = true;

cljs.core.async.t56626.cljs$lang$ctorStr = "cljs.core.async/t56626";

cljs.core.async.t56626.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t56626");
});})(flag))
;

cljs.core.async.__GT_t56626 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t56626(alt_flag__$1,flag__$1,meta56627){
return (new cljs.core.async.t56626(alt_flag__$1,flag__$1,meta56627));
});})(flag))
;

}

return (new cljs.core.async.t56626(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t56632 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t56632 = (function (alt_handler,flag,cb,meta56633){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta56633 = meta56633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t56632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56634,meta56633__$1){
var self__ = this;
var _56634__$1 = this;
return (new cljs.core.async.t56632(self__.alt_handler,self__.flag,self__.cb,meta56633__$1));
});

cljs.core.async.t56632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56634){
var self__ = this;
var _56634__$1 = this;
return self__.meta56633;
});

cljs.core.async.t56632.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t56632.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t56632.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t56632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56633","meta56633",-830381358,null)], null);
});

cljs.core.async.t56632.cljs$lang$type = true;

cljs.core.async.t56632.cljs$lang$ctorStr = "cljs.core.async/t56632";

cljs.core.async.t56632.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t56632");
});

cljs.core.async.__GT_t56632 = (function cljs$core$async$alt_handler_$___GT_t56632(alt_handler__$1,flag__$1,cb__$1,meta56633){
return (new cljs.core.async.t56632(alt_handler__$1,flag__$1,cb__$1,meta56633));
});

}

return (new cljs.core.async.t56632(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56635_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56635_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56636_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56636_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4309__auto__ = wport;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return port;
}
})()], null));
} else {
var G__56637 = (i + (1));
i = G__56637;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4309__auto__ = ret;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4297__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4297__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56640){
var map__56641 = p__56640;
var map__56641__$1 = ((cljs.core.seq_QMARK_.call(null,map__56641))?cljs.core.apply.call(null,cljs.core.hash_map,map__56641):map__56641);
var opts = map__56641__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56638){
var G__56639 = cljs.core.first.call(null,seq56638);
var seq56638__$1 = cljs.core.next.call(null,seq56638);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56639,seq56638__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__56643 = arguments.length;
switch (G__56643) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8504__auto___56692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___56692){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___56692){
return (function (state_56667){
var state_val_56668 = (state_56667[(1)]);
if((state_val_56668 === (7))){
var inst_56663 = (state_56667[(2)]);
var state_56667__$1 = state_56667;
var statearr_56669_56693 = state_56667__$1;
(statearr_56669_56693[(2)] = inst_56663);

(statearr_56669_56693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56668 === (1))){
var state_56667__$1 = state_56667;
var statearr_56670_56694 = state_56667__$1;
(statearr_56670_56694[(2)] = null);

(statearr_56670_56694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56668 === (4))){
var inst_56646 = (state_56667[(7)]);
var inst_56646__$1 = (state_56667[(2)]);
var inst_56647 = (inst_56646__$1 == null);
var state_56667__$1 = (function (){var statearr_56671 = state_56667;
(statearr_56671[(7)] = inst_56646__$1);

return statearr_56671;
})();
if(cljs.core.truth_(inst_56647)){
var statearr_56672_56695 = state_56667__$1;
(statearr_56672_56695[(1)] = (5));

} else {
var statearr_56673_56696 = state_56667__$1;
(statearr_56673_56696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56668 === (13))){
var state_56667__$1 = state_56667;
var statearr_56674_56697 = state_56667__$1;
(statearr_56674_56697[(2)] = null);

(statearr_56674_56697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56668 === (6))){
var inst_56646 = (state_56667[(7)]);
var state_56667__$1 = state_56667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56667__$1,(11),to,inst_56646);
} else {
if((state_val_56668 === (3))){
var inst_56665 = (state_56667[(2)]);
var state_56667__$1 = state_56667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56667__$1,inst_56665);
} else {
if((state_val_56668 === (12))){
var state_56667__$1 = state_56667;
var statearr_56675_56698 = state_56667__$1;
(statearr_56675_56698[(2)] = null);

(statearr_56675_56698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56668 === (2))){
var state_56667__$1 = state_56667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56667__$1,(4),from);
} else {
if((state_val_56668 === (11))){
var inst_56656 = (state_56667[(2)]);
var state_56667__$1 = state_56667;
if(cljs.core.truth_(inst_56656)){
var statearr_56676_56699 = state_56667__$1;
(statearr_56676_56699[(1)] = (12));

} else {
var statearr_56677_56700 = state_56667__$1;
(statearr_56677_56700[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56668 === (9))){
var state_56667__$1 = state_56667;
var statearr_56678_56701 = state_56667__$1;
(statearr_56678_56701[(2)] = null);

(statearr_56678_56701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56668 === (5))){
var state_56667__$1 = state_56667;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56679_56702 = state_56667__$1;
(statearr_56679_56702[(1)] = (8));

} else {
var statearr_56680_56703 = state_56667__$1;
(statearr_56680_56703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56668 === (14))){
var inst_56661 = (state_56667[(2)]);
var state_56667__$1 = state_56667;
var statearr_56681_56704 = state_56667__$1;
(statearr_56681_56704[(2)] = inst_56661);

(statearr_56681_56704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56668 === (10))){
var inst_56653 = (state_56667[(2)]);
var state_56667__$1 = state_56667;
var statearr_56682_56705 = state_56667__$1;
(statearr_56682_56705[(2)] = inst_56653);

(statearr_56682_56705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56668 === (8))){
var inst_56650 = cljs.core.async.close_BANG_.call(null,to);
var state_56667__$1 = state_56667;
var statearr_56683_56706 = state_56667__$1;
(statearr_56683_56706[(2)] = inst_56650);

(statearr_56683_56706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___56692))
;
return ((function (switch__8442__auto__,c__8504__auto___56692){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_56687 = [null,null,null,null,null,null,null,null];
(statearr_56687[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_56687[(1)] = (1));

return statearr_56687;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_56667){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_56667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e56688){if((e56688 instanceof Object)){
var ex__8446__auto__ = e56688;
var statearr_56689_56707 = state_56667;
(statearr_56689_56707[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56708 = state_56667;
state_56667 = G__56708;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_56667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_56667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___56692))
})();
var state__8506__auto__ = (function (){var statearr_56690 = f__8505__auto__.call(null);
(statearr_56690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___56692);

return statearr_56690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___56692))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__56892){
var vec__56893 = p__56892;
var v = cljs.core.nth.call(null,vec__56893,(0),null);
var p = cljs.core.nth.call(null,vec__56893,(1),null);
var job = vec__56893;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8504__auto___57075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___57075,res,vec__56893,v,p,job,jobs,results){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___57075,res,vec__56893,v,p,job,jobs,results){
return (function (state_56898){
var state_val_56899 = (state_56898[(1)]);
if((state_val_56899 === (1))){
var state_56898__$1 = state_56898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56898__$1,(2),res,v);
} else {
if((state_val_56899 === (2))){
var inst_56895 = (state_56898[(2)]);
var inst_56896 = cljs.core.async.close_BANG_.call(null,res);
var state_56898__$1 = (function (){var statearr_56900 = state_56898;
(statearr_56900[(7)] = inst_56895);

return statearr_56900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56898__$1,inst_56896);
} else {
return null;
}
}
});})(c__8504__auto___57075,res,vec__56893,v,p,job,jobs,results))
;
return ((function (switch__8442__auto__,c__8504__auto___57075,res,vec__56893,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0 = (function (){
var statearr_56904 = [null,null,null,null,null,null,null,null];
(statearr_56904[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__);

(statearr_56904[(1)] = (1));

return statearr_56904;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1 = (function (state_56898){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_56898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e56905){if((e56905 instanceof Object)){
var ex__8446__auto__ = e56905;
var statearr_56906_57076 = state_56898;
(statearr_56906_57076[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57077 = state_56898;
state_56898 = G__57077;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__ = function(state_56898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1.call(this,state_56898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___57075,res,vec__56893,v,p,job,jobs,results))
})();
var state__8506__auto__ = (function (){var statearr_56907 = f__8505__auto__.call(null);
(statearr_56907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___57075);

return statearr_56907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___57075,res,vec__56893,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__56908){
var vec__56909 = p__56908;
var v = cljs.core.nth.call(null,vec__56909,(0),null);
var p = cljs.core.nth.call(null,vec__56909,(1),null);
var job = vec__56909;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5194__auto___57078 = n;
var __57079 = (0);
while(true){
if((__57079 < n__5194__auto___57078)){
var G__56910_57080 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__56910_57080) {
case "compute":
var c__8504__auto___57082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57079,c__8504__auto___57082,G__56910_57080,n__5194__auto___57078,jobs,results,process,async){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (__57079,c__8504__auto___57082,G__56910_57080,n__5194__auto___57078,jobs,results,process,async){
return (function (state_56923){
var state_val_56924 = (state_56923[(1)]);
if((state_val_56924 === (1))){
var state_56923__$1 = state_56923;
var statearr_56925_57083 = state_56923__$1;
(statearr_56925_57083[(2)] = null);

(statearr_56925_57083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56924 === (2))){
var state_56923__$1 = state_56923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56923__$1,(4),jobs);
} else {
if((state_val_56924 === (3))){
var inst_56921 = (state_56923[(2)]);
var state_56923__$1 = state_56923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56923__$1,inst_56921);
} else {
if((state_val_56924 === (4))){
var inst_56913 = (state_56923[(2)]);
var inst_56914 = process.call(null,inst_56913);
var state_56923__$1 = state_56923;
if(cljs.core.truth_(inst_56914)){
var statearr_56926_57084 = state_56923__$1;
(statearr_56926_57084[(1)] = (5));

} else {
var statearr_56927_57085 = state_56923__$1;
(statearr_56927_57085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56924 === (5))){
var state_56923__$1 = state_56923;
var statearr_56928_57086 = state_56923__$1;
(statearr_56928_57086[(2)] = null);

(statearr_56928_57086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56924 === (6))){
var state_56923__$1 = state_56923;
var statearr_56929_57087 = state_56923__$1;
(statearr_56929_57087[(2)] = null);

(statearr_56929_57087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56924 === (7))){
var inst_56919 = (state_56923[(2)]);
var state_56923__$1 = state_56923;
var statearr_56930_57088 = state_56923__$1;
(statearr_56930_57088[(2)] = inst_56919);

(statearr_56930_57088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57079,c__8504__auto___57082,G__56910_57080,n__5194__auto___57078,jobs,results,process,async))
;
return ((function (__57079,switch__8442__auto__,c__8504__auto___57082,G__56910_57080,n__5194__auto___57078,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0 = (function (){
var statearr_56934 = [null,null,null,null,null,null,null];
(statearr_56934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__);

(statearr_56934[(1)] = (1));

return statearr_56934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1 = (function (state_56923){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_56923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e56935){if((e56935 instanceof Object)){
var ex__8446__auto__ = e56935;
var statearr_56936_57089 = state_56923;
(statearr_56936_57089[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57090 = state_56923;
state_56923 = G__57090;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__ = function(state_56923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1.call(this,state_56923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__;
})()
;})(__57079,switch__8442__auto__,c__8504__auto___57082,G__56910_57080,n__5194__auto___57078,jobs,results,process,async))
})();
var state__8506__auto__ = (function (){var statearr_56937 = f__8505__auto__.call(null);
(statearr_56937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___57082);

return statearr_56937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(__57079,c__8504__auto___57082,G__56910_57080,n__5194__auto___57078,jobs,results,process,async))
);


break;
case "async":
var c__8504__auto___57091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57079,c__8504__auto___57091,G__56910_57080,n__5194__auto___57078,jobs,results,process,async){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (__57079,c__8504__auto___57091,G__56910_57080,n__5194__auto___57078,jobs,results,process,async){
return (function (state_56950){
var state_val_56951 = (state_56950[(1)]);
if((state_val_56951 === (1))){
var state_56950__$1 = state_56950;
var statearr_56952_57092 = state_56950__$1;
(statearr_56952_57092[(2)] = null);

(statearr_56952_57092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (2))){
var state_56950__$1 = state_56950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56950__$1,(4),jobs);
} else {
if((state_val_56951 === (3))){
var inst_56948 = (state_56950[(2)]);
var state_56950__$1 = state_56950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56950__$1,inst_56948);
} else {
if((state_val_56951 === (4))){
var inst_56940 = (state_56950[(2)]);
var inst_56941 = async.call(null,inst_56940);
var state_56950__$1 = state_56950;
if(cljs.core.truth_(inst_56941)){
var statearr_56953_57093 = state_56950__$1;
(statearr_56953_57093[(1)] = (5));

} else {
var statearr_56954_57094 = state_56950__$1;
(statearr_56954_57094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (5))){
var state_56950__$1 = state_56950;
var statearr_56955_57095 = state_56950__$1;
(statearr_56955_57095[(2)] = null);

(statearr_56955_57095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (6))){
var state_56950__$1 = state_56950;
var statearr_56956_57096 = state_56950__$1;
(statearr_56956_57096[(2)] = null);

(statearr_56956_57096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56951 === (7))){
var inst_56946 = (state_56950[(2)]);
var state_56950__$1 = state_56950;
var statearr_56957_57097 = state_56950__$1;
(statearr_56957_57097[(2)] = inst_56946);

(statearr_56957_57097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57079,c__8504__auto___57091,G__56910_57080,n__5194__auto___57078,jobs,results,process,async))
;
return ((function (__57079,switch__8442__auto__,c__8504__auto___57091,G__56910_57080,n__5194__auto___57078,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0 = (function (){
var statearr_56961 = [null,null,null,null,null,null,null];
(statearr_56961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__);

(statearr_56961[(1)] = (1));

return statearr_56961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1 = (function (state_56950){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_56950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e56962){if((e56962 instanceof Object)){
var ex__8446__auto__ = e56962;
var statearr_56963_57098 = state_56950;
(statearr_56963_57098[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57099 = state_56950;
state_56950 = G__57099;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__ = function(state_56950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1.call(this,state_56950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__;
})()
;})(__57079,switch__8442__auto__,c__8504__auto___57091,G__56910_57080,n__5194__auto___57078,jobs,results,process,async))
})();
var state__8506__auto__ = (function (){var statearr_56964 = f__8505__auto__.call(null);
(statearr_56964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___57091);

return statearr_56964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(__57079,c__8504__auto___57091,G__56910_57080,n__5194__auto___57078,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__57100 = (__57079 + (1));
__57079 = G__57100;
continue;
} else {
}
break;
}

var c__8504__auto___57101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___57101,jobs,results,process,async){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___57101,jobs,results,process,async){
return (function (state_56986){
var state_val_56987 = (state_56986[(1)]);
if((state_val_56987 === (1))){
var state_56986__$1 = state_56986;
var statearr_56988_57102 = state_56986__$1;
(statearr_56988_57102[(2)] = null);

(statearr_56988_57102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56987 === (2))){
var state_56986__$1 = state_56986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56986__$1,(4),from);
} else {
if((state_val_56987 === (3))){
var inst_56984 = (state_56986[(2)]);
var state_56986__$1 = state_56986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56986__$1,inst_56984);
} else {
if((state_val_56987 === (4))){
var inst_56967 = (state_56986[(7)]);
var inst_56967__$1 = (state_56986[(2)]);
var inst_56968 = (inst_56967__$1 == null);
var state_56986__$1 = (function (){var statearr_56989 = state_56986;
(statearr_56989[(7)] = inst_56967__$1);

return statearr_56989;
})();
if(cljs.core.truth_(inst_56968)){
var statearr_56990_57103 = state_56986__$1;
(statearr_56990_57103[(1)] = (5));

} else {
var statearr_56991_57104 = state_56986__$1;
(statearr_56991_57104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56987 === (5))){
var inst_56970 = cljs.core.async.close_BANG_.call(null,jobs);
var state_56986__$1 = state_56986;
var statearr_56992_57105 = state_56986__$1;
(statearr_56992_57105[(2)] = inst_56970);

(statearr_56992_57105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56987 === (6))){
var inst_56972 = (state_56986[(8)]);
var inst_56967 = (state_56986[(7)]);
var inst_56972__$1 = cljs.core.async.chan.call(null,(1));
var inst_56973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56974 = [inst_56967,inst_56972__$1];
var inst_56975 = (new cljs.core.PersistentVector(null,2,(5),inst_56973,inst_56974,null));
var state_56986__$1 = (function (){var statearr_56993 = state_56986;
(statearr_56993[(8)] = inst_56972__$1);

return statearr_56993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56986__$1,(8),jobs,inst_56975);
} else {
if((state_val_56987 === (7))){
var inst_56982 = (state_56986[(2)]);
var state_56986__$1 = state_56986;
var statearr_56994_57106 = state_56986__$1;
(statearr_56994_57106[(2)] = inst_56982);

(statearr_56994_57106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56987 === (8))){
var inst_56972 = (state_56986[(8)]);
var inst_56977 = (state_56986[(2)]);
var state_56986__$1 = (function (){var statearr_56995 = state_56986;
(statearr_56995[(9)] = inst_56977);

return statearr_56995;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56986__$1,(9),results,inst_56972);
} else {
if((state_val_56987 === (9))){
var inst_56979 = (state_56986[(2)]);
var state_56986__$1 = (function (){var statearr_56996 = state_56986;
(statearr_56996[(10)] = inst_56979);

return statearr_56996;
})();
var statearr_56997_57107 = state_56986__$1;
(statearr_56997_57107[(2)] = null);

(statearr_56997_57107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___57101,jobs,results,process,async))
;
return ((function (switch__8442__auto__,c__8504__auto___57101,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0 = (function (){
var statearr_57001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__);

(statearr_57001[(1)] = (1));

return statearr_57001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1 = (function (state_56986){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_56986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e57002){if((e57002 instanceof Object)){
var ex__8446__auto__ = e57002;
var statearr_57003_57108 = state_56986;
(statearr_57003_57108[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57109 = state_56986;
state_56986 = G__57109;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__ = function(state_56986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1.call(this,state_56986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___57101,jobs,results,process,async))
})();
var state__8506__auto__ = (function (){var statearr_57004 = f__8505__auto__.call(null);
(statearr_57004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___57101);

return statearr_57004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___57101,jobs,results,process,async))
);


var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__,jobs,results,process,async){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto__,jobs,results,process,async){
return (function (state_57042){
var state_val_57043 = (state_57042[(1)]);
if((state_val_57043 === (7))){
var inst_57038 = (state_57042[(2)]);
var state_57042__$1 = state_57042;
var statearr_57044_57110 = state_57042__$1;
(statearr_57044_57110[(2)] = inst_57038);

(statearr_57044_57110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (20))){
var state_57042__$1 = state_57042;
var statearr_57045_57111 = state_57042__$1;
(statearr_57045_57111[(2)] = null);

(statearr_57045_57111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (1))){
var state_57042__$1 = state_57042;
var statearr_57046_57112 = state_57042__$1;
(statearr_57046_57112[(2)] = null);

(statearr_57046_57112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (4))){
var inst_57007 = (state_57042[(7)]);
var inst_57007__$1 = (state_57042[(2)]);
var inst_57008 = (inst_57007__$1 == null);
var state_57042__$1 = (function (){var statearr_57047 = state_57042;
(statearr_57047[(7)] = inst_57007__$1);

return statearr_57047;
})();
if(cljs.core.truth_(inst_57008)){
var statearr_57048_57113 = state_57042__$1;
(statearr_57048_57113[(1)] = (5));

} else {
var statearr_57049_57114 = state_57042__$1;
(statearr_57049_57114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (15))){
var inst_57020 = (state_57042[(8)]);
var state_57042__$1 = state_57042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57042__$1,(18),to,inst_57020);
} else {
if((state_val_57043 === (21))){
var inst_57033 = (state_57042[(2)]);
var state_57042__$1 = state_57042;
var statearr_57050_57115 = state_57042__$1;
(statearr_57050_57115[(2)] = inst_57033);

(statearr_57050_57115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (13))){
var inst_57035 = (state_57042[(2)]);
var state_57042__$1 = (function (){var statearr_57051 = state_57042;
(statearr_57051[(9)] = inst_57035);

return statearr_57051;
})();
var statearr_57052_57116 = state_57042__$1;
(statearr_57052_57116[(2)] = null);

(statearr_57052_57116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (6))){
var inst_57007 = (state_57042[(7)]);
var state_57042__$1 = state_57042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57042__$1,(11),inst_57007);
} else {
if((state_val_57043 === (17))){
var inst_57028 = (state_57042[(2)]);
var state_57042__$1 = state_57042;
if(cljs.core.truth_(inst_57028)){
var statearr_57053_57117 = state_57042__$1;
(statearr_57053_57117[(1)] = (19));

} else {
var statearr_57054_57118 = state_57042__$1;
(statearr_57054_57118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (3))){
var inst_57040 = (state_57042[(2)]);
var state_57042__$1 = state_57042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57042__$1,inst_57040);
} else {
if((state_val_57043 === (12))){
var inst_57017 = (state_57042[(10)]);
var state_57042__$1 = state_57042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57042__$1,(14),inst_57017);
} else {
if((state_val_57043 === (2))){
var state_57042__$1 = state_57042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57042__$1,(4),results);
} else {
if((state_val_57043 === (19))){
var state_57042__$1 = state_57042;
var statearr_57055_57119 = state_57042__$1;
(statearr_57055_57119[(2)] = null);

(statearr_57055_57119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (11))){
var inst_57017 = (state_57042[(2)]);
var state_57042__$1 = (function (){var statearr_57056 = state_57042;
(statearr_57056[(10)] = inst_57017);

return statearr_57056;
})();
var statearr_57057_57120 = state_57042__$1;
(statearr_57057_57120[(2)] = null);

(statearr_57057_57120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (9))){
var state_57042__$1 = state_57042;
var statearr_57058_57121 = state_57042__$1;
(statearr_57058_57121[(2)] = null);

(statearr_57058_57121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (5))){
var state_57042__$1 = state_57042;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57059_57122 = state_57042__$1;
(statearr_57059_57122[(1)] = (8));

} else {
var statearr_57060_57123 = state_57042__$1;
(statearr_57060_57123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (14))){
var inst_57022 = (state_57042[(11)]);
var inst_57020 = (state_57042[(8)]);
var inst_57020__$1 = (state_57042[(2)]);
var inst_57021 = (inst_57020__$1 == null);
var inst_57022__$1 = cljs.core.not.call(null,inst_57021);
var state_57042__$1 = (function (){var statearr_57061 = state_57042;
(statearr_57061[(11)] = inst_57022__$1);

(statearr_57061[(8)] = inst_57020__$1);

return statearr_57061;
})();
if(inst_57022__$1){
var statearr_57062_57124 = state_57042__$1;
(statearr_57062_57124[(1)] = (15));

} else {
var statearr_57063_57125 = state_57042__$1;
(statearr_57063_57125[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (16))){
var inst_57022 = (state_57042[(11)]);
var state_57042__$1 = state_57042;
var statearr_57064_57126 = state_57042__$1;
(statearr_57064_57126[(2)] = inst_57022);

(statearr_57064_57126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (10))){
var inst_57014 = (state_57042[(2)]);
var state_57042__$1 = state_57042;
var statearr_57065_57127 = state_57042__$1;
(statearr_57065_57127[(2)] = inst_57014);

(statearr_57065_57127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (18))){
var inst_57025 = (state_57042[(2)]);
var state_57042__$1 = state_57042;
var statearr_57066_57128 = state_57042__$1;
(statearr_57066_57128[(2)] = inst_57025);

(statearr_57066_57128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57043 === (8))){
var inst_57011 = cljs.core.async.close_BANG_.call(null,to);
var state_57042__$1 = state_57042;
var statearr_57067_57129 = state_57042__$1;
(statearr_57067_57129[(2)] = inst_57011);

(statearr_57067_57129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto__,jobs,results,process,async))
;
return ((function (switch__8442__auto__,c__8504__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0 = (function (){
var statearr_57071 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__);

(statearr_57071[(1)] = (1));

return statearr_57071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1 = (function (state_57042){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_57042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e57072){if((e57072 instanceof Object)){
var ex__8446__auto__ = e57072;
var statearr_57073_57130 = state_57042;
(statearr_57073_57130[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57131 = state_57042;
state_57042 = G__57131;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__ = function(state_57042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1.call(this,state_57042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8443__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto__,jobs,results,process,async))
})();
var state__8506__auto__ = (function (){var statearr_57074 = f__8505__auto__.call(null);
(statearr_57074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_57074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__,jobs,results,process,async))
);

return c__8504__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__57133 = arguments.length;
switch (G__57133) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__57136 = arguments.length;
switch (G__57136) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__57139 = arguments.length;
switch (G__57139) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8504__auto___57191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___57191,tc,fc){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___57191,tc,fc){
return (function (state_57165){
var state_val_57166 = (state_57165[(1)]);
if((state_val_57166 === (7))){
var inst_57161 = (state_57165[(2)]);
var state_57165__$1 = state_57165;
var statearr_57167_57192 = state_57165__$1;
(statearr_57167_57192[(2)] = inst_57161);

(statearr_57167_57192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57166 === (1))){
var state_57165__$1 = state_57165;
var statearr_57168_57193 = state_57165__$1;
(statearr_57168_57193[(2)] = null);

(statearr_57168_57193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57166 === (4))){
var inst_57142 = (state_57165[(7)]);
var inst_57142__$1 = (state_57165[(2)]);
var inst_57143 = (inst_57142__$1 == null);
var state_57165__$1 = (function (){var statearr_57169 = state_57165;
(statearr_57169[(7)] = inst_57142__$1);

return statearr_57169;
})();
if(cljs.core.truth_(inst_57143)){
var statearr_57170_57194 = state_57165__$1;
(statearr_57170_57194[(1)] = (5));

} else {
var statearr_57171_57195 = state_57165__$1;
(statearr_57171_57195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57166 === (13))){
var state_57165__$1 = state_57165;
var statearr_57172_57196 = state_57165__$1;
(statearr_57172_57196[(2)] = null);

(statearr_57172_57196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57166 === (6))){
var inst_57142 = (state_57165[(7)]);
var inst_57148 = p.call(null,inst_57142);
var state_57165__$1 = state_57165;
if(cljs.core.truth_(inst_57148)){
var statearr_57173_57197 = state_57165__$1;
(statearr_57173_57197[(1)] = (9));

} else {
var statearr_57174_57198 = state_57165__$1;
(statearr_57174_57198[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57166 === (3))){
var inst_57163 = (state_57165[(2)]);
var state_57165__$1 = state_57165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57165__$1,inst_57163);
} else {
if((state_val_57166 === (12))){
var state_57165__$1 = state_57165;
var statearr_57175_57199 = state_57165__$1;
(statearr_57175_57199[(2)] = null);

(statearr_57175_57199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57166 === (2))){
var state_57165__$1 = state_57165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57165__$1,(4),ch);
} else {
if((state_val_57166 === (11))){
var inst_57142 = (state_57165[(7)]);
var inst_57152 = (state_57165[(2)]);
var state_57165__$1 = state_57165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57165__$1,(8),inst_57152,inst_57142);
} else {
if((state_val_57166 === (9))){
var state_57165__$1 = state_57165;
var statearr_57176_57200 = state_57165__$1;
(statearr_57176_57200[(2)] = tc);

(statearr_57176_57200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57166 === (5))){
var inst_57145 = cljs.core.async.close_BANG_.call(null,tc);
var inst_57146 = cljs.core.async.close_BANG_.call(null,fc);
var state_57165__$1 = (function (){var statearr_57177 = state_57165;
(statearr_57177[(8)] = inst_57145);

return statearr_57177;
})();
var statearr_57178_57201 = state_57165__$1;
(statearr_57178_57201[(2)] = inst_57146);

(statearr_57178_57201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57166 === (14))){
var inst_57159 = (state_57165[(2)]);
var state_57165__$1 = state_57165;
var statearr_57179_57202 = state_57165__$1;
(statearr_57179_57202[(2)] = inst_57159);

(statearr_57179_57202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57166 === (10))){
var state_57165__$1 = state_57165;
var statearr_57180_57203 = state_57165__$1;
(statearr_57180_57203[(2)] = fc);

(statearr_57180_57203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57166 === (8))){
var inst_57154 = (state_57165[(2)]);
var state_57165__$1 = state_57165;
if(cljs.core.truth_(inst_57154)){
var statearr_57181_57204 = state_57165__$1;
(statearr_57181_57204[(1)] = (12));

} else {
var statearr_57182_57205 = state_57165__$1;
(statearr_57182_57205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___57191,tc,fc))
;
return ((function (switch__8442__auto__,c__8504__auto___57191,tc,fc){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_57186 = [null,null,null,null,null,null,null,null,null];
(statearr_57186[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_57186[(1)] = (1));

return statearr_57186;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_57165){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_57165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e57187){if((e57187 instanceof Object)){
var ex__8446__auto__ = e57187;
var statearr_57188_57206 = state_57165;
(statearr_57188_57206[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57207 = state_57165;
state_57165 = G__57207;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_57165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_57165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___57191,tc,fc))
})();
var state__8506__auto__ = (function (){var statearr_57189 = f__8505__auto__.call(null);
(statearr_57189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___57191);

return statearr_57189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___57191,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto__){
return (function (state_57254){
var state_val_57255 = (state_57254[(1)]);
if((state_val_57255 === (1))){
var inst_57240 = init;
var state_57254__$1 = (function (){var statearr_57256 = state_57254;
(statearr_57256[(7)] = inst_57240);

return statearr_57256;
})();
var statearr_57257_57272 = state_57254__$1;
(statearr_57257_57272[(2)] = null);

(statearr_57257_57272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57255 === (2))){
var state_57254__$1 = state_57254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57254__$1,(4),ch);
} else {
if((state_val_57255 === (3))){
var inst_57252 = (state_57254[(2)]);
var state_57254__$1 = state_57254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57254__$1,inst_57252);
} else {
if((state_val_57255 === (4))){
var inst_57243 = (state_57254[(8)]);
var inst_57243__$1 = (state_57254[(2)]);
var inst_57244 = (inst_57243__$1 == null);
var state_57254__$1 = (function (){var statearr_57258 = state_57254;
(statearr_57258[(8)] = inst_57243__$1);

return statearr_57258;
})();
if(cljs.core.truth_(inst_57244)){
var statearr_57259_57273 = state_57254__$1;
(statearr_57259_57273[(1)] = (5));

} else {
var statearr_57260_57274 = state_57254__$1;
(statearr_57260_57274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57255 === (5))){
var inst_57240 = (state_57254[(7)]);
var state_57254__$1 = state_57254;
var statearr_57261_57275 = state_57254__$1;
(statearr_57261_57275[(2)] = inst_57240);

(statearr_57261_57275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57255 === (6))){
var inst_57243 = (state_57254[(8)]);
var inst_57240 = (state_57254[(7)]);
var inst_57247 = f.call(null,inst_57240,inst_57243);
var inst_57240__$1 = inst_57247;
var state_57254__$1 = (function (){var statearr_57262 = state_57254;
(statearr_57262[(7)] = inst_57240__$1);

return statearr_57262;
})();
var statearr_57263_57276 = state_57254__$1;
(statearr_57263_57276[(2)] = null);

(statearr_57263_57276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57255 === (7))){
var inst_57250 = (state_57254[(2)]);
var state_57254__$1 = state_57254;
var statearr_57264_57277 = state_57254__$1;
(statearr_57264_57277[(2)] = inst_57250);

(statearr_57264_57277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__8504__auto__))
;
return ((function (switch__8442__auto__,c__8504__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8443__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8443__auto____0 = (function (){
var statearr_57268 = [null,null,null,null,null,null,null,null,null];
(statearr_57268[(0)] = cljs$core$async$reduce_$_state_machine__8443__auto__);

(statearr_57268[(1)] = (1));

return statearr_57268;
});
var cljs$core$async$reduce_$_state_machine__8443__auto____1 = (function (state_57254){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_57254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e57269){if((e57269 instanceof Object)){
var ex__8446__auto__ = e57269;
var statearr_57270_57278 = state_57254;
(statearr_57270_57278[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57279 = state_57254;
state_57254 = G__57279;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8443__auto__ = function(state_57254){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8443__auto____1.call(this,state_57254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8443__auto____0;
cljs$core$async$reduce_$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8443__auto____1;
return cljs$core$async$reduce_$_state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_57271 = f__8505__auto__.call(null);
(statearr_57271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_57271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__57281 = arguments.length;
switch (G__57281) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto__){
return (function (state_57306){
var state_val_57307 = (state_57306[(1)]);
if((state_val_57307 === (7))){
var inst_57288 = (state_57306[(2)]);
var state_57306__$1 = state_57306;
var statearr_57308_57332 = state_57306__$1;
(statearr_57308_57332[(2)] = inst_57288);

(statearr_57308_57332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (1))){
var inst_57282 = cljs.core.seq.call(null,coll);
var inst_57283 = inst_57282;
var state_57306__$1 = (function (){var statearr_57309 = state_57306;
(statearr_57309[(7)] = inst_57283);

return statearr_57309;
})();
var statearr_57310_57333 = state_57306__$1;
(statearr_57310_57333[(2)] = null);

(statearr_57310_57333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (4))){
var inst_57283 = (state_57306[(7)]);
var inst_57286 = cljs.core.first.call(null,inst_57283);
var state_57306__$1 = state_57306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57306__$1,(7),ch,inst_57286);
} else {
if((state_val_57307 === (13))){
var inst_57300 = (state_57306[(2)]);
var state_57306__$1 = state_57306;
var statearr_57311_57334 = state_57306__$1;
(statearr_57311_57334[(2)] = inst_57300);

(statearr_57311_57334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (6))){
var inst_57291 = (state_57306[(2)]);
var state_57306__$1 = state_57306;
if(cljs.core.truth_(inst_57291)){
var statearr_57312_57335 = state_57306__$1;
(statearr_57312_57335[(1)] = (8));

} else {
var statearr_57313_57336 = state_57306__$1;
(statearr_57313_57336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (3))){
var inst_57304 = (state_57306[(2)]);
var state_57306__$1 = state_57306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57306__$1,inst_57304);
} else {
if((state_val_57307 === (12))){
var state_57306__$1 = state_57306;
var statearr_57314_57337 = state_57306__$1;
(statearr_57314_57337[(2)] = null);

(statearr_57314_57337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (2))){
var inst_57283 = (state_57306[(7)]);
var state_57306__$1 = state_57306;
if(cljs.core.truth_(inst_57283)){
var statearr_57315_57338 = state_57306__$1;
(statearr_57315_57338[(1)] = (4));

} else {
var statearr_57316_57339 = state_57306__$1;
(statearr_57316_57339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (11))){
var inst_57297 = cljs.core.async.close_BANG_.call(null,ch);
var state_57306__$1 = state_57306;
var statearr_57317_57340 = state_57306__$1;
(statearr_57317_57340[(2)] = inst_57297);

(statearr_57317_57340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (9))){
var state_57306__$1 = state_57306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57318_57341 = state_57306__$1;
(statearr_57318_57341[(1)] = (11));

} else {
var statearr_57319_57342 = state_57306__$1;
(statearr_57319_57342[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (5))){
var inst_57283 = (state_57306[(7)]);
var state_57306__$1 = state_57306;
var statearr_57320_57343 = state_57306__$1;
(statearr_57320_57343[(2)] = inst_57283);

(statearr_57320_57343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (10))){
var inst_57302 = (state_57306[(2)]);
var state_57306__$1 = state_57306;
var statearr_57321_57344 = state_57306__$1;
(statearr_57321_57344[(2)] = inst_57302);

(statearr_57321_57344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57307 === (8))){
var inst_57283 = (state_57306[(7)]);
var inst_57293 = cljs.core.next.call(null,inst_57283);
var inst_57283__$1 = inst_57293;
var state_57306__$1 = (function (){var statearr_57322 = state_57306;
(statearr_57322[(7)] = inst_57283__$1);

return statearr_57322;
})();
var statearr_57323_57345 = state_57306__$1;
(statearr_57323_57345[(2)] = null);

(statearr_57323_57345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto__))
;
return ((function (switch__8442__auto__,c__8504__auto__){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_57327 = [null,null,null,null,null,null,null,null];
(statearr_57327[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_57327[(1)] = (1));

return statearr_57327;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_57306){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_57306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e57328){if((e57328 instanceof Object)){
var ex__8446__auto__ = e57328;
var statearr_57329_57346 = state_57306;
(statearr_57329_57346[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57347 = state_57306;
state_57306 = G__57347;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_57306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_57306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_57330 = f__8505__auto__.call(null);
(statearr_57330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_57330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj57349 = {};
return obj57349;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4297__auto__ = _;
if(and__4297__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4945__auto__ = (((_ == null))?null:_);
return (function (){var or__4309__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj57351 = {};
return obj57351;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t57573 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t57573 = (function (mult,ch,cs,meta57574){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta57574 = meta57574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t57573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_57575,meta57574__$1){
var self__ = this;
var _57575__$1 = this;
return (new cljs.core.async.t57573(self__.mult,self__.ch,self__.cs,meta57574__$1));
});})(cs))
;

cljs.core.async.t57573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_57575){
var self__ = this;
var _57575__$1 = this;
return self__.meta57574;
});})(cs))
;

cljs.core.async.t57573.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t57573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t57573.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t57573.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t57573.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t57573.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t57573.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57574","meta57574",927026166,null)], null);
});})(cs))
;

cljs.core.async.t57573.cljs$lang$type = true;

cljs.core.async.t57573.cljs$lang$ctorStr = "cljs.core.async/t57573";

cljs.core.async.t57573.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t57573");
});})(cs))
;

cljs.core.async.__GT_t57573 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t57573(mult__$1,ch__$1,cs__$1,meta57574){
return (new cljs.core.async.t57573(mult__$1,ch__$1,cs__$1,meta57574));
});})(cs))
;

}

return (new cljs.core.async.t57573(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8504__auto___57794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___57794,cs,m,dchan,dctr,done){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___57794,cs,m,dchan,dctr,done){
return (function (state_57706){
var state_val_57707 = (state_57706[(1)]);
if((state_val_57707 === (7))){
var inst_57702 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57708_57795 = state_57706__$1;
(statearr_57708_57795[(2)] = inst_57702);

(statearr_57708_57795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (20))){
var inst_57607 = (state_57706[(7)]);
var inst_57617 = cljs.core.first.call(null,inst_57607);
var inst_57618 = cljs.core.nth.call(null,inst_57617,(0),null);
var inst_57619 = cljs.core.nth.call(null,inst_57617,(1),null);
var state_57706__$1 = (function (){var statearr_57709 = state_57706;
(statearr_57709[(8)] = inst_57618);

return statearr_57709;
})();
if(cljs.core.truth_(inst_57619)){
var statearr_57710_57796 = state_57706__$1;
(statearr_57710_57796[(1)] = (22));

} else {
var statearr_57711_57797 = state_57706__$1;
(statearr_57711_57797[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (27))){
var inst_57654 = (state_57706[(9)]);
var inst_57578 = (state_57706[(10)]);
var inst_57649 = (state_57706[(11)]);
var inst_57647 = (state_57706[(12)]);
var inst_57654__$1 = cljs.core._nth.call(null,inst_57647,inst_57649);
var inst_57655 = cljs.core.async.put_BANG_.call(null,inst_57654__$1,inst_57578,done);
var state_57706__$1 = (function (){var statearr_57712 = state_57706;
(statearr_57712[(9)] = inst_57654__$1);

return statearr_57712;
})();
if(cljs.core.truth_(inst_57655)){
var statearr_57713_57798 = state_57706__$1;
(statearr_57713_57798[(1)] = (30));

} else {
var statearr_57714_57799 = state_57706__$1;
(statearr_57714_57799[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (1))){
var state_57706__$1 = state_57706;
var statearr_57715_57800 = state_57706__$1;
(statearr_57715_57800[(2)] = null);

(statearr_57715_57800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (24))){
var inst_57607 = (state_57706[(7)]);
var inst_57624 = (state_57706[(2)]);
var inst_57625 = cljs.core.next.call(null,inst_57607);
var inst_57587 = inst_57625;
var inst_57588 = null;
var inst_57589 = (0);
var inst_57590 = (0);
var state_57706__$1 = (function (){var statearr_57716 = state_57706;
(statearr_57716[(13)] = inst_57624);

(statearr_57716[(14)] = inst_57588);

(statearr_57716[(15)] = inst_57589);

(statearr_57716[(16)] = inst_57587);

(statearr_57716[(17)] = inst_57590);

return statearr_57716;
})();
var statearr_57717_57801 = state_57706__$1;
(statearr_57717_57801[(2)] = null);

(statearr_57717_57801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (39))){
var state_57706__$1 = state_57706;
var statearr_57721_57802 = state_57706__$1;
(statearr_57721_57802[(2)] = null);

(statearr_57721_57802[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (4))){
var inst_57578 = (state_57706[(10)]);
var inst_57578__$1 = (state_57706[(2)]);
var inst_57579 = (inst_57578__$1 == null);
var state_57706__$1 = (function (){var statearr_57722 = state_57706;
(statearr_57722[(10)] = inst_57578__$1);

return statearr_57722;
})();
if(cljs.core.truth_(inst_57579)){
var statearr_57723_57803 = state_57706__$1;
(statearr_57723_57803[(1)] = (5));

} else {
var statearr_57724_57804 = state_57706__$1;
(statearr_57724_57804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (15))){
var inst_57588 = (state_57706[(14)]);
var inst_57589 = (state_57706[(15)]);
var inst_57587 = (state_57706[(16)]);
var inst_57590 = (state_57706[(17)]);
var inst_57603 = (state_57706[(2)]);
var inst_57604 = (inst_57590 + (1));
var tmp57718 = inst_57588;
var tmp57719 = inst_57589;
var tmp57720 = inst_57587;
var inst_57587__$1 = tmp57720;
var inst_57588__$1 = tmp57718;
var inst_57589__$1 = tmp57719;
var inst_57590__$1 = inst_57604;
var state_57706__$1 = (function (){var statearr_57725 = state_57706;
(statearr_57725[(18)] = inst_57603);

(statearr_57725[(14)] = inst_57588__$1);

(statearr_57725[(15)] = inst_57589__$1);

(statearr_57725[(16)] = inst_57587__$1);

(statearr_57725[(17)] = inst_57590__$1);

return statearr_57725;
})();
var statearr_57726_57805 = state_57706__$1;
(statearr_57726_57805[(2)] = null);

(statearr_57726_57805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (21))){
var inst_57628 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57730_57806 = state_57706__$1;
(statearr_57730_57806[(2)] = inst_57628);

(statearr_57730_57806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (31))){
var inst_57654 = (state_57706[(9)]);
var inst_57658 = done.call(null,null);
var inst_57659 = cljs.core.async.untap_STAR_.call(null,m,inst_57654);
var state_57706__$1 = (function (){var statearr_57731 = state_57706;
(statearr_57731[(19)] = inst_57658);

return statearr_57731;
})();
var statearr_57732_57807 = state_57706__$1;
(statearr_57732_57807[(2)] = inst_57659);

(statearr_57732_57807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (32))){
var inst_57646 = (state_57706[(20)]);
var inst_57648 = (state_57706[(21)]);
var inst_57649 = (state_57706[(11)]);
var inst_57647 = (state_57706[(12)]);
var inst_57661 = (state_57706[(2)]);
var inst_57662 = (inst_57649 + (1));
var tmp57727 = inst_57646;
var tmp57728 = inst_57648;
var tmp57729 = inst_57647;
var inst_57646__$1 = tmp57727;
var inst_57647__$1 = tmp57729;
var inst_57648__$1 = tmp57728;
var inst_57649__$1 = inst_57662;
var state_57706__$1 = (function (){var statearr_57733 = state_57706;
(statearr_57733[(20)] = inst_57646__$1);

(statearr_57733[(21)] = inst_57648__$1);

(statearr_57733[(22)] = inst_57661);

(statearr_57733[(11)] = inst_57649__$1);

(statearr_57733[(12)] = inst_57647__$1);

return statearr_57733;
})();
var statearr_57734_57808 = state_57706__$1;
(statearr_57734_57808[(2)] = null);

(statearr_57734_57808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (40))){
var inst_57674 = (state_57706[(23)]);
var inst_57678 = done.call(null,null);
var inst_57679 = cljs.core.async.untap_STAR_.call(null,m,inst_57674);
var state_57706__$1 = (function (){var statearr_57735 = state_57706;
(statearr_57735[(24)] = inst_57678);

return statearr_57735;
})();
var statearr_57736_57809 = state_57706__$1;
(statearr_57736_57809[(2)] = inst_57679);

(statearr_57736_57809[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (33))){
var inst_57665 = (state_57706[(25)]);
var inst_57667 = cljs.core.chunked_seq_QMARK_.call(null,inst_57665);
var state_57706__$1 = state_57706;
if(inst_57667){
var statearr_57737_57810 = state_57706__$1;
(statearr_57737_57810[(1)] = (36));

} else {
var statearr_57738_57811 = state_57706__$1;
(statearr_57738_57811[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (13))){
var inst_57597 = (state_57706[(26)]);
var inst_57600 = cljs.core.async.close_BANG_.call(null,inst_57597);
var state_57706__$1 = state_57706;
var statearr_57739_57812 = state_57706__$1;
(statearr_57739_57812[(2)] = inst_57600);

(statearr_57739_57812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (22))){
var inst_57618 = (state_57706[(8)]);
var inst_57621 = cljs.core.async.close_BANG_.call(null,inst_57618);
var state_57706__$1 = state_57706;
var statearr_57740_57813 = state_57706__$1;
(statearr_57740_57813[(2)] = inst_57621);

(statearr_57740_57813[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (36))){
var inst_57665 = (state_57706[(25)]);
var inst_57669 = cljs.core.chunk_first.call(null,inst_57665);
var inst_57670 = cljs.core.chunk_rest.call(null,inst_57665);
var inst_57671 = cljs.core.count.call(null,inst_57669);
var inst_57646 = inst_57670;
var inst_57647 = inst_57669;
var inst_57648 = inst_57671;
var inst_57649 = (0);
var state_57706__$1 = (function (){var statearr_57741 = state_57706;
(statearr_57741[(20)] = inst_57646);

(statearr_57741[(21)] = inst_57648);

(statearr_57741[(11)] = inst_57649);

(statearr_57741[(12)] = inst_57647);

return statearr_57741;
})();
var statearr_57742_57814 = state_57706__$1;
(statearr_57742_57814[(2)] = null);

(statearr_57742_57814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (41))){
var inst_57665 = (state_57706[(25)]);
var inst_57681 = (state_57706[(2)]);
var inst_57682 = cljs.core.next.call(null,inst_57665);
var inst_57646 = inst_57682;
var inst_57647 = null;
var inst_57648 = (0);
var inst_57649 = (0);
var state_57706__$1 = (function (){var statearr_57743 = state_57706;
(statearr_57743[(20)] = inst_57646);

(statearr_57743[(21)] = inst_57648);

(statearr_57743[(27)] = inst_57681);

(statearr_57743[(11)] = inst_57649);

(statearr_57743[(12)] = inst_57647);

return statearr_57743;
})();
var statearr_57744_57815 = state_57706__$1;
(statearr_57744_57815[(2)] = null);

(statearr_57744_57815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (43))){
var state_57706__$1 = state_57706;
var statearr_57745_57816 = state_57706__$1;
(statearr_57745_57816[(2)] = null);

(statearr_57745_57816[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (29))){
var inst_57690 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57746_57817 = state_57706__$1;
(statearr_57746_57817[(2)] = inst_57690);

(statearr_57746_57817[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (44))){
var inst_57699 = (state_57706[(2)]);
var state_57706__$1 = (function (){var statearr_57747 = state_57706;
(statearr_57747[(28)] = inst_57699);

return statearr_57747;
})();
var statearr_57748_57818 = state_57706__$1;
(statearr_57748_57818[(2)] = null);

(statearr_57748_57818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (6))){
var inst_57638 = (state_57706[(29)]);
var inst_57637 = cljs.core.deref.call(null,cs);
var inst_57638__$1 = cljs.core.keys.call(null,inst_57637);
var inst_57639 = cljs.core.count.call(null,inst_57638__$1);
var inst_57640 = cljs.core.reset_BANG_.call(null,dctr,inst_57639);
var inst_57645 = cljs.core.seq.call(null,inst_57638__$1);
var inst_57646 = inst_57645;
var inst_57647 = null;
var inst_57648 = (0);
var inst_57649 = (0);
var state_57706__$1 = (function (){var statearr_57749 = state_57706;
(statearr_57749[(20)] = inst_57646);

(statearr_57749[(29)] = inst_57638__$1);

(statearr_57749[(30)] = inst_57640);

(statearr_57749[(21)] = inst_57648);

(statearr_57749[(11)] = inst_57649);

(statearr_57749[(12)] = inst_57647);

return statearr_57749;
})();
var statearr_57750_57819 = state_57706__$1;
(statearr_57750_57819[(2)] = null);

(statearr_57750_57819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (28))){
var inst_57646 = (state_57706[(20)]);
var inst_57665 = (state_57706[(25)]);
var inst_57665__$1 = cljs.core.seq.call(null,inst_57646);
var state_57706__$1 = (function (){var statearr_57751 = state_57706;
(statearr_57751[(25)] = inst_57665__$1);

return statearr_57751;
})();
if(inst_57665__$1){
var statearr_57752_57820 = state_57706__$1;
(statearr_57752_57820[(1)] = (33));

} else {
var statearr_57753_57821 = state_57706__$1;
(statearr_57753_57821[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (25))){
var inst_57648 = (state_57706[(21)]);
var inst_57649 = (state_57706[(11)]);
var inst_57651 = (inst_57649 < inst_57648);
var inst_57652 = inst_57651;
var state_57706__$1 = state_57706;
if(cljs.core.truth_(inst_57652)){
var statearr_57754_57822 = state_57706__$1;
(statearr_57754_57822[(1)] = (27));

} else {
var statearr_57755_57823 = state_57706__$1;
(statearr_57755_57823[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (34))){
var state_57706__$1 = state_57706;
var statearr_57756_57824 = state_57706__$1;
(statearr_57756_57824[(2)] = null);

(statearr_57756_57824[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (17))){
var state_57706__$1 = state_57706;
var statearr_57757_57825 = state_57706__$1;
(statearr_57757_57825[(2)] = null);

(statearr_57757_57825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (3))){
var inst_57704 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57706__$1,inst_57704);
} else {
if((state_val_57707 === (12))){
var inst_57633 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57758_57826 = state_57706__$1;
(statearr_57758_57826[(2)] = inst_57633);

(statearr_57758_57826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (2))){
var state_57706__$1 = state_57706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57706__$1,(4),ch);
} else {
if((state_val_57707 === (23))){
var state_57706__$1 = state_57706;
var statearr_57759_57827 = state_57706__$1;
(statearr_57759_57827[(2)] = null);

(statearr_57759_57827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (35))){
var inst_57688 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57760_57828 = state_57706__$1;
(statearr_57760_57828[(2)] = inst_57688);

(statearr_57760_57828[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (19))){
var inst_57607 = (state_57706[(7)]);
var inst_57611 = cljs.core.chunk_first.call(null,inst_57607);
var inst_57612 = cljs.core.chunk_rest.call(null,inst_57607);
var inst_57613 = cljs.core.count.call(null,inst_57611);
var inst_57587 = inst_57612;
var inst_57588 = inst_57611;
var inst_57589 = inst_57613;
var inst_57590 = (0);
var state_57706__$1 = (function (){var statearr_57761 = state_57706;
(statearr_57761[(14)] = inst_57588);

(statearr_57761[(15)] = inst_57589);

(statearr_57761[(16)] = inst_57587);

(statearr_57761[(17)] = inst_57590);

return statearr_57761;
})();
var statearr_57762_57829 = state_57706__$1;
(statearr_57762_57829[(2)] = null);

(statearr_57762_57829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (11))){
var inst_57607 = (state_57706[(7)]);
var inst_57587 = (state_57706[(16)]);
var inst_57607__$1 = cljs.core.seq.call(null,inst_57587);
var state_57706__$1 = (function (){var statearr_57763 = state_57706;
(statearr_57763[(7)] = inst_57607__$1);

return statearr_57763;
})();
if(inst_57607__$1){
var statearr_57764_57830 = state_57706__$1;
(statearr_57764_57830[(1)] = (16));

} else {
var statearr_57765_57831 = state_57706__$1;
(statearr_57765_57831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (9))){
var inst_57635 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57766_57832 = state_57706__$1;
(statearr_57766_57832[(2)] = inst_57635);

(statearr_57766_57832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (5))){
var inst_57585 = cljs.core.deref.call(null,cs);
var inst_57586 = cljs.core.seq.call(null,inst_57585);
var inst_57587 = inst_57586;
var inst_57588 = null;
var inst_57589 = (0);
var inst_57590 = (0);
var state_57706__$1 = (function (){var statearr_57767 = state_57706;
(statearr_57767[(14)] = inst_57588);

(statearr_57767[(15)] = inst_57589);

(statearr_57767[(16)] = inst_57587);

(statearr_57767[(17)] = inst_57590);

return statearr_57767;
})();
var statearr_57768_57833 = state_57706__$1;
(statearr_57768_57833[(2)] = null);

(statearr_57768_57833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (14))){
var state_57706__$1 = state_57706;
var statearr_57769_57834 = state_57706__$1;
(statearr_57769_57834[(2)] = null);

(statearr_57769_57834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (45))){
var inst_57696 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57770_57835 = state_57706__$1;
(statearr_57770_57835[(2)] = inst_57696);

(statearr_57770_57835[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (26))){
var inst_57638 = (state_57706[(29)]);
var inst_57692 = (state_57706[(2)]);
var inst_57693 = cljs.core.seq.call(null,inst_57638);
var state_57706__$1 = (function (){var statearr_57771 = state_57706;
(statearr_57771[(31)] = inst_57692);

return statearr_57771;
})();
if(inst_57693){
var statearr_57772_57836 = state_57706__$1;
(statearr_57772_57836[(1)] = (42));

} else {
var statearr_57773_57837 = state_57706__$1;
(statearr_57773_57837[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (16))){
var inst_57607 = (state_57706[(7)]);
var inst_57609 = cljs.core.chunked_seq_QMARK_.call(null,inst_57607);
var state_57706__$1 = state_57706;
if(inst_57609){
var statearr_57774_57838 = state_57706__$1;
(statearr_57774_57838[(1)] = (19));

} else {
var statearr_57775_57839 = state_57706__$1;
(statearr_57775_57839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (38))){
var inst_57685 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57776_57840 = state_57706__$1;
(statearr_57776_57840[(2)] = inst_57685);

(statearr_57776_57840[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (30))){
var state_57706__$1 = state_57706;
var statearr_57777_57841 = state_57706__$1;
(statearr_57777_57841[(2)] = null);

(statearr_57777_57841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (10))){
var inst_57588 = (state_57706[(14)]);
var inst_57590 = (state_57706[(17)]);
var inst_57596 = cljs.core._nth.call(null,inst_57588,inst_57590);
var inst_57597 = cljs.core.nth.call(null,inst_57596,(0),null);
var inst_57598 = cljs.core.nth.call(null,inst_57596,(1),null);
var state_57706__$1 = (function (){var statearr_57778 = state_57706;
(statearr_57778[(26)] = inst_57597);

return statearr_57778;
})();
if(cljs.core.truth_(inst_57598)){
var statearr_57779_57842 = state_57706__$1;
(statearr_57779_57842[(1)] = (13));

} else {
var statearr_57780_57843 = state_57706__$1;
(statearr_57780_57843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (18))){
var inst_57631 = (state_57706[(2)]);
var state_57706__$1 = state_57706;
var statearr_57781_57844 = state_57706__$1;
(statearr_57781_57844[(2)] = inst_57631);

(statearr_57781_57844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (42))){
var state_57706__$1 = state_57706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57706__$1,(45),dchan);
} else {
if((state_val_57707 === (37))){
var inst_57665 = (state_57706[(25)]);
var inst_57674 = (state_57706[(23)]);
var inst_57578 = (state_57706[(10)]);
var inst_57674__$1 = cljs.core.first.call(null,inst_57665);
var inst_57675 = cljs.core.async.put_BANG_.call(null,inst_57674__$1,inst_57578,done);
var state_57706__$1 = (function (){var statearr_57782 = state_57706;
(statearr_57782[(23)] = inst_57674__$1);

return statearr_57782;
})();
if(cljs.core.truth_(inst_57675)){
var statearr_57783_57845 = state_57706__$1;
(statearr_57783_57845[(1)] = (39));

} else {
var statearr_57784_57846 = state_57706__$1;
(statearr_57784_57846[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57707 === (8))){
var inst_57589 = (state_57706[(15)]);
var inst_57590 = (state_57706[(17)]);
var inst_57592 = (inst_57590 < inst_57589);
var inst_57593 = inst_57592;
var state_57706__$1 = state_57706;
if(cljs.core.truth_(inst_57593)){
var statearr_57785_57847 = state_57706__$1;
(statearr_57785_57847[(1)] = (10));

} else {
var statearr_57786_57848 = state_57706__$1;
(statearr_57786_57848[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___57794,cs,m,dchan,dctr,done))
;
return ((function (switch__8442__auto__,c__8504__auto___57794,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8443__auto__ = null;
var cljs$core$async$mult_$_state_machine__8443__auto____0 = (function (){
var statearr_57790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57790[(0)] = cljs$core$async$mult_$_state_machine__8443__auto__);

(statearr_57790[(1)] = (1));

return statearr_57790;
});
var cljs$core$async$mult_$_state_machine__8443__auto____1 = (function (state_57706){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_57706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e57791){if((e57791 instanceof Object)){
var ex__8446__auto__ = e57791;
var statearr_57792_57849 = state_57706;
(statearr_57792_57849[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57850 = state_57706;
state_57706 = G__57850;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8443__auto__ = function(state_57706){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8443__auto____1.call(this,state_57706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8443__auto____0;
cljs$core$async$mult_$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8443__auto____1;
return cljs$core$async$mult_$_state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___57794,cs,m,dchan,dctr,done))
})();
var state__8506__auto__ = (function (){var statearr_57793 = f__8505__auto__.call(null);
(statearr_57793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___57794);

return statearr_57793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___57794,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__57852 = arguments.length;
switch (G__57852) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj57855 = {};
return obj57855;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5349__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5349__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57860){
var map__57861 = p__57860;
var map__57861__$1 = ((cljs.core.seq_QMARK_.call(null,map__57861))?cljs.core.apply.call(null,cljs.core.hash_map,map__57861):map__57861);
var opts = map__57861__$1;
var statearr_57862_57865 = state;
(statearr_57862_57865[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__57861,map__57861__$1,opts){
return (function (val){
var statearr_57863_57866 = state;
(statearr_57863_57866[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__57861,map__57861__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_57864_57867 = state;
(statearr_57864_57867[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57856){
var G__57857 = cljs.core.first.call(null,seq57856);
var seq57856__$1 = cljs.core.next.call(null,seq57856);
var G__57858 = cljs.core.first.call(null,seq57856__$1);
var seq57856__$2 = cljs.core.next.call(null,seq57856__$1);
var G__57859 = cljs.core.first.call(null,seq57856__$2);
var seq57856__$3 = cljs.core.next.call(null,seq57856__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57857,G__57858,G__57859,seq57856__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t57987 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t57987 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57988){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57988 = meta57988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t57987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57989,meta57988__$1){
var self__ = this;
var _57989__$1 = this;
return (new cljs.core.async.t57987(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57988__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t57987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57989){
var self__ = this;
var _57989__$1 = this;
return self__.meta57988;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t57987.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t57987.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t57987.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t57987.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t57987.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t57987.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t57987.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t57987.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t57987.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57988","meta57988",-1374168456,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t57987.cljs$lang$type = true;

cljs.core.async.t57987.cljs$lang$ctorStr = "cljs.core.async/t57987";

cljs.core.async.t57987.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t57987");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t57987 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t57987(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57988){
return (new cljs.core.async.t57987(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57988));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t57987(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8504__auto___58106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___58106,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___58106,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_58059){
var state_val_58060 = (state_58059[(1)]);
if((state_val_58060 === (7))){
var inst_58003 = (state_58059[(7)]);
var inst_58008 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58003);
var state_58059__$1 = state_58059;
var statearr_58061_58107 = state_58059__$1;
(statearr_58061_58107[(2)] = inst_58008);

(statearr_58061_58107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (20))){
var inst_58018 = (state_58059[(8)]);
var state_58059__$1 = state_58059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58059__$1,(23),out,inst_58018);
} else {
if((state_val_58060 === (1))){
var inst_57993 = (state_58059[(9)]);
var inst_57993__$1 = calc_state.call(null);
var inst_57994 = cljs.core.seq_QMARK_.call(null,inst_57993__$1);
var state_58059__$1 = (function (){var statearr_58062 = state_58059;
(statearr_58062[(9)] = inst_57993__$1);

return statearr_58062;
})();
if(inst_57994){
var statearr_58063_58108 = state_58059__$1;
(statearr_58063_58108[(1)] = (2));

} else {
var statearr_58064_58109 = state_58059__$1;
(statearr_58064_58109[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (24))){
var inst_58011 = (state_58059[(10)]);
var inst_58003 = inst_58011;
var state_58059__$1 = (function (){var statearr_58065 = state_58059;
(statearr_58065[(7)] = inst_58003);

return statearr_58065;
})();
var statearr_58066_58110 = state_58059__$1;
(statearr_58066_58110[(2)] = null);

(statearr_58066_58110[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (4))){
var inst_57993 = (state_58059[(9)]);
var inst_57999 = (state_58059[(2)]);
var inst_58000 = cljs.core.get.call(null,inst_57999,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58001 = cljs.core.get.call(null,inst_57999,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58002 = cljs.core.get.call(null,inst_57999,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58003 = inst_57993;
var state_58059__$1 = (function (){var statearr_58067 = state_58059;
(statearr_58067[(11)] = inst_58001);

(statearr_58067[(12)] = inst_58002);

(statearr_58067[(7)] = inst_58003);

(statearr_58067[(13)] = inst_58000);

return statearr_58067;
})();
var statearr_58068_58111 = state_58059__$1;
(statearr_58068_58111[(2)] = null);

(statearr_58068_58111[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (15))){
var state_58059__$1 = state_58059;
var statearr_58069_58112 = state_58059__$1;
(statearr_58069_58112[(2)] = null);

(statearr_58069_58112[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (21))){
var inst_58011 = (state_58059[(10)]);
var inst_58003 = inst_58011;
var state_58059__$1 = (function (){var statearr_58070 = state_58059;
(statearr_58070[(7)] = inst_58003);

return statearr_58070;
})();
var statearr_58071_58113 = state_58059__$1;
(statearr_58071_58113[(2)] = null);

(statearr_58071_58113[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (13))){
var inst_58055 = (state_58059[(2)]);
var state_58059__$1 = state_58059;
var statearr_58072_58114 = state_58059__$1;
(statearr_58072_58114[(2)] = inst_58055);

(statearr_58072_58114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (22))){
var inst_58053 = (state_58059[(2)]);
var state_58059__$1 = state_58059;
var statearr_58073_58115 = state_58059__$1;
(statearr_58073_58115[(2)] = inst_58053);

(statearr_58073_58115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (6))){
var inst_58057 = (state_58059[(2)]);
var state_58059__$1 = state_58059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58059__$1,inst_58057);
} else {
if((state_val_58060 === (25))){
var state_58059__$1 = state_58059;
var statearr_58074_58116 = state_58059__$1;
(statearr_58074_58116[(2)] = null);

(statearr_58074_58116[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (17))){
var inst_58033 = (state_58059[(14)]);
var state_58059__$1 = state_58059;
var statearr_58075_58117 = state_58059__$1;
(statearr_58075_58117[(2)] = inst_58033);

(statearr_58075_58117[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (3))){
var inst_57993 = (state_58059[(9)]);
var state_58059__$1 = state_58059;
var statearr_58076_58118 = state_58059__$1;
(statearr_58076_58118[(2)] = inst_57993);

(statearr_58076_58118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (12))){
var inst_58033 = (state_58059[(14)]);
var inst_58012 = (state_58059[(15)]);
var inst_58019 = (state_58059[(16)]);
var inst_58033__$1 = inst_58012.call(null,inst_58019);
var state_58059__$1 = (function (){var statearr_58077 = state_58059;
(statearr_58077[(14)] = inst_58033__$1);

return statearr_58077;
})();
if(cljs.core.truth_(inst_58033__$1)){
var statearr_58078_58119 = state_58059__$1;
(statearr_58078_58119[(1)] = (17));

} else {
var statearr_58079_58120 = state_58059__$1;
(statearr_58079_58120[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (2))){
var inst_57993 = (state_58059[(9)]);
var inst_57996 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57993);
var state_58059__$1 = state_58059;
var statearr_58080_58121 = state_58059__$1;
(statearr_58080_58121[(2)] = inst_57996);

(statearr_58080_58121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (23))){
var inst_58044 = (state_58059[(2)]);
var state_58059__$1 = state_58059;
if(cljs.core.truth_(inst_58044)){
var statearr_58081_58122 = state_58059__$1;
(statearr_58081_58122[(1)] = (24));

} else {
var statearr_58082_58123 = state_58059__$1;
(statearr_58082_58123[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (19))){
var inst_58041 = (state_58059[(2)]);
var state_58059__$1 = state_58059;
if(cljs.core.truth_(inst_58041)){
var statearr_58083_58124 = state_58059__$1;
(statearr_58083_58124[(1)] = (20));

} else {
var statearr_58084_58125 = state_58059__$1;
(statearr_58084_58125[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (11))){
var inst_58018 = (state_58059[(8)]);
var inst_58024 = (inst_58018 == null);
var state_58059__$1 = state_58059;
if(cljs.core.truth_(inst_58024)){
var statearr_58085_58126 = state_58059__$1;
(statearr_58085_58126[(1)] = (14));

} else {
var statearr_58086_58127 = state_58059__$1;
(statearr_58086_58127[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (9))){
var inst_58011 = (state_58059[(10)]);
var inst_58011__$1 = (state_58059[(2)]);
var inst_58012 = cljs.core.get.call(null,inst_58011__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58013 = cljs.core.get.call(null,inst_58011__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58014 = cljs.core.get.call(null,inst_58011__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58059__$1 = (function (){var statearr_58087 = state_58059;
(statearr_58087[(17)] = inst_58013);

(statearr_58087[(15)] = inst_58012);

(statearr_58087[(10)] = inst_58011__$1);

return statearr_58087;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_58059__$1,(10),inst_58014);
} else {
if((state_val_58060 === (5))){
var inst_58003 = (state_58059[(7)]);
var inst_58006 = cljs.core.seq_QMARK_.call(null,inst_58003);
var state_58059__$1 = state_58059;
if(inst_58006){
var statearr_58088_58128 = state_58059__$1;
(statearr_58088_58128[(1)] = (7));

} else {
var statearr_58089_58129 = state_58059__$1;
(statearr_58089_58129[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (14))){
var inst_58019 = (state_58059[(16)]);
var inst_58026 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_58019);
var state_58059__$1 = state_58059;
var statearr_58090_58130 = state_58059__$1;
(statearr_58090_58130[(2)] = inst_58026);

(statearr_58090_58130[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (26))){
var inst_58049 = (state_58059[(2)]);
var state_58059__$1 = state_58059;
var statearr_58091_58131 = state_58059__$1;
(statearr_58091_58131[(2)] = inst_58049);

(statearr_58091_58131[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (16))){
var inst_58029 = (state_58059[(2)]);
var inst_58030 = calc_state.call(null);
var inst_58003 = inst_58030;
var state_58059__$1 = (function (){var statearr_58092 = state_58059;
(statearr_58092[(18)] = inst_58029);

(statearr_58092[(7)] = inst_58003);

return statearr_58092;
})();
var statearr_58093_58132 = state_58059__$1;
(statearr_58093_58132[(2)] = null);

(statearr_58093_58132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (10))){
var inst_58018 = (state_58059[(8)]);
var inst_58019 = (state_58059[(16)]);
var inst_58017 = (state_58059[(2)]);
var inst_58018__$1 = cljs.core.nth.call(null,inst_58017,(0),null);
var inst_58019__$1 = cljs.core.nth.call(null,inst_58017,(1),null);
var inst_58020 = (inst_58018__$1 == null);
var inst_58021 = cljs.core._EQ_.call(null,inst_58019__$1,change);
var inst_58022 = (inst_58020) || (inst_58021);
var state_58059__$1 = (function (){var statearr_58094 = state_58059;
(statearr_58094[(8)] = inst_58018__$1);

(statearr_58094[(16)] = inst_58019__$1);

return statearr_58094;
})();
if(cljs.core.truth_(inst_58022)){
var statearr_58095_58133 = state_58059__$1;
(statearr_58095_58133[(1)] = (11));

} else {
var statearr_58096_58134 = state_58059__$1;
(statearr_58096_58134[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (18))){
var inst_58013 = (state_58059[(17)]);
var inst_58012 = (state_58059[(15)]);
var inst_58019 = (state_58059[(16)]);
var inst_58036 = cljs.core.empty_QMARK_.call(null,inst_58012);
var inst_58037 = inst_58013.call(null,inst_58019);
var inst_58038 = cljs.core.not.call(null,inst_58037);
var inst_58039 = (inst_58036) && (inst_58038);
var state_58059__$1 = state_58059;
var statearr_58097_58135 = state_58059__$1;
(statearr_58097_58135[(2)] = inst_58039);

(statearr_58097_58135[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58060 === (8))){
var inst_58003 = (state_58059[(7)]);
var state_58059__$1 = state_58059;
var statearr_58098_58136 = state_58059__$1;
(statearr_58098_58136[(2)] = inst_58003);

(statearr_58098_58136[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___58106,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8442__auto__,c__8504__auto___58106,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8443__auto__ = null;
var cljs$core$async$mix_$_state_machine__8443__auto____0 = (function (){
var statearr_58102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58102[(0)] = cljs$core$async$mix_$_state_machine__8443__auto__);

(statearr_58102[(1)] = (1));

return statearr_58102;
});
var cljs$core$async$mix_$_state_machine__8443__auto____1 = (function (state_58059){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_58059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e58103){if((e58103 instanceof Object)){
var ex__8446__auto__ = e58103;
var statearr_58104_58137 = state_58059;
(statearr_58104_58137[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58138 = state_58059;
state_58059 = G__58138;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8443__auto__ = function(state_58059){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8443__auto____1.call(this,state_58059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8443__auto____0;
cljs$core$async$mix_$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8443__auto____1;
return cljs$core$async$mix_$_state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___58106,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8506__auto__ = (function (){var statearr_58105 = f__8505__auto__.call(null);
(statearr_58105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___58106);

return statearr_58105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___58106,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj58140 = {};
return obj58140;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__58142 = arguments.length;
switch (G__58142) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__58146 = arguments.length;
switch (G__58146) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4309__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4309__auto__,mults){
return (function (p1__58144_SHARP_){
if(cljs.core.truth_(p1__58144_SHARP_.call(null,topic))){
return p1__58144_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__58144_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4309__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t58147 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t58147 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58148){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58148 = meta58148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t58147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_58149,meta58148__$1){
var self__ = this;
var _58149__$1 = this;
return (new cljs.core.async.t58147(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58148__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t58147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_58149){
var self__ = this;
var _58149__$1 = this;
return self__.meta58148;
});})(mults,ensure_mult))
;

cljs.core.async.t58147.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t58147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t58147.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t58147.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t58147.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t58147.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t58147.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t58147.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58148","meta58148",-1452383241,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t58147.cljs$lang$type = true;

cljs.core.async.t58147.cljs$lang$ctorStr = "cljs.core.async/t58147";

cljs.core.async.t58147.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t58147");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t58147 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t58147(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58148){
return (new cljs.core.async.t58147(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58148));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t58147(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8504__auto___58270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___58270,mults,ensure_mult,p){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___58270,mults,ensure_mult,p){
return (function (state_58221){
var state_val_58222 = (state_58221[(1)]);
if((state_val_58222 === (7))){
var inst_58217 = (state_58221[(2)]);
var state_58221__$1 = state_58221;
var statearr_58223_58271 = state_58221__$1;
(statearr_58223_58271[(2)] = inst_58217);

(statearr_58223_58271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (20))){
var state_58221__$1 = state_58221;
var statearr_58224_58272 = state_58221__$1;
(statearr_58224_58272[(2)] = null);

(statearr_58224_58272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (1))){
var state_58221__$1 = state_58221;
var statearr_58225_58273 = state_58221__$1;
(statearr_58225_58273[(2)] = null);

(statearr_58225_58273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (24))){
var inst_58200 = (state_58221[(7)]);
var inst_58209 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_58200);
var state_58221__$1 = state_58221;
var statearr_58226_58274 = state_58221__$1;
(statearr_58226_58274[(2)] = inst_58209);

(statearr_58226_58274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (4))){
var inst_58152 = (state_58221[(8)]);
var inst_58152__$1 = (state_58221[(2)]);
var inst_58153 = (inst_58152__$1 == null);
var state_58221__$1 = (function (){var statearr_58227 = state_58221;
(statearr_58227[(8)] = inst_58152__$1);

return statearr_58227;
})();
if(cljs.core.truth_(inst_58153)){
var statearr_58228_58275 = state_58221__$1;
(statearr_58228_58275[(1)] = (5));

} else {
var statearr_58229_58276 = state_58221__$1;
(statearr_58229_58276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (15))){
var inst_58194 = (state_58221[(2)]);
var state_58221__$1 = state_58221;
var statearr_58230_58277 = state_58221__$1;
(statearr_58230_58277[(2)] = inst_58194);

(statearr_58230_58277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (21))){
var inst_58214 = (state_58221[(2)]);
var state_58221__$1 = (function (){var statearr_58231 = state_58221;
(statearr_58231[(9)] = inst_58214);

return statearr_58231;
})();
var statearr_58232_58278 = state_58221__$1;
(statearr_58232_58278[(2)] = null);

(statearr_58232_58278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (13))){
var inst_58176 = (state_58221[(10)]);
var inst_58178 = cljs.core.chunked_seq_QMARK_.call(null,inst_58176);
var state_58221__$1 = state_58221;
if(inst_58178){
var statearr_58233_58279 = state_58221__$1;
(statearr_58233_58279[(1)] = (16));

} else {
var statearr_58234_58280 = state_58221__$1;
(statearr_58234_58280[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (22))){
var inst_58206 = (state_58221[(2)]);
var state_58221__$1 = state_58221;
if(cljs.core.truth_(inst_58206)){
var statearr_58235_58281 = state_58221__$1;
(statearr_58235_58281[(1)] = (23));

} else {
var statearr_58236_58282 = state_58221__$1;
(statearr_58236_58282[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (6))){
var inst_58152 = (state_58221[(8)]);
var inst_58202 = (state_58221[(11)]);
var inst_58200 = (state_58221[(7)]);
var inst_58200__$1 = topic_fn.call(null,inst_58152);
var inst_58201 = cljs.core.deref.call(null,mults);
var inst_58202__$1 = cljs.core.get.call(null,inst_58201,inst_58200__$1);
var state_58221__$1 = (function (){var statearr_58237 = state_58221;
(statearr_58237[(11)] = inst_58202__$1);

(statearr_58237[(7)] = inst_58200__$1);

return statearr_58237;
})();
if(cljs.core.truth_(inst_58202__$1)){
var statearr_58238_58283 = state_58221__$1;
(statearr_58238_58283[(1)] = (19));

} else {
var statearr_58239_58284 = state_58221__$1;
(statearr_58239_58284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (25))){
var inst_58211 = (state_58221[(2)]);
var state_58221__$1 = state_58221;
var statearr_58240_58285 = state_58221__$1;
(statearr_58240_58285[(2)] = inst_58211);

(statearr_58240_58285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (17))){
var inst_58176 = (state_58221[(10)]);
var inst_58185 = cljs.core.first.call(null,inst_58176);
var inst_58186 = cljs.core.async.muxch_STAR_.call(null,inst_58185);
var inst_58187 = cljs.core.async.close_BANG_.call(null,inst_58186);
var inst_58188 = cljs.core.next.call(null,inst_58176);
var inst_58162 = inst_58188;
var inst_58163 = null;
var inst_58164 = (0);
var inst_58165 = (0);
var state_58221__$1 = (function (){var statearr_58241 = state_58221;
(statearr_58241[(12)] = inst_58162);

(statearr_58241[(13)] = inst_58164);

(statearr_58241[(14)] = inst_58165);

(statearr_58241[(15)] = inst_58187);

(statearr_58241[(16)] = inst_58163);

return statearr_58241;
})();
var statearr_58242_58286 = state_58221__$1;
(statearr_58242_58286[(2)] = null);

(statearr_58242_58286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (3))){
var inst_58219 = (state_58221[(2)]);
var state_58221__$1 = state_58221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58221__$1,inst_58219);
} else {
if((state_val_58222 === (12))){
var inst_58196 = (state_58221[(2)]);
var state_58221__$1 = state_58221;
var statearr_58243_58287 = state_58221__$1;
(statearr_58243_58287[(2)] = inst_58196);

(statearr_58243_58287[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (2))){
var state_58221__$1 = state_58221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58221__$1,(4),ch);
} else {
if((state_val_58222 === (23))){
var state_58221__$1 = state_58221;
var statearr_58244_58288 = state_58221__$1;
(statearr_58244_58288[(2)] = null);

(statearr_58244_58288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (19))){
var inst_58152 = (state_58221[(8)]);
var inst_58202 = (state_58221[(11)]);
var inst_58204 = cljs.core.async.muxch_STAR_.call(null,inst_58202);
var state_58221__$1 = state_58221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58221__$1,(22),inst_58204,inst_58152);
} else {
if((state_val_58222 === (11))){
var inst_58176 = (state_58221[(10)]);
var inst_58162 = (state_58221[(12)]);
var inst_58176__$1 = cljs.core.seq.call(null,inst_58162);
var state_58221__$1 = (function (){var statearr_58245 = state_58221;
(statearr_58245[(10)] = inst_58176__$1);

return statearr_58245;
})();
if(inst_58176__$1){
var statearr_58246_58289 = state_58221__$1;
(statearr_58246_58289[(1)] = (13));

} else {
var statearr_58247_58290 = state_58221__$1;
(statearr_58247_58290[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (9))){
var inst_58198 = (state_58221[(2)]);
var state_58221__$1 = state_58221;
var statearr_58248_58291 = state_58221__$1;
(statearr_58248_58291[(2)] = inst_58198);

(statearr_58248_58291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (5))){
var inst_58159 = cljs.core.deref.call(null,mults);
var inst_58160 = cljs.core.vals.call(null,inst_58159);
var inst_58161 = cljs.core.seq.call(null,inst_58160);
var inst_58162 = inst_58161;
var inst_58163 = null;
var inst_58164 = (0);
var inst_58165 = (0);
var state_58221__$1 = (function (){var statearr_58249 = state_58221;
(statearr_58249[(12)] = inst_58162);

(statearr_58249[(13)] = inst_58164);

(statearr_58249[(14)] = inst_58165);

(statearr_58249[(16)] = inst_58163);

return statearr_58249;
})();
var statearr_58250_58292 = state_58221__$1;
(statearr_58250_58292[(2)] = null);

(statearr_58250_58292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (14))){
var state_58221__$1 = state_58221;
var statearr_58254_58293 = state_58221__$1;
(statearr_58254_58293[(2)] = null);

(statearr_58254_58293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (16))){
var inst_58176 = (state_58221[(10)]);
var inst_58180 = cljs.core.chunk_first.call(null,inst_58176);
var inst_58181 = cljs.core.chunk_rest.call(null,inst_58176);
var inst_58182 = cljs.core.count.call(null,inst_58180);
var inst_58162 = inst_58181;
var inst_58163 = inst_58180;
var inst_58164 = inst_58182;
var inst_58165 = (0);
var state_58221__$1 = (function (){var statearr_58255 = state_58221;
(statearr_58255[(12)] = inst_58162);

(statearr_58255[(13)] = inst_58164);

(statearr_58255[(14)] = inst_58165);

(statearr_58255[(16)] = inst_58163);

return statearr_58255;
})();
var statearr_58256_58294 = state_58221__$1;
(statearr_58256_58294[(2)] = null);

(statearr_58256_58294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (10))){
var inst_58162 = (state_58221[(12)]);
var inst_58164 = (state_58221[(13)]);
var inst_58165 = (state_58221[(14)]);
var inst_58163 = (state_58221[(16)]);
var inst_58170 = cljs.core._nth.call(null,inst_58163,inst_58165);
var inst_58171 = cljs.core.async.muxch_STAR_.call(null,inst_58170);
var inst_58172 = cljs.core.async.close_BANG_.call(null,inst_58171);
var inst_58173 = (inst_58165 + (1));
var tmp58251 = inst_58162;
var tmp58252 = inst_58164;
var tmp58253 = inst_58163;
var inst_58162__$1 = tmp58251;
var inst_58163__$1 = tmp58253;
var inst_58164__$1 = tmp58252;
var inst_58165__$1 = inst_58173;
var state_58221__$1 = (function (){var statearr_58257 = state_58221;
(statearr_58257[(17)] = inst_58172);

(statearr_58257[(12)] = inst_58162__$1);

(statearr_58257[(13)] = inst_58164__$1);

(statearr_58257[(14)] = inst_58165__$1);

(statearr_58257[(16)] = inst_58163__$1);

return statearr_58257;
})();
var statearr_58258_58295 = state_58221__$1;
(statearr_58258_58295[(2)] = null);

(statearr_58258_58295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (18))){
var inst_58191 = (state_58221[(2)]);
var state_58221__$1 = state_58221;
var statearr_58259_58296 = state_58221__$1;
(statearr_58259_58296[(2)] = inst_58191);

(statearr_58259_58296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58222 === (8))){
var inst_58164 = (state_58221[(13)]);
var inst_58165 = (state_58221[(14)]);
var inst_58167 = (inst_58165 < inst_58164);
var inst_58168 = inst_58167;
var state_58221__$1 = state_58221;
if(cljs.core.truth_(inst_58168)){
var statearr_58260_58297 = state_58221__$1;
(statearr_58260_58297[(1)] = (10));

} else {
var statearr_58261_58298 = state_58221__$1;
(statearr_58261_58298[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___58270,mults,ensure_mult,p))
;
return ((function (switch__8442__auto__,c__8504__auto___58270,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_58265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58265[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_58265[(1)] = (1));

return statearr_58265;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_58221){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_58221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e58266){if((e58266 instanceof Object)){
var ex__8446__auto__ = e58266;
var statearr_58267_58299 = state_58221;
(statearr_58267_58299[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58300 = state_58221;
state_58221 = G__58300;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_58221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_58221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___58270,mults,ensure_mult,p))
})();
var state__8506__auto__ = (function (){var statearr_58268 = f__8505__auto__.call(null);
(statearr_58268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___58270);

return statearr_58268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___58270,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__58302 = arguments.length;
switch (G__58302) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__58305 = arguments.length;
switch (G__58305) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__58308 = arguments.length;
switch (G__58308) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8504__auto___58378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___58378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___58378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_58347){
var state_val_58348 = (state_58347[(1)]);
if((state_val_58348 === (7))){
var state_58347__$1 = state_58347;
var statearr_58349_58379 = state_58347__$1;
(statearr_58349_58379[(2)] = null);

(statearr_58349_58379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (1))){
var state_58347__$1 = state_58347;
var statearr_58350_58380 = state_58347__$1;
(statearr_58350_58380[(2)] = null);

(statearr_58350_58380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (4))){
var inst_58311 = (state_58347[(7)]);
var inst_58313 = (inst_58311 < cnt);
var state_58347__$1 = state_58347;
if(cljs.core.truth_(inst_58313)){
var statearr_58351_58381 = state_58347__$1;
(statearr_58351_58381[(1)] = (6));

} else {
var statearr_58352_58382 = state_58347__$1;
(statearr_58352_58382[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (15))){
var inst_58343 = (state_58347[(2)]);
var state_58347__$1 = state_58347;
var statearr_58353_58383 = state_58347__$1;
(statearr_58353_58383[(2)] = inst_58343);

(statearr_58353_58383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (13))){
var inst_58336 = cljs.core.async.close_BANG_.call(null,out);
var state_58347__$1 = state_58347;
var statearr_58354_58384 = state_58347__$1;
(statearr_58354_58384[(2)] = inst_58336);

(statearr_58354_58384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (6))){
var state_58347__$1 = state_58347;
var statearr_58355_58385 = state_58347__$1;
(statearr_58355_58385[(2)] = null);

(statearr_58355_58385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (3))){
var inst_58345 = (state_58347[(2)]);
var state_58347__$1 = state_58347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58347__$1,inst_58345);
} else {
if((state_val_58348 === (12))){
var inst_58333 = (state_58347[(8)]);
var inst_58333__$1 = (state_58347[(2)]);
var inst_58334 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_58333__$1);
var state_58347__$1 = (function (){var statearr_58356 = state_58347;
(statearr_58356[(8)] = inst_58333__$1);

return statearr_58356;
})();
if(cljs.core.truth_(inst_58334)){
var statearr_58357_58386 = state_58347__$1;
(statearr_58357_58386[(1)] = (13));

} else {
var statearr_58358_58387 = state_58347__$1;
(statearr_58358_58387[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (2))){
var inst_58310 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_58311 = (0);
var state_58347__$1 = (function (){var statearr_58359 = state_58347;
(statearr_58359[(9)] = inst_58310);

(statearr_58359[(7)] = inst_58311);

return statearr_58359;
})();
var statearr_58360_58388 = state_58347__$1;
(statearr_58360_58388[(2)] = null);

(statearr_58360_58388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (11))){
var inst_58311 = (state_58347[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_58347,(10),Object,null,(9));
var inst_58320 = chs__$1.call(null,inst_58311);
var inst_58321 = done.call(null,inst_58311);
var inst_58322 = cljs.core.async.take_BANG_.call(null,inst_58320,inst_58321);
var state_58347__$1 = state_58347;
var statearr_58361_58389 = state_58347__$1;
(statearr_58361_58389[(2)] = inst_58322);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58347__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (9))){
var inst_58311 = (state_58347[(7)]);
var inst_58324 = (state_58347[(2)]);
var inst_58325 = (inst_58311 + (1));
var inst_58311__$1 = inst_58325;
var state_58347__$1 = (function (){var statearr_58362 = state_58347;
(statearr_58362[(10)] = inst_58324);

(statearr_58362[(7)] = inst_58311__$1);

return statearr_58362;
})();
var statearr_58363_58390 = state_58347__$1;
(statearr_58363_58390[(2)] = null);

(statearr_58363_58390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (5))){
var inst_58331 = (state_58347[(2)]);
var state_58347__$1 = (function (){var statearr_58364 = state_58347;
(statearr_58364[(11)] = inst_58331);

return statearr_58364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58347__$1,(12),dchan);
} else {
if((state_val_58348 === (14))){
var inst_58333 = (state_58347[(8)]);
var inst_58338 = cljs.core.apply.call(null,f,inst_58333);
var state_58347__$1 = state_58347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58347__$1,(16),out,inst_58338);
} else {
if((state_val_58348 === (16))){
var inst_58340 = (state_58347[(2)]);
var state_58347__$1 = (function (){var statearr_58365 = state_58347;
(statearr_58365[(12)] = inst_58340);

return statearr_58365;
})();
var statearr_58366_58391 = state_58347__$1;
(statearr_58366_58391[(2)] = null);

(statearr_58366_58391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (10))){
var inst_58315 = (state_58347[(2)]);
var inst_58316 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_58347__$1 = (function (){var statearr_58367 = state_58347;
(statearr_58367[(13)] = inst_58315);

return statearr_58367;
})();
var statearr_58368_58392 = state_58347__$1;
(statearr_58368_58392[(2)] = inst_58316);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58347__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58348 === (8))){
var inst_58329 = (state_58347[(2)]);
var state_58347__$1 = state_58347;
var statearr_58369_58393 = state_58347__$1;
(statearr_58369_58393[(2)] = inst_58329);

(statearr_58369_58393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___58378,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8442__auto__,c__8504__auto___58378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_58373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58373[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_58373[(1)] = (1));

return statearr_58373;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_58347){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_58347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e58374){if((e58374 instanceof Object)){
var ex__8446__auto__ = e58374;
var statearr_58375_58394 = state_58347;
(statearr_58375_58394[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58395 = state_58347;
state_58347 = G__58395;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_58347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_58347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___58378,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8506__auto__ = (function (){var statearr_58376 = f__8505__auto__.call(null);
(statearr_58376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___58378);

return statearr_58376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___58378,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__58398 = arguments.length;
switch (G__58398) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8504__auto___58453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___58453,out){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___58453,out){
return (function (state_58428){
var state_val_58429 = (state_58428[(1)]);
if((state_val_58429 === (7))){
var inst_58408 = (state_58428[(7)]);
var inst_58407 = (state_58428[(8)]);
var inst_58407__$1 = (state_58428[(2)]);
var inst_58408__$1 = cljs.core.nth.call(null,inst_58407__$1,(0),null);
var inst_58409 = cljs.core.nth.call(null,inst_58407__$1,(1),null);
var inst_58410 = (inst_58408__$1 == null);
var state_58428__$1 = (function (){var statearr_58430 = state_58428;
(statearr_58430[(7)] = inst_58408__$1);

(statearr_58430[(8)] = inst_58407__$1);

(statearr_58430[(9)] = inst_58409);

return statearr_58430;
})();
if(cljs.core.truth_(inst_58410)){
var statearr_58431_58454 = state_58428__$1;
(statearr_58431_58454[(1)] = (8));

} else {
var statearr_58432_58455 = state_58428__$1;
(statearr_58432_58455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (1))){
var inst_58399 = cljs.core.vec.call(null,chs);
var inst_58400 = inst_58399;
var state_58428__$1 = (function (){var statearr_58433 = state_58428;
(statearr_58433[(10)] = inst_58400);

return statearr_58433;
})();
var statearr_58434_58456 = state_58428__$1;
(statearr_58434_58456[(2)] = null);

(statearr_58434_58456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (4))){
var inst_58400 = (state_58428[(10)]);
var state_58428__$1 = state_58428;
return cljs.core.async.ioc_alts_BANG_.call(null,state_58428__$1,(7),inst_58400);
} else {
if((state_val_58429 === (6))){
var inst_58424 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
var statearr_58435_58457 = state_58428__$1;
(statearr_58435_58457[(2)] = inst_58424);

(statearr_58435_58457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (3))){
var inst_58426 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58428__$1,inst_58426);
} else {
if((state_val_58429 === (2))){
var inst_58400 = (state_58428[(10)]);
var inst_58402 = cljs.core.count.call(null,inst_58400);
var inst_58403 = (inst_58402 > (0));
var state_58428__$1 = state_58428;
if(cljs.core.truth_(inst_58403)){
var statearr_58437_58458 = state_58428__$1;
(statearr_58437_58458[(1)] = (4));

} else {
var statearr_58438_58459 = state_58428__$1;
(statearr_58438_58459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (11))){
var inst_58400 = (state_58428[(10)]);
var inst_58417 = (state_58428[(2)]);
var tmp58436 = inst_58400;
var inst_58400__$1 = tmp58436;
var state_58428__$1 = (function (){var statearr_58439 = state_58428;
(statearr_58439[(11)] = inst_58417);

(statearr_58439[(10)] = inst_58400__$1);

return statearr_58439;
})();
var statearr_58440_58460 = state_58428__$1;
(statearr_58440_58460[(2)] = null);

(statearr_58440_58460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (9))){
var inst_58408 = (state_58428[(7)]);
var state_58428__$1 = state_58428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58428__$1,(11),out,inst_58408);
} else {
if((state_val_58429 === (5))){
var inst_58422 = cljs.core.async.close_BANG_.call(null,out);
var state_58428__$1 = state_58428;
var statearr_58441_58461 = state_58428__$1;
(statearr_58441_58461[(2)] = inst_58422);

(statearr_58441_58461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (10))){
var inst_58420 = (state_58428[(2)]);
var state_58428__$1 = state_58428;
var statearr_58442_58462 = state_58428__$1;
(statearr_58442_58462[(2)] = inst_58420);

(statearr_58442_58462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58429 === (8))){
var inst_58408 = (state_58428[(7)]);
var inst_58407 = (state_58428[(8)]);
var inst_58409 = (state_58428[(9)]);
var inst_58400 = (state_58428[(10)]);
var inst_58412 = (function (){var cs = inst_58400;
var vec__58405 = inst_58407;
var v = inst_58408;
var c = inst_58409;
return ((function (cs,vec__58405,v,c,inst_58408,inst_58407,inst_58409,inst_58400,state_val_58429,c__8504__auto___58453,out){
return (function (p1__58396_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__58396_SHARP_);
});
;})(cs,vec__58405,v,c,inst_58408,inst_58407,inst_58409,inst_58400,state_val_58429,c__8504__auto___58453,out))
})();
var inst_58413 = cljs.core.filterv.call(null,inst_58412,inst_58400);
var inst_58400__$1 = inst_58413;
var state_58428__$1 = (function (){var statearr_58443 = state_58428;
(statearr_58443[(10)] = inst_58400__$1);

return statearr_58443;
})();
var statearr_58444_58463 = state_58428__$1;
(statearr_58444_58463[(2)] = null);

(statearr_58444_58463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___58453,out))
;
return ((function (switch__8442__auto__,c__8504__auto___58453,out){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_58448 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58448[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_58448[(1)] = (1));

return statearr_58448;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_58428){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_58428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e58449){if((e58449 instanceof Object)){
var ex__8446__auto__ = e58449;
var statearr_58450_58464 = state_58428;
(statearr_58450_58464[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58465 = state_58428;
state_58428 = G__58465;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_58428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_58428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___58453,out))
})();
var state__8506__auto__ = (function (){var statearr_58451 = f__8505__auto__.call(null);
(statearr_58451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___58453);

return statearr_58451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___58453,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__58467 = arguments.length;
switch (G__58467) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8504__auto___58515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___58515,out){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___58515,out){
return (function (state_58491){
var state_val_58492 = (state_58491[(1)]);
if((state_val_58492 === (7))){
var inst_58473 = (state_58491[(7)]);
var inst_58473__$1 = (state_58491[(2)]);
var inst_58474 = (inst_58473__$1 == null);
var inst_58475 = cljs.core.not.call(null,inst_58474);
var state_58491__$1 = (function (){var statearr_58493 = state_58491;
(statearr_58493[(7)] = inst_58473__$1);

return statearr_58493;
})();
if(inst_58475){
var statearr_58494_58516 = state_58491__$1;
(statearr_58494_58516[(1)] = (8));

} else {
var statearr_58495_58517 = state_58491__$1;
(statearr_58495_58517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (1))){
var inst_58468 = (0);
var state_58491__$1 = (function (){var statearr_58496 = state_58491;
(statearr_58496[(8)] = inst_58468);

return statearr_58496;
})();
var statearr_58497_58518 = state_58491__$1;
(statearr_58497_58518[(2)] = null);

(statearr_58497_58518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (4))){
var state_58491__$1 = state_58491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58491__$1,(7),ch);
} else {
if((state_val_58492 === (6))){
var inst_58486 = (state_58491[(2)]);
var state_58491__$1 = state_58491;
var statearr_58498_58519 = state_58491__$1;
(statearr_58498_58519[(2)] = inst_58486);

(statearr_58498_58519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (3))){
var inst_58488 = (state_58491[(2)]);
var inst_58489 = cljs.core.async.close_BANG_.call(null,out);
var state_58491__$1 = (function (){var statearr_58499 = state_58491;
(statearr_58499[(9)] = inst_58488);

return statearr_58499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58491__$1,inst_58489);
} else {
if((state_val_58492 === (2))){
var inst_58468 = (state_58491[(8)]);
var inst_58470 = (inst_58468 < n);
var state_58491__$1 = state_58491;
if(cljs.core.truth_(inst_58470)){
var statearr_58500_58520 = state_58491__$1;
(statearr_58500_58520[(1)] = (4));

} else {
var statearr_58501_58521 = state_58491__$1;
(statearr_58501_58521[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (11))){
var inst_58468 = (state_58491[(8)]);
var inst_58478 = (state_58491[(2)]);
var inst_58479 = (inst_58468 + (1));
var inst_58468__$1 = inst_58479;
var state_58491__$1 = (function (){var statearr_58502 = state_58491;
(statearr_58502[(10)] = inst_58478);

(statearr_58502[(8)] = inst_58468__$1);

return statearr_58502;
})();
var statearr_58503_58522 = state_58491__$1;
(statearr_58503_58522[(2)] = null);

(statearr_58503_58522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (9))){
var state_58491__$1 = state_58491;
var statearr_58504_58523 = state_58491__$1;
(statearr_58504_58523[(2)] = null);

(statearr_58504_58523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (5))){
var state_58491__$1 = state_58491;
var statearr_58505_58524 = state_58491__$1;
(statearr_58505_58524[(2)] = null);

(statearr_58505_58524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (10))){
var inst_58483 = (state_58491[(2)]);
var state_58491__$1 = state_58491;
var statearr_58506_58525 = state_58491__$1;
(statearr_58506_58525[(2)] = inst_58483);

(statearr_58506_58525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (8))){
var inst_58473 = (state_58491[(7)]);
var state_58491__$1 = state_58491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58491__$1,(11),out,inst_58473);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___58515,out))
;
return ((function (switch__8442__auto__,c__8504__auto___58515,out){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_58510 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58510[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_58510[(1)] = (1));

return statearr_58510;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_58491){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_58491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e58511){if((e58511 instanceof Object)){
var ex__8446__auto__ = e58511;
var statearr_58512_58526 = state_58491;
(statearr_58512_58526[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58527 = state_58491;
state_58491 = G__58527;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_58491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_58491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___58515,out))
})();
var state__8506__auto__ = (function (){var statearr_58513 = f__8505__auto__.call(null);
(statearr_58513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___58515);

return statearr_58513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___58515,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t58535 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t58535 = (function (map_LT_,f,ch,meta58536){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta58536 = meta58536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t58535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58537,meta58536__$1){
var self__ = this;
var _58537__$1 = this;
return (new cljs.core.async.t58535(self__.map_LT_,self__.f,self__.ch,meta58536__$1));
});

cljs.core.async.t58535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58537){
var self__ = this;
var _58537__$1 = this;
return self__.meta58536;
});

cljs.core.async.t58535.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t58535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t58535.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t58535.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t58535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t58538 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t58538 = (function (map_LT_,f,ch,meta58536,_,fn1,meta58539){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta58536 = meta58536;
this._ = _;
this.fn1 = fn1;
this.meta58539 = meta58539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t58538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_58540,meta58539__$1){
var self__ = this;
var _58540__$1 = this;
return (new cljs.core.async.t58538(self__.map_LT_,self__.f,self__.ch,self__.meta58536,self__._,self__.fn1,meta58539__$1));
});})(___$1))
;

cljs.core.async.t58538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_58540){
var self__ = this;
var _58540__$1 = this;
return self__.meta58539;
});})(___$1))
;

cljs.core.async.t58538.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t58538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t58538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__58528_SHARP_){
return f1.call(null,(((p1__58528_SHARP_ == null))?null:self__.f.call(null,p1__58528_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t58538.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58536","meta58536",-570621691,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58539","meta58539",1783026471,null)], null);
});})(___$1))
;

cljs.core.async.t58538.cljs$lang$type = true;

cljs.core.async.t58538.cljs$lang$ctorStr = "cljs.core.async/t58538";

cljs.core.async.t58538.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t58538");
});})(___$1))
;

cljs.core.async.__GT_t58538 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t58538(map_LT___$1,f__$1,ch__$1,meta58536__$1,___$2,fn1__$1,meta58539){
return (new cljs.core.async.t58538(map_LT___$1,f__$1,ch__$1,meta58536__$1,___$2,fn1__$1,meta58539));
});})(___$1))
;

}

return (new cljs.core.async.t58538(self__.map_LT_,self__.f,self__.ch,self__.meta58536,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4297__auto__ = ret;
if(cljs.core.truth_(and__4297__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4297__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t58535.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t58535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t58535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58536","meta58536",-570621691,null)], null);
});

cljs.core.async.t58535.cljs$lang$type = true;

cljs.core.async.t58535.cljs$lang$ctorStr = "cljs.core.async/t58535";

cljs.core.async.t58535.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t58535");
});

cljs.core.async.__GT_t58535 = (function cljs$core$async$map_LT__$___GT_t58535(map_LT___$1,f__$1,ch__$1,meta58536){
return (new cljs.core.async.t58535(map_LT___$1,f__$1,ch__$1,meta58536));
});

}

return (new cljs.core.async.t58535(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t58544 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t58544 = (function (map_GT_,f,ch,meta58545){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta58545 = meta58545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t58544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58546,meta58545__$1){
var self__ = this;
var _58546__$1 = this;
return (new cljs.core.async.t58544(self__.map_GT_,self__.f,self__.ch,meta58545__$1));
});

cljs.core.async.t58544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58546){
var self__ = this;
var _58546__$1 = this;
return self__.meta58545;
});

cljs.core.async.t58544.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t58544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t58544.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t58544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t58544.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t58544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t58544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58545","meta58545",-72391336,null)], null);
});

cljs.core.async.t58544.cljs$lang$type = true;

cljs.core.async.t58544.cljs$lang$ctorStr = "cljs.core.async/t58544";

cljs.core.async.t58544.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t58544");
});

cljs.core.async.__GT_t58544 = (function cljs$core$async$map_GT__$___GT_t58544(map_GT___$1,f__$1,ch__$1,meta58545){
return (new cljs.core.async.t58544(map_GT___$1,f__$1,ch__$1,meta58545));
});

}

return (new cljs.core.async.t58544(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t58550 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t58550 = (function (filter_GT_,p,ch,meta58551){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta58551 = meta58551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t58550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58552,meta58551__$1){
var self__ = this;
var _58552__$1 = this;
return (new cljs.core.async.t58550(self__.filter_GT_,self__.p,self__.ch,meta58551__$1));
});

cljs.core.async.t58550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58552){
var self__ = this;
var _58552__$1 = this;
return self__.meta58551;
});

cljs.core.async.t58550.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t58550.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t58550.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t58550.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t58550.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t58550.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t58550.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t58550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58551","meta58551",-2035676090,null)], null);
});

cljs.core.async.t58550.cljs$lang$type = true;

cljs.core.async.t58550.cljs$lang$ctorStr = "cljs.core.async/t58550";

cljs.core.async.t58550.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t58550");
});

cljs.core.async.__GT_t58550 = (function cljs$core$async$filter_GT__$___GT_t58550(filter_GT___$1,p__$1,ch__$1,meta58551){
return (new cljs.core.async.t58550(filter_GT___$1,p__$1,ch__$1,meta58551));
});

}

return (new cljs.core.async.t58550(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__58554 = arguments.length;
switch (G__58554) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8504__auto___58597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___58597,out){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___58597,out){
return (function (state_58575){
var state_val_58576 = (state_58575[(1)]);
if((state_val_58576 === (7))){
var inst_58571 = (state_58575[(2)]);
var state_58575__$1 = state_58575;
var statearr_58577_58598 = state_58575__$1;
(statearr_58577_58598[(2)] = inst_58571);

(statearr_58577_58598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58576 === (1))){
var state_58575__$1 = state_58575;
var statearr_58578_58599 = state_58575__$1;
(statearr_58578_58599[(2)] = null);

(statearr_58578_58599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58576 === (4))){
var inst_58557 = (state_58575[(7)]);
var inst_58557__$1 = (state_58575[(2)]);
var inst_58558 = (inst_58557__$1 == null);
var state_58575__$1 = (function (){var statearr_58579 = state_58575;
(statearr_58579[(7)] = inst_58557__$1);

return statearr_58579;
})();
if(cljs.core.truth_(inst_58558)){
var statearr_58580_58600 = state_58575__$1;
(statearr_58580_58600[(1)] = (5));

} else {
var statearr_58581_58601 = state_58575__$1;
(statearr_58581_58601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58576 === (6))){
var inst_58557 = (state_58575[(7)]);
var inst_58562 = p.call(null,inst_58557);
var state_58575__$1 = state_58575;
if(cljs.core.truth_(inst_58562)){
var statearr_58582_58602 = state_58575__$1;
(statearr_58582_58602[(1)] = (8));

} else {
var statearr_58583_58603 = state_58575__$1;
(statearr_58583_58603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58576 === (3))){
var inst_58573 = (state_58575[(2)]);
var state_58575__$1 = state_58575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58575__$1,inst_58573);
} else {
if((state_val_58576 === (2))){
var state_58575__$1 = state_58575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58575__$1,(4),ch);
} else {
if((state_val_58576 === (11))){
var inst_58565 = (state_58575[(2)]);
var state_58575__$1 = state_58575;
var statearr_58584_58604 = state_58575__$1;
(statearr_58584_58604[(2)] = inst_58565);

(statearr_58584_58604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58576 === (9))){
var state_58575__$1 = state_58575;
var statearr_58585_58605 = state_58575__$1;
(statearr_58585_58605[(2)] = null);

(statearr_58585_58605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58576 === (5))){
var inst_58560 = cljs.core.async.close_BANG_.call(null,out);
var state_58575__$1 = state_58575;
var statearr_58586_58606 = state_58575__$1;
(statearr_58586_58606[(2)] = inst_58560);

(statearr_58586_58606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58576 === (10))){
var inst_58568 = (state_58575[(2)]);
var state_58575__$1 = (function (){var statearr_58587 = state_58575;
(statearr_58587[(8)] = inst_58568);

return statearr_58587;
})();
var statearr_58588_58607 = state_58575__$1;
(statearr_58588_58607[(2)] = null);

(statearr_58588_58607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58576 === (8))){
var inst_58557 = (state_58575[(7)]);
var state_58575__$1 = state_58575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58575__$1,(11),out,inst_58557);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___58597,out))
;
return ((function (switch__8442__auto__,c__8504__auto___58597,out){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_58592 = [null,null,null,null,null,null,null,null,null];
(statearr_58592[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_58592[(1)] = (1));

return statearr_58592;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_58575){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_58575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e58593){if((e58593 instanceof Object)){
var ex__8446__auto__ = e58593;
var statearr_58594_58608 = state_58575;
(statearr_58594_58608[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58609 = state_58575;
state_58575 = G__58609;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_58575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_58575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___58597,out))
})();
var state__8506__auto__ = (function (){var statearr_58595 = f__8505__auto__.call(null);
(statearr_58595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___58597);

return statearr_58595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___58597,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__58611 = arguments.length;
switch (G__58611) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto__){
return (function (state_58778){
var state_val_58779 = (state_58778[(1)]);
if((state_val_58779 === (7))){
var inst_58774 = (state_58778[(2)]);
var state_58778__$1 = state_58778;
var statearr_58780_58821 = state_58778__$1;
(statearr_58780_58821[(2)] = inst_58774);

(statearr_58780_58821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (20))){
var inst_58744 = (state_58778[(7)]);
var inst_58755 = (state_58778[(2)]);
var inst_58756 = cljs.core.next.call(null,inst_58744);
var inst_58730 = inst_58756;
var inst_58731 = null;
var inst_58732 = (0);
var inst_58733 = (0);
var state_58778__$1 = (function (){var statearr_58781 = state_58778;
(statearr_58781[(8)] = inst_58733);

(statearr_58781[(9)] = inst_58730);

(statearr_58781[(10)] = inst_58731);

(statearr_58781[(11)] = inst_58732);

(statearr_58781[(12)] = inst_58755);

return statearr_58781;
})();
var statearr_58782_58822 = state_58778__$1;
(statearr_58782_58822[(2)] = null);

(statearr_58782_58822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (1))){
var state_58778__$1 = state_58778;
var statearr_58783_58823 = state_58778__$1;
(statearr_58783_58823[(2)] = null);

(statearr_58783_58823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (4))){
var inst_58719 = (state_58778[(13)]);
var inst_58719__$1 = (state_58778[(2)]);
var inst_58720 = (inst_58719__$1 == null);
var state_58778__$1 = (function (){var statearr_58784 = state_58778;
(statearr_58784[(13)] = inst_58719__$1);

return statearr_58784;
})();
if(cljs.core.truth_(inst_58720)){
var statearr_58785_58824 = state_58778__$1;
(statearr_58785_58824[(1)] = (5));

} else {
var statearr_58786_58825 = state_58778__$1;
(statearr_58786_58825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (15))){
var state_58778__$1 = state_58778;
var statearr_58790_58826 = state_58778__$1;
(statearr_58790_58826[(2)] = null);

(statearr_58790_58826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (21))){
var state_58778__$1 = state_58778;
var statearr_58791_58827 = state_58778__$1;
(statearr_58791_58827[(2)] = null);

(statearr_58791_58827[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (13))){
var inst_58733 = (state_58778[(8)]);
var inst_58730 = (state_58778[(9)]);
var inst_58731 = (state_58778[(10)]);
var inst_58732 = (state_58778[(11)]);
var inst_58740 = (state_58778[(2)]);
var inst_58741 = (inst_58733 + (1));
var tmp58787 = inst_58730;
var tmp58788 = inst_58731;
var tmp58789 = inst_58732;
var inst_58730__$1 = tmp58787;
var inst_58731__$1 = tmp58788;
var inst_58732__$1 = tmp58789;
var inst_58733__$1 = inst_58741;
var state_58778__$1 = (function (){var statearr_58792 = state_58778;
(statearr_58792[(8)] = inst_58733__$1);

(statearr_58792[(9)] = inst_58730__$1);

(statearr_58792[(10)] = inst_58731__$1);

(statearr_58792[(11)] = inst_58732__$1);

(statearr_58792[(14)] = inst_58740);

return statearr_58792;
})();
var statearr_58793_58828 = state_58778__$1;
(statearr_58793_58828[(2)] = null);

(statearr_58793_58828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (22))){
var state_58778__$1 = state_58778;
var statearr_58794_58829 = state_58778__$1;
(statearr_58794_58829[(2)] = null);

(statearr_58794_58829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (6))){
var inst_58719 = (state_58778[(13)]);
var inst_58728 = f.call(null,inst_58719);
var inst_58729 = cljs.core.seq.call(null,inst_58728);
var inst_58730 = inst_58729;
var inst_58731 = null;
var inst_58732 = (0);
var inst_58733 = (0);
var state_58778__$1 = (function (){var statearr_58795 = state_58778;
(statearr_58795[(8)] = inst_58733);

(statearr_58795[(9)] = inst_58730);

(statearr_58795[(10)] = inst_58731);

(statearr_58795[(11)] = inst_58732);

return statearr_58795;
})();
var statearr_58796_58830 = state_58778__$1;
(statearr_58796_58830[(2)] = null);

(statearr_58796_58830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (17))){
var inst_58744 = (state_58778[(7)]);
var inst_58748 = cljs.core.chunk_first.call(null,inst_58744);
var inst_58749 = cljs.core.chunk_rest.call(null,inst_58744);
var inst_58750 = cljs.core.count.call(null,inst_58748);
var inst_58730 = inst_58749;
var inst_58731 = inst_58748;
var inst_58732 = inst_58750;
var inst_58733 = (0);
var state_58778__$1 = (function (){var statearr_58797 = state_58778;
(statearr_58797[(8)] = inst_58733);

(statearr_58797[(9)] = inst_58730);

(statearr_58797[(10)] = inst_58731);

(statearr_58797[(11)] = inst_58732);

return statearr_58797;
})();
var statearr_58798_58831 = state_58778__$1;
(statearr_58798_58831[(2)] = null);

(statearr_58798_58831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (3))){
var inst_58776 = (state_58778[(2)]);
var state_58778__$1 = state_58778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58778__$1,inst_58776);
} else {
if((state_val_58779 === (12))){
var inst_58764 = (state_58778[(2)]);
var state_58778__$1 = state_58778;
var statearr_58799_58832 = state_58778__$1;
(statearr_58799_58832[(2)] = inst_58764);

(statearr_58799_58832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (2))){
var state_58778__$1 = state_58778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58778__$1,(4),in$);
} else {
if((state_val_58779 === (23))){
var inst_58772 = (state_58778[(2)]);
var state_58778__$1 = state_58778;
var statearr_58800_58833 = state_58778__$1;
(statearr_58800_58833[(2)] = inst_58772);

(statearr_58800_58833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (19))){
var inst_58759 = (state_58778[(2)]);
var state_58778__$1 = state_58778;
var statearr_58801_58834 = state_58778__$1;
(statearr_58801_58834[(2)] = inst_58759);

(statearr_58801_58834[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (11))){
var inst_58730 = (state_58778[(9)]);
var inst_58744 = (state_58778[(7)]);
var inst_58744__$1 = cljs.core.seq.call(null,inst_58730);
var state_58778__$1 = (function (){var statearr_58802 = state_58778;
(statearr_58802[(7)] = inst_58744__$1);

return statearr_58802;
})();
if(inst_58744__$1){
var statearr_58803_58835 = state_58778__$1;
(statearr_58803_58835[(1)] = (14));

} else {
var statearr_58804_58836 = state_58778__$1;
(statearr_58804_58836[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (9))){
var inst_58766 = (state_58778[(2)]);
var inst_58767 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_58778__$1 = (function (){var statearr_58805 = state_58778;
(statearr_58805[(15)] = inst_58766);

return statearr_58805;
})();
if(cljs.core.truth_(inst_58767)){
var statearr_58806_58837 = state_58778__$1;
(statearr_58806_58837[(1)] = (21));

} else {
var statearr_58807_58838 = state_58778__$1;
(statearr_58807_58838[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (5))){
var inst_58722 = cljs.core.async.close_BANG_.call(null,out);
var state_58778__$1 = state_58778;
var statearr_58808_58839 = state_58778__$1;
(statearr_58808_58839[(2)] = inst_58722);

(statearr_58808_58839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (14))){
var inst_58744 = (state_58778[(7)]);
var inst_58746 = cljs.core.chunked_seq_QMARK_.call(null,inst_58744);
var state_58778__$1 = state_58778;
if(inst_58746){
var statearr_58809_58840 = state_58778__$1;
(statearr_58809_58840[(1)] = (17));

} else {
var statearr_58810_58841 = state_58778__$1;
(statearr_58810_58841[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (16))){
var inst_58762 = (state_58778[(2)]);
var state_58778__$1 = state_58778;
var statearr_58811_58842 = state_58778__$1;
(statearr_58811_58842[(2)] = inst_58762);

(statearr_58811_58842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58779 === (10))){
var inst_58733 = (state_58778[(8)]);
var inst_58731 = (state_58778[(10)]);
var inst_58738 = cljs.core._nth.call(null,inst_58731,inst_58733);
var state_58778__$1 = state_58778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58778__$1,(13),out,inst_58738);
} else {
if((state_val_58779 === (18))){
var inst_58744 = (state_58778[(7)]);
var inst_58753 = cljs.core.first.call(null,inst_58744);
var state_58778__$1 = state_58778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58778__$1,(20),out,inst_58753);
} else {
if((state_val_58779 === (8))){
var inst_58733 = (state_58778[(8)]);
var inst_58732 = (state_58778[(11)]);
var inst_58735 = (inst_58733 < inst_58732);
var inst_58736 = inst_58735;
var state_58778__$1 = state_58778;
if(cljs.core.truth_(inst_58736)){
var statearr_58812_58843 = state_58778__$1;
(statearr_58812_58843[(1)] = (10));

} else {
var statearr_58813_58844 = state_58778__$1;
(statearr_58813_58844[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto__))
;
return ((function (switch__8442__auto__,c__8504__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8443__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8443__auto____0 = (function (){
var statearr_58817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58817[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8443__auto__);

(statearr_58817[(1)] = (1));

return statearr_58817;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8443__auto____1 = (function (state_58778){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_58778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e58818){if((e58818 instanceof Object)){
var ex__8446__auto__ = e58818;
var statearr_58819_58845 = state_58778;
(statearr_58819_58845[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58846 = state_58778;
state_58778 = G__58846;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8443__auto__ = function(state_58778){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8443__auto____1.call(this,state_58778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8443__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8443__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_58820 = f__8505__auto__.call(null);
(statearr_58820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_58820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__58848 = arguments.length;
switch (G__58848) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__58851 = arguments.length;
switch (G__58851) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__58854 = arguments.length;
switch (G__58854) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8504__auto___58904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___58904,out){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___58904,out){
return (function (state_58878){
var state_val_58879 = (state_58878[(1)]);
if((state_val_58879 === (7))){
var inst_58873 = (state_58878[(2)]);
var state_58878__$1 = state_58878;
var statearr_58880_58905 = state_58878__$1;
(statearr_58880_58905[(2)] = inst_58873);

(statearr_58880_58905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (1))){
var inst_58855 = null;
var state_58878__$1 = (function (){var statearr_58881 = state_58878;
(statearr_58881[(7)] = inst_58855);

return statearr_58881;
})();
var statearr_58882_58906 = state_58878__$1;
(statearr_58882_58906[(2)] = null);

(statearr_58882_58906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (4))){
var inst_58858 = (state_58878[(8)]);
var inst_58858__$1 = (state_58878[(2)]);
var inst_58859 = (inst_58858__$1 == null);
var inst_58860 = cljs.core.not.call(null,inst_58859);
var state_58878__$1 = (function (){var statearr_58883 = state_58878;
(statearr_58883[(8)] = inst_58858__$1);

return statearr_58883;
})();
if(inst_58860){
var statearr_58884_58907 = state_58878__$1;
(statearr_58884_58907[(1)] = (5));

} else {
var statearr_58885_58908 = state_58878__$1;
(statearr_58885_58908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (6))){
var state_58878__$1 = state_58878;
var statearr_58886_58909 = state_58878__$1;
(statearr_58886_58909[(2)] = null);

(statearr_58886_58909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (3))){
var inst_58875 = (state_58878[(2)]);
var inst_58876 = cljs.core.async.close_BANG_.call(null,out);
var state_58878__$1 = (function (){var statearr_58887 = state_58878;
(statearr_58887[(9)] = inst_58875);

return statearr_58887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58878__$1,inst_58876);
} else {
if((state_val_58879 === (2))){
var state_58878__$1 = state_58878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58878__$1,(4),ch);
} else {
if((state_val_58879 === (11))){
var inst_58858 = (state_58878[(8)]);
var inst_58867 = (state_58878[(2)]);
var inst_58855 = inst_58858;
var state_58878__$1 = (function (){var statearr_58888 = state_58878;
(statearr_58888[(7)] = inst_58855);

(statearr_58888[(10)] = inst_58867);

return statearr_58888;
})();
var statearr_58889_58910 = state_58878__$1;
(statearr_58889_58910[(2)] = null);

(statearr_58889_58910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (9))){
var inst_58858 = (state_58878[(8)]);
var state_58878__$1 = state_58878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58878__$1,(11),out,inst_58858);
} else {
if((state_val_58879 === (5))){
var inst_58855 = (state_58878[(7)]);
var inst_58858 = (state_58878[(8)]);
var inst_58862 = cljs.core._EQ_.call(null,inst_58858,inst_58855);
var state_58878__$1 = state_58878;
if(inst_58862){
var statearr_58891_58911 = state_58878__$1;
(statearr_58891_58911[(1)] = (8));

} else {
var statearr_58892_58912 = state_58878__$1;
(statearr_58892_58912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (10))){
var inst_58870 = (state_58878[(2)]);
var state_58878__$1 = state_58878;
var statearr_58893_58913 = state_58878__$1;
(statearr_58893_58913[(2)] = inst_58870);

(statearr_58893_58913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58879 === (8))){
var inst_58855 = (state_58878[(7)]);
var tmp58890 = inst_58855;
var inst_58855__$1 = tmp58890;
var state_58878__$1 = (function (){var statearr_58894 = state_58878;
(statearr_58894[(7)] = inst_58855__$1);

return statearr_58894;
})();
var statearr_58895_58914 = state_58878__$1;
(statearr_58895_58914[(2)] = null);

(statearr_58895_58914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___58904,out))
;
return ((function (switch__8442__auto__,c__8504__auto___58904,out){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_58899 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58899[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_58899[(1)] = (1));

return statearr_58899;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_58878){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_58878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e58900){if((e58900 instanceof Object)){
var ex__8446__auto__ = e58900;
var statearr_58901_58915 = state_58878;
(statearr_58901_58915[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58916 = state_58878;
state_58878 = G__58916;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_58878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_58878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___58904,out))
})();
var state__8506__auto__ = (function (){var statearr_58902 = f__8505__auto__.call(null);
(statearr_58902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___58904);

return statearr_58902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___58904,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__58918 = arguments.length;
switch (G__58918) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8504__auto___58987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___58987,out){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___58987,out){
return (function (state_58956){
var state_val_58957 = (state_58956[(1)]);
if((state_val_58957 === (7))){
var inst_58952 = (state_58956[(2)]);
var state_58956__$1 = state_58956;
var statearr_58958_58988 = state_58956__$1;
(statearr_58958_58988[(2)] = inst_58952);

(statearr_58958_58988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58957 === (1))){
var inst_58919 = (new Array(n));
var inst_58920 = inst_58919;
var inst_58921 = (0);
var state_58956__$1 = (function (){var statearr_58959 = state_58956;
(statearr_58959[(7)] = inst_58920);

(statearr_58959[(8)] = inst_58921);

return statearr_58959;
})();
var statearr_58960_58989 = state_58956__$1;
(statearr_58960_58989[(2)] = null);

(statearr_58960_58989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58957 === (4))){
var inst_58924 = (state_58956[(9)]);
var inst_58924__$1 = (state_58956[(2)]);
var inst_58925 = (inst_58924__$1 == null);
var inst_58926 = cljs.core.not.call(null,inst_58925);
var state_58956__$1 = (function (){var statearr_58961 = state_58956;
(statearr_58961[(9)] = inst_58924__$1);

return statearr_58961;
})();
if(inst_58926){
var statearr_58962_58990 = state_58956__$1;
(statearr_58962_58990[(1)] = (5));

} else {
var statearr_58963_58991 = state_58956__$1;
(statearr_58963_58991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58957 === (15))){
var inst_58946 = (state_58956[(2)]);
var state_58956__$1 = state_58956;
var statearr_58964_58992 = state_58956__$1;
(statearr_58964_58992[(2)] = inst_58946);

(statearr_58964_58992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58957 === (13))){
var state_58956__$1 = state_58956;
var statearr_58965_58993 = state_58956__$1;
(statearr_58965_58993[(2)] = null);

(statearr_58965_58993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58957 === (6))){
var inst_58921 = (state_58956[(8)]);
var inst_58942 = (inst_58921 > (0));
var state_58956__$1 = state_58956;
if(cljs.core.truth_(inst_58942)){
var statearr_58966_58994 = state_58956__$1;
(statearr_58966_58994[(1)] = (12));

} else {
var statearr_58967_58995 = state_58956__$1;
(statearr_58967_58995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58957 === (3))){
var inst_58954 = (state_58956[(2)]);
var state_58956__$1 = state_58956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58956__$1,inst_58954);
} else {
if((state_val_58957 === (12))){
var inst_58920 = (state_58956[(7)]);
var inst_58944 = cljs.core.vec.call(null,inst_58920);
var state_58956__$1 = state_58956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58956__$1,(15),out,inst_58944);
} else {
if((state_val_58957 === (2))){
var state_58956__$1 = state_58956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58956__$1,(4),ch);
} else {
if((state_val_58957 === (11))){
var inst_58936 = (state_58956[(2)]);
var inst_58937 = (new Array(n));
var inst_58920 = inst_58937;
var inst_58921 = (0);
var state_58956__$1 = (function (){var statearr_58968 = state_58956;
(statearr_58968[(7)] = inst_58920);

(statearr_58968[(8)] = inst_58921);

(statearr_58968[(10)] = inst_58936);

return statearr_58968;
})();
var statearr_58969_58996 = state_58956__$1;
(statearr_58969_58996[(2)] = null);

(statearr_58969_58996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58957 === (9))){
var inst_58920 = (state_58956[(7)]);
var inst_58934 = cljs.core.vec.call(null,inst_58920);
var state_58956__$1 = state_58956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58956__$1,(11),out,inst_58934);
} else {
if((state_val_58957 === (5))){
var inst_58929 = (state_58956[(11)]);
var inst_58920 = (state_58956[(7)]);
var inst_58921 = (state_58956[(8)]);
var inst_58924 = (state_58956[(9)]);
var inst_58928 = (inst_58920[inst_58921] = inst_58924);
var inst_58929__$1 = (inst_58921 + (1));
var inst_58930 = (inst_58929__$1 < n);
var state_58956__$1 = (function (){var statearr_58970 = state_58956;
(statearr_58970[(12)] = inst_58928);

(statearr_58970[(11)] = inst_58929__$1);

return statearr_58970;
})();
if(cljs.core.truth_(inst_58930)){
var statearr_58971_58997 = state_58956__$1;
(statearr_58971_58997[(1)] = (8));

} else {
var statearr_58972_58998 = state_58956__$1;
(statearr_58972_58998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58957 === (14))){
var inst_58949 = (state_58956[(2)]);
var inst_58950 = cljs.core.async.close_BANG_.call(null,out);
var state_58956__$1 = (function (){var statearr_58974 = state_58956;
(statearr_58974[(13)] = inst_58949);

return statearr_58974;
})();
var statearr_58975_58999 = state_58956__$1;
(statearr_58975_58999[(2)] = inst_58950);

(statearr_58975_58999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58957 === (10))){
var inst_58940 = (state_58956[(2)]);
var state_58956__$1 = state_58956;
var statearr_58976_59000 = state_58956__$1;
(statearr_58976_59000[(2)] = inst_58940);

(statearr_58976_59000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58957 === (8))){
var inst_58929 = (state_58956[(11)]);
var inst_58920 = (state_58956[(7)]);
var tmp58973 = inst_58920;
var inst_58920__$1 = tmp58973;
var inst_58921 = inst_58929;
var state_58956__$1 = (function (){var statearr_58977 = state_58956;
(statearr_58977[(7)] = inst_58920__$1);

(statearr_58977[(8)] = inst_58921);

return statearr_58977;
})();
var statearr_58978_59001 = state_58956__$1;
(statearr_58978_59001[(2)] = null);

(statearr_58978_59001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___58987,out))
;
return ((function (switch__8442__auto__,c__8504__auto___58987,out){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_58982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58982[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_58982[(1)] = (1));

return statearr_58982;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_58956){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_58956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e58983){if((e58983 instanceof Object)){
var ex__8446__auto__ = e58983;
var statearr_58984_59002 = state_58956;
(statearr_58984_59002[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59003 = state_58956;
state_58956 = G__59003;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_58956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_58956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___58987,out))
})();
var state__8506__auto__ = (function (){var statearr_58985 = f__8505__auto__.call(null);
(statearr_58985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___58987);

return statearr_58985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___58987,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__59005 = arguments.length;
switch (G__59005) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8504__auto___59078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto___59078,out){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto___59078,out){
return (function (state_59047){
var state_val_59048 = (state_59047[(1)]);
if((state_val_59048 === (7))){
var inst_59043 = (state_59047[(2)]);
var state_59047__$1 = state_59047;
var statearr_59049_59079 = state_59047__$1;
(statearr_59049_59079[(2)] = inst_59043);

(statearr_59049_59079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (1))){
var inst_59006 = [];
var inst_59007 = inst_59006;
var inst_59008 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59047__$1 = (function (){var statearr_59050 = state_59047;
(statearr_59050[(7)] = inst_59008);

(statearr_59050[(8)] = inst_59007);

return statearr_59050;
})();
var statearr_59051_59080 = state_59047__$1;
(statearr_59051_59080[(2)] = null);

(statearr_59051_59080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (4))){
var inst_59011 = (state_59047[(9)]);
var inst_59011__$1 = (state_59047[(2)]);
var inst_59012 = (inst_59011__$1 == null);
var inst_59013 = cljs.core.not.call(null,inst_59012);
var state_59047__$1 = (function (){var statearr_59052 = state_59047;
(statearr_59052[(9)] = inst_59011__$1);

return statearr_59052;
})();
if(inst_59013){
var statearr_59053_59081 = state_59047__$1;
(statearr_59053_59081[(1)] = (5));

} else {
var statearr_59054_59082 = state_59047__$1;
(statearr_59054_59082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (15))){
var inst_59037 = (state_59047[(2)]);
var state_59047__$1 = state_59047;
var statearr_59055_59083 = state_59047__$1;
(statearr_59055_59083[(2)] = inst_59037);

(statearr_59055_59083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (13))){
var state_59047__$1 = state_59047;
var statearr_59056_59084 = state_59047__$1;
(statearr_59056_59084[(2)] = null);

(statearr_59056_59084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (6))){
var inst_59007 = (state_59047[(8)]);
var inst_59032 = inst_59007.length;
var inst_59033 = (inst_59032 > (0));
var state_59047__$1 = state_59047;
if(cljs.core.truth_(inst_59033)){
var statearr_59057_59085 = state_59047__$1;
(statearr_59057_59085[(1)] = (12));

} else {
var statearr_59058_59086 = state_59047__$1;
(statearr_59058_59086[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (3))){
var inst_59045 = (state_59047[(2)]);
var state_59047__$1 = state_59047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59047__$1,inst_59045);
} else {
if((state_val_59048 === (12))){
var inst_59007 = (state_59047[(8)]);
var inst_59035 = cljs.core.vec.call(null,inst_59007);
var state_59047__$1 = state_59047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59047__$1,(15),out,inst_59035);
} else {
if((state_val_59048 === (2))){
var state_59047__$1 = state_59047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59047__$1,(4),ch);
} else {
if((state_val_59048 === (11))){
var inst_59011 = (state_59047[(9)]);
var inst_59015 = (state_59047[(10)]);
var inst_59025 = (state_59047[(2)]);
var inst_59026 = [];
var inst_59027 = inst_59026.push(inst_59011);
var inst_59007 = inst_59026;
var inst_59008 = inst_59015;
var state_59047__$1 = (function (){var statearr_59059 = state_59047;
(statearr_59059[(7)] = inst_59008);

(statearr_59059[(8)] = inst_59007);

(statearr_59059[(11)] = inst_59027);

(statearr_59059[(12)] = inst_59025);

return statearr_59059;
})();
var statearr_59060_59087 = state_59047__$1;
(statearr_59060_59087[(2)] = null);

(statearr_59060_59087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (9))){
var inst_59007 = (state_59047[(8)]);
var inst_59023 = cljs.core.vec.call(null,inst_59007);
var state_59047__$1 = state_59047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59047__$1,(11),out,inst_59023);
} else {
if((state_val_59048 === (5))){
var inst_59008 = (state_59047[(7)]);
var inst_59011 = (state_59047[(9)]);
var inst_59015 = (state_59047[(10)]);
var inst_59015__$1 = f.call(null,inst_59011);
var inst_59016 = cljs.core._EQ_.call(null,inst_59015__$1,inst_59008);
var inst_59017 = cljs.core.keyword_identical_QMARK_.call(null,inst_59008,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59018 = (inst_59016) || (inst_59017);
var state_59047__$1 = (function (){var statearr_59061 = state_59047;
(statearr_59061[(10)] = inst_59015__$1);

return statearr_59061;
})();
if(cljs.core.truth_(inst_59018)){
var statearr_59062_59088 = state_59047__$1;
(statearr_59062_59088[(1)] = (8));

} else {
var statearr_59063_59089 = state_59047__$1;
(statearr_59063_59089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (14))){
var inst_59040 = (state_59047[(2)]);
var inst_59041 = cljs.core.async.close_BANG_.call(null,out);
var state_59047__$1 = (function (){var statearr_59065 = state_59047;
(statearr_59065[(13)] = inst_59040);

return statearr_59065;
})();
var statearr_59066_59090 = state_59047__$1;
(statearr_59066_59090[(2)] = inst_59041);

(statearr_59066_59090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (10))){
var inst_59030 = (state_59047[(2)]);
var state_59047__$1 = state_59047;
var statearr_59067_59091 = state_59047__$1;
(statearr_59067_59091[(2)] = inst_59030);

(statearr_59067_59091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59048 === (8))){
var inst_59011 = (state_59047[(9)]);
var inst_59007 = (state_59047[(8)]);
var inst_59015 = (state_59047[(10)]);
var inst_59020 = inst_59007.push(inst_59011);
var tmp59064 = inst_59007;
var inst_59007__$1 = tmp59064;
var inst_59008 = inst_59015;
var state_59047__$1 = (function (){var statearr_59068 = state_59047;
(statearr_59068[(14)] = inst_59020);

(statearr_59068[(7)] = inst_59008);

(statearr_59068[(8)] = inst_59007__$1);

return statearr_59068;
})();
var statearr_59069_59092 = state_59047__$1;
(statearr_59069_59092[(2)] = null);

(statearr_59069_59092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8504__auto___59078,out))
;
return ((function (switch__8442__auto__,c__8504__auto___59078,out){
return (function() {
var cljs$core$async$state_machine__8443__auto__ = null;
var cljs$core$async$state_machine__8443__auto____0 = (function (){
var statearr_59073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59073[(0)] = cljs$core$async$state_machine__8443__auto__);

(statearr_59073[(1)] = (1));

return statearr_59073;
});
var cljs$core$async$state_machine__8443__auto____1 = (function (state_59047){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_59047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e59074){if((e59074 instanceof Object)){
var ex__8446__auto__ = e59074;
var statearr_59075_59093 = state_59047;
(statearr_59075_59093[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59094 = state_59047;
state_59047 = G__59094;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
cljs$core$async$state_machine__8443__auto__ = function(state_59047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8443__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8443__auto____1.call(this,state_59047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8443__auto____0;
cljs$core$async$state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8443__auto____1;
return cljs$core$async$state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto___59078,out))
})();
var state__8506__auto__ = (function (){var statearr_59076 = f__8505__auto__.call(null);
(statearr_59076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto___59078);

return statearr_59076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto___59078,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
