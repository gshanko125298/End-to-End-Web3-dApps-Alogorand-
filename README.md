# End-to-End-Web3-dApps-Alogarand
The core conpts of this projects are to design and develope end-to-end web3 dapps with the concpts  and technology applaction of an Algorand NFTs and smart contracts.   
 As a case study 10Acodemy had taken. At present, certificates are distributed as simple PDF files, without the ability to verify their authenticity nor can 10 Academy undertake smart actions with the trainees/their contract
![image](https://user-images.githubusercontent.com/43541659/193428261-edb35ccd-b9c6-4f9e-9102-687b6ed17d27.png)


# Steps to develope Web3 dApp

This is a fast way to create and configure an Algorand development environment with Algod and Indexer.

Docker Compose MUST be installed. Instructions.

On a Windows machine, Docker Desktop comes with the necessary tools. Please see the Windows section in getting started for more details.
# Create React App
Create React apps with no build configuration.

      Creating an App – How to create a new app.
      User Guide – How to develop apps bootstrapped with Create React App.

- Create React App works on macOS, Windows, and Linux.
# Quick Overview
         npx create-react-app my-app
         cd my-app
         npm start
         
If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.
# Backend
Step1: Enter the backend directory and create and activate your environment:

       For mac/unix users:

       create: python3 -m venv env

       activate: source env/bin/activate

       For windows users:

       create: py -m venv env

       activate: .\env\Scripts\activate

       Step2: Then install the requirements using: pip install -r requirements.txt
   # Smart Contracts 
   
The Document Store repository contains both the smart contract code for document store (in /contracts) as well as the node package for using this library (in /src).
Installation

          npm i @govtechsg/document-store
          
# Usage

To use the package, you will need to provide your own Web3 provider or signer (if you are writing to the blockchain).
Deploy new document store

         const documentStore = await deployAndWait("My Document Store", signer).then(console.log);
         
         
# Setup
                        Install Dependencies
                        Install Git
                        Install Docker Desktop
                        Install Algorand sandbox
                        Copy this project without cloning:
                        git clone -b main --depth 1 --single-branch git@github.com:manustays/algorand-pyteal-smart-contract-starter-template.git && rm -rf algorand-pyteal-smart-contract-starter-template/.git/
2. Setup the Sandbox for Local Testing
3. Start Docker Desktop and goto the Sandbox folder
4. Add your project folder as bind volume in the Sandbox Docker image:
    In the Sandbox root folder, edit the file docker-compose.yml and add the following lines under the key services.algod:
   # volumes:
            - type: bind
              source: <path to this project folder>
              target: /data
5. Start the Sandbox docker container with the command: 
               ./sandbox up -v
              Other useful Sandbox commands (after starting it):
              Shut down the Sandbox: 
               ./sandbox down
              Get a list of test wallets/accounts: 
               ./sandbox goal account list
              Check the balance of an account (app account or wallet):
               ./sandbox goal balance --address <account-address>
              Reset Sandbox (including the test accounts):
               ./sandbox reset
6. Setup your Project
Goto project folder & setup Python virtual env for the project (one time only): python3 -m venv venv
                 Activate the Python virtual environment (everytime you start this project):
                 $ ./venv/Scripts/activate # Windows
                 $ ./venv/bin/activate # Linux/Mac
                 Check if virtual env is setup properly: pip -V
- It should show the path to Python executable under your project's venv folder.
- Install the python dependencies (one time only):
                    pip3 install -r requirements.txt
                    Compile & Run
Within the project folder:
- Activate the Python virtual environment (if not already done): . venv/bin/activate
- Build source files: ./build.sh contracts.<subfolder>.<filename-without-py-ext>
- Within the Sandbox folder:
         Enter the docker container terminal: ./sandbox enter algod

         Check if project’s bound volume is working: ls /data

         Get test wallet accounts: goal account list
  
