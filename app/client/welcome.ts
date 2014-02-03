module Eun {
	export class WelcomeController {
		constructor(private $scope, private $location, private submit) {
			$scope.vm = this;
		}

		next() {
			this.submit({welcomed: Date.now()});
			console.log("next");
			this.$location.path("/form").replace();
		}
	}
}
