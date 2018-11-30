import { AuthService } from './auth-service';

describe('AuthService', () => {
    // Setup the tests specs
    let service: AuthService;

    beforeEach(() => {
        service = new AuthService();
    });

    afterEach(() => {
        service = null;
        localStorage.removeItem('token');
    });

    //Create the test specs
    it('should return true from isAuthenficated when there is a token', () => {
        localStorage.setItem('token', '1234');
        expect(service.isAuthenticated()).toBeTruthy();
    });
    //or
    it('should return false from isAuthenficated when there is no token', () => {
        expect(service.isAuthenticated()).toBeFalsy();
    });
    
});