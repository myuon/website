getURLParam = () ->
  v = []
  hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')
  for hash in hashes
    h = hash.split('=')
    v.push(h[0])
    v[h[0]] = h[1]
  return v

getCurrentNumber = parseInt(getURLParam()['page'], 10)
getPath = (p) -> "?page=#{p}"

getImgTag = (n) -> "<img src=\"../img/usagi/usa#{n}.png\" />"

@loadImg = () ->
  div = document.getElementById("content")
  n = getCurrentNumber
  if n > 0
    div.innerHTML = "<a href=#{getPath(n+1)}>#{getImgTag(n)}</a>"
  else
    div.innerHTML = "<a href=#{getPath(1)}>#{getImgTag(0)}</a>"

nextLink = () ->
  lis = document.getElementsByClassName("nextPage")
  for li in lis
    n = getCurrentNumber
    if n > 0
      li.innerHTML = "<a href=#{getPath(getCurrentNumber+1)}>次へ進む</a>"
    else
      li.innerHTML = "<a href=#{getPath(1)}>次へ進む</a>"

previousLink = () ->
  lis = document.getElementsByClassName("previousPage")
  for li in lis
    n = getCurrentNumber
    if n > 0
      li.innerHTML = "<a href=#{getPath(n-1)}>前へ戻る</a>"

document.addEventListener("DOMContentLoaded", loadImg, false)
document.addEventListener("DOMContentLoaded", nextLink, false)
document.addEventListener("DOMContentLoaded", previousLink, false)
