// module.exports.getDate=getDate;
//same as exports.getDate

// function getDate(){
//   var today = new Date();
//
//   var options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long"
//   };
//
//   return today.toLocaleDateString("en-US", options);
// }


//anonymous function

module.exports.getDate = function (){
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
}
