/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadComponent } from './file-upload.component';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should handle file drop', () => {
    const files: FileList = {} as FileList;
    component.onFileDropped(files);
    expect(component.files.length).toBe(0); // Update the expected value based on your test case
  });

  it('should handle file selection', () => {
    const event: any = { target: { files: {} } };
    component.onFileSelected(event);
    expect(component.files.length).toBe(0); // Update the expected value based on your test case
  });

  it('should handle files', () => {
    const files: FileList = {} as FileList;
    component.handleFiles(files);
    expect(component.files.length).toBe(0); // Update the expected value based on your test case
  });

  it('should upload files to server', () => {
    // Implement your test case for uploadFiles() method
    // Mock the necessary dependencies and test the logic
  });

});

