import { getClient } from "@/lib/graphQLClient";
import { gql } from "graphql-request";

interface Author {
  name: string;
  profilePicture: string;
}

export interface Tag {
  name: string;
  slug: string;
  id: string;
}

interface CoverImage {
  url: string;
}

interface Content {
  html: string;
}

export interface Post {
  author: Author;
  title: string;
  subtitle: string;
  brief?: string;
  slug?: string;
  coverImage: CoverImage;
  tags: Tag[];
  publishedAt: string; // ISO date string
  readTimeInMinutes: number;
  content?: Content;
}

interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

interface PostEdge {
  node: Post;
}

interface PostConnection {
  pageInfo: PageInfo;
  edges: PostEdge[];
}

interface Publication {
  title: string;
  posts: PostConnection;
}

interface AllPostsResponse {
  publication: Publication;
}

interface PostResponse {
  publication: {
    post: Post;
  };
}

export const getAllPosts = async (tags: string[]): Promise<PostEdge[]> => {
  const client = getClient();

  const query = gql`
    query allPosts($tags: [ObjectId!]) {
      publication(host: "blog.greenroots.info") {
        title
        posts(first: 20, filter: { tags: $tags }) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              author {
                name
                profilePicture
              }
              title
              subtitle
              brief
              slug
              coverImage {
                url
              }
              tags {
                name
                slug
                id
              }
              publishedAt
              readTimeInMinutes
            }
          }
        }
      }
    }
  `;

  const data = await client.request<AllPostsResponse>(query, { tags: tags });

  return data.publication.posts.edges;
};

export const getPost = async (slug: string): Promise<Post> => {
  const client = getClient();

  const query = gql`
    query postDetails($slug: String!) {
      publication(host: "blog.greenroots.info") {
        post(slug: $slug) {
          author {
            name
            profilePicture
          }
          publishedAt
          title
          subtitle
          readTimeInMinutes
          content {
            html
          }
          tags {
            name
            slug
            id
          }
          coverImage {
            url
          }
        }
      }
    }
  `;

  const data = await client.request<PostResponse>(query, { slug: slug });

  return data?.publication?.post;
};
