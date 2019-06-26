//Что не так с этим кодом? Предложить исправленную версию.
//1)


//async call does not work
// 1) loadVideosAsync().then(function(videos) {
//     loadMetaAsync().then(function(meta) {
//          DoSomething(videos, meta);
//     });
// });

// function resolveAfter2Seconds(videos) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(videos);
//       }, 2000);
//     });
//   }

// let loadVideosAsync = async() => {
//     console.log("loadVideoAsync");  
//     let videos = await resolveAfter2Seconds('videos');
//     return videos;
// }

// let loadMetaAsync = async() => {
//     console.log("loadMetaAsync");  
//     let meta = await resolveAfter2Seconds('meta');
//     return meta;
// }

// let DoSomething = (videos, meta) => {
//     console.log(videos + ' ' + meta);  
// }


//async call
// Promise.all([loadVideosAsync(), loadMetaAsync()]).then((values) => {
//     let [videos,meta] = values;
//     DoSomething(videos, meta);
// })



//2)
// function anAsyncCall() {
//     var promise = doSomethingAsync();
//     promise.then(function() {
//         somethingComplicated();
//     });
//     return promise;
// };

// async function anAsyncCall() {
//     var promise = await doSomethingAsync();
//     return  promise.then(function() {
//         somethingComplicated();
//     });
// };

//3)
// db.getAllDocs().then(function (result) {
//   result.rows.forEach(function (row) {
//     db.remove(row.doc);  
//   });
// }).then(function () {
//   // All docs must be removed!
// });


db.getAllDocs().then(function (result) {
  result.rows.forEach(function (row) {
  db.remove(row.doc);
  }).then(function () {
  // All docs must be removed!
  });
  });


4)
doAsync().then(function () {
  throw new Error('nope');
}, function (err) {
  // I didn't catch your error! :(
});

doAsync().then(function () {
  throw new Error('nope');
}).catch((err) => {
  console.log(err);
});

