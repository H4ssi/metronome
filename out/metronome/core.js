// Compiled by ClojureScript 0.0-2311
goog.provide('metronome.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
metronome.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),null], null)], null));
metronome.core.clock = (function clock(bpm,owner){var clear_interval = (function clear_interval(){var id = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"interval","interval",1708495417));if((id == null))
{return null;
} else
{return clearInterval(id);
}
});
var start_interval = (function start_interval(millis){var sound_channel = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360));om.core.update_BANG_.call(null,bpm,new cljs.core.Keyword(null,"bpm","bpm",-1042376389),millis);
cljs.core.async.put_BANG_.call(null,sound_channel,true);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"interval","interval",1708495417),setInterval(((function (sound_channel){
return (function (){return cljs.core.async.put_BANG_.call(null,sound_channel,true);
});})(sound_channel))
,millis));
});
if(typeof metronome.core.t9386 !== 'undefined')
{} else
{
/**
* @constructor
*/
metronome.core.t9386 = (function (start_interval,clear_interval,owner,bpm,clock,meta9387){
this.start_interval = start_interval;
this.clear_interval = clear_interval;
this.owner = owner;
this.bpm = bpm;
this.clock = clock;
this.meta9387 = meta9387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
metronome.core.t9386.cljs$lang$type = true;
metronome.core.t9386.cljs$lang$ctorStr = "metronome.core/t9386";
metronome.core.t9386.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"metronome.core/t9386");
});
metronome.core.t9386.prototype.om$core$IRender$ = true;
metronome.core.t9386.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span(null);
});
metronome.core.t9386.prototype.om$core$IWillUnmount$ = true;
metronome.core.t9386.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.clear_interval.call(null);
});
metronome.core.t9386.prototype.om$core$IDidMount$ = true;
metronome.core.t9386.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;self__.clear_interval.call(null);
var interval_millis = new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(self__.bpm);var click_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"click-channel","click-channel",-247663605));if((interval_millis == null))
{} else
{self__.start_interval.call(null,interval_millis);
}
var c__6355__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto__,interval_millis,click_channel,___$1){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto__,interval_millis,click_channel,___$1){
return (function (state_9398){var state_val_9399 = (state_9398[(1)]);if((state_val_9399 === (4)))
{var inst_9391 = (state_9398[(2)]);var inst_9392 = self__.clear_interval.call(null);var inst_9393 = self__.start_interval.call(null,inst_9391);var state_9398__$1 = (function (){var statearr_9400 = state_9398;(statearr_9400[(7)] = inst_9392);
(statearr_9400[(8)] = inst_9393);
return statearr_9400;
})();var statearr_9401_9410 = state_9398__$1;(statearr_9401_9410[(2)] = null);
(statearr_9401_9410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9399 === (3)))
{var inst_9396 = (state_9398[(2)]);var state_9398__$1 = state_9398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9398__$1,inst_9396);
} else
{if((state_val_9399 === (2)))
{var state_9398__$1 = state_9398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9398__$1,(4),click_channel);
} else
{if((state_val_9399 === (1)))
{var state_9398__$1 = state_9398;var statearr_9402_9411 = state_9398__$1;(statearr_9402_9411[(2)] = null);
(statearr_9402_9411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6355__auto__,interval_millis,click_channel,___$1))
;return ((function (switch__6340__auto__,c__6355__auto__,interval_millis,click_channel,___$1){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_9406 = [null,null,null,null,null,null,null,null,null];(statearr_9406[(0)] = state_machine__6341__auto__);
(statearr_9406[(1)] = (1));
return statearr_9406;
});
var state_machine__6341__auto____1 = (function (state_9398){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_9398);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e9407){if((e9407 instanceof Object))
{var ex__6344__auto__ = e9407;var statearr_9408_9412 = state_9398;(statearr_9408_9412[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9398);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9407;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9413 = state_9398;
state_9398 = G__9413;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_9398){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_9398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto__,interval_millis,click_channel,___$1))
})();var state__6357__auto__ = (function (){var statearr_9409 = f__6356__auto__.call(null);(statearr_9409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto__);
return statearr_9409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto__,interval_millis,click_channel,___$1))
);
return c__6355__auto__;
});
metronome.core.t9386.prototype.om$core$IInitState$ = true;
metronome.core.t9386.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interval","interval",1708495417),null], null);
});
metronome.core.t9386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9388){var self__ = this;
var _9388__$1 = this;return self__.meta9387;
});
metronome.core.t9386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9388,meta9387__$1){var self__ = this;
var _9388__$1 = this;return (new metronome.core.t9386(self__.start_interval,self__.clear_interval,self__.owner,self__.bpm,self__.clock,meta9387__$1));
});
metronome.core.__GT_t9386 = (function __GT_t9386(start_interval__$1,clear_interval__$1,owner__$1,bpm__$1,clock__$1,meta9387){return (new metronome.core.t9386(start_interval__$1,clear_interval__$1,owner__$1,bpm__$1,clock__$1,meta9387));
});
}
return (new metronome.core.t9386(start_interval,clear_interval,owner,bpm,clock,null));
});
metronome.core.sound = (function sound(_,owner){if(typeof metronome.core.t9463 !== 'undefined')
{} else
{
/**
* @constructor
*/
metronome.core.t9463 = (function (owner,_,sound,meta9464){
this.owner = owner;
this._ = _;
this.sound = sound;
this.meta9464 = meta9464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
metronome.core.t9463.cljs$lang$type = true;
metronome.core.t9463.cljs$lang$ctorStr = "metronome.core/t9463";
metronome.core.t9463.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"metronome.core/t9463");
});
metronome.core.t9463.prototype.om$core$IRender$ = true;
metronome.core.t9463.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div(null,React.DOM.audio({"autobuffer": true, "codecs=": "vorbis", "type": "audio/ogg", "src": "ding.ogg", "ref": "ding"}),React.DOM.audio({"autobuffer": true, "codecs=": "vorbis", "type": "audio/ogg", "src": "dong.ogg", "ref": "dong"}));
});
metronome.core.t9463.prototype.om$core$IDidMount$ = true;
metronome.core.t9463.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;var sound_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360));var c__6355__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto__,sound_channel,___$3){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto__,sound_channel,___$3){
return (function (state_9490){var state_val_9491 = (state_9490[(1)]);if((state_val_9491 === (7)))
{var inst_9477 = (state_9490[(7)]);var inst_9477__$1 = (state_9490[(2)]);var inst_9478 = inst_9477__$1.paused;var state_9490__$1 = (function (){var statearr_9492 = state_9490;(statearr_9492[(7)] = inst_9477__$1);
return statearr_9492;
})();if(cljs.core.truth_(inst_9478))
{var statearr_9493_9512 = state_9490__$1;(statearr_9493_9512[(1)] = (8));
} else
{var statearr_9494_9513 = state_9490__$1;(statearr_9494_9513[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9491 === (1)))
{var state_9490__$1 = state_9490;var statearr_9495_9514 = state_9490__$1;(statearr_9495_9514[(2)] = null);
(statearr_9495_9514[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9491 === (4)))
{var inst_9468 = (state_9490[(2)]);var inst_9469 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"beat","beat",-817854366));var inst_9470 = cljs.core.mod.call(null,inst_9469,(4));var inst_9471 = (inst_9470 === (0));var state_9490__$1 = (function (){var statearr_9496 = state_9490;(statearr_9496[(8)] = inst_9468);
return statearr_9496;
})();if(cljs.core.truth_(inst_9471))
{var statearr_9497_9515 = state_9490__$1;(statearr_9497_9515[(1)] = (5));
} else
{var statearr_9498_9516 = state_9490__$1;(statearr_9498_9516[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9491 === (6)))
{var inst_9475 = om.core.get_node.call(null,self__.owner,"dong");var state_9490__$1 = state_9490;var statearr_9499_9517 = state_9490__$1;(statearr_9499_9517[(2)] = inst_9475);
(statearr_9499_9517[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9491 === (3)))
{var inst_9488 = (state_9490[(2)]);var state_9490__$1 = state_9490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9490__$1,inst_9488);
} else
{if((state_val_9491 === (2)))
{var state_9490__$1 = state_9490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9490__$1,(4),sound_channel);
} else
{if((state_val_9491 === (9)))
{var inst_9477 = (state_9490[(7)]);var inst_9482 = inst_9477.currentTime = (0);var state_9490__$1 = state_9490;var statearr_9500_9518 = state_9490__$1;(statearr_9500_9518[(2)] = inst_9482);
(statearr_9500_9518[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9491 === (5)))
{var inst_9473 = om.core.get_node.call(null,self__.owner,"ding");var state_9490__$1 = state_9490;var statearr_9501_9519 = state_9490__$1;(statearr_9501_9519[(2)] = inst_9473);
(statearr_9501_9519[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9491 === (10)))
{var inst_9484 = (state_9490[(2)]);var inst_9485 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"beat","beat",-817854366),cljs.core.inc);var state_9490__$1 = (function (){var statearr_9502 = state_9490;(statearr_9502[(9)] = inst_9485);
(statearr_9502[(10)] = inst_9484);
return statearr_9502;
})();var statearr_9503_9520 = state_9490__$1;(statearr_9503_9520[(2)] = null);
(statearr_9503_9520[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9491 === (8)))
{var inst_9477 = (state_9490[(7)]);var inst_9480 = inst_9477.play();var state_9490__$1 = state_9490;var statearr_9504_9521 = state_9490__$1;(statearr_9504_9521[(2)] = inst_9480);
(statearr_9504_9521[(1)] = (10));
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
});})(c__6355__auto__,sound_channel,___$3))
;return ((function (switch__6340__auto__,c__6355__auto__,sound_channel,___$3){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_9508 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9508[(0)] = state_machine__6341__auto__);
(statearr_9508[(1)] = (1));
return statearr_9508;
});
var state_machine__6341__auto____1 = (function (state_9490){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_9490);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e9509){if((e9509 instanceof Object))
{var ex__6344__auto__ = e9509;var statearr_9510_9522 = state_9490;(statearr_9510_9522[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9509;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9523 = state_9490;
state_9490 = G__9523;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_9490){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_9490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto__,sound_channel,___$3))
})();var state__6357__auto__ = (function (){var statearr_9511 = f__6356__auto__.call(null);(statearr_9511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto__);
return statearr_9511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto__,sound_channel,___$3))
);
return c__6355__auto__;
});
metronome.core.t9463.prototype.om$core$IInitState$ = true;
metronome.core.t9463.prototype.om$core$IInitState$init_state$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"beat","beat",-817854366),(0)], null);
});
metronome.core.t9463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9465){var self__ = this;
var _9465__$1 = this;return self__.meta9464;
});
metronome.core.t9463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9465,meta9464__$1){var self__ = this;
var _9465__$1 = this;return (new metronome.core.t9463(self__.owner,self__._,self__.sound,meta9464__$1));
});
metronome.core.__GT_t9463 = (function __GT_t9463(owner__$1,___$1,sound__$1,meta9464){return (new metronome.core.t9463(owner__$1,___$1,sound__$1,meta9464));
});
}
return (new metronome.core.t9463(owner,_,sound,null));
});
metronome.core.millis = (function millis(){return (new Date()).getTime();
});
metronome.core.click = (function click(_,owner){if(typeof metronome.core.t9529 !== 'undefined')
{} else
{
/**
* @constructor
*/
metronome.core.t9529 = (function (owner,_,click,meta9530){
this.owner = owner;
this._ = _;
this.click = click;
this.meta9530 = meta9530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
metronome.core.t9529.cljs$lang$type = true;
metronome.core.t9529.cljs$lang$ctorStr = "metronome.core/t9529";
metronome.core.t9529.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"metronome.core/t9529");
});
metronome.core.t9529.prototype.om$core$IRenderState$ = true;
metronome.core.t9529.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$2,p__9532){var self__ = this;
var map__9533 = p__9532;var map__9533__$1 = ((cljs.core.seq_QMARK_.call(null,map__9533))?cljs.core.apply.call(null,cljs.core.hash_map,map__9533):map__9533);var previous_click = cljs.core.get.call(null,map__9533__$1,new cljs.core.Keyword(null,"previous-click","previous-click",1422525602));var click_channel = cljs.core.get.call(null,map__9533__$1,new cljs.core.Keyword(null,"click-channel","click-channel",-247663605));var ___$3 = this;return React.DOM.button({"onClick": ((function (___$3,map__9533,map__9533__$1,previous_click,click_channel){
return (function (){var m = metronome.core.millis.call(null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"previous-click","previous-click",1422525602),m);
if((previous_click == null))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,click_channel,(m - previous_click));
}
});})(___$3,map__9533,map__9533__$1,previous_click,click_channel))
, "className": "btn btn-default btn-lg btn-block btn-tap-tempo"},"tap tempo");
});
metronome.core.t9529.prototype.om$core$IInitState$ = true;
metronome.core.t9529.prototype.om$core$IInitState$init_state$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"previous-click","previous-click",1422525602),null], null);
});
metronome.core.t9529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9531){var self__ = this;
var _9531__$1 = this;return self__.meta9530;
});
metronome.core.t9529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9531,meta9530__$1){var self__ = this;
var _9531__$1 = this;return (new metronome.core.t9529(self__.owner,self__._,self__.click,meta9530__$1));
});
metronome.core.__GT_t9529 = (function __GT_t9529(owner__$1,___$1,click__$1,meta9530){return (new metronome.core.t9529(owner__$1,___$1,click__$1,meta9530));
});
}
return (new metronome.core.t9529(owner,_,click,null));
});
om.core.root.call(null,(function (app,owner){if(typeof metronome.core.t9534 !== 'undefined')
{} else
{
/**
* @constructor
*/
metronome.core.t9534 = (function (owner,app,meta9535){
this.owner = owner;
this.app = app;
this.meta9535 = meta9535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
metronome.core.t9534.cljs$lang$type = true;
metronome.core.t9534.cljs$lang$ctorStr = "metronome.core/t9534";
metronome.core.t9534.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"metronome.core/t9534");
});
metronome.core.t9534.prototype.om$core$IRenderState$ = true;
metronome.core.t9534.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9537){var self__ = this;
var map__9538 = p__9537;var map__9538__$1 = ((cljs.core.seq_QMARK_.call(null,map__9538))?cljs.core.apply.call(null,cljs.core.hash_map,map__9538):map__9538);var click_channel = cljs.core.get.call(null,map__9538__$1,new cljs.core.Keyword(null,"click-channel","click-channel",-247663605));var sound_channel = cljs.core.get.call(null,map__9538__$1,new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360));var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,"metronome"),om.core.build.call(null,metronome.core.clock,new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360),sound_channel,new cljs.core.Keyword(null,"click-channel","click-channel",-247663605),click_channel], null)], null)),om.core.build.call(null,metronome.core.sound,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360),sound_channel], null)], null)),om.core.build.call(null,metronome.core.click,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click-channel","click-channel",-247663605),click_channel], null)], null)));
});
metronome.core.t9534.prototype.om$core$IInitState$ = true;
metronome.core.t9534.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sound-channel","sound-channel",-1818809360),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"click-channel","click-channel",-247663605),cljs.core.async.chan.call(null)], null);
});
metronome.core.t9534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9536){var self__ = this;
var _9536__$1 = this;return self__.meta9535;
});
metronome.core.t9534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9536,meta9535__$1){var self__ = this;
var _9536__$1 = this;return (new metronome.core.t9534(self__.owner,self__.app,meta9535__$1));
});
metronome.core.__GT_t9534 = (function __GT_t9534(owner__$1,app__$1,meta9535){return (new metronome.core.t9534(owner__$1,app__$1,meta9535));
});
}
return (new metronome.core.t9534(owner,app,null));
}),metronome.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map