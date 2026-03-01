window.addEventListener("scroll", function () {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function (element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
        function openCamera() {
    // Browser se permission mangne ke liye
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        // Video tag mein camera ka stream set karna
        let video = document.getElementById('myVideo');
        video.srcObject = stream;
    })
    .catch(function(error) {
        console.log("Camera access denied: ", error);
        alert("Bhai, camera permission allow karni padegi!");
    });
}
    });
});