import Component from '@glimmer/component';
import AppCore from 'result-app-core';

export default class PrintSharedModuleComponent extends Component {
  appCore = new AppCore('message');

  get message() {
    return this.appCore.getMessage();
  }
}
