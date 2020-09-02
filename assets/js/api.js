var baseUrl = '',//api
    url = '', //域名
    passportIp = '',
    passportUrl = '',//passport
    domain =  '',
    version = '',//随机版本
    timeline = new Date().valueOf();//随机戳


switch (process.env.NODE_ENV) {
    case 'development':
        //baseUrl = "http://172.16.2.11:8888";
        //baseUrl = "http://172.16.3.244:8888";//eric服务器
        //baseUrl = "http://172.16.2.118:8888";//Ruby服务器
        baseUrl = 'http://192.168.2.126:8888/';
        url = 'http://vd.local.ivedeng.com:8101';
        passportIp = 'http://qa.passport.ivedeng.com/';
        passportUrl = 'http://qa.passport.ivedeng.com/';
        domain = '.ivedeng.com';
        version = timeline;
        break;
    case 'test':
        baseUrl = 'http://192.168.2.126:8888/'  //测试环境url
        version = timeline;
        url = 'http://qa.vd.ivedeng.com';
        passportIp = 'http://qa.passport.ivedeng.com/';
        passportUrl = 'http://qa.passport.ivedeng.com/';
        domain = '.ivedeng.com';
        break;
    case 'production':
        baseUrl = 'http://inter-vd.vedeng.com'   //生产环境url
        version = timeline;
        url = 'https://www.vedeng.com';
        passportIp = 'https://newpassport.vedeng.com/';
        passportUrl = 'https://newpassport.vedeng.com/';
        domain = '.vedeng.com';
        break;
    case 'production_p':
        baseUrl = 'http://172.16.161.109:8888'   //生产环境url
        version = timeline;
        url = 'https://www.vedeng.com';
        passportIp = 'http://172.16.161.109:8480/';
        passportUrl = 'https://newpassport.vedeng.com/';
        domain = '.vedeng.com';
        break;
}

export default {
    baseUrl, url, passportIp, passportUrl, domain, version
}
