
module Eun {
	export function alert(message: string) {
		$("#alert-message").text(message);
		$("#alert-modal").modal();
	}

	eun.factory("type", () => {
		var initial = location.hostname.substr(0, 1);
		switch (initial) {
			case '1': return 1;
			case '2': return 2;
			case '3': return 3;
			case '4': return 4;
			case '5': return 5;
			case '6': return 6;
			case '7': return 7;
			case '8': return 8;
			default: return 1;
		}
	});

	eun.factory("feedback", type => {
		switch (type) {
			case 1: case 2: case 5: case 6: return "date";
			case 3: case 4: case 7: case 8: return "go";
			default: throw new Error("unknown type");
		}
	})

	eun.factory("group", type => {
		switch (type) {
			case 1: case 2: case 3: case 4: return false;
			case 5: case 6: case 7: case 8: return true;
			default: throw new Error("unknown type");
		}
	});

	eun.factory("study", type => {
		switch (type) {
			case 1: case 3: case 5: case 7: return true;
			case 2: case 4: case 6: case 8: return false;
			default: throw new Error("unknown type");
		}
	});

	export var uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => (c == 'x' ? (Math.random()*16|0) : ((Math.random()*16|0)&0x3|0x8)).toString(16));

	eun.factory("id", () => {
		var id = $.cookie("uuid");
		if (!id) {
			id = uuid();
			$.cookie("uuid", id);
		}
		console.log("UUID : " + id);
		return id;
	});

	eun.factory('submit', id => {
		return (data: any) => {
			data = JSON.stringify(data);
			$.ajax({
				method: "POST",
				url: "/submit/" + id,
				data: data,
				contentType: 'application/json; charset=utf-8'
			}).done(() => {
				console.log("submitted: " + data);
			}).fail((xhr, status, error) => {
				alert(error);
			});
		};
	});

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