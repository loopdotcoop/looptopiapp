import angular from 'angular'
import angularMeteor from 'angular-meteor'
import usersList from '../imports/components/usersList/usersList';

angular.module('looptopiapp', [
  angularMeteor,
  usersList.name
])
