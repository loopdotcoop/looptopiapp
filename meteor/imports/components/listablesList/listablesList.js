import angular from 'angular'
import angularMeteor from 'angular-meteor'
import { Listables } from '../../api/listables.js'

import template from './listablesList.html'

class ListablesListCtrl {
    constructor ($scope) {
        $scope.viewModel(this)
        this.helpers({
            listables() {
                return Listables.find({})
            }
        })
    }
}

export default angular.module('listablesList', [
    angularMeteor
])
    .component('listablesList', {
        templateUrl: 'imports/components/listablesList/listablesList.html',
        controller:  [ '$scope', ListablesListCtrl ]
    })
