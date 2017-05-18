import angular from 'angular'
import angularMeteor from 'angular-meteor'
import { Looptopians } from '../../api/looptopians.js'

import template from './looptopiansList.html'

class LooptopiansListCtrl {
    constructor ($scope) {
        $scope.viewModel(this)
        this.helpers({
            looptopians() {
                return Looptopians.find({})
            }
        })
    }
}

export default angular.module('looptopiansList', [
    angularMeteor
])
    .component('looptopiansList', {
        templateUrl: 'imports/components/looptopiansList/looptopiansList.html',
        controller:  [ '$scope', LooptopiansListCtrl ]
    })
