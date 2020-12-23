const navMenu=document.getElementById('nav-menu'),
      toggleMenu=document.getElementById('nav-toggle'),
      closeMenu=document.getElementById('nav-close') 

//show

toggleMenu.addEventListener('click',()=>{
	navMenu.classList.toggle('show')
})

//hide
closeMenu.addEventListener('click',()=>{
	navMenu.classList.remove('show')
})

//remove menu
const navLink=document.querySelectorAll('.nav_link')
function linkAction()
{
	navMenu.classList.remove('show')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

//scroll sections active link
const sections=document.querySelectorAll('section[id]')
window.addEventListener('scroll',scrollActive)

function scrollActive()
{
	const scrollY=window.pageYOffset
	sections.forEach(current =>{
		const sectionHeight=current.offsetHeight
		const sectionTop=current.offsetTop - 50
		sectionId=current.getAttribute('id')

		if(scrollY > sectionTop && scrollY<= sectionTop+sectionHeight)
		{
	      document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
		}
		else
		{
		document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')	
		}
	})
}

 const form=document.getElementById('form');
 const uname=document.getElementById('fn');
 const email=document.getElementById('email');

 form.addEventListener('submit',(e)=>
 {
 	e.preventDefault();
 	checkInputs();
 })    

function checkInputs()
{
   const u=uname.value.trim();
   console.log(u);
   const e=email.value.trim();
   console.log(e);

   if(u==='')
   {
         setErrorFor(u);
   }
   else
   {
         setSuccessFor(u);  
   }
   if(e==='')
   {
   	setErrorMail(e);
   }
   else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e))
   {
     
     setSuccessEmail(e);
   }
   else
   {
   	 setErrorForEmail(e);
   }
   
}
function setErrorFor(input)
{
   
  const formControl=uname.parentElement;
  formControl.className='form-control error i'; 
  formControl.className='form-control error contact_input';
  const form=uname.parentElement.parentElement; 
}
function setSuccessFor(input)
{
  const formControl=uname.parentElement;
  formControl.className='form-control success'; 
  formControl.className='form-control success contact_input'; 	
}

function setErrorMail(input)
{
  const formControl=email.parentElement;
  formControl.className='form-control error i'; 
  formControl.className='form-control error contact_input';  
}
function setErrorForEmail(input)
{
  const formControl=email.parentElement;
  formControl.className='form-control error i'; 
  formControl.className='form-control error contact_input'; 
}
function setSuccessEmail(input)
{
  const formControl=email.parentElement;
  formControl.className='form-control success'; 
  formControl.className='form-control success contact_input'; 

}



















