import angular from 'angular'
import angularMeteor from 'angular-meteor'
import usersList from '../imports/components/usersList/usersList'
import itemsList from '../imports/components/itemsList/itemsList'

angular.module('looptopiapp', [
  angularMeteor,
  usersList.name,
  itemsList.name
])
