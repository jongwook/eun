module s05.study { export var html =  '<div id="slide" class="study">	<div ng-show="vm.page == 0" class="large-text">		<p>			{{vm.stage + 1}}. {{vm.idioms[vm.stage].title}}		</p>		<table class="cover">			<tr>				<th ng-repeat="letter in vm.idioms[vm.stage].letters">{{letter[0]}}</th>			</tr>			<tr>				<td ng-repeat="letter in vm.idioms[vm.stage].letters" ng-bind-html="letter[1]"></td>			</tr>		</table>	</div>	<div ng-show="vm.page == 1" class="small-text">		<p>&nbsp;</p>		<p>&nbsp;</p>		<div class="pink-box" ng-bind-html="vm.idioms[vm.stage].story"></div>	</div>	<div ng-show="vm.page == 2" class="small-text">		<p>&nbsp;</p>		<table class="header">			<tr>				<th ng-repeat="letter in vm.idioms[vm.stage].letters">{{letter[0]}}</th>			</tr>			<tr>				<td ng-repeat="letter in vm.idioms[vm.stage].letters" ng-bind-html="letter[1]"></td>			</tr>		</table>		<p>&nbsp;</p>		<div ng-bind-html="vm.idioms[vm.stage].description[vm.page-2]"></div>	</div>	<div ng-show="vm.page > 2" class="small-text">		<p>&nbsp;</p>		<div ng-bind-html="vm.idioms[vm.stage].description[vm.page-2]"></div>	</div>	<div class="timer">		<div class="hider" style="background: white; width: 100%; height: {{vm.hide * 50 / 100}}px;"></div>	</div></div><div id="nav">	<button class="prev" ng-click="vm.prev()" ng-show="vm.stage > 0 || vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()">다음</button></div>' } 