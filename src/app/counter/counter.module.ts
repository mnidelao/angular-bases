import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  imports: [FormsModule],
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
