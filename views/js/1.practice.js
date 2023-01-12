const JSMethods = () => {
	// This place provides practices for JS methods.
	// When you create code with javascript methods, you can check whether that does work or not on console on Dev Tool.
	console.log("hey");

	// javascript methods -------------------------------------------------------------------------------------

		// 1. Change input integer.
		console.log(" ");
		console.log("--- No.1 ---");
		console.log(" ");
			// [ input ] const array1 = [1,2,3];
			// [ output ] 321
			// Hints: replace(), sort(), toString()

			const array1 = [1,2,3];
			// Type your code.

			// Sample
			/*
			const sortDSCArray1 = array1.sort((a,b) => b - a);
			console.log(sortDSCArray1);
			const Str = sortDSCArray1.toString();
			console.log(typeof Str);
			const replaceStr1 = Str.replace(/,/g,"");
			console.log(replaceStr1);
			*/
			
		// 2. Make sure the data type.
		console.log(" ");
		console.log("--- No.2 ---");
		console.log(" ");
			// [ input1 ] const str2a = 200;
			// [ input2 ] const str2b = "abc";
			// [ output1 ] str2a is number 
			// [ output2 ] str2b is string 

			// Type your code.
			const str2a = 200;
			const str2b = "abc";

			// sample
			/*
			const str2a = 200;
			console.log("str2a is " + typeof str2a);
			const str2b = "abc";
			console.log("str2b is " + typeof str2b);
			*/

		// 3. Sort strings based on the dictionary.
		console.log(" ");
		console.log("--- No.3 ---");
		console.log(" ");
			// [ input ] const array3 = ["d","c","a","b"];
			// [ output ]  ['a', 'b', 'c', 'd']
			const array3 = ["d","c","a","b"];
			const sortDic3 = array3.sort();
			// Type your code.

			// sample
			console.log("JSMethods ~ sortDic3", sortDic3);
			
		// 4. [ In the making... ] Copy an array as a json object.
		console.log(" ");
		console.log("--- No.4 ---");
		console.log(" ");
			// [ input ] const array4 = []

		// 5. Output the lowest number and the highest number.
		console.log(" ");
		console.log("--- No.5 ---");
		console.log(" ");
			// [ input ] const array5 = [1,2,3,4,5];
			// [ output1 ] 1
			// [ output2 ] 5
			// Type your code.

			// sample
			/*
			const array5 = [1,2,3,4,5];
			const min = Math.min.apply(null, array5);
			console.log("JSMethods ~ min", min);

			const max = Math.max.apply(null, array5);
			console.log("JSMethods ~ max", max);
			const newArray5 = [];
			*/
		
		// 6.
		console.log(" ");
		console.log("--- No.6 ---");
		console.log(" ");
		






	// --------------------------------------------------------------------------------------------------------

	// Regular expression


	// --------------------------------------------------------------------------------------------------------
	

	// Window objects, addEventListener, getElementById

		// Create function that returns a comment "httpReqButton was clicked.".
		window.addEventListener("DOMContentLoaded", ()=> {
			const GetElementReqButton = document.getElementById("httpReqButton");
			GetElementReqButton.addEventListener("click", ()=>{
				console.log("httpReqButton was clicked.");
			});
		});


}