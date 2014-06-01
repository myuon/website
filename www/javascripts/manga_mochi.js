(function() {
  var getCurrentNumber, getImgPath, getImgTag, getPath, getURLParam, isURLExists, nextLink, previousLink;

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

  isURLExists = function(url) {
    var http;
    http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status !== 404;
  };

  getCurrentNumber = function() {
    var n;
    n = parseInt(getURLParam()['page'], 10);
    if (n > 0) {
      return n;
    } else {
      return 0;
    }
  };

  getPath = function(p) {
    return "?page=" + p;
  };

  getImgPath = function(n) {
    return "../img/mochi/mochi" + n + ".png";
  };

  getImgTag = function(n) {
    return "<img src=" + (getImgPath(n)) + " />";
  };

  this.loadImg = function() {
    var div, n;
    div = document.getElementById("content");
    n = getCurrentNumber();
    div.innerHTML = "<a href=" + (getPath(n + 1)) + ">" + (getImgTag(n)) + "</a>";
    if (!isURLExists(getImgPath(n))) {
      return div.innerHTML = "";
    }
  };

  nextLink = function() {
    var li, lis, n, _i, _len, _results;
    lis = document.getElementsByClassName("nextPage");
    _results = [];
    for (_i = 0, _len = lis.length; _i < _len; _i++) {
      li = lis[_i];
      n = getCurrentNumber();
      li.innerHTML = "<a href=" + (getPath(n + 1)) + ">次へ進む</a>";
      if (!isURLExists(getImgPath(n))) {
        _results.push(li.innerHTML = "");
      } else {
        _results.push(void 0);
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
      n = getCurrentNumber();
      if (n > 0) {
        _results.push(li.innerHTML = "<a href=" + (getPath(n - 1)) + ">前へ戻る</a>");
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  document.addEventListener("DOMContentLoaded", nextLink, false);

  document.addEventListener("DOMContentLoaded", previousLink, false);

  document.addEventListener("DOMContentLoaded", loadImg, false);

}).call(this);
