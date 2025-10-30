export function Footer() {
  return (
    <footer className="footer footer-center footer-vertical p-4">
      <aside>
        <p>
          Copyright @ {new Date().getFullYear()} - All rights reserved by Josh Holman
        </p>
        <a
          href="https://github.com/thejolman/personal-site"
          className="link link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </aside>
    </footer>
  )
}
