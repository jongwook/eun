module Eun {
	export class PollController {
		page = 0;   // 0 (intro) -> 1~10 pages (4 questions per page)

		topic = this.elementary ? "속담" : "고사성어";

		questions = [
			// page 1: 1 to 4
			"실수는 내 공부를 향상시키는 데 도움을 준다.",
			"실수는 내가 공부를 계속하는 데 유용한 정보를 제공해 준다.",
			"나의 실수는 내 공부를 발전시키는 데 도움을 준다.",
			"내 실수 덕분에 나는 공부에서 발전을 이룰 수 있었다.",
			// page 2: 5 to 8
			"공부를 잘 하고 싶다면, 실수하는 것을 두려워해서는 안된다.",
			"가만히 있는 것보다는 위험을 감수하더라도 실수를 하는 것이 낫다.",
			"공부를 잘 하기 위해서라면 나는 기꺼이 실수를 받아들이겠다.",
			"나는 아무것도 하지 않는 것보다는 실수하는 것을 더 선호한다.",
			// page 3: 9 to 12
			"나는 실수를 할 때마다 스트레스를 받는다.",
			"나는 실수를 할까봐 자주 두려워한다.",
			"나는 실수를 하면 당혹스럽다.",
			"공부할 때 실수를 하면 나는 감정을 통제하지 못하고 화가 난다.",
			// page 4: 13 to 16
			"공부를 하는 동안 나는 내가 무언가를 잘못하지는 않았는지 걱정한다.",
			"나는 실수를 한 후에 실수를 어떻게 하게 된 것인지에 대해 생각한다.",
			"나는 어떻게 하면 실수하는 것을 막을 수 있을까에 대해서 종종 생각한다.",
			"공부를 하는 동안 무언가 잘못되면, 나는 그것을 매우 신중하게 생각한다.",
			// page 5: 17 to 20
			"실수를 한 후, 나는 어떻게 실수를 고칠 수 있을까에 대해 오랫동안 신중히 고민한다.",
			"실수가 발생하면, 나는 실수에 대해 철저히 분석한다.",
			"우리 담임선생님께서는 나에게 따뜻하게 대해주신다.",
			"우리 담임선생님께서는 나를 존중해주신다.",
			// page 6: 21 to 25
			"우리 담임선생님께서는 나에게 관심을 보여주신다.",
			"우리 담임선생님께서는 나를 믿어주신다.",
			"우리 담임선생님께서는 나를 잘 도와주신다.",
			"우리 담임선생님은 신뢰할 만한 분이시다.",
			// page 7: 25 to 28
			"나는 우리 반 친구들에게 이해받고 있다고 느낀다.",
			"나는 우리 반 친구들이 가족같다고 느낀다.",
			"나는 활발하게 우리 반 활동에 참여한다.",
			"나는 우리 반 친구들로부터 사랑과 관심을 받는다고 느낀다.",
			// page 8: 29 to 32
			"나는 우리 반 친구들과 잘 지낸다.",
			"나는 우리 반 친구들을 정말 좋아한다.",
			"우리 반 친구들과 나는 평소에 서로 도움을 주고받는다.",
			"우리 반 친구들은 평소에 나와 같은 감정을 공유할 때가 많다.",
			// page 9: 33 to 36
			"나는 " + this.topic + " 학습프로그램에서 다루어지는 내용을 잘 이해할 자신이 있다.",
			"나는 " + this.topic + " 학습프로그램을 매우 잘 할 수 있다고 확신한다.",
			"나는 " + this.topic + " 학습프로그램에서 주어진 문제나 숙제를 성공적으로 해낼 수 있다고 확신한다.",
			"나는 " + this.topic + " 학습프로그램에서 좋은 성적을 받을 것이라고 생각한다.",
			// page 10: 37 to 40
			"나는 " + this.topic + " 학습프로그램에서 다루어지는 내용을 잘 배울 것이라고 생각한다.",
			"나는 " + this.topic + " 학습프로그램에서 다뤄지는 내용들이 중요하다고 생각한다.",
			"나는 " + this.topic + " 학습프로그램에서 배우는 내용들이 재미있다고 생각한다.",
			"나는 " + this.topic + " 학습프로그램에서 배우는 내용들이 유용하다고 생각한다."
		];

		answers = [];

		constructor(private $scope, private $location, private submit, private elementary) {
			$scope.vm = this;
		}

		prev() {
			if (this.page > 0) {
				this.page--;
			}

			console.log("page : " + this.page);
		}

		next() {
			if (this.page > 0) {
				for (var i = this.page * 4 - 4; i < this.page * 4; i++) {
					if (!this.answers[i]) {
						alert((i+1) + "번 문항에 응답해주세요");
						return;
					}

					// TODO: save results
				}
			}

			// flip page or finish
			if (this.page < 10) {
				this.page++;
			} else {
				for (var i = 0; i < this.questions.length; i++) {
					if (!this.answers[i]) {
						alert((i+1) + "번 문항에 응답해주세요");
						return;
					}

					// TODO: save results
				}

				this.submit({poll: this.answers.map(x => parseInt(x))});

				this.$location.path("/prep").replace();
			}

			console.log("page : " + this.page);
		}

		save() {
			var page = this.page;

		}
	}
}
