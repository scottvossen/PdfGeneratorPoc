// Security concerns:
// ==================
// https://pdfcrowd.com/html-to-pdf-api/#api-ref-security
// - credentials sent over http with each request
// - file stored on server for a short time

var pdfCrowdGenerator = function() {
	var _username = 'pdfgentester';
	var _key = 'afbcfc9b231b134c4ab98c1d27695aee';

	return {
		convertURI : function(url) {
			// ajaxPdfCrowd(url); // CORS conflict
			formPdfCrowd(url);
		}
	};
}();

function ajaxPdfCrowd(url) {
	
	var _username = 'pdfgentester';
	var _key = 'afbcfc9b231b134c4ab98c1d27695aee';

	$.ajax({
		        url: 'http://pdfcrowd.com/api/pdf/convert/uri/',
		        type: 'post',
		        dataType: 'x-www-form-urlencoded',
		        data: "username=" + _username + "&key=" + _key + "&src=" + url,
		        // https://pdfcrowd.com/html-to-pdf-api/#api-ref-conversion-common-par

		        success: function(data) {
		        	console.log(data);
		        },

				error: function (xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
		    });
}

function formPdfCrowd(url) {

	var _username = 'pdfgentester';
	var _key = 'afbcfc9b231b134c4ab98c1d27695aee';

	var params = {
	    username : _username,
	    key : _key,
	    src : url
	};
	return post_to_url('http://pdfcrowd.com/api/pdf/convert/uri/', params);
}

function post_to_url(path, params, method) {
	
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}