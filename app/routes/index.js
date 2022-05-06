import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('https://api.github.com/users/tomdale');
    const userData = await response.json();
    return userData;
  }
}
