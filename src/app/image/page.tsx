import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </>
  );
}
