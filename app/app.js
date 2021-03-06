var el;
(function (el) {
    (function (s00) {
        (function (starter) {
            starter.html = '<div class="starter">	영남대학교 인지학습연구회<br>	속담 학습 프로그램<br>	<button style="font-size: 14pt; padding:6px;" class="next" ng-click="vm.next()">다음</button></div>';
        })(s00.starter || (s00.starter = {}));
        var starter = s00.starter;
    })(el.s00 || (el.s00 = {}));
    var s00 = el.s00;
})(el || (el = {}));
var el;
(function (el) {
    (function (s01) {
        (function (welcome) {
            welcome.html = '<div id="slide" class="large-text">	<p>		안녕하세요, 어린이 여러분! <br>		만나서 반갑습니다.	</p>	<p>		여러분은 지금부터 영남대학교 인지학습연구회에서 선정한<br>		<span class="pink">&quot;초등학생이 꼭 알아야 할 속담&quot;</span>을 학습하게 될 것입니다.	</p>	<p>		학습을 시작하기에 앞서<br>		40개의 문항에 대해 여러분의 솔직한 답변 부탁드립니다.	</p></div><div id="nav">	<button class="next" ng-click="vm.next()">다음</button></div>';
        })(s01.welcome || (s01.welcome = {}));
        var welcome = s01.welcome;
    })(el.s01 || (el.s01 = {}));
    var s01 = el.s01;
})(el || (el = {}));
var el;
(function (el) {
    (function (s02) {
        (function (form) {
            form.html = '<div id="slide" class="large-text" class="form">	<form>		<p>			먼저 자신에 대해서 적어봅시다.		</p>		<p>			1.			<input id="form-school" type="text" ng-model="vm.school" size="6"><label for="form-school">초등학교</label>&nbsp;&nbsp;&nbsp;			<input id="form-year" type="text" ng-model="vm.year" size="2"><label for="form-year">학년</label>&nbsp;&nbsp;&nbsp;			<input id="form-classroom" type="text" ng-model="vm.classroom" size="2"><label for="form-classroom">반</label>&nbsp;&nbsp;&nbsp;			<input id="form-id" type="text" ng-model="vm.id" size="2"><label for="form-id">번</label>		</p>		<p>			2. 성별&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-male" type="radio" ng-model="vm.gender" name="gender" value="male"> <label for="form-male">남</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-female" type="radio" ng-model="vm.gender" name="gender" value="female"> <label for="form-female">여</label>		</p>		<p>			3. 집에서 주로 사용하는 언어는 무엇입니까?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-korean" type="radio" ng-model="vm.language" name="language" value="korean"> <label for="form-korean">한국어</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-english" type="radio" ng-model="vm.language" name="language" value="english"> <label for="form-english">영어</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-other" type="radio" ng-model="vm.language" name="language" value="other"> <label for="form-other">기타</label>			(<input id="form-language" type="text" ng-model="vm.other" size="5">)		</p>	</form></div><div id="nav">	<button class="next" ng-click="vm.next()">다음</button></div>';
        })(s02.form || (s02.form = {}));
        var form = s02.form;
    })(el.s02 || (el.s02 = {}));
    var s02 = el.s02;
})(el || (el = {}));
var el;
(function (el) {
    (function (s03) {
        (function (poll) {
            poll.html = '<div id="slide" class="large-text poll">	<div ng-show="vm.page == 0">		다음 문항들은 여러분의 생각에 대한 질문입니다.<br>		주의깊게 읽으시고, 자신의 생각과 <span class="pink">얼마나 비슷한지 표시</span>해 주시면 됩니다.<br>		정답이 있거나 좋고 나쁜 답이 있는 것이 아니므로<br>		<span class="pink">&quot;내 생각과 가장 비슷하다&quot;고 생각하는 쪽</span>으로 편안하게 표시하십시오.<br>		<br>		<div class="round-box">		    1 ---------- 2 ---------- 3 ---------- 4 ---------- 5<br>	    전혀 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		조금 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		보통이다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		조금 비슷하다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		아주 비슷하다		</div>	</div>	<div ng-show="vm.page > 0">		<table style="width: 100%;">			<tr>				<th width="40px"></th>				<th></th>				<th width="50px">1<br>전혀<br>다르다</th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px">5<br>아주<br>비슷하다</th>			</tr>			<tr ng-repeat="n in [vm.page * 4 - 4, vm.page * 4 - 3, vm.page * 4 - 2, vm.page * 4 - 1]">				<td>{{n+1}}</td>				<td style="text-align: left;">{{vm.questions[n]}}</td>				<td ng-repeat="a in [1,2,3,4,5]">					<label for="survey-{{n}}-{{a}}">{{a}}</label><br>					<input id="survey-{{n}}-{{a}}" type="radio" name="question-{{n}}" value="{{a}}" ng-model="vm.answers[n]">				</td>			</tr>		</table>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-show="vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()">다음</button></div>';
        })(s03.poll || (s03.poll = {}));
        var poll = s03.poll;
    })(el.s03 || (el.s03 = {}));
    var s03 = el.s03;
})(el || (el = {}));
var el;
(function (el) {
    (function (s04) {
        (function (prep) {
            prep.html = '<div id="slide" class="large-text">	<div ng-if="vm.page === 0">		<p>			오늘 여러분이 학습할 속담은 초등학교 국어 교과서에서 많이 다루는 내용으로			<span class="pink">&quot;초등학생이 꼭 알아야 할 속담&quot;</span>로 선정되어 있으며			매년 전국적으로 실시되는 학업능력평가에서도 많은 비중을 차지하기 때문에 속담을 학습하는 것은 매우 중요합니다.		</p>		<p>			지난 일 년 동안 많은 초등학교에서 <span class="pink">&quot;초등학생이 꼭 알아야 할 속담&quot;</span>			학습프로그램으로 속담을 열심히 공부한 학생들은 진단평가에서 높은 성적을 거두는 것으로 보고되고 있습니다.		</p>	</div>	<div ng-if="vm.page === 1">		<p>			여러분들은 지금부터 <span class="pink">12분 동안</span><br>			<span class="green">&quot;초등학생이 꼭 알아야 할 속담&quot;</span> 학습프로그램을 통해<br>			속담을 학습하게 됩니다.		</p>		<p ng-if="vm.group">			<span class="big pink">4분</span> 동안 자신이 맡은 부분을 학습한 후<br>			<span class="big pink">8분</span> 동안 자신이 학습한 내용을 <span class="big pink">팀원들에게 설명해주어야</span> 합니다.		</p>		<p>			학습하고 난 후에는 스피드 퀴즈를 통해 자신의 이해를 점검하게 됩니다.		</p>	</div>	<div ng-if="vm.page === 2">		<p>			스피드퀴즈는 <span class="big pink">총 20문제</span>로 이루어져 있으며,<br>			10분 동안 화면에 주어지는 문제를 보고<br>			정답을 선택하면 됩니다.		</p>		<p>			<span class="blue">정답</span>을 선택할 경우 <span class="blue">5점</span>을 획득하지만,			<span class="red">오답</span>을 선택할 경우 <span class="red">2점</span>을 잃게 되고,<br>			<span class="green-box">SKIP</span> 을 누를 경우 <span class="green">0점</span>을 얻게 됩니다.<br>			단, <span class="green-box">SKIP</span>은 <span class="big green">총 5번</span>만 누를 수 있습니다.		</p>	</div>	<div ng-if="vm.page === 2.5">		<p>			스피드퀴즈는 각자 풀게 되지만<br>			팀원 모두의 점수를 합한 점수가 여러분의 점수가 됩니다.		</p>		<p>			세 명 점수의 합이 <span class="big pink">총 300점 만점</span>인 스피드퀴즈에서<br>			여러분의 팀이 높은 점수를 얻기 위해서는<br>			<span class="pink">팀원 모두가 높은 점수를 받는 것이 중요</span>합니다.		</p>	</div>	<div ng-if="vm.page === 3">		<p>			오늘 수업에서 여러분의 목표는		</p>		<p>			초등학생들이 <span class="big pink">꼭</span> 알아야 할 <span class="big pink">속담에 대해 배우고</span>		</p>		<p ng-if="vm.study">			<span class="big">과제를 수행하며</span> <span class="big pink">완전히 이해하는 것</span>입니다.		</p>		<p ng-if="!vm.study" class="big">			같은 과제를 수행하게 될		</p>		<p ng-if="!vm.study">			<span class="big pink">다른 친구들보다 높은 점수를 받는 것</span>입니다.		</p>	</div>	<div ng-if="vm.page === 4">		<p style="text-align: center;">			과제를 통한 새로운 학습방법으로 <span class="big pink">재미있게</span> 학습해 보세요.<br><br>			<button ng-click="vm.next()" style="width: 600px; height: 50px; background-color: #007FFF; color: white; font-size: 18pt; border: 0;">				속담 12개 학습하기			</button>		</p>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-if="vm.page > 0 && vm.page < 4">이전</button>	<button class="next" ng-click="vm.next()" ng-if="vm.page >= 0 && vm.page < 4">다음</button></div>';
        })(s04.prep || (s04.prep = {}));
        var prep = s04.prep;
    })(el.s04 || (el.s04 = {}));
    var s04 = el.s04;
})(el || (el = {}));
var el;
(function (el) {
    (function (s05) {
        (function (study) {
            study.html = '<div id="slide" class="study" ng-if="!vm.group">	<div ng-if="vm.page == 0">		<p class="large-text">			{{vm.stage + 1}}. {{vm.idioms[vm.stage].title}}		</p>		<div class="pink-box small-text" ng-bind-html="vm.idioms[vm.stage].story"></div>		<img class="study-image" ng-if="vm.idioms[vm.stage].image" src="{{vm.idioms[vm.stage].image}}">	</div>	<div ng-if="vm.page == 2" class="small-text">		<br>		<table class="header">			<tr>				<th ng-repeat="letter in vm.idioms[vm.stage].letters[0] track by $index">{{letter}}</th>			</tr>			<tr>				<td ng-repeat="letter in vm.idioms[vm.stage].letters[1] track by $index" ng-bind-html="letter"></td>			</tr>		</table>		<br>		<div ng-bind-html="vm.idioms[vm.stage].description[vm.page-2]"></div>		<img class="study-image" ng-if="vm.idioms[vm.stage].images[vm.page-2]" src="{{vm.idioms[vm.stage].images[vm.page-2]}}">	</div>	<div ng-if="vm.page > 2" class="small-text">		<p>&nbsp;</p>		<div ng-bind-html="vm.idioms[vm.stage].description[vm.page-2]"></div>	</div>	<div class="timer">		<div class="timer-marker" style="right: 32px; top: -5px;">12</div>		<div class="timer-marker" style="right: 32px; top: 18px;">6</div>		<div class="timer-marker" style="right: 32px; top: 41px;">0</div>		<div class="hider" style="background: white; width: 100%; height: {{vm.hide * 50 / 100}}px;"></div>	</div></div><div id="slide" class="study" ng-if="vm.group">	<p style="text-align: center;">		<span style="background: #007FFF;color: white;display: inline-block;text-align: center;width: 800px;height: 60px;font-size: 32pt;line-height: 60px;">속담 학습시간</span>	</p>	<p>&nbsp;</p>	<div class="big-timer">		<table>			<tr>				<td colspan="3">					<div style="background: #6bb1ff; width: {{100 - vm.hide}}%; height: 50px;"></div>				</td>			</tr>			<tr>				<td style="text-align: left; width: 33.33%;">0</td>				<td style="text-align: center; width: 33.33%;">6</td>				<td style="text-align: right; width: 33.33%;">12</td>			</tr>		</table>	</div></div><div id="nav" ng-if="!vm.group">	<button class="prev" ng-click="vm.prev()" ng-show="vm.stage > 0 || vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()" ng-show="vm.stage !== vm.idioms.length - 1 || vm.page !== vm.idioms[vm.stage].description.length + 1">다음</button></div>';
        })(s05.study || (s05.study = {}));
        var study = s05.study;
    })(el.s05 || (el.s05 = {}));
    var s05 = el.s05;
})(el || (el = {}));
var el;
(function (el) {
    (function (s06) {
        (function (standby) {
            standby.html = '<div id="slide" class="large-text">	<div ng-if="vm.page == 0">		<p style="text-align: center;">			열심히 공부했나요?<br><br>			이제부터 <button ng-click="vm.next()" style="width: 150px; height: 40px; background-color: #497cff; color: white; font-size: 18pt; border: 0;">S T A R T</button> 버튼을 누르시고<br>			<span class="big pink">10분</span> 동안 스피드 퀴즈를 풀어봅시다<br><br>			<button ng-click="vm.next()" style="width: 600px; height: 50px; background-color: #497cff; color: white; font-size: 18pt; border: 0;">				S T A R T			</button>		</p>	</div>	<div ng-if="vm.page == 1">		<h1 style="color:red;">			다시 한 번 기억하세요!		</h1>		<p ng-if="vm.study">			<br>			오늘 수업에서 여러분의 목표는<br>			초등학생들이 <span class="pink">꼭</span> 알아야 할 <span class="pink">속담에 대해 배우고</span><br><br>			<span class="big">과제를 수행하며 </span><span class="big pink">완전히 이해하는 것</span>입니다.		</p>		<p ng-if="!vm.study">			<br>			오늘 수업에서 여러분의 목표는<br>			초등학생들이 <span class="pink">꼭</span> 알아야 할 <span class="pink">속담에 대해 배우고</span><br><br>			<span class="big">같은 과제를 수행하게 될</span><br>			<span class="big pink">다른 친구들보다 높은 점수를 받는 것</span>입니다.		</p>	</div></div><div id="nav">	<button class="next" ng-click="vm.next()" ng-show="vm.page == 1">다음</button></div>';
        })(s06.standby || (s06.standby = {}));
        var standby = s06.standby;
    })(el.s06 || (el.s06 = {}));
    var s06 = el.s06;
})(el || (el = {}));
var el;
(function (el) {
    (function (s07) {
        (function (quiz) {
            quiz.html = '<div id="slide" class="quiz large-text">	<h1 ng-if="vm.page <= 1">문제 {{vm.stage + 1}}. <span ng-bind-html="vm.problems[vm.stage].question"></span></h1>	<div ng-if="vm.page <= 1">		<div ng-if="(vm.problems[vm.stage].type === 4 || vm.problems[vm.stage].type === 5) && vm.page === 0" ng-bind-html="vm.problems[vm.stage].text" class="pink-box small-text">		</div>		<div ng-if="(vm.problems[vm.stage].type !== 2 && vm.problems[vm.stage].type !== 5) ||		        vm.page === 1 && (vm.problems[vm.stage].type === 2 || vm.problems[vm.stage].type === 5)" style="padding-top: 20px;">			<table>				<tr>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][0]" ng-value="true" ng-click="vm.clicked(0)"						       id="quiz-option-1">						<label for="quiz-option-1">① {{vm.problems[vm.stage].options[0]}}</label>					</td>				</tr>				<tr>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][1]" ng-value="true" ng-click="vm.clicked(1)"						       id="quiz-option-2">						<label for="quiz-option-2">② {{vm.problems[vm.stage].options[1]}}</label>					</td>				</tr>				<tr>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][2]" ng-value="true" ng-click="vm.clicked(2)"						       id="quiz-option-3">						<label for="quiz-option-3">③ {{vm.problems[vm.stage].options[2]}}</label>					</td>				</tr>				<tr>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][3]" ng-value="true" ng-click="vm.clicked(3)"						       id="quiz-option-4">						<label for="quiz-option-4">④ {{vm.problems[vm.stage].options[3]}}</label>					</td>				</tr>			</table>		</div>		<div ng-if="vm.problems[vm.stage].type === 2 && vm.page === 0">			<img src="{{vm.problems[vm.stage].image}}" style="max-height: 450px; width: auto;">		</div>	</div>	<div ng-if="vm.page === 2" class="result">		<div style="position: absolute; left: 200px; top: 100px;">			<img src="images/correct1.jpg">		</div>		<div style="position: absolute; right: 150px; top: 200px;">			<img src="images/correct2.jpg">		</div>		<p style="line-height: 480px; font-size: 30pt;">맞았습니다</p>	</div>	<div ng-if="vm.page === 3" class="result">		<div style="position: absolute; left: 200px; top: 100px;">			<img src="images/wrong1.jpg">		</div>		<div style="position: absolute; right: 200px; top: 150px;">			<img src="images/wrong2.jpg">		</div>		<p style="line-height: 480px; font-size: 30pt;">틀렸습니다</p>	</div>	<div ng-if="vm.page === 4">		<p ng-if="vm.feedback === \'date\'">			지금까지 총 {{vm.problems.length}}문제 중 <span class="big blue">{{vm.stage}}문제</span>를 풀었으며			<br>			본 과제를 통해 얻을 수 있는<br>			최고 점수 100점 중	<span class="big blue">{{vm.score}}점</span>을 얻었습니다.		</p>		<p ng-if="vm.feedback === \'go\'">			지금까지 총 {{vm.problems.length}}문제 중 <span class="big red">{{vm.problems.length - vm.stage}}문제</span>가 남았으며			<br>			본 과제를 통해 얻을 수 있는<br>			최고 점수 100점 중	<span class="big red">{{100 - vm.score}}점</span> 모자랍니다.		</p>		<div class="score-bar">			<div ng-if="vm.feedback === \'date\'" class="score-gauge-date" style="left: {{(vm.score > 0) ? 33 : 0}}%; width:{{(vm.score > 0 ? vm.score : vm.score + 50)/3*2 }}%">{{vm.score}}점</div>			<div ng-if="vm.feedback === \'go\'" class="score-gauge-go" style="width:{{100 - (vm.score + 50)/150 * 100}}%">-{{100 - vm.score}}점</div>		</div>		<div style="font-size: 14pt; text-align: center; white-space: nowrap; padding-top: 10px; position: relative; left: -18px;">			-50　　　　　　　　　　　　　　　　　　0　　　　　　　　　　　　　　　　　　50　　　　　　　   　　　　　　　　　　　100		</div>	</div>	<div ng-if="vm.page === 5" class="group">		<p style="text-decoration: underline">본 과제를 통해 개인이 얻을 수 있는 <span class="big green">최고 100점</span> 중</p>		<p>			<table style="width:640px; margin: auto;">				<tr>					<td>당신은</td>					<td style="text-align: right;" ng-if="vm.feedback === \'date\'"><span class="blue">{{vm.score}} 점</span> 얻었습니다.</td>					<td style="text-align: right;" ng-if="vm.feedback === \'go\'"><span class="red">{{100 - vm.score}} 점</span> 모자랍니다.</td>				</tr>				<tr>					<td>팀원 1은</td>					<td style="text-align: right;" ng-if="vm.feedback === \'date\'"><input ng-model="vm.score1" size="3" maxlength="3" class="blue" style="height: 40px;font-size: 20pt;position: relative;top: 0;"><span class="blue"> 점</span> 얻었습니다.</td>					<td style="text-align: right;" ng-if="vm.feedback === \'go\'"><input ng-model="vm.score1" size="3" maxlength="3" class="red" style="height: 40px;font-size: 20pt;position: relative;top: 0;"><span class="red"> 점</span> 모자랍니다.</td>				</tr>				<tr>					<td>팀원 2는</td>					<td style="text-align: right;" ng-if="vm.feedback === \'date\'"><input ng-model="vm.score2" size="3" maxlength="3" class="blue" style="height: 40px;font-size: 20pt;position: relative;top: 0;"><span class="blue"> 점</span> 얻었습니다.</td>					<td style="text-align: right;" ng-if="vm.feedback === \'go\'"><input ng-model="vm.score2" size="3" maxlength="3" class="red" style="height: 40px;font-size: 20pt;position: relative;top: 0;"><span class="red"> 점</span> 모자랍니다.</td>				</tr>			</table>		</p>		<p style="text-decoration: underline">본 과제를 통해 팀이 얻을 수 있는 <span class="big green">최고 300점</span> 중</p>		<p>		<table style="width:640px; margin: auto;">			<tr>				<td>여러분 팀은</td>				<td style="text-align: right;" ng-if="vm.feedback === \'date\'">					<span class="blue">{{vm.groupscore}}점</span> 얻었습니다.				</td>				<td style="text-align: right;" ng-if="vm.feedback === \'go\'">					<span class="red">{{vm.groupscore}}점</span> 모자랍니다.				</td>			</tr>		</table>		</p>	</div>	<div ng-if="vm.page === 6">		<p ng-if="vm.feedback === \'date\'">			여러분 팀은			<br>			본 과제를 통해 얻을 수 있는<br>			최고 점수 300점 중	<span class="big blue">최종</span>적으로 <span class="big blue">{{vm.groupscore}}점</span>을 얻었습니다.		</p>		<p ng-if="vm.feedback === \'go\'">			여러분 팀은			<br>			본 과제를 통해 얻을 수 있는<br>			최고 점수 300점 중	<span class="big red">최종</span>적으로 <span class="big red">{{vm.groupscore}}점</span>이 모자랍니다.		</p>		<div class="score-bar">			<div ng-if="vm.feedback === \'date\'" class="score-gauge-date" style="width:{{(vm.groupscore > 0 ? vm.groupscore : 0)/3 }}%">{{vm.groupscore}}점</div>			<div ng-if="vm.feedback === \'go\'" class="score-gauge-go" style="width:{{vm.groupscore / 3}}%">-{{vm.groupscore}}점</div>		</div>		<div style="font-size: 14pt; text-align: center; white-space: nowrap; padding-top: 10px; position: relative; left: -18px;">			0　　　　　　　　　　　　　　　　　100　　　　　　　　　　　　　　　　　　200　　　　　　　  　　　　　　　　　　　300		</div>	</div>	<div class="timer">		<div class="timer-marker" style="right: 32px; top: -5px;">10</div>		<div class="timer-marker" style="right: 32px; top: 16px;">5</div>		<div class="timer-marker" style="right: 32px; top: 41px;">0</div>		<div class="hider" style="background: white; width: 100%; height: {{vm.hide * 50 / 100}}px;"></div>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-show="vm.page === 1">이전</button>	<button class="skip" ng-click="vm.skip()" ng-show="vm.page <= 1 && vm.skips > 0">SKIP ({{vm.skips}})</button>	<button class="next" ng-click="vm.next()">다음</button></div>';
        })(s07.quiz || (s07.quiz = {}));
        var quiz = s07.quiz;
    })(el.s07 || (el.s07 = {}));
    var s07 = el.s07;
})(el || (el = {}));
var el;
(function (el) {
    (function (s08) {
        (function (survey) {
            survey.html = '<div id="slide" class="large-text survey">	<div ng-show="vm.page == 0">		주어진 10분이 모두 지났습니다.<br>		문항을 주의 깊게 읽으시고 <span class="pink">느낀 그대로 솔직하게</span> 대답해주세요.<br>		<br>		<div class="round-box">			1 ---------- 2 ---------- 3 ---------- 4 ---------- 5<br>			전혀 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			조금 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			보통이다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			조금 비슷하다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			아주 비슷하다		</div>	</div>	<div ng-show="vm.page > 0">		<table style="width: 100%;">			<tr>				<th width="40px"></th>				<th></th>				<th width="50px">1<br>전혀<br>다르다</th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px">5<br>아주<br>비슷하다</th>			</tr>			<tr ng-repeat="n in [vm.page * 4 - 4, vm.page * 4 - 3, vm.page * 4 - 2, vm.page * 4 - 1]" ng-if="n < vm.questions.length">				<td>{{n+1}}</td>				<td ng-if="n === 0" colspan="6" style="text-align: left;">					이번 수업시간의 나에게 주어진 목표는					<div class="options">						<input type="radio" name="question-0" value="1" ng-model="vm.answers[0]" id="survey-0-0"><label for="survey-0-0">(1) 완전히 이해하는 것</label><br>						<input type="radio" name="question-0" value="2" ng-model="vm.answers[0]" id="survey-0-1"><label for="survey-0-1">(2) 남들보다 잘하는 것</label>					</div> 이었다.				</td>				<td ng-if="n !== 0" style="text-align: left;" ng-bind="vm.questions[n]"></td>				<td ng-if="n !== 0" ng-repeat="a in [1,2,3,4,5]">					<label for="survey-{{n}}-{{a}}">{{a}}</label><br>					<input id="survey-{{n}}-{{a}}" type="radio" name="question-{{n}}" value="{{a}}" ng-model="vm.answers[n]">				</td>			</tr>		</table>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-show="vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()">다음</button></div>';
        })(s08.survey || (s08.survey = {}));
        var survey = s08.survey;
    })(el.s08 || (el.s08 = {}));
    var s08 = el.s08;
})(el || (el = {}));
var el;
(function (el) {
    (function (s09) {
        (function (finished) {
            finished.html = '<div id="slide" class="large-text finished pink">	수고하셨습니다 ☺	<div style="position: absolute;bottom: 50px;font-size: 10pt;text-align: right;display: inline-block;line-height: normal;width: 100%;right: 0;   color: #555;">		본 연구는 영남대학교 생명윤리심의위원회의 승인을 받았습니다(IRB No. 2015-R-0063-002, 승인일:2016.1.8)	</div></div>';
        })(s09.finished || (s09.finished = {}));
        var finished = s09.finished;
    })(el.s09 || (el.s09 = {}));
    var s09 = el.s09;
})(el || (el = {}));
var mid;
(function (mid) {
    (function (s00) {
        (function (starter) {
            starter.html = '<div class="starter">	영남대학교 인지학습연구회<br>	고사성어 프로그램<br>	<button style="font-size: 14pt; padding:6px;" class="next" ng-click="vm.next()">다음</button></div>';
        })(s00.starter || (s00.starter = {}));
        var starter = s00.starter;
    })(mid.s00 || (mid.s00 = {}));
    var s00 = mid.s00;
})(mid || (mid = {}));
var mid;
(function (mid) {
    (function (s01) {
        (function (welcome) {
            welcome.html = '<div id="slide" class="large-text">	<p>		안녕하세요, 여러분! <br>		만나서 반갑습니다.	</p>	<p>		여러분은 지금부터 영남대학교 인지학습연구회에서 선정한<br>		<span class="pink">&quot;중학생이 꼭 알아야 할 고사성어&quot;</span>를 학습하게 될 것입니다.	</p>	<p>		학습을 시작하기에 앞서<br>		40개의 문항에 대해 여러분의 솔직한 답변을 부탁드립니다.	</p></div><div id="nav">	<button class="next" ng-click="vm.next()">다음</button></div>';
        })(s01.welcome || (s01.welcome = {}));
        var welcome = s01.welcome;
    })(mid.s01 || (mid.s01 = {}));
    var s01 = mid.s01;
})(mid || (mid = {}));
var mid;
(function (mid) {
    (function (s02) {
        (function (form) {
            form.html = '<div id="slide" class="large-text" class="form">	<form>		<p>			먼저 자신에 대해서 적어봅시다.		</p>		<p>			1.			<input id="form-school" type="text" ng-model="vm.school" size="6"><label for="form-school">중학교</label>&nbsp;&nbsp;&nbsp;			<input id="form-year" type="text" ng-model="vm.year" size="2"><label for="form-year">학년</label>&nbsp;&nbsp;&nbsp;			<input id="form-classroom" type="text" ng-model="vm.classroom" size="2"><label for="form-classroom">반</label>&nbsp;&nbsp;&nbsp;			<input id="form-id" type="text" ng-model="vm.id" size="2"><label for="form-id">번</label>		</p>		<p>			2. 성별&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-male" type="radio" ng-model="vm.gender" name="gender" value="male"> <label for="form-male">남</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-female" type="radio" ng-model="vm.gender" name="gender" value="female"> <label for="form-female">여</label>		</p>		<p>			3. 집에서 주로 사용하는 언어는 무엇입니까?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-korean" type="radio" ng-model="vm.language" name="language" value="korean"> <label for="form-korean">한국어</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-english" type="radio" ng-model="vm.language" name="language" value="english"> <label for="form-english">영어</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-other" type="radio" ng-model="vm.language" name="language" value="other"> <label for="form-other">기타</label>			(<input id="form-language" type="text" ng-model="vm.other" size="5">)		</p>	</form></div><div id="nav">	<button class="next" ng-click="vm.next()">다음</button></div>';
        })(s02.form || (s02.form = {}));
        var form = s02.form;
    })(mid.s02 || (mid.s02 = {}));
    var s02 = mid.s02;
})(mid || (mid = {}));
var mid;
(function (mid) {
    (function (s03) {
        (function (poll) {
            poll.html = '<div id="slide" class="large-text poll">	<div ng-show="vm.page == 0">		다음 문항들은 여러분의 생각에 대한 질문입니다.<br>		주의깊게 읽으시고, 자신의 생각과 <span class="pink">얼마나 비슷한지 표시</span>해 주시면 됩니다.<br>		정답이 있거나 좋고 나쁜 답이 있는 것이 아니므로<br>		<span class="pink">&quot;내 생각과 가장 비슷하다&quot;고 생각하는 쪽</span>으로 편안하게 표시하십시오.<br>		<br>		<div class="round-box">		    1 ---------- 2 ---------- 3 ---------- 4 ---------- 5<br>	    전혀 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		조금 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		보통이다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		조금 비슷하다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		아주 비슷하다		</div>	</div>	<div ng-show="vm.page > 0">		<table style="width: 100%;">			<tr>				<th width="40px"></th>				<th></th>				<th width="50px">1<br>전혀<br>다르다</th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px">5<br>아주<br>비슷하다</th>			</tr>			<tr ng-repeat="n in [vm.page * 4 - 4, vm.page * 4 - 3, vm.page * 4 - 2, vm.page * 4 - 1]">				<td>{{n+1}}</td>				<td style="text-align: left;">{{vm.questions[n]}}</td>				<td ng-repeat="a in [1,2,3,4,5]">					<label for="survey-{{n}}-{{a}}">{{a}}</label><br>					<input id="survey-{{n}}-{{a}}" type="radio" name="question-{{n}}" value="{{a}}" ng-model="vm.answers[n]">				</td>			</tr>		</table>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-show="vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()">다음</button></div>';
        })(s03.poll || (s03.poll = {}));
        var poll = s03.poll;
    })(mid.s03 || (mid.s03 = {}));
    var s03 = mid.s03;
})(mid || (mid = {}));
var mid;
(function (mid) {
    (function (s04) {
        (function (prep) {
            prep.html = '<div id="slide" class="large-text">	<div ng-if="vm.page === 0">		<p>			오늘 여러분이 학습할 고사성어는 중학교 국어 및 한문 교과서에서 자주 다루는 수업 내용으로			<span class="pink">&quot;중학생이 꼭 알아야 할 고사성어&quot;</span>로 선정되어 있으며			전국적으로 실시되는 학업능력평가에서도 많은 비중을 차지하기 때문에 고사성어를 학습하는 것은 매우 중요합니다.		</p>		<p>			지난 일 년 동안 많은 중학교에서 <span class="pink">&quot;중학생이 꼭 알아야 할 고사성어&quot;</span>			학습프로그램으로 고사성어를 열심히 공부한 학생들은 진단평가에서 높은 성적을 거두는 것으로 보고되고 있습니다.		</p>	</div>	<div ng-if="vm.page === 1">		<p>			여러분들은 지금부터 <span class="pink">12분 동안</span><br>			<span class="green">&quot;중학생이 꼭 알아야 할 고사성어&quot;</span> 학습프로그램을 통해<br>			<span class="pink">12개의</span> 고사성어를 학습하게 됩니다.		</p>		<p ng-if="vm.group">			<span class="big pink">4분</span> 동안 자신이 맡은 부분을 학습한 후<br>			<span class="big pink">8분</span> 동안 자신이 학습한 내용을 <span class="big pink">팀원들에게 설명해주어야</span> 합니다.		</p>		<p>			학습하고 난 후에는 스피드 퀴즈를 통해 자신의 이해를 점검하게 됩니다.		</p>	</div>	<div ng-if="vm.page === 2">		<p>			스피드퀴즈는 <span class="big pink">총 20문제</span>로 이루어져 있으며,<br>			10분 동안 화면에 주어지는 문제를 보고<br>			정답을 선택하면 됩니다.		</p>		<p>			<span class="blue">정답</span>을 선택할 경우 <span class="blue">5점</span>을 획득하지만,			<span class="red">오답</span>을 선택할 경우 <span class="red">2점</span>을 잃게 되고,<br>			<span class="green-box">SKIP</span> 을 누를 경우 <span class="green">0점</span>을 얻게 됩니다.<br>			단, <span class="green-box">SKIP</span>은 <span class="big green">총 5번</span>만 누를 수 있습니다.		</p>	</div>	<div ng-if="vm.page === 2.5">		<p>			스피드퀴즈는 각자 풀게 되지만<br>			팀원 모두의 점수를 합한 점수가 여러분의 점수가 됩니다.		</p>		<p>			세 명 점수의 합이 <span class="big pink">총 300점 만점</span>인 스피드퀴즈에서<br>			여러분의 팀이 높은 점수를 얻기 위해서는<br>			<span class="pink">팀원 모두가 높은 점수를 받는 것이 중요</span>합니다.		</p>	</div>	<div ng-if="vm.page === 3">		<p>			오늘 수업에서 여러분의 목표는		</p>		<p>			중학생들이 <span class="big pink">꼭</span> 알아야 할 <span class="big pink">고사성어에 대해 배우고</span>		</p>		<p ng-if="vm.study">			<span class="big">과제를 수행하며</span> <span class="big pink">완전히 이해하는 것</span>입니다.		</p>		<p ng-if="!vm.study" class="big">			같은 과제를 수행하게 될		</p>		<p ng-if="!vm.study">			<span class="big pink">다른 친구들보다 높은 점수를 받는 것</span>입니다.		</p>	</div>	<div ng-if="vm.page === 4">		<p style="text-align: center;">			과제를 통한 새로운 학습방법으로 <span class="big pink">재미있게</span> 학습해 보세요.<br><br>			<button ng-click="vm.next()" style="width: 600px; height: 50px; background-color: green; color: white; font-size: 18pt; border: 0;">				고사성어 12개 학습하기			</button>		</p>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-if="vm.page > 0 && vm.page < 4">이전</button>	<button class="next" ng-click="vm.next()" ng-if="vm.page >= 0 && vm.page < 4">다음</button></div>';
        })(s04.prep || (s04.prep = {}));
        var prep = s04.prep;
    })(mid.s04 || (mid.s04 = {}));
    var s04 = mid.s04;
})(mid || (mid = {}));
var mid;
(function (mid) {
    (function (s05) {
        (function (study) {
            study.html = '<div id="slide" class="study" ng-if="!vm.group">	<div ng-if="vm.page == 0" class="large-text">		<p>			{{vm.stage + 1}}. {{vm.idioms[vm.stage].title}}		</p>		<table class="cover">			<tr>				<th ng-repeat="letter in vm.idioms[vm.stage].letters[0] track by $index">{{letter}}</th>			</tr>			<tr>				<td ng-repeat="letter in vm.idioms[vm.stage].letters[1] track by $index" ng-bind-html="letter"></td>			</tr>		</table>	</div>	<div ng-if="vm.page == 1" class="small-text">		<br>		<div class="pink-box" ng-bind-html="vm.idioms[vm.stage].story"></div>	</div>	<div ng-if="vm.page == 2" class="small-text">		<br>		<table class="header">			<tr>				<th ng-repeat="letter in vm.idioms[vm.stage].letters[0] track by $index">{{letter}}</th>			</tr>			<tr>				<td ng-repeat="letter in vm.idioms[vm.stage].letters[1] track by $index" ng-bind-html="letter"></td>			</tr>		</table>		<br>		<div ng-bind-html="vm.idioms[vm.stage].description[vm.page-2]"></div>	</div>	<div ng-if="vm.page > 2" class="small-text">		<p>&nbsp;</p>		<div ng-bind-html="vm.idioms[vm.stage].description[vm.page-2]"></div>	</div>	<div class="timer">		<div class="timer-marker" style="right: 32px; top: -5px;">12</div>		<div class="timer-marker" style="right: 32px; top: 18px;">6</div>		<div class="timer-marker" style="right: 32px; top: 41px;">0</div>		<div class="hider" style="background: white; width: 100%; height: {{vm.hide * 50 / 100}}px;"></div>	</div></div><div id="slide" class="study" ng-if="vm.group">	<p style="text-align: center;">		<span style="background: #1abd14;color: white;display: inline-block;text-align: center;width: 800px;height: 60px;font-size: 32pt;line-height: 60px;">고사성어 학습시간</span>	</p>	<p>&nbsp;</p>	<div class="big-timer">		<table>			<tr>				<td colspan="3">					<div style="background: pink; width: {{100 - vm.hide}}%; height: 50px;"></div>				</td>			</tr>			<tr>				<td style="text-align: left; width: 33.33%;">0</td>				<td style="text-align: center; width: 33.33%;">6</td>				<td style="text-align: right; width: 33.33%;">12</td>			</tr>		</table>	</div></div><div id="nav" ng-if="!vm.group">	<button class="prev" ng-click="vm.prev()" ng-show="vm.stage > 0 || vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()" ng-show="vm.stage !== vm.idioms.length - 1 || vm.page !== vm.idioms[vm.stage].description.length + 1">다음</button></div>';
        })(s05.study || (s05.study = {}));
        var study = s05.study;
    })(mid.s05 || (mid.s05 = {}));
    var s05 = mid.s05;
})(mid || (mid = {}));
var mid;
(function (mid) {
    (function (s06) {
        (function (standby) {
            standby.html = '<div id="slide" class="large-text">	<div ng-if="vm.page == 0">		<p style="text-align: center;">			열심히 공부했나요?<br><br>			이제부터 <button ng-click="vm.next()" style="width: 150px; height: 40px; background-color: deeppink; color: white; font-size: 18pt; border: 0;">S T A R T</button> 버튼을 누르시고<br>			<span class="big pink">10분</span> 동안 스피드 퀴즈를 풀어봅시다<br><br>			<button ng-click="vm.next()" style="width: 600px; height: 50px; background-color: deeppink; color: white; font-size: 18pt; border: 0;">				S T A R T			</button>		</p>	</div>	<div ng-if="vm.page == 1">		<h1 style="color:red;">			다시 한 번 기억하세요!		</h1>		<p ng-if="vm.study">			<br>			오늘 수업에서 여러분의 목표는<br>			중학생들이 <span class="pink">꼭</span> 알아야 할 <span class="pink">고사성어에 대해 배우고</span><br><br>			<span class="big">과제를 수행하며 </span><span class="big pink">완전히 이해하는 것</span>입니다.		</p>		<p ng-if="!vm.study">			<br>			오늘 수업에서 여러분의 목표는<br>			중학생들이 <span class="pink">꼭</span> 알아야 할 <span class="pink">고사성어에 대해 배우고</span><br><br>			<span class="big">같은 과제를 수행하게 될</span><br>			<span class="big pink">다른 친구들보다 높은 점수를 받는 것</span>입니다.		</p>	</div></div><div id="nav">	<button class="next" ng-click="vm.next()" ng-show="vm.page == 1">다음</button></div>';
        })(s06.standby || (s06.standby = {}));
        var standby = s06.standby;
    })(mid.s06 || (mid.s06 = {}));
    var s06 = mid.s06;
})(mid || (mid = {}));
var mid;
(function (mid) {
    (function (s07) {
        (function (quiz) {
            quiz.html = '<div id="slide" class="quiz large-text">	<h1 ng-if="vm.page <= 1">문제 {{vm.stage + 1}}. <span ng-bind-html="vm.problems[vm.stage].question"></span></h1>	<div ng-if="vm.page <= 1">		<div ng-if="vm.problems[vm.stage].type === 3">			<table class="cover">				<tr>					<th ng-repeat="letter in vm.problems[vm.stage].letters[0] track by $index" style="background-color: {{letter ? \'\' : \'#FF007F\'}}">{{letter}}</th>				</tr>				<tr>					<td ng-repeat="letter in vm.problems[vm.stage].letters[1] track by $index" ng-bind-html="letter"></td>				</tr>			</table>		</div>		<div ng-if="vm.problems[vm.stage].type !== 2 || vm.page === 1 && vm.problems[vm.stage].type === 2">			<br>			<table>				<tr>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][0]" ng-value="true" ng-click="vm.clicked(0)"						       id="quiz-option-1">						<label for="quiz-option-1">① {{vm.problems[vm.stage].options[0]}}</label>					</td>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][1]" ng-value="true" ng-click="vm.clicked(1)"						       id="quiz-option-2">						<label for="quiz-option-2">② {{vm.problems[vm.stage].options[1]}}</label>					</td>				</tr>				<tr>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][2]" ng-value="true" ng-click="vm.clicked(2)"						       id="quiz-option-3">						<label for="quiz-option-3">③ {{vm.problems[vm.stage].options[2]}}</label>					</td>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][3]" ng-value="true" ng-click="vm.clicked(3)"						       id="quiz-option-4">						<label for="quiz-option-4">④ {{vm.problems[vm.stage].options[3]}}</label>					</td>				</tr>			</table>		</div>		<div ng-if="vm.problems[vm.stage].type === 2 && vm.page === 0">			<img src="{{vm.problems[vm.stage].image}}">		</div>	</div>	<div ng-if="vm.page === 2" class="result">		<div style="position: absolute; left: 200px; top: 100px;">			<img src="images/correct1.jpg">		</div>		<div style="position: absolute; right: 150px; top: 200px;">			<img src="images/correct2.jpg">		</div>		<p style="line-height: 480px; font-size: 30pt;">맞았습니다</p>	</div>	<div ng-if="vm.page === 3" class="result">		<div style="position: absolute; left: 200px; top: 100px;">			<img src="images/wrong1.jpg">		</div>		<div style="position: absolute; right: 200px; top: 150px;">			<img src="images/wrong2.jpg">		</div>		<p style="line-height: 480px; font-size: 30pt;">틀렸습니다</p>	</div>	<div ng-if="vm.page === 4">		<p ng-if="vm.feedback === \'date\'">			지금까지 총 {{vm.problems.length}}문제 중 <span class="big blue">{{vm.stage}}문제</span>를 풀었으며			<br>			본 과제를 통해 얻을 수 있는<br>			최고 점수 100점 중	<span class="big blue">{{vm.score}}점</span>을 얻었습니다.		</p>		<p ng-if="vm.feedback === \'go\'">			지금까지 총 {{vm.problems.length}}문제 중 <span class="big red">{{vm.problems.length - vm.stage}}문제</span>가 남았으며			<br>			본 과제를 통해 얻을 수 있는<br>			최고 점수 100점 중	<span class="big red">{{100 - vm.score}}점</span> 모자랍니다.		</p>		<div class="score-bar">			<div ng-if="vm.feedback === \'date\'" class="score-gauge-date" style="left: {{(vm.score > 0) ? 33 : 0}}%; width:{{(vm.score > 0 ? vm.score : vm.score + 50)/3*2 }}%">{{vm.score}}점</div>			<div ng-if="vm.feedback === \'go\'" class="score-gauge-go" style="width:{{100 - (vm.score + 50)/150 * 100}}%">-{{100 - vm.score}}점</div>		</div>		<div style="font-size: 14pt; text-align: center; white-space: nowrap; padding-top: 10px; position: relative; left: -18px;">			-50　　　　　　　　　　　　　　　　　　0　　　　　　　　　　　　　　　　　　50　　　　　　　   　　　　　　　　　　　100		</div>	</div>	<div ng-if="vm.page === 5" class="group">		<p style="text-decoration: underline">본 과제를 통해 개인이 얻을 수 있는 <span class="big green">최고 100점</span> 중</p>		<p>			<table style="width:640px; margin: auto;">				<tr>					<td>당신은</td>					<td style="text-align: right;" ng-if="vm.feedback === \'date\'"><span class="blue">{{vm.score}} 점</span> 얻었습니다.</td>					<td style="text-align: right;" ng-if="vm.feedback === \'go\'"><span class="red">{{100 - vm.score}} 점</span> 모자랍니다.</td>				</tr>				<tr>					<td>팀원 1은</td>					<td style="text-align: right;" ng-if="vm.feedback === \'date\'"><input ng-model="vm.score1" size="3" maxlength="3" class="blue" style="height: 40px;font-size: 20pt;position: relative;top: 0;"><span class="blue"> 점</span> 얻었습니다.</td>					<td style="text-align: right;" ng-if="vm.feedback === \'go\'"><input ng-model="vm.score1" size="3" maxlength="3" class="red" style="height: 40px;font-size: 20pt;position: relative;top: 0;"><span class="red"> 점</span> 모자랍니다.</td>				</tr>				<tr>					<td>팀원 2는</td>					<td style="text-align: right;" ng-if="vm.feedback === \'date\'"><input ng-model="vm.score2" size="3" maxlength="3" class="blue" style="height: 40px;font-size: 20pt;position: relative;top: 0;"><span class="blue"> 점</span> 얻었습니다.</td>					<td style="text-align: right;" ng-if="vm.feedback === \'go\'"><input ng-model="vm.score2" size="3" maxlength="3" class="red" style="height: 40px;font-size: 20pt;position: relative;top: 0;"><span class="red"> 점</span> 모자랍니다.</td>				</tr>			</table>		</p>		<p style="text-decoration: underline">본 과제를 통해 팀이 얻을 수 있는 <span class="big green">최고 300점</span> 중</p>		<p>		<table style="width:640px; margin: auto;">			<tr>				<td>여러분 팀은</td>				<td style="text-align: right;" ng-if="vm.feedback === \'date\'">					<span class="blue">{{vm.groupscore}}점</span> 얻었습니다.				</td>				<td style="text-align: right;" ng-if="vm.feedback === \'go\'">					<span class="red">{{vm.groupscore}}점</span> 모자랍니다.				</td>			</tr>		</table>		</p>	</div>	<div ng-if="vm.page === 6">		<p ng-if="vm.feedback === \'date\'">			여러분 팀은			<br>			본 과제를 통해 얻을 수 있는<br>			최고 점수 300점 중	<span class="big blue">최종</span>적으로 <span class="big blue">{{vm.groupscore}}점</span>을 얻었습니다.		</p>		<p ng-if="vm.feedback === \'go\'">			여러분 팀은			<br>			본 과제를 통해 얻을 수 있는<br>			최고 점수 300점 중	<span class="big red">최종</span>적으로 <span class="big red">{{vm.groupscore}}점</span>이 모자랍니다.		</p>		<div class="score-bar">			<div ng-if="vm.feedback === \'date\'" class="score-gauge-date" style="width:{{(vm.groupscore > 0 ? vm.groupscore : 0)/3 }}%">{{vm.groupscore}}점</div>			<div ng-if="vm.feedback === \'go\'" class="score-gauge-go" style="width:{{vm.groupscore / 3}}%">-{{vm.groupscore}}점</div>		</div>		<div style="font-size: 14pt; text-align: center; white-space: nowrap; padding-top: 10px; position: relative; left: -18px;">			0　　　　　　　　　　　　　　　　　100　　　　　　　　　　　　　　　　　　200　　　　　　　  　　　　　　　　　　　300		</div>	</div>	<div class="timer">		<div class="timer-marker" style="right: 32px; top: -5px;">10</div>		<div class="timer-marker" style="right: 32px; top: 16px;">5</div>		<div class="timer-marker" style="right: 32px; top: 41px;">0</div>		<div class="hider" style="background: white; width: 100%; height: {{vm.hide * 50 / 100}}px;"></div>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-show="vm.page === 1">이전</button>	<button class="skip" ng-click="vm.skip()" ng-show="vm.page <= 1 && vm.skips > 0">SKIP ({{vm.skips}})</button>	<button class="next" ng-click="vm.next()">다음</button></div>';
        })(s07.quiz || (s07.quiz = {}));
        var quiz = s07.quiz;
    })(mid.s07 || (mid.s07 = {}));
    var s07 = mid.s07;
})(mid || (mid = {}));
var mid;
(function (mid) {
    (function (s08) {
        (function (survey) {
            survey.html = '<div id="slide" class="large-text survey">	<div ng-show="vm.page == 0">		주어진 10분이 모두 지났습니다.<br>		문항을 주의 깊게 읽으시고 <span class="pink">느낀 그대로 솔직하게</span> 대답해주세요.<br>		<br>		<div class="round-box">			1 ---------- 2 ---------- 3 ---------- 4 ---------- 5<br>			전혀 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			조금 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			보통이다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			조금 비슷하다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			아주 비슷하다		</div>	</div>	<div ng-show="vm.page > 0">		<table style="width: 100%;">			<tr>				<th width="40px"></th>				<th></th>				<th width="50px">1<br>전혀<br>다르다</th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px">5<br>아주<br>비슷하다</th>			</tr>			<tr ng-repeat="n in [vm.page * 4 - 4, vm.page * 4 - 3, vm.page * 4 - 2, vm.page * 4 - 1]" ng-if="n < vm.questions.length">				<td>{{n+1}}</td>				<td ng-if="n === 0" colspan="6" style="text-align: left;">					이번 수업시간의 나에게 주어진 목표는					<div class="options">						<input type="radio" name="question-0" value="1" ng-model="vm.answers[0]" id="survey-0-0"><label for="survey-0-0">(1) 완전히 이해하는 것</label><br>						<input type="radio" name="question-0" value="2" ng-model="vm.answers[0]" id="survey-0-1"><label for="survey-0-1">(2) 남들보다 잘하는 것</label>					</div> 이었다.				</td>				<td ng-if="n !== 0" style="text-align: left;" ng-bind="vm.questions[n]"></td>				<td ng-if="n !== 0" ng-repeat="a in [1,2,3,4,5]">					<label for="survey-{{n}}-{{a}}">{{a}}</label><br>					<input id="survey-{{n}}-{{a}}" type="radio" name="question-{{n}}" value="{{a}}" ng-model="vm.answers[n]">				</td>			</tr>		</table>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-show="vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()">다음</button></div>';
        })(s08.survey || (s08.survey = {}));
        var survey = s08.survey;
    })(mid.s08 || (mid.s08 = {}));
    var s08 = mid.s08;
})(mid || (mid = {}));
var mid;
(function (mid) {
    (function (s09) {
        (function (finished) {
            finished.html = '<div id="slide" class="large-text finished pink">	수고하셨습니다 ☺	<div style="position: absolute;bottom: 50px;font-size: 10pt;text-align: right;display: inline-block;line-height: normal;width: 100%;right: 0;   color: #555;">		본 연구는 영남대학교 생명윤리심의위원회의 승인을 받았습니다(IRB No. 2015-R-0063-002, 승인일:2016.1.8)	</div></div>';
        })(s09.finished || (s09.finished = {}));
        var finished = s09.finished;
    })(mid.s09 || (mid.s09 = {}));
    var s09 = mid.s09;
})(mid || (mid = {}));
var Eun;
(function (Eun) {
    Eun.root;
    Eun.eun = angular.module("eun", ["ngRoute"]);

    Eun.eun.run(function ($location, $rootScope) {
        Eun.root = $rootScope;
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    });

    Eun.eun.factory('safeApply', [function ($rootScope) {
            return function ($scope, fn) {
                var phase = $scope.$root.$$phase;
                if (phase == '$apply' || phase == '$digest') {
                    if (fn) {
                        $scope.$eval(fn);
                    }
                } else {
                    if (fn) {
                        $scope.$apply(fn);
                    } else {
                        $scope.$apply();
                    }
                }
            };
        }]);
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var FinishedController = (function () {
        function FinishedController() {
        }
        return FinishedController;
    })();
    Eun.FinishedController = FinishedController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var FormController = (function () {
        function FormController($scope, $location, submit, elementary) {
            this.$scope = $scope;
            this.$location = $location;
            this.submit = submit;
            this.elementary = elementary;
            this.school = "";
            this.year = "";
            this.classroom = "";
            this.id = "";
            this.gender = "";
            this.language = "";
            this.other = "";
            $scope.vm = this;
        }
        FormController.prototype.prev = function () {
            this.$location.path("/");
        };

        FormController.prototype.next = function () {
            if (!this.school || !this.year || !this.classroom || !this.id) {
                Eun.alert((this.elementary ? "초등학교" : "중학교") + ", 학년, 반, 번호를 입력하세요");
                return;
            }
            if (!this.gender) {
                Eun.alert("성별을 입력하세요");
                return;
            }
            if (!this.language) {
                Eun.alert("집에서 주로 사용하는 언어를 입력하세요");
                return;
            }
            if (this.language == "other" && !this.other) {
                Eun.alert("집에서 주로 사용하는 언어가 무엇인지 괄호 안에 입력해 주세요");
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
        };
        return FormController;
    })();
    Eun.FormController = FormController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var PollController = (function () {
        function PollController($scope, $location, submit, elementary) {
            this.$scope = $scope;
            this.$location = $location;
            this.submit = submit;
            this.elementary = elementary;
            this.page = 0;
            this.topic = this.elementary ? "속담" : "고사성어";
            this.questions = [
                "실수는 내 공부를 향상시키는 데 도움을 준다.",
                "실수는 내가 공부를 계속하는 데 유용한 정보를 제공해 준다.",
                "나의 실수는 내 공부를 발전시키는 데 도움을 준다.",
                "내 실수 덕분에 나는 공부에서 발전을 이룰 수 있었다.",
                "공부를 잘 하고 싶다면, 실수하는 것을 두려워해서는 안된다.",
                "가만히 있는 것보다는 위험을 감수하더라도 실수를 하는 것이 낫다.",
                "공부를 잘 하기 위해서라면 나는 기꺼이 실수를 받아들이겠다.",
                "나는 아무것도 하지 않는 것보다는 실수하는 것을 더 선호한다.",
                "나는 실수를 할 때마다 스트레스를 받는다.",
                "나는 실수를 할까봐 자주 두려워한다.",
                "나는 실수를 하면 당혹스럽다.",
                "공부할 때 실수를 하면 나는 감정을 통제하지 못하고 화가 난다.",
                "공부를 하는 동안 나는 내가 무언가를 잘못하지는 않았는지 걱정한다.",
                "나는 실수를 한 후에 실수를 어떻게 하게 된 것인지에 대해 생각한다.",
                "나는 어떻게 하면 실수하는 것을 막을 수 있을까에 대해서 종종 생각한다.",
                "공부를 하는 동안 무언가 잘못되면, 나는 그것을 매우 신중하게 생각한다.",
                "실수를 한 후, 나는 어떻게 실수를 고칠 수 있을까에 대해 오랫동안 신중히 고민한다.",
                "실수가 발생하면, 나는 실수에 대해 철저히 분석한다.",
                "우리 담임선생님께서는 나에게 따뜻하게 대해주신다.",
                "우리 담임선생님께서는 나를 존중해주신다.",
                "우리 담임선생님께서는 나에게 관심을 보여주신다.",
                "우리 담임선생님께서는 나를 믿어주신다.",
                "우리 담임선생님께서는 나를 잘 도와주신다.",
                "우리 담임선생님은 신뢰할 만한 분이시다.",
                "나는 우리 반 친구들에게 이해받고 있다고 느낀다.",
                "나는 우리 반 친구들이 가족같다고 느낀다.",
                "나는 활발하게 우리 반 활동에 참여한다.",
                "나는 우리 반 친구들로부터 사랑과 관심을 받는다고 느낀다.",
                "나는 우리 반 친구들과 잘 지낸다.",
                "나는 우리 반 친구들을 정말 좋아한다.",
                "우리 반 친구들과 나는 평소에 서로 도움을 주고받는다.",
                "우리 반 친구들은 평소에 나와 같은 감정을 공유할 때가 많다.",
                "나는 " + this.topic + " 학습프로그램에서 다루어지는 내용을 잘 이해할 자신이 있다.",
                "나는 " + this.topic + " 학습프로그램을 매우 잘 할 수 있다고 확신한다.",
                "나는 " + this.topic + " 학습프로그램에서 주어진 문제나 숙제를 성공적으로 해낼 수 있다고 확신한다.",
                "나는 " + this.topic + " 학습프로그램에서 좋은 성적을 받을 것이라고 생각한다.",
                "나는 " + this.topic + " 학습프로그램에서 다루어지는 내용을 잘 배울 것이라고 생각한다.",
                "나는 " + this.topic + " 학습프로그램에서 다뤄지는 내용들이 중요하다고 생각한다.",
                "나는 " + this.topic + " 학습프로그램에서 배우는 내용들이 재미있다고 생각한다.",
                "나는 " + this.topic + " 학습프로그램에서 배우는 내용들이 유용하다고 생각한다."
            ];
            this.answers = [];
            $scope.vm = this;
        }
        PollController.prototype.prev = function () {
            if (this.page > 0) {
                this.page--;
            }

            console.log("page : " + this.page);
        };

        PollController.prototype.next = function () {
            if (this.page > 0) {
                for (var i = this.page * 4 - 4; i < this.page * 4; i++) {
                    if (!this.answers[i]) {
                        Eun.alert((i + 1) + "번 문항에 응답해주세요");
                        return;
                    }
                }
            }

            if (this.page < 10) {
                this.page++;
            } else {
                for (var i = 0; i < this.questions.length; i++) {
                    if (!this.answers[i]) {
                        Eun.alert((i + 1) + "번 문항에 응답해주세요");
                        return;
                    }
                }

                this.submit({ poll: this.answers.map(function (x) {
                        return parseInt(x);
                    }) });

                this.$location.path("/prep").replace();
            }

            console.log("page : " + this.page);
        };

        PollController.prototype.save = function () {
            var page = this.page;
        };
        return PollController;
    })();
    Eun.PollController = PollController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var PrepController = (function () {
        function PrepController($scope, $location, study, group, submit) {
            this.$scope = $scope;
            this.$location = $location;
            this.study = study;
            this.group = group;
            this.submit = submit;
            this.page = 0;
            $scope.vm = this;

            var count = 0;
            $(document.body).keydown(function (event) {
                console.log("keydown : " + event.keyCode);
                if (event.keyCode === 78) {
                    count++;

                    if (count === 5) {
                        count = 0;
                        $scope.$apply(function () {
                            return $scope.vm.next();
                        });
                    }
                }
            });
        }
        PrepController.prototype.prev = function () {
            if (this.page > 0) {
                this.page--;
            }
        };

        PrepController.prototype.next = function () {
            if (this.group && (this.page === 2 || this.page === 2.5)) {
                this.page += 0.5;
                return;
            }

            if (this.page < 4) {
                this.page++;
            } else {
                this.submit({ studies: Date.now() });
                this.$location.path("/study").replace();
            }
        };
        return PrepController;
    })();
    Eun.PrepController = PrepController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    (function (ProblemType) {
        ProblemType[ProblemType["SINGLE"] = 0] = "SINGLE";
        ProblemType[ProblemType["MULTIPLE"] = 1] = "MULTIPLE";
        ProblemType[ProblemType["IMAGE"] = 2] = "IMAGE";
        ProblemType[ProblemType["BLANK"] = 3] = "BLANK";
        ProblemType[ProblemType["SENTENCE"] = 4] = "SENTENCE";
        ProblemType[ProblemType["PARAGRAPH"] = 5] = "PARAGRAPH";
    })(Eun.ProblemType || (Eun.ProblemType = {}));
    var ProblemType = Eun.ProblemType;

    var SINGLE = 0 /* SINGLE */;
    var MULTIPLE = 1 /* MULTIPLE */;
    var IMAGE = 2 /* IMAGE */;
    var BLANK = 3 /* BLANK */;
    var SENTENCE = 4 /* SENTENCE */;
    var PARAGRAPH = 5 /* PARAGRAPH */;

    var FIRST = 0;
    var SECOND = 1;
    var CORRECT = 2;
    var INCORRECT = 3;
    var STATS = 4;
    var GROUP = 5;
    var GROUPSTAT = 6;

    var QuizController = (function () {
        function QuizController($scope, $location, $sce, feedback, group, submit, elementary) {
            this.$scope = $scope;
            this.$location = $location;
            this.$sce = $sce;
            this.feedback = feedback;
            this.group = group;
            this.submit = submit;
            this.elementary = elementary;
            this.stage = 0;
            this.page = 0;
            this.hide = 0;
            this.score = 0;
            this.skips = 5;
            this.groupscore = "";
            this.problems = this.elementary ? [
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
                        "인제강"
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
            this.answers = this.problems.map(function () {
                return [false, false, false, false];
            });
            this.results = [];
            this.timing = [];
            $scope.vm = this;

            for (var i = 0; i < this.problems.length; i++) {
                var problem = this.problems[i];

                if (problem.type === BLANK) {
                    for (var j = 0; j < problem.letters[1].length; j++) {
                        problem.letters[1][j] = $sce.trustAsHtml(problem.letters[1][j].replace(/(.)$/, "&nbsp;&nbsp;<span style=\"font-size:24pt;color:#FF007F\">$1</span>"));
                    }
                }

                if (problem.type === SENTENCE || problem.type === PARAGRAPH) {
                    problem.text = $sce.trustAsHtml(problem.text);
                }

                problem.question = $sce.trustAsHtml(problem.question);
            }

            var self = this;

            var parse = function (value) {
                return parseInt(value);
            };

            $scope.$watch("vm.score1 + vm.score2", function () {
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

            this.timer = setInterval(function () {
                if (self.hide < 100) {
                    $scope.$apply(function () {
                        return self.hide++;
                    });
                } else {
                    if (self.timer) {
                        clearInterval(self.timer);
                        self.timer = null;
                    }

                    console.log("TIMEOUT!!");
                    $scope.$apply(function () {
                        while (self.stage < self.problems.length) {
                            self.stage++;
                            self.score -= 2;
                        }
                        self.page = STATS;
                    });
                }
            }, 6000);
        }
        QuizController.prototype.answerCount = function () {
            var result = 0;

            for (var i = 0; i < this.answers[this.stage].length; i++) {
                if (this.answers[this.stage][i] === true) {
                    result++;
                }
            }

            return result;
        };

        QuizController.prototype.solutionCorrect = function () {
            if (this.answerCount() !== this.problems[this.stage].answer.length) {
                return false;
            }

            var answer = this.problems[this.stage].answer;

            for (var i = 0; i < answer.length; i++) {
                if (this.answers[this.stage][answer[i] - 1] !== true) {
                    return false;
                }
            }

            return true;
        };

        QuizController.prototype.clicked = function (n) {
            if (this.problems[this.stage].type !== MULTIPLE) {
                this.answers[this.stage] = [false, false, false, false];
                this.answers[this.stage][n] = true;
            }
        };

        QuizController.prototype.prev = function () {
            if (this.page == 1) {
                this.page = 0;
            }
        };

        QuizController.prototype.skip = function () {
            this.results[this.stage] = "S";
            this.timing[this.stage] = Date.now();

            this.skips--;
            this.stage++;

            if (this.stage % 5 === 0) {
                this.page = STATS;
            } else {
                this.page = FIRST;
            }
        };

        QuizController.prototype.checkAnswer = function () {
            if (this.answerCount() == 0) {
                Eun.alert("정답을 입력해주세요.");
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
        };

        QuizController.prototype.next = function () {
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
                        Eun.alert("팀원들의 점수를 입력해 주세요");
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
        };
        return QuizController;
    })();
    Eun.QuizController = QuizController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var StandbyController = (function () {
        function StandbyController($scope, $location, study, submit) {
            this.$scope = $scope;
            this.$location = $location;
            this.study = study;
            this.submit = submit;
            this.page = 0;
            $scope.vm = this;
        }
        StandbyController.prototype.prev = function () {
            if (this.page > 0) {
                this.page--;
            }
        };

        StandbyController.prototype.next = function () {
            if (this.page < 1) {
                this.page++;
            } else {
                this.submit({ quiz: Date.now() });
                this.$location.path("/quiz").replace();
            }
        };
        return StandbyController;
    })();
    Eun.StandbyController = StandbyController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var StarterController = (function () {
        function StarterController($scope, $location, type, feedback, group, study, submit) {
            this.$location = $location;
            $scope.vm = this;

            var count = 0;

            console.log(type, feedback, group, study);

            $(document.body).keydown(function (event) {
                if (event.keyCode === 32) {
                    count++;

                    if (count === 3) {
                        $scope.$apply(function () {
                            $location.path("/welcome");
                        });
                    }
                }
            });

            var id = Eun.uuid();
            $.cookie("uuid", id);

            console.log("new UUID : " + id);

            submit({ started: Date.now() });
        }
        StarterController.prototype.next = function () {
            this.$location.path("/welcome").replace();
        };
        return StarterController;
    })();
    Eun.StarterController = StarterController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var StudyController = (function () {
        function StudyController($scope, $location, $sce, group, submit, elementary) {
            this.$scope = $scope;
            this.$location = $location;
            this.$sce = $sce;
            this.group = group;
            this.submit = submit;
            this.elementary = elementary;
            this.stage = 0;
            this.page = 0;
            this.hide = 0;
            this.idioms = this.elementary ? [
                {
                    title: "낫 놓고 기역 자도 모른다",
                    story: "아직 한글을 아직 모르는 철수가 시골 할아버지 댁에 놀러 갔습니다. 마당에서 뛰어 놀던 철수에게 할아버지께서 말씀하셨습니다. “철수야, 창고에 가서 낫 좀 가지고 오거라. 날이 구부러져서 ‘ㄱ’자 같이 생겼단다.” 고개를 갸우뚱하던 철수가 할아버지께 되물었습니다. “할아버지, ‘ㄱ’자는 어떻게 생긴 건데요?”",
                    image: "images/s01.jpg",
                    description: ["풀을 벨 때 쓰는 낫은 옛날부터 집집마다 흔하게 볼 수 있는 농기구로 ‘ㄱ’자를 닮았습니다. <b>“낫 놓고 기역 자도 모른다”</b>는 속담은 <em>‘ㄱ’자 모양으로 생긴 낫을 보면서도 ‘ㄱ’자를 모른다는 말로 아주 무식하다는 뜻</em>입니다. 우리 친구들은 낫 놓고 기역 자도 모르는 사람이 되지 않도록 학교에서 선생님 말씀도 잘 듣고 열심히 공부하도록 해요. ?"]
                },
                {
                    title: "우물 안 개구리",
                    story: "우물 안에 개구리 한 마리가 살고 있었습니다. 자기보다 작은 물고기 몇 마리뿐인 우물 안에서는 덩치 큰 개구리가 왕이었고 개구리는 세상에서 자기가 최고라고 생각했습니다. 우물 안에만 있으니까 세상은 개구리가 살고 있는 우물 안이 전부고 하늘은 그 우물 크기대로 보였겠죠? 그러던 어느 날, 물을 긷던 농부의 물동이에 쓸려 우물 밖으로 나오게 된 개구리는 이제껏 자신이 봐왔던 세상보다 훨씬 큰 세상에 깜짝 놀랐습니다.",
                    description: ["<b>“우물 안 개구리”</b>란 세상을 너무 좁게 봐서 지식이 부족한 상태를 뜻하는 말로 <em>보고 들은 게 없어서 세상을 잘 모르는 사람</em>을 두고 하는 말입니다."],
                    images: ["images/s02.jpg"]
                },
                {
                    title: "방귀뀌고 성낸다",
                    story: "사람 많은 곳에서 방귀를 뀌어본 적 있나요? <br> 그 때 기분이 어땠어요? <br> 자기가 방귀를 뀌지 않은 척 하기 위해서 일부러 시치미를 뚝 떼고 더 크게 옆에 사람에게 “누가 방귀 뀌었냐!!”며 화를 내 본 경험은 없나요?",
                    description: ["<b>“방귀 뀌고 성낸다”</b>는 속담은 <em>자신이 잘못을 하고도 도리어 남에게 화를 낸다</em>는 뜻입니다."],
                    images: ["images/s03.jpg"]
                },
                {
                    title: "돌다리도 두드려보고 건너라",
                    story: "서울 창경궁에 가면 ‘옥천교’라는 돌다리가 있어요. 수백 년 전에 지어진 것임에도 불구하고 튼튼하게 자리를 지키고 있지요. 나무도 흙도 아닌 단단한 돌로 만들어진 다리는 수백 년이 지나도 끄떡없이 자리를 지키고 있는데 돌로 만든 다리를 왜 두들겨보고 건너라는 걸까요? 튼튼한 돌은 거센 바람이나 큰 비에도 쉽게 깨지지 않는다는 사실을 여러분도 잘 알고 있을 겁니다.",
                    image: "images/s04.jpg",
                    description: ["<b>“돌다리도 두들겨 보고 건너라”</b>라는 속담은 튼튼한 돌다리도 두들겨 보고 건널 만큼 <em>모든 일에 주의를 기울이라는 뜻</em>입니다. 잘 알고 있는 일이라 해도 쉽게 생각하거나 대충 하지 말고 신중하게 생각하고 행동하라는 교훈이 담겨있지요. "]
                },
                {
                    title: "소 잃고 외양간 고친다",
                    story: "최근 과천 서울대공원에서 호랑이가 실내 우리 문을 열고 나오는 사고가 발생했습니다. 호랑이는 먹이를 주러 갔던 사육사를 공격해 중태에 빠뜨리고 공원 근처를 돌아다니다가 경찰에 붙잡혀 간신히 우리 안으로 되돌아갔습니다. 서울대공원 측은 이제서야 부랴부랴 우리를 튼튼하게 고치고 있지만 서울대공원을 찾은 시민들도 불안한 기색을 감추지 못하고 있습니다. 서울대공원 측은 때늦은 후회를 하고 있지만 소용이 없습니다.",
                    description: ["혹시 여러분이 동물원 구경을 하던 중 호랑이가 우리에서 탈출했다면 생각만해도 등골이 서늘하겠죠? 부서진 외양간 때문에 소를 잃어버린 후 외양간을 고쳐봤자 아무 소용이 없다는 말로 <b>“소 잃고 외양간 고친다”</b>는 속담은 <em>이미 일이 잘못된 뒤에는 후회해도 소용없다</em>는 뜻입니다. 중요한 일을 뒤로 미루다가 망치지 말고 미리미리 하는 습관을 기르도록 합시다."],
                    images: ["images/s05.jpg"]
                },
                {
                    title: "구슬이 서 말이라도 꿰어야 보배",
                    story: "동글동글하고 매끄러운 진주나 보석으로 만든 장신구는 값비싸고 매우 귀한 것이었답니다. 그래서 옛날부터 부잣집 잔칫날이나 명절 때가 되면 부인이나 딸들이 예쁘게 치장하고자 반지나 목걸이를 만드는데 많이 사용했답니다.<br>그런데 어느 부잣집에 이처럼 귀한 구슬이 서 말이나 있었다고 합니다. 서 말은 (곡식을 잴 때 쓰는) ‘되’라는 그릇으로 쟀을 때 서른 그릇이나 되는 아주 많은 양입니다.",
                    description: ["하지만, 아무리 귀한 구슬이라 해도 그냥 놔두면 무슨 소용이 있을까요? 구슬을 한 알 두 알 실에 꿰어야 예쁜 장신구가 되겠죠? <br>이처럼 <b>“구슬이 서 말이라도 꿰어야 보배다”</b>라는 속담은 <em>아무리 귀하고 좋은 것이라도 쓸모 있게 만들어 놓아야 가치가 있다</em>는 뜻입니다. "],
                    images: ["images/s06.jpg"]
                },
                {
                    title: "마파람에 게눈 감추듯",
                    story: "여름방학을 맞아 시골 할아버지 댁에 놀러 간 동호는 하루 종일 사촌 형과 밖에서 뛰어 놀았더니 배가 너무 고팠습니다. 마침, 집에 들어오니 거실에는 맛있는 저녁 밥상이 차려져 있었습니다. 동호는 자리에 앉자마자 숟가락을 들고 금새 밥 한 공기를 뚝딱 비워내고 “큰 어머니 저 밥 한 공기 더 주세요”라고 말했습니다. 이를 지켜보시던 할아버지께서 껄껄 웃으시며 “동호가 밥을 마파람에 게눈 감추듯 없애는구나!”라고 말씀하셨습니다.",
                    description: ["게는 위험이 닥치면 겁을 먹고 재빨리 눈을 감추는 습성이 있어 바람이 불면 순식간에 눈을 감춰버립니다.<br><b>“마파람에 게눈 감추듯”</b>이라는 속담은 바람이 불면 게가 순식간에 눈을 감춰버리듯이 <em>음식이나 밥을 어느 틈에 먹었는지 모를 정도로 빨리 먹어버린 것</em>을 두고 이르는 말입니다. 흔히 눈 깜짝할 사이에 빨리 먹어버렸을 때 쓰는 속담입니다."],
                    images: ["images/s07.jpg"]
                },
                {
                    title: "부뚜막의 소금도 집어 넣어야 짜다",
                    story: "옛날에는 부엌의 부뚜막에 여러 가지 양념을 놓고 썼습니다. 손만 뻗으면 닿는 곳에 소금이 있어도 음식에 집어 넣지 않으면 맛이 나지 않겠지요.  이 속담은 <em>손쉽게 할 수 있는 일이나 기회가 있어도 이용하지 않으면 소용이 없다</em>는 말이에요.",
                    image: "images/s08.jpg",
                    description: []
                },
                {
                    title: "아는 길도 물어서 가라",
                    story: "조선 시대의 개성 상인은 수완 좋고 신용 있기로 유명해서 장사를 배우고자 하는 많은 사람들이 몰려들었습니다. 그 중 두 젊은이의 재질을 본 대상인은 두 사람에게 사람 모으는 법, 사기 당하지 않는 법 등의 기술을 가르쳤습니다.? 삼 년 넘게 많은 것을 배운 두 사람은 각자 가게를 열었습니다. 가게를 열자마자 한 사람은 먼저 개업한 이웃 가게들을 돌아다니며 여러 가지를 물었지만 다른 한 사람은 개성 최고의 상인에게 배운 자신이 지방 상인들의 이야기를 듣는 것이 시간 낭비라고 생각했습니다.  그러나 얼마 가지 않아 이웃 가게들을 돌아다니며 이것 저것 질문한 친구를 비웃던 사람은 큰 사기에 휘말려 가게를 통째로 날려버리게 되었습니다.",
                    description: ["이처럼 <b>“아는 길도 물어서 가라”</b>라는 속담은 <em>아무리 누구보다 잘 알고 자신만만한 쉬운 일이라도 실수하지 않기 위해서는 꼼꼼하고 철저하게 한번 더 살펴서 해야 한다</em>는 뜻입니다. "]
                },
                {
                    title: "한강에 돌 던지기",
                    image: "images/s10.jpg",
                    story: "넓고 넓은 한강에 돌을 던져본 적 있나요? 넓은 한강에 돌 하나 던져봐야 아무런 흔적도 없이 사라지죠? 이처럼, <em>도저히 불가능한 일을 쓸데없이 하는 경우를 비유하는 뜻</em>으로 아무리 애를 써도 보람이 없는 일을 뜻합니다.",
                    description: []
                },
                {
                    title: "감나무 밑에 누워 연시 떨어지기를 바란다",
                    story: " 철수는 며칠 전부터 마당 같은 자리에 누워서 입을 벌리고 있습니다. 몇 날 며칠을 아무것도 하지 않고 같은 자리에 누워 입을 벌리고 있는 철수를 보며 엄마는 “철수야 도대체 뭐하고 있는 거니? 얼른 방안으로 들어오렴”하고 재촉했습니다. 그러자 철수는 “저 나무 위에 맛있어 보이는 감이 여기로 떨어지기를 기다리는 거예요!” 라며 꿈쩍도 하지 않았습니다.",
                    image: "images/s11.jpg",
                    description: [" 잘 익은 감(연시)을 먹기 위해서 감이 스스로 떨어질 만한 위치를 생각해서 그 아래 입을 벌리고 누워있으면 감이 누워서 입 벌리고 있는 여러분 입으로 쏙~하고 떨어질까요? 혹시 운이 좋아서 감을 받아 먹게 되었다고 해도 너무 익어버려서 맛이 없을 것입니다. 탐스럽고 맛있는 감이 먹고 싶다면 직접 나무에 올라가 따 먹는 노력 정도는 해야 하지 않을까요? <br>이처럼 <b>“감나무 밑에 누워 연시 떨어지기를 바란다”</b>는 <em>아무런 노력도 하지 않고서 좋은 결과만 바람을 이르는 말</em>입니다."]
                },
                {
                    title: "밑 빠진 독에 물 붓기",
                    story: "콩쥐의 어머니가 일찍 세상을 떠나자 콩쥐 아버지는 아내를 새로 맞았는데 새어머니에게는 팥쥐라는 딸이 있었다. 콩쥐를 미워한 새어머니는 남편 몰래 콩쥐를 구박했다. 그러던 어느 날 마을 원님의 생일잔치가 벌어졌다. 새어머니는 팥쥐만 데리고 생일잔치에 참석하러 가며 잔치에 가고 싶다는 콩쥐에게 밭을 다 갈고, 벼를 다 찧고, 독에 물을 가득 채워 놓은 후에 잔치에 오라 했다. 하지만 아무리 물을 길어다 넣어도 독이 채워지지 않자 여기저기 살펴보던 콩쥐는 독의 아랫부분이 깨져있음을 알고 독 앞에 주저 앉아버렸다.",
                    image: "images/s12.jpg",
                    description: ["이처럼 밑 빠진 독에  물을 부어 봐야 독이 가득 찰 리가 없겠지요? <em>애써 한 일이 보람도 없이 헛수고가 되었을 때</em> 쓰는 말입니다."]
                }
            ] : [
                {
                    title: "함흥차사",
                    letters: [
                        ["咸", "興", "差", "使"],
                        ["다 함", "일 흥", "심부름꾼 차", "사신 사"]
                    ],
                    story: "엄마가 부엌에서 저녁을 준비하시고 은호와 명호는 거실에서 텔레비전을 보고 있었습니다. 한참 재미있게 텔레비전을 같이 보던 명호가 친구에게 문자메시지를 받더니 “엄마 저 친구가 집 앞에 잠시 물건을 전해주러 왔다고 해서 내려갔다 올게요. 10분이면 돼요.”라고 외치며 뛰어나갔습니다. 하지만, 20분쯤 후 저녁상이 모두 차려졌을 때도 명호는 다시 돌아오지 않았습니다. “얘는 10분안에 들어온다 해놓고 왜 아직까지 <em>함흥차사(咸興差使)</em>야?” 화가 난 엄마가 명호에게 전화를 계속 합니다.",
                    description: ["흔히 우리는 누군가 어딘가 가서 돌아오지 않을 때나 연락이 오지 않을 때 답답하고 걱정되는 마음으로 '함흥차사'다 라는 말을 많이 사용합니다. 함흥으로 간 벼슬아치가 돌아오지 않아서 생긴 말, '함흥차사(咸興差使)'의 사전적 의미는 <em>함흥으로 보낸 심부름꾼</em>이라는 뜻으로 <em>심부름을 가서 소식이 없거나 또는 회답이 더딜 때</em>를 말합니다. "]
                },
                {
                    title: "백중지세",
                    letters: [
                        ["伯", "仲", "之", "勢"],
                        ["맏 백", "버금 중", "어조사 지", "형세 세"]
                    ],
                    story: "한국과 일본은 오는 28일 오후 8시 서울 잠실종합운동장에서 열리는 2013동아시안컵 최종전에서 격돌한다. 한일전은 자존심을 건 한판 대결이다. 정치적인 이유를 떠나 나이와 성별을 불문하고 온 국민을 열광시키는 최고의 축구 이벤트다. 한국은 일본과의 역대전적에서 75전 40승22무13패를 기록, 압도적인 우위를 보이고 있다. 그러나 일본 축구가 급속도로 발전을 이루면서 2000년대 이후 <em>백중지세(伯仲之勢)</em>를 보이고 있다. 총 13번의 대결에서 한국이 4승6무3패로 근소하게 앞서며 라이벌전 양상을 띠고 있다.",
                    description: ["중국 관습에 형제의 나이 순서대로 '백'은 맏이, '중'은 둘째를 일컫습니다. 대게 형제는 나이차이가 크지 안아서 경험이나 능력이 비슷하고 생김새도 크게 다르지 않아서 누가 더 낫다, 모자라다는 판단을 하기가 매우 힘이 듭니다. 이처럼 '백중지세(伯仲之勢)'란 <em>수준이 서로 엇비슷한 사이</em>를 나타내는 말로 첫째 아들과 둘째 아들의 차이처럼 기량, 지식, 인물 됨 등이 큰 차이가 없이 <em>엇비슷한 상태라 우열을 가리지 못한다</em>는 말입니다. "]
                },
                {
                    title: "난형난제",
                    letters: [
                        ["難", "兄", "難", "弟"],
                        ["어려울 난", "형 형", "어려울 난", "아우 제"]
                    ],
                    story: "예능프로그램 '아빠어디가'에 출연한 동생들은 자신의 형, 누나, 오빠가 가지지 못한 색다른 매력을 어필하며 안방극장을 찾았다. 동생들은 형들이 자신들을 돌보며 형 역할을 하게 만드는 모습으로 눈길을 끌었으며 예능을 모르는 동심으로 시청자들의 관심을 한 몸에 받았다. 아직 어리고 철없는 동생들이지만, 예능감에서만큼은 <em>난형난제(難兄難弟)</em>였다.",
                    description: [
                        "중국 한나라에 원방과 계방이란 형제는 둘 다 사람됨이 훌륭하고 학문이 뛰어났습니다. 이들 원방과 계방의 아들 군(群)과 충(忠) 역시도 친형제처럼 항상 사이가 좋았지만 단 한 가지, 누구의 아버지가 더 훌륭한가, 문제에 관해서는 추호의 양보도 없이 입씨름을 벌였습니다. 아무리 다투어도 자기들로서는 우열을 가릴 수 없자 할아버지인 진식에게 가서 판정을 받기로 했습니다.",
                        "자신을 찾아와서 각각 자기의 손을 들어 달라고 손자들의 질문에 진식은 껄껄 웃으며 “너희들의 아버지는 나이를 따진다면 분명 형제간이지만, 두 사람 모두 훌륭하여 학문이나 사람됨에 있어서 '형을 형이라 하기도 어렵고 아우를 아우라 하기도 어렵구나.' 이처럼 '난형난제(難兄難弟)'란 <em>누가 형인지 동생인지 분간하기 어려울 만큼, 두 사물이 비슷하여 낫고 못함을 정하기 어려움</em>을 뜻하는 말입니다. "
                    ]
                },
                {
                    title: "양두구육",
                    letters: [
                        ["羊", "頭", "狗", "肉"],
                        ["양 양", "머리 두", "개 구", "고기 육"]
                    ],
                    story: "옛날부터 사람들은 양고기는 비싸고 좋은 고기, 개고기는 싸고 질이 떨어지는 고기라고 생각해왔습니다. 만약 어느 고깃집에서 가게 입구에 양의 머리를 걸어놓으면 많은 사람들은 그 가게에서 값비싼 양고기를 판다고 생각할 것입니다. 하지만 실제로 가게에서는 양고기가 아닌 값싼 개고기를 팔고 있다면 이것은 사람들을 속이는 것일 겁니다.",
                    description: ["<em>변변치 않은 속을 가졌지만 번듯하고 그럴듯한 겉모습으로 남을 현혹할 때</em>, 즉 <em>겉과 속이 다를 때</em> 우리는 '양두구육(羊頭狗肉)'이라고 합니다. 귤 한 박스를 샀는데 잘 보이는 맨 윗줄의 귤은 탱글탱글하고 맛있어 보이지만 아래 줄의 귤은 모두 썩어있는 상황에서 우리는 '양두구육(羊頭狗肉)이네'라고 말할 수 있을 겁니다."]
                },
                {
                    title: "수수방관",
                    letters: [
                        ["袖", "手", "傍", "觀"],
                        ["소매 수", "손 수", "겉 방", "볼 관"]
                    ],
                    story: "여러분 바로 옆에서 큰 싸움이 일어났을 때 끼어들었다가 피해를 입을까 봐 일부러 가만히 있거나 별 관심이 없어서 신경을 쓰지 않은 적 있나요? '옛날에는 옷에 주머니가 거의 없어서 소매가 주머니의 역할을 대신하여 날씨가 추운 날에는 주머니 대신 소매에 손을 넣기도 하였는데, <em>가까운 곳에서 큰 일이 일어나도 손을 소매에 넣고 관심 없이 팔짱을 끼고 곁에서 구경만 한다</em>는 것을 가리키는 말입니다. ",
                    description: ["수수방관(袖手傍觀)'이란 <em>간섭하거나 거들지 않고 그대로 내버려 두는 것을 이야기</em>합니다. 우리 속담의 '강 건너 불구경하듯 한다'와 같은 뜻으로, <em>자기와는 상관없는 일이라고 다른 사람의 일에 관심이 없는 태도를 보일 때</em> 주로 쓰입니다."]
                },
                {
                    title: "정중지와",
                    letters: [
                        ["井", "中", "之", "蛙"],
                        ["우물 정", "가운데 중", "어조사 지", "개구리 와"]
                    ],
                    story: "황하의 신 하백(河伯)이 물의 흐름을 따라 처음으로 북해까지 가서 바다를 바라보면서, 그 끝이 없음에 놀라 하였다. 그러자 북해의 신 약(若)이 이렇게 말했다. “<em>우물 안에서 살고 있는 개구리에게 바다를 이야기해도 알지 못하는 것은, 그들이 좁은 장소에서 살고 있기 때문</em>이다.  또 여름 벌레에게 얼음을 말해도 알지 못하는 것은, 그들이 여름만을 굳게 믿고 있기 때문이다. 따라서 식견이 좁은 사람에게 도를 말해도 알지 못하거니와, 그것은 그들이 상식의 가르침에 구속되어 있기 때문이다. 그러나 당신은 지금 좁은 개울에서 나와 큰 바다를 바라보고 자기의 추함을 알았기 때문에, 이제 더불어 큰 진리에 대하여 말할 수 있을 것이다”",
                    description: ["'정중지와(井中之蛙)'란 '우물 안 개구리'라는 의미로 <em>식견이 좁음</em>을 뜻합니다. 즉, <em>실력이나 지식이 뛰어나다고 본인은 생각하지만 실제로는 별것 아닌 사람</em>을 일컬을 때 쓰이게 되는데 대단히 부정적인 의미지만 당사자는 그 사실조차 잘 인식하지 못하고 오히려 자부심을 갖기도 합니다. "]
                },
                {
                    title: "상전벽해",
                    letters: [
                        ["桑", "田", "碧", "海"],
                        ["뽕나무 상", "밭 전", "푸를 벽", "바다 해"]
                    ],
                    story: "북한강 위에 반달 모양으로 떠 있는 남이섬은 1944년 청평댐을 만들 때 북한강 강물이 차서 생긴 내륙의 섬으로 수많은 사람들이 찾는 관광지이다. TV 드라마 「겨울연가」의 촬영지로 내외국인에게 너무나도 잘 알려진 이 섬은 조선 세조 때 역적으로 몰려 요절한 남이 장군의 묘가 있어 남이섬이라고 불리게 되었다. 1965년 모래뿐인 불모지 남이섬을 매입해 나무를 심기 시작한 것이 관광지로서의 출발점으로, 나무들이 만들어 준 천국이라 해도 과언이 아닐 만큼 아름다운 숲길이 섬 전체를 메우고 있는 남이섬의 수려한 자연경관은 탄식을 절로 자아내게 한다. ",
                    description: ["불과 50년 전만 해도 뽕나무나 자라던 불모지였던 이 척박한 모래섬, 남이섬은 가까운 시간이 흘러 남이섬은 이제 나무섬이 됐다. '뽕나무 밭이 푸른 바다로 변했다'는 뜻으로 <em>세상이 몰라볼 정도로 바뀐 모습</em>을 이르는 말 '상전벽해(桑田碧海)'의 대표적인 예가 바로 남이섬의 이야기다."]
                },
                {
                    title: "교언영색",
                    letters: [
                        ["巧", "言", "令", "色"],
                        ["공교할 교", "말씀 언", "좋을 영", "빛 색"]
                    ],
                    story: "공자(孔子)가 말하길, <em>“교묘한 말과 아첨하는 얼굴을 하는 사람은 착한 사람이 적다(巧言令色鮮矣仁)”</em>고 하였다. 즉, 말을 그럴 듯하게 꾸며대거나 남의 비위를 잘 맞추는 사람, 또는 남에게 잘 보이려는 사람치고 마음이 착하고 진실한 사람은 적다고 말한 데서 유래되었습니다.",
                    description: ["<em>교묘한 말과 예쁘게 꾸민 얼굴</em>이라는 뜻인 '교언영색(巧言令色)'은 <em>남의 환심을 사기 위해 교묘한 말과 아첨하는 얼굴을 이르는 말</em>입니다. 다른 사람에게 잘 보이기 위해 말을 꾸며대며 아첨하는 모습에 상대방도 처음에는 기분이 좋을지는 몰라도 곧 진심이 담기지 않았다는 것을 알아채고 멀리하게 되는 법입니다."]
                },
                {
                    title: "수주대토",
                    letters: [
                        ["守", "株", "待", "兎"],
                        ["지킬 수", "그루터기 주", "기다릴 대", "토끼 토"]
                    ],
                    story: "송나라 사람이 밭을 갈고 있을 때 토끼가 달려와서 밭 가운데 있는 나무그루터기에 부딪혀 목이 부러져 죽었다. 그 후로 그 농부는 쟁기를 버리고 그 그루터기를 지켜보면서 다시 토끼가 달려와서 부딪혀 죽기만을 기다렸으나. 토끼는 두 번 다시 잡히지 않았다. 이처럼 <em>우연히 얻은 좋은 결과를 자기 실력으로 착각하는 것, 어쩌다가 통한 방법이 또 통할 줄 알고 그대로 답습하는 것</em>도 '수주대토(守株待兎)'하는 농부와 똑같은 모습입니다.",
                    description: ["'수주대토(守株待兎)'란 <em>그루터기를 지키며 토끼를 기다린다는 뜻</em>으로 <em>어리석게 한 가지만을 기다리는 것을 비유</em>하는 말입니다. 학습할 때에도 마찬가지입니다. 자신의 공부 방법이 최고라고 생각하지 말고 시험을 여러 차례 치러본 결과, 성적이 생각만큼 잘 나오지 않는다면 과감히 학습 방법을 바꿔야 할 수도 있습니다."]
                },
                {
                    title: "기인지우",
                    letters: [
                        ["杞", "人", "之", "憂"],
                        ["기나라 기", "사람 인", "어조사 지", "걱정 우"]
                    ],
                    story: "중국 기나라에 쓸데없는 걱정을 하는 사람이 있었다. 그는 매일 '만약 하늘이 무너지거나 땅이 꺼진다면 몸 둘 곳이 없지 않은가?' 이런 걱정들을 하느라 밤에 잠도 못 이루고 음식도 제대로 먹지 못했다. 보다 못한 친구가 그에게 말했다. “하늘은 (공)기가 쌓였을 뿐이야. 그런데, 왜 하늘이 무너져 내린단 말인가?” 그러자 그는 “그럼 땅이 꺼지면 어떻게 합니까?”라고 물었다. 친구가 “땅은 흙덩어리가 겹친 것이다. 모두다 흙으로 되어 있다. 온종일 그 흙 위를 밟고 다녀도 꺼질 염려는 없다.”라고 대답해주자 그제서야 그 사람은 비로소 근심 걱정을 놓으며 몹시 기뻐했다.",
                    description: ["'기인지우(杞人之憂)'란 <em>먼 장래에 있을지 없을지도 모르는 불행을 공연히 걱정하는 것을 비웃는 말</em>로 흔히 '기우'라고도 합니다. 이처럼 있을지 없을지도 모르는 문제를 걱정하기보다는 당면한 책임을 제대로 완수하는 것이 올바른 사회인의 생활태도일 것입니다."]
                },
                {
                    title: "사상누각",
                    letters: [
                        ["沙", "上", "樓", "閣"],
                        ["모래 사", "위 상", "다락 누", "집 각"]
                    ],
                    story: "초등학생까지 고교 수학을 배우는 등 선행학습은 이제 당연한 일상처럼 되어버렸다. 개념을 제대로 이해하기 위해 다양한 경험과 원리를 습득하지 않고 무조건 앞서 배우기만 해서는 학습 효과를 기대하기 힘들지만 학원들은 한 학기 또는 몇 개 학년을 앞서 선행학습을 강조하고 있어 학생들은 학교 수업을 등한시하고 수학에 대한 흥미를 잃어버리는 부작용을 초래하고 있다. 만약, 기초학습능력이 부족한데도 주위를 의식해 학원의 선행학습에 의존하면 문제풀이 요령은 늘 수도 있겠지만 원리를 응용한 문제는 아예 손도 대지 못할 수도 있다.",
                    description: ["학교든 학원이든 기초과정을 무시한 선행학습은 '사상누각(沙上樓閣)'에 불과하다. <em>모래 위에 세운 다락방</em>이라는 뜻으로 단단하지 않은 모래 위에 집을 세우면 곧 무너지는 것처럼 '사상누각(沙上樓閣)'이란 <em>기초가 튼튼하지 못하여 오래 견디지 못할 일이나 물건</em>을 이르는 말이다."]
                },
                {
                    title: "우공이산",
                    letters: [
                        ["愚", "公", "移", "山"],
                        ["어리석을 우", "귀 공", "옮길 이", "뫼 산"]
                    ],
                    story: "중국에 우공이라는 아흔 살 된 노인 집 앞에는 넓이가 칠백 리, 만 길 높이의 두 산이 가로막고 있어 생활하는데 무척 불편했습니다. 어느 날 노인은 가족들에게 가족이 힘을 합쳐 산을 옮기면 그 길이 넓어져 다니기에 편리할 것이라며 산을 옮기기 위해 가족들과 꼬박 1년이 걸려 지게에 흙을 지고 발해 바다에 갔다 버리고 돌아왔습니다. 이를 본 이웃 사람들이 무모하다며 비웃었지만 우공은 “내가 죽으면 내 아들, 그가 죽으면 손자가 계속 할 것이오. 그 동안 산은 깎여 나가겠지만 더 높아지지는 않을 테니 언젠가는 길이 날 것이오.”라고 말하였습니다.  이 말을 들은 옥황상제는 우공의 정성에 감동해 두 산을 없애주기로 했습니다.",
                    description: ["세상을 바꾸는 것은 머리 좋은 사람이 아니라 결코 포기하지 않고 끝까지 노력하는 사람임을 알려 주는 뜻을 가진 '우공이산(愚公移山)'은 우공이 산을 옮겨놓았다는 데서 유래하여 <em>어떤 일이든 끊임없이 노력하면 반드시 이루어짐</em>을 뜻하는 고사성어다. "]
                }
            ];
            $scope.vm = this;

            for (var i = 0; i < this.idioms.length; i++) {
                var idiom = this.idioms[i];

                if (idiom.letters) {
                    for (var j = 0; j < idiom.letters[1].length; j++) {
                        idiom.letters[1][j] = $sce.trustAsHtml(idiom.letters[1][j].replace(/(.)$/, "&nbsp;&nbsp;<span style=\"font-size:24pt;color:#FF007F;\">$1</span>"));
                    }
                }

                idiom.story = $sce.trustAsHtml(idiom.story);

                for (var j = 0; j < idiom.description.length; j++) {
                    idiom.description[j] = $sce.trustAsHtml(idiom.description[j]);
                }
            }

            var self = this;
            var startedAt = Date.now();
            this.timer = setInterval(function () {
                if (self.hide < 100) {
                    $scope.$apply(function () {
                        self.hide = 100 * (Date.now() - startedAt) / 720000;
                    });
                } else {
                    clearInterval(self.timer);
                    self.submit({ studied: Date.now() });
                    $scope.$apply(function () {
                        return self.$location.path("/standby").replace();
                    });
                }
            }, 1000);
        }
        StudyController.prototype.prev = function () {
            if (this.elementary && this.page == 2) {
                this.page = 0;
            } else if (this.page > 0) {
                this.page--;
            } else {
                if (this.stage > 0) {
                    this.stage--;
                    this.page = this.idioms[this.stage].description.length + 1;
                }
            }
        };

        StudyController.prototype.next = function () {
            if (this.elementary && this.page == 0) {
                this.page = 2;
            } else {
                this.page++;
            }

            if (this.page == this.idioms[this.stage].description.length + 2) {
                this.stage++;
                this.page = 0;
            }

            if (this.stage == this.idioms.length) {
                clearInterval(this.timer);
                this.submit({ studied: Date.now() });
                this.$location.path("/standby").replace();
            }
        };
        return StudyController;
    })();
    Eun.StudyController = StudyController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var SurveyController = (function () {
        function SurveyController($scope, $location, $sce, submit, elementary) {
            this.$scope = $scope;
            this.$location = $location;
            this.$sce = $sce;
            this.submit = submit;
            this.elementary = elementary;
            this.page = 0;
            this.topic = this.elementary ? "속담" : "고사성어";
            this.questions = [
                "(question hard-coded in the view file)",
                "나는 " + this.topic + " 학습하기가 재미있었다.",
                "실수는 주어진 " + this.topic + "에 대한 나의 이해를 높이는 데 도움을 주었다.",
                "실수는 내가 주어진 " + this.topic + "를 이해하는 데 유용한 정보를 제공해 주었다.",
                "나의 실수는 주어진 " + this.topic + "에 대해 이해하는 데 도움을 주었다.",
                "내 실수 덕분에 주어진 " + this.topic + "에 대해 보다 깊은 이해를 할 수 있었다.",
                "높은 점수를 얻고 싶다면, 과제에서 실수하는 것을 두려워해서는 안되었다.",
                "가만히 있는 것보다는 위험을 감수하더라도 실수를 하는 것이 나았다.",
                "과제를 잘 수행하기 위해서라면 나는 기꺼이 실수를 받아들였다.",
                "나는 아무 것도 하지 않는 것보다는 실수하는 것을 더 선호했다.",
                "나는 과제를 하는 도중 실수를 할 때마다 스트레스를 받았다.",
                "나는 과제를 하는 동안 실수를 할까 봐 자주 두려웠다.",
                "나는 과제를 하는 동안 실수를 한 경우 당혹스러웠다.",
                "과제를 하는 동안 실수를 한 경우, 나는 평정심을 잃고 화가 났다.",
                "과제를 하는 동안 나는 내가 무언가를 잘못하지는 않았는지 걱정했다.",
                "과제를 하는 동안 나는 실수를 한 경우에 실수를 어떻게 하게 된 것인지에 대해 생각하고 싶었다.",
                "과제를 하는 동안 나는 어떻게 하면 실수하는 것을 막을 수 있을까에 대해서 종종 생각하고 싶었다.",
                "과제를 하는 동안 정답을 제시하지 못할 경우, 나는 그것을 매우 신중하게 생각하고 싶었다.",
                "과제를 하는 동안 실수를 한 후, 나는 어떻게 실수를 고칠 수 있을까에 대해 오랫동안 신중히 고민하고 싶었다.",
                "과제를 하는 동안 실수가 발생했을 때, 나는 실수에 대해 철저히 분석하고 싶었다.",
                "나는 " + this.topic + " 학습하기를 또 하고 싶다.",
                "나는 " + this.topic + " 학습하기가 즐거웠다.",
                "나는 " + this.topic + " 학습하기가 지루했다."
            ];
            this.vertical = this.questions.map(function (q) {
                return q.indexOf("<") !== -1;
            });
            this.answers = [];
            $scope.vm = this;

            for (var i = 0; i < this.questions.length; i++) {
                this.questions[i] = $sce.trustAsHtml(this.questions[i]);
            }
        }
        SurveyController.prototype.prev = function () {
            if (this.page > 0) {
                this.page--;
            }

            console.log("page : " + this.page);
        };

        SurveyController.prototype.next = function () {
            if (this.page > 0) {
                for (var i = this.page * 4 - 4; i < this.page * 4 && i < this.questions.length; i++) {
                    if (!this.answers[i]) {
                        Eun.alert((i + 1) + "번 문항에 응답해주세요");
                        return;
                    }
                }
            }

            if (this.page < 6) {
                this.page++;
            } else {
                this.submit({
                    survey: this.answers.map(function (x) {
                        return parseInt(x);
                    }),
                    finished: Date.now()
                });

                this.$location.path("/finished").replace();
            }

            console.log("page : " + this.page);
        };

        SurveyController.prototype.save = function () {
            var page = this.page;
        };
        return SurveyController;
    })();
    Eun.SurveyController = SurveyController;
})(Eun || (Eun = {}));
var WebFont;

WebFont.load({
    custom: {
        families: ['NanumBarunGothic', 'NanumBarunGothicBold'],
        urls: ['/css/fonts.css']
    },
    loading: function () {
        return $("#loading").text("Loading...");
    },
    active: function () {
        return $("#loading").remove();
    }
});
var Eun;
(function (Eun) {
    var WelcomeController = (function () {
        function WelcomeController($scope, $location, submit) {
            this.$scope = $scope;
            this.$location = $location;
            this.submit = submit;
            $scope.vm = this;
        }
        WelcomeController.prototype.next = function () {
            this.submit({ welcomed: Date.now() });
            console.log("next");
            this.$location.path("/form").replace();
        };
        return WelcomeController;
    })();
    Eun.WelcomeController = WelcomeController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    function alert(message) {
        $("#alert-message").text(message);
        $("#alert-modal").modal();
    }
    Eun.alert = alert;

    var elementary = location.hostname.substr(2, 1) === 'e';

    Eun.eun.value("elementary", elementary);

    Eun.eun.factory("type", function () {
        var initial = location.hostname.substr(0, 1);
        switch (initial) {
            case '1':
                return 1;
            case '2':
                return 2;
            case '3':
                return 3;
            case '4':
                return 4;
            case '5':
                return 5;
            case '6':
                return 6;
            case '7':
                return 7;
            case '8':
                return 8;
            default:
                return 1;
        }
    });

    Eun.eun.factory("feedback", function (type) {
        switch (type) {
            case 1:
            case 2:
            case 5:
            case 6:
                return "date";
            case 3:
            case 4:
            case 7:
            case 8:
                return "go";
            default:
                throw new Error("unknown type");
        }
    });

    Eun.eun.factory("group", function (type) {
        switch (type) {
            case 1:
            case 2:
            case 3:
            case 4:
                return false;
            case 5:
            case 6:
            case 7:
            case 8:
                return true;
            default:
                throw new Error("unknown type");
        }
    });

    Eun.eun.factory("study", function (type) {
        switch (type) {
            case 1:
            case 3:
            case 5:
            case 7:
                return true;
            case 2:
            case 4:
            case 6:
            case 8:
                return false;
            default:
                throw new Error("unknown type");
        }
    });

    Eun.uuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            return (c == 'x' ? (Math.random() * 16 | 0) : ((Math.random() * 16 | 0) & 0x3 | 0x8)).toString(16);
        });
    };

    Eun.eun.factory('submit', function () {
        return function (data) {
            var id = $.cookie("uuid");
            if (!id) {
                id = Eun.uuid();
                $.cookie("uuid", id);
            }
            console.log("UUID : " + id);

            data["hostname"] = location.hostname;
            data = JSON.stringify(data);
            $.ajax({
                method: "POST",
                url: "/submit/" + id,
                data: data,
                contentType: 'application/json; charset=utf-8'
            }).done(function () {
                console.log("submitted: " + data);
            }).fail(function (xhr, status, error) {
                alert(error);
            });
        };
    });

    Eun.eun.config(function ($routeProvider) {
        console.log("elementary : " + elementary);
        var base = elementary ? el : mid;
        $routeProvider.when("/", {
            title: "영남대학교 인지학습연구회",
            template: base.s00.starter.html,
            controller: "Eun.StarterController"
        }).when("/welcome", {
            title: "환영합니다",
            template: base.s01.welcome.html,
            controller: "Eun.WelcomeController"
        }).when("/form", {
            title: "자기소개",
            template: base.s02.form.html,
            controller: "Eun.FormController"
        }).when("/poll", {
            title: "설문조사",
            template: base.s03.poll.html,
            controller: "Eun.PollController"
        }).when("/prep", {
            title: "학습안내",
            template: base.s04.prep.html,
            controller: "Eun.PrepController"
        }).when("/study", {
            title: "학습",
            template: base.s05.study.html,
            controller: "Eun.StudyController"
        }).when("/standby", {
            title: "준비",
            template: base.s06.standby.html,
            controller: "Eun.StandbyController"
        }).when("/quiz", {
            title: "퀴즈",
            template: base.s07.quiz.html,
            controller: "Eun.QuizController"
        }).when("/survey", {
            titie: "퀴즈",
            template: base.s08.survey.html,
            controller: "Eun.SurveyController"
        }).when("/finished", {
            title: "수고하셨습니다",
            template: base.s09.finished.html,
            controller: "Eun.FinishedController"
        }).otherwise({
            redirectTo: "/"
        });
    });
})(Eun || (Eun = {}));
//# sourceMappingURL=app.js.map
