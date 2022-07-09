import AppCore from 'result-app-core';

export default class AppCoreDb extends AppCore {
  getMessage(): string {
    return `${this.message} walker`;
  }
}
