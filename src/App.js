import React, { Component } from "react";
import github from "./apis/github";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CommitList from "./components/CommitList";
import "./styles/App.css";

class App extends Component {
    state = { commits: [], owner: '', repo: '' };

    handleSubmit = async (owner, repo) => {
        this.setState({ owner, repo });
        try {
            const res = await github.get(`/${owner}/${repo}/commits`, {
            });

            this.setState({ commits: res.data });
        }
        catch (e) {
            console.log(e, "Something went wrong");
            this.setState({ commits: [] });
        }

    }

    render() {
        return (
            <div className="p-3 mb-2 bg-dark text-white" id="app">
                <Header />
                <SearchBar onFormSubmit={this.handleSubmit} />
                <CommitList
                    commits={this.state.commits}
                    owner={this.state.owner}
                    repo={this.state.repo}
                />
            </div >
        )
    }
};

export default App;