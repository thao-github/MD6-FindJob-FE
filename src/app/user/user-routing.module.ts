import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostDetailsComponent} from "./post-details/post-details.component";
import {FindAllJobComponent} from "./find-all-job/find-all-job.component";


const routes: Routes = [
  {path: 'post-detail/:id', component: PostDetailsComponent},
  {path: 'post-list', component: FindAllJobComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
