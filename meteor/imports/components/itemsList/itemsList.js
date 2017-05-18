import angular from 'angular'
import angularMeteor from 'angular-meteor'
import { Meteor } from 'meteor/meteor'
import { Items } from '../../api/items.js'

import template from './itemsList.html'

class ItemsListCtrl {
    constructor ($scope) {
        $scope.viewModel(this)

        this.hideLocked = false

        this.helpers({

            items() {
                const selector = {}

                // If ‘Hide 77 Locked’ is checked, filter tasks.
                if (this.getReactively('hideLocked')) {
                    selector.locked = {
                        $ne: true
                    }
                }

                return Items.find(selector, {
                    sort: { createdAt: -1 } // newest first
                })
            },

            lockedCount() {
                return Items.find({
                    locked: {
                        $eq: true
                    }
                }).count()
            },

            currentUser() {
                return Meteor.user()
            }

        })
    }

    //// Inserts a new item into the collection.
    addItem(newItem) {
        Items.insert({
            text: newItem,
            createdAt: new Date,
            owner: Meteor.userId(),
            username: Meteor.user().username
        })
        this.newItem = '' // clear the form
    }

    //// Removes an item from the collection.
    removeItem(item) {
        Items.remove(item._id)
    }

    //// Set the `locked` property to the opposite of its current value.
    toggleLocked(item) {
        Items.update(item._id, {
            $set: {
                locked: ! item.locked
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
