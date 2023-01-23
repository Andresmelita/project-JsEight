import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="h-[50px] justify-center items-center">
        <Link href="/">Home </Link>
        <Link href="/Details/[event_id]">Details </Link>
        <Link href="/Brands">Brands </Link>
        <Link href="/Artists">Artists </Link>
        <Link href="/Tournaments">Tournaments </Link>
        <Link href="/Profile">Profile </Link>
        <Link href="/Create">Create </Link>
        <Link href="/AllComponents">AllComponents </Link>
      </div>
    </nav>
  );
};

export default Navbar;
