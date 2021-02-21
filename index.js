
// alert("abeer Ahmad asjdklas jdkl")

// var name = "abeer Ahmad asjdklas jdkl";

// console.log(name)
// var num = "asudaj sdhjasdh";
// var num2 = 12
// console.log(typeof (num))
// console.log(typeof (num2))


// var total = num2 + 12
// console.log(total)
// console.log(typeof(total))
// var a = 12;
// var b= 20;


// var b = ++a

// console.log(b)
// console.log(a)

// var var1 = 12
// var var2 = 'sameer '
// var var3 = `abeer is not here.`

// let concated = ` ${var1} is teaching ${var2}`
// console.log(concated)


// if (var1 == '12' && var2 == 'sameer ') {
//     if (var1 === '12') {
//         console.log('here')
//     }else{
//         console.log('error')
//     }

// } else {
//     console.log('condition is false')
// }

var arr = [
    'abeer'
]

arr.push('alison', 'asdasd')
// remo0ve the values from start
// arr.shift()
// remo0ve the values from end
// arr.pop()
// arr.unshift('anderson', 'jacob')
arr = [...arr, 'anderson', 'jacob',]
// arr
// arr.splice(1,0,'ahsan')
// let narr = arr.slice(1, arr.length)
// console.log(arr.length)
// console.log(narr)
// console.log(arr)

// arr.map(function (item, i) {

//     console.log(item, i)

// })



let text = 'we had a World War II in 1912 World War II';
// console.log(text)
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }


// let val2 = var1.slice(0)
// console.log(text)

// let index = text.indexOf('z')
text = text.replace(/World War II/g, 'the second world war')


console.log(text)