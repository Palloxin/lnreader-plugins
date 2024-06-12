var e=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))((function(n,s){function a(e){try{u(i.next(e))}catch(e){s(e)}}function o(e){try{u(i.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,o)}u((i=i.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var r,i,n,s,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=a.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("cheerio"),n=require("@libs/fetch"),s=require("@libs/defaultCover"),a=require("@libs/novelStatus"),o=r(require("dayjs")),u=function(){function r(){this.id="warriorlegendtrad",this.name="Warrior Legend Trad",this.icon="src/fr/warriorlegendtrad/icon.png",this.site="https://warriorlegendtrad.fr",this.version="1.0.0",this.filters=void 0,this.regexAuthors=[/Auteur\u00A0:([^\n]*)/],this.regexGenres=[/Genre :([^\n]*)/],this.regexSummary=[/Synopsis\u00A0:([\s\S]*)index chapitre :/i]}return r.prototype.getCheerio=function(r){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(r)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),[2,(0,i.load)(e)]}}))}))},r.prototype.popularNovels=function(r,i){i.showLatestNovels,i.filters;return e(this,void 0,void 0,(function(){var e,i,n,a,o=this;return t(this,(function(t){switch(t.label){case 0:return r>2?[2,[]]:(e=[],n=1===r?this.site+"/light-novel":this.site+"/crea",[4,this.getCheerio(n)]);case 1:return(a=t.sent())("div div div article").each((function(t,r){var n=a(r).find(".entry-wrapper h2").first().text().trim(),u=a(r).find(".entry-wrapper h2 a").attr("href"),l=a(r).find("figure a img").attr("src")||s.defaultCover;u&&n&&(i={name:n,cover:l,path:u.replace(o.site,"")},e.push(i))})),[2,e]}}))}))},r.prototype.parseNovel=function(r){return e(this,void 0,void 0,(function(){var e,i,n,a,u=this;return t(this,(function(t){switch(t.label){case 0:return e={path:r,name:"Sans titre"},[4,this.getCheerio(this.site+r)];case 1:return i=t.sent(),e.name=i(".site-main article header h1").text().trim(),e.cover=i(".site-main article figure img").first().attr("src")||s.defaultCover,n=i(".entry-content").text(),e.author=this.extractInfo(n,this.regexAuthors),e.genres=this.extractInfo(n,this.regexGenres),e.summary=this.extractInfo(n,this.regexSummary),e.status=this.getStatus(n),a=[],i("div div article div").find("h2 a, h3 a").each((function(e,t){var r=i(t).text().trim(),n=i(t).attr("href"),s=(0,o.default)(null==n?void 0:n.substring(u.site.length+1,u.site.length+11)).format("DD MMMM YYYY");n&&n.includes(u.site)&&r&&a.push({name:r,path:n.replace(u.site,""),releaseTime:s})})),e.chapters=a.sort((function(e,t){if(!e.releaseTime)return 1;if(!t.releaseTime)return-1;var r=new Date(e.releaseTime).getTime()-new Date(t.releaseTime).getTime();return 0===r?e.name.localeCompare(t.name):r})),[2,e]}}))}))},r.prototype.extractInfo=function(e,t){for(var r=0,i=t;r<i.length;r++){var n=i[r].exec(e);if(null!==n)return n[1].trim()}return""},r.prototype.getStatus=function(e){var t=this.extractInfo(e,[/État sur le site :([^\n]*)/i,/état sur le site:([^\n]*)/i]);return t.includes("en cours")?a.NovelStatus.Ongoing:t.includes("en pause")?a.NovelStatus.OnHiatus:t.includes("terminé")?a.NovelStatus.Completed:t.includes("abandonné")?a.NovelStatus.Cancelled:a.NovelStatus.Ongoing},r.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,i;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+r)];case 1:return e=t.sent(),i="",e(".entry-content").contents().each((function(){var t,r,n;(null===(t=e.html(this))||void 0===t?void 0:t.startsWith("<div"))||(null===(r=e.html(this))||void 0===r?void 0:r.startsWith("<hr"))||(null===(n=e.html(this))||void 0===n?void 0:n.includes("<script"))||(i+=e.html(this))})),[2,i]}}))}))},r.prototype.searchNovels=function(r,i){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return 1!==i?[2,[]]:[4,this.popularNovels(1,{showLatestNovels:!0,filters:void 0})];case 1:return[2,e.sent().filter((function(e){return e.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().includes(r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim())}))]}}))}))},r}();exports.default=new u;