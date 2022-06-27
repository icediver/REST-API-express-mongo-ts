export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/rest-api-tutorial",
  saltWorkFactor: 10,
  //https://travistidwell.com/jsencrypt/demo/
  accesTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey:`-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgG8znSDi8RvJP117oyYjoepTw3RJ
706iSn6rlb8kci4dOw4gEuf4ECw3Y9Z/UJNMFuVZU6GyTJyfrve6oyfhvzeogxqQ
sr3p/uW45WMEoZThZAG9gdHb77HNe08EAuarFN/2tDd1OB+n30bohLjQRYqsy4ok
5lBLui+ubAZQxiOnAgMBAAE=-----END PUBLIC KEY---`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWgIBAAKBgG8znSDi8RvJP117oyYjoepTw3RJ706iSn6rlb8kci4dOw4gEuf4
ECw3Y9Z/UJNMFuVZU6GyTJyfrve6oyfhvzeogxqQsr3p/uW45WMEoZThZAG9gdHb
77HNe08EAuarFN/2tDd1OB+n30bohLjQRYqsy4ok5lBLui+ubAZQxiOnAgMBAAEC
gYAbuh3itlNyHzLqh0p91wKnX+1rUIgX7kVu4i+7ckX6E5XHBt5P8r1tmP4O3L3l
jGJlG2nL9p49q19AK8xExHgd/RXVR3zEAlSg1f1w/5PbaWxp79aLPCUAPkoq8LeK
8bk63iCuPU+szB7jKJh0R4szNn8kiujB0cfxSqRitMitIQJBANaBcgL9jm/uk2VA
Buxkmc8Bkgi4XuGxmsNA0virDEyMxidv1BIaxMK+KaeMNAYxcN+BOK3I+NVf7kji
zNt5vBcCQQCEtnCOzb39bgifp1F1A+TCRU6xmWJkWG8wSmnTkHG/LFXKIr9Q6XeZ
O2HJFYTGE35eEiuVdIcgOVb9tMFP5b7xAkAdm6R3ETSV8qJZuWq7Om+YiSj1Fy3R
jUhFZy83r7R05IF9dAwbq6I5FzJ8s/eCW1SvJREDu9fM6/7iBJwuNzFlAkBKCkrD
sQ9FG6VeBQgSA4kVxXsA5HUbTKdDxtBBwz1ijcaTDk20Q3yBFbsZZ5L6uxduPi7o
o+lbVgItazHKdH/RAkBUIksOvwDYk8ybeEBKCFwlyZVfP5SlXi08y/8al3V1RKJh
XKOq25fVIlSEIOTxk8WFKKozBDXfvH2b+xbDyeBD
-----END RSA PRIVATE KEY-----`,
}