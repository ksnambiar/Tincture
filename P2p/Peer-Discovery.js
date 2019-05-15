//bootstrap nods implementation
const PeerInfo = require('peer-info')
const waterfall = require('async/waterfall')
const {MyBundle} = require("./Network-Bundle/Tinct-Bundle");
let node

waterfall([
  (cb) => PeerInfo.create(cb),
  (peerInfo, cb) => {
    console.log(cb,peerInfo)
    peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0')
    node = new MyBundle({
      peerInfo
    })
    node.start(cb)
  }
], (err) => {
  if (err) { throw err }

  node.on('peer:discovery', (peer) => {
    // No need to dial, autoDial is on
    console.log('Discovered:', peer.id.toB58String())
  })

  node.on('peer:connect', (peer) => {
    console.log('Connection established to:', peer.id.toB58String())
    console.log(peer)
  })
})
 
    // "/ip4/104.236.179.241/tcp/4001/p2p/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM",
    // "/ip4/162.243.248.213/tcp/4001/p2p/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm",
    // "/ip4/128.199.219.111/tcp/4001/p2p/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu",
    // "/ip4/104.236.76.40/tcp/4001/p2p/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64",
    // "/ip4/178.62.158.247/tcp/4001/p2p/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd",
    // "/ip4/178.62.61.185/tcp/4001/p2p/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3",
    // "/ip4/104.236.151.122/tcp/4001/p2p/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx"