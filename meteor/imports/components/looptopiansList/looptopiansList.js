import angular from 'angular'
import angularMeteor from 'angular-meteor'
import template from './looptopiansList.html'

class LooptopiansListCtrl {
    constructor() {
        this.looptopians = [{
            text: 'This is looptopian 1'
        }, {
            text: 'This is looptopian 2'
        }, {
            text: 'This is looptopian 3'
        }];
    }
}

export default angular.module('looptopiansList', [
    angularMeteor
])
    .component('looptopiansList', {
        templateUrl: 'imports/components/looptopiansList/looptopiansList.html',
        controller:  LooptopiansListCtrl
    })
