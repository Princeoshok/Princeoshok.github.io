// Both résumé views share content.js so edits do not need to be duplicated.
'use strict';
const p=window.PORTFOLIO_PROFILE,c=window.PORTFOLIO_CONTACT;
const e=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.title=p.name+' — Printable Résumé';
document.querySelector('#resume').innerHTML=`<h1>${e(p.name)}, ${e(p.designation)}</h1><p>${e(p.role)} · ${e(p.institution)}</p>${c.email?`<p>${e(c.email)}</p>`:''}<h2>Profile</h2><p>${e(p.introduction)}</p><h2>Experience</h2>${p.experience.map(x=>`<div class="item"><h3>${e(x.title)} · ${e(x.organization)}</h3><p class="muted">${e(x.period)}</p><p>${e(x.description)}</p></div>`).join('')}<h2>Education</h2>${p.education.map(x=>`<div class="item"><h3>${e(x.degree)}</h3><p>${e(x.institution)} · ${e(x.year)}</p></div>`).join('')}<h2>Credentials</h2>${p.credentials.map(x=>`<p>${e(x.title)} · ${e(x.issuer)} · ${e(x.year)}</p>`).join('')}<h2>Technical skills</h2><p>${p.skills.map(e).join(' · ')}</p><p>${e(p.methods)}</p>`;
