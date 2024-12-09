import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FriendListComponent } from './components/friend-list.component';
import { Friend } from './types';

@Component({
  selector: 'app-new-stuff',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FriendListComponent],
  template: `
    <p>Meal Trading</p>
    <app-friend-list
      [peopleToList]="friends()"
      (personSelected)="selectedFriend.set($event)"
    />

    @if (selectedFriend() !== undefined) {
      <p>You selected {{ selectedFriend()?.name }}</p>
    }
  `,
  styles: ``,
})
export class NewStuffComponent {
  selectedFriend = signal<Friend | undefined>(undefined);
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
}
