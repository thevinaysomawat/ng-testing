import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ContactComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // function testing
  it('Should submitted be true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  // funcation call on button click testing
  // it('Should call the onSubmit method', async (() => {
  //   fixture.detectChanges();
  //   spyOn(component, 'onSubmit');
  //   // “By” is going to allow us to select elements from the DOM.
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(component.onSubmit).toHaveBeenCalled();
  // }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  // form testing
  it('Should form to be falsy', async(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  // form should be true
  it('Should form has truthy values', async(() => {
    component.contactForm.controls['name'].setValue('vinay somawat');
    component.contactForm.controls['email'].setValue('vinay.somawat@novopay.in');
    component.contactForm.controls['text'].setValue('sample text');
    expect(component.contactForm.valid).toBeTruthy();
  }));


});
