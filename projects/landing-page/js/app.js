/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let timerForScrolling = null;
const topbutton=document.getElementById('backToTopButton')	;	
const list = document.getElementById('navbar__list');
const listview=document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
 createnavmenu();
 //scrolling();
window.addEventListener('scroll', scrolling, true);	
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
 function createnavmenu()
                     {                
                   for(var i=0;i< listview.length;i++) 
								{	
						
                       const listitem = document.createElement( "li" );
						const address= document.createElement("A")
					var panel=listview[i].getElementsByTagName("h2");
			address.innerHTML=panel[0].innerHTML
				address.setAttribute("href","#"+listview[i].getAttribute('id'));
//address.removeAttribute("href");
			//	address.setAttribute("href",address.addEventListener('click',updating));
		//	address.addEventListener('click',updating,true);
	listitem.appendChild(address);
	               list.appendChild(listitem);
								}
									
					
							}
							function updating()
							{
								
							//	a.setAttribute("href","#"+b.getAttribute('id'));
								var el=document.getElementById('section1');
								el.scrollBy();
								
								
							}
// Scroll to section on link click
function scrolling()
{ 

	 list.style.display  = "block";
	 updateactivesection();
 if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)
		  topbutton.style.display ="block";
	else
		topbutton.style.display ="none";
	
	if(timerForScrolling !== null) {
        clearTimeout(timerForScrolling);        
    }
    timerForScrolling = setTimeout(function() {
		  list.style.display = "none";
		 
    }, 2000);

}
// Set sections as active
function updateactivesection()
{
	let viewPortLocation = document.documentElement.scrollTop || document.body.scrollTop
	let index=0;
	let minumudiff=10000;
		for(let i=0; i< listview.length; i++){
		listview[i].classList.remove('your-active-class');
		list.children[i].classList.remove('active-li');
		
		//calculate the difference between current location and section location
		let diff = Math.abs(listview[i].offsetTop - viewPortLocation);
		if(diff < minumudiff)
		{
			minumudiff = diff;
			index = i;
		}
	}
	
	listview[index].classList.add('your-active-class');
	list.children[index].classList.add('active-li');
	
	
}

