export const Footer = () => (
  <footer>
    <abbr
      title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
      style={{ cursor: 'help' }}
    >
      CC BY-NC 4.0
    </abbr>{' '}
    {new Date().getFullYear()} © Dimitri POSTOLOV.
    <a href="/feed.xml" style={{ float: 'right' }}>
      RSS
    </a>
  </footer>
);
