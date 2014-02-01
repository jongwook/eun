module Eun {
	export class SurveyController {
		page = 0;   // 0 (intro) -> 1~5 pages (4 questions per page)

		topic = this.elementary ? "속담" : "고사성어";

		questions = [
			// page 1: 1 to 4
			"(question hard-coded in the view file)",
			"나는 " + this.topic + " 학습하기가 재미있었다.",
			"실수는 주어진 " + this.topic + "에 대한 이해를 높이는 데 도움을 주었다.",
			"실수는 내가 주어진 " + this.topic + "를 이해하는 데 유용한 정보를 제공해 주었다.",
			// page 2: 5 to 8
			"나의 실수는 주어진 " + this.topic + "에 대해 이해하는 데 도움을 주었다.",
			"내 실수 덕분에 주어진 " + this.topic + "에 대해 보다 깊은 이해를 할 수 있었다.",
			"높은 점수를 얻고 싶다면, 과제에서 실수하는 것을 두려워해서는 안되었다.",
			"가만히 있는 것보다는 위험을 감수하더라도 실수를 하는 것이 나았다.",
			// page 3: 9 to 12
			"과제를 잘 수행하기 위해서라면 나는 기꺼이 실수를 받아들였다.",
			"나는 아무 것도 하지 않는 것보다는 실수하는 것을 더 선호했다.",
			"나는 과제를 하는 도중 실수를 할 때마다 스트레스를 받았다.",
			"나는 과제를 하는 동안 실수를 할까 봐 자주 두려웠다.",
			// page 4: 13 to 16
			"나는 과제를 하는 동안 실수를 한 경우 당혹스러웠다.",
			"과제를 하는 동안 실수를 한 경우, 나는 평정심을 잃고 화가 났다.",
			"과제를 하는 동안 나는 내가 무언가를 잘못하지는 않았는지 걱정했다.",
			"과제를 하는 동안 나는 실수를 한 경우에 실수를 어떻게 하게 된 것인지에 대해 생각하고 싶었다.",
			// page 5: 17 to 20
			"과제를 하는 동안 나는 어떻게 하면 실수하는 것을 막을 수 있을까에 대해서 종종 생각하고 싶었다.",
			"과제를 하는 동안 정답을 제시하지 못할 경우, 나는 그것을 매우 신중하게 생각하고 싶었다.",
			"과제를 하는 동안 실수를 한 후, 나는 어떻게 실수를 고칠 수 있을까에 대해 오랫동안 신중히 고민하고 싶었다.",
			"과제를 하는 동안 실수가 발생했을 때, 나는 실수에 대해 철저히 분석하고 싶었다.",
			// page 6: 21 to 23
			"나는 " + this.topic + " 학습하기를 또 하고 싶다.",
			"나는 " + this.topic + " 학습하기가 즐거웠다.",
			"나는 " + this.topic + " 학습하기가 지루했었다."
		];

		vertical = this.questions.map(q => q.indexOf("<") !== -1);

		answers = [];

		constructor(private $scope, private $location, private $sce, private submit, private elementary) {
			$scope.vm = this;

			for (var i = 0; i < this.questions.length; i++) {
				this.questions[i] = $sce.trustAsHtml(this.questions[i]);
			}
		}

		prev() {
			if (this.page > 0) {
				this.page--;
			}

			console.log("page : " + this.page);
		}

		next() {
			if (this.page > 0) {
				for (var i = this.page * 4 - 4; i < this.page * 4 && i < this.questions.length; i++) {
					if (!this.answers[i]) {
						alert((i+1) + "번 문항에 응답해주세요");
						return;
					}
				}
			}

			// flip page or finish
			if (this.page < 6) {
				this.page++;
			} else {
				this.submit({
					survey: this.answers.map(x => parseInt(x)),
					finished: Date.now()
				});

				this.$location.path("/finished");
			}

			console.log("page : " + this.page);
		}

		save() {
			var page = this.page;

		}
	}
}
