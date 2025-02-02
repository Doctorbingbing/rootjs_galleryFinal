/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	pictures = window.localStorage.getItem('images').split(',');	
	makeGallery(pictures);
	addModalCloseHandler();
	$('#gallery').sortable();
	$('#gallery').on('sortstop', getOrder);
	console.log(pictures)
}
function getOrder(){
	var divCollection = $('#gallery').children();
	for (var index=0; index < pictures.length; index++){
		var currentDiv = $(divCollection[index]);
		var imgSrc = currentDiv.attr('data-image-url');
		pictures[index] = imgSrc;


	}
	console.log(pictures);
	window.localStorage.setItem('images', pictures.toString());
}

function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section
	//create a loop to go through the images in the imageArray
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section
	
	// side note: make sure to remove the hard coded html in the index.html when you are done!
	for (index = 0; index < imageArray.length; index++){
		var currentPhoto = imageArray[index];
		var imgDiv= $('<figure>',{
			'class' : 'imageGallery col-xs-12 col-sm-6 col-md-4 ui-state-default ui-sortable-handle',
			'style': 'background-image:URL('+currentPhoto+')',
			'data-image-url': currentPhoto //Work around for sortable changing style property
		});
		var caption = $('<figcaption>',{
			text: currentPhoto.slice( currentPhoto.indexOf('/')+1)
		});
		$(imgDiv).append(caption);
		imgDiv.click( displayImage )
		$('#gallery').append(imgDiv);
		
	}
}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	$('.modal-body > img').click( function(){
		$('#galleryModal').modal('hide');
	});
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
}
function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	var completeURL = $(this).attr('data-image-url');
	var shortenedURL = completeURL.slice(completeURL.indexOf('/')+1);
	var imageName = shortenedURL.slice(0,shortenedURL.indexOf('.'));	
	$('.modal-title').text(imageName);
	$('.modal-body > img').attr('src',completeURL);
	$('#galleryModal').modal();
}





