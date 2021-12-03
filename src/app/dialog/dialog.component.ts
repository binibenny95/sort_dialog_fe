import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  public title = null ;
  public body = null ;

  constructor(private ngbModal :NgbModal, public modal :NgbActiveModal) {  }

  ngOnInit(): void {
  }
  
  setDialogProp(props:any){
  this.title = props.title || 'no title',
  this.body = props.body || 'no body'
  }
}
