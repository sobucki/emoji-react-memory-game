function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Connector-Dir_wOyV.js","assets/CanvasUtils-24l_00Xw.js","assets/index-DInZvYLl.js","assets/index-cRl55f0s.css","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./index-DInZvYLl.js";class o{constructor(){this.opacity=.5}load(n){n&&n.opacity!==void 0&&(this.opacity=n.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links),n.radius!==void 0&&(this.radius=n.radius))}}async function a(i,n=!0){await i.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./Connector-Dir_wOyV.js"),__vite__mapDeps([0,1,2,3,4]));return new e(t)},n)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};
