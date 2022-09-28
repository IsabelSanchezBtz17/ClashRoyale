import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { CardComponent } from './pages/card/card.component';
import { ClanComponent } from './pages/clan/clan.component';
import { ClashRoyaleRoutingModule } from './clash-royale-routing.module';


@NgModule({
  declarations: [
    CardComponent,
    ClanComponent,
    TournamentComponent
  ],
  imports: [
    CommonModule,
    ClashRoyaleRoutingModule
  ]
})
export class ClashRoyaleModule { }
