class Backend {
  constructor(url = 'https://js.dump.academy/code-and-magick/') {
    this.url = url;
  }
  onLoad(resolve) {
    fetch(this.url + 'data')
      .then(response => response.json())
      .then(wizards => resolve(wizards))
      .catch(e => console.error(e.message));
  }
  onSave(data) {
    fetch(this.url, {
      method: 'POST',
      body: data
    })
    .then(() => console.log('ok'))
    .catch(e => console.error(e.message));
  }
}

window.backend = new Backend();
