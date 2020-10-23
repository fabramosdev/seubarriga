const request = require('supertest');

const app = require('../src/app');

test('should be able to list all users', () => request(app).get('/users').then((res) => {
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
  expect(res.body[0]).toHaveProperty('name', 'John Doe');
}));

test('Should be able to insert a user', async () => {
  await request(app).post('/users')
    .send({ name: 'Fabiano Ramos', email: 'fabio@gmail.com' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Fabiano Ramos');
    });
});
