$(document).on("vclick", "#btn_beep", cordovaBeep);

function cordovaBeep() {
    navigator.notification.beep(3);
}

$(document).on("vclick", "#btn_vibration", cordovaVibration);

function cordovaVibration() {
    navigator.vibrate(1000, 2000, 2000, 3000, 3000, 3000, 1000, 1000, 1000);
}