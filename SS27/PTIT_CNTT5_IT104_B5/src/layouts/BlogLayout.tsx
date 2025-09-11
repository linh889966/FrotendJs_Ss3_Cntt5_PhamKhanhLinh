import { Link, NavLink, Outlet } from "react-router-dom"

export default function BlogLayout() {
  return (
    <div className="blog-wrap">
      <header className="blog-header">
        <Link to="/blog/posts" className="brand">My Blog</Link>
      </header>
      <div className="blog-main">
        <aside className="sidebar">
          <nav>
            <NavLink to="/blog/posts" className="side-link">Posts</NavLink>
          </nav>
          <footer className="sidebar-ft">© 2025 My Blog</footer>
        </aside>
        <section className="content">
          <Outlet />
        </section>
      </div>
    </div>
  )
}
