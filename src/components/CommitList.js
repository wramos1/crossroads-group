import React from "react";
import Commit from "./Commit";

const CommitList = ({ commits }) => {

    const renderedList = commits.map(c => {
        console.log(c)
        return (
            <Commit
                key={c.node_id}
                commit={c.commit.message}
                user={c.author.login}
                date={c.commit.committer.date}
            />
        )
    })

    return (
        <div>
            {renderedList}
        </div>
    )
}

export default CommitList;