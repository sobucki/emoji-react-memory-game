import{Push as a}from"./index-BrU_0o00.js";import{E as p}from"./ExternalInteractorBase-CIi3zRdK.js";import{F as c,a0 as d}from"./index-DqgHU3XG.js";const h="push",l=0;class O extends p{constructor(e){super(e),this.handleClickMode=n=>{if(n!==h)return;const t=this.container,o=t.actualOptions,r=o.interactivity.modes.push;if(!r)return;const i=c(r.quantity);if(i<=l)return;const s=d([void 0,...r.groups]),u=s!==void 0?t.actualOptions.particles.groups[s]:void 0;t.particles.push(i,t.interactivity.mouse,u,s)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...n){e.push||(e.push=new a);for(const t of n)e.push.load(t==null?void 0:t.push)}reset(){}}export{O as Pusher};
