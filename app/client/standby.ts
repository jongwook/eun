module Eun {
	export class StandbyController {
		page = 0;   // 0, 1

		constructor(private $scope, private $location, public study, private submit) {
			$scope.vm = this;
		}

		prev() {
			if (this.page > 0) {
				this.page--;
			}
		}

		next() {
			if (this.page < 1) {
				this.page++;
			} else {
				this.submit({quiz: Date.now()});
				this.$location.path("/quiz");
			}
		}
	}
}