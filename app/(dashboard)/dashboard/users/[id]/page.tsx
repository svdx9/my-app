// Const Page = async ({ params: { id } }: { params: { id: string } }) => {
//     const { id } = await params;
//     return <h1 className="text-3xl">user id {id}</h1>;
// }

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return <h1 className="text-3xl">user id {id}</h1>;
};


export default Page;
