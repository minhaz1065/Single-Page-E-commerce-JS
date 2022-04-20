document.getElementById('btn8').addEventListener('click', function(){
    document.getElementById('memory').innerText = 100;
    let storeit = parseFloat(document.getElementById('memory').innerText);
    let storeStorage = parseFloat(document.getElementById('storage').innerText);
    document.getElementById('field').innerText = 1290 + storeit + storeStorage;
})
document.getElementById('btn16').addEventListener('click', function(){
    document.getElementById('memory').innerText = 200;
    let storeit = parseFloat(document.getElementById('memory').innerText);
    let storeStorage = parseFloat(document.getElementById('storage').innerText);
    document.getElementById('field').innerText = 1290 + storeit + storeStorage;
})

document.getElementById('btn256').addEventListener('click', function(){
    document.getElementById('storage').innerText = 300;
    let storeMemory = parseFloat(document.getElementById('memory').innerText);
    let storeStorage = parseFloat(document.getElementById('storage').innerText);
    document.getElementById('field').innerText = 1290 + storeMemory + storeStorage;
})
document.getElementById('btn512').addEventListener('click', function(){
    document.getElementById('storage').innerText = 400;
    let storeMemory = parseFloat(document.getElementById('memory').innerText);
    let storeStorage = parseFloat(document.getElementById('storage').innerText);
    document.getElementById('field').innerText = 1290 + storeMemory + storeStorage;
})

document.getElementById('reset').addEventListener('click',function(){
    document.getElementById('f').reset();
})


