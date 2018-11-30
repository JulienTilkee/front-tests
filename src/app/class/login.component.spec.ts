// Testing with real AuthService
/*
import {LoginComponent} from './login.component';
import {AuthService} from "./auth-service";

describe('Component: Login', () => {

  let component: LoginComponent;
  let service: AuthService;

  beforeEach(() => { 
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => { 
    localStorage.removeItem('token');
    service = null;
    component = null;
  });


  it('canLogin returns false when the user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    localStorage.setItem('token', '12345'); 
    expect(component.needsLogin()).toBeFalsy();
  });
});
*/

//Testing with fake classes (Mocking)
/*
import { LoginComponent } from './login.component';

class MockAuthService { 
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

///////////////////////////////////////////////
//Mocking by overriding functions
    import {AuthService} from "./auth-service";

    class MockAuthService extends AuthService { 
        authenticated = false;

        isAuthenticated() {
            return this.authenticated;
        }
    }
///////////////////////////////////////////////


describe('Component: Login', () => {

  let component: LoginComponent;
  let service: MockAuthService;

  beforeEach(() => { 
    service = new MockAuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });


  it('canLogin returns false when the user is not authenticated', () => {
    service.authenticated = false; 
    expect(component.needsLogin()).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    service.authenticated = true; 
    expect(component.needsLogin()).toBeFalsy();
  });
});
*/

//Mocking by using a real instance with Spy
import {LoginComponent} from './login.component';
import {AuthService} from "./auth-service";

describe('Component: Login', () => {

  let component: LoginComponent;
  let service: AuthService;
  let spy: any;

  beforeEach(() => { 
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => { 
    service = null;
    component = null;
  });


  it('canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false); 
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled(); 

  });

  it('canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});

/*
//Test using Angular Test Bed
import { LoginComponent } from './login.component';
import { AuthService } from "./auth-service";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component: Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let el: DebugElement;

  //let service: AuthService;
  //let spy: any;

  beforeEach(() => { 
    //service = new AuthService();
    //component = new LoginComponent(service);
    TestBed.configureTestingModule({
        declarations: [ LoginComponent ],
        providers: [ AuthService ]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    el = fixture.debugElement.query(By.css('a'));
  });

  //afterEach(() => { 
  //  service = null;
  //  component = null;
  //});


  it('canLogin returns false when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false); 
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled(); 

  });

  it('canLogin returns false when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('login button hidden when the user is authenticated', () => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });
});


/*
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AuthService} from "./auth-service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let el: DebugElement;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(AuthService);

    //  get the "a" element by CSS selector (e.g., by class name)
    el = fixture.debugElement.query(By.css('a'));
  });

  it('login button hidden when the user is authenticated', () => {
    // To being with Angular has not done any change detection so the content is blank.
    expect(el.nativeElement.textContent.trim()).toBe('');

    // Trigger change detection and this lets the template update to the initial value which is Login since by
    // default we are not authenticated
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');

    // Change the authetication state to true
    spyOn(authService, 'isAuthenticated').and.returnValue(true);

    // The label is still Login! We need changeDetection to run and for angular to update the template.
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    // Which we can trigger via fixture.detectChange()
    fixture.detectChanges();

    // Now the label is Logout
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  });
});
*/