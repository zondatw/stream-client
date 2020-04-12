import Link from 'next/link'

export default function Header(props) {
  return (
    <header>
      <Link href="/">
        <img src="/logo.png" alt="logo" />
      </Link>
      <nav>
        <span>{props.title}</span>
      </nav>
      <a></a>
      <style jsx global>{`
        header {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          padding: 5px 3%;
          background-color: #141414;
          box-shadow: 2px 2px 5px black;
        }
      `}</style>
      <style jsx>{`
        img {
          height: 8vh;
          max-height: 40px;
          cursor: pointer;
        }

        nav {
          display: flex;
          justify-content: center;
        }

        nav span {
          font-size: 1.25rem;
          color: #55F;
        }
      `}</style>
    </header>
  )
}
