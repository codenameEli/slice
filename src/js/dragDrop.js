slice.directive( 'dragDrop', dragDrop );

function dragDrop() {
	return {
			restrict: 'EA',
			scope: {
				slices: '@',
			},
			link: function( $scope, element, attrs ) {

				console.log($scope.slices);
				function handleDragOver(event) {


					// if (event != null) {

					  event.preventDefault();
					// }

					// event.dataTransfer.effectAllowed = 'copy';

					console.log(event);
					// return false;
				}

				function handleDrop(event) {

					// var file, name, reader, size, type;
			  //        if (event != null) {
			  //          event.preventDefault();
			  //        }
			  //        reader = new FileReader();
			  //        reader.onload = function(evt) {
		   //           return scope.$apply(function() {
		   //             $scope.file = evt.target.result;
		   //             if (angular.isString($scope.fileName)) {
		   //               return $scope.fileName = name;
		   //             }
		   //           });
			  //        };
			  //        file = event.dataTransfer.files[0];
			  //        name = file.name;
			  //        type = file.type;
			  //        size = file.size;
			  //        reader.readAsDataURL(file);
			  //        return false;
				}

				// element.on( 'dragover', function(event) {

				// 	event.stopPropagation(); // Stops some browsers from redirecting.
				// 	event.preventDefault();
				// 	// event.setData("text/uri-list", 0);
				// 	// event.setData("text/plain", 0);
				// 	// event.setData("text/html", 0);

				// 	return false;
				// });

				// element.on( 'dragenter', function(event) {

				// 	event.stopPropagation(); // Stops some browsers from redirecting.
				// 	event.preventDefault();
				// 	return false;
				// });
				// element.bind( 'drop', handleDrop );
				element.on( 'change', function(event) {

					var files = event.target.files; // FileList object
					// event.stopPropagation(); // Stops some browsers from redirecting.
					// event.preventDefault();

					// var files = event.dataTransfer.files;
					console.log(files);
					for (var i = 0, f; f = files[i]; i++) {
					  // Read the File objects in this FileList.

					  var reader = new FileReader();
					  var file = files[i];
					  console.log(file);
					       // Closure to capture the file information.
					       reader.onload = (function(theFile) {
					         return function(e) {
					           // Render thumbnail.
					           console.log(e.target.result);
					           console.log(theFile);
					           console.log(escape(theFile.name));
					           console.log(window.URL.createObjectURL(file));
					           // STOPPING POINT!!!
					           // Get ready to BLOB below
					           // http://www.html5rocks.com/en/tutorials/file/dndfiles/
					           // var bs = reader.readAsBinaryString(theFile);
					           // console.log(bs);
					         };
					       })(f);

					       // Read in the image file as a data URL.
					       reader.readAsDataURL(f);
					}

					// var data = event.dataTransfer.getData();
					// console.log(event,data);
				});

			},
		};
	}