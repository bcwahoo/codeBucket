// Get references to page elements
var $cardName = $("#card-name");
var $cardDef = $("#card-def");
var $cardExample = $("#card-example");
var $cardTopic = $("#card-topic");
var $cardSubject = $("#card-subject");
var $submitBtn = $("#submit");
var $topicList = $("#topic-list");
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
  getCard: function() {
    return $.ajax({
      url: "api/cards",
      type: "GET",
    });
  },
  deleteCard: function(id) {
    return $.ajax({
      url: "api/cards/" + id,
      type: "DELETE",
    });
  },
  getTopic: function() {
    return $.ajax({
      url: "api/topics",
      type: "GET",
    });
  },
  getSubject: function() {
    return $.ajax({
      url: "api/subjects",
      type: "GET",
    });
  }
};

// refreshTopic gets new cards from the db and repopulates the list
var refreshTopic = function() {
  API.getTopic().then(function(data) {
    var $topics = data.map(function(topic) {
      var $a = $("<a>")
        .text(topic.topicName)
        .attr("href", "/topic/" + topic.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": topic.id,
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $topicList.empty();
    $topicList.append($topics);
  });
};

// refreshSubject gets new cards from the db and repopulates the list
var refreshSubject = function() {
  API.getCards().then(function(data) {
    var $subjects = data.map(function(subject) {
      var $a = $("<a>")
        .text(subject.subjectName)
        .attr("href", "/subject/" + subject.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": subject.id,
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $subjectList.empty();
    $subjectList.append($subjects);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var card = {
    cardName: $cardName.val().trim(),
    definition: $cardDef.val().trim(),
    example: $cardExample.val().trim(),
    topic: $cardTopic.val().trim(),
    subject: $cardSubject.val().trim()
  };

  if (
    !(
      card.cardName &&
      card.definition &&
      card.example &&
      card.topic &&
      card.subject
    )
  ) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveCard(card).then(function() {
    refreshCard();
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
