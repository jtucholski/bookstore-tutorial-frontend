import JwtDecode from 'jwt-decode';

export default class User {
  static from(token) {
    try {
      const obj = JwtDecode(token);
      return new User(obj);
    } catch (_) {
      return null;
    }
  }

  // eslint-disable-next-line camelcase
  constructor({ user_id, admin, email }) {
    this.id = user_id; // eslint-disable-line camelcase
    this.admin = admin;
    this.email = email;
  }

  get isAdmin() {
    return this.admin;
  }
}
