// import React, { useState, useEffect } from 'react';
// import Peer from 'simple-peer';

// function App() {
//   const [peer, setPeer] = useState(null);
//   const [contact, setContact] = useState('');

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       window.process = {
//         env: { NODE_ENV: 'production' },
//         nextTick: function(callback) {
//           setTimeout(callback, 0);
//         }
//       };
//     }
//   }, []);

//   // Function to request a Bluetooth device
//   async function requestDevice() {
//     try {
//       const device = await navigator.bluetooth.requestDevice({
//         acceptAllDevices: true,
//         optionalServices: ['battery_service']
//       });
//       console.log('Device:', device);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   // Function to create a WebRTC peer
//   function createPeer(initiator) {
//     const peer = new Peer({ initiator, config: { iceServers: [] }, wrtc: { RTCPeerConnection: window.RTCPeerConnection } });

//     peer.on('signal', data => {
//       // Send this data to the other peer
//       console.log('Signal data:', data);
//     });

//     peer.on('connect', () => {
//       console.log('Connected');
//     });

//     peer.on('data', data => {
//       receiveContact(data);
//     });

//     return peer;
//   }

//   // Function to send contact information
//   function sendContact(peer, contact) {
//     peer.send(JSON.stringify(contact));
//   }

//   // Function to receive contact information
//   function receiveContact(data) {
//     const contact = JSON.parse(data);
//     console.log('Received contact:', contact);
//   }

//   // Function to start sharing process
//   const startSharing = () => {
//     requestDevice();
//     const newPeer = createPeer(true);
//     setPeer(newPeer);
//   };

//   return (
//     <div>
//       <button onClick={startSharing}>Share Contact</button>
//       {peer && (
//         <div>
//           <input
//             type="text"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             placeholder="Enter contact info"
//           />
//           <button onClick={() => sendContact(peer, contact)}>Send</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
