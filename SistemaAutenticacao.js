// Conceito Polimorfismo


/* 
  Ser autenticavel, neste caso, significa ter o método autenticar.

  Este método se chama Duck Typing, e é característico de
linguagens fracamente tipada.

  "Se ele anda como um pato e faz quack como um pato, então
ele deve ser um pato"
*/



class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  };

  static ehAutenticavel(autenticavel) {
    return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
  };
}

export { SistemaAutenticacao }