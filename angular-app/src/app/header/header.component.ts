import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonComponent } from "../shared/components/common.component";
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgFor, NgIf, FormsModule, CommonComponent, DatePipe ],
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

    // Output Not a Signal
    this.signalChildTitle.emit('Child App');
  }

  // Input
  @Input({ required: true }) getParentTitle!: string;

  // Input Signal
  signalGetParentTitle = input.required<string>();

  // Output
  @Output() childTitle = new EventEmitter();

  // Output Not a Signal
  signalChildTitle = output<string>();

  // Control flow
  items = [ "Hi", "Hello", "How are you?" ];

  // Form Submit
  onSubmit() {
    this.title = "changed to new";
  }

  // Pipe
  todaysDate = new Date();

  // Service
  constructor(private commonService: CommonService) {
    this.title = this.commonService.serviceTitle;
  }
}
