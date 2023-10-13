document.addEventListener("contextmenu", (event) => {
 event.preventDefault();
});

 
   
        function changeVideo(videoURL) {
            try {
                var videoContainer = document.getElementById("videoContainer");
                
                // Create a new iframe element
                var iframe = document.createElement("iframe");
                iframe.width = "100%";
                iframe.height = "100%";
                iframe.src = videoURL;
                iframe.frameBorder = "0";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;

                // Remove any existing content from the videoContainer
                videoContainer.innerHTML = "";

                // Append the new iframe to the videoContainer
                videoContainer.appendChild(iframe);
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }

        $(".sidebar-btn").click(function () {
            $(".wrapper").toggleClass("collapse");
        });
    
        //----------------------------------------------------

        //--Using JavaScript to open the page in fullscreen mode
        function toggleFullscreen() {
            var elem = document.documentElement;
            var iconExpand = document.getElementById('a');
            var iconCompress = document.getElementById('b');

            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) { /* Firefox */
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) { /* Safari */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) { /* IE11 */
                    elem.msRequestFullscreen();
                }
                iconExpand.style.display = 'none';
                iconCompress.style.display = 'inline-block';
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { /* Safari */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE11 */
                    document.msExitFullscreen();
                }

                iconExpand.style.display = 'inline-block';
                iconCompress.style.display = 'none';
            }
        }
        //------------------------------------------------------
        function logout() {
            // Clear the user's session or do any other necessary logout tasks.
            // For simplicity, we'll just redirect to the login page.
            sessionStorage.removeItem('userLoggedIn');
            window.location.href = "../index.html";
        }
   