// 点击谁就给谁绑定外观


// var lis = tab[0].getElementsByTagName('li');

// for (var i = 0; i < lis.length; i++) {
//     lis[i].addEventListener('click', function() {
//         for (var i = 0; i < lis.length; i++) {
//             lis[i].style.backgroundColor = '';
//         }
//         this.style.backgroundColor = 'red';
//     })
// }
var tab = document.querySelector('.tab_list');
var lis = tab.querySelectorAll('li');
var as = tab.querySelectorAll('a');
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.backgroundColor = '';
        }
        for (var i = 0; i < as.length; i++) {
            as[i].style.color = '#666';
            as[i].style.textDecoration = 'none';
        }
        this.style.backgroundColor = 'rgb(54,54,54)';
    })
}