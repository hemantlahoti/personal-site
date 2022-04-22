import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageTilesComponent } from "./homepage-tiles.component";

const routes: Routes = [
    { path: '', component: HomepageTilesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepageRoutingModule { }