
window.addEventListener('load', function () {
    var loader = document.getElementById("loading-screen");
    setTimeout(function () {
        loader.style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 1000);
});



document.addEventListener('DOMContentLoaded', function () {
    function editH1InnerHTML(id, newInnerHTML) {
        const h1Element = document.getElementById(id);
        if (h1Element) {
            h1Element.innerHTML = newInnerHTML;
        }
    }

    editH1InnerHTML('main-cuisines', 'Our Featured Cuisines');
    editH1InnerHTML('general-recipes', 'Our Special Recipes');
});


function validatePassword() {
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword != confirmPassword) {
        alert("New password and confirm password do not match.");
        return false;
    } else {
        alert("Password changed successfully!");
        window.location.href = "profile.html";
    }
}

