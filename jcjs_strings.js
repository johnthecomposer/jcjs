/* ---------------------------- JC_Functions: String Manipulations ---------------------------- */
var insertAfter = function(str, mat, ins, nth){
	var nth_arr = [];
		if(!nth){nth = 1}
	var mat_len = mat.length;

	for(var i = 0; i < str.length; i++){
		if(mat === str.substr(i, mat_len)){
			nth_arr.push(i);
		}
	}
	if(nth_arr.length > 0){
		var found_at = nth_arr[nth - 1];
		var insert_at = found_at + mat_len;
		var newstr = str.slice(0, insert_at) + ins + str.substr(insert_at);
	}
	return newstr
}