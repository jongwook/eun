module Eun {
	export enum ProblemType {
		SINGLE,
		MULTIPLE,
		IMAGE,
		BLANK
	}

	var SINGLE = ProblemType.SINGLE;
	var MULTIPLE = ProblemType.MULTIPLE;
	var IMAGE = ProblemType.IMAGE;
	var BLANK = ProblemType.BLANK;

	export interface Problem {
		type: ProblemType;           // "simple", "image", "blank"
		question: string;       // the question string
		image?: string;         // path to image if applicable
		letters?: string[][];   // letter table if applicable
		options: string[];      // the 4 options
		answer: number[];         // the answer ( of 1, 2, 3, 4 )
	}

	var FIRST = 0;
	var SECOND = 1;
	var CORRECT = 2;
	var INCORRECT = 3;
	var STATS = 4;

	export class QuizController {
		// 0 ~ 19 : questions
		stage: number = 0;

		// 0: first question page - possibly image or options
		// 1: second question page - options
		// 2: correct
		// 3: incorrect
		// 4: stats
		page: number = 0;

		timer: number;
		hide: number = 0;

		score: number = 0;
		skips: number = 4;

		problems: Problem[] = [
			{
				type: SINGLE,
				question: "우리 속담 <em>'강 건너 불구경 한다'</em>와 같은 뜻을 가진 고사성어는?",
				options: ["함흥차사(咸興差使)", "정중지와(井中之蛙)", "수수방관(袖手傍觀)", "수주대토(守株待兎)"],
				answer: [3]
			},
			{
				type: IMAGE,
				question: "빈칸에 들어갈 고사성어는?",
				image: "images/q2.jpg",
				options: ["함흥차사(咸興差使)", "수주대토(守株待兎)", "난형난제(難兄難弟)", "교언영색(巧言令色)"],
				answer: [3]
			},
			{
				type: BLANK,
				question: "빈칸에 들어갈 한자는?",
				letters: [
					["顙", "", "碧", "海"],
					["뽕나무 상", "밭 전", "푸를 벽", "바다 해"]
				],
				options: ["肉", "山", "田", "上"],
				answer: [3]
			},
			{
				type: IMAGE,
				question: "빈칸에 들어갈 고사성어는?",
				image: "images/q4.jpg",
				options: ["난형난제(難兄難弟)", "우공이산(愚公移山)", "교언영색(巧言令色)", "기인지우{杞人之憂)"],
				answer: [3]
			},
			{
				type: SINGLE,
				question: "우리 속담 <em>'우물 안 개구리'</em>와 같은 뜻을 가진 고사성어는?",
				options: ["함흥차사(咸興差使)", "정중지와(井中之蛙)", "기인지우(杞人之憂)", "우공이산(愚公移山)"],
				answer: [2]
			},
			{
				type: IMAGE,
				question: "그림을 설명하는 고사성어는?",
				image: "images/q6.jpg",
				options: ["함흥차사(咸興差使)", "양두구육(羊頭狗肉)", "기인지우(杞人之憂)", "교언영색(巧言令色)"],
				answer: [3]
			},
			{
				type: BLANK,
				question: "빈칸에 들어갈 한자는?",
				letters: [
					["沙", "", "樓", "閣"],
					["모래 사", "위 상", "다락 누", "집 각"]
				],
				options: ["中", "上", "海", "伯"],
				answer: [2]
			},
			{
				type: BLANK,
				question: "빈칸에 들어갈 한자는?",
				letters: [
					["愚", "公", "移", ""],
					["어리석을 우", "귀 공", "옮길 이", "뫼 산"]
				],
				options: ["差", "上", "仲", "山"],
				answer: [4]
			},
			{
				type: MULTIPLE,
				question: "<em>번듯하고 그럴듯한 것모습이나 말로 남을 현혹할 때</em>를 뜻하는 고사성어를 <em>모두</em> 고르시오",
				options: ["교언영색(巧言令色)", "양두구육(羊頭狗肉)", "백중지세(伯仲之勢)", "우공이산(愚公移山)"],
				answer: [1]
			},
			{
				type: IMAGE,
				question: "빈칸에 들어갈 고사성어는?",
				image: "images/q10.jpg",
				options: ["백중지세(伯仲之勢)", "양두구육(羊頭狗肉)", "교언영색(巧言令色)", "상전벽해(桑田碧海)"],
				answer: [1]
			},

			{
				type: IMAGE,
				question: "빈칸에 들어갈 고사성어는?",
				image: "images/q11.jpg",
				options: ["함흥차사(咸興差使)", "사상누각(沙上樓閣)", "상전벽해(桑田碧海)", "양두구육(羊頭狗肉)"],
				answer: [1]
			},
			{
				type: MULTIPLE,
				question: "수준이 서로 엇비슷한 사이를 나타내는 말로 <em>우열을 가릴 수 없다</em>를 뜻하는 고사성어를 <em>모두</em> 고르시오",
				options: ["난형난제(難兄難弟)", "함흥차사(咸興差使)", "백중지세(伯仲之勢)", "수주대토(守株待兎)"],
				answer: [1, 3]
			},
			{
				type: SINGLE,
				question: "우리 속담 <em>'좋은 약은 입에 쓰고 나쁜 약은 입에 달다'</em>와  비슷한 뜻을 가진 고사성어는?",
				options: ["수주대토(守株待兎)", "사상누각(沙上樓閣)", "난형난제(難兄難弟)", "교언영색(巧言令色)"],
				answer: [4]
			},
			{
				type: SINGLE,
				question: "<em>'뽕나무 밭이 푸른 바다로 변했다'</em>는 뜻을 가진 고사성어는?",
				options: ["난형난제(難兄難弟)", "우공이산(愚公移山)", "상전벽해(桑田碧海)", "수주대토(守株待兎)"],
				answer: [3]
			},
			{
				type: IMAGE,
				question: "빈칸에 들어갈 고사성어는?",
				image: "images/q15.jpg",
				options: ["함흥차사(咸興差使)", "양두구육(羊頭狗肉)", "기인지우(杞人之憂)", "교언영색(巧言令色)"],
				answer: [2]
			},

			{
				type: SINGLE,
				question: "<em>누군가 어딘가 가서 돌아오지 않을 때나 연락이 오지 않을 때 답답하고 걱정되는 마음</em>을 뜻하는 고사성어를 고르시오.",
				options: ["우공이산(愚公移山)", "사상누각(沙上樓閣)", "함흥차사(咸興差使)", "난형난제(難兄難弟)"],
				answer: [3]
			},
			{
				type: BLANK,
				question: "빈칸에 들어갈 한자는?",
				letters: [
					["杞", "", "之", "之"],
					["기나라 기", "사람 인", "어조사 지", "걱정 우"]
				],
				options: ["之", "上", "山", "人"],
				answer: [4]
			},
			{
				type: IMAGE,
				question: "그림을 설명하고 있는 고사성어는?",
				image: "images/q18.jpg",
				options: ["백중지세(伯仲之勢)", "수수방관(袖手傍觀)", "수주대토(守株待兎)", "난형난제(難兄難弟)"],
				answer: [3]
			},
			{
				type: IMAGE,
				question: "그림을 설명하는 고사성어는?",
				image: "images/q19.jpg",
				options: ["기인지우(杞人之憂)", "수수방관(袖手傍觀)", "수주대토(守株待兎)", "사상누각(沙上樓閣)"],
				answer: [2]
			},
			{
				type: SINGLE,
				question: "<em>끊임없이 노력하면 반드시 이루어짐</em>을 뜻하는 고사성어를 고르시오.",
				options: ["상전벽해(桑田碧海)", "교언영색(巧言令色)", "우공이산(愚公移山)", "기인지우(杞人之憂)"],
				answer: [3]
			}
		];

		answers: boolean[][] = this.problems.map(() => [false, false, false, false]);

		constructor(private $scope, private $location, private $sce, public feedback) {
			$scope.vm = this;

			for (var i = 0; i < this.problems.length; i++) {
				var problem = this.problems[i];

				if (problem.type === BLANK) {
					for (var j = 0; j < problem.letters[1].length; j++) {
						problem.letters[1][j] = $sce.trustAsHtml(problem.letters[1][j].replace(/(.)$/,"&nbsp;&nbsp;<span style=\"font-size:24pt;color:#FF007F\">$1</span>"));
					}
				}

				problem.question = $sce.trustAsHtml(problem.question);
			}

			var self = this;
			this.timer = setInterval(() => {
				if (self.hide < 100) {
					$scope.$apply(() => self.hide++);
				} else {
					clearInterval(self.timer);
					console.log("TIMEOUT!!");
					$scope.$apply(() => {
						while (self.stage < self.problems.length) {
							self.stage++;
							self.score -= 2;
						}
						self.page = STATS;
					})
				}
			}, 6000);   // timeout 10 min
		}

		answerCount(): number {
			var result: number = 0;

			for (var i = 0; i < this.answers[this.stage].length; i++) {
				if (this.answers[this.stage][i] === true) {
					result++;
				}
			}

			return result;
		}

		solutionCorrect(): boolean {
			if (this.answerCount() !== this.problems[this.stage].answer.length) {
				return false;
			}

			var answer = this.problems[this.stage].answer;

			for (var i = 0; i < answer.length; i++) {
				if (this.answers[this.stage][answer[i]-1] !== true) {
					return false;
				}
			}

			return true;
		}

		clicked(n: number): void {
			if (this.problems[this.stage].type !== MULTIPLE) {
				this.answers[this.stage] = [false, false, false, false];
				this.answers[this.stage][n] = true;
			}
		}

		// supports only when going back to the first problem page from the second page
		prev() {
			if (this.page == 1) {
				this.page = 0;
			}
		}

		skip() {
			this.skips--;
			this.stage++;
			if (this.stage % 5 === 0) {
				this.page = STATS;
			} else {
				this.page = FIRST;
			}
		}

		next() {
			var checkAnswer = () => {
				if (this.answerCount() == 0) {
					alert("정답을 입력해주세요.");
				} else if (this.solutionCorrect()) {
					this.page = CORRECT;
					this.score += 5;
				} else {
					this.page = INCORRECT;
					this.score -= 2;
				}
			};

			switch (this.page) {
				case FIRST:
					switch (this.problems[this.stage].type) {
						case SINGLE:
						case MULTIPLE:
						case BLANK:
							checkAnswer();
							break;
						case IMAGE:
							this.page = SECOND;
					}
					break;
				case SECOND:
					switch (this.problems[this.stage].type) {
						case SINGLE:
						case MULTIPLE:
						case BLANK:
							console.error("Should not reach here");
							break;
						case IMAGE:
							checkAnswer();
							break;
					}
					break;
				case CORRECT:
				case INCORRECT:
					this.stage++;
					if (this.stage % 5 === 0) {
						this.page = STATS;
					} else {
						this.page = FIRST;
					}
					break;
				case STATS:
					this.page = FIRST;
					break;
			}

			if (this.page !== STATS && this.stage >= this.problems.length) {
				this.$location.path("/survey");
			}
		}

	}
}