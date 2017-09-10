import { Component, ViewContainerRef } from '@angular/core';
import {Overlay, overlayConfigFactory} from 'ngx-modialog';
import {BSModalContext, Modal} from 'ngx-modialog/plugins/bootstrap';
import {modalConfigDefaults} from "ngx-bootstrap/modal/modal-options.class";
import {ModalTestComponent} from "./modal/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checked;
  constructor(public modal: Modal) { }
  onClick() {
    //   const dialogRef = this.modal.alert()
    //   .size('lg')
    //   .showClose(true)
    //   .title('A simple Alert style modal window')
    //   .body(`
    //             <h4>Alert is a classic (title/body/footer) 1 button modal window that
    //             does not block.</h4>
    //             <b>Configuration:</b>
    //             <ul>
    //                 <li>Non blocking (click anywhere outside to dismiss)</li>
    //                 <li>Size large</li>
    //                 <li>Dismissed with default keyboard key (ESC)</li>
    //                 <li>Close wth button click</li>
    //                 <li>HTML content</li>
    //             </ul>`)
    //   .open();
    //
    // dialogRef
    //   .then( dialogRef => {
    //     dialogRef.result.then( result => alert(`The result is: ${result}`));
    //   });
    return this.modal.open(ModalTestComponent, overlayConfigFactory({}, BSModalContext));
  }

}
