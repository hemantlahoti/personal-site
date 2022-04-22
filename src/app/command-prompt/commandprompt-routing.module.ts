import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommandPromptComponent } from "./command-prompt.component";

const routes: Routes = [
    { path: '', component: CommandPromptComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommandPromptRoutingModule { }