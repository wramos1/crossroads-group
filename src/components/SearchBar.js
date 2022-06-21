import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [owner, setOwner] = useState('wramos1')
    const [repo, setRepo] = useState('crossroads-group')

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(owner, repo);
    }

    return (
        <div>
            <form className="mb-3" onSubmit={onSubmit}>
                <label className="form-label">Owner</label>
                <input type="text" className="form-control" placeholder={owner} value={owner} onChange={e => setOwner(e.target.value)} />
                <label className="form-label">Repo Name</label>
                <input type="text" className="form-control" placeholder={repo} value={repo} onChange={e => setRepo(e.target.value)} />
                <button onSubmit={onSubmit}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar