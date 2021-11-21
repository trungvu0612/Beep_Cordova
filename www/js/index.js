$(document).on("vclick", "#btn_beep", beepNoti);

function beepNoti() {
    navigator.notification.beep(3);
}

$(document).on("vclick", "#btn_vibration", vibrationNoti);

function vibrationNoti() {
    navigator.vibrate(1000, 2000, 2000, 3000, 3000, 3000, 1000, 1000, 1000);
}