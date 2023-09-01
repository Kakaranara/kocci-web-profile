import Link from "next/link"

let availablePage = ["Work", "About"]
export function NavBar(props: { canBackHome: boolean }) {
    const { canBackHome } = props
    const shouldHidden = canBackHome ? "inline-block" : "hidden"
    return (
        <>
            <nav className="">
                <ul className="flex flex-row gap-4 justify-end">
                    <li className={`${shouldHidden} flex-1`}>
                        <Link href="/#">Back to home..</Link>
                    </li>
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