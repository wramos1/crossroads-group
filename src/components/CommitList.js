import React from "react";
import Commit from "./Commit";

const CommitList = ({ commits, owner, repo }) => {

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

    const renderedList = () => {
        if (!commits) {
            return (
                <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )
        } else if (commits.length < 1) {
            return (
                <div>
                    <h1>
                        Couldn't find that one
                    </h1>
                </div>
            )
        }

        return (
            < div >
                <h2>
                    {`Results for ${owner}'s '${repo}' commits`}
                </h2>
                {mapCommits}
            </div >
        )
    }

    return (
        <div>
            {renderedList()}
        </div>
    )
}

export default CommitList;