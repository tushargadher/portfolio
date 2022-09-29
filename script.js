document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-go');

    if (document.querySelector('.sidebar').classList.contains('sidebar-go')) {
        setTimeout(() => {
            document.querySelector('.ham').style.display = 'inline';
        }, 400);
        document.querySelector('.cross').style.display = 'none';
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 500);

    }


})
// let check=document.getElementById('declartion');
// console.log(check);