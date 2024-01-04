export class User {
  id: string;
  name: string;
  nacionalidade: string;
  race: 'branco' | 'negro' | 'pardo' | 'amarelo';
  ageGroup: 'bebê' | 'criança' | 'jovem' | 'adulto' | 'idoso';
  sex: 'masculino' | 'feminino';
  socialClass: 'pobre' | 'classe média' | 'rico';
  religion: 'cristão' | 'hindus' | 'budistas' | 'judeus';
  politicalPosition: 'direita' | 'esquerda';
}
