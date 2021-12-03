import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private ngbModal: NgbModal) { }
  
  openDialog(props:any):Promise<any>
  {
    var modelRef = this.ngbModal.open(DialogComponent, {size:'md' , backdrop:'static'});
    modelRef.componentInstance.setDialogProp(props);
    return modelRef.result;
  }
}
