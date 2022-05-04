// Angular.JS
angular
  .module("classyPrep", [])
  .controller("classyPrepController", function ($scope, $http) {
    var todoList = this;
    //Person obj
    todoList.fakePerson = {
      firstName: null,
      lastName: null,
      email: null,
      street: null,
      streetNumber: null,
      city: null,
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

    //submitForm Logic
    var formComplete = false;
    todoList.submitForm = function () {
      if (
        todoList.fakePerson.firstName !== null &&
        todoList.fakePerson.lastName !== null &&
        todoList.fakePerson.email !== null &&
        todoList.fakePerson.street !== null &&
        todoList.fakePerson.streeNumber !== null &&
        todoList.fakePerson.city !== null &&
        todoList.fakePerson.ccNumber !== null
      ) {
        console.log("submitForm invoked");
        formComplete = true;
        let fn = $(".firstName").val();
        let ln = $(".lastName").val();
        let em = $(".email").val();
        let sn = $(".streetNumber").val();
        let st = $(".streetName").val();
        let ct = $(".city").val();
        let cc = $(".cc").val();
        todoList.modal(fn, ln, em, sn, st, ct, cc);
      } else {
        console.log("Fill out the form completely");
      }
    };
    // Submit Modal
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
//console.log(formComplete);
$(document).ready(function () {
  $("#logo").click(function () {
    $("#container").fadeOut("slow").fadeIn("slow");
  });
  $(".submitForm").on("click", function () {
    // Shortcircut logic until I can implement a formComplete variable
    if (true) {
      $(".popup-overlay, .popup-content, .container").addClass("active");
    }
  });
  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked
  $(".close").on("click", function () {
    $(".popup-overlay, .popup-content, .container").removeClass("active");
  });
});
