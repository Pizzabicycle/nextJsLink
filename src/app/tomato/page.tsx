import Link from "next/link";

const Tomato = () => {
    return (
        <div>
            <h2>Link to main Page</h2>
            <Link href="/">
                 Move to home
            </Link>
        </div>
    );
};

export default Tomato;