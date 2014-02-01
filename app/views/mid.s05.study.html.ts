module mid.s05.study { export var html =  '<div id="slide" class="study" ng-if="!vm.group">	<div ng-if="vm.page == 0" class="large-text">		<p>			{{vm.stage + 1}}. {{vm.idioms[vm.stage].title}}		</p>		<table class="cover">			<tr>				<th ng-repeat="letter in vm.idioms[vm.stage].letters[0] track by $index">{{letter}}</th>			</tr>			<tr>				<td ng-repeat="letter in vm.idioms[vm.stage].letters[1] track by $index" ng-bind-html="letter"></td>			</tr>		</table>	</div>	<div ng-if="vm.page == 1" class="small-text">		<br>		<div class="pink-box" ng-bind-html="vm.idioms[vm.stage].story"></div>	</div>	<div ng-if="vm.page == 2" class="small-text">		<br>		<table class="header">			<tr>				<th ng-repeat="letter in vm.idioms[vm.stage].letters[0] track by $index">{{letter}}</th>			</tr>			<tr>				<td ng-repeat="letter in vm.idioms[vm.stage].letters[1] track by $index" ng-bind-html="letter"></td>			</tr>		</table>		<br>		<div ng-bind-html="vm.idioms[vm.stage].description[vm.page-2]"></div>	</div>	<div ng-if="vm.page > 2" class="small-text">		<p>&nbsp;</p>		<div ng-bind-html="vm.idioms[vm.stage].description[vm.page-2]"></div>	</div>	<div class="timer">		<div class="timer-marker" style="right: 32px; top: -5px;">12</div>		<div class="timer-marker" style="right: 32px; top: 18px;">6</div>		<div class="timer-marker" style="right: 32px; top: 41px;">0</div>		<div class="hider" style="background: white; width: 100%; height: {{vm.hide * 50 / 100}}px;"></div>	</div></div><div id="slide" class="study" ng-if="vm.group">	<p style="text-align: center;">		<span style="background: #1abd14;color: white;display: inline-block;text-align: center;width: 800px;height: 60px;font-size: 32pt;line-height: 60px;">고사성어 학습시간</span>	</p>	<p>&nbsp;</p>	<div class="big-timer">		<table>			<tr>				<td colspan="3">					<div style="background: pink; width: {{100 - vm.hide}}%; height: 50px;"></div>				</td>			</tr>			<tr>				<td style="text-align: left; width: 33.33%;">0</td>				<td style="text-align: center; width: 33.33%;">6</td>				<td style="text-align: right; width: 33.33%;">12</td>			</tr>		</table>	</div></div><div id="nav" ng-if="!vm.group">	<button class="prev" ng-click="vm.prev()" ng-show="vm.stage > 0 || vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()" ng-show="vm.stage !== vm.idioms.length - 1 || vm.page !== vm.idioms[vm.stage].description.length + 1">다음</button></div>' } 