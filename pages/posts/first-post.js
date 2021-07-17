import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First post!</h1>
      <h2>
        <Link href="/">Back 2 home</Link>
      </h2>
    </Layout>
  );
}
