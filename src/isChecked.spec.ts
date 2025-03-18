import { isChecked } from './Checklist/isChecked';

test('test isChecked - happy case', () => {
  const result = isChecked([1, 2, 3], 2);

  expect(result).toBe(true);
});

test('test isChecked - bad case', () => {
  const result = isChecked([1, 2, 3], 4);

  expect(result).toBe(false);
});
