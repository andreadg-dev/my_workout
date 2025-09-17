function appendFooter() {
  const FOOTER = `<footer>
      <div
        style="display: block; padding: 20px; height: 60px; width: 100%"
      ></div>
      <div id="copyright">Copyright ©${new Date().getFullYear()}</div>
    </footer>`;

  $("#root").append(FOOTER);
}
