#!/bin/bash

# Install dependencies
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

# Continue with the main command
exec "$@"
