//HIDE THE LINK BUTTON 
const linkContainer = document.querySelector(".tree_link");
const joinBtn = document.getElementById("Join");
const link = document.getElementById("treeA");
const closeBtn = document.querySelector(".closeLinkBtn");
// When link is clicked
link.addEventListener("click", () => {
    // Delay hiding so it works even if new tab opened
    setTimeout(() => {
        linkContainer.style.display = "none";
        joinBtn.style.display = "block";
        document.getElementById('shareLink').style.top="-450px";
        document.getElementById('shareLink2').style.top="-450px";
        document.getElementById('shareLink3').style.top="-450px";
        document.getElementById('shareLink4').style.top="-450px";
        document.getElementById('shareLink5').style.top="-450px";
        
    }, 100);
});


// When CLOSE BUTTON is clicked
closeBtn.addEventListener("click", () => {
    linkContainer.style.display = "none";
    joinBtn.style.display = "block";
});


//SHARING SCREEN DISPLAY BLOCK//
//#1
function shareLinksDis1(){
    const dots = document.querySelector('.dots');
    const sharePage = document.getElementById('shareLink');
    dots.onclick = ()=>{
sharePage.style.display="block";
    }
}
//#1 NONE
function shareLinks(){
    const closeBtn = document.getElementById('closeShare');
    const sharePage = document.getElementById('shareLink');
    closeBtn.onclick = ()=>{
sharePage.style.display="none";
    };
}

shareLinksDis1(); 
shareLinks(); 

//#2
function shareLinksDis2(){
    const dots = document.querySelector('.weddingDots');
    const sharePage = document.getElementById('shareLink2');
    dots.onclick = ()=>{
sharePage.style.display="block";

    };
}

//#2 NONE 
function shareLinks2(){
    const closeBtn = document.getElementById('closeShare2');
    const sharePage = document.getElementById('shareLink2');
    closeBtn.onclick = ()=>{
sharePage.style.display="none";
    }
}

shareLinksDis2(); 
shareLinks2(); 


//#3
function shareLinksDis3(){
    const dots = document.querySelector('.workDots');
    const sharePage = document.getElementById('shareLink3');
    dots.onclick = ()=>{
sharePage.style.display="block";
    }
}

//#3 NONE
function shareLinks3(){
    const closeBtn = document.getElementById('closeShare3');
    const sharePage = document.getElementById('shareLink3');
    closeBtn.onclick = ()=>{
sharePage.style.display="none";
    }
}
shareLinksDis3(); 
shareLinks3(); 


//#4
function shareLinksDis4(){
    const dots = document.querySelector('.photoshootDots');
    const sharePage = document.getElementById('shareLink4');
    dots.onclick = ()=>{
sharePage.style.display="block";
    }
}

//#4 NONE
function shareLinks4(){
    const closeBtn = document.getElementById('closeShare4');
    const sharePage = document.getElementById('shareLink4');
    closeBtn.onclick = ()=>{
sharePage.style.display="none";
    }
}
shareLinksDis4(); 
shareLinks4(); 

//#5
function shareLinksDis5(){
    const dots = document.querySelector('.youtubeDots');
    const sharePage = document.getElementById('shareLink5');
    dots.onclick = ()=>{
sharePage.style.display="block";
    }
}

//#5 NONE
function shareLinks5(){
    const closeBtn = document.getElementById('closeShare5');
    const sharePage = document.getElementById('shareLink5');
    closeBtn.onclick = ()=>{
sharePage.style.display="none";
    }
}
shareLinksDis5(); 
shareLinks5(); 

//FOR COPYING AND MORE BUTTONS
//FIRST MORE 
document.getElementById("MoreBtn").addEventListener("click", async function(e) {
  e.preventDefault(); // prevent the default link behavior

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check this out!',
        text: 'This is something cool I want to show you!',
        url: window.location.href // or any URL you want to share
      });
      console.log('Shared successfully');
    } catch (error) {
      console.log('Sharing failed:', error);
    }
  } else {
    alert("Sharing not supported on this browser. 😔");
  }
});

//SECOND MORE
document.getElementById("MoreBtn2").addEventListener("click", async function(e) {
  e.preventDefault(); // prevent the default link behavior

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check this out!',
        text: 'This is something cool I want to show you!',
        url: window.location.href // or any URL you want to share
      });
      console.log('Shared successfully');
    } catch (error) {
      console.log('Sharing failed:', error);
    }
  } else {
    alert("Sharing not supported on this browser. 😔");
  }
});


//THIRD MORE
document.getElementById("MoreBtn3").addEventListener("click", async function(e) {
  e.preventDefault(); // prevent the default link behavior

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check this out!',
        text: 'This is something cool I want to show you!',
        url: window.location.href // or any URL you want to share
      });
      console.log('Shared successfully');
    } catch (error) {
      console.log('Sharing failed:', error);
    }
  } else {
    alert("Sharing not supported on this browser. 😔");
  }
});

//FOURTH MORE 
document.getElementById("MoreBtn4").addEventListener("click", async function(e) {
  e.preventDefault(); // prevent the default link behavior

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check this out!',
        text: 'This is something cool I want to show you!',
        url: window.location.href // or any URL you want to share
      });
      console.log('Shared successfully');
    } catch (error) {
      console.log('Sharing failed:', error);
    }
  } else {
    alert("Sharing not supported on this browser. 😔");
  }
});

