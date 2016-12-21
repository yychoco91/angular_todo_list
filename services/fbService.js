angular.module('tdlApp').service('fbService', function ($firebaseArray) {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAS7ipbQ_I6c_vjOIzskWsj7uN23w19zOg",
        authDomain: "todolist-2b82a.firebaseapp.com",
        databaseURL: "https://todolist-2b82a.firebaseio.com",
        storageBucket: "todolist-2b82a.appspot.com",
        messagingSenderId: "426457299586"
    };
    firebase.initializeApp(config);

    this.getData=function (where) {
        var ref=firebase.database().ref().child(where);

        return $firebaseArray(ref);
    }

});