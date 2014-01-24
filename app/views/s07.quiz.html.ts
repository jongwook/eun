module s07.quiz { export var html =  '<div id="slide" class="quiz large-text">	<h1 ng-if="vm.page <= 1">문제 {{vm.stage + 1}}. <span ng-bind-html="vm.problems[vm.stage].question"></span></h1>	<div ng-if="vm.page <= 1">		<div ng-if="vm.problems[vm.stage].type === 3">			<table class="cover">				<tr>					<th ng-repeat="letter in vm.problems[vm.stage].letters[0] track by $index" style="background-color: {{letter ? \'\' : \'#FF007F\'}}">{{letter}}</th>				</tr>				<tr>					<td ng-repeat="letter in vm.problems[vm.stage].letters[1] track by $index" ng-bind-html="letter"></td>				</tr>			</table>		</div>		<div ng-if="vm.problems[vm.stage].type !== 2 || vm.page === 1 && vm.problems[vm.stage].type === 2">			<br>			<table>				<tr>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][0]" ng-value="true" ng-click="vm.clicked(0)"						       id="quiz-option-1">						<label for="quiz-option-1">① {{vm.problems[vm.stage].options[0]}}</label>					</td>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][1]" ng-value="true" ng-click="vm.clicked(1)"						       id="quiz-option-2">						<label for="quiz-option-2">② {{vm.problems[vm.stage].options[1]}}</label>					</td>				</tr>				<tr>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][2]" ng-value="true" ng-click="vm.clicked(2)"						       id="quiz-option-3">						<label for="quiz-option-3">③ {{vm.problems[vm.stage].options[2]}}</label>					</td>					<td>						<input type="{{vm.problems[vm.stage].type === 1 ? \'checkbox\' : \'radio\'}}"						       ng-model="vm.answers[vm.stage][3]" ng-value="true" ng-click="vm.clicked(3)"						       id="quiz-option-4">						<label for="quiz-option-4">④ {{vm.problems[vm.stage].options[3]}}</label>					</td>				</tr>			</table>		</div>		<div ng-if="vm.problems[vm.stage].type === 2 && vm.page === 0">			<img src="{{vm.problems[vm.stage].image}}">		</div>	</div>	<div ng-if="vm.page === 2" class="result">		<div style="position: absolute; left: 200px; top: 100px;">			<img src="images/correct1.jpg">		</div>		<div style="position: absolute; right: 150px; top: 200px;">			<img src="images/correct2.jpg">		</div>		<p style="line-height: 480px; font-size: 30pt;">맞았습니다</p>	</div>	<div ng-if="vm.page === 3" class="result">		<div style="position: absolute; left: 200px; top: 100px;">			<img src="images/wrong1.jpg">		</div>		<div style="position: absolute; right: 200px; top: 150px;">			<img src="images/wrong2.jpg">		</div>		<p style="line-height: 480px; font-size: 30pt;">틀렸습니다</p>	</div>	<div ng-if="vm.page === 4">		<p>			지금까지 총 {{vm.problems.length}}문제 중 <span class="big blue">{{vm.stage}}문제</span>를 풀었으며			<br>			본 과제를 통해 얻을 수 있는<br>			최고 점수 100점 중 <span class="big blue">{{vm.score}}점</span>을 얻었습니다.		</p>		<div class="score-bar">			<div ng-if="vm.feedback === \'date\'" class="score-gauge-date" style="left: {{(vm.score > 0) ? 33 : 0}}%; width:{{(vm.score > 0 ? vm.score : vm.score + 50)/3*2 }}%">{{vm.score}}점</div>			<div ng-if="vm.feedback === \'go\'" class="score-gauge-go" style="width:{{100 - (vm.score + 50)/150 * 100}}%">{{vm.score}}점</div>		</div>		<div style="font-size: 14pt; text-align: center; white-space: nowrap; padding-top: 10px; position: relative; left: -18px;">			-50　　　　　　　　　　　　　　　　　　0　　　　　　　　　　　　　　　　　　50　　　　　　　   　　　　　　　　　　　100		</div>	</div>	<div class="timer">		<div class="timer-marker" style="right: 32px; top: -5px;">10</div>		<div class="timer-marker" style="right: 32px; top: 16px;">5</div>		<div class="timer-marker" style="right: 32px; top: 41px;">0</div>		<div class="hider" style="background: white; width: 100%; height: {{vm.hide * 50 / 100}}px;"></div>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-show="vm.page === 1">이전</button>	<button class="skip" ng-click="vm.skip()" ng-show="vm.page <= 1 && vm.skips > 0">SKIP ({{vm.skips}})</button>	<button class="next" ng-click="vm.next()">다음</button></div>' } 