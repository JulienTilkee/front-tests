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