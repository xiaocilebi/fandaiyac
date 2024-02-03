function FindProxyForURL(url, host) {
    // 指定需要通过代理访问的域名列表
    var proxy_domains = ["yh.achuanai.com"];

    // 代理服务器的地址和端口
    var proxy = "PROXY 18.167.37.103:5555";

    // 遍历域名列表，如果当前请求的域名在列表中，则通过代理服务器转发
    for (var i = 0; i < proxy_domains.length; i++) {
        if (shExpMatch(host, proxy_domains[i])) {
            return proxy;
        }
    }

    // 其他请求直接访问
    return "DIRECT";
}