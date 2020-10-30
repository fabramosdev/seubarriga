const request = require('supertest');

const app = require('../../src/app');

test('should be able to list all users', () => request(app).get('/users').then((res) => {
  expect(res.status).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
}));

test('Should be able to insert a user', async () => {
  const email = `${Date.now()}@email.com`;
  await request(app).post('/users')
    .send({ name: 'Fabiano Ramos', email, password: '123456' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Fabiano Ramos');
    });
});
