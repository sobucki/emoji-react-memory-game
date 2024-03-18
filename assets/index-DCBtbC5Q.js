function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-BYsHPRBl.js","assets/index-DqgHU3XG.js","assets/index-cRl55f0s.css","assets/OptionsColor-1yglEx4x.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DqgHU3XG.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-BYsHPRBl.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
