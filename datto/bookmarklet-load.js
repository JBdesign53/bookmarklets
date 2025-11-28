/*
  Bookmarklet to load Javascript content from Gist api.
  Paste this code into a browser bookmark.
*/

javascript:(function(){
  let gistId = '6a421132a4bde57dfc66bd36332166e1';
  let filename = 'bookmarklet-datto.js';

  loadGistJs(gistId, filename);

  async function loadGistJs(gistId, filename){
    console.log('Load bookmarklet from Gist...');

    const res = await fetch(`https://api.github.com/gists/${gistId}`, {cache: 'no-cache'});
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const code = data.files[filename].content;

    /* Dynamic script element */
    const script = document.createElement('script');
    script.textContent = code;
    document.head.appendChild(script);
  }
})();