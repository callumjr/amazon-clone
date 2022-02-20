const emailInsert = document.querySelector('.email-insert');

emailInsert.innerHTML = `<span>${window.sessionStorage.getItem('email')}</span>`;
