const crypto = require('crypto');

const func = (baseKey) => {

    let copyKey = '';
    let ans = 0;
    let hashHex = ''

    while(!hashHex.startsWith('00000'))
    {
        ans+=1;
        copyKey = baseKey + ans;
        hashHex = crypto.createHash('md5').update(copyKey).digest('hex');
    }
    console.log(ans);
}

func('Enter key here');