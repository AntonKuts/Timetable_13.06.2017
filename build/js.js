$(document).ready(function() {
  var cart = "";
  var start_time = 0;
  var end_time = 0;
  var work_time = 0;

  $.getJSON('doctors.json', function(data) {
    var doctors_arr = data;

    for (var key in doctors_arr) {
      var doctors = document.createElement('option');
      doctors.innerHTML = key;
      doctors.value = key;
      document.querySelector('.out').append(doctors);
    }

    $('#but1').on('click', chooseDoctor);


    function chooseDoctor() {
      $('#b').empty();
      console.log("поменяли доктора");
      var doctor = document.querySelector('.out').value;
      console.log(doctor);
      for (var key in doctors_arr) {
        console.log(key);
        if (key == doctor) {
          start_time = doctors_arr[key].start;
          end_time = doctors_arr[key].end;
          cart = document.createElement('p');
          cart.innerHTML = 'Часы прийома доктора ' + key + ' : начало работы :' + start_time + ':00 конец работы :' + end_time + ':00';
          $('#b').append(cart);
          fun_work_time(start_time, end_time);
        }
      }
    }


    $('#but1').on('click', chooseDoctor);

    function fun_work_time(start_time, end_time) {
      work_time = end_time - start_time;
      console.log(work_time);

    }


    function fun_time_table() {
      for (var i = 1; i < 16; i++) {
        var time = 6 + i;

        var out2 = document.createElement('p');
        out2.className = "card";
        var input1 = document.createElement('input');
        input1.type = "checkbox";
        input1.id = time;
        var label1 = document.createElement('label');
        label1.setAttribute('for', time);
        label1.innerHTML = time + ':00';

        out2.appendChild(input1);
        out2.appendChild(label1);
        $('#time_table').append(out2);
      }
    }
    fun_time_table();
  })
});
