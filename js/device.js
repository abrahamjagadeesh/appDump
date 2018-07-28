 function onLoad() {
 	document.addEventListener("deviceready", onDeviceReady, false);
 }

 function onDeviceReady() {
 	document.addEventListener("backbutton", function () {
 		navigator.notification.confirm(
 			'Exit PhoneGap ' + device.cordova + ' Demo?', function (button) {
 				if (button == 2) {
 					navigator.app.exitApp();
 				}
 			}, 'Exit', 'No,Yes'
 		);
 	}, false);
 }