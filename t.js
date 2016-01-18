var s = 'callback( {"client_id":"101283445","openid":"CAC2EDCB3C5239FB707BD19A0828361E"} );';

var result = s.match(/"openid":"([\s\S]+)"/)[1];
console.log(result[1]);