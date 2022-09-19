import React, { Component } from 'react'
import students from '../../../data/students.json'
import StudentInfo from '../StudentInfo/StudentInfo'

class Counter extends Component {
  //ESTADO INICIAL DEL COMPONENTE
  state = {
    count: 3,
    title: 'Pepe',
    info: []
  }

  add = (event) => {
    const numberToIncrement = Number(event.target.value) || 1 // target.value siempre es string, por eso necesito el number

    this.setState({ count: this.state.count + (numberToIncrement) }, () => {
      console.log('added 1')
    }) // no puedo poner ++ porque sino modifico this.state y eso no mola
  }

  reduce = () => {
    this.setState((prevState) => { // con esto te pagan 100€ mas en la nomina
      return {
        count: prevState.count - 1
      }
    })
  }

  getInfo = () => {
    this.setState({ info: students })
  }

  // ESCRIBIREMOS ASI
  resetTitle = () => { // asi lo declaro como un atributo que es igual a una funcion y ya no necesito el bind
    this.setState({ title: 'Counter' })
  }

  render() {
    console.log('render')

    const obj = { name: 'pablo' } // no se puede renderizar objetos directamente

    const { title, count, info } = this.state
    return (
      <div>
        {/* <h1>{this.props.title}</h1> */}
        <h1>{title}</h1>
        <h2>{count}</h2>

        <pre>{JSON.stringify(obj)}</pre>

        <button onClick={this.add}>Add</button>
        <button onClick={this.reduce}>Reduce</button>
        <button onClick={this.resetTitle}>Reset title</button>
        <button value={5} onClick={this.add}>Add 5</button>
        <button onClick={this.getInfo}>Get students</button>

        <h2>Render info</h2>

        {
          info && info.length > 0 // usamos ternarios porque ifs no se puede para pintar cosas de forma condicional
            ? ( // caso truthy
              info.map((student) => { // siempre que pueda uso algo unico en la key, ejemplo: id. La key se pone en el elemento padre de lo que renderice
                return (
                  <StudentInfo key={student.id} {...student} count={count} numberOfStudents={info.length} />
                )
              })
            ) : ( // caso falsy
              <p>No hay students que pintar</p>
            )
        }

        {/* {
          info.map(({ name, age, id }, index) => { // siempre que pueda uso algo unico en la key, ejemplo: id. La key se pone en el elemento padre de lo que renderice
            return (
              <div key={id}> 
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            )
          })
        } */}

      </div>
    )
  }
}

export default Counter