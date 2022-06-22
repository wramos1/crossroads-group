import React, { useState } from "react";
import Commit from "./Commit";

const CommitList = ({ commits, owner, repo }) => {
    const [select, setSelect] = useState('Latest');

    const mapCommits = commits.map(c => {
        return (
            <Commit
                key={c.node_id}
                commit={c.commit.message}
                user={c.author.login}
                date={c.commit.committer.date}
            />
        )
    })

    const reSort = (e) => {
        setSelect(e.target.value);
        return commits.reverse().map((c) => {
            return (
                <Commit
                    key={c.node_id}
                    commit={c.commit.message}
                    user={c.author.login}
                    date={c.commit.committer.date}
                />
            )
        })
    }


    const renderedList = () => {
        if (!commits) {
            return (
                <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )
        }
        else if (commits.length < 1) {
            return (
                <div>
                    <h1 id="noCommitHistoryTitle">
                        Couldn't find that one
                    </h1>
                </div>
            )
        }
        return (
            <div>
                <h2>
                    {`History of ${owner}'s '${repo}' commits`}
                </h2>

                <select id="sortSelect" defaultValue="Latest" onChange={e => reSort(e)}>

                    <option>Sort By</option>
                    <option value="Latest">Latest</option>
                    <option value="Earliest">Earliest</option>

                </select>

                {mapCommits}
            </div>
        )
    }

    return (
        < div >
            {renderedList()}
        </div >
    )
}

export default CommitList;