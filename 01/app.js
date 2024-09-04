import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    constructor(props) {
        console.log('constructor')

        super(props);
        this.state = {
            counter: 0,
        }
    }
    render() {
        console.log('render');

        return <h1>{ this.state.counter }</h1>
    }
    componentDidMount() {
        console.log('componentDidMount');

        this.id = setInterval(() => {
            const {counter} = this.state;
            this.setState( {counter: counter +1})
        }, 5000);
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');

        if (this.state.counter == 1) {
            this.componentWillUnmount();
        };
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');

        clearInterval(this.id)
    }
}

root.render(<App/>);
