const CryptoJS = require('crypto-js');
const DECODE_PWD = 'pol3PaitQuei2ief';

arg2 = CryptoJS.AES.decrypt("U2FsdGVkX1%2FuJE76I5KnDFjARJ2ZbYoc15S1kLTugl8qbSp9b6RJYVbXXcWhTC2h", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('cmd1: ', arg2);
arg2 = CryptoJS.AES.decrypt("U2FsdGVkX1%2FlR7MUSJuJ72e8gcbM1oZbBRc7JgyZ3oMQSpflQOnWOisNhWAgE7xC", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('cmd2: ', arg2);

console.log('\nget from empty server:')
arg2 = CryptoJS.AES.decrypt("U2FsdGVkX1/oxpjqXcQA6v1tXauEPk6rx0NpfImGCOA=", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('server ip: ', arg2);
arg3 = CryptoJS.AES.decrypt("U2FsdGVkX1+k7m7XJIlsQN3XUxe89CUANWUcvVp848s=", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('server port: ', arg3);
arg4 = CryptoJS.AES.decrypt("U2FsdGVkX1/QTI62Y3BKvIP68orFekw8AFQDk1SUTiE=", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('local ip: ', arg4);
arg5 = CryptoJS.AES.decrypt("U2FsdGVkX19x+RI1Pkh6Oe6vrLh/9UdyQOiWrnio71e1XG0ewk7NR3Bb3KqXxnha4J5Rpr0YBn2LZr9lKlZ0RQ==", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('client private key: ', arg5);
arg6 = CryptoJS.AES.decrypt("U2FsdGVkX18haw8dJFgmw7IJZ1AlobwioKEPA6gktjIFlHOQEqRhxwoAO9q8A0RDY01hFIwQWWvc5mOsx2UupQ==", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('server public key: ', arg6);

console.log('\nget from client server: ')
arg10 = CryptoJS.AES.decrypt("U2FsdGVkX1/hx04NwbhFblThK90lojy6vgd3k1qZ20M=", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('server ip: ', arg10);
arg3 = CryptoJS.AES.decrypt("U2FsdGVkX1+VEY+xeKL9LbxHQRWEQcN28tzLGk6xYEE=", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('server port: ', arg3);
arg4 = CryptoJS.AES.decrypt("U2FsdGVkX1/o/v8lZvcGUULv3bzFSbtDswdi9/D9xjs=", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('local ip: ', arg4);

arg8 = CryptoJS.AES.decrypt("U2FsdGVkX18EfMQa4oi3gUIbhbsGB4GpYcwtEZ3yd02FLGCtB5iHy/ilJZCWKP5yf9oHwPP02gWl8JkGznNk4Q==", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('client private key: ', arg8);

arg9 = CryptoJS.AES.decrypt("U2FsdGVkX19rLqO4Qyg1kmeDy6fJDMExOM96KzQG04FXd3ieANULzQH9znH33pkv+s/E4UnLTRc+vf4ZPvQfRQ==", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('server public key: ', arg9);



console.log('\ncommit: ')
arg2 = CryptoJS.AES.decrypt("U2FsdGVkX1/O6NfK9eLX/Nv9uDwmzbj06fIsOx3h8GA=", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('server ip: ', arg2);
arg3 = CryptoJS.AES.decrypt("U2FsdGVkX1+H8mVAXAf+bUFG+ynI8wQNPIumTLp0o74=", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('server port: ', arg3);
arg4 = CryptoJS.AES.decrypt("U2FsdGVkX190kBGBcSJgpBqYgEAmXq1wMoQdhK5e3Cw=", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('local ip: ', arg4);
arg5 = CryptoJS.AES.decrypt("U2FsdGVkX1/cch8bokLIWZ1sjDWTxW6rMyArKQC7xJ1erdoLRtNMDRoV81MSOpcAOhombtQ5E50olxVvA5mR5w==", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('client private key: ', arg5);
arg6 = CryptoJS.AES.decrypt("U2FsdGVkX19liSg1jPdmCRQETrYg4E9JQCR5YYXHzhX9NvwKhXhy9AMg+hV8dzG91AfSm46W2Sv2lDLjNS8Q8g==", DECODE_PWD).toString(CryptoJS.enc.Utf8);
console.log('server public key: ', arg6);


