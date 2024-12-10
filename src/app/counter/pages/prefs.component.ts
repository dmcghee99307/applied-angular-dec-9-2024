import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { ByValues, CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="join">
      @for (val of vals; track val) {
        <button
          (click)="store.changeCountBy(val)"
          [disabled]="store.by() === val"
          class="btn join-item"
        >
          Count By {{ val }}
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
  vals = this.store.byValues();
}
