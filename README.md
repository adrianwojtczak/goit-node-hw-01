# Contact Management Commands

Here are the commands to interact with the Contact Management application. You can use these commands to perform various actions related to contacts.

## List Contacts

To retrieve and display the entire list of contacts as a table (console.table), use the following command:

`node index.js --action list`

![Contact list](assets/list.jpg)

## Get Contact by ID

To retrieve and display a contact by its ID, use the following command:

`node index.js --action get --id 05olLMgyVQdWRwgKfg5J6`

![Get contact by Id](assets/get.jpg)

## Add Contact

To add a new contact, use the following command:

`node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22`

![Add new contact](assets/add.jpg)

## Remove Contact

To remove a contact by its ID, use the following command:

`node index.js --action remove --id qdggE76Jtbfd9eWJHrssH`

![Remove contact](assets//remove.jpg)

Please replace the placeholders like --id, --name, --email, and --phone with actual values when using these commands.
