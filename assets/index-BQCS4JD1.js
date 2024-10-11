function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-qlDtnLAb.js","assets/index-DInZvYLl.js","assets/index-cRl55f0s.css","assets/index-BYHEmW1i.js","assets/index-DOe0m9kr.js","assets/index-qVmNqr3r.js","assets/index-D_-_etIl.js","assets/index-_f1A8Aik.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DInZvYLl.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-qlDtnLAb.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BYHEmW1i.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DOe0m9kr.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-qVmNqr3r.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-D_-_etIl.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-_f1A8Aik.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
