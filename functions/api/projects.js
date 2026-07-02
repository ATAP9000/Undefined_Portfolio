export async function onRequest(context) {
  const { GITHUB_TOKEN } = context.env;

  const query = `
    query {
      user(login: "ATAP9000") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                edges {
                  size
                  node { name }
                }
              }
              stargazerCount
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'portfolio',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
