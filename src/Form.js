import React from 'react'

export default class Form extends React.Component {
    state = {
        fibidx: ''
    }

    change = (e) => {
        this.setState({
            [e.target.number]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render(){
        return (
            <form>
                <div>This is Guru Test of Fibonacci numbers</div>
                <br />
                <input 
                number="fibidx" 
                placeholder='Enter Fibonacci numbers' 
                value={this.state.fibidx} 
                onChange={e => this.change(e)}></input>
                <br />
                <button onClick={e => this.onSubmit(e)}>Click</button>
            </form>
            
        )};

}