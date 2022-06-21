import React, { Component } from "react";
import github from "./apis/github";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

class App extends Component {
    state = { commits: [] }

    handleSubmit = async (owner, repo) => {
        const res = await github.get(`/${owner}/${repo}/commits`, {
        })

        this.setState({ commits: res.data })

    }

    render() {
        return (
            <div>
                <Header />
                <SearchBar onFormSubmit={this.handleSubmit} />
            </div >
        )
    }
};

export default App;