var s01;
(function (s01) {
    (function (welcome) {
        welcome.html = '<div id="slide" class="large-text">	<p>		안녕하세요, 여러분! <br>		만나서 반갑습니다.	</p>	<p>		여러분은 지금부터 서울대학교 인지학습연구회에서 선정한<br>		<span class="green">&quot;중학생이 꼭 알아야 할 고사성어&quot;</span>를 학습하게 될 것입니다.	</p>	<p>		학습을 시작하기에 앞서<br>		40개의 문항에 대해 여러분의 솔직한 답변을 부탁드립니다.	</p>	<button class="next" ng-click="vm.next()">다음</button></div>';
    })(s01.welcome || (s01.welcome = {}));
    var welcome = s01.welcome;
})(s01 || (s01 = {}));
var s02;
(function (s02) {
    (function (form) {
        form.html = '<div id="slide" class="large-text">	<form>		<p>			먼저 자신에 대해서 적어봅시다.		</p>		<p>			1.			<input id="form-school" type="text" ng-model="vm.school" size="6"><label for="form-school">중학교</label>			<input id="form-year" type="text" ng-model="vm.year" size="2"><label for="form-year">학년</label>			<input id="form-classroom" type="text" ng-model="vm.classroom" size="2"><label for="form-classroom">반</label>			<input id="form-id" type="text" ng-model="vm.id" size="2"><label for="form-id">번</label>		</p>		<p>			2. 성별			<input id="form-male" type="radio" ng-model="vm.gender" name="gender" value="male"> <label for="form-male">남</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-female" type="radio" ng-model="vm.gender" name="gender" value="female"> <label for="form-female">여</label>		</p>		<p>			3. 집에서 주로 사용하는 언어는 무엇입니까?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-korean" type="radio" ng-model="vm.language" name="language" value="korean"> <label for="form-korean">한국어</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-english" type="radio" ng-model="vm.language" name="language" value="english"> <label for="form-english">영어</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;			<input id="form-other" type="radio" ng-model="vm.language" name="language" value="other"> <label for="form-other">기타</label>			(<input id="form-language" type="text" ng-model="vm.other" size="5">)		</p>	</form>	<button class="next" ng-click="vm.next()">다음</button></div>';
    })(s02.form || (s02.form = {}));
    var form = s02.form;
})(s02 || (s02 = {}));
var s03;
(function (s03) {
    (function (poll) {
        poll.html = '<div id="slide" class="large-text">	<div ng-show="vm.page == 0">		다음 문항들은 여러분의 생각에 대한 질문입니다.<br>		주의깊게 읽으시고, 자신의 생각과 <span class="green">얼마나 비슷한지 표시</span>해 주시면 됩니다.<br>		정답이 있거나 좋고 나쁜 답이 있는 것이 아니므로<br>		<span class="green">&quot;내 생각과 가장 비슷하다&quot;고 생각하는 쪽</span>으로 편안하게 표시하십시오.<br>		<br>		<div class="round-box">		    1 ---------- 2 ---------- 3 ---------- 4 ---------- 5<br>	    전혀 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		조금 다르다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		보통이다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		조금 비슷하다&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;		아주 비슷하다		</div>	</div>	<div ng-show="vm.page > 0">		<table style="width: 100%;">			<tr>				<th width="40px"></th>				<th></th>				<th width="40px">1<br>전혀<br>다르다</th>				<th width="40px"></th>				<th width="40px"></th>				<th width="40px"></th>				<th width="40px">5<br>아주<br>비슷하다</th>			</tr>			<tr ng-repeat="n in [vm.page * 4 - 4, vm.page * 4 - 3, vm.page * 4 - 2, vm.page * 4 - 1]">				<td>{{n+1}}</td>				<td style="text-align: left;">{{vm.questions[n]}}</td>				<td ng-repeat="a in [1,2,3,4,5]">					{{a}}<br>					<input type="radio" name="question-{{n}}" value="{{a}}" ng-model="vm.answers[n]">				</td>			</tr>		</table>	</div>	<button class="prev" ng-click="vm.prev()" ng-show="vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()">다음</button></div>';
    })(s03.poll || (s03.poll = {}));
    var poll = s03.poll;
})(s03 || (s03 = {}));
var s04;
(function (s04) {
    (function (prep) {
        prep.html = '<div id="slide" class="large-text">	<div ng-show="vm.page == 0">		<p>			오늘 여러분이 학습할 고사성어는 중학교 국어 및 한문 교과서에서 자주 다루는 수업 내용으로			<span class="green">&quot;중학생이 꼭 알아야 할 고사성어&quot;</span>로 선정되어 있으며			전국적으로 실시되는 하업능력평가에서도 많은 비중을 차지하기 때문에 고사성어를 학습하는 것은 매우 중요합니다.		</p>		<p>			지난 일 년 동안 많은 중학교에서 <span class="green">&quot;중학생이 꼭 알아야 할 고사성어&quot;</span>			학습프로그램으로 고사성어를 열심히 공부한 학생들은 진단평가에서 높은 성적을 거두는 것으로 보고되고 있습니다.		</p>	</div>	<div ng-show="vm.page == 1">		<p>			여러분들은 지금부터 <span class="pink">12분 동안</span><br>			<span class="green">&quot;중학생이 꼭 알아야 할 고사성어&quot;</span> 학습프로그램을 통해<br>			고사성어를 학습하게 됩니다.		</p>		<p>			학습하고 난 후에는<br>			스피드 퀴즈를 통해 자신의 이해를 점검하게 됩니다.		</p>	</div>	<div ng-show="vm.page == 2">		<p>			스피드퀴즈는 <span class="big green">총 20문제</span>로 이루어져 있으며,<br>			10분 동안 화면에 주어지는 문제를 보고<br>			정답을 선택하면 됩니다.		</p>		<p>			<span class="blue">정답</span>을 선택할 경우 <span class="blue">5점</span>을 획득하지만,			<span class="red">오답</span>을 선택할 경우 <span class="red">2점</span>을 잃게 됩니다.		</p>	</div>	<div ng-show="vm.page == 3">		<p>			오늘 수업에서 여러분의 목표는		</p>		<p>			중학생들이 <span class="big green">꼭</span> 알아야 할 <span class="big green">고사성어에 대해 배우고</span>		</p>		<p>			<span class="big">과제를 수행하며</span> <span class="big green">완전히 이해하는 것</span>입니다.		</p>	</div>	<div ng-show="vm.page == 4">		<p style="text-align: center;">			과제를 통한 새로운 학습방법으로 <span class="big green">재미있게</span> 학습해 보세요.<br><br>			<button ng-click="vm.next()" style="width: 600px; height: 50px; background-color: green; color: white; font-size: 18pt; border: 0;">				고사성어 학습하기			</button>		</p>	</div>	<button class="prev" ng-click="vm.prev()" ng-show="vm.page > 0 && vm.page < 4">이전</button>	<button class="next" ng-click="vm.next()" ng-show="vm.page < 4">다음</button></div>';
    })(s04.prep || (s04.prep = {}));
    var prep = s04.prep;
})(s04 || (s04 = {}));
var s05;
(function (s05) {
    (function (study) {
        study.html = '<div id="slide" class="large-text">	<div ng-show="vm.page == 0">	</div>	<button class="prev" ng-click="vm.prev()" ng-show="vm.page > 0">이전</button>	<button class="next" ng-click="vm.next()">다음</button></div>';
    })(s05.study || (s05.study = {}));
    var study = s05.study;
})(s05 || (s05 = {}));
var Eun;
(function (Eun) {
    Eun.eun = angular.module("eun", ["ngRoute"]);

    Eun.eun.run(function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    });

    Eun.eun.factory('safeApply', [
        function ($rootScope) {
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
        }
    ]);
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var FormController = (function () {
        function FormController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
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
                alert("중학교, 학년, 반, 번호를 입력하세요");
                return;
            }
            if (!this.gender) {
                alert("성별을 입력하세요");
                return;
            }
            if (!this.language) {
                alert("집에서 주로 사용하는 언어를 입력하세요");
                return;
            }
            if (this.language == "other" && !this.other) {
                alert("집에서 주로 사용하는 언어가 무엇인지 괄호 안에 입력해 주세요");
                return;
            }

            this.$location.path("/poll");
        };
        return FormController;
    })();
    Eun.FormController = FormController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var PollController = (function () {
        function PollController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            this.page = 0;
            this.questions = [
                "실수는 내 공부를 향상시키는 데 도움을 준다.",
                "실수는 내가 공부를 계속하는 데 유용한 유용한 정보를 제공해 준다.",
                "나의 실수는 내 공부를 발전시키는 데 도움을 준다.",
                "내 실수 덕분에 나는 공부에서 발전을 이룰 수 있었다.",
                "공부를 잘 하고 싶다면, 실수하는 것을 두려워해서는 안된다.",
                "가만히 있는 것보다는 위험을 감수하더라도 실수를 하는 것이 낫다.",
                "공부를 잘 하기 위해서라면 나는 기꺼이 실수를 받아들이겠다.",
                "나는 아무것도 하지 않는 것보다는 실수하는 것을 더 선호한다.",
                "나는 실수를 할 때마다 스트레스를 받는다.",
                "나는 실수를 할까봐 자주 두려워한다.",
                "나는 실수를 하면 당혹스럽다.",
                "공부할 때 실수를 하면 나는 감정을 통제하지 못하고 화가 난다",
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
                "나는 고사성어 학습프로그램에서 다루어지는 내용을 잘 이해할 자신이 있다.",
                "나는 고사성어 학습프로그램을 매우 잘 할 수 있다고 확신한다.",
                "나는 고사성어 학습프로그램에서 주어진 문제나 숙제를 성공적으로 해낼 수 있다고 확신한다.",
                "나는 고사성어 학습프로그램에서 좋은 성적을 받을 것이라고 생각한다.",
                "나는 고사성어 학습프로그램에서 다루어지는 내용을 잘 배울 것이라고 생각한다.",
                "나는 고사성어 학습프로그램에서 다뤄지는 내용들이 중요하다고 생각한다.",
                "나는 고사성어 학습프로그램에서 배우는 내용들이 재미있다고 생각한다.",
                "나는 고사성어 학습프로그램에서 배우는 내용들이 유용하다고 생각한다."
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
            if (this.page < 10) {
                this.page++;
            } else {
                for (var i = 0; i < this.questions.length; i++) {
                    if (!this.answers[i]) {
                        alert((i + 1) + "번 문항에 응답해주세요");
                        return;
                    }
                }

                this.$location.path("/prep");
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
        function PrepController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            this.page = 0;
            $scope.vm = this;
        }
        PrepController.prototype.prev = function () {
            if (this.page > 0) {
                this.page--;
            }
        };

        PrepController.prototype.next = function () {
            if (this.page < 4) {
                this.page++;
            } else {
                this.$location.path("/study");
            }
        };
        return PrepController;
    })();
    Eun.PrepController = PrepController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    var WelcomeController = (function () {
        function WelcomeController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            $scope.vm = this;
        }
        WelcomeController.prototype.next = function () {
            console.log("next");
            this.$location.path("/form");
        };
        return WelcomeController;
    })();
    Eun.WelcomeController = WelcomeController;
})(Eun || (Eun = {}));
var Eun;
(function (Eun) {
    Eun.eun.config(function ($routeProvider) {
        $routeProvider.when("/", {
            title: "환영합니다",
            template: s01.welcome.html,
            controller: "Eun.WelcomeController"
        }).when("/form", {
            title: "자기소개",
            template: s02.form.html,
            controller: "Eun.FormController"
        }).when("/poll", {
            title: "설문조사",
            template: s03.poll.html,
            controller: "Eun.PollController"
        }).when("/prep", {
            title: "학습안내",
            template: s04.prep.html,
            controller: "Eun.PrepController"
        }).when("/study", {
            title: "학습",
            template: s05.study.html,
            controller: "Eun.PrepController"
        }).otherwise({
            redirectTo: "/"
        });
    });
})(Eun || (Eun = {}));
//# sourceMappingURL=app.js.map
