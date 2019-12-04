//BUDGET CONTROLLER
var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, value) {
      var newItem, ID;

      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      if (type === "exp") {
        newItem = new Expense(ID, des, value);
      } else if (type === "inc") {
        newItem = new Income(ID, des, value);
      }
      data.allItems[type].push(newItem);

      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };
})();

//UI CONTROLLER
var UIController = (function() {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expenseContainer: ".expenses__list"
  };

  return {
    getInput: function() {
      var type = document.querySelector(DOMStrings.inputType).value; // either inc or exp
      var description = document.querySelector(DOMStrings.inputDescription)
        .value;
      var value = document.querySelector(DOMStrings.inputValue).value;
      return {
        type: type,
        description: description,
        value: value
      };
    },
    getDOMStrings: function() {
      return DOMStrings;
    },

    addListItem: function(obj, type) {
      var html, newHtml, element;
      //Create HTML string with placeholder text

      if (type === "inc") {
        element = DOMStrings.incomeContainer;
        html =
          '<div class="item clearfix" id="income-%id%">\
        <div class="item__description">%description%</div>\
        <div class="right clearfix">\
          <div class="item__value">%value%</div>\
          <div class="item__delete">\
            <button class="item__delete--btn">\
              <i class="ion-ios-close-outline"></i>\
            </button>\
          </div>\
        </div>\
      </div>';
      } else {
        element = DOMStrings.expenseContainer;
        html =
          '<div class="item clearfix" id="expense-%id%">\
        <div class="item__description">%description%</div>\
        <div class="right clearfix">\
          <div class="item__value">%value%</div>\
          <div class="item__percentage">21%</div>\
          <div class="item__delete">\
            <button class="item__delete--btn">\
              <i class="ion-ios-close-outline"></i>\
            </button>\
          </div>\
        </div>\
      </div>';
      }
      //Replace the placeholder text with some actual data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);
      //Insert HTML into DOM

      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },
    clearFields: function() {
      var fields, fieldsArray;
      fields = document.querySelectorAll(
        DOMStrings.inputDescription + "," + DOMStrings.inputValue
      );
      fieldsArray = Array.prototype.slice.call(fields);
      fieldsArray.forEach(function(current, index, array) {
        current.value = "";
      });

      fieldsArray[0].focus();
    }
  };
})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMStrings();
  var setUpEventListeners = function() {
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    var input, newItem;
    //1. Get the field input data
    input = UICtrl.getInput();
    console.log(input);
    //2. Add the item to the budget controller
    newItem = budgetController.addItem(
      input.type,
      input.description,
      input.value
    );
    //3. Add the new item to the user interface
    UICtrl.addListItem(newItem, input.type);
    UICtrl.clearFields();
    //4. Calculate budget
    //5. Display the budget
  };

  return {
    init: function() {
      console.log("Application has started");
      setUpEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
