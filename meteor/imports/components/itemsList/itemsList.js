import angular from 'angular'
import angularMeteor from 'angular-meteor'
import { Items } from '../../api/items.js'

import template from './itemsList.html'

class ItemsListCtrl {
    constructor ($scope) {
        $scope.viewModel(this)
        this.helpers({
            items() {
                return Items.find({}, {
                    sort: { createdAt: -1 } // newest first
                })
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

    //// Removes an item from the collection.
    removeItem(item) {
        Items.remove(item._id)
    }

    //// Set the `checked` property to the opposite of its current value.
    setChecked(item) {
        Items.update(item._id, {
            $set: {
                checked: ! item.checked
            }
        })
    }

}

export default angular.module('itemsList', [
        angularMeteor
    ]).component('itemsList', {
        templateUrl: 'imports/components/itemsList/itemsList.html',
        controller:  [ '$scope', ItemsListCtrl ]
    }
)
