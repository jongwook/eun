module Eun {
	export enum ProblemType {
		SINGLE,
		MULTIPLE,
		IMAGE,
		BLANK,
		SENTENCE,
		PARAGRAPH
	}

	var SINGLE = ProblemType.SINGLE;
	var MULTIPLE = ProblemType.MULTIPLE;
	var IMAGE = ProblemType.IMAGE;
	var BLANK = ProblemType.BLANK;
	var SENTENCE = ProblemType.SENTENCE;
	var PARAGRAPH = ProblemType.PARAGRAPH;

	export interface Problem {
		type: ProblemType;           // "simple", "image", "blank"
		question: string;       // the question string
		image?: string;         // path to image if applicable
		letters?: string[][];   // letter table if applicable
		options: string[];      // the 4 options
		answer: number[];         // the answer ( of 1, 2, 3, 4 )
		text?: string;
	}

	var FIRST = 0;
	var SECOND = 1;
	var CORRECT = 2;
	var INCORRECT = 3;
	var STATS = 4;
	var GROUP = 5;
	var GROUPSTAT = 6;

	export class QuizController {
		// 0 ~ 19 : questions
		stage: number = 0;

		// 0: first question page - possibly image or options
		// 1: second question page - options
		// 2: correct
		// 3: incorrect
		// 4: stats
		// 5: group score input
		// 6: group score stats
		page: number = 0;

		timer: any;
		hide: number = 0;

		score: number = 0;
		skips: number = 5;

		score1: string;
		score2: string;
		groupscore: any = "";

		problems: Problem[] = this.elementary ? [
			{
				type: SINGLE,
				question: "<em>자신이 잘못을 하고도 도리어 남에게 화를 낸다</em>는 뜻을 가진 속담은?",
				options: [
					"감나무 밑에 누워 연시 떨어지기를 바란다",
					"마파람에 게눈 감추듯",
					"방귀 뀌고 성낸다",
					"한강에 돌 던지기"
				],
				answer: [3]
			},
			{
				type: IMAGE,
				question: "빈칸에 들어갈 알맞은 속담은?",
				image: "images/e02.jpg",
				options: [
					"구슬이 서 말이라도 꿰어야 보배	",
					"돌다리도 두드려보고 건너라",
					"소 잃고 외양간 고친다",
					"우물 안 개구리"
				],
				answer: [1]
			},
			{
				type: SINGLE,
				question: "<em>아주 무식하다</em>는 뜻을 가진 속담은?",
				options: [
					"소 잃고 외양간 고친다",
					"밑 빠진 독에 물 붓기",
					"낫 놓고 기역 자도 모른다",
					"우물 안 개구리"
				],
				answer: [3]
			},
			{
				type: IMAGE,
				question: "엄마가 세상을 떠난 후에야 엄마가 비에 떠내려갈까 슬피 우는 개구리들처럼 <em>이미 일이 잘못된 뒤에는 후회밖에 할 수 없다</em>는 뜻을 가진 속담은?",
				image: "images/e04.jpg",
				options: [
					"한강에 돌 던지기",
					"아는 길도 물어가라",
					"우물 안 개구리",
					"소 잃고 외양간 고친다"
				],
				answer: [4]
			},
			{
				type: PARAGRAPH,
				question: "아래의 상황에 알맞은 속담은?",
				text: "수원이가 기분 좋게 책을 읽고 있는데 갑자기 이상한 냄새가 방 안에 퍼졌습니다. 순간 수원이는 함께 있던 오빠를 쳐다보며 “오빠, 지금 뿡 했지?” 하면서 코를 감쌌습니다. 수원이의 말에 기분이 상한 오빠는 “그래 내가 했다. 그래서 뭐?” 하고 버럭 화를 냈습니다. 갑작스런 오빠의 반응에 놀란 수원이는 황당해 하며 코를 막고 방에서 나왔습니다.",
				options: [
					"소 잃고 외양간 고친다",
					"구슬이 서 말이라도 꿰어야 보배",
					"방귀 뀌고 성낸다",
					"한강에 돌 던지기"
				],
				answer: [3]
			},

			{
				type: IMAGE,
				question: "그림을 설명하는 알맞은 속담은?",
				image: "images/e06.jpg",
				options: [
					"감나무 밑에 누워 연시 떨어지기를 바란다",
					"낫 놓고 기역자도 모른다",
					"부뚜막의 소금도 집어 넣어야 짜다",
					"아는 길도 물어서 가라"
				],
				answer: [2]
			},
			{
				type: SENTENCE,
				question: "빈칸에 들어갈 알맞은 속담은?",
				text: "어릴적 달콤한 팥죽 한 그릇을 <span class='blank'></span> 후딱 먹어 치웠던 기억만 있다.",
				options: [
					"마파람에 게눈 감추듯	",
					"방귀뀌고 성내는",
					"밑 빠진 독에 물 붓기",
					"돌다리도 두드려보고 건너라"
				],
				answer: [1]
			},
			{
				type: PARAGRAPH,
				question: "빈칸에 들어갈 알맞은 속담은?",
				text: "명섭:  오후에 눈이 온대요. 아빠 회사에 우산을 가져다 드려야겠어요.<br>엄마:  좋은 생각이다! 약도를 그려줄게 잘 보고 찾아가렴.<br>명섭:  필요 없어요. 어딘지 아는걸요!<br>얼마 후, 명섭이 우산을 들고 다시 집으로 돌아왔습니다.<br>엄마: 왜 다시 돌아왔니?<br>	명섭: 건물이 다 비슷해서 못 찾겠어요…☹<br>엄마: 그러게.. <span class='blank'></span> 고 했거늘..",
				options: [
					"한강에 돌 던지기",
					"방귀뀌고 성낸다",
					"아는 길도 물어서 가라",
					"감나무 밑에 누워 연시 떨어지기를 바란다"
				],
				answer: [3]
			},
			{
				type: SINGLE,
				question: "<em>아무런 노력도 하지 않고서 좋은 결과만 바란다</em>는 뜻을 가진 속담은?",
				options: [
					"구슬이 서 말이라도 꿰어야 보배	",
					"낫 놓고 기역 자도 모른다",
					"마파람에 게눈 감추듯",
					"감나무 밑에 누워 연시 떨어지기를 바란다"
				],
				answer: [4]
			},
			{
				type: IMAGE,
				question: "그림과 비슷한 뜻을 가진 속담은?",
				image: "images/e10.jpg",
				options: [
					"돌다리도 두드려보고 건너라",
					"부뚜막의 소금도 집어 넣어야 짜다",
					"우물 안 개구리",
					"마파람에 게눈 감추듯"
				],
				answer: [2]
			},

			{
				type: SENTENCE,
				question: "빈칸에 들어갈 알맞은 단어는?",
				text: "<span class='blank'></span> 에 돌 던지기",
				options: [
					"한탄강",
					"북한강",
					"한강",
					"인제가"
				],
				answer: [3]
			},
			{
				type: SINGLE,
				question: "<em>“아는 길도 물어서 가라”</em>와 뜻이 비슷한 속담을 고르시오",
				options: [
					"돌다리도 두드려보고 건너라",
					"우물 안 개구리",
					"소 잃고 외양간 고친다",
					"감나무 밑에 누워 연시 떨어지기를 바란다"
				],
				answer: [1]
			},
			{
				type: IMAGE,
				question: "그림을 설명하는 알맞은 속담은?",
				image: "images/e13.jpg",
				options: [
					"마파람에 게눈 감추듯",
					"방귀 뀐 놈이 성낸다",
					"밑 빠진 독에 물 붓기",
					"부뚜막의 소금도 집어 넣어야 짜다"
				],
				answer: [3]
			},
			{
				type: SINGLE,
				question: "<em>보고 들은 게 없어서 세상을 잘 모르는 사람</em>을 가리키는 속담은?",
				options: [
					"감나무 밑에 누워 연시 떨어지기를 바란다",
					"마파람에 게눈 감추듯",
					"낫 놓고 기역 자도 모른다",
					"우물 안 개구리"
				],
				answer: [4]
			},
			{
				type: IMAGE,
				question: "그림을 설명하는 알맞은 속담은?",
				image: "images/e15.jpg",
				options: [
					"마파람에 게눈 감추듯",
					"아는 길도 물어서 가라",
					"방귀뀌고 성낸다",
					"우물 안 개구리"
				],
				answer: [2]
			},

			{
				type: SINGLE,
				question: "<em>“밑 빠진 독에 물 붓기”</em>와 뜻이 비슷한 속담을 고르시오.",
				options: [
					"감나무 밑에 누워 연시 떨어지기를 바란다",
					"우물 안 개구리",
					"한강에 돌 던지기",
					"아는 길도 물어서 가라"
				],
				answer: [3]
			},
			{
				type: SENTENCE,
				question: "빈칸에 들어갈 알맞은 단어는?",
				text: "<span class='blank'></span> 에 게눈 감추듯",
				options: [
					"감나무",
					"파바람",
					"마파람",
					"마지람"
				],
				answer: [3]
			},
			{
				type: IMAGE,
				question: "그림을 설명하는 알맞은 속담은?",
				image: "images/e18.jpg",
				options: [
					"우물 안 개구리",
					"밑 빠진 독에 물 붓기",
					"낫 놓고 기역 자도 모른다",
					"구슬이 서 말이라도 꿰어야 보배"
				],
				answer: [1]
			},
			{
				type: SENTENCE,
				question: "빈칸에 들어갈 알맞은 속담은?",
				text: "도둑맞은 다음에 열쇠를 고쳐봤자 무슨 소용이야. <span class='blank'></span> 격이지.",
				options: [
					"소 잃고 외양간 고치는",
					"우물 안 개구리 같은",
					"마파람에 게눈 감추는",
					"방귀뀌고 성내는"
				],
				answer: [1]
			},
			{
				type: IMAGE,
				question: "그림을 설명하는 알맞은 속담은?",
				image: "images/e20.jpg",
				options: [
					"아는 길도 물어서 가라",
					"돌다리도 두드려보고 건너라",
					"밑 빠진 독에 물 붓기",
					"감나무 밑에 누워 연시 떨어지기를 바란다"
				],
				answer: [2]
			}
		] : [
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
				options: ["난형난제(難兄難弟)", "우공이산(愚公移山)", "교언영색(巧言令色)", "기인지우(杞人之憂)"],
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
		results: string[] = [];
		timing: number[] = [];

		constructor(private $scope, private $location, private $sce, public feedback, public group, private submit, private elementary) {
			$scope.vm = this;

			for (var i = 0; i < this.problems.length; i++) {
				var problem = this.problems[i];

				if (problem.type === BLANK) {
					for (var j = 0; j < problem.letters[1].length; j++) {
						problem.letters[1][j] = $sce.trustAsHtml(problem.letters[1][j].replace(/(.)$/,"&nbsp;&nbsp;<span style=\"font-size:24pt;color:#FF007F\">$1</span>"));
					}
				}

				if (problem.type === SENTENCE || problem.type === PARAGRAPH) {
					problem.text = $sce.trustAsHtml(problem.text);
				}

				problem.question = $sce.trustAsHtml(problem.question);
			}

			var self = this;

			var parse = (value: any) => parseInt(value);

			$scope.$watch("vm.score1 + vm.score2", () => {
				if (self.score1 || self.score2) {
					if (self.feedback === 'date') {
						self.groupscore = parse(self.score) + parse(self.score1 ? self.score1 : "0") + parse(self.score2 ? self.score2 : "0");
					} else {
						self.groupscore = (100 - parse(self.score)) + parse(self.score1 ? self.score1 : "0") + parse(self.score2 ? self.score2 : "0");
					}
				} else {
					self.groupscore = "";
				}
			});

			this.timer = setInterval(() => {
				if (self.hide < 100) {
					$scope.$apply(() => self.hide++);
				} else {
					if (self.timer) {
						clearInterval(self.timer);
						self.timer = null;
					}

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
			this.results[this.stage] = "S";
			this.timing[this.stage] = Date.now();

			this.skips--;
			this.stage++;

			if (this.stage % 5 === 0) {
				this.page = STATS;
			} else {
				this.page = FIRST;
			}
		}

		checkAnswer() {
			if (this.answerCount() == 0) {
				alert("정답을 입력해주세요.");
				return;
			} else if (this.solutionCorrect()) {
				this.page = CORRECT;
				this.score += 5;
				this.results[this.stage] = "O";
			} else {
				this.page = INCORRECT;
				this.score -= 2;
				this.results[this.stage] = "X";
			}
			this.timing[this.stage] = Date.now();
		}

		next() {
			switch (this.page) {
				case FIRST:
					switch (this.problems[this.stage].type) {
						case SINGLE:
						case MULTIPLE:
						case BLANK:
						case SENTENCE:
							this.checkAnswer();
							break;
						case IMAGE:
						case PARAGRAPH:
							this.page = SECOND;
					}
					break;
				case SECOND:
					switch (this.problems[this.stage].type) {
						case SINGLE:
						case MULTIPLE:
						case BLANK:
						case SENTENCE:
							console.error("Should not reach here");
							break;
						case IMAGE:
						case PARAGRAPH:
							this.checkAnswer();
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
					if (this.group && this.stage >= this.problems.length) {
						this.page = GROUP;
					} else {
						this.page = FIRST;
					}
					break;
				case GROUP:
					if (!this.score1 || !this.score2) {
						alert("팀원들의 점수를 입력해 주세요");
						return;
					}
					this.page = GROUPSTAT;
					break;
				case GROUPSTAT:
					this.page = FIRST;
					break;
			}

			console.log(this.page);

			if (this.stage >= this.problems.length && this.timer) {
				clearInterval(this.timer);
				this.timer = null;
			}

			if (this.page === FIRST && this.stage >= this.problems.length) {
				this.submit({
					answers: this.answers,
					results: this.results,
					timing: this.timing,
					score: this.score,
					score1: this.score1,
					score2: this.score2,
					groupscore: this.groupscore
				});
				this.$location.path("/survey").replace();
			}
		}

	}
}
