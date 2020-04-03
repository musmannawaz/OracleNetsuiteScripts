/**
 * Module Description
 * 
 * Version    Date            Author           Remarks
 * 1.00       01 Apr 2020     Usman Nawaz
 *
 */

/**
 * The recordType (internal id) corresponds to the "Applied To" record in your script deployment. 
 * @appliedtorecord recordType
 *   
 * @param {String} type Sublist internal id
 * @returns {Void}
 */
function userEventBeforeLoad(type, form, request) {
    
    // set mandatory expense lineltem field
    var classFieldItemSublist = nlapiGetLineItemField('expense','memo');
    
    if (classFieldItemSublist){ 
        classFieldItemSublist.setMandatory(true);
    }
			
}