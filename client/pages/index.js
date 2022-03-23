import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/auth/google"}>Sign up with google</Link>
    </div>
  );
}
