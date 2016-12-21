function todoListController(fbService, $scope){
    var ctrl=this;  //assign this to its own variable to avoid potential issues

    ctrl.list=fbService.getData('list')

    ctrl.add=function (listItem) {
        ctrl.list.$add(listItem).then(function () {
            console.info('List item added');
        });
    };

    ctrl.delete=function (listItem) {
       ctrl.list.$remove(listItem).then(function (ref) {
           console.log('Item Removed',ref);
       },  function(err){
           console.warn('Item not removed',err);
       })
    };
}

angular.module('tdlApp').component('todoList', {
    templateUrl: './components/todo-list/todo-list.html',
    controller: todoListController
});