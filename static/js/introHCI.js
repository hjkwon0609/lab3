'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Clicked");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);			
}

function projectClick(e){
	// prevent the page from reloading
	e.preventDefault();

	
	//In an event listener, $(this) is the element that fired the event
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
       jumbotronHeader.text(projectTitle);
    } else {
       description.toggleClass("hide");
       if($(".jumbotron h1").text() == projectTitle){
       		jumbotronHeader.text("Mark Kwon");
       }else{
       		jumbotronHeader.text(projectTitle);
       }
	}
}

function updateProject(e){
	var which = $('#project').val();
	$(which).animate({
		width: $('#width').val()
	});

	var descrip = $('#description').val();
	$(which + ' .project-description').text(descrip);
}