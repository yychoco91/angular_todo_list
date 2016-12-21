function listDetailsController(){
     var ctrl =this;
    ctrl.deleteItem=function (item) {
        ctrl.onDelete({listItemObj: ctrl.listItem});   //the things I am passing in is ctrl.listItem
    }
}

angular.module('tdlApp').component('listDetails',{   //when you make components its an object instead of function
    templateUrl:"./components/list-details/list-details.html" ,             // ./ --> dot forward slash is the root
    controller:listDetailsController,
    bindings:{
        listItem:'<',   //binds the controller
        onDelete:'&'    //everything that is bounds is referred here in binding
    }
});