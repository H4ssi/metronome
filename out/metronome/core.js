// Compiled by ClojureScript 0.0-3308 {}
goog.provide('metronome.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
metronome.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),null], null)], null));
metronome.core.clock = (function metronome$core$clock(bpm,owner){
var start_interval = (function metronome$core$clock_$_start_interval(millis){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"interval","interval",1708495417),millis);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"next-beat","next-beat",-86233589),null);
});
if(typeof metronome.core.t55632 !== 'undefined'){
} else {

/**
* @constructor
*/
metronome.core.t55632 = (function (clock,bpm,owner,start_interval,meta55633){
this.clock = clock;
this.bpm = bpm;
this.owner = owner;
this.start_interval = start_interval;
this.meta55633 = meta55633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
metronome.core.t55632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55634,meta55633__$1){
var self__ = this;
var _55634__$1 = this;
return (new metronome.core.t55632(self__.clock,self__.bpm,self__.owner,self__.start_interval,meta55633__$1));
});

metronome.core.t55632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55634){
var self__ = this;
var _55634__$1 = this;
return self__.meta55633;
});

metronome.core.t55632.prototype.om$core$IInitState$ = true;

metronome.core.t55632.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),null], null);
});

metronome.core.t55632.prototype.om$core$IDidMount$ = true;

metronome.core.t55632.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
window.requestAnimationFrame(((function (___$1){
return (function metronome$core$clock_$_cb(t){
var interval_55655 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"interval","interval",1708495417));
if(cljs.core.truth_(interval_55655)){
var next_beat_55656 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"next-beat","next-beat",-86233589));
var do_beat_55657 = ((next_beat_55656 == null)) || ((t > next_beat_55656));
if(do_beat_55657){
cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360)),true);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"next-beat","next-beat",-86233589),(t + interval_55655));
} else {
}
} else {
}

return window.requestAnimationFrame(metronome$core$clock_$_cb);
});})(___$1))
);

var interval_millis = new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(self__.bpm);
var click_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"click-channel","click-channel",-247663605));
if((interval_millis == null)){
} else {
self__.start_interval.call(null,interval_millis);
}

var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__,interval_millis,click_channel,___$1){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto__,interval_millis,click_channel,___$1){
return (function (state_55643){
var state_val_55644 = (state_55643[(1)]);
if((state_val_55644 === (1))){
var state_55643__$1 = state_55643;
var statearr_55645_55658 = state_55643__$1;
(statearr_55645_55658[(2)] = null);

(statearr_55645_55658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55644 === (2))){
var state_55643__$1 = state_55643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55643__$1,(4),click_channel);
} else {
if((state_val_55644 === (3))){
var inst_55641 = (state_55643[(2)]);
var state_55643__$1 = state_55643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55643__$1,inst_55641);
} else {
if((state_val_55644 === (4))){
var inst_55637 = (state_55643[(2)]);
var inst_55638 = self__.start_interval.call(null,inst_55637);
var state_55643__$1 = (function (){var statearr_55646 = state_55643;
(statearr_55646[(7)] = inst_55638);

return statearr_55646;
})();
var statearr_55647_55659 = state_55643__$1;
(statearr_55647_55659[(2)] = null);

(statearr_55647_55659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8504__auto__,interval_millis,click_channel,___$1))
;
return ((function (switch__8442__auto__,c__8504__auto__,interval_millis,click_channel,___$1){
return (function() {
var metronome$core$clock_$_state_machine__8443__auto__ = null;
var metronome$core$clock_$_state_machine__8443__auto____0 = (function (){
var statearr_55651 = [null,null,null,null,null,null,null,null];
(statearr_55651[(0)] = metronome$core$clock_$_state_machine__8443__auto__);

(statearr_55651[(1)] = (1));

return statearr_55651;
});
var metronome$core$clock_$_state_machine__8443__auto____1 = (function (state_55643){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_55643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e55652){if((e55652 instanceof Object)){
var ex__8446__auto__ = e55652;
var statearr_55653_55660 = state_55643;
(statearr_55653_55660[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55661 = state_55643;
state_55643 = G__55661;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
metronome$core$clock_$_state_machine__8443__auto__ = function(state_55643){
switch(arguments.length){
case 0:
return metronome$core$clock_$_state_machine__8443__auto____0.call(this);
case 1:
return metronome$core$clock_$_state_machine__8443__auto____1.call(this,state_55643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metronome$core$clock_$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = metronome$core$clock_$_state_machine__8443__auto____0;
metronome$core$clock_$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = metronome$core$clock_$_state_machine__8443__auto____1;
return metronome$core$clock_$_state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto__,interval_millis,click_channel,___$1))
})();
var state__8506__auto__ = (function (){var statearr_55654 = f__8505__auto__.call(null);
(statearr_55654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_55654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__,interval_millis,click_channel,___$1))
);

return c__8504__auto__;
});

metronome.core.t55632.prototype.om$core$IRender$ = true;

metronome.core.t55632.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.span(null);
});

metronome.core.t55632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clock","clock",746230400,null),new cljs.core.Symbol(null,"bpm","bpm",598155138,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"start-interval","start-interval",40208337,null),new cljs.core.Symbol(null,"meta55633","meta55633",1330253616,null)], null);
});

metronome.core.t55632.cljs$lang$type = true;

metronome.core.t55632.cljs$lang$ctorStr = "metronome.core/t55632";

metronome.core.t55632.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"metronome.core/t55632");
});

metronome.core.__GT_t55632 = (function metronome$core$clock_$___GT_t55632(clock__$1,bpm__$1,owner__$1,start_interval__$1,meta55633){
return (new metronome.core.t55632(clock__$1,bpm__$1,owner__$1,start_interval__$1,meta55633));
});

}

return (new metronome.core.t55632(metronome$core$clock,bpm,owner,start_interval,cljs.core.PersistentArrayMap.EMPTY));
});
metronome.core.sound = (function metronome$core$sound(_,owner){
if(typeof metronome.core.t55711 !== 'undefined'){
} else {

/**
* @constructor
*/
metronome.core.t55711 = (function (sound,_,owner,meta55712){
this.sound = sound;
this._ = _;
this.owner = owner;
this.meta55712 = meta55712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
metronome.core.t55711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55713,meta55712__$1){
var self__ = this;
var _55713__$1 = this;
return (new metronome.core.t55711(self__.sound,self__._,self__.owner,meta55712__$1));
});

metronome.core.t55711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55713){
var self__ = this;
var _55713__$1 = this;
return self__.meta55712;
});

metronome.core.t55711.prototype.om$core$IInitState$ = true;

metronome.core.t55711.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"beat","beat",-817854366),(0)], null);
});

