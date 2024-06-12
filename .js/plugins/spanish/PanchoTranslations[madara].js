var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(l,r){function i(e){try{s(n.next(e))}catch(e){r(e)}}function o(e){try{s(n.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,l,r,i={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;r&&(r=0,o[0]&&(i=0)),i;)try{if(a=1,n&&(l=2&o[0]?n.return:o[0]?n.throw||((l=n.return)&&l.call(n),0):n.next)&&!(l=l.call(n,o[1])).done)return l;switch(n=0,l&&(o=[2&o[0],l.value]),o[0]){case 0:case 1:l=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(l=i.trys,(l=l.length>0&&l[l.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!l||o[1]>l[0]&&o[1]<l[3])){i.label=o[1];break}if(6===o[0]&&i.label<l[1]){i.label=l[1],l=o;break}if(l&&i.label<l[2]){i.label=l[2],i.ops.push(o);break}l[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{a=l=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},a=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var n,l=0,r=t.length;l<r;l++)!n&&l in t||(n||(n=Array.prototype.slice.call(t,0,l)),n[l]=t[l]);return e.concat(n||Array.prototype.slice.call(t))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var l=require("@libs/fetch"),r=require("cheerio"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=n(require("dayjs")),u=function(e,t){return new RegExp(t.join("|")).test(e)},c=new(function(){function n(e){var t;this.parseData=function(e){var t,a=(0,s.default)(),n=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",l=parseInt(n,10);if(!n)return e;if(u(e,["detik","segundo","second","วินาที"]))a.subtract(l,"second");else if(u(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a.subtract(l,"minute");else if(u(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a.subtract(l,"hours");else if(u(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a.subtract(l,"days");else if(u(e,["week","semana"]))a.subtract(l,"week");else if(u(e,["month","mes"]))a.subtract(l,"month");else{if(!u(e,["year","año"]))return e;a.subtract(l,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(1+a),this.options=e.options,this.filters=e.filters}return n.prototype.translateDragontea=function(e){if("dragontea"===this.id){var t=(0,r.load)(e.html()||""),n=t.html()||"";n=(n=n.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),e.html(n),e.find(":not(:has(*))").each((function(e,n){var l,r=t(n),i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),o="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),s=r.text().normalize("NFD").split(""),u=a([],s,!0).map((function(e){var t=e.normalize("NFC"),a=i.indexOf(t);return-1!==a?o[a]+e.slice(t.length):e})).join("");r.html((null===(l=r.html())||void 0===l?void 0:l.replace(r.text(),u).replace("\n","<br>"))||"")}))}return e},n.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},n.prototype.getCheerio=function(a,n){return e(this,void 0,void 0,(function(){var e,i,o,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,l.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=n)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return o=r.load,[4,e.text()];case 2:if(i=o.apply(void 0,[t.sent()]),s=i("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},n.prototype.parseNovels=function(e){var t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(a,n){var l=e(n).find(".post-title").text().trim(),r=e(n).find(".post-title").find("a").attr("href")||"";if(l&&r){var i=e(n).find("img"),o={name:l,cover:i.attr("data-src")||i.attr("src")||i.attr("data-lazy-srcset"),path:r.replace(/https?:\/\/.*?\//,"/")};t.push(o)}})),t},n.prototype.popularNovels=function(a,n){var l=n.filters,r=n.showLatestNovels;return e(this,void 0,void 0,(function(){var e,n,i,o,s,u;return t(this,(function(t){switch(t.label){case 0:for(n in e=this.site+"/page/"+a+"/?s=&post_type=wp-manga",l||(l=this.filters||{}),r&&(e+="&m_orderby=latest"),l)if("object"==typeof l[n].value)for(i=0,o=l[n].value;i<o.length;i++)s=o[i],e+="&".concat(n,"=").concat(s);else l[n].value&&(e+="&".concat(n,"=").concat(l[n].value));return[4,this.getCheerio(e,!1)];case 1:return u=t.sent(),[2,this.parseNovels(u)]}}))}))},n.prototype.parseNovel=function(a){var n;return e(this,void 0,void 0,(function(){var e,u,c,h,v,p,d,b,m=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(e=t.sent())(".manga-title-badges, #manga-title span").remove(),(u={path:a,name:e(".post-title h1").text().trim()||e("#manga-title h1").text()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||i.defaultCover,e(".post-content_item, .post-content").each((function(){var t=e(this).find("h5").text().trim(),a=e(this).find(".summary-content").text().trim();switch(t){case"Genre(s)":case"Género(s)":case"التصنيفات":u.genres=a;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":u.author=a;break;case"Status":case"Estado":u.status=a.includes("OnGoing")||a.includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed}})),e("div.summary__content .code-block,script").remove(),c=e("div.summary__content")||e("#tab-manga-about")||e('.post-content_item h5:contains("Summary")').next(),u.summary=this.translateDragontea(c).text().trim(),h=[],v="",(null===(n=this.options)||void 0===n?void 0:n.useNewChapterEndpoint)?[4,(0,l.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST"}).then((function(e){return e.text()}))]:[3,3];case 2:return v=t.sent(),[3,5];case 3:return p=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(d=new FormData).append("action","manga_get_chapters"),d.append("manga",p),[4,(0,l.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:d}).then((function(e){return e.text()}))];case 4:v=t.sent(),t.label=5;case 5:return"0"!==v&&(e=(0,r.load)(v)),b=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(t,a){var n=e(a).find("a").text().trim(),l=e(a).find("span.chapter-release-date").text().trim();l=l?m.parseData(l):(0,s.default)().format("LL");var r=e(a).find("a").attr("href")||"";h.push({name:n,path:r.replace(/https?:\/\/.*?\//,"/"),releaseTime:l||null,chapterNumber:b-t})})),u.chapters=h.reverse(),[2,u]}}))}))},n.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return e=t.sent(),n=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&n.find('span[style*="opacity: 0; position: fixed;"]').remove(),n.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(n).html()||""]}}))}))},n.prototype.searchNovels=function(a,n){return e(this,void 0,void 0,(function(){var e,l;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/page/"+n+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return l=t.sent(),[2,this.parseNovels(l)]}}))}))},n}())({id:"panchotranslations",sourceSite:"https://panchotranslations.com/",sourceName:"Pancho Translations",options:{useNewChapterEndpoint:!0,lang:"Spanish"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Acción",value:"accion"},{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Anime",value:"anime"},{label:"Aventura",value:"aventura"},{label:"Cartoon",value:"cartoon"},{label:"Comedia",value:"comedia"},{label:"Comedy",value:"comedy"},{label:"Comic",value:"comic"},{label:"Cooking",value:"cooking"},{label:"Detective",value:"detective"},{label:"Doujinshi",value:"doujinshi"},{label:"Drama",value:"drama"},{label:"Ecchi",value:"ecchi"},{label:"Escolar",value:"escolar"},{label:"Fantasía",value:"fantasia"},{label:"Fantasy",value:"fantasy"},{label:"Gender Bender",value:"gender-bender"},{label:"Harem",value:"harem"},{label:"Historical",value:"historical"},{label:"Horror",value:"horror"},{label:"Josei",value:"josei"},{label:"Live action",value:"live-action"},{label:"Magia",value:"magia"},{label:"Malentendidos",value:"malentendidos"},{label:"Manga",value:"manga"},{label:"Manhua",value:"manhua"},{label:"Manhwa",value:"manhwa"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Mecha",value:"mecha"},{label:"Mystery",value:"mystery"},{label:"One shot",value:"one-shot"},{label:"Posesión",value:"posesion"},{label:"Psychological",value:"psychological"},{label:"Reencarnación",value:"reencarnacion"},{label:"Regresión",value:"regresion"},{label:"Romance",value:"romance"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Shoujo",value:"shoujo"},{label:"Shoujo Ai",value:"shoujo-ai"},{label:"Shounen",value:"shounen"},{label:"Shounen Ai",value:"shounen-ai"},{label:"Silce of Life",value:"silce-of-life"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"Soft Yaoi",value:"soft-yaoi"},{label:"Soft Yuri",value:"soft-yuri"},{label:"Sports",value:"sports"},{label:"Supernatural",value:"supernatural"},{label:"Tragedy",value:"tragedy"},{label:"Webtoon",value:"webtoon"},{label:"Yaoi",value:"yaoi"},{label:"Yuri",value:"yuri"}]},op:{type:"Switch",label:"teniendo todos los géneros seleccionados",value:!1},author:{type:"Text",label:"Autor",value:""},artist:{type:"Text",label:"Artista",value:""},release:{type:"Text",label:"Año de Lanzamiento",value:""},adult:{type:"Picker",label:"Contenido para Adultos",value:"",options:[{label:"Todo",value:""},{label:"Ningún contenido para adultos",value:"0"},{label:"Solo contenido para adultos",value:"1"}]},"status[]":{type:"Checkbox",label:"Estado",value:[],options:[{label:"Terminada",value:"complete"},{label:"En curso",value:"on-going"},{label:"Cancelada",value:"canceled"},{label:"Abandonada por el Traductor",value:"on-hold"}]},m_orderby:{type:"Picker",label:"Ordenar por",value:"",options:[{label:"Importancia",value:""},{label:"Más Reciente",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Clasificación",value:"rating"},{label:"Tendencias",value:"trending"},{label:"Más vistas",value:"views"},{label:"Nuevo",value:"new-manga"}]}}});exports.default=c;