sap.ui.define(function() {
	"use strict";
 
	var Formatter = {
 
		price   :  function (pr) {
				if ( pr <= 10){
					return "Success";
				}else if( pr > 10 & pr <= 30){
					return "Warning";
				}else if( pr > 30){
					return "Error";
			}
		}
	};
 
	return Formatter;
 
},true);