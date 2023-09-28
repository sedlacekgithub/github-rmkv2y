import { Component } from '@angular/core';

@Component({
  selector: 'dogs-container',
  standalone: true, // component is self-contained
  // the component's markup
  template: ``,
})
export class DogsContainerComponent {
  dogs = [];

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
    this.dogs = [
      'Golden Retrievers',
      'Boston Terriers',
      'Labrador Retrievers',
      'Poodles',
      'Border Collie',
      'Beagle',
      'Irish Setter',
      'Staffordshire Bull Terrier',
      'Cavalier King Charles Spaniel',
      'Cockapoo',
      'Boxer',
      'Shih Tzu',
      'French Bulldog',
      'Basset Hound',
      'Cocker Spaniel',
      'Greyhound',
    ];
  }
}
