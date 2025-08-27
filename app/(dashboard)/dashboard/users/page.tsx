import Link from "next/link";

const Page = () => {

    return (
        <div>
            <h1 className="text-3xl">users</h1>
            <ul className="mt-10">
                <li>
                    <Link href="/dashboard/users/1" className="text-blue-500 underline">user 1</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/2" className="text-blue-500 underline">user 2</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/3" className="text-blue-500 underline">user 3</Link>
                </li>
            </ul>
        </div>
    )
}

export default Page;
