require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth ridge prosper install fork tattoo genuine'; 
let testAccounts = [
"0x9bdf7e8511e9692ee051af71af3adcad31a4fbe87a7045da532ec8f05a3c3aa3",
"0x54ed8b614663ca854d12dcc60ca0fa72fe5d9db22cb9245d155e2d2aaf5f86dd",
"0x0ba629b8679093dd5b650903affc1a428567b3f0f893eefe7c64732574dc44c5",
"0x7c42a3ab059114055b59c5558ac44dc7043b3d6d8f64ead33ca6b27d6fb647fd",
"0xb2e524912b7aee72ba3bfd05c015881faa355a7640143b46eec7d0647a2082d9",
"0xa8171da566e96b836ce7dc6ed7dc1e42074157b9913022d0ab8acc497eb436d9",
"0xd04f119f6f9b23f5c0a3d425d4cd630afa02f8aeca14abe9a6b19c423ba7c62f",
"0x4c4d6551ea0de647a9a2c5af6e0a4c7d189a098ff5d7090e67813446b675970b",
"0x5fffcff99514d4987a186f3284eb70abb718a778aebb1740173b495ca7b3316a",
"0x9ed7fe0c3addd1444679a6e454e06ec61820b86d5808db67cb1ed31d84a430e4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


