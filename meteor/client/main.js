import angular from 'angular'
import angularMeteor from 'angular-meteor'
import usersList from '../imports/components/usersList/usersList'
import listablesList from '../imports/components/listablesList/listablesList'

angular.module('looptopiapp', [
  angularMeteor,
  usersList.name,
  listablesList.name
])
