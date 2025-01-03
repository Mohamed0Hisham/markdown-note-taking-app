5. Markdown Note-taking App
   Difficulty: Moderate

Skills and technologies used: Text processing, Markdown libraries, persistent storage, REST API with file upload.

Markdown Note-taking App

You’ve been building APIs all this time, so that concept alone should not be a problem by now. However, we’re increasing the difficulty by allowing file uploads through your RESTful API. You’ll need to understand how that part works inside a RESTful environment and then figure out a strategy to store those files while avoiding name collisions.

You’ll also have to process the text in the following ways:

You’ll provide an endpoint to check the grammar of the note.
You’ll also provide an endpoint to save the note that can be passed in as Markdown text.
Return the HTML version of the Markdown note (rendered note) through another endpoint.
As a recommendation, if you’re using JavaScript for this particular project, you could use a library such as Multer, which is a Node.js module.
