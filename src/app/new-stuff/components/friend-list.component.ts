import { ChangeDetectionStrategy, Component } from '@angular/core';

type Friend = { id: string; name: string };
@Component({
  selector: 'app-friend-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul>
      @for (friend of friends; track friend.id) {
        <li>
          <button (click)="changeIt(friend)">{{ friend.name }}</button>
        </li>
      } @empty {
        <p>Sorry, no friends! So Sad!</p>
      }
    </ul>
  `,
  styles: ``,
})
export class FriendListComponent {
  // all data must be a signal or,, if you really must, an observable.
  friends: Friend[] = [
    {
      id: '1',
      name: 'Jill Jones',
    },
    {
      id: '2',
      name: 'Steve Smith',
    },
  ];

  changeIt(friend: Friend) {
    friend.name = friend.name.toUpperCase();
  }
}
