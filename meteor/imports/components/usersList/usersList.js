import angular from 'angular'
import angularMeteor from 'angular-meteor'
import template from './usersList.html'

class UsersListCtrl {
    constructor() {
        this.users = [{
            text: 'This is user 1'
        }, {
            text: 'This is user 2'
        }, {
            text: 'This is user 3'
        }];
    }
}

export default angular.module('usersList', [
    angularMeteor
])
    .component('usersList', {
        templateUrl: 'imports/components/usersList/usersList.html',
        controller:  UsersListCtrl
    })
