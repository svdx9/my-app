const Home = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) {
        throw new Error("Failed to fetch albums");
    }
    const albums = await response.json();

    console.log(albums);

    return (
        <div className="bg-amber-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
            {albums.map((album: any) => (
                <div key={album.id} className="shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                    <h2 className="bg-red-50 text-xl font-bold mb-2">{album.title}</h2>
                    <p className="text-gray-600">Album ID: {album.id}</p>
                </div>
            ))}
        </div>
    );
}
export default Home;
