import React, { useState } from "react";
import github from "./apis/github";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

const App = () => {
    const [commits, setCommits] = useState([])

    const handleSubmit = async (owner, repo) => {
        const res = await github.get(`/${owner}/${repo}/commits`, {
        })
        res.data.map((c) => {
            console.log(c.commit)
        })

    }

    return (
        <div>
            <Header />
            <SearchBar onFormSubmit={handleSubmit} />
        </div >
    )
};

export default App;