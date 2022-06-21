import axios from "axios";

const githubToken = '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';

export default axios.create({
    baseURL: 'https://api.github.com/repos',
    headers: {
        "Authorization": `token ${githubToken}`
    }
})