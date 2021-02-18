import Head from 'next/head';
import { Document } from 'prismic-javascript/types/documents';
import Prismic from 'prismic-javascript';
import ReactHtmlParser from 'react-html-parser';
import PrismicDOM from 'prismic-dom';
import { GetStaticProps } from 'next';
import { client } from '@/lib/prismic';

import Layout from '@/components/Layout';
import Box from '@/components/Box';

interface IHome {
  header: Document,
  posts: Document[],
}

export default function Home({ header, posts }: IHome ) {
  return (
    <Layout image={header.data.header_image.url}>
      <Head>
        <title>aleodoniSports | Main</title>
      </Head>
      { posts.map((post) => (
        <Box img={post.data.body[0].primary.image.url}>
        <h1>{ReactHtmlParser(PrismicDOM.RichText.asText(post.data.title))}</h1>
        <p>{post.data.body[1].primary.text[0].text}</p>
      </Box>  
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const header = await client().getSingle('header', {});

  const posts = await client().query([
    Prismic.Predicates.at('document.type', 'post1')
  ], {
    pageSize: 100, 
  })

  return {
    props: {
      posts: posts.results,
      header
    },
    revalidate: 60,
  }
}


