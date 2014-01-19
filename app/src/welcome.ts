module Eun {
	export class WelcomeController {
		constructor(private $scope, private $location) {
			$scope.vm = this;
		}

		next() {
			console.log("next");
			this.$location.path("/form");
		}
	}
}
