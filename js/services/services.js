teste.factory("moveisAPI", function () {
	//Móveis
	var _moveis = [
		//{imagem: "blabal.jpg", codigo: "423423", nome: "teste", altura: "33", largura: "2", profundidade: "12", descricao: "blabalbalablabla", camadas: [{image: "yyy.yyyy.yyyy"}, {image: "yyy.yyyy.yyyy"}]}	
	];

	var _medidas = [
		{id: "cm", medida: "Centrimetros",},
		{id: "m",medida: "Metros",}
	];

	var _getMoveis = function () {
		return _moveis;
	};

	var _getMedidas = function () {
		return _medidas;
	};

	var _saveMovel = function (movel, medida){
		movel.altura = movel.altura+" "+medida.altura;
		movel.largura = movel.largura+" "+medida.largura;
		movel.profundidade = movel.profundidade+" "+medida.profundidade;
		_moveis.push(movel);
		return _moveis;
	};

	return {
		getMoveis: _getMoveis,
		saveMovel: _saveMovel,
		getMedidas: _getMedidas
	};
});