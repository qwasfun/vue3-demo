export function showGithubLink(branch, repo) {
  var aEl = document.createElement('a')
  var imgUrl = '/view-on-github.png'
  let url = repo
  if (repo) {
    url = repo
  } else {
    url = 'https://github.com/qwasfun/vue3-demo'
  }

  if (branch) {
    url = url + '/tree/' + branch
  }

  aEl.setAttribute('href', url)
  aEl.setAttribute('target', '_blank')
  aEl.innerHTML =
    '<img style="position: absolute; bottom: 0; right: 0; border: 0; width:120px; height:auto;" src="' +
    imgUrl +
    '" alt="View on GitHub">'
  document.body.append(aEl)
}
