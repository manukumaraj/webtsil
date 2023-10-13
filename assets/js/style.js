document.addEventListener("contextmenu", (event) => {
 event.preventDefault();
});

const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});
    


var users1 = [
            { username: "user1a", password: "pass1a" },
            { username: "user1b", password: "pass1b" },
        ];
        
        var users2 = [
            { username: "smp2a", password: "pass2a" },
            { username: "user2b", password: "pass2b" },
        ];

        var users3 = [
            { username: "user3a", password: "pass3a" },
            { username: "user3b", password: "pass3b" },
        ];

        function navigate() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Define a function to check a user array
            function checkUserArray(userArray) {
                for (var i = 0; i < userArray.length; i++) {
                    if (username === userArray[i].username && password === userArray[i].password) {
                        return true; // User found in the array
                    }
                }
                return false; // User not found in the array
            }

            // Check each user array in sequence
            if (checkUserArray(users1)) {
                // Set the session flag
                sessionStorage.setItem('sessionActive', 'true');

                window.location.href = "unit_ts2/page_ut_ts2.html"; // Redirect to page 1
            } else if (checkUserArray(users2)) {
                // Set the session flag
                sessionStorage.setItem('sessionActive', 'true');

                window.location.href = "ho_sample/page_ho_smp.html"; // Redirect to page 2
            } else if (checkUserArray(users3)) {
                // Set the session flag
                sessionStorage.setItem('sessionActive', 'true');

                window.location.href = "page3.html"; // Redirect to page 3
            } else {
                alert("Invalid username or password.");
            }
        }

        function clearSession() {
            // Clear the session flag
            sessionStorage.removeItem('sessionActive');

            // You can also redirect the user to another page or perform other actions here if needed.
        }
    