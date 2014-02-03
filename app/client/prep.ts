module Eun {
	export class PrepController {
		page = 0;   // 0, 1, 2, 3

		constructor(private $scope, private $location, public study, public group, private submit) {
			$scope.vm = this;

			var count = 0;
			$(document.body).keydown(event => {
				console.log("keydown : " + event.keyCode);
				if (event.keyCode === 78) { // 'n'
					count++;

					if (count === 5) {
						$scope.$apply(() => $scope.vm.next());
					}
				}
			});
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
				this.submit({studies: Date.now()});
				this.$location.path("/study").replace();
			}
		}
	}
}