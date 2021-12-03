# React-Dapp-Boilerplate

## Overview
This template allows developers to quickly get started building an Ethereum decentralized application.<br>

## Prerequisites 
<ui>
  <li>Node</li>
  <li>HardHat</li>
  <li>MetaMask</li>
</ul><br>

## Steps
1. Open Terminal
2. Clone repo<br>
`git clone https://github.com/rgurbatri/react-dapp-boilerplate.git`
3. `cd` into `react-dapp-boilerplate` and install dependencies<br>
`npm install`
4. Compile the Application Binary Interface (ABI)<br>
`npx hardhat compile`
5. Import test account into MetaMask: [Setup MetaMask](#setup-metamask)
6. Deploy sample contract to local network<br>
`npx hardhat run scripts/sample-script.js --network localhost`
7. Copy generated contract address from previous step (everything after the colon)<br><br>
 <img src ="./public/contract-address.png" width="600px"/>

8. In the IDE, navigate to `src/App.js`
9. Replace <i>your-contract-address</i> with the address obtained from <b>Step 6</b><br>
10. In the terminal, navigate to the root of the project and run: `npm start`
11. If startup is successful, you have created your first decentralized application

## Setup MetaMask
1. In the terminal run: `npx hardhat node`<br>
2. Copy the private key of account/address 0 (everything after the colon)<br>
3. Open Google Chrome and click on your MetaMask extension and login<br>
4. Click on the MetaMask extension<br>
5. Login to your account<br>
6. Click the avatar in the top right and click `Import Account`<br>
7. Paste your private key in the input field<br>
8. Click import<br>
9. Continue with step 6 in the [Steps](#steps) guide<br>