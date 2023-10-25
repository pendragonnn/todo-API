const app = require('../../server')
const request = require('supertest')

describe('GET /todo/:id', () => {
  it('responds with json', (done) => {
    const id = 9
    request(app)
      .get(`/todo/${id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        expect(res.body.status).toBe("Success")
        expect(res.body.data.title).toBe('mandi')
        expect(res.body.data.description).toBe('membersihkan tubuh')
        expect(res.body.data.completed).toBeFalsy()
        return done()
      })
  })
})

describe('GET /todo/:id', () => {
  it('responds with json', (done) => {
    const id = 1000
    request(app)
      .get(`/todo/${id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if(err) return done(err)
        expect(res.body.status).toBe("Fail")
        expect(res.body.message).toBe("Data not found")
        return done()
      })
  })
})