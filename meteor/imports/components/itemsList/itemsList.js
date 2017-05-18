import angular from 'angular'
import angularMeteor from 'angular-meteor'
import { Items } from '../../api/items.js'

import template from './itemsList.html'

class ItemsListCtrl {
    constructor ($scope) {
        $scope.viewModel(this)
        this.helpers({
            items() {
                return Items.find({})
            }
        })
    }

    //// Inserts a new item into the collection.
    addItem(newItem) {
        Items.insert({
            text:      newItem,
            createdAt: new Date
        })
        this.newItem = '' // clear the form
    }

}

export default angular.module('itemsList', [
        angularMeteor
    ]).component('itemsList', {
        templateUrl: 'imports/components/itemsList/itemsList.html',
        controller:  [ '$scope', ItemsListCtrl ]
    }
)
