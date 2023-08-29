import Link from "next/link"

let availablePage = ["Work", "About"]

export function NavBar() {
    return (
        <>
            <nav className="flex flex-row justify-end">
                <ul className="flex flex-row gap-4">
                    <li>
                        <Link href="/#project">Work</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

function pageDirection(pageName: string): string {
    return "";
}