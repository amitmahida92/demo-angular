import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFileUpload]'
})
export class FileUploadDirective {

  @Output() fileDropped = new EventEmitter<any>();

  @HostBinding('style.background') private background = '#f5fcff';
  @HostBinding('style.border') private border = '2px dashed #3f51b5';

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.border = '2px solid #3f51b5';
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.border = '2px dashed #3f51b5';
  }

  // Drop listener
  @HostListener('drop', ['$event']) public onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.border = '2px dashed #3f51b5';
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
