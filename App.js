class App extends React.Component {

  constructor(props) {
    super(props),
      this.state = {
        name: 'Mariusz',
        age: 25
      }
    console.log('Wywolana metoda constructor(),', this.state.name, this.state.age);
  }

  // componentWillMount() {
  //   console.log('componentWillMount()');
  // }

  componentDidMount() {
    this.setState({
      age: 15,
      name: 'Zenon'
    })
    console.log('componentDidMount()')

  }

  componentDidUpdate() {
    console.log('componentDidUpdate()', this.state.age, this.state.name)

  }

  render() {
    console.log('Wywolana metoda render()');

    return (
      <React.Fragment>
        <p>lifecycle - montowanie komponentu</p>
        <Child />
      </React.Fragment>
    )
  }
}

class Child extends React.Component {
  componentDidMount() {
    console.log('componentDidMount() w komponencie Child')
  }

  render() {
    console.log('render () w komponencie Child');
    return (
      <h1>Dziecko</h1>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('root'));