const DECODE_PWD = 'pol3PaitQuei2ief'
const CryptoJS = require('crypto-js');

//upgrade=CryptoJS.AES.encrypt("upgrade_miner.sh", DECODE_PWD).toString();
upgrade=CryptoJS.AES.encrypt("get_helium_upgrade_info.sh", DECODE_PWD).toString();
'U2FsdGVkX1+4DuKN03H3v3yXO5Lti1bqRAiA3GixNHvCySUgZL8T8CkJUPd+6RjM'
encodeURIComponent('U2FsdGVkX1+4DuKN03H3v3yXO5Lti1bqRAiA3GixNHvCySUgZL8T8CkJUPd+6RjM')
'U2FsdGVkX1%2B4DuKN03H3v3yXO5Lti1bqRAiA3GixNHvCySUgZL8T8CkJUPd%2B6RjM'
console.log(encodeURIComponent(upgrade))

upgrade=CryptoJS.AES.encrypt("helium_hw_check.sh", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))

upgrade=CryptoJS.AES.encrypt("test.sh", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))

upgrade=CryptoJS.AES.encrypt("load_snapshot.sh", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))

upgrade=CryptoJS.AES.encrypt("api_touch_deeper_eject.sh", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))


console.log("\nset miner region ")
upgrade=CryptoJS.AES.encrypt("set_miner_region.sh CN470", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))

upgrade=CryptoJS.AES.encrypt("set_miner_region.sh US915", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))

upgrade=CryptoJS.AES.encrypt("set_miner_region.sh EU868", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))

upgrade=CryptoJS.AES.encrypt("set_miner_region.sh KR920", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))

console.log("\nset pkt fwd region ")

upgrade=CryptoJS.AES.encrypt("set_pkt_fwd_region.sh CN470", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))

upgrade=CryptoJS.AES.encrypt("set_pkt_fwd_region.sh US915", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))

upgrade=CryptoJS.AES.encrypt("set_pkt_fwd_region.sh EU868", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))

upgrade=CryptoJS.AES.encrypt("set_pkt_fwd_region.sh KR920", DECODE_PWD).toString();
console.log(encodeURIComponent(upgrade))