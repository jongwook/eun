module Eun {
	export class StarterController {
		constructor($scope, $location, type, feedback, group, study, submit) {
			$scope.vm = this;

			var count = 0;

			console.log(type, feedback, group, study);

			$(document.body).keydown(event => {
				if (event.keyCode === 32) {
					count++;

					if (count === 3) {
						$scope.$apply(() => {
							$location.path("/welcome");
						});
					}
				}
			});


			var id = uuid();
			$.cookie("uuid", id);

			console.log("new UUID : " + id);

			submit({started: Date.now()});

		}
	}
}