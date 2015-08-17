/* ---------------------------- JC_Functions: Events ---------------------------- */
//assign methods to the object after it is fetched because storing functions in local storage is not recommended     
    var assignMethods = function(obj){
        obj.printThese = printThese;
    }
    
var dReady = function(current_obj){

	$(this).click(function(event){
	
	//Source: http://stackoverflow.com/questions/5682241/get-clicked-element-id	
		//if the clicked element is not the OK button of the dialog, which returns null as target.id when clicked
		if(event.target.id){
			var selectedElement = event.target.id;
			var selectedObjDelimeter = selectedElement.indexOf('^');
			var selectedObjKey = selectedElement.slice(0, selectedObjDelimeter);
			var selectedObjIndx = selectedElement.slice(selectedElement.indexOf('^') + 1);
			var newElementIndx = selectedObjIndx;
			//alert('selectedObjIndx is ' + selectedObjIndx);
			//$('#temp').html(selectedElement + '<br>' + selectedObjKey + '<br>' + selectedObjIndx);


			function insertElement(){
			//alert('called insertElement');
			$("#insertelement").dialog({
					autoOpen: false, 
					modal: true,
					width: 500,
					height: 160,
					buttons: {
						div: function() {$(this).dialog("close"); callback("<div>")},
						span: function() {$(this).dialog("close"); callback("<span>")},
						p: function() {$(this).dialog("close"); callback("<p>")},
						br: function() {$(this).dialog("close"); callback("<br>")},
						hr: function() {$(this).dialog("close"); callback("<hr>")},
						cancel: function() {$(this).dialog("close");}		
					},
				});
			}

			function callback(toInsert){
			   //alert('called callback to insert ' + toInsert);
				//alert('inserting into ' + current_obj[selectedObjKey]['text'][selectedObjIndx]);
				current_obj[selectedObjKey]['text'].splice(newElementIndx, 0, toInsert);
					var newElementID = selectedObjKey + '^' + newElementIndx;
					//alert('new element id is ' + newElementID);
					//newElementID.innerHTML = 'newlinenewlinenewlinenewlinenewlinenewlinenewline';
					//newElementID.style.display='none';
					//newElementID.offsetHeight; // no need to store this anywhere, the reference is enough
					//newElementID.style.display='block';		
				storeLocally('verses_vault', current_obj);
				//console.log(current_obj);

				var verses = fetchFromLocal('verses_vault');
//alert('<pre>' + JSON.stringify(verses, null, 2) + '</pre>');
				assignMethods(verses);
				verses.printThese('Finished', 5);
			}
			
		insertElement();
		$("#insertelement").dialog("open");
		}
		//$('#versesobj').html('<pre>' + JSON.stringify(verses, null, 2) + '</pre>');
	});
};
