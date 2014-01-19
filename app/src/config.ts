
module Eun {
	eun.config(($routeProvider) => {
		$routeProvider
			.when("/", {
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
			.otherwise({
				redirectTo: "/"
			});
	});

}