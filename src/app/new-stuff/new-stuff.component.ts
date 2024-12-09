import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { FriendListComponent } from './components/friend-list.component';
import { Friend } from './types';
import { FriendStatsComponent } from './components/friend-stats.component';
import { FriendCreateComponent } from './components/friend-create.component';

@Component({
  selector: 'app-new-stuff',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FriendListComponent, FriendStatsComponent, FriendCreateComponent],
  template: `
    <p>Meal Trading</p>
    <app-friend-stats [numberOfFriends]="numberOfFriends()" />
    <app-friend-list
      [peopleToList]="friends()"
      (personSelected)="selectedFriend.set($event)"
    />

    @if (selectedFriend() !== undefined) {
      <p>You selected {{ selectedFriend()?.name }}</p>
      <button class="btn btn-danger" (click)="unfriend()">
        Unfriend This Person?
      </button>
    }

    <app-friend-create (personAdded)="addFriend($event)" />
  `,
  styles: ``,
})
export class NewStuffComponent {
  selectedFriend = signal<Friend | undefined>(undefined);

  numberOfFriends = computed(() => this.friends().length);
  friends = signal<Friend[]>([
    {
      id: '1',
      name: 'Jill Jones',
    },
    {
      id: '2',
      name: 'Steve Smith',
    },
  ]);

  addFriend(name: string) {
    const friendToAdd: Friend = {
      name,
      id: crypto.randomUUID(),
    };
    this.friends.set([friendToAdd, ...this.friends()]);
  }
  unfriend() {
    if (this.selectedFriend()) {
      this.friends.update((f) =>
        f.filter((f) => f.id !== this.selectedFriend()?.id),
      );
      this.selectedFriend.set(undefined);
    }
  }
}
