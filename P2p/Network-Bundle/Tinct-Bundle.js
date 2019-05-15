const libp2p = require('libp2p')
const TCP = require('libp2p-tcp')
const Mplex = require('libp2p-mplex')
const SECIO = require('libp2p-secio')
const defaultsDeep = require('@nodeutils/defaults-deep')
let fs = require("fs");
const Bootstrap = require('libp2p-bootstrap')
const bootstrapers=JSON.parse(fs.readFileSync(__dirname+"/../../configFiles/bootstrap-nodes.json"))

class MyBundle extends libp2p{
    constructor(_options){
        const defaults={
            modules:{
                transport: [TCP],
                streamMuxer: [Mplex],
                connEncryption: [SECIO],
                peerDiscovery: [Bootstrap]
            },
            config:{
                peerDiscovery:{
                    bootstrap:{
                        interval:2000,
                        enabled:true,
                        list:bootstrapers
                    }
                }
            }
        }
        super(defaultsDeep(_options,defaults))
    }
}

module.exports={
    MyBundle
}