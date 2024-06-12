var t=this&&this.__awaiter||function(t,e,r,a){return new(r||(r=Promise))((function(n,i){function o(t){try{c(a.next(t))}catch(t){i(t)}}function s(t){try{c(a.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((a=a.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,a,n,i,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(r=1,a&&(n=2&s[0]?a.return:s[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,s[1])).done)return n;switch(a=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,a=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],a=0}finally{r=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},r=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var a,n=0,i=e.length;n<i;n++)!a&&n in e||(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return t.concat(a||Array.prototype.slice.call(e))},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/fetch"),i=require("cheerio"),o=require("@libs/defaultCover"),s=require("@libs/novelStatus"),c=a(require("dayjs")),l=function(t,e){return new RegExp(e.join("|")).test(t)},u=new(function(){function a(t){var e;this.parseData=function(t){var e,r=(0,c.default)(),a=(null===(e=t.match(/\d+/))||void 0===e?void 0:e[0])||"",n=parseInt(a,10);if(!a)return t;if(l(t,["detik","segundo","second","วินาที"]))r.subtract(n,"second");else if(l(t,["menit","dakika","min","minute","minuto","นาที","دقائق"]))r.subtract(n,"minute");else if(l(t,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))r.subtract(n,"hours");else if(l(t,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))r.subtract(n,"days");else if(l(t,["week","semana"]))r.subtract(n,"week");else if(l(t,["month","mes"]))r.subtract(n,"month");else{if(!l(t,["year","año"]))return t;r.subtract(n,"year")}return r.format("LL")},this.id=t.id,this.name=t.sourceName,this.icon="multisrc/madara/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var r=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(1+r),this.options=t.options,this.filters=t.filters}return a.prototype.translateDragontea=function(t){if("dragontea"===this.id){var e=(0,i.load)(t.html()||""),a=e.html()||"";a=(a=a.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),t.html(a),t.find(":not(:has(*))").each((function(t,a){var n,i=e(a),o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),s="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),c=i.text().normalize("NFD").split(""),l=r([],c,!0).map((function(t){var e=t.normalize("NFC"),r=o.indexOf(e);return-1!==r?s[r]+t.slice(e.length):t})).join("");i.html((null===(n=i.html())||void 0===n?void 0:n.replace(i.text(),l).replace("\n","<br>"))||"")}))}return t},a.prototype.getHostname=function(t){var e=(t=t.split("/")[2]).split(".");return e.pop(),e.join(".")},a.prototype.getCheerio=function(r,a){return t(this,void 0,void 0,(function(){var t,o,s,c;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(r)];case 1:if(!(t=e.sent()).ok&&1!=a)throw new Error("Could not reach site ("+t.status+") try to open in webview.");return s=i.load,[4,t.text()];case 2:if(o=s.apply(void 0,[e.sent()]),c=o("title").text().trim(),this.getHostname(r)!=this.getHostname(t.url)||"Bot Verification"==c||"You are being redirected..."==c||"Un instant..."==c||"Just a moment..."==c||"Redirecting..."==c)throw new Error("Captcha error, please open in webview");return[2,o]}}))}))},a.prototype.parseNovels=function(t){var e=[];return t(".manga-title-badges").remove(),t(".page-item-detail, .c-tabs-item__content").each((function(r,a){var n=t(a).find(".post-title").text().trim(),i=t(a).find(".post-title").find("a").attr("href")||"";if(n&&i){var o=t(a).find("img"),s={name:n,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset"),path:i.replace(/https?:\/\/.*?\//,"/")};e.push(s)}})),e},a.prototype.popularNovels=function(r,a){var n=a.filters,i=a.showLatestNovels;return t(this,void 0,void 0,(function(){var t,a,o,s,c,l;return e(this,(function(e){switch(e.label){case 0:for(a in t=this.site+"/page/"+r+"/?s=&post_type=wp-manga",n||(n=this.filters||{}),i&&(t+="&m_orderby=latest"),n)if("object"==typeof n[a].value)for(o=0,s=n[a].value;o<s.length;o++)c=s[o],t+="&".concat(a,"=").concat(c);else n[a].value&&(t+="&".concat(a,"=").concat(n[a].value));return[4,this.getCheerio(t,!1)];case 1:return l=e.sent(),[2,this.parseNovels(l)]}}))}))},a.prototype.parseNovel=function(r){var a;return t(this,void 0,void 0,(function(){var t,l,u,h,p,f,d,m,v=this;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return(t=e.sent())(".manga-title-badges, #manga-title span").remove(),(l={path:r,name:t(".post-title h1").text().trim()||t("#manga-title h1").text()}).cover=t(".summary_image > a > img").attr("data-lazy-src")||t(".summary_image > a > img").attr("data-src")||t(".summary_image > a > img").attr("src")||o.defaultCover,t(".post-content_item, .post-content").each((function(){var e=t(this).find("h5").text().trim(),r=t(this).find(".summary-content").text().trim();switch(e){case"Genre(s)":case"Género(s)":case"التصنيفات":l.genres=r;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":l.author=r;break;case"Status":case"Estado":l.status=r.includes("OnGoing")||r.includes("مستمرة")?s.NovelStatus.Ongoing:s.NovelStatus.Completed}})),t("div.summary__content .code-block,script").remove(),u=t("div.summary__content")||t("#tab-manga-about")||t('.post-content_item h5:contains("Summary")').next(),l.summary=this.translateDragontea(u).text().trim(),h=[],p="",(null===(a=this.options)||void 0===a?void 0:a.useNewChapterEndpoint)?[4,(0,n.fetchApi)(this.site+r+"ajax/chapters/",{method:"POST"}).then((function(t){return t.text()}))]:[3,3];case 2:return p=e.sent(),[3,5];case 3:return f=t(".rating-post-id").attr("value")||t("#manga-chapters-holder").attr("data-id")||"",(d=new FormData).append("action","manga_get_chapters"),d.append("manga",f),[4,(0,n.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:d}).then((function(t){return t.text()}))];case 4:p=e.sent(),e.label=5;case 5:return"0"!==p&&(t=(0,i.load)(p)),m=t(".wp-manga-chapter").length,t(".wp-manga-chapter").each((function(e,r){var a=t(r).find("a").text().trim(),n=t(r).find("span.chapter-release-date").text().trim();n=n?v.parseData(n):(0,c.default)().format("LL");var i=t(r).find("a").attr("href")||"";h.push({name:a,path:i.replace(/https?:\/\/.*?\//,"/"),releaseTime:n||null,chapterNumber:m-e})})),l.chapters=h.reverse(),[2,l]}}))}))},a.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,a;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return t=e.sent(),a=t(".text-left")||t(".text-right")||t(".entry-content")||t(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&a.find('span[style*="opacity: 0; position: fixed;"]').remove(),a.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(a).html()||""]}}))}))},a.prototype.searchNovels=function(r,a){return t(this,void 0,void 0,(function(){var t,n;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"/page/"+a+"/?s="+r+"&post_type=wp-manga",[4,this.getCheerio(t,!0)];case 1:return n=e.sent(),[2,this.parseNovels(n)]}}))}))},a}())({id:"mtl-novel",sourceSite:"https://mtl-novel.com/",sourceName:"MTL-Novel",options:{useNewChapterEndpoint:!1,versionIncrements:1},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[]},op:{type:"Switch",label:"",value:!1},author:{type:"Text",label:"",value:""},artist:{type:"Text",label:"",value:""},release:{type:"Text",label:"",value:""},adult:{type:"Picker",label:"",value:"",options:[]},"status[]":{type:"Checkbox",label:"",value:[],options:[]},m_orderby:{type:"Picker",label:"",value:"",options:[]}}});exports.default=u;