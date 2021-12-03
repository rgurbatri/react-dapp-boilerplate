import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

// Update with the contract address logged out to the CLI when it was deployed 
const greeterAddress = "your-contract-address";

export const App = () => {
  const { ethereum } = window;
  const { abi } = Greeter;
  const [greeting, setGreetingValue] = useState();

  // request metamask account
  const requestAccount = async () => {
    await ethereum.request({ method: 'eth_requestAccounts' });
  };

  // print the greeting message
  const fetchGreeting = async () => {
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const contract = new ethers.Contract(greeterAddress, abi, provider);
      try {
        console.log('Greeting: ', await contract.greet());
      } catch (err) {
        console.log('Error: ', err);
      }
    }
  };

  // call the smart contract and send an update
  async function setGreeting() {
    if (!greeting || !ethereum) return;
    
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(greeterAddress, abi, signer);
    const transaction = await contract.setGreeting(greeting);
    setGreetingValue('');
    await transaction.wait();
    fetchGreeting();
  }

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input onChange={({target : { value }}) => setGreetingValue(value)} placeholder="Set greeting" />
      </header>
    </div>
  );
}
