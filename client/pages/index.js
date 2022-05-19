import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Link href={"/auth/google"}>Sign up with google</Link>
    </div>
  );
}
