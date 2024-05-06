import $ from 'jquery';
import { debounce } from 'lodash';

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startBtn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    function updateCounter() {
        const count = parseInt($('#count').text().replace(/\D/g,'')) + 1 || 1;
        $('#count').text(`${count} clicks on the button`);
    }

    $('#startBtn').on('click', debounce(updateCounter, 300));
});

