# Develop a Raffle Draw Project using Express and Node JS

Create a simple raffle draw api, where we can create read update delete tickets using REST API

## RAW Requirements 
- Sell lottery ticket
- Update lottery ticket
- Delete lottery ticket
- get all lottery ticket
- get lottery ticket by id
- get lottery ticket by username
- bulk buy ( user can buy multiple ticket )
- Raffle Draw

## Ticket Features
- Ticket ID
- Username
- Price
- Timestamp 



## Require Routes

- /tickets - GET - where we can see all available tickets
- /tickets/sell - POST - Create new Ticket
- /ticket/bulk - POST - Create Bulk Ticket

- /ticket/t/:ticketID - GET - find ticket by id
- /ticket/t/:ticketID - PATCH - update ticket by ticket id
- /ticket/t/:ticketID - DELETE - Delete Ticket by Ticket ID

- /ticket/u/:username - GET - Get all ticket by username
- /ticket/u/:username - PATCH - Update ticket by username
- /ticket/u/:username - DELETE - Delete ticket by username
