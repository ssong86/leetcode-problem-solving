/**
 * @param {string} IP
 * @return {string}
 * Runtime: 48 ms, faster than 96.48% of JavaScript online submissions for Validate IP Address.
 * Memory Usage: 33.6 MB, less than 77.98% of JavaScript online submissions for Validate IP Address.
 * Screw TC & SC
 */

const INVALID = "Neither";
const IPv4 = "IPv4";
const IPv6 = "IPv6";

var validIPAddress = function(IP) {
    if (!IP) {
        return INVALID;
    }

    const segmentsIPv4 = IP.split(".");
    const segmentsIPv6 = IP.split(":");

    if (segmentsIPv4.length === 4 && segmentsIPv6.length !== 8) {
        return validate(segmentsIPv4, IPv4) ? IPv4 : INVALID;
    } else if (segmentsIPv4.length !== 4 && segmentsIPv6.length === 8) {
        return validate(segmentsIPv6, IPv6) ? IPv6 : INVALID;
    } else {
        return INVALID;
    }
};

function validate (segments, type) {
    return segments.reduce((acc, seg) => {
        if (!acc) {
            return acc;
        }

        if (!seg || seg.length === 0) {
            return false;
        }

        if (type === IPv4) {
            if (seg.indexOf('0') === 0 && seg.length > 1) {
                return false;
            } else {
                if (seg.search(/[^0-9]/) > -1) {
                    return false;
                } else {
                    return parseInt(seg) >= 0 && parseInt(seg) <= 255
                }
            }
        }

        if (type === IPv6) {
            if (seg.length > 4) {
                return false;
            } else {
                return seg.search(/[^0-9^A-F^a-f]/) === -1;
            }
        }
    }, true);
}