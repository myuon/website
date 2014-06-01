getURLParam = () ->
  v = []
  hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')
  for hash in hashes
    h = hash.split('=')
    v.push(h[0])
    v[h[0]] = h[1]
  return v

isURLExists = (url) ->
  http = new XMLHttpRequest()
  http.open('HEAD', url, false)
  http.send()
  return http.status != 404;

getCurrentNumber = () ->
  n = parseInt(getURLParam()['page'], 10)
  if n > 0
    return n
  else
    return 0

getPath = (p) -> "?page=#{p}"
getImgPath = (n) -> "../img/mochi/mochi#{n}.png"
getImgTag = (n) -> "<img src=#{getImgPath(n)} />"

@loadImg = () ->
  div = document.getElementById("content")
  n = getCurrentNumber()
  div.innerHTML = "<a href=#{getPath(n+1)}>#{getImgTag(n)}</a>"

  unless isURLExists(getImgPath(n))    
    div.innerHTML = ""

nextLink = () ->
  lis = document.getElementsByClassName("nextPage")
  for li in lis
    n = getCurrentNumber()
    li.innerHTML = "<a href=#{getPath(n+1)}>次へ進む</a>"

    unless isURLExists(getImgPath(n))
      li.innerHTML = ""

previousLink = () ->
  lis = document.getElementsByClassName("previousPage")
  for li in lis
    n = getCurrentNumber()
    if n > 0
      li.innerHTML = "<a href=#{getPath(n-1)}>前へ戻る</a>"

document.addEventListener("DOMContentLoaded", nextLink, false)
document.addEventListener("DOMContentLoaded", previousLink, false)
document.addEventListener("DOMContentLoaded", loadImg, false)
