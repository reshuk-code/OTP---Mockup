var but = document.getElementById('Button');
let clickCount = 0; 
let lockTime = 0;   


const randomSites = [
    "https://www.google.com",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.twitter.com",
    "https://www.github.com"
];
function sendOTP() {
  
    clickCount++;

    if (clickCount > 3) {
        lockTime = 5; 
        alert(`Sorry, try again after ${lockTime} seconds`);

        but.disabled = true;
     

       
        let countdown = setInterval(() => {
            lockTime--;

            if (lockTime <= 0) {
                clearInterval(countdown);
                but.disabled = false; 
       
                clickCount = 0;          
            }
        }, 1000); 

        return; 
    }

 
    var otp = Math.floor(Math.random() * 9000 + 1000); 
    alert("OTP: " + otp);

    var inputForotp = prompt('Enter OTP');

   
    if (inputForotp != otp) {
        alert("Sorry! The OTP did not match");
    } else {
        alert("Yay! The OTP matched");
        var randomSite = randomSites[Math.floor(Math.random() * randomSites.length)];
        window.location.href = randomSite; 
     
    }
}