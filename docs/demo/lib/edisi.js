/*! CEISA Monitor v2.1.0 (c) 2026 Trias Purwantoro. Hak cipta dilindungi. Dilarang menyalin, mengubah, atau mendistribusikan tanpa izin tertulis. */
const t=(()=>{try{return/pratinjau/i.test(chrome.runtime.getManifest().version_name||"")}catch{return!0}})(),e=t?"CEISA Monitor 2.0 (Pratinjau)":"CEISA Monitor",n=r=>`v${r}${t?" · pratinjau":""}`;export{e as NAMA,t as PRATINJAU,n as verLabel};
