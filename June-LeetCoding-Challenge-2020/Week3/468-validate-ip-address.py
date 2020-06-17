class Solution:
    def validIPAddress(self, IP: str) -> str:
        if IP.count('.') == 3:
            return self.validIPv4(IP)
        elif IP.count(':') == 7:
            return self.validIPv6(IP)
        else:
            return "Neither"
        
    def validIPv4(self, ip4: str) -> str:
        ip_split = ip4.split('.')
        
        for i in ip_split:
            if len(i) == 0 or len(i) > 3: # IPv4 address between 1 and 3
                return "Neither"
            if i[0] == '0' and len(i) != 1 or not i.isdigit() or int(i) > 255:
                return "Neither"
        return "IPv4"
    
    def validIPv6(self, ip6: str) -> str:
        ip_split = ip6.split(':')
        hex_digit = "0123456789abcdefABCDEF"
        for i in ip_split:
            if len(i) == 0 or len(i) > 4 or not all(c in hexdigits for c in i):
                return "Neither"
        return "IPv6"
    # TC: O(N), n is the length of ip string
    # SC: O(1)
    # Runtime: 20 ms, faster than 98.12%
    # Memory Usage: 13.9 MB, less than 41.09%