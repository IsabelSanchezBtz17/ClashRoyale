import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardResolver } from 'src/app/services/resolvers/card.resolver';
import { CardComponent } from './pages/card/card.component';
import { ClanComponent } from './pages/clan/clan.component';
import { TournamentComponent } from './pages/tournament/tournament.component';


const routes: Routes =[
  {
    path:'',
    children: [
      {
        path: 'card',
        component: CardComponent,
        resolve:{
          data: CardResolver
        }
      },
      {
        path: 'clan',
        component: ClanComponent
      },
      {
        path: 'tournament',
        component: TournamentComponent
      },

      {
        path: '',
        component: CardComponent,
        pathMatch: 'full'
      },
      
      {
        path: '**',
        redirectTo: 'card'
      }

    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClashRoyaleRoutingModule { }
