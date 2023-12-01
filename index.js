
var fname = document.getElementById('Fruits or Legumes');

// type radio
function afficherOptionSelectionnee() {
    // Récupérer tous les éléments de type radio avec le nom "option"
    var radios = document.getElementsByName('option');

    // Parcourir les radios pour trouver celui qui est sélectionné
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            alert('Option sélectionnée : ' + radios[i].value);
            return; // Sortir de la fonction une fois que l'option sélectionnée est trouvée
        }
    }

    // Si aucun radio n'est sélectionné
    alert('Veuillez sélectionner une option.');
}
  // fonction search
  // Sample array for demonstration
  // name of fruits/legumes...
  var items = ["Apple", "Banana", "Orange", "Mango", "broccoli"];

  function searchForItem() {
      var searchInput = document.getElementById("searchInput").value.toLowerCase();
      var resultParagraph = document.getElementById("result");

      // Check if the input is empty
      if (searchInput.trim() === "") {
          resultParagraph.textContent = "Search for a Fruits or Legumes.";
          return;
      }

      // Search for the item in the array
      var found = items.includes(searchInput);

      // Display the result
      if (found) {
          resultParagraph.textContent = "Item found: " + searchInput;
      } else {
          resultParagraph.textContent = "Item not found: " + searchInput;
      }
  }

  // fonction Delete
  // Sample array for demonstration
  var items = ["Apple", "Banana", "Orange", "Mango", "broccoli"];

  function deleteItem() {
      var deleteInput = document.getElementById("deleteInput").value.toLowerCase();
      var resultParagraph = document.getElementById("result");

      // Check if the input is empty
      if (deleteInput.trim() === "") {
          resultParagraph.textContent = "Please  an item to delete.";
          return;
      }

      // Find the index of the item in the array
      var index = items.indexOf(deleteInput);

      // Check if the item exists in the array
      if (index !== -1) {
          // Remove the item using splice
          items.splice(index, 1);
          resultParagraph.textContent = "Item deleted: " + deleteInput;
      } else {
          resultParagraph.textContent = "Item not found: " + deleteInput;
      }

      // Display the updated array
      console.log(items);
    }
