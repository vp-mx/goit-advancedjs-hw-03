import{S as m,i as l}from"./assets/vendor-CsFajCem.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const d=i=>i.reduce((r,t)=>r+`
            <li class="gallery-card">
              <a class="gallery-img-orig" href="${t.largeImageURL}">
                <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
                <div class="img-data">
                 <div class="img-data-column img-likes">
                  <p class="img-title">Likes</p>
                  <p class="img-value">${t.likes}</p>
                 </div>
                 <div class="img-data-column img-views">
                  <p class="img-title">Views</p>
                  <p class="img-value">${t.views}</p>
                 </div>
                 <div class="img-data-column img-comments">
                  <p class="img-title">Comments</p>
                  <p class="img-value">${t.comments}</p>
                 </div>
                  <div class="img-data-column img-downloads">
                  <p class="img-title">Downloads</p>
                  <p class="img-value">${t.downloads}</p>
                 </div>
                </div>
              </a>
            </li>
           `,""),u=i=>fetch(`https://pixabay.com/api/?${i}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}),g=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),n=document.querySelector(".js-loader");let p=new m(".gallery-card a",{captionsData:"alt",captionDelay:250});const f=i=>{i.preventDefault();const r=i.currentTarget.elements.user_query.value.trim();if(r===""){l.error({message:"Search value should not be empty!",position:"topRight"});return}const t=new URLSearchParams({key:"50950053-db3558a1af50bab2399c0c009",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});c.innerHTML="",n.classList.remove("is-hidden"),u(t).then(a=>{if(n.classList.add("is-hidden"),a.total===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="";return}c.innerHTML=d(a.hits),p.refresh()}).catch(a=>{n.classList.add("is-hidden"),l.error({message:"An error occurred. Please try again!",position:"topRight"})})};g.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
