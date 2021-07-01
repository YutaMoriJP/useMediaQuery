const Sandbox = ({ children }) => {
  return (
    <article className="sandbox">
      <a
        href="https://codesandbox.io/s/usemediaqueryjs-3cy9l?file=/src/useMediaQuery.js"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </article>
  );
};

export default Sandbox;
