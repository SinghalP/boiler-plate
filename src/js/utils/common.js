function containsObject( item, list, property ){
    for( let obj of list ){
        if( Object.is( item[property], obj[property] ) ){
            return true;
        }
    }
    return false;
}

function isDesktop(){
    if( /^(www)\.keurig\.com/.test(document.domain) )
	{ 
		return true;//desktop
	}
	else
	{ 
		return false;//mobile
	}
}

export {containsObject,isDesktop};