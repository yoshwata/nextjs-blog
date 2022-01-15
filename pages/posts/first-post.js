import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Dashboard from '../../components/dashboard'
import Button from '@mui/material/Button';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Button variant="contained">Hello World</Button>;
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Dashboard title="hoge">
        fooo
      </Dashboard>
    </Layout>
  )
}