// MUCH easier to use
// Not seeing any security concerns

var pdyMyUrlGenerator = function() {

	return {
		convertURI : function(url) {

			window.location.assign("http://pdfmyurl.com?s=l&url=" + escape(url) + ")");
			// return "javascript:pdf_url=location.href;location.href='http://pdfmyurl.com?s=l&url='+escape('" + url + "')'";
		}
	};
}();