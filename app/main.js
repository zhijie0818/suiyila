var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 's_test/index.html'
                },
                'topbar@index': {
                    templateUrl: 's_test/topbar.html'
                },
                'main@index': {
                    templateUrl: 's_test/home.html'
                }
            }
        })
        .state('index.usering', {
            url: '/usering',
            views: {
                'main@index': {
                    templateUrl: 's_test/usering.html',
                    controller:function($scope,$state){
                        $scope.addUserType=function(){
                            $state.go("index.usering.addtype");
                        }
                    }
                }
            }
        })
        .state('index.usering.addtype',{
            url:'/addtypesssss',
            templateUrl:'s_test/addtype.html',
            controller:function($scope,$state){
                $scope.backToPrevious=function(){
                    window.history.back();
                }
            }
        })
        // 鞋子
        .state('index.usering.shoes',{
            url:'/shoe',
            templateUrl:'s_test/shoes.html'
        })
        //服装
        .state('index.usering.clothing',{
            url:'/clothingg',
            templateUrl:'s_test/clothing.html'
        })
        //箱包
        .state('index.usering.bags',{
            url:'/bagss',
            templateUrl:'s_test/bags.html'
        })
        .state('index.permission', {
            url: '/permission',
            views: {
                'main@index': {
                    template: '这里是权限管理'
                }
            }
        })
        .state('index.report', {
            url: '/report',
            views: {
                'main@index': {
                    template: '这里是报表管理'
                }
            }
        })
        .state('index.settings', {
            url: '/settings',
            views: {
                'main@index': {
                    template: '这里是系统设置'
                }
            }
        })
});
