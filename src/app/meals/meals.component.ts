import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FriendStatsComponent } from './components/friend-stats.component';
import { FriendsStore } from './services/friends.store';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meals',

  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FriendStatsComponent, RouterOutlet],
  template: `
    <p>Meals With Friends!</p>
    <app-friend-stats [numberOfFriends]="store.numberOfFriends()" />

    <router-outlet />
  `,
  styles: ``,
})
export class MealsComponent {
  store = inject(FriendsStore);
}
