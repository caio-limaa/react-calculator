import React, {Component} from "react";
import "./styles.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            operation: "",
        }
    }

    showResult = () => {
        let operators = ["+", "*", "-", "/", "%"];
        let verifier = true;
        let operation = this.state.operation;

        operators.forEach(item => {
            if(operation.substr(operation.length - 1) === item) {
                verifier = false;
                return false;
            }
        })

        if(verifier) {
            if(operation.indexOf("%") != -1) {
                let sentence1 = operation.substr(0, operation.indexOf("%"));
                let sentence2 = operation.substr(operation.indexOf("%") + 1, operation.length - 1);

                console.log(sentence1, sentence2);

                this.setState({
                    operation: sentence2 * (sentence1/100),
                })
            }else{
                this.setState(state => ({
                    operation: eval(state.operation),
                }))
            }
        }else{
            alert("Você não pode finalizar expressões com operadores. ");
        }
    }

    updateOperation = event => {
        event.persist();
        this.setState(state => ({
            operation: state.operation + event.target.value
        }))
    }

    deleteOperation = () => {
        this.setState({
            operation: "",
        })
    }

    eraseOperation = () => {
        this.setState(state => ({
            operation: state.operation.substr(0, state.operation.length - 1),
        }))
    }

    render() {

        const operation = this.state.operation;

        return (
            <div className="calculator">
                <div className="output">
                    <p> {operation} </p>
                </div>
                <div className="input">
                    <div className="row row-1">
                        <input onClick={this.deleteOperation} className="function" type="submit" value="C" />
                        <input onClick={this.eraseOperation} className="function" type="submit" value="X" />
                        <input onClick={this.updateOperation} className="operator" type="submit" value="%" />
                        <input onClick={this.updateOperation} className="operator" type="submit" value="/" />
                    </div>
                    <div className="row row-2">
                        <input onClick={this.updateOperation} className="number" type="submit" value="7" />
                        <input onClick={this.updateOperation} className="number" type="submit" value="8" />
                        <input onClick={this.updateOperation} className="number" type="submit" value="9" />
                        <input onClick={this.updateOperation} className="operator" type="submit" value="*" />
                    </div>
                    <div className="row row-3">
                        <input onClick={this.updateOperation} className="number" type="submit" value="4" />
                        <input onClick={this.updateOperation} className="number" type="submit" value="5" />
                        <input onClick={this.updateOperation} className="number" type="submit" value="6" />
                        <input onClick={this.updateOperation} className="operator" type="submit" value="-" />
                    </div>
                    <div className="row row-4">
                        <input onClick={this.updateOperation} className="number" type="submit" value="1" />
                        <input onClick={this.updateOperation} className="number" type="submit" value="2" />
                        <input onClick={this.updateOperation} className="number" type="submit" value="3" />
                        <input onClick={this.updateOperation} className="operator" type="submit" value="+" />
                    </div>
                    <div className="row row-5">
                        <input onClick={this.updateOperation} className="number" type="submit" value="0" />
                        <input onClick={this.updateOperation} className="number" type="submit" value="." />
                        <input onClick={this.showResult} className="operator" type="submit" value="=" />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;