import Head from "next/head";
interface IProps {
  title: string;
  description: string;
  keywords: string;
}
export default function Meta({ title, description, keywords }:IProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}

Meta.defaultProps={
    title:'ویتسل',
    description:'ویتسل',
    keywords:'ویتسل'
}