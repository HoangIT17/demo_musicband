const buyBtns=document.querySelectorAll('.js-buy-ticket')
    const modal = document.querySelector('.js-modal')
    const modalContainer = document.querySelector('.js-modal-container')
    const modalClose=document.querySelector('.js-modal-close')

    //Hàm hiển thị modal mua vé (thêm class open vào modal)
    function showBuyTickets(){
      modal.classList.add('open')
    }
    
     //Hàm ẩn modal mua vé (gỡ bỏ class open vào modal)
    function hideBuyTickets(){
      modal.classList.remove('open')
    }

    //Lặp qua từng thẻ btn và nge hành vi click
    for (const buyBtn of buyBtns){
      buyBtn.addEventListener('click',showBuyTickets)
    }

    //Nge hành vi click và btn close
    modalClose.addEventListener('click',hideBuyTickets)

    modal.addEventListener('click',hideBuyTickets)
    modalContainer.addEventListener('click', function(event){
      event.stopPropagation();
    })