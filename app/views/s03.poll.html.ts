module s03.poll { export var html =  '<div id="slide" class="large-text poll">	<div ng-show="vm.page == 0">		다음 문항들은 여러분의 생각에 대한 질문입니다.<br>		주의깊게 읽으시고, 자신의 생각과 <span class="green">얼마나 비슷한지 표시</span>해 주시면 됩니다.<br>		정답이 있거나 좋고 나쁜 답이 있는 것이 아니므로<br>		<span class="green">&quot;내 생각과 가장 비슷하다&quot;고 생각하는 쪽</span>으로 편안하게 표시하십시오.<br>		<br>		<div class="round-box">		    1 ---------- 2 ---------- 3 ---------- 4 ---------- 5<br>	    전혀 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		조금 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		보통이다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		조금 비슷하다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		아주 비슷하다		</div>	</div>	<div ng-show="vm.page > 0">		<table style="width: 100%;">			<tr>				<th width="40px"></th>				<th></th>				<th width="50px">1<br>전혀<br>다르다</th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px"></th>				<th width="50px">5<br>아주<br>비슷하다</th>			</tr>			<tr ng-repeat="n in [vm.page * 4 - 4, vm.page * 4 - 3, vm.page * 4 - 2, vm.page * 4 - 1]">				<td>{{n+1}}</td>				<td style="text-align: left;">{{vm.questions[n]}}</td>				<td ng-repeat="a in [1,2,3,4,5]">					{{a}}<br>					<input type="radio" name="question-{{n}}" value="{{a}}" ng-model="vm.answers[n]">				</td>			</tr>		</table>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-show="vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()">다음</button></div>' } 