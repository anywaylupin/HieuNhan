import type { GetStaticPropsContext } from 'next';
import { MDXWrapper } from 'nextra';
import { generateStaticParamsFor, importPage } from 'nextra/pages';

import { useMDXComponents } from '@/mdx-components';

type Props = {
  params: Promise<GetStaticPropsContext<{ mdxPath: string[] }>['params']>;
  searchParams: Promise<URLSearchParams>;
};

export const generateStaticParams = generateStaticParamsFor('mdxPath');

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { metadata } = await importPage(params?.mdxPath);

  metadata.title += ' | Studio Docs';

  return metadata;
}

const Wrapper: MDXWrapper = (props) => {
  const { wrapper: Comp } = useMDXComponents();
  return <Comp {...props} />;
};

const Page = async (props: Props) => {
  const params = await props.params;
  const result = await importPage(params?.mdxPath);

  const { default: MDXContent, toc, metadata } = result;

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
};

export default Page;
