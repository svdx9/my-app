import Hello from "@/app/components/hello";

const Home = () => {
  console.log("What am I server or client? ");
  return (
    <>
      <h1 className="text-3xl">Hello  X World</h1>
      <Hello />
    </>
  );
}

export default Home;
