function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-BUw9TMjn.js","assets/index-DqgHU3XG.js","assets/index-cRl55f0s.css","assets/ValueWithRandom-Xmxm9al2.js","assets/AnimationOptions-2dPIoU8G.js","assets/OptionsColor-1yglEx4x.js","assets/OptionsUtils-Bxi1bHUX.js","assets/AnimatableColor-AzsjcUc1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DqgHU3XG.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-BUw9TMjn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
