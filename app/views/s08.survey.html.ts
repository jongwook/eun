module s08.survey { export var html =  '<div id="nav">	<button class="prev" ng-click="vm.prev()" ng-show="vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()">다음</button></div><div id="slide" class="large-text survey">	<div ng-show="vm.page == 0">		주어진 10분이 모두 지났습니다.<br>		문항을 주의 깊게 읽으시고 <span class="pink">느낀 그대로 솔직하게</span> 대답해주세요.<br>		<br>		<div class="round-box">			1 ---------- 2 ---------- 3 ---------- 4 ---------- 5<br>			전혀 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			조금 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			보통이다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			조금 비슷하다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			아주 비슷하다		</div>	</div>	<div ng-show="vm.page > 0">		<table style="width: 100%;">			<tr>				<th width="40px"></th>				<th></th>				<th width="50px">1<br>전혀<br>다르다</th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px">5<br>아주<br>비슷하다</th>			</tr>			<tr ng-repeat="n in [vm.page * 4 - 4, vm.page * 4 - 3, vm.page * 4 - 2, vm.page * 4 - 1]">				<td>{{n+1}}</td>				<td ng-if="vm.vertical[n]" colspan="6" style="text-align: left;" ng-bind-html="vm.questions[n]"></td>				<td ng-if="!vm.vertical[n]" style="text-align: left;" ng-bind="vm.questions[n]"></td>				<td ng-if="!vm.vertical[n]" ng-repeat="a in [1,2,3,4,5]">					<label for="survey-{{n}}-{{a}}">{{a}}</label><br>					<input id="survey-{{n}}-{{a}}" type="radio" name="question-{{n}}" value="{{a}}" ng-model="vm.answers[n]">				</td>			</tr>		</table>	</div></div>' } 