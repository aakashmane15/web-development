export function Grid() {
  return (
    <>
      <div className="grid grid-cols-20">
        <div className="bg-blue-300 col-span-4">Child 1</div>
        <div className="bg-red-300 col-span-6">Child 2</div>
        <div className="bg-green-300 col-span-6">Child 3</div>
        <div className="bg-yellow-300 col-span-4">Child 4</div>
      </div>
    </>
  );
}
