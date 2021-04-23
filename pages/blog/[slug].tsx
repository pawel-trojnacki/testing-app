import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

interface SingleBlogPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

const allPostsQuery = gql`
  query AllPostsQuery {
    posts {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const singlePostQuery = gql`
  query SinglePostQuery($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      id
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: allPostsQuery,
  });

  const posts = data.posts.nodes;

  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    data: { post },
  } = await client.query({
    query: singlePostQuery,
    variables: {
      id: context.params.slug,
      idType: 'SLUG',
    },
  });

  return {
    props: {
      post,
    },
  };
};

interface Props {
  post: SingleBlogPost;
}

export default function BlogPost({ post }: Props): ReactElement {
  return (
    <div>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
    </div>
  );
}
