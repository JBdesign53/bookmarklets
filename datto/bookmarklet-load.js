javascript:(function(){
  loadGithubJs();

  async function loadGithubJs(){
    console.log('Load bookmarklet JS from Github...');

    const res = await fetch(`https://raw.githubusercontent.com/JBdesign53/bookmarklets/main/datto/bookmarklet-load.js`, {cache: 'no-cache'});
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const js = await res.text();

    /* Dynamic script element */
    const script = document.createElement('script');
    script.textContent = js;
    document.head.appendChild(script);
  }
})();