function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-B0jjdB9b.js","assets/index-DInZvYLl.js","assets/index-cRl55f0s.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DInZvYLl.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-B0jjdB9b.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
