    // hambarger
 const items = document.querySelector('.nav-items');
 const open = document.querySelector('.openmanue');
 const clos = document.querySelector('.closmanue');

 open.addEventListener("click" ,function show(){
    items.style.right= '0';
 });
  clos.addEventListener("click" , function close(){
    items.style.right = '-100%';
  });

  // model

const hire = document.querySelector('.hire');
const form = document.querySelector('.form');
const btn2 = document.querySelector('.btn2');

hire.addEventListener("click" ,function model(){
  form.style.top = '18%';
})

btn2.addEventListener("click" , function close(){
  form.style.top = '-86%';
})


  // animation 
  var options = {
    strings: ['Student', 'Web-developer'],
    typeSpeed: 40,
    backSpeed:40,
    loop : true
  };
  
  var typed = new Typed('.typing', options);

  var options = {
    strings: ['Web-developer'],
    typeSpeed: 40,
    backSpeed:40,
    loop : true
  };
  
  var typed = new Typed('.typed', options);

  // form validation

  function validation(){
    const name = document.querySelector("#name").value;

    if(name == ""){
      document.querySelector(".name1").innerHTML = "please fill the name filed";
      console.log("clicked");
      return false;
    }
    if(name.length <=2){
      document.querySelector(".name1").innerHTML = "please fill greater then 2";
      console.log("clicked");
      return false;
    }
    const email = document.querySelector("#email").value;

    if(email == ""){
      document.querySelector(".email1").innerHTML = "please fill email id";
      console.log("clicked");
      return false;
    }
    if(email.indexOf('@') <= 0){
      document.querySelector(".email1").innerHTML = "invailed ";
      console.log("clicked");
      return false;
    }
  }



  