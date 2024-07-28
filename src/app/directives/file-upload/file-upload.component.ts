import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  files: any[] = [];
  files$: Observable<any>[] = [];

  constructor(
    private http: HttpClient
  ) { }

  // Handle file drop
  onFileDropped(files: FileList) {
    this.handleFiles(files);
  }

  // Handle file selection
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    debugger
    this.handleFiles(files);
  }

  // Handle the files
  handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.files.push(file);
    }
  }

  // Optional: Upload files to server
  uploadFiles() {
    const formData = new FormData();
    for (let file of this.files) {
      formData.append('files', file, file.name);
    }

    // Implement your file upload logic here, e.g., using HttpClient
    this.http.post('http://localhost:3000/upload', formData).subscribe(res => {
      console.log(res);
    });
  }

  getFiles() {
    const formData = new FormData();
    for (let file of this.files) {
      formData.append('files', file, file.name);
    }

    // Implement your file upload logic here, e.g., using HttpClient
    this.http.post('http://localhost:3000/upload', formData).subscribe(res => {
      console.log(res);
    });
  }

}
