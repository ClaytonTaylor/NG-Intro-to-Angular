// Part 2

angular.module("Part2", []);

angular.module("Part2")
	.controller('alpha', [
		'$scope',
		pt2

		]);

	function pt2 ($scope) {
		$scope.headingOne = "Intro to Angular";
		$scope.exclamation = "!";
		$scope.exclamation2 = "!";
		$scope.exclamation3 = "!";
		$scope.remove = " ";

			$scope.showConfirm = function() {
				var x = confirm("Are you sure you want to Navigate to this State?");
				if (x === true) {
					window.location = this.href;
				}
				else {
					event.preventDefault();
					
				}
			}
	}