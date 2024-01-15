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
  new User('1', 'João', 'Brasileiro', 30, 'branco', 'masculino', 5000, 'cristao', 'direita'),
  new User('2', 'Maria', 'Brasileira', 25, 'pardo', 'feminino', 4000, 'cristao', 'esquerda'),
  new User('3', 'Carlos', 'Português', 45, 'branco', 'masculino', 8000, 'cristao', 'direita'),
  new User('4', 'Ana', 'Brasileira', 10, 'negro', 'feminino', 0, 'budista', 'esquerda'),
  new User('5', 'Pedro', 'Brasileiro', 28, 'amarelo', 'masculino', 6000, 'hindu', 'direita'),
  new User('6', 'Luiza', 'Brasileira', 35, 'pardo', 'feminino', 7000, 'cristao', 'esquerda'),
  new User('7', 'Miguel', 'Espanhol', 50, 'branco', 'masculino', 9000, 'judeu', 'direita'),
  new User('8', 'Isabela', 'Brasileira', 1, 'negro', 'feminino', 0, 'cristao', 'esquerda'),
  new User('9', 'Gabriel', 'Brasileiro', 32, 'branco', 'masculino', 7500, 'hindu', 'direita'),
  new User('10', 'Fernanda', 'Brasileira', 27, 'amarelo', 'feminino', 5500, 'cristao', 'esquerda'),
];
