export class AuthService {
    isAuthentificated(): boolean {
        return !!localStorage.getItem('token');
    }
}
