var arr = [0,1,2,3,4,5,6,7,8]
var board = ["","","","","","","","",""]
var curr_turn

document.getElementById("x").addEventListener("click",result);
document.getElementById("o").addEventListener("click",result);

function result(event){
    document.getElementById("x").removeEventListener("click",result);
    document.getElementById("o").removeEventListener("click",result);
    document.getElementById("turn").innerHTML="You are : " +event.target.id.toUpperCase()
    curr_turn = event.target.id
    document.getElementById("current-turn").innerHTML="Your Turn"
    document.getElementById("b0").addEventListener("click",add);
    document.getElementById("b1").addEventListener("click",add);
    document.getElementById("b2").addEventListener("click",add);
    document.getElementById("b3").addEventListener("click",add);
    document.getElementById("b4").addEventListener("click",add);
    document.getElementById("b5").addEventListener("click",add);
    document.getElementById("b6").addEventListener("click",add);
    document.getElementById("b7").addEventListener("click",add);
    document.getElementById("b8").addEventListener("click",add);
}

async function add(event){
    const id = event.target.id
    console.log(id)
    var image =document.getElementById(id)
    var number = Number(id[1])
    var index = arr.indexOf(number)
    console.log("index:",index)
    if(curr_turn == 'x'){
        arr.splice(index,1)
        board[number] = curr_turn
        image.querySelector('img').src='images/x.png'
        document.getElementById("current-turn").innerHTML="A.I Turn"
        image.removeEventListener("click",result);
        console.log(await check())
        if( (!await check()) && arr.length>0){
            index = (Math.floor(Math.random() * arr.length))
            board[arr[index]] = 'o'
            image =document.getElementById('b'+arr[index])
            arr.splice(index,1)
            image.querySelector('img').src='images/o.png'
            document.getElementById("current-turn").innerHTML="Your Turn"
            image.removeEventListener("click",result);
        }
        else{
            var choice = document.querySelectorAll('button')
            console.log(choice)
            choice.forEach(choice => choice.removeEventListener("click",result));
            }
        await check()
    }
    else if(curr_turn == 'o'){
        arr.splice(index,1)
        board[number] = curr_turn
        image.querySelector('img').src='images/o.png'
        document.getElementById("current-turn").innerHTML="A.I Turn"
        image.removeEventListener("click",result);
        if( (!await check()) && arr.length>0){
            index = (Math.floor(Math.random() * arr.length))
            board[arr[index]] = 'x'
            image =document.getElementById('b'+arr[index])
            console.log(image)
            arr.splice(index,1)
            image.querySelector('img').src='images/x.png'
            document.getElementById("current-turn").innerHTML="Your Turn"
            image.removeEventListener("click",result);
        }
        else{
        var choice = document.querySelectorAll('button')
        console.log(choice)
        choice.forEach(choice => choice.removeEventListener("click",result));
        }
        await check()        
    }
    
}
async function remove_listener(){
    
}

async function check(){
    const winner = await check_winner()
    if(winner =='x'){
        document.getElementById('winner').innerHTML = "X Wins!"
        const choice = document.querySelectorAll('button')
        console.log(choice)
        choice.forEach(choice => choice.removeEventListener("click",remove_listener));
        return true;
    }
    else if(winner =='o'){
        document.getElementById('winner').innerHTML = "O Wins!"
        const choice = document.querySelectorAll('button')
        console.log(choice)
        choice.forEach(choice => choice.removeEventListener("click",remove_listener));
        return true;
    }
    else if(arr.length == 0){
        document.getElementById('winner').innerHTML = "Draw!!!!!!"
        return true;
    }
    return false;
}
async function check_winner(){
    console.log(board)
    if(board[0]!=="" && (board[0]===board[1] && board[1] ===board[2])){
        return board[0];
    }
    else if(board[3]!=="" && (board[3]===board[4] && board[4]===board[5])){
        return board[3];
    }
    else if(board[6]!=="" && (board[6]===board[7] && board[7]===board[8])){
        return board[6];
    }
    else if(board[0]!=="" && (board[0]===board[3] && board[3]===board[6])){
        return board[0];
    }
    else if(board[1]!=="" && (board[1]===board[4] && board[4]===board[7])){
        return board[1];
    }
    else if(board[2]!=="" && (board[2]===board[5] && board[5]===board[8])){
        return board[2];
    }
    else if(board[0]!=="" && board[0]===board[4] && board[4]===board[8]){
        return board[0];
    }
    else if(board[2]!=="" && board[2]===board[4] && board[4]===board[6]){
        return board[2];
    }
    return "";
}