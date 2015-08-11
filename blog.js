var entries = [
{"id":1, "title":"Hello World!","body":"this is the body of my blog", "published":"06/02/2013"},
{"id":2, "title":"My next vacation","body":"Going to Oaxaca next month!", "published":"12/02/2013"},
{"id":3, "title":"Project Nephews","body":"You guys are awsome!", "published":"01/28/2014"}
];

exports.getBlogEntries = function () {
	return entries;
};

exports.getBlogEntry = function(id) {
	for (var i=0; i< entries.length; i++){
		if (entries[i].id == id) return entries[i];
	};
};