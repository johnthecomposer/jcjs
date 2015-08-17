var storeLocally = function(keyToStore, valToStore){
    localStorage[keyToStore] = JSON.stringify(valToStore);
}

var fetchFromLocal = function(itemToFetch){
    return JSON.parse(localStorage[itemToFetch]);
}

var deleteFromLocal = function(itemToDelete){
    localStorage.removeItem(itemToDelete);
}





