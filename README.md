# Schulnetz.Baden.Server
NodeJS API for SchulNETz.Baden

# Requirements
* Mono (mono-complete package) or .NET
* NodeJS
* X-Server or any other window server on the running machine; this means all headless setups will fail!

# Installation
Compile [SchulNETz.Baden](https://github.com/ioncodes/SchulNETz.Baden).
```
git clone https://github.com/ioncodes/Schulnetz.Baden.Server
```
Copy SchulNETz.exe to the root folder of Schulnetz.Baden.Server
```
npm install
node .
```

# Usage
It's running on port 6969.
Endpoint is /api/createAbsence
Parameters:
* mode: mode can be login (then you will need to set the next to paramaters) or whatever you want else, just use file to be on the safe side.
* user: your Schulnetz username
* pass: your Schulnetz password

To use mode 'file' please create 'account.json' in the root folder and fill it like this:
```json
{"user":"<your-username>":"pass":"<your-password>"}
```
