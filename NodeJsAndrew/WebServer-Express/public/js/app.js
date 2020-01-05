console.log('Client Side JS file')

document.getElementById('hero-msg').addEventListener('mouseover', () => {
    document.getElementById('hero-msg').innerHTML = 'Hello Moto';
});

document.getElementById('hero-msg').addEventListener('mouseout', () => {
    document.getElementById('hero-msg').innerHTML = 'From a Static file';
});

document.getElementById('btn').addEventListener('click' , () => {
    document.getElementById('hero-msg').innerHTML = 'Btn Clicked';
})