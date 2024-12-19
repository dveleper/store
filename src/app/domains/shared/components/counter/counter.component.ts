import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';

  constructor() {
    // NO ASYNC
    console.log('constructor');
    console.log('-'.repeat(10));
  }


  ngOnChanges(changes: SimpleChanges) {
    // antes y despues del render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if(duration) {
      this.doSomeThing();
    }
  }

  ngOnInit() {
    // despues de renderizar el componente y se ejecuta una sola vez
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }

  ngAfterViewInit() {
    // despues del ngOnInit
    // verificxa si los hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomeThing() {
    console.log('change duration');
  }
}
