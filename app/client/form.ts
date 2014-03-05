module Eun {

	export class FormController {
		school = "";        // 학교
		year = "";          // 학년
		classroom = "";     // 반
		id = "";            // 번호
		gender = "";        // 성별
		language = "";      // 언어
		other = "";         // 기타언어

		constructor(private $scope, private $location, private submit, private elementary) {
			$scope.vm = this;
		}

		prev(): void {
			this.$location.path("/");
		}

		next(): void {
			if (!this.school || !this.year || !this.classroom || !this.id) {
                alert((this.elementary ? "초등학교" : "중학교") + ", 학년, 반, 번호를 입력하세요");
				return;
			}
			if (!this.gender) {
				alert("성별을 입력하세요");
				return;
			}
			if (!this.language) {
				alert("집에서 주로 사용하는 언어를 입력하세요");
				return;
			}
			if (this.language == "other" && !this.other) {
				alert("집에서 주로 사용하는 언어가 무엇인지 괄호 안에 입력해 주세요");
				return;
			}

			this.submit({
				school: this.school,
				year: this.year,
				classroom: this.classroom,
				id: this.id,
				gender: this.gender,
				language: this.language,
				other: this.other
			});

			this.$location.path("/poll").replace();
		}
	}
}
