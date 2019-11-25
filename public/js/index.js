// Get references to page elements
var $cardName = $("#card-name");
var $cardDef = $("#card-def");
var $cardExample = $("#card-example");
var $cardTopic = $("#card-topic");
var $cardSubject = $("#card-subject");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var $subjectList = $("#subject-list");
var $cardList = $("#card-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveCard: function(card) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json",
      },
      type: "POST",
      url: "api/cards",
      data: JSON.stringify(card)
    });
  },
  getCards: function() {
    return $.ajax({
      url: "api/cards",
      type: "GET",
    });
  },
  deleteCards: function(id) {
    return $.ajax({
      url: "api/cards/" + id,
      type: "DELETE",
    });
  }
};

// refreshCards gets new cards from the db and repopulates the list
var refreshCards = function() {
  API.getCards().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id,
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    name: $cardName.val().trim(),
    definition: $cardDef.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $cardName.val("");
  $cardDef.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
