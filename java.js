  var checkbox = document.getElementById('myCheckbox');

  // Uncheck the checkbox
  checkbox.checked = false;

   $(document).ready(function() {
    // Uncheck the checkbox with the specified ID
    $('#myCheckbox').prop('checked', false);
  });




const back = document.querySelectorAll('.btn-pre')
const continue1 = document.querySelectorAll(('.btn-next'))
const progress = document.getElementById('steps')
const pagestep = document.querySelectorAll('.page-step')
const circle = document.querySelectorAll('.circle')




let formstepnum= 0;

continue1.forEach(   btn=>{
	 btn.addEventListener('click', ()=>{
	 	formstepnum++;
	 	updateformsteps();
	 	updatecircle();

	 })
})

back.forEach(   btn=>{
	 btn.addEventListener('click', ()=>{
	 	formstepnum--;
	 	updateformsteps();
	 	updatecircle();

	 })
})


function updateformsteps(){
	pagestep.forEach(pagestep=>{
		pagestep.classList.contains('active') && pagestep.classList.remove('active')
	})


	pagestep[formstepnum].classList.add('active')
	console.log("clicked");

}


function updatecircle(){
	circle.forEach((circle, idx) =>{
		if(idx < formstepnum +1){
			circle.classList.add('active')
		}
		else{
			circle.classList.remove('active')

		}
	})

const progressbar = document.querySelectorAll('.indicator')

	progressbar.style.width = (progressbar.length -1)/( circle.length -1) *100 + '%'
}