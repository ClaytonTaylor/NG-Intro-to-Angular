angular.module('Food',[])

angular.module('Food').controller('menu', [
		'$scope' ,
		chooseFood
]);

function chooseFood($scope) {
	console.log("This is working.")
	$scope.greeting = "Welcome to the Bar!";
	$scope.subGreeting = "Are you over 21 or over?";
		$scope.yes = function() {
			$scope.subGreeting = 'Welcome to the Bar!';
		}
		$scope.list = function() {
			$scope.listDrinks = "Milk, Coffee, Tea."
		}
}