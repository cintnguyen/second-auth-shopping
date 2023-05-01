var addBtns = document.getElementsByClassName("fa-plus");
var trash = document.getElementsByClassName("fa-trash");

Array.from(addBtns).forEach(function(element) {
      element.addEventListener('click', function(){
        const itemID = this.dataset.id
        const price = this.dataset.price
        const item = this.dataset.item
        console.log(itemID)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'itemID' : itemID,
            'price' : price,
            'item' : item
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const itemID = this.dataset.id
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'itemID' : itemID,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
