import { Component, EventEmitter, Input, Output, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title = "My First App";

  // Signals
  signalTitle = signal("My First App");

  get extraTitle() {
    return this.title + " Angular Basics";
  }

  // Computed
  signalGetTitle = computed(() => this.signalTitle() + " Angular Basics");

  changeTitle() {
    this.title = "~~Angular~~";

    // Set
    this.signalTitle.set("~~Angular~~");

    // Output
    this.childTitle.emit('Child App');
  }

  // Input
  @Input({ required: true }) getParentTitle!: string;

  // Input Signal
  signalGetParentTitle = input.required<string>();

  // Output
  @Output() childTitle = new EventEmitter();
}
