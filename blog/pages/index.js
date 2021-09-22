import Layout from '../components/layout'
import { getSortedPostsData } from '../scripts/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({postData}) {
  return (
    <Layout>
     <h1>Isaac Muscat</h1>
     <section>
       <h2>Blog</h2>
       <ul>
          {postData.map(({ date, title }) => (
            <li key={title}>
            <Link href={`/posts/${title}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
     </section>
    </Layout>
  )
}

export async function getStaticProps(){
  const postData = getSortedPostsData();
  // const postData = await fetch('http://localhost:1337/blog-posts');

  return {
    props: {
      postData
    }
  }
}