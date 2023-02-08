import { filterPok } from '../src/filter.js';


describe('filterPok', () => {
  it('is a function', () => {
    expect(typeof filterPok).toBe('function');
  });

  it('deberia retornanos todo los pokemones "bug" ', () => {
    expect(filterPok(bug)).toBe(bug);
  });

  it('deberia retornanos todo los pokemones "poison" ', () => {
    expect(filterPok(poison)).toBe(poison);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
