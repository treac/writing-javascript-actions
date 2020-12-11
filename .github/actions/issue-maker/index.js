const core = require("@action/core");
const github = require("@action/github");

async function run() {
    try {
        const issueTitle = core.getInput("issue-title");
        const jokeBody = core.getInput("joke");
        const token = core.getInput("repo-token");
        const octokit = github.getOctokit(token);
        
        const newIssue = await octokit.issues.create({
            repo: github.context.repo.repo,
            owner: github.context.repo.owner,
            title: issueTitle,
            body: jokeBody
        });
    }
    catch (ex) {
        core.setFailed(ex.message);
    }
}

run();