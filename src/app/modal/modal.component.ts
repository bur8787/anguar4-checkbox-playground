import { Component, OnInit } from '@angular/core';
import {BSModalContext} from "ngx-modialog/plugins/bootstrap";
import {DialogRef, ModalComponent} from "ngx-modialog";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalTestComponent implements OnInit, ModalComponent<BSModalContext>{
  message = "modal表示";
  public checked;
  context;
  constructor(public dialog: DialogRef<BSModalContext>) {
    this.context = dialog.context;
  }

  ngOnInit() {
  }

  onClick(){
    console.log(this.checked)
  }

}
