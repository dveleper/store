import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!: Product;

  @Output() addToCar = new EventEmitter();

  addToCarHandler() {
    console.log('click desde el hijo : ' + this.product.title);
    this.addToCar.emit('hola soy el padre y este es un mensaje lo acabo de recibir desde el hijo : ' + this.product.title);
  }
}
