(function() {
  var getCurrentNumber, getImgTag, getPath, getURLParam, nextLink, previousLink;

  getURLParam = function() {
    var h, hash, hashes, v, _i, _len;
    v = [];
    hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (_i = 0, _len = hashes.length; _i < _len; _i++) {
      hash = hashes[_i];
      h = hash.split('=');
      v.push(h[0]);
      v[h[0]] = h[1];
    }
    return v;
  };

  getCurrentNumber = parseInt(getURLParam()['page'], 10);

  getPath = function(p) {
    return "?page=" + p;
  };

  getImgTag = function(n) {
    return "<img src=\"../img/usagi/usa" + n + ".png\" />";
  };

  this.loadImg = function() {
    var div, n;
    div = document.getElementById("content");
    n = getCurrentNumber;
    if (n > 0) {
      return div.innerHTML = "<a href=" + (getPath(n + 1)) + ">" + (getImgTag(n)) + "</a>";
    } else {
      return div.innerHTML = "<a href=" + (getPath(1)) + ">" + (getImgTag(0)) + "</a>";
    }
  };

  nextLink = function() {
    var li, lis, n, _i, _len, _results;
    lis = document.getElementsByClassName("nextPage");
    _results = [];
    for (_i = 0, _len = lis.length; _i < _len; _i++) {
      li = lis[_i];
      n = getCurrentNumber;
      if (n > 0) {
        _results.push(li.innerHTML = "<a href=" + (getPath(getCurrentNumber + 1)) + ">次へ進む</a>");
      } else {
        _results.push(li.innerHTML = "<a href=" + (getPath(1)) + ">次へ進む</a>");
      }
    }
    return _results;
  };

  previousLink = function() {
    var li, lis, n, _i, _len, _results;
    lis = document.getElementsByClassName("previousPage");
    _results = [];
    for (_i = 0, _len = lis.length; _i < _len; _i++) {
      li = lis[_i];
      n = getCurrentNumber;
      if (n > 0) {
        _results.push(li.innerHTML = "<a href=" + (getPath(n - 1)) + ">前へ戻る</a>");
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  document.addEventListener("DOMContentLoaded", loadImg, false);

  document.addEventListener("DOMContentLoaded", nextLink, false);

  document.addEventListener("DOMContentLoaded", previousLink, false);

}).call(this);
