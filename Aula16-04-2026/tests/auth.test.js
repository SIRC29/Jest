const { cadastrar, login, resetar } = require('../src/auth');

beforeEach(() => {
  resetar();
});

test('Cadastrar usuário → login com credenciais corretas retorna true', () => {
  cadastrar('cris', '123456');
  expect(login('cris', '123456')).toBe(true);
});

test('Login com senha errada → retorna false', () => {
  cadastrar('cris', '123456');
  expect(login('cris', 'errada')).toBe(false);
});

test('Cadastrar usuário duplicado → lança erro', () => {
  cadastrar('cris', '123456');
  expect(() => cadastrar('cris', '123456')).toThrow('Usuário já existe');
});

test('Senha com menos de 6 caracteres → lança erro no cadastro', () => {
  expect(() => cadastrar('cris', '123')).toThrow('Senha muito curta');
});

test('3 tentativas erradas seguidas → 4ª tentativa lança erro Conta bloqueada', () => {
  cadastrar('cris', '123456');

  expect(login('cris', 'err1')).toBe(false);
  expect(login('cris', 'err2')).toBe(false);

  // 3ª já bloqueia
  expect(() => login('cris', 'err3')).toThrow('Conta bloqueada');

  // 4ª continua bloqueado
  expect(() => login('cris', '123456')).toThrow('Conta bloqueada');
});

test('Login com usuário inexistente → retorna false', () => {
  expect(login('naoexiste', '123456')).toBe(false);
});

test('Regressão: após bloqueio, cadastro e login continuam funcionando', () => {
  cadastrar('cris', '123456');

  // força bloqueio
  try { login('cris', '1'); } catch {}
  try { login('cris', '2'); } catch {}
  try { login('cris', '3'); } catch {}

  resetar();

  cadastrar('novo', 'abcdef');
  expect(login('novo', 'abcdef')).toBe(true);
});