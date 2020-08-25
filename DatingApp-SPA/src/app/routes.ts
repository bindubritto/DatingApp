import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesResolver } from './_resolvers/messages.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            {path: 'member/edit', component: MemberEditComponent,
                resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            {path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
            {path: 'lists', component: ListsComponent, resolve: {users: ListsResolver}},
        ]
    },

    {path: '**', redirectTo: '', pathMatch: 'full'},
];
