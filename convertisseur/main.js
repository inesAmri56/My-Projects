let dollar= document.getElementById('dollar');
let dinar = document.getElementById('dinar');
dollar.onkeyup = ()=>{
    dinar.value = dollar.value/0.319245 ;
}
dinar.onkeyup = ()=>{
    dollar.value = dinar.value*0.319245 ;
}
// let Euro= document.getElementById('EUR');
// let dinar2 = document.getElementById('dinar2');
// Euro.onkeyup= ()=>{
//     dinar2.value = Euro.value/0.311151 ;
// }
// dinar2.onkeyup= ()=>{
//     Euro.value=dinar2.value*0.311151 ;
// }
// dollar.onkeyup=function(){
//    dollar.style.backgroundColor='red';
// }
// let check = document.getElementById('check');
// check.onclick = function(){
//  check.document.body.style.backgroundColor='dark';
// }
// let btn=document.getElementById('btn');
// btn.addEventListener('click',function(){
//     document.body.style.color='blue';
// })
// let btn= document.getElementById('btn');
// btn.onclick=() =>{
//     document.body.style.backgroundColor ='blue'

// }
// let btn1= document.getElementById('btn1');
// btn1.onclick=() =>{
//     document.body.style.backgroundColor='pink';
// }
// click()
// // btn.onclick=() =>{
// //     document.body.style.backgroundColor ='pink'

// // }
// // function click(){
    

// //   window.stylebackgroundColor='black'
// // }
// // //************************* */
// // let before = document.getElementById('before')
// // let after = document.getElementById('after');
// // let content = document.getElementById('content');
// // let append = document.getElementById('append')
// // let container = document.getElementById('container');
// // container.style.backgroundColor='pink'
// // container.style.height='100px'
// // container.style.width='500px'
// // after.onclick = function(){
// //     container.after(content);
// // }
// // before.onclick = function(){
// //     container.before(content);
// // }
// // append.onclick=function(){
// //     container.append(content);
// // }
// let btnopen=document.getElementById('open');
// let btnclose = document.getElementById('close');
// let container= document.querySelector('.container');
// btnclose.onclick = function(){
//     container.classList.add('hide');
//     this.classList.add('hide')
//     btnopen.classList.remove('hide')
// }
// btnopen.onclick=function(){
//     btnopen.classList.add('hide')
//     container.classList.remove('hide')
//     btnclose.classList.remove('hide')
// }
//remove add ,toggle tkhdemli zouz
