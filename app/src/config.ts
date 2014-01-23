
module Eun {
	export function alert(message: string) {
		$("#alert-message").text(message);
		$("#alert-modal").modal();
	}

	eun.config(($routeProvider) => {
		$routeProvider
			.when("/", {
				title: "서울대학교 인지학습연구회",
				template: s00.starter.html,
				controller: "Eun.StarterController"
			})
			.when("/welcome", {
				title: "환영합니다",
				template: s01.welcome.html,
				controller: "Eun.WelcomeController"
			})
			.when("/form", {
				title: "자기소개",
				template: s02.form.html,
				controller: "Eun.FormController"
			})
			.when("/poll", {
				title: "설문조사",
				template: s03.poll.html,
				controller: "Eun.PollController"
			})
			.when("/prep", {
				title: "학습안내",
				template: s04.prep.html,
				controller: "Eun.PrepController"
			})
			.when("/study", {
				title: "학습",
				template: s05.study.html,
				controller: "Eun.StudyController"
			})
			.when("/standby", {
				title: "준비",
				template: s06.standby.html,
				controller: "Eun.StandbyController"
			})
			.when("/quiz", {
				title: "퀴즈",
				template: s07.quiz.html,
				controller: "Eun.QuizController"
			})
			.when("/survey", {
				titie: "퀴즈",
				template: s08.survey.html,
				controller: "Eun.SurveyController"
			})
			.when("/finished", {
				title: "수고하셨습니다",
				template: s09.finished.html,
				controller: "Eun.FinishedController"
			})
			.otherwise({
				redirectTo: "/"
			});
	});

}