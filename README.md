# Social Networking API

## Table of contents
* [Description](#description)
* [Screenshots](#screenshots)
* [Built with](#built-with)
* [How it works](#how-it-works)
* [License](#license)

## Description
  The Social Networking API is used to connect users. The users can share their thoughts and can even give their reactions to thoughts shared by other users. This API also has the provision to add or remove friends and reactions.
  
## Screenshots

![image](https://user-images.githubusercontent.com/65467469/167281895-4068ef07-337c-4b84-9568-41d327a09df6.png)

![image](https://user-images.githubusercontent.com/65467469/167281906-c1fd98ee-1d4e-4be0-9559-96ffd65c8793.png)

To watch a demo of the API follow URL : https://drive.google.com/file/d/1u_Ba5hxnmon3rWFPR4njB71gdr6bjzGP/view

## Built with
This application is built using :
* JavaScript
* Express
* Mongo DB
* Mongoose ODM 

## How it works
1. Run command:
	* npm I 
2. Run command: 
	* npm run start

3.	Check all API routes in Insomnia
	* GET route to find all users :  (/api/users)
	* GET route to find a user by Id: (/api/users/:id)
	* POST route to create a new user:  (/api/users)
	* PUT route to update a user: (/api/users/:id)
	* DELETE route to delete a user: (/api/users/:id)

	* GET route to get all thoughts:  (/api/thoughts)
	* GET route to find a thought by Id:  (/api/thoughts/:id)
	* POST route to create a new thought:  (/api/thoughts)
	* PUT route to update a thought:  (/api/thoughts/:id)
	* DELETE route to delete a thought:  (/api/thoughts/:id)

	* POST route to add a friend:  (/api/users/:userId/friends/:friendId)
	* DELETE route to delete a friend: (/api/users/:userId/friends/:friendId)

	* POST route to add a reaction: (/api/thoughts/:thoughtId/reactions)
	* DELETE route to delete a reaction: (/api/thoughts/:thoughtId/reactions/:reactionId)

## License
 This application is licensed under the [MIT]( https://github.com/pdhende/social-networking-API/blob/main/LICENSE) license.
