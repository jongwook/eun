
module Eun {
	export class SubmissionService {
		constructor(private id) {
			console.log("SubmissionService initialied : " + id);
		}

		submit(key:string, value: string) {

		}

		submitEvent(key: string, value: string) {
			var timestamp = Date.now();

			$.ajax({
				method: "POST",
				url: "http://edu.lyomi.net:8000/event/" + this.id

			}).done((data, status, xhr) => {
				console.log("submitted event: " + key + " = " + value);
			}).fail((xhr, status, error) => {
				alert(error);
			});
		}

	}
}