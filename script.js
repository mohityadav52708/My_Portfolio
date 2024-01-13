document.addEventListener("DOMContentLoaded", function () {
  const leftBar = document.getElementById("leftBar");
  const menuIcon = document.getElementById("menu-icon");

  menuIcon.addEventListener("click", () => {
    leftBar.classList.toggle("show-left-bar");
  });

  document.addEventListener("click", (event) => {
    const target = event.target;

    // Check if the clicked element is not part of the left bar or the menu icon
    if (target !== leftBar && !leftBar.contains(target) && target !== menuIcon) {
      leftBar.classList.remove("show-left-bar");
    }
  });
});


  // js code to make draggable nav
  function onDrag({movementY}) { //movementY gets mouse vertical value
    const navStyle = window.getComputedStyle(nav), //getting all css style of nav
          navTop = parseInt(navStyle.top), // getting nav top value & convert it into string
          navHeight = parseInt(navStyle.height), // getting nav height value & convert it into string
          windHeight = window.innerHeight; // getting window height

    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
    if(navTop > windHeight - navHeight){
      nav.style.top = `${windHeight - navHeight}px`;
    }
  }

  //this function will call when user click mouse's button and  move mouse on nav
  nav.addEventListener("mousedown", () =>{
    nav.addEventListener("mousemove", onDrag);
  });

  //these function will call when user relase mouse button and leave mouse from nav
  nav.addEventListener("mouseup", () =>{
    nav.removeEventListener("mousemove", onDrag);
  });
  nav.addEventListener("mouseleave", () =>{
    nav.removeEventListener("mousemove", onDrag);
  });


  function replaceEmail() {
    const emailLink = document.getElementById("Email_para");
    const emailAddress = "mohityadav.udl@gmail.com"; // Replace this with your actual email
  
    emailLink.href = "mailto:" + emailAddress;
    emailLink.removeAttribute("onclick"); // Remove the onclick attribute after setting the email
  }
  