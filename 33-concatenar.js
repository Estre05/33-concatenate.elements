"Use strict";

//EJERCICIO 1---
function elements(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            let resultado = nums[i] + '' + nums[j];
            alert(resultado);
        }
    }
}
let nums = [0, 2, 4, 8];
elements(nums);


//EJERCICIO 2---
function elements(nums1) {
    for (let i = 0; i < nums1.length; i++) {
        for (let j = i + 1; j < nums1.length; j++) {
            let resultado = nums1[i] + '' + nums1[j];
            alert(resultado);
        }
    }
}

let nums1 = [0, 2, 4, 8];
elements(nums1);



