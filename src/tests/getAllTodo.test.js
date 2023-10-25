const app = require('../../server')
const request = require('supertest')

describe('GET /todo', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/todo/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        expect(res.body.status).toBe("Success")
        expect(res.body.data.length).toBeGreaterThanOrEqual(5)
        return done()
      })
  })
})