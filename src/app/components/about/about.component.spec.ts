import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // testbed allows to create an angular environment for the component being tested
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // template hardcoded text testing
  it(`should have a text 'about works'`, async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('about works!');
  }));

  // component variable text testing
  it(`Should have a text 'this is about section'`, async(() => {
    expect(component.heading).toEqual('this is about section');
  }));

  // component variable number testing
  it(`Should have a number 100`, async(() => {
    expect(component.value).toEqual(100);
  }));

  // boolean value testing
  it('Should have false value', async(() => {
    expect(component.toggleValue).toEqual(false);
  }))

  // component rendered text testing
  it(`Should have a rendered text 'Hello, this is about section'`, async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('hello, this is about section');
  }));
});
