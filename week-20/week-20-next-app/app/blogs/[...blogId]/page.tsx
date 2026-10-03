export default async function BlogId({ params }: any) {
  const postId = (await params).blogId;

  return (
    <>
      <div>Blog of {JSON.stringify(postId)}</div>
    </>
  );
}
