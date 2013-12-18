// MUCH easier to use
// Not seeing any security concerns

var pdyMyUrlGenerator = function() {

	return {
		convertURI : function(url) {

			// current url / API
			// window.location.assign("http://pdfmyurl.com?s=l&url=" + escape(url));

			// future url / API due to buyout
			window.location.assign("http://usa.htm2pdf.co.uk/urltopdf?apikey=yourapikey&url=" + escape(url));

			// return "javascript:pdf_url=location.href;location.href='http://pdfmyurl.com?s=l&url='+escape('" + url + "')'";
		}
	};
}();