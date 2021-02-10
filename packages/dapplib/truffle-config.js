require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain unfold inflict clock flock ghost'; 
let testAccounts = [
"0xc94771684c8af7fab3d3fe853cb6beb600f2d2e03ba82abc54d8f78cca1bef42",
"0xdc3f61565cfa082f33d69d44f24a6f387617d34a6a31c4a20498a36ce94c6651",
"0x6059061150495d561f6524d3be47574330f9e9ed88d58a76d8f8d37a106b4b65",
"0x9ecff54ed664b0ba83fd83e702c024941ebe0390ca84eace54871f00cd1a4d5b",
"0x0118fa5c60861fdae60e2d9550c5cfe6b0b444d1dac51c94625951b57e1b854c",
"0x07369d846d67a55ba98e70ea5372e1ab5777ce800d2d42f7c78c51287c6b36bf",
"0x6263268d7b5f5507514d72b1ecefc9e41a059d75cb7b79c71a19c90bc0811884",
"0x4149ef135dea04d30ce42e2f4ff0808c7a2f7e7ed1f30928abcb7068c7d9d9ac",
"0xa4aa5491bffa2f6a62e94b51f6beee3f138a41f10869c15a0e02bd0c86c58518",
"0xedb9f7b45cfc80d60f77418f37aa68f4178fe3d5d422df037cadf733dad331f3"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
