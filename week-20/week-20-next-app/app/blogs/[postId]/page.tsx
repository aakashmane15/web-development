export default async function Blogs({ params }: any) {
  const { postId } = await params;

  return (
    <>
      <div>Blog Page of {postId}</div>
    </>
  );
}
