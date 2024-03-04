import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };
    }

    incrementarContador = () => {
        this.setState((prevState) => ({
            contador: prevState.contador + 1,
        }));
    };

    render() {
        return (
            <div>
                <p>Contador: {this.state.contador}</p>
                <button onClick={this.incrementarContador}>Incrementar</button>
            </div>
        );
    }
}

export default Page;