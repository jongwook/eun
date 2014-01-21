var WebFont: any;

WebFont.load({
	custom: {
		families: ['NanumBarunGothic', 'NanumBarunGothicBold'],
		urls: ['/css/fonts.css']
	},
	loading: () => $("#loading").text("Loading..."),
	active: () => $("#loading").remove()
});
