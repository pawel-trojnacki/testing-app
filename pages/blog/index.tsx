import { GetStaticProps } from 'next';
import Link from 'next/link';
import { ReactElement } from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
}

const query = gql`
  query PostListQuery {
    posts {
      nodes {
        id
        title
        slug
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query,
  });

  return {
    props: {
      posts: data.posts.nodes,
    },
  };
};

interface Props {
  posts: BlogPost[];
}

export default function index({ posts }: Props): ReactElement {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(({ id, title, slug }) => (
        <div key={id}>
          <h3>{title}</h3>
          <Link href={`/blog/${slug}`}>
            <a>Read more</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
