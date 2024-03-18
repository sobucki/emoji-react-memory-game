function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Nqfm5PMb.js","assets/index-DqgHU3XG.js","assets/index-cRl55f0s.css","assets/index-xKBWdjKa.js","assets/index-90xXAZ-w.js","assets/index-DwAfEwWF.js","assets/index-glOqM6mz.js","assets/index-DZI8yP_x.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DqgHU3XG.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Nqfm5PMb.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-xKBWdjKa.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-90xXAZ-w.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DwAfEwWF.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-glOqM6mz.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DZI8yP_x.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
