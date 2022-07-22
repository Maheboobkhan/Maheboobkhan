var container = document.getElementById('container');

function generate(){
    for(var i =0; i<10; i++){
        var value = Math.ceil(Math.random() * 100);
        var array_ele = document.createElement('div');
        array_ele.classList.add('block');
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 60}px)`;
        // var label = document.createElement('div');
        // label.classList.add('block_id');
        // label.innerText = value;
        // array_ele.appendChild(label);
        array_ele.innerText = value;
        container.appendChild(array_ele);
    }
}

// function swap(ele1, ele2){
//     // return new Promise((resolve) => {
//         var temp = ele1;
//         ele1 = ele2;
//         ele2 = temp;
        // container.insertBefore(ele2, ele1);
        // resolve();
        // var blocks = document.querySelectorAll('.block');
        // ele1.style.backgroundColor = 'cornflowerblue';
        
        // setTimeout(() => {
        //     container.insertBefore(ele2, ele1);
        //     resolve();
        // }, 2000);
        
        
        // window.requestAnimationFrame(function(){
        //     setTimeout(() => {
        //         container.insertBefore(ele2, ele1);
        //         resolve();
        //     }, 5000);
        // })
        
    // })
// }

async function SelectionSort(){
    var blocks = document.querySelectorAll(".block");
    var num;

    var i = 0;
    // var count = 10;
    while(i<blocks.length){
        num = i;
        // blocks[i].innerText.style.marginTop = "-50px";
        blocks[i].innerHTML.Color = "#fff";
        
        // var blocks = document.querySelectorAll(".block");
        blocks[num].style.backgroundColor = "yellow";
        
        // var store;

        for(var j = i+1; j<blocks.length; j++){
            
            // store = j;
            
            blocks[j].style.backgroundColor = "red";
            blocks[j].innerHTML.marginTop = '-50px';
            blocks[j].innerText.color = "#fff";
            
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            })
        
        
            
            // var value1 = Number(blocks[j].childNodes[0].innerHTML);
        
            // var value2 = Number(blocks[num].childNodes[0].innerHTML);
        
            if(parseInt(blocks[j].style.height)<parseInt(blocks[num].style.height)){
                // if(num !==i){
                //     blocks[num].style.backgroundColor = "cornflowerblue";
                // }
                num = j;
            }
            blocks[j].style.backgroundColor = "cornflowerblue";
            // else{
            //     blocks[j].style.backgroundColor = "cornflowerblue";
            //     j++;
            // }
        }
        
        // blocks[num].style.backgroundColor = "green";
        // swap(blocks[i].innerText, blocks[num].innerText);
        // var temp1 = (blocks[num].style.height)*3;
        // var temp2 = blocks[num].childNodes[0].innerText;
        // temp1 = (blocks[i].style.height)/3;
        // blocks[num].childNodes[0].innerText = blocks[i].childNodes[0].innerText;
        // blocks[num].style.height = 100 * i+5;
        // blocks[num].style.height = (blocks[i].childNodes[0])/3;
        // blocks[i].childNodes[0].innerText = temp2;
        // blocks[i].style.height = 100 * i+5;


        // var blocks = document.querySelectorAll('.block');
        // blocks[10 - (blocks.length-i)].style.backgroundColor = "greenyellow";

        // var blocks = document.querySelectorAll('.block');
        
        // i = 10 - ((blocks.length-1) - i);

        var temp = blocks[i].style.height;
        var value = blocks[i].innerText;
        blocks[i].style.height = blocks[num].style.height;
        blocks[i].innerText = blocks[num].innerText;
        blocks[num].style.height = temp;
        blocks[num].innerText = value;

        blocks[i].style.backgroundColor = "greenyellow";

        i++;
    }
        
    
}
// function myfunc(){
    
// }

function myfunc()
{
    generate();
    SelectionSort();
    

}





// var temp1 = bars[min_idx].style.height;
//         var temp2 = bars[min_idx].childNodes[0].innerText;
//         temp1 = bars[i].style.height;
//         bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
//         bars[i].childNodes[0].innerText = temp2;










