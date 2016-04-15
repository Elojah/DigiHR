var Boot_Styles = [
	"success",
  "default",
  "primary",
  "warning",
  "danger",
];

var Tag_Key = [
	"Python", 
  "Excel",
  "Italian",
  "French",
]

var title = function (txt) {
	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}

var newTag = function (name, i) {
	var tag = document.createElement("span");
  tag.className = "label label-" + Boot_Styles[i];
  tag.innerHTML = name;
  return tag;
}

var getTags = function (src, dst) {
	words = src.split(" ");
  dst.html("");
  var nb = 0;
  for (var i = 0; i < words.length; i++) {
  	if (Tag_Key.indexOf(title(words[i])) >= 0 && dst.html().indexOf(title(words[i])) < 0)
    	dst.append(newTag(title(words[i]), nb++));
  }
};

$('#details').bind('input propertychange', function() {
      getTags(this.value, $("#tags"));
});
