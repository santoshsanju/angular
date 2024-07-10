import { Component, Input, computed, signal } from '@angular/core';

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
  }

  // Input
  @Input({ required: true }) getParentTitle!: string;
}
