# Router Details

**Router** helps create handlers for certain API endpoints. In this case, the router will handle requests that come to `/records` and deals with anything we have in our MongoDB database.

## GET /

This endpoint just simply gets all the records from the database collection `records`. If there is an issue getting database records, it will return an error.

## GET /:id

This endpoint will attempt to get a record under the `id` given in the endpoint. This is known as a _request parameter_ and can be gathered with the `req.params` object. It will be used to search the database using the `.findOne` method on `collection`. If nothing is found, it returns a 404 error.

## POST /

This is the endpoint used to push new objects into the MongoDB database. Since MongoDB is a NoSQL document store, as opposed to a SQL relational database, it does not care all that much about data structure (NoSQL databases are filled with _unstructured data_). If there was an issue inserting it, the request will err out and return a 500.
> If the user desires, you can use TypeScript to manage data structure to ensure the users actually do submit the data necessary. MongoDB will not handle this because is is _unstructured_

## PATCH /:id

Once again, using route parameters in order to update specific records. Here, however, we use a `PATCH` instead of a `GET` because `PATCH` signifies a data change or update to a record. 
>While mostly semantic, this follows traditional REST API rules and is a very good rule of thumb to follow. For more information on HTTP Request Methods, [read here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods).
This endpoint uses the `id` passed in to search the database collection and update the object based on the updates passed in. If there was a problem updating, the request will err out and log the error to the console.

## DELETE /:id

This final endpoint uses the `id` route parameter one last time, only this time, we use `DELETE` because we intend to delete the record from the database. If it fails, it errs out and logs it to the console.