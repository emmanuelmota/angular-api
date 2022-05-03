// Angular.JS
angular
  .module("classyPrep", [])
  .controller("classyPrepController", function ($scope, $http) {
    var todoList = this;
    //Person obj
    todoList.fakePerson = {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      streetNumber: "",
      city: "",
      ccNumber: null,
    };
    // Fetch data from API
    todoList.getFromApi = function () {
      $http.get("https://randomuser.me/api/").then(
        function (res) {
          let person = todoList.fakePerson;
          let apiData = res.data.results[0];
          person.firstName = apiData.name.first;
          person.lastName = apiData.name.last;
          person.email = apiData.email;
          person.street = apiData.location.street.name;
          person.streetNumber = apiData.location.street.number;
          person.city = apiData.location.city;
          person.ccNumber = 1234567890;
        },
        function (err) {
          console.log("Error in getting API");
        }
      );
    };

    //Add a task to list
    todoList.submitForm = function () {
      console.log("submitForm fired");
      let fn = $( ".firstName" ).val();
      let ln = $(".lastName").val();
      let em = $(".email").val();
      let sn= $(".streetNumber").val();
      let st = $(".streetName").val();
      let ct = $(".city").val();
      let cc = $(".cc").val();
      todoList.modal(fn,ln,em,sn,st,ct,cc)
    };

    todoList.modal = function (fn, ln, em, sn, st, ct, cc) {
      console.log(fn, ln, em, sn, st, ct, cc);
    };

  });
// JQUERY
//  Alert Animation
let alertAnimation = (className) => {
  let i = 0;
  while (i < 3) {
    $(`.${className}`).fadeOut(100);
    $(`.${className}`).fadeIn(100);
    i++;
  }
};
// ID animations
$(document).ready(function () {
  $("#logo").click(function () {
    $("#container").fadeOut("slow");
    $("#container").fadeIn("slow");
  });
});
