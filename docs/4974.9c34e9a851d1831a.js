"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4974],{4974:(T,u,s)=>{s.r(u),s.d(u,{HomePageModule:()=>x});var g=s(6895),i=s(7479),p=s(4719),c=s(7941),f=s(5861),m=s(9711),e=s(6738);let h=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile"]],decls:25,vars:0,consts:[["mode","md"],[1,"ion-padding"],["lines","full"],["slot","start"],["slot","end"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-toolbar",0)(1,"ion-title"),e._uU(2," Profile "),e.qZA()(),e.TgZ(3,"ion-content",1)(4,"ion-list")(5,"ion-item",2)(6,"ion-label",3),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"ion-note",4),e._uU(9,"Kal-El Amah"),e.qZA()(),e.TgZ(10,"ion-item",2)(11,"ion-label",3),e._uU(12,"Username"),e.qZA(),e.TgZ(13,"ion-note",4),e._uU(14,"zila"),e.qZA()(),e.TgZ(15,"ion-item",2)(16,"ion-label",3),e._uU(17,"City"),e.qZA(),e.TgZ(18,"ion-note",4),e._uU(19,"Manchester"),e.qZA()(),e.TgZ(20,"ion-item",2)(21,"ion-label",3),e._uU(22,"Subscription"),e.qZA(),e.TgZ(23,"ion-note",4),e._uU(24,"Premium"),e.qZA()()()())},dependencies:[i.W2,i.Ie,i.Q$,i.q_,i.uN,i.sr,i.wd]}),o})();function v(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",14),e.NdJ("click",function(){const a=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.channel(a))}),e._UZ(1,"img",15),e.TgZ(2,"ion-label"),e._uU(3),e.qZA()()}if(2&o){const t=r.$implicit;e.xp6(1),e.Q6J("src",null==t?null:t.cover,e.LSH),e.xp6(2),e.hij(" ",null==t?null:t.podcast," ")}}function Z(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"li",16),e.NdJ("click",function(){const a=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.castPod(a))}),e.TgZ(1,"div",17)(2,"div",18),e._UZ(3,"img",19),e.qZA(),e.TgZ(4,"div",20)(5,"ion-label",21),e._uU(6),e.qZA(),e.TgZ(7,"ion-label"),e._uU(8),e.qZA(),e.TgZ(9,"ion-label"),e._uU(10),e.qZA()()()()}if(2&o){const t=r.$implicit;e.xp6(3),e.Q6J("src",null==t?null:t.cover,e.LSH),e.xp6(3),e.Oqu(null==t?null:t.title),e.xp6(2),e.Oqu(null==t?null:t.podcast),e.xp6(2),e.AsE("",null==t?null:t.date," | ",null==t?null:t.duration,"")}}const P=[{path:"",component:(()=>{class o{constructor(t,n,l){this.router=t,this.modalCtrl=n,this.routerOutlet=l,this.fresh=m.R,this.discoverList=m.b,this.isActive=!1}search(t){t&&"Enter"===t.key&&this.router.navigate(["search-result"],{queryParams:{q:t.target.value}})}channel(t){this.router.navigate(["station"],{state:t})}castPod(t){this.router.navigate(["nowplaying"],{state:t})}openProfile(){var t=this;return(0,f.Z)(function*(){const n=yield t.modalCtrl.create({swipeToClose:!0,presentingElement:t.routerOutlet.nativeEl,mode:"ios",component:h});yield n.present(),yield n.onWillDismiss()})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c.F0),e.Y36(i.IN),e.Y36(i.jP))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:23,vars:3,consts:[[1,"ion-no-border"],["color","cast-bg","mode","md"],["slot","end","mode","ios",1,"ion-padding-end","avatar",3,"click"],["src","/assets/images/avatar.jpg"],["color","cast-bg ion-padding",3,"fullscreen"],["mode","md","placeholder","Type here to search...","animated","true","debounce","500","enterkeyhint","search",3,"keypress"],["searchBar",""],[1,"discover"],[1,"discover-list"],["class","discover-card",3,"click",4,"ngFor","ngForOf"],[1,"fresh"],[1,"header-double"],["lines","none",1,"fresh-list"],[3,"click",4,"ngFor","ngForOf"],[1,"discover-card",3,"click"],["alt","",3,"src"],[3,"click"],[1,"fresh-meta"],[1,"fresh-image"],[3,"src"],[1,"fresh-info"],[1,"fresh-list-title"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),e._uU(3," IonCast "),e.qZA(),e.TgZ(4,"div",2),e.NdJ("click",function(){return n.openProfile()}),e._UZ(5,"img",3),e.qZA()()(),e.TgZ(6,"ion-content",4)(7,"div")(8,"ion-searchbar",5,6),e.NdJ("keypress",function(a){return n.search(a)}),e.qZA()(),e.TgZ(10,"section",7)(11,"h3"),e._uU(12,"Discover"),e.qZA(),e.TgZ(13,"div",8),e.YNc(14,v,4,2,"div",9),e.qZA()(),e.TgZ(15,"section",10)(16,"div",11)(17,"h3"),e._uU(18,"Fresh"),e.qZA(),e.TgZ(19,"ion-label"),e._uU(20," See all "),e.qZA()(),e.TgZ(21,"ul",12),e.YNc(22,Z,11,5,"li",13),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(8),e.Q6J("ngForOf",n.discoverList),e.xp6(8),e.Q6J("ngForOf",n.fresh))},dependencies:[g.sg,i.W2,i.Gu,i.Q$,i.VI,i.sr,i.wd,i.j9],styles:["ion-title[_ngcontent-%COMP%]{font-weight:700}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:2.5rem;width:2.5rem;border-radius:50%;position:relative;box-shadow:0 5px 10px #0000001a}ion-searchbar[_ngcontent-%COMP%]{--background: #ffffff;--box-shadow: 0px 10px 20px rgba(0, 0, 0, .08);--border-radius: 15px}.discover[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block;color:var(--base-step-2);font-weight:500;padding-left:5px;margin-top:10px}.discover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:145px;border-radius:15px;box-shadow:0 10px 20px #00000014}.discover[_ngcontent-%COMP%]   .discover-list[_ngcontent-%COMP%]{width:100%;display:flex;overflow:auto;gap:15px}.discover[_ngcontent-%COMP%]   .discover-card[_ngcontent-%COMP%]{height:170px;flex:0 0 142px}"]}),o})()}];let _=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(P),c.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,p.u5,i.Pc,_]}),o})()}}]);