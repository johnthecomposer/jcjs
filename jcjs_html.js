/* ---------------------------- JC_Functions: Generate HTML ---------------------------- */
function printThese(status, rank){

	if(document.getElementById(this.objName)){
		var container = document.getElementById(this.objName);
		//alert('exists');
		container.parentNode.removeChild(container);
	}

		var container = document.createElement('div');
			container.setAttribute('class', 'object_wrapper');
			container.setAttribute('id', this.objName);
			document.body.appendChild(container);
 
			for(prp in this){
		
			  if(this[prp]['status'] == status && this[prp]['rank'] <= rank){ 

				if(typeof this !== 'function' && prp !== 'objName'){

					for(v in this[prp]){
						var new_meta_div = document.createElement('div');
						var new_class = 
							v == 'id' ? 'id' : 
							v == 'name' ? 'name' : 
							v == 'title' ? 'title nolabel' : 
							v == 'type' ? 'type' : 
							v == 'date' ? 'date' : 
							v == 'status' ? 'status' : 
							v == 'rank' ? 'rank' : 
							v == 'subject' ? 'subject' : 
							v == 'text' ? 'text' : alert('empty object');

					var info_label = new_class.indexOf('nolabel') !== -1 ? '' : new_class + ': ';
					var content = this[prp][v];

							if(new_class == 'date'){
								content = new Date(this[prp][v].split('-')).toDateString();
							}

							if(new_class == 'text'){
								var text_container = document.createElement('div');
								text_container.setAttribute('class', 'text_container');
								text_container.setAttribute('id', prp + '_textcontainer');
								container.appendChild(text_container);

								var new_line;
								for(var i = 0; i < content.length; i++){
									if(content[i] == '<br>'){
										//alert('found br!');
										new_line = document.createElement('br');
										new_line.setAttribute('id', prp + '^' + i);
									}
									else{
										new_line = document.createElement('div');
										if(content[i].indexOf('~') !== -1){
											new_line.setAttribute('class', 'stanza_header');
										}
										else{
											new_line.setAttribute('class', 'line');
										}
									new_line.setAttribute('id', prp + '^' + i);
									new_line.appendChild(document.createTextNode(content[i]));
									}
								
									//if((i - 1) > 0 && (i - 1) % 4 == 0 && i < content.length -2){
									//	$(new_line).addClass('stanza'); 
									//}
									text_container.appendChild(new_line);
								}
							}

							else{
								new_meta_div.setAttribute('class', new_class);
								new_meta_div.appendChild(document.createTextNode(info_label + content));
								container.appendChild(new_meta_div);
							}
					}
				}
			}
		}
	}


