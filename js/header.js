// 导航栏高亮
var tab = document.querySelector('.tab_list');
var lis = tab.querySelectorAll('.change');
var as = tab.querySelectorAll('a');
var nav = document.querySelector('.tab_list');
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.backgroundColor = '';
        }
        for (var i = 0; i < as.length; i++) {
            as[i].style.color = '#666';
            as[i].style.textDecoration = 'none';
        }
        this.style.backgroundColor = 'rgb(54,54,54,.2)';
    })
}