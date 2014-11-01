// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10864 = (function (f,fn_handler,meta10865){
this.f = f;
this.fn_handler = fn_handler;
this.meta10865 = meta10865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10864.cljs$lang$type = true;
cljs.core.async.t10864.cljs$lang$ctorStr = "cljs.core.async/t10864";
cljs.core.async.t10864.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10864");
});
cljs.core.async.t10864.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10866){var self__ = this;
var _10866__$1 = this;return self__.meta10865;
});
cljs.core.async.t10864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10866,meta10865__$1){var self__ = this;
var _10866__$1 = this;return (new cljs.core.async.t10864(self__.f,self__.fn_handler,meta10865__$1));
});
cljs.core.async.__GT_t10864 = (function __GT_t10864(f__$1,fn_handler__$1,meta10865){return (new cljs.core.async.t10864(f__$1,fn_handler__$1,meta10865));
});
}
return (new cljs.core.async.t10864(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10868 = buff;if(G__10868)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__10868.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10868.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10868);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10868);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10869 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10869);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10869,ret){
return (function (){return fn1.call(null,val_10869);
});})(val_10869,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3541__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4409__auto___10870 = n;var x_10871 = (0);while(true){
if((x_10871 < n__4409__auto___10870))
{(a[x_10871] = (0));
{
var G__10872 = (x_10871 + (1));
x_10871 = G__10872;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10873 = (i + (1));
i = G__10873;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10877 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10877 = (function (flag,alt_flag,meta10878){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10878 = meta10878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10877.cljs$lang$type = true;
cljs.core.async.t10877.cljs$lang$ctorStr = "cljs.core.async/t10877";
cljs.core.async.t10877.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10877");
});})(flag))
;
cljs.core.async.t10877.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10879){var self__ = this;
var _10879__$1 = this;return self__.meta10878;
});})(flag))
;
cljs.core.async.t10877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10879,meta10878__$1){var self__ = this;
var _10879__$1 = this;return (new cljs.core.async.t10877(self__.flag,self__.alt_flag,meta10878__$1));
});})(flag))
;
cljs.core.async.__GT_t10877 = ((function (flag){
return (function __GT_t10877(flag__$1,alt_flag__$1,meta10878){return (new cljs.core.async.t10877(flag__$1,alt_flag__$1,meta10878));
});})(flag))
;
}
return (new cljs.core.async.t10877(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10883 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10883 = (function (cb,flag,alt_handler,meta10884){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10884 = meta10884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10883.cljs$lang$type = true;
cljs.core.async.t10883.cljs$lang$ctorStr = "cljs.core.async/t10883";
cljs.core.async.t10883.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10883");
});
cljs.core.async.t10883.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10885){var self__ = this;
var _10885__$1 = this;return self__.meta10884;
});
cljs.core.async.t10883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10885,meta10884__$1){var self__ = this;
var _10885__$1 = this;return (new cljs.core.async.t10883(self__.cb,self__.flag,self__.alt_handler,meta10884__$1));
});
cljs.core.async.__GT_t10883 = (function __GT_t10883(cb__$1,flag__$1,alt_handler__$1,meta10884){return (new cljs.core.async.t10883(cb__$1,flag__$1,alt_handler__$1,meta10884));
});
}
return (new cljs.core.async.t10883(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10886_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10886_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10887 = (i + (1));
i = G__10887;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3553__auto__ = ret;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10888){var map__10890 = p__10888;var map__10890__$1 = ((cljs.core.seq_QMARK_.call(null,map__10890))?cljs.core.apply.call(null,cljs.core.hash_map,map__10890):map__10890);var opts = map__10890__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__10888 = null;if (arguments.length > 1) {
  p__10888 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10888);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10891){
var ports = cljs.core.first(arglist__10891);
var p__10888 = cljs.core.rest(arglist__10891);
return alts_BANG___delegate(ports,p__10888);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10899 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10899 = (function (ch,f,map_LT_,meta10900){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10900 = meta10900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10899.cljs$lang$type = true;
cljs.core.async.t10899.cljs$lang$ctorStr = "cljs.core.async/t10899";
cljs.core.async.t10899.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10899");
});
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10902 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10902 = (function (fn1,_,meta10900,ch,f,map_LT_,meta10903){
this.fn1 = fn1;
this._ = _;
this.meta10900 = meta10900;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10903 = meta10903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10902.cljs$lang$type = true;
cljs.core.async.t10902.cljs$lang$ctorStr = "cljs.core.async/t10902";
cljs.core.async.t10902.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10902");
});})(___$1))
;
cljs.core.async.t10902.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10902.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10892_SHARP_){return f1.call(null,(((p1__10892_SHARP_ == null))?null:self__.f.call(null,p1__10892_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10904){var self__ = this;
var _10904__$1 = this;return self__.meta10903;
});})(___$1))
;
cljs.core.async.t10902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10904,meta10903__$1){var self__ = this;
var _10904__$1 = this;return (new cljs.core.async.t10902(self__.fn1,self__._,self__.meta10900,self__.ch,self__.f,self__.map_LT_,meta10903__$1));
});})(___$1))
;
cljs.core.async.__GT_t10902 = ((function (___$1){
return (function __GT_t10902(fn1__$1,___$2,meta10900__$1,ch__$2,f__$2,map_LT___$2,meta10903){return (new cljs.core.async.t10902(fn1__$1,___$2,meta10900__$1,ch__$2,f__$2,map_LT___$2,meta10903));
});})(___$1))
;
}
return (new cljs.core.async.t10902(fn1,___$1,self__.meta10900,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10901){var self__ = this;
var _10901__$1 = this;return self__.meta10900;
});
cljs.core.async.t10899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10901,meta10900__$1){var self__ = this;
var _10901__$1 = this;return (new cljs.core.async.t10899(self__.ch,self__.f,self__.map_LT_,meta10900__$1));
});
cljs.core.async.__GT_t10899 = (function __GT_t10899(ch__$1,f__$1,map_LT___$1,meta10900){return (new cljs.core.async.t10899(ch__$1,f__$1,map_LT___$1,meta10900));
});
}
return (new cljs.core.async.t10899(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10908 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10908 = (function (ch,f,map_GT_,meta10909){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10909 = meta10909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10908.cljs$lang$type = true;
cljs.core.async.t10908.cljs$lang$ctorStr = "cljs.core.async/t10908";
cljs.core.async.t10908.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10908");
});
cljs.core.async.t10908.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10908.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10908.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10908.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10908.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10908.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10910){var self__ = this;
var _10910__$1 = this;return self__.meta10909;
});
cljs.core.async.t10908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10910,meta10909__$1){var self__ = this;
var _10910__$1 = this;return (new cljs.core.async.t10908(self__.ch,self__.f,self__.map_GT_,meta10909__$1));
});
cljs.core.async.__GT_t10908 = (function __GT_t10908(ch__$1,f__$1,map_GT___$1,meta10909){return (new cljs.core.async.t10908(ch__$1,f__$1,map_GT___$1,meta10909));
});
}
return (new cljs.core.async.t10908(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10914 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10914 = (function (ch,p,filter_GT_,meta10915){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10915 = meta10915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10914.cljs$lang$type = true;
cljs.core.async.t10914.cljs$lang$ctorStr = "cljs.core.async/t10914";
cljs.core.async.t10914.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10914");
});
cljs.core.async.t10914.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10914.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10914.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10914.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10914.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10914.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10916){var self__ = this;
var _10916__$1 = this;return self__.meta10915;
});
cljs.core.async.t10914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10916,meta10915__$1){var self__ = this;
var _10916__$1 = this;return (new cljs.core.async.t10914(self__.ch,self__.p,self__.filter_GT_,meta10915__$1));
});
cljs.core.async.__GT_t10914 = (function __GT_t10914(ch__$1,p__$1,filter_GT___$1,meta10915){return (new cljs.core.async.t10914(ch__$1,p__$1,filter_GT___$1,meta10915));
});
}
return (new cljs.core.async.t10914(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___10999 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___10999,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___10999,out){
return (function (state_10978){var state_val_10979 = (state_10978[(1)]);if((state_val_10979 === (7)))
{var inst_10974 = (state_10978[(2)]);var state_10978__$1 = state_10978;var statearr_10980_11000 = state_10978__$1;(statearr_10980_11000[(2)] = inst_10974);
(statearr_10980_11000[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10979 === (1)))
{var state_10978__$1 = state_10978;var statearr_10981_11001 = state_10978__$1;(statearr_10981_11001[(2)] = null);
(statearr_10981_11001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10979 === (4)))
{var inst_10960 = (state_10978[(7)]);var inst_10960__$1 = (state_10978[(2)]);var inst_10961 = (inst_10960__$1 == null);var state_10978__$1 = (function (){var statearr_10982 = state_10978;(statearr_10982[(7)] = inst_10960__$1);
return statearr_10982;
})();if(cljs.core.truth_(inst_10961))
{var statearr_10983_11002 = state_10978__$1;(statearr_10983_11002[(1)] = (5));
} else
{var statearr_10984_11003 = state_10978__$1;(statearr_10984_11003[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10979 === (6)))
{var inst_10960 = (state_10978[(7)]);var inst_10965 = p.call(null,inst_10960);var state_10978__$1 = state_10978;if(cljs.core.truth_(inst_10965))
{var statearr_10985_11004 = state_10978__$1;(statearr_10985_11004[(1)] = (8));
} else
{var statearr_10986_11005 = state_10978__$1;(statearr_10986_11005[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10979 === (3)))
{var inst_10976 = (state_10978[(2)]);var state_10978__$1 = state_10978;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10978__$1,inst_10976);
} else
{if((state_val_10979 === (2)))
{var state_10978__$1 = state_10978;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10978__$1,(4),ch);
} else
{if((state_val_10979 === (11)))
{var inst_10968 = (state_10978[(2)]);var state_10978__$1 = state_10978;var statearr_10987_11006 = state_10978__$1;(statearr_10987_11006[(2)] = inst_10968);
(statearr_10987_11006[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10979 === (9)))
{var state_10978__$1 = state_10978;var statearr_10988_11007 = state_10978__$1;(statearr_10988_11007[(2)] = null);
(statearr_10988_11007[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10979 === (5)))
{var inst_10963 = cljs.core.async.close_BANG_.call(null,out);var state_10978__$1 = state_10978;var statearr_10989_11008 = state_10978__$1;(statearr_10989_11008[(2)] = inst_10963);
(statearr_10989_11008[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10979 === (10)))
{var inst_10971 = (state_10978[(2)]);var state_10978__$1 = (function (){var statearr_10990 = state_10978;(statearr_10990[(8)] = inst_10971);
return statearr_10990;
})();var statearr_10991_11009 = state_10978__$1;(statearr_10991_11009[(2)] = null);
(statearr_10991_11009[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10979 === (8)))
{var inst_10960 = (state_10978[(7)]);var state_10978__$1 = state_10978;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10978__$1,(11),out,inst_10960);
} else
{return null;
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
});})(c__6355__auto___10999,out))
;return ((function (switch__6340__auto__,c__6355__auto___10999,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_10995 = [null,null,null,null,null,null,null,null,null];(statearr_10995[(0)] = state_machine__6341__auto__);
(statearr_10995[(1)] = (1));
return statearr_10995;
});
var state_machine__6341__auto____1 = (function (state_10978){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_10978);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e10996){if((e10996 instanceof Object))
{var ex__6344__auto__ = e10996;var statearr_10997_11010 = state_10978;(statearr_10997_11010[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10978);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10996;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11011 = state_10978;
state_10978 = G__11011;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_10978){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_10978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___10999,out))
})();var state__6357__auto__ = (function (){var statearr_10998 = f__6356__auto__.call(null);(statearr_10998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___10999);
return statearr_10998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___10999,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6355__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto__){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto__){
return (function (state_11163){var state_val_11164 = (state_11163[(1)]);if((state_val_11164 === (7)))
{var inst_11159 = (state_11163[(2)]);var state_11163__$1 = state_11163;var statearr_11165_11202 = state_11163__$1;(statearr_11165_11202[(2)] = inst_11159);
(statearr_11165_11202[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (20)))
{var inst_11134 = (state_11163[(7)]);var inst_11145 = (state_11163[(2)]);var inst_11146 = cljs.core.next.call(null,inst_11134);var inst_11120 = inst_11146;var inst_11121 = null;var inst_11122 = (0);var inst_11123 = (0);var state_11163__$1 = (function (){var statearr_11166 = state_11163;(statearr_11166[(8)] = inst_11122);
(statearr_11166[(9)] = inst_11120);
(statearr_11166[(10)] = inst_11121);
(statearr_11166[(11)] = inst_11123);
(statearr_11166[(12)] = inst_11145);
return statearr_11166;
})();var statearr_11167_11203 = state_11163__$1;(statearr_11167_11203[(2)] = null);
(statearr_11167_11203[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (1)))
{var state_11163__$1 = state_11163;var statearr_11168_11204 = state_11163__$1;(statearr_11168_11204[(2)] = null);
(statearr_11168_11204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (4)))
{var inst_11109 = (state_11163[(13)]);var inst_11109__$1 = (state_11163[(2)]);var inst_11110 = (inst_11109__$1 == null);var state_11163__$1 = (function (){var statearr_11172 = state_11163;(statearr_11172[(13)] = inst_11109__$1);
return statearr_11172;
})();if(cljs.core.truth_(inst_11110))
{var statearr_11173_11205 = state_11163__$1;(statearr_11173_11205[(1)] = (5));
} else
{var statearr_11174_11206 = state_11163__$1;(statearr_11174_11206[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (15)))
{var state_11163__$1 = state_11163;var statearr_11175_11207 = state_11163__$1;(statearr_11175_11207[(2)] = null);
(statearr_11175_11207[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (13)))
{var inst_11122 = (state_11163[(8)]);var inst_11120 = (state_11163[(9)]);var inst_11121 = (state_11163[(10)]);var inst_11123 = (state_11163[(11)]);var inst_11130 = (state_11163[(2)]);var inst_11131 = (inst_11123 + (1));var tmp11169 = inst_11122;var tmp11170 = inst_11120;var tmp11171 = inst_11121;var inst_11120__$1 = tmp11170;var inst_11121__$1 = tmp11171;var inst_11122__$1 = tmp11169;var inst_11123__$1 = inst_11131;var state_11163__$1 = (function (){var statearr_11176 = state_11163;(statearr_11176[(14)] = inst_11130);
(statearr_11176[(8)] = inst_11122__$1);
(statearr_11176[(9)] = inst_11120__$1);
(statearr_11176[(10)] = inst_11121__$1);
(statearr_11176[(11)] = inst_11123__$1);
return statearr_11176;
})();var statearr_11177_11208 = state_11163__$1;(statearr_11177_11208[(2)] = null);
(statearr_11177_11208[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (6)))
{var inst_11109 = (state_11163[(13)]);var inst_11114 = f.call(null,inst_11109);var inst_11119 = cljs.core.seq.call(null,inst_11114);var inst_11120 = inst_11119;var inst_11121 = null;var inst_11122 = (0);var inst_11123 = (0);var state_11163__$1 = (function (){var statearr_11178 = state_11163;(statearr_11178[(8)] = inst_11122);
(statearr_11178[(9)] = inst_11120);
(statearr_11178[(10)] = inst_11121);
(statearr_11178[(11)] = inst_11123);
return statearr_11178;
})();var statearr_11179_11209 = state_11163__$1;(statearr_11179_11209[(2)] = null);
(statearr_11179_11209[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (17)))
{var inst_11134 = (state_11163[(7)]);var inst_11138 = cljs.core.chunk_first.call(null,inst_11134);var inst_11139 = cljs.core.chunk_rest.call(null,inst_11134);var inst_11140 = cljs.core.count.call(null,inst_11138);var inst_11120 = inst_11139;var inst_11121 = inst_11138;var inst_11122 = inst_11140;var inst_11123 = (0);var state_11163__$1 = (function (){var statearr_11180 = state_11163;(statearr_11180[(8)] = inst_11122);
(statearr_11180[(9)] = inst_11120);
(statearr_11180[(10)] = inst_11121);
(statearr_11180[(11)] = inst_11123);
return statearr_11180;
})();var statearr_11181_11210 = state_11163__$1;(statearr_11181_11210[(2)] = null);
(statearr_11181_11210[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (3)))
{var inst_11161 = (state_11163[(2)]);var state_11163__$1 = state_11163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11163__$1,inst_11161);
} else
{if((state_val_11164 === (12)))
{var inst_11154 = (state_11163[(2)]);var state_11163__$1 = state_11163;var statearr_11182_11211 = state_11163__$1;(statearr_11182_11211[(2)] = inst_11154);
(statearr_11182_11211[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (2)))
{var state_11163__$1 = state_11163;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11163__$1,(4),in$);
} else
{if((state_val_11164 === (19)))
{var inst_11149 = (state_11163[(2)]);var state_11163__$1 = state_11163;var statearr_11183_11212 = state_11163__$1;(statearr_11183_11212[(2)] = inst_11149);
(statearr_11183_11212[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (11)))
{var inst_11134 = (state_11163[(7)]);var inst_11120 = (state_11163[(9)]);var inst_11134__$1 = cljs.core.seq.call(null,inst_11120);var state_11163__$1 = (function (){var statearr_11184 = state_11163;(statearr_11184[(7)] = inst_11134__$1);
return statearr_11184;
})();if(inst_11134__$1)
{var statearr_11185_11213 = state_11163__$1;(statearr_11185_11213[(1)] = (14));
} else
{var statearr_11186_11214 = state_11163__$1;(statearr_11186_11214[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (9)))
{var inst_11156 = (state_11163[(2)]);var state_11163__$1 = (function (){var statearr_11187 = state_11163;(statearr_11187[(15)] = inst_11156);
return statearr_11187;
})();var statearr_11188_11215 = state_11163__$1;(statearr_11188_11215[(2)] = null);
(statearr_11188_11215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (5)))
{var inst_11112 = cljs.core.async.close_BANG_.call(null,out);var state_11163__$1 = state_11163;var statearr_11189_11216 = state_11163__$1;(statearr_11189_11216[(2)] = inst_11112);
(statearr_11189_11216[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (14)))
{var inst_11134 = (state_11163[(7)]);var inst_11136 = cljs.core.chunked_seq_QMARK_.call(null,inst_11134);var state_11163__$1 = state_11163;if(inst_11136)
{var statearr_11190_11217 = state_11163__$1;(statearr_11190_11217[(1)] = (17));
} else
{var statearr_11191_11218 = state_11163__$1;(statearr_11191_11218[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (16)))
{var inst_11152 = (state_11163[(2)]);var state_11163__$1 = state_11163;var statearr_11192_11219 = state_11163__$1;(statearr_11192_11219[(2)] = inst_11152);
(statearr_11192_11219[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11164 === (10)))
{var inst_11121 = (state_11163[(10)]);var inst_11123 = (state_11163[(11)]);var inst_11128 = cljs.core._nth.call(null,inst_11121,inst_11123);var state_11163__$1 = state_11163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11163__$1,(13),out,inst_11128);
} else
{if((state_val_11164 === (18)))
{var inst_11134 = (state_11163[(7)]);var inst_11143 = cljs.core.first.call(null,inst_11134);var state_11163__$1 = state_11163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11163__$1,(20),out,inst_11143);
} else
{if((state_val_11164 === (8)))
{var inst_11122 = (state_11163[(8)]);var inst_11123 = (state_11163[(11)]);var inst_11125 = (inst_11123 < inst_11122);var inst_11126 = inst_11125;var state_11163__$1 = state_11163;if(cljs.core.truth_(inst_11126))
{var statearr_11193_11220 = state_11163__$1;(statearr_11193_11220[(1)] = (10));
} else
{var statearr_11194_11221 = state_11163__$1;(statearr_11194_11221[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto__))
;return ((function (switch__6340__auto__,c__6355__auto__){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11198[(0)] = state_machine__6341__auto__);
(statearr_11198[(1)] = (1));
return statearr_11198;
});
var state_machine__6341__auto____1 = (function (state_11163){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11163);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11199){if((e11199 instanceof Object))
{var ex__6344__auto__ = e11199;var statearr_11200_11222 = state_11163;(statearr_11200_11222[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11163);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11199;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11223 = state_11163;
state_11163 = G__11223;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11163){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto__))
})();var state__6357__auto__ = (function (){var statearr_11201 = f__6356__auto__.call(null);(statearr_11201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto__);
return statearr_11201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto__))
);
return c__6355__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6355__auto___11304 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___11304){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___11304){
return (function (state_11283){var state_val_11284 = (state_11283[(1)]);if((state_val_11284 === (7)))
{var inst_11279 = (state_11283[(2)]);var state_11283__$1 = state_11283;var statearr_11285_11305 = state_11283__$1;(statearr_11285_11305[(2)] = inst_11279);
(statearr_11285_11305[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11284 === (1)))
{var state_11283__$1 = state_11283;var statearr_11286_11306 = state_11283__$1;(statearr_11286_11306[(2)] = null);
(statearr_11286_11306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11284 === (4)))
{var inst_11266 = (state_11283[(7)]);var inst_11266__$1 = (state_11283[(2)]);var inst_11267 = (inst_11266__$1 == null);var state_11283__$1 = (function (){var statearr_11287 = state_11283;(statearr_11287[(7)] = inst_11266__$1);
return statearr_11287;
})();if(cljs.core.truth_(inst_11267))
{var statearr_11288_11307 = state_11283__$1;(statearr_11288_11307[(1)] = (5));
} else
{var statearr_11289_11308 = state_11283__$1;(statearr_11289_11308[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11284 === (6)))
{var inst_11266 = (state_11283[(7)]);var state_11283__$1 = state_11283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11283__$1,(11),to,inst_11266);
} else
{if((state_val_11284 === (3)))
{var inst_11281 = (state_11283[(2)]);var state_11283__$1 = state_11283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11283__$1,inst_11281);
} else
{if((state_val_11284 === (2)))
{var state_11283__$1 = state_11283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11283__$1,(4),from);
} else
{if((state_val_11284 === (11)))
{var inst_11276 = (state_11283[(2)]);var state_11283__$1 = (function (){var statearr_11290 = state_11283;(statearr_11290[(8)] = inst_11276);
return statearr_11290;
})();var statearr_11291_11309 = state_11283__$1;(statearr_11291_11309[(2)] = null);
(statearr_11291_11309[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11284 === (9)))
{var state_11283__$1 = state_11283;var statearr_11292_11310 = state_11283__$1;(statearr_11292_11310[(2)] = null);
(statearr_11292_11310[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11284 === (5)))
{var state_11283__$1 = state_11283;if(cljs.core.truth_(close_QMARK_))
{var statearr_11293_11311 = state_11283__$1;(statearr_11293_11311[(1)] = (8));
} else
{var statearr_11294_11312 = state_11283__$1;(statearr_11294_11312[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11284 === (10)))
{var inst_11273 = (state_11283[(2)]);var state_11283__$1 = state_11283;var statearr_11295_11313 = state_11283__$1;(statearr_11295_11313[(2)] = inst_11273);
(statearr_11295_11313[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11284 === (8)))
{var inst_11270 = cljs.core.async.close_BANG_.call(null,to);var state_11283__$1 = state_11283;var statearr_11296_11314 = state_11283__$1;(statearr_11296_11314[(2)] = inst_11270);
(statearr_11296_11314[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto___11304))
;return ((function (switch__6340__auto__,c__6355__auto___11304){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11300 = [null,null,null,null,null,null,null,null,null];(statearr_11300[(0)] = state_machine__6341__auto__);
(statearr_11300[(1)] = (1));
return statearr_11300;
});
var state_machine__6341__auto____1 = (function (state_11283){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11301){if((e11301 instanceof Object))
{var ex__6344__auto__ = e11301;var statearr_11302_11315 = state_11283;(statearr_11302_11315[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11301;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11316 = state_11283;
state_11283 = G__11316;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11283){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___11304))
})();var state__6357__auto__ = (function (){var statearr_11303 = f__6356__auto__.call(null);(statearr_11303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___11304);
return statearr_11303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___11304))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
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
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6355__auto___11403 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___11403,tc,fc){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___11403,tc,fc){
return (function (state_11381){var state_val_11382 = (state_11381[(1)]);if((state_val_11382 === (7)))
{var inst_11377 = (state_11381[(2)]);var state_11381__$1 = state_11381;var statearr_11383_11404 = state_11381__$1;(statearr_11383_11404[(2)] = inst_11377);
(statearr_11383_11404[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11382 === (1)))
{var state_11381__$1 = state_11381;var statearr_11384_11405 = state_11381__$1;(statearr_11384_11405[(2)] = null);
(statearr_11384_11405[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11382 === (4)))
{var inst_11362 = (state_11381[(7)]);var inst_11362__$1 = (state_11381[(2)]);var inst_11363 = (inst_11362__$1 == null);var state_11381__$1 = (function (){var statearr_11385 = state_11381;(statearr_11385[(7)] = inst_11362__$1);
return statearr_11385;
})();if(cljs.core.truth_(inst_11363))
{var statearr_11386_11406 = state_11381__$1;(statearr_11386_11406[(1)] = (5));
} else
{var statearr_11387_11407 = state_11381__$1;(statearr_11387_11407[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11382 === (6)))
{var inst_11362 = (state_11381[(7)]);var inst_11368 = p.call(null,inst_11362);var state_11381__$1 = state_11381;if(cljs.core.truth_(inst_11368))
{var statearr_11388_11408 = state_11381__$1;(statearr_11388_11408[(1)] = (9));
} else
{var statearr_11389_11409 = state_11381__$1;(statearr_11389_11409[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11382 === (3)))
{var inst_11379 = (state_11381[(2)]);var state_11381__$1 = state_11381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11381__$1,inst_11379);
} else
{if((state_val_11382 === (2)))
{var state_11381__$1 = state_11381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11381__$1,(4),ch);
} else
{if((state_val_11382 === (11)))
{var inst_11362 = (state_11381[(7)]);var inst_11372 = (state_11381[(2)]);var state_11381__$1 = state_11381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11381__$1,(8),inst_11372,inst_11362);
} else
{if((state_val_11382 === (9)))
{var state_11381__$1 = state_11381;var statearr_11390_11410 = state_11381__$1;(statearr_11390_11410[(2)] = tc);
(statearr_11390_11410[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11382 === (5)))
{var inst_11365 = cljs.core.async.close_BANG_.call(null,tc);var inst_11366 = cljs.core.async.close_BANG_.call(null,fc);var state_11381__$1 = (function (){var statearr_11391 = state_11381;(statearr_11391[(8)] = inst_11365);
return statearr_11391;
})();var statearr_11392_11411 = state_11381__$1;(statearr_11392_11411[(2)] = inst_11366);
(statearr_11392_11411[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11382 === (10)))
{var state_11381__$1 = state_11381;var statearr_11393_11412 = state_11381__$1;(statearr_11393_11412[(2)] = fc);
(statearr_11393_11412[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11382 === (8)))
{var inst_11374 = (state_11381[(2)]);var state_11381__$1 = (function (){var statearr_11394 = state_11381;(statearr_11394[(9)] = inst_11374);
return statearr_11394;
})();var statearr_11395_11413 = state_11381__$1;(statearr_11395_11413[(2)] = null);
(statearr_11395_11413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto___11403,tc,fc))
;return ((function (switch__6340__auto__,c__6355__auto___11403,tc,fc){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11399 = [null,null,null,null,null,null,null,null,null,null];(statearr_11399[(0)] = state_machine__6341__auto__);
(statearr_11399[(1)] = (1));
return statearr_11399;
});
var state_machine__6341__auto____1 = (function (state_11381){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11381);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11400){if((e11400 instanceof Object))
{var ex__6344__auto__ = e11400;var statearr_11401_11414 = state_11381;(statearr_11401_11414[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11381);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11400;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11415 = state_11381;
state_11381 = G__11415;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11381){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___11403,tc,fc))
})();var state__6357__auto__ = (function (){var statearr_11402 = f__6356__auto__.call(null);(statearr_11402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___11403);
return statearr_11402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___11403,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6355__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto__){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto__){
return (function (state_11462){var state_val_11463 = (state_11462[(1)]);if((state_val_11463 === (7)))
{var inst_11458 = (state_11462[(2)]);var state_11462__$1 = state_11462;var statearr_11464_11480 = state_11462__$1;(statearr_11464_11480[(2)] = inst_11458);
(statearr_11464_11480[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11463 === (6)))
{var inst_11448 = (state_11462[(7)]);var inst_11451 = (state_11462[(8)]);var inst_11455 = f.call(null,inst_11448,inst_11451);var inst_11448__$1 = inst_11455;var state_11462__$1 = (function (){var statearr_11465 = state_11462;(statearr_11465[(7)] = inst_11448__$1);
return statearr_11465;
})();var statearr_11466_11481 = state_11462__$1;(statearr_11466_11481[(2)] = null);
(statearr_11466_11481[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11463 === (5)))
{var inst_11448 = (state_11462[(7)]);var state_11462__$1 = state_11462;var statearr_11467_11482 = state_11462__$1;(statearr_11467_11482[(2)] = inst_11448);
(statearr_11467_11482[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11463 === (4)))
{var inst_11451 = (state_11462[(8)]);var inst_11451__$1 = (state_11462[(2)]);var inst_11452 = (inst_11451__$1 == null);var state_11462__$1 = (function (){var statearr_11468 = state_11462;(statearr_11468[(8)] = inst_11451__$1);
return statearr_11468;
})();if(cljs.core.truth_(inst_11452))
{var statearr_11469_11483 = state_11462__$1;(statearr_11469_11483[(1)] = (5));
} else
{var statearr_11470_11484 = state_11462__$1;(statearr_11470_11484[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11463 === (3)))
{var inst_11460 = (state_11462[(2)]);var state_11462__$1 = state_11462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11462__$1,inst_11460);
} else
{if((state_val_11463 === (2)))
{var state_11462__$1 = state_11462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11462__$1,(4),ch);
} else
{if((state_val_11463 === (1)))
{var inst_11448 = init;var state_11462__$1 = (function (){var statearr_11471 = state_11462;(statearr_11471[(7)] = inst_11448);
return statearr_11471;
})();var statearr_11472_11485 = state_11462__$1;(statearr_11472_11485[(2)] = null);
(statearr_11472_11485[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6355__auto__))
;return ((function (switch__6340__auto__,c__6355__auto__){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11476 = [null,null,null,null,null,null,null,null,null];(statearr_11476[(0)] = state_machine__6341__auto__);
(statearr_11476[(1)] = (1));
return statearr_11476;
});
var state_machine__6341__auto____1 = (function (state_11462){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11462);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11477){if((e11477 instanceof Object))
{var ex__6344__auto__ = e11477;var statearr_11478_11486 = state_11462;(statearr_11478_11486[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11462);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11477;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11487 = state_11462;
state_11462 = G__11487;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11462){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto__))
})();var state__6357__auto__ = (function (){var statearr_11479 = f__6356__auto__.call(null);(statearr_11479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto__);
return statearr_11479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto__))
);
return c__6355__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6355__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto__){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto__){
return (function (state_11549){var state_val_11550 = (state_11549[(1)]);if((state_val_11550 === (7)))
{var inst_11530 = (state_11549[(7)]);var inst_11535 = (state_11549[(2)]);var inst_11536 = cljs.core.next.call(null,inst_11530);var inst_11530__$1 = inst_11536;var state_11549__$1 = (function (){var statearr_11551 = state_11549;(statearr_11551[(8)] = inst_11535);
(statearr_11551[(7)] = inst_11530__$1);
return statearr_11551;
})();var statearr_11552_11570 = state_11549__$1;(statearr_11552_11570[(2)] = null);
(statearr_11552_11570[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11550 === (1)))
{var inst_11529 = cljs.core.seq.call(null,coll);var inst_11530 = inst_11529;var state_11549__$1 = (function (){var statearr_11553 = state_11549;(statearr_11553[(7)] = inst_11530);
return statearr_11553;
})();var statearr_11554_11571 = state_11549__$1;(statearr_11554_11571[(2)] = null);
(statearr_11554_11571[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11550 === (4)))
{var inst_11530 = (state_11549[(7)]);var inst_11533 = cljs.core.first.call(null,inst_11530);var state_11549__$1 = state_11549;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11549__$1,(7),ch,inst_11533);
} else
{if((state_val_11550 === (6)))
{var inst_11545 = (state_11549[(2)]);var state_11549__$1 = state_11549;var statearr_11555_11572 = state_11549__$1;(statearr_11555_11572[(2)] = inst_11545);
(statearr_11555_11572[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11550 === (3)))
{var inst_11547 = (state_11549[(2)]);var state_11549__$1 = state_11549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11549__$1,inst_11547);
} else
{if((state_val_11550 === (2)))
{var inst_11530 = (state_11549[(7)]);var state_11549__$1 = state_11549;if(cljs.core.truth_(inst_11530))
{var statearr_11556_11573 = state_11549__$1;(statearr_11556_11573[(1)] = (4));
} else
{var statearr_11557_11574 = state_11549__$1;(statearr_11557_11574[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11550 === (9)))
{var state_11549__$1 = state_11549;var statearr_11558_11575 = state_11549__$1;(statearr_11558_11575[(2)] = null);
(statearr_11558_11575[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11550 === (5)))
{var state_11549__$1 = state_11549;if(cljs.core.truth_(close_QMARK_))
{var statearr_11559_11576 = state_11549__$1;(statearr_11559_11576[(1)] = (8));
} else
{var statearr_11560_11577 = state_11549__$1;(statearr_11560_11577[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11550 === (10)))
{var inst_11543 = (state_11549[(2)]);var state_11549__$1 = state_11549;var statearr_11561_11578 = state_11549__$1;(statearr_11561_11578[(2)] = inst_11543);
(statearr_11561_11578[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11550 === (8)))
{var inst_11540 = cljs.core.async.close_BANG_.call(null,ch);var state_11549__$1 = state_11549;var statearr_11562_11579 = state_11549__$1;(statearr_11562_11579[(2)] = inst_11540);
(statearr_11562_11579[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto__))
;return ((function (switch__6340__auto__,c__6355__auto__){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11566 = [null,null,null,null,null,null,null,null,null];(statearr_11566[(0)] = state_machine__6341__auto__);
(statearr_11566[(1)] = (1));
return statearr_11566;
});
var state_machine__6341__auto____1 = (function (state_11549){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11549);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11567){if((e11567 instanceof Object))
{var ex__6344__auto__ = e11567;var statearr_11568_11580 = state_11549;(statearr_11568_11580[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11549);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11567;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11581 = state_11549;
state_11549 = G__11581;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11549){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto__))
})();var state__6357__auto__ = (function (){var statearr_11569 = f__6356__auto__.call(null);(statearr_11569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto__);
return statearr_11569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto__))
);
return c__6355__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11583 = {};return obj11583;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3541__auto__ = _;if(and__3541__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4180__auto__ = (((_ == null))?null:_);return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11585 = {};return obj11585;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11809 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11809 = (function (cs,ch,mult,meta11810){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11810 = meta11810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11809.cljs$lang$type = true;
cljs.core.async.t11809.cljs$lang$ctorStr = "cljs.core.async/t11809";
cljs.core.async.t11809.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11809");
});})(cs))
;
cljs.core.async.t11809.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11809.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11809.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11809.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11809.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11809.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11811){var self__ = this;
var _11811__$1 = this;return self__.meta11810;
});})(cs))
;
cljs.core.async.t11809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11811,meta11810__$1){var self__ = this;
var _11811__$1 = this;return (new cljs.core.async.t11809(self__.cs,self__.ch,self__.mult,meta11810__$1));
});})(cs))
;
cljs.core.async.__GT_t11809 = ((function (cs){
return (function __GT_t11809(cs__$1,ch__$1,mult__$1,meta11810){return (new cljs.core.async.t11809(cs__$1,ch__$1,mult__$1,meta11810));
});})(cs))
;
}
return (new cljs.core.async.t11809(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6355__auto___12032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12032,cs,m,dchan,dctr,done){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12032,cs,m,dchan,dctr,done){
return (function (state_11946){var state_val_11947 = (state_11946[(1)]);if((state_val_11947 === (7)))
{var inst_11942 = (state_11946[(2)]);var state_11946__$1 = state_11946;var statearr_11948_12033 = state_11946__$1;(statearr_11948_12033[(2)] = inst_11942);
(statearr_11948_12033[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (20)))
{var inst_11843 = (state_11946[(7)]);var inst_11853 = cljs.core.first.call(null,inst_11843);var inst_11854 = cljs.core.nth.call(null,inst_11853,(0),null);var inst_11855 = cljs.core.nth.call(null,inst_11853,(1),null);var state_11946__$1 = (function (){var statearr_11949 = state_11946;(statearr_11949[(8)] = inst_11854);
return statearr_11949;
})();if(cljs.core.truth_(inst_11855))
{var statearr_11950_12034 = state_11946__$1;(statearr_11950_12034[(1)] = (22));
} else
{var statearr_11951_12035 = state_11946__$1;(statearr_11951_12035[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (27)))
{var inst_11885 = (state_11946[(9)]);var inst_11883 = (state_11946[(10)]);var inst_11890 = cljs.core._nth.call(null,inst_11883,inst_11885);var state_11946__$1 = (function (){var statearr_11952 = state_11946;(statearr_11952[(11)] = inst_11890);
return statearr_11952;
})();var statearr_11953_12036 = state_11946__$1;(statearr_11953_12036[(2)] = null);
(statearr_11953_12036[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (1)))
{var state_11946__$1 = state_11946;var statearr_11954_12037 = state_11946__$1;(statearr_11954_12037[(2)] = null);
(statearr_11954_12037[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (24)))
{var inst_11843 = (state_11946[(7)]);var inst_11860 = (state_11946[(2)]);var inst_11861 = cljs.core.next.call(null,inst_11843);var inst_11823 = inst_11861;var inst_11824 = null;var inst_11825 = (0);var inst_11826 = (0);var state_11946__$1 = (function (){var statearr_11955 = state_11946;(statearr_11955[(12)] = inst_11860);
(statearr_11955[(13)] = inst_11823);
(statearr_11955[(14)] = inst_11826);
(statearr_11955[(15)] = inst_11825);
(statearr_11955[(16)] = inst_11824);
return statearr_11955;
})();var statearr_11956_12038 = state_11946__$1;(statearr_11956_12038[(2)] = null);
(statearr_11956_12038[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (39)))
{var inst_11903 = (state_11946[(17)]);var inst_11921 = (state_11946[(2)]);var inst_11922 = cljs.core.next.call(null,inst_11903);var inst_11882 = inst_11922;var inst_11883 = null;var inst_11884 = (0);var inst_11885 = (0);var state_11946__$1 = (function (){var statearr_11960 = state_11946;(statearr_11960[(18)] = inst_11884);
(statearr_11960[(19)] = inst_11882);
(statearr_11960[(9)] = inst_11885);
(statearr_11960[(20)] = inst_11921);
(statearr_11960[(10)] = inst_11883);
return statearr_11960;
})();var statearr_11961_12039 = state_11946__$1;(statearr_11961_12039[(2)] = null);
(statearr_11961_12039[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (4)))
{var inst_11814 = (state_11946[(21)]);var inst_11814__$1 = (state_11946[(2)]);var inst_11815 = (inst_11814__$1 == null);var state_11946__$1 = (function (){var statearr_11962 = state_11946;(statearr_11962[(21)] = inst_11814__$1);
return statearr_11962;
})();if(cljs.core.truth_(inst_11815))
{var statearr_11963_12040 = state_11946__$1;(statearr_11963_12040[(1)] = (5));
} else
{var statearr_11964_12041 = state_11946__$1;(statearr_11964_12041[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (15)))
{var inst_11823 = (state_11946[(13)]);var inst_11826 = (state_11946[(14)]);var inst_11825 = (state_11946[(15)]);var inst_11824 = (state_11946[(16)]);var inst_11839 = (state_11946[(2)]);var inst_11840 = (inst_11826 + (1));var tmp11957 = inst_11823;var tmp11958 = inst_11825;var tmp11959 = inst_11824;var inst_11823__$1 = tmp11957;var inst_11824__$1 = tmp11959;var inst_11825__$1 = tmp11958;var inst_11826__$1 = inst_11840;var state_11946__$1 = (function (){var statearr_11965 = state_11946;(statearr_11965[(13)] = inst_11823__$1);
(statearr_11965[(14)] = inst_11826__$1);
(statearr_11965[(15)] = inst_11825__$1);
(statearr_11965[(16)] = inst_11824__$1);
(statearr_11965[(22)] = inst_11839);
return statearr_11965;
})();var statearr_11966_12042 = state_11946__$1;(statearr_11966_12042[(2)] = null);
(statearr_11966_12042[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (21)))
{var inst_11864 = (state_11946[(2)]);var state_11946__$1 = state_11946;var statearr_11967_12043 = state_11946__$1;(statearr_11967_12043[(2)] = inst_11864);
(statearr_11967_12043[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (31)))
{var inst_11890 = (state_11946[(11)]);var inst_11891 = (state_11946[(2)]);var inst_11892 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11893 = cljs.core.async.untap_STAR_.call(null,m,inst_11890);var state_11946__$1 = (function (){var statearr_11968 = state_11946;(statearr_11968[(23)] = inst_11891);
(statearr_11968[(24)] = inst_11892);
return statearr_11968;
})();var statearr_11969_12044 = state_11946__$1;(statearr_11969_12044[(2)] = inst_11893);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11946__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (32)))
{var inst_11890 = (state_11946[(11)]);var inst_11814 = (state_11946[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11946,(31),Object,null,(30));var inst_11897 = cljs.core.async.put_BANG_.call(null,inst_11890,inst_11814,done);var state_11946__$1 = state_11946;var statearr_11970_12045 = state_11946__$1;(statearr_11970_12045[(2)] = inst_11897);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11946__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (40)))
{var inst_11912 = (state_11946[(25)]);var inst_11913 = (state_11946[(2)]);var inst_11914 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11915 = cljs.core.async.untap_STAR_.call(null,m,inst_11912);var state_11946__$1 = (function (){var statearr_11971 = state_11946;(statearr_11971[(26)] = inst_11914);
(statearr_11971[(27)] = inst_11913);
return statearr_11971;
})();var statearr_11972_12046 = state_11946__$1;(statearr_11972_12046[(2)] = inst_11915);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11946__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (33)))
{var inst_11903 = (state_11946[(17)]);var inst_11905 = cljs.core.chunked_seq_QMARK_.call(null,inst_11903);var state_11946__$1 = state_11946;if(inst_11905)
{var statearr_11973_12047 = state_11946__$1;(statearr_11973_12047[(1)] = (36));
} else
{var statearr_11974_12048 = state_11946__$1;(statearr_11974_12048[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (13)))
{var inst_11833 = (state_11946[(28)]);var inst_11836 = cljs.core.async.close_BANG_.call(null,inst_11833);var state_11946__$1 = state_11946;var statearr_11975_12049 = state_11946__$1;(statearr_11975_12049[(2)] = inst_11836);
(statearr_11975_12049[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (22)))
{var inst_11854 = (state_11946[(8)]);var inst_11857 = cljs.core.async.close_BANG_.call(null,inst_11854);var state_11946__$1 = state_11946;var statearr_11976_12050 = state_11946__$1;(statearr_11976_12050[(2)] = inst_11857);
(statearr_11976_12050[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (36)))
{var inst_11903 = (state_11946[(17)]);var inst_11907 = cljs.core.chunk_first.call(null,inst_11903);var inst_11908 = cljs.core.chunk_rest.call(null,inst_11903);var inst_11909 = cljs.core.count.call(null,inst_11907);var inst_11882 = inst_11908;var inst_11883 = inst_11907;var inst_11884 = inst_11909;var inst_11885 = (0);var state_11946__$1 = (function (){var statearr_11977 = state_11946;(statearr_11977[(18)] = inst_11884);
(statearr_11977[(19)] = inst_11882);
(statearr_11977[(9)] = inst_11885);
(statearr_11977[(10)] = inst_11883);
return statearr_11977;
})();var statearr_11978_12051 = state_11946__$1;(statearr_11978_12051[(2)] = null);
(statearr_11978_12051[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (41)))
{var inst_11912 = (state_11946[(25)]);var inst_11814 = (state_11946[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11946,(40),Object,null,(39));var inst_11919 = cljs.core.async.put_BANG_.call(null,inst_11912,inst_11814,done);var state_11946__$1 = state_11946;var statearr_11979_12052 = state_11946__$1;(statearr_11979_12052[(2)] = inst_11919);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11946__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (43)))
{var state_11946__$1 = state_11946;var statearr_11980_12053 = state_11946__$1;(statearr_11980_12053[(2)] = null);
(statearr_11980_12053[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (29)))
{var inst_11930 = (state_11946[(2)]);var state_11946__$1 = state_11946;var statearr_11981_12054 = state_11946__$1;(statearr_11981_12054[(2)] = inst_11930);
(statearr_11981_12054[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (44)))
{var inst_11939 = (state_11946[(2)]);var state_11946__$1 = (function (){var statearr_11982 = state_11946;(statearr_11982[(29)] = inst_11939);
return statearr_11982;
})();var statearr_11983_12055 = state_11946__$1;(statearr_11983_12055[(2)] = null);
(statearr_11983_12055[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (6)))
{var inst_11874 = (state_11946[(30)]);var inst_11873 = cljs.core.deref.call(null,cs);var inst_11874__$1 = cljs.core.keys.call(null,inst_11873);var inst_11875 = cljs.core.count.call(null,inst_11874__$1);var inst_11876 = cljs.core.reset_BANG_.call(null,dctr,inst_11875);var inst_11881 = cljs.core.seq.call(null,inst_11874__$1);var inst_11882 = inst_11881;var inst_11883 = null;var inst_11884 = (0);var inst_11885 = (0);var state_11946__$1 = (function (){var statearr_11984 = state_11946;(statearr_11984[(18)] = inst_11884);
(statearr_11984[(19)] = inst_11882);
(statearr_11984[(30)] = inst_11874__$1);
(statearr_11984[(9)] = inst_11885);
(statearr_11984[(31)] = inst_11876);
(statearr_11984[(10)] = inst_11883);
return statearr_11984;
})();var statearr_11985_12056 = state_11946__$1;(statearr_11985_12056[(2)] = null);
(statearr_11985_12056[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (28)))
{var inst_11882 = (state_11946[(19)]);var inst_11903 = (state_11946[(17)]);var inst_11903__$1 = cljs.core.seq.call(null,inst_11882);var state_11946__$1 = (function (){var statearr_11986 = state_11946;(statearr_11986[(17)] = inst_11903__$1);
return statearr_11986;
})();if(inst_11903__$1)
{var statearr_11987_12057 = state_11946__$1;(statearr_11987_12057[(1)] = (33));
} else
{var statearr_11988_12058 = state_11946__$1;(statearr_11988_12058[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (25)))
{var inst_11884 = (state_11946[(18)]);var inst_11885 = (state_11946[(9)]);var inst_11887 = (inst_11885 < inst_11884);var inst_11888 = inst_11887;var state_11946__$1 = state_11946;if(cljs.core.truth_(inst_11888))
{var statearr_11989_12059 = state_11946__$1;(statearr_11989_12059[(1)] = (27));
} else
{var statearr_11990_12060 = state_11946__$1;(statearr_11990_12060[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (34)))
{var state_11946__$1 = state_11946;var statearr_11991_12061 = state_11946__$1;(statearr_11991_12061[(2)] = null);
(statearr_11991_12061[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (17)))
{var state_11946__$1 = state_11946;var statearr_11992_12062 = state_11946__$1;(statearr_11992_12062[(2)] = null);
(statearr_11992_12062[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (3)))
{var inst_11944 = (state_11946[(2)]);var state_11946__$1 = state_11946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11946__$1,inst_11944);
} else
{if((state_val_11947 === (12)))
{var inst_11869 = (state_11946[(2)]);var state_11946__$1 = state_11946;var statearr_11993_12063 = state_11946__$1;(statearr_11993_12063[(2)] = inst_11869);
(statearr_11993_12063[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (2)))
{var state_11946__$1 = state_11946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11946__$1,(4),ch);
} else
{if((state_val_11947 === (23)))
{var state_11946__$1 = state_11946;var statearr_11994_12064 = state_11946__$1;(statearr_11994_12064[(2)] = null);
(statearr_11994_12064[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (35)))
{var inst_11928 = (state_11946[(2)]);var state_11946__$1 = state_11946;var statearr_11995_12065 = state_11946__$1;(statearr_11995_12065[(2)] = inst_11928);
(statearr_11995_12065[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (19)))
{var inst_11843 = (state_11946[(7)]);var inst_11847 = cljs.core.chunk_first.call(null,inst_11843);var inst_11848 = cljs.core.chunk_rest.call(null,inst_11843);var inst_11849 = cljs.core.count.call(null,inst_11847);var inst_11823 = inst_11848;var inst_11824 = inst_11847;var inst_11825 = inst_11849;var inst_11826 = (0);var state_11946__$1 = (function (){var statearr_11996 = state_11946;(statearr_11996[(13)] = inst_11823);
(statearr_11996[(14)] = inst_11826);
(statearr_11996[(15)] = inst_11825);
(statearr_11996[(16)] = inst_11824);
return statearr_11996;
})();var statearr_11997_12066 = state_11946__$1;(statearr_11997_12066[(2)] = null);
(statearr_11997_12066[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (11)))
{var inst_11823 = (state_11946[(13)]);var inst_11843 = (state_11946[(7)]);var inst_11843__$1 = cljs.core.seq.call(null,inst_11823);var state_11946__$1 = (function (){var statearr_11998 = state_11946;(statearr_11998[(7)] = inst_11843__$1);
return statearr_11998;
})();if(inst_11843__$1)
{var statearr_11999_12067 = state_11946__$1;(statearr_11999_12067[(1)] = (16));
} else
{var statearr_12000_12068 = state_11946__$1;(statearr_12000_12068[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (9)))
{var inst_11871 = (state_11946[(2)]);var state_11946__$1 = state_11946;var statearr_12001_12069 = state_11946__$1;(statearr_12001_12069[(2)] = inst_11871);
(statearr_12001_12069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (5)))
{var inst_11821 = cljs.core.deref.call(null,cs);var inst_11822 = cljs.core.seq.call(null,inst_11821);var inst_11823 = inst_11822;var inst_11824 = null;var inst_11825 = (0);var inst_11826 = (0);var state_11946__$1 = (function (){var statearr_12002 = state_11946;(statearr_12002[(13)] = inst_11823);
(statearr_12002[(14)] = inst_11826);
(statearr_12002[(15)] = inst_11825);
(statearr_12002[(16)] = inst_11824);
return statearr_12002;
})();var statearr_12003_12070 = state_11946__$1;(statearr_12003_12070[(2)] = null);
(statearr_12003_12070[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (14)))
{var state_11946__$1 = state_11946;var statearr_12004_12071 = state_11946__$1;(statearr_12004_12071[(2)] = null);
(statearr_12004_12071[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (45)))
{var inst_11936 = (state_11946[(2)]);var state_11946__$1 = state_11946;var statearr_12005_12072 = state_11946__$1;(statearr_12005_12072[(2)] = inst_11936);
(statearr_12005_12072[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (26)))
{var inst_11874 = (state_11946[(30)]);var inst_11932 = (state_11946[(2)]);var inst_11933 = cljs.core.seq.call(null,inst_11874);var state_11946__$1 = (function (){var statearr_12006 = state_11946;(statearr_12006[(32)] = inst_11932);
return statearr_12006;
})();if(inst_11933)
{var statearr_12007_12073 = state_11946__$1;(statearr_12007_12073[(1)] = (42));
} else
{var statearr_12008_12074 = state_11946__$1;(statearr_12008_12074[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (16)))
{var inst_11843 = (state_11946[(7)]);var inst_11845 = cljs.core.chunked_seq_QMARK_.call(null,inst_11843);var state_11946__$1 = state_11946;if(inst_11845)
{var statearr_12012_12075 = state_11946__$1;(statearr_12012_12075[(1)] = (19));
} else
{var statearr_12013_12076 = state_11946__$1;(statearr_12013_12076[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (38)))
{var inst_11925 = (state_11946[(2)]);var state_11946__$1 = state_11946;var statearr_12014_12077 = state_11946__$1;(statearr_12014_12077[(2)] = inst_11925);
(statearr_12014_12077[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (30)))
{var inst_11884 = (state_11946[(18)]);var inst_11882 = (state_11946[(19)]);var inst_11885 = (state_11946[(9)]);var inst_11883 = (state_11946[(10)]);var inst_11899 = (state_11946[(2)]);var inst_11900 = (inst_11885 + (1));var tmp12009 = inst_11884;var tmp12010 = inst_11882;var tmp12011 = inst_11883;var inst_11882__$1 = tmp12010;var inst_11883__$1 = tmp12011;var inst_11884__$1 = tmp12009;var inst_11885__$1 = inst_11900;var state_11946__$1 = (function (){var statearr_12015 = state_11946;(statearr_12015[(18)] = inst_11884__$1);
(statearr_12015[(33)] = inst_11899);
(statearr_12015[(19)] = inst_11882__$1);
(statearr_12015[(9)] = inst_11885__$1);
(statearr_12015[(10)] = inst_11883__$1);
return statearr_12015;
})();var statearr_12016_12078 = state_11946__$1;(statearr_12016_12078[(2)] = null);
(statearr_12016_12078[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (10)))
{var inst_11826 = (state_11946[(14)]);var inst_11824 = (state_11946[(16)]);var inst_11832 = cljs.core._nth.call(null,inst_11824,inst_11826);var inst_11833 = cljs.core.nth.call(null,inst_11832,(0),null);var inst_11834 = cljs.core.nth.call(null,inst_11832,(1),null);var state_11946__$1 = (function (){var statearr_12017 = state_11946;(statearr_12017[(28)] = inst_11833);
return statearr_12017;
})();if(cljs.core.truth_(inst_11834))
{var statearr_12018_12079 = state_11946__$1;(statearr_12018_12079[(1)] = (13));
} else
{var statearr_12019_12080 = state_11946__$1;(statearr_12019_12080[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (18)))
{var inst_11867 = (state_11946[(2)]);var state_11946__$1 = state_11946;var statearr_12020_12081 = state_11946__$1;(statearr_12020_12081[(2)] = inst_11867);
(statearr_12020_12081[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (42)))
{var state_11946__$1 = state_11946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11946__$1,(45),dchan);
} else
{if((state_val_11947 === (37)))
{var inst_11903 = (state_11946[(17)]);var inst_11912 = cljs.core.first.call(null,inst_11903);var state_11946__$1 = (function (){var statearr_12021 = state_11946;(statearr_12021[(25)] = inst_11912);
return statearr_12021;
})();var statearr_12022_12082 = state_11946__$1;(statearr_12022_12082[(2)] = null);
(statearr_12022_12082[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11947 === (8)))
{var inst_11826 = (state_11946[(14)]);var inst_11825 = (state_11946[(15)]);var inst_11828 = (inst_11826 < inst_11825);var inst_11829 = inst_11828;var state_11946__$1 = state_11946;if(cljs.core.truth_(inst_11829))
{var statearr_12023_12083 = state_11946__$1;(statearr_12023_12083[(1)] = (10));
} else
{var statearr_12024_12084 = state_11946__$1;(statearr_12024_12084[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto___12032,cs,m,dchan,dctr,done))
;return ((function (switch__6340__auto__,c__6355__auto___12032,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12028[(0)] = state_machine__6341__auto__);
(statearr_12028[(1)] = (1));
return statearr_12028;
});
var state_machine__6341__auto____1 = (function (state_11946){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11946);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12029){if((e12029 instanceof Object))
{var ex__6344__auto__ = e12029;var statearr_12030_12085 = state_11946;(statearr_12030_12085[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11946);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12029;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12086 = state_11946;
state_11946 = G__12086;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11946){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12032,cs,m,dchan,dctr,done))
})();var state__6357__auto__ = (function (){var statearr_12031 = f__6356__auto__.call(null);(statearr_12031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12032);
return statearr_12031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12032,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12088 = {};return obj12088;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12198 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12198 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12199){
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
this.meta12199 = meta12199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12198.cljs$lang$type = true;
cljs.core.async.t12198.cljs$lang$ctorStr = "cljs.core.async/t12198";
cljs.core.async.t12198.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12198");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12198.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12198.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12198.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12198.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12198.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12198.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12198.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12198.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12200){var self__ = this;
var _12200__$1 = this;return self__.meta12199;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12200,meta12199__$1){var self__ = this;
var _12200__$1 = this;return (new cljs.core.async.t12198(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12199__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12198 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12198(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12199){return (new cljs.core.async.t12198(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12199));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12198(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6355__auto___12307 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12265){var state_val_12266 = (state_12265[(1)]);if((state_val_12266 === (7)))
{var inst_12214 = (state_12265[(7)]);var inst_12219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12214);var state_12265__$1 = state_12265;var statearr_12267_12308 = state_12265__$1;(statearr_12267_12308[(2)] = inst_12219);
(statearr_12267_12308[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (20)))
{var inst_12229 = (state_12265[(8)]);var state_12265__$1 = state_12265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12265__$1,(23),out,inst_12229);
} else
{if((state_val_12266 === (1)))
{var inst_12204 = (state_12265[(9)]);var inst_12204__$1 = calc_state.call(null);var inst_12205 = cljs.core.seq_QMARK_.call(null,inst_12204__$1);var state_12265__$1 = (function (){var statearr_12268 = state_12265;(statearr_12268[(9)] = inst_12204__$1);
return statearr_12268;
})();if(inst_12205)
{var statearr_12269_12309 = state_12265__$1;(statearr_12269_12309[(1)] = (2));
} else
{var statearr_12270_12310 = state_12265__$1;(statearr_12270_12310[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (4)))
{var inst_12204 = (state_12265[(9)]);var inst_12210 = (state_12265[(2)]);var inst_12211 = cljs.core.get.call(null,inst_12210,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12212 = cljs.core.get.call(null,inst_12210,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12213 = cljs.core.get.call(null,inst_12210,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12214 = inst_12204;var state_12265__$1 = (function (){var statearr_12271 = state_12265;(statearr_12271[(10)] = inst_12212);
(statearr_12271[(7)] = inst_12214);
(statearr_12271[(11)] = inst_12211);
(statearr_12271[(12)] = inst_12213);
return statearr_12271;
})();var statearr_12272_12311 = state_12265__$1;(statearr_12272_12311[(2)] = null);
(statearr_12272_12311[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (15)))
{var state_12265__$1 = state_12265;var statearr_12273_12312 = state_12265__$1;(statearr_12273_12312[(2)] = null);
(statearr_12273_12312[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (21)))
{var state_12265__$1 = state_12265;var statearr_12274_12313 = state_12265__$1;(statearr_12274_12313[(2)] = null);
(statearr_12274_12313[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (13)))
{var inst_12261 = (state_12265[(2)]);var state_12265__$1 = state_12265;var statearr_12275_12314 = state_12265__$1;(statearr_12275_12314[(2)] = inst_12261);
(statearr_12275_12314[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (22)))
{var inst_12222 = (state_12265[(13)]);var inst_12258 = (state_12265[(2)]);var inst_12214 = inst_12222;var state_12265__$1 = (function (){var statearr_12276 = state_12265;(statearr_12276[(7)] = inst_12214);
(statearr_12276[(14)] = inst_12258);
return statearr_12276;
})();var statearr_12277_12315 = state_12265__$1;(statearr_12277_12315[(2)] = null);
(statearr_12277_12315[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (6)))
{var inst_12263 = (state_12265[(2)]);var state_12265__$1 = state_12265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12265__$1,inst_12263);
} else
{if((state_val_12266 === (17)))
{var inst_12244 = (state_12265[(15)]);var state_12265__$1 = state_12265;var statearr_12278_12316 = state_12265__$1;(statearr_12278_12316[(2)] = inst_12244);
(statearr_12278_12316[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (3)))
{var inst_12204 = (state_12265[(9)]);var state_12265__$1 = state_12265;var statearr_12279_12317 = state_12265__$1;(statearr_12279_12317[(2)] = inst_12204);
(statearr_12279_12317[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (12)))
{var inst_12225 = (state_12265[(16)]);var inst_12230 = (state_12265[(17)]);var inst_12244 = (state_12265[(15)]);var inst_12244__$1 = inst_12225.call(null,inst_12230);var state_12265__$1 = (function (){var statearr_12280 = state_12265;(statearr_12280[(15)] = inst_12244__$1);
return statearr_12280;
})();if(cljs.core.truth_(inst_12244__$1))
{var statearr_12281_12318 = state_12265__$1;(statearr_12281_12318[(1)] = (17));
} else
{var statearr_12282_12319 = state_12265__$1;(statearr_12282_12319[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (2)))
{var inst_12204 = (state_12265[(9)]);var inst_12207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12204);var state_12265__$1 = state_12265;var statearr_12283_12320 = state_12265__$1;(statearr_12283_12320[(2)] = inst_12207);
(statearr_12283_12320[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (23)))
{var inst_12255 = (state_12265[(2)]);var state_12265__$1 = state_12265;var statearr_12284_12321 = state_12265__$1;(statearr_12284_12321[(2)] = inst_12255);
(statearr_12284_12321[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (19)))
{var inst_12252 = (state_12265[(2)]);var state_12265__$1 = state_12265;if(cljs.core.truth_(inst_12252))
{var statearr_12285_12322 = state_12265__$1;(statearr_12285_12322[(1)] = (20));
} else
{var statearr_12286_12323 = state_12265__$1;(statearr_12286_12323[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (11)))
{var inst_12229 = (state_12265[(8)]);var inst_12235 = (inst_12229 == null);var state_12265__$1 = state_12265;if(cljs.core.truth_(inst_12235))
{var statearr_12287_12324 = state_12265__$1;(statearr_12287_12324[(1)] = (14));
} else
{var statearr_12288_12325 = state_12265__$1;(statearr_12288_12325[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (9)))
{var inst_12222 = (state_12265[(13)]);var inst_12222__$1 = (state_12265[(2)]);var inst_12223 = cljs.core.get.call(null,inst_12222__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12224 = cljs.core.get.call(null,inst_12222__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12225 = cljs.core.get.call(null,inst_12222__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12265__$1 = (function (){var statearr_12289 = state_12265;(statearr_12289[(13)] = inst_12222__$1);
(statearr_12289[(18)] = inst_12224);
(statearr_12289[(16)] = inst_12225);
return statearr_12289;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12265__$1,(10),inst_12223);
} else
{if((state_val_12266 === (5)))
{var inst_12214 = (state_12265[(7)]);var inst_12217 = cljs.core.seq_QMARK_.call(null,inst_12214);var state_12265__$1 = state_12265;if(inst_12217)
{var statearr_12290_12326 = state_12265__$1;(statearr_12290_12326[(1)] = (7));
} else
{var statearr_12291_12327 = state_12265__$1;(statearr_12291_12327[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (14)))
{var inst_12230 = (state_12265[(17)]);var inst_12237 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12230);var state_12265__$1 = state_12265;var statearr_12292_12328 = state_12265__$1;(statearr_12292_12328[(2)] = inst_12237);
(statearr_12292_12328[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (16)))
{var inst_12240 = (state_12265[(2)]);var inst_12241 = calc_state.call(null);var inst_12214 = inst_12241;var state_12265__$1 = (function (){var statearr_12293 = state_12265;(statearr_12293[(19)] = inst_12240);
(statearr_12293[(7)] = inst_12214);
return statearr_12293;
})();var statearr_12294_12329 = state_12265__$1;(statearr_12294_12329[(2)] = null);
(statearr_12294_12329[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (10)))
{var inst_12230 = (state_12265[(17)]);var inst_12229 = (state_12265[(8)]);var inst_12228 = (state_12265[(2)]);var inst_12229__$1 = cljs.core.nth.call(null,inst_12228,(0),null);var inst_12230__$1 = cljs.core.nth.call(null,inst_12228,(1),null);var inst_12231 = (inst_12229__$1 == null);var inst_12232 = cljs.core._EQ_.call(null,inst_12230__$1,change);var inst_12233 = (inst_12231) || (inst_12232);var state_12265__$1 = (function (){var statearr_12295 = state_12265;(statearr_12295[(17)] = inst_12230__$1);
(statearr_12295[(8)] = inst_12229__$1);
return statearr_12295;
})();if(cljs.core.truth_(inst_12233))
{var statearr_12296_12330 = state_12265__$1;(statearr_12296_12330[(1)] = (11));
} else
{var statearr_12297_12331 = state_12265__$1;(statearr_12297_12331[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (18)))
{var inst_12224 = (state_12265[(18)]);var inst_12225 = (state_12265[(16)]);var inst_12230 = (state_12265[(17)]);var inst_12247 = cljs.core.empty_QMARK_.call(null,inst_12225);var inst_12248 = inst_12224.call(null,inst_12230);var inst_12249 = cljs.core.not.call(null,inst_12248);var inst_12250 = (inst_12247) && (inst_12249);var state_12265__$1 = state_12265;var statearr_12298_12332 = state_12265__$1;(statearr_12298_12332[(2)] = inst_12250);
(statearr_12298_12332[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12266 === (8)))
{var inst_12214 = (state_12265[(7)]);var state_12265__$1 = state_12265;var statearr_12299_12333 = state_12265__$1;(statearr_12299_12333[(2)] = inst_12214);
(statearr_12299_12333[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto___12307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6340__auto__,c__6355__auto___12307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12303[(0)] = state_machine__6341__auto__);
(statearr_12303[(1)] = (1));
return statearr_12303;
});
var state_machine__6341__auto____1 = (function (state_12265){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_12265);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12304){if((e12304 instanceof Object))
{var ex__6344__auto__ = e12304;var statearr_12305_12334 = state_12265;(statearr_12305_12334[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12265);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12304;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12335 = state_12265;
state_12265 = G__12335;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_12265){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_12265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6357__auto__ = (function (){var statearr_12306 = f__6356__auto__.call(null);(statearr_12306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12307);
return statearr_12306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12307,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12337 = {};return obj12337;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
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
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__12338_SHARP_){if(cljs.core.truth_(p1__12338_SHARP_.call(null,topic)))
{return p1__12338_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12338_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12463 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12463 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12464){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12464 = meta12464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12463.cljs$lang$type = true;
cljs.core.async.t12463.cljs$lang$ctorStr = "cljs.core.async/t12463";
cljs.core.async.t12463.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12463");
});})(mults,ensure_mult))
;
cljs.core.async.t12463.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12463.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12463.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12463.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12463.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12463.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12465){var self__ = this;
var _12465__$1 = this;return self__.meta12464;
});})(mults,ensure_mult))
;
cljs.core.async.t12463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12465,meta12464__$1){var self__ = this;
var _12465__$1 = this;return (new cljs.core.async.t12463(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12464__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12463 = ((function (mults,ensure_mult){
return (function __GT_t12463(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12464){return (new cljs.core.async.t12463(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12464));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12463(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6355__auto___12587 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12587,mults,ensure_mult,p){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12587,mults,ensure_mult,p){
return (function (state_12539){var state_val_12540 = (state_12539[(1)]);if((state_val_12540 === (7)))
{var inst_12535 = (state_12539[(2)]);var state_12539__$1 = state_12539;var statearr_12541_12588 = state_12539__$1;(statearr_12541_12588[(2)] = inst_12535);
(statearr_12541_12588[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (20)))
{var state_12539__$1 = state_12539;var statearr_12542_12589 = state_12539__$1;(statearr_12542_12589[(2)] = null);
(statearr_12542_12589[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (1)))
{var state_12539__$1 = state_12539;var statearr_12543_12590 = state_12539__$1;(statearr_12543_12590[(2)] = null);
(statearr_12543_12590[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (24)))
{var inst_12518 = (state_12539[(7)]);var inst_12468 = (state_12539[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12539,(23),Object,null,(22));var inst_12525 = cljs.core.async.muxch_STAR_.call(null,inst_12518);var state_12539__$1 = state_12539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12539__$1,(25),inst_12525,inst_12468);
} else
{if((state_val_12540 === (4)))
{var inst_12468 = (state_12539[(8)]);var inst_12468__$1 = (state_12539[(2)]);var inst_12469 = (inst_12468__$1 == null);var state_12539__$1 = (function (){var statearr_12544 = state_12539;(statearr_12544[(8)] = inst_12468__$1);
return statearr_12544;
})();if(cljs.core.truth_(inst_12469))
{var statearr_12545_12591 = state_12539__$1;(statearr_12545_12591[(1)] = (5));
} else
{var statearr_12546_12592 = state_12539__$1;(statearr_12546_12592[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (15)))
{var inst_12510 = (state_12539[(2)]);var state_12539__$1 = state_12539;var statearr_12547_12593 = state_12539__$1;(statearr_12547_12593[(2)] = inst_12510);
(statearr_12547_12593[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (21)))
{var inst_12532 = (state_12539[(2)]);var state_12539__$1 = (function (){var statearr_12548 = state_12539;(statearr_12548[(9)] = inst_12532);
return statearr_12548;
})();var statearr_12549_12594 = state_12539__$1;(statearr_12549_12594[(2)] = null);
(statearr_12549_12594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (13)))
{var inst_12492 = (state_12539[(10)]);var inst_12494 = cljs.core.chunked_seq_QMARK_.call(null,inst_12492);var state_12539__$1 = state_12539;if(inst_12494)
{var statearr_12550_12595 = state_12539__$1;(statearr_12550_12595[(1)] = (16));
} else
{var statearr_12551_12596 = state_12539__$1;(statearr_12551_12596[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (22)))
{var inst_12529 = (state_12539[(2)]);var state_12539__$1 = state_12539;var statearr_12552_12597 = state_12539__$1;(statearr_12552_12597[(2)] = inst_12529);
(statearr_12552_12597[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (6)))
{var inst_12516 = (state_12539[(11)]);var inst_12518 = (state_12539[(7)]);var inst_12468 = (state_12539[(8)]);var inst_12516__$1 = topic_fn.call(null,inst_12468);var inst_12517 = cljs.core.deref.call(null,mults);var inst_12518__$1 = cljs.core.get.call(null,inst_12517,inst_12516__$1);var state_12539__$1 = (function (){var statearr_12553 = state_12539;(statearr_12553[(11)] = inst_12516__$1);
(statearr_12553[(7)] = inst_12518__$1);
return statearr_12553;
})();if(cljs.core.truth_(inst_12518__$1))
{var statearr_12554_12598 = state_12539__$1;(statearr_12554_12598[(1)] = (19));
} else
{var statearr_12555_12599 = state_12539__$1;(statearr_12555_12599[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (25)))
{var inst_12527 = (state_12539[(2)]);var state_12539__$1 = state_12539;var statearr_12556_12600 = state_12539__$1;(statearr_12556_12600[(2)] = inst_12527);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12539__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (17)))
{var inst_12492 = (state_12539[(10)]);var inst_12501 = cljs.core.first.call(null,inst_12492);var inst_12502 = cljs.core.async.muxch_STAR_.call(null,inst_12501);var inst_12503 = cljs.core.async.close_BANG_.call(null,inst_12502);var inst_12504 = cljs.core.next.call(null,inst_12492);var inst_12478 = inst_12504;var inst_12479 = null;var inst_12480 = (0);var inst_12481 = (0);var state_12539__$1 = (function (){var statearr_12557 = state_12539;(statearr_12557[(12)] = inst_12479);
(statearr_12557[(13)] = inst_12503);
(statearr_12557[(14)] = inst_12478);
(statearr_12557[(15)] = inst_12481);
(statearr_12557[(16)] = inst_12480);
return statearr_12557;
})();var statearr_12558_12601 = state_12539__$1;(statearr_12558_12601[(2)] = null);
(statearr_12558_12601[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (3)))
{var inst_12537 = (state_12539[(2)]);var state_12539__$1 = state_12539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12539__$1,inst_12537);
} else
{if((state_val_12540 === (12)))
{var inst_12512 = (state_12539[(2)]);var state_12539__$1 = state_12539;var statearr_12559_12602 = state_12539__$1;(statearr_12559_12602[(2)] = inst_12512);
(statearr_12559_12602[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (2)))
{var state_12539__$1 = state_12539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12539__$1,(4),ch);
} else
{if((state_val_12540 === (23)))
{var inst_12516 = (state_12539[(11)]);var inst_12520 = (state_12539[(2)]);var inst_12521 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12516);var state_12539__$1 = (function (){var statearr_12560 = state_12539;(statearr_12560[(17)] = inst_12520);
return statearr_12560;
})();var statearr_12561_12603 = state_12539__$1;(statearr_12561_12603[(2)] = inst_12521);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12539__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (19)))
{var state_12539__$1 = state_12539;var statearr_12562_12604 = state_12539__$1;(statearr_12562_12604[(2)] = null);
(statearr_12562_12604[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (11)))
{var inst_12478 = (state_12539[(14)]);var inst_12492 = (state_12539[(10)]);var inst_12492__$1 = cljs.core.seq.call(null,inst_12478);var state_12539__$1 = (function (){var statearr_12563 = state_12539;(statearr_12563[(10)] = inst_12492__$1);
return statearr_12563;
})();if(inst_12492__$1)
{var statearr_12564_12605 = state_12539__$1;(statearr_12564_12605[(1)] = (13));
} else
{var statearr_12565_12606 = state_12539__$1;(statearr_12565_12606[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (9)))
{var inst_12514 = (state_12539[(2)]);var state_12539__$1 = state_12539;var statearr_12566_12607 = state_12539__$1;(statearr_12566_12607[(2)] = inst_12514);
(statearr_12566_12607[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (5)))
{var inst_12475 = cljs.core.deref.call(null,mults);var inst_12476 = cljs.core.vals.call(null,inst_12475);var inst_12477 = cljs.core.seq.call(null,inst_12476);var inst_12478 = inst_12477;var inst_12479 = null;var inst_12480 = (0);var inst_12481 = (0);var state_12539__$1 = (function (){var statearr_12567 = state_12539;(statearr_12567[(12)] = inst_12479);
(statearr_12567[(14)] = inst_12478);
(statearr_12567[(15)] = inst_12481);
(statearr_12567[(16)] = inst_12480);
return statearr_12567;
})();var statearr_12568_12608 = state_12539__$1;(statearr_12568_12608[(2)] = null);
(statearr_12568_12608[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (14)))
{var state_12539__$1 = state_12539;var statearr_12572_12609 = state_12539__$1;(statearr_12572_12609[(2)] = null);
(statearr_12572_12609[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (16)))
{var inst_12492 = (state_12539[(10)]);var inst_12496 = cljs.core.chunk_first.call(null,inst_12492);var inst_12497 = cljs.core.chunk_rest.call(null,inst_12492);var inst_12498 = cljs.core.count.call(null,inst_12496);var inst_12478 = inst_12497;var inst_12479 = inst_12496;var inst_12480 = inst_12498;var inst_12481 = (0);var state_12539__$1 = (function (){var statearr_12573 = state_12539;(statearr_12573[(12)] = inst_12479);
(statearr_12573[(14)] = inst_12478);
(statearr_12573[(15)] = inst_12481);
(statearr_12573[(16)] = inst_12480);
return statearr_12573;
})();var statearr_12574_12610 = state_12539__$1;(statearr_12574_12610[(2)] = null);
(statearr_12574_12610[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (10)))
{var inst_12479 = (state_12539[(12)]);var inst_12478 = (state_12539[(14)]);var inst_12481 = (state_12539[(15)]);var inst_12480 = (state_12539[(16)]);var inst_12486 = cljs.core._nth.call(null,inst_12479,inst_12481);var inst_12487 = cljs.core.async.muxch_STAR_.call(null,inst_12486);var inst_12488 = cljs.core.async.close_BANG_.call(null,inst_12487);var inst_12489 = (inst_12481 + (1));var tmp12569 = inst_12479;var tmp12570 = inst_12478;var tmp12571 = inst_12480;var inst_12478__$1 = tmp12570;var inst_12479__$1 = tmp12569;var inst_12480__$1 = tmp12571;var inst_12481__$1 = inst_12489;var state_12539__$1 = (function (){var statearr_12575 = state_12539;(statearr_12575[(12)] = inst_12479__$1);
(statearr_12575[(18)] = inst_12488);
(statearr_12575[(14)] = inst_12478__$1);
(statearr_12575[(15)] = inst_12481__$1);
(statearr_12575[(16)] = inst_12480__$1);
return statearr_12575;
})();var statearr_12576_12611 = state_12539__$1;(statearr_12576_12611[(2)] = null);
(statearr_12576_12611[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (18)))
{var inst_12507 = (state_12539[(2)]);var state_12539__$1 = state_12539;var statearr_12577_12612 = state_12539__$1;(statearr_12577_12612[(2)] = inst_12507);
(statearr_12577_12612[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12540 === (8)))
{var inst_12481 = (state_12539[(15)]);var inst_12480 = (state_12539[(16)]);var inst_12483 = (inst_12481 < inst_12480);var inst_12484 = inst_12483;var state_12539__$1 = state_12539;if(cljs.core.truth_(inst_12484))
{var statearr_12578_12613 = state_12539__$1;(statearr_12578_12613[(1)] = (10));
} else
{var statearr_12579_12614 = state_12539__$1;(statearr_12579_12614[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto___12587,mults,ensure_mult,p))
;return ((function (switch__6340__auto__,c__6355__auto___12587,mults,ensure_mult,p){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12583[(0)] = state_machine__6341__auto__);
(statearr_12583[(1)] = (1));
return statearr_12583;
});
var state_machine__6341__auto____1 = (function (state_12539){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_12539);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12584){if((e12584 instanceof Object))
{var ex__6344__auto__ = e12584;var statearr_12585_12615 = state_12539;(statearr_12585_12615[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12584;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12616 = state_12539;
state_12539 = G__12616;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_12539){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_12539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12587,mults,ensure_mult,p))
})();var state__6357__auto__ = (function (){var statearr_12586 = f__6356__auto__.call(null);(statearr_12586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12587);
return statearr_12586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12587,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6355__auto___12753 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12753,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12753,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12723){var state_val_12724 = (state_12723[(1)]);if((state_val_12724 === (7)))
{var state_12723__$1 = state_12723;var statearr_12725_12754 = state_12723__$1;(statearr_12725_12754[(2)] = null);
(statearr_12725_12754[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (1)))
{var state_12723__$1 = state_12723;var statearr_12726_12755 = state_12723__$1;(statearr_12726_12755[(2)] = null);
(statearr_12726_12755[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (4)))
{var inst_12687 = (state_12723[(7)]);var inst_12689 = (inst_12687 < cnt);var state_12723__$1 = state_12723;if(cljs.core.truth_(inst_12689))
{var statearr_12727_12756 = state_12723__$1;(statearr_12727_12756[(1)] = (6));
} else
{var statearr_12728_12757 = state_12723__$1;(statearr_12728_12757[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (15)))
{var inst_12719 = (state_12723[(2)]);var state_12723__$1 = state_12723;var statearr_12729_12758 = state_12723__$1;(statearr_12729_12758[(2)] = inst_12719);
(statearr_12729_12758[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (13)))
{var inst_12712 = cljs.core.async.close_BANG_.call(null,out);var state_12723__$1 = state_12723;var statearr_12730_12759 = state_12723__$1;(statearr_12730_12759[(2)] = inst_12712);
(statearr_12730_12759[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (6)))
{var state_12723__$1 = state_12723;var statearr_12731_12760 = state_12723__$1;(statearr_12731_12760[(2)] = null);
(statearr_12731_12760[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (3)))
{var inst_12721 = (state_12723[(2)]);var state_12723__$1 = state_12723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12723__$1,inst_12721);
} else
{if((state_val_12724 === (12)))
{var inst_12709 = (state_12723[(8)]);var inst_12709__$1 = (state_12723[(2)]);var inst_12710 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12709__$1);var state_12723__$1 = (function (){var statearr_12732 = state_12723;(statearr_12732[(8)] = inst_12709__$1);
return statearr_12732;
})();if(cljs.core.truth_(inst_12710))
{var statearr_12733_12761 = state_12723__$1;(statearr_12733_12761[(1)] = (13));
} else
{var statearr_12734_12762 = state_12723__$1;(statearr_12734_12762[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (2)))
{var inst_12686 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12687 = (0);var state_12723__$1 = (function (){var statearr_12735 = state_12723;(statearr_12735[(7)] = inst_12687);
(statearr_12735[(9)] = inst_12686);
return statearr_12735;
})();var statearr_12736_12763 = state_12723__$1;(statearr_12736_12763[(2)] = null);
(statearr_12736_12763[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (11)))
{var inst_12687 = (state_12723[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12723,(10),Object,null,(9));var inst_12696 = chs__$1.call(null,inst_12687);var inst_12697 = done.call(null,inst_12687);var inst_12698 = cljs.core.async.take_BANG_.call(null,inst_12696,inst_12697);var state_12723__$1 = state_12723;var statearr_12737_12764 = state_12723__$1;(statearr_12737_12764[(2)] = inst_12698);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12723__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (9)))
{var inst_12687 = (state_12723[(7)]);var inst_12700 = (state_12723[(2)]);var inst_12701 = (inst_12687 + (1));var inst_12687__$1 = inst_12701;var state_12723__$1 = (function (){var statearr_12738 = state_12723;(statearr_12738[(10)] = inst_12700);
(statearr_12738[(7)] = inst_12687__$1);
return statearr_12738;
})();var statearr_12739_12765 = state_12723__$1;(statearr_12739_12765[(2)] = null);
(statearr_12739_12765[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (5)))
{var inst_12707 = (state_12723[(2)]);var state_12723__$1 = (function (){var statearr_12740 = state_12723;(statearr_12740[(11)] = inst_12707);
return statearr_12740;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12723__$1,(12),dchan);
} else
{if((state_val_12724 === (14)))
{var inst_12709 = (state_12723[(8)]);var inst_12714 = cljs.core.apply.call(null,f,inst_12709);var state_12723__$1 = state_12723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12723__$1,(16),out,inst_12714);
} else
{if((state_val_12724 === (16)))
{var inst_12716 = (state_12723[(2)]);var state_12723__$1 = (function (){var statearr_12741 = state_12723;(statearr_12741[(12)] = inst_12716);
return statearr_12741;
})();var statearr_12742_12766 = state_12723__$1;(statearr_12742_12766[(2)] = null);
(statearr_12742_12766[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (10)))
{var inst_12691 = (state_12723[(2)]);var inst_12692 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12723__$1 = (function (){var statearr_12743 = state_12723;(statearr_12743[(13)] = inst_12691);
return statearr_12743;
})();var statearr_12744_12767 = state_12723__$1;(statearr_12744_12767[(2)] = inst_12692);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12723__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12724 === (8)))
{var inst_12705 = (state_12723[(2)]);var state_12723__$1 = state_12723;var statearr_12745_12768 = state_12723__$1;(statearr_12745_12768[(2)] = inst_12705);
(statearr_12745_12768[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto___12753,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6340__auto__,c__6355__auto___12753,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12749[(0)] = state_machine__6341__auto__);
(statearr_12749[(1)] = (1));
return statearr_12749;
});
var state_machine__6341__auto____1 = (function (state_12723){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_12723);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12750){if((e12750 instanceof Object))
{var ex__6344__auto__ = e12750;var statearr_12751_12769 = state_12723;(statearr_12751_12769[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12750;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12770 = state_12723;
state_12723 = G__12770;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_12723){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_12723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12753,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6357__auto__ = (function (){var statearr_12752 = f__6356__auto__.call(null);(statearr_12752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12753);
return statearr_12752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12753,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___12878 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12878,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12878,out){
return (function (state_12854){var state_val_12855 = (state_12854[(1)]);if((state_val_12855 === (7)))
{var inst_12834 = (state_12854[(7)]);var inst_12833 = (state_12854[(8)]);var inst_12833__$1 = (state_12854[(2)]);var inst_12834__$1 = cljs.core.nth.call(null,inst_12833__$1,(0),null);var inst_12835 = cljs.core.nth.call(null,inst_12833__$1,(1),null);var inst_12836 = (inst_12834__$1 == null);var state_12854__$1 = (function (){var statearr_12856 = state_12854;(statearr_12856[(7)] = inst_12834__$1);
(statearr_12856[(9)] = inst_12835);
(statearr_12856[(8)] = inst_12833__$1);
return statearr_12856;
})();if(cljs.core.truth_(inst_12836))
{var statearr_12857_12879 = state_12854__$1;(statearr_12857_12879[(1)] = (8));
} else
{var statearr_12858_12880 = state_12854__$1;(statearr_12858_12880[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (1)))
{var inst_12825 = cljs.core.vec.call(null,chs);var inst_12826 = inst_12825;var state_12854__$1 = (function (){var statearr_12859 = state_12854;(statearr_12859[(10)] = inst_12826);
return statearr_12859;
})();var statearr_12860_12881 = state_12854__$1;(statearr_12860_12881[(2)] = null);
(statearr_12860_12881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (4)))
{var inst_12826 = (state_12854[(10)]);var state_12854__$1 = state_12854;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12854__$1,(7),inst_12826);
} else
{if((state_val_12855 === (6)))
{var inst_12850 = (state_12854[(2)]);var state_12854__$1 = state_12854;var statearr_12861_12882 = state_12854__$1;(statearr_12861_12882[(2)] = inst_12850);
(statearr_12861_12882[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (3)))
{var inst_12852 = (state_12854[(2)]);var state_12854__$1 = state_12854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12854__$1,inst_12852);
} else
{if((state_val_12855 === (2)))
{var inst_12826 = (state_12854[(10)]);var inst_12828 = cljs.core.count.call(null,inst_12826);var inst_12829 = (inst_12828 > (0));var state_12854__$1 = state_12854;if(cljs.core.truth_(inst_12829))
{var statearr_12863_12883 = state_12854__$1;(statearr_12863_12883[(1)] = (4));
} else
{var statearr_12864_12884 = state_12854__$1;(statearr_12864_12884[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (11)))
{var inst_12826 = (state_12854[(10)]);var inst_12843 = (state_12854[(2)]);var tmp12862 = inst_12826;var inst_12826__$1 = tmp12862;var state_12854__$1 = (function (){var statearr_12865 = state_12854;(statearr_12865[(10)] = inst_12826__$1);
(statearr_12865[(11)] = inst_12843);
return statearr_12865;
})();var statearr_12866_12885 = state_12854__$1;(statearr_12866_12885[(2)] = null);
(statearr_12866_12885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (9)))
{var inst_12834 = (state_12854[(7)]);var state_12854__$1 = state_12854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12854__$1,(11),out,inst_12834);
} else
{if((state_val_12855 === (5)))
{var inst_12848 = cljs.core.async.close_BANG_.call(null,out);var state_12854__$1 = state_12854;var statearr_12867_12886 = state_12854__$1;(statearr_12867_12886[(2)] = inst_12848);
(statearr_12867_12886[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (10)))
{var inst_12846 = (state_12854[(2)]);var state_12854__$1 = state_12854;var statearr_12868_12887 = state_12854__$1;(statearr_12868_12887[(2)] = inst_12846);
(statearr_12868_12887[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (8)))
{var inst_12834 = (state_12854[(7)]);var inst_12826 = (state_12854[(10)]);var inst_12835 = (state_12854[(9)]);var inst_12833 = (state_12854[(8)]);var inst_12838 = (function (){var c = inst_12835;var v = inst_12834;var vec__12831 = inst_12833;var cs = inst_12826;return ((function (c,v,vec__12831,cs,inst_12834,inst_12826,inst_12835,inst_12833,state_val_12855,c__6355__auto___12878,out){
return (function (p1__12771_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12771_SHARP_);
});
;})(c,v,vec__12831,cs,inst_12834,inst_12826,inst_12835,inst_12833,state_val_12855,c__6355__auto___12878,out))
})();var inst_12839 = cljs.core.filterv.call(null,inst_12838,inst_12826);var inst_12826__$1 = inst_12839;var state_12854__$1 = (function (){var statearr_12869 = state_12854;(statearr_12869[(10)] = inst_12826__$1);
return statearr_12869;
})();var statearr_12870_12888 = state_12854__$1;(statearr_12870_12888[(2)] = null);
(statearr_12870_12888[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto___12878,out))
;return ((function (switch__6340__auto__,c__6355__auto___12878,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12874 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12874[(0)] = state_machine__6341__auto__);
(statearr_12874[(1)] = (1));
return statearr_12874;
});
var state_machine__6341__auto____1 = (function (state_12854){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_12854);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12875){if((e12875 instanceof Object))
{var ex__6344__auto__ = e12875;var statearr_12876_12889 = state_12854;(statearr_12876_12889[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12854);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12875;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12890 = state_12854;
state_12854 = G__12890;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_12854){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_12854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12878,out))
})();var state__6357__auto__ = (function (){var statearr_12877 = f__6356__auto__.call(null);(statearr_12877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12878);
return statearr_12877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12878,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___12983 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12983,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12983,out){
return (function (state_12960){var state_val_12961 = (state_12960[(1)]);if((state_val_12961 === (7)))
{var inst_12942 = (state_12960[(7)]);var inst_12942__$1 = (state_12960[(2)]);var inst_12943 = (inst_12942__$1 == null);var inst_12944 = cljs.core.not.call(null,inst_12943);var state_12960__$1 = (function (){var statearr_12962 = state_12960;(statearr_12962[(7)] = inst_12942__$1);
return statearr_12962;
})();if(inst_12944)
{var statearr_12963_12984 = state_12960__$1;(statearr_12963_12984[(1)] = (8));
} else
{var statearr_12964_12985 = state_12960__$1;(statearr_12964_12985[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12961 === (1)))
{var inst_12937 = (0);var state_12960__$1 = (function (){var statearr_12965 = state_12960;(statearr_12965[(8)] = inst_12937);
return statearr_12965;
})();var statearr_12966_12986 = state_12960__$1;(statearr_12966_12986[(2)] = null);
(statearr_12966_12986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12961 === (4)))
{var state_12960__$1 = state_12960;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12960__$1,(7),ch);
} else
{if((state_val_12961 === (6)))
{var inst_12955 = (state_12960[(2)]);var state_12960__$1 = state_12960;var statearr_12967_12987 = state_12960__$1;(statearr_12967_12987[(2)] = inst_12955);
(statearr_12967_12987[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12961 === (3)))
{var inst_12957 = (state_12960[(2)]);var inst_12958 = cljs.core.async.close_BANG_.call(null,out);var state_12960__$1 = (function (){var statearr_12968 = state_12960;(statearr_12968[(9)] = inst_12957);
return statearr_12968;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12960__$1,inst_12958);
} else
{if((state_val_12961 === (2)))
{var inst_12937 = (state_12960[(8)]);var inst_12939 = (inst_12937 < n);var state_12960__$1 = state_12960;if(cljs.core.truth_(inst_12939))
{var statearr_12969_12988 = state_12960__$1;(statearr_12969_12988[(1)] = (4));
} else
{var statearr_12970_12989 = state_12960__$1;(statearr_12970_12989[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12961 === (11)))
{var inst_12937 = (state_12960[(8)]);var inst_12947 = (state_12960[(2)]);var inst_12948 = (inst_12937 + (1));var inst_12937__$1 = inst_12948;var state_12960__$1 = (function (){var statearr_12971 = state_12960;(statearr_12971[(10)] = inst_12947);
(statearr_12971[(8)] = inst_12937__$1);
return statearr_12971;
})();var statearr_12972_12990 = state_12960__$1;(statearr_12972_12990[(2)] = null);
(statearr_12972_12990[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12961 === (9)))
{var state_12960__$1 = state_12960;var statearr_12973_12991 = state_12960__$1;(statearr_12973_12991[(2)] = null);
(statearr_12973_12991[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12961 === (5)))
{var state_12960__$1 = state_12960;var statearr_12974_12992 = state_12960__$1;(statearr_12974_12992[(2)] = null);
(statearr_12974_12992[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12961 === (10)))
{var inst_12952 = (state_12960[(2)]);var state_12960__$1 = state_12960;var statearr_12975_12993 = state_12960__$1;(statearr_12975_12993[(2)] = inst_12952);
(statearr_12975_12993[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12961 === (8)))
{var inst_12942 = (state_12960[(7)]);var state_12960__$1 = state_12960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12960__$1,(11),out,inst_12942);
} else
{return null;
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
});})(c__6355__auto___12983,out))
;return ((function (switch__6340__auto__,c__6355__auto___12983,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12979 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12979[(0)] = state_machine__6341__auto__);
(statearr_12979[(1)] = (1));
return statearr_12979;
});
var state_machine__6341__auto____1 = (function (state_12960){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_12960);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12980){if((e12980 instanceof Object))
{var ex__6344__auto__ = e12980;var statearr_12981_12994 = state_12960;(statearr_12981_12994[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12960);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12980;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12995 = state_12960;
state_12960 = G__12995;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_12960){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_12960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12983,out))
})();var state__6357__auto__ = (function (){var statearr_12982 = f__6356__auto__.call(null);(statearr_12982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12983);
return statearr_12982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12983,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___13092 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___13092,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___13092,out){
return (function (state_13067){var state_val_13068 = (state_13067[(1)]);if((state_val_13068 === (7)))
{var inst_13062 = (state_13067[(2)]);var state_13067__$1 = state_13067;var statearr_13069_13093 = state_13067__$1;(statearr_13069_13093[(2)] = inst_13062);
(statearr_13069_13093[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13068 === (1)))
{var inst_13044 = null;var state_13067__$1 = (function (){var statearr_13070 = state_13067;(statearr_13070[(7)] = inst_13044);
return statearr_13070;
})();var statearr_13071_13094 = state_13067__$1;(statearr_13071_13094[(2)] = null);
(statearr_13071_13094[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13068 === (4)))
{var inst_13047 = (state_13067[(8)]);var inst_13047__$1 = (state_13067[(2)]);var inst_13048 = (inst_13047__$1 == null);var inst_13049 = cljs.core.not.call(null,inst_13048);var state_13067__$1 = (function (){var statearr_13072 = state_13067;(statearr_13072[(8)] = inst_13047__$1);
return statearr_13072;
})();if(inst_13049)
{var statearr_13073_13095 = state_13067__$1;(statearr_13073_13095[(1)] = (5));
} else
{var statearr_13074_13096 = state_13067__$1;(statearr_13074_13096[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13068 === (6)))
{var state_13067__$1 = state_13067;var statearr_13075_13097 = state_13067__$1;(statearr_13075_13097[(2)] = null);
(statearr_13075_13097[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13068 === (3)))
{var inst_13064 = (state_13067[(2)]);var inst_13065 = cljs.core.async.close_BANG_.call(null,out);var state_13067__$1 = (function (){var statearr_13076 = state_13067;(statearr_13076[(9)] = inst_13064);
return statearr_13076;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13067__$1,inst_13065);
} else
{if((state_val_13068 === (2)))
{var state_13067__$1 = state_13067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13067__$1,(4),ch);
} else
{if((state_val_13068 === (11)))
{var inst_13047 = (state_13067[(8)]);var inst_13056 = (state_13067[(2)]);var inst_13044 = inst_13047;var state_13067__$1 = (function (){var statearr_13077 = state_13067;(statearr_13077[(10)] = inst_13056);
(statearr_13077[(7)] = inst_13044);
return statearr_13077;
})();var statearr_13078_13098 = state_13067__$1;(statearr_13078_13098[(2)] = null);
(statearr_13078_13098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13068 === (9)))
{var inst_13047 = (state_13067[(8)]);var state_13067__$1 = state_13067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13067__$1,(11),out,inst_13047);
} else
{if((state_val_13068 === (5)))
{var inst_13047 = (state_13067[(8)]);var inst_13044 = (state_13067[(7)]);var inst_13051 = cljs.core._EQ_.call(null,inst_13047,inst_13044);var state_13067__$1 = state_13067;if(inst_13051)
{var statearr_13080_13099 = state_13067__$1;(statearr_13080_13099[(1)] = (8));
} else
{var statearr_13081_13100 = state_13067__$1;(statearr_13081_13100[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13068 === (10)))
{var inst_13059 = (state_13067[(2)]);var state_13067__$1 = state_13067;var statearr_13082_13101 = state_13067__$1;(statearr_13082_13101[(2)] = inst_13059);
(statearr_13082_13101[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13068 === (8)))
{var inst_13044 = (state_13067[(7)]);var tmp13079 = inst_13044;var inst_13044__$1 = tmp13079;var state_13067__$1 = (function (){var statearr_13083 = state_13067;(statearr_13083[(7)] = inst_13044__$1);
return statearr_13083;
})();var statearr_13084_13102 = state_13067__$1;(statearr_13084_13102[(2)] = null);
(statearr_13084_13102[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto___13092,out))
;return ((function (switch__6340__auto__,c__6355__auto___13092,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_13088 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13088[(0)] = state_machine__6341__auto__);
(statearr_13088[(1)] = (1));
return statearr_13088;
});
var state_machine__6341__auto____1 = (function (state_13067){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_13067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e13089){if((e13089 instanceof Object))
{var ex__6344__auto__ = e13089;var statearr_13090_13103 = state_13067;(statearr_13090_13103[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13067);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13089;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13104 = state_13067;
state_13067 = G__13104;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_13067){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_13067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___13092,out))
})();var state__6357__auto__ = (function (){var statearr_13091 = f__6356__auto__.call(null);(statearr_13091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___13092);
return statearr_13091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___13092,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___13239 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___13239,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___13239,out){
return (function (state_13209){var state_val_13210 = (state_13209[(1)]);if((state_val_13210 === (7)))
{var inst_13205 = (state_13209[(2)]);var state_13209__$1 = state_13209;var statearr_13211_13240 = state_13209__$1;(statearr_13211_13240[(2)] = inst_13205);
(statearr_13211_13240[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13210 === (1)))
{var inst_13172 = (new Array(n));var inst_13173 = inst_13172;var inst_13174 = (0);var state_13209__$1 = (function (){var statearr_13212 = state_13209;(statearr_13212[(7)] = inst_13174);
(statearr_13212[(8)] = inst_13173);
return statearr_13212;
})();var statearr_13213_13241 = state_13209__$1;(statearr_13213_13241[(2)] = null);
(statearr_13213_13241[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13210 === (4)))
{var inst_13177 = (state_13209[(9)]);var inst_13177__$1 = (state_13209[(2)]);var inst_13178 = (inst_13177__$1 == null);var inst_13179 = cljs.core.not.call(null,inst_13178);var state_13209__$1 = (function (){var statearr_13214 = state_13209;(statearr_13214[(9)] = inst_13177__$1);
return statearr_13214;
})();if(inst_13179)
{var statearr_13215_13242 = state_13209__$1;(statearr_13215_13242[(1)] = (5));
} else
{var statearr_13216_13243 = state_13209__$1;(statearr_13216_13243[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13210 === (15)))
{var inst_13199 = (state_13209[(2)]);var state_13209__$1 = state_13209;var statearr_13217_13244 = state_13209__$1;(statearr_13217_13244[(2)] = inst_13199);
(statearr_13217_13244[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13210 === (13)))
{var state_13209__$1 = state_13209;var statearr_13218_13245 = state_13209__$1;(statearr_13218_13245[(2)] = null);
(statearr_13218_13245[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13210 === (6)))
{var inst_13174 = (state_13209[(7)]);var inst_13195 = (inst_13174 > (0));var state_13209__$1 = state_13209;if(cljs.core.truth_(inst_13195))
{var statearr_13219_13246 = state_13209__$1;(statearr_13219_13246[(1)] = (12));
} else
{var statearr_13220_13247 = state_13209__$1;(statearr_13220_13247[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13210 === (3)))
{var inst_13207 = (state_13209[(2)]);var state_13209__$1 = state_13209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13209__$1,inst_13207);
} else
{if((state_val_13210 === (12)))
{var inst_13173 = (state_13209[(8)]);var inst_13197 = cljs.core.vec.call(null,inst_13173);var state_13209__$1 = state_13209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13209__$1,(15),out,inst_13197);
} else
{if((state_val_13210 === (2)))
{var state_13209__$1 = state_13209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13209__$1,(4),ch);
} else
{if((state_val_13210 === (11)))
{var inst_13189 = (state_13209[(2)]);var inst_13190 = (new Array(n));var inst_13173 = inst_13190;var inst_13174 = (0);var state_13209__$1 = (function (){var statearr_13221 = state_13209;(statearr_13221[(10)] = inst_13189);
(statearr_13221[(7)] = inst_13174);
(statearr_13221[(8)] = inst_13173);
return statearr_13221;
})();var statearr_13222_13248 = state_13209__$1;(statearr_13222_13248[(2)] = null);
(statearr_13222_13248[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13210 === (9)))
{var inst_13173 = (state_13209[(8)]);var inst_13187 = cljs.core.vec.call(null,inst_13173);var state_13209__$1 = state_13209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13209__$1,(11),out,inst_13187);
} else
{if((state_val_13210 === (5)))
{var inst_13182 = (state_13209[(11)]);var inst_13174 = (state_13209[(7)]);var inst_13173 = (state_13209[(8)]);var inst_13177 = (state_13209[(9)]);var inst_13181 = (inst_13173[inst_13174] = inst_13177);var inst_13182__$1 = (inst_13174 + (1));var inst_13183 = (inst_13182__$1 < n);var state_13209__$1 = (function (){var statearr_13223 = state_13209;(statearr_13223[(11)] = inst_13182__$1);
(statearr_13223[(12)] = inst_13181);
return statearr_13223;
})();if(cljs.core.truth_(inst_13183))
{var statearr_13224_13249 = state_13209__$1;(statearr_13224_13249[(1)] = (8));
} else
{var statearr_13225_13250 = state_13209__$1;(statearr_13225_13250[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13210 === (14)))
{var inst_13202 = (state_13209[(2)]);var inst_13203 = cljs.core.async.close_BANG_.call(null,out);var state_13209__$1 = (function (){var statearr_13227 = state_13209;(statearr_13227[(13)] = inst_13202);
return statearr_13227;
})();var statearr_13228_13251 = state_13209__$1;(statearr_13228_13251[(2)] = inst_13203);
(statearr_13228_13251[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13210 === (10)))
{var inst_13193 = (state_13209[(2)]);var state_13209__$1 = state_13209;var statearr_13229_13252 = state_13209__$1;(statearr_13229_13252[(2)] = inst_13193);
(statearr_13229_13252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13210 === (8)))
{var inst_13182 = (state_13209[(11)]);var inst_13173 = (state_13209[(8)]);var tmp13226 = inst_13173;var inst_13173__$1 = tmp13226;var inst_13174 = inst_13182;var state_13209__$1 = (function (){var statearr_13230 = state_13209;(statearr_13230[(7)] = inst_13174);
(statearr_13230[(8)] = inst_13173__$1);
return statearr_13230;
})();var statearr_13231_13253 = state_13209__$1;(statearr_13231_13253[(2)] = null);
(statearr_13231_13253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto___13239,out))
;return ((function (switch__6340__auto__,c__6355__auto___13239,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_13235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13235[(0)] = state_machine__6341__auto__);
(statearr_13235[(1)] = (1));
return statearr_13235;
});
var state_machine__6341__auto____1 = (function (state_13209){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_13209);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e13236){if((e13236 instanceof Object))
{var ex__6344__auto__ = e13236;var statearr_13237_13254 = state_13209;(statearr_13237_13254[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13209);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13236;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13255 = state_13209;
state_13209 = G__13255;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_13209){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_13209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___13239,out))
})();var state__6357__auto__ = (function (){var statearr_13238 = f__6356__auto__.call(null);(statearr_13238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___13239);
return statearr_13238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___13239,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___13398 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___13398,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___13398,out){
return (function (state_13368){var state_val_13369 = (state_13368[(1)]);if((state_val_13369 === (7)))
{var inst_13364 = (state_13368[(2)]);var state_13368__$1 = state_13368;var statearr_13370_13399 = state_13368__$1;(statearr_13370_13399[(2)] = inst_13364);
(statearr_13370_13399[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13369 === (1)))
{var inst_13327 = [];var inst_13328 = inst_13327;var inst_13329 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13368__$1 = (function (){var statearr_13371 = state_13368;(statearr_13371[(7)] = inst_13328);
(statearr_13371[(8)] = inst_13329);
return statearr_13371;
})();var statearr_13372_13400 = state_13368__$1;(statearr_13372_13400[(2)] = null);
(statearr_13372_13400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13369 === (4)))
{var inst_13332 = (state_13368[(9)]);var inst_13332__$1 = (state_13368[(2)]);var inst_13333 = (inst_13332__$1 == null);var inst_13334 = cljs.core.not.call(null,inst_13333);var state_13368__$1 = (function (){var statearr_13373 = state_13368;(statearr_13373[(9)] = inst_13332__$1);
return statearr_13373;
})();if(inst_13334)
{var statearr_13374_13401 = state_13368__$1;(statearr_13374_13401[(1)] = (5));
} else
{var statearr_13375_13402 = state_13368__$1;(statearr_13375_13402[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13369 === (15)))
{var inst_13358 = (state_13368[(2)]);var state_13368__$1 = state_13368;var statearr_13376_13403 = state_13368__$1;(statearr_13376_13403[(2)] = inst_13358);
(statearr_13376_13403[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13369 === (13)))
{var state_13368__$1 = state_13368;var statearr_13377_13404 = state_13368__$1;(statearr_13377_13404[(2)] = null);
(statearr_13377_13404[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13369 === (6)))
{var inst_13328 = (state_13368[(7)]);var inst_13353 = inst_13328.length;var inst_13354 = (inst_13353 > (0));var state_13368__$1 = state_13368;if(cljs.core.truth_(inst_13354))
{var statearr_13378_13405 = state_13368__$1;(statearr_13378_13405[(1)] = (12));
} else
{var statearr_13379_13406 = state_13368__$1;(statearr_13379_13406[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13369 === (3)))
{var inst_13366 = (state_13368[(2)]);var state_13368__$1 = state_13368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13368__$1,inst_13366);
} else
{if((state_val_13369 === (12)))
{var inst_13328 = (state_13368[(7)]);var inst_13356 = cljs.core.vec.call(null,inst_13328);var state_13368__$1 = state_13368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13368__$1,(15),out,inst_13356);
} else
{if((state_val_13369 === (2)))
{var state_13368__$1 = state_13368;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13368__$1,(4),ch);
} else
{if((state_val_13369 === (11)))
{var inst_13332 = (state_13368[(9)]);var inst_13336 = (state_13368[(10)]);var inst_13346 = (state_13368[(2)]);var inst_13347 = [];var inst_13348 = inst_13347.push(inst_13332);var inst_13328 = inst_13347;var inst_13329 = inst_13336;var state_13368__$1 = (function (){var statearr_13380 = state_13368;(statearr_13380[(11)] = inst_13348);
(statearr_13380[(7)] = inst_13328);
(statearr_13380[(12)] = inst_13346);
(statearr_13380[(8)] = inst_13329);
return statearr_13380;
})();var statearr_13381_13407 = state_13368__$1;(statearr_13381_13407[(2)] = null);
(statearr_13381_13407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13369 === (9)))
{var inst_13328 = (state_13368[(7)]);var inst_13344 = cljs.core.vec.call(null,inst_13328);var state_13368__$1 = state_13368;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13368__$1,(11),out,inst_13344);
} else
{if((state_val_13369 === (5)))
{var inst_13332 = (state_13368[(9)]);var inst_13336 = (state_13368[(10)]);var inst_13329 = (state_13368[(8)]);var inst_13336__$1 = f.call(null,inst_13332);var inst_13337 = cljs.core._EQ_.call(null,inst_13336__$1,inst_13329);var inst_13338 = cljs.core.keyword_identical_QMARK_.call(null,inst_13329,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13339 = (inst_13337) || (inst_13338);var state_13368__$1 = (function (){var statearr_13382 = state_13368;(statearr_13382[(10)] = inst_13336__$1);
return statearr_13382;
})();if(cljs.core.truth_(inst_13339))
{var statearr_13383_13408 = state_13368__$1;(statearr_13383_13408[(1)] = (8));
} else
{var statearr_13384_13409 = state_13368__$1;(statearr_13384_13409[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13369 === (14)))
{var inst_13361 = (state_13368[(2)]);var inst_13362 = cljs.core.async.close_BANG_.call(null,out);var state_13368__$1 = (function (){var statearr_13386 = state_13368;(statearr_13386[(13)] = inst_13361);
return statearr_13386;
})();var statearr_13387_13410 = state_13368__$1;(statearr_13387_13410[(2)] = inst_13362);
(statearr_13387_13410[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13369 === (10)))
{var inst_13351 = (state_13368[(2)]);var state_13368__$1 = state_13368;var statearr_13388_13411 = state_13368__$1;(statearr_13388_13411[(2)] = inst_13351);
(statearr_13388_13411[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13369 === (8)))
{var inst_13332 = (state_13368[(9)]);var inst_13328 = (state_13368[(7)]);var inst_13336 = (state_13368[(10)]);var inst_13341 = inst_13328.push(inst_13332);var tmp13385 = inst_13328;var inst_13328__$1 = tmp13385;var inst_13329 = inst_13336;var state_13368__$1 = (function (){var statearr_13389 = state_13368;(statearr_13389[(14)] = inst_13341);
(statearr_13389[(7)] = inst_13328__$1);
(statearr_13389[(8)] = inst_13329);
return statearr_13389;
})();var statearr_13390_13412 = state_13368__$1;(statearr_13390_13412[(2)] = null);
(statearr_13390_13412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6355__auto___13398,out))
;return ((function (switch__6340__auto__,c__6355__auto___13398,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_13394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13394[(0)] = state_machine__6341__auto__);
(statearr_13394[(1)] = (1));
return statearr_13394;
});
var state_machine__6341__auto____1 = (function (state_13368){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_13368);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e13395){if((e13395 instanceof Object))
{var ex__6344__auto__ = e13395;var statearr_13396_13413 = state_13368;(statearr_13396_13413[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13368);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13395;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13414 = state_13368;
state_13368 = G__13414;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_13368){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_13368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___13398,out))
})();var state__6357__auto__ = (function (){var statearr_13397 = f__6356__auto__.call(null);(statearr_13397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___13398);
return statearr_13397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___13398,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map