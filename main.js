
// function checkRooms (success, failed) {
//     setTimeout (function () {
//         let availableRooms = true;

//         if (availableRooms) {
//             let message = 'номера є';
//             success(message);
//         } else {
//             let message = 'немає номерів';
//             failed(message);
//         }
//     }, 2000);
// };

// function checkTickeds (message, success, failed) {
//     setTimeout(function() {
//         console.log('перевіряю наявність білетів ', message);
//          let availableTickeds = false;

//          if(availableTickeds) {
//             let message = 'Білети є';
//             success(message);
//          } else {
//             let message = 'Білетів немає';
//             failed(message);
//          }
//     }, 500)
// }

// function cancelVication (message) {
//     console.log('Віддпустка відміняється');
//     console.log('томо, що', message);
// };

// function sumbitVication (message) {
//     console.log('Я їду у відпустку');
//     console.log('томо, що', message);
// };

// checkRooms(function(messageFromCheckRooms) {
//     checkTickeds(messageFromCheckRooms, 
//        sumbitVication,
//        cancelVication )
// }, cancelVication);


let checkRooms = new Promise(function (resolve, reject) {
    setTimeout (function () {
                    let availableRooms = true;
            
                    if (availableRooms) {
                        let message = 'номера є';
                        resolve(message);
                    } else {
                        let message = 'немає номерів';
                        reject(message);
                    }
                }, 2000);
});

checkRooms.then(function (data) {
  

    return new Promise(function (resolve, reject) {
        console.log('перевіряю наявність білетів ', data);
         let availableTickeds = true;

         if(availableTickeds) {
            let message = 'Білети є';
            resolve(message);
         } else {
            let message = 'Білетів немає';
            reject(message);
         }
    }, 500)
    
}).then(function (data) {
    console.log('Я їду у відпустку');
    console.log('томо, що', data);
}).catch(function (data) {
    console.log('Віддпустка відміняється');
    console.log('томо, що', data);
})