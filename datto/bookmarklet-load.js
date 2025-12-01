javascript:(function(){
  loadGithubJs();

  async function loadGithubJs(){
    console.log('Load bookmarklet JS from Github...');

    const res = await fetch(`https://raw.githubusercontent.com/JBdesign53/bookmarklets/main/datto/bookmarklet-datto.js`, {cache: 'no-cache'});
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.text();

    const script = document.createElement('script');
    script.textContent = data;
    document.head.appendChild(script);
  }
})();