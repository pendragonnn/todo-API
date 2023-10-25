const app = require('../../server')
const request = require('supertest')

describe('DELETE /todo/:id', () => {
  it('responds with json and deletes the todo', (done) => {
    const idDelete = 15
    request(app)
      .delete(`/todo/${idDelete}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if(err) return done(err)
        expect(res.body.status).toBe("Success")
        expect(res.body.message).toBe(`Successfully delete data with id ${idDelete}` )
        return done()
      })
  })
})

describe('DELETE /todo/:id', () => {
  it('responds with json anda 404 status', (done) => {
    const idDelete = 1000
    request(app)
      .delete(`/todo/${idDelete}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err, res) => {
        if(err) return done(err)
        expect(res.body.status).toBe("Fail")
        expect(res.body.message).toBe(`Data not found`)
        return done()
      })
  })
})


