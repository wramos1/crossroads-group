import React, { useState } from "react";
import github from "./apis/github";

const App = () => {
    const [owner, setOwner] = useState('RomelLopez')
    const [repo, setRepo] = useState('RomelLopez.github.io')

    const handleSubmit = async () => {
        const res = await github.get(`/${owner}/${repo}/commits`, {
        })
        res.data.map((c) => {
            console.log(c.commit)
        })

    }

    return (
        <div>
            App
            <button
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Click
            </button>
        </div >
    )
};

export default App;