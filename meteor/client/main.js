import angular from 'angular'
import angularMeteor from 'angular-meteor'
import usersList from '../imports/components/usersList/usersList'
import looptopiansList from '../imports/components/looptopiansList/looptopiansList'

angular.module('looptopiapp', [
  angularMeteor,
  usersList.name,
  looptopiansList.name
])
