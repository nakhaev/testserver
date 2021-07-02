Test server for testing the Flask External API feature

clone:

git clone https://github.com/nakhaev/testserver.git

run:

1. npm i
2. DEBUG=testserver:* npm start (Linux)
3. set DEBUG=testserver:* & npm start (Windows)

endpoints:

http://localhost:3000/test/string

http://localhost:3000/test/object-string

http://localhost:3000/test/number

http://localhost:3000/test/object-number

http://localhost:3000/test/date

http://localhost:3000/test/object-date

http://localhost:3000/test/boolean-false

http://localhost:3000/test/boolean-true

http://localhost:3000/test/not-exist

http://localhost:3000/test/array-empty

http://localhost:3000/test/array

http://localhost:3000/test/object-empty

http://localhost:3000/test/object

http://localhost:3000/test/api-error

http://localhost:3000/test/options

http://localhost:3000/test/options-duplicate

usage:

set get(endpoint)[result] as the expression