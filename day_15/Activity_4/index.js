// Activity 4: Module Pattern
// Task 6 :  closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

itemManager = (function () {
  let items = [];
  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    listItem: function () {
      return items.slice();
    },
  };
})();

itemManager.addItem("Apple");
itemManager.addItem("banana");
itemManager.addItem("papaya");

console.log(itemManager.listItem());

itemManager.removeItem("papaya");

console.log(itemManager.listItem());
