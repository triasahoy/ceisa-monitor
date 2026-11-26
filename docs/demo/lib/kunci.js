/*! CEISA Monitor v2.1.0 (c) 2026 Trias Purwantoro. Hak cipta dilindungi. Dilarang menyalin, mengubah, atau mendistribusikan tanpa izin tertulis. */
let t=Promise.resolve();function o(n){const e=t.then(()=>n());return t=e.catch(()=>{}),e}export{o as snapLock};
