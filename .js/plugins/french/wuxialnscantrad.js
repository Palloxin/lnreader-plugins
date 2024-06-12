var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{a(n.next(t))}catch(t){s(t)}}function u(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,u)}a((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(u){return function(a){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,n=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=e.call(t,o)}catch(t){u=[6,t],n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("cheerio"),i=require("@libs/fetch"),s=require("@libs/defaultCover"),o=require("@libs/novelStatus"),u=r(require("dayjs")),a=function(){function r(){this.id="wuxialnscantrad",this.name="WuxiaLnScantrad",this.icon="src/fr/wuxialnscantrad/icon.png",this.site="https://wuxialnscantrad.wordpress.com",this.version="1.0.0",this.filters=void 0}return r.prototype.getCheerio=function(r){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return[4,(0,i.fetchApi)(r,{headers:{"Accept-Encoding":"deflate"}})];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),[2,(0,n.load)(t)]}}))}))},r.prototype.popularNovels=function(r,n){n.showLatestNovels,n.filters;return t(this,void 0,void 0,(function(){var t,n,i,o,u=this;return e(this,(function(e){switch(e.label){case 0:return r>1?[2,[]]:(t=[],i=this.site,[4,this.getCheerio(i)]);case 1:return(o=e.sent())("#menu-item-2210 ul li").each((function(e,r){var i=o(r).first().text().trim(),a=o(r).find("a").attr("href");a&&i&&(n={name:i,cover:s.defaultCover,path:a.replace(u.site,"")},t.push(n))})),[2,t]}}))}))},r.prototype.parseNovel=function(r){return t(this,void 0,void 0,(function(){var t,n,i,s,o,a=this;return e(this,(function(e){switch(e.label){case 0:return t={path:r,name:"Sans titre"},[4,this.getCheerio(this.site+r)];case 1:return n=e.sent(),t.name=n(".entry-title").text().trim(),t.cover=n(".entry-content p strong img").first().attr("src")||n(".entry-content p img").first().attr("src"),i=n(".entry-content").text(),t.author=this.getAuthor(i),t.genres=this.getGenres(i),t.artist=this.getArtist(i),t.summary=this.getSummary(i),t.status=this.getStatus(i),s=n(".entry-content ul").first().children("li"),o=[],s.each((function(t,e){var r=n(e).text().trim(),i=n(e).find("a").attr("href");if(i&&i.includes(a.site)&&r){var s=i.replace(a.site,"");if(!o.some((function(t){return t.path===s}))){var c=(0,u.default)(null==i?void 0:i.substring(a.site.length+1,a.site.length+11)).format("DD MMMM YYYY");o.push({name:r,path:s,releaseTime:c})}}})),t.chapters=o,[2,t]}}))}))},r.prototype.getAuthor=function(t){var e=/Auteur\(s\):\s*(.*)/.exec(t),r="";return null!==e&&(r=e[1].trim()),r},r.prototype.getGenres=function(t){var e=/Genres:\s*(.*)/.exec(t),r="";return null!==e&&(r=e[1].trim()),r},r.prototype.getArtist=function(t){var e=/Artiste\(s\):\s*(.*)Genres/.exec(t),r="";return null!==e&&(r=e[1].trim()),r},r.prototype.getSummary=function(t){for(var e=0,r=[/Synopsis :([\s\S]*)Chapitres disponibles/,/Sypnopsis([\s\S]*)Sypnopsis officiel/,/Synopsis([\s\S]*)Chapitres disponibles/];e<r.length;e++){var n=r[e].exec(t);if(null!==n)return n[1].trim()}return""},r.prototype.getStatus=function(t){var e=/Statut:\s*(.*)/.exec(t),r="";switch(null!==e&&(r=e[1].trim()),r){case"En cours":default:return o.NovelStatus.Ongoing;case"Arrêté":return o.NovelStatus.Cancelled;case"Terminé":return o.NovelStatus.Completed}},r.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,n;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r)];case 1:return t=e.sent(),n="",t(".entry-content").contents().each((function(){var e,r,i,s;if(null===(e=t(this).html())||void 0===e?void 0:e.includes("<script"))return!1;(null===(r=t(this).html())||void 0===r?void 0:r.includes('data-attachment-id="480'))||(null===(i=t.html(this))||void 0===i?void 0:i.includes("<hr>"))||(null===(s=t.html(this))||void 0===s?void 0:s.includes("<p>&nbsp;</p>"))||(n+=t.html(this))})),[2,n]}}))}))},r.prototype.searchNovels=function(r,n){return t(this,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return 1!==n?[2,[]]:[4,this.popularNovels(1,{showLatestNovels:!0,filters:void 0})];case 1:return[2,t.sent().filter((function(t){return t.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().includes(r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim())}))]}}))}))},r}();exports.default=new a;