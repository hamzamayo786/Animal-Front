  var checkbox = document.getElementById('myCheckbox');

  // Uncheck the checkbox
  checkbox.checked = false;

   $(document).ready(function() {
    // Uncheck the checkbox with the specified ID
    $('#myCheckbox').prop('checked', false);
  });




const back = document.querySelectorAll('.back')
const continue1 = document.querySelectorAll('.continue1')
const progress = document.getElementById('steps')
const formstep = document.querySelectorAll('.circle')

let formstepnum= 0;

continue1.forEach(btn=>{
	 btn.addEventListener('click', ()=>{
	 	formstepnum++;
	 	updateformsteps();

	 })
})

function updateformsteps(){
	formstep[formstepnum].classList.add('active')
}
