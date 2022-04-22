import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LetsConnectComponent } from "./lets-connect.component";

const routes: Routes = [
    { path: '', component: LetsConnectComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LetsconnectRoutingModule { }