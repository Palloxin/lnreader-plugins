var e=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,i){function l(e){try{s(r.next(e))}catch(e){i(e)}}function o(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,o)}s((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,r,n,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},l=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return l.next=o(0),l.throw=o(1),l.return=o(2),"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;l&&(l=0,o[0]&&(i=0)),i;)try{if(a=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),n=require("cheerio"),i=require("@libs/defaultCover"),l=require("@libs/novelStatus"),o=a(require("dayjs")),s=require("@libs/storage"),u=function(e,t){return new RegExp(t.join("|")).test(e)},c=new(function(){function a(e){var t,a;this.hideLocked=s.storage.get("hideLocked"),this.parseData=function(e){var t,a=(0,o.default)(),r=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",n=parseInt(r,10);if(!r)return e;if(u(e,["detik","segundo","second","วินาที"]))a=a.subtract(n,"second");else if(u(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a=a.subtract(n,"minute");else if(u(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a=a.subtract(n,"hours");else if(u(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a=a.subtract(n,"days");else if(u(e,["week","semana"]))a=a.subtract(n,"week");else if(u(e,["month","mes"]))a=a.subtract(n,"month");else{if(!u(e,["year","año"]))return"Invalid Date"!==(0,o.default)(e).format("LL")?(0,o.default)(e).format("LL"):e;a=a.subtract(n,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var r=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(6+r),this.options=e.options,this.filters=e.filters,(null===(a=this.options)||void 0===a?void 0:a.hasLocked)&&(this.pluginSettings={hideLocked:{value:"",label:"Hide locked chapters",type:"Switch"}})}return a.prototype.translateDragontea=function(e){var t;if("dragontea"!==this.id)return e;var a=(0,n.load)((null===(t=e.html())||void 0===t?void 0:t.replace("\n","").replace(/<br\s*\/?>/g,"\n"))||"");return e.html(a.html()),e.find("*").addBack().contents().filter((function(e,t){return 3===t.nodeType})).each((function(e,t){var r=a(t),n=r.text().normalize("NFD").split("").map((function(e){var t=e.normalize("NFC"),a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t);return a>=0?"zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA"[a]+e.slice(t.length):e})).join("");r.replaceWith(n.replace("\n","<br>"))})),e},a.prototype.getHostname=function(e){var t=(e=e.split("/")[2]).split(".");return t.pop(),t.join(".")},a.prototype.getCheerio=function(a,i){return e(this,void 0,void 0,(function(){var e,l,o,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(a)];case 1:if(!(e=t.sent()).ok&&1!=i)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return o=n.load,[4,e.text()];case 2:if(l=o.apply(void 0,[t.sent()]),s=l("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s)throw new Error("Captcha error, please open in webview");return[2,l]}}))}))},a.prototype.parseNovels=function(e){var t=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(a,r){var n=e(r).find(".post-title").text().trim(),l=e(r).find(".post-title").find("a").attr("href")||"";if(n&&l){var o=e(r).find("img"),s={name:n,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset")||i.defaultCover,path:l.replace(/https?:\/\/.*?\//,"/")};t.push(s)}})),t},a.prototype.popularNovels=function(a,r){return e(this,arguments,void 0,(function(e,a){var r,n,i,l,o,s,u=a.filters,c=a.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:for(n in r=this.site+"/page/"+e+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),c&&(r+="&m_orderby=latest"),u)if("object"==typeof u[n].value)for(i=0,l=u[n].value;i<l.length;i++)o=l[i],r+="&".concat(n,"=").concat(o);else u[n].value&&(r+="&".concat(n,"=").concat(u[n].value));return[4,this.getCheerio(r,1!=e)];case 1:return s=t.sent(),[2,this.parseNovels(s)]}}))}))},a.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,s,u,c,p,h,v,d,m=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return(e=t.sent())(".manga-title-badges, #manga-title span").remove(),(s={path:a,name:e(".post-title h1").text().trim()||e("#manga-title h1").text().trim()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||i.defaultCover,e(".post-content_item, .post-content").each((function(){var t=e(this).find("h5").text().trim(),a=e(this).find(".summary-content");switch(t){case"Genre(s)":case"Genre":case"Tags(s)":case"Tag(s)":case"Tags":case"Género(s)":case"التصنيفات":s.genres?s.genres+=", "+a.find("a").map((function(t,a){return e(a).text()})).get().join(", "):s.genres=a.find("a").map((function(t,a){return e(a).text()})).get().join(", ");break;case"Author(s)":case"Author":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":s.author=a.text().trim();break;case"Status":case"Novel":case"Estado":s.status=a.text().trim().includes("OnGoing")||a.text().trim().includes("مستمرة")?l.NovelStatus.Ongoing:l.NovelStatus.Completed;break;case"Artist(s)":s.artist=a.text().trim()}})),s.author||(s.author=e(".manga-authors").text().trim()),e("div.summary__content .code-block,script,noscript").remove(),s.summary=this.translateDragontea(e("div.summary__content")).text().trim()||e("#tab-manga-about").text().trim()||e('.post-content_item h5:contains("Summary")').next().find("span").map((function(t,a){return e(a).text()})).get().join("\n\n").trim()||e(".manga-summary p").map((function(t,a){return e(a).text()})).get().join("\n\n").trim()||e(".manga-excerpt p").map((function(t,a){return e(a).text()})).get().join("\n\n").trim(),u=[],c="",(null===(d=this.options)||void 0===d?void 0:d.useNewChapterEndpoint)?[4,(0,r.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST",referrer:this.site+a}).then((function(e){return e.text()}))]:[3,3];case 2:return c=t.sent(),[3,5];case 3:return p=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(h=new FormData).append("action","manga_get_chapters"),h.append("manga",p),[4,(0,r.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:h}).then((function(e){return e.text()}))];case 4:c=t.sent(),t.label=5;case 5:return"0"!==c&&(e=(0,n.load)(c)),v=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(t,a){var r=e(a).find("a").text().trim(),n=a.attribs.class.includes("premium-block");n&&(r="🔒 "+r);var i=e(a).find("span.chapter-release-date").text().trim();i=i?m.parseData(i):(0,o.default)().format("LL");var l=e(a).find("a").attr("href")||"";!l||"#"==l||n&&m.hideLocked||u.push({name:r,path:l.replace(/https?:\/\/.*?\//,"/"),releaseTime:i||null,chapterNumber:v-t})})),s.chapters=u.reverse(),[2,s]}}))}))},a.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,r,n;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,!1)];case 1:return e=t.sent(),r=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),null===(n=this.options)||void 0===n||n.customJs,[2,this.translateDragontea(r).html()||""]}}))}))},a.prototype.searchNovels=function(a,r){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"/page/"+r+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return n=t.sent(),[2,this.parseNovels(n)]}}))}))},a}())({id:"azora",sourceSite:"https://azoramoon.com/",sourceName:"Azora",options:{useNewChapterEndpoint:!0,lang:"Arabic",versionIncrements:1},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"أكشن",value:"أكشن"},{label:"إثارة",value:"إثارة"},{label:"إيسكاي",value:"إيسكاي"},{label:"الحياة اليومية",value:"الحياة-اليومية"},{label:"الحياة مدرسية",value:"الحياة-مدرسية"},{label:"انتقام",value:"انتقام"},{label:"تاريخي",value:"تاريخي"},{label:"تراجيدي",value:"تراجيدي"},{label:"جندر بندر",value:"جندر-بندر"},{label:"جوسي",value:"جوسي"},{label:"حريم",value:"حريم"},{label:"خارق للطبيعة",value:"خارق-للطبيعة"},{label:"خيال",value:"خيال"},{label:"خيال علمي",value:"خيال-علمي"},{label:"دراما",value:"دراما"},{label:"دموي",value:"دموي"},{label:"راشد",value:"راشد"},{label:"رعب",value:"رعب"},{label:"رومانسي",value:"رومانسي"},{label:"رياضة",value:"رياضة"},{label:"زمنكاني",value:"زمنكاني"},{label:"سينين",value:"سينين"},{label:"شريحة من الحياة",value:"شريحة-من-الحياة"},{label:"شوجو",value:"شوجو"},{label:"شونين",value:"شونين"},{label:"صداقة",value:"صداقة"},{label:"طبخ",value:"طبخ"},{label:"عائلي",value:"عائلي"},{label:"غموض",value:"غموض"},{label:"قتال",value:"قتال"},{label:"قوة خارقة",value:"قوة-خارقة"},{label:"كوميدي",value:"كوميدي"},{label:"مغامرات",value:"مغامرات"},{label:"نفسي",value:"نفسي"}]},op:{type:"Switch",label:"مع كل التصنيفات المحددة",value:!1},author:{type:"Text",label:"المؤلف",value:""},artist:{type:"Text",label:"الرسام",value:""},release:{type:"Text",label:"سنة الاصدار",value:""},adult:{type:"Picker",label:"محتوى للبالغين",value:"",options:[{label:"الكل",value:""},{label:"بدون محتوى للبالغين",value:"0"},{label:"محتوى للبالغين فقط",value:"1"}]},"status[]":{type:"Checkbox",label:"الحالة",value:[],options:[{label:"مستمرة",value:"on-going"},{label:"Completed",value:"end"},{label:"ألغيت",value:"canceled"},{label:"في الانتظار",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"ترتيب حسب :",value:"",options:[{label:"ملاءمة",value:""},{label:"أحدث",value:"latest"},{label:"أ-ي",value:"alphabet"},{label:"تقييم",value:"rating"},{label:"الشائع",value:"trending"},{label:"الأكثر مشاهدة",value:"views"},{label:"جديد",value:"new-manga"}]}}});exports.default=c;