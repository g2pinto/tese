echo "hello from the script"

export PATH=$PATH:/usr/local/go/bin
export PATH=/home/gustavo/go/src/github.com/g2pinto/fabric-samples/test-network/../bin:$PATH
export FABRIC_CFG_PATH=/home/gustavo/go/src/github.com/g2pinto/fabric-samples/test-network/../config/
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_MSPCONFIGPATH=/home/gustavo/go/src/github.com/g2pinto/fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
export CORE_PEER_TLS_ROOTCERT_FILE=/home/gustavo/go/src/github.com/g2pinto/fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
export CORE_PEER_ADDRESS=localhost:7051
export CORE_PEER_TLS_ENABLED=true

cd /home/gustavo/go/src/github.com/g2pinto/fabric-samples/test-network/

echo "'$1'"
echo "'$2'"
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n remade --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"VotePoll","Args":["'$1'","'$2'"]}'

