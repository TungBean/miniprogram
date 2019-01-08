var f = function (s)
{
  var r = s.replace(/<\/?.+?>/g, "");
  var t = r.replace(/ /g, "");
  return t;
}
module.exports = {
  delTag: f
}