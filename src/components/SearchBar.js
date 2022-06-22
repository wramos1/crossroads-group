import React, { useEffect, useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [owner, setOwner] = useState('wramos1')
    const [repo, setRepo] = useState('crossroads-group')

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(owner, repo);
    }

    useEffect(() => {
        onFormSubmit(owner, repo);
    }, [])

    return (
        <div>

            <form className="row g-3" onSubmit={onSubmit}>

                <div className="col-md-6">
                    <label className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={owner}
                        value={owner}
                        onChange={e => setOwner(e.target.value)}
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">
                        Repo Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={repo}
                        value={repo}
                        onChange={e => setRepo(e.target.value)}
                    />
                </div>

                <div>
                    <button className="btn btn-outline-light"
                        onSubmit={onSubmit}
                    >
                        Search
                    </button>
                </div>

            </form>

        </div>
    )
}

export default SearchBar