metronome.core.t55711.prototype.om$core$IDidMount$ = true;

metronome.core.t55711.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var sound_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360));
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__,sound_channel,___$2){
return (function (){
var f__8505__auto__ = (function (){var switch__8442__auto__ = ((function (c__8504__auto__,sound_channel,___$2){
return (function (state_55738){
var state_val_55739 = (state_55738[(1)]);
if((state_val_55739 === (7))){
var inst_55725 = (state_55738[(7)]);
var inst_55725__$1 = (state_55738[(2)]);
var inst_55726 = inst_55725__$1.paused;
var state_55738__$1 = (function (){var statearr_55740 = state_55738;
(statearr_55740[(7)] = inst_55725__$1);

return statearr_55740;
})();
if(cljs.core.truth_(inst_55726)){
var statearr_55741_55760 = state_55738__$1;
(statearr_55741_55760[(1)] = (8));

} else {
var statearr_55742_55761 = state_55738__$1;
(statearr_55742_55761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (1))){
var state_55738__$1 = state_55738;
var statearr_55743_55762 = state_55738__$1;
(statearr_55743_55762[(2)] = null);

(statearr_55743_55762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (4))){
var inst_55716 = (state_55738[(2)]);
var inst_55717 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"beat","beat",-817854366));
var inst_55718 = cljs.core.mod.call(null,inst_55717,(4));
var inst_55719 = (inst_55718 === (0));
var state_55738__$1 = (function (){var statearr_55744 = state_55738;
(statearr_55744[(8)] = inst_55716);

return statearr_55744;
})();
if(cljs.core.truth_(inst_55719)){
var statearr_55745_55763 = state_55738__$1;
(statearr_55745_55763[(1)] = (5));

} else {
var statearr_55746_55764 = state_55738__$1;
(statearr_55746_55764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (6))){
var inst_55723 = om.core.get_node.call(null,self__.owner,"dong");
var state_55738__$1 = state_55738;
var statearr_55747_55765 = state_55738__$1;
(statearr_55747_55765[(2)] = inst_55723);

(statearr_55747_55765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (3))){
var inst_55736 = (state_55738[(2)]);
var state_55738__$1 = state_55738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55738__$1,inst_55736);
} else {
if((state_val_55739 === (2))){
var state_55738__$1 = state_55738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55738__$1,(4),sound_channel);
} else {
if((state_val_55739 === (9))){
var inst_55725 = (state_55738[(7)]);
var inst_55730 = inst_55725.currentTime = (0);
var state_55738__$1 = state_55738;
var statearr_55748_55766 = state_55738__$1;
(statearr_55748_55766[(2)] = inst_55730);

(statearr_55748_55766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (5))){
var inst_55721 = om.core.get_node.call(null,self__.owner,"ding");
var state_55738__$1 = state_55738;
var statearr_55749_55767 = state_55738__$1;
(statearr_55749_55767[(2)] = inst_55721);

(statearr_55749_55767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (10))){
var inst_55732 = (state_55738[(2)]);
var inst_55733 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"beat","beat",-817854366),cljs.core.inc);
var state_55738__$1 = (function (){var statearr_55750 = state_55738;
(statearr_55750[(9)] = inst_55733);

(statearr_55750[(10)] = inst_55732);

return statearr_55750;
})();
var statearr_55751_55768 = state_55738__$1;
(statearr_55751_55768[(2)] = null);

(statearr_55751_55768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55739 === (8))){
var inst_55725 = (state_55738[(7)]);
var inst_55728 = inst_55725.play();
var state_55738__$1 = state_55738;
var statearr_55752_55769 = state_55738__$1;
(statearr_55752_55769[(2)] = inst_55728);

(statearr_55752_55769[(1)] = (10));


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
});})(c__8504__auto__,sound_channel,___$2))
;
return ((function (switch__8442__auto__,c__8504__auto__,sound_channel,___$2){
return (function() {
var metronome$core$sound_$_state_machine__8443__auto__ = null;
var metronome$core$sound_$_state_machine__8443__auto____0 = (function (){
var statearr_55756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55756[(0)] = metronome$core$sound_$_state_machine__8443__auto__);

(statearr_55756[(1)] = (1));

return statearr_55756;
});
var metronome$core$sound_$_state_machine__8443__auto____1 = (function (state_55738){
while(true){
var ret_value__8444__auto__ = (function (){try{while(true){
var result__8445__auto__ = switch__8442__auto__.call(null,state_55738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8445__auto__;
}
break;
}
}catch (e55757){if((e55757 instanceof Object)){
var ex__8446__auto__ = e55757;
var statearr_55758_55770 = state_55738;
(statearr_55758_55770[(5)] = ex__8446__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8444__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55771 = state_55738;
state_55738 = G__55771;
continue;
} else {
return ret_value__8444__auto__;
}
break;
}
});
metronome$core$sound_$_state_machine__8443__auto__ = function(state_55738){
switch(arguments.length){
case 0:
return metronome$core$sound_$_state_machine__8443__auto____0.call(this);
case 1:
return metronome$core$sound_$_state_machine__8443__auto____1.call(this,state_55738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metronome$core$sound_$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$0 = metronome$core$sound_$_state_machine__8443__auto____0;
metronome$core$sound_$_state_machine__8443__auto__.cljs$core$IFn$_invoke$arity$1 = metronome$core$sound_$_state_machine__8443__auto____1;
return metronome$core$sound_$_state_machine__8443__auto__;
})()
;})(switch__8442__auto__,c__8504__auto__,sound_channel,___$2))
})();
var state__8506__auto__ = (function (){var statearr_55759 = f__8505__auto__.call(null);
(statearr_55759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_55759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__,sound_channel,___$2))
);

return c__8504__auto__;
});

metronome.core.t55711.prototype.om$core$IRender$ = true;

metronome.core.t55711.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div(null,React.DOM.audio({"ref": "ding", "src": "ding.ogg", "type": "audio/ogg", "codecs=": "vorbis", "autobuffer": true}),React.DOM.audio({"ref": "dong", "src": "dong.ogg", "type": "audio/ogg", "codecs=": "vorbis", "autobuffer": true}));
});

metronome.core.t55711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sound","sound",-486875543,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta55712","meta55712",-1631342522,null)], null);
});

