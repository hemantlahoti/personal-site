"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[854],{8854:function(h,l,a){a.r(l),a.d(l,{CommandpromptModule:function(){return C}});var c=a(3144),r=a(5671),p=a(9808),d=a(1158),n=a(9115),u=[{path:"",component:function(){var t=function(){function m(e,o){(0,r.Z)(this,m),this.renderer=e,this.router=o,this.timeout=null,this.isCmdMax=!1,this.isMaxClicked=!1}return(0,c.Z)(m,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){var o=this,i=document.getElementById("cursorIcon");i&&setTimeout(function(){i.style.display="none",o.ShowCmdBody()},3100),this.timeout=setTimeout(function(){o.isMaxClicked=!1,o.removeClickEventListener=o.renderer.listen(document,"click",function(s){o.handleAnchorClick(s)}),o.removePressEventListener=o.renderer.listen(document,"keypress",function(s){o.handleAnchorClick(s)})},23e3)}},{key:"ngOnDestroy",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"handleAnchorClick",value:function(o){this.isMaxClicked||(this.router.navigate(["/homepage"]),this.removeClickEventListener(),this.removePressEventListener()),this.isMaxClicked=!1}},{key:"ShowCmdBody",value:function(){setTimeout(function(){var o=document.getElementById("cmdBody");o&&(o.style.display="inline-block")},1e3)}},{key:"changeView",value:function(){this.router.navigate(["/homepage"])}},{key:"maximizeView",value:function(){this.isMaxClicked=!0;var o=document.getElementById("commandPromptDiv"),i=document.getElementById("maxBtn");this.isCmdMax?(o&&(o.classList.remove("maximizeCmd"),o.classList.add("minimizeCmd")),i&&(i.classList.add("maxgb"),i.classList.remove("minbg"))):(o&&(o.classList.remove("minimizeCmd"),o.classList.add("maximizeCmd")),i&&(i.classList.add("minbg"),i.classList.remove("maxgb"))),this.isCmdMax=!this.isCmdMax}}]),m}();return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.Qsj),n.Y36(d.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-command-prompt"]],decls:36,vars:8,consts:[["id","commandPromptDiv",1,"commandPromptDiv"],[1,"headerDiv"],[1,"cmdIcon"],[1,"cmdLabel"],["id","cursorIcon",1,"cursorIcon"],[1,"cmdButtons"],[1,"minimizeIcon",3,"click"],["id","maxBtn",1,"maximizeIcon","maxbg",3,"click"],[1,"closeIcon",3,"click"],["id","cmdBody",1,"cmdBody"],[1,"cmdContainer"],["id","fixedText"],["id","cmdLocationText"],["id","lineone"],["id","cmdLocationText1"],["id","linetwo"],["id","cmdLocationText2"],["id","linetwotwo"],["id","cmdLocationText3"],["id","linethree"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"span",2),n.TgZ(3,"span",3),n._uU(4,"Command Prompt"),n.qZA(),n._UZ(5,"span",4),n.TgZ(6,"div",5)(7,"button",6),n.NdJ("click",function(){return o.changeView()}),n.qZA(),n.TgZ(8,"button",7),n.NdJ("click",function(){return o.maximizeView()}),n.qZA(),n.TgZ(9,"button",8),n.NdJ("click",function(){return o.changeView()}),n.qZA()()(),n.TgZ(10,"div",9)(11,"div",10)(12,"p",11),n._uU(13,"Not Windows [Version 15.42.04242.333] "),n._UZ(14,"br"),n._uU(15," (cc) Unknown Corporation. All rights reserved (not). "),n.qZA(),n._UZ(16,"br"),n.TgZ(17,"p",12),n._uU(18,"H:\\hemantlahoti.github.io\\mywebpage>\xa0"),n.qZA(),n.TgZ(19,"p",13),n._uU(20,"Welcome to my page!"),n.qZA(),n._UZ(21,"br"),n.TgZ(22,"p",14),n._uU(23,"H:\\hemantlahoti.github.io\\mywebpage>\xa0"),n.qZA(),n.TgZ(24,"p",15),n._uU(25,"My name is Hemant Lahoti. I am a full stack developer and the creator of"),n.qZA(),n._UZ(26,"br"),n.TgZ(27,"p",16),n._uU(28,"H:\\hemantlahoti.github.io\\mywebpage>\xa0"),n.qZA(),n.TgZ(29,"p",17),n._uU(30,"this website."),n.qZA(),n._UZ(31,"br"),n.TgZ(32,"p",18),n._uU(33,"H:\\hemantlahoti.github.io\\mywebpage>\xa0"),n.qZA(),n.TgZ(34,"p",19),n._uU(35,"To know more about me and my experiences, press any key to continue..."),n.qZA()()()()),2&e&&(n.xp6(2),n.Udp("background-image","url(./assets/images/icons8-command-line-48.png)"),n.xp6(3),n.Udp("background-image","url(./assets/images/icons8-cursor-48.png)"),n.xp6(2),n.Udp("background-image","url(./assets/images/cmd_close_icon.png)"),n.xp6(2),n.Udp("background-image","url(./assets/images/cmd_close_icon.png)"))},styles:['.commandPromptDiv[_ngcontent-%COMP%]{margin:0 -50% 0 0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border:2px solid;width:50%;height:55%;box-shadow:1px 1px 1px #fff;border-color:#000;border-radius:5px;background-color:#000;animation:slideIn ease 3s}.commandPromptDiv[_ngcontent-%COMP%]   .headerDiv[_ngcontent-%COMP%]{border-bottom:1px solid;border-color:#fff;margin:0%;border-radius:5px;background-color:#fff;color:#000;font-size:small;padding:.2rem}.commandPromptDiv[_ngcontent-%COMP%]   .cmdIcon[_ngcontent-%COMP%]{height:20px;width:20px;display:inline-block}.commandPromptDiv[_ngcontent-%COMP%]   .cursorIcon[_ngcontent-%COMP%]{height:20px;width:20px;margin-left:40%;animation:cursorSlideIn ease 3s;display:inline-block}.commandPromptDiv[_ngcontent-%COMP%]   .cmdButtons[_ngcontent-%COMP%]{float:right}.commandPromptDiv[_ngcontent-%COMP%]   .minimizeIcon[_ngcontent-%COMP%]{width:40px;height:21px;border:none;background-image:url(cmd_close_icon.c3f56cee214b8354.png);background-position:left}.commandPromptDiv[_ngcontent-%COMP%]   .maximizeIcon[_ngcontent-%COMP%]{width:40px;height:21px;border:none;background-position:center;background-size:cover}.commandPromptDiv[_ngcontent-%COMP%]   .maxbg[_ngcontent-%COMP%]{background-image:url(cmd_close_icon.c3f56cee214b8354.png)}.commandPromptDiv[_ngcontent-%COMP%]   .minbg[_ngcontent-%COMP%]{background-image:url(cmd_close_icon_maximise.8ab0bf476c024a55.png)}.commandPromptDiv[_ngcontent-%COMP%]   .closeIcon[_ngcontent-%COMP%]{width:40px;height:21px;border:none;background-image:url(cmd_close_icon.c3f56cee214b8354.png);background-position:right}.commandPromptDiv[_ngcontent-%COMP%]   .closeIcon[_ngcontent-%COMP%]:focus{outline:none}.commandPromptDiv[_ngcontent-%COMP%]   .cmdLabel[_ngcontent-%COMP%]{vertical-align:top;margin-left:1%;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]{font-family:monospace;width:100%;height:94%;overflow-y:auto}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:74%;white-space:nowrap;overflow:hidden;margin-bottom:0}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]   #cmdLocationText[_ngcontent-%COMP%]{display:inline-block}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]   #lineone[_ngcontent-%COMP%]{width:10rem;opacity:0;animation:type 2s steps(20,end);animation-fill-mode:forwards;animation-delay:4s;display:inline-block}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]   #cmdLocationText1[_ngcontent-%COMP%]{opacity:0;animation:show;animation-delay:6s;animation-fill-mode:forwards;display:inline-block}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]   #linetwo[_ngcontent-%COMP%]{width:30rem;opacity:0;animation:type 7s steps(60,end);animation-delay:6s;animation-fill-mode:forwards;display:inline-block}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]   #cmdLocationText2[_ngcontent-%COMP%]{opacity:0;animation:show;animation-delay:13s;animation-fill-mode:forwards;display:inline-block}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]   #linetwotwo[_ngcontent-%COMP%]{width:10rem;opacity:0;animation:type 2s steps(20,end);animation-delay:13s;animation-fill-mode:forwards;display:inline-block}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]   #cmdLocationText3[_ngcontent-%COMP%]{opacity:0;animation:show;animation-delay:15s;animation-fill-mode:forwards;display:inline-block}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]   #linethree[_ngcontent-%COMP%]{width:34rem;opacity:0;animation:type 10s steps(80,end);animation-delay:15s;animation-fill-mode:forwards;display:inline-block}.commandPromptDiv[_ngcontent-%COMP%]   .cmdBody[_ngcontent-%COMP%]   .cmdContainer[_ngcontent-%COMP%]{width:100%;height:200%}@keyframes show{0%{opacity:0}to{opacity:1}}@keyframes type{0%{width:0}1%{opacity:1}to{opacity:1}}@keyframes blink{0%,to{color:transparent}50%{color:#fff}}@keyframes slideIn{0%{transform:translate(-50%,150%)}40%{transform:translate(-50%,60%)}60%{transform:translate(-50%,20%)}80%{transform:translate(-50%,-45%)}to{transform:translate(-50%,-50%)}}button[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:hover{box-shadow:inset 0 0 2px gray;border-radius:2px}.maximizeCmd[_ngcontent-%COMP%]{animation:maximize 1s;animation-fill-mode:forwards}@keyframes maximize{0%{transform:translate(-50%,-50%)}to{transform:translate(0);width:100%;height:100%;top:0;left:0;margin-right:0%}}.minimizeCmd[_ngcontent-%COMP%]{animation:minimize 1s;animation-fill-mode:forwards}@keyframes minimize{0%{transform:translate(0);width:100%;height:100%;top:0;left:0;margin-right:0%}to{transform:translate(-50%,-50%);width:50%;height:55%;top:50%;left:50%;margin-right:-50%}}']}),t}()}],f=function(){var t=(0,c.Z)(function m(){(0,r.Z)(this,m)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.Bz.forChild(u)],d.Bz]}),t}(),C=function(){var t=(0,c.Z)(function m(){(0,r.Z)(this,m)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[p.ez,f]]}),t}()}}]);