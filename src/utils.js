// function resizeBase64Img(base64, width, height) {
    // var canvas = document.createElement('canvas');
    // var context = canvas.getContext('2d');
    // var deferred = Promise.defer();
    // var image = new Image();
    // image.src = base64;
    // image.onload = function() {
        // var ratio = width ? width/this.width : height ? height/this.height : 1;
        // if (ratio > 1) { ratio = 1 }
        // canvas.width = this.width*ratio;
        // canvas.height = this.height*ratio;
        // context.scale(ratio,  ratio);
        // context.drawImage(this, 0, 0);
        // deferred.resolve(canvas.toDataURL('image/jpeg', 0.7));
    // };
    // return deferred.promise;
// }

// function timePrettify(t) {
  // const date = new Date(t);
  // const now = new Date();
  // if (now.getYear() !== date.getYear()) {
    // return date.getYear();
  // } else if (now.getMonth() !== date.getMonth()) {
    // return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
  // } else if (now.getDay() !== date.getDay()) {
    // return ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'][date.getDay()];
  // } else {
    // return `${date.getHours()}:${date.getMinutes()}`;
  // }
// }

// module.exports = { resizeBase64Img, timePrettify }
