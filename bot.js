const githubToken = process.env.GITHUB_TOKEN;

// Example: list your repos via GitHub API
import fetch from 'node-fetch';

async function listRepos() {
  const response = await fetch('https://api.github.com/user/repos', {
    headers: { Authorization: `token ${githubToken}` },
  });
  const data = await response.json();
  console.log(data);
}

listRepos();

// Your WhatsApp bot code goes here
