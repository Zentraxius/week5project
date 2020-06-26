import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { Age } from './businesslogic.js';

$(document).ready(function () {
  $("#userYearInput").submit(function(event) {
    event.preventDefault;

    // let userAge = $(".userYear").val();
    // let userExpectancy = $(".userExpectancy").val();

    // let galacticYears = new Age(userAge, userExpectancy);
    // let earthResult = `On Earth, you are ${galacticYears[0]} old and expect to make it to ${galacticYears[1]}! Hooray!`
    // $(".result").text(`Congratulations! You are ${galacticYears[0]} old on Mars, and are expected to live until ${galacticYears[1]} on that planet!`);
  });
});