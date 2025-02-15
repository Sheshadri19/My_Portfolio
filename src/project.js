const GITHUB_USERNAME = "Sheshadri19"; // Replace with your GitHub username

export async function fetchGitHubRepos() {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
  if (!response.ok) throw new Error("Failed to fetch repositories");
  return await response.json();
}
