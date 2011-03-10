
$(document).ready(function(){

	module("About Functions And Closure (topics/about_functions_and_closure.js)");

	test("defining functions directly", function() {
		var result = "a";
		function changeResult() {
			// the ability to access a variables defined in the same scope as the function is known as 'closure'
			result = "b";
		}	
		changeResult();
		equals(result, "b", 'what is the value of result?');
	});
	
	test("assigning functions to variables", function() {
		var triple = function(input) {
			return input * 3;
		};
		equals(triple(4), 12, 'what is triple 4?');		
	});
	
	test("self invoking functions", function() {		
		var publicValue = "shared";
		
		// self invoking functions are used to provide scoping and to alias variables
		(function(pv) {
			var secretValue = "password";
			equals(pv, "shared", 'what is the value of pv?');
			equals(typeof(secretValue), "string", "is secret value available in this context?");
			equals(typeof(pv), "string", "is public value available in this context?");
		})(publicValue);
		
		equals(typeof(secretValue), "undefined", "is secret value available in this context?");
		equals(typeof(publicValue), "string", "is public value available in this context?");
	});
	
	test("arguments array", function() {
		var add = function() {
			var total = 0;
			for(var i = 0; i < arguments.length; i++) {
				// complete the implementation of this method so that it returns the sum of its arguments
        total = total + arguments[i];
			}
      return total;
		};
	
		equals(add(1,2,3,4,5), 15, "add 1,2,3,4,5");
		equals(add(4,7,-2), 9, "add 1,2,3,4,5");
	});

});