//FIFTH MORE
document.getElementById("MoreBtn5").addEventListener("click", async function(e) {
  e.preventDefault(); // prevent the default link behavior

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check this out!',
        text: 'This is something cool I want to show you!',
        url: window.location.href // or any URL you want to share
      });
      console.log('Shared successfully');
    } catch (error) {
      console.log('Sharing failed:', error);
    }
  } else {
    alert("Sharing not supported on this browser. 😔");
  }
});


/*COPY*/
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("copyBtn1");

    btn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent following the link

      const span = btn.querySelector("span");
      const originalText = span.innerText;
      const link = btn.getAttribute("data-link");

      // Copy to clipboard
      navigator.clipboard.writeText(link).then(() => {
        span.innerText = "Copied!";

        // Reset text after 2 seconds
        setTimeout(() => {
          span.innerText = originalText;
        }, 2000);
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    const btn2 = document.getElementById("copyBtn2");

    btn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent following the link

      const span2= btn2.querySelector("span");
      const originalText2 = span2.innerText;
      const link2 = btn2.getAttribute("data-link");

      // Copy to clipboard
      navigator.clipboard.writeText(link2).then(() => {
        span2.innerText = "Copied!";

        // Reset text after 2 seconds
        setTimeout(() => {
          span2.innerText = originalText2;
        }, 2000);
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    const btn3 = document.getElementById("copyBtn3");

    btn3.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent following the link

      const span3 = btn3.querySelector("span");
      const originalText3 = span3.innerText;
      const link3 = btn3.getAttribute("data-link");

      // Copy to clipboard
      navigator.clipboard.writeText(link3).then(() => {
        span3.innerText = "Copied!";

        // Reset text after 2 seconds
        setTimeout(() => {
          span3.innerText = originalText3;
        }, 2000);
      });
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const btn4 = document.getElementById("copyBtn4");

    btn4.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent following the link

      const span4 = btn4.querySelector("span");
      const originalText4 = span4.innerText;
      const link4 = btn4.getAttribute("data-link");

      // Copy to clipboard
      navigator.clipboard.writeText(link4).then(() => {
        span4.innerText = "Copied!";

        // Reset text after 2 seconds
        setTimeout(() => {
          span4.innerText = originalText4;
        }, 2000);
      });
    });
  });


document.addEventListener("DOMContentLoaded", function () {
    const btn5 = document.getElementById("copyBtn5");

    btn5.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent following the link

      const span5 = btn5.querySelector("span");
      const originalText5 = span5.innerText;
      const link5 = btn5.getAttribute("data-link");

      // Copy to clipboard
      navigator.clipboard.writeText(link5).then(() => {
        span5.innerText = "Copied!";

        // Reset text after 2 seconds
        setTimeout(() => {
          span5.innerText = originalText5;
        }, 2000);
      });
    });
  });


  //COOKIE STUFFF
  const messegeClose = document.querySelector(".cookiClose");
  const cookieMsg = document.querySelector(".cookie-mess");
  messegeClose.onclick = ()=>{
cookieMsg.style.display="none"; 
  }

  const closeScreen = document.querySelector(".cookiScreenClose");
  const cookieSc = document.getElementById("cookie-screen");
  const showCook = document.getElementById("showCook");
  const showCook2 = document.getElementById("Cookie");
  const confir = document.getElementById("confirm");

  closeScreen.onclick = ()=>{
    cookieSc.style.display="none"; 
  }

  showCook.onclick = ()=>{
    cookieSc.style.display="block";
    cookieMsg.style.display="none"; 
  }

  showCook2.onclick = ()=>{
    cookieSc.style.display="block"; 
    cookieSc.style.top="-500px";
    cookieMsg.style.display="none";
    showCook2.style.display="none"; 
  }

  confir.onclick =()=>{
    cookieSc.style.display="none"; 
  }

//SWITCHS
const divvs = document.querySelectorAll(".divv");

divvs.forEach(divv => {
  let toggled = false;

  divv.addEventListener("click", () => {
    const switchBg = divv.closest(".switch");

    if (!toggled) {
      divv.style.transform = "translateX(-35px)";
      switchBg.style.backgroundColor = "gray";
    } else {
      divv.style.transform = "translateX(0)";
      switchBg.style.backgroundColor = "rgb(58, 229, 58)";
    }

    toggled = !toggled;
  });
});



/*JOIN SCREEN*/
const joinSh = document.getElementById("Join");
const joinScreen = document.getElementById("joinScreen");

joinSh.onclick=()=>{
joinScreen.style.display="block"; 
joinScreen.style.top="-400px";
}

const joinHid = document.getElementById("joinClose");
joinHid.onclick=()=>{
    joinScreen.style.display="none";
}

// SLIDING WORDS
const words = ["Creators.", "Businesses.", "Musicians.", "Realtors.", "Creatives."];
const joinText = document.getElementById("joinRandom");

let index = 0;

function slideNextWord() {
  // Slide current word up
  joinText.style.transform = "translateY(-100%)";

  // After animation ends
  setTimeout(() => {
    index = (index + 1) % words.length;
    joinText.innerText = words[index];

    // Move it back below view before next slide
    joinText.style.transition = "none";
    joinText.style.transform = "translateY(100%)";

    // Force reflow to apply the new position
    void joinText.offsetWidth;

    // Slide up into view again
    joinText.style.transition = "transform 0.5s ease-in-out";
    joinText.style.transform = "translateY(0)";
  }, 500);
}

// Repeat every 3 seconds
setInterval(slideNextWord, 3000);
