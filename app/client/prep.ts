module Eun {
	export class PrepController {
		page = 0;   // 0, 1, 2, 3

		constructor(private $scope, private $location, public study, public group) {
			$scope.vm = this;
		}

		prev() {
			if (this.page > 0) {
				this.page--;
			}
		}

		next() {
			
			if (this.group && (this.page === 2 || this.page === 2.5)) {
				this.page += 0.5;
				return;
			}

			if (this.page < 4) {
				this.page++;
			} else {
				this.$location.path("/study");
			}
		}
	}
}