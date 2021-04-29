class App extends React.Component {
    state = {
        nom: "",
        message: "",
        comments: []
    }

    changeName = (event) => {
        this.setState({
            nom: event.target.value
        })
    }
    changeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    keepComments = (event) => {
        event.preventDefault();
        let newComments = [...this.state.comments,'name:'+this.state.nom, 'message:' + this.state.message];
        this.setState({
            comments: newComments
        })
    }

    render() {
        return (
            <section>
                <h1 className="title__form">Say something</h1>
                <form className="form">
                    <input className="form__content" type="text" id="searchGoogle"
                    placeholder="Your Name*"
                    onChange={this.changeName}
                    value={this.state.nom}/>
                    <textarea className="form__content" name="" id="" cols="30" rows="10" placeholder="Your Comment*"
                    onChange={this.changeMessage}
                    value={this.state.message}></textarea>
                    <input className="btn" onClick={this.keepComments}type="submit" value="Comment"/>
                </form>
            </section>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));