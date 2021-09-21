console.log("CONNECTED");

function printReverse(arr){
	for(var i = arr.length-1; i>=0; i--){
		console.log(arr[i]);

	}
}
printReverse([3,6,2,5]);

//***  isUniform
function isUniform(arr){
	var first =arr[0];
	for(var i=1; i< arr.length; i++){
		if (arr[i] !== first) {
			return false;
		}
	}
	return true;
}

function sumArray(arr){
	var add =0;
	for(var i=0; i<arr.length; i++){
		
		add = add + arr[i];
		
	}

	return add;
}

function max(arr){
	var k=arr[0];
	for(i=1; i <arr.length ; i++){
		if(arr[i]> k){
			k = arr[i];
		}
	}
	return k;
}