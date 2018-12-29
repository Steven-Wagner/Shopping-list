function newEntry () {
    $('form').submit(function (event) {
        event.preventDefault();
        let newItem = $(this).find('input[name="shopping-list-entry"]').val();
        addItemToList (newItem);
    })
}
function addItemToList (newItem) {
    $('.shopping-list').append(
    `<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
    </li>`
    )
}
function deleteEntry () {
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
    })
}

function checkUncheck () {
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
}

function shoppingList() {
    newEntry ();
    deleteEntry();
    checkUncheck();
}
$(shoppingList);