import {reactive} from "vue";
import Web3 from "web3/dist/web3.min";


export const account = reactive({
  address: "",
  networkId: 0,
  web3 : null
});

export async function loadAccount(){
  try{
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      throw("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
    account.web3 = window.web3;

    const accounts = await web3.eth.getAccounts();

    if(!accounts || !accounts.length){
      throw "Invalid accounts object";

    }
    account.address = accounts[0];
    account.networkId = await web3.eth.net.getId();

    console.log(account.address);
    console.log(account.networkId);
  }
  catch (err){
    console.error(`Failed to load account: ${err}`)
  }

}
