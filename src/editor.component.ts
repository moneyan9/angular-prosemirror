import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { baseKeymap } from 'prosemirror-commands';
import { keymap } from 'prosemirror-keymap';
import { Schema } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

@Component({
  selector: 'app-editor',
  standalone: true,
  template: `
    <div #editor style="border: solid 1px silver"></div>
    <h2>editorView.state.doc</h2>
    {{ editorView?.state?.doc }}
    <h2>editorView.dom.innerHTML</h2>
    {{ editorView?.dom?.innerHTML }}
  `,
})
export class EditorComponent implements AfterViewInit {
  private readonly editor =
    viewChild.required<ElementRef<HTMLDivElement>>('editor');

  editorView?: EditorView;

  ngAfterViewInit() {
    const mySchema = new Schema({
      nodes: schema.spec.nodes,
      marks: schema.spec.marks,
    });
    this.editorView = new EditorView(this.editor().nativeElement, {
      state: EditorState.create({
        schema: mySchema,
        plugins: [keymap(baseKeymap)],
      }),
    });
  }
}
