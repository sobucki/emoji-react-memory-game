function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-DP1scYZN.js","assets/index-DqgHU3XG.js","assets/index-cRl55f0s.css","assets/ValueWithRandom-Xmxm9al2.js","assets/AnimationOptions-2dPIoU8G.js","assets/OptionsColor-1yglEx4x.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DqgHU3XG.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-DP1scYZN.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
