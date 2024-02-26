document.addEventListener('DOMContentLoaded', function () {
    var loggedIn = localStorage.getItem('username') && localStorage.getItem('password');

    if (loggedIn) {
        var buttonToRemove = document.getElementById('login');
        if (buttonToRemove) {
            buttonToRemove.remove();
        }

        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();

            var currentPassword = document.getElementById('currentPassword').value;
            var newPassword1 = document.getElementById('newPassword').value;
            var newPassword2 = document.getElementById('confirmPassword').value;

            var storedPassword = localStorage.getItem('password');
            if (currentPassword !== storedPassword) {
                alert("Current password is incorrect.");
                return false;
            }

            if (newPassword1 !== newPassword2) {
                alert("New passwords do not match.");
                return false;
            }

            var username = localStorage.getItem('username');
            localStorage.setItem('password', newPassword1);
            event.target.reset();
            alert("Password changed successfully!");
        });
    } else {
        var buttonToRemove = document.getElementById('account');
        if (buttonToRemove) {
            buttonToRemove.remove();
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            logout();
        });
    }
});

function logout() {
    var buttonToRemove = document.getElementById('account');
    if (buttonToRemove) {
        buttonToRemove.remove();
    }
    window.location.href = '../Karan/login.html';
}


document.addEventListener('DOMContentLoaded', function () {
    var deleteButton = document.getElementById('deleteButton');
    if (deleteButton) {
        deleteButton.addEventListener('click', function () {
            del();
        });
    }
});

function del() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = '../Karan/login.html';
    var buttonToRemove = document.getElementById('account');
    if (buttonToRemove) {
        buttonToRemove.remove();
    }
}

