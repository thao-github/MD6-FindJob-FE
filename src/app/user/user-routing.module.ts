import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostDetailsComponent} from "./post-details/post-details.component";
import {FindAllJobComponent} from "./find-all-job/find-all-job.component";
import {UserDetailComponent} from "./user-details/userdetail.component";
import {UserHomeComponent} from "./userHome/home.component";
import {UserEditComponent} from "./user-edit/user-edit.component";


const routes: Routes = [
  {path: 'post-detail/:id', component: PostDetailsComponent},
  {path: 'post-list', component: FindAllJobComponent},
  {path: 'user-detail/:id', component: UserDetailComponent},
  {path: 'userHome', component: UserHomeComponent},
  {path: 'user-edit/:id', component: UserEditComponent},
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