metronome.core.t55711.cljs$lang$type = true;

metronome.core.t55711.cljs$lang$ctorStr = "metronome.core/t55711";

metronome.core.t55711.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"metronome.core/t55711");
});

metronome.core.__GT_t55711 = (function metronome$core$sound_$___GT_t55711(sound__$1,___$1,owner__$1,meta55712){
return (new metronome.core.t55711(sound__$1,___$1,owner__$1,meta55712));
});

}

return (new metronome.core.t55711(metronome$core$sound,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
metronome.core.millis = (function metronome$core$millis(){
return performance.now();
});
metronome.core.click = (function metronome$core$click(_,owner){
if(typeof metronome.core.t55777 !== 'undefined'){
} else {

/**
* @constructor
*/
metronome.core.t55777 = (function (click,_,owner,meta55778){
this.click = click;
this._ = _;
this.owner = owner;
this.meta55778 = meta55778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
metronome.core.t55777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55779,meta55778__$1){
var self__ = this;
var _55779__$1 = this;
return (new metronome.core.t55777(self__.click,self__._,self__.owner,meta55778__$1));
});

metronome.core.t55777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55779){
var self__ = this;
var _55779__$1 = this;
return self__.meta55778;
});

metronome.core.t55777.prototype.om$core$IInitState$ = true;

metronome.core.t55777.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-click","previous-click",1422525602),null], null);
});

metronome.core.t55777.prototype.om$core$IRenderState$ = true;

metronome.core.t55777.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__55780){
var self__ = this;
var map__55781 = p__55780;
var map__55781__$1 = ((cljs.core.seq_QMARK_.call(null,map__55781))?cljs.core.apply.call(null,cljs.core.hash_map,map__55781):map__55781);
var click_channel = cljs.core.get.call(null,map__55781__$1,new cljs.core.Keyword(null,"click-channel","click-channel",-247663605));
var previous_click = cljs.core.get.call(null,map__55781__$1,new cljs.core.Keyword(null,"previous-click","previous-click",1422525602));
var ___$2 = this;
return React.DOM.button({"className": "btn btn-default btn-lg btn-block btn-tap-tempo", "onClick": ((function (___$2,map__55781,map__55781__$1,click_channel,previous_click){
return (function (){
var m = metronome.core.millis.call(null);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"previous-click","previous-click",1422525602),m);

if((previous_click == null)){
return null;
} else {
return cljs.core.async.put_BANG_.call(null,click_channel,(m - previous_click));
}
});})(___$2,map__55781,map__55781__$1,click_channel,previous_click))
},"tap tempo");
});

