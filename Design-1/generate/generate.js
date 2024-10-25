
const userData = JSON.parse(localStorage.getItem('userData'));

if (userData) {
  document.getElementById('userName').textContent = userData.name;
  document.getElementById('userTitle').textContent = userData.title;
  document.getElementById('userdescription').textContent = userData.description;
  document.getElementById('facebook').href = userData.facebook;
  document.getElementById('linkedin').href = userData.linkedin;
  document.getElementById('twitter').href = userData.twitter;
  document.getElementById('descriptionAbout').textContent = userData.descriptionAbout;
  document.getElementById('userPicture').src = userData.picture;
  document.getElementById('userPicture2').src = userData.picture;

  document.getElementById('downloadResume').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = userData.pdf;
    link.download = 'Resume.pdf';
    link.click();
  });
} else {
  alert('No user data found. Please go back and fill the form.');
}



// Toogle icon Navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Scroll section active link

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll =() =>{

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        }
    });


    //stick nav bar

    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);


    //remove toggle icon and navbar when click navbar link

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');




    
};

//scroll reveal

ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});

ScrollReveal().reveal('.home-img, .portfolio-box , .contact form ', { origin: 'bottom'});




ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'top'});

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'top'});


//multiple text

// const type = new Typed('.multiple-text', {
//     strings: ['Business Manager', 'Sales Specialist', 'Team Player' , 'Teacher' , 'Good Mother' ],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// }
// );