module Eun {
	export class StarterController {
		constructor(private $scope, private $location) {
			$scope.vm = this;

			var count = 0;

			$(document.body).keydown(event => {
				if (event.keyCode === 32) {
					count++;

					if (count >= 3) {
						$scope.$apply(() => {
							$location.path("/welcome");
						})
					}
				}
			})
		}
	}
}