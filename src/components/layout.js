import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <Link to="/">
          <StaticImage
            className="mx-auto rounded-full mb-2"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.png"
            width={50}
            height={50}
            quality={95}
            alt="Tony Sanjaya"
          />
        </Link>
        <h1 className="text-center text-slate-400 uppercase tracking-widest text-sm">
          <Link to="/">{title}</Link>
        </h1>
      </div>
    )
  } else {
    header = (
      <div>
        <Link to="/">
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.png"
            width={50}
            height={50}
            quality={95}
            alt="Tony Sanjaya"
          />
        </Link>
        <Link
          className="text-center text-gray-400 uppercase tracking-wider text-sm"
          to="/"
        >
          {title}
        </Link>
      </div>
    )
  }

  return (
    <div
      className="max-w-screen-md mx-auto px-4"
      data-is-root-path={isRootPath}
    >
      <header className="py-4 mb-12">{header}</header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </div>
  )
}

export default Layout
