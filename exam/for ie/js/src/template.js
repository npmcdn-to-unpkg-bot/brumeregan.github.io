$(function(){


	$('form').on('submit', function(e){
		e.preventDefault();
		e.stopPropagation();
		var word = $('.search__input').val();
		requestImg(word, 7);
	});



	function requestImg(word){
		$.ajax({
			url: 'http://api.pixplorer.co.uk/image?word=' + word + '&amount=7&size=L',
			type: 'GET',
			dataType: 'json',
			success: function(data){
				// console.log(data);
				createTemplate(data.images);
				return data.images;
			},
			error: function(){
				aler('error');
			}
		});
	}

/*
	imgur
	client ID b7c55337d207120
	client secret 2ec290ef3ed72b32aee25e8d3b92f63c075ba60c
*/

// var t_word = 'internet';

// function thumbl(word){
// 	var t_arr = [];
// 	var t_url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d3a68da120b480a1694db7cf675fcd43&tags=' + word +'&privacy_filter=1&safe_search=1&per_page=7&page=1&format=json&nojsoncallback=1';

// 	$.ajax({
// 		url: t_url,
// 		type: 'GET',
// 		dataType: 'json',
// 		success: function(data){
// 			console.log(data);
			
// 			// for(var i = 0; i < data.photos.photo.length; i++){
// 			// 	var tmp = 'https://farm' + data.photos.photo[i].farm + '.staticflickr.com/' + data.photos.photo[i].server + '/' + data.photos.photo[i].id + '_' + data.photos.photo[i].secret + '.jpg';
// 			// 	t_arr.push(tmp);
// 			// }
// 			// console.log('arr', t_arr);
// 		},
// 		error: function(){
// 			alert('error');
// 		}
// 	});
// }

// thumbl(t_word);

	function createTemplate(array){
		var imgList = _.template($('#masonry').html());
		imgList = imgList({data: array});
		// console.log(imgList);
		$('#ideas__wrapper').html(imgList);
	}

	requestImg('', 7);
	
});