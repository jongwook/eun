module s06.standby { export var html =  '<div id="nav">	<button class="next" ng-click="vm.next()" ng-show="vm.page == 1">다음</button></div><div id="slide" class="large-text">	<div ng-if="vm.page == 0">		<p style="text-align: center;">			열심히 공부했나요?<br><br>			이제부터 <button ng-click="vm.next()" style="width: 150px; height: 40px; background-color: deeppink; color: white; font-size: 18pt; border: 0;">S T A R T</button> 버튼을 누르시고<br>			<span class="big pink">10분</span> 동안 스피드 퀴즈를 풀어봅시다<br><br>			<button ng-click="vm.next()" style="width: 600px; height: 50px; background-color: deeppink; color: white; font-size: 18pt; border: 0;">				S T A R T			</button>		</p>	</div>	<div ng-if="vm.page == 1">		<h1 style="color:red;">			다시 한 번 기억하세요!		</h1>		<p>			<br>			오늘 수업에서 여러분의 목표는<br>			중학생들이 <span class="pink">꼭</span> 알아야 할 <span class="pink">고사성어에 대해 배우고</span><br><br>			<span class="big">과제를 수행하며 </span><span class="big pink">완전히 이해하는 것</span>입니다.		</p>	</div></div>' } 