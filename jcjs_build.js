/* ---------------------------- JC_Functions: Builders ---------------------------- */
var createStringUID = function(){
	return performance.now() + '_' + (Math.random() * 100);
}

function verseConstructor(n_id, n_name, n_title, n_type, n_date, n_status, n_rank, n_subject, n_text){
//n_text is an array of strings where each element is a line
	this.id = n_id,
	this.name = n_name,
	this.title = n_title,
	this.type = n_type,
	this.date = n_date,
	this.status = n_status,
	this.rank = n_rank,
	this.subject = n_subject,
	this.text = n_text
}

function addVerse(parent, title, type, date, status, rank, subject, text){
	var id = createStringUID();
	var name = title.replace(/\W+/g, '').toLowerCase() + '_' + id;
		var newVerse = new verseConstructor(
			id,
			name,
			title, 
			type, 
			date, 
			status, 
			rank, 
			subject, 
			text
	);
	parent[newVerse.name] = newVerse;
	alert('added' + name + ' to ' + parent.objName);
}

var fetchObj = function(sourceobj){ 
    if(Array.isArray(sourceobj)){
      //alert('is array');
        var fetched = {};
        var obj_len = this[sourceobj].length;
        for (var i = 0; i < obj_len; i++){
            if (sourceobj[i] !== undefined) fetched[i] = sourceobj[i];
        }
    }
    else{
        //alert('is not array');
        var fetched = sourceobj;
        }
    return fetched;
}