const app = require('../../server')
const request = require('supertest')

describe('POST /todo', () => {
  it('responds with json', (done) => {
    request(app)
      .post('/todo')
      .send({ title: 'minum', description: 'menghidrasi tubuh'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        expect(res.body.status).toBe("Success")
        expect(res.body.message).toMatch(/Successfully add data with id/)
        return done()
      })
  })
})

describe('POST /todo', () => {
  it('responds with error 400', (done) => {
    request(app)
      .post('/todo')
      .send({ title: '', description: ''})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if(err) return done(err)
        expect(res.body.status).toBe("fail")
        expect(res.body.message).toMatch(/login failed/)
        return done()
      })
  })
})

