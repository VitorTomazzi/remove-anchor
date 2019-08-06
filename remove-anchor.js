function removeUrlAnchor(url){
  // TODO: complete
  if(url.includes('#')) {
    x = url.indexOf('#');
  }
  return url.slice(0, x);
}