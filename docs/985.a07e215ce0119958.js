"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[985],{5985:(C,s,a)=>{a.r(s),a.d(s,{AuthModule:()=>y});var g=a(6814),l=a(3403),t=a(5879);let f=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3",2,"background-color","rgb(208, 214, 212)"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[l.lC],encapsulation:2}),n})();var h=a(4567),i=a(2296),u=a(5195),m=a(9157),p=a(617),d=a(2032);const Z=[{path:"",component:f,children:[{path:"login",component:(()=>{var e;class n{constructor(o,c){this.authService=o,this.router=c}onLogin(){this.authService.login("jhonatan@demo.com","123456").subscribe({next:o=>{this.router.navigate(["/"])}})}}return(e=n).\u0275fac=function(o){return new(o||e)(t.Y36(h.e),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-page"]],decls:21,vars:0,consts:[[1,"text-lg","mb-4"],[1,"mb-4"],[1,"flex","flex-column"],["type","text","matInput","","placeholder","Usuario"],["type","password","matInput","","placeholder","Contrase\xf1a"],["mat-button","","mat-flat-button","","color","primary",3,"click"],[1,"flex","justify-content-end","mx-3"],["routerLink","/auth/new-account"]],template:function(o,c){1&o&&(t.TgZ(0,"mat-card")(1,"mat-card-header",0),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"mat-card-content",1)(4,"div",2)(5,"mat-form-field")(6,"mat-label"),t._uU(7,"Usuario"),t.qZA(),t._UZ(8,"input",3),t.qZA(),t.TgZ(9,"mat-form-field")(10,"mat-label"),t._uU(11,"Contrase\xf1a"),t.qZA(),t._UZ(12,"input",4),t.qZA(),t.TgZ(13,"button",5),t.NdJ("click",function(){return c.onLogin()}),t.TgZ(14,"mat-icon"),t._uU(15,"lock_open_right"),t.qZA(),t._uU(16,"Ingresar "),t.qZA()()(),t.TgZ(17,"mat-card-footer",1)(18,"div",6)(19,"a",7),t._uU(20,"\xbfNo tienes cuenta?"),t.qZA()()()())},dependencies:[l.rH,i.lW,u.a8,u.dn,u.rt,u.dk,m.KE,m.hX,p.Hw,d.Nt],encapsulation:2}),n})()},{path:"new-account",component:(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register-page"]],decls:25,vars:0,consts:[[1,"text-lg","mb-4"],[1,"mb-4"],[1,"flex","flex-column"],["type","text","matInput","","placeholder","Nombre"],["type","text","matInput","","placeholder","Usuario"],["type","password","matInput","","placeholder","Contrase\xf1a"],["mat-button","","mat-flat-button","","color","primary"],[1,"flex","justify-content-end","mx-3"],["routerLink","/auth"]],template:function(o,c){1&o&&(t.TgZ(0,"mat-card")(1,"mat-card-header",0),t._uU(2,"Registrarse"),t.qZA(),t.TgZ(3,"mat-card-content",1)(4,"div",2)(5,"mat-form-field")(6,"mat-label"),t._uU(7,"Nombre"),t.qZA(),t._UZ(8,"input",3),t.qZA(),t.TgZ(9,"mat-form-field")(10,"mat-label"),t._uU(11,"Usuario"),t.qZA(),t._UZ(12,"input",4),t.qZA(),t.TgZ(13,"mat-form-field")(14,"mat-label"),t._uU(15,"Contrase\xf1a"),t.qZA(),t._UZ(16,"input",5),t.qZA(),t.TgZ(17,"button",6)(18,"mat-icon"),t._uU(19,"save"),t.qZA(),t._uU(20,"Crear cuenta "),t.qZA()()(),t.TgZ(21,"mat-card-footer",1)(22,"div",7)(23,"a",8),t._uU(24,"\xbfYa tienes cuenta?"),t.qZA()()()())},dependencies:[l.rH,i.lW,u.a8,u.dn,u.rt,u.dk,m.KE,m.hX,p.Hw,d.Nt],encapsulation:2}),n})()},{path:"**",redirectTo:"login"}]}];let A=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(Z),l.Bz]}),n})();var v=a(6889);let y=(()=>{var e;class n{}return(e=n).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,A,v.q]}),n})()}}]);