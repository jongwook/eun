module Eun {

	export class FormController {
		school = "";        // 학교
		year = "";          // 학년
		classroom = "";	    // 반
		id = "";            // 번호
		gender = "";        // 성별
		language = "";      // 언어
		other = "";	        // 기타언어

		constructor(private $scope, private $location) {
			$scope.vm = this;
		}

		prev() {
			this.$location.path("/");
		}

		next() {
			if (!this.school || !this.year || !this.classroom || !this.id) {
				alert("중학교, 학년, 반, 번호를 입력하세요");
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

			this.$location.path("/poll");
		}
	}
}
