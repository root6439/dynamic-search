export class User {
  constructor(
    public id: string,
    public name: string,
    public nationality: string,
    public age: number,
    public race: 'branco' | 'negro' | 'pardo' | 'amarelo',
    public sex: 'masculino' | 'feminino',
    public familyIncome: number,
    public religion: 'cristao' | 'hindu' | 'budista' | 'judeu',
    public politicalPosition: 'direita' | 'esquerda'
  ) {}
}

export const userList: User[] = [
  new User('1', 'João', 'Brasileiro', 25, 'branco', 'masculino', 50000, 'cristao', 'direita'),
  new User('2', 'Maria', 'Brasileira', 30, 'pardo', 'feminino', 60000, 'hindu', 'esquerda'),
  new User('3', 'Carlos', 'Brasileiro', 22, 'negro', 'masculino', 45000, 'budista', 'direita'),
  new User('4', 'Ana', 'Brasileira', 28, 'branco', 'feminino', 55000, 'judeu', 'esquerda'),
  new User('5', 'Pedro', 'Brasileiro', 35, 'pardo', 'masculino', 70000, 'cristao', 'direita'),
  new User('6', 'Julia', 'Brasileira', 26, 'negro', 'feminino', 48000, 'hindu', 'esquerda'),
  new User('7', 'Gabriel', 'Brasileiro', 29, 'branco', 'masculino', 60000, 'budista', 'direita'),
  new User('8', 'Mariana', 'Brasileira', 32, 'pardo', 'feminino', 65000, 'judeu', 'esquerda'),
  new User('9', 'Lucas', 'Brasileiro', 27, 'negro', 'masculino', 52000, 'cristao', 'direita'),
  new User('10', 'Isabela', 'Brasileira', 31, 'branco', 'feminino', 75000, 'hindu', 'esquerda'),
  new User('11', 'Ricardo', 'Brasileiro', 34, 'pardo', 'masculino', 68000, 'cristao', 'direita'),
  new User('12', 'Fernanda', 'Brasileira', 29, 'negro', 'feminino', 59000, 'hindu', 'esquerda'),
  new User('13', 'Roberto', 'Brasileiro', 26, 'branco', 'masculino', 52000, 'budista', 'direita'),
  new User('14', 'Camila', 'Brasileira', 33, 'pardo', 'feminino', 71000, 'judeu', 'esquerda'),
  new User('15', 'Gustavo', 'Brasileiro', 28, 'negro', 'masculino', 48000, 'cristao', 'direita'),
  new User('16', 'Amanda', 'Brasileira', 31, 'branco', 'feminino', 60000, 'hindu', 'esquerda'),
  new User('17', 'Rodrigo', 'Brasileiro', 27, 'pardo', 'masculino', 55000, 'budista', 'direita'),
  new User('18', 'Beatriz', 'Brasileira', 30, 'negro', 'feminino', 64000, 'judeu', 'esquerda'),
  new User('19', 'Eduardo', 'Brasileiro', 32, 'branco', 'masculino', 73000, 'cristao', 'direita'),
  new User('20', 'Luana', 'Brasileira', 25, 'pardo', 'feminino', 50000, 'hindu', 'esquerda'),
  new User('21', 'Henrique', 'Brasileiro', 29, 'branco', 'masculino', 56000, 'budista', 'direita'),
  new User('22', 'Larissa', 'Brasileira', 26, 'pardo', 'feminino', 52000, 'judeu', 'esquerda'),
  new User('23', 'Felipe', 'Brasileiro', 33, 'negro', 'masculino', 67000, 'cristao', 'direita'),
  new User('24', 'Isaac', 'Brasileiro', 30, 'branco', 'feminino', 59000, 'hindu', 'esquerda'),
  new User('25', 'Renata', 'Brasileira', 27, 'pardo', 'masculino', 54000, 'budista', 'direita'),
  new User('26', 'Vinícius', 'Brasileiro', 32, 'negro', 'feminino', 69000, 'judeu', 'esquerda'),
  new User('27', 'Carla', 'Brasileira', 28, 'branco', 'masculino', 60000, 'cristao', 'direita'),
  new User('28', 'Paulo', 'Brasileiro', 31, 'pardo', 'feminino', 63000, 'hindu', 'esquerda'),
  new User('29', 'Júlio', 'Brasileiro', 26, 'negro', 'masculino', 55000, 'budista', 'direita'),
  new User('30', 'Viviane', 'Brasileira', 29, 'branco', 'feminino', 71000, 'judeu', 'esquerda')
];
