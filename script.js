let showMoreButton = document.querySelector('.button');
let hiddenItems = document.querySelectorAll('.hidden-item',);
let hiddenItemsTablet=document.querySelectorAll('.tablet__hidden-item',);

showMoreButton.addEventListener('click', function(){

    if(showMoreButton.classList[1] === 'show-more'){

        showMoreButton.classList.remove('show-more');
        showMoreButton.classList.add('hide-more');
        showMoreButton.innerHTML = "Скрыть";

        for(i=0; i < hiddenItems.length; i++){
            hiddenItemsTablet[i].classList.remove('tablet__hidden-item')
            hiddenItems[i].classList.remove('hidden-item')
            hiddenItems[i].classList.add('showed-item')
            hiddenItemsTablet[i].classList.add('showed-item')
        }
    } else {

        showMoreButton.classList.remove('hide-more');
        showMoreButton.classList.add('show-more');
        showMoreButton.innerHTML = "Показать всё";

        for(i=0; i < hiddenItems.length; i++){
            hiddenItemsTablet[i].classList.remove('showed-item')
            hiddenItems[i].classList.remove('showed-item')
            hiddenItems[i].classList.add('hidden-item')
            hiddenItemsTablet[i].classList.add('tablet__hidden-item')
        }
    }
});

