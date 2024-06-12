var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("cheerio"),i=require("@libs/fetch"),o=require("@libs/defaultCover"),s=require("@libs/novelStatus"),a=n(require("dayjs")),u=function(){function n(){this.id="harkeneliwood",this.name="HarkenEliwood",this.icon="src/fr/harkeneliwood/icon.png",this.site="https://harkeneliwood.wordpress.com",this.version="1.0.0",this.filters=void 0}return n.prototype.getCheerio=function(n){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return[4,(0,i.fetchApi)(n,{headers:{"Accept-Encoding":"deflate"}})];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),[2,(0,r.load)(t)]}}))}))},n.prototype.popularNovels=function(n,r){r.showLatestNovels,r.filters;return t(this,void 0,void 0,(function(){var t,r,i,s,a=this;return e(this,(function(e){switch(e.label){case 0:return n>1?[2,[]]:(t=[],i=this.site,[4,this.getCheerio(i+"/projets/")]);case 1:return(s=e.sent())("#content .entry-content [href]").not('[rel="nofollow noopener noreferrer"]').each((function(e,n){var i=s(n).text().trim(),u=s(n).attr("href");u&&i&&(r={name:i,cover:o.defaultCover,path:u.replace(a.site,"")},t.push(r))})),[2,t]}}))}))},n.prototype.parseNovel=function(n){return t(this,void 0,void 0,(function(){var t,r,i,u=this;return e(this,(function(e){switch(e.label){case 0:return t={path:n,name:"Sans titre"},[4,this.getCheerio(this.site+n)];case 1:return r=e.sent(),t.name=r("#content h1.entry-title").text().trim(),t.cover=r("#content .entry-content p img").first().attr("src")||o.defaultCover,t.summary=this.getSummary(r("#content .entry-content").text()),t.author=this.getAuthor(r("#content .entry-content").text()),t.status=s.NovelStatus.Ongoing,i=[],r("#content .entry-content p a").each((function(t,e){var n=r(e).text().trim(),o=r(e).attr("href");if(o&&o.includes(u.site)&&n){var s=(0,a.default)(null==o?void 0:o.substring(u.site.length+1,u.site.length+11)).format("DD MMMM YYYY");i.push({name:n,path:o.replace(u.site,""),releaseTime:s})}})),t.chapters=i,[2,t]}}))}))},n.prototype.getSummary=function(t){var e="",n=/([\s\S]*)Raw :/i,r=/Synopsis :([\s\S]*)Traduction anglaise/i.exec(t),i=/Synopsis :([\s\S]*)Raw :/i.exec(t),o=/Synopsis 1 :([\s\S]*)Synopsis 2 :([\s\S]*)Raw :/i.exec(t),s=/Synopsis :([\s\S]*)Prélude/i.exec(t),a=/Synospis :([\s\S]*)Original /i.exec(t);if(e=null!==r?r[1]:null!==i?i[1]:null!==o?o[1]+o[2]:null!==s?s[1]:null!==a?a[1]:t,n.test(e)){var u=n.exec(e);null!==u&&(e=u[1])}return e.trim()},n.prototype.getAuthor=function(t){var e=/Auteur\s*:\s*(.*?)\s*(?:\r?\n|$)/i.exec(t);return null!==e&&""!==e[1].trim()?e[1].trim():""},n.prototype.parseChapter=function(n){return t(this,void 0,void 0,(function(){var t,r,i;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+n)];case 1:return t=e.sent(),r=t("h1.entry-title"),i=t("div.entry-content"),[2,(r.html()||"")+(i.html()||"")]}}))}))},n.prototype.searchNovels=function(n,r){return t(this,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return 1!==r?[2,[]]:[4,this.popularNovels(1,{showLatestNovels:!0,filters:void 0})];case 1:return[2,t.sent().filter((function(t){return t.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().includes(n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim())}))]}}))}))},n}();exports.default=new u;