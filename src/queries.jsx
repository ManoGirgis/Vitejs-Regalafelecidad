import { gql } from '@apollo/client';

export const Get_Posts = gql`
  query GetPostsAndAuthors($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      edges {
        node {
          id
          title
          content
          date
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
       
      }
    }
  }
`;

export const GET_POST_NUMBER = gql`
query postsnum {
  posts {
    pageInfo {
      total
    }
  }
}
`;

export const Get_POST_BY_ID = gql
  `query GetPostById($id: ID!) {
  post(id: $id) {
      id
      title
      content
      date
       featuredImage {
        node {
          id
          sourceUrl
        }
      }
      comments {
        edges {
          node {
            id
            content
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            date
          }
        }
      }
    }
  }`;