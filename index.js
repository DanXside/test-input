document.addEventListener('DOMContentLoaded', function() {
    const phoneInputMain = document.querySelector('.main-input');
    const phoneInputBack = document.querySelector('.back-input');

    phoneInputMain.addEventListener('input', (e) => {
        phoneInputBack.placeholder = phoneInputBack.placeholder.replace(/[\s-)(_]/g, '');
        let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s-)(]/g, '').split('');
        if (arr.length > 0) arr.splice(0, 1, '+7 (');
        if (arr.length > 4) arr.splice(4, 0, ') ');
        if (arr.length > 8) arr.splice(8, 0, '-');
        if (arr.length > 11) arr.splice(11, 0, '-');
        e.target.value = arr.toString().replace(/[,]/g, '').slice(0, 18);
        console.log(arr);
    })
});