metronome.core.t55777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"click","click",-742134376,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta55778","meta55778",677480964,null)], null);
});

metronome.core.t55777.cljs$lang$type = true;

metronome.core.t55777.cljs$lang$ctorStr = "metronome.core/t55777";

metronome.core.t55777.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"metronome.core/t55777");
});

metronome.core.__GT_t55777 = (function metronome$core$click_$___GT_t55777(click__$1,___$1,owner__$1,meta55778){
return (new metronome.core.t55777(click__$1,___$1,owner__$1,meta55778));
});

}

return (new metronome.core.t55777(metronome$core$click,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,(function (app,owner){
if(typeof metronome.core.t55782 !== 'undefined'){
} else {

/**
* @constructor
*/
metronome.core.t55782 = (function (app,owner,meta55783){
this.app = app;
this.owner = owner;
this.meta55783 = meta55783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
metronome.core.t55782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55784,meta55783__$1){
var self__ = this;
var _55784__$1 = this;
return (new metronome.core.t55782(self__.app,self__.owner,meta55783__$1));
});

metronome.core.t55782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55784){
var self__ = this;
var _55784__$1 = this;
return self__.meta55783;
});

metronome.core.t55782.prototype.om$core$IInitState$ = true;

metronome.core.t55782.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"click-channel","click-channel",-247663605),cljs.core.async.chan.call(null)], null);
});

metronome.core.t55782.prototype.om$core$IRenderState$ = true;

metronome.core.t55782.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__55785){
var self__ = this;
var map__55786 = p__55785;
var map__55786__$1 = ((cljs.core.seq_QMARK_.call(null,map__55786))?cljs.core.apply.call(null,cljs.core.hash_map,map__55786):map__55786);
var sound_channel = cljs.core.get.call(null,map__55786__$1,new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360));
var click_channel = cljs.core.get.call(null,map__55786__$1,new cljs.core.Keyword(null,"click-channel","click-channel",-247663605));
var ___$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"metronome"),om.core.build.call(null,metronome.core.clock,new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360),sound_channel,new cljs.core.Keyword(null,"click-channel","click-channel",-247663605),click_channel], null)], null)),om.core.build.call(null,metronome.core.sound,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360),sound_channel], null)], null)),om.core.build.call(null,metronome.core.click,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click-channel","click-channel",-247663605),click_channel], null)], null)));
});

metronome.core.t55782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta55783","meta55783",1596256634,null)], null);
});

metronome.core.t55782.cljs$lang$type = true;

metronome.core.t55782.cljs$lang$ctorStr = "metronome.core/t55782";

metronome.core.t55782.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"metronome.core/t55782");
});

metronome.core.__GT_t55782 = (function metronome$core$__GT_t55782(app__$1,owner__$1,meta55783){
return (new metronome.core.t55782(app__$1,owner__$1,meta55783));
});

}

return (new metronome.core.t55782(app,owner,cljs.core.PersistentArrayMap.EMPTY));
}),metronome.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
