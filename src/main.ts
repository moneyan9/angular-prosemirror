import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { EditorComponent } from './editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-editor />`,
  imports: [EditorComponent],
})
export class App {}

bootstrapApplication(App);
