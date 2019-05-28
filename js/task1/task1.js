/*var map = function(arr, callback, thisArgs) {
    var i, length = arr.length, results = [];
    for(i = 0; i < length; i += 1) {
        results.push(callback.call(thisArgs, arr[i], i, arr)); //callback??? call??
    }
    return results;
  };

  
  var pows = map([10, 20, 30], Math.pow);
var frameworks = map(['Knockout', 'Backbone', 'Angular'], function(framework) {
  return framework.slice(0, 5);
});
console.log(pows); // [1,20,900]
console.log(frameworks); // ["Knock","Backb","Angul"]


Array.prototype.map = function(projectionFunction) {
	let length = this.length, results = [];
    for(i = 0; i < length; i += 1) {
        results.push(projectionFunction(this[i])); //callback??? call??
    }
    return results;
  };

  console.log(  [1,2,3].map(x => x**2));
  
  console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]');
  */



//б) Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }. Использовать функцию map

/*
var newReleases = [{
	"id": 70111470,
	"title": "Die Hard",
	"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
}, {
	"id": 654356453,
	"title": "Bad Boys",
	"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{ id: 432534, time: 65876586 }]
}, {
	"id": 65432445,
	"title": "The Chamber",
	"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
}, {
	"id": 675465,
	"title": "Fracture",
	"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{ id: 432534, time: 65876586 }]
}];

var veryNewReleases = newReleases.map(x => {
	return {id: x["id"]	, title: x["title"]}
}); 

console.log(veryNewReleases);
*/

//в
/*
  Array.prototype.filter = function(predicateFunction) {
	  let length = this.length, results = [];
	  for(i = 0; i < length; i = i + 1) {
		  if(predicateFunction(this[i])) {
			  results.push(this[i]);
		  }
	  }
	  return results;
  };

  console.log([1,2,3].filter(x => x > 1));
*/

//г

/*

var newReleases = [{
	"id": 70111470,
	"title": "Die Hard",
	"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
}, {
	"id": 654356453,
	"title": "Bad Boys",
	"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{ id: 432534, time: 65876586 }]
}, {
	"id": 65432445,
	"title": "The Chamber",
	"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
}, {
	"id": 675465,
	"title": "Fracture",
	"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{ id: 432534, time: 65876586 }]
}];


var ids = newReleases.filter(x => x["rating"] == 5.0).map(x => x["id"]);
console.log(ids);

*/


//д) Привести данные к указанному виду, boxarts преобразовать в boxart где значение это ссылка на видео размером 150х200. Используйте следующие функции filter, map, concat.

/*
var movieLists = [{
	name: "Instant Queue",
	videos : [{
		"id": 70111470,
		"title": "Die Hard",
		"boxarts": [{
width: 150,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
}, {
width: 200,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" 
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	}, {
		"id": 654356453,
		"title": "Bad Boys",
		"boxarts": [{
width: 200,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
}, {
width: 150,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}]
}, {
	name: "New Releases",
	videos: [{
		"id": 65432445,
		"title": "The Chamber",
		"boxarts": [{
width: 150,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
}, {
width: 200,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" 
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	}, {
		"id": 675465,
		"title": "Fracture",
		"boxarts": [{
width: 200,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
}, {
width: 150,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
}, {
width: 300,
height: 200,
url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}]
}];

let newMovieList = [].concat.apply([], movieLists.map((element) => element["videos"].filter(movie => movie["boxarts"].filter(lowQualityMovie => lowQualityMovie.width === 150 && lowQualityMovie.height === 200)))).map(movieInfo => ({"id": movieInfo["id"], "title" : movieInfo["title"], "boxart" : movieInfo["url"]}));

console.log(newMovieList);

// ожидаемый результат 
// [
//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
// ];

*/

//д) Создать свою реализацию функции reduce для массивов
/*
Array.prototype.reduce = function(combiner, initialValue = 0) {
	let length = this.length, result = initialValue;
	for(i = 0; i < length; i += 1) {
		result = combiner(result, this[i]);
	}
	return result;
}

console.log([1,2,3].reduce(function(memo, item) { return memo + item; }) == [6]);
console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10));
*/


//е)  С помощью функции reduce получить максимальное значение в массиве

/*
var ratings = [2,3,1,4,5];

console.log(ratings.reduce((x,y) => {
	return x > y ? x : y;
}));

*/

//ж) С помощью функций map, reduce, вывести url у которого самая большая площадь

/*
var boxarts = [{
	width: 200,
	height: 200,
	url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
}, {
	width: 150,
	height: 200,
	url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
}, {
	width: 300,
	height: 200,
	url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
}, {
	width: 425,
	height: 150,
	url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
}];

console.log(boxarts.map(boxart => ({
	area: boxart.height*boxart.width,
	url: boxart.url
})).reduce((maxAreaObj,y) => {
	return maxAreaObj > y ? maxAreaObj : y;
}));

*/

//з) Преобразуйте массив в объект используя функцию reduce. Используйте начальное значение (второй параметр)

var videos = [{
	"id": 65432445,
	"title": "The Chamber"
}, {
	"id": 675465,
	"title": "Fracture"
}, {
	"id": 70111470,
	"title": "Die Hard"
}, {
	"id": 654356453,
	"title": "Bad Boys"
}];

// Expecting this output...
//     {
//         "65432445": "The Chamber",
//         "675465": "Fracture",
//         "70111470": "Die Hard",
//         "654356453": "Bad Boys"
//     }

console.log(videos.reduce((x,y) => {
	var a = {};
	a[y["id"]] = y["title"];
	return Object.assign(x, a);
}, {}));