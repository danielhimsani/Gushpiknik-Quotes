#!/bin/bash

# Install dependencies
npm install -g npm@10.3.0 
npm i 

# Continue with the main command
exec "$@"
