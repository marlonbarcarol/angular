teste.controller("mainCtrl", function ($scope, moveisAPI, config) {
	$scope.app = "Teste";

	// PATTERNS - NG-PATTERNS
	$scope.onlyWord = /^\s*\w*\s*$/;
	$scope.onlyNumber = /^\d+$/;
	$scope.numberDotNumber = /^[0-9]+(?:\.[0-9]+)?$/;

	// Móveis
	$scope.loadMoveis = function () {
		$scope.moveis = moveisAPI.getMoveis();
	}

	$scope.addMovel = function (movel, medida) {
		$scope.moveis = moveisAPI.saveMovel(angular.copy(movel), angular.copy(medida));
		delete $scope.movel;
		$scope.movelForm.$setPristine();
	};

	$scope.apagarMoveis = function (moveis) {
		$scope.moveis = moveis.filter(function (movel) {
			if (!movel.selecionado) 
				return movel;
		});
	};

	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	$scope.log = function (campo) {
		console.log(campo);
	};

	$scope.validClass = function (campo, classeQuandoValido, classeQuandoInvalido) {
		if(campo.$valid){
			return classeQuandoValido;
		}else{
			return classeQuandoInvalido;
		}
	};

	$scope.validSelect = function (campo) {
		$scope.medida.altura
	};

	// Medidas
	$scope.loadMedidas = function () {
		$scope.medidas = moveisAPI.getMedidas();
	}

	// Load itens
	$scope.loadMoveis();
	$scope.loadMedidas();
});

