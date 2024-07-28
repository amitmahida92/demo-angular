import { NgModule } from '@angular/core';
import { FileUploadDirective } from './file-upload.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  imports: [

  ],
  declarations: [
    FileUploadDirective,
    FileUploadComponent
  ],
  exports: [
    FileUploadDirective,
    FileUploadComponent
  ]
})
export class CommonDirectivesModule { }
