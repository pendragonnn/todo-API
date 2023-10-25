const app = require('../../server')
const request = require('supertest')

describe('UPDATE /todo', () => {
  it('responds with json', (done) => {
    const id = 10
    request(app)
      .put(`/todo/${id}`)
      .send({ title: 'belajar', description: 'meningkatkan tubuh'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        expect(res.body.status).toBe("Success")
        expect(res.body.message).toBe(`Successfully update data with id ${id}`)
        return done()
      })
  })
})

describe('UPDATE /todo', () => {
  it('responds with json', (done) => {
    const id = 10000
    request(app)
      .put(`/todo/${id}`)
      .send({ title: 'bertualang', description: 'melelahkan tubuh'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if(err) return done(err)
        expect(res.body.status).toBe("Fail")
        expect(res.body.message).toBe('Data not found')
        return done()
      })
  })
})
