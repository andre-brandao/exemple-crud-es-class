export function getEnderecoFromCEP(cep:string) {
	return fetch(`https://viacep.com.br/ws/${cep}/json/`)
		.then((res) => res.json())
		.then((data) => {
			if (data.erro) {
				return null;
			}
			return data;
		});
}