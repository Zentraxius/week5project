import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Age } from './businesslogic.js';

$(document).ready(function () {
  $("#userYearInput").submit(function(event) {
    alert("TEST")
    event.preventDefault;
    console.log("test");
    let userAge = $(".userYear").val();
    let userExpectancy = $(".userExpectancy").val();
    console.log(userAge, userExpectancy);
    let galacticYears = new Age(userAge, userExpectancy);

    $(".result").text(galacticYears);
  });
});