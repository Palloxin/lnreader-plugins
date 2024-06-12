var e=this&&this.__awaiter||function(e,a,t,l){return new(t||(t=Promise))((function(i,n){function r(e){try{s(l.next(e))}catch(e){n(e)}}function o(e){try{s(l.throw(e))}catch(e){n(e)}}function s(e){var a;e.done?i(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(r,o)}s((l=l.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var t,l,i,n,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function o(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;n&&(n=0,o[0]&&(r=0)),r;)try{if(t=1,l&&(i=2&o[0]?l.return:o[0]?l.throw||((i=l.return)&&i.call(l),0):l.next)&&!(i=i.call(l,o[1])).done)return i;switch(l=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,l=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=a.call(e,r)}catch(e){o=[6,e],l=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("cheerio"),l=require("htmlparser2"),i=require("@libs/fetch"),n=require("@libs/novelStatus"),r=require("@libs/defaultCover");function o(e,a){var t=e.match(/(\d+)$/);t&&t[0]&&(a.chapterNumber=parseInt(t[0]))}var s=new(function(){function s(e){var a,t;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var l=(null===(a=e.options)||void 0===a?void 0:a.versionIncrements)||0;this.version="1.1.".concat(1+l),this.options=null!==(t=e.options)&&void 0!==t?t:{},this.filters=e.filters}return s.prototype.getHostname=function(e){var a=(e=e.split("/")[2]).split(".");return a.pop(),a.join(".")},s.prototype.safeFecth=function(t,l){var n,r;return e(this,void 0,void 0,(function(){var e,o,s;return a(this,(function(a){switch(a.label){case 0:return[4,(0,i.fetchApi)(t)];case 1:if(!(e=a.sent()).ok&&1!=l)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return[4,e.text()];case 2:if(o=a.sent(),s=null===(r=null===(n=o.match(/<title>(.*?)<\/title>/))||void 0===n?void 0:n[1])||void 0===r?void 0:r.trim(),this.getHostname(t)!=this.getHostname(e.url)||s&&("Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s))throw new Error("Captcha error, please open in webview");return[2,o]}}))}))},s.prototype.parseNovels=function(e){var a=this,t=[];return(e.match(/<article([\s\S]*?)<\/article>/g)||[]).forEach((function(e){var l=e.match(/<a href="(.*?)".*title="(.*?)"/)||[],i=l[1],n=l[2];if(n&&i){var o=e.match(/<img.*src="(.*?)"(?:\sdata-src="(.*?)")?.*\/>/)||[];t.push({name:n,cover:o[2]||o[1]||r.defaultCover,path:i.replace(a.site,"")})}})),t},s.prototype.popularNovels=function(t,l){var i,n,r=l.filters,o=l.showLatestNovels;return e(this,void 0,void 0,(function(){var e,l,s,u,c,v,b;return a(this,(function(a){switch(a.label){case 0:for(s in e=null!==(n=null===(i=this.options)||void 0===i?void 0:i.seriesPath)&&void 0!==n?n:"series/",l=this.site+e+"?page="+t,r||(r=this.filters||{}),o&&(l+="&order=latest"),r)if("object"==typeof r[s].value)for(u=0,c=r[s].value;u<c.length;u++)v=c[u],l+="&".concat(s,"=").concat(v);else r[s].value&&(l+="&".concat(s,"=").concat(r[s].value));return[4,this.safeFecth(l,!1)];case 1:return b=a.sent(),[2,this.parseNovels(b)]}}))}))},s.prototype.parseNovel=function(t){var i;return e(this,void 0,void 0,(function(){var e,s,u,c,v,b,h,p,f,d,m,g,y,w,k,x,N,S;return a(this,(function(a){switch(a.label){case 0:return e=this.site,[4,this.safeFecth(e+t,!1)];case 1:return s=a.sent(),u={path:t,name:"",genres:"",summary:"",author:"",artist:"",status:"",chapters:[]},c=!1,v=!1,b=!1,h=!1,p=!1,f=!1,d=!1,m=!1,g=!1,y=!1,w=0,k=!1,x=[],N={},S=new l.Parser({onopentag:function(a,t){var l;!u.cover&&(null===(l=t.class)||void 0===l?void 0:l.includes("ts-post-image"))?(u.name=t.title,u.cover=t["data-src"]||t.src||r.defaultCover):"genxed"===t.class||"sertogenre"===t.class?c=!0:c&&"a"===a?v=!0:"div"!==a||"entry-content"!==t.class&&"description"!==t.itemprop?"spe"===t.class||"serl"===t.class?h=!0:h&&"span"===a?p=!0:"div"===a&&"sertostat"===t.class?(h=!0,p=!0,m=!0):"eplister eplisterfull"===t.class?g=!0:g&&"li"===a?y=!0:y&&("a"===a?N.path=t.href.replace(e,"").trim():"epl-num"===t.class?w=1:"epl-title"===t.class?w=2:"epl-date"===t.class?w=3:"epl-price"===t.class&&(w=4)):b=!0},ontext:function(e){var a,t;if(c)v&&(u.genres+=e+", ");else if(b)u.summary+=e.trim();else if(h){if(p){var l=e.toLowerCase().replace(":","").trim();if(f)u.author+=e||"Unknown";else if(d)u.artist+=e||"Unknown";else if(m)switch(l){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":u.status=n.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":u.status=n.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":u.status=n.NovelStatus.OnHiatus;break;default:u.status=n.NovelStatus.Unknown}switch(l){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":f=!0;break;case"الحالة":case"status":case"statut":case"estado":case"durum":m=!0;break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":d=!0}}}else if(g&&y)if(1===w)o(e,N);else if(2===w)N.name=(null===(t=null===(a=e.match(RegExp("^".concat(u.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s*(.+)"))))||void 0===a?void 0:a[1])||void 0===t?void 0:t.trim())||e.trim(),N.chapterNumber||o(e,N);else if(3===w)N.releaseTime=e;else if(4===w){switch(l=e.toLowerCase().trim()){case"free":case"gratuit":case"مجاني":case"livre":case"":k=!1;break;default:k=!0}}},onclosetag:function(e){var a,t,l;c?v?v=!1:(c=!1,u.genres=null===(a=u.genres)||void 0===a?void 0:a.slice(0,-2)):b?"br"===e?u.summary+="\n":"div"===e&&(b=!1):h?p?"span"===e&&(p=!1,f&&u.author?f=!1:d&&u.artist?d=!1:m&&""!==u.status&&(m=!1)):"div"===e&&(h=!1,u.author=null===(t=u.author)||void 0===t?void 0:t.trim(),u.artist=null===(l=u.artist)||void 0===l?void 0:l.trim()):g&&(y?1===w||2===w||3===w||4===w?w=0:"li"===e&&(y=!1,N.chapterNumber||(N.chapterNumber=0),k||x.push(N),N={}):"ul"===e&&(g=!1))}}),S.write(s),S.end(),x.length&&((null===(i=this.options)||void 0===i?void 0:i.reverseChapters)&&x.reverse(),u.chapters=x),[2,u]}}))}))},s.prototype.parseChapter=function(l){var i,n,r;return e(this,void 0,void 0,(function(){var e,o;return a(this,(function(a){switch(a.label){case 0:return[4,this.safeFecth(this.site+l,!1)];case 1:if(e=a.sent(),null===(i=this.options)||void 0===i?void 0:i.customJs)try{o=(0,t.load)(e),e=o.html()}catch(e){throw console.error("Error executing customJs:",e),e}return[2,(null===(r=null===(n=e.match(/<div.*class="epcontent ([\s\S]*?)<div.*class="bottomnav"/g))||void 0===n?void 0:n[0].match(/<p.*>([\s\S]*?)<\/p>/g))||void 0===r?void 0:r.join("\n"))||""]}}))}))},s.prototype.searchNovels=function(t,l){return e(this,void 0,void 0,(function(){var e,i;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"page/"+l+"/?s="+t,[4,this.safeFecth(e,!0)];case 1:return i=a.sent(),[2,this.parseNovels(i)]}}))}))},s}())({id:"novelsknight",sourceSite:"https://novelsknight.com/",sourceName:"NovelsKnight",options:{lang:"English",reverseChapters:!0},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Fan fiction",value:"fan-fiction"},{label:"fanqienovel",value:"fanqienovel"},{label:"fanstay",value:"fanstay"},{label:"fantasy",value:"fantasy"},{label:"football",value:"football"},{label:"horror",value:"horror"},{label:"Huyen Huyen",value:"huyen-huyen"},{label:"light novel",value:"light-novel"},{label:"living",value:"living"},{label:"martial arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"military",value:"military"},{label:"military history",value:"military-history"},{label:"Mystical Demons",value:"mystical-demons"},{label:"nba",value:"nba"},{label:"roamnce",value:"roamnce"},{label:"romance",value:"romance"},{label:"sc-fi online game",value:"sc-fi-online-game"},{label:"Sci-fi online games",value:"sci-fi-online-games"},{label:"Science fiction",value:"science-fiction"},{label:"Science fiction online game",value:"science-fiction-online-game"},{label:"speech",value:"speech"},{label:"Sports",value:"sports"},{label:"tanmi doujin",value:"tanmi-doujin"},{label:"Terrifying supernatural",value:"terrifying-supernatural"},{label:"urabn",value:"urabn"},{label:"urban",value:"urban"},{label:"Urban Fiction",value:"urban-fiction"},{label:"urban;romance",value:"urbanromance"},{label:"wuxia",value:"wuxia"},{label:"wuxia fairy",value:"wuxia-fairy"},{label:"Xuan Feng weak initiation",value:"xuan-feng-weak-initiation"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Youth Campus",value:"youth-campus"}]},"type[]":{type:"Checkbox",label:"Type",value:[],options:[{label:"Black Basket: Platinum Star",value:"black-basket-platinum-star"},{label:"ciweimao",value:"ciweimao"},{label:"Doomsday",value:"doomsday"},{label:"dragon ball",value:"dragon-ball"},{label:"Entertainment",value:"entertainment"},{label:"falo",value:"falo"},{label:"faloo",value:"faloo"},{label:"fan fiction",value:"fan-fiction"},{label:"fanqienovel",value:"fanqienovel"},{label:"Fantasy",value:"fantasy"},{label:"Football",value:"football"},{label:"Harry Potter",value:"harry-potter"},{label:"horror",value:"horror"},{label:"Hunter X Hunter",value:"hunter-x-hunter"},{label:"Infinite Evolution",value:"infinite-evolution"},{label:"Lords: Opens with a Bloody Nest",value:"lords-opens-with-a-bloody-nest"},{label:"martial arts",value:"martial-arts"},{label:"marvel",value:"marvel"},{label:"naruto",value:"naruto"},{label:"nba",value:"nba"},{label:"nove",value:"nove"},{label:"novel",value:"novel"},{label:"one piece",value:"one-piece"},{label:"online game",value:"online-game"},{label:"Please",value:"please"},{label:"qidian",value:"qidian"},{label:"qimao",value:"qimao"},{label:"romance",value:"romance"},{label:"Sci-Fi",value:"sci-fi"},{label:"Science-fiction",value:"science-fiction"},{label:"this is a world of horror",value:"this-is-a-world-of-horror"},{label:"Urban",value:"urban"},{label:"Web Novel",value:"web-novel"}]},status:{type:"Picker",label:"Status",value:"",options:[{label:"All",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Order by",value:"",options:[{label:"Default",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"},{label:"Rating",value:"rating"}]}}});exports.default=s;