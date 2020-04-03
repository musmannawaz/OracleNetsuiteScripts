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
    
    // remove apply button from vendor prepayment form
    form.removeButton('apply');
			
}