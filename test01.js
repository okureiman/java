// var a = 1;
// var b = 2;
// var c = a + b;
// alert(c);

// var A = 'りんご';
// var B = 'バナナ';
// var C = A + B;
// alert(C);

// var fruits = ['りんご', 'バナナ'];
// alert(fruits[0]); 
// alert(fruits[1]); 

// var fruits = {'name': 'りんご', 'price': 100};
// alert(fruits['name']);  
// alert(fruits.name);     
// alert(fruits['price']); 
// alert(fruits.price);    

// var fruits = [
//   {'name': 'りんご', 'price': 100},  
//   {'name': 'バナナ', 'price': 150},  
//   {'name': 'いちご', 'price': 200}   
// ];
// alert(fruits[1].price);

// var answer = prompt('1 + 1 は？');
// alert(answer);

// var answer = prompt('1 + 1 は？');
// if (answer == 2) {
//   alert('正解');
// } else {
//   alert('不正解');
// }
// var answer = prompt('りんごとバナナのどちらが好きですか？');
// switch (answer) {
//   case 'りんご':
//     alert('りんごは英語でappleです');
//     break; 
//   case 'バナナ':
//     alert('バナナは英語でbananaです');
//     break; 
//   default:
//     alert('りんご or バナナを入力してください');
//     break; 
// }

// var fruits = ['りんご', 'バナナ', 'いちご', 'ぶどう', 'もも', 'キウイ', 'メロン', 'スイカ', 'みかん', 'さくらんぼ'];

// for (var i = 0; i < fruits.length; i++) {
//   alert(fruits[i]);
// }

// var fruits = ['りんご', 'バナナ', 'いちご', 'ぶどう', 'もも', 'キウイ', 'メロン', 'スイカ', 'みかん', 'さくらんぼ'];

// var i = 0;
// while (i < fruits.length) {
//   alert(fruits[i]);
//   i++; // 「i += 1」と書いても同じ
// }

// var fruits = ['りんご', 'バナナ', 'いちご', 'ぶどう', 'もも', 'キウイ', 'メロン', 'スイカ', 'みかん', 'さくらんぼ'];

// var i = 0;
// while (true) {
//   if (i >= fruits.length) {
//     break;
//   }
//   alert(fruits[i]);
//   i++;
// }

// function calc(x) {
//   return x * 2;
// }

// alert(calc(3));


//課題1,2
//課題3,4,5
var animals = ['パンダ','ライオン','キリン'];
var answer = prompt('好きな動物は？');
alert(answer);
var i = 0;
while(i<animals.length) {
    alert(animals[i]);
    i++;
}

//課題6,7
var animals = [
    {'name': 'パンダ','weight':'80kg'},
    {'name': 'ライオン','weight':'200kg'},
    {'name': 'キリン','weight':'300kg'}
    ];
    
    var answer = prompt('パンダ、ライオン、キリンの中から一つ入力してください');
    var result = animals.indexOf(answer);
    var i = 0
    while(true) {
        if(i> animals.length) {
            break;
        } else {
            if (i == result){
                alert(animals[i].weight);
            }
        }
        i++;
    }
    
    
    
//課題8